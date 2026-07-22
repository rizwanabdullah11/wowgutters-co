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
  { label: 'gutter cleaning', href: '/services/gutter-cleaning/' },
  { label: 'gutter repairs', href: '/services/gutter-repairs/' },
  { label: 'gutter maintenance', href: '/services/gutter-cleaning/' },
  { label: 'roof cleaning', href: '/services/roof-cleaning/' },
  { label: 'moss removal', href: '/roof-cleaning-birmingham/' },
  { label: 'roof moss removal', href: '/roof-cleaning-birmingham/' },
  { label: 'soft wash roof cleaning', href: '/services/roof-cleaning/' },
  { label: 'UPVC cleaning', href: '/services/upvc-cleaning/' },
  { label: 'fascia cleaning', href: '/services/upvc-cleaning/' },
  { label: 'soffit cleaning', href: '/services/upvc-cleaning/' },
  { label: 'fascia and soffit cleaning', href: '/services/upvc-cleaning/' },
  { label: 'commercial gutter cleaning', href: '/services/commercial-gutter-cleaning/' },
  { label: 'commercial roof cleaning', href: '/services/commercial-roof-cleaning/' },
  { label: 'hot wash cleaning', href: '/services/hot-wash-cleaning/' },
  { label: 'exterior cleaning', href: '/services/hot-wash-cleaning/' },
  { label: 'gutter inspection', href: '/services/gutter-inspection/' },
  { label: 'roof inspection', href: '/services/roof-inspection/' },
  { label: 'gutter installation', href: '/services/gutter-installation/' },
  { label: 'conservatory cleaning', href: '/services/conservatory/' },
  { label: 'window cleaning', href: '/windows-cleaning/' },
  { label: 'downpipe cleaning', href: '/services/gutter-cleaning/' },
  { label: 'downpipe unblocking', href: '/help/unblock/' },
  { label: 'blocked downpipe', href: '/help/unblock/' },
  { label: 'blocked gutters', href: '/services/gutter-cleaning/' },
  { label: 'gutter clearance', href: '/services/gutter-cleaning/' },
  { label: 'vacuum gutter cleaning', href: '/services/gutter-cleaning/' },
  { label: 'no ladders gutter cleaning', href: '/services/gutter-cleaning/' },
  { label: 'guttering services', href: '/services/gutter-cleaning/' },
  { label: 'Birmingham gutter cleaning', href: areaPath('birmingham') },
  { label: 'West Midlands gutter cleaning', href: areaPath('westmidlands') },
  { label: 'WOW Gutters Ltd', href: '/' },
  { label: 'Fascia cleaning', href: '/services/upvc-cleaning/' },
  { label: 'Soffits cleaning', href: '/services/upvc-cleaning/' },
  { label: 'Gutter clearing', href: '/services/gutter-cleaning/' },
  { label: 'free gutter inspection', href: '/services/gutter-inspection/' },
  { label: 'gutter cleaning prices', href: '/gutter-cleaning-prices/' },
  { label: 'free quote', href: '/quote/' },
  { label: 'get a free quote', href: '/quote/' },
  { label: 'commercial properties', href: '/services/commercial-gutter-cleaning/' },
  { label: 'gutter cleaning near me', href: '/gutter-cleaning-near-me/' },
  { label: 'roof moss treatment', href: '/services/roof-cleaning/' },
];

