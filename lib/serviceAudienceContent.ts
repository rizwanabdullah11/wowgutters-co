/**
 * Service-specific FAQs, FAQ headings and guide picks for the /services/* pages that used to
 * share one generic homeowner FAQ (Nov 2026: 13 service pages were ~85% identical).
 *
 * Rules: official prices only (2-bed £100, 3-bed £110, Premium from £200, repairs from £30,
 * fascia & soffit £90, conservatory from £50, installation £300, roof from £500, commercial =
 * custom quote). No guarantees or warranties, no review counts, no accreditation we can't show.
 */
type Faq = { question: string; answer: string; icon: string };

export type ServiceAudienceContent = {
  faqTitle: string;
  faqSubtitle: string;
  faqs: Faq[];
  /** Blog post ids (live posts only) to show in the "Expert insights" block. */
  guides: string[];
};

export const SERVICE_AUDIENCE_CONTENT: Record<string, ServiceAudienceContent> = {
  'gutter-cleaning-for-landlords': {
    faqTitle: 'Landlord Gutter Cleaning Questions',
    faqSubtitle: 'What landlords and letting agents ask us before booking.',
    faqs: [
      { icon: '📋', question: 'Do I get proof the gutters were cleaned?', answer: 'Yes. Every visit includes before & after photos of each gutter run and a short written summary, sent digitally so you can keep it with the property records or forward it to your letting agent.' },
      { icon: '🔑', question: 'Do my tenants need to be home?', answer: 'Usually not. We clean from the ground with a vacuum system, so we only need safe access to the outside of the property. We can agree access details with you or your agent before the visit.' },
      { icon: '🏘️', question: 'Can you clean several of my properties on one visit day?', answer: 'Yes. If your rental homes are close together we can route them on the same day, and you get a separate photo record for each address.' },
      { icon: '💷', question: 'How much does it cost per property?', answer: 'Standard prices are £100 for a 2-bed and £110 for a 3-bed home, with Premium from £200 for larger properties. HMOs and blocks are quoted individually after we know the size and access.' },
      { icon: '🏠', question: 'Why does gutter cleaning matter for a rental?', answer: 'Overflowing gutters are a common cause of damp patches and mould inside rented homes. Regular cleaning helps prevent repair bills and tenant complaints, and the photos show you kept up with maintenance.' },
    ],
    guides: ['landlord-gutter-cleaning', 'damp-external-wall-gutters', 'gutter-water-damage-guide', 'how-often-should-gutters-be-cleaned'],
  },
  'gutter-cleaning-for-facilities-managers': {
    faqTitle: 'Questions from Facilities Managers',
    faqSubtitle: 'Planning, paperwork and site access — answered.',
    faqs: [
      { icon: '🗓️', question: 'Can you work to our site schedule?', answer: 'Yes. We plan visits around opening hours, deliveries and staff movements, and can work early or at quieter times where the site allows it.' },
      { icon: '📑', question: 'What paperwork do you provide?', answer: 'We provide our insurance details before work starts and a photo report afterwards showing each gutter run before and after, plus notes on any defects such as leaking joints or damaged downpipes.' },
      { icon: '🏢', question: 'How high can you reach?', answer: 'Our ground-based vacuum reaches up to 4 storeys, so most offices, schools and retail units can be cleaned without scaffolding or ladders against the building.' },
      { icon: '🔁', question: 'Can you set up regular maintenance visits?', answer: 'Yes. Many sites book one or two cleans a year, usually after autumn leaf fall and again in spring. We agree the visit pattern and price with you up front.' },
      { icon: '💷', question: 'How is a commercial site priced?', answer: 'Commercial work is quoted individually based on gutter length, building height, access and the number of downpipes. You get a fixed price before we start.' },
    ],
    guides: ['offices-schools-gutter-cleaning', 'high-level-gutter-cleaning', 'warehouse-gutter-case-study', 'year-round-gutter-protection'],
  },
  'gutter-cleaning-for-property-developers': {
    faqTitle: 'Developer & New-Build Questions',
    faqSubtitle: 'Gutter cleaning around handover, snagging and resale.',
    faqs: [
      { icon: '🏗️', question: 'Why clean gutters on a new build?', answer: 'Building work leaves dust, mortar, sand and packaging in gutters and outlets. Clearing them before handover stops blocked downpipes and water staining appearing in the first wet weeks after buyers move in.' },
      { icon: '📸', question: 'Can you provide photos for handover packs?', answer: 'Yes. We photograph each run before and after cleaning, so you have a clear record that gutters and downpipes were clear and flowing at handover.' },
      { icon: '🏘️', question: 'Can you clean a whole phase of plots?', answer: 'Yes. We can work through a row or phase plot by plot and give you a photo record for each address.' },
      { icon: '🔧', question: 'Will you report snagging issues?', answer: 'If we see something wrong during the clean — a misaligned gutter, a joint that leaks under flow test, or a loose bracket — we note it on the report so your team can put it right.' },
      { icon: '💷', question: 'How do you price development work?', answer: 'Development and multi-plot work is quoted individually based on the number of plots, building height and access, with a fixed price agreed before we start.' },
    ],
    guides: ['gutters-before-selling', 'stop-gutters-blocking', 'downpipe-blocked-signs-birmingham-homes', 'gutter-cleaning-cost-guide'],
  },
  'gutter-cleaning-for-multiple-sites': {
    faqTitle: 'Multi-Site Gutter Cleaning Questions',
    faqSubtitle: 'For organisations with buildings across the West Midlands.',
    faqs: [
      { icon: '🗺️', question: 'Which areas do you cover?', answer: 'We cover Birmingham and the wider West Midlands, including Solihull, Sutton Coldfield, Wolverhampton, Walsall, Dudley and West Bromwich, so sites in different towns can be grouped into planned visit days.' },
      { icon: '📊', question: 'Can we get one report for all sites?', answer: 'Each site gets its own before & after photo record, and we can send them together so you have one set of records for the whole portfolio.' },
      { icon: '📞', question: 'Will we have one point of contact?', answer: 'Yes. You deal with the WOW Gutters office for scheduling, quotes and reports across all your sites, rather than booking each building separately.' },
      { icon: '🔁', question: 'Can different sites have different schedules?', answer: 'Yes. A tree-lined school might need two cleans a year while an industrial unit needs one. We agree a visit pattern per site.' },
      { icon: '💷', question: 'How are multiple sites priced?', answer: 'Each site is priced on its own size, height and access, and we agree the full list of prices before the first visit.' },
    ],
    guides: ['offices-schools-gutter-cleaning', 'warehouse-gutter-case-study', 'block-gutter-maintenance', 'seasonal-home-maintenance'],
  },
  'gutter-cleaning-contracts': {
    faqTitle: 'Gutter Maintenance Contract Questions',
    faqSubtitle: 'How planned, repeat gutter cleaning works with us.',
    faqs: [
      { icon: '📆', question: 'How often will you visit?', answer: 'Most contracts are one or two visits a year — typically late autumn after leaf fall, and spring for sites with heavy tree cover. We agree the frequency with you.' },
      { icon: '🔔', question: 'Do you remind us when a visit is due?', answer: 'Yes. We contact you ahead of each planned visit to confirm the date, so you don\'t have to remember to book.' },
      { icon: '📸', question: 'What do we receive after each visit?', answer: 'Before & after photos of the gutters, confirmation that downpipes were flushed and flowing, and notes on anything that needs repair.' },
      { icon: '🔧', question: 'What if you find a problem?', answer: 'We photograph it and tell you. Small repairs start from £30 and we never carry out extra work without your approval.' },
      { icon: '💷', question: 'How is a contract priced?', answer: 'Homes follow our standard prices (2-bed £100, 3-bed £110, Premium from £200). Commercial sites are quoted individually. The price per visit is agreed before the contract starts.' },
    ],
    guides: ['how-often-should-gutters-be-cleaned', 'year-round-gutter-protection', 'gutter-cleaning-before-winter', 'seasonal-home-maintenance'],
  },
  'commercial-gutter-cleaning-services': {
    faqTitle: 'Commercial Gutter Cleaning Questions',
    faqSubtitle: 'For offices, shops, warehouses and industrial units.',
    faqs: [
      { icon: '🏭', question: 'What types of commercial building do you clean?', answer: 'Offices, retail units, warehouses, industrial units, schools, care homes and blocks of flats across Birmingham and the West Midlands.' },
      { icon: '📏', question: 'Can you clean box gutters and long runs?', answer: 'Yes. Our high-reach vacuum handles long runs and box gutters on industrial buildings, and we flush outlets to confirm water drains away.' },
      { icon: '🚧', question: 'Will cleaning disrupt our business?', answer: 'We work from the ground with no scaffolding in most cases, keep the work area tidy and can plan around opening hours.' },
      { icon: '📑', question: 'Do you provide a report?', answer: 'Yes — before & after photos of every run and notes on any defects, so you have a record for maintenance files.' },
      { icon: '💷', question: 'How much does commercial gutter cleaning cost?', answer: 'Commercial work is quoted individually based on gutter length, height and access. We visit or review photos, then give you a fixed price.' },
    ],
    guides: ['warehouse-gutter-case-study', 'offices-schools-gutter-cleaning', 'high-level-gutter-cleaning', 'overflowing-gutters-fix'],
  },
  'commercial-property-gutter-maintenance': {
    faqTitle: 'Commercial Gutter Maintenance Questions',
    faqSubtitle: 'Keeping business premises dry all year round.',
    faqs: [
      { icon: '🛡️', question: 'What does a maintenance visit include?', answer: 'Clearing gutters and outlets, flushing downpipes, a visual check of joints and brackets, and before & after photos of every run.' },
      { icon: '💧', question: 'Why does gutter maintenance matter for a business?', answer: 'Blocked gutters on commercial buildings can push water into walls and ceilings, damage stock and cause slip hazards at entrances. Planned cleaning is far cheaper than repairs.' },
      { icon: '🍂', question: 'When is the best time for a visit?', answer: 'Late autumn, after leaves have fallen, is the most important. Sites near trees often benefit from a second visit in spring.' },
      { icon: '🔧', question: 'Can you fix problems at the same time?', answer: 'Minor repairs such as resealing a leaking joint start from £30. We photograph the issue first and only carry out repairs you approve.' },
      { icon: '💷', question: 'How is maintenance priced?', answer: 'Each building is quoted individually on size, height and access, with the price fixed before work starts.' },
    ],
    guides: ['year-round-gutter-protection', 'gutter-water-damage-guide', 'dripping-gutter-joints', 'gutter-cleaning-before-winter'],
  },
  'commercial-fascia-soffit-cleaning': {
    faqTitle: 'Commercial Fascia & Soffit Cleaning Questions',
    faqSubtitle: 'Cleaner rooflines for shops, offices and business premises.',
    faqs: [
      { icon: '🧽', question: 'What do you clean?', answer: 'Fascia boards, soffits, bargeboards, the outside of gutters and downpipes — removing green algae, black streaks and traffic grime from uPVC.' },
      { icon: '🏬', question: 'Why clean fascias on a business?', answer: 'A stained roofline is one of the first things customers see. Cleaning restores the white uPVC finish and makes the building look looked-after.' },
      { icon: '🚿', question: 'Do you use harsh chemicals or pressure washers?', answer: 'No. We use water-fed poles and gentle cleaning products suited to uPVC, so the finish isn\'t scratched or dulled.' },
      { icon: '🏢', question: 'Can you reach upper storeys?', answer: 'Yes — our poles and high-reach equipment let us clean fascias on multi-storey buildings from the ground in most cases.' },
      { icon: '💷', question: 'How much does it cost?', answer: 'Domestic fascia & soffit cleaning is £90. Commercial buildings are quoted individually depending on the length of roofline and height.' },
    ],
    guides: ['fascias-soffits-west-midlands', 'soffit-damage-signs', 'roofline-damage-prevention', 'damp-external-wall-gutters'],
  },
  'commercial-downpipe-cleaning': {
    faqTitle: 'Commercial Downpipe Cleaning Questions',
    faqSubtitle: 'Blocked downpipes on business premises — what to know.',
    faqs: [
      { icon: '🚰', question: 'How do I know a downpipe is blocked?', answer: 'Water overflowing from the gutter at one point, water spilling from joints in the pipe, or a dry outlet at ground level during heavy rain are the usual signs.' },
      { icon: '🔍', question: 'How do you find the blockage?', answer: 'We check the gutter outlet, flush the pipe and use our pole camera where needed to see where the debris is sitting.' },
      { icon: '🧹', question: 'What blocks commercial downpipes?', answer: 'Leaves, silt, moss from roofs, litter and sometimes birds\' nests. On industrial sites, debris from flat roofs often collects at outlets.' },
      { icon: '✅', question: 'How do you confirm it is clear?', answer: 'We run water through the pipe to confirm it flows freely and photograph the outlet before and after.' },
      { icon: '💷', question: 'How is it priced?', answer: 'Commercial downpipe work is quoted individually based on the number of pipes, height and access, with a fixed price before we start.' },
    ],
    guides: ['downpipe-blocked-signs-birmingham-homes', 'flat-roof-gutters', 'overflowing-gutters-fix', 'stop-gutters-blocking'],
  },
  'block-management-gutter-cleaning': {
    faqTitle: 'Block Management Gutter Questions',
    faqSubtitle: 'For managing agents, RMCs and freeholders.',
    faqs: [
      { icon: '🏢', question: 'Can you clean gutters on blocks of flats?', answer: 'Yes. Our ground-based vacuum reaches up to 4 storeys, which covers most low- and mid-rise blocks without scaffolding.' },
      { icon: '📋', question: 'Can you provide records for leaseholders?', answer: 'Yes. You receive before & after photos and a summary of the work, which you can share with leaseholders or directors as proof of maintenance.' },
      { icon: '🚪', question: 'Do residents need to do anything?', answer: 'No. We work outside the building. It helps if cars are moved from directly below the gutters, which the managing agent can arrange in advance.' },
      { icon: '🔁', question: 'Can you visit on a regular schedule?', answer: 'Yes. Many blocks book an annual or twice-yearly clean so the service charge budget is predictable.' },
      { icon: '💷', question: 'How is a block priced?', answer: 'Blocks are quoted individually based on height, gutter length and access, with a fixed price agreed before the visit.' },
    ],
    guides: ['block-gutter-maintenance', 'landlord-gutter-cleaning', 'high-level-gutter-cleaning', 'gutter-water-damage-guide'],
  },
  'approved-gutter-cleaning-contractor': {
    faqTitle: 'Choosing a Gutter Cleaning Contractor',
    faqSubtitle: 'What to check before you appoint a contractor.',
    faqs: [
      { icon: '🛡️', question: 'Are you insured?', answer: 'Yes. WOW Gutters Ltd is fully insured and we can send insurance details before any work is booked.' },
      { icon: '📸', question: 'How do we know the work was done?', answer: 'Every clean includes before & after photos of each gutter run, so you have evidence of the work for your records.' },
      { icon: '🪜', question: 'Do your teams use ladders?', answer: 'Our standard method is a ground-based vacuum system, so there are no ladders resting on the building for most jobs — safer for the team and for your property.' },
      { icon: '🏷️', question: 'Are your prices fixed?', answer: 'Yes. Homes are £100 (2-bed) and £110 (3-bed), Premium from £200. Commercial sites receive a fixed written quote before work starts.' },
      { icon: '⭐', question: 'Can we see what customers say?', answer: 'Yes — you can read our Google reviews on the reviews page and on our Google Business Profile, where we are rated 4.9★.' },
    ],
    guides: ['ask-before-hiring-gutter-cleaner', 'ladder-free-gutter-cleaning', 'gutter-cleaning-cost-guide', 'high-level-gutter-cleaning'],
  },
  'gutter-installation': {
    faqTitle: 'Gutter Installation Questions',
    faqSubtitle: 'Replacing old, leaking or undersized guttering.',
    faqs: [
      { icon: '🔨', question: 'When should gutters be replaced rather than repaired?', answer: 'When joints leak in several places, brackets keep failing, sections are cracked or sagging along the run, or the gutter is too small for the roof. We will tell you honestly if a repair from £30 will do instead.' },
      { icon: '💷', question: 'How much does gutter installation cost?', answer: 'Gutter installation is £300. Larger or more complex rooflines are quoted after we see the property, and the price is fixed before work starts.' },
      { icon: '🧱', question: 'Do you replace downpipes too?', answer: 'Yes. Gutters and downpipes can be replaced together so the whole system flows properly.' },
      { icon: '🎨', question: 'What colours and styles can I choose?', answer: 'Common uPVC profiles in black, white, brown and grey are available. Tell us what you have now and we can match it or suggest a better fit.' },
      { icon: '💧', question: 'Do you test the new gutters?', answer: 'Yes. We run water through the new system to check the fall and confirm every outlet drains before we leave.' },
    ],
    guides: ['dripping-gutter-joints', 'gutter-water-damage-guide', 'overflowing-gutters-fix', 'soffit-damage-signs'],
  },
};

export function serviceAudienceContent(serviceId: string): ServiceAudienceContent | undefined {
  return SERVICE_AUDIENCE_CONTENT[serviceId];
}
