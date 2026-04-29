# Marketing Implementation (WOW Gutters)

This project includes a lightweight “marketing ops” layer: shared product context, analytics events, and static-export-safe scripts.

## 1) Product marketing context

- Source of truth: `.agents/product-marketing-context.md`
- Update it when positioning, services, or audience changes.

## 2) Analytics (GA4)

### Enable GA4

Set this env var (recommended in `.env.production` before `npm run build`):

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`

GA4 is loaded in `app/layout.tsx` using **plain `<script>` tags** so it survives static export.

### Events you now get

- `quote_open` (CTA dialog opened)
- `quote_close` (CTA dialog closed)
- `cta_clicked` (generic CTA click on the quote trigger)
- `quote_step_completed` (quote form step progress)
- `quote_submitted` (quote form success)

You can mark `quote_submitted` as a **conversion** in GA4.

### Add tracking to any CTA/button

Add these attributes to any clickable element:

- `data-analytics-event="your_event_name"`
- `data-analytics-label="where_it_was_clicked"`

Example: `data-analytics-event="call_clicked" data-analytics-label="footer_phone"`

## 3) Attribution (UTM capture)

`public/wow-analytics.js` stores first-touch attribution (UTMs + click IDs) in `localStorage` under `wow_attribution` and automatically attaches those fields to GA events (when available).

## 4) SEO

SEO is implemented via:

- Global metadata + JSON-LD in `app/layout.tsx`
- Sitemap via `app/sitemap.ts`
- Robots via `public/robots.txt`
- Helper utilities in `components/SEO.tsx`

## 5) Local dev / build / static serve

```bash
npm install
npm run dev
```

Build static export:

```bash
npm run build
```

Preview the exported site:

```bash
npm run serve
```

## 6) Security

- Do **not** commit real keys to `.env.example`.
- Use `.env.local` (dev) and `.env.production` (build) as needed.

