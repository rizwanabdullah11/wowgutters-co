import type { Metadata } from 'next';
import Link from 'next/link';
import { AREA_SLUGS, roofAreaPath } from '@/lib/areaSlugs';
import { getAreaData } from '@/lib/getAreaData';
import { buildMetadata } from '@/lib/seo';
import { colors } from '@/constants/colors';

function areaDisplayName(slug: string): string {
  return getAreaData(slug)?.name ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export const metadata: Metadata = buildMetadata({
  title: 'Roof Cleaning Service Areas',
  description:
    'Find professional roof cleaning and moss removal in your area. WOW Gutters Ltd covers 170+ locations across Birmingham, Coventry, Wolverhampton, Solihull, Walsall, Dudley and the West Midlands.',
  canonicalPath: '/roof-cleaning-service-areas/',
});

export default function RoofCleaningServiceAreasPage() {
  const sorted = [...AREA_SLUGS].sort((a, b) => areaDisplayName(a).localeCompare(areaDisplayName(b)));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
          Coverage map
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          Roof cleaning service areas
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mb-4 leading-relaxed">
          WOW Gutters Ltd offers soft-wash roof cleaning and moss removal across Birmingham and the wider West
          Midlands. Select your area for local pricing, postcodes, FAQs and booking — all {sorted.length} locations
          are linked below.
        </p>
        <p className="text-slate-600 mb-4">
          Need gutter cleaning instead?{' '}
          <Link href="/gutter-cleaning-birmingham/" className="font-bold underline" style={{ color: colors.primary }}>
            View gutter cleaning in Birmingham
          </Link>
          .
        </p>
        <p className="mb-10">
          <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-[#0f766e]">
            ← Back to homepage
          </Link>
        </p>

        <nav aria-label="All roof cleaning service areas">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
            {sorted.map((slug) => (
              <li key={slug}>
                <Link
                  href={roofAreaPath(slug)}
                  className="text-sm font-semibold text-slate-700 hover:text-[#0f766e] transition-colors"
                >
                  Roof Cleaning {areaDisplayName(slug)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 text-slate-600">
          Not listed?{' '}
          <a href="tel:07421433910" className="font-bold" style={{ color: colors.primary }}>
            Call 07421 433910
          </a>{' '}
          or{' '}
          <Link href="/quote" className="font-bold underline" style={{ color: colors.primary }}>
            request a free quote
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
