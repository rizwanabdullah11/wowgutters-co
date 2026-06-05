import {
  FEATURED_GOOGLE_REVIEWS,
  featuredReviewsAggregateRating,
  type FeaturedGoogleReview,
} from '@/constants/googleReviewsData';

export function buildReviewSchemaFields(businessId: string, reviews: FeaturedGoogleReview[] = FEATURED_GOOGLE_REVIEWS) {
  const aggregateRating = featuredReviewsAggregateRating();

  const review = reviews.map((item, index) => ({
    '@type': 'Review' as const,
    '@id': `${businessId}#review-${index + 1}`,
    itemReviewed: { '@id': businessId },
    author: { '@type': 'Person' as const, name: item.authorName },
    datePublished: item.datePublished,
    reviewBody: item.reviewBody,
    reviewRating: {
      '@type': 'Rating' as const,
      ratingValue: String(item.rating),
      bestRating: '5',
      worstRating: '1',
    },
  }));

  return { aggregateRating, review };
}
