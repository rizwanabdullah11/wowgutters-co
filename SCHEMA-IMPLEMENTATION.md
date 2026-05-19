# Schema Implementation Guide

## Overview

This document explains the unified LocalBusinessSchema component that powers all city page schemas across the site.

---

## The Component: LocalBusinessSchema.tsx

### What It Does

Outputs a complete **@graph JSON-LD** with **four schema types** in one block:

1. **HomeAndConstructionBusiness** (more specific than LocalBusiness)
2. **Service**
3. **FAQPage**
4. **BreadcrumbList**

### Why HomeAndConstructionBusiness?

Schema.org has a hierarchy:
```
Thing → Organization → LocalBusiness → HomeAndConstructionBusiness
```

Using the **more specific type** tells Google your business category precisely — **stronger ranking signal** for trade-service searches like "gutter cleaning Birmingham".

---

## Component Usage

### Example: Birmingham Page

```tsx
<LocalBusinessSchema
  city="Birmingham"
  url="https://wowgutters.co.uk/gutter-cleaning-birmingham/"
  priceFrom={50}
  priceTo={120}
  nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton']}
  geo={{ latitude: 52.4862, longitude: -1.8904 }}
  faqs={birminghamFaqs}
  postcodes={['B1', 'B2', 'B3', 'B13', 'B14', 'B15']}
/>
```

### Component Output (Rendered HTML at Build Time)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#business",
      "name": "WOW Gutters Ltd — Birmingham",
      "address": { ... },
      "geo": { ... },
      "aggregateRating": {
        "ratingValue": "4.9",
        "reviewCount": "2696"
      },
      "openingHoursSpecification": [ ... ],
      "areaServed": [ ... ]
    },
    { "@type": "Service", ... },
    { "@type": "FAQPage", ... },
    { "@type": "BreadcrumbList", ... }
  ]
}
</script>
```

---

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `city` | string | ✅ | City name (e.g., "Birmingham") |
| `url` | string | ✅ | Full page URL |
| `priceFrom` | number | ✅ | Starting price (e.g., 50) |
| `priceTo` | number | ✅ | Maximum price (e.g., 120) |
| `nearbyAreas` | string[] | ✅ | Array of nearby areas |
| `geo` | object | ✅ | `{ latitude: number, longitude: number }` |
| `faqs` | array | ❌ | Custom FAQs (uses defaults if not provided) |
| `postcodes` | string[] | ❌ | Postcodes served (e.g., ['B1', 'B2']) |

---

## How It Works

### 1. Server-Side Rendering

```tsx
// No 'use client' directive = server component
export default function LocalBusinessSchema({ city, url, ... }) {
  const schema = { ... }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
```

**Key Point**: Uses `dangerouslySetInnerHTML` to inject JSON as raw HTML. This renders at **build time** into static HTML — no client-side JavaScript needed.

### 2. Build-Time Pipeline

```
Step 1: npm run build
↓
Next.js processes all pages

Step 2: Component Execution
↓
LocalBusinessSchema runs on your machine
Generates complete JSON-LD

Step 3: HTML Generation
↓
Schema is baked into HTML file
Written to /out/gutter-cleaning-{city}/index.html

Step 4: Deployment
↓
Upload to Hostinger
Apache serves the static HTML

Step 5: Google Crawls
↓
Sees schema immediately in HTML
No JavaScript execution required
```

---

## Files Using This Component

### 1. BirminghamGutterPageSchema.tsx

```tsx
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export default function BirminghamGutterPageSchema() {
  return (
    <LocalBusinessSchema
      city="Birmingham"
      url="https://wowgutters.co.uk/gutter-cleaning-birmingham/"
      priceFrom={50}
      priceTo={120}
      nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton']}
      geo={{ latitude: 52.4862, longitude: -1.8904 }}
      faqs={birminghamFaqs}
      postcodes={['B1', 'B2', 'B3']}
    />
  )
}
```

### 2. AreaPageSchema.tsx (All Other Cities)

```tsx
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import { getCityData } from '@/lib/cities'

export default function AreaPageSchema({ slug }: { slug: string }) {
  const cityData = getCityData(slug)
  
  if (cityData) {
    return (
      <LocalBusinessSchema
        city={cityData.name}
        url={`https://wowgutters.co.uk/gutter-cleaning-${slug}/`}
        priceFrom={cityData.pricing.terraced.min}
        priceTo={cityData.pricing.detached.max}
        nearbyAreas={cityData.nearbyAreas}
        geo={cityData.geo}
        postcodes={cityData.postcodes}
      />
    )
  }
  
  // Fallback for areas not in cities.ts
  return <LocalBusinessSchema ... />
}
```

---

## Schema Structure Breakdown

### 1. HomeAndConstructionBusiness

```json
{
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#business",
  "name": "WOW Gutters Ltd — Birmingham",
  "telephone": "+447421433910",
  "email": "support@wowgutters.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.4862,
    "longitude": -1.8904
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2696"
  },
  "areaServed": [
    { "@type": "City", "name": "Birmingham" },
    { "@type": "Place", "name": "Solihull" }
  ]
}
```

### 2. Service

```json
{
  "@type": "Service",
  "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#service",
  "name": "Gutter Cleaning Birmingham",
  "serviceType": "Gutter cleaning",
  "provider": { "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#business" },
  "offers": {
    "@type": "Offer",
    "priceRange": "£50-£120",
    "priceCurrency": "GBP"
  }
}
```

### 3. FAQPage

```json
{
  "@type": "FAQPage",
  "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does gutter cleaning cost in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prices start from £50..."
      }
    }
  ]
}
```

### 4. BreadcrumbList

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://wowgutters.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Gutter Cleaning",
      "item": "https://wowgutters.co.uk/help/unblock/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Gutter Cleaning Birmingham",
      "item": "https://wowgutters.co.uk/gutter-cleaning-birmingham/"
    }
  ]
}
```

