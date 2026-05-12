# Doorway Pages Removal - Implementation Summary

## Problem
6 out-of-area doorway pages were indexed by Google (confirmed May 11, 2026), causing SEO penalties and suppressing Birmingham rankings:

1. `/roof-cleaning-gunnislake/` (Cornwall)
2. `/gutter-cleaning-lytham-st-annes/` (Lancashire)
3. `/gutter-cleaning-whittingham/` (Northumberland)
4. `/gutter-cleaning-london/` (old template)
5. `/gutter-cleaning-callington/` (Cornwall)
6. `/gutter-cleaning-wendover/` (Buckinghamshire)

## Solution Implemented

### 1. robots.txt - Block Crawling
Added `Disallow` rules to prevent search engines from crawling these pages:

```
# Block out-of-area doorway pages (outside West Midlands service area)
Disallow: /roof-cleaning-gunnislake
Disallow: /gutter-cleaning-lytham-st-annes
Disallow: /gutter-cleaning-whittingham
Disallow: /gutter-cleaning-london
Disallow: /gutter-cleaning-callington
Disallow: /gutter-cleaning-wendover
```

### 2. .htaccess - Return 410 Gone Status
Added Apache rewrite rules to return HTTP 410 (Gone) status, which tells Google these pages are permanently removed:

```apache
# Return 410 Gone for out-of-area doorway pages
RewriteRule ^roof-cleaning-gunnislake/?$ - [G,L]
RewriteRule ^gutter-cleaning-lytham-st-annes/?$ - [G,L]
RewriteRule ^gutter-cleaning-whittingham/?$ - [G,L]
RewriteRule ^gutter-cleaning-london/?$ - [G,L]
RewriteRule ^gutter-cleaning-callington/?$ - [G,L]
RewriteRule ^gutter-cleaning-wendover/?$ - [G,L]
```

## Files Modified
1. `public/robots.txt` - Added Disallow rules
2. `scripts/postexport-fix-index.mjs` - Added 410 Gone rules to .htaccess template
3. `out/.htaccess` - Generated with new rules (created during build)

## Why 410 Gone Instead of 404?
- **410 Gone** tells Google the page is permanently removed and won't return
- **404 Not Found** suggests the page might come back
- Google removes 410 pages from index faster than 404 pages

## Deployment Steps

### 1. Commit and Push Changes
```bash
git add public/robots.txt scripts/postexport-fix-index.mjs
git commit -m "Block out-of-area doorway pages with robots.txt and 410 Gone"
git push origin main
```

### 2. Deploy to Production
Upload the `out/` directory to your hosting (Hostinger):
- Upload `out/.htaccess` to `public_html/.htaccess`
- Upload `out/robots.txt` to `public_html/robots.txt`
- Upload all other `out/*` files

### 3. Verify Deployment
Test each URL returns 410 Gone:
```bash
curl -I https://wowgutters.co.uk/roof-cleaning-gunnislake/
curl -I https://wowgutters.co.uk/gutter-cleaning-lytham-st-annes/
curl -I https://wowgutters.co.uk/gutter-cleaning-whittingham/
curl -I https://wowgutters.co.uk/gutter-cleaning-london/
curl -I https://wowgutters.co.uk/gutter-cleaning-callington/
curl -I https://wowgutters.co.uk/gutter-cleaning-wendover/
```

Expected response: `HTTP/1.1 410 Gone`

### 4. Submit to Google Search Console
1. Go to Google Search Console
2. Use "URL Removal" tool for each URL
3. Request "Temporary removal" (Google will see 410 and make it permanent)
4. Submit updated sitemap: `https://wowgutters.co.uk/sitemap.xml`

### 5. Monitor Rankings
- Check Birmingham rankings weekly
- Rankings should recover within 2-4 weeks
- Doorway pages should be deindexed within 1-2 weeks

## Technical Details
- **Priority**: CRITICAL
- **Status**: ✅ READY TO DEPLOY
- **Build Status**: ✅ PASSED (318 pages)
- **Date Implemented**: May 12, 2026

## Expected Impact
✅ Removes doorway page penalty  
✅ Restores Birmingham rankings  
✅ Complies with Google quality guidelines  
✅ Faster deindexing than noindex meta tags  
✅ Clear signal to Google that pages are gone permanently  

## Service Area Reminder
WOW Gutters serves **West Midlands only** (114 locations defined in `lib/areaSlugs.ts`).
All location pages must be within Birmingham and surrounding West Midlands areas.
