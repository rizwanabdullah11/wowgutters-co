'use client';

import { usePathname } from 'next/navigation';
import { isQuoteEmbedPath } from '@/lib/isQuoteEmbedPath';
import StaticQuoteDialog from '@/components/StaticQuoteDialog';

/** Omit on /quote/embed/ so the iframe does not load another dialog (infinite nesting). */
export default function MaybeStaticQuoteDialog() {
  const pathname = usePathname();
  if (isQuoteEmbedPath(pathname)) {
    return null;
  }
  return <StaticQuoteDialog />;
}
