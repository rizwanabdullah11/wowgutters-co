/**
 * Standard 7 FAQs for primary city landing pages — matches Birmingham pattern.
 * UI copy (page) and schema copy stay aligned on questions; answers differ slightly in length.
 */

export const PRIMARY_CITY_SLUGS = [
  'birmingham',
  'wolverhampton',
  'solihull',
  'walsall',
  'coventry',
  'dudley',
  'sandwell',
  'worcester',
  'bromsgrove',
  'redditch',
  'kidderminster',
  'malvern',
  'evesham',
  'westmidlands',
  'derby',
] as const;

export type PrimaryCitySlug = (typeof PRIMARY_CITY_SLUGS)[number];

export type CityFaqItem = {
  question: string;
  answer: string;
  icon: string;
};

type FaqPair = { schema: string; page: string };

const FAQ_ICONS = ['💳', '🗓️', '🪜', '🚰', '📷', '📍', '✓'] as const;

/** Richer coverage answers for schema + on-page FAQs (primary cities only). */
const CITY_COVERAGE: Partial<Record<string, FaqPair>> = {
  birmingham: {
    schema:
      'All Birmingham postcodes B1 to B76 including Moseley (B13), Harborne (B17), Edgbaston (B15-B16), Kings Heath (B14), Erdington (B23), Sutton Coldfield (B73-B74), Selly Oak (B29), Northfield (B31), Acocks Green (B27), Hall Green (B28) and Great Barr (B43).',
    page: 'We cover all Birmingham postcodes B1 to B76 including Moseley (B13), Harborne (B17), Edgbaston (B15-B16), Kings Heath (B14), Erdington (B23), Sutton Coldfield (B73-B74), Selly Oak (B29), Northfield (B31), Acocks Green (B27), Hall Green (B28), Great Barr (B43) and all surrounding areas. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  wolverhampton: {
    schema:
      'All Wolverhampton postcodes including Penn (WV4), Tettenhall (WV6), Compton (WV3), Wednesfield (WV11), Bilston (WV14), Willenhall (WV12), Fordhouses (WV10) and all surrounding areas.',
    page: 'We cover all Wolverhampton postcodes including Penn, Tettenhall, Compton, Wednesfield, Bilston, Willenhall, Fordhouses and all WV1–WV14 areas. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  solihull: {
    schema:
      'All Solihull postcodes B90–B94 including Knowle, Dorridge, Shirley, Olton, Bentley Heath, Cheswick Green, Balsall Common, Marston Green and Hampton-in-Arden.',
    page: 'We cover all Solihull postcodes B90–B94 including Knowle, Dorridge, Shirley, Olton, Bentley Heath, Cheswick Green, Balsall Common, Marston Green and Hampton-in-Arden. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  walsall: {
    schema:
      'All Walsall postcodes WS1–WS10 including Aldridge, Bloxwich, Brownhills, Pelsall, Streetly, Rushall, Shelfield and Willenhall border areas.',
    page: 'We cover all Walsall postcodes WS1–WS10 including Aldridge, Bloxwich, Brownhills, Pelsall, Streetly, Rushall, Shelfield and surrounding areas. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  coventry: {
    schema:
      'All Coventry postcodes CV1–CV6 including Earlsdon, Allesley, Tile Hill, Canley, Finham, Radford, Foleshill, Bell Green, Holbrooks and Binley.',
    page: 'We cover all Coventry postcodes CV1–CV6 including Earlsdon, Allesley, Tile Hill, Canley, Finham, Radford, Foleshill, Bell Green, Holbrooks and Binley. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  dudley: {
    schema:
      'All Dudley borough postcodes including Dudley town, Kingswinford, Sedgley, Netherton, Brierley Hill, Stourbridge border and Gornal.',
    page: 'We cover Dudley town, Kingswinford, Sedgley, Netherton, Brierley Hill, Gornal and all surrounding DY1–DY3 postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  sandwell: {
    schema:
      'All Sandwell postcodes including West Bromwich, Smethwick, Oldbury, Tipton, Wednesbury, Rowley Regis and Great Bridge.',
    page: 'We cover West Bromwich, Smethwick, Oldbury, Tipton, Wednesbury, Rowley Regis, Great Bridge and all Sandwell postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  worcester: {
    schema:
      'All Worcester postcodes WR1–WR5 including St Johns, Barbourne, Rainbow Hill, Warndon, St Peters and surrounding villages.',
    page: 'We cover Worcester city and WR1–WR5 including St Johns, Barbourne, Rainbow Hill, Warndon and St Peters. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  bromsgrove: {
    schema:
      'All Bromsgrove postcodes B60–B61 including Aston Fields, Catshill, Fairfield, Stoke Prior and surrounding Worcestershire villages.',
    page: 'We cover Bromsgrove town, Aston Fields, Catshill, Fairfield, Stoke Prior and all B60–B61 postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  redditch: {
    schema:
      'All Redditch postcodes B97–B98 including Church Hill, Matchborough, Winyates, Webheath, Astwood Bank and Studley border.',
    page: 'We cover Church Hill, Matchborough, Winyates, Webheath, Astwood Bank, Studley border and all B97–B98 postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  kidderminster: {
    schema:
      'All Kidderminster postcodes DY10–DY11 including Habberley, Foley Park, Franche, Blakedown, Wolverley and Stourport-on-Severn.',
    page: 'We cover Kidderminster town, Habberley, Foley Park, Franche, Blakedown, Wolverley, Stourport-on-Severn and all DY10–DY11 postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  malvern: {
    schema:
      'All Malvern postcodes WR13–WR14 including Great Malvern, Malvern Link, Barnards Green, West Malvern and Colwall border.',
    page: 'We cover Great Malvern, Malvern Link, Barnards Green, West Malvern, Colwall border and all WR13–WR14 postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  evesham: {
    schema:
      'All Evesham postcodes WR10–WR11 including Bengeworth, Hampton, Greenhill, Wickhamford and surrounding Vale of Evesham villages.',
    page: 'We cover Evesham town, Bengeworth, Hampton, Greenhill, Wickhamford and all WR10–WR11 postcodes. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  westmidlands: {
    schema:
      'Birmingham, Wolverhampton, Coventry, Walsall, Dudley, Sandwell, Solihull, Sutton Coldfield, Redditch, Bromsgrove, Worcester, Kidderminster and surrounding towns.',
    page: 'We cover Birmingham, Wolverhampton, Coventry, Walsall, Dudley, Sandwell, Solihull, Sutton Coldfield, Redditch, Bromsgrove, Worcester, Kidderminster, Tamworth, Stourbridge and the wider West Midlands. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
  derby: {
    schema:
      'All Derby postcodes DE1–DE24 including Derby city centre, Allestree, Mickleover, Littleover, Chellaston, Oakwood, Spondon, Chaddesden, Mackworth and Sinfin.',
    page: 'We cover all Derby postcodes DE1–DE24 including Derby city centre, Allestree, Mickleover, Littleover, Chellaston, Oakwood, Spondon, Chaddesden, Mackworth, Sinfin and all surrounding areas. Not sure? Call 07421 433910 and we will confirm in 30 seconds.',
  },
};

function defaultCoverage(
  city: string,
  postcodes: string[],
  nearbyAreas: string[],
  forPage: boolean,
): string {
  const pc = postcodes.length
    ? ` including ${postcodes.slice(0, 8).join(', ')}${postcodes.length > 8 ? ' and more' : ''}`
    : '';
  const areas = nearbyAreas.length
    ? ` and surrounding areas such as ${nearbyAreas.slice(0, 6).join(', ')}`
    : '';
  const base = `We cover all ${city} postcodes${pc}${areas}.`;
  return forPage ? `${base} Not sure? Call 07421 433910 and we will confirm in 30 seconds.` : base.replace(/^We cover/, 'All');
}

function coverageAnswer(
  city: string,
  slug: string,
  postcodes: string[],
  nearbyAreas: string[],
  forPage: boolean,
): string {
  const custom = CITY_COVERAGE[slug];
  if (custom) return forPage ? custom.page : custom.schema;
  return defaultCoverage(city, postcodes, nearbyAreas, forPage);
}

export type BuildCityFaqsInput = {
  city: string;
  slug: string;
  priceFrom: number;
  priceTo: number;
  postcodes?: string[];
  nearbyAreas?: string[];
};

export function buildCitySchemaFaqs({
  city,
  slug,
  priceFrom,
  priceTo,
  postcodes = [],
  nearbyAreas = [],
}: BuildCityFaqsInput): Array<{ question: string; answer: string }> {
  const semiLow = priceFrom + 10;
  const semiHigh = Math.min(priceFrom + 30, priceTo);
  const detachedLow = priceFrom + 30;

  return [
    {
      question: `How much does gutter cleaning cost in ${city}?`,
      answer: `Prices start from £${priceFrom} for a terraced house, £${semiLow}–£${semiHigh} for semi-detached, £${detachedLow}–£${priceTo} for detached. Fixed quote before work starts.`,
    },
    {
      question: `How often should I have my gutters cleaned in ${city}?`,
      answer:
        'Once or twice a year. Late autumn (October–November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
    },
    {
      question: 'Do you use ladders when cleaning gutters?',
      answer:
        'No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys.',
    },
    {
      question: 'Do you clear downpipes as well as gutters?',
      answer:
        'Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Yes. Before and after photos on every single job. Images sent directly to you.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      answer: coverageAnswer(city, slug, postcodes, nearbyAreas, false),
    },
    {
      question: 'Are you insured?',
      answer: 'Yes. Fully insured with comprehensive public liability insurance on every job.',
    },
  ];
}

export function buildCityPageFaqs(input: BuildCityFaqsInput): CityFaqItem[] {
  const { city, priceFrom, priceTo } = input;
  const semiLow = priceFrom + 10;
  const semiHigh = Math.min(priceFrom + 30, priceTo);
  const detachedLow = priceFrom + 30;

  const pairs: Array<{ question: string; schema: string; page: string }> = [
    {
      question: `How much does gutter cleaning cost in ${city}?`,
      schema: `Prices start from £${priceFrom} for a terraced house, £${semiLow}–£${semiHigh} for semi-detached, £${detachedLow}–£${priceTo} for detached. Fixed quote before work starts.`,
      page: `Our gutter cleaning prices in ${city} start from £${priceFrom} for a standard terraced house. Semi-detached homes typically range from £${semiLow}–£${semiHigh}, and larger detached properties from £${detachedLow}–£${priceTo}. Commercial properties are priced individually. We provide a fixed, transparent quote before any work starts — no hidden fees, no surprises.`,
    },
    {
      question: `How often should I have my gutters cleaned in ${city}?`,
      schema:
        'Once or twice a year. Late autumn (October–November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
      page: `Most ${city} homes need their gutters cleaned once or twice a year — late autumn (October–November) being the most critical time, with a spring clean in April or May for properties with significant tree coverage.`,
    },
    {
      question: 'Do you use ladders when cleaning gutters?',
      schema:
        'No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys.',
      page: 'We use a ground-level vacuum system — no ladders placed against your property, so there is no risk of fascia damage and no mess on your walls.',
    },
    {
      question: 'Do you clear downpipes as well as gutters?',
      schema:
        'Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
      page: 'Yes. Downpipe clearing is included — we flush and test every downpipe as standard. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.',
    },
    {
      question: 'Do you provide before and after photos?',
      schema: 'Yes. Before and after photos on every single job. Images sent directly to you.',
      page: 'Yes — before & after photos on every job. We send the images directly to you so you have visual proof of every clean.',
    },
    {
      question: `What areas of ${city} do you cover?`,
      schema: coverageAnswer(city, input.slug, input.postcodes ?? [], input.nearbyAreas ?? [], false),
      page: coverageAnswer(city, input.slug, input.postcodes ?? [], input.nearbyAreas ?? [], true),
    },
    {
      question: 'Are you insured?',
      schema: 'Yes. Fully insured with comprehensive public liability insurance on every job.',
      page: 'Yes — we are fully insured for your peace of mind.',
    },
  ];

  return pairs.map((p, i) => ({
    question: p.question,
    answer: p.page,
    icon: FAQ_ICONS[i] ?? '✓',
  }));
}

export function isPrimaryCitySlug(slug: string): slug is PrimaryCitySlug {
  return (PRIMARY_CITY_SLUGS as readonly string[]).includes(slug);
}
