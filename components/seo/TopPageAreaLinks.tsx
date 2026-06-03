import Link from 'next/link';
import { colors } from '@/constants/colors';
import { TOP_SERVICE_PAGE_AREA_LINKS, SERVICE_AREAS_HUB } from '@/lib/crawlHub';
import { AREA_SLUGS } from '@/lib/areaSlugs';

type Props = {
  /** Short context line above the grid */
  intro?: string;
  className?: string;
};

/**
 * Internal links from high-authority pages to suburb/location URLs (audit 15.04).
 */
export default function TopPageAreaLinks({
  intro = 'Book gutter cleaning in your town or city — local pricing, postcodes and FAQs on every page below.',
  className = '',
}: Props) {
  return (
    <section
      className={`border-t border-slate-100 bg-slate-50 py-12 px-4 ${className}`.trim()}
      aria-labelledby="top-page-areas-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="top-page-areas-heading" className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-3">
          Gutter cleaning near you
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">{intro}</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
          {TOP_SERVICE_PAGE_AREA_LINKS.map(({ slug, href, label }) => (
            <li key={slug}>
              <Link
                href={href}
                className="block rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-slate-700 text-center shadow-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center">
          <Link
            href={SERVICE_AREAS_HUB}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold text-white shadow-md hover:opacity-95"
            style={{ backgroundColor: colors.primary }}
          >
            All service areas ({AREA_SLUGS.length} locations)
          </Link>
        </p>
      </div>
    </section>
  );
}
