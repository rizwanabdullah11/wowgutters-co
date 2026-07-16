export interface KeywordPage {
  slug: string;
  titleTag: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  sections: {
    heading: string;
    content: string;
    bullets: string[];
  }[];
  cta: {
    title: string;
    description: string;
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[,.'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(text: string): string {
  return text
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const RAW_KEYWORDS = [
  'birmingham pressure washing',
  'checkatrade pressure washing',
  'cheapest window cleaner near me',
  'clean gutters price',
  'cleaning',
  'cleaning gutters',
  'conservatory roof clean',
  'corner gutter repair',
  'cost of gutter cleaning near me',
  'coventry window cleaners',
  'fascias and guttering near me',
  'flawless cleaning',
  'flawless cleaning services',
  'gutter',
  'gutter and fascia gutter cleaner, gutter cleaning bedworth, gutter cleaning service near me',
  'gutter cleaning systems',
  'gutter cleaning tools',
  'gutter prices',
  'gutter protection',
  'gutter repair near me',
  'guttering',
  'guttering and downpipe',
  'guttering and downpipe repairs',
  'guttering installation',
  'guttering moss protection',
  'guttering repairs',
  'guttering screwfix , gutters',
  'handyman services birmingham uk',
  'heavy duty guttering',
  'hire jetwash',
  'home gutter cleaning',
  'how much does it cost to clean your gutters',
  'how much does it cost to have gutters cleaned',
  'how much does it cost to replace gutters fascias and soffits',
  'how much gutter cleaning cost',
  'how much to clean gutters uk',
  'how much to clear guttering',
  'how much to have your gutters cleaned',
  'how much to replace guttering on terraced house',
  'how to clean gutters from the ground',
  'how to clean spouting',
  'how to clear guttering',
  'how to fix a leak in roof',
  'installing gutter guards',
  'installing guttering , leaking roof repair near me',
  'local gutter cleaning, local gutter cleaning service',
  'local window cleaners near me, plastic guttering',
  'pressure washing near me prices',
  'pressure washing service',
  'professional cleaning',
  'property maintenance companies birmingham',
  'wow roofing',
  'replace gutters',
  'replace section of gutter',
  'roof and gutter restoration',
  'roof cleaning near me',
  'roof moss removal near me',
  'roof replacement',
  'seamless guttering cost',
  'sky vac gutter cleaning',
  'smouts pressure washing',
  'soft washing near me , uk window cleaner',
  'vacuum gutter cleaning',
  'weatherfast gutters',
  'window cleaner near me',
  'window cleaner sutton coldfield',
  'window cleaner willenhall',
  'window cleaners birmingham',
  'window cleaners near me',
  'window cleaners nuneaton',
  'window cleaners sutton coldfield',
  'window cleaning birmingham',
  'window cleaning brierley hill',
  'window cleaning coventry',
];

function buildBullets(slug: string): string[] {
  const generic = [
    'Professional service across Birmingham and the West Midlands',
    'Fully insured with £10 million public liability cover',
    'Before and after photos on every job',
    'Free, no-obligation quotes in 60 seconds',
    'Same-day and next-day appointments where available',
    'Trusted local team with years of experience',
  ];

  if (slug.includes('pressure-washing')) {
    return [
      'Professional pressure washing for driveways, patios, paths, and walls',
      'Commercial-grade hot water pressure washing equipment',
      'Removes algae, moss, oil stains, and ingrained dirt',
      'Safe for block paving, concrete, tarmac, and stone surfaces',
      'Fully insured with £10 million public liability cover',
      'Free quotes and same-day service across Birmingham',
    ];
  }

  if (slug.includes('window-clean')) {
    return [
      'Professional window cleaning using purified water systems',
      'Streak-free finish on all glass and frame surfaces',
      'Interior and exterior window cleaning available',
      'Hot purified water system for stubborn dirt and grime',
      'Fascias, soffits, and conservatories cleaned on request',
      'Regular schedules available — weekly, fortnightly, monthly',
    ];
  }

  if (slug.includes('gutter') || slug.includes('guttering')) {
    return [
      'Full gutter cleaning, repairs, and installation services',
      'Ground-level vacuum system — no ladders against your walls',
      'Downpipe testing and outlet clearing included',
      'Before and after photos sent with every visit',
      'Gutter repairs, brackets, and joint replacements',
      'Free quotes with no obligation to proceed',
    ];
  }

  if (slug.includes('gutter-clean') || slug.includes('clean-gutters') || slug.includes('cleaning-gutters')) {
    return [
      'Professional gutter cleaning using ground-level vacuum systems',
      'Complete removal of leaves, moss, silt, and debris',
      'Downpipe clearing and flow testing on every visit',
      'Before and after photos for your records',
      'No ladders against your property — safe and damage-free',
      'Free quotes in 60 seconds with same-day booking available',
    ];
  }

  if (slug.includes('roof-clean') || slug.includes('roof-moss') || slug.includes('roof-replacement') || slug.includes('roof-and-gutter')) {
    return [
      'Professional roof cleaning and moss removal services',
      'Low-pressure soft wash methods — safe for all tile types',
      'Biocide treatment to slow moss and algae regrowth',
      'Roof inspections and condition reports',
      'Gutter cleaning combined with roof work for full roofline care',
      'Fully insured with £10 million public liability cover',
    ];
  }

  if (slug.includes('cost') || slug.includes('how-much') || slug.includes('price') || slug.includes('prices')) {
    return [
      'Transparent pricing with no hidden fees',
      'Free quotes provided before any work starts',
      'Gutter cleaning from £50 depending on property size',
      'Roof cleaning from £150 depending on moss coverage',
      'Fascia and soffit cleaning from £60',
      'Call 07421 433910 for a free quote in 60 seconds',
    ];
  }

  if (slug.includes('repair') || slug.includes('replace')) {
    return [
      'Expert gutter repairs for leaking joints, sagging runs, and loose brackets',
      'Quality materials with a 6-month guarantee on qualifying work',
      'Flow testing after every repair to confirm proper drainage',
      'Gutter replacement and installation services available',
      'Same-day and emergency repair slots where available',
      'Free inspection and no-obligation quote before work starts',
    ];
  }

  if (slug.includes('fascia') || slug.includes('fascias')) {
    return [
      'Fascia, soffit, and roofline cleaning and repair services',
      'Hot purified water cleaning for UPVC fascias and soffits',
      'Algae, mould, and dirt removal — restores bright white finish',
      'Gutter cleaning combined with fascia work in one visit',
      'Full roofline inspection included with every booking',
      'Free quotes and expert advice from experienced technicians',
    ];
  }

  if (slug.includes('conservatory')) {
    return [
      'Conservatory roof, gutter, and frame cleaning services',
      'Low-reach equipment — no climbing on glass or polycarbonate',
      'Algae and moss removal from roof panels and UPVC frames',
      'Gutter clearing between house and conservatory rooflines',
      'Hot wash options for stubborn staining on frames',
      'Free quote with honest advice on seals and maintenance',
    ];
  }

  if (slug.includes('flawless')) {
    return [
      'Professional cleaning services for homes and businesses',
      'Gutter cleaning, window cleaning, and exterior UPVC cleaning',
      'Reliable, insured, and experienced team',
      'Before and after photos on every job',
      'Free quotes with no obligation',
      'Same-day service where available',
    ];
  }

  if (slug.includes('handyman') || slug.includes('property-maintenance')) {
    return [
      'Handyman and property maintenance services across Birmingham',
      'Gutter cleaning, repairs, and roofline maintenance',
      'Window cleaning, fascia cleaning, and exterior care',
      'Fully insured with £10 million public liability cover',
      'Free quotes and honest advice',
      'Same-day and next-day appointments where available',
    ];
  }

  if (slug.includes('soft-wash')) {
    return [
      'Professional soft washing for roofs, walls, and exterior surfaces',
      'Low-pressure system — safe for delicate surfaces and tiles',
      'Biocide treatment kills moss, algae, and lichen at the root',
      'Long-lasting results that keep surfaces cleaner for longer',
      'Ideal for roof cleaning, wall cleaning, and conservatory cleaning',
      'Fully insured with free quotes available',
    ];
  }

  if (slug.includes('jetwash') || slug.includes('pressure-washing') || slug.includes('hire-jetwash')) {
    return [
      'Professional pressure washing for driveways, paths, patios, and walls',
      'Commercial-grade hot water pressure washing equipment',
      'Removes algae, moss, oil stains, and ingrained dirt',
      'Safe for block paving, concrete, tarmac, and stone surfaces',
      'Fully insured with £10 million public liability cover',
      'Free quotes and same-day service across Birmingham',
    ];
  }

  if (slug.includes('vacuum-gutter') || slug.includes('sky-vac')) {
    return [
      'Professional vacuum gutter cleaning from ground level',
      'High-reach system — up to 4 storeys without ladders on your walls',
      'No mess left on paths, driveways, or borders',
      'Complete removal of leaves, moss, and compacted debris',
      'Downpipe testing and outlet clearing on every visit',
      'Before and after photos provided for your records',
    ];
  }

  if (slug.includes('installation') || slug.includes('installing')) {
    return [
      'Professional gutter installation and replacement services',
      'Quality UPVC guttering systems to match your property',
      'Correct fall and bracket spacing for long-lasting performance',
      'Downpipe connections and outlet positioning included',
      'Full roofline assessment before installation begins',
      'Free quote and expert advice on the best system for your home',
    ];
  }

  if (slug.includes('seamless')) {
    return [
      'Seamless guttering installation and replacement',
      'Custom-made on-site for a perfect fit on your property',
      'Fewer joints means reduced risk of leaks',
      'Available in a range of colours and finishes',
      'Professional installation with full guarantee',
      'Free quotes and expert advice from experienced gutters specialists',
    ];
  }

  if (slug.includes('wow-roofing')) {
    return [
      'Professional roofing and gutter services across the West Midlands',
      'Roof cleaning, moss removal, and tile repairs',
      'Gutter cleaning, repairs, and installation',
      'Fascia and soffit cleaning and replacement',
      'Fully insured with experienced, reliable teams',
      'Free quotes and honest advice on all roofing work',
    ];
  }

  if (slug.includes('checkatrade')) {
    return [
      'Checkatrade-approved pressure washing and exterior cleaning',
      'Verified reviews and ratings from real customers',
      'Fully insured and vetted for your peace of mind',
      'Professional equipment and experienced operators',
      'Driveways, patios, paths, and walls cleaned to a high standard',
      'Free quotes with transparent pricing — no hidden fees',
    ];
  }

  if (slug.includes('weatherfast')) {
    return [
      'Weatherfast guttering systems — supply and installation',
      'Durable, low-maintenance guttering for long-term performance',
      'Professional installation by experienced WOW Gutters Ltd team',
      'Suitable for residential and commercial properties',
      'Gutter cleaning, repairs, and maintenance also available',
      'Free quotes and expert advice on the best guttering system',
    ];
  }

  if (slug.includes('professional-clean')) {
    return [
      'Professional cleaning services for homes and businesses',
      'Gutter cleaning, window cleaning, and exterior UPVC cleaning',
      'Reliable, insured, and experienced team',
      'Before and after photos on every job',
      'Free quotes with no obligation',
      'Same-day service where available',
    ];
  }

  return generic;
}

function getContent(keyword: string): { heroTitle: string; heroDescription: string; sections: { heading: string; content: string; bullets: string[] }[] } {
  const slug = slugify(keyword);

  if (slug.includes('pressure-washing') || slug.includes('jetwash') || slug.includes('hire-jetwash')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional pressure washing services across Birmingham and the West Midlands. We use commercial-grade hot water pressure washing equipment to clean driveways, patios, paths, walls, and exterior surfaces. Our system removes algae, moss, oil stains, and ingrained dirt without damaging your surfaces. Fully insured with free quotes available — call 07421 433910.`,
      sections: [
        {
          heading: 'What We Clean',
          content: 'Our pressure washing service covers a wide range of exterior surfaces. We use hot water pressure washing for the deepest clean and adjust pressure levels to suit each surface type.',
          bullets: [
            'Driveways and block paving — oil stains, algae, and dirt removed',
            'Patios and paving slabs — restore the original colour of your stone',
            'Paths, walkways, and garden steps — safe slip-free surfaces',
            'Walls and fencing — remove green algae and moss growth',
            'Concrete and tarmac areas — industrial-grade cleaning available',
            'Commercial pressure washing — car parks, forecourts, and loading bays',
          ],
        },
        {
          heading: 'Why Choose Our Pressure Washing Service?',
          content: 'WOW Gutters Ltd uses professional-grade hot water pressure washing equipment that delivers a deeper clean than cold water systems. Our team knows the right pressure for every surface — strong enough to remove years of grime but gentle enough to protect your paving, concrete, and brickwork.',
          bullets: [
            'Hot water system — dissolves oil, grease, and tar more effectively',
            'Commercial-grade equipment — powerful enough for the toughest jobs',
            'Experienced operators — we know the right technique for every surface',
            'Fully insured with £10 million public liability cover',
            'Before and after photos on every job',
            'Free quotes in 60 seconds — call 07421 433910',
          ],
        },
      ],
    };
  }

  if (slug.includes('window-clean')) {
    const locations = ['birmingham', 'coventry', 'nuneaton', 'sutton-coldfield', 'brierley-hill', 'willenhall'];
    const loc = locations.find(l => slug.includes(l));
    const locationName = loc ? titleCase(loc.replace(/-/g, ' ')) : 'Birmingham and the West Midlands';

    return {
      heroTitle: keyword.includes('near me') ? `Window Cleaners Near Me — ${locationName}` : titleCase(keyword),
      heroDescription: `Professional window cleaning services in ${locationName}. WOW Gutters Ltd uses purified water systems that deliver a streak-free finish on all glass and frame surfaces. We clean windows inside and out, plus fascias, soffits, and conservatories on request. Fully insured, reliable, and trusted across the West Midlands. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Our Window Cleaning Service',
          content: 'We use a purified water system that leaves windows spotless and streak-free. No detergents, no smears — just crystal clear glass. Our team can also clean fascias, soffits, window frames, and conservatories in the same visit.',
          bullets: [
            'Purified water system — streak-free finish every time',
            'Interior and exterior window cleaning options',
            'Window frames and sills cleaned as standard',
            'Fascias, soffits, and conservatories — add-on services',
            'Regular schedules available — weekly, fortnightly, monthly',
            'Commercial window cleaning for shops and offices',
          ],
        },
        {
          heading: `Why Choose WOW Gutters Ltd in ${locationName}?`,
          content: 'WOW Gutters Ltd is a trusted local business with years of experience in window cleaning and exterior property care. We take pride in reliable service, consistent quality, and clear communication with every customer.',
          bullets: [
            'Trusted local team serving Birmingham and the West Midlands',
            'Fully insured with £10 million public liability cover',
            'Reliable appointments and punctual service',
            'Free, no-obligation quotes before any work starts',
            'Before and after photos on request',
            'Same-day and next-day appointments where available',
          ],
        },
      ],
    };
  }

  if (slug.includes('conservatory')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional conservatory cleaning across Birmingham and the West Midlands. WOW Gutters Ltd cleans conservatory gutters, roof panels, and UPVC frames using low-reach equipment that puts no weight on glass or polycarbonate. We remove algae, moss, and dirt to restore light and protect your conservatory structure. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Conservatory Cleaning Services',
          content: 'Conservatories need careful cleaning methods. WOW Gutts Ltd uses low-reach tools and gentle cleaning solutions that are safe for glass, polycarbonate, and UPVC. We clear gutters, treat algae on roof panels, and restore frames to their original brightness.',
          bullets: [
            'Conservatory gutter clearing — narrow channels and box gutters cleaned',
            'Roof panel treatment — algae and moss removed from glass and polycarbonate',
            'UPVC frame cleaning — frames, cappings, and finials restored',
            'Gutter clearing between house and conservatory rooflines',
            'Hot wash options for stubborn staining',
            'Downpipe checks and flow testing included',
          ],
        },
        {
          heading: 'Signs Your Conservatory Needs Cleaning',
          content: 'Algae and blocked gutters develop quickly on north-facing conservatories and under tree cover. Cleaning early keeps the room brighter, prevents leaks, and protects seals from moisture damage.',
          bullets: [
            'Green algae on roof panels reducing natural light',
            'Overflow or staining where the house joins the conservatory',
            'Blocked gutters with leaves, moss, or rooted plants',
            'Black streaks on UPVC frames and cappings',
            'Condensation or damp smells after heavy rain',
            'Preparing a property for sale or rental presentation',
          ],
        },
      ],
    };
  }

  if (slug.includes('fascia') || slug.includes('fascias')) {
    return {
      heroTitle: keyword.includes('near me') ? 'Fascias and Guttering Near Me' : titleCase(keyword),
      heroDescription: `Professional fascia, soffit, and guttering services across Birmingham and the West Midlands. WOW Gutters Ltd cleans, repairs, and maintains fascias, soffits, and guttering systems. We use hot purified water to remove algae, mould, and grime from UPVC surfaces without harsh chemicals. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Fascia, Soffit and Guttering Services',
          content: 'Fascias and soffits protect your roofline from the elements. Over time, algae, mould, and dirt build up and make them look dull and neglected. WOW Gutters Ltd restores them to a bright finish using hot purified water cleaning.',
          bullets: [
            'Fascia and soffit cleaning — hot purified water system',
            'UPVC restoration — removes algae, mould, and oxidation',
            'Gutter cleaning and repairs combined in one visit',
            'Full roofline inspection with every booking',
            'Gutter repairs — leaking joints, loose brackets, and sagging runs',
            'Free quotes with honest advice on roofline condition',
          ],
        },
        {
          heading: 'Why Clean Your Fascias and Soffits?',
          content: 'Clean fascias and soffits make a noticeable difference to your property\'s kerb appeal. More importantly, regular cleaning prevents long-term damage from algae and mould growth that can etch into UPVC surfaces over time.',
          bullets: [
            'Restores the bright white finish of UPVC fascias and soffits',
            'Prevents algae and mould from etching into the surface',
            'Improves kerb appeal and property presentation',
            'Extends the life of your fascias and soffits',
            'Combined gutter cleaning prevents water damage',
            'Before and after photos on every job',
          ],
        },
      ],
    };
  }

  if (slug.includes('cost') || slug.includes('how-much') || keyword.includes('price') || slug.includes('prices') || slug.includes('pricing')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Wondering about gutter cleaning costs? WOW Gutters Ltd offers transparent pricing with no hidden fees. Gutter cleaning from £50, fascia cleaning from £60, roof cleaning from £150. Get a free, no-obligation quote in 60 seconds — call 07421 433910 or book online.`,
      sections: [
        {
          heading: 'Gutter Cleaning Prices — What to Expect',
          content: 'Gutter cleaning prices depend on your property size, accessibility, and how blocked the gutters are. WOW Gutters Ltd provides fixed quotes before any work starts — no surprises, no hidden extras. Most domestic gutter cleaning visits are completed in 30-60 minutes.',
          bullets: [
            'Standard house (2-3 bedroom) — from £50',
            'Large house (4+ bedroom) — from £70',
            'Commercial and industrial properties — quote on request',
            'Fascia and soffit cleaning — from £60',
            'Roof cleaning and moss removal — from £150',
            'Gutter repairs — quotes provided after free inspection',
          ],
        },
        {
          heading: 'What Affects the Cost of Gutter Cleaning?',
          content: 'Several factors affect the final price of gutter cleaning. WOW Gutters Ltd always provides a clear, fixed quote before work begins so you know exactly what to expect.',
          bullets: [
            'Property size and number of elevations to clean',
            'Accessibility — ground-level vs. high-reach access required',
            'Level of blockage — heavy moss and compacted debris takes longer',
            'Additional services — fascia cleaning, repairs, or roof work',
            'Commercial properties — larger systems and multiple downpipes',
            'Frequency — regular customers may qualify for reduced rates',
          ],
        },
      ],
    };
  }

  if (slug.includes('gutter-clean') || slug.includes('clean-gutters') || slug.includes('cleaning-gutters') || slug.includes('clean-gutters-price')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd uses a ground-level vacuum system that removes leaves, moss, silt, and debris without ladders against your walls. Downpipe testing and before and after photos on every visit. Free quotes in 60 seconds — call 07421 433910.`,
      sections: [
        {
          heading: 'Our Gutter Cleaning Service',
          content: 'WOW Gutters Ltd specialises in gutter cleaning using professional ground-level vacuum equipment. We clear the full gutter run, test downpipes for blockages, and provide before and after photos so you can see the difference. No ladders on your walls, no mess left on your drive.',
          bullets: [
            'Ground-level vacuum cleaning — safe and damage-free',
            'High-reach system for gutters up to 4 storeys high',
            'Downpipe clearing and flow testing on every visit',
            'Before and after photos provided for your records',
            'Moss, leaf, and silt removal from all gutter sections',
            'Free quote with no obligation — same-day booking available',
          ],
        },
        {
          heading: 'Why Regular Gutter Cleaning Matters',
          content: 'Blocked gutters force rainwater over the edge of the channel, leading to damp walls, fascia rot, and foundation problems. Regular gutter cleaning is one of the most cost-effective ways to protect your property.',
          bullets: [
            'Prevents damp patches and water staining on walls',
            'Stops water pooling around foundations',
            'Protects fascias, soffits, and roofline timbers',
            'Reduces mould, condensation, and internal damp',
            'Removes nesting material that attracts pests',
            'Prevents bracket strain from wet, heavy debris',
          ],
        },
      ],
    };
  }

  if (slug.includes('gutter') && (slug.includes('repair') || slug.includes('replacement') || slug.includes('replace'))) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Expert gutter repair and replacement services across Birmingham and the West Midlands. WOW Gutters Ltd fixes leaking joints, sagging runs, loose brackets, and damaged sections. Quality materials with a 6-month guarantee on qualifying work. Free inspection and quote — call 07421 433910.`,
      sections: [
        {
          heading: 'Gutter Repair and Replacement Services',
          content: 'WOW Gutters Ltd fixes gutter problems properly — not temporary patches that fail in the next downpour. We diagnose the root cause, use quality seals and brackets, and test water flow before we leave.',
          bullets: [
            'Leaking joints and corner pieces resealed or replaced',
            'Sagging gutter runs — brackets adjusted or replaced',
            'Cracked or split sections cut out and matched',
            'Loose fascia brackets re-secured with correct fixings',
            'Damaged downpipes — shoes, swan necks, connectors replaced',
            'Full gutter replacement when repairs are no longer economical',
          ],
        },
        {
          heading: 'Signs Your Gutters Need Repair',
          content: 'Most gutter damage starts small. A weeping joint becomes a steady leak after winter frost. Catching problems early saves you from damp walls, mould growth, and rotten fascia boards.',
          bullets: [
            'Water dripping from joints long after rain stops',
            'Overflow during light rainfall despite clean gutters',
            'Visible gaps between the gutter and fascia board',
            'Green or black staining on walls beneath the gutter line',
            'Standing water visible in the gutter channel',
            'Gutter sections visibly dipping or pulling away',
          ],
        },
      ],
    };
  }

  if (slug.includes('gutter-clean') && (slug.includes('near-me') || slug.includes('local'))) {
    return {
      heroTitle: 'Local Gutter Cleaning Service Near Me',
      heroDescription: `Professional gutter cleaning near you across Birmingham and the West Midlands. WOW Gutters Ltd provides local gutter cleaning services using ground-level vacuum systems. No ladders, no mess, and before and after photos on every job. Free quotes in 60 seconds — call 07421 433910.`,
      sections: [
        {
          heading: 'Your Local Gutter Cleaning Service',
          content: 'WOW Gutters Ltd covers Birmingham, Wolverhampton, Dudley, Walsall, Solihull, Sutton Coldfield, West Bromwich, and all surrounding areas. We are a trusted local business with years of experience and thousands of satisfied customers.',
          bullets: [
            'Local gutter cleaning teams covering the West Midlands',
            'Ground-level vacuum system — no ladders on your property',
            'Before and after photos on every visit',
            'Downpipe testing and outlet clearing included',
            'Free, no-obligation quotes in 60 seconds',
            'Same-day and next-day appointments where available',
          ],
        },
        {
          heading: 'Areas We Cover',
          content: 'WOW Gutters Ltd provides gutter cleaning services across Birmingham and the wider West Midlands region. Contact us for your area.',
          bullets: [
            'Birmingham — all areas and postcodes including B1-B76',
            'Wolverhampton, Walsall, Dudley, and West Bromwich',
            'Solihull, Sutton Coldfield, and surrounding areas',
            'Coventry, Nuneaton, and Bedworth',
            'Brierley Hill, Stourbridge, and Halesowen',
            'Call 07421 433910 to check if we cover your postcode',
          ],
        },
      ],
    };
  }

  if (slug.includes('gutter') && (slug.includes('system') || slug.includes('tool') || slug.includes('protection') || slug.includes('heavy-duty'))) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional gutter systems, tools, and protection solutions available from WOW Gutters Ltd. We install, maintain, and repair all types of guttering across Birmingham and the West Midlands. Free quotes and expert advice — call 07421 433910.`,
      sections: [
        {
          heading: 'Gutter Systems and Protection',
          content: 'WOW Gutters Ltd supplies and installs a range of gutter systems and protection solutions for residential and commercial properties. Whether you need heavy-duty guttering for a commercial building or gutter guards to reduce maintenance, we have the right solution.',
          bullets: [
            'Standard UPVC guttering systems for homes',
            'Heavy-duty guttering for commercial and industrial buildings',
            'Gutter guards and leaf protection systems',
            'Moss protection solutions to reduce gutter blockages',
            'Professional installation with correct fall and bracket spacing',
            'Free advice on the best system for your property',
          ],
        },
      ],
    };
  }

  if (slug.includes('gutter-installation') || slug.includes('installing-gutter') || slug.includes('installing-guttering') || slug.includes('guttering-installation')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional gutter installation services across Birmingham and the West Midlands. WOW Gutters Ltd installs quality UPVC guttering systems with correct fall, proper bracket spacing, and secure downpipe connections. Free quotes and expert advice — call 07421 433910.`,
      sections: [
        {
          heading: 'Gutter Installation Services',
          content: 'WOW Gutters Ltd installs new gutter systems for homes, extensions, and commercial buildings. We use quality UPVC components, set the correct fall for proper drainage, and ensure all joints and connections are watertight.',
          bullets: [
            'Full gutter installation for new builds and extensions',
            'Replacement of old or damaged gutter systems',
            'Correct fall calculated for proper water flow',
            'Brackets spaced correctly for long-term stability',
            'Downpipe positioning and connection included',
            'Free quote and site assessment before installation',
          ],
        },
      ],
    };
  }

  if (slug.includes('sky-vac') || slug.includes('vacuum-gutter')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional vacuum gutter cleaning from ground level across Birmingham and the West Midlands. WOW Gutters Ltd uses a high-reach vacuum system that cleans gutters up to 4 storeys high without ladders against your walls. No mess, no damage, no fuss. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Vacuum Gutter Cleaning System',
          content: 'Our ground-level vacuum gutter cleaning system is the safest and most effective way to clear gutters. We remove all debris through our vacuum hose — nothing is dropped onto your driveway, paths, or borders.',
          bullets: [
            'High-reach vacuum system — up to 4 storeys from ground level',
            'No ladders placed against your walls or fascias',
            'All waste collected into the vacuum — nothing left on site',
            'Ideal for gutters above conservatories and extensions',
            'Before and after photos using camera inspection',
            'Most domestic gutter cleaning visits completed in 30-60 minutes',
          ],
        },
      ],
    };
  }

  if (slug.includes('roof-clean') || slug.includes('roof-moss') || slug.includes('roof-replacement') || slug.includes('roof-and-gutter') || slug.includes('wow-roofing')) {
    if (slug.includes('replacement')) {
      return {
        heroTitle: 'Roof Replacement Services',
        heroDescription: `Professional roof replacement services across Birmingham and the West Midlands. WOW Gutters Ltd provides roof inspections, tile replacement, and full roof restoration. We also offer roof cleaning and gutter services to complete your roofline care. Call 07421 433910 for a free quote.`,
        sections: [
          {
            heading: 'Roof Replacement and Restoration',
            content: 'Whether you need a few tiles replaced or a full roof restoration, WOW Gutters Ltd can help. We assess the condition of your roof and provide honest advice on whether cleaning, repair, or replacement is the right option.',
            bullets: [
              'Full roof replacement and re-roofing services',
              'Tile replacement for damaged or slipped tiles',
              'Ridge and hip tile repairs',
              'Roof cleaning and moss removal to extend tile life',
              'Gutter cleaning and repairs as part of roof work',
              'Free inspection and no-obligation quote',
            ],
          },
        ],
      };
    }

    return {
      heroTitle: keyword.includes('near me') ? 'Roof Cleaning Near Me' : titleCase(keyword),
      heroDescription: `Professional roof cleaning and moss removal across Birmingham and the West Midlands. WOW Gutters Ltd uses low-pressure soft wash methods that are safe for all tile types. Biocide treatment slows regrowth, and we clear gutters after roof work. From £150. Call 07421 433910.`,
      sections: [
        {
          heading: 'Roof Cleaning and Moss Removal',
          content: 'Moss on roof tiles is more than a cosmetic issue. Moss roots lift tiles, hold moisture against the surface, and shed into gutters causing blockages. WOW Gutters Ltd uses low-pressure soft wash methods to remove moss, algae, and lichen safely without damaging tiles.',
          bullets: [
            'Low-pressure soft wash — safe for concrete, clay, and slate tiles',
            'Moss, algae, and lichen killed at the root',
            'Biocide treatment applied to slow regrowth',
            'Dead debris gently cleared from the roof surface',
            'Gutters cleaned after roof treatment to remove fallen debris',
            'Before and after photos on every roof cleaning job',
          ],
        },
        {
          heading: 'Why Remove Moss From Your Roof?',
          content: 'Moss buildup can cause significant damage to your roof over time. Professional removal protects your roof and prevents costly repairs.',
          bullets: [
            'Moss roots can lift and loosen roof tiles',
            'Moisture trapped by moss accelerates tile weathering',
            'Moss debris blocks gutters and downpipes',
            'Algae and lichen growth makes roofs look neglected',
            'Regular cleaning extends roof tile life',
            'Improves property appearance and kerb appeal',
          ],
        },
      ],
    };
  }

  if (slug.includes('seamless-guttering') || slug.includes('seamless-gutter')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Seamless guttering installation and replacement across Birmingham and the West Midlands. WOW Gutters Ltd supplies and installs custom-made seamless guttering that reduces joint leaks and provides a clean, modern finish. Free quotes — call 07421 433910.`,
      sections: [
        {
          heading: 'Seamless Guttering — Supply and Installation',
          content: 'Seamless guttering is formed on-site to the exact length of your roofline, meaning fewer joints and a reduced risk of leaks. WOW Gutters Ltd installs seamless systems in a range of colours and finishes.',
          bullets: [
            'Custom-made on-site for a perfect fit',
            'Fewer joints means fewer potential leak points',
            'Available in a wide range of colours and finishes',
            'Professional installation by experienced team',
            'Suitable for residential and commercial properties',
            'Free quote and expert advice on seamless guttering costs',
          ],
        },
      ],
    };
  }

  if (slug.includes('flawless-clean')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `WOW Gutters Ltd provides flawless cleaning services across Birmingham and the West Midlands. From gutter cleaning and window cleaning to UPVC restoration and roof care, we deliver professional results every time. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Flawless Cleaning Services',
          content: 'Whether you need gutters cleared, windows sparkling, or your roofline restored, WOW Gutters Ltd delivers thorough, professional cleaning that leaves your property looking its best.',
          bullets: [
            'Gutter cleaning — ground-level vacuum system',
            'Window cleaning — purified water streak-free finish',
            'UPVC fascia and soffit cleaning — hot water restoration',
            'Roof cleaning and moss removal — soft wash methods',
            'Conservatory cleaning — safe and thorough',
            'Fully insured with before and after photos on every job',
          ],
        },
      ],
    };
  }

  if (slug.includes('handyman') || slug.includes('property-maintenance')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional handyman and property maintenance services in Birmingham and the West Midlands. WOW Gutters Ltd offers gutter cleaning, repairs, window cleaning, fascia care, and exterior property maintenance. Reliable, insured, and trusted. Call 07421 433910.`,
      sections: [
        {
          heading: 'Property Maintenance Services',
          content: 'WOW Gutters Ltd provides a range of exterior property maintenance services across Birmingham and the West Midlands. From gutter cleaning to roof care, we keep your property in top condition.',
          bullets: [
            'Gutter cleaning and maintenance',
            'Gutter repairs and replacement',
            'Window cleaning — interior and exterior',
            'Fascia and soffit cleaning and repairs',
            'Roof cleaning and moss removal',
            'Free quotes with honest advice on all work',
          ],
        },
      ],
    };
  }

  if (slug.includes('checkatrade')) {
    return {
      heroTitle: 'Checkatrade Pressure Washing Services',
      heroDescription: `Checkatrade-approved pressure washing services across Birmingham and the West Midlands. WOW Gutters Ltd is a trusted, verified provider with real customer reviews. Driveways, patios, paths, and walls professionally cleaned. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Checkatrade-Approved Cleaning',
          content: 'WOW Gutters Ltd is proud to be a Checkatrade-approved provider. We are verified, insured, and reviewed by real customers. Our pressure washing and exterior cleaning services meet the high standards you expect from a Checkatrade member.',
          bullets: [
            'Checkatrade-approved — verified and vetted',
            'Real customer reviews and ratings',
            'Fully insured with £10 million public liability cover',
            'Professional equipment and experienced operators',
            'Driveways, patios, paths, and walls cleaned',
            'Free quotes with transparent pricing',
          ],
        },
      ],
    };
  }

  if (slug.includes('smouts')) {
    return {
      heroTitle: 'Professional Pressure Washing Services',
      heroDescription: `Professional pressure washing services covering Birmingham and the West Midlands. WOW Gutters Ltd provides hot water pressure washing for driveways, patios, paths, brickwork, and commercial areas. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Pressure Washing Services',
          content: 'WOW Gutters Ltd uses commercial-grade hot water pressure washing equipment to clean exterior surfaces thoroughly. We adjust pressure levels to suit each surface for safe, effective cleaning.',
          bullets: [
            'Hot water pressure washing — deeper clean than cold water',
            'Driveway and patio cleaning — removes algae, moss, oil',
            'Wall and fence cleaning — restores original appearance',
            'Commercial pressure washing for businesses',
            'Fully insured with experienced operators',
            'Free quotes and same-day service where available',
          ],
        },
      ],
    };
  }

  if (slug.includes('soft-wash')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional soft washing services across Birmingham and the West Midlands. WOW Gutters Ltd uses low-pressure soft wash techniques for roof cleaning, wall cleaning, and exterior surface treatment. Safe for tiles, brickwork, and delicate surfaces. Call 07421 433910.`,
      sections: [
        {
          heading: 'Soft Washing Services',
          content: 'Soft washing is a low-pressure cleaning method that uses specialist solutions to kill moss, algae, and lichen at the root. Unlike pressure washing, soft washing is safe for delicate surfaces like roof tiles, painted walls, and UPVC.',
          bullets: [
            'Low-pressure application — safe for all surfaces',
            'Biocide treatment kills organic growth at the root',
            'Long-lasting results that keep surfaces cleaner longer',
            'Ideal for roof tiles, walls, fascias, and conservatories',
            'No risk of forcing water under tiles or behind cladding',
            'Fully insured with free quotes available',
          ],
        },
      ],
    };
  }

  if (slug.includes('weatherfast')) {
    return {
      heroTitle: 'Weatherfast Guttering — Supply and Installation',
      heroDescription: `Weatherfast guttering systems supplied and installed by WOW Gutters Ltd across Birmingham and the West Midlands. Durable, low-maintenance guttering for homes and commercial properties. Free quotes and expert advice — call 07421 433910.`,
      sections: [
        {
          heading: 'Weatherfast Guttering Systems',
          content: 'WOW Gutters Ltd is your local Weatherfast guttering specialist. We supply and install Weatherfast systems that are designed for durability, low maintenance, and long-term performance.',
          bullets: [
            'Weatherfast guttering supply and installation',
            'Durable systems designed for UK weather conditions',
            'Suitable for residential and commercial properties',
            'Professional installation with correct fall and drainage',
            'Gutter cleaning and repair services also available',
            'Free quote and advice on the best guttering for your property',
          ],
        },
      ],
    };
  }

  if (slug.includes('gutter') || slug.includes('guttering')) {
    const h1 = slug.includes('near-me') ? 'Gutter Services Near Me' : titleCase(keyword);
    return {
      heroTitle: h1,
      heroDescription: `Professional gutter services across Birmingham and the West Midlands. WOW Gutters Ltd offers gutter cleaning, repairs, installation, and maintenance for homes and commercial properties. Ground-level vacuum system, before and after photos, and free quotes. Call 07421 433910.`,
      sections: [
        {
          heading: 'Gutter Services from WOW Gutters Ltd',
          content: 'WOW Gutters Ltd provides comprehensive gutter services including cleaning, repairs, and new installations. We use professional equipment and quality materials to ensure your gutters work properly and stay clear.',
          bullets: [
            'Gutter cleaning — ground-level vacuum system',
            'Gutter repairs — leaking joints, sagging runs, loose brackets',
            'Gutter installation — new systems for homes and businesses',
            'Gutter protection — leaf guards and moss prevention',
            'Downpipe cleaning and repair',
            'Free quotes with honest advice on all work',
          ],
        },
        {
          heading: `Why Choose WOW Gutters Ltd?`,
          content: 'WOW Gutters Ltd is a trusted local gutter specialist with years of experience serving Birmingham and the West Midlands. We take pride in reliable service, quality workmanship, and clear communication with every customer.',
          bullets: [
            'Trusted local business with thousands of satisfied customers',
            'Fully insured with £10 million public liability cover',
            'Before and after photos on every job',
            'Professional equipment and experienced team',
            'Free, no-obligation quotes in 60 seconds',
            'Same-day and next-day appointments where available',
          ],
        },
      ],
    };
  }

  if (slug.includes('professional-clean')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional cleaning services across Birmingham and the West Midlands. WOW Gutters Ltd provides gutter cleaning, window cleaning, UPVC restoration, and exterior property care. Reliable, insured, and trusted. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Professional Cleaning Services',
          content: 'WOW Gutters Ltd delivers professional cleaning services for homes and businesses across the West Midlands. From gutters to windows, fascias to roofs, we do the job properly.',
          bullets: [
            'Gutter cleaning — thorough and professional',
            'Window cleaning — streak-free finish',
            'UPVC fascia and soffit cleaning',
            'Roof cleaning and moss removal',
            'Conservatory cleaning',
            'Pressure washing for driveways and patios',
          ],
        },
      ],
    };
  }

  return {
    heroTitle: titleCase(keyword),
    heroDescription: `Professional services across Birmingham and the West Midlands from WOW Gutters Ltd. We provide gutter cleaning, window cleaning, pressure washing, roof cleaning, and exterior property maintenance. Fully insured, trusted, and reliable. Call 07421 433910 for a free quote.`,
    sections: [
      {
        heading: 'Our Services',
        content: 'WOW Gutters Ltd provides a comprehensive range of exterior property services across Birmingham and the West Midlands. Whether you need gutter cleaning, window cleaning, pressure washing, or roof care, our professional team delivers quality results every time.',
        bullets: [
          'Gutter cleaning — ground-level vacuum system',
          'Window cleaning — purified water streak-free finish',
          'Pressure washing — driveways, patios, paths, walls',
          'Roof cleaning — soft wash moss removal',
          'UPVC fascia and soffit cleaning — hot water restoration',
          'Gutter repairs and installation',
        ],
      },
      {
        heading: 'Why Choose WOW Gutters Ltd?',
        content: 'WOW Gutters Ltd is a trusted local business serving Birmingham and the West Midlands. We take pride in our work and are committed to providing the highest standard of service to every customer.',
        bullets: [
          'Trusted local team with years of experience',
          'Fully insured with £10 million public liability cover',
          'Before and after photos on every job',
          'Free, no-obligation quotes in 60 seconds',
          'Same-day and next-day appointments where available',
          'Thousands of satisfied customers across the West Midlands',
        ],
      },
    ],
  };
}

export const KEYWORD_PAGES: Record<string, KeywordPage> = {};

for (const raw of RAW_KEYWORDS) {
  const slug = slugify(raw);
  const data = getContent(raw);
  const displayName = titleCase(
    raw
      .replace(/[,.'"]/g, '')
      .replace(/\s*,\s*/g, ', ')
      .trim()
  );

  KEYWORD_PAGES[slug] = {
    slug,
    titleTag: `${displayName} | WOW Gutters Ltd`,
    metaDescription: data.heroDescription.slice(0, 160),
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    sections: data.sections,
    cta: {
      title: `Book Your ${data.heroTitle.includes('Clean') ? 'Clean' : 'Service'} Today`,
      description: 'Free quotes in 60 seconds. Same-day and next-day appointments where available. Call 07421 433910 or book online.',
    },
  };
}

export function getKeywordPage(slug: string): KeywordPage | undefined {
  return KEYWORD_PAGES[slug];
}

export function getAllKeywordSlugs(): string[] {
  return Object.keys(KEYWORD_PAGES);
}
