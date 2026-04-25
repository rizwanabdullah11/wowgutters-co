'use client';

import { useEffect } from 'react';

/**
 * iOS Safari "fixed" stabilizer.
 * Safari collapses/expands its URL/tool bars while scrolling which can make fixed headers/footers
 * look like they move. We anchor them to the visualViewport via CSS variables.
 */
export default function IosViewportStabilizer() {
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const root = document.documentElement;

    let raf = 0;
    const update = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        // offsetTop is the visual viewport's top inset (changes as Safari chrome animates)
        const top = vv.offsetTop || 0;
        // how much space is "below" the visual viewport within layout viewport
        const bottomGap = Math.max(0, window.innerHeight - vv.height - top);
        root.style.setProperty('--vv-top', `${top}px`);
        root.style.setProperty('--vv-bottom-gap', `${bottomGap}px`);
      });
    };

    update();
    vv.addEventListener('resize', update, { passive: true });
    vv.addEventListener('scroll', update, { passive: true });
    window.addEventListener('orientationchange', update, { passive: true });

    return () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  return null;
}

