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

const INTERACTION_EVENTS = ['scroll', 'pointerdown', 'touchstart', 'keydown', 'mousemove', 'wheel'] as const;

/** Runs `cb` once, on the visitor's first scroll / tap / key / mouse move. Returns a cancel function. */
function onFirstInteraction(cb: () => void): () => void {
  let fired = false;
  const opts: AddEventListenerOptions = { passive: true, capture: true };
  const handler = (e: Event) => {
    // Browsers fire a synthetic zero-distance mousemove while a page loads under a resting
    // cursor; only count real mouse movement.
    if (e.type === 'mousemove' && !(e as MouseEvent).movementX && !(e as MouseEvent).movementY) return;
    if (fired) return;
    fired = true;
    remove();
    cb();
  };
  const remove = () => INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, handler, opts));
  INTERACTION_EVENTS.forEach((e) => window.addEventListener(e, handler, opts));
  return remove;
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

  // Performance (Nov 25 2026): Elfsight ships ~500 KB of script and ~950 ms of main-thread
  // work. Pages that show reviews straight under the hero (e.g. /gutter-cleaning-birmingham/,
  // mobile speed 53, LCP 11.3 s) were fetching it during the first paint. It now waits for
  // the visitor's first interaction (scroll, tap, key, mouse move), then for the block to come
  // within 400px of view. Visitors still see the reviews; the hero paints first.
  //
  // Elfsight's free plan stops rendering when its monthly view limit is reached
  // (console: APP_VIEWS_LIMIT_REACHED). If the widget is still empty 8s after the
  // script was requested, show the static review cards instead.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timer: number | undefined;
    let io: IntersectionObserver | undefined;
    let done = false;

    const check = () => {
      const h = widgetRef.current?.getBoundingClientRect().height ?? 0;
      if (h < 40) setWidgetEmpty(true);
    };
    const load = () => {
      if (done) return;
      done = true;
      io?.disconnect();
      loadElfsightPlatform();
      timer = window.setTimeout(check, 8000);
    };
    const watch = () => {
      if (!('IntersectionObserver' in window)) return load();
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) load();
        },
        { rootMargin: '400px 0px' }
      );
      io.observe(el);
    };
    const cancelInteraction = onFirstInteraction(watch);

    return () => {
      done = true;
      cancelInteraction();
      io?.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full ${widgetEmpty ? '' : 'min-h-[360px]'}`}>
      <div ref={widgetRef} key={widgetId} className={`elfsight-app-${widgetId}`} />
      {widgetEmpty && FEATURED_GOOGLE_REVIEWS.length > 0 ? <StaticGoogleReviews className="mb-8" /> : null}
    </div>
  );
}
