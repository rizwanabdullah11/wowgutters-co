import type { ReactNode } from 'react';

export type CityGutterLandingFaq = {
  question: string;
  answer: string;
};

export type CityPropertyRow = {
  label: string;
  detail: string;
};

export type CityGutterLandingData = {
  /** e.g. "wolverhampton" */
  slug: string;
  /** e.g. "Wolverhampton" */
  city: string;
  /** Absolute title (no root template suffix) */
  titleTag: string;
  metaDescription: string;
  h1: string;
  heroIntro: string;
  whyTitle: string;
  whyBody: string[];
  guarantees: string[];
  propertyTypesTitle: string;
  propertyTypes: CityPropertyRow[];
  areasTitle: string;
  areasInline: string;
  faqsTitle: string;
  faqs: CityGutterLandingFaq[];
  /** Coordinates for schema + map marker */
  geo: { latitude: number; longitude: number };
  /** Optional: additional internal links (rendered as CTA chips) */
  internalLinks?: { label: string; href: string }[];
  /** Optional custom bottom CTA label */
  ctaHeading?: string;
};

export const CITY_GUTTER_LANDINGS: Record<string, CityGutterLandingData> = {
  wolverhampton: {
    slug: 'wolverhampton',
    city: 'Wolverhampton',
    titleTag: 'Gutter Cleaning Wolverhampton | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Wolverhampton. Vacuum-powered, no ladders, 4-storey reach. Before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Wolverhampton — Professional, Safe & Guaranteed',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Wolverhampton and the surrounding areas, serving homeowners from Penn and Tettenhall to Wednesfield, Bilston and Willenhall. Wolverhampton's mix of Victorian terraced streets, post-war semis and newer developments all present different gutter challenges — and our team has the experience and equipment to handle all of them. We operate a ground-based high-reach vacuum system that cleans your gutters safely without ladders, reaching up to four storeys and leaving no mess behind.",
    whyTitle: 'Why Wolverhampton Gutters Need Regular Cleaning',
    whyBody: [
      "Wolverhampton experiences significant rainfall throughout the year — the town sits in a natural bowl formation that tends to channel weather systems across the area, making reliable drainage essential for every property. Autumn leaf fall from the mature trees lining residential streets in Penn, Tettenhall and Compton fills gutters quickly, and without regular cleaning, blockages develop that force water to overflow down external walls.",
      "Many of Wolverhampton's older properties — particularly the terraced streets in Bilston, Wednesfield and around the city centre — have older cast iron or early uPVC gutter systems that are more prone to debris build-up and joint failure. Our condition report after every clean flags any sections showing signs of wear, so you can address problems before they become expensive.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Wolverhampton',
    propertyTypes: [
      {
        label: 'Victorian terraced (Bilston, Wednesfield)',
        detail:
          'Older gutter systems, often neglected. We clear cast iron and uPVC gutters safely without ladder damage.',
      },
      {
        label: 'Post-war semis (Penn, Fordhouses)',
        detail: 'Standard uPVC runs. Leaf and moss build-up from garden trees is the most common issue.',
      },
      {
        label: 'Detached homes (Tettenhall, Compton)',
        detail:
          'Larger properties with longer gutter runs. Our vacuum reaches all sections including over garages and extensions.',
      },
      {
        label: 'New build estates (Wednesfield, Bushbury)',
        detail:
          'Modern guttering but debris still accumulates. Annual clean keeps systems in warranty condition.',
      },
      {
        label: 'Commercial properties (city centre, industrial)',
        detail: 'Offices, retail and industrial units. Planned maintenance contracts available.',
      },
    ],
    areasTitle: 'Areas We Cover Around Wolverhampton',
    areasInline:
      'Penn, Tettenhall, Compton, Finchfield | Wednesfield, Willenhall, Bilston, Bradley | Fordhouses, Bushbury, Low Hill | Nearby: Walsall, Dudley, West Bromwich, Telford',
    faqsTitle: 'FAQs — Gutter Cleaning Wolverhampton',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Wolverhampton?',
        answer:
          'Prices start from £50 for a standard terraced house. Most semi-detached homes range from £60–£80, and larger detached properties from £85–£130. Fixed quote before starting — no hidden charges.',
      },
      {
        question: 'Do you cover the Penn and Tettenhall areas?',
        answer:
          'Yes — we cover all areas including Penn, Tettenhall, Compton, Wednesfield, Bilston, Willenhall, Fordhouses and all surrounding postcodes.',
      },
      {
        question: 'How quickly can you get to Wolverhampton?',
        answer:
          'We aim to offer bookings within 2–5 working days. Same-day visits may be available — call 07421 433910 to check.',
      },
      {
        question: 'Do you clean gutters on commercial properties in Wolverhampton?',
        answer:
          'Yes. We provide commercial gutter cleaning for offices, retail premises, schools and landlords. Planned maintenance contracts available.',
      },
      {
        question: 'Is your service guaranteed?',
        answer:
          'Yes. Every gutter clean comes with a 1-year service guarantee. If your gutters block within 12 months, we return at no extra charge.',
      },
    ],
    geo: { latitude: 52.5862, longitude: -2.1288 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Walsall', href: '/gutter-cleaning-walsall/' },
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Wolverhampton — Free Quote in 60 Seconds',
  },

  coventry: {
    slug: 'coventry',
    city: 'Coventry',
    titleTag: 'Gutter Cleaning Coventry | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Expert gutter cleaning in Coventry. Ground-level vacuum system, no ladders, 4-storey reach. Before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Coventry — Trusted Local Specialists',
    heroIntro:
      "WOW Gutters Ltd serves homeowners and businesses across Coventry with professional gutter cleaning, downpipe unblocking and roof cleaning. From the Victorian terraces of Chapelfields and Earlsdon to the large detached homes of Kenilworth Road, Allesley and Eastern Green, we understand Coventry's varied housing stock and the specific gutter challenges each property type presents. Every job is completed using our ground-level vacuum system — no ladders, no risk, no mess.",
    whyTitle: 'Coventry Gutters — Why They Block and Why It Matters',
    whyBody: [
      "Coventry is one of the UK's most rebuilt cities following post-war reconstruction, meaning much of the city's housing stock dates from the 1950s through to the 1980s — a period when uPVC guttering was widely installed. While uPVC is durable, it is particularly susceptible to moss growth in the damp West Midlands climate, and joints can fail over time if left uncleared and water is allowed to sit in blocked sections.",
      "The city also has a significant number of newer residential developments — Binley Woods, Keresley, Baginton — where modern properties still accumulate debris from surrounding trees. Wherever you live in Coventry, annual gutter cleaning is the single most cost-effective way to protect your home from water damage.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Coventry',
    propertyTypes: [
      {
        label: 'Post-war semis & terraces (Radford, Foleshill, Stoke)',
        detail: '1950s–70s uPVC systems. Moss and joint leaks are the most common issues we find.',
      },
      {
        label: 'Victorian terraces (Chapelfields, Earlsdon)',
        detail:
          'Older properties with original cast iron guttering or early replacement uPVC. We handle both carefully.',
      },
      {
        label: 'Large detached homes (Allesley, Kenilworth Rd)',
        detail: 'Long gutter runs and multi-storey rooflines. Our 4-storey vacuum reach handles all sections.',
      },
      {
        label: 'New build estates (Keresley, Binley Woods)',
        detail: 'Modern guttering still attracts debris. We maintain new-build systems in warranty condition.',
      },
      {
        label: 'Student properties & HMOs',
        detail: 'Landlords across Coventry use WOW Gutters for annual maintenance on rental portfolios.',
      },
    ],
    areasTitle: 'Areas We Cover Around Coventry',
    areasInline:
      'Earlsdon, Chapelfields, Cheylesmore, Styvechale | Radford, Foleshill, Holbrooks, Keresley | Binley, Willenhall (Coventry), Allesley | Nearby: Solihull, Birmingham, Kenilworth, Rugby',
    faqsTitle: 'FAQs — Gutter Cleaning Coventry',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Coventry?',
        answer:
          'Prices start from £50 for a terraced house, £65–£85 for a semi-detached, and £85–£140 for a larger detached property. Fixed quote, no hidden extras.',
      },
      {
        question: 'Do you cover all areas of Coventry?',
        answer:
          'Yes — including Earlsdon, Chapelfields, Radford, Foleshill, Binley, Allesley, Keresley, Styvechale, Cheylesmore and all surrounding postcodes.',
      },
      {
        question: 'Can blocked gutters cause damp inside a Coventry home?',
        answer:
          'Yes — one of the most common causes of internal damp we encounter. Water runs down external walls and can penetrate cavity insulation and plasterwork over time.',
      },
      {
        question: 'Do you offer gutter repairs in Coventry?',
        answer:
          "Yes. If our technician spots damaged sections, loose brackets or leaking joints, we'll flag these. Our repair team can return to carry out necessary work.",
      },
      {
        question: 'How long does a gutter clean take in Coventry?',
        answer:
          'Most residential properties take between 45 minutes and 2 hours depending on size and level of debris.',
      },
    ],
    geo: { latitude: 52.4068, longitude: -1.5197 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Solihull', href: '/gutter-cleaning-solihull/' },
      { label: 'Roof cleaning Coventry', href: '/help/clean/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Coventry — Free Quote in 60 Seconds',
  },

  walsall: {
    slug: 'walsall',
    city: 'Walsall',
    titleTag: 'Gutter Cleaning Walsall | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Walsall and Bloxwich. No-ladder vacuum system, before & after photos, 1-year guarantee. Free quote: 07421 433910.',
    h1: 'Gutter Cleaning Walsall — Safe, Thorough & Fully Guaranteed',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Walsall, Bloxwich, Aldridge, Willenhall and all surrounding areas. Walsall's housing stock ranges from the dense terraced streets of Caldmore and Palfrey to the spacious detached homes of Streetly and Aldridge, and our high-reach vacuum system is equally at home on all of them. We clean from ground level — no ladders placed against your property — with before and after photos provided as standard.",
    whyTitle: 'Why Walsall Homeowners Need Regular Gutter Cleaning',
    whyBody: [
      'Walsall sits at the northern edge of the West Midlands conurbation, where the urban environment meets the greener landscapes of Cannock Chase and Sutton Park. This proximity to open green space means many Walsall properties — particularly in Aldridge, Streetly and Great Barr — are surrounded by mature trees that shed significant volumes of leaves each autumn.',
      'The town also has a high proportion of 1930s–1960s semi-detached properties, many with their original or early-replacement uPVC guttering. Older gutter systems develop sagging sections and leaking joints over time, particularly when the weight of accumulated debris is left unmanaged. Our post-clean condition report will tell you honestly if any sections need attention.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Walsall',
    propertyTypes: [
      {
        label: 'Terraced streets (Caldmore, Palfrey, Pleck)',
        detail: 'Dense housing with back-to-back gutters. Quick access, efficient clean, no disruption to neighbours.',
      },
      {
        label: '1930s–50s semis (Blakenall, Beechdale)',
        detail: 'Classic uPVC gutter runs. Moss and leaf build-up cleared thoroughly with our vacuum system.',
      },
      {
        label: 'Detached homes (Aldridge, Streetly)',
        detail: 'Larger properties close to Sutton Park — heavy leaf fall in autumn. Our 4-storey reach handles all sections.',
      },
      {
        label: 'Bloxwich & Willenhall properties',
        detail: 'Mix of terraced and semi-detached. Same professional service, same pricing, same guarantee.',
      },
      {
        label: 'Commercial & retail properties',
        detail: 'Walsall town centre and retail parks — planned maintenance contracts available.',
      },
    ],
    areasTitle: 'Areas We Cover Around Walsall',
    areasInline:
      'Bloxwich, Aldridge, Willenhall, Darlaston | Caldmore, Palfrey, Pleck, Blakenall | Streetly, Great Barr, Pheasey | Nearby: Wolverhampton, Dudley, West Bromwich, Birmingham',
    faqsTitle: 'FAQs — Gutter Cleaning Walsall',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Walsall?',
        answer:
          'Starts from £50 for a terraced house, £65–£80 for a semi-detached, and £85–£130 for a larger detached property. All prices fixed and quoted upfront.',
      },
      {
        question: 'Do you cover Bloxwich and Aldridge?',
        answer:
          'Yes — all of Walsall borough including Bloxwich, Aldridge, Willenhall, Darlaston, Caldmore, Streetly, Great Barr and all surrounding postcodes.',
      },
      {
        question: 'How often should Walsall gutters be cleaned?',
        answer:
          'Once or twice a year is right for most properties. Those near Sutton Park or Cannock Chase benefit from both an autumn and a spring clean.',
      },
      {
        question: 'Do you unblock downpipes in Walsall?',
        answer:
          'Yes — downpipe clearing is included as standard in every gutter clean. We test flow through every downpipe before leaving.',
      },
      {
        question: 'Can you provide a regular maintenance schedule?',
        answer:
          'Yes. We offer annual or bi-annual maintenance plans for homeowners and landlords across Walsall.',
      },
    ],
    geo: { latitude: 52.5862, longitude: -1.9829 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Wolverhampton', href: '/gutter-cleaning-wolverhampton/' },
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Roof cleaning Walsall', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Walsall — Free Quote in 60 Seconds',
  },

  dudley: {
    slug: 'dudley',
    city: 'Dudley',
    titleTag: 'Gutter Cleaning Dudley | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Dudley, Halesowen & Stourbridge. Vacuum system, no ladders, 1-year guarantee. Before & after photos. Call 07421 433910.',
    h1: 'Gutter Cleaning Dudley — Reliable, Safe & Guaranteed',
    heroIntro:
      "WOW Gutters Ltd covers Dudley and the surrounding areas including Halesowen, Stourbridge, Brierley Hill, Kingswinford and Sedgley. The Dudley borough has one of the most varied landscapes in the Black Country — from the elevated ridge on which Dudley town sits to the valleys of Stourbridge and Halesowen — and our team is experienced with the full range of property types and roof heights this creates. We clean gutters safely from ground level using our professional high-reach vacuum system.",
    whyTitle: 'Gutter Cleaning in Dudley — What Makes the Black Country Different',
    whyBody: [
      'The Dudley area sits on higher ground than much of the West Midlands, which means it catches more wind-driven rain and leaf debris than many surrounding towns. Properties along the ridge through Sedgley, Gornal and Upper Gornal are particularly exposed, and their gutters can fill with moss and debris more rapidly than lower-lying areas.',
      "Dudley also has a significant stock of older terraced and semi-detached properties — many built to house workers in the Black Country's industrial era — where original or early uPVC guttering is now showing its age. Blocked gutters on these properties frequently lead to damp penetration through the external walls, which is both expensive and disruptive to repair. Our service catches these problems early.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Dudley',
    propertyTypes: [
      {
        label: 'Black Country terraces (Dudley town, Coseley)',
        detail: 'Dense housing with aging gutter systems. We clear carefully and flag any repairs needed.',
      },
      {
        label: 'Halesowen semis and detached homes',
        detail: 'Leafy residential streets with good tree coverage — autumn cleans especially important.',
      },
      {
        label: 'Stourbridge period properties',
        detail: 'Mix of Victorian and Edwardian homes with longer gutter runs. 4-storey reach available.',
      },
      {
        label: 'Brierley Hill & Kingswinford modern homes',
        detail: 'Newer estates with standard uPVC guttering. Annual clean keeps systems in top condition.',
      },
      {
        label: 'Commercial & industrial (Dudley port area)',
        detail: 'Warehouses, retail parks and offices — planned maintenance contracts available.',
      },
    ],
    areasTitle: 'Areas We Cover Around Dudley',
    areasInline:
      'Halesowen, Stourbridge, Brierley Hill, Kingswinford | Sedgley, Gornal, Coseley, Tipton | Cradley Heath, Old Hill, Rowley Regis | Nearby: Birmingham, West Bromwich, Wolverhampton, Kidderminster',
    faqsTitle: 'FAQs — Gutter Cleaning Dudley',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Dudley?',
        answer:
          'Prices start from £50 for a terraced house. Semi-detached homes typically range from £65–£80, and larger detached properties in Halesowen or Stourbridge from £85–£140. Fixed quotes provided before work starts.',
      },
      {
        question: 'Do you cover Halesowen and Stourbridge?',
        answer:
          'Yes — the whole Dudley borough including Halesowen, Stourbridge, Brierley Hill, Kingswinford, Sedgley, Gornal, Coseley, Tipton and Cradley Heath.',
      },
      {
        question: 'My gutter is overflowing over my conservatory — can you help?',
        answer:
          'Yes. Our specialist access equipment handles gutters over conservatories, porches and awkward rooflines that standard ladder-based services struggle with.',
      },
      {
        question: 'Do you offer roof cleaning in Dudley?',
        answer:
          'Yes — professional soft-wash roof cleaning and moss removal across Dudley, Halesowen and Stourbridge. We often recommend combining a roof clean with a gutter clean for best value.',
      },
      {
        question: 'How do I book?',
        answer:
          'Call 07421 433910 (7 days a week), email support@wowgutters.co.uk, or request a free quote at wowgutters.co.uk/quote.',
      },
    ],
    geo: { latitude: 52.5123, longitude: -2.0810 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Wolverhampton', href: '/gutter-cleaning-wolverhampton/' },
      { label: 'Gutter cleaning West Bromwich', href: '/gutter-cleaning-west-bromwich/' },
      { label: 'Roof cleaning Dudley', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Dudley — Free Quote in 60 Seconds',
  },

  sandwell: {
    slug: 'sandwell',
    city: 'Sandwell',
    titleTag: 'Gutter Cleaning Sandwell & West Bromwich | WOW Gutters Ltd',
    metaDescription:
      'Professional gutter cleaning across Sandwell — West Bromwich, Smethwick, Oldbury & Tipton. No ladders, vacuum system, 1-year guarantee. Free quote: 07421 433910.',
    h1: 'Gutter Cleaning Sandwell — West Bromwich, Smethwick, Oldbury & Beyond',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across the Sandwell borough, covering West Bromwich, Smethwick, Oldbury, Tipton, Rowley Regis and all surrounding areas. Sandwell is at the heart of the Black Country, and its dense urban housing stock — from the terraced streets of Smethwick and Oldbury to the newer residential areas of West Bromwich — all require regular gutter maintenance to prevent water damage.",
    whyTitle: 'Why Sandwell Properties Need Regular Gutter Maintenance',
    whyBody: [
      'Sandwell has one of the highest densities of terraced housing in the West Midlands, particularly in Smethwick, Oldbury and parts of West Bromwich. In terraced rows, a blocked gutter on one property can affect neighbours — water that overflows onto shared walls accelerates damp penetration on both sides of the boundary. Regular cleaning is therefore not just good maintenance for your own home, but considerate to your neighbours too.',
      'The borough also sits in one of the lower-lying parts of the West Midlands, meaning it receives a consistent volume of rainfall year-round. Autumn and winter are the peak seasons for blockages, but moss growth throughout spring and summer also narrows gutter channels gradually. A single annual clean — ideally in late autumn — keeps most Sandwell properties well-protected.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Sandwell',
    propertyTypes: [
      {
        label: 'Terraced streets (Smethwick, Oldbury, Tipton)',
        detail: 'High-density terraces where debris accumulates quickly. We work efficiently with no disruption to the street.',
      },
      {
        label: 'Post-war semis (West Bromwich, Rowley Regis)',
        detail: 'Standard uPVC gutter runs. Moss and leaf debris are the primary issue — cleared thoroughly.',
      },
      {
        label: 'Larger homes (Hamstead, Great Barr border)',
        detail: 'Properties bordering Birmingham with larger gardens and more tree coverage — annual clean recommended.',
      },
      {
        label: 'Commercial (West Bromwich town centre, Oldbury)',
        detail: 'Retail units, offices and industrial properties. Planned maintenance contracts available.',
      },
    ],
    areasTitle: 'Areas We Cover Around Sandwell',
    areasInline:
      'West Bromwich, Smethwick, Oldbury, Tipton | Rowley Regis, Cradley Heath, Blackheath | Wednesbury, Darlaston, Great Bridge | Nearby: Birmingham, Dudley, Walsall, Wolverhampton',
    faqsTitle: 'FAQs — Gutter Cleaning Sandwell',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Sandwell?',
        answer:
          'Prices start from £50 for a terraced house, £60–£80 for a semi-detached, and £80–£120 for larger properties. All quotes fixed and provided before work begins.',
      },
      {
        question: 'Do you cover Smethwick and Oldbury?',
        answer:
          'Yes — the entire Sandwell borough including West Bromwich, Smethwick, Oldbury, Tipton, Rowley Regis, Wednesbury and all surrounding areas.',
      },
      {
        question: "Can blocked gutters affect my neighbour's property?",
        answer:
          'Yes — in terraced rows, overflow can run onto shared or adjacent walls and cause damp on neighbouring properties. Regular cleaning is the responsible choice.',
      },
      {
        question: 'Do you clean gutters on flats and apartment blocks in Sandwell?',
        answer:
          'Yes. Our vacuum system reaches up to four storeys, making it suitable for low-rise flats and apartment blocks. Contact us for a tailored quote.',
      },
      {
        question: 'Is there a guarantee on your work?',
        answer:
          'Yes — every gutter clean is covered by our 1-year service guarantee. If your gutters block within 12 months, we return at no extra cost.',
      },
    ],
    geo: { latitude: 52.5200, longitude: -2.0150 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Gutter cleaning Walsall', href: '/gutter-cleaning-walsall/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Sandwell — Free Quote in 60 Seconds',
  },

  worcester: {
    slug: 'worcester',
    city: 'Worcester',
    titleTag: 'Gutter Cleaning Worcester | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Worcester. Vacuum system, no ladders, 4-storey reach. Before & after photos, 1-year guarantee. Call 07421 433910 today.',
    h1: 'Gutter Cleaning Worcester — Professional Service, Lasting Results',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Worcester city and surrounding Worcestershire areas. From the Georgian and Victorian properties of the city centre and St John's to the modern estates of Warndon Villages and Dines Green, our team handles all property types with the same professional standard. We use a high-reach vacuum system that cleans gutters safely from ground level — no ladders placed against your property, no risk of damage, no mess left behind.",
    whyTitle: 'Why Worcester Gutters Need Regular Attention',
    whyBody: [
      'Worcester sits in the Severn Valley and is one of the wettest cities in the English Midlands — the River Severn regularly floods its banks, and the surrounding landscape channels rainfall into the city from the Malvern Hills and Worcestershire countryside. This consistent damp climate makes gutters in Worcester highly susceptible to moss and algae growth, which narrows gutter channels and accelerates blockage even when leaf fall is minimal.',
      "The city also has a significant number of period properties — Georgian townhouses in the Cathedral Quarter, Edwardian semis in St John's and Claines, and Victorian terraces throughout the inner suburbs — many of which have guttering that is rarely inspected and even more rarely cleaned. These older systems are at greatest risk of joint failure and overflow damage, and benefit most from professional annual maintenance.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Worcester',
    propertyTypes: [
      {
        label: "Georgian & Victorian period properties (city centre, St John's)",
        detail: 'Older guttering, often original cast iron or early replacement. We clean carefully, preserving period features.',
      },
      {
        label: 'Edwardian semis (Claines, Barbourne)',
        detail: 'Solid housing stock with mature garden trees. Leaf fall is significant — autumn clean is essential.',
      },
      {
        label: 'Modern Warndon Villages estates',
        detail: 'Newer properties with standard uPVC guttering. Annual clean prevents moss build-up.',
      },
      {
        label: 'Rural Worcester fringe (Kempsey, Powick, Fernhill Heath)',
        detail: 'Surrounded by open countryside and mature trees — debris accumulation is higher than urban areas.',
      },
      {
        label: 'Commercial city centre properties',
        detail: 'Offices, hospitality and retail. Maintenance contracts available for facilities managers.',
      },
    ],
    areasTitle: 'Areas We Cover Around Worcester',
    areasInline:
      "St John's, Claines, Barbourne, Rainbow Hill | Warndon, Warndon Villages, Dines Green | Kempsey, Powick, Fernhill Heath, Bevere | Nearby: Malvern, Droitwich, Pershore, Bromsgrove",
    faqsTitle: 'FAQs — Gutter Cleaning Worcester',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Worcester?',
        answer:
          'Prices start from £55 for a standard terraced property, £65–£85 for semi-detached homes, and £85–£150 for larger detached or period properties. Fixed quotes provided before any work starts.',
      },
      {
        question: 'Do you cover villages around Worcester?',
        answer:
          'Yes — Worcester city and surrounding villages including Kempsey, Powick, Fernhill Heath, Bevere, Claines and other rural Worcestershire locations within our service area.',
      },
      {
        question: 'My Worcester property has cast iron guttering — can you clean it?',
        answer:
          'Yes. We regularly clean older cast iron gutter systems on period properties across Worcester. We take extra care with fragile or aged guttering and will advise if any sections need repair or replacement.',
      },
      {
        question: 'Do you offer roof cleaning in Worcester?',
        answer:
          'Yes. We provide professional soft-wash roof cleaning and moss removal across Worcester. Combined roof and gutter cleans are available at a reduced price — ask when you book.',
      },
      {
        question: 'How do I book a gutter clean in Worcester?',
        answer:
          'Call 07421 433910 (7 days a week), email support@wowgutters.co.uk, or get a free instant quote at wowgutters.co.uk/quote.',
      },
    ],
    geo: { latitude: 52.1936, longitude: -2.2216 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Bromsgrove', href: '/gutter-cleaning-bromsgrove/' },
      { label: 'Gutter cleaning Redditch', href: '/gutter-cleaning-redditch/' },
      { label: 'Roof cleaning Worcester', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Worcester — Free Quote in 60 Seconds',
  },

  redditch: {
    slug: 'redditch',
    city: 'Redditch',
    titleTag: 'Gutter Cleaning Redditch | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Redditch. Vacuum-powered, no ladders, 4-storey reach. Before & after photos included. 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Redditch — Safe, Effective & Guaranteed',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Redditch and surrounding Worcestershire areas, serving homeowners from Headless Cross and Matchborough to Webheath, Astwood Bank and Studley. Redditch's largely new-town housing stock — built from the 1960s onwards as part of the town's planned expansion — is predominantly uPVC-guttered and well-suited to our ground-based vacuum cleaning system. We clean safely and thoroughly, with before and after photos on every job.",
    whyTitle: 'Gutter Cleaning in Redditch — What You Need to Know',
    whyBody: [
      "Redditch was developed as a new town from the 1960s, which means a high proportion of the housing stock was built to the same era's specifications — including standard uPVC guttering that is now 40–60 years old. While uPVC gutters are durable, they degrade over time, particularly where joints are allowed to remain blocked and water sits in the channel for extended periods.",
      'The town is also surrounded by the Worcestershire countryside and Arrow Valley Country Park, which means properties on the edges of estates — particularly in Webheath, Headless Cross and Ipsley — are close to significant tree coverage. Autumn leaf fall fills gutters quickly in these areas, making an annual clean in October or November especially important.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Redditch',
    propertyTypes: [
      {
        label: '1960s–80s new town estates (Matchborough, Winyates, Woodrow)',
        detail: 'Original uPVC guttering — now showing age. We clear and flag any sections needing repair.',
      },
      {
        label: 'Headless Cross & Astwood Bank semis',
        detail: 'Popular residential areas with mature garden planting — regular cleaning matters.',
      },
      {
        label: 'Webheath & Church Hill homes',
        detail: 'Bordering open countryside. Higher leaf fall from surrounding hedgerows and woodland.',
      },
      {
        label: 'Studley and rural Redditch fringe',
        detail: 'Village properties with older guttering — we handle all types including cast iron and early uPVC.',
      },
    ],
    areasTitle: 'Areas We Cover Around Redditch',
    areasInline:
      'Headless Cross, Webheath, Astwood Bank, Crabbs Cross | Matchborough, Winyates, Woodrow, Ipsley | Studley, Mappleborough Green, Sambourne | Nearby: Bromsgrove, Worcester, Birmingham, Alcester',
    faqsTitle: 'FAQs — Gutter Cleaning Redditch',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Redditch?',
        answer:
          'Prices start from £50 for a standard terraced or link-detached home, £65–£80 for a semi-detached, and £80–£120 for larger detached properties. All quotes fixed upfront.',
      },
      {
        question: 'Do you cover all areas of Redditch?',
        answer:
          'Yes — including Matchborough, Winyates, Woodrow, Headless Cross, Webheath, Crabbs Cross, Astwood Bank, Church Hill and Ipsley.',
      },
      {
        question: 'My gutters are original from the 1970s — are they still safe to clean?',
        answer:
          "Yes. We clean older uPVC guttering regularly. If we spot cracked sections or failing joints, we'll advise you on the best course of action.",
      },
      {
        question: 'Do you also serve Studley and surrounding villages?',
        answer:
          'Yes — we cover Studley, Mappleborough Green, Sambourne and other villages in the broader Redditch area.',
      },
      {
        question: 'Is same-day booking available in Redditch?',
        answer:
          'Same-day visits may be possible depending on availability. Call 07421 433910 to check.',
      },
    ],
    geo: { latitude: 52.3058, longitude: -1.9457 },
    internalLinks: [
      { label: 'Gutter cleaning Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning Bromsgrove', href: '/gutter-cleaning-bromsgrove/' },
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Redditch — Free Quote in 60 Seconds',
  },

  bromsgrove: {
    slug: 'bromsgrove',
    city: 'Bromsgrove',
    titleTag: 'Gutter Cleaning Bromsgrove | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Bromsgrove & surrounding villages. No ladders, vacuum system, 1-year guarantee. Before & after photos. Call 07421 433910.',
    h1: 'Gutter Cleaning Bromsgrove — Rural & Residential Specialists',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Bromsgrove and its surrounding villages — covering Rubery, Alvechurch, Barnt Green, Lickey End, Stoke Prior and all rural properties in between. Bromsgrove's location on the edge of the Worcestershire countryside means many properties here are surrounded by mature trees, making effective gutter maintenance especially important. We deliver a safe, thorough clean using our ground-level vacuum system, reaching up to four storeys without ladders.",
    whyTitle: 'Why Bromsgrove Properties Need Specialist Gutter Care',
    whyBody: [
      'Bromsgrove district sits on elevated ground between Birmingham and Worcester, straddling the edge of the Lickey Hills and the Worcestershire plain. This position means properties across the district — particularly those on the western and southern edges facing the prevailing weather — experience significant rainfall and wind-driven debris throughout the year.',
      "Many of Bromsgrove's most desirable residential areas — Barnt Green, Alvechurch, Lickey End and the rural villages — are surrounded by woodland and established countryside. Properties here can have gutters that fill with leaf debris, moss, lichen and even small twigs within a single season. Our powerful vacuum system removes all of this efficiently without a single ladder against your property.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Bromsgrove',
    propertyTypes: [
      {
        label: 'Rural village properties (Alvechurch, Barnt Green, Stoke Prior)',
        detail: 'Set within or adjacent to woodland. Autumn leaf fall is heavy — annual clean is essential.',
      },
      {
        label: 'Lickey End & Rubery semis',
        detail: 'Suburban residential areas on the Birmingham border. Standard uPVC systems, regular leaf build-up.',
      },
      {
        label: 'Detached properties & farmhouses',
        detail: 'Larger properties with complex rooflines and multiple gutter runs. Our 4-storey reach handles all sections.',
      },
      {
        label: 'Bromsgrove town centre properties',
        detail: 'Mix of period and modern buildings. Same professional service, same guarantee.',
      },
    ],
    areasTitle: 'Areas We Cover Around Bromsgrove',
    areasInline:
      'Rubery, Alvechurch, Barnt Green, Lickey End | Stoke Prior, Sidemoor, Aston Fields | Tardebigge, Finstall, Catshill | Nearby: Redditch, Birmingham, Kidderminster, Worcester',
    faqsTitle: 'FAQs — Gutter Cleaning Bromsgrove',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Bromsgrove?',
        answer:
          'Prices start from £55 for a standard home, with semi-detached properties from £65–£85 and larger detached or rural properties from £90–£160. Fixed quotes provided before work begins.',
      },
      {
        question: 'Do you cover Alvechurch and Barnt Green?',
        answer:
          'Yes — the whole Bromsgrove district including Alvechurch, Barnt Green, Lickey End, Stoke Prior, Rubery, Sidemoor and surrounding villages.',
      },
      {
        question: 'My property is surrounded by trees — how often should I clean my gutters?',
        answer:
          'For heavily wooded properties, we recommend twice a year — once in late autumn after leaf fall, and once in spring to clear moss and winter debris.',
      },
      {
        question: 'Do you provide roof cleaning in Bromsgrove?',
        answer:
          'Yes. Our soft-wash roof cleaning and moss removal service is especially popular in rural Bromsgrove where properties accumulate moss and lichen more rapidly than urban homes.',
      },
      {
        question: 'Can you reach 3 or 4 storey properties in Bromsgrove?',
        answer:
          'Yes. Our vacuum system reaches up to 4 storeys, making it suitable for larger detached homes, farmhouses and commercial buildings across the district.',
      },
    ],
    geo: { latitude: 52.3354, longitude: -2.0598 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning Redditch', href: '/gutter-cleaning-redditch/' },
      { label: 'Roof cleaning Bromsgrove', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Bromsgrove — Free Quote in 60 Seconds',
  },

  kidderminster: {
    slug: 'kidderminster',
    city: 'Kidderminster',
    titleTag: 'Gutter Cleaning Kidderminster | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Kidderminster & Stourport-on-Severn. Vacuum system, no ladders, 1-year guarantee. Free quote: 07421 433910.',
    h1: 'Gutter Cleaning Kidderminster — Professional Vacuum Cleaning Service',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Kidderminster, Stourport-on-Severn, Bewdley, Blakedown and surrounding north Worcestershire areas. Kidderminster's mix of Victorian carpet-trade-era terraces, post-war housing estates and rural-edge properties all present different gutter challenges — and our team has the local knowledge and professional equipment to handle all of them efficiently and safely.",
    whyTitle: 'Gutter Cleaning in Kidderminster — Local Knowledge, Professional Results',
    whyBody: [
      'Kidderminster sits on the River Stour in north Worcestershire, in a naturally damp valley that channels moisture from the surrounding Wyre Forest and Worcestershire countryside. The Wyre Forest to the north-west of the town is one of the largest areas of ancient woodland in England — and properties on Kidderminster’s western and northern fringe, particularly around Blakedown and Wolverley, benefit directly from this lush landscape while also bearing the consequences: heavy leaf fall, moss growth and debris accumulation in their gutters throughout the year.',
      "Kidderminster also has a significant number of Victorian terraced properties in the town centre and surrounding streets — part of the legacy of the town's carpet manufacturing heritage. These older homes frequently have original or early uPVC guttering that requires careful, regular maintenance to stay in good working order.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Kidderminster',
    propertyTypes: [
      {
        label: 'Victorian terraces (town centre, Comberton)',
        detail: 'Period properties with older guttering. We clean carefully and report on condition honestly.',
      },
      {
        label: 'Post-war estates (Franche, Offmore, Bewdley Road)',
        detail: 'Standard uPVC systems. Regular leaf and moss build-up cleared with our vacuum system.',
      },
      {
        label: 'Wyre Forest fringe properties (Blakedown, Wolverley)',
        detail: 'Adjacent to ancient woodland — significant leaf fall and moss growth. Annual clean essential.',
      },
      {
        label: 'Stourport-on-Severn properties',
        detail: 'Riverside town with additional damp from the Severn Valley — gutters need more frequent attention.',
      },
    ],
    areasTitle: 'Areas We Cover Around Kidderminster',
    areasInline:
      'Stourport-on-Severn, Bewdley, Blakedown, Wolverley | Franche, Offmore, Foley Park, Habberley | Hartlebury, Stone, Cutnall Green | Nearby: Bromsgrove, Worcester, Dudley, Stourbridge',
    faqsTitle: 'FAQs — Gutter Cleaning Kidderminster',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Kidderminster?',
        answer:
          'Prices start from £55, with most semi-detached homes ranging from £65–£85 and larger detached properties from £90–£150. Fixed quotes provided upfront.',
      },
      {
        question: 'Do you cover Stourport-on-Severn and Bewdley?',
        answer:
          'Yes — Kidderminster town and surrounding areas including Stourport-on-Severn, Bewdley, Blakedown, Wolverley, Hartlebury and all nearby villages.',
      },
      {
        question: 'My gutters are close to the Wyre Forest — how often should I clean them?',
        answer:
          'At least twice a year. The heavy leaf fall in autumn and spring debris from the woodland canopy means gutters fill quickly in these locations.',
      },
      {
        question: 'Do you provide roof moss removal in Kidderminster?',
        answer:
          'Yes. Particularly important near the Wyre Forest, where damp conditions accelerate lichen and moss growth. We use a safe soft-wash method.',
      },
      {
        question: 'How do I book?',
        answer:
          'Call 07421 433910 seven days a week, email support@wowgutters.co.uk, or get an instant quote at wowgutters.co.uk/quote.',
      },
    ],
    geo: { latitude: 52.3887, longitude: -2.2497 },
    internalLinks: [
      { label: 'Gutter cleaning Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning Bromsgrove', href: '/gutter-cleaning-bromsgrove/' },
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Roof cleaning Kidderminster', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Kidderminster — Free Quote in 60 Seconds',
  },

  malvern: {
    slug: 'malvern',
    city: 'Malvern',
    titleTag: 'Gutter Cleaning Malvern | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Malvern & the Malvern Hills area. No ladders, vacuum system, 1-year guarantee. Before & after photos. Call 07421 433910.',
    h1: 'Gutter Cleaning Malvern — Hillside & Rural Property Specialists',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Great Malvern, Malvern Link, Colwall, Upton upon Severn and all surrounding Malvern Hills areas. Malvern is a unique location — properties on the hillside have complex, multi-level rooflines and are exposed to the direct weather that rolls in off the Malvern Hills, while those on the Severn plain below deal with the persistent damp of the valley floor. Our high-reach vacuum system is designed precisely for this kind of varied, challenging work.",
    whyTitle: 'Why Malvern Properties Need Specialist Gutter Care',
    whyBody: [
      'The Malvern Hills receive some of the highest rainfall totals in the English Midlands — exposed to south-westerly weather systems from the Bristol Channel, the hills create significant orographic rainfall that affects all properties on the western slopes and in the valley below. This persistent damp makes moss and algae growth on roofs and gutters in the Malvern area much more rapid than in sheltered urban locations.',
      'Many of Malvern’s most attractive properties — the Victorian and Edwardian villas on the hillside above the town — are built on steep ground with complex rooflines, multiple gutter levels and hard-to-access sections. These are precisely the kind of properties where our ground-based vacuum system excels, reaching all sections safely without scaffolding or risky ladder placement on sloping ground.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Malvern',
    propertyTypes: [
      {
        label: 'Victorian hillside villas (Great Malvern, Malvern Wells)',
        detail: 'Multi-level properties on steep ground. Our vacuum system handles complex rooflines other services cannot reach.',
      },
      {
        label: 'Edwardian semis (Malvern Link, Barnards Green)',
        detail: 'Solid period properties with established gardens. Heavy tree coverage — annual clean essential.',
      },
      {
        label: 'Rural Malvern Hills properties (Colwall, Cradley, Mathon)',
        detail: 'Exposed hillside locations with high moss growth rates. More frequent cleaning often needed.',
      },
      {
        label: 'Upton upon Severn & Severn plain properties',
        detail: 'Valley floor damp accelerates gutter moss. Soft-wash roof cleaning often recommended alongside.',
      },
    ],
    areasTitle: 'Areas We Cover Around Malvern',
    areasInline:
      'Malvern Link, Barnards Green, Malvern Wells, Colwall | Upton upon Severn, Hanley Castle, Cradley, Mathon | Welland, Castlemorton, Birtsmorton | Nearby: Worcester, Ledbury, Tewkesbury, Pershore',
    faqsTitle: 'FAQs — Gutter Cleaning Malvern',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Malvern?',
        answer:
          'From £60 for a standard home to £90–£180+ for larger hillside Victorian properties with complex rooflines. We always provide a fixed quote before starting.',
      },
      {
        question: 'Can you reach gutters on steep hillside properties?',
        answer:
          'Yes. Our vacuum system operates from ground level and does not rely on safe ladder placement — making it ideal for sloping ground. We reach up to 4 storeys.',
      },
      {
        question: 'Do you cover Colwall and Upton upon Severn?',
        answer:
          'Yes — Great Malvern, Malvern Link, Malvern Wells, Colwall, Cradley, Upton upon Severn, Hanley Castle and all surrounding Malvern Hills villages.',
      },
      {
        question: "Does Malvern's climate mean I need more frequent gutter cleaning?",
        answer:
          'Yes — the high rainfall and damp climate means moss grows more rapidly than in drier locations. We recommend twice-yearly cleaning and may suggest a biocide treatment to slow regrowth.',
      },
      {
        question: 'Do you offer roof cleaning in Malvern?',
        answer:
          'Yes. Roof moss removal is particularly valuable in Malvern, where the damp climate means roofs accumulate moss and lichen much faster. We use a safe soft-wash method that does not damage tiles.',
      },
    ],
    geo: { latitude: 52.1113, longitude: -2.3254 },
    internalLinks: [
      { label: 'Gutter cleaning Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning Bromsgrove', href: '/gutter-cleaning-bromsgrove/' },
      { label: 'Roof cleaning Malvern', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Malvern — Free Quote in 60 Seconds',
  },

  evesham: {
    slug: 'evesham',
    city: 'Evesham',
    titleTag: 'Gutter Cleaning Evesham | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Evesham & the Vale of Evesham. Vacuum system, no ladders, 1-year guarantee. Before & after photos. Call 07421 433910.',
    h1: 'Gutter Cleaning Evesham — Vale of Evesham Property Specialists',
    heroIntro:
      'WOW Gutters Ltd provides professional gutter cleaning across Evesham and the wider Vale of Evesham, serving homeowners in Badsey, Bengeworth, Hampton, Pershore and all surrounding village locations. The Vale of Evesham is one of Worcestershire’s most beautiful rural areas, but its lush agricultural landscape and abundance of fruit orchards and hedgerow trees mean gutters across the Vale can fill rapidly with organic debris — particularly in autumn and late spring. Our ground-based vacuum system clears all of it safely and thoroughly.',
    whyTitle: 'Gutter Cleaning in the Vale of Evesham — Rural Challenges',
    whyBody: [
      'The Vale of Evesham sits in a broad, fertile river valley carved by the River Avon, and the rich agricultural landscape means properties throughout the area are surrounded by fruit trees, poplars, willows and mature hedgerows. Blossom in spring, leaves in autumn, and wind-driven debris throughout the year means gutters in Evesham and surrounding villages can block faster than in more sheltered urban locations.',
      'Evesham also has a wide range of property ages — from Tudor and Georgian properties in the town centre to Victorian terraces, 1950s post-war estates and modern rural developments. Each era of construction comes with its own gutter system, and our team is experienced with all of them.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Evesham',
    propertyTypes: [
      {
        label: 'Town centre period properties',
        detail: 'Tudor, Georgian and Victorian properties with older guttering. We handle all types with care.',
      },
      {
        label: 'Bengeworth & post-war estates',
        detail: 'Classic uPVC gutter systems. Annual clean keeps everything flowing properly.',
      },
      {
        label: 'Rural Vale properties (Badsey, Hampton, Offenham)',
        detail: 'Surrounded by orchards and agricultural land — blossom and leaf debris fills gutters quickly.',
      },
      {
        label: 'Pershore properties',
        detail: 'Nearby market town with similar rural-edge challenges. Covered within our service area.',
      },
    ],
    areasTitle: 'Areas We Cover Around Evesham',
    areasInline:
      'Bengeworth, Badsey, Hampton, Offenham | Pershore, Wick, Defford, Cropthorne | Fladbury, Wyre Piddle, Bretforton | Nearby: Worcester, Redditch, Stratford-upon-Avon, Cheltenham',
    faqsTitle: 'FAQs — Gutter Cleaning Evesham',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Evesham?',
        answer:
          'Prices start from £55 for a standard property. Semi-detached homes range from £65–£85, and larger period or rural properties from £90–£160. Fixed quotes provided before work begins.',
      },
      {
        question: 'Do you cover the surrounding Vale of Evesham villages?',
        answer:
          'Yes — Evesham and surrounding villages including Badsey, Hampton, Offenham, Bengeworth, Pershore, Wick, Fladbury, Wyre Piddle and more.',
      },
      {
        question: 'My gutters fill with blossom every spring — can you help?',
        answer:
          'Yes. Blossom and fruit tree debris is a common issue across the Vale of Evesham. A spring clean in April or May is particularly worthwhile for properties surrounded by orchards.',
      },
      {
        question: 'Do you offer roof cleaning in Evesham?',
        answer:
          'Yes. We provide soft-wash roof cleaning and moss removal across Evesham and the surrounding Vale.',
      },
      {
        question: 'How do I get a quote?',
        answer:
          'Call 07421 433910 (7 days a week), email support@wowgutters.co.uk, or request a free instant quote at wowgutters.co.uk/quote.',
      },
    ],
    geo: { latitude: 52.0927, longitude: -1.9488 },
    internalLinks: [
      { label: 'Gutter cleaning Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning Redditch', href: '/gutter-cleaning-redditch/' },
      { label: 'Roof cleaning Evesham', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Evesham — Free Quote in 60 Seconds',
  },

  'droitwich-spa': {
    slug: 'droitwich-spa',
    city: 'Droitwich Spa',
    titleTag: 'Gutter Cleaning Droitwich Spa | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Droitwich Spa & surrounding villages. No ladders, vacuum system, 1-year guarantee. Call WOW Gutters on 07421 433910.',
    h1: 'Gutter Cleaning Droitwich Spa — Professional & Fully Guaranteed',
    heroIntro:
      'WOW Gutters Ltd provides professional gutter cleaning across Droitwich Spa and surrounding north Worcestershire villages, including Ombersley, Hadley, Martin Hussingtree, Stoke Prior and Hanbury. Droitwich Spa’s attractive mix of Georgian and Victorian spa-town architecture, post-war housing and rural village properties all benefit from our professional vacuum cleaning service — delivered safely from the ground, with before and after photos on every job.',
    whyTitle: 'Why Droitwich Spa Properties Need Regular Gutter Cleaning',
    whyBody: [
      "Droitwich Spa sits at the centre of Worcestershire, surrounded by the farmland and hedgerow landscape of the county. The town's position means it receives steady rainfall year-round, and its residential streets — lined with mature trees particularly in the older spa-town areas — provide ideal conditions for gutter blockages to develop rapidly in autumn and late spring.",
      'The town has a strong heritage of Victorian and Edwardian architecture from its spa-resort heyday, as well as significant post-war development. Both eras of construction require regular gutter maintenance to remain in good condition, and the damp Worcestershire climate makes annual cleaning an essential part of responsible home maintenance in this area.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Droitwich Spa',
    propertyTypes: [
      {
        label: 'Victorian & Edwardian spa-town properties',
        detail: 'Period homes with older guttering and established gardens. Careful, experienced cleaning approach.',
      },
      {
        label: 'Post-war semis (Westlands, Copcut)',
        detail: 'Standard uPVC systems. Leaf and moss build-up cleared thoroughly.',
      },
      {
        label: 'Rural village properties (Ombersley, Hanbury, Martin Hussingtree)',
        detail: 'Surrounded by agricultural land and hedgerows — debris accumulation is higher than urban areas.',
      },
      {
        label: 'Modern Droitwich developments',
        detail: 'Newer estate properties with standard guttering. Annual clean maintains warranty condition.',
      },
    ],
    areasTitle: 'Areas We Cover Around Droitwich Spa',
    areasInline:
      'Ombersley, Hadley, Martin Hussingtree, Hanbury | Stoke Prior, Wychbold, Cutnall Green | Fernhill Heath, Oddingley, Tibberton | Nearby: Worcester, Bromsgrove, Redditch, Kidderminster',
    faqsTitle: 'FAQs — Gutter Cleaning Droitwich Spa',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Droitwich Spa?',
        answer:
          'Prices start from £55 for a standard property. Semi-detached homes typically range from £65–£85, and larger or period properties from £85–£150. All quotes fixed and provided before we start.',
      },
      {
        question: 'Do you cover Ombersley and surrounding villages?',
        answer:
          'Yes — Droitwich Spa and surrounding villages including Ombersley, Hadley, Martin Hussingtree, Hanbury, Stoke Prior, Wychbold and more.',
      },
      {
        question: 'How often should I clean my gutters in Droitwich?',
        answer:
          'Once a year is sufficient for most properties. Homes with significant tree coverage — particularly in Ombersley or Hanbury — benefit from a twice-yearly schedule.',
      },
      {
        question: 'Do you also clean roofs in Droitwich Spa?',
        answer:
          'Yes. We provide professional soft-wash roof cleaning and moss removal across Droitwich and surrounding areas.',
      },
      {
        question: 'Are you available at weekends in Droitwich?',
        answer:
          'Yes — we operate 7 days a week. Monday–Friday 7am–8pm, Saturday 9am–6pm, Sunday 10am–6pm.',
      },
    ],
    geo: { latitude: 52.2685, longitude: -2.1525 },
    internalLinks: [
      { label: 'Gutter cleaning Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning Bromsgrove', href: '/gutter-cleaning-bromsgrove/' },
      { label: 'Gutter cleaning Kidderminster', href: '/gutter-cleaning-kidderminster/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Droitwich Spa — Free Quote in 60 Seconds',
  },
  solihull: {
    slug: 'solihull',
    city: 'Solihull',
    titleTag: 'Gutter Cleaning Solihull | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Expert gutter cleaning in Solihull from £50. Ground-level vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Solihull — Professional, Safe & Guaranteed',
    heroIntro:
      "Solihull is one of the most affluent boroughs in the West Midlands, with a high proportion of executive detached homes in Knowle, Dorridge and Balsall Common. The area's mature tree coverage fills gutters rapidly each autumn — and with average annual rainfall around 680mm, a blockage can cause serious damp damage within weeks. WOW Gutters serves all Solihull postcodes with same-day availability.",
    whyTitle: 'Why Solihull Gutters Need Regular Cleaning',
    whyBody: [
      "Solihull's tree-lined roads around Tudor Grange, Knowle and Dorridge mean gutters fill quickly with leaves, moss and roof debris each autumn. Many properties in the borough have long gutter runs over conservatories, garages and extensions — sections that are difficult to access safely with ladders but straightforward with our ground-level vacuum system.",
      "With West Midlands rainfall spread throughout the year, a blocked gutter can overflow within days of a heavy downpour. Water running down external walls leads to damp patches, staining on brickwork and — in severe cases — penetration into the cavity wall. A single annual clean in late autumn is the most cost-effective way to protect a Solihull property.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Solihull',
    propertyTypes: [
      { label: 'Executive detached homes (Knowle, Dorridge, Balsall Common)', detail: 'Long rooflines, larger gutter systems and mature garden trees. We clear all sections including over garages and extensions with our 4-storey reach.' },
      { label: 'Family semis (Shirley, Olton, Cheswick Green)', detail: 'Standard uPVC runs where moss and leaf build-up causes overflow and staining on brickwork.' },
      { label: 'Modern estates (Monkspath, Dickens Heath, Tidbury Green)', detail: 'Newer systems still gather debris and need annual maintenance to stay in top condition.' },
      { label: 'Village properties (Balsall Common, Meriden, Hampton-in-Arden)', detail: 'Higher tree cover and hedgerow debris means blockages can form quickly after bad weather.' },
      { label: 'Commercial properties (Solihull town centre, Hockley Heath)', detail: 'Offices, retail and industrial units. Planned maintenance contracts available.' },
    ],
    areasTitle: 'Areas We Cover Around Solihull',
    areasInline:
      'Shirley, Knowle, Dorridge, Olton | Balsall Common, Meriden, Hampton-in-Arden | Cheswick Green, Dickens Heath, Hockley Heath | Monkspath, Tidbury Green, Wylde Green | Nearby: Birmingham, Coventry, Redditch, Bromsgrove',
    faqsTitle: 'FAQs — Gutter Cleaning Solihull',
    faqs: [
      { question: 'How much does gutter cleaning cost in Solihull?', answer: 'Prices start from £50 for a standard terraced house. Semi-detached homes typically range from £65–£85, and larger detached properties in Knowle, Dorridge or Balsall Common from £85–£150 depending on access and debris levels. Fixed quote before work starts — no hidden fees.' },
      { question: 'How often should I have my gutters cleaned in Solihull?', answer: 'Most Solihull homes need their gutters cleaned once or twice a year. Late autumn (October–November) is the most critical time due to leaf fall from the area\'s mature trees. Properties near Dorridge or Balsall Common with heavy tree coverage benefit from a spring clean too.' },
      { question: 'Do you cover Knowle and Dorridge?', answer: 'Yes — we cover all Solihull areas including Knowle, Dorridge, Shirley, Olton, Balsall Common, Meriden, Hampton-in-Arden, Cheswick Green, Dickens Heath, Monkspath, Hockley Heath and Tidbury Green.' },
      { question: 'Do you use ladders?', answer: 'No. We use a high-reach vacuum system from ground level, which protects fascias and avoids ladder marks on your property.' },
      { question: 'Do you clear downpipes too?', answer: 'Yes — downpipe flow checks and clearing are included as standard in every gutter clean at no extra charge.' },
      { question: 'Is the service guaranteed?', answer: 'Yes. Every clean includes a 1-year service guarantee. If gutters block again within 12 months, we return free of charge.' },
    ],
    geo: { latitude: 52.4118, longitude: -1.7776 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Coventry', href: '/gutter-cleaning-coventry/' },
      { label: 'Gutter cleaning Redditch', href: '/gutter-cleaning-redditch/' },
      { label: 'Gutter cleaning Sutton Coldfield', href: '/gutter-cleaning-sutton-coldfield/' },
      { label: 'Gutter cleaning Bromsgrove', href: '/gutter-cleaning-bromsgrove/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Solihull — Free Quote in 60 Seconds',
  },
  'sutton-coldfield': {
    slug: 'sutton-coldfield',
    city: 'Sutton Coldfield',
    titleTag: 'Gutter Cleaning Sutton Coldfield | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Sutton Coldfield from £50. No-ladder vacuum system, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Sutton Coldfield — Trusted Local Specialists',
    heroIntro:
      'WOW Gutters Ltd provides professional gutter cleaning across Sutton Coldfield, Four Oaks, Boldmere, Wylde Green and nearby areas. Large detached homes and mature tree coverage make regular gutter cleaning essential to prevent overflows and damp issues.',
    whyTitle: 'Why Sutton Coldfield Homes Need Regular Gutter Cleaning',
    whyBody: [
      'Sutton Coldfield has heavy leaf fall from mature trees near Sutton Park and surrounding residential roads. This causes rapid blockages, especially in autumn and after storms.',
      'Many homes have long gutter runs and complex rooflines. Our high-reach vacuum system clears safely from the ground and includes before/after photos for clear proof.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Sutton Coldfield',
    propertyTypes: [
      { label: 'Detached homes (Four Oaks, Streetly)', detail: 'Large roof areas and long gutter runs requiring full-section vacuum clearing.' },
      { label: 'Semis (Boldmere, Wylde Green)', detail: 'Common uPVC systems where leaf and moss build-up causes joint leaks.' },
      { label: 'Period homes (Sutton town centre)', detail: 'Older guttering that benefits from careful cleaning and condition checks.' },
      { label: 'Flats & apartment blocks', detail: 'Up to 4-storey reach available for managed blocks and shared buildings.' },
    ],
    areasTitle: 'Areas We Cover Around Sutton Coldfield',
    areasInline:
      'Four Oaks, Boldmere, Wylde Green, Mere Green | Sutton town centre, Walmley, Minworth | Streetly, New Oscott | Nearby: Birmingham, Walsall, Tamworth, Solihull',
    faqsTitle: 'FAQs — Gutter Cleaning Sutton Coldfield',
    faqs: [
      { question: 'How much does gutter cleaning cost in Sutton Coldfield?', answer: 'Prices start from £50. Most semis are £65–£85, with larger detached homes typically £90–£160.' },
      { question: 'Do you cover Four Oaks and Boldmere?', answer: 'Yes — we cover all Sutton Coldfield neighbourhoods and surrounding postcodes.' },
      { question: 'Can you clean over conservatories?', answer: 'Yes. Our system handles awkward access areas including conservatories and extensions.' },
      { question: 'Do you include photo proof?', answer: 'Yes — before and after photos are included as standard on every job.' },
      { question: 'How fast can I book?', answer: 'We usually offer slots within 2–5 working days, with same-day options when available.' },
    ],
    geo: { latitude: 52.5704, longitude: -1.8240 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Walsall', href: '/gutter-cleaning-walsall/' },
      { label: 'Gutter cleaning Tamworth', href: '/gutter-cleaning-tamworth/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Sutton Coldfield — Free Quote in 60 Seconds',
  },
  halesowen: {
    slug: 'halesowen',
    city: 'Halesowen',
    titleTag: 'Gutter Cleaning Halesowen | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Halesowen. Ground-level vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Halesowen — Safe, Thorough & Fully Guaranteed',
    heroIntro:
      'WOW Gutters Ltd covers Halesowen and nearby areas with professional gutter cleaning for homes, landlords and businesses. We clean safely from ground level using high-reach vacuum systems.',
    whyTitle: 'Why Halesowen Properties Need Gutter Maintenance',
    whyBody: [
      'Halesowen properties often sit on elevated roads with exposure to wind-driven rain and tree debris. This combination can block gutters quickly and cause overflow staining on external walls.',
      'Regular maintenance helps avoid damp penetration and protects fascias, soffits and masonry from long-term water damage.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Halesowen',
    propertyTypes: [
      { label: 'Semis and detached homes', detail: 'Most common local property type with standard uPVC gutters needing annual clearing.' },
      { label: 'Terraced homes', detail: 'Shared boundaries and narrower access handled safely with vacuum equipment.' },
      { label: 'Period properties', detail: 'Older gutter systems cleaned carefully with fault reporting where needed.' },
      { label: 'Commercial sites', detail: 'Planned maintenance available for offices, schools and local businesses.' },
    ],
    areasTitle: 'Areas We Cover Around Halesowen',
    areasInline:
      'Halesowen town centre, Hasbury, Lapal, Hayley Green | Cradley, Hunnington, Romsley | Nearby: Dudley, Stourbridge, Smethwick, Birmingham',
    faqsTitle: 'FAQs — Gutter Cleaning Halesowen',
    faqs: [
      { question: 'Do you cover all Halesowen postcodes?', answer: 'Yes — we cover Halesowen and surrounding roads including nearby villages and border areas.' },
      { question: 'What does a gutter clean cost in Halesowen?', answer: 'Typical prices start from £50, with larger properties priced after a fixed quote.' },
      { question: 'Do you provide downpipe unblocking?', answer: 'Yes, downpipe checks and clearing are included in every gutter clean.' },
      { question: 'Can you clean commercial properties?', answer: 'Yes — we provide commercial gutter cleaning with planned schedules.' },
      { question: 'Is the work insured?', answer: 'Yes. We carry full public liability insurance for every visit.' },
    ],
    geo: { latitude: 52.4488, longitude: -2.0506 },
    internalLinks: [
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Gutter cleaning Stourbridge', href: '/gutter-cleaning-stourbridge/' },
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Halesowen — Free Quote in 60 Seconds',
  },
  tamworth: {
    slug: 'tamworth',
    city: 'Tamworth',
    titleTag: 'Gutter Cleaning Tamworth | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Tamworth from £50. No-ladder vacuum system, before & after photos, fully insured, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Tamworth — Professional, Safe & Guaranteed',
    heroIntro:
      'WOW Gutters Ltd provides professional gutter cleaning in Tamworth and surrounding Staffordshire border areas. Our ground-level system clears gutters safely and efficiently with no ladder damage.',
    whyTitle: 'Why Tamworth Homes Need Regular Gutter Cleaning',
    whyBody: [
      'Tamworth experiences regular rainfall and seasonal leaf fall from mature roadside trees, which can quickly block domestic gutter systems.',
      'Routine cleaning prevents overflow and helps protect brickwork, rooflines and foundations from avoidable water damage.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Tamworth',
    propertyTypes: [
      { label: 'Post-war semis', detail: 'Common local homes with uPVC systems that benefit from annual debris removal.' },
      { label: 'Detached family homes', detail: 'Longer runs and multiple elevations cleaned safely with high-reach poles.' },
      { label: 'Terraced properties', detail: 'Fast and tidy service with full downpipe checks included.' },
      { label: 'Commercial units', detail: 'Maintenance plans available for offices and light industrial premises.' },
    ],
    areasTitle: 'Areas We Cover Around Tamworth',
    areasInline:
      'Tamworth town centre, Amington, Glascote, Wilnecote | Fazeley, Dosthill, Two Gates | Nearby: Sutton Coldfield, Birmingham, Walsall, Coventry',
    faqsTitle: 'FAQs — Gutter Cleaning Tamworth',
    faqs: [
      { question: 'How much does gutter cleaning cost in Tamworth?', answer: 'Prices start from £50 with fixed quotes provided before any work begins.' },
      { question: 'Do you cover Amington and Wilnecote?', answer: 'Yes — we cover all Tamworth districts and nearby villages.' },
      { question: 'Do you use ladders?', answer: 'No. We clean from the ground with a vacuum system to reduce risk and avoid property damage.' },
      { question: 'Do you offer weekend appointments?', answer: 'Yes — we operate seven days a week including weekend slots.' },
      { question: 'Is there a guarantee?', answer: 'Yes — every clean includes our 1-year service guarantee.' },
    ],
    geo: { latitude: 52.6336, longitude: -1.6959 },
    internalLinks: [
      { label: 'Gutter cleaning Sutton Coldfield', href: '/gutter-cleaning-sutton-coldfield/' },
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Walsall', href: '/gutter-cleaning-walsall/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Tamworth — Free Quote in 60 Seconds',
  },
  stourbridge: {
    slug: 'stourbridge',
    city: 'Stourbridge',
    titleTag: 'Gutter Cleaning Stourbridge | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Stourbridge. Ground-level vacuum cleaning, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Stourbridge — Trusted Local Service',
    heroIntro:
      'WOW Gutters Ltd serves Stourbridge and surrounding neighbourhoods with professional gutter cleaning for homes and businesses. We clean from ground level with photo proof on every job.',
    whyTitle: 'Why Stourbridge Properties Need Routine Gutter Cleaning',
    whyBody: [
      'Stourbridge has a mix of period housing and modern estates, both vulnerable to blockages from leaf fall and roof moss. Without regular cleaning, overflow can lead to damp and staining.',
      'Our service helps prevent water damage by clearing gutters and downpipes thoroughly and flagging any repair issues early.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Stourbridge',
    propertyTypes: [
      { label: 'Period homes', detail: 'Older rooflines and guttering cleaned carefully with condition checks included.' },
      { label: 'Family semis', detail: 'Most common housing type with annual leaf and moss build-up.' },
      { label: 'Detached properties', detail: 'Longer runs and awkward access handled with high-reach equipment.' },
      { label: 'Commercial buildings', detail: 'Planned maintenance available for schools, offices and retail sites.' },
    ],
    areasTitle: 'Areas We Cover Around Stourbridge',
    areasInline:
      'Stourbridge town centre, Wollaston, Lye, Amblecote | Norton, Pedmore, Oldswinford | Nearby: Dudley, Halesowen, Kidderminster, Birmingham',
    faqsTitle: 'FAQs — Gutter Cleaning Stourbridge',
    faqs: [
      { question: 'Do you cover Wollaston and Amblecote?', answer: 'Yes — we cover all Stourbridge districts and nearby roads.' },
      { question: 'How much does gutter cleaning cost in Stourbridge?', answer: 'Most homes start from £50 with fixed pricing confirmed before work starts.' },
      { question: 'Do you clear downpipes?', answer: 'Yes — downpipe testing and clearing are included on every job.' },
      { question: 'Can you provide before and after photos?', answer: 'Yes — photos are supplied as standard for transparency.' },
      { question: 'Do you offer roof cleaning too?', answer: 'Yes — we also provide soft-wash roof cleaning and moss removal.' },
    ],
    geo: { latitude: 52.4550, longitude: -2.1438 },
    internalLinks: [
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Gutter cleaning Halesowen', href: '/gutter-cleaning-halesowen/' },
      { label: 'Gutter cleaning Kidderminster', href: '/gutter-cleaning-kidderminster/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Stourbridge — Free Quote in 60 Seconds',
  },
  smethwick: {
    slug: 'smethwick',
    city: 'Smethwick',
    titleTag: 'Gutter Cleaning Smethwick | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Expert gutter cleaning in Smethwick from £50. No-ladder vacuum system, before & after photos, fully insured, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Smethwick — Professional, Safe & Guaranteed',
    heroIntro:
      'WOW Gutters Ltd provides fast, reliable gutter cleaning across Smethwick and nearby Sandwell areas. We clear gutters and downpipes from ground level using high-reach vacuum equipment.',
    whyTitle: 'Why Smethwick Gutters Need Regular Cleaning',
    whyBody: [
      'Smethwick has dense urban housing and many older properties where gutter systems are prone to debris build-up and leaking joints.',
      'Regular cleaning prevents overflow and helps protect brickwork, render and internal walls from avoidable damp ingress.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Smethwick',
    propertyTypes: [
      { label: 'Terraced streets', detail: 'Close-set properties with shared boundaries and high blockage risk after storms.' },
      { label: 'Post-war semis', detail: 'Typical uPVC systems where annual cleaning prevents leaks and overflow.' },
      { label: 'Mixed-use properties', detail: 'Shops with flats above and similar buildings cleaned up to 4 storeys.' },
      { label: 'Commercial premises', detail: 'Maintenance contracts available for business properties and schools.' },
    ],
    areasTitle: 'Areas We Cover Around Smethwick',
    areasInline:
      'Bearwood, Cape Hill, Londonderry, Uplands | Galton Village, Grove Lane, Rolfe Street | Nearby: Oldbury, Sandwell, West Bromwich, Birmingham',
    faqsTitle: 'FAQs — Gutter Cleaning Smethwick',
    faqs: [
      { question: 'How much does gutter cleaning cost in Smethwick?', answer: 'Prices start from £50 for smaller homes, with fixed quotes before work begins.' },
      { question: 'Do you cover Bearwood and Cape Hill?', answer: 'Yes — we cover all Smethwick districts and nearby Sandwell areas.' },
      { question: 'Do you clean commercial properties?', answer: 'Yes — we provide one-off and scheduled maintenance for commercial buildings.' },
      { question: 'Do I get photo proof?', answer: 'Yes — every job includes before and after photos.' },
      { question: 'Is your service insured and guaranteed?', answer: 'Yes — fully insured and backed by our 1-year service guarantee.' },
    ],
    geo: { latitude: 52.4929, longitude: -1.9642 },
    internalLinks: [
      { label: 'Gutter cleaning Oldbury', href: '/gutter-cleaning-oldbury/' },
      { label: 'Gutter cleaning Sandwell', href: '/gutter-cleaning-sandwell/' },
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Smethwick — Free Quote in 60 Seconds',
  },
  oldbury: {
    slug: 'oldbury',
    city: 'Oldbury',
    titleTag: 'Gutter Cleaning Oldbury | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Oldbury from £50. Ground-level vacuum cleaning, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Oldbury — Safe, Thorough & Fully Guaranteed',
    heroIntro:
      'WOW Gutters Ltd provides professional gutter cleaning across Oldbury and surrounding Sandwell areas. We clear gutters, unblock downpipes and provide photo proof on every visit.',
    whyTitle: 'Why Oldbury Properties Need Gutter Maintenance',
    whyBody: [
      'Oldbury has a mix of terraced and semi-detached housing where gutter blockages can quickly lead to overflow and damp issues.',
      'Our vacuum system removes debris safely from ground level and helps identify leaking joints before they become expensive repairs.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Oldbury',
    propertyTypes: [
      { label: 'Terraced homes', detail: 'High-density streets where gutters need regular debris clearing.' },
      { label: 'Semi-detached homes', detail: 'Common uPVC systems prone to moss and leaf blockages.' },
      { label: 'Detached homes', detail: 'Longer runs and extension gutters cleaned with high-reach equipment.' },
      { label: 'Commercial units', detail: 'Scheduled plans available for offices and industrial units.' },
    ],
    areasTitle: 'Areas We Cover Around Oldbury',
    areasInline:
      'Oldbury town centre, Langley, Tividale, Rounds Green | Brades Village, Warley, Brandhall | Nearby: Smethwick, Sandwell, Dudley, Birmingham',
    faqsTitle: 'FAQs — Gutter Cleaning Oldbury',
    faqs: [
      { question: 'What is the gutter cleaning price in Oldbury?', answer: 'Pricing starts from £50, with fixed quotes based on property type and access.' },
      { question: 'Do you cover Langley and Tividale?', answer: 'Yes — we cover all Oldbury areas and nearby postcodes.' },
      { question: 'Do you clean downpipes?', answer: 'Yes, downpipe checks and clearing are included as standard.' },
      { question: 'Can you clean 3-4 storey properties?', answer: 'Yes — our system reaches up to 4 storeys.' },
      { question: 'Do you offer commercial cleaning?', answer: 'Yes — commercial and landlord maintenance contracts are available.' },
    ],
    geo: { latitude: 52.5043, longitude: -2.0157 },
    internalLinks: [
      { label: 'Gutter cleaning Smethwick', href: '/gutter-cleaning-smethwick/' },
      { label: 'Gutter cleaning Sandwell', href: '/gutter-cleaning-sandwell/' },
      { label: 'Gutter cleaning Dudley', href: '/gutter-cleaning-dudley/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Oldbury — Free Quote in 60 Seconds',
  },
  'west-midlands': {
    slug: 'west-midlands',
    city: 'West Midlands',
    titleTag: 'Gutter Cleaning West Midlands | WOW Gutters Ltd — Regional Coverage',
    metaDescription:
      'Professional gutter cleaning across the West Midlands. No-ladder vacuum system, 4-storey reach, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning West Midlands — Regional Specialists',
    heroIntro:
      'WOW Gutters Ltd delivers professional gutter cleaning across Birmingham, Solihull, Wolverhampton, Walsall, Dudley, Coventry and surrounding towns. We provide safe, ground-level vacuum cleaning with fast booking and photo proof.',
    whyTitle: 'Why Homes Across the West Midlands Need Regular Gutter Cleaning',
    whyBody: [
      'The West Midlands sees frequent rainfall and high seasonal leaf fall, creating fast-moving gutter blockages across urban and suburban housing.',
      'Regular cleaning is one of the most cost-effective ways to prevent damp, overflow and avoidable repair bills on homes and commercial properties.',
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for Property Types Across the West Midlands',
    propertyTypes: [
      { label: 'Victorian terraces', detail: 'Older systems in dense urban areas requiring careful regular cleaning.' },
      { label: 'Post-war semis', detail: 'Common uPVC gutter runs where moss and leaf build-up is frequent.' },
      { label: 'Detached homes', detail: 'Long multi-elevation systems with garages and extensions.' },
      { label: 'Commercial buildings', detail: 'Offices, schools and retail units with planned maintenance options.' },
    ],
    areasTitle: 'Major Areas We Cover Across the West Midlands',
    areasInline:
      'Birmingham, Solihull, Coventry, Wolverhampton | Walsall, Dudley, Sandwell, West Bromwich | Redditch, Bromsgrove, Kidderminster, Worcester',
    faqsTitle: 'FAQs — Gutter Cleaning West Midlands',
    faqs: [
      { question: 'Do you cover the whole West Midlands?', answer: 'Yes — we cover major towns and cities across the region, including Birmingham, Solihull, Coventry, Wolverhampton and more.' },
      { question: 'How much does gutter cleaning cost?', answer: 'Most residential jobs start from £50 with fixed quotes provided before work begins.' },
      { question: 'Do you offer same-day slots?', answer: 'Same-day appointments are sometimes available depending on your location and schedule.' },
      { question: 'Is your service suitable for commercial properties?', answer: 'Yes — we provide commercial gutter cleaning and planned maintenance contracts.' },
      { question: 'Are you insured and guaranteed?', answer: 'Yes — fully insured service with a 1-year blockage return guarantee.' },
    ],
    geo: { latitude: 52.4862, longitude: -1.8904 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Solihull', href: '/gutter-cleaning-solihull/' },
      { label: 'Gutter cleaning Wolverhampton', href: '/gutter-cleaning-wolverhampton/' },
      { label: 'Gutter cleaning Coventry', href: '/gutter-cleaning-coventry/' },
      { label: 'Professional gutter cleaning', href: '/help/unblock/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in the West Midlands — Free Quote in 60 Seconds',
  },

  aston: {
    slug: 'aston',
    city: 'Aston',
    titleTag: 'Gutter Cleaning Aston, Birmingham | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Aston, Birmingham. Ground-level vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Aston — Trusted Local Specialists in B6 & B7',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Aston and the surrounding inner-city Birmingham neighbourhoods, including Witton, Newtown, Lozells, Birchfield and Nechells. Aston's dense terraced streets and Victorian-era housing stock present some of the most challenging gutter conditions in Birmingham — narrow access, aging uPVC systems, and years of accumulated debris from the area's mature street trees. Our ground-level high-reach vacuum system handles all of it safely, without a single ladder placed against your property.",
    whyTitle: 'Why Aston Gutters Block Faster Than You Think',
    whyBody: [
      "Aston sits in one of Birmingham's most densely built inner-city areas, where terraced rows run back-to-back and gutters are often shared or closely adjacent. The combination of mature street trees — particularly the lime and plane trees lining many of Aston's Victorian streets — and the area's consistent rainfall means gutters fill with leaves, seeds and moss faster than in more open suburban areas.",
      "Many properties in Aston were built between 1880 and 1930, and their guttering — whether original cast iron or later uPVC replacement — is now showing its age. Joints fail, brackets sag, and sections crack when the weight of accumulated debris is left unmanaged. Our post-clean condition report gives you an honest assessment of what needs attention before small problems become expensive ones.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — terraces, semis and flats',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Aston',
    propertyTypes: [
      {
        label: 'Victorian terraces (Aston, Lozells, Newtown)',
        detail: 'Dense rows with aging gutter systems. We clear cast iron and uPVC gutters carefully and flag any repairs needed.',
      },
      {
        label: 'Edwardian semis (Witton, Birchfield)',
        detail: 'Larger properties with longer gutter runs. Moss and leaf build-up cleared thoroughly with our vacuum system.',
      },
      {
        label: 'Post-war council housing (Nechells, Aston)',
        detail: 'Flat-roof sections and standard uPVC runs. Annual clean keeps drainage systems functioning correctly.',
      },
      {
        label: 'Converted flats and HMOs',
        detail: 'Landlords across Aston use WOW Gutters for annual maintenance on rental portfolios. Before & after photos provided for records.',
      },
      {
        label: 'Commercial properties (Aston corridor)',
        detail: 'Workshops, retail units and offices along the A34 and A38 corridors. Planned maintenance contracts available.',
      },
    ],
    areasTitle: 'Areas We Cover Around Aston',
    areasInline:
      'Witton, Lozells, Newtown, Birchfield | Nechells, Duddeston, Saltley | Handsworth, Erdington, Perry Barr | Nearby: Birmingham city centre, Sutton Coldfield, Walsall',
    faqsTitle: 'FAQs — Gutter Cleaning Aston',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Aston?',
        answer:
          'Prices start from £50 for a standard terraced house. Most semi-detached homes in Aston range from £55–£75, and larger detached properties from £75–£110. Fixed quote before starting — no hidden charges.',
      },
      {
        question: 'Do you cover Lozells, Newtown and Witton?',
        answer:
          'Yes — we cover all B6 and B7 postcodes including Aston, Lozells, Newtown, Witton, Birchfield, Nechells and all surrounding inner-city areas.',
      },
      {
        question: 'My terrace has very narrow side access — is that a problem?',
        answer:
          'Not at all. Our ground-level vacuum system operates from the front of the property and does not require side access in most cases. We handle tight terraced rows regularly across Aston and Lozells.',
      },
      {
        question: 'Do you work with landlords in Aston?',
        answer:
          'Yes — we work with landlords and letting agents across Aston, providing photographic evidence of gutter condition before and after each visit for maintenance records and tenant check reports.',
      },
      {
        question: 'Is your service guaranteed?',
        answer:
          'Yes. Every gutter clean comes with a 1-year service guarantee. If your gutters block within 12 months, we return at no extra charge.',
      },
    ],
    geo: { latitude: 52.5050, longitude: -1.8850 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Erdington', href: '/gutter-cleaning/erdington/' },
      { label: 'Gutter cleaning Handsworth', href: '/gutter-cleaning/handsworth/' },
      { label: 'Roof cleaning Birmingham', href: '/help/clean/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Aston — Free Quote in 60 Seconds',
  },

  edgbaston: {
    slug: 'edgbaston',
    city: 'Edgbaston',
    titleTag: 'Gutter Cleaning Edgbaston, Birmingham | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Edgbaston, Birmingham. Vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910 today.',
    h1: 'Gutter Cleaning Edgbaston — Premium Service for B15 & B16 Properties',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Edgbaston and the surrounding areas, including Harborne, Selly Oak, Ladywood, Moseley and the University of Birmingham quarter. Edgbaston is home to some of Birmingham's most prestigious residential streets — large Victorian and Edwardian detached homes, leafy avenues, and well-maintained period properties that deserve a gutter cleaning service that matches their standard. Our ground-level high-reach vacuum system delivers exactly that: a thorough, professional clean with no ladders, no mess, and no risk of damage to your property.",
    whyTitle: 'Why Edgbaston Properties Need Specialist Gutter Care',
    whyBody: [
      "Edgbaston's large, mature trees are one of the area's defining features — and one of the biggest contributors to gutter blockages. The avenues of oak, beech, lime and horse chestnut that line streets throughout B15 and B16 shed enormous volumes of leaves, seeds and organic debris each autumn. Properties with trees overhanging the roofline can see gutters fill completely within a single season.",
      "Many of Edgbaston's period properties also have longer and more complex gutter runs than standard suburban homes — multiple roof pitches, bay windows, extensions, and conservatories all create additional sections that need clearing. Our 4-storey vacuum reach and specialist access equipment handles all of these without the need for scaffolding or cherry pickers.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — period homes, detached villas and flats',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Edgbaston',
    propertyTypes: [
      {
        label: 'Large Victorian & Edwardian detached homes',
        detail: 'Complex rooflines with multiple gutter runs. Our 4-storey vacuum reach covers every section without scaffolding.',
      },
      {
        label: 'Period semis and terraces (Harborne Road corridor)',
        detail: 'Older uPVC or cast iron systems. We clear carefully and provide a full condition report after every clean.',
      },
      {
        label: 'Converted apartments and mansion flats',
        detail: 'Multi-storey conversions with shared guttering. We coordinate with managing agents and provide photographic evidence.',
      },
      {
        label: 'University quarter properties (Bournbrook, Selly Park)',
        detail: 'Student HMOs and rental properties. Landlord maintenance packages available with annual scheduling.',
      },
      {
        label: 'New build developments (Edgbaston Village)',
        detail: 'Modern guttering still attracts debris from surrounding mature trees. Annual clean recommended.',
      },
    ],
    areasTitle: 'Areas We Cover Around Edgbaston',
    areasInline:
      'Harborne, Selly Oak, Moseley, Ladywood | Bournbrook, Selly Park, Stirchley | Five Ways, Calthorpe Estate | Nearby: Birmingham city centre, Sutton Coldfield, Solihull',
    faqsTitle: 'FAQs — Gutter Cleaning Edgbaston',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Edgbaston?',
        answer:
          'Prices start from £60 for a standard terraced property. Most semi-detached homes in Edgbaston range from £65–£90, and larger detached period properties from £90–£140. Fixed quote provided before work starts.',
      },
      {
        question: 'Can you clean gutters on large Victorian detached homes in Edgbaston?',
        answer:
          'Yes — this is exactly the type of property our equipment is designed for. Our 4-storey vacuum reach handles complex rooflines, multiple pitches and long gutter runs without scaffolding.',
      },
      {
        question: 'Do you clean conservatory gutters in Edgbaston?',
        answer:
          'Yes. We use specialist low-reach tools to clean conservatory gutters without climbing on the structure — protecting polycarbonate panels, glass and timber frames throughout.',
      },
      {
        question: 'How often should Edgbaston properties have gutters cleaned?',
        answer:
          'Most properties benefit from one clean per year in late autumn. Those with heavy tree coverage — particularly on the Calthorpe Estate and along the Harborne Road corridor — benefit from a second spring clean.',
      },
      {
        question: 'Do you offer fascia and soffit cleaning in Edgbaston?',
        answer:
          'Yes — our hot purified water system restores fascias and soffits to a bright, streak-free finish. Ideal for period properties where kerb appeal matters.',
      },
    ],
    geo: { latitude: 52.4617, longitude: -1.9250 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Harborne', href: '/gutter-cleaning/harborne/' },
      { label: 'Gutter cleaning Selly Oak', href: '/gutter-cleaning/selly-oak/' },
      { label: 'Fascia & soffit cleaning', href: '/blog/fascias-soffits-gutter-cleaning-west-midlands/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Edgbaston — Free Quote in 60 Seconds',
  },

  'selly-oak': {
    slug: 'selly-oak',
    city: 'Selly Oak',
    titleTag: 'Gutter Cleaning Selly Oak, Birmingham | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Selly Oak, Birmingham B29. Vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Selly Oak — Reliable Service for B29 Properties',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Selly Oak and the surrounding south Birmingham neighbourhoods, including Bournville, Harborne, Stirchley, Cotteridge and Northfield. Selly Oak is a diverse area with a wide mix of property types — from the Victorian terraces and Edwardian semis near the university to the larger detached homes of Bournville and the post-war housing of Stirchley and Cotteridge. Our ground-level vacuum system handles all of them with the same professional standard, no ladders required.",
    whyTitle: 'Why Selly Oak Gutters Need Regular Cleaning',
    whyBody: [
      "Selly Oak sits in the valley of the River Rea, surrounded by some of south Birmingham's most mature green spaces — Cannon Hill Park, Bournville Village Trust land, and the tree-lined streets of the Bournville estate. This abundance of mature trees means gutters in Selly Oak fill with leaves, sycamore seeds and organic debris faster than in more open areas, particularly in autumn.",
      "The area also has a high proportion of student and rental properties, many of which have not had gutters professionally cleaned for several years. Blocked gutters on these properties frequently cause damp penetration through external walls — a problem that is expensive to repair and disruptive to tenants. Our annual maintenance service keeps rental properties in good condition and provides landlords with photographic evidence for their records.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — terraces, semis and student HMOs',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Selly Oak',
    propertyTypes: [
      {
        label: 'Victorian terraces (Selly Oak, Bristol Road)',
        detail: 'Dense rows near the university. We clear efficiently with no disruption to residents or neighbours.',
      },
      {
        label: 'Edwardian semis (Bournville, Harborne border)',
        detail: 'Larger properties with longer gutter runs and heavy leaf fall from mature garden trees.',
      },
      {
        label: 'Student HMOs and rental properties',
        detail: 'Landlord maintenance packages available. Before & after photos provided for every visit.',
      },
      {
        label: 'Post-war housing (Stirchley, Cotteridge)',
        detail: 'Standard uPVC gutter runs. Moss and debris cleared thoroughly — downpipe flush included.',
      },
      {
        label: 'Bournville estate properties',
        detail: 'Heritage properties with well-maintained rooflines. We treat every property with care and precision.',
      },
    ],
    areasTitle: 'Areas We Cover Around Selly Oak',
    areasInline:
      'Bournville, Stirchley, Cotteridge, Harborne | Northfield, Longbridge, Kings Norton | Edgbaston, Moseley, Kings Heath | Nearby: Birmingham city centre, Solihull, Bromsgrove',
    faqsTitle: 'FAQs — Gutter Cleaning Selly Oak',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Selly Oak?',
        answer:
          'Prices start from £50 for a standard terraced house. Most semi-detached homes in Selly Oak range from £60–£80, and larger detached properties from £80–£120. Fixed quote before starting.',
      },
      {
        question: 'Do you work with student landlords in Selly Oak?',
        answer:
          'Yes — we work regularly with landlords and letting agents across Selly Oak and the university quarter, providing photographic evidence of gutter condition for maintenance records and tenant check reports.',
      },
      {
        question: 'Do you cover Bournville and Stirchley?',
        answer:
          'Yes — all B29 postcodes and surrounding areas including Bournville, Stirchley, Cotteridge, Harborne and Northfield.',
      },
      {
        question: 'How often should Selly Oak gutters be cleaned?',
        answer:
          'Once a year in late autumn is right for most properties. Those near Cannon Hill Park or with overhanging trees benefit from a second spring clean to clear winter debris.',
      },
      {
        question: 'Is your service guaranteed?',
        answer:
          'Yes. Every gutter clean comes with a 1-year service guarantee. If your gutters block within 12 months, we return at no extra charge.',
      },
    ],
    geo: { latitude: 52.4417, longitude: -1.9367 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Edgbaston', href: '/gutter-cleaning/edgbaston/' },
      { label: 'Gutter cleaning Harborne', href: '/gutter-cleaning/harborne/' },
      { label: 'Roof cleaning', href: '/help/clean/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Selly Oak — Free Quote in 60 Seconds',
  },

  harborne: {
    slug: 'harborne',
    city: 'Harborne',
    titleTag: 'Gutter Cleaning Harborne, Birmingham | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Harborne, Birmingham B17. Vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Harborne — Professional Service for B17 Properties',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Harborne and the surrounding south-west Birmingham neighbourhoods, including Edgbaston, Quinton, Bartley Green, Selly Oak and Bearwood. Harborne is one of Birmingham's most desirable residential areas — a village-feel suburb with a strong mix of Victorian terraces, Edwardian semis and large detached homes set back from tree-lined streets. Our ground-level vacuum system delivers a thorough, professional clean on all of them, without ladders, without mess, and without risk of damage to your property or garden.",
    whyTitle: 'Why Harborne Gutters Need Annual Attention',
    whyBody: [
      "Harborne's leafy character is one of its greatest assets — and one of the most consistent causes of gutter blockages. The mature trees lining streets throughout B17 — oaks, limes, horse chestnuts and sycamores — shed significant volumes of leaves and seeds each autumn, and properties with overhanging branches can see gutters fill completely within weeks of the first leaf fall.",
      "The area also has a high proportion of period properties with original or early-replacement guttering. Victorian cast iron systems and early uPVC installations from the 1980s and 1990s are both prone to joint failure when debris is left to accumulate and water sits in blocked sections over winter. Our post-clean condition report gives you a clear picture of the state of your guttering after every visit.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — period homes, semis and detached villas',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Harborne',
    propertyTypes: [
      {
        label: 'Victorian terraces (Harborne High Street area)',
        detail: 'Older gutter systems with aging joints. We clear carefully and flag any sections showing signs of wear.',
      },
      {
        label: 'Edwardian semis (Court Oak Road, Lordswood Road)',
        detail: 'Larger properties with longer gutter runs and heavy autumn leaf fall from mature garden trees.',
      },
      {
        label: 'Large detached homes (Harborne Park Road, Metchley Lane)',
        detail: 'Complex rooflines with multiple sections. Our 4-storey vacuum reach covers every run without scaffolding.',
      },
      {
        label: 'Converted flats and apartments',
        detail: 'Multi-storey conversions with shared guttering. We coordinate with managing agents and provide photographic evidence.',
      },
      {
        label: 'New build properties (Harborne Village development)',
        detail: 'Modern guttering still attracts debris from surrounding mature trees. Annual clean recommended.',
      },
    ],
    areasTitle: 'Areas We Cover Around Harborne',
    areasInline:
      'Edgbaston, Quinton, Bartley Green, Bearwood | Selly Oak, Bournville, Stirchley | Northfield, Longbridge | Nearby: Birmingham city centre, Solihull, Bromsgrove',
    faqsTitle: 'FAQs — Gutter Cleaning Harborne',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Harborne?',
        answer:
          'Prices start from £55 for a standard terraced property. Most semi-detached homes in Harborne range from £60–£85, and larger detached properties from £85–£130. Fixed quote provided before work starts.',
      },
      {
        question: 'Do you cover Quinton and Bartley Green?',
        answer:
          'Yes — all B17 postcodes and surrounding areas including Quinton, Bartley Green, Bearwood, Edgbaston and Selly Oak.',
      },
      {
        question: 'Can you clean gutters on large detached homes in Harborne?',
        answer:
          'Yes — our 4-storey vacuum reach handles complex rooflines and long gutter runs on larger Harborne properties without scaffolding or cherry pickers.',
      },
      {
        question: 'Do you offer fascia and soffit cleaning in Harborne?',
        answer:
          'Yes — our hot purified water system restores fascias and soffits to a bright, streak-free finish. Popular with Harborne homeowners preparing to sell or after a roof replacement.',
      },
      {
        question: 'How quickly can you get to Harborne?',
        answer:
          'We aim to offer bookings within 2–5 working days. Same-day visits may be available — call 07421 433910 to check availability.',
      },
    ],
    geo: { latitude: 52.4583, longitude: -1.9500 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Edgbaston', href: '/gutter-cleaning/edgbaston/' },
      { label: 'Gutter cleaning Selly Oak', href: '/gutter-cleaning/selly-oak/' },
      { label: 'Fascia & soffit cleaning', href: '/blog/fascias-soffits-gutter-cleaning-west-midlands/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Harborne — Free Quote in 60 Seconds',
  },

  handsworth: {
    slug: 'handsworth',
    city: 'Handsworth',
    titleTag: 'Gutter Cleaning Handsworth, Birmingham | WOW Gutters Ltd — Free Quote',
    metaDescription:
      'Professional gutter cleaning in Handsworth, Birmingham B20 & B21. Vacuum system, no ladders, before & after photos, 1-year guarantee. Call 07421 433910.',
    h1: 'Gutter Cleaning Handsworth — Reliable Service for B20 & B21 Properties',
    heroIntro:
      "WOW Gutters Ltd provides professional gutter cleaning across Handsworth and the surrounding north-west Birmingham neighbourhoods, including Perry Barr, Great Barr, Hamstead, Birchfield, Lozells and Handsworth Wood. Handsworth has a rich mix of property types — from the dense Victorian terraces of the Soho Road corridor to the larger Edwardian semis and detached homes of Handsworth Wood and Perry Barr. Our ground-level vacuum system handles all of them safely and efficiently, without ladders, without mess, and with before and after photos on every job.",
    whyTitle: 'Why Handsworth Gutters Need Regular Maintenance',
    whyBody: [
      "Handsworth sits at the northern edge of Birmingham's inner ring, where the urban density of the city transitions into the more suburban character of Perry Barr and Great Barr. This transition zone means many Handsworth properties are surrounded by a mix of street trees and garden trees — limes, planes, sycamores and horse chestnuts — that shed significant debris into gutters each autumn.",
      "The area has a high proportion of Victorian and Edwardian terraced and semi-detached properties, many of which have not had gutters professionally cleaned for several years. Aging uPVC systems with failing joints and sagging brackets are common — and the weight of accumulated debris accelerates the deterioration. Our post-clean condition report gives you an honest picture of what needs attention.",
    ],
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — terraces, semis and detached homes',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from 2,696+ verified customer reviews',
    ],
    propertyTypesTitle: 'Gutter Cleaning for All Property Types in Handsworth',
    propertyTypes: [
      {
        label: 'Victorian terraces (Soho Road, Lozells Road)',
        detail: 'Dense rows with aging gutter systems. We clear cast iron and uPVC gutters carefully and flag any repairs needed.',
      },
      {
        label: 'Edwardian semis (Handsworth Wood, Perry Barr)',
        detail: 'Larger properties with longer gutter runs and heavy leaf fall from mature garden trees.',
      },
      {
        label: 'Detached homes (Handsworth Wood, Hamstead)',
        detail: 'Our 4-storey vacuum reach handles all sections including over garages, extensions and conservatories.',
      },
      {
        label: 'Converted flats and HMOs',
        detail: 'Landlords across Handsworth use WOW Gutters for annual maintenance. Before & after photos provided for records.',
      },
      {
        label: 'Commercial properties (Soho Road corridor)',
        detail: 'Retail units, offices and workshops. Planned maintenance contracts available.',
      },
    ],
    areasTitle: 'Areas We Cover Around Handsworth',
    areasInline:
      'Perry Barr, Great Barr, Hamstead, Birchfield | Lozells, Newtown, Aston | Winson Green, Smethwick border | Nearby: Birmingham city centre, Walsall, Wolverhampton',
    faqsTitle: 'FAQs — Gutter Cleaning Handsworth',
    faqs: [
      {
        question: 'How much does gutter cleaning cost in Handsworth?',
        answer:
          'Prices start from £50 for a standard terraced house. Most semi-detached homes in Handsworth range from £55–£75, and larger detached properties from £75–£115. Fixed quote before starting — no hidden charges.',
      },
      {
        question: 'Do you cover Perry Barr and Handsworth Wood?',
        answer:
          'Yes — all B20 and B21 postcodes including Handsworth, Handsworth Wood, Perry Barr, Birchfield, Hamstead and all surrounding areas.',
      },
      {
        question: 'My terrace has no side access — is that a problem?',
        answer:
          'Not at all. Our ground-level vacuum system operates from the front of the property and does not require side access in most cases. We handle tight terraced rows regularly across Handsworth and Lozells.',
      },
      {
        question: 'Do you work with landlords in Handsworth?',
        answer:
          'Yes — we work with landlords and letting agents across Handsworth, providing photographic evidence of gutter condition before and after each visit for maintenance records and tenant check reports.',
      },
      {
        question: 'How often should Handsworth gutters be cleaned?',
        answer:
          'Once a year in late autumn is right for most properties. Those with heavy tree coverage in Handsworth Wood or Perry Barr benefit from a second spring clean.',
      },
    ],
    geo: { latitude: 52.5133, longitude: -1.9283 },
    internalLinks: [
      { label: 'Gutter cleaning Birmingham', href: '/gutter-cleaning-birmingham/' },
      { label: 'Gutter cleaning Aston', href: '/gutter-cleaning/aston/' },
      { label: 'Gutter cleaning Erdington', href: '/gutter-cleaning/erdington/' },
      { label: 'Roof cleaning Birmingham', href: '/help/clean/' },
      { label: 'Gutter repairs', href: '/help/repair/' },
    ],
    ctaHeading: 'Book Your Gutter Clean in Handsworth — Free Quote in 60 Seconds',
  },
};



/**
 * Get city gutter landing data by slug
 */
export function getCityGutterLandingData(slug: string): CityGutterLandingData | undefined {
  return CITY_GUTTER_LANDINGS[slug];
}

/**
 * Get all city gutter landing slugs
 */
export function getAllCityGutterLandingSlugs(): string[] {
  return Object.keys(CITY_GUTTER_LANDINGS);
}

/**
 * Check if a slug has city gutter landing data
 */
export function hasCityGutterLandingData(slug: string): boolean {
  return slug in CITY_GUTTER_LANDINGS;
}
