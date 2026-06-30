/**
 * Single source of truth for Apache/LiteSpeed (.htaccess) on Hostinger static hosting.
 * Written to out/.htaccess after `next build` (see postexport-fix-index.mjs).
 */

export function generateHostingerHtaccess() {
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
  RewriteCond %{HTTP_HOST} ^(www\\.)?wowgutters\\.uk$ [NC]
  RewriteRule ^(.*)$ https://wowgutters.co.uk/$1 [R=301,L]

  # Any other hostname on this vhost → canonical
  RewriteCond %{HTTP_HOST} !^wowgutters\\.co\\.uk$ [NC]
  RewriteRule ^(.*)$ https://wowgutters.co.uk/$1 [R=301,L]

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
  RewriteRule ^help/gutter-repairs/?$ /services/gutter-repairs/ [R=301,L]
  RewriteRule ^help/upvc-cleaning/?$ /services/upvc-cleaning/ [R=301,L]
  RewriteRule ^help/roof-cleaning/?$ /services/roof-cleaning/ [R=301,L]
  RewriteRule ^help/inspection/?$ /services/gutter-inspection/ [R=301,L]
  RewriteRule ^help/conservatory/?$ /services/conservatory/ [R=301,L]
  RewriteRule ^help/water-butt/?$ /services/water-butt/ [R=301,L]
  RewriteRule ^help/commercial/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^services/commercial/?$ /services/commercial-gutter-cleaning/ [R=301,L]
  RewriteRule ^help/gutter-installation/?$ /services/gutter-installation/ [R=301,L]
  RewriteRule ^services/free-gutter-inspection/?$ /services/gutter-inspection/ [R=301,L]
  RewriteRule ^services/inspection/?$ /services/gutter-inspection/ [R=301,L]

  # Blog slug shorten
  RewriteRule ^blog/gutter-inspection-save-birmingham-homeowners-thousands/?$ /blog/birmingham-gutter-inspection/ [R=301,L]
  RewriteRule ^blog/blocked-gutters-silently-damaging-birmingham-home-how-to-spot-it/?$ /blog/silent-gutter-damage-birmingham/ [R=301,L]

  # Removed service areas hub
  RewriteRule ^service-areas/?$ / [R=301,L]

  # Legacy PascalCase URLs
  RewriteRule ^About/?$ /about/ [R=301,L]
  RewriteRule ^Contact/?$ /contact/ [R=301,L]
  RewriteRule ^Quote/?$ /quote/ [R=301,L]
  RewriteRule ^Services/?$ /services/ [R=301,L]
  RewriteRule ^Blog/?$ /blog/ [R=301,L]
  RewriteRule ^Commercial/?$ /commercial/ [R=301,L]
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
`;
}
