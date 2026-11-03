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

/** Roof price line — official "from £500"; wording varies per town. */
export function roofPriceSentence(city: string, priceFrom: number | string): string {
  return pickVariant(`${city}-roof-price`, [
    `Roof cleaning in ${city} starts from £${priceFrom}. Roof size, moss level and access set the final figure, and you get a fixed price before we start.`,
    `Prices for roof cleaning in ${city} start at £${priceFrom}. A bungalow costs less than a large detached house — we confirm your exact price before any work.`,
    `Most ${city} roof cleans start from £${priceFrom}; heavy moss, steep or three-storey roofs and extra valleys add time, which we include in a fixed quote up front.`,
    `From £${priceFrom} for roof cleaning in ${city}. We look at the size of the roof, how much moss there is and how easy it is to reach, then fix the price.`,
  ]);
}

type FaqLike = { question: string; answer: string };

/**
 * Rewrites boilerplate FAQ answers that were word-for-word identical on dozens of area pages
 * (Nov 2026 duplicate-content fix). Deterministic per city, so visible FAQs and FAQPage schema
 * stay identical when both pass through this function. Facts and prices never change.
 */
export function localiseFaqs<T extends FaqLike>(city: string | undefined, faqs: readonly T[]): T[] {
  if (!city) return [...faqs];
  const rules: { test: (a: string) => boolean; make: (a: string) => string }[] = [
    {
      test: (a) => a.startsWith('Prices are fixed: £100 for a 2-bed home'),
      make: () => `${gutterPriceSentence(city)} Downpipe flushing and before & after photos are included, and the price is fixed before we start.`,
    },
    {
      test: (a) => a.startsWith('Our gutter cleaning prices in ') && a.includes('are fixed: £100'),
      make: () => `${gutterPriceSentence(city)} You get the fixed price before we start, with nothing added on the day.`,
    },
    {
      test: (a) => /^Most .+ homes need their gutters cleaned once or twice a year/.test(a),
      make: () =>
        pickVariant(`${city}-gfreq`, [
          `Once or twice a year for most ${city} homes. The important clean is late autumn, after the leaves drop; add a spring visit if large trees overhang the roof.`,
          `For a typical ${city} house, one clean a year in October or November is enough. Homes next to parks or tall trees usually need a second clean in April or May.`,
          `We suggest every 12 months, booked after leaf fall. In leafy parts of ${city}, or where moss falls from the roof, every 6 months keeps water flowing.`,
          `Annual cleaning suits most ${city} properties. If you see overflowing water, plants growing in the gutter or damp patches under the eaves, book sooner.`,
        ]),
    },
    {
      test: (a) => a.startsWith('We use a ground-level vacuum system — no ladders placed against your property'),
      make: () =>
        pickVariant(`${city}-gladder`, [
          `No ladders. Our carbon-fibre poles and industrial vacuum work from the ground in ${city}, up to 4 storeys, so nothing leans on your fascias.`,
          `We clean from the ground with a high-reach vacuum. No ladders touch your walls or gutters, which keeps your ${city} home free of marks and scuffs.`,
          `Never. The vacuum system reaches up to 4 storeys from your drive or garden, and a camera on the pole shows us inside the gutter as we work.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Yes. Downpipe clearing is included — we flush and test every downpipe'),
      make: () =>
        pickVariant(`${city}-gdown`, [
          `Yes. After the gutters are empty we run water down each downpipe on your ${city} property to check it drains, and clear any blockage we find.`,
          `Downpipes are part of the job. We flush them through and, if one is blocked by leaves or moss, we clear it for no extra charge.`,
          `Yes — a gutter clean is only finished when the water drains away, so every downpipe is tested and any blockage removed as standard.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Yes — before & after photos on every job. We send the images directly to you'),
      make: () =>
        pickVariant(`${city}-gphotos`, [
          `Yes. We take camera photos inside your gutters before and after the clean, and send them to you the same day.`,
          `Always. Many ${city} customers are at work while we clean, so the before & after photos show exactly what we removed.`,
          `Yes — you get photos of each run of gutter before and after cleaning, so you can see the result without climbing up.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Yes — we are fully insured for your peace of mind.') || a.startsWith('Yes. Fully insured with comprehensive public liability insurance on every job.'),
      make: () =>
        pickVariant(`${city}-gins`, [
          `Yes. WOW Gutters Ltd carries public liability insurance on every job in ${city}, and we can send details before you book.`,
          `Yes — fully insured, including work on flats, shops and offices in ${city}.`,
          `We are fully insured. Insurance details are available on request for landlords and managing agents.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Every 2–3 years suits most West Midlands homes') || a.startsWith('Most homeowners in this area book roof cleaning every 2–3 years') || a.startsWith('We typically recommend roof cleaning every 2–3 years'),
      make: () =>
        pickVariant(`${city}-rfreq`, [
          `Every 2–3 years for most ${city} roofs. North-facing and tree-shaded slopes may need treatment every 18–24 months; the biocide we apply slows regrowth.`,
          `Most ${city} homeowners book a roof clean every 2–3 years. Heavy moss on clay tiles, or roofs under mature trees, can need it sooner.`,
          `We usually suggest every 2–3 years. If moss is dropping into your ${city} gutters each winter, that is a sign the roof is due.`,
          `Typically every two to three years. Shaded rear slopes and valleys in ${city} grow moss faster, so we check those first.`,
          `Every 2–3 years keeps most ${city} roofs clear. Autumn is a good time, because the biocide then works through the damp winter months.`,
        ]),
    },
    {
      test: (a) => a.startsWith('No. We use controlled soft-wash methods and biocide treatment designed for UK roof tiles') || a.startsWith('No — high-pressure washing is avoided on roof tiles') || a.startsWith('We do not pressure-wash roof tiles'),
      make: () =>
        pickVariant(`${city}-rmethod`, [
          `No. On ${city} roofs we scrape moss off by hand and soft-wash the tiles, so pointing, ridges and older clay tiles are not damaged.`,
          `No — high pressure can crack tiles and wash out mortar. We use a soft-wash and biocide instead, which is safer for ${city} homes.`,
          `We avoid pressure washing. Moss is removed by hand, then a low-pressure biocide is applied to kill the spores left on the tiles.`,
          `No. Concrete and clay tiles in ${city} are cleaned with low-pressure soft-washing and finished with biocide to slow regrowth.`,
        ]),
    },
    {
      test: (a) => a.startsWith('We aim to offer bookings within 2 to 5 working days'),
      make: () =>
        pickVariant(`${city}-booking`, [
          `We aim to offer bookings within 2 to 5 working days across ${city}. Same-day visits may be available — call 07421 433910 to check.`,
          `Most ${city} jobs are booked within a week, often sooner. Call 07421 433910 and we'll tell you our next free slot near you.`,
          `We're in and around ${city} most weeks, so a visit within 2–5 working days is normal, and same-day is sometimes possible.`,
          `Usually within 2 to 5 working days. If water is already overflowing in ${city}, call 07421 433910 and we'll try to fit you in sooner.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Yes. Moss removal is included.'),
      make: () =>
        pickVariant(`${city}-moss`, [
          `Yes. Moss removal is included on every ${city} roof clean — we clear the moss, check the gutters at the roofline and apply biocide to slow regrowth.`,
          `Yes — removing moss is the main part of the job. On ${city} roofs we treat moss, algae and lichen, then apply biocide so it comes back more slowly.`,
          `It is. Every roof we clean in ${city} has the moss cleared, the gutters checked underneath and a biocide treatment at the end.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Yes. Before and after photos on every roof cleaning job.'),
      make: () =>
        pickVariant(`${city}-roofphotos`, [
          `Yes. You get before & after photos of your ${city} roof, sent the same day.`,
          `Always — we photograph each roof slope before and after, so you can see the result without going up a ladder.`,
          `Yes. Photos of the roof before and after cleaning are sent to you on the day we finish.`,
        ]),
    },
    {
      test: (a) => a.startsWith('Yes. Fully insured with comprehensive public liability insurance on every roof cleaning job.'),
      make: () =>
        pickVariant(`${city}-roofins`, [
          `Yes. WOW Gutters Ltd is fully insured for roof cleaning in ${city} and across the West Midlands.`,
          `Yes — we carry public liability insurance on every roof job, and can send details before you book.`,
          `We are fully insured, and insurance details are available on request before any ${city} roof work.`,
        ]),
    },
    {
      test: (a) => /^Roof cleaning in .+ starts from £\d+\. The exact price depends on roof size, moss coverage, and access/.test(a),
      make: (a) => {
        const m = /£(\d+)/.exec(a);
        return roofPriceSentence(city, m ? m[1] : '500');
      },
    },
  ];
  return faqs.map((f) => {
    const rule = rules.find((r) => r.test(f.answer));
    const question = localiseQuestion(city, f.question);
    return rule ? { ...f, question, answer: rule.make(f.answer) } : { ...f, question };
  });
}

const QUESTION_VARIANTS: Record<string, (city: string) => string[]> = {
  'Do you use ladders when cleaning gutters?': (c) => [
    'Do you use ladders when cleaning gutters?',
    `Will you put ladders against my ${c} home?`,
    'Do you need ladders to clean my gutters?',
  ],
  'Do you clear downpipes as well as gutters?': (c) => [
    'Do you clear downpipes as well as gutters?',
    'Are downpipes included in the price?',
    `Do you check the downpipes on ${c} homes too?`,
  ],
  'Do you provide before and after photos?': (c) => [
    'Do you provide before and after photos?',
    'Will I see proof the work was done?',
    `Will you send photos of my ${c} gutters?`,
  ],
  'Are you insured?': (c) => ['Are you insured?', `Are you fully insured for work in ${c}?`, 'Do you carry public liability insurance?'],
  'Are you insured for roof cleaning?': (c) => [
    'Are you insured for roof cleaning?',
    `Is your ${c} roof cleaning work insured?`,
    'Do you have insurance for roof work?',
  ],
  'Do you use pressure washing on roof tiles?': (c) => [
    'Do you use pressure washing on roof tiles?',
    `Will cleaning damage the tiles on my ${c} roof?`,
    'Is pressure washing safe for roof tiles?',
  ],
  'Does roof cleaning include moss removal?': (c) => [
    'Does roof cleaning include moss removal?',
    `Is moss removal part of the ${c} roof clean?`,
    'Do you remove moss, algae and lichen?',
  ],
};

function localiseQuestion(city: string, q: string): string {
  const v = QUESTION_VARIANTS[q];
  return v ? pickVariant(`${city}-q-${q}`, v(city)) : q;
}

const GUARANTEE_VARIANTS: { test: (g: string) => boolean; v: (c: string) => string[] }[] = [
  { test: (g) => g.startsWith('Ground-level vacuum system'), v: (c) => [
    'Ground-level vacuum system — no ladders placed against your property',
    `Cleaned from the ground in ${c} — nothing leans on your fascias`,
    'High-reach vacuum poles instead of ladders',
  ] },
  { test: (g) => g.startsWith('Reaches up to 4 storeys'), v: (c) => [
    'Reaches up to 4 storeys — homes, flats and commercial buildings',
    `Bungalows to 4-storey blocks across ${c}`,
    'Up to 4 storeys high, with no scaffolding needed',
  ] },
  { test: (g) => g.startsWith('Before & after photos included'), v: (c) => [
    'Before & after photos included as standard on every job',
    'Photo proof of the result, sent the same day',
    `Camera photos of your ${c} gutters before and after`,
  ] },
  { test: (g) => g.startsWith('Fully insured'), v: (c) => [
    'Fully insured — public liability cover on every visit',
    `Fully insured on every ${c} job`,
    'Insurance details available before you book',
  ] },
  { test: (g) => g.startsWith('Complete water flow testing'), v: () => [
    'Complete water flow testing on downpipes and gutters',
    'Every downpipe flushed and tested',
    'We check the water drains before we leave',
  ] },
  { test: (g) => g.startsWith('Controlled soft-wash methods'), v: (c) => [
    'Controlled soft-wash methods — no high-pressure washing on tiles',
    `Gentle soft-wash suited to ${c} clay and concrete tiles`,
    'Moss scraped by hand, never blasted off',
  ] },
  { test: (g) => g.startsWith('Moss, algae and lichen removal'), v: (c) => [
    'Moss, algae and lichen removal included on every job',
    `All moss and lichen cleared from your ${c} roof`,
    'Moss, algae and lichen removed in one visit',
  ] },
  { test: (g) => g.startsWith('Biocide treatment applied'), v: () => [
    'Biocide treatment applied after cleaning to slow regrowth',
    'Biocide finish to keep moss away for longer',
    'Anti-moss biocide included in the price',
  ] },
  { test: (g) => g.startsWith('4.9★') || g.startsWith('Rated 4.9★'), v: () => [
    'Rated 4.9★ on Google',
    'Rated 4.9★ on Google by local customers',
    'Local, family-run team rated 4.9★ on Google',
  ] },
];

/** Same promises, different wording per area, so the bullet list is not identical on every page. */
export function localiseGuarantees(city: string | undefined, list: readonly string[]): string[] {
  if (!city) return [...list];
  return list.map((g) => {
    const rule = GUARANTEE_VARIANTS.find((r) => r.test(g));
    return rule ? pickVariant(`${city}-g-${g.slice(0, 20)}`, rule.v(city)) : g;
  });
}

export function faqIntroLine(city: string, serviceLabel: string): string {
  return pickVariant(`${city}-${serviceLabel}-faqintro`, [
    `Everything you need to know about our ${city} ${serviceLabel} service.`,
    `The questions ${city} customers ask us most about ${serviceLabel}.`,
    `Straight answers about ${serviceLabel} in ${city} — prices, timings and what's included.`,
  ]);
}
