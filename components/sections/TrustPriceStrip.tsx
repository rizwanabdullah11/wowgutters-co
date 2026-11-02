'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { GUTTER_PRICING, formatGbp } from '@/constants/gutterPricing';
import { GOOGLE_REVIEWS_SUMMARY } from '@/lib/googleReviews';

declare global {
  interface Window {
    wowOpenCtaDialog?: () => void;
  }
}

/**
 * Homepage first-screen proof: Google rating + official prices.
 * Automatically shows quote popup when cursor hovers over this strip/cards,
 * with click/tap support and anti-loop cooldown when closing.
 */
const PRICES = [
  { label: '2-bed home', value: `from ${formatGbp(GUTTER_PRICING.twoBedroom)}` },
  { label: '3-bed home', value: `from ${formatGbp(GUTTER_PRICING.threeBedroom)}` },
  { label: 'Premium Service', value: formatGbp(GUTTER_PRICING.premium) },
  { label: 'Commercial', value: 'Custom quote' },
];

export default function TrustPriceStrip() {
  const hasTriggeredRef = useRef(false);
  const cooldownUntilRef = useRef(0);

  const openQuoteModal = useCallback(() => {
    if (typeof window === 'undefined') return;

    const dialog = document.getElementById('wow-cta-dialog') as HTMLDialogElement | null;
    if (dialog && dialog.open) {
      return;
    }

    if (typeof window.wowOpenCtaDialog === 'function') {
      window.wowOpenCtaDialog();
    } else if (dialog && typeof dialog.showModal === 'function') {
      try {
        dialog.showModal();
      } catch {
        // Safe fallback
      }
    }
  }, []);

  // Listen to dialog close event to prevent accidental immediate reopen on close
  useEffect(() => {
    const dialog = document.getElementById('wow-cta-dialog') as HTMLDialogElement | null;
    if (!dialog) return;

    const handleDialogClose = () => {
      // Cooldown for 2.5s after closing so stationary cursor won't re-trigger
      cooldownUntilRef.current = Date.now() + 2500;
    };

    dialog.addEventListener('close', handleDialogClose);
    return () => {
      dialog.removeEventListener('close', handleDialogClose);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    const dialog = document.getElementById('wow-cta-dialog') as HTMLDialogElement | null;
    if (dialog && dialog.open) return;
    if (Date.now() < cooldownUntilRef.current) return;
    if (hasTriggeredRef.current) return;

    hasTriggeredRef.current = true;
    cooldownUntilRef.current = Date.now() + 3000;
    openQuoteModal();
  }, [openQuoteModal]);

  const handleMouseLeave = useCallback(() => {
    // When cursor leaves, allow next hover trigger once cooldown expires
    const remaining = Math.max(300, cooldownUntilRef.current - Date.now());
    setTimeout(() => {
      hasTriggeredRef.current = false;
    }, remaining);
  }, []);

  const handleCardClick = useCallback(() => {
    const dialog = document.getElementById('wow-cta-dialog') as HTMLDialogElement | null;
    if (!dialog || !dialog.open) {
      openQuoteModal();
    }
  }, [openQuoteModal]);

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openQuoteModal();
      }
    },
    [openQuoteModal]
  );

  return (
    <section
      aria-labelledby="trust-price-heading"
      data-static-quote-hover="true"
      className="bg-white border-b border-slate-100 py-8 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto" data-static-quote-hover="true">
        <h2 id="trust-price-heading" className="text-center text-xl md:text-2xl font-black text-slate-900">
          Rated {GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ on Google · Fixed gutter cleaning prices
        </h2>
        <ul
          data-static-quote-hover="true"
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 list-none p-0"
          onMouseEnter={handleMouseEnter}
        >
          {PRICES.map((p) => (
            <li
              key={p.label}
              role="button"
              tabIndex={0}
              data-static-quote-open
              data-static-quote-hover="true"
              data-analytics-label={`trust_price_${p.label.toLowerCase().replace(/\s+/g, '_')}`}
              aria-haspopup="dialog"
              aria-controls="wow-cta-dialog"
              onClick={handleCardClick}
              onKeyDown={handleCardKeyDown}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center cursor-pointer transition-all duration-200 hover:border-[#0f766e]/40 hover:bg-teal-50/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0f766e] focus:ring-offset-2 select-none"
            >
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
