import type { Metadata } from 'next';
import Link from 'next/link';
import { AREA_SLUGS, areaPath, roofAreaPath } from '@/lib/areaSlugs';
import { getAreaData } from '@/lib/getAreaData';
import { buildMetadata } from '@/lib/seo';
import { colors } from '@/constants/colors';

function areaDisplayName(slug: string): string {
  return getAreaData(slug)?.name ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas | WOW Gutters Ltd — Gutter & Roof Cleaning Locations',
  description:
    'Browse all gutter cleaning, roof cleaning and gutter repair locations served by WOW Gutters Ltd across Birmingham and the West Midlands. 220+ areas, 4.9★ rated.',
  canonicalPath: '/service-areas/',
});

function firstLetter(name: string): string {
  const c = name.charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : '#';
}

function letterGroups(items: { slug: string; name: string }[]): Map<string, { slug: string; name: string }[]> {
  const map = new Map<string, { slug: string; name: string }[]>();
  for (const item of items) {
    const letter = firstLetter(item.name);
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(item);
  }
  return map;
}

export default function ServiceAreasHubPage() {
  const sorted = [...AREA_SLUGS]
    .map((slug) => ({ slug, name: areaDisplayName(slug) }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const gutterGroups = letterGroups(sorted);
  const roofGroups = letterGroups(sorted);
  const letters = [...new Set([...gutterGroups.keys(), ...roofGroups.keys()])].sort();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
          Coverage map
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
          Service areas
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mb-6 leading-relaxed">
          WOW Gutters Ltd provides professional gutter cleaning, roof cleaning and gutter repairs across
          Birmingham and the wider West Midlands. All {sorted.length} locations are listed below for each service.
          Use the letter links to jump to your area.
        </p>

        <div className="flex flex-wrap gap-2 mb-10 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <span className="text-sm font-bold text-slate-500 mr-1 self-center">Jump to:</span>
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold text-slate-700 bg-slate-100 hover:bg-[#19C58B] hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {letters.map((letter) => {
          const gutterItems = gutterGroups.get(letter) ?? [];
          const roofItems = roofGroups.get(letter) ?? [];
          if (gutterItems.length === 0 && roofItems.length === 0) return null;

          return (
            <section key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-black text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">
                {letter}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
                    Gutter Cleaning
                  </h3>
                  <ul className="space-y-1.5">
                    {gutterItems.map(({ slug, name }) => (
                      <li key={slug}>
                        <Link
                          href={areaPath(slug)}
                          className="text-sm font-semibold text-slate-700 hover:text-[#0f766e] transition-colors"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
                    Roof Cleaning
                  </h3>
                  <ul className="space-y-1.5">
                    {roofItems.map(({ slug, name }) => (
                      <li key={slug}>
                        <Link
                          href={roofAreaPath(slug)}
                          className="text-sm font-semibold text-slate-700 hover:text-[#0f766e] transition-colors"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}

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
