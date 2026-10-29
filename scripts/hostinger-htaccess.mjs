/**
 * Single source of truth for Apache/LiteSpeed (.htaccess) on Hostinger static hosting.
 * Written to out/.htaccess after `next build` (see postexport-fix-index.mjs).
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Day-1 consolidation map (lib/keyword-redirects.json): slug → target path, or GONE (410). */
function keywordRedirectRules() {
  const map = JSON.parse(readFileSync(join(process.cwd(), 'lib/keyword-redirects.json'), 'utf8'));
  const rule = (slug, to) =>
    to === 'GONE'
      ? `  RewriteRule ^${slug}/?$ - [G,L]`
      : `  RewriteRule ^${slug}/?$ ${to} [R=301,L]`;
  const staticPages = Object.entries(map.staticPages)
    .filter(([slug]) => slug !== 'gutters-cleaning') // already handled in Legacy paths
    .map(([slug, to]) => rule(slug, to));
  const pages = Object.entries(map.redirects)
    .filter(([slug]) => !(slug in map.staticPages))
    .map(([slug, to]) => rule(slug, to));
  return { staticPages: staticPages.join('\n'), pages: pages.join('\n'), count: pages.length };
}

/** Old blog slugs + old page paths still linked from outside (were 404 until Oct 27 2026). */
function legacyLinkRules() {
  const blog = JSON.parse(readFileSync(join(process.cwd(), 'scripts/blog-legacy-redirects.json'), 'utf8'));
  const paths = JSON.parse(readFileSync(join(process.cwd(), 'scripts/legacy-path-redirects.json'), 'utf8'));
  const esc = (s) => s.replace(/[.+*?^$()[\]{}|\\]/g, '\\$&');
  const blogRules = Object.entries(blog).map(
    ([from, to]) => `  RewriteRule ^blog/${esc(from)}/?$ /blog/${to}/ [R=301,L]`
  );
  const pathRules = Object.entries(paths).map(
    ([from, to]) => `  RewriteRule ^${esc(from)}/?$ ${to} [R=301,L]`
  );
  return [...pathRules, ...blogRules].join('\n');
}

