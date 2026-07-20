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
  faqs?: {
    question: string;
    answer: string;
  }[];
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
  'gutter cleaning worcestershire',
  'gutter clearing birmingham',
  'gutter cleaners birmingham',
  'roof moss removal birmingham',
  'moss removal birmingham',
  'downpipe unblocking birmingham',
  'blocked gutter birmingham',
  'fascia and soffit cleaning birmingham',
  'commercial gutter cleaning west midlands',
  'gutter maintenance birmingham',
  'high level gutter cleaning',
  'same day gutter cleaning',
  'gutter cleaning no ladders',
  'best gutter cleaning birmingham',
  'how much does gutter cleaning cost uk',
  'gutter cleaning cost 3 bed semi',
  'gutter cleaning cost terraced house',
  'gutter cleaning cost detached house',
  'gutter cleaning cost bungalow',
  'average price for gutter cleaning birmingham',
  'how much to unblock a downpipe',
  'roof moss removal cost uk',
  'fascia cleaning cost',
  'commercial gutter cleaning prices',
  'gutter cleaning price per metre',
  'cheap gutter cleaning birmingham',
  'gutter cleaning quote online',
  'how much is gutter vacuum cleaning',
  'annual gutter cleaning plan cost',
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

function getContent(keyword: string): { heroTitle: string; heroDescription: string; sections: { heading: string; content: string; bullets: string[] }[]; faqs?: { question: string; answer: string }[] } {
  const slug = slugify(keyword);

  if (slug === 'gutter-cleaning-worcestershire') {
    return {
      heroTitle: 'Gutter Cleaning Worcestershire',
      heroDescription: 'Professional gutter cleaning across Worcestershire including Worcester, Kidderminster, Bromsgrove, Redditch, Droitwich, Malvern, Evesham, and Pershore. WOW Gutters Ltd uses a ground-level vacuum system — no ladders against your property. Before and after photos on every job. Call 07421 433910 for a free quote.',
      sections: [
        { heading: 'Gutter Cleaning in Worcestershire', content: 'WOW Gutters Ltd covers Worcestershire towns and villages with the same professional gutter cleaning service trusted across Birmingham and the West Midlands. Our ground-level vacuum system reaches gutters up to four storeys high without a single ladder touching your walls. We clear all debris, test downpipes, and provide before and after photographs on every job.', bullets: ['Full gutter clearance across all Worcestershire properties', 'Ground-level vacuum system — no ladders on your walls', 'Downpipe testing and flow check on every outlet', 'Before and after photos sent to you on completion', 'Covers Worcester, Kidderminster, Bromsgrove, Redditch, Droitwich, Malvern, Evesham', 'Free quote with no obligation — call 07421 433910'] },
        { heading: 'Areas We Cover in Worcestershire', content: 'Our teams travel across the whole of Worcestershire providing professional gutter cleaning services. Whether you are in Worcester city centre or a village in the Malvern Hills, we bring the same equipment, expertise, and professional standards.', bullets: ['Worcester — all WR postcodes including St John\'s, Claines, Warndon', 'Kidderminster and Stourport-on-Severn', 'Bromsgrove and surrounding villages', 'Redditch and Studley', 'Malvern, Great Malvern, and Malvern Link', 'Droitwich Spa, Fernhill Heath, and Tibberton'] },
      ],
      faqs: [
        { question: 'Does WOW Gutters Ltd cover the whole of Worcestershire?', answer: 'Yes — we cover Worcester, Kidderminster, Bromsgrove, Redditch, Droitwich, Malvern, Evesham, Pershore, Tenbury Wells, Bewdley, and all surrounding areas. Call 07421 433910 to check your specific location.' },
        { question: 'Do you use ladders for gutter cleaning in Worcestershire?', answer: 'No — our ground-level vacuum system cleans gutters up to four storeys high without ladders touching your walls, fascias, or roofline.' },
        { question: 'How much does gutter cleaning cost in Worcestershire?', answer: 'Most homes cost between £50 and £120 depending on property size and access. We provide a fixed price before any work starts with no hidden charges.' },
        { question: 'Can you combine gutter cleaning with fascia cleaning in Worcestershire?', answer: 'Yes — many Worcestershire customers book gutter cleaning and fascia/soffit cleaning in the same visit to save time and money.' },
        { question: 'How quickly can you book a gutter clean in Worcestershire?', answer: 'We usually have availability within a few days across Worcestershire. Call 07421 433910 for the earliest appointment in your area.' },
      ],
    };
  }

  if (slug === 'gutter-clearing-birmingham') {
    return {
      heroTitle: 'Gutter Clearing Birmingham',
      heroDescription: 'Professional gutter clearing in Birmingham. WOW Gutters Ltd removes leaves, moss, silt, and debris from all gutter types across the city. Ground-level vacuum system. Before and after photos included. Call 07421 433910 for a free quote.',
      sections: [
        { heading: 'Gutter Clearing Services in Birmingham', content: 'Gutter clearing is the complete removal of all debris from your gutter channels — leaves, moss, seed cases, silt, and compacted organic matter. WOW Gutters Ltd clears every section of your gutter run and tests every downpipe for free flow before we leave.', bullets: ['Complete debris removal from all gutter channels', 'Silt extraction from the channel floor', 'Downpipe inlet clearing and flow testing', 'Moss and leaf removal from roof valleys', 'Before and after photos on every job', 'Fixed pricing with no hidden charges'] },
        { heading: 'How Gutter Clearing Differs From a Standard Clean', content: 'Gutter clearing goes further than a standard clean by removing not just visible debris but also the compacted silt layer at the bottom of the channel that reduces your gutter capacity over time.', bullets: ['Deep silt removal that standard cleans often miss', 'Camera inspection to confirm complete clearance', 'All debris vacuumed directly — nothing dropped on your garden', 'Downpipe flow testing to confirm clear drainage', 'Written condition summary after every visit', 'Same-day booking available across Birmingham'] },
      ],
      faqs: [
        { question: 'What is the difference between gutter clearing and gutter cleaning?', answer: 'Gutter clearing focuses on complete removal of all debris including compacted silt. Gutter cleaning is a broader term that may include inspection and assessment. WOW Gutters Ltd does both in every visit.' },
        { question: 'How often should gutters be cleared in Birmingham?', answer: 'Most Birmingham homes benefit from clearing at least once a year. Properties under mature trees or with north-facing roofs may need twice-yearly clearing.' },
        { question: 'Do you clear gutters on commercial properties in Birmingham?', answer: 'Yes — we clear gutters on offices, retail units, warehouses, and industrial buildings across all Birmingham postcodes.' },
        { question: 'Can you clear gutters in the rain?', answer: 'We prefer dry conditions for the most thorough clearance. However, our vacuum system works effectively in light rain if clearance is urgent.' },
        { question: 'Are you insured for gutter clearing in Birmingham?', answer: 'Yes — WOW Gutters Ltd holds comprehensive public liability insurance covering all gutter clearing work across Birmingham.' },
      ],
    };
  }

  if (slug === 'gutter-cleaners-birmingham') {
    return {
      heroTitle: 'Gutter Cleaners Birmingham',
      heroDescription: 'Professional gutter cleaners in Birmingham. WOW Gutters Ltd provides thorough gutter cleaning, repairs, and maintenance across the city. Ground-level vacuum system with before and after photos. Free quotes — call 07421 433910.',
      sections: [
        { heading: 'Professional Gutter Cleaners in Birmingham', content: 'Finding reliable gutter cleaners in Birmingham means choosing a company with the right equipment, experience, and insurance. WOW Gutters Ltd has been cleaning gutters across the city for years, using professional ground-level vacuum systems that do not require ladders against your property.', bullets: ['Experienced gutter cleaners serving all Birmingham areas', 'Ground-level vacuum system — no ladders on your walls', 'Full debris removal including silt and moss', 'Downpipe testing on every visit', 'Before and after photos provided as standard', 'Fully insured with public liability cover'] },
        { heading: 'Why Choose WOW Gutters Ltd as Your Birmingham Gutter Cleaners?', content: 'Not all gutter cleaners are the same. WOW Gutters Ltd uses industrial-grade equipment, provides photographic evidence of every job, and gives fixed pricing before any work starts. Our team is local, reliable, and professional.', bullets: ['Local Birmingham team with years of experience', 'Professional equipment — not a ladder and a trowel', 'Before and after photos on every job without exception', 'Fixed pricing — no surprises on the day', 'Same-day and next-day appointments available', '4.9-star rating from verified Google reviews'] },
      ],
      faqs: [
        { question: 'How do I find reliable gutter cleaners in Birmingham?', answer: 'Look for gutter cleaners with professional equipment (ground-level vacuum), public liability insurance, before and after photo evidence, and verified customer reviews. WOW Gutters Ltd meets all these criteria.' },
        { question: 'How much do gutter cleaners charge in Birmingham?', answer: 'Professional gutter cleaning in Birmingham typically costs between £50 and £120 for standard homes. WOW Gutters Ltd provides fixed quotes before any work starts.' },
        { question: 'Do Birmingham gutter cleaners use ladders or vacuum systems?', answer: 'Reputable gutter cleaners now use ground-level vacuum systems. WOW Gutters Ltd uses a high-reach vacuum system that cleans gutters up to four storeys high without ladders against your property.' },
        { question: 'Are gutter cleaners in Birmingham insured?', answer: 'Professional gutter cleaners should hold public liability insurance. WOW Gutters Ltd is fully insured with comprehensive cover for all gutter cleaning work.' },
        { question: 'How quickly can gutter cleaners in Birmingham attend?', answer: 'WOW Gutters Ltd offers same-day and next-day appointments across Birmingham subject to availability. Call 07421 433910 for the earliest slot.' },
      ],
    };
  }

  if (slug === 'roof-moss-removal-birmingham') {
    return {
      heroTitle: 'Roof Moss Removal Birmingham',
      heroDescription: 'Professional roof moss removal in Birmingham. WOW Gutters Ltd treats and removes moss, algae, and lichen from all roof tile types. Low-pressure soft wash method — safe for concrete, clay, and slate. Biocide treatment slows regrowth. From £150. Call 07421 433910.',
      sections: [
        { heading: 'Roof Moss Removal in Birmingham', content: 'Birmingham\'s climate — with regular rainfall and periods of warmth — creates ideal conditions for roof moss growth. Moss roots lift roof tiles, hold moisture against the surface, and shed debris into gutters. WOW Gutters Ltd removes moss using low-pressure soft wash methods that are safe for all tile types.', bullets: ['Low-pressure soft wash — safe for concrete, clay, and slate tiles', 'Moss, algae, and lichen killed at the root', 'Biocide treatment applied after cleaning to slow regrowth', 'Dead debris gently cleared from the roof surface', 'Gutters cleaned after roof treatment to remove fallen moss', 'Before and after photos on every roof cleaning job'] },
        { heading: 'Why Remove Moss From Your Birmingham Roof?', content: 'Moss buildup causes real damage over time. In Birmingham\'s older housing stock — Victorian and Edwardian terraces with original clay or concrete tiles — untreated moss accelerates tile deterioration and causes gutter blockages that lead to damp walls and fascia rot.', bullets: ['Moss roots lift and loosen roof tiles', 'Moisture trapped by moss accelerates tile weathering', 'Moss debris blocks gutters and downpipes in Birmingham homes', 'Algae and lichen growth makes properties look neglected', 'Professional removal extends roof tile life significantly', 'Improves property appearance and kerb appeal before selling'] },
      ],
      faqs: [
        { question: 'How much does roof moss removal cost in Birmingham?', answer: 'Roof moss removal in Birmingham starts from £150 for standard homes. The final price depends on roof size, moss coverage thickness, and accessibility. WOW Gutters Ltd provides a fixed quote before any work begins.' },
        { question: 'Is roof moss removal safe for my roof tiles?', answer: 'Yes — WOW Gutters Ltd uses low-pressure soft wash methods that are safe for concrete, clay, slate, and composite roof tiles. High-pressure washing is not used on any roof surface.' },
        { question: 'Does the moss grow back after removal?', answer: 'We apply a biocide treatment after cleaning that kills moss at the root and significantly slows regrowth. Annual maintenance treatments keep your roof clear for longer.' },
        { question: 'Can you remove moss from a Birmingham terrace roof?', answer: 'Yes — we regularly work on Victorian and Edwardian terraces across Birmingham. Our team has the equipment and experience to work on all property types including those with limited access.' },
        { question: 'Do you clean gutters after removing roof moss?', answer: 'Yes — we clear gutters after roof moss treatment to remove any debris that has fallen from the roof during treatment.' },
      ],
    };
  }

  if (slug === 'moss-removal-birmingham') {
    return {
      heroTitle: 'Moss Removal Birmingham',
      heroDescription: 'Professional moss removal across Birmingham. WOW Gutters Ltd treats moss on roofs, patios, paths, driveways, and walls. Biocide treatment kills moss at the root and prevents rapid regrowth. Free quotes — call 07421 433910.',
      sections: [
        { heading: 'Moss Removal Services in Birmingham', content: 'Moss grows throughout the year on Birmingham properties due to the region\'s consistent rainfall and clay-rich soils. WOW Gutters Ltd treats moss with professional-grade biocides that kill it at the root and slow regrowth significantly.', bullets: ['Roof moss removal — soft wash treatment safe for all tiles', 'Patio and path moss treatment — pressure washing available', 'Wall and fence moss removal — gentle surface cleaning', 'Biocide application to prevent rapid regrowth', 'Gutter clearance after moss treatment', 'Free quotes and honest advice on moss treatment options'] },
        { heading: 'Why Remove Moss From Your Birmingham Property?', content: 'Moss is more than a cosmetic issue. It holds moisture against surfaces, causes damage over time, and blocks gutters with debris. Professional removal protects your property.', bullets: ['Roof moss lifts tiles and holds moisture against the surface', 'Moss on paths and patios creates slippery, unsafe surfaces', 'Moss debris washes into gutters and causes blockages', 'Algae and moss growth makes properties look neglected', 'Regular treatment extends the life of roof tiles and paving', 'Before and after photos on every moss removal job'] },
      ],
      faqs: [
        { question: 'How much does moss removal cost in Birmingham?', answer: 'Moss removal costs vary by surface and extent. Roof moss treatment starts from £150. Patio and path moss treatment from £60. We provide a fixed quote before any work starts.' },
        { question: 'What causes moss to grow on Birmingham properties?', answer: 'Birmingham\'s frequent rainfall, clay-heavy soils, and shaded urban areas create ideal conditions for moss growth. Properties with north-facing surfaces and mature tree cover are most affected.' },
        { question: 'Is moss removal safe for my patio or driveway?', answer: 'Yes — we use controlled pressure levels suitable for each surface type. Block paving, concrete, stone, and tarmac are all cleaned safely without damage.' },
        { question: 'Will moss grow back after treatment?', answer: 'Our biocide treatment kills moss at the root and significantly slows regrowth. Most properties stay clear for 12–24 months before retreatment is needed.' },
        { question: 'Do you offer annual moss treatment plans?', answer: 'Yes — we offer annual maintenance treatments for properties with persistent moss issues. Regular treatment keeps moss under control and prevents buildup.' },
      ],
    };
  }

  if (slug === 'downpipe-unblocking-birmingham') {
    return {
      heroTitle: 'Downpipe Unblocking Birmingham',
      heroDescription: 'Professional downpipe unblocking in Birmingham. WOW Gutters Ltd clears blocked downpipes using industrial vacuum and rodding equipment. Free flow test after every clearance. Call 07421 433910 for a free quote.',
      sections: [
        { heading: 'Downpipe Unblocking in Birmingham', content: 'A blocked downpipe causes water to back up into your gutters and overflow during heavy rain. WOW Gutters Ltd clears blockages using professional equipment, then tests the flow to confirm the pipe is running freely from gutter to drain.', bullets: ['Blocked downpipe diagnosis with camera inspection', 'Vacuum and rodding clearance for stubborn blockages', 'Flow testing on every outlet after clearance', 'Leaf guards and mesh outlets to prevent future blockages', 'Combined gutter and downpipe clearance in one visit', 'Free quotes with no obligation to proceed'] },
        { heading: 'What Causes Downpipe Blockages in Birmingham?', content: 'Downpipes block for several reasons. Understanding the cause helps prevent recurrence. WOW Gutters Ltd identifies the root cause during every clearance visit.', bullets: ['Debris washing from gutters into the downpipe inlet', 'Compacted leaves and moss forming a plug at bends', 'Bird nesting material and droppings accumulating', 'Silt and mineral deposits building up over years', 'Sycamore seed cases compacting in narrow sections', 'Frozen blockages in winter that expand and crack pipes'] },
      ],
      faqs: [
        { question: 'How much does downpipe unblocking cost in Birmingham?', answer: 'Downpipe unblocking typically costs between £40 and £80 depending on the severity and location of the blockage. WOW Gutters Ltd provides a fixed quote before work starts.' },
        { question: 'How do you unblock a downpipe?', answer: 'We use a combination of vacuum suction to clear accessible debris and rodding equipment for deeper blockages. Every clearance is followed by a flow test to confirm free drainage.' },
        { question: 'Can a blocked downpipe cause damp inside my Birmingham home?', answer: 'Yes — a blocked downpipe forces water to overflow from the gutters, running down external walls and saturating brickwork. Over time this leads to internal damp in upstairs rooms.' },
        { question: 'How do I know if my downpipe is blocked?', answer: 'Signs include water overflowing from gutters during rain, water escaping from downpipe joints, gurgling sounds from the pipe, and water pooling at the base rather than flowing into the drain.' },
        { question: 'Do you clear downpipes on commercial properties in Birmingham?', answer: 'Yes — we clear downpipes on offices, shops, warehouses, and industrial buildings across all Birmingham areas.' },
      ],
    };
  }

  if (slug === 'blocked-gutter-birmingham') {
    return {
      heroTitle: 'Blocked Gutter Birmingham',
      heroDescription: 'Professional blocked gutter clearance in Birmingham. WOW Gutters Ltd clears blocked gutters and tests downpipes for free flow. Ground-level vacuum system with before and after photos. Call 07421 433910.',
      sections: [
        { heading: 'Blocked Gutter Clearance in Birmingham', content: 'Blocked gutters cause water to overflow against your walls, saturate brickwork, and find its way inside your home. WOW Gutters Ltd clears blocked gutters completely — not just the visible debris but the compacted silt and moss at the channel base that reduces your gutter capacity.', bullets: ['Complete blockage clearance from all gutter channels', 'Compacted silt and moss removal from channel floor', 'Downpipe inlet clearing where debris has compacted', 'Flow testing after clearance to confirm free drainage', 'Before and after photos on every job', 'Fixed pricing with no hidden charges'] },
        { heading: 'Common Causes of Blocked Gutters in Birmingham', content: 'Birmingham properties face specific blockage risks due to the city\'s mature tree canopy, older housing stock, and consistent rainfall. Understanding the cause helps prevent recurrence.', bullets: ['Leaf debris from mature trees lining Birmingham streets', 'Moss fragments washing from roof tiles into gutters', 'Sycamore helicopter seeds compacting at downpipe inlets', 'Bird nesting material accumulating in channels', 'Silt and mineral deposits building up over multiple seasons', 'Rooted weeds growing in decomposed debris'] },
      ],
      faqs: [
        { question: 'How do I know if my gutters are blocked in Birmingham?', answer: 'Overflow during rain, water staining on external walls, damp patches on upstairs ceilings, visible plant growth in gutters, and sagging gutter sections are all signs of a blockage.' },
        { question: 'How much does blocked gutter clearance cost in Birmingham?', answer: 'Most blocked gutter clearances cost between £50 and £120 depending on property size. Heavily blocked gutters may cost more. WOW Gutters Ltd provides a fixed quote before work starts.' },
        { question: 'Can blocked gutters cause damp in Birmingham homes?', answer: 'Yes — blocked gutters are one of the most common causes of damp in Birmingham\'s older housing stock. Overflow water saturates brickwork and travels through to internal walls.' },
        { question: 'How quickly can you clear blocked gutters in Birmingham?', answer: 'We offer same-day and next-day appointments for blocked gutters across Birmingham. Call 07421 433910 for urgent clearance.' },
        { question: 'Do you fix the cause of the blockage?', answer: 'We clear the current blockage and can install gutter guards or leaf mesh at the downpipe inlet to prevent future blockages from the same cause.' },
      ],
    };
  }

  if (slug === 'fascia-and-soffit-cleaning-birmingham') {
    return {
      heroTitle: 'Fascia and Soffit Cleaning Birmingham',
      heroDescription: 'Professional fascia and soffit cleaning in Birmingham. WOW Gutters Ltd restores UPVC fascias and soffits to a bright white finish using hot purified water. Algae, mould, and dirt removed without harsh chemicals. Call 07421 433910.',
      sections: [
        { heading: 'Fascia and Soffit Cleaning in Birmingham', content: 'Fascias and soffits take the brunt of Birmingham\'s weather — rain, wind, and airborne dirt combine to create algae and mould growth that turns white UPVC green or black over time. WOW Gutters Ltd restores them using hot purified water cleaning that removes all biological growth without chemicals.', bullets: ['Hot purified water cleaning — no harsh chemicals needed', 'Algae, mould, and lichen removed from all UPVC surfaces', 'Bright white finish restored to original appearance', 'Soffit vents cleaned without damage', 'Gutter cleaning combined in the same visit', 'Before and after photos on every job'] },
        { heading: 'Why Clean Your Fascias and Soffits in Birmingham?', content: 'Clean fascias and soffits transform the look of your property. More importantly, regular cleaning prevents long-term damage from algae and mould that etches into UPVC surfaces over time.', bullets: ['Restores kerb appeal — essential when selling a Birmingham home', 'Prevents algae from etching permanently into UPVC surfaces', 'Extends the life of your fascias and soffits', 'Identifies any damage or deterioration early', 'Combined gutter cleaning prevents water damage behind fascias', 'Most fascia and soffit cleaning completed in under an hour'] },
      ],
      faqs: [
        { question: 'How much does fascia and soffit cleaning cost in Birmingham?', answer: 'Fascia and soffit cleaning in Birmingham typically costs from £60 for standard homes. Larger properties may cost more. WOW Gutters Ltd provides a fixed quote before work starts.' },
        { question: 'How do you clean fascias and soffits?', answer: 'We use a hot purified water cleaning system that removes algae, mould, and dirt without chemicals or abrasives. The hot water dissolves biological growth while the pure water leaves a spot-free finish.' },
        { question: 'Can you clean fascias on a Birmingham terrace?', answer: 'Yes — our ground-level reach equipment accesses fascias on terraced properties safely without ladders against your walls.' },
        { question: 'How long does fascia cleaning take?', answer: 'Most Birmingham homes take 30–60 minutes for fascia and soffit cleaning. Larger detached properties may take longer.' },
        { question: 'Can you clean fascias and gutters in the same visit?', answer: 'Yes — many customers book both services together, saving time and money. The gutter clean also prevents future staining on freshly cleaned fascias.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-west-midlands') {
    return {
      heroTitle: 'Commercial Gutter Cleaning West Midlands',
      heroDescription: 'Professional commercial gutter cleaning across the West Midlands. WOW Gutts Ltd services offices, retail units, warehouses, industrial buildings, and public buildings. Planned maintenance and one-off clearances available. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in the West Midlands', content: 'Commercial properties have larger gutter systems, multiple downpipes, and often more complex access requirements than domestic properties. WOW Gutters Ltd provides commercial gutter cleaning across Birmingham, Wolverhampton, Coventry, Dudley, Walsall, Solihull, and the wider West Midlands.', bullets: ['Industrial-grade vacuum system for large gutter runs', 'Multi-downpipe testing and clearance on every visit', 'Flexible scheduling — out-of-hours work available', 'Planned maintenance programmes for regular clearance', 'Before and after photographic records for compliance', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Commercial Properties Need Regular Gutter Cleaning', content: 'Blocked gutters on commercial properties cause water damage to stock, equipment, and interiors. Health and safety regulations require that commercial drainage systems are maintained in good working order.', bullets: ['Prevents water damage to stock, equipment, and interiors', 'Meets health and safety requirements for drainage maintenance', 'Reduces liability risks from overflowing water', 'Extends the life of commercial gutter systems', 'Planned maintenance reduces costs compared to emergency callouts', 'Photographic records provided for compliance documentation'] },
      ],
      faqs: [
        { question: 'How much does commercial gutter cleaning cost in the West Midlands?', answer: 'Commercial gutter cleaning costs vary by property size, gutter length, and access requirements. WOW Gutters Ltd provides free site surveys and fixed quotes for all commercial work.' },
        { question: 'Do you work outside regular business hours?', answer: 'Yes — we can schedule commercial gutter cleaning outside business hours, at weekends, or during shutdown periods to minimise disruption to your operations.' },
        { question: 'Do you provide documentation for compliance?', answer: 'Yes — every commercial clean includes before and after photographs and a written summary of work completed, suitable for health and safety records and compliance documentation.' },
        { question: 'What areas of the West Midlands do you cover for commercial work?', answer: 'We cover Birmingham, Coventry, Wolverhampton, Dudley, Walsall, Sandwell, Solihull, Bromsgrove, Redditch, and all surrounding West Midlands areas.' },
        { question: 'Do you offer planned maintenance contracts?', answer: 'Yes — we offer scheduled gutter cleaning programmes for commercial properties with regular visits timed to your property\'s specific debris accumulation pattern.' },
      ],
    };
  }

  if (slug === 'gutter-maintenance-birmingham') {
    return {
      heroTitle: 'Gutter Maintenance Birmingham',
      heroDescription: 'Professional gutter maintenance in Birmingham. WOW Gutters Ltd offers planned gutter cleaning, inspection, and repair services to keep your gutters working throughout the year. Fixed pricing with before and after photos. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Maintenance Services in Birmingham', content: 'Regular gutter maintenance prevents the small problems that become expensive emergencies. WOW Gutters Ltd provides planned gutter maintenance — cleaning, inspection, and minor repairs — on a schedule that matches your property\'s needs.', bullets: ['Planned gutter cleaning — timed to your property\'s accumulation pattern', 'Full inspection of joints, brackets, and fascia boards', 'Downpipe testing and clearance on every visit', 'Minor repairs — sealant, brackets, and sections', 'Before and after photos for your maintenance records', 'Priority scheduling for maintenance customers'] },
        { heading: 'Birmingham Gutter Maintenance Schedule', content: 'Most Birmingham properties benefit from two maintenance visits per year — one in summer for a thorough dry-condition inspection, and one in late autumn to clear leaf fall. Properties under heavy tree cover may need additional visits.', bullets: ['Summer maintenance — dry-condition inspection and deep clean', 'Autumn maintenance — leaf fall clearance before winter', 'Spring check — frost damage inspection and winter debris clearance', 'Properties near mature trees — additional visits as needed', 'Maintenance reminders so you never miss a visit', 'Discounted rates for annual maintenance customers'] },
      ],
      faqs: [
        { question: 'How often should gutters be maintained in Birmingham?', answer: 'Most Birmingham homes benefit from gutter maintenance at least twice a year — once in summer for inspection and once in late autumn for leaf fall clearance.' },
        { question: 'What does gutter maintenance include?', answer: 'Gutter maintenance includes full debris clearance, downpipe testing, joint and bracket inspection, fascia board assessment, and photographic documentation of the work completed.' },
        { question: 'Do you offer annual gutter maintenance plans?', answer: 'Yes — we offer annual maintenance plans with scheduled visits, priority booking, and discounted rates for regular customers across Birmingham.' },
        { question: 'Can gutter maintenance prevent damp problems?', answer: 'Yes — regular gutter maintenance prevents the overflow that causes damp walls, rot, and foundation issues in Birmingham properties.' },
        { question: 'What happens if a problem is found during maintenance?', answer: 'We document the issue with photographs and explain the recommended repair. Minor repairs can often be completed during the same visit. You are never pressured into additional work.' },
      ],
    };
  }

  if (slug === 'high-level-gutter-cleaning') {
    return {
      heroTitle: 'High Level Gutter Cleaning',
      heroDescription: 'Professional high level gutter cleaning for tall buildings across Birmingham and the West Midlands. WOW Gutters Ltd\'s industrial vacuum system reaches gutters up to four storeys high without scaffolding or cherry pickers. Call 07421 433910.',
      sections: [
        { heading: 'High Level Gutter Cleaning Service', content: 'High level gutters — on three-storey townhouses, apartment blocks, office buildings, and industrial units — cannot be reached safely with standard ladders. WOW Gutters Ltd\'s high-reach vacuum system cleans gutters up to four storeys from ground level, eliminating the need for scaffolding, cherry pickers, or ladder access.', bullets: ['Vacuum system reaches gutters up to four storeys high', 'No scaffolding or cherry picker required for most buildings', 'No ladders against walls or fascias at height', 'Complete debris extraction from all high level gutters', 'Downpipe testing from ground level using camera systems', 'Suitable for townhouses, apartments, offices, and industrial units'] },
        { heading: 'Why Professional High Level Gutter Cleaning Matters', content: 'High level gutters are often neglected because they are difficult and dangerous to access. But blocked gutters at height cause the same damage as blocked ground-floor gutters — water runs down walls, saturates brickwork, and causes internal damp.', bullets: ['Prevents water damage to upper-storey walls and ceilings', 'Avoids costly scaffolding hire for gutter maintenance', 'Professional equipment makes high level cleaning safe and thorough', 'Regular maintenance prevents emergency callouts at height', 'Before and after photos using camera inspection', 'Fully insured for high level work with specialist equipment'] },
      ],
      faqs: [
        { question: 'How high can your gutter cleaning system reach?', answer: 'Our ground-level vacuum system reaches gutters up to four storeys high — approximately 12 metres. This covers most townhouses, apartment blocks, and commercial buildings.' },
        { question: 'Do I need scaffolding for high level gutter cleaning?', answer: 'No — WOW Gutters Ltd\'s high-reach vacuum system cleans gutters from ground level. Scaffolding or cherry pickers are not required for the vast majority of high level gutter jobs.' },
        { question: 'Is high level gutter cleaning safe?', answer: 'Yes — our system operates entirely from the ground. No operatives work at height, and no ladders are placed against your property. This eliminates the safety risks associated with traditional ladder-based gutter cleaning.' },
        { question: 'How much does high level gutter cleaning cost?', answer: 'Costs depend on the height, length of guttering, and accessibility. WOW Gutters Ltd provides a fixed quote before any work starts, with no hidden charges for height.' },
        { question: 'Can you clean high level gutters on commercial buildings?', answer: 'Yes — our system is ideal for commercial buildings, apartment blocks, and offices where gutter access is difficult or dangerous from ladders.' },
      ],
    };
  }

  if (slug === 'same-day-gutter-cleaning') {
    return {
      heroTitle: 'Same Day Gutter Cleaning',
      heroDescription: 'Same day gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd offers rapid response gutter clearance when you need it urgently. Call 07421 433910 for same-day availability.',
      sections: [
        { heading: 'Same Day Gutter Cleaning Service', content: 'When your gutters are overflowing during heavy rain, you need help fast. WOW Gutters Ltd offers same-day gutter cleaning across Birmingham and the West Midlands for urgent blockages, emergency overflow, and last-minute property preparation.', bullets: ['Same-day appointments subject to availability', 'Rapid response for overflowing gutters and blocked downpipes', 'Full debris clearance including compacted blockages', 'Downpipe testing and flow check before we leave', 'Before and after photos on every same-day job', 'No extra charge for urgent bookings'] },
        { heading: 'When You Might Need Same Day Gutter Cleaning', content: 'Some situations cannot wait days or weeks for a gutter cleaner. WOW Gutters Ltd keeps same-day slots available for customers who need urgent help.', bullets: ['Heavy rain causing overflow against walls and windows', 'Blocked downpipe causing water to pool at ground level', 'Property viewing or inspection tomorrow', 'After a storm that has dislodged debris into gutters', 'New home purchase — immediate clearance for peace of mind', 'Landlord needing urgent clearance before tenant move-in'] },
      ],
      faqs: [
        { question: 'Do you offer same day gutter cleaning?', answer: 'Yes — WOW Gutters Ltd offers same-day gutter cleaning across Birmingham and the West Midlands subject to availability. Call 07421 433910 to check today\'s availability.' },
        { question: 'Is there an extra charge for same day gutter cleaning?', answer: 'No — we do not charge a premium for same-day appointments. You pay the same fixed price as a standard booking.' },
        { question: 'How quickly can you get to my property?', answer: 'We aim to attend within 2–4 hours for same-day bookings depending on your location and our current workload. Call us to discuss your specific timing.' },
        { question: 'Can you clear heavily blocked gutters on a same-day visit?', answer: 'Yes — our industrial vacuum system handles heavy blockages including compacted debris, moss, and silt during same-day visits.' },
        { question: 'What areas do you cover for same day gutter cleaning?', answer: 'We cover all Birmingham postcodes and the wider West Midlands for same-day gutter cleaning. Call 07421 433910 to check availability in your area.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-no-ladders') {
    return {
      heroTitle: 'Gutter Cleaning No Ladders',
      heroDescription: 'Professional gutter cleaning with no ladders used on your property. WOW Gutters Ltd\'s ground-level vacuum system cleans gutters up to four storeys high safely from the ground. No ladders against your walls, fascias, or roofline. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning With No Ladders', content: 'Traditional gutter cleaning requires ladders against your walls, which risks damage to gutters, fascias, and UPVC. WOW Gutters Ltd uses a ground-level vacuum system that cleans gutters entirely from the ground — no ladders touch your property at any point.', bullets: ['Zero ladders on your property during the entire job', 'High-reach vacuum system — up to four storeys from ground level', 'No risk of ladder damage to gutters, fascias, or UPVC', 'Safe for fragile roofs, conservatories, and extensions', 'Ideal for multi-storey properties and difficult access areas', 'Before and after photos on every job'] },
        { heading: 'Why Choose No-Ladder Gutter Cleaning?', content: 'Ladder-based gutter cleaning carries risks — both to your property and to the operative. Our ground-level system eliminates those risks while delivering a more thorough clean than ladder-based methods can achieve.', bullets: ['No ladder marks on your lawn, patios, or borders', 'No risk of ladders damaging UPVC gutters or fascias', 'No weight placed against your roofline', 'Safer for the operative — no working at height', 'More thorough — vacuum system reaches every section', 'All debris collected into the vacuum — no mess on your drive'] },
      ],
      faqs: [
        { question: 'How does gutter cleaning work without ladders?', answer: 'Our industrial-grade vacuum system uses carbon-fibre reach poles and a powerful vacuum to extract debris from gutters while the operative stands safely on the ground. A camera on the pole shows the gutter interior in real time.' },
        { question: 'Is no-ladder gutter cleaning as thorough as ladder cleaning?', answer: 'Yes — our vacuum system is more thorough than ladder-based cleaning. It removes debris including the compacted silt layer at the gutter base that ladder-based methods cannot reach effectively.' },
        { question: 'Can you clean all gutters from ground level?', answer: 'Our system reaches gutters up to four storeys high, covering the vast majority of residential and commercial properties. Very limited access situations may require alternative methods.' },
        { question: 'Is no-ladder gutter cleaning safe for my property?', answer: 'Yes — no-ladder gutter cleaning eliminates the risk of ladder damage to gutters, fascias, render, and window frames. It is the safest method for your property.' },
        { question: 'How much does no-ladder gutter cleaning cost?', answer: 'Prices are the same as our standard gutter cleaning — from £50 for most homes. There is no premium for using the ground-level vacuum system.' },
      ],
    };
  }

  if (slug === 'best-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Best Gutter Cleaning Birmingham',
      heroDescription: 'Looking for the best gutter cleaning in Birmingham? WOW Gutters Ltd is trusted by thousands of Birmingham homeowners. Ground-level vacuum system, before and after photos, fixed pricing. 4.9-star rating. Call 07421 433910.',
      sections: [
        { heading: 'Why WOW Gutters Ltd Is the Best Choice for Gutter Cleaning in Birmingham', content: 'Thousands of Birmingham homeowners have chosen WOW Gutters Ltd for gutter cleaning. We use professional ground-level vacuum equipment, provide photographic evidence of every job, and give fixed pricing before any work starts. Our 4.9-star Google rating reflects the quality and reliability we deliver on every visit.', bullets: ['4.9-star rating from thousands of verified Google reviews', 'Ground-level vacuum system — no ladders on your property', 'Before and after photos on every job without exception', 'Fixed pricing — no surprises on the day', 'Fully insured with comprehensive public liability cover', 'Same-day and next-day appointments available'] },
        { heading: 'What Makes a Gutter Cleaning Company the Best?', content: 'The best gutter cleaning company uses professional equipment, provides clear evidence of work completed, charges transparent prices, and has a track record of satisfied customers. WOW Gutters Ltd meets all these standards and more.', bullets: ['Professional equipment — not a ladder and a trowel', 'Photographic evidence of every job completed', 'Transparent pricing with no hidden charges', 'Verified customer reviews across Google and social media', 'Fully insured with £10 million public liability cover', 'Local Birmingham team with years of experience'] },
      ],
      faqs: [
        { question: 'Who provides the best gutter cleaning in Birmingham?', answer: 'WOW Gutters Ltd is consistently rated as one of Birmingham\'s top gutter cleaning companies with a 4.9-star Google rating from thousands of verified customer reviews.' },
        { question: 'What equipment do the best gutter cleaners use?', answer: 'The best gutter cleaners use professional ground-level vacuum systems that clean gutters thoroughly without ladders against your property.' },
        { question: 'How do I choose a gutter cleaning company in Birmingham?', answer: 'Look for professional equipment, public liability insurance, before and after photo evidence, transparent pricing, and verified customer reviews. WOW Gutters Ltd meets all these criteria.' },
        { question: 'Do you offer a guarantee on gutter cleaning?', answer: 'Yes — all our gutter cleaning work is backed by our quality guarantee. If you are not satisfied, we will return to address any issues.' },
        { question: 'How quickly can Birmingham\'s best gutter cleaners attend?', answer: 'We offer same-day and next-day appointments across Birmingham subject to availability. Call 07421 433910 for the earliest booking.' },
      ],
    };
  }

  if (slug === 'how-much-does-gutter-cleaning-cost-uk') {
    return {
      heroTitle: 'How Much Does Gutter Cleaning Cost UK',
      heroDescription: 'Gutter cleaning costs in the UK typically range from £50 to £150 for standard homes. WOW Gutters Ltd offers transparent pricing with no hidden fees. Free quotes in 60 seconds — call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Costs in the UK', content: 'Gutter cleaning costs vary across the UK depending on property size, accessibility, and your location. WOW Gutters Ltd serves Birmingham and the West Midlands with fixed, transparent pricing.', bullets: ['Typical UK gutter cleaning cost: £50–£150 for standard homes', 'Smaller properties (1–2 bed): £50–£80', 'Medium properties (3 bed): £60–£110', 'Larger properties (4+ bed): £80–£150', 'Commercial properties: quoted individually based on size', 'Additional services — fascia cleaning, roof cleaning, repairs quoted separately'] },
        { heading: 'Factors That Affect Gutter Cleaning Costs', content: 'Understanding what influences the price helps you compare quotes accurately. WOW Gutters Ltd itemises everything in your quote so you know exactly what you are paying for.', bullets: ['Property size and number of storeys', 'Gutter length and number of downpipes', 'Accessibility — ground-level vs high-reach required', 'Level of blockage — light debris vs compacted silt and moss', 'Whether fascia cleaning, roof treatment, or repairs are needed', 'Your location within the UK — London and South East typically cost more'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in the UK?', answer: 'Gutter cleaning in the UK typically costs between £50 and £150 for standard residential properties. Prices vary by region, property size, and accessibility.' },
        { question: 'Why do gutter cleaning costs vary so much?', answer: 'Costs vary because of differences in property size, gutter length, accessibility, the level of blockage, and regional pricing differences across the UK.' },
        { question: 'Is gutter cleaning more expensive in London than Birmingham?', answer: 'Generally yes — gutter cleaning costs in London and the South East tend to be higher due to increased operating costs and property values. Birmingham and the Midlands typically offer more competitive pricing.' },
        { question: 'Does WOW Gutters Ltd provide fixed quotes?', answer: 'Yes — we provide fixed quotes before any work starts. The price we quote is the price you pay, with no hidden charges or surprises on the day.' },
        { question: 'How do I get a gutter cleaning quote?', answer: 'Call 07421 433910 for a free quote in 60 seconds, or use our online quote form at wowgutters.co.uk/quote for an instant price.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-cost-3-bed-semi') {
    return {
      heroTitle: 'Gutter Cleaning Cost 3 Bed Semi',
      heroDescription: 'Gutter cleaning cost for a 3-bed semi-detached house — typically £60–£110 depending on access and condition. WOW Gutters Ltd provides fixed quotes before any work starts. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Cost for a 3-Bed Semi', content: 'A three-bedroom semi-detached house is the most common property type across Birmingham and the West Midlands. Gutter cleaning for a 3-bed semi typically takes 30–60 minutes and includes front and rear gutter runs, plus downpipe testing.', bullets: ['Typical cost: £60–£110 depending on access and debris level', 'Includes both front and rear gutter runs', 'Downpipe testing on all outlets included as standard', 'Silt and moss removal from channel floor', 'Before and after photos provided on completion', 'Fixed price confirmed before any work starts'] },
        { heading: 'What Affects the Cost for a 3-Bed Semi?', content: 'Most 3-bed semis fall within the standard price range, but certain factors can affect the final cost. WOW Gutters Ltd always provides a fixed quote in advance.', bullets: ['Side access — easy access reduces time and cost', 'Height — two-storey semis may need high-reach equipment', 'Debris level — heavy moss or compacted silt takes longer', 'Tree coverage — properties near trees accumulate more debris', 'Whether fascia cleaning, repairs, or roof work is also needed', 'Regular maintenance customers may qualify for reduced rates'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost for a 3-bed semi?', answer: 'Gutter cleaning for a 3-bed semi-detached house typically costs between £60 and £110 depending on access, height, and debris level.' },
        { question: 'How long does gutter cleaning take on a 3-bed semi?', answer: 'Most 3-bed semis take 30–60 minutes for a full gutter clean including downpipe testing.' },
        { question: 'Do you clean both front and rear gutters on a 3-bed semi?', answer: 'Yes — our service includes all gutter runs on your property. Front, rear, and any side sections are all cleared and tested.' },
        { question: 'Can you access rear gutters without going through the house?', answer: 'Where possible we access rear gutters via side gates or alleyways. If side access is limited, we discuss the best approach when quoting.' },
        { question: 'Do you offer discounts for multiple 3-bed semis on the same street?', answer: 'Yes — our neighbourhood discount scheme offers reduced rates when multiple properties on the same street book gutter cleaning together.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-cost-terraced-house') {
    return {
      heroTitle: 'Gutter Cleaning Cost Terraced House',
      heroDescription: 'Gutter cleaning cost for a terraced house in Birmingham — typically £50–£80. WOW Gutters Ltd provides fixed pricing with before and after photos. Call 07421 433910 for a free quote.',
      sections: [
        { heading: 'Gutter Cleaning Cost for Terraced Houses', content: 'Terraced houses typically have shorter gutter runs than semi-detached or detached properties, making them quicker and more affordable to clean. A standard terraced house clean includes the front gutter and any rear sections, plus downpipe testing.', bullets: ['Typical cost: £50–£80 for standard terraced properties', 'Front gutter run fully cleared and tested', 'Rear gutter section if accessible', 'Downpipe testing on all outlets', 'Silt removal from gutter channel floor', 'Before and after photos included'] },
        { heading: 'Terraced House Gutter Cleaning Considerations', content: 'Birmingham has thousands of Victorian and Edwardian terraced houses, particularly in areas like Sparkhill, Handsworth, Aston, Kings Heath, and Bournville. These properties often have cast iron guttering that needs careful handling.', bullets: ['Cast iron gutters — careful handling to avoid damage', 'Shared gutter runs between adjoining properties may need neighbour awareness', 'Limited rear access on some terraces — we discuss options at quoting', 'Moss growth common on north-facing terraces', 'Older bracket systems may need assessment', 'Downpipe inlets often located at party wall boundaries'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost for a terraced house?', answer: 'Gutter cleaning for a terraced house in Birmingham typically costs between £50 and £80 depending on access and debris level.' },
        { question: 'Do you clean gutters on both sides of a terrace?', answer: 'We clean all accessible gutter runs on your property. For mid-terrace properties, the front gutter is the primary run. Rear access depends on your specific property layout.' },
        { question: 'Can you clean gutters on a Birmingham terrace without ladders?', answer: 'Yes — our ground-level vacuum system cleans gutters on terraced properties without ladders against your walls.' },
        { question: 'Do you handle cast iron gutters on older terraces?', answer: 'Yes — we have experience working on Victorian and Edwardian terraces with original cast iron gutter systems across Birmingham.' },
        { question: 'Is a neighbour\'s blocked gutter my responsibility?', answer: 'On shared terraced properties, each owner is generally responsible for their own gutter section. If a shared blockage affects multiple properties, communication between neighbours is advised.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-cost-detached-house') {
    return {
      heroTitle: 'Gutter Cleaning Cost Detached House',
      heroDescription: 'Gutter cleaning cost for a detached house — typically £80–£150 depending on size. WOW Gutters Ltd provides fixed quotes for detached properties across Birmingham and the West Midlands. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Cost for Detached Houses', content: 'Detached houses have more gutter runs — front, rear, and both sides — plus additional downpipes. This means cleaning takes longer than on terraced or semi-detached properties.', bullets: ['Typical cost: £80–£150 depending on property size', 'Four elevations — all gutter runs fully cleared', 'Multiple downpipes tested individually', 'Silt and moss removal from all channel sections', 'Before and after photos on every job', 'Fixed price confirmed before any work starts'] },
        { heading: 'What Affects Gutter Cleaning Cost for Detached Homes?', content: 'Larger detached homes in areas like Edgbaston, Sutton Coldfield, Four Oaks, and Solihull have more complex gutter systems that require more time and equipment.', bullets: ['Property size — larger homes need more cleaning time', 'Number of elevations — four sides vs two for a semi', 'Gutter length — longer runs mean more debris to extract', 'Roof complexity — multiple roof valleys add debris', 'Access — rear and side access affects cleaning approach', 'Additional services — fascia cleaning, repairs, roof work'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost for a detached house?', answer: 'Gutter cleaning for a detached house typically costs between £80 and £150 depending on the size of the property and the complexity of the gutter system.' },
        { question: 'Does a detached house take longer to clean than a semi?', answer: 'Yes — detached houses have four elevations to clean compared to two for a semi-detached, plus additional downpipes that need testing.' },
        { question: 'Do you clean gutters on large detached properties in Sutton Coldfield?', answer: 'Yes — we regularly clean gutters on large detached homes in Sutton Coldfield, Four Oaks, Edgbaston, Solihull, and other Birmingham suburbs with substantial properties.' },
        { question: 'Can you reach gutters on a two-storey detached house?', answer: 'Yes — our ground-level vacuum system reaches gutters up to four storeys high, covering all standard detached homes without ladders.' },
        { question: 'Do you offer discounts for regular detached house gutter cleaning?', answer: 'Yes — annual maintenance customers receive discounted rates on all visits. Regular cleaning also prevents the heavy debris buildup that increases costs.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-cost-bungalow') {
    return {
      heroTitle: 'Gutter Cleaning Cost Bungalow',
      heroDescription: 'Gutter cleaning cost for a bungalow — typically £50–£80. WOW Gutters Ltd provides fixed quotes with before and after photos. Low-level gutters are quick and easy to clean. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Cost for Bungalows', content: 'Bungalows have low-level gutters that are quick and straightforward to clean with our ground-level system. Most bungalow gutter cleans are completed in 20–40 minutes, keeping costs low.', bullets: ['Typical cost: £50–£80 for standard bungalows', 'Low-level gutters — quick and easy access', 'Front and rear gutter runs cleared', 'Downpipe testing included', 'Silt removal from channel floor', 'Before and after photos provided'] },
        { heading: 'Why Clean Bungalow Gutters Regularly?', content: 'Bungalows are just as vulnerable to blocked gutter damage as larger properties. Low-level gutters are also more visible, so any overflow staining is immediately noticeable on your walls.', bullets: ['Low-level overflow stains are highly visible on bungalow walls', 'Ground-level gutters can be accessed easily for thorough cleaning', 'Bungalow roofs often have moss growth that sheds into gutters', 'Regular cleaning prevents damp in loft spaces', 'Quick turnaround — most bungalow cleans take under 40 minutes', 'Fixed pricing with no minimum call-out charge'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost for a bungalow?', answer: 'Gutter cleaning for a bungalow typically costs between £50 and £80 depending on the length of guttering and the level of debris.' },
        { question: 'How long does gutter cleaning take on a bungalow?', answer: 'Most bungalow gutter cleans take 20–40 minutes due to the low-level, easily accessible gutters.' },
        { question: 'Can you clean bungalow gutters without ladders?', answer: 'Yes — our ground-level vacuum system cleans bungalow gutters easily without ladders against your walls.' },
        { question: 'Do bungalows need gutter cleaning as often as larger homes?', answer: 'Bungalow gutters collect debris at the same rate as larger homes. Annual cleaning is recommended, with more frequent visits if you have overhanging trees.' },
        { question: 'Can you clean gutters on a bungalow with a conservatory?', answer: 'Yes — we regularly clean gutters on bungalows with conservatories, including the narrow gutter channel between the house and conservatory roof.' },
      ],
    };
  }

  if (slug === 'average-price-for-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Average Price for Gutter Cleaning Birmingham',
      heroDescription: 'Average gutter cleaning price in Birmingham — typically £50–£120 for standard homes. WOW Gutters Ltd provides fixed, transparent pricing with no hidden fees. Free quote — call 07421 433910.',
      sections: [
        { heading: 'Average Gutter Cleaning Prices in Birmingham', content: 'Gutter cleaning prices in Birmingham are competitive compared to other UK cities. The average price reflects property size, access requirements, and the level of service provided.', bullets: ['Average price: £50–£120 for standard Birmingham homes', 'Small terrace or bungalow: £50–£80', '3-bed semi-detached: £60–£110', '4-bed detached: £80–£150', 'Large or complex properties: quoted individually', 'All prices include downpipe testing and before and after photos'] },
        { heading: 'Why Gutter Cleaning Prices Vary in Birmingham', content: 'Several factors influence the final price. WOW Gutters Ltd always provides a clear, fixed quote so you know exactly what you will pay.', bullets: ['Property type — terrace, semi, detached, or bungalow', 'Access — ground-level vs high-reach guttering', 'Debris level — light leaf debris vs compacted silt and moss', 'Number of downpipes requiring testing', 'Additional services booked at the same time', 'Frequency of cleaning — regular customers pay less per visit'] },
      ],
      faqs: [
        { question: 'What is the average gutter cleaning price in Birmingham?', answer: 'The average gutter cleaning price in Birmingham is £50–£120 for standard residential properties. Prices vary by property type and accessibility.' },
        { question: 'Is gutter cleaning more expensive in Birmingham than surrounding areas?', answer: 'Prices across Birmingham and the West Midlands are generally consistent. City centre properties with access restrictions may cost slightly more.' },
        { question: 'Do Birmingham gutter cleaners charge by the hour?', answer: 'Most professional gutter cleaners charge a fixed price per job rather than an hourly rate. WOW Gutters Ltd provides fixed quotes before any work starts.' },
        { question: 'Why are some gutter cleaning quotes in Birmingham very cheap?', answer: 'Very cheap quotes often come from operators using ladders and basic tools without insurance or proper equipment. Professional cleaning with vacuum systems and full insurance costs more but delivers better results.' },
        { question: 'How do I get an accurate gutter cleaning quote in Birmingham?', answer: 'Call 07421 433910 for a free quote in 60 seconds. We will ask about your property type and confirm a fixed price before booking.' },
      ],
    };
  }

  if (slug === 'how-much-to-unblock-a-downpipe') {
    return {
      heroTitle: 'How Much to Unblock a Downpipe',
      heroDescription: 'Downpipe unblocking costs typically range from £40 to £80. WOW Gutters Ltd clears blockages using professional equipment and tests flow after every clearance. Free quote — call 07421 433910.',
      sections: [
        { heading: 'Downpipe Unblocking Costs', content: 'Downpipe unblocking costs depend on the severity of the blockage, the pipe material, and how easy it is to access the blocked section. WOW Gutters Ltd provides a fixed quote before any work begins.', bullets: ['Typical cost: £40–£80 for standard downpipe blockages', 'Simple blockages near the top of the pipe — from £40', 'Deep blockages requiring rodding — from £60', 'Blockages at ground level or in underground drains — quoted individually', 'Flow testing included after every clearance', 'Combined gutter and downpipe clearance — better value when booked together'] },
        { heading: 'What Affects Downpipe Unblocking Costs?', content: 'Several factors determine how much it costs to unblock a downpipe. WOW Gutters Ltd always provides a transparent quote upfront.', bullets: ['Blockage location — easier access costs less', 'Blockage severity — compacted debris takes longer to clear', 'Pipe material — cast iron needs more care than UPVC', 'Number of blockages — multiple blocked downpipes cost more', 'Access equipment needed — ground level vs height', 'Whether the downpipe is cracked or damaged by the blockage'] },
      ],
      faqs: [
        { question: 'How much does it cost to unblock a downpipe?', answer: 'Downpipe unblocking typically costs between £40 and £80 depending on the location and severity of the blockage.' },
        { question: 'Can I unblock a downpipe myself?', answer: 'Simple blockages near the top of the downpipe can sometimes be cleared by hand. Deeper blockages usually need professional equipment. Incorrect DIY attempts can damage the pipe.' },
        { question: 'How do you unblock a downpipe?', answer: 'WOW Gutters Ltd uses vacuum suction for accessible blockages and professional rodding equipment for deeper obstructions. Every clearance is followed by a flow test.' },
        { question: 'Will a blocked downpipe cause damage?', answer: 'Yes — a blocked downpipe forces water back into the gutters, causing overflow that saturates walls, damages fascias, and can lead to internal damp and mould.' },
        { question: 'Is downpipe unblocking included in gutter cleaning?', answer: 'Yes — WOW Gutters Ltd includes downpipe clearing and flow testing as standard in every gutter cleaning visit.' },
      ],
    };
  }

  if (slug === 'roof-moss-removal-cost-uk') {
    return {
      heroTitle: 'Roof Moss Removal Cost UK',
      heroDescription: 'Roof moss removal costs in the UK typically range from £150 to £500 depending on roof size, moss coverage, and accessibility. WOW Gutters Ltd provides fixed quotes. Call 07421 433910.',
      sections: [
        { heading: 'Roof Moss Removal Costs in the UK', content: 'Roof moss removal costs vary depending on your roof size, the thickness of moss coverage, the type of roof tiles, and how accessible your roof is. WOW Gutters Ltd serves Birmingham and the West Midlands with competitive, transparent pricing.', bullets: ['Typical UK cost: £150–£500 for standard homes', 'Small terrace or bungalow: £150–£250', 'Semi-detached house: £200–£350', 'Detached house: £250–£500', 'Biocide treatment included — slows regrowth for 12–24 months', 'Gutter clearance after roof treatment included'] },
        { heading: 'Factors Affecting Roof Moss Removal Costs', content: 'Several factors determine the final cost of roof moss removal. Understanding them helps you evaluate quotes accurately.', bullets: ['Roof size — larger roofs need more time and treatment', 'Moss thickness — heavy, established moss takes longer to treat', 'Tile type — concrete, clay, and slate each need different treatment', 'Accessibility — how easily your roof can be reached safely', 'Property height — two-storey roofs cost more than bungalows', 'Additional treatments — algae and lichen removal may add cost'] },
      ],
      faqs: [
        { question: 'How much does roof moss removal cost in the UK?', answer: 'Roof moss removal in the UK typically costs between £150 and £500 depending on roof size, moss coverage, and accessibility.' },
        { question: 'Is roof moss removal worth the cost?', answer: 'Yes — moss damages roof tiles over time, lifts tiles, and blocks gutters. Professional removal protects your roof and prevents costly repairs.' },
        { question: 'Does roof moss removal include gutter cleaning?', answer: 'WOW Gutters Ltd clears gutters after roof moss treatment to remove any fallen debris, but this is separate from a full gutter clean.' },
        { question: 'How long does roof moss removal last?', answer: 'Our biocide treatment slows regrowth significantly. Most roofs stay clear for 12–24 months before retreatment is needed.' },
        { question: 'Do you guarantee your roof moss removal work?', answer: 'Yes — we stand behind our work. If any issues arise after treatment, we will address them promptly.' },
      ],
    };
  }

  if (slug === 'fascia-cleaning-cost') {
    return {
      heroTitle: 'Fascia Cleaning Cost',
      heroDescription: 'Fascia cleaning cost — typically from £60 for standard homes. WOW Gutters Ltd restores UPVC fascias to a bright white finish using hot purified water. Free quote — call 07421 433910.',
      sections: [
        { heading: 'Fascia Cleaning Costs', content: 'Fascia cleaning costs depend on the length of your fascias, how dirty they are, and how accessible your roofline is. WOW Gutters Ltd provides fixed quotes with no hidden charges.', bullets: ['Typical cost: from £60 for standard homes', 'Small terrace or bungalow: from £60', 'Semi-detached house: from £80', 'Detached house: from £100', 'Large or complex properties: quoted individually', 'Combined gutter and fascia cleaning — better value when booked together'] },
        { heading: 'What Affects the Cost of Fascia Cleaning?', content: 'Several factors influence fascia cleaning costs. WOW Gutters Ltd provides a clear, fixed quote before any work starts.', bullets: ['Fascia length — longer fascias take more time to clean', 'Dirt level — light algae vs heavy mould and oxidation', 'Accessibility — ground floor vs two-storey fascias', 'UPVC condition — stained or weathered UPVC may need more cleaning', 'Whether soffits also need cleaning', 'Whether gutter cleaning is booked at the same time'] },
      ],
      faqs: [
        { question: 'How much does fascia cleaning cost?', answer: 'Fascia cleaning typically costs from £60 for standard homes. Larger and more complex properties may cost more.' },
        { question: 'What does fascia cleaning include?', answer: 'Fascia cleaning includes hot purified water cleaning of all accessible fascia boards. Soffits can be added for an additional cost.' },
        { question: 'How long does fascia cleaning take?', answer: 'Most homes take 30–60 minutes for fascia cleaning. The time depends on the length of fascia and how dirty it is.' },
        { question: 'Can fascia cleaning be combined with gutter cleaning?', answer: 'Yes — booking both together saves time and money. Many customers choose this combination for a complete roofline clean.' },
        { question: 'Do you clean soffits as well as fascias?', answer: 'Yes — soffit cleaning can be added to any fascia cleaning visit. Ask for a combined quote when you call.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-prices') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Prices',
      heroDescription: 'Commercial gutter cleaning prices vary by property size, gutter length, and access requirements. WOW Gutters Ltd provides free site surveys and fixed quotes. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Prices', content: 'Commercial gutter cleaning is priced differently from domestic work because of the larger scale, more complex access requirements, and the need for thorough documentation.', bullets: ['Prices based on gutter length, height, and access', 'Small commercial (shops, offices): quoted individually', 'Medium commercial (warehouses, industrial units): quoted individually', 'Large commercial (factories, retail parks): site survey required', 'Planned maintenance contracts: discounted rates for regular visits', 'All prices include photographic documentation and written summary'] },
        { heading: 'What Affects Commercial Gutter Cleaning Prices?', content: 'Several factors determine the cost of commercial gutter cleaning. WOW Gutters Ltd provides a detailed quote based on your specific property.', bullets: ['Total gutter length across all elevations', 'Height of gutters from ground level', 'Number of downpipes requiring testing', 'Access requirements — some sites need specialist access equipment', 'Frequency of cleaning — regular contracts cost less per visit', 'Documentation requirements — compliance reports may add time'] },
      ],
      faqs: [
        { question: 'How much does commercial gutter cleaning cost?', answer: 'Commercial gutter cleaning costs vary significantly by property size. WOW Gutters Ltd provides free site surveys and fixed quotes for all commercial work.' },
        { question: 'Do you offer planned maintenance for commercial properties?', answer: 'Yes — we offer scheduled gutter cleaning programmes for commercial properties with regular visits at discounted rates.' },
        { question: 'Do you provide compliance documentation?', answer: 'Yes — every commercial clean includes before and after photographs and a written summary suitable for health and safety records.' },
        { question: 'Can you clean gutters on commercial premises during business hours?', answer: 'Yes — we can work during business hours or schedule out-of-hours visits to minimise disruption. We discuss your preference when quoting.' },
        { question: 'Are you insured for commercial gutter cleaning?', answer: 'Yes — WOW Gutters Ltd holds £10 million public liability insurance covering all commercial gutter cleaning work across the West Midlands.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-price-per-metre') {
    return {
      heroTitle: 'Gutter Cleaning Price Per Metre',
      heroDescription: 'Gutter cleaning price per metre — typically £3–£8 per metre depending on access and debris level. WOW Gutters Ltd provides fixed quotes. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Price Per Metre', content: 'Some gutter cleaning companies quote by the metre, particularly for larger properties and commercial work. WOW Gutters Ltd typically provides fixed quotes per property, which is simpler and gives you a guaranteed price.', bullets: ['Typical price per metre: £3–£8 depending on access', 'Ground-level accessible gutters: £3–£5 per metre', 'High-level gutters needing specialist equipment: £5–£8 per metre', 'Most domestic properties: fixed price quoted per job', 'Most cost-effective: book by property rather than per metre', 'Free quotes with fixed pricing — no hidden charges'] },
        { heading: 'Is Price Per Metre or Fixed Price Better?', content: 'Most homeowners prefer fixed pricing because it gives certainty. Price per metre can vary depending on how the gutter length is measured. WOW Gutters Ltd uses fixed pricing for most residential work.', bullets: ['Fixed pricing gives certainty — you know the cost upfront', 'Price per metre can be ambiguous — what is included?', 'Fixed quotes include all gutters, downpipes, and photos', 'Per metre quotes may exclude downpipe testing or silt removal', 'Ask any gutter cleaner for a fixed price before agreeing', 'WOW Gutters Ltd provides fixed quotes on all domestic work'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost per metre?', answer: 'Gutter cleaning costs approximately £3–£8 per metre depending on access requirements and debris level.' },
        { question: 'Is it cheaper to pay per metre or per job?', answer: 'For most homes, a fixed per-job price offers better value and certainty. Per-metre pricing can work well for commercial properties with very long gutter runs.' },
        { question: 'Does the price per metre include downpipe cleaning?', answer: 'Not always — check what is included in a per-metre quote. WOW Gutters Ltd includes downpipe testing and clearance in all fixed-price quotes.' },
        { question: 'How do you measure gutter length?', answer: 'Gutter length is measured along the gutter channel, not the ground perimeter. A professional quote should specify how the length is calculated.' },
        { question: 'What is the average gutter length for a UK home?', answer: 'A typical 3-bed semi-detached house has 15–25 metres of guttering. A small terrace may have 8–12 metres. A large detached house can have 30–50 metres.' },
      ],
    };
  }

  if (slug === 'cheap-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Cheap Gutter Cleaning Birmingham',
      heroDescription: 'Affordable gutter cleaning in Birmingham from £50. WOW Gutters Ltd offers professional service at competitive prices — no hidden fees, no corners cut, no ladders. Call 07421 433910.',
      sections: [
        { heading: 'Cheap Gutter Cleaning in Birmingham — Professional and Affordable', content: 'Cheap gutter cleaning does not have to mean poor quality. WOW Gutters Ltd offers competitive pricing across Birmingham while maintaining professional standards — ground-level vacuum equipment, before and after photos, and full insurance.', bullets: ['From £50 for standard terrace properties', 'Competitive fixed pricing across all Birmingham areas', 'Professional equipment — not cheap ladder-based methods', 'Before and after photos on every job', 'Fully insured — quality at an affordable price', 'No hidden charges — the quoted price is the price you pay'] },
        { heading: 'How to Find Cheap Gutter Cleaning That Is Still Professional', content: 'The cheapest gutter cleaner is not always the best value. Look for professional equipment, proper insurance, and photographic evidence of work completed.', bullets: ['Cheapest quotes often use ladders — risk of damage to your property', 'Professional vacuum cleaning costs slightly more but delivers better results', 'Look for before and after photos as proof of quality', 'Check the company has public liability insurance', 'Read reviews to confirm quality matches the price', 'WOW Gutters Ltd balances competitive pricing with professional standards'] },
      ],
      faqs: [
        { question: 'How can I get cheap gutter cleaning in Birmingham?', answer: 'WOW Gutters Ltd offers gutter cleaning from £50 for standard properties. Call 07421 433910 for a fixed quote with no hidden charges.' },
        { question: 'Is cheap gutter cleaning still good quality?', answer: 'Yes — WOW Gutters Ltd offers competitive prices without compromising on equipment, insurance, or service quality. We use the same professional vacuum system and provide before and after photos on every job.' },
        { question: 'Why are some gutter cleaners much cheaper than others?', answer: 'Very cheap cleaners often use ladders instead of professional vacuum systems, may not have insurance, and typically do not provide photographic evidence of their work.' },
        { question: 'Does cheap gutter cleaning include downpipe testing?', answer: 'WOW Gutters Ltd includes downpipe testing and clearance in every gutter cleaning visit, regardless of the price.' },
        { question: 'Can I get a discount for multiple properties?', answer: 'Yes — our neighbourhood discount scheme offers reduced rates when multiple properties on the same street book together. We also offer OAP discounts.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-quote-online') {
    return {
      heroTitle: 'Gutter Cleaning Quote Online',
      heroDescription: 'Get a gutter cleaning quote online in 60 seconds. WOW Gutters Ltd provides instant fixed quotes for Birmingham and the West Midlands. No obligation to proceed. Get your free quote now.',
      sections: [
        { heading: 'Get a Gutter Cleaning Quote Online', content: 'Getting a gutter cleaning quote online from WOW Gutters Ltd is quick and simple. Tell us about your property, and we will confirm a fixed price with no hidden charges and no obligation to proceed.', bullets: ['Free online quotes in 60 seconds', 'Fixed pricing — no hidden charges or surprises', 'No obligation to proceed with the booking', 'All Birmingham and West Midlands postcodes covered', 'Same-day and next-day appointments if you choose to book', 'Professional gutter cleaning with before and after photos'] },
        { heading: 'Why Get a Gutter Cleaning Quote Online?', content: 'An online quote saves time and gives you the information you need to make a decision without a phone call or site visit.', bullets: ['Quick and convenient — get a quote from your phone or computer', 'Transparent pricing — see the price before you commit', 'Compare with other providers easily', 'No sales pressure — we provide the quote and you decide', 'Include additional services — fascia cleaning, roof treatment, repairs', 'Book online once you are happy with the quote'] },
      ],
      faqs: [
        { question: 'How do I get a gutter cleaning quote online?', answer: 'Visit wowgutters.co.uk/quote and enter your property details. You will receive a fixed price quote in 60 seconds with no obligation to proceed.' },
        { question: 'Is an online gutter cleaning quote accurate?', answer: 'Our online quotes are based on your property type and provide an accurate fixed price. If your property has unusual access requirements, we may provide a custom quote after a quick chat.' },
        { question: 'Do I have to book after getting an online quote?', answer: 'No — there is absolutely no obligation. We provide the quote so you can make an informed decision. You can book later, choose another provider, or not proceed at all.' },
        { question: 'Can I get a quote for fascia cleaning or roof work online?', answer: 'Yes — our online quote form covers gutter cleaning, fascia cleaning, roof cleaning, and other services. Select the services you need and we will quote accordingly.' },
        { question: 'How quickly can I book after getting an online quote?', answer: 'You can book immediately after receiving your online quote, or call us later when you are ready. Same-day and next-day appointments are available subject to availability.' },
      ],
    };
  }

  if (slug === 'how-much-is-gutter-vacuum-cleaning') {
    return {
      heroTitle: 'How Much Is Gutter Vacuum Cleaning',
      heroDescription: 'Gutter vacuum cleaning costs — typically £50–£120 for standard homes. WOW Gutters Ltd uses professional ground-level vacuum systems for a thorough clean without ladders. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Vacuum Cleaning Costs', content: 'Gutter vacuum cleaning uses a high-powered vacuum system to extract debris from gutters while the operator stands safely on the ground. This method is more thorough than ladder-based cleaning and eliminates the risk of ladder damage to your property.', bullets: ['Typical cost: £50–£120 for standard homes', 'More thorough than ladder-based cleaning — removes compacted silt', 'No ladders against your walls, fascias, or roofline', 'Reaches gutters up to four storeys high', 'Before and after photos via camera inspection', 'Fixed pricing — the same as our standard gutter cleaning'] },
        { heading: 'Why Vacuum Gutter Cleaning Costs What It Does', content: 'Vacuum gutter cleaning equipment is more expensive than ladders and basic tools. Professional systems cost thousands of pounds and require trained operators. This investment delivers a better, safer result.', bullets: ['Professional vacuum systems cost significantly more than ladders', 'Trained operators ensure thorough and safe cleaning', 'No damage to your gutters, fascias, or roof from ladder contact', 'All debris collected into the vacuum — no mess on your drive', 'Camera inspection provides clear evidence of work done', 'Vacuum cleaning is the professional standard for gutter maintenance'] },
      ],
      faqs: [
        { question: 'How much does gutter vacuum cleaning cost?', answer: 'Gutter vacuum cleaning costs the same as our standard gutter cleaning — £50–£120 for most homes. There is no premium for using the vacuum system over ladder-based methods.' },
        { question: 'Is vacuum gutter cleaning better than ladder cleaning?', answer: 'Yes — vacuum gutter cleaning is more thorough, safer for your property, and eliminates the risk of ladder damage. It also removes compacted silt that ladder cleaning often misses.' },
        { question: 'Can vacuum gutter cleaning handle heavy blockages?', answer: 'Yes — our industrial-grade vacuum system is powerful enough to extract compacted debris, wet leaves, moss, and silt.' },
        { question: 'Does vacuum gutter cleaning work on all property types?', answer: 'Our system works on terraced houses, semis, detached homes, bungalows, and commercial buildings up to four storeys high.' },
        { question: 'Is gutter vacuum cleaning worth the extra cost vs DIY?', answer: 'Professional vacuum cleaning is far more thorough than DIY methods, removes debris that DIY cannot reach, and includes downpipe testing and before and after photos.' },
      ],
    };
  }

  if (slug === 'annual-gutter-cleaning-plan-cost') {
    return {
      heroTitle: 'Annual Gutter Cleaning Plan Cost',
      heroDescription: 'Annual gutter cleaning plan costs — typically £80–£200 for two visits per year. WOW Gutters Ltd offers scheduled maintenance plans with discounted rates. Call 07421 433910.',
      sections: [
        { heading: 'Annual Gutter Cleaning Plan Costs', content: 'An annual gutter cleaning plan covers your property for a full year with scheduled visits timed to your property\'s needs. Most plans include two visits — one in summer for inspection and deep clean, and one in autumn for leaf fall clearance. Regular plan customers receive discounted rates compared to one-off bookings.', bullets: ['Two visits per year: typically £80–£200 total', 'Summer visit — deep clean and dry-condition inspection', 'Autumn visit — leaf fall clearance before winter', 'Priority scheduling — plan customers book first', 'Discounted rates — cheaper than booking separately', 'Maintenance reminders — we remind you when each visit is due'] },
        { heading: 'Benefits of an Annual Gutter Cleaning Plan', content: 'An annual plan ensures your gutters are maintained consistently, preventing the buildup that leads to blockages, overflow, and property damage.', bullets: ['Consistent maintenance prevents expensive emergency callouts', 'Your gutters stay clear year-round', 'Summer inspection catches problems before autumn rainfall', 'Autumn clearance removes leaf fall before it compacts', 'Discounted rates save you money compared to one-off visits', 'Peace of mind knowing your gutters are professionally maintained'] },
      ],
      faqs: [
        { question: 'How much does an annual gutter cleaning plan cost?', answer: 'An annual gutter cleaning plan typically costs between £80 and £200 for two visits per year, depending on your property size and type.' },
        { question: 'What is included in an annual gutter cleaning plan?', answer: 'Each visit includes full debris clearance, downpipe testing, silt removal, and before and after photos. The summer visit includes a thorough inspection of joints, brackets, and fascia boards.' },
        { question: 'Can I pay monthly for my gutter cleaning plan?', answer: 'We offer flexible payment options. Contact us to discuss a payment schedule that works for you.' },
        { question: 'What happens if my gutters need cleaning between scheduled visits?', answer: 'Plan customers receive priority scheduling and discounted rates for additional visits between scheduled appointments.' },
        { question: 'How do I sign up for an annual gutter cleaning plan?', answer: 'Call 07421 433910 to discuss your property and arrange your first visit. We will schedule the full year\'s appointments and send you reminders.' },
      ],
    };
  }

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

  if (slug.includes('downpipe-unblock') || slug.includes('downpipe-unblocking')) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional downpipe unblocking services across Birmingham and the West Midlands. WOW Gutters Ltd clears blocked downpipes using industrial vacuum and rodding equipment. Free flow test after every clearance. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Downpipe Unblocking Service',
          content: 'A blocked downpipe can cause water to back up into your gutters and overflow during heavy rain. WOW Gutters Ltd clears blockages using professional equipment, then tests the flow to confirm the pipe is running freely from gutter to drain.',
          bullets: [
            'Blocked downpipe diagnosis with camera inspection',
            'Vacuum and rodding clearance for stubborn blockages',
            'Flow testing on every outlet after clearance',
            'Leaf guards and mesh outlets to prevent future blockages',
            'Combined gutter and downpipe clearance in one visit',
            'Free quotes with no obligation to proceed',
          ],
        },
        {
          heading: 'What Causes a Downpipe to Block?',
          content: 'Downpipes block for several reasons. Understanding the cause helps prevent recurrence. WOW Gutters Ltd identifies the root cause during every clearance visit.',
          bullets: [
            'Debris washing from gutters into the downpipe inlet',
            'Compacted leaves and moss forming a plug at bends',
            'Bird nesting material and droppings accumulating',
            'Silt and mineral deposits building up over years',
            'Sycamore seed cases compacting in narrow sections',
            'Frozen blockages in winter that expand and crack pipes',
          ],
        },
      ],
    };
  }

  if (slug.includes('moss-removal') && (slug.includes('birmingham') || slug.includes('west-midlands'))) {
    return {
      heroTitle: titleCase(keyword),
      heroDescription: `Professional moss removal in Birmingham and the West Midlands. WOW Gutters Ltd treats moss, algae, and lichen on roofs, patios, paths, and walls. Biocide treatment slows regrowth. From £150. Call 07421 433910 for a free quote.`,
      sections: [
        {
          heading: 'Moss Removal Services in Birmingham',
          content: 'Moss grows throughout the year on Birmingham roofs, paving, and walls due to the region\'s consistent rainfall and clay-rich soils. WOW Gutters Ltd treats moss with professional-grade biocides that kill it at the root and slow regrowth significantly.',
          bullets: [
            'Roof moss removal — soft wash treatment safe for all tiles',
            'Patio and path moss treatment — pressure washing available',
            'Wall and fence moss removal — gentle surface cleaning',
            'Biocide application to prevent rapid regrowth',
            'Gutter clearance after moss treatment',
            'Free quotes and honest advice on moss treatment options',
          ],
        },
        {
          heading: 'Why Remove Moss From Your Property?',
          content: 'Moss is more than a cosmetic issue. It holds moisture against surfaces, causes damage over time, and blocks gutters with debris. Professional removal protects your property.',
          bullets: [
            'Roof moss lifts tiles and holds moisture against the surface',
            'Moss on paths and patios creates slippery, unsafe surfaces',
            'Moss debris washes into gutters and causes blockages',
            'Algae and moss growth makes properties look neglected',
            'Regular treatment extends the life of roof tiles and paving',
            'Before and after photos on every moss removal job',
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
    faqs: data.faqs,
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
