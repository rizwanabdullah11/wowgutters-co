import { Star, MapPin } from 'lucide-react';
import { colors } from '@/constants/colors';
import { FEATURED_GOOGLE_REVIEWS } from '@/constants/googleReviewsData';

function formatReviewDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

export default function FeaturedReviewsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {FEATURED_GOOGLE_REVIEWS.map((review) => (
        <article
          key={review.id}
          className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
        >
          <div className="mb-3 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                fill={i < review.rating ? '#FBBF24' : 'transparent'}
                stroke={i < review.rating ? '#FBBF24' : '#D1D5DB'}
              />
            ))}
          </div>
          <blockquote className="mb-4 flex-1 text-gray-700 leading-relaxed">
            &ldquo;{review.reviewBody}&rdquo;
          </blockquote>
          <footer className="border-t border-gray-100 pt-4">
            <p className="font-bold text-gray-900">{review.authorName}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              {review.location ? (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" style={{ color: colors.primary }} />
                  {review.location}
                </span>
              ) : null}
              <span>· {formatReviewDate(review.datePublished)}</span>
            </div>
          </footer>
        </article>
      ))}
    </div>
  );
}
