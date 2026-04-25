'use client';

import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

const QuoteModal = dynamic(() => import('@/components/QuoteModal'), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-[280px] w-full rounded-2xl bg-slate-100 animate-pulse"
      aria-hidden
    />
  ),
});

/**
 * Loaded inside <iframe> from StaticQuoteDialog. Client-only bundle avoids SSR/hydration
 * mismatches in static export (radios looked selected but React state stayed empty).
 */
export default function QuoteEmbedPage() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'wow-close-quote' }, '*');
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="w-full max-w-[460px] mx-auto box-border bg-white px-3 py-3 sm:px-4 sm:py-4">
      <QuoteModal
        isOpen={isOpen}
        onClose={handleClose}
        mode="inline"
        align="center"
        showClose
        embed
      />
    </div>
  );
}
