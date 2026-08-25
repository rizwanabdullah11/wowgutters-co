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

export const FEATURED_GOOGLE_REVIEWS: FeaturedGoogleReview[] = [
  {
    id: 'review-birmingham-terrace',
    authorName: 'James M.',
    datePublished: '2026-03-12',
    rating: 5,
    location: 'Birmingham',
    reviewBody:
      'Brilliant service from start to finish. Gutters were badly blocked and they cleared everything from the ground with no ladders against the house. Before and after photos sent the same day.',
  },
  {
    id: 'review-solihull-semi',
    authorName: 'Helen T.',
    datePublished: '2026-02-28',
    rating: 5,
    location: 'Solihull',
    reviewBody:
      'Punctual, polite and very thorough. Downpipes were tested before they left and the price matched the quote with no extras on the day.',
  },
  {
    id: 'review-aston-landlord',
    authorName: 'Robert K.',
    datePublished: '2026-02-15',
    rating: 5,
    location: 'Aston, Birmingham',
    reviewBody:
      'Used WOW Gutters Ltd on a rental terrace in Aston. Narrow access was not a problem. Photos were perfect for our maintenance file and the gutters have flowed properly since.',
  },
  {
    id: 'review-edgbaston-period',
    authorName: 'Priya S.',
    datePublished: '2026-01-22',
    rating: 5,
    location: 'Edgbaston',
    reviewBody:
      'Careful on our period property — no damage to fascia or tiles. Honest report about a loose bracket and no hard sell for repairs.',
  },
  {
    id: 'review-wolverhampton-detached',
    authorName: 'David W.',
    datePublished: '2026-01-08',
    rating: 5,
    location: 'Wolverhampton',
    reviewBody:
      'Large detached with trees overhanging the roof. Team cleared long gutter runs and all downpipes in one visit. Would book again for autumn.',
  },
  {
    id: 'review-coventry-clean',
    authorName: 'Sarah L.',
    datePublished: '2025-12-18',
    rating: 4,
    location: 'Coventry',
    reviewBody:
      'Very good clean and communication. Arrived on time and left the drive tidy. Only reason for four stars is I had to reschedule once due to weather.',
  },
];

export function featuredReviewsAggregateRating() {
  return {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  };
}
