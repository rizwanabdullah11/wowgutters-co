import { areaPath } from '@/lib/areaSlugs';

export type SeoKeywordLink = {
  label: string;
  href: string;
};

/**
 * This list is intentionally aligned to the keywords provided by the client.
 * Labels should match the visible text the user wants.
 */
export const SEO_KEYWORD_LINKS: SeoKeywordLink[] = [
  { label: 'gutter cleaning', href: '/services/gutter-cleaning' },
  { label: 'gutter repairs', href: '/services/gutter-repairs' },
  { label: 'gutter maintenance', href: '/services/gutter-cleaning' },
  { label: 'roof cleaning', href: '/services/roof-cleaning' },
  { label: 'UPVC cleaning', href: '/services/upvc-cleaning' },
  { label: 'commercial gutter cleaning', href: '/services/commercial-gutter-cleaning' },
  { label: 'commercial roof cleaning', href: '/services/commercial-roof-cleaning' },
  { label: 'hot wash cleaning', href: '/services/hot-wash-cleaning' },
  { label: 'gutter inspection', href: '/services/gutter-inspection' },
  { label: 'roof inspection', href: '/services/roof-inspection' },
  { label: 'Birmingham gutter cleaning', href: areaPath('birmingham') },
  { label: 'West Midlands gutter cleaning', href: areaPath('westmidlands') },
  { label: 'WOW Gutters Ltd', href: '/' },
  { label: 'Fascia cleaning', href: '/services/upvc-cleaning' },
  { label: 'Soffits cleaning', href: '/services/upvc-cleaning' },
  { label: 'Gutter clearing', href: '/services/gutter-cleaning' },
];

