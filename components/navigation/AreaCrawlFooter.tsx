'use client';

import Link from 'next/link';
import { AREA_SLUGS } from '@/lib/areaSlugs';
import {
  FOOTER_HUB_SLUGS,
  GUTTER_SERVICE_AREAS_HUB,
  ROOF_SERVICE_AREAS_HUB,
  areaLinkLabel,
} from '@/lib/crawlHub';
import { colors } from '@/constants/colors';
import { AREA_SERVICE_META, type AreaServiceKind } from '@/lib/areaServiceMeta';

/** Sitewide crawl footer — links hub + major cities (on every area page). */
export default function AreaCrawlFooter({
  currentSlug,
  serviceKind = 'gutter',
}: {
  currentSlug?: string;
  serviceKind?: AreaServiceKind;
}) {
  const meta = AREA_SERVICE_META[serviceKind];
  const pathForSlug = meta.pathForSlug;
  const linkLabel = (slug: string) => {
    const area = areaLinkLabel(slug);
    if (serviceKind === 'roof') return `Roof Cleaning ${area.replace(/^Gutter cleaning /i, '')}`;
    if (serviceKind === 'repair') return `Gutter Repairs ${area}`;
    if (serviceKind === 'inspection') return `Gutter Inspection ${area}`;
    if (serviceKind === 'roof-inspection') return `Roof Inspection ${area}`;
    return area;
  };

  return (
    <nav
      aria-label={meta.crawlFooterAria}
      className="border-t border-slate-200 bg-slate-50 py-10 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: colors.primary }}>
          Coverage
        </p>
        <h2 className="text-xl font-black text-slate-900 mb-3">{meta.crawlFooterTitle}</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-sm">
          {serviceKind === 'roof' ? (
            <>
              Browse all locations or jump to a major town — every area is linked from our{' '}
              <Link href={ROOF_SERVICE_AREAS_HUB} className="font-bold underline" style={{ color: colors.primary }}>
                full roof cleaning service areas map
              </Link>
              .
            </>
          ) : serviceKind === 'gutter' ? (
            <>
              Browse all locations or jump to a major town — every area is linked from our{' '}
              <Link href={GUTTER_SERVICE_AREAS_HUB} className="font-bold underline" style={{ color: colors.primary }}>
                full gutter cleaning service areas map
              </Link>
              .
            </>
          ) : (
            'Jump to a major town below — we cover Birmingham and the wider West Midlands.'
          )}
        </p>
        <ul className="flex flex-wrap justify-center gap-2 mb-4">
          {FOOTER_HUB_SLUGS.map((slug) => (
            <li key={slug}>
              <Link
                href={pathForSlug(slug)}
                aria-current={currentSlug === slug ? 'page' : undefined}
                className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
              >
                {linkLabel(slug)}
              </Link>
            </li>
          ))}
        </ul>
        {serviceKind === 'roof' && (
          <Link
            href={ROOF_SERVICE_AREAS_HUB}
            className="inline-flex items-center gap-1 text-sm font-bold underline"
            style={{ color: colors.primary }}
          >
            View all {AREA_SLUGS.length} roof cleaning service areas →
          </Link>
        )}
        {serviceKind === 'gutter' && (
          <Link
            href={GUTTER_SERVICE_AREAS_HUB}
            className="inline-flex items-center gap-1 text-sm font-bold underline"
            style={{ color: colors.primary }}
          >
            View all {AREA_SLUGS.length} gutter cleaning service areas →
          </Link>
        )}
      </div>
    </nav>
  );
}
