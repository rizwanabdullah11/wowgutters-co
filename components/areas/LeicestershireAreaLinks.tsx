import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { colors } from '@/constants/colors';
import type { LeicsTown } from '@/lib/leicestershireTowns';
import {
  LEICS_HUB_PATH,
  leicsClosest,
  leicsGeoLine,
  leicsNearbyTowns,
  leicsHasPage,
  leicsPath,
  leicsServicesFor,
  type LeicsService,
} from '@/lib/leicestershirePages';

const LABEL: Record<LeicsService, string> = {
  gutter: 'Gutter cleaning',
  roof: 'Roof cleaning',
  repair: 'Gutter repairs',
};

/**
 * Bottom block for the Leicestershire town pages: where the town sits, links to the closest
 * towns for the same service, the other services in this town, and the county hub.
 */
export default function LeicestershireAreaLinks({ town, service }: { town: LeicsTown; service: LeicsService }) {
  const label = LABEL[service];
  const others = leicsServicesFor(town).filter((s) => s !== service);

  // Listed neighbours first, then the closest by distance — only towns that have this service.
  const seen = new Set<string>([town.slug]);
  const nearby = [...leicsNearbyTowns(town), ...leicsClosest(town, 30).map((c) => c.town)]
    .filter((t) => {
      if (seen.has(t.slug) || !leicsHasPage(service, t)) return false;
      seen.add(t.slug);
      return true;
    })
    .slice(0, 8);

  return (
    <section className="py-16 px-4 bg-slate-50 border-t border-slate-100" aria-labelledby="leics-links-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="leics-links-heading" className="text-2xl md:text-3xl font-black text-slate-900 mb-4 text-center">
          {label} near {town.name}
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
          {leicsGeoLine(town)}
        </p>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {nearby.map((t) => (
            <li key={t.slug}>
              <Link
                href={leicsPath(service, t.slug)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800 hover:border-emerald-400 transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0" style={{ color: colors.primary }} aria-hidden />
                {label} {t.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          {others.map((o, i) => (
            <Link
              key={o}
              href={leicsPath(o, town.slug)}
              className={i === 0 ? 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white' : 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2'}
              style={i === 0 ? { background: colors.primaryGradient } : { borderColor: colors.primary, color: colors.primary }}
            >
              {LABEL[o]} in {town.name} <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          ))}
          <Link
            href={LEICS_HUB_PATH}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            All Leicestershire areas
          </Link>
          <Link
            href={service === 'gutter' ? '/gutter-cleaning-prices/' : service === 'roof' ? '/roof-cleaning/' : '/gutter-repairs/'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2 border-slate-300 text-slate-700"
          >
            {service === 'gutter' ? 'Gutter cleaning prices' : service === 'roof' ? 'How we clean roofs' : 'About our gutter repairs'}
          </Link>
        </div>
      </div>
    </section>
  );
}
