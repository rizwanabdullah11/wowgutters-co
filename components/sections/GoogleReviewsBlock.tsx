import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/constants/colors';
import ElfsightReviews from '@/components/sections/ElfsightReviews';
import {
  GOOGLE_REVIEWS_SUMMARY,
  googleReviewsHeadline,
  googleReviewsSubline,
  gbpReviewUrl,
} from '@/lib/googleReviews';

type GoogleReviewsBlockProps = {
  /** Optional area/city name for the section heading */
  city?: string;
  /** Compact layout for area/service/blog pages */
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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-8">
          <div className="lg:w-[280px] shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 bg-slate-50/80 text-center">
            <img src="/images/google-g.svg" alt="Google" width={32} height={32} className="w-8 h-8 mb-3" />
            <p className="text-lg font-black text-slate-900">Excellent</p>
            <p className="text-sm font-bold text-slate-700 mt-1">WOW Gutters</p>
            <p className="text-2xl font-black mt-2" style={{ color: '#f59e0b' }}>
              {GOOGLE_REVIEWS_SUMMARY.starsDisplay}
            </p>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              Based on {GOOGLE_REVIEWS_SUMMARY.reviewCountLabel} reviews
            </p>
            {reviewUrl ? (
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full rounded-full px-5 py-2.5 text-sm font-bold text-white"
                style={{ backgroundColor: colors.primary }}
              >
                View on Google
              </a>
            ) : null}
          </div>
          <div className="flex-1 min-w-0">
            <ElfsightReviews showSummary={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
