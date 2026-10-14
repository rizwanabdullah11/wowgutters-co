import { MetadataRoute } from 'next'
import { CRAWL_DISALLOW_PATHS } from '@/lib/lowValuePageSeo'

/**
 * robots.txt — wowgutters.co.uk
 * WOW Gutters Ltd | Birmingham, West Midlands, UK
 * Updated: October 2026 | Version: 4.0
 *
 * v4.0: ONE rule group for every crawler.
 *   The old file gave Googlebot (and ~60 other bots) their own group. A crawler that
 *   matches a named group IGNORES the `*` group, so Google never saw the /api/ etc.
 *   rules. A single `*` group applies to Googlebot, Bingbot, GPTBot, ClaudeBot… alike.
 *   All of them remain allowed — nothing is blocked that was crawlable before.
 *
 *   /_next/static/ is explicitly allowed so search engines can render CSS/JS.
 *   Sitemap entries must be XML sitemaps only (llm.txt files are not sitemaps).
 *
 *   Spam query URLs (/?shop/…) are NOT blocked here on purpose: they return 410 Gone
 *   from .htaccess, and Google must be able to fetch them to see the 410 and drop them.
 *
 * public/robots.txt mirrors this output (scripts/assert-analytics.mjs reads it) — keep in sync.
 */

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image'],
        disallow: [
          ...CRAWL_DISALLOW_PATHS,
          '/api/',
          '/_next/data/',
          '/admin/',
          '/studio/',
          '/cdn-cgi/',
        ],
      },
    ],
    sitemap: 'https://wowgutters.co.uk/sitemap.xml',
  }
}
