import { MetadataRoute } from 'next';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { blogPosts } from '@/constants/blogData';
import { workPosts } from '@/constants/workData';
import { talksData } from '@/constants/talksData';
import { servicesData } from '@/constants/servicesData';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wowgutters.co.uk';
  
  const withTrailingSlash = (route: string) => {
    if (!route) return `${baseUrl}/`;
    return route.endsWith('/') ? `${baseUrl}${route}` : `${baseUrl}${route}/`;
  };

  // Static pages
  const staticPages = [
    '',
    '/about',
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
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/quote',
  ];

  // Service pages
  const servicePages = [
    '/services/gutter-cleaning',
    '/services/gutter-repairs',
    '/services/conservatory-cleaning',
    '/services/commercial-gutter-cleaning',
    '/services/roof-cleaning',
    '/services/upvc-cleaning',
    '/services/hot-wash-cleaning',
    '/services/drain-cleaning',
    '/services/free-gutter-inspection',
    '/services/water-butt',
    '/services/commercial',
    '/services/conservatory',
    '/services/inspection',
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: withTrailingSlash(route),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = servicePages.map((route) => ({
    url: withTrailingSlash(route),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const areaRoutes = AREA_SLUGS.map((slug) => ({
    url: withTrailingSlash(areaPath(slug)),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: withTrailingSlash(`/blog/${post.id}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const workRoutes = workPosts.map((post) => ({
    url: withTrailingSlash(`/work/${post.id}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  const talksRoutes = talksData.map((talk) => ({
    url: withTrailingSlash(`/talks/${talk.id}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  const helpSlugs = [
    'inspect',
    'unblock',
    'repair',
    'clean',
    ...servicesData.map((s) => s.id),
  ];

  const helpRoutes = helpSlugs.map((slug) => ({
    url: withTrailingSlash(`/help/${slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // De-duplicate URLs (some routes can overlap if lists change)
  const all = [
    ...staticRoutes,
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
