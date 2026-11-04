import { gbpReviewUrl } from '@/lib/businessDetails';
import { pickVariant } from '@/lib/localVariants';

/**
 * Google rating shown in site copy. reviewCountLabel is a rounded-down floor of the live
 * Google Business Profile count (2,696 in Oct 2026) — update it every few months, never round up.
 */
export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.9,
  ratingLabel: '4.9',
  starsDisplay: '4.9/5',
} as const;

export function googleReviewsHeadline(city?: string): string {
  const place = city?.trim();
  if (place) {
    return `What ${place} customers say about WOW Gutters Ltd`;
  }
  return 'What customers say about WOW Gutters Ltd';
}

export function googleReviewsSubline(): string {
  return `${GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ · Fully insured · Before & after photos · Open 24 hours.`;
}

export function googleReviewsCrawlSummary(city?: string): string {
  const r = GOOGLE_REVIEWS_SUMMARY.ratingLabel;
  const place = city?.trim();
  if (!place || place === 'Birmingham') {
    return `WOW Gutters Ltd is rated ${r} out of 5 across Birmingham and the West Midlands. Homeowners praise our punctuality, before-and-after photos, and honest gutter condition reports.`;
  }
  // Nov 2026: one sentence per page instead of the same 26 words on every area page.
  return pickVariant(place, [
    `Rated ${r} out of 5 on Google. Customers in and around ${place} mention arriving on time, the before & after photos, and straight answers about the state of their gutters.`,
    `${place} homeowners can check our ${r}★ Google rating before booking — reviews regularly mention tidy work, photo proof and no pressure to buy extra work.`,
    `Our ${r}★ Google rating comes from real customers across the West Midlands, ${place} included. Read what they say about our punctuality and photo reports below.`,
    `Before you book in ${place}, see our ${r}★ Google reviews: people mention clear prices, before & after photos and honest advice on repairs.`,
  ]);
}

export { gbpReviewUrl };
