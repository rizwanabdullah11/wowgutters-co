import Link from 'next/link';
import { HOMEPAGE_AREA_LINKS } from '@/lib/crawlHub';
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
            Select your town or city below — we cover Birmingham and the wider West Midlands.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
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
      </div>
    </section>
  );
}
