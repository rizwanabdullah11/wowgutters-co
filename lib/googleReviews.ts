import { gbpReviewUrl } from '@/lib/businessDetails';

/**
 * Google rating shown in site copy. reviewCountLabel is a rounded-down floor of the live
 * Google Business Profile count (2,696 in Oct 2026) — update it every few months, never round up.
 */
export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.9,
  ratingLabel: '4.9',
  starsDisplay: '4.9/5',
  reviewCountLabel: '2,600+',
} as const;

export function googleReviewsHeadline(city?: string): string {
  const place = city?.trim();
  if (place) {
    return `What ${place} customers say about WOW Gutters Ltd`;
  }
  return 'What customers say about WOW Gutters Ltd';
}

export function googleReviewsSubline(): string {
  return `${GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ from ${GOOGLE_REVIEWS_SUMMARY.reviewCountLabel} Google reviews · Fully insured (£10m) · Before & after photos · Open 24 hours.`;
}

export function googleReviewsCrawlSummary(): string {
  return `WOW Gutters Ltd is rated ${GOOGLE_REVIEWS_SUMMARY.ratingLabel} out of 5 from ${GOOGLE_REVIEWS_SUMMARY.reviewCountLabel} Google reviews across Birmingham and the West Midlands. Homeowners praise our punctuality, before-and-after photos, and honest gutter condition reports.`;
}

export { gbpReviewUrl };
