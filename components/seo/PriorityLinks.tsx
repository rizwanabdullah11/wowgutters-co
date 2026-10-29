import Link from 'next/link';

/**
 * Day 6 (Oct 29 2026): pass authority from pages that already rank (GSC position ~10)
 * to money pages stuck on page 2 for these searches:
 *   gutter repair birmingham (pos 18.8) · gutter cleaning near me (18.4)
 *   gutter cleaning kidderminster (18.3) · gutter cleaning northfield (13.7)
 * Rendered only on the source pages listed in SOURCE_PATHS.
 */
const SOURCE_PATHS = new Set([
  '/wasp-nest-in-gutter-who-to-call/',
  '/how-much-to-unblock-a-downpipe/',
  '/blog/blocked-gutters-sycamore-seeds/',
]);

const LINKS = [
  { href: '/gutter-repair-birmingham/', label: 'Gutter repairs in Birmingham', note: 'Leaks, sagging runs and broken brackets — from £30' },
  { href: '/gutter-cleaning-near-me/', label: 'Gutter cleaning near me', note: 'Local technicians across the West Midlands — from £100' },
  { href: '/gutter-cleaning-birmingham/', label: 'Gutter cleaning in Birmingham', note: 'Ground-level vacuum, before & after photos' },
  { href: '/gutter-cleaning-northfield/', label: 'Gutter cleaning in Northfield', note: 'B31 homes and businesses' },
  { href: '/gutter-cleaning-kidderminster/', label: 'Gutter cleaning in Kidderminster', note: 'DY10 and DY11 properties' },
];

export function hasPriorityLinks(path: string): boolean {
  return SOURCE_PATHS.has(path);
}

export default function PriorityLinks({ path }: { path: string }) {
  if (!SOURCE_PATHS.has(path)) return null;
  return (
    <section aria-labelledby="priority-links-heading" className="py-12 px-4 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 id="priority-links-heading" className="text-2xl md:text-3xl font-black text-slate-900 text-center">
          Popular local services from WOW Gutters
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-[#19C58B] transition-colors"
              >
                <span className="block font-bold text-[#047857]">{l.label} →</span>
                <span className="block text-sm text-slate-600 mt-1">{l.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
