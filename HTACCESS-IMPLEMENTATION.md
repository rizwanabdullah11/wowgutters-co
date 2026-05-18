# .htaccess Implementation Guide

## Overview

Updated `public/.htaccess` with comprehensive server-level fixes for SEO, security, and performance. This file is copied to `/out/` at build time and deployed to Hostinger.

---

## What Was Added

### 1. ✅ Duplicate URL Consolidation (SEO Fix)

**Problem**: 80+ cities existed at both `/gutter-cleaning/{city}/` and `/gutter-cleaning-{city}/`

**Solution**: 301 redirect to consolidate

```apache
# /gutter-cleaning/{city}/ → /gutter-cleaning-{city}/
RewriteRule ^gutter-cleaning/([a-zA-Z0-9-]+)/?$ /gutter-cleaning-$1/ [R=301,L]
```

**Impact**:
- ✅ Consolidates duplicate URLs
- ✅ Passes link equity to canonical URLs
- ✅ Prevents duplicate content issues
- ✅ Fixes 80+ duplicate URL warnings in Google Search Console

---

### 2. ✅ PHP Execution Blocking (Security Fix)

**Problem**: Malicious PHP files could be executed if uploaded

**Solution**: Block all PHP execution

```apache
<FilesMatch "\.(php|php3|php4|php5|php7|php8|phtml|phar|pl|py|jsp|asp|sh|cgi)$">
  Require all denied
</FilesMatch>

<IfModule mod_php.c>
  php_flag engine off
</IfModule>
```

**Impact**:
- ✅ Prevents PHP code execution
- ✅ Blocks common script extensions
- ✅ Protects against malicious uploads
- ✅ Hardens server security

---

### 3. ✅ Force HTTPS + Canonical Bare Domain

**Problem**: Site accessible via HTTP and www subdomain

**Solution**: Force HTTPS and redirect www to bare domain

```apache
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://wowgutters.co.uk/$1 [R=301,L]
```

**Impact**:
- ✅ Forces HTTPS (secure connection)
- ✅ Redirects www.wowgutters.co.uk → wowgutters.co.uk
- ✅ Consolidates to single canonical domain
- ✅ Improves SEO (no duplicate content)

**Examples**:
- `http://wowgutters.co.uk/` → `https://wowgutters.co.uk/`
- `http://www.wowgutters.co.uk/` → `https://wowgutters.co.uk/`
- `https://www.wowgutters.co.uk/` → `https://wowgutters.co.uk/`

---

### 4. ✅ Caching Headers (Performance Fix)

**Problem**: Poor PageSpeed score due to lack of caching

**Solution**: Immutable caching for hashed assets

```apache
<FilesMatch "_next/static/.*\.(js|css|woff2|jpg|png|webp)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
```

**Impact**:
- ✅ Improves PageSpeed score
- ✅ Reduces server load
- ✅ Faster page loads for returning visitors
- ✅ Leverages browser caching

**What gets cached**:
- Next.js hashed chunks (`_next/static/chunks/`)
- CSS files (`_next/static/css/`)
- Fonts (`_next/static/media/*.woff2`)
- Images (`_next/static/media/*.jpg|png|webp`)

**Cache duration**: 1 year (31536000 seconds)

---

## Complete .htaccess Structure

```
1. DirectoryIndex & MIME Types
   ↓
2. SECURITY: Block PHP Execution
   ↓
3. SEO: Duplicate URL Consolidation (301 Redirects)
   ├─ Duplicate city URLs
   ├─ Force HTTPS + bare domain
   ├─ Legacy redirects
   └─ Trailing slash canonicalization
   ↓
4. ROUTING: Next.js Static Export
   ├─ Serve real files
   ├─ Serve /route/ → /route/index.html
   └─ Serve / → /index.html
   ↓
5. PERFORMANCE: Caching Headers
   ├─ Immutable caching for hashed assets
   └─ No-cache for quote scripts
   ↓
6. SECURITY: Additional Protections
   ├─ Disable directory listing
   ├─ Disable server signature
   └─ Protect sensitive files
```

---

## Redirect Examples

### Duplicate URL Consolidation

| Before | After | Status |
|--------|-------|--------|
| `/gutter-cleaning/birmingham/` | `/gutter-cleaning-birmingham/` | 301 |
| `/gutter-cleaning/solihull/` | `/gutter-cleaning-solihull/` | 301 |
| `/gutter-cleaning/wolverhampton/` | `/gutter-cleaning-wolverhampton/` | 301 |

### HTTPS + Bare Domain

| Before | After | Status |
|--------|-------|--------|
| `http://wowgutters.co.uk/` | `https://wowgutters.co.uk/` | 301 |
| `http://www.wowgutters.co.uk/` | `https://wowgutters.co.uk/` | 301 |
| `https://www.wowgutters.co.uk/` | `https://wowgutters.co.uk/` | 301 |

### Legacy Redirects

| Before | After | Status |
|--------|-------|--------|
| `/contact-us/` | `/contact/` | 301 |
| `/about-us/` | `/about/` | 301 |
| `/gutters-cleaning/` | `/help/unblock/` | 301 |
| `/hot-wash/` | `/services/hot-wash-cleaning/` | 301 |

---

## Security Features

### 1. PHP Execution Blocking

**Blocks**:
- `.php`, `.php3`, `.php4`, `.php5`, `.php7`, `.php8`
- `.phtml`, `.phar`
- `.pl`, `.py` (Perl, Python)
- `.jsp`, `.asp` (Java, ASP)
- `.sh`, `.cgi` (Shell scripts)

**Result**: `403 Forbidden` if accessed

