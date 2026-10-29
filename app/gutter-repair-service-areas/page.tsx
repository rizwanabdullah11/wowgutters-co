import type { Metadata } from 'next';
import Link from 'next/link';
import { AREA_SLUGS, repairAreaPath } from '@/lib/areaSlugs';
import { getAreaData } from '@/lib/getAreaData';
import { buildMetadata } from '@/lib/seo';
import { colors } from '@/constants/colors';

function areaDisplayName(slug: string): string {
  return getAreaData(slug)?.name ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Repair Service Areas',
  description:
    'Find gutter repairs in your area — leaking joints, sagging runs, broken brackets and downpipes. WOW Gutters Ltd covers Birmingham, Solihull, Wolverhampton, Walsall, Dudley and the West Midlands.',
  canonicalPath: '/gutter-repair-service-areas/',
});

export default function GutterRepairServiceAreasPage() {
  const sorted = [...AREA_SLUGS].sort((a, b) => areaDisplayName(a).localeCompare(areaDisplayName(b)));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.primaryText }}>
          Coverage map
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          Gutter repair service areas
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mb-4 leading-relaxed">
          WOW Gutters Ltd repairs leaking joints, sagging gutters, loose brackets and damaged downpipes across
          Birmingham and the wider West Midlands. Repairs start from £30 and we quote a fixed price before any work.
          Select your area for local details and booking — all {sorted.length} locations are linked below.
        </p>
        <p className="text-slate-600 mb-4">
          Looking for something else?{' '}
          <Link href="/gutter-repairs/" className="font-bold underline" style={{ color: colors.primaryText }}>
            Gutter repairs overview
          </Link>
          {' · '}
          <Link href="/gutter-cleaning-service-areas/" className="font-bold underline" style={{ color: colors.primaryText }}>
            Gutter cleaning areas
          </Link>
          .
        </p>
        <p className="mb-10">
          <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-[#0f766e]">
            ← Back to homepage
          </Link>
        </p>

        <nav aria-label="All gutter repair service areas">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
            {sorted.map((slug) => (
              <li key={slug}>
                <Link
                  href={repairAreaPath(slug)}
                  className="text-sm font-semibold text-slate-700 hover:text-[#0f766e] transition-colors"
                >
                  Gutter Repairs {areaDisplayName(slug)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 text-slate-600">
          Not listed?{' '}
          <a href="tel:07421433910" className="font-bold" style={{ color: colors.primaryText }}>
            Call 07421 433910
          </a>{' '}
          or{' '}
          <Link href="/quote" className="font-bold underline" style={{ color: colors.primaryText }}>
            request a free quote
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
