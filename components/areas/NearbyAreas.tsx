import Link from 'next/link';
import { nearbyAreas } from '@/lib/areaLinks';
import { AREA_SERVICE_META, type AreaServiceKind } from '@/lib/areaServiceMeta';

function toAreaTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function toServiceSlug(gutterSlug: string, serviceKind: AreaServiceKind): string {
  if (serviceKind === 'roof') {
    return gutterSlug.replace(/^gutter-cleaning-/, 'roof-cleaning-');
  }
  return gutterSlug;
}

export default function NearbyAreas({
  area,
  serviceKind = 'gutter',
}: {
  area: string;
  serviceKind?: AreaServiceKind;
}) {
  const key = area.toLowerCase();
  const links = nearbyAreas[key] ?? [];
  const meta = AREA_SERVICE_META[serviceKind];
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
                href={`/${toServiceSlug(link.slug, serviceKind)}/`}
                className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
              >
                {meta.nearbyLinkPrefix} {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

