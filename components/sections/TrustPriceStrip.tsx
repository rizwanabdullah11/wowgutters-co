import Link from 'next/link';
import { GUTTER_PRICING, formatGbp } from '@/constants/gutterPricing';
import { GOOGLE_REVIEWS_SUMMARY } from '@/lib/googleReviews';

/**
 * Homepage first-screen proof (Oct 2026 plan, day 3): Google rating + official prices,
 * server-rendered so Google and visitors see them without scripts.
 * Prices come from constants/gutterPricing.ts — the official price list.
 */
const PRICES = [
  { label: '2-bed home', value: `from ${formatGbp(GUTTER_PRICING.twoBedroom)}` },
  { label: '3-bed home', value: `from ${formatGbp(GUTTER_PRICING.threeBedroom)}` },
  { label: 'Premium Service', value: formatGbp(GUTTER_PRICING.premium) },
  { label: 'Commercial', value: 'Custom quote' },
];

export default function TrustPriceStrip() {
  return (
    <section aria-labelledby="trust-price-heading" className="bg-white border-b border-slate-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 id="trust-price-heading" className="text-center text-xl md:text-2xl font-black text-slate-900">
          Rated {GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ on Google · Fixed gutter cleaning prices
        </h2>
        <ul className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 list-none p-0">
          {PRICES.map((p) => (
            <li key={p.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-black text-[#0f766e]">{p.value}</p>
              <p className="text-sm font-semibold text-slate-600 mt-1">{p.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-sm text-slate-600">
          Ground-level vacuum, no ladders · Before &amp; after photos · Fully insured ·{' '}
          <Link href="/gutter-cleaning-prices/" className="font-bold text-[#0f766e] hover:underline">
            See full gutter cleaning prices
          </Link>
        </p>
      </div>
    </section>
  );
}
