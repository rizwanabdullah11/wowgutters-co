import { gbpReviewUrl } from '@/lib/businessDetails';

/** Display-only rating — review count comes from the live Google widget, not hardcoded copy. */
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
  return `${GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ on Google · 1-year service guarantee · Before & after photos · 7 days a week.`;
}

export function googleReviewsCrawlSummary(): string {
  return `WOW Gutters Ltd is rated ${GOOGLE_REVIEWS_SUMMARY.ratingLabel} out of 5 on Google across Birmingham and the West Midlands. Homeowners praise our punctuality, before-and-after photos, and honest gutter condition reports.`;
}

export { gbpReviewUrl };
