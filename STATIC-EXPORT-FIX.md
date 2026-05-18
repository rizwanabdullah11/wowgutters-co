# Static Export Schema Fix

## The Problem

When using Next.js static export (`output: "export"`), everything must render at **build time** on your local machine. Hostinger has:
- ❌ No Node.js runtime
- ❌ No PHP execution
- ❌ No middleware
- ❌ No server-side rendering

This means:
1. **Client-side schema injection doesn't work for SEO** - Google crawls the static HTML, not the JavaScript-rendered content
2. **'use client' components run in the browser** - Schema added after page load isn't seen by search engines
3. **Schema must be baked into HTML at build time** - It needs to be in the HTML file that Hostinger serves

## The Solution

### ✅ Before Fix (Client-Side - WRONG for Static Export)
```tsx
'use client'

import { JsonLdClient } from '@/components/JsonLdClient'

export default function BirminghamGutterPageSchema() {
  return (
    <JsonLdClient
      id="schema-local-business"
      data={getBirminghamLocalBusinessSchema()}
    />
  )
}
```

**Problem**: This runs in the browser AFTER the page loads. Google sees the HTML without schema.

### ✅ After Fix (Server-Side - CORRECT for Static Export)
```tsx
// No 'use client' directive = server-side rendering

export default function BirminghamGutterPageSchema() {
  const localBusinessSchema = getBirminghamLocalBusinessSchema()
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  )
}
```

**Solution**: This renders at build time. The schema is baked into the HTML file that Hostinger serves.

---

## Files Fixed

### 1. ✅ components/areas/BirminghamGutterPageSchema.tsx
**Changed**: Removed `'use client'` and `JsonLdClient`, now uses direct `<script>` tags

**Before**:
- Client-side rendering
- Schema injected after page load
- Not visible to Google

**After**:
- Server-side rendering
- Schema baked into HTML at build time
- Fully visible to Google

### 2. ✅ components/LocalBusinessSchema.tsx
**Changed**: Removed `'use client'` and `JsonLdClient`, now uses direct `<script>` tags

**Before**:
- Client-side rendering
- Schema injected after page load

**After**:
- Server-side rendering
- Schema baked into HTML at build time

---

## How Static Export Works

### Build Pipeline:

```
Step 1: Local Build
npm run build
↓
Next.js reads every page, runs React components, evaluates metadata exports

Step 2: HTML Generation
↓
Writes plain HTML files to /out/ folder
Each file contains: title, meta tags, canonical link, JSON-LD schema (baked in)

Step 3: Upload to Hostinger
↓
Upload /out/ folder to public_html/
Hostinger Apache just serves the files

Step 4: Google Crawls
↓
Google reads the HTML exactly as it was built
No JavaScript execution needed to see schema or metadata
```

---

## Why This Matters for SEO

### ❌ Client-Side Schema (Wrong)
```html
<!-- What Google sees initially -->
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="app.js"></script>
  </body>
</html>

<!-- Schema is added by JavaScript AFTER page load -->
<!-- Google may not wait for JavaScript execution -->
```

### ✅ Server-Side Schema (Correct)
```html
<!-- What Google sees (complete HTML) -->
<html>
  <head>
    <title>Page Title</title>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "WOW Gutters Ltd",
          ...
        }
      ]
    }
    </script>
  </head>
  <body>
    <div>Content here</div>
  </body>
</html>

<!-- Schema is already in the HTML -->
<!-- Google sees it immediately -->
```

---

## Verification

### Test Locally
```bash
npm run build
```

Then check `out/gutter-cleaning-birmingham/index.html`:

```bash
# Windows
type out\gutter-cleaning-birmingham\index.html | findstr "@graph"

# Should show the schema in the HTML
```

### Test After Deployment
1. Visit: `https://wowgutters.co.uk/gutter-cleaning-birmingham/`
2. Right-click → View Page Source
3. Search for `"@graph"` - should find it in the HTML
4. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Key Differences: Client vs Server Components

| Feature | Client Component ('use client') | Server Component (default) |
|---------|--------------------------------|---------------------------|
| **Renders** | In browser after page load | At build time (static export) |
| **SEO** | ❌ Schema not in initial HTML | ✅ Schema baked into HTML |
| **Hostinger** | ❌ Requires JavaScript execution | ✅ Works with plain HTML |
| **Google** | ⚠️ May not see schema | ✅ Sees schema immediately |
| **Use for** | Interactive UI, forms, buttons | SEO, metadata, schema |

---

## Other Components Already Correct

These components were already using server-side rendering:

✅ **SchemaMarkup.tsx** - Uses plain `<script>` tags (correct)
✅ **AreaPageSchema.tsx** - Uses SchemaMarkup (correct)
✅ **Layout metadata** - Server-side by default (correct)

---

## Best Practices for Static Export

### ✅ DO:
- Use server components (no 'use client') for SEO content
- Render schema with plain `<script>` tags
- Use `dangerouslySetInnerHTML` for JSON-LD
- Test build output in `out/` directory

### ❌ DON'T:
- Use 'use client' for schema components
- Inject schema with JavaScript after page load
- Use `next/script` with `strategy="beforeInteractive"` (gets stripped)
- Rely on client-side rendering for SEO-critical content

---

## Summary

**Problem**: Client-side schema injection doesn't work with static export because Google crawls the HTML before JavaScript runs.

**Solution**: Render schema server-side at build time so it's baked into the HTML files that Hostinger serves.

**Result**: 
- ✅ Schema visible to Google immediately
- ✅ Works with Hostinger shared hosting
- ✅ No JavaScript execution required
- ✅ Proper SEO for all 319 pages

---

**Fixed**: May 18, 2026  
**Status**: ✅ Ready for Build & Deploy
