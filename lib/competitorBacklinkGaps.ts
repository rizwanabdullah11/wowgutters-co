/**
 * Competitor backlink gap targets (audit 15.05) — domains that often link to UK gutter competitors.
 * Use for outreach; verify each site before pitching.
 */

export const PRIMARY_COMPETITOR = {
  name: "Ben's Gutters",
  domain: 'bensgutters.com',
  note: 'National franchise — strong directory and local press citations.',
};

export const BACKLINK_OUTREACH_TARGETS = [
  {
    category: 'Trade directories',
    examples: ['Checkatrade', 'Rated People', 'MyBuilder', 'Bark'],
    action: 'Complete WOW Gutters Ltd profiles with NAP from /citations/ and request featured listing where paid.',
  },
  {
    category: 'Local Birmingham / West Midlands',
    examples: ['Birmingham Mail business listings', 'West Midlands business chambers', 'Neighbourhood Facebook groups'],
    action: 'Pitch before/after case studies from /the-gutter-gallery/ with link to relevant area page.',
  },
  {
    category: 'Home improvement editorial',
    examples: ['Homebuilding & Renovating', 'Real Homes', 'Ideal Home (garden/drainage topics)'],
    action: 'Offer expert quotes on ladder-free gutter cleaning and autumn maintenance.',
  },
  {
    category: 'Supplier & trade associations',
    examples: ['Federation of Master Builders partners', 'Roofing merchant local pages'],
    action: 'Ask for preferred contractor list inclusion after insurance documents supplied.',
  },
] as const;

export const MONTHLY_BACKLINK_AUDIT_STEPS = [
  'Google Search Console → Links → Top linking sites — flag unknown spam TLDs.',
  'Export new referring domains monthly; compare to this outreach list.',
  'Disavow only confirmed toxic domains via GSC Disavow Tool (not routine good links).',
  'Add earned links to relevant area pages (/gutter-cleaning-{area}/) where geographically accurate.',
] as const;
