import ElfsightReviews from '@/components/sections/ElfsightReviews';

/**
 * Homepage reviews, directly after the price strip — the live Google reviews only.
 * The heading is visually hidden (screen readers + build check assert-js-seo need it).
 */
export default function HomeTrustReviews() {
  return (
    <section aria-labelledby="home-reviews-heading" className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="home-reviews-heading" className="sr-only">
          What Customers Say About WOW Gutters Ltd
        </h2>
        <ElfsightReviews showSummary={false} />
      </div>
    </section>
  );
}
