import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * Nov 2026: water butt installation is not a service WOW Gutters offers — page removed.
 * The live server answers 410 Gone for this URL (lib/keyword-redirects.json "GONE"), so this
 * minimal noindex page only exists to keep the static export build simple.
 */
export const metadata: Metadata = {
  title: 'Page removed',
  robots: { index: false, follow: true },
};

export default function WaterButtPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-black text-slate-900 mb-4">This service is no longer offered</h1>
      <p className="text-slate-600 mb-8">See our gutter cleaning and downpipe services instead.</p>
      <Link href="/services/gutter-cleaning/" className="font-bold text-emerald-700 underline">
        Gutter cleaning services
      </Link>
    </main>
  );
}
