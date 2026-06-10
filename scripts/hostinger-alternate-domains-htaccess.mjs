/**
 * Minimal .htaccess for wow-gutters.com and wowgutters.uk when they are separate
 * Hostinger sites (e.g. old WordPress). Upload to each domain's public_html as .htaccess.
 * Audit 05.05 — domain consolidation.
 */

export const ALTERNATE_CANONICAL = 'https://wowgutters.co.uk';

export function generateAlternateDomainRedirectHtaccess() {
  return `Options -Indexes
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Force HTTPS on this vhost, then redirect everything to canonical site
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

  RewriteRule ^(.*)$ ${ALTERNATE_CANONICAL}/$1 [R=301,L]
</IfModule>

<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>
`;
}

export function generateAlternateDomainsReadme() {
  return `WOW Gutters Ltd — alternate domain redirects (SEO audit 05.05)
============================================================

wow-gutters.com and wowgutters.uk must 301 to https://wowgutters.co.uk/

If those domains still show WordPress (HTTP 200), they are NOT using the main
site's out/ folder. For each alternate domain in Hostinger:

1. hPanel → Websites → select wow-gutters.com (or wowgutters.uk)
2. File Manager → public_html
3. Remove or backup old WordPress files (wp-config.php, wp-content/, etc.)
4. Upload wow-gutters.com.htaccess from this folder AS public_html/.htaccess
   (same for wowgutters.uk using wowgutters.uk.htaccess)
5. Point the domain's document root to public_html if not already
6. Enable SSL for each domain in Hostinger

Optional: In hPanel → Domains → Redirects, set:
  wow-gutters.com  →  https://wowgutters.co.uk  (301 permanent)
  wowgutters.uk    →  https://wowgutters.co.uk  (301 permanent)

After deploy, verify:
  curl -I http://wow-gutters.com/
  curl -I https://wowgutters.uk/

Both should return 301 Location: https://wowgutters.co.uk/...

Main site (wowgutters.co.uk) already includes HSTS + redirects in out/.htaccess.
`;
}
