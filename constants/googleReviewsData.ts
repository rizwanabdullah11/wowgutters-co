/** Featured Google reviews — visible in static HTML and JSON-LD (keep text aligned with live GBP). */

export type FeaturedGoogleReview = {
  id: string;
  authorName: string;
  /** ISO 8601 date */
  datePublished: string;
  rating: number;
  reviewBody: string;
  location?: string;
};

export const FEATURED_GOOGLE_REVIEWS: FeaturedGoogleReview[] = [];


export function featuredReviewsAggregateRating() {
  return {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  };
}
