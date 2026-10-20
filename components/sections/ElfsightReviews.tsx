'use client';

import { useEffect, useRef, useState } from 'react';
import { GOOGLE_REVIEWS_SUMMARY, googleReviewsCrawlSummary } from '@/lib/googleReviews';
import StaticGoogleReviews from '@/components/sections/StaticGoogleReviews';
import { FEATURED_GOOGLE_REVIEWS } from '@/constants/googleReviewsData';

const ELFSIGHT_PLATFORM_SRC = 'https://elfsightcdn.com/platform.js';

/** Default widget — override with NEXT_PUBLIC_ELFSIGHT_WIDGET_ID if you create a new Elfsight app */
const DEFAULT_WIDGET_ID = '9ad60a2a-2a8d-4a67-a4e3-cb73887482d9';

function getWidgetId(): string {
  const fromEnv = (process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_ID || '').trim();
  return fromEnv || DEFAULT_WIDGET_ID;
}

function refreshElfsightApps() {
  try {
    const w = window as Window & {
      eapps?: { init?: () => void; Platform?: { init?: () => void } };
    };
    w.eapps?.init?.();
    w.eapps?.Platform?.init?.();
  } catch {
    /* Elfsight API optional */
  }
}

function loadElfsightPlatform() {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(
    `script[src="${ELFSIGHT_PLATFORM_SRC}"]`
  ) as HTMLScriptElement | null;

  if (existing) {
    if (existing.dataset.loaded === '1') {
      refreshElfsightApps();
    } else {
      existing.addEventListener(
        'load',
        () => {
          existing.dataset.loaded = '1';
          refreshElfsightApps();
        },
        { once: true }
      );
    }
    return;
  }

  const script = document.createElement('script');
  script.src = ELFSIGHT_PLATFORM_SRC;
  script.async = true;
  // Bypass Cookiebot auto-blocking so the reviews widget always loads.
  script.setAttribute('data-cookieconsent', 'ignore');
  script.dataset.loaded = '0';
  script.onload = () => {
    script.dataset.loaded = '1';
    refreshElfsightApps();
  };
  document.body.appendChild(script);
}

type ElfsightReviewsProps = {
  showSummary?: boolean;
};

/** Public Google listing — shown when the Elfsight widget can't render. */
const GOOGLE_REVIEWS_URL =
  (process.env.NEXT_PUBLIC_GBP_REVIEW_URL || process.env.NEXT_PUBLIC_GBP_CID_URL || process.env.NEXT_PUBLIC_GBP_URL || '').trim() ||
  'https://www.google.com/maps/search/?api=1&query=WOW+Gutters+Ltd+38+Ryland+Street+Birmingham+B16+8DD';

export default function ElfsightReviews({ showSummary = true }: ElfsightReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [widgetEmpty, setWidgetEmpty] = useState(false);
  const widgetId = getWidgetId();

  // Elfsight's free plan stops rendering when its monthly view limit is reached
  // (console: APP_VIEWS_LIMIT_REACHED) and the section went blank. If the widget
  // is still empty 8s after it scrolls into view, show the rating card instead.
  useEffect(() => {
    const el = containerRef.current;
    let timer: number | undefined;
    const check = () => {
      const h = widgetRef.current?.getBoundingClientRect().height ?? 0;
      if (h < 40) setWidgetEmpty(true);
    };
    if (!el || !('IntersectionObserver' in window)) {
      timer = window.setTimeout(check, 8000);
      return () => window.clearTimeout(timer);
    }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      timer = window.setTimeout(check, 8000);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  // Performance (Oct 2026): the Elfsight platform script (~130 ms of main-thread
  // work) is only fetched when the reviews block comes within 400px of view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      loadElfsightPlatform();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        loadElfsightPlatform();
      },
      { rootMargin: '400px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`w-full ${widgetEmpty ? '' : 'min-h-[360px]'}`}>
      {showSummary ? (
        <p className="mb-6 text-center text-slate-600 text-base max-w-2xl mx-auto">
          {googleReviewsCrawlSummary()}
        </p>
      ) : null}
      <div ref={widgetRef} key={widgetId} className={`elfsight-app-${widgetId}`} />
      {widgetEmpty ? (
        <div>
          {FEATURED_GOOGLE_REVIEWS.length > 0 ? <StaticGoogleReviews className="mb-8" /> : null}
          <div className="mx-auto max-w-xl rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
            <p className="text-2xl font-black text-slate-900">
              <span className="text-amber-500" aria-hidden>★★★★★</span> {GOOGLE_REVIEWS_SUMMARY.starsDisplay} on Google
            </p>
            <p className="mt-2 text-slate-700">
              Read verified reviews from homeowners across Birmingham and the West Midlands on our Google Business Profile.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Read our Google reviews
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