export function generateHostingerHtaccess() {
  const kw = keywordRedirectRules();
  const legacy = legacyLinkRules();
  return `Options -MultiViews -Indexes
DirectoryIndex index.html

# MIME types (required for Next.js static chunks on Apache/LiteSpeed)
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/javascript .js
  AddType text/css .css
  AddType application/json .json
  AddType application/xml .xml
  AddType text/plain .txt
  AddType image/svg+xml .svg
  AddType font/woff2 .woff2
  AddType font/woff .woff
  AddType application/vnd.ms-fontobject .eot
  AddType font/ttf .ttf
  AddType font/otf .otf
</IfModule>

AddDefaultCharset UTF-8

# Long-cache static assets (PageSpeed 03.07 — Hostinger/Apache)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_headers.c>
  # Audit 05.04 — HSTS (static export: headers live here, not next.config)
  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"

  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"

  # Quote modal scripts — must stay fresh (before generic .js rules)
  <FilesMatch "^(wow-quote-form-init|wow-quote-config|wow-cta-dialog-init|wow-analytics)\\.js$">
    Header set Cache-Control "no-store, no-cache, must-revalidate, max-age=0"
  </FilesMatch>

  # Next.js hashed bundles: FilesMatch only sees the filename, NOT /_next/static/ path
  <LocationMatch "^/_next/static/">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </LocationMatch>

  # Fallback for CSS/JS/font assets (excludes wow-* scripts matched above)
  <FilesMatch "\\.(css|js|mjs|woff2|woff|ttf|otf)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  # Images & media in site root / public folder
  <FilesMatch "\\.(avif|webp|jpg|jpeg|png|gif|svg|ico|mp4|webm|eot)$">
    Header set Cache-Control "public, max-age=2592000, stale-while-revalidate=86400"
  </FilesMatch>

  # HTML — short cache so content updates propagate
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>

  # Crawler control files — Google must see new versions after each deploy.
  # (Oct 2026: Hostinger CDN served a 2-week-old robots.txt/sitemap.xml as
  # "max-age=31536000, immutable" when no header was set here.)
  <FilesMatch "^(robots\\.txt|sitemap.*\\.xml|llm.*\\.txt)$">
    Header set Cache-Control "public, max-age=3600, must-revalidate"
  </FilesMatch>
</IfModule>

# Gzip fallback when Brotli is unavailable
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Block PHP execution in static site root
<FilesMatch "\\.(php|php3|php4|php5|php7|php8|phtml|phar|pl|py|jsp|asp|sh|cgi)$">
  Require all denied
</FilesMatch>

<IfModule mod_rewrite.c>
  RewriteEngine On

  # Canonical host: HTTPS + bare domain (no www)
  RewriteCond %{HTTPS} off [OR]
  RewriteCond %{HTTP_HOST} ^www\\.wowgutters\\.co\\.uk$ [NC]
  RewriteRule ^(.*)$ https://wowgutters.co.uk/$1 [R=301,L]

  # Audit 05.05 — legacy / alternate domains → wowgutters.co.uk (when pointed at this Hostinger site)
  RewriteCond %{HTTP_HOST} ^(www\\.)?wow-gutters\\.com$ [NC,OR]
  RewriteCond %{HTTP_HOST} ^(www\\.)?wow-gutters\\.co\\.uk$ [NC,OR]
  RewriteCond %{HTTP_HOST} ^(www\\.)?wowgutters\\.uk$ [NC]
  RewriteRule ^(.*)$ https://wowgutters.co.uk/$1 [R=301,L]

  # Any other hostname on this vhost → canonical
  RewriteCond %{HTTP_HOST} !^wowgutters\\.co\\.uk$ [NC]
  RewriteRule ^(.*)$ https://wowgutters.co.uk/$1 [R=301,L]

  # Share images: town pages point at /og/<town>.jpg, which mostly don't exist.
  # Serve the shared default instead of a 404 (Oct 2026).
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^og/[^/]+\\.jpg$ /og/default.jpg [L]

  # SEO: /gutter-cleaning/{city}/ → /gutter-cleaning-{city}/
  RewriteRule ^gutter-cleaning/([a-zA-Z0-9-]+)/?$ /gutter-cleaning-$1/ [R=301,L]

  # Legacy paths (from vercel.json)
  RewriteRule ^contact-us/?$ /contact/ [R=301,L]
  RewriteRule ^about-us/?$ /about/ [R=301,L]
  RewriteRule ^gutters-cleaning/?$ /services/gutter-cleaning/ [R=301,L]
  RewriteRule ^hot-wash/?$ /services/hot-wash-cleaning/ [R=301,L]
  RewriteRule ^conservatory-cleaning/?$ /services/conservatory/ [R=301,L]

  # Legacy /help/{service-id}/ → canonical /services/{service-id}/
  RewriteRule ^help/gutter-cleaning/?$ /services/gutter-cleaning/ [R=301,L]
  RewriteRule ^help/gutter-repairs/?$ /gutter-repairs/ [R=301,L]
  RewriteRule ^help/repair/?$ /gutter-repairs/ [R=301,L]
  RewriteRule ^services/gutter-repairs/?$ /gutter-repairs/ [R=301,L]
  RewriteRule ^help/upvc-cleaning/?$ /services/upvc-cleaning/ [R=301,L]
  RewriteRule ^help/roof-cleaning/?$ /roof-cleaning/ [R=301,L]
  RewriteRule ^help/clean/?$ /roof-cleaning/ [R=301,L]
  RewriteRule ^services/roof-cleaning/?$ /roof-cleaning/ [R=301,L]
  RewriteRule ^help/inspection/?$ /services/gutter-inspection/ [R=301,L]
  RewriteRule ^help/conservatory/?$ /services/conservatory/ [R=301,L]
  RewriteRule ^help/water-butt/?$ /services/water-butt/ [R=301,L]
  RewriteRule ^help/commercial/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^services/commercial/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^help/gutter-installation/?$ /services/gutter-installation/ [R=301,L]
  RewriteRule ^services/free-gutter-inspection/?$ /services/gutter-inspection/ [R=301,L]
  RewriteRule ^services/inspection/?$ /services/gutter-inspection/ [R=301,L]
  RewriteRule ^help/inspect/?$ /services/gutter-inspection/ [R=301,L]
  # No guarantees offered — old keyword page removed (Oct 2026)
  RewriteRule ^gutter-cleaning-with-guarantee/?$ /services/gutter-cleaning/ [R=301,L]

  # Old blog slugs / old page paths (were 404) — scripts/blog-legacy-redirects.json + legacy-path-redirects.json
${legacy}

  # Blog slug shorten
  RewriteRule ^blog/birmingham-gutter-maintenance-calendar-seasonal-guide/?$ /blog/birmingham-seasonal-gutter-guide/ [R=301,L]
  RewriteRule ^blog/gutter-inspection-save-birmingham-homeowners-thousands/?$ /blog/birmingham-gutter-inspection/ [R=301,L]
  RewriteRule ^blog/blocked-gutters-silently-damaging-birmingham-home-how-to-spot-it/?$ /blog/silent-gutter-damage-birmingham/ [R=301,L]
  # Old blog slugs still linked from ~90 posts (were 404 until Oct 2026)
  RewriteRule ^blog/can-blocked-gutters-cause-damp/?$ /blog/clean-gutters-prevent-damp/ [R=301,L]
  RewriteRule ^blog/hidden-gutter-damage-easier-spot-summer/?$ /blog/hidden-gutter-damage-summer/ [R=301,L]
  # Remaining real 404s from Search Console (Oct 2026)
  RewriteRule ^blog/commercial-warehouse-gutter-clearing-birmingham/?$ /blog/warehouse-gutter-clearing/ [R=301,L]
  RewriteRule ^blog/[0-9]+/?$ /blog/ [R=301,L]
  RewriteRule ^roof-cleaning-solihull-town-centre/?$ /roof-cleaning-solihull/ [R=301,L]

  # Removed service areas hub
  RewriteRule ^service-areas/?$ / [R=301,L]

  # Legacy PascalCase URLs
  RewriteRule ^About/?$ /about/ [R=301,L]
  RewriteRule ^Contact/?$ /contact/ [R=301,L]
  RewriteRule ^Quote/?$ /quote/ [R=301,L]
  RewriteRule ^Services/?$ /services/ [R=301,L]
  RewriteRule ^Blog/?$ /blog/ [R=301,L]
  RewriteRule ^Commercial/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^HomeScreen/?$ / [R=301,L]
  RewriteRule ^Navbar/?$ / [R=301,L]
  RewriteRule ^navbar/?$ / [R=301,L]

  # Legacy /areas/{city}/ → /gutter-cleaning-{city}/
  RewriteRule ^areas/([a-zA-Z0-9-]+)/?$ /gutter-cleaning-$1/ [R=301,L]

  # Removed doorway pages (410 Gone)
  RewriteRule ^gutter-cleaning-lytham-st-annes/?$ - [G,L]
  RewriteRule ^gutter-cleaning-whittingham/?$ - [G,L]
  RewriteRule ^gutter-cleaning-london/?$ - [G,L]
  RewriteRule ^gutter-cleaning-callington/?$ - [G,L]
  RewriteRule ^gutter-cleaning-wendover/?$ - [G,L]

  # Removed service area pages → 301 to the matching live page (Oct 2026: several of these
  # still ranked 8–16 in GSC, so pass that ranking on instead of returning 410 Gone).
  # 1) Same area exists as a gutter / roof cleaning page → send there.
  RewriteCond %{DOCUMENT_ROOT}/gutter-cleaning-$1/index.html -f
  RewriteRule ^(?:gutter-inspection|commercial-gutter-cleaning|commercial-gutter-clearing|exterior-upvc-cleaning|conservatory-cleaning|conservatory-gutter-cleaning)-([a-zA-Z0-9-]+)/?$ /gutter-cleaning-$1/ [R=301,L]
  RewriteCond %{DOCUMENT_ROOT}/roof-cleaning-$1/index.html -f
  RewriteRule ^(?:roof-inspection|commercial-roof-cleaning|conservatory-roof-cleaning)-([a-zA-Z0-9-]+)/?$ /roof-cleaning-$1/ [R=301,L]
  # 2) Otherwise → the main service page.
  RewriteRule ^exterior-upvc-cleaning-[a-zA-Z0-9-]+/?$ /services/upvc-cleaning/ [R=301,L]
  RewriteRule ^commercial-roof-cleaning-[a-zA-Z0-9-]+/?$ /services/commercial-roof-cleaning/ [R=301,L]
  RewriteRule ^commercial-gutter-cleaning-[a-zA-Z0-9-]+/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^commercial-gutter-clearing-[a-zA-Z0-9-]+/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^roof-inspection-[a-zA-Z0-9-]+/?$ /services/roof-inspection/ [R=301,L]
  RewriteRule ^gutter-inspection-[a-zA-Z0-9-]+/?$ /services/gutter-inspection/ [R=301,L]
  RewriteRule ^conservatory-cleaning-[a-zA-Z0-9-]+/?$ /services/conservatory/ [R=301,L]
  RewriteRule ^conservatory-roof-cleaning-[a-zA-Z0-9-]+/?$ /services/conservatory/ [R=301,L]
  RewriteRule ^conservatory-gutter-cleaning-.*$ /services/conservatory/ [R=301,L]

  # Spam-link URLs from third-party sites (GSC Oct 2026: 1.96M "Alternative page with
  # proper canonical tag" + most 404s). 410 Gone tells Google to drop them for good.
  # Examples: /?shop/T784216772/  /?h21230297560550/  /shop/pg/68418848-2
  # Real tracking params (gclid, utm_*, fbclid) do not match these patterns.
  RewriteCond %{QUERY_STRING} ^shop/ [NC,OR]
  RewriteCond %{QUERY_STRING} ^[a-z]?[0-9]{8,}/?$ [NC]
  RewriteRule ^$ - [G,L]
  RewriteRule ^shop(/.*)?$ - [G,L]

  # Cannibalisation + dead URLs found in GSC (Oct 2026)
  RewriteRule ^west-midlands/gutter-cleaning-birmingham/?$ /gutter-cleaning-birmingham/ [R=301,L]
  RewriteRule ^gutter-cleaners-birmingham/?$ /gutter-cleaning-birmingham/ [R=301,L]
  RewriteRule ^gutter-clearing-birmingham/?$ /gutter-cleaning-birmingham/ [R=301,L]
  RewriteRule ^home/?$ / [R=301,L]
  RewriteRule ^blog/roof-moss-removal-kings-norton-b30-birmingham/?$ /roof-cleaning-kings-norton/ [R=301,L]

  # Ranking consolidation (Oct 2026): thin Birmingham variants → homepage.
  # /gutter-cleaning-birmingham/ is a real page again (Oct 27 2026) — do NOT redirect it.
  RewriteRule ^trusted-gutter-cleaners-birmingham/?$ / [R=301,L]
  RewriteRule ^next-day-gutter-cleaning-birmingham/?$ / [R=301,L]
  RewriteRule ^autumn-gutter-cleaning-birmingham/?$ / [R=301,L]
  RewriteRule ^residential-gutter-cleaning/?$ / [R=301,L]
  # Blog posts outranking their own service pages → merge into the service page
  RewriteRule ^blog/gutter-cleaning-walsall/?$ /gutter-cleaning-walsall/ [R=301,L]
  RewriteRule ^blog/gutter-cleaning-solihull/?$ /gutter-cleaning-solihull/ [R=301,L]

  # Consolidated pages that still exist as files (must run before "serve existing files")
${kw.staticPages}

  # Day-1 consolidation (Oct 2026): ${kw.count} thin keyword pages → strongest matching page.
  # Runs before "serve existing files" so old folders left on the server still redirect.
  # Requests for files (CSS/JS/images, anything with an extension) skip the whole list.
  RewriteCond %{REQUEST_URI} \\.[a-zA-Z0-9]{1,6}$
  RewriteRule ^ - [S=${kw.count}]
${kw.pages}

  # Never rewrite Next.js bundles — must load as real files
  RewriteRule ^_next/ - [L]

  # Serve existing files and directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Trailing slash for extensionless URLs
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{1,6}$
  RewriteCond %{REQUEST_URI} !/$
  RewriteRule ^(.+)$ $1/ [R=301,L]

  # /path/ → /path/index.html (static export folders)
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.+?)/?$ $1/index.html [L]

  # Home
  RewriteCond %{DOCUMENT_ROOT}/index.html -f
  RewriteRule ^$ index.html [L]
</IfModule>

# Custom 404 (generated by app/not-found.tsx → out/404.html)
ErrorDocument 404 /404.html
# Keep 410 responses tiny (spam URLs are crawled in bulk)
ErrorDocument 410 "Gone"
`;
}
