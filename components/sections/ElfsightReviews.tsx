'use client';

import { useEffect, useRef } from 'react';

const ELFSIGHT_PLATFORM_SRC = 'https://elfsightcdn.com/platform.js';

function loadElfsightPlatform() {
  if (typeof document === 'undefined') return;
  if (document.querySelector(`script[src="${ELFSIGHT_PLATFORM_SRC}"]`)) return;

  const script = document.createElement('script');
  script.src = ELFSIGHT_PLATFORM_SRC;
  script.async = true;
  document.body.appendChild(script);
}

export default function ElfsightReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        loadElfsightPlatform();
        observer.disconnect();
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[320px]">
      {/* Crawlable summary — widget loads client-side (audit 12.04) */}
      <p className="mb-6 text-center text-slate-600 text-base max-w-2xl mx-auto">
        WOW Gutters is rated <strong>4.9 out of 5</strong> from over{' '}
        <strong>2,696 verified Google reviews</strong> across Birmingham and the West Midlands.
        Homeowners praise our punctuality, before-and-after photos, and honest gutter condition reports.
      </p>
      <div
        className="elfsight-app-9ad60a2a-2a8d-4a67-a4e3-cb73887482d9"
        data-elfsight-app-lazy
      />
    </div>
  );
}
