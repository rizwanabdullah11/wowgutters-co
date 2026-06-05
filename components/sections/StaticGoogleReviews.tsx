import { FEATURED_GOOGLE_REVIEWS, featuredReviewsAggregateRating } from '@/constants/googleReviewsData';

type StaticGoogleReviewsProps = {
  className?: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'opacity-100' : 'opacity-25'}>
          ★
        </span>
      ))}
    </span>
  );
}

/** Server-rendered reviews — present in static export HTML and matched by JSON-LD Review nodes. */
export default function StaticGoogleReviews({ className = '' }: StaticGoogleReviewsProps) {
  const aggregate = featuredReviewsAggregateRating();

  return (
    <div className={className}>
      <p className="text-center text-sm text-slate-500 mb-6">
        {aggregate.ratingValue}★ average from {aggregate.reviewCount} featured Google reviews shown below.
        Additional live reviews load in the widget when available.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
        {FEATURED_GOOGLE_REVIEWS.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            itemScope
            itemType="https://schema.org/Review"
          >
            <meta itemProp="datePublished" content={item.datePublished} />
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={String(item.rating)} />
              <meta itemProp="bestRating" content="5" />
              <Stars rating={item.rating} />
            </div>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed" itemProp="reviewBody">
              {item.reviewBody}
            </p>
            <p className="mt-4 text-sm font-bold text-slate-900">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{item.authorName}</span>
              </span>
              {item.location ? (
                <span className="font-normal text-slate-500"> · {item.location}</span>
              ) : null}
            </p>
            <time className="sr-only" dateTime={item.datePublished}>
              {item.datePublished}
            </time>
          </li>
        ))}
      </ul>
    </div>
  );
}
