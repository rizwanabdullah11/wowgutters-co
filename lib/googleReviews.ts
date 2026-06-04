import { gbpReviewUrl } from '@/lib/businessDetails';

/** Canonical Google Business Profile review stats — keep aligned with schema (localBusinessSchemaGraph). */
export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.9,
  ratingLabel: '4.9',
  reviewCount: 2696,
  reviewCountLabel: '2,696+',
  starsDisplay: '4.9/5',
} as const;

export function googleReviewsHeadline(city?: string): string {
  const place = city?.trim();
  if (place) {
    return `What ${place} customers say about WOW Gutters`;
  }
  return 'What customers say about WOW Gutters';
}

export function googleReviewsSubline(): string {
  const { ratingLabel, reviewCountLabel } = GOOGLE_REVIEWS_SUMMARY;
  return `${ratingLabel} based on ${reviewCountLabel} verified Google reviews. Fully insured · Before & after photos · 7 days a week.`;
}

export function googleReviewsCrawlSummary(): string {
  const { ratingLabel, reviewCountLabel } = GOOGLE_REVIEWS_SUMMARY;
  return `WOW Gutters is rated ${ratingLabel} out of 5 from over ${reviewCountLabel} verified Google reviews across Birmingham and the West Midlands. Homeowners praise our punctuality, before-and-after photos, and honest gutter condition reports.`;
}

export { gbpReviewUrl };
