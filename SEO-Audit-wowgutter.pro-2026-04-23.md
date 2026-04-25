# SEO Audit Report — wowgutter.pro
Date: 2026-04-23  
Prepared for: wowgutter.pro

## Executive summary (high priority)
At the time of this audit, `wowgutter.pro` is not reachable from the public web and returns **HTTP 503 Service Unavailable** for:
- `/` (homepage)
- `/robots.txt`
- `/sitemap.xml`

**Impact:** Search engines and users cannot reliably access the site, which prevents crawling, indexing, rankings, and conversions.  
**Recommendation:** Fix uptime/indexability first. After the site is stable and crawlable, complete on-page, schema, performance, and local SEO improvements.

## Evidence captured
- **Fetch result:** `https://wowgutter.pro/` → `503 Service Unavailable`
- **Fetch result:** `https://wowgutter.pro/robots.txt` → `503 Service Unavailable`
- **Fetch result:** `https://wowgutter.pro/sitemap.xml` → `503 Service Unavailable`

## 1) Technical SEO (blockers first)
### 1.1 Fix the 503 (highest priority)
**What to check**
- **Hosting/app availability:** app process down, server overload, crashed deployment, DNS misroute, expired hosting plan.
- **WAF/CDN blocks:** Cloudflare/edge rules returning 503, bot protection challenging all traffic (including Googlebot).
- **Origin connectivity:** CDN can’t reach origin, invalid SSL at origin, firewall denies.
- **Rate limiting:** aggressive throttling affecting all clients.

**What “good” looks like**
- Homepage and key pages return **200** consistently (no 5xx).
- `robots.txt` returns **200** and is accessible.
- `sitemap.xml` returns **200** and is accessible.

**Quick remediation checklist**
- Confirm DNS points to the correct hosting target.
- Check server logs for 5xx root cause; resolve app crash/timeout.
- If using Cloudflare or similar, allowlist verified crawlers (Googlebot/Bingbot) and ensure challenges are not blocking them.
- Add uptime monitoring (5-min checks) and alerting.

### 1.2 Crawlability & indexability (do after uptime)
Once the site is reachable:
- Ensure **no global `noindex`** in meta tags or headers.
- Confirm canonical URLs are correct.
- Confirm `robots.txt` does not disallow important paths.
- Provide a valid XML sitemap and submit in Google Search Console.

## 2) On-page SEO (after the site is reachable)
### 2.1 Titles & meta descriptions
Targets:
- Unique, keyword-focused titles per page (service + location).
- Compelling meta descriptions to improve CTR.

Recommended patterns:
- **Home:** “Gutter Cleaning in [Primary City] | Wow Gutter Pro”
- **Service page:** “Gutter Repair in [City] | Same‑Week Service”
- **Contact/Quote:** “Get a Gutter Quote | Fast Response”

### 2.2 Headings & content structure
Targets:
- One clear **H1** per page.
- Service pages should include: scope, process, what’s included, pricing factors, FAQs, service area, trust signals.

### 2.3 Internal linking
Targets:
- Link from homepage → each main service page.
- Link service pages → quote/contact.
- Add breadcrumbs if appropriate.

## 3) Schema / structured data (after the site is reachable)
Implement and validate:
- `LocalBusiness` (or a more specific subtype if applicable)
- `Service` for core services
- `FAQPage` on FAQ sections (only if content is visible on page)
- `WebSite` + `SearchAction` (optional)

Validation:
- Rich Results Test
- Schema Markup Validator

## 4) Performance (Core Web Vitals)
After the site is reachable, test:
- Mobile performance (LCP/INP/CLS)
- Image optimization (next-gen formats, correct sizing, lazy-loading where appropriate)
- JS/CSS payload and blocking resources

Targets (rule of thumb):
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

## 5) Local SEO (important for gutter services)
Checklist:
- Google Business Profile fully completed and consistent NAP (Name/Address/Phone).
- Service-area pages (unique content; avoid near-duplicates).
- Reviews strategy (request + respond).
- Citations consistency across directories.

## 6) Tracking & reporting
Set up:
- Google Search Console (indexing, sitemap, queries, coverage)
- GA4 (lead tracking)
- Conversion events: quote form submit, click-to-call, email clicks.

## Next steps (recommended order)
1. **Resolve the 503** so the site returns 200 for `/`, `/robots.txt`, `/sitemap.xml`.
2. Add/verify `robots.txt` + `sitemap.xml`, then submit in Search Console.
3. Review titles/H1s/content for core service pages.
4. Add schema (LocalBusiness, Service, FAQPage where relevant).
5. Run CWV/performance optimization.
6. Execute local SEO and citations/reviews plan.

