'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ContentUpdatedNotice from '@/components/seo/ContentUpdatedNotice';
import { SEASONAL_HOT_WASH_COPY } from '@/lib/contentFreshness';

export default function HotWashPage() {
  return (
    <main className="bg-gray-50">
      <section 
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
              Deep Cleaning Technology
            </p>
            <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
              Hot Wash Cleaning
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
              When regular cold water pressure washing isn't enough, our industrial Hot Wash systems melt through stubborn dirt, grease, and biological growth.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Get a Hot Wash Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: colors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.text }}>
                 Hot Water Pressure Cleaning Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.primary}}>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primaryText }}>Melts Tough Stains</h3>
                    <p style={{ color: colors.textLight }}>Hot water effectively dissolves oil and grease. Just as you wouldn't wash greasy pans in cold water, hot water is infinitely superior for tough outdoor stains.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.primary}}>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primaryText }}>Kills Bacteria & Spores</h3>
                    <p style={{ color: colors.textLight }}>Temperatures exceeding 90°C efficiently sanitize surfaces, destroying algae, lichen, and moss spores, slowing down regrowth drastically.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.text }}>
            What we hot wash
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: colors.textLight }}>
            Our hot wash service is used across Birmingham and the West Midlands on surfaces where cold water alone leaves
            staining behind. Heated water at controlled pressure lifts grease, traffic film, algae and black spotting without
            the harsh scrubbing that can scratch uPVC or loosen pointing.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10" style={{ color: colors.textLight }}>
            <li>• uPVC fascias, soffits and gutter faces</li>
            <li>• Driveways, block paving and patios</li>
            <li>• Shop fronts, forecourts and bin stores</li>
            <li>• Walls, render and garden paths</li>
            <li>• Commercial car parks and loading bays</li>
            <li>• Conservatory frames and window sills</li>
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.text }}>
            How a hot wash visit works
          </h2>
          <ol className="space-y-3 mb-10 list-decimal pl-5 leading-relaxed" style={{ color: colors.textLight }}>
            <li>We look at the surface, the type of staining and any delicate areas such as render or older brick.</li>
            <li>We set the water temperature and pressure for that surface, then pre-treat heavy grease or algae.</li>
            <li>Each section is cleaned and rinsed so dirty water does not run back over finished areas.</li>
            <li>We clear the run-off, check the result with you and take before &amp; after photos.</li>
          </ol>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.text }}>
            Hot wash questions
          </h2>
          <div className="space-y-5 leading-relaxed" style={{ color: colors.textLight }}>
            <div>
              <h3 className="font-bold mb-1" style={{ color: colors.text }}>Is hot washing safe for uPVC and render?</h3>
              <p>Yes. We adjust temperature and pressure for each surface, so uPVC, render and painted finishes are cleaned without damage.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1" style={{ color: colors.text }}>Can you combine it with gutter cleaning?</h3>
              <p>Yes. Many customers book a gutter vacuum clean and a fascia and soffit hot wash on the same visit so the whole roofline is finished in one go.</p>
            </div>
            <div>
              <h3 className="font-bold mb-1" style={{ color: colors.text }}>Are you insured?</h3>
              <p>Yes. WOW Gutters Ltd is fully insured, and every job is covered by our public liability insurance.</p>
            </div>
          </div>
          <p className="mt-8" style={{ color: colors.textLight }}>
            For a free quote, call <a href="tel:07421433910" className="font-semibold underline" style={{ color: colors.primaryText }}>07421 433910</a>{' '}
            or <Link href="/quote/" className="font-semibold underline" style={{ color: colors.primaryText }}>request a quote online</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            {SEASONAL_HOT_WASH_COPY.heading}
          </h2>
          <ContentUpdatedNotice className="text-center mb-10 max-w-2xl mx-auto" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { season: 'Summer', text: SEASONAL_HOT_WASH_COPY.summer },
              { season: 'Autumn', text: SEASONAL_HOT_WASH_COPY.autumn },
              { season: 'Winter', text: SEASONAL_HOT_WASH_COPY.winter },
            ].map((item) => (
              <div key={item.season} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.primaryText }}>
                  {item.season}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center" style={{ color: colors.textLight }}>
            Pair hot wash with gutter vacuuming for a full roofline refresh.{' '}
            <Link href="/the-gutter-gallery/" className="font-semibold underline" style={{ color: colors.primaryText }}>
              View recent case studies
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
