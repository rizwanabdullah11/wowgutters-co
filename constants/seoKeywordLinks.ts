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
  { label: 'gutter cleaning', href: '/help/unblock' },
  { label: 'gutter repairs', href: '/help/repair' },
  { label: 'gutter maintenance', href: '/help/unblock' },
  { label: 'roof cleaning', href: '/help/clean' },
  { label: 'UPVC cleaning', href: '/services/upvc-cleaning' },
  { label: 'commercial gutter cleaning', href: '/commercial' },
  { label: 'hot wash cleaning', href: '/services/hot-wash-cleaning' },
  { label: 'gutter inspection', href: '/help/inspect' },
  { label: 'Birmingham gutter cleaning', href: areaPath('birmingham') },
  { label: 'West Midlands gutter cleaning', href: areaPath('west-midlands') },
  { label: 'WOW Gutters', href: '/' },
  { label: 'Fascia cleaning', href: '/services/upvc-cleaning' },
  { label: 'Soffits cleaning', href: '/services/upvc-cleaning' },
  { label: 'Gutter clearing', href: '/help/unblock' },
];

