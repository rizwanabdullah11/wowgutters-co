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
  if (serviceKind === 'repair') {
    return gutterSlug.replace(/^gutter-cleaning-/, 'gutter-repair-');
  }
  if (serviceKind === 'inspection') {
    return gutterSlug.replace(/^gutter-cleaning-/, 'gutter-inspection-');
  }
  if (serviceKind === 'roof-inspection') {
    return gutterSlug.replace(/^gutter-cleaning-/, 'roof-inspection-');
  }
  if (serviceKind === 'upvc') {
    return gutterSlug.replace(/^gutter-cleaning-/, 'exterior-upvc-cleaning-');
  }
  return gutterSlug;
}

export default function NearbyAreas({
  area,
  serviceKind = 'gutter',
  maxLinks = 4,
}: {
  area: string;
  serviceKind?: AreaServiceKind;
  maxLinks?: number;
}) {
  const key = area.toLowerCase();
  const links = (nearbyAreas[key] ?? []).slice(0, maxLinks);
  const meta = AREA_SERVICE_META[serviceKind];
  if (!links.length) return null;

  return (
    <section className="py-14 px-4 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-8">
          Areas near {toAreaTitle(key)} we also cover
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map((link, i) => {
            const variants = [
              `${meta.nearbyLinkPrefix} ${link.name}`,
              `${link.name} ${meta.labelLower}`,
              `${meta.labelLower} in ${link.name}`,
            ];
            const label = variants[i % variants.length];
            return (
              <li key={link.slug}>
                <Link
                  href={`/${toServiceSlug(link.slug, serviceKind)}/`}
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

