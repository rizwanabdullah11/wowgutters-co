'use client';

import { useEffect, useRef } from 'react';
import { googleReviewsCrawlSummary } from '@/lib/googleReviews';

const ELFSIGHT_PLATFORM_SRC = 'https://elfsightcdn.com/platform.js';

/** Default widget — override with NEXT_PUBLIC_ELFSIGHT_WIDGET_ID if you create a new Elfsight app */
const DEFAULT_WIDGET_ID = '9ad60a2a-2a8d-4a67-a4e3-cb73887482d9';

function getWidgetId(): string {
  const fromEnv = (process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_ID || '').trim();
  return fromEnv || DEFAULT_WIDGET_ID;
}

function loadElfsightPlatform() {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`script[src="${ELFSIGHT_PLATFORM_SRC}"]`) as HTMLScriptElement | null;
  if (existing) {
    if (existing.dataset.loaded === '1') {
      refreshElfsightApps();
      return;
    }
    existing.addEventListener('load', () => refreshElfsightApps(), { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = ELFSIGHT_PLATFORM_SRC;
  script.async = true;
  script.dataset.loaded = '0';
  script.onload = () => {
    script.dataset.loaded = '1';
    refreshElfsightApps();
  };
  document.body.appendChild(script);
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

type ElfsightReviewsProps = {
  showSummary?: boolean;
};

export default function ElfsightReviews({ showSummary = true }: ElfsightReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = getWidgetId();

  useEffect(() => {
    loadElfsightPlatform();

    const onConsent = () => {
      loadElfsightPlatform();
    };
    window.addEventListener('CookiebotOnAccept', onConsent);
    window.addEventListener('CookiebotOnDecline', onConsent);

    return () => {
      window.removeEventListener('CookiebotOnAccept', onConsent);
      window.removeEventListener('CookiebotOnDecline', onConsent);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        loadElfsightPlatform();
      },
      { rootMargin: '400px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[360px]">
      {showSummary ? (
        <p className="mb-6 text-center text-slate-600 text-base max-w-2xl mx-auto">
          {googleReviewsCrawlSummary()}
        </p>
      ) : null}
      <div key={widgetId} className={`elfsight-app-${widgetId}`} />
    </div>
  );
}
