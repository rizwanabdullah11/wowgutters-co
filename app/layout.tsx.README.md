# Layout Schema Maintenance Guide

## Critical: Keep Review Data Updated

The `aggregateRating` in `app/layout.tsx` must be kept in sync with actual review counts:

```typescript
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",      // ← Update when rating changes
  "reviewCount": "2700",     // ← Update monthly from Google/Trustpilot
  "bestRating": "5"
}
```

### How to Update

1. Check Google Business Profile for current review count
2. Check Trustpilot for additional reviews
3. Update `reviewCount` to total
4. Update `ratingValue` to current average (round to 1 decimal)
5. Redeploy site

### Why This Matters

Google can penalize sites with inaccurate review schema. Stale data hurts SEO and trust signals.

**Recommended:** Update monthly or when reviews increase by 50+.

## Schema Type

Changed from `LocalBusiness` to `HomeAndConstructionBusiness` for better semantic accuracy.

## Video Upload Date

The `VideoObject` schema has a real upload date (`2025-01-15`). Update this if you replace the video.
