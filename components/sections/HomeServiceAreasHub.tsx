import Link from 'next/link';
import { HOMEPAGE_AREA_LINKS, SERVICE_AREAS_HUB } from '@/lib/crawlHub';
import { AREA_SLUGS } from '@/lib/areaSlugs';
import { colors } from '@/constants/colors';

/** Homepage internal linking — hub + popular areas (fixes orphan crawl warning). */
export default function HomeServiceAreasHub() {
  return (
    <section className="border-y border-slate-100 bg-white py-12 px-4" aria-labelledby="home-areas-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: colors.primary }}>
            West Midlands coverage
          </p>
          <h2 id="home-areas-heading" className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            Gutter cleaning in your area
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select your town or city below, or open the full map of{' '}
            <strong>{AREA_SLUGS.length} locations</strong> we cover.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
          {HOMEPAGE_AREA_LINKS.map(({ slug, href, label }) => (
            <li key={slug}>
              <Link
                href={href}
                className="block rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 text-center hover:border-[#19C58B] hover:bg-white hover:text-[#0f766e] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href={SERVICE_AREAS_HUB}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold text-white shadow-md transition hover:opacity-95"
            style={{ backgroundColor: colors.primary }}
          >
            View all service areas ({AREA_SLUGS.length} locations)
          </Link>
        </div>
      </div>
    </section>
  );
}
