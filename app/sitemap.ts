import { MetadataRoute } from 'next';
import { AREA_SLUGS, areaPath, roofAreaPath } from '@/lib/areaSlugs';
import { blogPosts } from '@/constants/blogData';
import { servicesData } from '@/constants/servicesData';
import { CONTENT_LAST_UPDATED_ISO } from '@/lib/contentFreshness';

export const dynamic = 'force-static';
export const revalidate = false;

/**
 * SEO Sitemap Configuration
 * 
 * IMPORTANT: Update these dates when content changes:
 * - lastUpdated: When area pages or main content is updated
 * - legalLastUpdated: When privacy/terms/cookie policies change
 * 
 * Priority Guidelines:
 * - 1.0: Homepage only
 * - 0.95: Conversion pages (contact, quote)
 * - 0.9: Service pages and pricing
 * - 0.85: Area/location pages
 * - 0.8: General info pages
 * - 0.7: Blog posts
 * - 0.6: Help pages
 * - 0.75: HTML roof-cleaning service-areas index (internal linking hub)
 *
 * Excluded from sitemap (still reachable via footer; noindex + robots disallow):
 * - Legal: privacy, terms, cookies
 * - Low-value: awards, talks, work portfolio
 */

const FRESH_SERVICE_ROUTES = new Set([
  '/windows-cleaning',
  '/services/hot-wash-cleaning',
  '/hot-wash',
  '/the-gutter-gallery',
  '/pricing',
  '/about',
  '/contact',
  '/quote',
  '/citations',
]);

function lastModForRoute(route: string, fallback: Date): Date {
  if (FRESH_SERVICE_ROUTES.has(route)) {
    return new Date(`${CONTENT_LAST_UPDATED_ISO}T12:00:00.000Z`);
  }
  const areaSlug = route.match(/^\/(?:gutter|roof)-cleaning-(.+)$/)?.[1];
  if (areaSlug) {
    const base = new Date('2026-05-20T09:00:00.000Z');
    const offset = [...areaSlug].reduce((n, c) => n + c.charCodeAt(0), 0) % 12;
    base.setUTCDate(base.getUTCDate() + offset);
    return base;
  }
  return fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wowgutters.co.uk';
  const lastUpdated = new Date(`${CONTENT_LAST_UPDATED_ISO}T08:00:00.000Z`);
  
  const withTrailingSlash = (route: string) => {
    if (!route) return `${baseUrl}/`;
    return route.endsWith('/') ? `${baseUrl}${route}` : `${baseUrl}${route}/`;
  };

  // Static pages (excluding noindex pages: audit, dashboard, navbar, home-screen, testimonials)
  const staticPages = [
    '',
    '/west-midlands/gutter-cleaning-birmingham',
    '/gutter-cleaning-near-me',
    '/about',
    '/citations',
    '/contact',
    '/services',
    '/pricing',
    '/reviews',
    '/blog',
    '/help',
    '/roof-cleaning-service-areas',
    '/latest-news',
    '/the-gutter-gallery',
    '/gutter-cleaning-calculator',
    '/gutter-cleaning-prices',
    '/neighbourhood-discount',
    '/oap-discount',
    '/quote',
    '/windows-cleaning',
  ];

  // Service pages (canonical /services/* URLs)
  const servicePages = [
    '/help/unblock',
    '/help/repair',
    '/help/clean',
    '/help/inspect',
    '/services/hot-wash-cleaning',
    '/services/drain-cleaning',
    ...servicesData.map((s) => `/services/${s.id}`),
  ];

  const staticRoutes = staticPages.map((route) => {
    let priority = 0.8;
    let changeFreq: 'daily' | 'weekly' | 'monthly' = 'weekly';
    
    if (route === '') priority = 1;
    else if (route === '/contact' || route === '/quote') priority = 0.95;
    else if (route === '/services' || route === '/pricing') priority = 0.9;
    else if (route === '/roof-cleaning-service-areas') {
      priority = 0.75;
      changeFreq = 'weekly';
    }

    return {
      url: withTrailingSlash(route),
      lastModified: lastModForRoute(route, lastUpdated),
      changeFrequency: changeFreq,
      priority,
    };
  });

  const serviceRoutes = servicePages.map((route) => ({
    url: withTrailingSlash(route),
    lastModified: lastModForRoute(route, lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Out-of-area doorway pages to exclude from sitemap (outside West Midlands service area)
  const EXCLUDED_DOORWAY_PAGES = [
    'gunnislake',
    'lytham-st-annes',
    'whittingham',
    'london',
    'callington',
    'wendover',
  ];

  const areaRoutes = AREA_SLUGS.filter((slug) => !EXCLUDED_DOORWAY_PAGES.includes(slug)).flatMap((slug) => [
    {
      url: withTrailingSlash(areaPath(slug)),
      lastModified: lastModForRoute(areaPath(slug), lastUpdated),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: withTrailingSlash(roofAreaPath(slug)),
      lastModified: lastModForRoute(roofAreaPath(slug), lastUpdated),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
  ]);

  const blogRoutes = blogPosts.map((post) => {
    let postDate = lastUpdated;
    if (post.date) {
      try {
        const parsed = new Date(post.date);
        if (!isNaN(parsed.getTime())) {
          postDate = parsed;
        }
      } catch {
        // Use default lastUpdated
      }
    }
    return {
      url: withTrailingSlash(`/blog/${post.id}`),
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  // De-duplicate URLs (some routes can overlap if lists change)
  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...blogRoutes,
  ];

  const seen = new Set<string>();
  return all.filter((x) => {
    if (seen.has(x.url)) return false;
    seen.add(x.url);
    return true;
  });
}
