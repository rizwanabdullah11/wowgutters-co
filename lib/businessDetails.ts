/** Canonical NAP — keep aligned with Google Business Profile and schema in pageSchemaGraphs.ts */

export const WOW_GUTTERS_NAP = {
  name: 'WOW Gutters Ltd',
  streetAddress: '38 Ryland Street',
  addressLocality: 'Birmingham',
  addressRegion: 'West Midlands',
  postalCode: 'B16 8DD',
  country: 'GB',
  phoneDisplay: '07421 433910',
  phoneE164: '+447421433910',
  email: 'support@wowgutters.co.uk',
  website: 'https://wowgutters.co.uk',
  // Pin from the Google Business Profile (Oct 2026) — keep schema geo on the real HQ location.
  geo: { latitude: 52.4760288, longitude: -1.91898 },
} as const;

/**
 * Google Business Profile — "Wow Gutters Ltd" (owner shared link: https://share.google/9KGqrTF2RyEDoIy4Q).
 * CID 18206401737056874662 = Maps feature 0xec0dc4adc5a3ce1:0xfcaa21eb0f5470a6, knowledge graph /g/11wxx50y4q.
 * NEXT_PUBLIC_GBP_* env vars still override these if set.
 */
export const GOOGLE_BUSINESS_PROFILE = {
  name: 'Wow Gutters Ltd',
  cid: '18206401737056874662',
  mapsUrl: 'https://maps.google.com/?cid=18206401737056874662',
  shareUrl: 'https://share.google/9KGqrTF2RyEDoIy4Q',
  // Opens Google's "write a review" box for this listing.
  reviewUrl:
    'https://www.google.com/search?q=Wow+Gutters+Ltd#lrd=0xec0dc4adc5a3ce1:0xfcaa21eb0f5470a6,3,,,',
  // Opens the listing's reviews panel.
  reviewsListUrl:
    'https://www.google.com/search?q=Wow+Gutters+Ltd#lrd=0xec0dc4adc5a3ce1:0xfcaa21eb0f5470a6,1,,,',
} as const;

/** Social profiles confirmed by the owner (Oct 2026) — must match the Google Business Profile. */
export const SOCIAL_PROFILES = [
  { name: 'Google Business Profile', url: GOOGLE_BUSINESS_PROFILE.mapsUrl },
  { name: 'Facebook', url: 'https://web.facebook.com/wowgutters.co.uk' },
  { name: 'Instagram', url: 'https://www.instagram.com/wowgutters/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/wow-gutters' },
  { name: 'LinkedIn (profile)', url: 'https://www.linkedin.com/in/wow-gutters-ltd-1b5a58318' },
  { name: 'Pinterest', url: 'https://uk.pinterest.com/wowguttersltd/' },
] as const;

export function formatNapAddress(): string {
  const { streetAddress, addressLocality, postalCode, addressRegion } = WOW_GUTTERS_NAP;
  return `${streetAddress}, ${addressLocality} ${postalCode}, ${addressRegion}`;
}

export function gbpProfileUrl(): string {
  const url = (process.env.NEXT_PUBLIC_GBP_CID_URL || process.env.NEXT_PUBLIC_GBP_URL || '').trim();
  return url || GOOGLE_BUSINESS_PROFILE.mapsUrl;
}

export function gbpReviewUrl(): string {
  const url = (process.env.NEXT_PUBLIC_GBP_REVIEW_URL || '').trim();
  return url || GOOGLE_BUSINESS_PROFILE.reviewUrl;
}
