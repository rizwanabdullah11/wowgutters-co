'use client';

import { useEffect } from 'react';
import Link from 'next/link';

type ServiceRedirectProps = {
  target: string;
  label: string;
};

/** Static export–friendly client redirect to a canonical /services/* URL. */
export default function ServiceRedirect({ target, label }: ServiceRedirectProps) {
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.replace(target);
    }, 100);
    return () => window.clearTimeout(t);
  }, [target]);

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-slate-700 text-lg">Redirecting to our {label} page…</p>
      <Link href={target} className="text-[#19C58B] font-bold underline">
        Continue to {label}
      </Link>
    </main>
  );
}
