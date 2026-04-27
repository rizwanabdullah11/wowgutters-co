import { MetadataRoute } from 'next';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wowgutters.co.uk';
  
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
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = servicePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const areaRoutes = AREA_SLUGS.map((slug) => ({
    url: `${baseUrl}${areaPath(slug).replace(/\/$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
