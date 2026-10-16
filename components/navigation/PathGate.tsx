'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { isQuoteEmbedPath } from '@/lib/isQuoteEmbedPath';

/**
 * Tiny client gates so large layout components (footer etc.) can stay server-rendered
 * and only this path check hydrates in the browser (Oct 2026 performance pass).
 */
export function HideOnQuoteEmbed({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return isQuoteEmbedPath(pathname) ? null : <>{children}</>;
}

export function OnlyOnHome({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  const pathname = usePathname();
  const home = pathname === '/' || pathname === '';
  return home !== invert ? <>{children}</> : null;
}
