/**
 * Small, deterministic wording variations so the same UI block does not read word-for-word
 * identical on every area page (Nov 2026 duplicate-content fix). The choice depends only on
 * the area name, so a page always renders the same text between builds.
 */
export function seedOf(text: string | undefined): number {
  const s = (text ?? '').toLowerCase();
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function pickVariant<T>(seed: string | undefined, variants: readonly T[]): T {
  return variants[seedOf(seed) % variants.length];
}

/** Pick `count` distinct items, order depending on the seed. */
export function pickMany<T>(seed: string | undefined, items: readonly T[], count: number): T[] {
  if (items.length <= count) return [...items];
  const start = seedOf(seed) % items.length;
  const step = 1 + (seedOf(`${seed}-step`) % (items.length - 1));
  const out: T[] = [];
  let i = start;
  while (out.length < count) {
    const item = items[i % items.length];
    if (!out.includes(item)) out.push(item);
    i += step;
  }
  return out;
}

export function whatsappLine(city: string): string {
  return pickVariant(city, [
    `Our ${city} team responds quickly to WhatsApp messages. One tap and we'll help with quotes, availability and advice.`,
    `Live in ${city}? Send us a WhatsApp with your postcode and house type and we'll reply with a fixed price and our next free day.`,
    `Message us on WhatsApp from anywhere in ${city} — a photo of the problem gutter is enough for us to quote and book you in.`,
    `Prefer to text? WhatsApp the WOW Gutters team about your ${city} property and we'll answer with a price, dates and honest advice.`,
  ]);
}

/** Official prices only (constants/gutterPricing.ts) — wording varies, numbers never do. */
export function gutterPriceSentence(city: string): string {
  return pickVariant(`${city}-price`, [
    `Fixed prices in ${city}: £100 for a 2-bed home, £110 for a 3-bed home, and our Premium Service from £200. Commercial properties are quoted individually.`,
    `In ${city}, a typical 3-bed semi costs £110 and a 2-bed home £100. Larger homes and extras go on our Premium Service, from £200.`,
    `Most ${city} homes fall into one of three fixed prices: £100 (2-bed), £110 (3-bed) or Premium from £200 for bigger or more complex rooflines.`,
    `Gutter cleaning in ${city} costs £100 for a 2-bed property and £110 for a 3-bed. Premium Service starts at £200; shops and offices get a custom quote.`,
  ]);
}
