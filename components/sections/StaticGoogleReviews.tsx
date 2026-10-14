import { FEATURED_GOOGLE_REVIEWS } from '@/constants/googleReviewsData';

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

/** Server-rendered reviews (visible only — no Review structured data, see lib/reviewSchema.ts). */
export default function StaticGoogleReviews({ className = '' }: StaticGoogleReviewsProps) {
  return (
    <div className={className}>
      <p className="text-center text-sm text-slate-500 mb-6">
        A selection of customer reviews. Additional live reviews load in the widget when available.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
        {FEATURED_GOOGLE_REVIEWS.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div>
              <Stars rating={item.rating} />
            </div>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              {item.reviewBody}
            </p>
            <p className="mt-4 text-sm font-bold text-slate-900">
              {item.authorName}
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
