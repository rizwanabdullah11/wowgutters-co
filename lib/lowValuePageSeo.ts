import type { Metadata } from 'next';

/** Paths excluded from XML sitemap to preserve crawl budget for location pages. */
export const SITEMAP_EXCLUDED_PATHS = [
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookie-policy',
  '/awards',
  '/talks',
  '/work',
] as const;

/** robots.txt disallow — crawlers may still follow footer links but won't prioritise these URLs. */
export const CRAWL_DISALLOW_PATHS = [
  '/privacy-policy/',
  '/terms-and-conditions/',
  '/cookie-policy/',
  '/awards/',
  '/talks/',
  '/work/',
] as const;

export const lowValuePageRobots: Metadata['robots'] = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
};
