'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const TARGET = '/services/inspection/';

/** Static export–friendly client redirect to the canonical inspection URL. */
export default function FreeInspectionRedirect() {
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.replace(TARGET);
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-slate-700 text-lg">Redirecting to our free gutter inspection page…</p>
      <Link href={TARGET} className="text-[#19C58B] font-bold underline">
        Continue to free inspection
      </Link>
    </main>
  );
}
