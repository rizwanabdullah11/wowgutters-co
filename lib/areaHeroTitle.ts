/** Split area hero H1 into two display lines (Moseley format). */
export function splitAreaHeroTitle(h1: string): { line1: string; line2: string } {
  const normalized = h1
    .replace(/\\u201D/g, ' — ')
    .replace(/\u201D/g, ' — ')
    .replace(/\u201C/g, '')
    .replace(/\\u201C/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const separators = [' — ', ' – ', ' - '];
  for (const sep of separators) {
    const idx = normalized.indexOf(sep);
    if (idx !== -1) {
      return {
        line1: normalized.slice(0, idx).trim(),
        line2: normalized.slice(idx + sep.length).trim(),
      };
    }
  }

  return { line1: normalized, line2: '' };
}

/** Birmingham district pages — line 1 should end with "Birmingham". */
const BIRMINGHAM_DISTRICT_SLUGS = new Set([
  'aston',
  'edgbaston',
  'selly-oak',
  'harborne',
  'handsworth',
  'handsworth-wood',
  'erdington',
  'kingstanding',
  'perry-barr',
  'great-barr',
  'yardley',
  'acocks-green',
  'stechford',
  'shard-end',
  'moseley',
  'balsall-heath',
  'kings-norton',
  'hall-green',
  'northfield',
  'hodge-hill',
  'saltley',
  'small-heath',
  'sparkbrook',
  'sparkhill',
]);

export function normalizeAreaHeroTitle(
  slug: string,
  h1: string,
): { line1: string; line2: string } {
  const { line1: rawLine1, line2: rawLine2 } = splitAreaHeroTitle(h1);

  let line1 = rawLine1;
  let line2 = rawLine2;

  if (BIRMINGHAM_DISTRICT_SLUGS.has(slug) && !/\bBirmingham\b/i.test(line1)) {
    line1 = `${line1} Birmingham`;
  }

  if (line2) {
    const postcodeMatch = line2.match(/for\s+((?:B\d{1,2}(?:\s*&\s*B\d{1,2})?)(?:\s+Properties)?)/i);
    if (postcodeMatch && BIRMINGHAM_DISTRICT_SLUGS.has(slug)) {
      const postcodePart = postcodeMatch[1].replace(/\s+Properties$/i, '');
      line2 = `Professional Service for ${postcodePart} Properties`;
    } else if (!/^Professional Service/i.test(line2) && /for\s+B\d/i.test(line2)) {
      const forMatch = line2.match(/for\s+(.+)/i);
      if (forMatch) {
        const tail = forMatch[1].replace(/\s+Properties$/i, '');
        line2 = `Professional Service for ${tail} Properties`;
      }
    }
  }

  return { line1, line2 };
}
