import Link from 'next/link';
import { nearbyAreas } from '@/lib/areaLinks';

function toAreaTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function NearbyAreas({ area }: { area: string }) {
  const key = area.toLowerCase();
  const links = nearbyAreas[key] ?? [];
  if (!links.length) return null;

  return (
    <section className="py-14 px-4 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-8">
          Areas near {toAreaTitle(key)} we also cover
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <li key={link.slug}>
              <Link
                href={`/${link.slug}/`}
                className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
              >
                Gutter Cleaning {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

