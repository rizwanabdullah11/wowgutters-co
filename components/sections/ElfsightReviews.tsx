'use client';

import { useEffect, useRef, useState } from 'react';
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

// `showSummary` is kept for compatibility but no longer renders anything (Nov 2026: owner asked
// for the summary sentence and the yellow "4.9/5 on Google" fallback card to be removed).
export default function ElfsightReviews(props: ElfsightReviewsProps) {
  void props;
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
      <div ref={widgetRef} key={widgetId} className={`elfsight-app-${widgetId}`} />
      {widgetEmpty && FEATURED_GOOGLE_REVIEWS.length > 0 ? <StaticGoogleReviews className="mb-8" /> : null}
    </div>
  );
}
