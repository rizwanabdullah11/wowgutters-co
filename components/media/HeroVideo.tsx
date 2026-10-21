'use client';

import { useEffect, useRef, useState } from 'react';

import { HERO_IMAGE_SRC, HERO_IMAGE_SRCSET } from '@/lib/heroImage';

/**
 * Lightweight hero background (Oct 2026 performance pass).
 *
 * - A responsive still image renders in the static HTML and is the LCP element
 *   (phones download a ~57 KB WebP instead of a 320 KB JPEG).
 * - Desktop gets the full video; phones/tablets get `mobileSrc` when given (homepage), else none. Never on slow or
 *   data-saver connections, or when the user prefers reduced motion.
 * - On desktop it starts loading only after the page has finished loading and
 *   the browser is idle, then fades in over the still once it is playing.
 *
 * Keeping this the only client piece lets the surrounding page components render
 * as plain server HTML (previously each page shipped ~2.8 MB of area data to
 * the browser just to call video.play()).
 */
const FILL = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' } as const;

export default function HeroVideo({
  src,
  mobileSrc,
  poster,
  className = 'hero-video',
}: {
  src?: string;
  /** Lighter file for phones/tablets (homepage, Oct 2026). Without it, small screens keep the still image. */
  mobileSrc?: string;
  /** Optional page-specific still; defaults to the responsive gutter-cleaning hero. */
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Missing legacy poster or remote stock photos (1920px Unsplash) → our own responsive hero.
  const useDefault = !poster || poster === '/gutter-hero-poster.jpg' || /^https?:/.test(poster);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;

    const wide = window.matchMedia('(min-width: 1024px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = Boolean(conn?.saveData) || /(^|-)2g$|^3g$/.test(conn?.effectiveType ?? '');
    const file = wide ? src : mobileSrc;
    if (!file || reduced || slow) return;

    let cancelled = false;
    const start = () => {
      if (cancelled || !ref.current) return;
      ref.current.src = file;
      ref.current.play().catch(() => {});
    };
    const idle = () => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(start, { timeout: 3000 });
      else window.setTimeout(start, 1500);
    };

    if (document.readyState === 'complete') idle();
    else window.addEventListener('load', idle, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', idle);
    };
  }, [src, mobileSrc]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={useDefault ? HERO_IMAGE_SRC : poster}
        srcSet={useDefault ? HERO_IMAGE_SRCSET : undefined}
        sizes={useDefault ? '100vw' : undefined}
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className={className}
        style={FILL}
      />
      {src ? (
        <video
          ref={ref}
          loop
          muted
          playsInline
          preload="none"
          className={className}
          aria-hidden="true"
          style={{ ...FILL, opacity: playing ? 1 : 0, transition: 'opacity .6s ease' }}
          onPlaying={() => setPlaying(true)}
          onError={(e) => {
            (e.currentTarget as HTMLVideoElement).style.display = 'none';
          }}
        />
      ) : null}
    </>
  );
}
