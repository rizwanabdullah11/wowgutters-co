import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/constants/colors';
import ElfsightReviews from '@/components/sections/ElfsightReviews';
import { googleReviewsHeadline, googleReviewsSubline, gbpReviewUrl } from '@/lib/googleReviews';

type GoogleReviewsBlockProps = {
  city?: string;
  variant?: 'homepage' | 'page';
  className?: string;
};

export default function GoogleReviewsBlock({
  city,
  variant = 'page',
  className = '',
}: GoogleReviewsBlockProps) {
  const reviewUrl = gbpReviewUrl();
  const isHomepage = variant === 'homepage';

  return (
    <section
      className={`py-16 md:py-20 ${className}`}
      style={{ backgroundColor: isHomepage ? colors.white : undefined }}
      aria-labelledby="google-reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHomepage ? (
          <>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: colors.primary }}
              >
                Local Customer Feedback
              </span>
              <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
            </div>
            <div className="flex items-end justify-between mb-10">
              <h2
                id="google-reviews-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black"
                style={{ color: colors.text }}
              >
                What Customers Say About WOW Gutters
              </h2>
              <Link
                href="/reviews/"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-bold transition-opacity hover:opacity-70"
                style={{ color: colors.primary }}
              >
                See All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
                style={{ color: colors.primary }}
              >
                Customer reviews
              </p>
              <h2 id="google-reviews-heading" className="text-3xl md:text-4xl font-black text-slate-900">
                {googleReviewsHeadline(city)}
              </h2>
              <p className="text-slate-600 mt-2">{googleReviewsSubline()}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {reviewUrl ? (
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white text-center"
                  style={{ background: colors.primaryGradient }}
                >
                  Leave a Google review
                </a>
              ) : null}
              <Link
                href="/reviews/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold border-2 text-center"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                See all reviews
              </Link>
            </div>
          </div>
        )}

        <ElfsightReviews showSummary={!isHomepage} />
      </div>
    </section>
  );
}
