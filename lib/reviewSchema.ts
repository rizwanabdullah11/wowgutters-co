import {
  FEATURED_GOOGLE_REVIEWS,
  featuredReviewsAggregateRating,
  type FeaturedGoogleReview,
} from '@/constants/googleReviewsData';

/**
 * Review / AggregateRating structured data is intentionally DISABLED (Oct 2026).
 *
 * The same 6 featured reviews were being marked up on 300+ pages, and pages
 * claimed conflicting ratings (4.9 from 100 vs 4.8 from 6). Google's review
 * snippet guidelines require reviews to be about the specific page and ratings
 * to match the real source; duplicated or unverifiable review markup risks a
 * "spammy structured data" manual action.
 *
 * Visible reviews on the page are unaffected. To re-enable, mark up only real,
 * verbatim Google reviews per page with the true GBP rating and count.
 */
export function buildReviewSchemaFields(_businessId: string, _reviews: FeaturedGoogleReview[] = FEATURED_GOOGLE_REVIEWS) {
  void featuredReviewsAggregateRating;
  return { aggregateRating: undefined, review: undefined } as {
    aggregateRating: undefined;
    review: undefined;
  };
}
