/**
 * TypeScript view of the area index policy (lib/area-index-policy.json, shared with
 * lib/index-policy.cjs). Use it to avoid linking to area pages that are noindexed.
 */
import policy from '@/lib/area-index-policy.json';

const AREA = new Set<string>(policy.areaSlugs);
const CORE = new Set<string>(policy.coreTowns);
const KEEP_GUTTER = new Set<string>(policy.keepGutterCleaningSuburbs);

export type AreaFamily = 'gutter-cleaning' | 'roof-cleaning' | 'gutter-repair';

/** True when the area page for this service family stays indexable. */
export function isIndexableArea(family: AreaFamily, areaSlug: string): boolean {
  if (!AREA.has(areaSlug)) return true; // not an area page — not governed by this policy
  if (family === 'gutter-repair') return false; // Oct 31 2026: spun copies of gutter pages
  if (CORE.has(areaSlug)) return true;
  return family === 'gutter-cleaning' && KEEP_GUTTER.has(areaSlug);
}

/** True when a path like /roof-cleaning-moseley/ points at an indexable page. */
export function isIndexableAreaPath(path: string): boolean {
  const slug = path.replace(/^https?:\/\/[^/]+/, '').replace(/^\/+|\/+$/g, '').toLowerCase();
  const m = /^(gutter-cleaning|roof-cleaning|gutter-repair)-(.+)$/.exec(slug);
  if (!m) return true;
  return isIndexableArea(m[1] as AreaFamily, m[2]);
}