---

## Benefits of This Approach

### ✅ SEO Benefits

1. **HomeAndConstructionBusiness** = More specific than LocalBusiness
2. **@graph structure** = Google's preferred format for multiple entities
3. **Entity linking** = `@id` references connect entities
4. **Rich results** = Eligible for business cards, FAQs, breadcrumbs

### ✅ Technical Benefits

1. **Single component** = DRY principle, easy to maintain
2. **Server-side rendering** = Works with static export
3. **Build-time generation** = No client-side JavaScript
4. **Type-safe** = TypeScript props validation
5. **Reusable** = Works for all 119 city pages

### ✅ Maintenance Benefits

1. **Update once** = Changes apply to all pages
2. **City data integration** = Pulls from cities.ts
3. **Default FAQs** = Automatic city-specific FAQs
4. **Fallback support** = Works even without city data

---

## Testing

### 1. Build Locally

```bash
npm run build
```

### 2. Check Generated HTML

```bash
# Windows
type out\gutter-cleaning-birmingham\index.html | findstr "@graph"

# Should show the complete schema in the HTML
```

### 3. Verify Schema Structure

Look for:
- ✅ `"@type": "HomeAndConstructionBusiness"`
- ✅ `"@graph": [` (array of 4 entities)
- ✅ `"@id"` properties for entity linking
- ✅ All 4 schema types present

### 4. Test with Google

1. Visit: [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter URL: `https://wowgutters.co.uk/gutter-cleaning-birmingham/`
3. Verify:
   - ✅ HomeAndConstructionBusiness detected
   - ✅ FAQPage detected
   - ✅ BreadcrumbList detected
   - ✅ No errors or warnings

---

## Comparison: Old vs New

### ❌ Old Approach (Multiple Separate Schemas)

```tsx
// 3 separate script tags
<script type="application/ld+json">{localBusinessSchema}</script>
<script type="application/ld+json">{faqSchema}</script>
<script type="application/ld+json">{breadcrumbSchema}</script>
```

**Problems**:
- Generic LocalBusiness (not specific enough)
- No entity linking between schemas
- Harder to maintain (3 separate functions)
- No Service schema

### ✅ New Approach (Unified @graph)

```tsx
// Single script tag with @graph
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "HomeAndConstructionBusiness", "@id": "...#business" },
    { "@type": "Service", "provider": { "@id": "...#business" } },
    { "@type": "FAQPage" },
    { "@type": "BreadcrumbList" }
  ]
}
</script>
```

**Benefits**:
- HomeAndConstructionBusiness (more specific)
- Entity linking via @id
- Single component (easy to maintain)
- Includes Service schema
- Google's preferred format

---

## Adding New Cities

### Step 1: Add to cities.ts

```typescript
export const CITIES: Record<string, CityData> = {
  // ... existing cities
  
  'new-city': {
    slug: 'new-city',
    name: 'New City',
    postcodes: ['NC1', 'NC2'],
    nearbyAreas: ['Area 1', 'Area 2'],
    geo: { latitude: 52.0, longitude: -2.0 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    region: 'West Midlands',
  },
}
```

### Step 2: Add to areaSlugs.ts

```typescript
export const AREA_SLUGS: readonly string[] = [
  // ... existing slugs
  'new-city',
]
```

### Step 3: Rebuild

```bash
npm run build
```

**That's it!** The schema is automatically generated for the new city using the LocalBusinessSchema component.

---

## Troubleshooting

### Issue: Schema not showing in Google Rich Results Test

**Solution**:
1. Check build output: `out/gutter-cleaning-{city}/index.html`
2. Verify `@graph` is in the HTML (not added by JavaScript)
3. Test with view source (not browser inspector)
4. Wait 2-4 weeks for Google to re-crawl

### Issue: TypeScript errors

**Solution**:
1. Verify all required props are provided
2. Check city data exists in cities.ts
3. Run `npm install` to update dependencies

### Issue: Wrong schema type showing

**Solution**:
1. Clear build cache: `rm -rf .next out`
2. Rebuild: `npm run build`
3. Verify HomeAndConstructionBusiness (not LocalBusiness) in output

---

## Summary

The **LocalBusinessSchema** component is the engine of every schema fix:

✅ Outputs complete @graph JSON-LD with 4 schema types  
✅ Uses HomeAndConstructionBusiness (more specific than LocalBusiness)  
✅ Server-side rendering (baked into HTML at build time)  
✅ Works with static export (no client-side JavaScript)  
✅ Reusable across all 119 city pages  
✅ Type-safe with TypeScript  
✅ Easy to maintain and update  

**Result**: Google sees complete, properly structured schema immediately when crawling your static HTML files.

---

**Last Updated**: May 18, 2026  
**Status**: ✅ Production Ready
