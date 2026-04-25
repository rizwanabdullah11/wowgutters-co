'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import QuoteModal from '@/components/QuoteModal';

/**
 * Browser-native <dialog> that renders QuoteModal directly (no iframe).
 * Opened by wow-cta-dialog-init.js via dialog.showModal().
 * Avoids iframe layout-inheritance issues (Navbar/Footer/dark-mode body)
 * and async-chunk loading failures on static hosts.
 */
export default function StaticQuoteDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Incremented each time the dialog opens → forces QuoteModal to remount with fresh state
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Preserve page scroll across open/close (browser does NOT guarantee this
    // when position:relative is accidentally applied, and some CSS resets
    // cause a visible "jump" to top when showModal() is called).
    let savedScrollY = 0;

    // Close when clicking the backdrop (click lands on <dialog> itself, not a child)
    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };
    dialog.addEventListener('click', handleBackdropClick);

    const observer = new MutationObserver(() => {
      if (dialog.open) {
        savedScrollY = window.scrollY;
        setFormKey((k) => k + 1);
        // If any layout shift briefly pushes scroll, snap back to saved position
        requestAnimationFrame(() => {
          if (window.scrollY !== savedScrollY) {
            window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior });
          }
        });
      } else {
        // On close, make sure the user stays where they were
        window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior });
      }
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });

    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      observer.disconnect();
    };
  }, []);

  const handleClose = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="wow-cta-dialog"
      className="wow-static-quote-dialog w-[min(460px,calc(100vw-2rem))] sm:w-[min(460px,calc(100vw-2.5rem))] max-w-[460px] rounded-2xl border-0 p-0 shadow-2xl bg-white overflow-hidden"
    >
      <div className="w-full max-w-[460px] mx-auto box-border bg-white px-3 py-3 sm:px-4 sm:py-4 mt-[10px]">
        <QuoteModal
          key={formKey}
          isOpen={true}
          onClose={handleClose}
          mode="inline"
          align="center"
          showClose
          embed
        />
      </div>
    </dialog>
  );
}
