import { AREA_SLUGS } from '@/lib/areaSlugs';

const SLUG_SET = new Set<string>(AREA_SLUGS);

/** Common display-name aliases → canonical area slug */
const NAME_ALIASES: Record<string, string> = {
  'west midlands': 'westmidlands',
  'west-midlands': 'westmidlands',
  droitwich: 'droitwich-spa',
  hollywood: 'hollywood-birmingham',
  california: 'california-birmingham',
};

function normalizeToSlug(query: string): string {
  return query.toLowerCase().trim().replace(/\s+/g, '-');
}

function slugToWords(slug: string): string {
  return slug.replace(/-/g, ' ');
}

/**
 * Resolve a town/city search query to a known area slug, or null if no match.
 */
export function resolveAreaSlug(query: string): string | null {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const asSlug = normalizeToSlug(trimmed);
  if (SLUG_SET.has(asSlug)) return asSlug;

  const alias = NAME_ALIASES[trimmed.toLowerCase()] ?? NAME_ALIASES[asSlug];
  if (alias && SLUG_SET.has(alias)) return alias;

  const words = trimmed.toLowerCase().trim();
  const byDisplayName = AREA_SLUGS.find((slug) => slugToWords(slug) === words);
  if (byDisplayName) return byDisplayName;

  const partial = AREA_SLUGS.find(
    (slug) => slug.includes(asSlug) || asSlug.includes(slug),
  );
  return partial ?? null;
}
