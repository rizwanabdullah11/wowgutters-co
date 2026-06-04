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
  geo: { latitude: 52.4862, longitude: -1.8904 },
} as const;

export function formatNapAddress(): string {
  const { streetAddress, addressLocality, postalCode, addressRegion } = WOW_GUTTERS_NAP;
  return `${streetAddress}, ${addressLocality} ${postalCode}, ${addressRegion}`;
}

export function gbpProfileUrl(): string | undefined {
  const url = (process.env.NEXT_PUBLIC_GBP_CID_URL || process.env.NEXT_PUBLIC_GBP_URL || '').trim();
  return url || undefined;
}

export function gbpReviewUrl(): string | undefined {
  const url = (process.env.NEXT_PUBLIC_GBP_REVIEW_URL || '').trim();
  return url || gbpProfileUrl();
}
