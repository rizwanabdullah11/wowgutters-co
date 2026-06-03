import { MetadataRoute } from 'next';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { blogPosts } from '@/constants/blogData';
import { servicesData } from '@/constants/servicesData';

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
 * - 0.75: HTML service-areas index (internal linking hub)
 *
 * Excluded from sitemap (still reachable via footer; noindex + robots disallow):
 * - Legal: privacy, terms, cookies
 * - Low-value: awards, talks, work portfolio
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wowgutters.co.uk';
  const lastUpdated = new Date('2026-05-05');
  
  const withTrailingSlash = (route: string) => {
    if (!route) return `${baseUrl}/`;
    return route.endsWith('/') ? `${baseUrl}${route}` : `${baseUrl}${route}/`;
  };

  // Static pages (excluding noindex pages: audit, dashboard, navbar, citations, home-screen, testimonials)
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/pricing',
    '/reviews',
    '/blog',
    '/help',
    '/service-areas',
    '/latest-news',
    '/the-gutter-gallery',
    '/gutter-cleaning-calculator',
    '/gutter-cleaning-prices',
    '/neighbourhood-discount',
    '/oap-discount',
  ];

  // Service pages
  const servicePages = [
    '/help/unblock',
    '/help/repair',
    '/help/clean',
    '/services/upvc-cleaning',
    '/services/hot-wash-cleaning',
    '/services/drain-cleaning',
    '/services/water-butt',
    '/commercial',
    '/services/conservatory',
    '/help/inspect',
  ];

  const staticRoutes = staticPages.map((route) => {
    let priority = 0.8;
    let changeFreq: 'daily' | 'weekly' | 'monthly' = 'weekly';
    
    if (route === '') priority = 1;
    else if (route === '/contact' || route === '/quote') priority = 0.95;
    else if (route === '/services' || route === '/pricing') priority = 0.9;
    else if (route === '/service-areas') {
      priority = 0.75;
      changeFreq = 'weekly';
    }

    return {
      url: withTrailingSlash(route),
      lastModified: lastUpdated,
      changeFrequency: changeFreq,
      priority,
    };
  });

  const serviceRoutes = servicePages.map((route) => ({
    url: withTrailingSlash(route),
    lastModified: lastUpdated,
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

  const areaRoutes = AREA_SLUGS
    .filter((slug) => !EXCLUDED_DOORWAY_PAGES.includes(slug))
    .map((slug) => ({
      url: withTrailingSlash(areaPath(slug)),
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }));

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

  // Help pages (excluding inspect and repair which have noindex)
  const helpSlugs = [
    'unblock',
    'clean',
    ...servicesData.map((s) => s.id),
  ];

  const helpRoutes = helpSlugs.map((slug) => ({
    url: withTrailingSlash(`/help/${slug}`),
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // De-duplicate URLs (some routes can overlap if lists change)
  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...blogRoutes,
    ...helpRoutes,
  ];

  const seen = new Set<string>();
  return all.filter((x) => {
    if (seen.has(x.url)) return false;
    seen.add(x.url);
    return true;
  });
}
