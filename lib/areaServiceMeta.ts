import { areaPath, roofAreaPath, repairAreaPath, inspectionAreaPath, roofInspectionAreaPath, upvcAreaPath } from '@/lib/areaSlugs';

export type AreaServiceKind = 'gutter' | 'roof' | 'repair' | 'inspection' | 'roof-inspection' | 'upvc';

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

export const INSPECTION_SERVICE_META: AreaServiceMeta = {
  kind: 'inspection',
  prefix: 'gutter-inspection-',
  pathForSlug: inspectionAreaPath,
  label: 'Gutter Inspection',
  labelLower: 'gutter inspection',
  defaultPriceFrom: 0,
  defaultPriceTo: 0,
  heroVideo: '/gutter-cleaning-video.mp4',
  heroPoster: '/gutter-inspection.png',
  heroPills: [
    { label: 'Free of charge' },
    { label: 'Photo report included' },
    { label: 'Fully insured' },
  ],
  whatsappQuestions: [
    'Is the gutter inspection really free?',
    'What do you check during a gutter inspection?',
    'How long does a gutter inspection take?',
    'Do you send a report after the inspection?',
  ],
  priceGuideHref: '/services/gutter-inspection/',
  servicePageHref: '/services/gutter-inspection/',
  schemaHubHref: 'https://wowgutters.co.uk/services/gutter-inspection/',
  schemaHubLabel: 'Gutter Inspection',
  crawlFooterTitle: 'Find gutter inspections near you',
  crawlFooterAria: 'More gutter inspection service areas',
  nearbyLinkPrefix: 'Gutter Inspection',
};

export const UPVC_SERVICE_META: AreaServiceMeta = {
  kind: 'upvc',
  prefix: 'exterior-upvc-cleaning-',
  pathForSlug: upvcAreaPath,
  label: 'Exterior uPVC Cleaning',
  labelLower: 'exterior uPVC cleaning',
  defaultPriceFrom: 120,
  defaultPriceTo: 400,
  heroVideo: '/exterior-upvc-video.mp4',
  heroPoster: '/upvc-cleaning.jpg',
  heroPills: [
    { label: 'Hot purified water' },
    { label: 'Algae & mould removal' },
    { label: 'Streak-free finish' },
  ],
  whatsappQuestions: [
    'How much is exterior uPVC cleaning for my property?',
    'Can you clean fascias, soffits and window frames?',
    'Do you remove green algae and black mould from uPVC?',
    'Could I get a fast quote for my home?',
  ],
  priceGuideHref: '/help/clean/',
  servicePageHref: '/services/upvc-cleaning/',
  schemaHubHref: 'https://wowgutters.co.uk/upvc-cleaning/',
  schemaHubLabel: 'Exterior uPVC Cleaning',
  crawlFooterTitle: 'Find exterior uPVC cleaning near you',
  crawlFooterAria: 'More exterior uPVC cleaning service areas',
  nearbyLinkPrefix: 'Exterior uPVC Cleaning',
};

export const ROOF_INSPECTION_SERVICE_META: AreaServiceMeta = {
  kind: 'roof-inspection',
  prefix: 'roof-inspection-',
  pathForSlug: roofInspectionAreaPath,
  label: 'Roof Inspection',
  labelLower: 'roof inspection',
  defaultPriceFrom: 0,
  defaultPriceTo: 0,
  heroVideo: '/roof-cleaning-video.mp4',
  heroPoster: '/roof-cleaning.JPG',
  heroPills: [
    { label: 'Free of charge' },
    { label: 'Condition report included' },
    { label: 'Fully insured' },
  ],
  whatsappQuestions: [
    'Is the roof inspection really free?',
    'What do you check during a roof inspection?',
    'How long does a roof inspection take?',
    'Do you send a report after the inspection?',
  ],
  priceGuideHref: '/services/roof-inspection/',
  servicePageHref: '/services/roof-inspection/',
  schemaHubHref: 'https://wowgutters.co.uk/services/roof-inspection/',
  schemaHubLabel: 'Roof Inspection',
  crawlFooterTitle: 'Find roof inspections near you',
  crawlFooterAria: 'More roof inspection service areas',
  nearbyLinkPrefix: 'Roof Inspection',
};

export const AREA_SERVICE_META: Record<AreaServiceKind, AreaServiceMeta> = {
  gutter: GUTTER_SERVICE_META,
  roof: ROOF_SERVICE_META,
  repair: REPAIR_SERVICE_META,
  inspection: INSPECTION_SERVICE_META,
  'roof-inspection': ROOF_INSPECTION_SERVICE_META,
  upvc: UPVC_SERVICE_META,
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

export function upvcPriceFrom(gutterFrom: number): number {
  return Math.max(120, Math.round(gutterFrom * 2.2));
}

export function upvcPriceTo(gutterTo: number): number {
  return Math.max(280, Math.round(gutterTo * 2.6));
}
