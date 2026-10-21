import Link from 'next/link';
import { MapPin, Wrench } from 'lucide-react';
import { GUTTER_PRICING, formatGbp } from '@/constants/gutterPricing';
import { getLocalBoost } from '@/lib/localBoostContent';

/**
 * Day-4 local content block for town pages close to page 1 (see lib/localBoostContent.ts).
 * Server component — plain HTML, no client JS.
 */
export default function LocalBoostSection({ slug }: { slug?: string | null }) {
  const boost = getLocalBoost(slug);
  if (!boost) return null;

  const prices = [
    { label: '2-bed home', value: formatGbp(GUTTER_PRICING.twoBedroom) },
    { label: '3-bed home', value: formatGbp(GUTTER_PRICING.threeBedroom) },
    { label: 'Larger detached', value: '£140–£210' },
    { label: 'Fascia & soffit clean', value: formatGbp(GUTTER_PRICING.fasciaAndSoffit) },
  ];

  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100" aria-labelledby="local-boost-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="local-boost-heading" className="text-2xl sm:text-3xl font-black text-slate-900 mb-5 leading-tight">
          {boost.heading}
        </h2>
        {boost.intro.map((p, i) => (
          <p key={i} className="text-slate-700 text-base leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">{boost.districtsHeading}</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {boost.districts.map((d) => (
            <li key={d.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                {d.name}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{d.text}</p>
            </li>
          ))}
        </ul>

        {boost.extra && (
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
              {boost.extra.heading}
            </h3>
            {boost.extra.body.map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed mb-3">
                {p}
              </p>
            ))}
            <p className="text-sm font-semibold flex flex-wrap gap-x-5 gap-y-2 mt-2">
              {boost.extra.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-emerald-800 underline underline-offset-2">
                  {l.label}
                </Link>
              ))}
            </p>
          </div>
        )}

        <h3 className="text-lg font-bold text-slate-900 mt-10 mb-3">
          Gutter cleaning prices in {boost.place}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full max-w-xl text-sm border border-slate-200 rounded-lg overflow-hidden">
            <tbody>
              {prices.map((p) => (
                <tr key={p.label} className="border-b border-slate-200 last:border-0">
                  <th scope="row" className="text-left font-medium text-slate-700 bg-slate-50 px-4 py-2.5">
                    {p.label}
                  </th>
                  <td className="px-4 py-2.5 font-bold text-slate-900">{p.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Fixed prices including downpipe flushing and before &amp; after photos. Fixed quote before any work starts.
        </p>

        <p className="text-sm font-semibold flex flex-wrap gap-x-5 gap-y-2 mt-8">
          {boost.links.map((l) => (
            <Link key={l.href} href={l.href} className="text-emerald-700 underline underline-offset-2">
              {l.label}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}
