import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/constants/colors';
import ElfsightReviews from '@/components/sections/ElfsightReviews';

/**
 * Google reviews section. Nov 2026: the "Rated 4.9★ on Google" text box above the widget was
 * removed on every page at the owner's request; pages now show the live reviews only, placed
 * straight after the hero like the homepage (HomeTrustReviews).
 */
type GoogleReviewsBlockProps = {
  city?: string;
  variant?: 'homepage' | 'page';
  className?: string;
};

export default function GoogleReviewsBlock({ city, variant = 'page', className = '' }: GoogleReviewsBlockProps) {
  if (variant !== 'homepage') {
    return (
      <section className={`py-10 md:py-14 ${className}`} aria-labelledby="page-reviews-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="page-reviews-heading" className="sr-only">
            {city ? `What ${city} customers say about WOW Gutters Ltd` : 'What customers say about WOW Gutters Ltd'}
          </h2>
          <ElfsightReviews showSummary={false} />
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-16 md:py-20 ${className}`}
      style={{ backgroundColor: colors.white }}
      aria-labelledby="google-reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2
            id="google-reviews-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ color: colors.text }}
          >
            What Customers Say About WOW Gutters Ltd
          </h2>
          <Link
            href="/reviews/"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{ color: colors.primary }}
          >
            See All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <ElfsightReviews showSummary={false} />
      </div>
    </section>
  );
}
