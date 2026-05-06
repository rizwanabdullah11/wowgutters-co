import { MetadataRoute } from 'next';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { blogPosts } from '@/constants/blogData';
import { workPosts } from '@/constants/workData';
import { talksData } from '@/constants/talksData';
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
 * - 0.5: Work/talks (portfolio)
 * - 0.3: Legal pages
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wowgutters.co.uk';
  const lastUpdated = new Date('2026-05-05');
  const legalLastUpdated = new Date('2025-11-01');
  
  const withTrailingSlash = (route: string) => {
    if (!route) return `${baseUrl}/`;
    return route.endsWith('/') ? `${baseUrl}${route}` : `${baseUrl}${route}/`;
  };

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/audit',
    '/contact',
    '/services',
    '/pricing',
    '/reviews',
    '/awards',
    '/blog',
    '/help',
    '/latest-news',
    '/work',
    '/talks',
    '/the-gutter-gallery',
    '/gutter-cleaning-calculator',
    '/gutter-cleaning-prices',
    '/neighbourhood-discount',
    '/oap-discount',
    '/quote',
  ];

  const legalPages = [
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
  ];

  // Service pages
  const servicePages = [
    '/services/gutter-cleaning',
    '/services/gutter-repairs',
    '/services/roof-cleaning',
    '/services/upvc-cleaning',
    '/services/hot-wash-cleaning',
    '/services/drain-cleaning',
    '/services/water-butt',
    '/services/commercial',
    '/services/conservatory',
    '/services/inspection',
  ];

  const staticRoutes = staticPages.map((route) => {
    let priority = 0.8;
    let changeFreq: 'daily' | 'weekly' | 'monthly' = 'weekly';
    
    if (route === '') priority = 1;
    else if (route === '/contact' || route === '/quote') priority = 0.95;
    else if (route === '/services' || route === '/pricing') priority = 0.9;
    else if (route === '/awards' || route === '/talks' || route === '/work') {
      priority = 0.6;
      changeFreq = 'monthly';
    }
    
    return {
      url: withTrailingSlash(route),
      lastModified: lastUpdated,
      changeFrequency: changeFreq,
      priority,
    };
  });

  const legalRoutes = legalPages.map((route) => ({
    url: withTrailingSlash(route),
    lastModified: legalLastUpdated,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  const serviceRoutes = servicePages.map((route) => ({
    url: withTrailingSlash(route),
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const areaRoutes = AREA_SLUGS.map((slug) => ({
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

  const workRoutes = workPosts.map((post) => {
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
      url: withTrailingSlash(`/work/${post.id}`),
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    };
  });

  const talksRoutes = talksData.map((talk) => {
    let talkDate = lastUpdated;
    if (talk.date) {
      try {
        const parsed = new Date(talk.date);
        if (!isNaN(parsed.getTime())) {
          talkDate = parsed;
        }
      } catch {
        // Use default lastUpdated
      }
    }
    return {
      url: withTrailingSlash(`/talks/${talk.id}`),
      lastModified: talkDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    };
  });

  const helpSlugs = [
    'inspect',
    'unblock',
    'repair',
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
    ...legalRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...blogRoutes,
    ...workRoutes,
    ...talksRoutes,
    ...helpRoutes,
  ];

  const seen = new Set<string>();
  return all.filter((x) => {
    if (seen.has(x.url)) return false;
    seen.add(x.url);
    return true;
  });
}
