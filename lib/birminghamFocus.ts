/**
 * Birmingham focus (Nov 2026, cannibalisation fix).
 *
 * Search Console showed 60+ of our pages appearing for "gutter cleaning birmingham", so
 * Google split the ranking between them. /gutter-cleaning-birmingham/ is now the ONLY page
 * aimed at that search: the homepage targets the West Midlands, and suburb/district pages
 * target their own place name (e.g. "Gutter Cleaning Hall Green", not
 * "Gutter Cleaning Hall Green Birmingham") and link to the Birmingham page instead.
 */

export const BIRMINGHAM_HUB_PATH = '/gutter-cleaning-birmingham/';
export const BIRMINGHAM_HUB_ANCHOR = 'gutter cleaning Birmingham';

/** Places whose name needs "Birmingham" to be understood (not the US places). */
const KEEP_SUFFIX_RE = /\b(hollywood|california)\s*,?\s+birmingham\b/i;

/**
 * "Gutter Cleaning Hall Green Birmingham" -> "Gutter Cleaning Hall Green".
 * "Gutter Cleaning Aston, Birmingham — B6" -> "Gutter Cleaning Aston — B6".
 * Leaves "Gutter Cleaning Birmingham" (the hub page) and non gutter-cleaning text alone.
 */
export function dropBirminghamSuffix(text: string): string {
  if (!text || KEEP_SUFFIX_RE.test(text)) return text;
  const m = text.match(/^(\s*gutter cleaning\s+(?:in\s+)?)(.+?)\s*,?\s+birmingham\b(.*)$/i);
  if (!m) return text;
  const place = m[2].trim();
  if (!place || /birmingham/i.test(place)) return text;
  return `${m[1]}${place}${m[3]}`.replace(/\s+/g, ' ').trim();
}