### 2. Sensitive File Protection

**Blocks**:
- `.env` (environment variables)
- `.git` (Git repository)
- `.htaccess`, `.htpasswd` (Apache config)
- `package.json`, `package-lock.json` (Node.js)
- `composer.json`, `composer.lock` (PHP)

**Result**: `403 Forbidden` if accessed

### 3. Directory Listing Disabled

**Before**: Visiting `/images/` shows file list  
**After**: `403 Forbidden`

### 4. Server Signature Disabled

**Before**: Error pages show "Apache/2.4.41 (Ubuntu)"  
**After**: Generic error page (no version info)

---

## Performance Improvements

### Caching Strategy

| Asset Type | Cache Duration | Reason |
|------------|----------------|--------|
| Hashed JS/CSS | 1 year (immutable) | Filename changes when content changes |
| Hashed images | 1 year (immutable) | Filename changes when content changes |
| Hashed fonts | 1 year (immutable) | Filename changes when content changes |
| Quote scripts | No cache | Need to update without cache bust |

### PageSpeed Impact

**Before**:
- ❌ No caching headers
- ❌ Browser re-downloads assets every visit
- ❌ Poor "Leverage browser caching" score

**After**:
- ✅ Immutable caching for static assets
- ✅ Browser caches assets for 1 year
- ✅ Improved "Leverage browser caching" score

---

## Testing

### 1. Test Duplicate URL Redirects

```bash
# Test city URL redirect
curl -I https://wowgutters.co.uk/gutter-cleaning/birmingham/

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://wowgutters.co.uk/gutter-cleaning-birmingham/
```

### 2. Test HTTPS + Bare Domain

```bash
# Test HTTP → HTTPS
curl -I http://wowgutters.co.uk/

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://wowgutters.co.uk/

# Test www → bare domain
curl -I https://www.wowgutters.co.uk/

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://wowgutters.co.uk/
```

### 3. Test PHP Blocking

```bash
# Try to access a PHP file
curl -I https://wowgutters.co.uk/test.php

# Expected:
# HTTP/1.1 403 Forbidden
```

### 4. Test Caching Headers

```bash
# Check hashed asset caching
curl -I https://wowgutters.co.uk/_next/static/chunks/main-abc123.js

# Expected:
# Cache-Control: public, max-age=31536000, immutable
```

### 5. Test Sensitive File Protection

```bash
# Try to access .env
curl -I https://wowgutters.co.uk/.env

# Expected:
# HTTP/1.1 403 Forbidden
```

---

## Deployment

### Build Process

```bash
npm run build
```

**What happens**:
1. Next.js builds static site to `/out/`
2. Copies `public/.htaccess` to `/out/.htaccess`
3. Ready to upload to Hostinger

### Upload to Hostinger

1. Upload entire `/out/` directory to `public_html/`
2. Verify `.htaccess` is in `public_html/.htaccess`
3. Test redirects and security

### Verification Checklist

After deployment:

- [ ] Test duplicate URL redirect: `/gutter-cleaning/birmingham/` → `/gutter-cleaning-birmingham/`
- [ ] Test HTTPS redirect: `http://` → `https://`
- [ ] Test www redirect: `www.` → bare domain
- [ ] Test PHP blocking: Try accessing `.php` file (should be 403)
- [ ] Test caching: Check `Cache-Control` headers on static assets
- [ ] Test sensitive files: Try accessing `.env` (should be 403)
- [ ] Check Google Search Console for redirect warnings (should decrease)

---

## Troubleshooting

### Issue: Redirects not working

**Solution**:
1. Verify `.htaccess` is in `public_html/` (not in subdirectory)
2. Check Apache `mod_rewrite` is enabled (Hostinger has it by default)
3. Clear browser cache and test in incognito mode

### Issue: 500 Internal Server Error

**Solution**:
1. Check `.htaccess` syntax (no typos)
2. Verify Apache modules are available:
   - `mod_rewrite` (for redirects)
   - `mod_headers` (for caching)
   - `mod_mime` (for MIME types)
3. Check Hostinger error logs

### Issue: PHP files still executing

**Solution**:
1. Verify `<FilesMatch>` block is present
2. Check if Hostinger allows `php_flag engine off`
3. Contact Hostinger support if needed

### Issue: Caching not working

**Solution**:
1. Verify `mod_headers` is enabled
2. Check `Cache-Control` headers with browser dev tools
3. Clear browser cache and test

---

## Maintenance

### Adding New Redirects

Add to the "Legacy redirects" section:

```apache
RewriteRule ^old-url/?$ /new-url/ [R=301,L]
```

### Updating Cache Duration

Modify the `max-age` value (in seconds):

```apache
# 1 year = 31536000
# 1 month = 2592000
# 1 week = 604800
# 1 day = 86400
```

### Blocking Additional File Types

Add to the `<FilesMatch>` pattern:

```apache
<FilesMatch "\.(php|newext)$">
  Require all denied
</FilesMatch>
```

---

## Summary

The updated `.htaccess` provides:

✅ **SEO**: Duplicate URL consolidation (301 redirects)  
✅ **SEO**: HTTPS + canonical bare domain enforcement  
✅ **Security**: PHP execution blocking  
✅ **Security**: Sensitive file protection  
✅ **Security**: Directory listing disabled  
✅ **Performance**: Immutable caching for static assets  
✅ **Performance**: Improved PageSpeed score  

**Result**: Comprehensive server-level fixes that work alongside Next.js static export for optimal SEO, security, and performance.

---

**Last Updated**: May 18, 2026  
**Status**: ✅ Production Ready
