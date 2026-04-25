'use client';

import { useEffect } from 'react';

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return (
    tagName === 'input' ||
    tagName === 'textarea' ||
    tagName === 'select' ||
    target.isContentEditable ||
    target.closest('[contenteditable="true"]') !== null ||
    target.closest('.allow-select') !== null
  );
}

export default function ContentProtection() {
  useEffect(() => {
    document.body.classList.add('content-protected');

    const preventIfNeeded = (event: Event) => {
      if (isEditableTarget(event.target)) {
        return;
      }
      event.preventDefault();
    };

    // Block text selection + copying, but DO NOT block DevTools/Inspect shortcuts.
    document.addEventListener('contextmenu', preventIfNeeded);
    document.addEventListener('copy', preventIfNeeded);
    document.addEventListener('cut', preventIfNeeded);
    document.addEventListener('selectstart', preventIfNeeded);
    document.addEventListener('dragstart', preventIfNeeded);

    return () => {
      document.body.classList.remove('content-protected');
      document.removeEventListener('contextmenu', preventIfNeeded);
      document.removeEventListener('copy', preventIfNeeded);
      document.removeEventListener('cut', preventIfNeeded);
      document.removeEventListener('selectstart', preventIfNeeded);
      document.removeEventListener('dragstart', preventIfNeeded);
    };
  }, []);

  return null;
}
