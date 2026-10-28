import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllKeywordSlugs, getKeywordPage } from '@/lib/keywordPages';
import { buildMetadata } from '@/lib/seo';
import { colors } from '@/constants/colors';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Guides & Local Services',
  description:
    'Answers to common gutter questions and local service pages from WOW Gutters Ltd — prices, blocked downpipes, moss, leaks, nesting birds and more across Birmingham and the West Midlands.',
  canonicalPath: '/gutter-guides/',
});

/** Area pages already have their own hubs (gutter cleaning / roof cleaning / gutter repair areas). */
const AREA_PREFIXES = ['gutter-cleaning-', 'roof-cleaning-', 'gutter-repair-', 'gutter-installation-'];

function label(slug: string): string {
  const page = getKeywordPage(slug);
  const raw = page?.heroTitle || page?.titleTag || slug.replace(/-/g, ' ');
  return raw.split(' | ')[0].trim();
}

export default function GutterGuidesPage() {
  const slugs = getAllKeywordSlugs()
    .filter((s) => !AREA_PREFIXES.some((p) => s.startsWith(p)))
    .sort((a, b) => label(a).localeCompare(label(b)));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: colors.primaryText }}>
          Guides & local services
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Gutter guides and local services</h1>
        <p className="text-lg text-slate-600 max-w-3xl mb-4 leading-relaxed">
          Quick answers to the gutter, downpipe and roofline questions we are asked most, plus our specialist local
          service pages. Gutter cleaning starts from £100 with fixed prices and before &amp; after photos on every job.
        </p>
        <p className="text-slate-600 mb-10">
          Looking for your town?{' '}
          <Link href="/gutter-cleaning-service-areas/" className="font-bold underline" style={{ color: colors.primaryText }}>
            Gutter cleaning areas
          </Link>
          {' · '}
          <Link href="/roof-cleaning-service-areas/" className="font-bold underline" style={{ color: colors.primaryText }}>
            Roof cleaning areas
          </Link>
          {' · '}
          <Link href="/gutter-repair-service-areas/" className="font-bold underline" style={{ color: colors.primaryText }}>
            Gutter repair areas
          </Link>
        </p>

        <nav aria-label="Gutter guides and local service pages">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {slugs.map((slug) => (
              <li key={slug}>
                <Link href={`/${slug}/`} className="text-sm font-semibold text-slate-700 hover:text-[#047857] transition-colors">
                  {label(slug)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 text-slate-600">
          Can&apos;t find your question?{' '}
          <a href="tel:07421433910" className="font-bold" style={{ color: colors.primaryText }}>
            Call 07421 433910
          </a>{' '}
          or{' '}
          <Link href="/quote/" className="font-bold underline" style={{ color: colors.primaryText }}>
            request a free quote
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
