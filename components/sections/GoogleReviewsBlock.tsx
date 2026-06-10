import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/constants/colors';
import ElfsightReviews from '@/components/sections/ElfsightReviews';

type GoogleReviewsBlockProps = {
  city?: string;
  variant?: 'homepage' | 'page';
  className?: string;
};

export default function GoogleReviewsBlock({
  variant = 'page',
  className = '',
}: GoogleReviewsBlockProps) {
  const isHomepage = variant === 'homepage';

  if (!isHomepage) {
    return (
      <section className={`py-16 md:py-20 ${className}`} aria-label="Customer reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
