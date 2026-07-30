import { areaPath, roofAreaPath, repairAreaPath } from '@/lib/areaSlugs';

export type AreaServiceKind = 'gutter' | 'roof' | 'repair';

export type AreaServiceMeta = {
  kind: AreaServiceKind;
  prefix: string;
  pathForSlug: (slug: string) => string;
  label: string;
  labelLower: string;
  defaultPriceFrom: number;
  defaultPriceTo: number;
  heroVideo: string;
  heroPoster: string;
  heroPills: readonly { label: string }[];
  whatsappQuestions: readonly string[];
  priceGuideHref: string;
  servicePageHref: string;
  schemaHubHref: string;
  schemaHubLabel: string;
  crawlFooterTitle: string;
  crawlFooterAria: string;
  nearbyLinkPrefix: string;
};

export const GUTTER_SERVICE_META: AreaServiceMeta = {
  kind: 'gutter',
  prefix: 'gutter-cleaning-',
  pathForSlug: areaPath,
  label: 'Gutter Cleaning',
  labelLower: 'gutter cleaning',
  defaultPriceFrom: 50,
  defaultPriceTo: 140,
  heroVideo: 'https://wowgutters.co.uk/gutter-final-video.mp4',
  heroPoster: '/gutter-hero-poster.jpg',
  heroPills: [
    { label: 'No ladders' },
    { label: 'Before & after photos' },
    { label: 'Fully insured' },
  ],
  whatsappQuestions: [
    'How much is gutter cleaning for my property?',
    'Do you have availability this week?',
    'Can you repair leaking or damaged gutters?',
    'Could I get a fast quote for my home?',
  ],
  priceGuideHref: '/pricing/',
  servicePageHref: '/services/gutter-cleaning/',
  schemaHubHref: 'https://wowgutters.co.uk/gutter-cleaning/',
  schemaHubLabel: 'Gutter Cleaning',
  crawlFooterTitle: 'Find gutter cleaning near you',
  crawlFooterAria: 'More gutter cleaning service areas',
  nearbyLinkPrefix: 'Gutter Cleaning',
};

export const ROOF_SERVICE_META: AreaServiceMeta = {
  kind: 'roof',
  prefix: 'roof-cleaning-',
  pathForSlug: roofAreaPath,
  label: 'Roof Cleaning',
  labelLower: 'roof cleaning',
  defaultPriceFrom: 150,
  defaultPriceTo: 450,
  heroVideo: '/roof-cleaning-video.mp4',
  heroPoster: '/roof-cleaning.JPG',
  heroPills: [
    { label: 'Soft-wash method' },
    { label: 'Moss & algae treatment' },
    { label: 'Fully insured' },
  ],
  whatsappQuestions: [
    'How much is roof cleaning for my property?',
    'Do you remove moss from roof tiles?',
    'Can you treat algae and lichen on my roof?',
    'Could I get a fast quote for my home?',
  ],
  priceGuideHref: '/help/clean/',
  servicePageHref: '/services/roof-cleaning/',
  schemaHubHref: 'https://wowgutters.co.uk/help/clean/',
  schemaHubLabel: 'Roof Cleaning',
  crawlFooterTitle: 'Find Roof Cleaning near you',
  crawlFooterAria: 'More roof cleaning service areas',
  nearbyLinkPrefix: 'Roof Cleaning',
};

export const REPAIR_SERVICE_META: AreaServiceMeta = {
  kind: 'repair',
  prefix: 'gutter-repair-',
  pathForSlug: repairAreaPath,
  label: 'Gutter Repairs',
  labelLower: 'gutter repairs',
  defaultPriceFrom: 80,
  defaultPriceTo: 250,
  heroVideo: '/gutter-repair (2).mp4',
  heroPoster: '/gutter-repair-before.png',
  heroPills: [
    { label: '6-month guarantee' },
    { label: 'Before & after photos' },
    { label: 'Fully insured' },
  ],
  whatsappQuestions: [
    'How much does gutter repair cost for my property?',
    'Do you have availability this week?',
    'Can you fix a leaking joint or sagging gutter?',
    'Could I get a fast quote for my home?',
  ],
  priceGuideHref: '/help/repair/',
  servicePageHref: '/services/gutter-repairs/',
  schemaHubHref: 'https://wowgutters.co.uk/gutter-repairs/',
  schemaHubLabel: 'Gutter Repairs',
  crawlFooterTitle: 'Find gutter repairs near you',
  crawlFooterAria: 'More gutter repair service areas',
  nearbyLinkPrefix: 'Gutter Repairs',
};

export const AREA_SERVICE_META: Record<AreaServiceKind, AreaServiceMeta> = {
  gutter: GUTTER_SERVICE_META,
  roof: ROOF_SERVICE_META,
  repair: REPAIR_SERVICE_META,
};

export function roofPriceFrom(gutterFrom: number): number {
  return Math.max(150, Math.round(gutterFrom * 2.5));
}

export function roofPriceTo(gutterTo: number): number {
  return Math.max(350, Math.round(gutterTo * 2.5));
}

export function repairPriceFrom(gutterFrom: number): number {
  return Math.max(80, Math.round(gutterFrom * 1.6));
}

export function repairPriceTo(gutterTo: number): number {
  return Math.max(180, Math.round(gutterTo * 1.6));
}
