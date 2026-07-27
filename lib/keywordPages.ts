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
  'why is my gutter overflowing',
  'water pouring over gutter when raining',
  'blocked downpipe symptoms',
  'gutter leaking at joint what to do',
  'damp patch on wall blocked gutter',
  'plants growing in gutter removal',
  'moss falling from roof into gutter',
  'birds nesting in gutter removal uk',
  'wasp nest in gutter who to call',
  'gutter overflowing behind fascia',
  'why does my gutter drip after rain',
  'sagging gutter causes',
  'gutter smells bad blocked',
  'green stains on wall from gutter',
  'water damage from blocked gutters insurance',
  'how often should gutters be cleaned UK',
  'best time of year to clean gutters',
  'how to tell if gutters need cleaning',
  'what happens if you never clean your gutters',
  'how do professionals clean gutters',
  'gutter vacuum vs ladder cleaning',
  'can you clean gutters from the ground',
  'how long does gutter cleaning take',
  'do I need scaffolding to clean gutters',
  'is gutter cleaning worth it',
  'gutter cleaning before winter checklist',
  'autumn leaves gutter maintenance',
  'how to prevent moss on roof',
  'does roof cleaning damage tiles',
  'soft washing vs pressure washing roof',
  'how often to remove moss from roof',
  'gutter guards worth it UK',
  'leaf guard installation pros and cons',
  'how to maintain gutters between cleans',
  'landlord responsibility gutter cleaning UK',
  'gutter cleaning 3 storey house',
  'gutter cleaning 4 storey building',
  'gutter cleaning flats and apartments',
  'gutter cleaning terraced house birmingham',
  'gutter cleaning victorian house',
  'gutter cleaning new build estate',
  'gutter cleaning above conservatory',
  'gutter cleaning dormer bungalow',
  'gutter cleaning HMO landlord',
  'block of flats gutter maintenance',
  'emergency gutter cleaning birmingham',
  'same day gutter unblocking',
  'gutter overflowing during storm help',
  'urgent downpipe unblocking near me',
  'weekend gutter cleaning birmingham',
  'gutter cleaning before selling house',
  'pre-winter gutter clear birmingham',
  'gutter cleaning after storm damage',
  'christmas gutter cleaning availability',
  'gutter frozen overflow ice winter',
  'fascia soffit cleaning near me',
  'conservatory roof cleaning birmingham',
  'solar panel bird proofing gutter',
  'driveway and gutter cleaning package',
  'render cleaning birmingham',
  'upvc cleaning birmingham',
  'gutter brightening service',
  'moss treatment biocide roof',
  'roof cleaning without pressure washer',
  'gutter deep clean service',
  'school gutter cleaning West Midlands',
  'office building gutter cleaning Birmingham',
  'warehouse gutter cleaning',
  'industrial gutter cleaning West Midlands',
  'retail park gutter maintenance',
  'church gutter cleaning Birmingham',
  'care home gutter cleaning',
  'property management gutter cleaning contracts',
  'landlord gutter cleaning service Birmingham',
  'commercial roof cleaning West Midlands',
  'gutter cleaning Sutton Coldfield Four Oaks',
  'gutter cleaning Marston Green',
  'gutter cleaning Pershore',
  'gutter cleaning Stourport-on-Severn',
  'gutter cleaning Bewdley',
  'gutter cleaning Alvechurch',
  'gutter cleaning Nuneaton',
  'gutter cleaning Kenilworth',
  'roof moss removal Sutton Coldfield',
  'gutter vacuum cleaning',
  'roof moss removal',
  'fascia soffit cleaning',
  'downpipe unblocking',
  'commercial gutter cleaning',
  'emergency gutter cleaning',
  'home guard plan',
  'commercial gutter cleaning Birmingham',
  'office gutter cleaning',
  'industrial gutter cleaning',
  'school gutter cleaning',
  'hospital gutter cleaning',
  'church gutter cleaning',
  'HMO gutter cleaning',
  'apartment block gutter cleaning',
  'block management gutter cleaning',
  'high rise gutter cleaning',
  'multi storey gutter cleaning',
  'gutter cleaning contract',
  'planned gutter maintenance',
  'gutter maintenance programme',
  'scheduled gutter cleaning',
  'annual gutter cleaning contract',
  'commercial downpipe cleaning',
  'commercial fascia and soffit cleaning',
  'industrial estate gutter cleaning',
  'business park gutter cleaning',
  'B2B gutter cleaning',
  'gutter cleaning tender',
  'gutter cleaning for letting agents',
  'managed property gutter cleaning',
  'commercial gutter cleaning services',
  'commercial property gutter maintenance',
  'gutter cleaning for facilities managers',
  'gutter cleaning portfolio properties',
  'gutter vacuum cleaning commercial',
  'gutter clearance commercial properties',
  'gutter cleaning quote commercial',
  'gutter cleaning for property developers',
  'new build gutter cleaning snagging',
  'commercial gutter cleaning cost',
  'commercial gutter cleaning price per property',
  'gutter cleaning for multiple sites',
  'approved gutter cleaning contractor',
  'gutter cleaning framework contractor',
  'gutter cleaning insurance compliance',
  'gutter cleaning duty of care landlord',
  'section 11 gutter cleaning obligations',
  'how often should commercial gutters be cleaned',
  'how much does commercial gutter cleaning cost UK',
  'what happens if gutters aren\'t cleaned on commercial property',
  'commercial gutter cleaning near me',
  'gutter cleaning for schools Birmingham',
  'gutter cleaning for offices Birmingham',
  'gutter cleaning company for landlords Birmingham',
  'best commercial gutter cleaning company West Midlands',
  'gutter cleaning contractor for property management company',
  'who is responsible for gutter cleaning commercial tenancy',
  'gutter cleaning risk assessment method statement RAMS',
  'gutter cleaning without scaffolding commercial',
  'gutter vacuum system for tall buildings',
  'ground based gutter cleaning commercial 4 storey',
  'commercial gutter cleaning before and after',
  'commercial gutter cleaning health and safety',
  'commercial gutter cleaning insurance claim prevention',
  'do landlords have to clean gutters UK',
  'gutter maintenance obligations for landlords UK',
  'gutter cleaning service level agreement',
  'gutter cleaning for retail units Birmingham',
  'gutter cleaning for industrial units Wolverhampton',
  'gutter cleaning quote for multiple properties',
  'annual gutter maintenance plan for landlords',
  'gutter cleaning contract renewal reminder',
  'commercial gutter cleaning Solihull',
  'commercial gutter cleaning Sutton Coldfield',
  'commercial gutter cleaning Dudley',
  'commercial gutter cleaning Walsall',
  'commercial gutter cleaning Wolverhampton',
  'commercial gutter cleaning West Bromwich',
  'commercial gutter clearing Acocks Green',
  'commercial gutter clearing Aldridge',
  'commercial gutter clearing Allens Cross',
  'commercial gutter clearing Allesley',
  'commercial gutter clearing Alum Rock',
  'commercial gutter clearing Amblecote',
  'commercial gutter clearing Aston',
  'commercial gutter clearing Balsall Common',
  'commercial gutter clearing Balsall Heath',
  'commercial gutter clearing Bartley Green',
  'commercial gutter clearing Billesley',
  'commercial gutter clearing Bilston',
  'commercial gutter clearing Binley',
  'gutter cleaning facilities management company Birmingham',
  'gutter cleaning managing agent Birmingham',
  'gutter cleaning contractor CHAS accredited',
  'gutter cleaning contractor SafeContractor approved',
  'gutter cleaning contractor for schools procurement',
  'gutter cleaning NHS trust property',
  'gutter cleaning council owned buildings',
  'gutter cleaning housing association properties',
  'gutter overflow damage commercial property',
  'water damage commercial building blocked gutters',
  'gutter cleaning invoice for business',
  'gutter cleaning company that invoices monthly',
  'recurring gutter cleaning service business',
  'gutter cleaning company with public liability insurance',
  'gutter cleaning contractor Birmingham with references',
  'commercial gutter cleaning case study Birmingham',
  'retail gutter cleaning',
  'landlord gutter cleaning',
  'letting agent gutter cleaning',
  'property management gutter cleaning',
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

  if (slug === 'why-is-my-gutter-overflowing') {
    return {
      heroTitle: 'Why Is My Gutter Overflowing',
      heroDescription: 'Common causes of overflowing gutters in Birmingham — blocked channels, restricted downpipes, incorrect fall angles, and joint failures. WOW Gutters Ltd diagnoses and fixes the root cause. Call 07421 433910.',
      sections: [
        { heading: 'Why Your Gutter Is Overflowing', content: 'An overflowing gutter is usually caused by a blockage in the channel or a restriction in the downpipe, but other causes include sagging sections that create low points, joint sealant failure that leaks water behind the fascia, or simply a gutter that has not been cleaned recently enough. WOW Gutters Ltd identifies the exact cause during a thorough inspection.', bullets: ['Blocked gutter channel — leaves, moss, and debris preventing water flow', 'Restricted downpipe inlet — debris compacted at the outlet', 'Sagging gutter section — bracket failure creating a low point', 'Joint seal failure — water leaking through rather than flowing to the downpipe', 'Oversized roof relative to gutter capacity — heavy rain overwhelms the system', 'Wrong fall angle — gutter does not slope enough toward the downpipe'] },
        { heading: 'Is an Overflowing Gutter an Emergency?', content: 'An overflowing gutter is not always an emergency, but it should be addressed promptly. Every overflow event deposits water against your walls, saturates brickwork, and increases the risk of internal damp.', bullets: ['Overflow water runs down external walls and saturates brickwork', 'Repeated overflow causes damp patches in upstairs rooms', 'Fascia boards rot when repeatedly soaked by overflow water', 'Foundations can be affected by water pooling at the base of walls', 'Mould and mildew thrive on persistently damp surfaces', 'Early attention prevents costly structural repairs'] },
      ],
      faqs: [
        { question: 'Why is my gutter overflowing even though it looks clean?', answer: 'The gutter channel may look clear from the ground while the downpipe inlet is blocked below the surface. A camera inspection reveals whether the blockage is in the channel or the downpipe.' },
        { question: 'Can a gutter overflow in heavy rain even if it is clean?', answer: 'Yes — during exceptionally heavy rain, the gutter capacity may be exceeded even if the system is clear. However, persistent overflow in normal rain indicates a blockage or drainage problem.' },
        { question: 'How do I stop my gutter from overflowing?', answer: 'Start with a professional gutter clean and downpipe test. If overflow continues, the issue may be a sagging section, incorrect fall, or insufficient gutter capacity.' },
        { question: 'Can an overflowing gutter cause damp inside my home?', answer: 'Yes — overflow water saturates external walls and travels through to internal walls and ceilings. Repeated overflow is a common cause of damp in upstairs rooms.' },
        { question: 'How much does it cost to fix an overflowing gutter?', answer: 'The cost depends on the cause. A simple blockage clearance costs from £50. Repairs to sagging sections or joint failures cost from £30. WOW Gutters Ltd provides a fixed quote after inspection.' },
      ],
    };
  }

  if (slug === 'water-pouring-over-gutter-when-raining') {
    return {
      heroTitle: 'Water Pouring Over Gutter When Raining',
      heroDescription: 'Water pouring over the gutter edge during rain means the system is blocked or damaged. WOW Gutters Ltd provides fast diagnosis and repair across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'What Causes Water to Pour Over Gutters?', content: 'When water cascades over the gutter edge instead of flowing to the downpipe, a blockage is the most likely cause — but not always in the gutter channel itself. The downpipe inlet is often the real problem, compacted with debris that prevents water from entering the pipe while the gutter channel above fills and overflows.', bullets: ['Downpipe inlet blocked — water cannot enter the pipe', 'Gutter channel blocked — debris preventing flow along the run', 'Sagging section — water pools at a low point and overflows', 'Joint gap — water escapes through a separated joint', 'Overwhelmed system — rainfall exceeds gutter capacity', 'Nesting material — bird or rodent nests blocking outlets'] },
        { heading: 'Is Water Pouring Over Gutters Serious?', content: 'Yes — every time water pours over your gutter edge, it runs down your walls and saturates the brickwork, mortar, and eventually the internal wall surface.', bullets: ['External wall staining — green and black streaks below the gutter', 'Damp internal walls — water penetrates through saturated brickwork', 'Fascia board rot — timber softens from repeated moisture exposure', 'Foundation problems — water pooling at the base of walls over time', 'Mould growth — damp conditions encourage mould in upstairs rooms', 'Insurance claims — water damage from neglected gutters may not be covered'] },
      ],
      faqs: [
        { question: 'Why does water pour over my gutters in heavy rain?', answer: 'In heavy rain, a partially blocked gutter or downpipe cannot handle the volume of water. The water backs up and overflows at the lowest point of the gutter run.' },
        { question: 'Can I fix water pouring over gutters myself?', answer: 'If the blockage is visible at the downpipe inlet, you may be able to clear it by hand. Deeper blockages or structural issues need professional equipment and expertise.' },
        { question: 'How quickly can you stop gutters from overflowing?', answer: 'We offer same-day and next-day appointments for overflowing gutters. Call 07421 433910 for urgent assistance.' },
        { question: 'Will overflowing gutters damage my fascia boards?', answer: 'Yes — repeated overflow soaks fascia boards, causing timber to soften, rot, and eventually fail. Regular gutter maintenance prevents this damage.' },
        { question: 'How much does it cost to fix gutters that overflow in rain?', answer: 'Clearance of a blocked gutter or downpipe starts from £50. Repairs to damaged sections cost from £30. WOW Gutters Ltd provides a fixed quote before work starts.' },
      ],
    };
  }

  if (slug === 'blocked-downpipe-symptoms') {
    return {
      heroTitle: 'Blocked Downpipe Symptoms',
      heroDescription: 'Symptoms of a blocked downpipe — water overflowing from gutters, gurgling sounds, water escaping from joints, and pooling at ground level. WOW Gutters Ltd clears blockages fast. Call 07421 433910.',
      sections: [
        { heading: 'Common Blocked Downpipe Symptoms', content: 'A blocked downpipe does not always announce itself dramatically. Sometimes the symptoms are subtle — a gutter that overflows only during heavy rain, a downpipe that gurgles after a shower, or water that dribbles from a mid-pipe joint rather than flowing cleanly to the drain.', bullets: ['Gutter overflow during rain — water spills over the edge instead of draining', 'Water escaping from downpipe joints — joints leak under pressure from backup', 'Gurgling sounds from the downpipe — air trapped behind a blockage', 'Slow drainage — water trickles from the outlet long after rain stops', 'Pooling water at the base — the drain is not receiving water', 'Visible debris at the top of the downpipe — leaves or moss visible at the inlet'] },
        { heading: 'Why Blocked Downpipe Symptoms Should Not Be Ignored', content: 'A blocked downpipe forces water back into your gutter system, which then overflows against your walls. The damage caused by a blocked downpipe is often attributed to other causes.', bullets: ['Overflow water saturates brickwork and causes internal damp', 'Repeated pressure on downpipe joints can cause them to separate', 'Trapped water in the downpipe can freeze and crack the pipe in winter', 'Debris buildup in the downpipe attracts nesting insects and rodents', 'Ground-level pooling can undermine foundations over time', 'Early clearance is cheaper than repairing water damage or replacing pipes'] },
      ],
      faqs: [
        { question: 'What are the first signs of a blocked downpipe?', answer: 'The earliest sign is gutter overflow during rain while the downpipe outlet shows little or no flow. Gurgling sounds from the pipe and water dripping from joints are also early indicators.' },
        { question: 'How do I check if my downpipe is blocked?', answer: 'Watch your gutters during rainfall. If water spills over the edge but little comes out of the downpipe outlet, a blockage is likely. You can also listen for gurgling sounds near the pipe.' },
        { question: 'Can a blocked downpipe cause damp inside my home?', answer: 'Yes — water backing up from a blocked downpipe causes gutters to overflow against walls. Over time, this saturates brickwork and causes damp in upstairs rooms and loft spaces.' },
        { question: 'How much does it cost to clear a blocked downpipe?', answer: 'Downpipe clearance typically costs between £40 and £80 depending on the severity and location of the blockage. WOW Gutters Ltd provides a fixed quote before work starts.' },
        { question: 'How do professionals clear blocked downpipes?', answer: 'WOW Gutters Ltd uses vacuum suction for accessible blockages and professional rodding equipment for deeper obstructions. Every clearance is followed by a flow test to confirm free drainage.' },
      ],
    };
  }

  if (slug === 'gutter-leaking-at-joint-what-to-do') {
    return {
      heroTitle: 'Gutter Leaking at Joint — What to Do',
      heroDescription: 'A gutter leaking at the joint needs resealing or replacement. WOW Gutters Ltd fixes leaking gutter joints across Birmingham — sealant, rubber seals, or full joint replacement. Call 07421 433910.',
      sections: [
        { heading: 'What to Do When a Gutter Joint Leaks', content: 'A leaking gutter joint allows water to escape from the gutter channel and run down the fascia board behind it. If left unaddressed, the repeated moisture softens the timber fascia, causes staining on walls, and can lead to internal damp. The fix depends on what type of joint is failing.', bullets: ['Rubber seal failure — the gasket inside the joint has perished and needs replacing', 'Sealant failure — the mastic bead between sections has cracked or detached', 'Joint separation — the two sections have pulled apart from thermal movement or bracket shift', 'Corner joint leak — the corner piece has cracked or the seal has failed', 'Stop end leak — the cap at the end of a run has come loose or the seal has failed', 'Overflow joint — the outlet where the gutter meets the downpipe is not sealed correctly'] },
        { heading: 'Can I Fix a Leaking Gutter Joint Myself?', content: 'Some leaking joints can be fixed with DIY sealant, but the repair will not last as long as a professional job. Professional resealing uses the correct sealant for the gutter material and is applied to clean, dry surfaces.', bullets: ['DIY sealant works as a temporary fix but may fail within months', 'Professional resealing uses gutter-specific sealant rated for outdoor use', 'The joint must be completely dry for sealant to bond properly', 'If the rubber seal has perished, the joint piece needs replacement', 'A professional repair includes testing the joint with a water flow check', 'WOW Gutters Ltd can repair most leaking joints during the same visit as a gutter clean'] },
      ],
      faqs: [
        { question: 'Why is my gutter leaking at the joint?', answer: 'Gutter joints leak because the rubber seal has perished, the sealant has cracked from weather exposure, or the joint has physically separated due to thermal expansion, bracket movement, or debris weight.' },
        { question: 'Can a leaking gutter joint be resealed?', answer: 'Yes — most leaking joints can be resealed. The joint is cleaned, dried, and fresh outdoor-grade sealant is applied. If the rubber gasket has failed, the joint piece may need replacement.' },
        { question: 'How much does it cost to fix a leaking gutter joint?', answer: 'Joint resealing typically costs from £30 per joint. Joint replacement costs more if the piece is damaged. WOW Gutters Ltd provides a fixed quote after inspection.' },
        { question: 'Will a leaking gutter joint cause damp?', answer: 'Yes — water escaping from a leaking joint runs down the fascia board behind the gutter. Over time, this saturates the fascia timber and can travel through to internal walls.' },
        { question: 'How long does gutter joint sealant last?', answer: 'Professional-grade gutter sealant typically lasts 5–10 years depending on weather exposure and the gutter material. UPVC joints usually last longer than cast iron ones.' },
      ],
    };
  }

  if (slug === 'damp-patch-on-wall-blocked-gutter') {
    return {
      heroTitle: 'Damp Patch on Wall — Blocked Gutter?',
      heroDescription: 'A damp patch on an upstairs wall or ceiling is often caused by a blocked gutter. WOW Gutters Ltd diagnoses gutter-related damp and clears the blockage. Call 07421 433910.',
      sections: [
        { heading: 'Could a Blocked Gutter Be Causing That Damp Patch?', content: 'A damp patch on an upstairs wall or ceiling — particularly near an external wall or under the eaves — is frequently caused by overflow from a blocked gutter. Water that cannot flow through the gutter spills over the edge, runs down the external wall, and saturates the brickwork until it penetrates through to the interior.', bullets: ['Overflow from blocked gutters saturates brickwork over weeks and months', 'Damp patches often appear near ceilings, above windows, or in corners of upstairs rooms', 'The damp may worsen during or immediately after rainfall', 'Mould and mildew often accompany gutter-related damp patches', 'Tide marks on internal walls indicate repeated water penetration', 'Fixing the gutter blockage often resolves the damp without internal work'] },
        { heading: 'How to Tell if Damp Is Caused by Blocked Gutters', content: 'Not all damp is caused by gutters, but there are tell-tale signs that point to a gutter problem rather than rising damp or condensation.', bullets: ['Damp appears on upper floors — ground-floor damp is less likely to be gutter-related', 'Damp worsens after rainfall — check the timing of damp patches against rain', 'External staining visible — green or black streaks below the gutter line', 'Damp is localised to one area — not generalised across the room', 'The damp patch is under or near the gutter line', 'No other obvious cause — no leaking pipes, no roof tile damage visible'] },
      ],
      faqs: [
        { question: 'Can blocked gutters cause damp patches on walls?', answer: 'Yes — blocked gutters are one of the most common causes of damp on upper-floor walls. Overflow water saturates external brickwork and travels through to internal surfaces.' },
        { question: 'How do I know if my damp is from gutters or rising damp?', answer: 'Gutter-related damp appears on upper floors and worsens after rain. Rising damp affects ground floors and is caused by moisture drawn up from the ground. The pattern and location of the damp tell you which it is.' },
        { question: 'Will clearing my gutters fix the damp patch?', answer: 'In many cases, yes — once the gutter is cleared and water flows freely again, the external wall can dry out and the internal damp will resolve. However, existing mould may need separate treatment.' },
        { question: 'How much does gutter clearance cost if it is causing damp?', answer: 'Gutter cleaning costs from £50 for standard homes. Compared to the cost of damp treatment and redecoration, it is the most cost-effective first step.' },
        { question: 'Do I need a damp specialist or a gutter cleaner first?', answer: 'Start with a gutter clean and inspection. If the damp persists after the gutters are cleared and the wall has had time to dry, a damp specialist may be needed. Most gutter-related damp resolves once the blockage is cleared.' },
      ],
    };
  }

  if (slug === 'plants-growing-in-gutter-removal') {
    return {
      heroTitle: 'Plants Growing in Gutter — Removal',
      heroDescription: 'Plants growing in your gutter indicate a long-standing blockage with decomposed debris. WOW Gutters Ltd removes weeds, roots, and all organic matter from your gutter channels. Call 07421 433910.',
      sections: [
        { heading: 'Plants Growing in Gutters — Why It Happens', content: 'When leaves and organic debris decompose in a gutter channel over months or years, they form a nutrient-rich growing medium. Wind-blown seeds land in this material and germinate, establishing root systems that can spread through the gutter channel and even into the fascia board behind. This is a sign that the gutter has not been cleaned for an extended period — typically two or more seasons.', bullets: ['Decomposed debris creates soil-like material that supports plant growth', 'Wind-blown seeds from trees, weeds, and grasses germinate in the gutter', 'Root systems can spread along the gutter channel and into joints', 'Plants hold moisture against the gutter surface, accelerating corrosion', 'Root growth can crack or dislodge UPVC gutter sections', 'Heavy plant growth adds significant weight to the gutter brackets'] },
        { heading: 'Professional Plant Removal From Gutters', content: 'Removing plants from gutters requires more than pulling visible growth. The root system and the organic growing medium must be fully extracted to prevent regrowth and restore full gutter capacity.', bullets: ['Above-surface growth removed first to access the gutter channel', 'Root systems extracted using professional vacuum equipment', 'Decomposed debris and growing medium fully cleared', 'Gutter channel inspected for damage caused by roots', 'Joints and seals checked for root penetration', 'Downpipe flow tested after clearance is complete'] },
      ],
      faqs: [
        { question: 'How do plants grow in gutters?', answer: 'Seeds carried by wind or birds land in accumulated debris in uncleaned gutters. The decomposing organic matter provides nutrients and moisture for germination, and roots establish in the debris layer.' },
        { question: 'Can plants growing in gutters cause damage?', answer: 'Yes — roots can crack UPVC gutters from the inside, dislodge joint seals, and add significant weight that strains brackets. Plant roots can also penetrate behind the fascia board.' },
        { question: 'How much does it cost to remove plants from gutters?', answer: 'Removing established plant growth from gutters costs from £60 depending on the extent of the growth and any damage caused. WOW Gutters Ltd provides a fixed quote before work starts.' },
        { question: 'Will plants grow back after removal?', answer: 'Not if the debris and growing medium are fully removed. WOW Gutters Ltd extracts all organic material so there is nothing left for seeds to germinate in.' },
        { question: 'Can plants damage the fascia board behind the gutter?', answer: 'Yes — roots can find their way behind the gutter and penetrate the fascia board, causing rot. This is why professional removal of the full root system is important.' },
      ],
    };
  }

  if (slug === 'moss-falling-from-roof-into-gutter') {
    return {
      heroTitle: 'Moss Falling From Roof Into Gutter',
      heroDescription: 'Moss falling from your roof into the gutter causes blockages and reduces gutter capacity. WOW Gutters Ltd offers professional moss removal and gutter clearance. Call 07421 433910.',
      sections: [
        { heading: 'Why Moss Falls From Your Roof Into the Gutter', content: 'Moss growing on roof tiles naturally sheds fragments into the gutter below. Each rainfall dislodges more moss, and over time this builds up as a dense, sponge-like layer in the gutter channel that holds water and restricts flow. Properties with north-facing roofs, mature tree cover, or clay roof tiles are most affected.', bullets: ['Moss on roof tiles sheds fragments into gutters with every rainfall', 'Accumulated moss forms a dense, water-holding mat in the gutter', 'Moss reduces gutter capacity by up to 50% even without other debris', 'Wet moss is heavy — a moss-filled gutter can weigh several times more than a clear one', 'Moss holds moisture against the gutter surface, accelerating corrosion in metal systems', 'Moss debris at downpipe inlets creates stubborn blockages'] },
        { heading: 'What to Do About Moss Falling Into Gutters', content: 'Preventing moss from entering your gutters requires treating the moss on the roof surface. Regular gutter cleaning removes the moss that has already fallen and prevents buildup.', bullets: ['Roof moss treatment kills moss on the roof surface so it stops shedding', 'Professional roof cleaning removes existing moss before it enters gutters', 'Regular gutter cleaning clears moss that has already accumulated', 'Biocide treatment slows moss regrowth for 12–24 months', 'Annual gutter maintenance prevents moss buildup from becoming a blockage', 'Combining roof treatment and gutter cleaning is the most effective approach'] },
      ],
      faqs: [
        { question: 'Is moss falling from the roof into gutters a problem?', answer: 'Yes — moss accumulates in gutters and forms a dense, water-holding layer that reduces capacity, adds weight, and creates stubborn blockages at downpipe inlets.' },
        { question: 'How do I stop moss from falling into my gutters?', answer: 'Treating the moss on your roof with a biocide kills it at the root so it stops shedding. Professional roof cleaning with soft wash methods removes existing moss safely.' },
        { question: 'Can moss in gutters cause damp?', answer: 'Yes — moss holds water in the gutter and restricts flow. When the gutter cannot drain properly, water overflows against walls and causes damp.' },
        { question: 'How much does roof moss treatment cost?', answer: 'Roof moss treatment starts from £150 depending on roof size and moss coverage. Combined gutter and roof treatment offers better value than separate visits.' },
        { question: 'How often should gutters be cleaned if moss is falling from the roof?', answer: 'Properties with significant roof moss benefit from gutter cleaning at least twice a year — once after spring moss growth and once after autumn leaf fall.' },
      ],
    };
  }

  if (slug === 'birds-nesting-in-gutter-removal-uk') {
    return {
      heroTitle: 'Birds Nesting in Gutter — Removal UK',
      heroDescription: 'Birds nesting in gutters cause blockages and damage. WOW Gutters Ltd removes nesting material safely and legally across Birmingham and the West Midlands. Call 07421 433910.',
      sections: [
        { heading: 'Birds Nesting in Gutters — What to Do', content: 'Birds nesting in gutters is common across Birmingham and the West Midlands, particularly with house sparrows, starlings, pigeons, and blackbirds. Nesting material — twigs, grass, feathers, and droppings — accumulates at downpipe inlets and blocks water flow. In the UK, all wild birds are protected under the Wildlife and Countryside Act 1981, which means active nests with eggs or chicks cannot be disturbed.', bullets: ['Nesting material blocks downpipe inlets and causes gutter overflow', 'Bird droppings in gutters are acidic and can corrode metal systems', 'Nests attract insects and rodents to the roofline', 'Feathers and debris can block multiple downpipes across the system', 'Active nests are protected by UK law — removal must wait until the nest is vacated', 'Inactive nests should be removed promptly to prevent re-nesting'] },
        { heading: 'Legal Requirements for Bird Nest Removal in UK', content: 'Under UK law, it is illegal to damage or destroy an active bird nest. WOW Gutters Ltd follows all legal requirements when removing nesting material from gutters.', bullets: ['Active nests (with eggs or chicks) cannot be removed until the birds have left', 'The nesting season runs roughly from March to August', 'Inactive nests can be removed at any time', 'WOW Gutters Ltd can advise whether a nest is active or inactive', 'Installing gutter mesh or guards prevents birds from re-nesting', 'Regular gutter cleaning removes debris before nesting material accumulates'] },
      ],
      faqs: [
        { question: 'Can I remove a bird nest from my gutter?', answer: 'Only if the nest is inactive — meaning there are no eggs or chicks present. Active nests are protected by UK law and cannot be disturbed. WOW Gutters Ltd can advise on the status of any nest.' },
        { question: 'How do I stop birds from nesting in my gutters?', answer: 'Gutter mesh guards and bird spikes prevent birds from accessing the gutter channel. Regular cleaning also removes debris that birds use as nesting material.' },
        { question: 'How much does bird nest removal from gutters cost?', answer: 'Removal of inactive nesting material costs from £50 combined with a gutter clean. Gutter guard installation to prevent re-nesting costs extra.' },
        { question: 'What birds commonly nest in gutters in Birmingham?', answer: 'House sparrows, starlings, pigeons, and blackbirds are the most common birds found nesting in Birmingham gutters. Sparrows and starlings often nest in colonies.' },
        { question: 'Will bird nests damage my gutters?', answer: 'Yes — nesting material blocks water flow, droppings are acidic and can corrode metal gutters, and the added weight can strain brackets. Regular removal of inactive nests prevents this damage.' },
      ],
    };
  }

  if (slug === 'wasp-nest-in-gutter-who-to-call') {
    return {
      heroTitle: 'Wasp Nest in Gutter — Who to Call',
      heroDescription: 'Found a wasp nest in your gutter? WOW Gutters Ltd can help. We arrange safe wasp nest treatment before clearing the gutter. Professional, safe, and insured. Call 07421 433910.',
      sections: [
        { heading: 'Wasp Nest in Gutter — What to Do', content: 'Wasps frequently build nests in the sheltered space under gutter sections, inside downpipe joints, or behind fascia boards near the gutter line. A wasp nest in your gutter is a safety concern because any attempt to clean the gutter will disturb the nest and provoke the wasps. Professional treatment is essential before the nest can be removed.', bullets: ['Do not attempt to remove a wasp nest yourself — wasps attack when threatened', 'Do not block the nest entrance — wasps will find another way into your home', 'Professional pest treatment kills the nest safely', 'After treatment, the nest can be removed and the gutter cleaned', 'WOW Gutters Ltd can arrange treatment before the gutter clean', 'Prevent re-nesting by keeping gutters clean and fitting mesh guards'] },
        { heading: 'Who to Call for a Wasp Nest in Your Gutter', content: 'For a wasp nest in your gutter, you need two services — pest control to treat the nest, and a gutter cleaner to remove the nest and clean the system afterward. WOW Gutters Ltd can coordinate both.', bullets: ['Pest control service treats the nest with insecticide', 'Allow 24–48 hours after treatment before the nest is safe to approach', 'WOW Gutters Ltd then removes the nest debris and cleans the gutter', 'The gutter is inspected for damage caused by the nest', 'Downpipes are tested to confirm clear flow after removal', 'Mesh guards can be fitted to prevent wasps from returning'] },
      ],
      faqs: [
        { question: 'Who do I call for a wasp nest in my gutter?', answer: 'Call WOW Gutters Ltd on 07421 433910. We can arrange professional wasp nest treatment followed by gutter clearance once the nest is safe to remove.' },
        { question: 'Can I clean my gutters if there is a wasp nest?', answer: 'No — disturbing a wasp nest is dangerous. The nest must be treated by a pest control professional first. Wait 24–48 hours after treatment before approaching the area.' },
        { question: 'How much does wasp nest treatment cost?', answer: 'Professional wasp nest treatment typically costs £40–£70. Combined with gutter cleaning, the total cost depends on your property size.' },
        { question: 'Do wasp nests damage gutters?', answer: 'Yes — wasp nests add weight, block water flow, and the nest material can trap moisture against the gutter surface, accelerating corrosion.' },
        { question: 'How do I prevent wasps from nesting in my gutters?', answer: 'Keep gutters clean and consider fitting gutter mesh guards. Wasps prefer sheltered, undisturbed locations — regular gutter maintenance makes your gutters less attractive for nesting.' },
      ],
    };
  }

  if (slug === 'gutter-overflowing-behind-fascia') {
    return {
      heroTitle: 'Gutter Overflowing Behind Fascia',
      heroDescription: 'Gutter overflowing behind the fascia indicates a joint failure or a gutter that has pulled away from the fascia board. WOW Gutters Ltd diagnoses and fixes the problem. Call 07421 433910.',
      sections: [
        { heading: 'What Does Gutter Overflow Behind Fascia Mean?', content: 'Water running down behind the fascia board — rather than over the front of the gutter — means the back of the gutter channel has lifted or separated from the fascia, or a joint has failed at the rear of the gutter. This is more serious than front overflow because the water runs directly behind the fascia board, soaking the timber from the back where it cannot dry out.', bullets: ['Gutter has pulled away from the fascia — brackets have loosened or failed', 'Joint seal failure at the rear of the gutter — water escapes behind the channel', 'Fascia board is being soaked from behind — the timber stays wet for long periods', 'Damp may not be visible externally until the decay is advanced', 'Mould and rot develop behind the fascia without obvious external signs', 'This issue requires prompt professional repair to prevent structural damage'] },
        { heading: 'How to Fix a Gutter Overflowing Behind the Fascia', content: 'The fix depends on the root cause. Simple bracket reseating may solve the problem, or the fascia board itself may need replacement if rot has already set in.', bullets: ['Loose brackets are reseated and fixed securely to dry timber', 'Failed joint seals are cleaned and resealed with outdoor-grade sealant', 'If the fascia board is rotten, the damaged section must be replaced', 'New brackets are fixed to sound timber with appropriate fixings', 'The gutter run is checked for correct fall angle after repair', 'Water flow is tested after all repairs to confirm the gutter drains properly'] },
      ],
      faqs: [
        { question: 'What causes a gutter to overflow behind the fascia?', answer: 'The most common cause is bracket failure — the fixings holding the gutter to the fascia have loosened or the fascia timber has rotted. Joint seal failure at the rear of the gutter can also cause water to escape behind.' },
        { question: 'Is gutter overflow behind fascia an emergency?', answer: 'It should be treated urgently — water running behind the fascia board soaks the timber in a location that cannot dry out, accelerating rot that can spread to roof timbers.' },
        { question: 'Can fascia board rot be repaired?', answer: 'If caught early, the rotted section can be cut out and replaced. If the rot has spread extensively, full fascia replacement may be needed. Early attention saves money.' },
        { question: 'How much does it cost to fix a gutter overflowing behind fascia?', answer: 'Bracket reseating costs from £30. Fascia board replacement costs from £100 per section. WOW Gutters Ltd provides a fixed quote after inspection.' },
        { question: 'How do I know if my gutter is overflowing behind the fascia?', answer: 'Look for water staining on the fascia board surface (often missed because it is hidden), damp patches on ceilings near the eaves, or green algae growth on the fascia indicating persistent moisture.' },
      ],
    };
  }

  if (slug === 'why-does-my-gutter-drip-after-rain') {
    return {
      heroTitle: 'Why Does My Gutter Drip After Rain',
      heroDescription: 'A gutter that drips after rain has stopped usually has trapped water, a leaking joint, or incorrect fall angle. WOW Gutters Ltd diagnoses and fixes post-rain gutter drips. Call 07421 433910.',
      sections: [
        { heading: 'Why Your Gutter Drips Long After Rain Stops', content: 'A gutter that continues to drip hours or even days after rainfall has stopped indicates water trapped somewhere in the system. This could be standing water in a sagging section, water held in a moss or debris mat, a slow leak at a joint, or condensation inside a metal downpipe. Each cause requires a different fix.', bullets: ['Trapped water in a sagging section — the gutter does not drain completely after rain', 'Moss or debris holding water — a dense mat of organic material acts like a sponge', 'Leaking joint — water seeps out slowly from a failed seal long after rain stops', 'Condensation in metal downpipes — moisture forms inside and drips out over hours', 'Blocked downpipe — water drains from the gutter slowly, extending the drip period', 'Incorrect fall angle — the gutter does not slope enough to drain fully'] },
        { heading: 'How to Stop a Gutter Dripping After Rain', content: 'Stopping a gutter drip requires identifying which of the possible causes applies to your system. WOW Gutters Ltd can diagnose the issue during a single visit.', bullets: ['Clear all debris including moss and silt to remove water-holding material', 'Check the gutter fall angle — adjust brackets if sections are sagging', 'Reseal any leaking joints with outdoor-grade gutter sealant', 'Test downpipe flow to confirm no restriction is slowing drainage', 'Insulate metal downpipes if condensation is the cause', 'Consider gutter replacement if the fall angle cannot be corrected with bracket adjustment'] },
      ],
      faqs: [
        { question: 'Is it normal for gutters to drip after rain?', answer: 'A few drips immediately after rain stops is normal as residual water drains. Dripping that continues for hours or days indicates a problem — trapped water, a leak, or incorrect fall angle.' },
        { question: 'Why does my gutter drip from the joint after rain?', answer: 'A leaking joint allows water to escape slowly after the main flow has stopped. The joint needs resealing or the rubber gasket needs replacing.' },
        { question: 'Can a sagging gutter cause dripping after rain?', answer: 'Yes — a sagging section creates a low point where water pools. This trapped water either evaporates (taking days in cool weather) or leaks slowly through joints.' },
        { question: 'How much does it cost to fix a gutter that drips after rain?', answer: 'The cost depends on the cause. Debris clearance from £50. Joint resealing from £30. Bracket adjustment from £30. WOW Gutters Ltd quotes a fixed price after diagnosis.' },
        { question: 'Should I worry about a gutter that drips after rain?', answer: 'A constant drip indicates trapped water or a leak, both of which can cause damage over time. It is worth having it checked during your next gutter service.' },
      ],
    };
  }

  if (slug === 'sagging-gutter-causes') {
    return {
      heroTitle: 'Sagging Gutter — Causes',
      heroDescription: 'Sagging gutters are caused by bracket failure, debris weight, fascia board rot, or incorrect installation. WOW Gutters Ltd fixes sagging gutters across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'What Causes a Gutter to Sag?', content: 'A sagging gutter is not just unsightly — it creates low points where water pools, debris accumulates, and the entire section is at risk of detachment. Understanding the cause is essential for a lasting repair.', bullets: ['Bracket failure — the clip or screw holding the gutter has corroded or pulled out', 'Fascia board rot — the timber the bracket is fixed to has softened and cannot hold', 'Debris weight — a gutter filled with wet leaves, moss, and silt weighs many times its empty weight', 'Thermal movement — UPVC gutters expand and contract with temperature changes, loosening fixings over time', 'Incorrect installation — brackets spaced too far apart or not aligned to the correct fall angle', 'Impact damage — a ladder, branch, or falling object has bent the bracket or shifted the gutter'] },
        { heading: 'Can a Sagging Gutter Be Fixed?', content: 'Most sagging gutters can be repaired without full replacement. The damaged or failed brackets are replaced, the fascia board is checked for soundness, and the gutter is reseated at the correct angle.', bullets: ['Failed brackets are replaced with new, corrosion-resistant fixings', 'If the fascia board is soft, the rotted section is replaced before new brackets are fitted', 'The gutter section is lifted back into position and the fall angle is checked', 'All joints along the affected run are inspected for seal integrity after adjustment', 'The gutter is tested with water to confirm the correct fall and drainage', 'Debris is cleared from all sections before the repair is completed'] },
      ],
      faqs: [
        { question: 'What causes a gutter to sag?', answer: 'The most common cause is bracket failure — either the bracket has corroded, the screw has pulled out, or the fascia board the bracket is fixed to has rotted. Debris weight and thermal movement also contribute.' },
        { question: 'Can a sagging gutter be repaired without replacement?', answer: 'Yes — if the gutter section itself is undamaged, replacing the brackets and reseating the gutter usually solves the problem. If the fascia board is rotten, that section needs replacing first.' },
        { question: 'How much does it cost to fix a sagging gutter?', answer: 'Bracket replacement costs from £30 per bracket. Fascia board repair costs from £100 per section. WOW Gutters Ltd provides a fixed quote after inspection.' },
        { question: 'Will a sagging gutter cause damp?', answer: 'Yes — a sagging section creates a low point where water pools permanently. This water either leaks through joints or overflows against the wall, causing damp over time.' },
        { question: 'How do I know if my gutter is sagging?', answer: 'Look along the gutter line from ground level — a sagging section dips below the line of the rest of the run. Standing water visible in the gutter after rain also indicates a sag.' },
      ],
    };
  }

  if (slug === 'gutter-smells-bad-blocked') {
    return {
      heroTitle: 'Gutter Smells Bad — Blocked?',
      heroDescription: 'A bad smell from your gutters usually means trapped water, rotting organic debris, or a dead animal. WOW Gutters Ltd clears the blockage and eliminates the odour. Call 07421 433910.',
      sections: [
        { heading: 'Why Do My Gutters Smell Bad?', content: 'Bad smells from gutters are caused by organic matter decomposing in standing water. Leaves, moss, and silt trapped in a sagging section or blocked downpipe create the perfect environment for anaerobic bacteria — the same bacteria that produce the rotten egg smell in drains. In some cases, a dead bird or rodent in the gutter or downpipe causes the odour.', bullets: ['Rotting leaves and moss in standing water produce hydrogen sulphide (rotten egg smell)', 'Trapped water in a sagging section or blocked downpipe provides the damp anaerobic conditions', 'Dead animals — birds, mice, or squirrels — can die in gutters or downpipes', 'Bird droppings accumulated in nesting material produce an ammonia-like odour', 'Mould and mildew growing in persistently damp gutter debris produce a musty smell', 'The smell is strongest in warm weather when bacterial activity increases'] },
        { heading: 'How to Get Rid of Gutter Smells', content: 'Eliminating gutter smells requires removing the source — the decomposing organic material and any standing water. Simply masking the smell with cleaning products will not solve the problem.', bullets: ['Full gutter clearance removes all decaying organic matter', 'Standing water must be drained by correcting the sag or clearing the blockage', 'The gutter channel should be flushed with water after debris removal', 'If a dead animal is suspected, the downpipe may need inspection and clearance', 'Gutter mesh or leaf guards prevent future debris buildup', 'Regular gutter maintenance prevents the conditions that cause odours'] },
      ],
      faqs: [
        { question: 'Why do my gutters smell like rotten eggs?', answer: 'A rotten egg smell is caused by hydrogen sulphide gas produced by anaerobic bacteria breaking down organic matter in standing water trapped in a blocked or sagging gutter.' },
        { question: 'Can a blocked gutter cause bad smells inside my home?', answer: 'Yes — the smell from rotting gutter debris can enter your home through windows, vents, and the eaves. In severe cases, the smell indicates water damage that is affecting internal timbers.' },
        { question: 'How do I get rid of gutter smell?', answer: 'The only effective solution is to clear all debris, drain any standing water, and flush the gutter channel. Deodorising products provide temporary relief but do not solve the underlying cause.' },
        { question: 'Could the smell from my gutters be a dead animal?', answer: 'Yes — a dead bird, mouse, or squirrel in the gutter or downpipe produces a strong, distinctive odour. If the smell is particularly bad and persists after clearing visible debris, the downpipe should be inspected.' },
        { question: 'How much does it cost to clear a smelly gutter?', answer: 'Gutter cleaning to remove the source of the smell costs from £50 for standard homes. If a dead animal needs removal from a downpipe, additional costs may apply.' },
      ],
    };
  }

  if (slug === 'green-stains-on-wall-from-gutter') {
    return {
      heroTitle: 'Green Stains on Wall From Gutter',
      heroDescription: 'Green or black stains on your walls below the gutter line are caused by overflow water depositing algae and organic matter. WOW Gutters Ltd stops the overflow and cleans the staining. Call 07421 433910.',
      sections: [
        { heading: 'Why Green Stains Appear Below Gutters', content: 'Green, black, or brown vertical streaks below the gutter line are a clear sign of gutter overflow. When water spills from a blocked gutter, it carries algae spores, moss fragments, and organic matter from inside the channel down the wall. These deposits stain the brickwork, render, or stone, and the persistent moisture encourages algae growth directly on the wall surface.', bullets: ['Overflow water carries algae and organic matter from inside the gutter', 'Repeated overflow creates permanent green or black vertical streaks', 'Algae grows on the persistently damp wall surface below the overflow point', 'Staining is most visible on light-coloured render and brickwork', 'Mortar joints absorb the staining and are difficult to clean fully', 'Left untreated, staining becomes deeply embedded and hard to remove'] },
        { heading: 'How to Remove Green Stains and Stop Them Returning', content: 'Removing existing stains and preventing new ones requires two steps — fixing the gutter blockage that causes the overflow, and cleaning the staining from the wall surface.', bullets: ['Clear the gutter blockage to stop further overflow', 'Repair any damaged joints, sagging sections, or bracket failures', 'Clean wall staining using appropriate methods for your wall type', 'Light staining on UPVC or smooth render can be pressure washed', 'Deep staining on brickwork may need specialist cleaning products', 'Install gutter guards to prevent future blockages and overflow'] },
      ],
      faqs: [
        { question: 'What causes green stains on walls below gutters?', answer: 'Green stains are caused by algae and organic matter deposited on the wall by overflow from a blocked or leaking gutter. The moisture keeps the wall damp, allowing algae to grow directly on the surface.' },
        { question: 'Can green stains be removed from brickwork?', answer: 'Yes — light staining can be pressure washed off. Deep staining on porous brickwork may need specialist cleaning products or multiple treatments. Preventing further overflow is essential for a lasting result.' },
        { question: 'Will the green stains come back after cleaning?', answer: 'They will return unless the gutter problem is fixed. WOW Gutters Ltd addresses both the cause (the blocked gutter) and the symptom (the wall staining) for a complete solution.' },
        { question: 'How much does it cost to clean green stains off walls?', answer: 'Wall stain removal costs from £60 depending on the wall area and the severity of the staining. Combined with gutter cleaning, the total cost depends on your property size.' },
        { question: 'Can green stains damage my walls?', answer: 'Yes — algae growth holds moisture against the wall surface, which can penetrate porous brickwork and cause internal damp over time. The staining also makes the property look neglected.' },
      ],
    };
  }

  if (slug === 'water-damage-from-blocked-gutters-insurance') {
    return {
      heroTitle: 'Water Damage From Blocked Gutters — Insurance',
      heroDescription: 'Will insurance cover water damage from blocked gutters? It depends on maintenance history. WOW Gutters Ltd helps you document gutter conditions for insurance purposes. Call 07421 433910.',
      sections: [
        { heading: 'Does Home Insurance Cover Water Damage From Blocked Gutters?', content: 'Insurance claims for water damage from blocked gutters are often disputed. Most home insurance policies cover "sudden and accidental" damage but may exclude damage caused by lack of maintenance. If the insurer determines the blockage built up over months or years due to neglected maintenance, they may reduce or decline the pay-out. Regular gutter cleaning with photographic records provides evidence that you maintained the property properly.', bullets: ['Most policies cover sudden damage — like a storm causing overflow', 'Gradual damage from long-term neglect is often excluded from cover', 'Insurers may request evidence of regular gutter maintenance', 'Before and after photos from gutter cleaning visits serve as maintenance records', 'Written condition reports from professional gutter cleaners support insurance claims', 'If a claim is declined, the full cost of repairs falls on the homeowner'] },
        { heading: 'How to Protect Your Insurance Cover With Proper Gutter Maintenance', content: 'The best way to ensure your insurance covers gutter-related water damage is to demonstrate that you maintained the gutters properly. WOW Gutters Ltd provides the documentation you need.', bullets: ['Book regular gutter cleaning at least once per year', 'Retain before and after photographs from every gutter clean', 'Keep written condition summaries from professional gutter inspections', 'Address minor gutter repairs promptly before they cause damage', 'Document any storm events that may have caused sudden gutter damage', 'Photograph external wall staining or overflow evidence before repairs'] },
      ],
      faqs: [
        { question: 'Does home insurance cover water damage from blocked gutters?', answer: 'It depends on your policy and your maintenance history. Sudden damage from an unforeseen event is often covered. Gradual damage from neglected gutters is frequently excluded. Regular gutter maintenance with photographic records strengthens your position.' },
        { question: 'How do I prove I maintained my gutters for an insurance claim?', answer: 'Retain before and after photographs from professional gutter cleaning visits, keep dated receipts and invoices, and store any written condition reports. WOW Gutters Ltd provides all of these as standard.' },
        { question: 'What happens if my insurance claim for gutter damage is declined?', answer: 'If the insurer decides the damage resulted from lack of maintenance, you are responsible for the full cost of repairs. This is why regular, documented gutter maintenance is essential.' },
        { question: 'Does WOW Gutters Ltd provide documentation for insurance purposes?', answer: 'Yes — every visit includes before and after photographs and a written summary of work completed. These documents serve as evidence of proper gutter maintenance.' },
        { question: 'Can I claim for gutter repairs on my home insurance?', answer: 'Gutter repairs themselves are usually not covered by standard home insurance. However, the water damage caused by a gutter blockage may be covered if you can demonstrate proper maintenance.' },
      ],
    };
  }

  if (slug === 'how-often-should-gutters-be-cleaned-uk') {
    return {
      heroTitle: 'How Often Should Gutters Be Cleaned UK?',
      heroDescription: 'In the UK, gutters should be cleaned at least twice a year — once in late spring and once in autumn after leaf fall. WOW Gutters Ltd provides professional gutter cleaning across Birmingham and the West Midlands. Call 07421 433910.',
      sections: [
        { heading: 'Recommended Gutter Cleaning Frequency for UK Homes', content: 'The standard recommendation for UK homes is gutter cleaning twice per year. However, the right frequency depends on your local environment. Properties near trees need more frequent cleaning — sometimes quarterly. South-facing roofs also tend to grow moss faster, which fills gutters more quickly. A professional gutter cleaner can assess your property and recommend the right schedule.', bullets: ['Spring clean (April-May) — clears winter debris and winter moss growth', 'Autumn clean (October-November) — removes fallen leaves before winter', 'Properties near trees — quarterly cleaning recommended (4 times per year)', 'Pine trees nearby — check every 2-3 months as needles accumulate quickly', 'Homes in exposed areas — more frequent checks after storms', 'Annual minimum — even properties with no nearby trees need at least one clean per year'] },
        { heading: 'What Happens If You Do Not Clean Gutters Often Enough?', content: 'Infrequent gutter cleaning leads to progressive damage that starts small and gets expensive over time. Debris buildup blocks water flow, causing overflow that saturates walls and foundations. The cost of repairing water damage from neglected gutters far outweighs the cost of regular professional cleaning.', bullets: ['Overflow water stains walls and causes damp inside the home', 'Fascia boards rot from constant moisture contact', 'Blocked downpipes need professional clearance', 'Moss and plant seeds germinate in debris-filled gutters', 'Nesting birds and wasps are attracted to blocked gutters', 'Insurance claims may be declined if maintenance is not documented'] },
      ],
      faqs: [
        { question: 'Do all UK homes need gutter cleaning twice a year?', answer: 'Most UK homes benefit from two cleans per year. However, homes surrounded by mature trees, in areas with high moss growth, or in exposed positions may need three or four cleans annually.' },
        { question: 'What time of year should I clean my gutters in the UK?', answer: 'The best times are late spring (after the last frost) and late autumn (after most leaves have fallen). Avoid cleaning during freezing weather or heavy rain.' },
        { question: 'How much does gutter cleaning cost per year in the UK?', answer: 'Professional gutter cleaning typically costs between £50 and £150 per visit. An annual plan with two visits provides the best value and ensures your gutters are maintained year-round.' },
        { question: 'Can I clean my own gutters instead of hiring a professional?', answer: 'You can clean ground-floor gutters yourself with a ladder and gloves, but working at height is dangerous. Professional gutter cleaners have the equipment, insurance, and experience to do the job safely.' },
        { question: 'Does WOW Gutters Ltd offer a gutter cleaning schedule?', answer: 'Yes — we offer scheduled visits at intervals that suit your property. We send reminders before each visit and provide before and after photos every time.' },
      ],
    };
  }

  if (slug === 'best-time-of-year-to-clean-gutters') {
    return {
      heroTitle: 'Best Time of Year to Clean Gutters',
      heroDescription: 'The best times to clean gutters in the UK are late spring and late autumn. WOW Gutters Ltd provides professional gutter cleaning timed to protect your home year-round. Call 07421 433910.',
      sections: [
        { heading: 'Spring Gutter Cleaning — Prepare for Summer Rain', content: 'Spring is the ideal time for the first gutter clean of the year. Winter storms and freeze-thaw cycles often leave gutters filled with debris, moss, and sludge. Cleaning in late spring removes this buildup and ensures your gutters can handle summer rainfall. It also reveals any winter damage — cracked joints, loose brackets, or sagging sections — that needs repair before the next wet season.', bullets: ['Removes debris that accumulated over winter months', 'Reveals winter damage — cracked joints, loose brackets, sagging sections', 'Prepares gutters for spring and summer rainfall', 'Clears moss growth before it spreads and blocks downpipes', 'Gives you the full dry season to arrange any necessary repairs', 'Prevents bird nesting in clean gutters during breeding season'] },
        { heading: 'Autumn Gutter Cleaning — Essential Before Winter', content: 'Autumn gutter cleaning is the most important of the year. Fallen leaves, twigs, and seeds fill gutters rapidly from September through November. If left uncleaned through winter, this debris compacts into a heavy sludge that blocks downpipes and causes overflow in every rain shower. Cleaning after the main leaf fall ensures your gutters are clear for the wettest months of the year.', bullets: ['Removes fallen leaves before they compact into blockages', 'Prevents ice dams forming in frozen debris during winter', 'Ensures downpipes are clear for winter rainfall', 'Reduces weight load on gutter brackets from wet debris', 'Prevents autumn seeds from germinating into plants in spring', 'Protects against freeze-thaw damage to waterlogged gutters'] },
      ],
      faqs: [
        { question: 'Is it better to clean gutters in spring or autumn?', answer: 'Both are essential. Spring cleaning removes winter debris and damage. Autumn cleaning prevents blockages during the wettest months. If you can only clean once per year, choose autumn before winter rain arrives.' },
        { question: 'Can I clean gutters in winter?', answer: 'Winter cleaning is possible but not ideal. Ice and frost make ladders dangerous, and debris may be frozen solid. If your gutters are overflowing in winter, call a professional with the right equipment for safe winter gutter cleaning.' },
        { question: 'Should I clean gutters before or after leaf fall?', answer: 'Clean after the main leaf fall has finished — usually late October or early November in the UK. Cleaning too early means more leaves will fall into clean gutters.' },
        { question: 'What month should I clean my gutters for winter?', answer: 'November is the best month for winter-preparation gutter cleaning in the UK. By this time, most leaves have fallen but severe winter weather has not yet arrived.' },
        { question: 'Does WOW Gutters Ltd offer seasonal gutter cleaning plans?', answer: 'Yes — our annual plan includes spring and autumn visits timed for your property. We send reminders so you never miss a cleaning window.' },
      ],
    };
  }

  if (slug === 'how-to-tell-if-gutters-need-cleaning') {
    return {
      heroTitle: 'How to Tell if Gutters Need Cleaning',
      heroDescription: 'Signs your gutters need cleaning — water overflowing, plants growing, birds nesting, and damp patches on walls. WOW Gutters Ltd provides professional gutter cleaning and inspection. Call 07421 433910.',
      sections: [
        { heading: 'Visual Signs Your Gutters Are Blocked', content: 'The most obvious sign that gutters need cleaning is water spilling over the edge during rain. But there are other visual clues you can spot from the ground. Plants sprouting from the gutter channel, moss hanging over the edge, or sagging sections all indicate a buildup of debris. You might also see birds regularly perching on your roofline — they are feeding on insects attracted to damp, decaying organic matter in the gutters.', bullets: ['Water overflowing from gutters during rain — the most obvious sign', 'Plants or grass growing out of the gutter channel', 'Moss hanging over the gutter edge', 'Sagging gutter sections weighed down by debris', 'Birds gathering on the roofline — they feed on insects in gutters', 'Green or black stains running down walls below the gutter'] },
        { heading: 'Auditory and Performance Signs of Blocked Gutters', content: 'Not all gutter problems are visible from the ground. Listen for gurgling sounds from downpipes during rain — this indicates air trapped behind a blockage. After rain stops, note whether water continues to drip from gutters for hours. A well-draining gutter system should empty within minutes of rain stopping. Slow drainage, water pooling near foundations, and damp patches on internal walls are all signs of blocked gutters that need attention.', bullets: ['Gurgling sounds from downpipes during or after rain', 'Water dripping from gutters long after rain has stopped', 'Damp patches on upstairs ceilings or walls', 'Pooling water at the base of downpipe outlets', 'Mould or mildew on external walls below the roofline', 'Wet patches on the ground near foundations after dry weather'] },
      ],
      faqs: [
        { question: 'Can I check if my gutters need cleaning from the ground?', answer: 'Yes — look for water overflowing during rain, plants growing from gutters, moss hanging over edges, and staining on walls below the gutter line. These all indicate blockages.' },
        { question: 'How do I know if my downpipe is blocked?', answer: 'Watch the downpipe outlet during rain. If little or no water exits the bottom while the gutter overflows at the top, your downpipe is blocked. Gurgling sounds from the pipe are also a strong indicator.' },
        { question: 'Should I check my gutters after a storm?', answer: 'Yes — storms can deposit large amounts of debris into gutters quickly. A post-storm visual check from the ground can catch problems before they cause damage.' },
        { question: 'How often should I visually check my gutters?', answer: 'A quick visual check after heavy rain or high winds is sensible. A thorough inspection by a professional every six months is recommended.' },
        { question: 'What does WOW Gutters Ltd check during a gutter inspection?', answer: 'Our inspection covers the gutter channel, joints, downpipe inlets and outlets, fascia boards, and brackets. We provide before and after photos and a written condition summary.' },
      ],
    };
  }

  if (slug === 'what-happens-if-you-never-clean-your-gutters') {
    return {
      heroTitle: 'What Happens If You Never Clean Your Gutters?',
      heroDescription: 'Never cleaning your gutters leads to water damage, rotten fascia boards, damp walls, foundation problems, and expensive repairs. WOW Gutters Ltd helps you avoid these costs. Call 07421 433910.',
      sections: [
        { heading: 'Progressive Damage From Unmaintained Gutters', content: 'Gutters left uncleaned for years do not fail suddenly — the damage builds gradually. In the first year, leaves and debris create a partial blockage that causes minor overflow during heavy rain. By year two, the compacted debris blocks downpipes completely and water overflows against walls in every rain shower. By year three, plant seeds have germinated in the nutrient-rich debris, roots penetrate joints and cracks, and the structural integrity of the gutter system is compromised.', bullets: ['Year one — partial blockages cause overflow in heavy rain only', 'Year two — compacted debris blocks downpipes completely', 'Year three — plants grow in gutters, roots damage joints and seals', 'Fascia boards rot from continuous moisture exposure', 'Internal damp and mould develop in upstairs rooms', 'Foundation damage from water pooling at the base of walls'] },
        { heading: 'The Financial Cost of Neglected Gutters', content: 'The cost of never cleaning your gutters far exceeds the cost of regular maintenance. A £100 gutter cleaning twice per year is negligible compared to the repair bills that accumulate from neglect. Replacing rotten fascia boards costs £500 or more per section. Repairing internal water damage runs into thousands. In extreme cases, foundation repairs can cost £5,000 to £10,000 — and insurance may not cover damage caused by lack of maintenance.', bullets: ['Regular gutter cleaning — £50 to £150 per visit (twice yearly)', 'Rotten fascia board replacement — from £500 per section', 'Internal damp repair — from £1,000 depending on severity', 'Gutter replacement — from £800 for a typical 3-bed semi', 'Mould remediation — from £500 for affected rooms', 'Foundation repairs — from £5,000 for water-damaged foundations'] },
      ],
      faqs: [
        { question: 'How long can gutters go without cleaning before damage occurs?', answer: 'Damage can begin within six months if debris buildup is heavy. Most homes show signs of overflow and staining within one year of skipped cleaning. After two years, structural damage to fascia boards and walls is likely.' },
        { question: 'Can dirty gutters cause roof damage?', answer: 'Yes — water backing up from blocked gutters can seep under roof tiles, causing rot to roof timbers and felt. Blocked gutters also keep the roof edge damp, encouraging moss and algae growth.' },
        { question: 'Do never-cleaned gutters affect house value?', answer: 'Yes — surveyors routinely check gutters. Evidence of poorly maintained gutters can reduce property value and cause buyers to negotiate lower prices or demand repairs before purchase.' },
        { question: 'Can neglected gutters cause subsidence?', answer: 'Consistent water overflow from blocked gutters saturates the ground around foundations. Over years, this can cause soil movement that contributes to subsidence — an extremely expensive problem.' },
        { question: 'Does home insurance cover damage from never cleaning gutters?', answer: 'Most policies exclude damage caused by gradual deterioration or lack of maintenance. If you never cleaned your gutters and water damage results, your insurance claim may be declined.' },
      ],
    };
  }

  if (slug === 'how-do-professionals-clean-gutters') {
    return {
      heroTitle: 'How Do Professionals Clean Gutters?',
      heroDescription: 'Professional gutter cleaning uses vacuum systems, hand removal, camera inspection, and downpipe jetting. WOW Gutters Ltd uses the most effective methods. Call 07421 433910.',
      sections: [
        { heading: 'Professional Gutter Cleaning Methods', content: 'Professional gutter cleaners use a combination of techniques depending on the property and the condition of the gutters. The most common method is high-reach gutter vacuum cleaning — a specialist vacuum with a long pole that removes debris from the gutter channel while the operator stays safely on the ground. For heavily blocked gutters, hand removal from a ladder may be necessary for the initial clearance. Downpipes are tested with water and jetted if blocked.', bullets: ['Gutter vacuum cleaning — removes debris from ground level using a long-reach system', 'Hand removal — ladder-based clearance for heavily compacted blockages', 'Downpipe testing — water test to confirm downpipes are clear', 'Downpipe jetting — high-pressure water jet to clear stubborn downpipe blockages', 'Camera inspection — internal camera to inspect downpipe condition when needed', 'Debris removal — all extracted debris is bagged and taken away'] },
        { heading: 'The Professional Gutter Cleaning Process Step by Step', content: 'A professional gutter cleaning visit follows a structured process. The team arrives, assesses the property, and sets up equipment. Gutters are cleared section by section, downpipes are tested and cleared, and the entire system is checked for damage. Before and after photographs document every job. The process typically takes between 30 minutes and two hours depending on property size and the severity of the blockage.', bullets: ['Initial assessment — property walkaround to check gutter condition', 'Equipment setup — vacuum system or ladders positioned safely', 'Gutter clearance — systematic removal of all debris from the channel', 'Downpipe test — water poured into each downpipe to check flow', 'Downpipe jetting — high-pressure clearance for blocked downpipes', 'Final inspection — check all joints, brackets, and outlets before departure'] },
      ],
      faqs: [
        { question: 'Do professional gutter cleaners use ladders or vacuums?', answer: 'Most professional gutter cleaners use both methods. Vacuum systems are used for routine cleaning where debris is accessible. Hand removal and ladders are used for heavily compacted blockages or when the vacuum cannot reach effectively.' },
        { question: 'Is professional gutter cleaning worth the money?', answer: 'Yes — professional cleaners have the equipment, insurance, and experience to clean gutters thoroughly and safely. DIY gutter cleaning carries significant risk of falls and often misses hidden blockages in downpipes.' },
        { question: 'How do professionals clean downpipes?', answer: 'Downpipes are tested by pouring water into the top and checking flow at the outlet. If blocked, a high-pressure water jet or a drain rod is used to clear the pipe. Camera inspection may be used for persistent blockages.' },
        { question: 'Do professional gutter cleaners remove the debris?', answer: 'Yes — professional cleaners bag all extracted debris and take it away with them. You are left with clean gutters and no mess on your property.' },
        { question: 'How long does a professional gutter clean take?', answer: 'Most residential gutter cleans take between 30 minutes and 2 hours. The time depends on the size of the property, the number of downpipes, and the severity of the blockage.' },
      ],
    };
  }

  if (slug === 'gutter-vacuum-vs-ladder-cleaning') {
    return {
      heroTitle: 'Gutter Vacuum vs Ladder Cleaning',
      heroDescription: 'Comparing gutter vacuum cleaning against traditional ladder cleaning — safety, effectiveness, cost, and which method suits your property. WOW Gutters Ltd offers both. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Vacuum Cleaning — Pros and Cons', content: 'Gutter vacuum cleaning uses a specialist vacuum on a long pole that reaches gutters from ground level. The operator controls the vacuum nozzle from the ground, sucking debris out of the gutter channel. The main advantage is safety — no ladder work means no risk of falls. The vacuum system also captures debris immediately, so nothing falls onto the ground. However, heavily compacted sludge or plant growth may need hand removal first, and the operator cannot inspect the gutter as closely as from a ladder.', bullets: ['No ladder work — eliminates fall risk entirely', 'Fast and efficient for routine cleaning', 'Debris captured immediately — no mess on the ground', 'Ideal for two-storey and high-level gutters', 'May not handle heavily compacted debris without hand pre-clearance', 'Limited inspection ability — operator sees only what the camera shows'] },
        { heading: 'Traditional Ladder Cleaning — Pros and Cons', content: 'Traditional ladder cleaning involves accessing the gutter directly and removing debris by hand or with a small trowel. This method allows the cleaner to inspect the gutter closely, check joint seals, and spot damage that a ground-based operator cannot see. Hand cleaning is also more effective for compacted, heavy debris. The main disadvantage is safety — ladder work at height carries significant risk, especially on wet or uneven ground. Professional cleaners are trained and insured for ladder work, but the risk is inherently higher.', bullets: ['Close inspection — cleaner can examine joints, seals, and brackets', 'Better for heavily compacted blockages and plant growth', 'More thorough debris removal from channel and downpipe inlets', 'Higher safety risk — falls from ladders are a leading cause of injury', 'Slower than vacuum cleaning for large properties', 'Requires safe ladder placement on stable, level ground'] },
      ],
      faqs: [
        { question: 'Which gutter cleaning method is safer?', answer: 'Gutter vacuum cleaning is safer because the operator works from ground level with no fall risk. Ladder cleaning carries inherent risk even when proper safety procedures are followed.' },
        { question: 'Is vacuum gutter cleaning as effective as hand cleaning?', answer: 'For routine cleaning with loose debris, vacuum cleaning is equally effective. For heavily compacted sludge, plant growth, or wet debris, hand cleaning may be more thorough. Many professionals use a combination of both methods.' },
        { question: 'Which method is more expensive — vacuum or ladder?', answer: 'Both methods cost approximately the same for a standard property. The price depends more on property size and gutter condition than on the method used.' },
        { question: 'Can all gutters be cleaned with a vacuum system?', answer: 'Most gutters can be vacuum cleaned, but very narrow, deep, or fragile guttering may need hand cleaning. A professional assessment will determine the best method for your gutters.' },
        { question: 'Which method does WOW Gutters Ltd use?', answer: 'We use both methods depending on the property. Our team starts with a vacuum system for efficiency and safety, and uses hand cleaning where compacted debris or close inspection is needed.' },
      ],
    };
  }

  if (slug === 'can-you-clean-gutters-from-the-ground') {
    return {
      heroTitle: 'Can You Clean Gutters From the Ground?',
      heroDescription: 'Yes — gutters can be cleaned from the ground using a gutter vacuum system. WOW Gutters Ltd provides professional ground-level gutter cleaning across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Ground-Level Gutter Cleaning Methods', content: 'Cleaning gutters from the ground is possible with the right equipment. The most common method is using a gutter vacuum — a long-reach pole attached to a powerful industrial vacuum that sucks debris from the gutter channel while you stand safely on the ground. Some DIY methods use telescopic tools, gutter cleaning attachments for pressure washers, or garden hose attachments. Professional ground-level cleaning is more thorough and safer than DIY attempts.', bullets: ['Gutter vacuum — professional system with long-reach pole', 'Telescopic gutter cleaning tools — DIY options with scrapers or brushes', 'Pressure washer attachments — can damage gutters if not used carefully', 'Garden hose flushing — limited effectiveness for solid debris', 'Professional grade vacuums — more powerful than consumer models', 'Camera attachment — some vacuums include a camera for real-time inspection'] },
        { heading: 'Professional vs DIY Ground-Level Gutter Cleaning', content: 'While you can buy a gutter vacuum attachment for your garden vacuum or pressure washer, professional-grade equipment is significantly more powerful. Professional vacuums generate enough suction to lift wet, compacted debris that consumer models cannot handle. Professionals also test and clear downpipes — a step DIY methods often miss. For a typical three-bedroom semi-detached house, a professional ground-level gutter clean takes under an hour and costs less than buying consumer equipment.', bullets: ['Professional vacuums have 10x the suction power of consumer models', 'Downpipe testing and jetting is included in professional cleaning', 'Consumer gutter vac attachments cost £50-150 but lack power', 'Professionals clean the entire system, not just the gutter channel', 'Before and after photos provided with professional service', 'No equipment to store, maintain, or replace'] },
      ],
      faqs: [
        { question: 'Can I clean my gutters from the ground without a vacuum?', answer: 'You can use telescopic tools with scrapers or brushes to push debris out, but this is messy and less effective. Debris falls to the ground and you cannot check downpipe flow without testing from above.' },
        { question: 'Do professional gutter cleaners work from the ground or ladders?', answer: 'Most professional gutter cleaners use a combination. They start with a vacuum system from ground level and use ladders for close inspection, downpipe testing, and hand removal of compacted debris.' },
        { question: 'Is ground-level gutter cleaning as thorough as ladder cleaning?', answer: 'For routine maintenance, yes. For heavily blocked gutters with compacted debris or plant growth, some hand cleaning from a ladder may be needed for a thorough result.' },
        { question: 'How much does professional ground-level gutter cleaning cost?', answer: 'Professional gutter cleaning, whether from the ground or ladders, costs between £50 and £150 for a standard UK home. The price depends on property size and gutter condition.' },
        { question: 'Does WOW Gutters Ltd clean gutters from the ground?', answer: 'Yes — we use professional gutter vacuum systems for ground-level cleaning on most properties. We use ladders only where necessary for close inspection or compacted debris.' },
      ],
    };
  }

  if (slug === 'how-long-does-gutter-cleaning-take') {
    return {
      heroTitle: 'How Long Does Gutter Cleaning Take?',
      heroDescription: 'Gutter cleaning typically takes 30 minutes to 2 hours for a standard UK home. WOW Gutters Ltd provides fast, efficient service. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Time by Property Type', content: 'The time required for gutter cleaning depends primarily on property size, the number of downpipes, and the condition of the gutters. A small terrace with accessible gutters may take as little as 30 minutes. A detached house with multiple roof valleys and several downpipes can take up to two hours. Properties with heavily compacted blockages, plant growth, or multiple downpipe blockages take longer.', bullets: ['Small terraced house — 30 to 45 minutes for a standard clean', 'Semi-detached house — 45 to 75 minutes depending on condition', 'Detached house — 60 to 120 minutes for a thorough clean', 'Bungalow — 30 to 60 minutes, all gutters easily accessible', 'Commercial property — 1 to 4 hours depending on roof area', 'Heavy blockage or plant growth — adds 30 to 60 minutes extra'] },
        { heading: 'What Affects Gutter Cleaning Time?', content: 'Beyond property size, several factors affect how long a gutter clean takes. The extent of blockage is the biggest factor — light debris vacuums quickly while compacted wet sludge takes longer. The number of downpipes matters because each must be tested and cleared individually. Accessibility also plays a role — gutters behind conservatories or in tight valleys take longer to reach. Professional cleaners factor in setup and takedown time as well as the cleaning itself.', bullets: ['Blockage severity — light debris is fast, compacted sludge is slow', 'Number of downpipes — each one must be tested and cleared', 'Accessibility — tight spaces and roof valleys add time', 'Gutter condition — damaged sections need careful handling', 'Property height — two-storey properties take longer to set up for', 'Debris removal — bagging and removing debris adds 10-15 minutes'] },
      ],
      faqs: [
        { question: 'How long does it take to clean gutters on a 3-bed semi?', answer: 'A 3-bed semi-detached house typically takes 45 to 75 minutes for a professional gutter clean, including downpipe testing.' },
        { question: 'Does gutter cleaning take longer the first time?', answer: 'Yes — the first clean after a long period of neglect takes longer because debris is compacted and may need hand removal. Subsequent scheduled cleans are quicker.' },
        { question: 'How long does it take to clean gutters on a bungalow?', answer: 'Bungalow gutters are the quickest to clean because they are low and accessible — typically 30 to 60 minutes.' },
        { question: 'How long does downpipe unblocking add to the job?', answer: 'Unblocking a downpipe adds 10 to 30 minutes per downpipe depending on the severity of the blockage and whether jetting is required.' },
        { question: 'Does WOW Gutters Ltd provide a time estimate before starting?', answer: 'Yes — we assess your property and provide a time estimate before starting work. Most jobs are completed within the estimated time.' },
      ],
    };
  }

  if (slug === 'do-i-need-scaffolding-to-clean-gutters') {
    return {
      heroTitle: 'Do I Need Scaffolding to Clean Gutters?',
      heroDescription: 'Most gutter cleaning does not require scaffolding. Professional gutter cleaners use ladders and vacuum systems. WOW Gutters Ltd cleans gutters safely without scaffolding. Call 07421 433910.',
      sections: [
        { heading: 'When Scaffolding Is Not Needed for Gutter Cleaning', content: 'For the vast majority of residential gutter cleaning jobs, scaffolding is not required. Professional gutter cleaners use ladders for access and gutter vacuum systems that operate from ground level. A standard extension ladder provides safe access to gutters on two-storey properties. For higher properties, access towers or long-reach vacuum poles are used. Scaffolding is only necessary for properties above three storeys, gutters in very difficult positions, or when gutter replacement or major repair work is needed alongside cleaning.', bullets: ['Standard two-storey house — ladder access is sufficient', 'Three-storey or higher — may need tower access or scaffolding', 'Bungalow — ladder access is straightforward and quick', 'Extended-reach vacuum — cleans most gutters from ground level', 'Gutter vacuum systems eliminate the need for ladders on many properties', 'Scaffolding is typically needed for gutter replacements, not cleaning'] },
        { heading: 'Gutter Cleaning Safety Without Scaffolding', content: 'Professional gutter cleaners are trained to work at height safely without scaffolding. Ladders are secured on stable ground, tied off where possible, and positioned at the correct angle. The cleaner never overreaches — they move the ladder as needed to maintain three points of contact. Professional insurance covers ladder work, giving you peace of mind. If the property genuinely requires scaffolding for safe access, a reputable cleaner will advise you before quoting.', bullets: ['Ladders are secured on stable, level ground with ladder stabilisers', 'Three points of contact maintained at all times during ladder work', 'Ladders are positioned at the correct 75-degree angle', 'Never overreach — ladder is repositioned as needed', 'Gutter vacuum systems reduce or eliminate need for ladder work', 'Professional insurance covers all work at height'] },
      ],
      faqs: [
        { question: 'Do I need scaffolding to clean gutters on a 3-bed semi?', answer: 'No — a standard 3-bed semi-detached house does not need scaffolding for gutter cleaning. A professional gutter cleaner will use ladders and a vacuum system.' },
        { question: 'When would scaffolding be necessary for gutter cleaning?', answer: 'Scaffolding may be needed for properties over three storeys, for gutters in very difficult positions, or if gutter replacement or major repair is planned alongside cleaning.' },
        { question: 'Is ladder gutter cleaning safe for the cleaner?', answer: 'Yes — professional cleaners are trained in ladder safety, use stabilisers, and are insured for working at height. DIY ladder cleaning is more dangerous without training and equipment.' },
        { question: 'How much does scaffolding add to gutter cleaning costs?', answer: 'Scaffolding for gutter access typically costs £200 to £500 for a standard house. Most residential gutter cleaning does not require it, so these costs are usually avoidable.' },
        { question: 'Does WOW Gutters Ltd ever use scaffolding?', answer: 'We rarely need scaffolding for gutter cleaning alone. Our vacuum system and ladder access cover the vast majority of properties. We would advise you if scaffolding were genuinely needed.' },
      ],
    };
  }

  if (slug === 'is-gutter-cleaning-worth-it') {
    return {
      heroTitle: 'Is Gutter Cleaning Worth It?',
      heroDescription: 'Yes — gutter cleaning is worth the cost. Regular cleaning prevents expensive water damage, protects your home, and maintains property value. WOW Gutters Ltd provides affordable gutter cleaning. Call 07421 433910.',
      sections: [
        { heading: 'The Cost-Benefit Analysis of Gutter Cleaning', content: 'Professional gutter cleaning costs between £50 and £150 per visit. Twice-yearly cleaning costs £100-300 per year. Compare that to the cost of repairing damage caused by neglected gutters — rotten fascia boards (£500+ per section), internal damp repairs (£1,000+), or a full gutter replacement (£800+ for a 3-bed semi). The math is clear: gutter cleaning pays for itself many times over by preventing damage that costs thousands to fix. It also protects your property value and gives you peace of mind.', bullets: ['Gutter cleaning — £50-£150 per visit (twice yearly recommended)', 'Rotten fascia replacement — £500+ per section', 'Internal damp and mould repair — £1,000+', 'Full gutter replacement — £800+ for a standard 3-bed semi', 'Masonry repairs from water damage — £500-£2,000', 'Insurance excess if claim is accepted — typically £100-£250'] },
        { heading: 'Non-Financial Benefits of Regular Gutter Cleaning', content: 'Beyond the cost saving, regular gutter cleaning provides important non-financial benefits. Clean gutters prevent damp and mould, which protects your family\'s health. They prevent the stress and disruption of emergency repairs — a blocked gutter always causes problems at the worst possible time. Regular cleaning also keeps your home looking well-maintained and prevents the unsightly staining that develops below overflowing gutters. If you sell your home, a well-documented gutter maintenance history is a positive selling point.', bullets: ['Prevents damp and mould — protects your family from respiratory issues', 'Avoids emergency repairs — no mid-storm panics about overflowing water', 'Maintains kerb appeal — no wall staining or sagging gutters', 'Supports insurance claims — documented maintenance history', 'Prevents pest problems — no nesting sites for birds, wasps, or rodents', 'Peace of mind — gutters work when rain falls'] },
      ],
      faqs: [
        { question: 'Is it cheaper to clean gutters yourself or hire a professional?', answer: 'DIY gutter cleaning costs nothing for labour but requires equipment and carries safety risks. Professional cleaning costs £50-£150 but is thorough, insured, and includes downpipe testing and debris removal.' },
        { question: 'How much money does gutter cleaning save in the long run?', answer: 'Regular gutter cleaning saves thousands in avoided repairs. A £200 annual cleaning investment prevents £2,000+ in potential water damage, fascia rot, and structural repairs over time.' },
        { question: 'Do clean gutters increase property value?', answer: 'Clean, well-maintained gutters are a positive selling point. Surveyors check gutters, and a clean system with documented maintenance history reassures buyers and supports the asking price.' },
        { question: 'How often should I pay for gutter cleaning to make it worthwhile?', answer: 'Twice per year is the sweet spot for most UK homes — enough to prevent damage without overspending. An annual plan with WOW Gutters Ltd provides the best value.' },
        { question: 'Does WOW Gutters Ltd offer value for money?', answer: 'Yes — we provide professional service with before and after photos, downpipe testing, and all debris removed. Our fixed quotes mean no surprises, and our annual plans offer the best per-visit rate.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-before-winter-checklist') {
    return {
      heroTitle: 'Gutter Cleaning Before Winter — Checklist',
      heroDescription: 'Prepare your gutters for winter with this essential checklist. WOW Gutters Ltd provides pre-winter gutter cleaning and inspection across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Essential Pre-Winter Gutter Cleaning Checklist', content: 'Preparing your gutters for winter is one of the most important home maintenance tasks. Winter brings the heaviest rainfall, freezing temperatures, and storms that can overwhelm a blocked system. Use this checklist to ensure your gutters are ready. The most critical tasks are clearing all debris from the gutter channel, testing every downpipe for flow, and checking joints and seals for leaks. Any damage found should be repaired before winter weather arrives.', bullets: ['Clear all leaves, twigs, and debris from every gutter section', 'Test each downpipe with water — confirm fast flow to the drain', 'Check all gutter joints for gaps, leaks, or separation', 'Inspect gutter brackets — tighten loose brackets, replace damaged ones', 'Check fascia boards for rot or water damage', 'Clear the area around ground-level drain outlets'] },
        { heading: 'Additional Winter Preparation Steps', content: 'Beyond the gutters themselves, prepare the surrounding areas for winter. Trim overhanging branches that could drop leaves and debris into clean gutters during winter storms. Check that drain pipes are securely fixed and not cracked by previous freezing. If you have an underground drainage system, ensure the drain runs are clear and grates are free of debris. Consider booking your gutter cleaning for October or November — early enough to beat the winter rush but late enough that most autumn leaves have fallen.', bullets: ['Trim overhanging branches — reduces debris falling into gutters', 'Check drain pipe clips — tighten any loose fixings', 'Inspect underground drains — clear grate covers and check flow', 'Book professional cleaning for October or November', 'Document gutter condition with photos before winter', 'Schedule any necessary repairs before December'] },
      ],
      faqs: [
        { question: 'When should I book pre-winter gutter cleaning?', answer: 'Book for October or November after most autumn leaves have fallen but before severe winter weather arrives. Avoid leaving it until December when freezing conditions make cleaning more difficult.' },
        { question: 'What is the most important part of pre-winter gutter maintenance?', answer: 'Clearing downpipes is the most critical step. A clear gutter channel is useless if the downpipe is blocked underneath — water will still overflow. Always test downpipe flow after cleaning.' },
        { question: 'Should I install gutter guards before winter?', answer: 'Gutter guards can help reduce debris accumulation but are not a replacement for cleaning. If you install guards, ensure they are fitted correctly before winter — poorly fitted guards can cause more problems than they solve.' },
        { question: 'What happens if my gutters freeze in winter?', answer: 'Water trapped in blocked gutters can freeze and expand, cracking joints and splitting gutter sections. Regular cleaning prevents water from pooling and freezing in the system.' },
        { question: 'Does WOW Gutters Ltd offer a pre-winter gutter cleaning service?', answer: 'Yes — we recommend booking our pre-winter clean in October or November. We test downpipes, check joints, and provide a written condition report. Call 07421 433910 to book.' },
      ],
    };
  }

  if (slug === 'autumn-leaves-gutter-maintenance') {
    return {
      heroTitle: 'Autumn Leaves Gutter Maintenance',
      heroDescription: 'Autumn leaves are the biggest cause of blocked gutters. Professional autumn gutter maintenance keeps your system clear through the leaf-fall season. WOW Gutters Ltd — call 07421 433910.',
      sections: [
        { heading: 'Why Autumn Leaves Are a Problem for Gutters', content: 'Autumn leaves are the single biggest cause of gutter blockages in the UK. A single mature tree can drop thousands of leaves into your gutters over the autumn season. Leaves accumulate in the gutter channel, blocking water flow and preventing it from reaching the downpipe. As leaves decompose, they form a wet, compacted sludge that is heavy and difficult to remove. This sludge blocks downpipe inlets and creates the perfect environment for plant seeds to germinate.', bullets: ['Leaves block gutter channels — preventing water flow to downpipes', 'Decomposing leaves form wet sludge — heavy and hard to remove', 'Leaf debris blocks downpipe inlets — causing overflow at gutter edges', 'Wet leaves in gutters freeze in winter — expanding and cracking joints', 'Leaf buildup attracts insects — flies, beetles, and ants in gutters', 'Decomposing leaves stain gutters — dark organic staining on white guttering'] },
        { heading: 'Autumn Gutter Maintenance Strategy', content: 'An effective autumn gutter maintenance strategy has three parts. The first is timing — book your main gutter clean for late October or early November after most leaves have fallen. The second is downpipe protection — ensure downpipe outlets have leaf guards or grates to prevent debris from entering at the top. The third is post-storm checks — after heavy autumn storms, a quick visual check can identify any leaf buildup that needs clearing before it compacts.', bullets: ['Book gutter cleaning for late October to early November', 'Install downpipe inlet guards to prevent leaves entering the pipe', 'Check gutters after autumn storms — clear any fresh leaf buildup', 'Trim overhanging branches to reduce leaf load entering gutters', 'Consider gutter guards for properties surrounded by mature trees', 'Schedule a spring follow-up clean to clear any moss growth from winter'] },
      ],
      faqs: [
        { question: 'How quickly do autumn leaves block gutters?', answer: 'A heavy leaf fall can block gutters within days. A single autumn storm can deposit enough leaves to block downpipe inlets and cause overflow in the next rainfall.' },
        { question: 'Should I clean gutters during autumn leaf fall?', answer: 'It is best to wait until the main leaf fall has finished — usually late October or early November. Cleaning too early means more leaves will fall into clean gutters.' },
        { question: 'What is the best way to protect gutters from autumn leaves?', answer: 'Downpipe inlet guards and gutter guards are effective at preventing leaves from blocking the system. Professional autumn cleaning combined with guards provides the best protection.' },
        { question: 'Can I leave autumn leaves in my gutters until spring?', answer: 'No — wet, compacted autumn leaves will freeze in winter, causing joint cracks and bracket damage. They also attract pests and create a fire risk when dry in summer.' },
        { question: 'Does WOW Gutters Ltd provide autumn gutter maintenance?', answer: 'Yes — our autumn gutter cleaning service is our busiest. We recommend booking in September or early October to secure your preferred date.' },
      ],
    };
  }

  if (slug === 'how-to-prevent-moss-on-roof') {
    return {
      heroTitle: 'How to Prevent Moss on Roof',
      heroDescription: 'Preventing moss on your roof saves money on cleaning and protects your tiles. WOW Gutters Ltd provides moss prevention treatments across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Moss Prevention Methods for Roofs', content: 'Preventing moss growth on your roof is more effective than removing established moss. The key is to make the roof environment less hospitable to moss spores. Sunlight and airflow are natural moss deterrents — trimming overhanging tree branches lets more sun reach the roof and improves air circulation, drying the tiles faster after rain. Applying a moss-resistant treatment creates a protective barrier that prevents moss spores from establishing. Copper or zinc strips installed along the roof ridge release trace amounts of metal ions in rainwater that suppress moss growth below.', bullets: ['Trim overhanging branches — more sunlight and airflow to the roof', 'Apply moss-resistant treatment — protective barrier on tile surfaces', 'Install copper or zinc strips — metal ions suppress moss growth', 'Keep gutters clear — overflowing water keeps roof edges damp', 'Remove existing moss before treating — treatment is for prevention', 'Treat north-facing roof slopes — they get least sun and grow most moss'] },
        { heading: 'Professional Moss Prevention vs DIY Solutions', content: 'DIY moss prevention products are available but rarely as effective as professional treatments. Professional roof treatments use commercial-grade biocides that kill moss spores on contact and provide long-lasting protection — typically 3 to 5 years. Professional application also ensures the treatment is applied evenly and safely, without damaging tiles or running off into gutters. The cost of professional treatment is usually recouped by avoiding frequent moss removal cleanings.', bullets: ['Professional treatments last 3-5 years — DIY products last 6-12 months', 'Commercial-grade biocides — more effective than shop-bought solutions', 'Professional application — even coverage without tile damage', 'Treatment includes gutter protection — prevents runoff staining', 'Cost-effective over time — fewer moss removal cleans needed', 'Safe application — professionals use correct dilution and protective equipment'] },
      ],
      faqs: [
        { question: 'What causes moss to grow on UK roofs?', answer: 'Moss thrives on damp, shaded roof surfaces. North-facing slopes, roofs shaded by trees, and properties in humid areas are most prone to moss growth. Clay and concrete tiles are more susceptible than slate.' },
        { question: 'Can I prevent moss on my roof myself?', answer: 'You can apply DIY moss killer from DIY stores, but professional treatments are more effective and longer-lasting. Treating a roof yourself also carries safety risks from working at height.' },
        { question: 'How long does roof moss treatment last?', answer: 'Professional moss prevention treatments typically last 3 to 5 years. Zinc or copper strips provide ongoing protection for 10+ years but take longer to become effective.' },
        { question: 'Does roof moss prevention damage tiles?', answer: 'No — professional moss treatments are designed to be safe for all common roof tile types. They kill moss without damaging the tile surface or structure.' },
        { question: 'Does WOW Gutters Ltd offer roof moss prevention?', answer: 'Yes — we provide professional moss removal followed by a protective treatment that prevents regrowth. Our treatment is safe for all tile types and comes with a 3-year guarantee.' },
      ],
    };
  }

  if (slug === 'does-roof-cleaning-damage-tiles') {
    return {
      heroTitle: 'Does Roof Cleaning Damage Tiles?',
      heroDescription: 'Professional roof cleaning does not damage tiles when done correctly. WOW Gutters Ltd uses safe, low-pressure soft washing methods. Call 07421 433910.',
      sections: [
        { heading: 'Safe Roof Cleaning Methods That Protect Tiles', content: 'The key to safe roof cleaning is using the correct method for your tile type. Soft washing — a low-pressure application of biocide and water — is the safest method for most roof tiles. It uses gentle pressure (similar to a garden hose) that cannot damage tiles, combined with a cleaning solution that kills moss, algae, and lichen at the root. The solution does the cleaning work, not the pressure. Professional cleaners never use high-pressure washing on roofs because it can force water under tiles, loosen them, and damage their surface.', bullets: ['Soft washing — low-pressure spray, safe for all tile types', 'Biocide treatment — kills moss and algae without abrasive cleaning', 'No high pressure — avoids forcing water under or loosening tiles', 'Professional application — correct dilution and technique', 'Tile-safe solutions — pH-balanced and non-damaging to clay, concrete, slate', 'Gentle rinsing — low-pressure removal of killed moss and debris'] },
        { heading: 'When Roof Cleaning Can Damage Tiles (And How to Avoid It)', content: 'Roof cleaning damages tiles when done incorrectly or by inexperienced operators. Pressure washing a roof at high pressure can blast the surface off concrete tiles, crack clay tiles, and force water under slate tiles. Using incorrect chemical solutions can discolour or etch tile surfaces. Tackling the job in the wrong weather conditions — freezing temperatures or direct summer sun — can also cause damage. Choosing a professional roof cleaner who uses soft washing methods eliminates these risks.', bullets: ['High-pressure washing — can crack tiles and force water underneath', 'Abrasive cleaning — can remove the textured surface of concrete tiles', 'Wrong chemicals — can discolour or etch tile surfaces', 'Bad weather cleaning — freezing conditions or hot sun cause problems', 'Inexperienced operators — lack of knowledge about tile types', 'Professional soft washing avoids all these risks completely'] },
      ],
      faqs: [
        { question: 'Does pressure washing a roof damage tiles?', answer: 'Yes — pressure washing a roof can damage tiles by forcing water under them, loosening them, or removing their surface texture. Professional roof cleaners use low-pressure soft washing instead.' },
        { question: 'What is the safest roof cleaning method?', answer: 'Soft washing is the safest method — it uses low-pressure water combined with a cleaning solution that kills moss and algae without abrasive force. It is safe for all tile types.' },
        { question: 'Can roof cleaning cause roof leaks?', answer: 'Yes — high-pressure cleaning can force water under tiles or loosen them, causing leaks. Soft washing at low pressure cannot force water under properly fitted tiles.' },
        { question: 'How do I know if a roof cleaner will damage my tiles?', answer: 'Ask what method they use. If they mention high-pressure washing, choose a different provider. A reputable cleaner will explain their soft-washing process and provide references.' },
        { question: 'Does WOW Gutters Ltd guarantee no tile damage?', answer: 'Yes — we use soft washing methods exclusively for roof cleaning and guarantee no damage to your tiles. Our team is experienced with all UK roof tile types.' },
      ],
    };
  }

  if (slug === 'soft-washing-vs-pressure-washing-roof') {
    return {
      heroTitle: 'Soft Washing vs Pressure Washing Roof',
      heroDescription: 'Soft washing is safer and more effective than pressure washing for roof cleaning. WOW Gutters Ltd provides professional soft washing services. Call 07421 433910.',
      sections: [
        { heading: 'Soft Washing — The Better Choice for Roofs', content: 'Soft washing is the recommended method for roof cleaning by professional trade bodies and manufacturers. The process uses low-pressure water (typically 60-100 PSI — no more than a garden hose) combined with a biocide cleaning solution. The solution kills moss, algae, lichen, and bacteria at the root, and the low-pressure rinse removes the debris without damaging tiles. Soft washing cleans more thoroughly than pressure washing because the biocide kills the organisms rather than just blasting them off the surface — and they take much longer to grow back.', bullets: ['Low pressure (60-100 PSI) — cannot damage tiles or force water under them', 'Biocide treatment — kills moss, algae, and lichen at the root', 'Longer-lasting results — regrowth takes 2-3 years vs 6-12 months', 'Safe for all tile types — clay, concrete, slate, and composite', 'No water forced under tiles — eliminates leak risk', 'Environmentally responsible — biodegradable solutions used'] },
        { heading: 'Why Pressure Washing Is Not Recommended for Roofs', content: 'Pressure washing uses high-pressure water — typically 1,500 to 3,000 PSI — to blast dirt and moss from surfaces. While effective on concrete driveways and patios, this pressure is too aggressive for roof tiles. High-pressure water can lift tile edges, crack tiles, and strip the protective surface layer from concrete tiles. Water is forced under overlapping tiles, potentially causing leaks in the roof structure below. Many tile manufacturers void their warranty if high-pressure cleaning is used on their products.', bullets: ['High pressure (1,500-3,000 PSI) — too aggressive for roof tiles', 'Can lift or crack tiles — water forced under overlaps', 'Removes tile surface — strips protective coating from concrete tiles', 'May void tile warranty — many manufacturers prohibit pressure washing', 'Short-term results — moss grows back quickly from remaining roots', 'Higher risk of leaks and damage compared to soft washing'] },
      ],
      faqs: [
        { question: 'Is pressure washing ever OK for roof cleaning?', answer: 'No — pressure washing is not recommended for roof tiles by manufacturers or professional trade bodies. Soft washing is the industry-standard safe method.' },
        { question: 'Which method lasts longer — soft washing or pressure washing?', answer: 'Soft washing lasts longer because it kills moss and algae at the root rather than just blasting the surface growth. Soft washing results typically last 2-3 years compared to 6-12 months for pressure washing.' },
        { question: 'Is soft washing more expensive than pressure washing?', answer: 'Soft washing costs about the same as professional pressure washing for a roof. Both methods cost £200-£500 for a standard UK home. Soft washing provides better value because the results last longer.' },
        { question: 'Can I pressure wash my own roof to save money?', answer: 'DIY pressure washing of a roof is dangerous and risks significant damage to your roof tiles. Professional soft washing is safer for both you and your roof.' },
        { question: 'Does WOW Gutters Ltd offer soft washing?', answer: 'Yes — we specialise in soft washing for roof cleaning. Our team uses professional-grade biocide treatments applied at safe pressure levels for all tile types.' },
      ],
    };
  }

  if (slug === 'how-often-to-remove-moss-from-roof') {
    return {
      heroTitle: 'How Often to Remove Moss From Roof',
      heroDescription: 'Moss should be removed from your roof every 3 to 5 years. WOW Gutters Ltd provides professional moss removal and prevention treatments. Call 07421 433910.',
      sections: [
        { heading: 'Recommended Moss Removal Frequency', content: 'The recommended frequency for roof moss removal depends on your property and local conditions. As a general rule, most UK homes need moss removal every 3 to 5 years. However, properties in damp, shaded areas — north-facing roofs, homes surrounded by trees, or properties in high-rainfall regions — may need moss removal every 2 to 3 years. Regular moss removal prevents the moss from building up to the point where it lifts tiles, blocks gutters, and causes damp problems in the roof space.', bullets: ['Standard frequency — every 3 to 5 years for most UK homes', 'Damp/shaded properties — every 2 to 3 years may be needed', 'After moss removal — apply treatment to extend time between cleans', 'Check roof annually — early moss removal is easier and cheaper', 'Gutter cleaning time — moss debris in gutters signals roof needs cleaning', 'Combine with roof treatment — prevention reduces removal frequency'] },
        { heading: 'Signs Your Roof Needs Moss Removal Before the Recommended Interval', content: 'Even if you follow a regular moss removal schedule, certain signs indicate moss needs removing sooner. If you see moss debris in your gutters during cleaning, it means moss on the roof is breaking away — a sign the layer is thick enough to be problematic. Moss patches visible from the ground, especially at the roof edges and in valleys, need attention. If gutter cleaning reveals significant moss fragments, the roof should be inspected for moss growth.', bullets: ['Moss debris found in gutters during clean', 'Moss patches visible from ground level', 'Moss growing thickly on north-facing roof slopes', 'Moss growing in roof valleys and around chimneys', 'Moss lifting or curling roof tile edges', 'Moss debris blocking downpipe inlets'] },
      ],
      faqs: [
        { question: 'How do I know when my roof needs moss removal?', answer: 'Visual signs include visible moss patches from the ground, moss debris in your gutters, and moss growing thickly in roof valleys. A professional inspection can assess the extent of growth.' },
        { question: 'What happens if I never remove moss from my roof?', answer: 'Moss lifts roof tiles, allowing water to penetrate the roof structure. It also blocks gutters and downpipes with debris. Over time, unchecked moss growth can cause roof leaks and structural damp.' },
        { question: 'Can I remove moss from my roof myself?', answer: 'DIY moss removal is possible with a stiff brush and moss killer, but working on a roof is extremely dangerous. Professional moss removal is safer and more thorough.' },
        { question: 'Does moss removal damage roof tiles?', answer: 'Professional soft washing moss removal does not damage tiles. Aggressive scraping or high-pressure washing can damage tiles — which is why we use gentle, professional methods.' },
        { question: 'Does WOW Gutters Ltd provide roof moss removal?', answer: 'Yes — we provide professional roof moss removal using soft washing methods, followed by a protective treatment that slows regrowth. We serve Birmingham and the West Midlands.' },
      ],
    };
  }

  if (slug === 'gutter-guards-worth-it-uk') {
    return {
      heroTitle: 'Are Gutter Guards Worth It? UK Guide',
      heroDescription: 'Gutter guards can reduce cleaning frequency but are not a replacement for maintenance. WOW Gutters Ltd provides honest advice on gutter guards. Call 07421 433910.',
      sections: [
        { heading: 'Pros of Gutter Guards for UK Homes', content: 'Gutter guards — also called gutter covers or leaf guards — sit over or inside your gutters to prevent leaves and debris from entering while allowing water to flow through. The main benefit is reducing how often you need gutter cleaning. Good quality gutter guards can extend the time between cleans from twice a year to once a year, or even longer for properties with light leaf fall. They also prevent downpipe blockages by stopping large debris from entering the system at all. For properties surrounded by mature trees, gutter guards are particularly beneficial.', bullets: ['Reduces cleaning frequency — from twice to once per year or less', 'Prevents downpipe blockages — stops large debris entering the system', 'Protects gutters during holiday periods — fewer checks needed', 'Reduces risk of bird and wasp nesting in gutters', 'Prevents plant seeds from germinating in gutter debris', 'Suitable for hard-to-access gutters on high properties'] },
        { heading: 'Cons of Gutter Guards — What to Consider', content: 'Gutter guards are not a perfect solution. No gutter guard keeps all debris out — fine particles, moss spores, and small seeds still get through and accumulate over time. This fine sludge builds up underneath the guard where it is harder to see and more difficult to remove. Many gutter guards also require professional installation to work correctly, and poorly fitted guards can cause more problems — water can overshoot the gutter in heavy rain, and debris trapped behind the guard can accelerate rust on metal gutters. Guards also add upfront cost typically £200-£600 for a standard property.', bullets: ['Fine debris still gets through — requires cleaning eventually', 'Harder to clean — debris trapped under guards needs removal', 'Installation cost — £200-£600 upfront for a standard property', 'Can cause overshooting — water flows over the guard in heavy rain', 'Debris trapped behind guard — can cause rust on metal gutters', 'Not maintenance-free — regular inspections still needed'] },
      ],
      faqs: [
        { question: 'Do gutter guards completely eliminate gutter cleaning?', answer: 'No — no gutter guard keeps all debris out. Fine particles, seeds, and moss spores still accumulate and need eventual removal. Guards reduce cleaning frequency but do not eliminate it.' },
        { question: 'What type of gutter guard is best for UK homes?', answer: 'Mesh gutter guards with fine holes (foam and brush guards trap moisture and cause problems) are best for UK conditions. Professional installation is recommended for proper fit and function.' },
        { question: 'Can gutter guards cause roof problems?', answer: 'Yes — poorly fitted gutter guards can cause water to overshoot the gutter, soaking the fascia boards and walls below. Professional installation is essential.' },
        { question: 'How much do gutter guards cost in the UK?', answer: 'Gutter guard materials cost £5-£15 per metre. Professional installation for a standard 3-bed semi-detached house costs £200-£600 depending on the type and complexity.' },
        { question: 'Does WOW Gutters Ltd install gutter guards?', answer: 'Yes — we supply and install professional-grade mesh gutter guards. We provide honest advice on whether guards are worthwhile for your specific property.' },
      ],
    };
  }

  if (slug === 'leaf-guard-installation-pros-and-cons') {
    return {
      heroTitle: 'Leaf Guard Installation — Pros and Cons',
      heroDescription: 'Leaf guards reduce gutter cleaning but have drawbacks including cost and maintenance needs. WOW Gutters Ltd provides professional leaf guard installation. Call 07421 433910.',
      sections: [
        { heading: 'Benefits of Installing Leaf Guards', content: 'Leaf guards are designed to protect your gutters from the biggest cause of blockages — fallen leaves. The primary benefit is reduced cleaning frequency. Properties with heavy tree cover may need gutter cleaning four times a year without guards, but only once or twice per year with guards installed. Leaf guards also prevent the most common cause of downpipe blockages by stopping leaves from entering downpipe inlets. For homeowners who travel frequently or find gutter cleaning difficult to schedule, leaf guards provide welcome peace of mind.', bullets: ['Major reduction in gutter cleaning frequency', 'Prevents leaf-related downpipe blockages', 'Ideal for properties surrounded by mature trees', 'Reduces risk of bird nesting in gutters', 'Minimises seasonal gutter maintenance during autumn leaf fall', 'Provides peace of mind for frequent travellers'] },
        { heading: 'Drawbacks of Leaf Guard Installation', content: 'Leaf guards have several drawbacks that homeowners should consider before installing. The upfront cost is significant — £200-£600 for a standard property. The guards need periodic inspection and cleaning themselves — fine debris accumulates on top or underneath. Some types of guard (foam inserts, for example) trap moisture against the gutter, accelerating corrosion on metal guttering. Guards can also cause water to overshoot the gutter in heavy rain if not properly aligned. In some cases, the cost of guards and their maintenance over 10 years exceeds the cost of regular professional gutter cleaning.', bullets: ['High upfront cost — £200-£600 installation', 'Guards need cleaning too — fine debris accumulates', 'Moisture trapping — some guard types promote corrosion', 'Water overshooting — poorly fitted guards cause overflow', 'Maintenance access — harder to inspect gutter condition', 'May cost more than regular cleaning over a 10-year period'] },
      ],
      faqs: [
        { question: 'Are leaf guards worth the installation cost?', answer: 'Leaf guards are worth it for properties with heavy tree cover or hard-to-access gutters. For other properties, regular professional cleaning may be more cost-effective.' },
        { question: 'Do leaf guards need maintenance after installation?', answer: 'Yes — leaf guards need periodic inspection and cleaning. Fine debris accumulates on mesh surfaces and needs removal. Most guards need attention once or twice per year.' },
        { question: 'Can I install leaf guards myself?', answer: 'DIY leaf guard installation is possible but not recommended. Incorrect installation can cause water overshooting, debris accumulation behind the guard, and gutter damage. Professional installation ensures proper fit and function.' },
        { question: 'Which leaf guard type is most effective?', answer: 'Fine mesh guards (stainless steel or aluminium) are the most effective for UK conditions. Foam and brush guards are less effective and can trap moisture against the gutter.' },
        { question: 'Does WOW Gutters Ltd install leaf guards?', answer: 'Yes — we install professional-grade stainless steel mesh leaf guards. We provide a consultation to assess whether guards are suitable for your property and offer a fixed-price installation quote.' },
      ],
    };
  }

  if (slug === 'how-to-maintain-gutters-between-cleans') {
    return {
      heroTitle: 'How to Maintain Gutters Between Professional Cleans',
      heroDescription: 'Simple gutter maintenance between professional cleans keeps your system working. WOW Gutters Ltd provides tips plus professional cleaning when needed. Call 07421 433910.',
      sections: [
        { heading: 'Simple DIY Gutter Maintenance Between Professional Cleans', content: 'Your gutters need attention between professional cleaning visits to stay in good working order. The most important DIY maintenance is visual inspection after heavy rain and storms — look for overflow, staining, or sagging sections from ground level. If you have a bungalow or low-level gutters, you can use a telescopic tool to clear visible debris from the gutter channel. Check downpipe outlets at ground level to ensure water is flowing freely. Trim overhanging branches that could drop leaves and debris into clean gutters.', bullets: ['Visual inspection after heavy rain — check for overflow or staining', 'Clear visible debris from low-level gutters using telescopic tools', 'Check downpipe outlets — ensure water flows freely during rain', 'Trim overhanging branches — reduces debris entering gutters', 'Check gutter joints from ground level — look for drips or gaps', 'Remove plant seedlings from gutters — pull them before roots establish'] },
        { heading: 'What Not to Do When Maintaining Gutters Yourself', content: 'While DIY maintenance can help between professional cleans, there are important things to avoid. Never attempt to clean high-level gutters without proper equipment — the risk of falling is too great. Do not use a pressure washer to clean gutters — the force can damage joints and brackets. Never pour chemicals or bleach into gutters — these harm plants, pets, and the environment and do not solve underlying blockage issues. Avoid walking on a wet or fragile roof to access gutters — this can damage tiles and is extremely dangerous.', bullets: ['Do not climb ladders on two-storey properties without proper training', 'Never use a pressure washer on gutters — can damage joints and seals', 'Do not pour bleach or chemicals into gutters — harmful and ineffective', 'Never walk on a roof — extremely dangerous and can damage tiles', 'Do not ignore small problems — a minor leak can become a major repair', 'Avoid using wire or rods to poke downpipes — can crack the pipe'] },
      ],
      faqs: [
        { question: 'How often should I check my gutters between professional cleans?', answer: 'A quick visual check after heavy rain and after autumn storms is sufficient. Full professional cleaning twice per year is still recommended even with regular DIY checks.' },
        { question: 'Can I use a hose to flush my gutters?', answer: 'A garden hose can be used to test downpipe flow after debris removal, but it will not clear solid blockages. Use the hose only to confirm water is flowing through the system.' },
        { question: 'What is the biggest risk with DIY gutter maintenance?', answer: 'Falls from ladders and roofs are the biggest risk. DIY gutter maintenance causes hundreds of serious injuries each year. If you have any doubt about safe access, call a professional.' },
        { question: 'How do I spot gutter problems from the ground?', answer: 'Look for water overflowing during rain, green or black staining on walls below the gutter, plants growing from the gutter channel, sagging sections, and birds gathering on the roofline.' },
        { question: 'Does WOW Gutters Ltd provide gutter maintenance advice?', answer: 'Yes — every professional clean includes advice on maintaining your gutters between visits. We also offer scheduled cleaning plans so you never have to remember when maintenance is due.' },
      ],
    };
  }

  if (slug === 'landlord-responsibility-gutter-cleaning-uk') {
    return {
      heroTitle: 'Landlord Responsibility — Gutter Cleaning UK',
      heroDescription: 'In the UK, landlords are responsible for gutter cleaning and maintenance. WOW Gutters Ltd provides professional services for landlords and letting agents. Call 07421 433910.',
      sections: [
        { heading: 'Landlord Legal Responsibilities for Gutter Maintenance', content: 'In the UK, landlords have a legal responsibility to maintain the structure and exterior of the rental property, including gutters and downpipes. The Landlord and Tenant Act 1985 requires landlords to keep the property in good repair, which includes ensuring the rainwater system functions properly. The Homes (Fitness for Habitation) Act 2018 further requires that the property is fit for habitation — and a property with blocked, overflowing gutters causing damp is not fit for habitation. Failure to maintain gutters can result in tenants taking legal action, rent repayment orders, or enforcement action by the local council.', bullets: ['Landlord and Tenant Act 1985 — landlord must maintain structure and exterior', 'Homes (Fitness for Habitation) Act 2018 — property must be fit to live in', 'Tenant complaints about damp from gutter issues — must be addressed promptly', 'Legal action risk — tenants can sue for disrepair and claim compensation', 'Rent repayment orders — possible if property is unfit for habitation', 'Council enforcement — environmental health can demand repairs'] },
        { heading: 'Best Practice for Landlords — Gutter Maintenance Schedules', content: 'Smart landlords treat gutter maintenance as a scheduled cost rather than reacting to emergencies. An annual or bi-annual gutter cleaning plan ensures the property remains compliant with legal requirements and protects the landlord from expensive emergency repairs and tenant complaints. Professional gutter cleaning also provides photographic evidence of maintenance — useful if a dispute arises. For landlords with multiple properties, WOW Gutters Ltd offers portfolio-wide cleaning schedules with a single point of contact.', bullets: ['Schedule bi-annual gutter cleaning — spring and autumn for each property', 'Use a professional service — provides maintenance records and photos', 'Include gutter inspection in annual property checks', 'Keep documentation — before and after photos protect against disputes', 'Respond to tenant reports of gutter issues within 24 hours', 'Consider gutter guards to reduce cleaning frequency on rental properties'] },
      ],
      faqs: [
        { question: 'Is gutter cleaning the landlord or tenant responsibility?', answer: 'Gutter cleaning and maintenance are the landlord\'s responsibility in the UK. The tenant is not responsible for maintaining the structure and exterior of the property.' },
        { question: 'Can a tenant be held responsible for blocked gutters?', answer: 'Generally no — gutter blockages from normal leaf fall and debris are the landlord\'s responsibility. However, if a tenant causes a blockage by putting inappropriate items into gutters, they may be responsible for the repair cost.' },
        { question: 'Do I need to provide proof of gutter maintenance as a landlord?', answer: 'Yes — if a tenant complains about damp or water damage, you may need to prove that you maintained the gutters properly. Professional before and after photos provide this evidence.' },
        { question: 'How much does landlord gutter cleaning cost?', answer: 'Landlord gutter cleaning costs the same as residential cleaning — typically £50-£150 per visit depending on property size. Multi-property discounts are available for portfolio landlords.' },
        { question: 'Does WOW Gutters Ltd work with landlords and letting agents?', answer: 'Yes — we offer scheduled cleaning plans for rental properties and multi-property portfolios. We provide invoices and photographic evidence for your records. Call 07421 433910.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-3-storey-house') {
    return {
      heroTitle: 'Gutter Cleaning for 3-Storey Houses',
      heroDescription: 'Gutter cleaning for 3-storey houses requires specialist equipment to reach higher elevations safely. WOW Gutters Ltd has the tools and experience for high-level gutter cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Challenges of Cleaning Gutters on a 3-Storey House', content: 'Cleaning gutters on a 3-storey house is significantly more challenging than a standard 2-storey property. Standard ladders cannot safely reach the height, and working at the extended height requires specialised access equipment. Most 3-storey gutters need cleaning with a high-reach gutter vacuum system — a long-reach pole that can access gutters up to 40 feet from ground level. This eliminates the need for ladders and scaffolding, making the job safer and faster. The complexity also means the job takes longer and requires more experienced operators.', bullets: ['Standard ladders are unsafe above 2 storeys — specialist access needed', 'High-reach gutter vacuum — cleans up to 40ft from ground level', 'No scaffolding required with professional vacuum systems', 'Takes longer than standard gutter cleaning — allow 1-2 hours', 'Requires experienced operators trained for high-level work', 'More expensive than standard gutter cleaning due to specialist equipment'] },
        { heading: 'How WOW Gutters Ltd Handles 3-Storey Gutter Cleaning', content: 'WOW Gutters Ltd uses professional high-reach gutter vacuum systems designed specifically for properties above standard height. Our equipment reaches gutters on 3-storey and higher buildings safely from the ground. The vacuum system is powerful enough to remove wet, compacted debris even at full extension. We also use camera attachments on the vacuum pole to inspect the gutter condition in real time. Downpipes are tested and cleared using our standard methods, with access from the top using long-reach tools.', bullets: ['High-reach vacuum pole — extends to 40ft for 3-storey access', 'Camera attachment — real-time visual inspection at full height', 'Powerful industrial vacuum — handles wet, compacted debris at extension', 'Downpipe testing — long-reach tools for top-level downpipe access', 'All debris bagged and removed — no mess left on your property', 'Fully insured for high-level work with £10 million public liability cover'] },
      ],
      faqs: [
        { question: 'Do I need scaffolding to clean gutters on a 3-storey house?', answer: 'No — professional gutter cleaners use high-reach vacuum systems that access gutters from ground level. Scaffolding is rarely needed for cleaning, though it may be needed for repairs.' },
        { question: 'How much does gutter cleaning cost for a 3-storey house?', answer: 'Gutter cleaning for a 3-storey house typically costs £100-£200 depending on the property size and gutter condition. The higher cost reflects the specialist equipment and operator expertise required.' },
        { question: 'Can I clean gutters on a 3-storey house myself?', answer: 'No — cleaning gutters at 3-storey height is extremely dangerous without professional equipment and training. The risk of serious injury from a fall is too high for DIY work.' },
        { question: 'How long does it take to clean gutters on a 3-storey house?', answer: 'Expect 1 to 2 hours for a thorough gutter clean on a 3-storey house, including downpipe testing and inspection.' },
        { question: 'Does WOW Gutters Ltd clean gutters on 3-storey houses?', answer: 'Yes — we clean gutters on 3-storey and higher properties across Birmingham and the West Midlands using our high-reach vacuum system.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-4-storey-building') {
    return {
      heroTitle: 'Gutter Cleaning for 4-Storey Buildings',
      heroDescription: 'Gutter cleaning for 4-storey buildings needs specialist high-reach equipment. WOW Gutters Ltd provides professional gutter cleaning for tall buildings across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Specialist Requirements for 4-Storey Gutter Cleaning', content: 'At 4 storeys high, gutter cleaning is firmly in the specialist category. Standard access equipment does not work at this height. Professional high-reach gutter vacuum systems with extended poles are essential — reaching up to 50 feet or more. The job requires operators trained specifically for extreme-height work, with equipment certified for the extended reach. Weather conditions also play a role — wind speeds above 15mph can make high-reach vacuum work unsafe, so scheduling may need to be flexible.', bullets: ['Extended-reach vacuum pole — reaches gutters 50ft and above', 'Weather-dependent — high winds can prevent safe operation', 'Specialist training required — not all gutter cleaners handle 4-storey', 'Equipment certification — poles and vacuums rated for extended use', 'Longer job duration — allow 2-3 hours for a thorough clean', 'Site survey usually needed — to assess access and conditions'] },
        { heading: 'Why Professional 4-Storey Gutter Cleaning Is Essential', content: 'For a 4-storey building, professional gutter cleaning is not optional — it is essential maintenance. Blocked gutters at this height cause water to cascade down the full height of the building, saturating brickwork on every floor and making damp problems much more extensive. The staining from overflowing gutters on a tall building is also more visible and damaging to the property\'s appearance. Emergency repairs at 4-storey height are expensive and disruptive, making regular professional maintenance the most cost-effective approach.', bullets: ['Water cascades down full building height — damp on multiple floors', 'Extensive wall staining — more visible and damaging at height', 'Emergency repairs are extremely expensive at 4-storey height', 'Regular cleaning prevents expensive remedial work', 'Our high-reach system eliminates scaffolding costs', 'Before and after photos document condition at all levels'] },
      ],
      faqs: [
        { question: 'Can you clean gutters on a 4-storey building without scaffolding?', answer: 'Yes — professional high-reach gutter vacuum systems clean gutters on 4-storey buildings from ground level. Scaffolding is not usually needed for cleaning alone.' },
        { question: 'How often should gutters on a 4-storey building be cleaned?', answer: 'At least twice per year, and more frequently if the building is near trees. The cost of regular cleaning is much lower than the cost of repairs for water damage at this height.' },
        { question: 'How much does it cost to clean gutters on a 4-storey building?', answer: 'Gutter cleaning for a 4-storey building typically costs £150-£300 depending on the building size and gutter condition. A site survey provides a fixed quote.' },
        { question: 'Is 4-storey gutter cleaning safe?', answer: 'Yes — when performed by trained professionals using certified equipment. Our operators are trained for high-level work and fully insured.' },
        { question: 'Does WOW Gutters Ltd clean gutters on 4-storey buildings?', answer: 'Yes — we have the equipment and expertise to clean gutters on buildings up to 6 storeys. Contact us for a site survey and fixed quote.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-flats-and-apartments') {
    return {
      heroTitle: 'Gutter Cleaning for Flats and Apartments',
      heroDescription: 'Gutter cleaning for flats and apartment blocks needs professional access equipment. WOW Gutters Ltd provides commercial and residential gutter cleaning for multi-occupancy buildings. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Residential Flats and Apartment Blocks', content: 'Flats and apartment blocks present unique challenges for gutter cleaning. The buildings are usually higher than standard houses requiring high-reach equipment. Multiple gutters on different roof levels often need cleaning — the main roof gutters, intermediate valley gutters, and balcony gutters. Access restrictions around the building may limit where equipment can be positioned. For apartment blocks, liaison with building management or the residents\' association is often needed to arrange access dates and parking for the cleaning vehicle.', bullets: ['Multi-level gutters — main roof, intermediate valleys, and balconies', 'High-reach vacuum system — cleans elevated apartment block gutters', 'Access coordination — liaison with management or residents\' association', 'Parking arrangements — equipment vehicle needs space near the building', 'Multiple downpipes — each apartment may have its own downpipe run', 'Scheduled maintenance plans — bi-annual cleaning keeps costs predictable'] },
        { heading: 'Commercial Gutter Cleaning for Apartment Complexes', content: 'For large apartment complexes, WOW Gutters Ltd offers commercial gutter cleaning contracts with scheduled visits. We inspect and clean all gutters on the complex, including flat roof gutters, parapet gutters, and valley gutters. A single condition report is provided for the entire building, making it easy for property managers to track maintenance. Regular commercial gutter cleaning protects the building structure, prevents complaints from residents about damp and leaks, and maintains the value of the property.', bullets: ['Full building inspection — all gutter runs inspected and documented', 'Scheduled commercial maintenance — bi-annual or quarterly cleaning visits', 'Single condition report for the entire building', 'Flat roof gutter cleaning — internal and parapet gutters', 'Valley gutter cleaning — between roof sections and around dormers', 'Competitive rates for block bookings and annual contracts'] },
      ],
      faqs: [
        { question: 'Who is responsible for gutter cleaning in flats?', answer: 'In leasehold flats, the freeholder or management company is usually responsible for maintaining the structure, including gutters. In shared ownership, responsibility depends on the specific agreement.' },
        { question: 'How much does gutter cleaning cost for an apartment block?', answer: 'Costs vary significantly depending on the size and height of the building. A small block of 4-6 flats typically costs £150-£300. Larger complexes require a site survey for an accurate quote.' },
        { question: 'How do you access gutters on apartment blocks?', answer: 'We use high-reach gutter vacuum systems that access gutters from ground level. For very high buildings, we may use a cherry picker or access platform in addition to the vacuum system.' },
        { question: 'Can you clean gutters on flats while residents are home?', answer: 'Yes — our work is non-intrusive. We clean gutters from outside the building with minimal disruption to residents. We coordinate with building management to agree on access times.' },
        { question: 'Does WOW Gutters Ltd offer contracts for apartment blocks?', answer: 'Yes — we offer annual and bi-annual gutter cleaning contracts for apartment blocks and flat complexes. Contact us for a site survey and contract quote.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-terraced-house-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning for Terraced Houses in Birmingham',
      heroDescription: 'Professional gutter cleaning for terraced houses in Birmingham. WOW Gutters Ltd provides fast, affordable service for all Birmingham terraced properties. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Birmingham Terraced Houses', content: 'Terraced houses in Birmingham typically have simpler gutter systems than detached or semi-detached properties. A standard Birmingham terraced house has one or two gutter runs and a single downpipe at the rear or front. The compact layout makes gutter cleaning quicker and more affordable. However, access can sometimes be restricted — rear gardens may be small or have limited space for equipment, and some Birmingham terraces have shared access alleys that need coordination with neighbours.', bullets: ['Simple gutter layout — 1-2 gutter runs, typically one downpipe', 'Quicker cleaning — most terraced cleans take 30-45 minutes', 'More affordable — cleaning costs less than for larger properties', 'Access restrictions — small rear gardens or shared alleys', 'Party wall considerations — shared downpipes between terraced houses', 'Birmingham-wide service — all areas covered from city centre to suburbs'] },
        { heading: 'Why Birmingham Terraced House Owners Choose WOW Gutters Ltd', content: 'WOW Gutters Ltd understands Birmingham\'s housing stock, including Victorian and early 20th-century terraced houses that often have original cast iron guttering. These older systems need careful handling — cast iron gutters are prone to rust and cracking if mishandled. Our team knows how to clean and inspect these traditional systems properly. We also provide same-day service for emergency gutter issues, which is essential during Birmingham\'s rainy seasons.', bullets: ['Experience with Victorian and Edwardian cast iron guttering', 'Careful handling of older, fragile gutter systems', 'Same-day service available for emergencies', 'Birmingham-wide coverage — all areas and postcodes', 'Before and after photos provided on every job', 'Fixed quotes with no hidden charges'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost for a terraced house in Birmingham?', answer: 'Gutter cleaning for a Birmingham terraced house typically costs £40-£80 depending on access and gutter condition. We provide free fixed quotes before starting work.' },
        { question: 'How long does it take to clean gutters on a terraced house?', answer: 'Most Birmingham terraced houses take 30-45 minutes for a thorough gutter clean including downpipe testing.' },
        { question: 'Do you need access to the rear of the terraced house?', answer: 'Yes — we need access to the rear garden or yard to clean rear gutters and the downpipe. If access is through a shared alley, we coordinate with neighbours where needed.' },
        { question: 'Do you clean gutters on Birmingham terraced houses with cast iron guttering?', answer: 'Yes — we have extensive experience with Victorian cast iron gutters common in Birmingham\'s older terraced houses. We handle them carefully to avoid damage.' },
        { question: 'Does WOW Gutters Ltd cover all Birmingham areas?', answer: 'Yes — we cover Birmingham city centre and all suburbs including Aston, Edgbaston, Handsworth, Kings Heath, Moseley, Sparkhill, Yardley, and all other Birmingham areas.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-victorian-house') {
    return {
      heroTitle: 'Gutter Cleaning for Victorian Houses',
      heroDescription: 'Victorian houses need specialist gutter care — many have original cast iron systems that require careful handling. WOW Gutters Ltd provides expert Victorian property gutter cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Challenges Specific to Victorian Houses', content: 'Victorian houses have gutter systems that differ significantly from modern properties. Many still have original cast iron gutters that are heavy, prone to rust, and connected with bolted joints that can leak if disturbed. The gutter profile is often different from modern half-round or square profiles — Victorian ogee gutters have a distinctive decorative shape that requires specific cleaning techniques. Downpipes are often integrated into the brickwork or run internally, making blockages harder to diagnose and clear. These factors mean Victorian houses need a gutter cleaner who understands older properties.', bullets: ['Cast iron gutters — heavy, prone to rust, need careful handling', 'Ogee profile — decorative shape requires specific cleaning technique', 'Bolted joints — can leak if disturbed by inexperienced cleaners', 'Internal downpipes — hidden inside walls, hard to diagnose blockages', 'Shallow gutter channel — easily overwhelmed by debris buildup', 'Original brackets — may be weak and unable to support heavy debris weight'] },
        { heading: 'How WOW Gutters Ltd Cares for Victorian Gutters', content: 'WOW Gutters Ltd treats Victorian properties with extra care. We use gentle hand-cleaning methods where cast iron gutters are fragile, avoiding heavy vacuum suction that could stress weak joints. We inspect all joints carefully and note any existing leaks or cracks. Internal downpipes are tested with measured water volumes to confirm flow without overloading the system. Where repairs are needed on Victorian guttering, we can advise on period-appropriate replacement options that maintain the character of your property.', bullets: ['Gentle hand cleaning — avoids stress on fragile cast iron joints', 'Careful joint inspection — identifies existing leaks and weaknesses', 'Internal downpipe testing — measured water test for hidden downpipes', 'Period-appropriate advice — replacement like-for-like with cast iron', 'Descaling treatment — removes internal rust flakes from cast iron gutters', 'Before and after photos — document condition of your period property'] },
      ],
      faqs: [
        { question: 'Can you clean Victorian cast iron gutters?', answer: 'Yes — we specialise in cleaning Victorian cast iron gutters. We use gentle methods that avoid damaging the original ironwork or disturbing aged joint seals.' },
        { question: 'How often should Victorian house gutters be cleaned?', answer: 'Victorian gutters should be cleaned at least twice per year. Because the gutter channels are often shallower than modern gutters, they block more quickly and benefit from more frequent maintenance.' },
        { question: 'Do Victorian gutters need special cleaning equipment?', answer: 'Yes — the ogee profile of Victorian gutters needs specific vacuum attachments and cleaning tools. Standard gutter cleaning equipment may not fit the decorative profile properly.' },
        { question: 'Can you repair Victorian cast iron gutters?', answer: 'We can advise on repairs and refer you to specialists for cast iron repair or replacement. We also provide detailed condition reports that help you plan any necessary restoration work.' },
        { question: 'Does WOW Gutters Ltd clean gutters on listed Victorian buildings?', answer: 'Yes — we have experience working on listed properties and understand the additional care required. We use non-invasive methods that comply with listed building conservation requirements.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-new-build-estate') {
    return {
      heroTitle: 'Gutter Cleaning for New Build Estates',
      heroDescription: 'New build estates need regular gutter cleaning to prevent common issues with modern guttering systems. WOW Gutters Ltd provides estate-wide cleaning services. Call 07421 433910.',
      sections: [
        { heading: 'Why New Build Estates Need Gutter Cleaning Too', content: 'Many homeowners on new build estates assume new gutters do not need cleaning for years. In reality, new build properties have their own gutter problems. During the first year of occupancy, construction dust and debris from roof works accumulate in gutters. Modern low-profile gutters installed on new builds have less capacity than traditional systems, so they block more quickly. Many new build estates also have limited landscaping, meaning soil and sediment wash into gutters during the first few rainfalls.', bullets: ['Construction debris — dust, tile fragments, and mortar in gutters', 'Low-profile gutters — less capacity, block more quickly than traditional', 'Sediment runoff — exposed soil from new landscaping washes into gutters', 'Shallow downpipe connections — more prone to blockage from fine debris', 'Warranty considerations — some warranties require proof of maintenance', 'Estate-wide programmes — discounted rates for multiple homes on same estate'] },
        { heading: 'Keeping New Build Gutters in Top Condition', content: 'A professional gutter clean during the first year of occupancy removes construction debris and establishes a maintenance baseline. After that, twice-yearly cleaning keeps the modern gutter system working efficiently. On new build estates where houses share similar designs, WOW Gutters Ltd offers estate-wide gutter cleaning programmes — cleaning multiple homes in one visit at a reduced per-house rate. This is particularly popular with residents\' groups and estate management companies.', bullets: ['First-year clean essential — removes construction debris', 'Twice-yearly schedule — keeps modern gutters working efficiently', 'Estate-wide programmes — discounted rates for multiple homes', 'Group bookings — neighbours share a visit date for convenience', 'Before and after photos — build a maintenance record for warranty', 'Downpipe testing — essential for new build shallow connections'] },
      ],
      faqs: [
        { question: 'Do new build houses need gutter cleaning?', answer: 'Yes — new build gutters accumulate construction debris, sediment, and fine dust that can cause blockages within the first year. A first-year clean is strongly recommended.' },
        { question: 'How often should gutters on a new build be cleaned?', answer: 'Twice per year is recommended for new build properties. The first clean should be within 12 months of completion to remove construction debris.' },
        { question: 'Can new build gutters be cleaned more cheaply as a group?', answer: 'Yes — we offer discounted rates for cleaning multiple homes on the same estate in a single visit. Group bookings with neighbours can significantly reduce individual costs.' },
        { question: 'Does WOW Gutters Ltd offer estate-wide gutter cleaning?', answer: 'Yes — we can clean multiple homes on new build estates in one visit, providing an estate-wide maintenance programme at competitive rates.' },
        { question: 'How do I book gutter cleaning for my new build home?', answer: 'Call 07421 433910 or contact us online. We cover new build estates across Birmingham and the West Midlands.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-above-conservatory') {
    return {
      heroTitle: 'Gutter Cleaning Above a Conservatory',
      heroDescription: 'Cleaning gutters above a conservatory is challenging — the conservatory roof blocks access. WOW Gutters Ltd provides specialist gutter cleaning for conservatory roofs. Call 07421 433910.',
      sections: [
        { heading: 'The Challenge of Cleaning Gutters Above a Conservatory', content: 'Gutters located above a conservatory are some of the most difficult to access. The conservatory roof sits directly below the main house gutter, leaving no room for ladders. Standing on the conservatory roof is dangerous and can damage the roof panels. This is where professional gutter vacuum systems are indispensable — the long-reach pole can access the gutter from the side or from ground level at the gable end. In some cases, telescopic tools from an upstairs window or access from a neighbouring higher point may be needed.', bullets: ['Conservatory roof blocks ladder access — no room to position safely', 'Standing on conservatory roof is dangerous — can damage polycarbonate panels', 'Gutter vacuum — reaches above conservatory from ground level', 'Side access — vacuum pole extended from gable end where possible', 'Window access — telescopic tools used from upstairs windows', 'Specialist techniques needed — not a standard gutter cleaning job'] },
        { heading: 'Why Professional Cleaning Is Essential for Conservatory Gutters', content: 'Gutters above conservatories are often neglected because they are so difficult to access. This neglect causes serious problems — water overflowing from the hidden gutter cascades directly onto the conservatory roof, causing staining, algae growth, and water pooling on the conservatory panels. Over time, the constant moisture may cause leaks in the conservatory roof seals and damage the frame. Regular professional cleaning of conservatory gutters protects both the house and the conservatory.', bullets: ['Neglected conservatory gutters cause water to pool on the roof panels', 'Staining and algae growth on the conservatory roof surface', 'Damage to conservatory roof seals from constant moisture', 'Frame corrosion from water cascading onto aluminium or uPVC frames', 'Professional cleaning prevents expensive conservatory repairs', 'Our system accesses conservatory gutters without any conservatory roof contact'] },
      ],
      faqs: [
        { question: 'Can you clean gutters above a conservatory without standing on the roof?', answer: 'Yes — we use gutter vacuum systems with long-reach poles that access gutters above conservatories from ground level or gable ends, without any contact with the conservatory roof.' },
        { question: 'How much does it cost to clean gutters above a conservatory?', answer: 'Cleaning gutters above a conservatory typically adds £20-£40 to the standard gutter cleaning cost, reflecting the additional time and specialist access required.' },
        { question: 'How do I know if my conservatory gutters are blocked?', answer: 'Signs include water running down the conservatory roof during rain, green staining on conservatory panels, and water pooling on the conservatory roof after wet weather.' },
        { question: 'Are conservatory gutters difficult to maintain?', answer: 'Yes — they are among the most difficult gutters to clean because the conservatory roof blocks access. This is why many homeowners leave them uncleaned until problems occur.' },
        { question: 'Does WOW Gutters Ltd clean gutters above conservatories?', answer: 'Yes — we regularly clean gutters above conservatories using our high-reach vacuum system. Call 07421 433910 to book.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-dormer-bungalow') {
    return {
      heroTitle: 'Gutter Cleaning for Dormer Bungalows',
      heroDescription: 'Dormer bungalows have gutters at two levels — the main roof and the dormer. WOW Gutters Ltd provides complete gutter cleaning for dormer bungalows. Call 07421 433910.',
      sections: [
        { heading: 'Understanding Dormer Bungalow Gutter Systems', content: 'Dormer bungalows have a unique gutter configuration with two distinct levels. The main roof gutters run at the standard bungalow height — easily accessible from a ladder or vacuum system. However, the dormer gutters sit at a higher level and are often tucked into small valleys between the dormer structure and the main roof. These valley gutters are prone to debris accumulation because leaves and twigs collect naturally in the tight angles. A thorough dormer bungalow gutter clean must address both the main gutters and the dormer valleys.', bullets: ['Two-level gutter system — main roof gutters and dormer gutters', 'Dormer valley gutters — tight angles where debris collects naturally', 'Dormer side gutters — short runs on each side of the dormer window', 'Main gutters — standard bungalow height, easily accessible', 'Dormer gutters — higher level, needs long-reach or ladder access', 'Complete clean — both levels essential for proper drainage'] },
        { heading: 'Professional Dormer Bungalow Gutter Cleaning Service', content: 'WOW Gutters Ltd provides thorough gutter cleaning for dormer bungalows, addressing both gutter levels in a single visit. We start with the main gutters, then move to the dormer gutters and valley sections. The dormer gutters are cleaned using either our long-reach vacuum system or ladder access depending on the dormer height and accessibility. We pay particular attention to the valley gutters around the dormer, where debris buildup is most likely. All downpipes — both main and dormer — are tested and cleared as part of the service.', bullets: ['Main gutters — cleaned with standard vacuum or ladder access', 'Dormer gutters — cleaned with long-reach vacuum on higher levels', 'Valley gutters — careful debris removal from tight valley angles', 'Dormer downpipes — tested and cleared for proper drainage', 'Comprehensive service — both gutter levels in a single visit', 'Before and after photos — complete record of all gutter runs'] },
      ],
      faqs: [
        { question: 'How long does it take to clean gutters on a dormer bungalow?', answer: 'A complete dormer bungalow gutter clean — including main gutters, dormer gutters, and valley sections — typically takes 45-75 minutes.' },
        { question: 'Do dormer bungalows need gutter cleaning more often?', answer: 'Dormer valley gutters collect debris more quickly than standard gutter runs, so some dormer bungalows benefit from more frequent cleaning — especially those near trees.' },
        { question: 'Can you clean dormer gutters from ground level?', answer: 'Yes — in most cases, our long-reach gutter vacuum system can access dormer gutters from ground level without ladders.' },
        { question: 'How much does gutter cleaning cost for a dormer bungalow?', answer: 'Gutter cleaning for a dormer bungalow typically costs £60-£120 depending on the property size and the number of dormers.' },
        { question: 'Does WOW Gutters Ltd clean dormer bungalow gutters?', answer: 'Yes — we clean all types of dormer bungalow gutters across Birmingham and the West Midlands. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-hmo-landlord') {
    return {
      heroTitle: 'Gutter Cleaning for HMO Landlords',
      heroDescription: 'HMO landlords must keep gutters maintained for tenant safety and legal compliance. WOW Gutters Ltd provides professional HMO gutter cleaning across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Why HMO Landlords Must Prioritise Gutter Cleaning', content: 'Houses in Multiple Occupation (HMOs) have additional legal requirements beyond standard rental properties. The HMO licensing regulations require that the property is maintained in good repair, which includes functioning gutters and downpipes. Blocked gutters causing damp can render an HMO unfit for habitation, putting the landlord\'s licence at risk. Because HMOs typically have more occupants and higher turnover, gutter problems are reported less promptly than in single-let properties. Regular scheduled gutter maintenance protects the property, the tenants, and the landlord\'s compliance status.', bullets: ['HMO licence conditions — gutter maintenance required for compliance', 'Fitness for habitation — blocked gutters causing damp breaches standards', 'More occupants — gutter problems may go unreported for longer', 'Higher wear and tear — more cooking steam and bathroom moisture affects roof', 'Property value protection — prevent structural damp in high-occupancy homes', 'Tenant safety — prevent slip hazards from overflowing water and ice'] },
        { heading: 'WOW Gutters Ltd Services for HMO Landlords', content: 'WOW Gutters Ltd provides gutter cleaning services tailored to HMO landlords. We offer scheduled bi-annual cleaning with automatic reminders so you never fall out of compliance. Each visit includes before and after photographs and a written condition report — documentation that supports your HMO licence compliance file. Turnaround is fast — we understand that empty gutter cleaning slots between tenancies need to fit tight schedules. For HMO portfolio landlords, we offer discounted multi-property rates.', bullets: ['Bi-annual scheduled cleaning — spring and autumn visits', 'Compliance documentation — photos and written reports for HMO licence file', 'Fast turnaround — fits between tenancy changeovers', 'Multi-property discounts — reduced rates for portfolio HMO landlords', 'Emergency call-out service — blocked gutters fixed within 24 hours', 'Single point of contact — one phone number for all your HMO properties'] },
      ],
      faqs: [
        { question: 'Is gutter cleaning a legal requirement for HMO landlords?', answer: 'Yes — HMO licensing conditions require the property to be maintained in good repair. Functioning gutters are part of that requirement. Failure to maintain gutters can affect your HMO licence.' },
        { question: 'How often should HMO gutters be cleaned?', answer: 'At least twice per year. High-occupancy HMOs near trees or in damp areas may need quarterly cleaning to maintain compliance.' },
        { question: 'Can I claim HMO gutter cleaning as a business expense?', answer: 'Yes — gutter cleaning and maintenance for an HMO property is a legitimate business expense that can be offset against rental income.' },
        { question: 'Do you provide documentation for HMO compliance files?', answer: 'Yes — every visit includes before and after photographs, a condition report, and an invoice. These documents support your HMO compliance records.' },
        { question: 'Does WOW Gutters Ltd offer HMO portfolio discounts?', answer: 'Yes — we offer discounted rates for landlords with multiple HMO properties. Call 07421 433910 to discuss your portfolio cleaning needs.' },
      ],
    };
  }

  if (slug === 'block-of-flats-gutter-maintenance') {
    return {
      heroTitle: 'Block of Flats Gutter Maintenance',
      heroDescription: 'Gutter maintenance for blocks of flats protects the building structure and resident satisfaction. WOW Gutters Ltd provides professional maintenance for flats across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Maintenance Requirements for Blocks of Flats', content: 'Blocks of flats have complex gutter systems that need regular professional maintenance. Multiple roof levels mean multiple gutter runs — main roof gutters, parapet gutters, valley gutters between roof sections, and sometimes balcony gutters. The cost of water damage in a block of flats is multiplied because it can affect multiple flats on multiple floors. A single blocked gutter can cause water to cascade down the side of the building, penetrating the walls of every flat below. For this reason, regular scheduled gutter maintenance is essential for block management.', bullets: ['Multi-level gutters — main roof, parapet, valley, and balcony gutters', 'High risk — one blockage affects multiple flats on multiple floors', 'Expensive damage — water penetration in flats costs thousands to repair', 'Resident complaints — gutter-related damp causes tenant dissatisfaction', 'Building protection — regular maintenance extends gutter lifespan', 'Property value — well-maintained buildings retain higher value'] },
        { heading: 'WOW Gutters Ltd Block of Flats Maintenance Service', content: 'WOW Gutters Ltd provides comprehensive gutter maintenance contracts for blocks of flats. We survey the entire building, identify all gutter runs and downpipes, and establish a cleaning schedule that matches the building\'s needs. Each visit covers all gutters — main roof, parapets, valleys, and any subsidiary gutters — with all downpipes tested and cleared. We provide a single condition report for the whole building, making it easy for property managers and freeholders to track maintenance. Annual and bi-annual contracts available with competitive block rates.', bullets: ['Full building survey — identifies all gutter runs and access requirements', 'Scheduled maintenance — bi-annual or quarterly visits as required', 'All gutters cleaned — main roof, parapet, valley, and balcony gutters', 'Downpipe testing — every downpipe tested and cleared on every visit', 'Single condition report — one document for the entire building', 'Competitive block rates — discounted pricing for regular contracts'] },
      ],
      faqs: [
        { question: 'Who is responsible for gutter maintenance in a block of flats?', answer: 'The freeholder or management company is usually responsible for maintaining the structure, including gutters. Leaseholders are typically not responsible for gutter maintenance.' },
        { question: 'How often should gutters on a block of flats be cleaned?', answer: 'At least twice per year — spring and autumn. Blocks near trees or in exposed positions may need quarterly cleaning to prevent blockages.' },
        { question: 'How much does gutter maintenance cost for a block of flats?', answer: 'Costs depend on building size and gutter complexity. A small block of 4-6 flats typically costs £150-£300 per visit. A site survey provides a fixed annual contract quote.' },
        { question: 'Do you provide gutter maintenance contracts for block management?', answer: 'Yes — we offer annual and bi-annual gutter maintenance contracts for blocks of flats. We provide a single point of contact and consolidated invoicing for building managers.' },
        { question: 'Does WOW Gutters Ltd serve blocks of flats?', answer: 'Yes — we maintain gutters on blocks of flats across Birmingham and the West Midlands. Contact us for a site survey and contract quote.' },
      ],
    };
  }

  if (slug === 'emergency-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Emergency Gutter Cleaning Birmingham',
      heroDescription: 'Emergency gutter cleaning in Birmingham — same-day and next-day call-outs for overflowing gutters, blocked downpipes, and storm damage. WOW Gutters Ltd responds fast. Call 07421 433910.',
      sections: [
        { heading: 'When You Need Emergency Gutter Cleaning', content: 'Gutter emergencies never happen at a convenient time. A sudden storm, a blocked downpipe during heavy rain, or a gutter that separates at the joint during a downpour can cause water to pour directly against your walls. Emergency gutter cleaning means stopping the water flow fast — clearing the blockage, unblocking the downpipe, or making temporary repairs to prevent further water ingress. WOW Gutters Ltd prioritises emergency call-outs and aims to be on-site within hours of your call for Birmingham properties.', bullets: ['Storm damage — gutters torn or dislodged by high winds', 'Overflow in heavy rain — water pouring over gutter edges during downpour', 'Sudden downpipe blockage — water backing up and flooding walls', 'Gutter joint separation — water escaping at high volume from broken joint', 'Ice damage — frozen gutters cracked or split by freeze-thaw', 'Same-day response — emergency call-outs across Birmingham'] },
        { heading: 'Emergency Gutter Services Across Birmingham', content: 'WOW Gutts Ltd covers all Birmingham areas for emergency gutter call-outs. We carry a full set of equipment on our vans — gutter vacs, ladders, downpipe jetting kit, repair materials — so we can handle most emergencies in a single visit. If a temporary repair is needed to stop water ingress immediately, we make that first and return for permanent repairs later. We provide before and after photos for your insurance records, as emergency situations often involve insurance claims.', bullets: ['Birmingham-wide coverage — city centre to all suburbs', 'Fully equipped vans — handle most emergencies in one visit', 'Temporary repairs — stop water ingress fast, permanent fix scheduled', 'Insurance documentation — photos for emergency insurance claims', '24/7 call handling — emergency calls answered day and night', 'Fixed pricing — no surge pricing for emergency call-outs'] },
      ],
      faqs: [
        { question: 'How quickly can you respond to an emergency gutter call in Birmingham?', answer: 'We aim to be on-site within 2-4 hours for emergency gutter call-outs across Birmingham. Call 07421 433910 for the fastest response.' },
        { question: 'Do you charge more for emergency gutter cleaning?', answer: 'We keep our emergency call-out prices fair and transparent. The cost depends on the work required, not the urgency. We provide a fixed quote before starting any work.' },
        { question: 'What gutter emergencies do you handle?', answer: 'All types — overflowing gutters, blocked downpipes, storm-damaged gutters, joint separations, frozen gutters, and any situation where water is entering your property.' },
        { question: 'Can you repair emergency gutter damage on the same day?', answer: 'Yes — we carry repair materials and can make most emergency repairs on the same visit. Permanent repairs can be scheduled if temporary fixes are needed first.' },
        { question: 'Does WOW Gutters Ltd offer 24/7 emergency gutter cleaning?', answer: 'We offer same-day and next-day emergency call-outs for urgent gutter problems. Call 07421 433910 — our team will prioritise your emergency.' },
      ],
    };
  }

  if (slug === 'same-day-gutter-unblocking') {
    return {
      heroTitle: 'Same Day Gutter Unblocking',
      heroDescription: 'Need gutters unblocked today? WOW Gutters Ltd provides same-day gutter unblocking across Birmingham. Call 07421 433910 for fast, professional service.',
      sections: [
        { heading: 'Same-Day Gutter Unblocking Service', content: 'When your gutters are blocked and water is pouring over the edges, you cannot wait days for help. WOW Gutters Ltd offers same-day gutter unblocking for urgent situations across Birmingham. Our team arrives with everything needed to clear blockages fast — gutter vacuum, ladders, downpipe jetting equipment, and hand tools. We assess the blockage, clear it, and test the system before we leave. Same-day service is available for both residential and commercial properties.', bullets: ['Call before 12pm — same-day visit guaranteed', 'Fully equipped — gutter vac, jetting kit, hand tools on every van', 'Fast assessment — identify the blockage and clear it immediately', 'Downpipe clearance — water jetting for stubborn downpipe blockages', 'System test — every downpipe tested before we leave', 'Residential and commercial — same-day service for all property types'] },
        { heading: 'Common Blockages We Unblock Same-Day', content: 'Most same-day gutter unblocking jobs fall into a few common categories. The most frequent is a downpipe inlet blocked with compacted leaves — the gutter channel looks clear but the downpipe is sealed at the top. Next is a gutter channel packed with wet, compacted debris after months or years of neglect. Third is a downpipe blockage at the bottom bend where debris settles over time. All three can be cleared in a single same-day visit by our experienced team.', bullets: ['Downpipe inlet blocked — compacted leaves sealing the pipe top', 'Compacted gutter debris — wet sludge filling the entire channel', 'Downpipe bottom bend — debris settled in the lower elbow', 'Nesting material — bird or rodent nests blocking downpipes', 'Moss sludge — decomposed moss blocking downpipe inlets', 'Storm debris — twigs, leaves, and sediment washed into gutters'] },
      ],
      faqs: [
        { question: 'Do you offer same-day gutter unblocking at weekends?', answer: 'Yes — we offer same-day gutter unblocking 7 days a week in Birmingham. Weekend availability may be limited, so call early to secure your slot.' },
        { question: 'How much does same-day gutter unblocking cost?', answer: 'Same-day gutter unblocking costs from £50 for a simple downpipe clearance, up to £150 for heavily blocked systems. We provide a fixed quote before starting work.' },
        { question: 'How long does a same-day gutter unblocking visit take?', answer: 'Most same-day unblocking visits take 30-60 minutes, depending on the severity and location of the blockage.' },
        { question: 'Can you unblock gutters on two-storey properties same-day?', answer: 'Yes — our gutter vacuum system and ladders allow us to access gutters on two-storey and higher properties for same-day unblocking.' },
        { question: 'Does WOW Gutters Ltd provide same-day service across Birmingham?', answer: 'Yes — we provide same-day gutter unblocking across all Birmingham areas. Call 07421 433910 to book your same-day appointment.' },
      ],
    };
  }

  if (slug === 'gutter-overflowing-during-storm-help') {
    return {
      heroTitle: 'Gutter Overflowing During Storm — Help',
      heroDescription: 'Storm causing gutter overflow? WOW Gutters Ltd provides urgent storm-related gutter assistance across Birmingham. Call 07421 433910 for fast help.',
      sections: [
        { heading: 'What to Do When Your Gutters Overflow During a Storm', content: 'A storm is the worst time to discover your gutters are blocked. Heavy rain combined with high winds overloads gutters fast, and if the system is already partially blocked, water will pour over the edges and against your walls. The priority during a storm is to stop water entering your property. If safe, redirect water away from the building with temporary measures. Once the storm passes, call WOW Gutters Ltd for a thorough gutter clearance and inspection. We prioritise storm-damaged gutters and respond quickly to prevent further damage.', bullets: ['Stay safe — do not attempt ladder work in high winds or lightning', 'Redirect water — use temporary measures to divert water from walls', 'Check inside — look for damp patches on ceilings and upstairs walls', 'Document damage — take photos for insurance purposes', 'Call professionals — WOW Gutters Ltd prioritises storm call-outs', 'Post-storm inspection — full gutter check after weather clears'] },
        { heading: 'How WOW Gutters Ltd Handles Storm-Related Gutter Emergencies', content: 'WOW Gutters Ltd treats storm-related gutter emergencies as highest priority. Our vans carry extra equipment for storm response — including temporary gutter repair materials, high-power vacuums for waterlogged debris, and extra downpipe jetting capacity. We can clear storm-blocked gutters, reattach dislodged sections, and make temporary repairs to stop water ingress during ongoing wet weather. Once the system is clear, we identify any damage that needs permanent repair and provide a full condition report.', bullets: ['Highest priority — storm call-outs handled before routine work', 'Waterlogged debris removal — heavy wet sludge from storm blockage', 'Temporary reattachment — re-secure dislodged gutter sections', 'Emergency joint seal — stop water escaping from damaged joints', 'Full clearance — gutters and downpipes cleared of storm debris', 'Damage report — detailed condition report for insurance purposes'] },
      ],
      faqs: [
        { question: 'What should I do if my gutters overflow in a storm?', answer: 'Stay safe and do not attempt DIY fixes in dangerous conditions. Call WOW Gutters Ltd for professional emergency assistance. We prioritise storm-related call-outs.' },
        { question: 'Can you clear storm-blocked gutters while it is still raining?', answer: 'Yes — we can clear gutters in wet conditions if safe to do so. Our equipment handles waterlogged debris effectively.' },
        { question: 'Will my insurance cover storm damage from overflowing gutters?', answer: 'Storm damage is typically covered by home insurance, but pre-existing blockages from neglected gutters may not be. Regular maintenance records help support your claim.' },
        { question: 'How quickly can you respond to a storm gutter emergency?', answer: 'We aim to respond within 2-4 hours for storm-related gutter emergencies. Call 07421 433910 for priority service.' },
        { question: 'Does WOW Gutters Ltd handle post-storm gutter inspections?', answer: 'Yes — we provide thorough post-storm gutter inspections with a written condition report. This is essential for identifying damage and supporting insurance claims.' },
      ],
    };
  }

  if (slug === 'urgent-downpipe-unblocking-near-me') {
    return {
      heroTitle: 'Urgent Downpipe Unblocking Near Me',
      heroDescription: 'Need urgent downpipe unblocking near you in Birmingham? WOW Gutters Ltd provides fast, professional downpipe clearance. Call 07421 433910 for same-day service.',
      sections: [
        { heading: 'Urgent Downpipe Unblocking Service', content: 'A blocked downpipe is one of the most urgent gutter problems because it causes the entire system to fail. When the downpipe is blocked, water cannot exit the gutter channel — it backs up and overflows along the entire run. This puts pressure on every joint and bracket and saturates the wall below. Urgent downpipe unblocking clears the pipe fast using high-pressure water jetting, drain rods, or vacuum extraction depending on the blockage type and location.', bullets: ['High-pressure water jetting — clears compacted debris and sludge', 'Drain rods — for stubborn solid blockages in straight pipe runs', 'Vacuum extraction — removes debris from accessible pipe sections', 'Camera inspection — identifies hidden blockages in internal downpipes', 'Same-day response — urgent downpipe call-outs prioritised', 'All Birmingham areas — downpipe unblocking near you, fast'] },
        { heading: 'Signs You Need Urgent Downpipe Unblocking', content: 'Knowing the signs of a blocked downpipe helps you act before damage worsens. The most obvious sign is gutters overflowing during rain while the downpipe outlet shows little or no water flow. Gurgling sounds from the downpipe indicate air trapped behind a blockage. Water leaking from downpipe joints under pressure, or water pooling at the base of the downpipe outlet, are also urgent signs. If you notice any of these, call for urgent downpipe unblocking before the backup causes internal damp.', bullets: ['Gutter overflow with no downpipe flow — classic blocked downpipe sign', 'Gurgling sounds from pipe — air trapped behind blockage', 'Water leaking from pipe joints — pressure forcing water out of seals', 'Pooling at base outlet — the pipe is blocked but water is finding an exit', 'Slow drainage — water trickles from outlet long after rain stops', 'Damp patches on wall near downpipe — water penetrating masonry'] },
      ],
      faqs: [
        { question: 'How quickly can you unblock a downpipe urgently?', answer: 'We provide same-day and next-day urgent downpipe unblocking across Birmingham. Call 07421 433910 for the fastest response.' },
        { question: 'Do you use high-pressure jetting for downpipe blockages?', answer: 'Yes — high-pressure water jetting is our primary method for clearing stubborn downpipe blockages. It is effective on compacted debris, sludge, and minor root ingress.' },
        { question: 'Can you unblock downpipes that run inside the wall?', answer: 'Yes — we use camera inspection to locate internal downpipe blockages and targeted jetting to clear them without damaging the pipe or wall.' },
        { question: 'How much does urgent downpipe unblocking cost?', answer: 'Urgent downpipe unblocking costs from £50 for a simple clearance up to £150 for complex blockages requiring jetting or camera inspection.' },
        { question: 'Does WOW Gutters Ltd offer urgent downpipe unblocking near me?', answer: 'Yes — we cover all Birmingham areas. When you search for urgent downpipe unblocking near you in Birmingham, WOW Gutters Ltd is ready to help. Call 07421 433910.' },
      ],
    };
  }

  if (slug === 'weekend-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Weekend Gutter Cleaning Birmingham',
      heroDescription: 'Weekend gutter cleaning in Birmingham — Saturday and Sunday appointments available. WOW Gutters Ltd provides professional gutter cleaning at the weekend. Call 07421 433910.',
      sections: [
        { heading: 'Weekend Gutter Cleaning Service', content: 'We understand that weekdays are not always convenient for gutter cleaning. Many homeowners work during the week or prefer to be at home when work is done. WOW Gutters Ltd offers weekend gutter cleaning appointments on Saturdays and Sundays across Birmingham. Weekend appointments are popular, so booking in advance is recommended — especially during autumn and after storms when demand is highest. Our weekend service is the same professional standard as our weekday service, with full insurance coverage and before and after photos.', bullets: ['Saturday appointments available — morning and afternoon slots', 'Sunday appointments available — limited slots, book early', 'Same professional standard — full insurance and photos included', 'Popular service — book in advance, especially in autumn', 'No weekday disruption — weekend cleaning while you are home', 'All Birmingham areas — weekend service across the city'] },
        { heading: 'Why Choose Weekend Gutter Cleaning?', content: 'Weekend gutter cleaning offers several advantages beyond convenience. You can be present during the work to ask questions and see the condition of your gutters first-hand. If the cleaner identifies any issues — loose brackets, damaged joints, or fascia rot — you can discuss them immediately rather than receiving a report after the fact. Weekend appointments also avoid the need to take time off work or arrange for someone to let the cleaner into a rear garden during weekday hours.', bullets: ['Be present during cleaning — see gutter condition yourself', 'Discuss issues immediately — no waiting for a phone call or report', 'No time off work needed — weekend slot fits your schedule', 'Rear access management — you are home to unlock gates', 'Same-day booking for emergencies — weekend call-outs available', 'Family-friendly timing — appointments from 8am to 4pm at weekends'] },
      ],
      faqs: [
        { question: 'Do you charge extra for weekend gutter cleaning?', answer: 'No — weekend gutter cleaning is charged at the same rate as weekday cleaning. There is no premium for Saturday or Sunday appointments.' },
        { question: 'How do I book a weekend gutter cleaning appointment?', answer: 'Call 07421 433910 or contact us online. Weekend slots fill quickly, so early booking is recommended.' },
        { question: 'What weekend hours do you offer?', answer: 'We offer Saturday appointments from 8am to 4pm and limited Sunday appointments. We can discuss specific timing when you book.' },
        { question: 'Is weekend gutter cleaning available for emergency call-outs?', answer: 'Yes — we offer same-day weekend call-outs for urgent gutter problems. Call 07421 433910 for weekend emergency service.' },
        { question: 'Does WOW Gutters Ltd cover all of Birmingham at weekends?', answer: 'Yes — our weekend gutter cleaning service covers Birmingham city centre and all suburbs. Call to check availability in your area.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-before-selling-house') {
    return {
      heroTitle: 'Gutter Cleaning Before Selling Your House',
      heroDescription: 'Gutter cleaning before selling your house improves kerb appeal and reassures buyers. WOW Gutters Ltd provides pre-sale gutter cleaning across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Why Clean Gutters Before Selling Your House?', content: 'When selling your house, first impressions matter — and gutters are one of the first things a buyer notices. Clean gutters signal a well-maintained property. Surveyors also check gutters during their inspection, and a report noting blocked or damaged gutters can lead to the buyer renegotiating the price or demanding repairs before exchange. Pre-sale gutter cleaning costs relatively little but can save thousands in renegotiation or enforced repairs. It also prevents the embarrassment of a buyer discovering gutter problems during their viewing walkaround.', bullets: ['Positive first impression — clean gutters signal good maintenance', 'Surveyor inspection — problematic gutters flagged in homebuyer report', 'Price renegotiation — buyers use gutter defects to negotiate reductions', 'Quick to fix — cleaning costs less than a renegotiated price reduction', 'Kerb appeal — overflowing gutters stain walls and look neglected', 'Viewing confidence — walk around the property without gutter concerns'] },
        { heading: 'Pre-Sale Gutter Cleaning Checklist', content: 'Before putting your house on the market, arrange a professional gutter clean and inspection. The clean removes all debris so gutters look clean from the ground — a simple visual difference that buyers notice. The inspection identifies any issues that a surveyor would flag — loose brackets, damaged joints, or sagging sections. If repairs are needed, get them done before the surveyor visits. Retain the invoice as proof of recent maintenance, which you can share with buyers or their solicitors.', bullets: ['Professional gutter clean — removes all visible debris', 'Full inspection — identify loose brackets, joint damage, sagging', 'Repair any issues — fix problems before surveyor visit', 'Retain invoice — proof of recent maintenance for buyer', 'Clean downpipes — test all downpipes for clear flow', 'Before and after photos — share with potential buyers'] },
      ],
      faqs: [
        { question: 'Does cleaning gutters help sell a house?', answer: 'Yes — clean gutters improve kerb appeal and signal good maintenance. Surveyors check gutters, and a clean report avoids price renegotiations or repair demands.' },
        { question: 'When should I clean gutters before selling?', answer: 'Arrange gutter cleaning 1-2 weeks before the estate agent takes photos and 2-4 weeks before the first viewings. This gives time for any repairs identified during the clean.' },
        { question: 'Will a surveyor check my gutters?', answer: 'Yes — homebuyer surveys include a visual inspection of gutters. Surveyors note visible blockages, overflow staining, and sagging or damaged sections.' },
        { question: 'How much does pre-sale gutter cleaning cost?', answer: 'Pre-sale gutter cleaning costs the same as standard cleaning — £50-£150 depending on property size. It is a small investment compared to the cost of renegotiation.' },
        { question: 'Does WOW Gutters Ltd provide pre-sale gutter cleaning?', answer: 'Yes — we provide professional gutter cleaning for sellers across Birmingham. We also provide invoices for your solicitor to share with the buyer\'s solicitor.' },
      ],
    };
  }

  if (slug === 'pre-winter-gutter-clear-birmingham') {
    return {
      heroTitle: 'Pre-Winter Gutter Clear Birmingham',
      heroDescription: 'Pre-winter gutter clearing in Birmingham protects your home from winter rain, frost, and storm damage. Book your autumn gutter clean now — call 07421 433910.',
      sections: [
        { heading: 'Why Pre-Winter Gutter Clearing Is Essential', content: 'Pre-winter gutter clearing is the most important gutter maintenance task of the year. Winter brings the heaviest rainfall, freezing temperatures that crack waterlogged pipes, and storms that overwhelm blocked systems. Clearing gutters before winter ensures water flows freely through the system, preventing overflow that can lead to internal damp, frost damage to pipes, and ice dams that further block the gutters. In Birmingham, with its clay soil and many Victorian properties, water damage from winter gutter blockages is a leading cause of expensive home repairs.', bullets: ['Prevents overflow — clear gutters handle winter rainfall properly', 'Stops frost damage — no trapped water to freeze and crack pipes', 'Prevents ice dams — no debris for ice to build up against', 'Protects fascia boards — no constant wetting from overflow', 'Avoids emergency call-outs — winter gutter emergencies cost more', 'Birmingham-specific — protects Victorian and older properties from damp'] },
        { heading: 'Pre-Winter Gutter Clear Service — What We Do', content: 'WOW Gutters Ltd pre-winter gutter clear includes a thorough clean of all gutter channels, testing and clearing of every downpipe, inspection of joints and brackets, and removal of all debris from your property. We use our gutter vacuum system for efficient cleaning and ladders for close inspection where needed. After the clean, we provide before and after photos and a written condition report highlighting any issues that may need attention before winter. We recommend booking your pre-winter clean in October or November.', bullets: ['Full gutter channel clean — all debris removed from every section', 'Downpipe testing — every downpipe checked for free flow', 'Downpipe jetting — high-pressure clearance of any blockages', 'Joint and bracket inspection — identify issues before winter storms', 'Debris removal — all waste bagged and taken away', 'Condition report — written summary with before and after photos'] },
      ],
      faqs: [
        { question: 'When should I book pre-winter gutter clearing in Birmingham?', answer: 'Book for October or November before winter weather sets in. September bookings also work well and avoid the November rush.' },
        { question: 'How much does pre-winter gutter clearing cost in Birmingham?', answer: 'Pre-winter gutter clearing costs £50-£150 depending on property size. The cost is much less than emergency winter call-out charges.' },
        { question: 'What happens if I do not clear my gutters before winter?', answer: 'Blocked gutters overflow in winter rain, causing damp and frost damage. Trapped water freezes and cracks pipes. Emergency winter call-outs are more expensive and harder to schedule.' },
        { question: 'Do you offer pre-winter gutter clearing for commercial properties in Birmingham?', answer: 'Yes — we provide pre-winter gutter clearing for commercial properties, blocks of flats, and industrial buildings across Birmingham.' },
        { question: 'Does WOW Gutters Ltd offer pre-winter gutter clearing in Birmingham?', answer: 'Yes — we provide pre-winter gutter clearing across all Birmingham areas. Call 07421 433910 to book your slot before the winter rush.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-after-storm-damage') {
    return {
      heroTitle: 'Gutter Cleaning After Storm Damage',
      heroDescription: 'Storm-damaged gutters need urgent cleaning and inspection. WOW Gutters Ltd provides post-storm gutter cleaning across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Post-Storm Gutter Cleaning and Inspection', content: 'After a severe storm, your gutters may be damaged even if they look fine from the ground. High winds can dislodge gutter sections, loosen brackets, and blow large amounts of debris into the system. Heavy rain tests every weak joint and blocked section — problems that were hidden during dry weather are exposed. A post-storm gutter clean and inspection identifies all issues: debris blockages, displaced sections, damaged joints, and loosened fixings. Early identification prevents minor storm damage from becoming major repair work.', bullets: ['Debris clearance — leaves, twigs, and sediment washed into gutters by storm', 'Dislodged sections — gutter sections knocked out of alignment by wind', 'Loose brackets — brackets loosened by storm force on debris-heavy gutters', 'Joint damage — joints stressed by sudden water volume and debris weight', 'Downpipe checks — storm debris blocking downpipe inlets', 'Full condition report — document damage for insurance purposes'] },
        { heading: 'Why Professional Post-Storm Gutter Cleaning Matters', content: 'Attempting to assess storm damage to gutters yourself is dangerous and usually incomplete. From ground level, you cannot see displaced sections, cracked joints, or loosened brackets that are not visibly hanging. A professional inspection uses ladders and cameras to examine every part of the system. Professional cleaning after a storm also ensures that all debris is removed before it compacts and causes secondary blockages. If your home insurance covers storm damage, our documented inspection and photos support your claim.', bullets: ['Professional inspection — thorough assessment from ladders and cameras', 'Hidden damage detection — displaced sections and cracks not visible from ground', 'Debris removal — prevents secondary blockages from compacted storm debris', 'Insurance support — documented inspection with photos for claims', 'Same-day service — post-storm call-outs prioritised', 'Birmingham-wide — post-storm gutter service across all areas'] },
      ],
      faqs: [
        { question: 'Should I clean my gutters after a storm?', answer: 'Yes — a post-storm clean removes debris washed into gutters and identifies any damage caused by wind or heavy rain. This prevents secondary problems.' },
        { question: 'Can storm damage to gutters be repaired?', answer: 'Yes — most storm damage can be repaired. Dislodged sections can be reattached, loose brackets tightened, and damaged joints sealed. Severe damage may need section replacement.' },
        { question: 'Does home insurance cover storm damage to gutters?', answer: 'Most home insurance policies cover storm damage to gutters. A professional inspection report with photos strengthens your claim.' },
        { question: 'How quickly can you inspect gutters after a storm?', answer: 'We prioritise post-storm gutter inspections and aim to visit within 24-48 hours. Call 07421 433910 to book a post-storm inspection.' },
        { question: 'Does WOW Gutters Ltd provide post-storm gutter cleaning?', answer: 'Yes — our post-storm gutter cleaning service covers inspection, debris removal, and a condition report for insurance purposes.' },
      ],
    };
  }

  if (slug === 'christmas-gutter-cleaning-availability') {
    return {
      heroTitle: 'Christmas Gutter Cleaning Availability',
      heroDescription: 'Christmas gutter cleaning in Birmingham — available through the festive period. WOW Gutters Ltd provides pre-Christmas and between-Christmas gutter cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Christmas Gutter Cleaning Service', content: 'Christmas is a busy time, and gutter cleaning is often the last thing on your list — until you need it urgently. Overflowing gutters, wet walls, and damp patches are not what you want while hosting family for Christmas. WOW Gutters Ltd offers Christmas gutter cleaning appointments in the weeks before Christmas and limited availability between Christmas and New Year. Pre-Christmas slots are the most popular and book up fast, so early booking is essential.', bullets: ['Pre-Christmas availability — late November to 23rd December', 'Between Christmas and New Year — limited slots available', 'Emergency Christmas call-outs — for urgent gutter problems', 'Popular service — book early for December availability', 'Same standard — full service with photos even through the holiday period', 'Perfect gift for homeowners — gutter cleaning gift vouchers available'] },
        { heading: 'Christmas Gutter Preparation — What We Recommend', content: 'If you are hosting Christmas, a pre-Christmas gutter clean ensures your home is ready. Clean gutters prevent overflow during winter rain, keeping walls dry and your home comfortable for guests. We recommend booking your Christmas gutter clean for late November or early December — early enough to avoid the pre-Christmas rush but late enough that most autumn leaves have fallen. If you need gutter repairs before Christmas, book even earlier to allow time for parts and scheduling.', bullets: ['Book late November to early December for best availability', 'Pre-Christmas clean prevents overflow during family gatherings', 'Hosting confidence — no damp patches or wet walls for Christmas', 'Emergency service available for Christmas Day call-outs', 'Gift vouchers — give the gift of clean gutters this Christmas', 'Early booking recommended — December slots fill by mid-November'] },
      ],
      faqs: [
        { question: 'Do you work through the Christmas period?', answer: 'Yes — we work through the festive period with limited availability. Pre-Christmas slots (up to 23rd December) and between-Christmas slots are available. Emergency call-outs are handled throughout.' },
        { question: 'When should I book Christmas gutter cleaning?', answer: 'Book by mid-November for December availability. Early December bookings are possible but subject to availability.' },
        { question: 'Do you charge extra for Christmas gutter cleaning?', answer: 'No — our standard pricing applies throughout the Christmas period. There is no festive surcharge.' },
        { question: 'Can I get gutter cleaning as a Christmas gift?', answer: 'Yes — we offer gutter cleaning gift vouchers. A perfect gift for homeowners who prefer practical presents.' },
        { question: 'Does WOW Gutters Ltd offer Christmas gutter cleaning?', answer: 'Yes — we offer Christmas gutter cleaning appointments in Birmingham. Call 07421 433910 to book your pre-Christmas slot.' },
      ],
    };
  }

  if (slug === 'gutter-frozen-overflow-ice-winter') {
    return {
      heroTitle: 'Gutter Frozen — Overflow Ice Winter',
      heroDescription: 'Frozen gutters cause ice dams, overflow, and pipe damage. WOW Gutters Ltd provides winter gutter services across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Problems Caused by Frozen Gutters in Winter', content: 'Frozen gutters create a cascade of problems that can cause significant damage. When water trapped in a blocked gutter freezes, it expands and can crack cast iron gutters, split plastic guttering, and force joints apart. The ice dam at the gutter edge prevents further water from draining, causing it to overflow behind the fascia board and into the roof space. As the ice thaws, the trapped water finds its way into the building. Frozen downpipes can burst, requiring full replacement. Preventing ice buildup through regular gutter cleaning is essential.', bullets: ['Expanding ice cracks pipes — freeze-thaw splits plastic and cast iron', 'Ice dams block drainage — water trapped behind ice overflows into roof', 'Fascia damage — overflow water behind fascia causes wood rot', 'Burst downpipes — frozen water expands and splits pipe sections', 'Internal leaks — thawing water enters roof space and ceilings', 'Gutter joint failure — ice forces sealed joints apart'] },
        { heading: 'Winter Gutter Services From WOW Gutters Ltd', content: 'WOW Gutters Ltd provides winter gutter services to prevent and resolve frozen gutter problems. Our pre-winter gutter clean removes debris that would trap water and freeze. If your gutters are already frozen, we can safely thaw downpipes using hot water treatment and clear the ice dam. After the thaw, we inspect the system for freeze damage — cracked pipes, failed joints, and loosened brackets — and provide a repair plan. We also offer ice-dam prevention advice and gutter maintenance plans that keep your system clear through winter.', bullets: ['Pre-winter clean — removes debris that would trap and freeze water', 'Safe ice dam removal — careful thawing without damaging gutters', 'Downpipe thawing — hot water treatment for frozen pipes', 'Freeze damage inspection — check for cracks, joint failure, bracket damage', 'Emergency thaw service — for burst or leaking frozen gutters', 'Winter maintenance plans — scheduled cleaning through the cold months'] },
      ],
      faqs: [
        { question: 'What should I do if my gutters are frozen?', answer: 'Do not attempt to chip ice away — this can crack the gutter. Call WOW Gutters Ltd for professional thawing. In the meantime, place buckets under internal leaks to catch thawing water.' },
        { question: 'Can frozen gutters cause roof damage?', answer: 'Yes — ice dams force water under roof tiles, causing roof leaks and damage to roof timbers. This is one of the most common winter roof problems.' },
        { question: 'How do I stop my gutters from freezing?', answer: 'The best prevention is keeping gutters clean. Debris traps water that freezes in cold weather. Regular gutter cleaning before winter is the most effective prevention.' },
        { question: 'Do you offer emergency frozen gutter services?', answer: 'Yes — we provide emergency winter gutter services for frozen and burst gutters. Call 07421 433910 for urgent assistance.' },
        { question: 'Does WOW Gutters Ltd provide winter gutter maintenance?', answer: 'Yes — our pre-winter gutter cleaning service is designed specifically to prevent frozen gutter problems. We also offer winter maintenance plans.' },
      ],
    };
  }

  if (slug === 'fascia-soffit-cleaning-near-me') {
    return {
      heroTitle: 'Fascia and Soffit Cleaning Near Me',
      heroDescription: 'Professional fascia and soffit cleaning near you in Birmingham. WOW Gutters Ltd restores the look of your roofline without expensive replacement. Call 07421 433910.',
      sections: [
        { heading: 'Fascia and Soffit Cleaning — What We Do', content: 'Fascia boards and soffits accumulate algae, moss, dirt, and mildew over time. Green and black staining not only looks unsightly but can also trap moisture against the wood or uPVC, accelerating deterioration. WOW Gutters Ltd uses a combination of soft washing and gentle hand cleaning to remove all biological growth and ingrained dirt from fascias and soffits. We use low-pressure water and cleaning solutions safe for uPVC, wood, and composite materials. The result is a like-new appearance that transforms the look of your property from the kerb.', bullets: ['Soft washing method — low-pressure cleaning safe for all materials', 'Removes algae, moss, mildew, and ingrained dirt', 'Safe for uPVC, timber, and composite fascia boards', 'Restores original colour — no more green or black staining', 'No need for replacement — cleaning saves thousands', 'Before and after photos — see the transformation'] },
        { heading: 'Why Choose WOW Gutters Ltd for Fascia and Soffit Cleaning', content: 'Fascia and soffit cleaning requires the right balance of gentle cleaning and effective dirt removal. Too much pressure damages the surface; too little leaves staining behind. WOW Gutters Ltd has the experience to clean fascias and soffits properly — using the right cleaning solutions, the right pressure, and the right technique for your specific material. We also inspect your fascias for rot or damage during cleaning, alerting you to any issues that need repair. Our fascia cleaning service covers all Birmingham areas.', bullets: ['Experienced team — know the right technique for each material', 'Proper solution dilution — effective cleaning without surface damage', 'Inspection included — identify rot or damage during cleaning', 'Birmingham-wide coverage — all suburbs and city centre', 'Competitive pricing — affordable fascia and soffit cleaning', 'Combined service — book with gutter cleaning for best value'] },
      ],
      faqs: [
        { question: 'How often should fascias and soffits be cleaned?', answer: 'Fascias and soffits typically need cleaning every 2-3 years, depending on local conditions. Properties near trees or in damp areas may need annual cleaning.' },
        { question: 'Can you clean fascias without damaging them?', answer: 'Yes — we use soft washing methods with low-pressure water and appropriate cleaning solutions. This is safe for uPVC, timber, and composite fascia materials.' },
        { question: 'Does fascia cleaning remove black streaks and green algae?', answer: 'Yes — our cleaning solutions are specifically formulated to remove algae, moss, and the black streaks caused by airborne dirt and biological growth.' },
        { question: 'How much does fascia and soffit cleaning cost near me?', answer: 'Fascia and soffit cleaning costs £100-£250 for a standard property depending on size and condition. We provide free fixed quotes.' },
        { question: 'Does WOW Gutters Ltd clean fascias and soffits near me?', answer: 'Yes — we provide fascia and soffit cleaning across Birmingham and the West Midlands. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'conservatory-roof-cleaning-birmingham') {
    return {
      heroTitle: 'Conservatory Roof Cleaning Birmingham',
      heroDescription: 'Professional conservatory roof cleaning in Birmingham. WOW Gutters Ltd removes algae, moss, and staining from conservatory roofs. Call 07421 433910.',
      sections: [
        { heading: 'Conservatory Roof Cleaning Service', content: 'Conservatory roofs are prone to algae growth, moss, and staining from airborne dirt and water runoff from the main roof above. Green algae on the glass or polycarbonate panels blocks sunlight and makes the conservatory feel dark and gloomy. Bird droppings, leaf residue, and general grime also accumulate on the roof surface. WOW Gutters Ltd uses a gentle soft washing method to clean all types of conservatory roofs — glass, polycarbonate, and solid tiled roofs. Our cleaning solutions kill algae and moss at the root, leaving the roof clean and bright.', bullets: ['Soft washing method — safe for glass, polycarbonate, and solid roofs', 'Algae and moss removal — kills growth at the root', 'Bird dropping and grime removal — thorough clean of all surfaces', 'Restores light — clean roof lets natural sunlight back in', 'No pressure washing — avoids damage to seals and panels', 'Birmingham-wide — conservatory cleaning across all areas'] },
        { heading: 'Why Professional Conservatory Roof Cleaning Matters', content: 'Cleaning a conservatory roof yourself is difficult and dangerous. Access is challenging, the roof surface is slippery when wet, and standing on the conservatory frame can damage it. Professional conservatory roof cleaning uses long-reach equipment from ground level — no walking on the roof, no risk of damage. Our cleaning solutions also include a protective treatment that slows regrowth of algae and moss, keeping the roof cleaner for longer.', bullets: ['No roof walking — all cleaning from ground level', 'Long-reach equipment — reaches all roof sections safely', 'Protective treatment — slows regrowth of algae and moss', 'Seal-safe — cleaning solutions compatible with all roof seals', 'Fascia and gutter clean available — combine for best value', 'Before and after photos — impressive transformation visible'] },
      ],
      faqs: [
        { question: 'How much does conservatory roof cleaning cost in Birmingham?', answer: 'Conservatory roof cleaning costs £100-£250 depending on the size and type of roof. Glass roofs may cost more than polycarbonate due to additional care needed.' },
        { question: 'Can you clean a conservatory roof without damaging it?', answer: 'Yes — we use soft washing methods that are safe for all conservatory roof types. We never walk on the roof and use low-pressure application only.' },
        { question: 'How often should a conservatory roof be cleaned?', answer: 'Most conservatory roofs benefit from cleaning every 2-3 years. If you have overhanging trees or the main roof gutters above are blocked, annual cleaning may be needed.' },
        { question: 'Will cleaning my conservatory roof make it lighter inside?', answer: 'Yes — removing algae and grime from the roof surface can significantly increase natural light levels inside the conservatory.' },
        { question: 'Does WOW Gutters Ltd provide conservatory roof cleaning in Birmingham?', answer: 'Yes — we provide professional conservatory roof cleaning across Birmingham. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'solar-panel-bird-proofing-gutter') {
    return {
      heroTitle: 'Solar Panel Bird Proofing — Gutter Protection',
      heroDescription: 'Solar panels attract nesting birds, which block gutters and damage panels. WOW Gutters Ltd provides bird proofing solutions coming soon to Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Coming Soon — Solar Panel Bird Proofing Service', content: 'Solar panels create a warm, sheltered gap between the panel and the roof tiles — the perfect nesting site for pigeons, gulls, and starlings. Birds nesting under solar panels drop debris, feathers, and droppings into the gutters below, causing rapid blockages. Their nesting material also traps moisture against the roof, potentially causing damp issues. WOW Gutters Ltd is developing a solar panel bird proofing service using mesh and spike systems that prevent birds from accessing the gap while allowing airflow and maintaining panel efficiency.', bullets: ['Bird mesh installation — stainless steel mesh seals the panel gap', 'Bespoke fitting — custom-cut to your solar panel layout', 'Gutter protection — prevents bird debris from blocking gutters', 'Panel protection — stops nesting damage to wiring and panels', 'Breathable design — allows airflow, maintains panel efficiency', 'Coming soon — register your interest for early availability'] },
        { heading: 'Why Bird Proof Solar Panels?', content: 'Once birds establish nests under solar panels, they are difficult to remove and return year after year. The debris from nesting birds accelerates gutter blockage dramatically — a property with bird-nesting solar panels may need gutter cleaning every few months instead of twice a year. Bird droppings also contain acids that can damage roof tiles and solar panel frames over time. Professional bird proofing is a one-time investment that protects both your solar investment and your gutter system for years to come.', bullets: ['Prevents recurring blockages — bird debris is a major gutter blocker', 'Protects panel investment — prevents nest damage to wiring', 'Hygienic — removes bird droppings from the roof area', 'Humane — proofing prevents nesting without harming birds', 'Cost-effective — one-off cost vs repeated gutter cleaning', 'Register interest — contact us for updates on this service'] },
      ],
      faqs: [
        { question: 'Is solar panel bird proofing available now?', answer: 'This service is coming soon. Register your interest by calling 07421 433910 and we will contact you when the service launches.' },
        { question: 'Does bird proofing affect solar panel performance?', answer: 'No — professional bird proofing is designed to allow full airflow around the panels, maintaining their efficiency while preventing bird access.' },
        { question: 'How does bird nesting under solar panels affect gutters?', answer: 'Nesting birds drop feathers, droppings, and nesting material into gutters, causing rapid blockages that require much more frequent gutter cleaning.' },
        { question: 'Is bird proofing humane?', answer: 'Yes — bird proofing uses mesh and spikes to prevent access without harming birds. It is a humane deterrent that keeps birds safe while protecting your property.' },
        { question: 'Does WOW Gutters Ltd offer solar panel bird proofing?', answer: 'We are launching this service soon. Call 07421 433910 to register your interest and be the first to know when it is available.' },
      ],
    };
  }

  if (slug === 'driveway-and-gutter-cleaning-package') {
    return {
      heroTitle: 'Driveway and Gutter Cleaning Package',
      heroDescription: 'Our driveway and gutter cleaning package saves you money on combined exterior cleaning. WOW Gutters Ltd provides professional cleaning across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Combined Driveway and Gutter Cleaning Package', content: 'WOW Gutters Ltd offers a combined driveway and gutter cleaning package that provides better value than booking each service separately. While our team is at your property cleaning gutters, we can also pressure wash your driveway, patio, or paths — saving you the cost of a separate call-out and reducing disruption to one visit instead of two. The package covers a full gutter clean with downpipe testing plus a full driveway or patio pressure wash. The combined service takes 2-4 hours for a standard property.', bullets: ['Full gutter clean — all channels cleared and downpipes tested', 'Driveway or patio pressure wash — algae, moss, oil stains removed', 'One visit — both services completed in a single appointment', 'Lower total cost — package discount vs booking separately', 'Any combination — driveway, patio, paths, or all three', 'Before and after photos — documentation for both services'] },
        { heading: 'Package Options and Pricing', content: 'Our driveway and gutter cleaning package is available for all property types. The standard package includes gutter cleaning for the main house plus pressure washing for a standard driveway or patio area. Larger driveways or additional patio areas can be included at a reduced add-on rate. We also offer a premium package that includes gutter cleaning, driveway pressure washing, and fascia and soffit cleaning — the complete exterior clean for your property.', bullets: ['Standard package — gutter clean + driveway up to 40m²', 'Large driveway package — gutter clean + driveway up to 80m²', 'Premium package — gutter clean + driveway + fascia cleaning', 'Add-on options — additional patios, paths, or wall cleaning', 'Fixed pricing — no hidden charges, quoted before work starts', 'Birmingham-wide — package available across all areas'] },
      ],
      faqs: [
        { question: 'How much does the driveway and gutter cleaning package cost?', answer: 'The combined package starts from £150 for a standard property including gutter cleaning and driveway pressure washing. The exact price depends on property size.' },
        { question: 'How long does the combined service take?', answer: 'Most combined gutter and driveway cleaning visits take 2-4 hours, depending on the size of the driveway and the condition of the gutters.' },
        { question: 'Can I add other services to the package?', answer: 'Yes — you can add patio or path cleaning, fascia cleaning, or conservatory roof cleaning at a reduced combined rate.' },
        { question: 'Is the driveway cleaning included in the package as thorough as a standalone service?', answer: 'Yes — the same professional-grade hot water pressure washing equipment is used, with the same attention to detail and the same before and after photos.' },
        { question: 'Does WOW Gutters Ltd offer package deals?', answer: 'Yes — our driveway and gutter cleaning package provides excellent value. Call 07421 433910 for a combined quote.' },
      ],
    };
  }

  if (slug === 'render-cleaning-birmingham') {
    return {
      heroTitle: 'Render Cleaning Birmingham',
      heroDescription: 'Professional render cleaning in Birmingham — safe removal of algae, moss, and staining from all render types. WOW Gutters Ltd provides expert soft washing. Call 07421 433910.',
      sections: [
        { heading: 'Render Cleaning Service — Safe Soft Washing', content: 'Render is a popular exterior finish for Birmingham homes, but it is prone to green algae growth, moss, and black staining — especially on north-facing walls and shaded elevations. Render is porous and delicate, so high-pressure washing can damage the surface, cause pitting, and force water into the wall structure. WOW Gutters Ltd uses soft washing — low-pressure application of a biocide cleaning solution — that kills algae and moss at the root without damaging the render. The solution lifts the staining, and a gentle rinse reveals the original colour.', bullets: ['Soft washing only — low pressure safe for all render types', 'Removes algae, moss, and black carbon staining', 'Safe for silicone, acrylic, mineral, and monocouche render', 'Biocide treatment — kills growth at the root, not just surface', 'Long-lasting results — regrowth takes 2-3 years', 'Before and after photos — visible transformation'] },
        { heading: 'Render Types We Clean and Why Soft Washing Is Best', content: 'Different render types need different approaches. Silicone render is the most delicate — high-pressure cleaning can strip the silicone layer and leave patchy marks. Acrylic render is more durable but still vulnerable to pressure damage. Mineral render and monocouche are more robust but can be pitted by pressure washing. Soft washing with the right biocide solution is safe for all render types. WOW Gutters Ltd uses pH-neutral cleaning solutions that are effective on biological growth but gentle on the render surface.', bullets: ['Silicone render cleaning — gentle soft wash, no pressure damage', 'Acrylic render cleaning — biocide treatment removes staining safely', 'Mineral render cleaning — effective cleaning without surface pitting', 'Monocouche render cleaning — colour-restoring treatment available', 'No pressure washing — eliminates risk of water ingress behind render', 'All Birmingham areas — render cleaning service across the city'] },
      ],
      faqs: [
        { question: 'Can I pressure wash render?', answer: 'No — pressure washing render is not recommended. It can damage the surface, cause pitting, and force water behind the render. Soft washing is the safe and effective method.' },
        { question: 'How often does render need cleaning?', answer: 'Most render needs cleaning every 3-5 years, depending on exposure. North-facing walls and properties near trees may need more frequent cleaning.' },
        { question: 'Will render cleaning remove the colour from my render?', answer: 'No — professional soft washing removes the algae and staining to reveal the original colour of your render. It does not strip or fade the render finish.' },
        { question: 'How much does render cleaning cost in Birmingham?', answer: 'Render cleaning costs depend on the wall area and render type. Typical costs range from £200-£500 for a semi-detached house. We provide free quotes.' },
        { question: 'Does WOW Gutters Ltd offer render cleaning in Birmingham?', answer: 'Yes — we provide professional render cleaning across Birmingham using safe soft washing methods. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'upvc-cleaning-birmingham') {
    return {
      heroTitle: 'UPVC Cleaning Birmingham',
      heroDescription: 'Professional UPVC cleaning in Birmingham — restores doors, windows, and cladding to like-new condition. WOW Gutters Ltd provides soft washing for UPVC. Call 07421 433910.',
      sections: [
        { heading: 'UPVC Cleaning Service', content: 'UPVC windows, doors, fascias, and cladding accumulate dirt, algae, and black carbon staining over time. The white finish that once looked pristine can become dull, streaked, and discoloured. Standard washing with soap and water rarely removes ingrained staining. WOW Gutters Ltd uses a specialist UPVC cleaning treatment applied through our soft washing system. The cleaning solution lifts years of ingrained dirt and biological staining, restoring the original white finish. We do not use abrasive methods that could scratch or dull the UPVC surface.', bullets: ['Restores white finish — removes ingrained dirt and carbon staining', 'Algae and moss removal — biological growth cleaned from UPVC', 'Soft wash method — no abrasive scrubbing or pressure damage', 'Windows, doors, fascias, cladding — all UPVC surfaces cleaned', 'Long-lasting results — protective treatment slows regrowth', 'Before and after photos — dramatic difference visible'] },
        { heading: 'Why Choose Professional UPVC Cleaning?', content: 'DIY UPVC cleaning rarely achieves professional results. Household cleaning products may remove surface dirt but struggle with ingrained algae and carbon staining that builds up over years. Some DIY methods — like pressure washing at close range — can actually damage UPVC by forcing water into seals and scratching the surface. Professional UPVC cleaning uses commercial-grade cleaning solutions that dissolve years of staining without abrasive force. The investment in professional cleaning is a fraction of the cost of replacing UPVC windows, doors, or cladding.', bullets: ['Professional results — commercial-grade solutions dissolve ingrained staining', 'No surface damage — soft washing protects UPVC finish', 'Seal-safe — cleaning does not compromise window or door seals', 'Cost-effective — cleaning costs far less than replacement', 'Combined service — book with gutter cleaning for best value', 'All Birmingham — UPVC cleaning across all areas'] },
      ],
      faqs: [
        { question: 'How much does UPVC cleaning cost in Birmingham?', answer: 'UPVC cleaning costs £100-£300 depending on the property size and the amount of UPVC to be cleaned. A full quote is provided before work starts.' },
        { question: 'Can you clean UPVC without scratching it?', answer: 'Yes — we use soft washing methods with no abrasive scrubbing. Our cleaning solutions do the work, not mechanical force, so there is no risk of scratching.' },
        { question: 'How often should UPVC be cleaned?', answer: 'Most UPVC benefits from cleaning every 2-3 years. Properties near busy roads (carbon staining) or trees (algae growth) may need annual cleaning.' },
        { question: 'Will UPVC cleaning remove yellowing?', answer: 'Yes — our specialist cleaning treatment is effective at removing the yellowing that develops on UPVC over time, especially on south-facing elevations.' },
        { question: 'Does WOW Gutters Ltd clean UPVC in Birmingham?', answer: 'Yes — we provide professional UPVC cleaning across Birmingham. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'gutter-brightening-service') {
    return {
      heroTitle: 'Gutter Brightening Service',
      heroDescription: 'Restore your gutters to like-new condition with our gutter brightening service. WOW Gutters Ltd removes years of staining from plastic, metal, and painted gutters. Call 07421 433910.',
      sections: [
        { heading: 'What Is Gutter Brightening?', content: 'Over time, gutters lose their original colour and finish. White uPVC gutters develop yellowing and black carbon staining. Metal gutters oxidise and fade. Painted gutters chip and discolour. Gutter brightening is a specialist cleaning treatment that restores the original colour and finish of your gutters without the cost of replacement. Our process uses a combination of cleaning solutions and gentle agitation to remove ingrained staining, followed by a protective treatment that helps the gutters stay cleaner for longer.', bullets: ['uPVC gutter restoration — removes yellowing and carbon staining', 'Metal gutter restoration — removes oxidation and restores finish', 'Painted gutter restoration — gentle cleaning without paint damage', 'Colour-matching treatment — available for coloured guttering', 'Protective coating — slows future staining and algae growth', 'Cost-effective — brightening costs a fraction of replacement'] },
        { heading: 'Gutter Brightening Process', content: 'WOW Gutters Ltd follows a structured gutter brightening process. First, the gutters are thoroughly cleaned of all debris and tested for drainage. Next, a specialist brightening solution is applied to the gutter surface and allowed to dwell, breaking down staining and oxidation. The solution is gently agitated and rinsed off with low-pressure water. Finally, a protective treatment is applied that helps prevent future staining and makes subsequent cleaning easier. The whole process takes 1-3 hours depending on gutter length and condition.', bullets: ['Step 1 — thorough gutter clean and debris removal', 'Step 2 — brightening solution application and dwell time', 'Step 3 — gentle agitation to lift staining', 'Step 4 — low-pressure rinse of all gutter surfaces', 'Step 5 — protective treatment application', 'Step 6 — final inspection and before/after photos'] },
      ],
      faqs: [
        { question: 'How much does gutter brightening cost?', answer: 'Gutter brightening costs from £150 for a standard property, depending on gutter length and condition. A free quote is provided before work starts.' },
        { question: 'How long does gutter brightening last?', answer: 'With our protective treatment, gutter brightening results typically last 3-5 years before the gutters begin to show staining again.' },
        { question: 'Can gutter brightening fix faded coloured gutters?', answer: 'Yes — our brightening treatment can restore the colour of faded black, brown, and grey gutters significantly, though the exact result depends on the original colour and fading extent.' },
        { question: 'Is gutter brightening the same as gutter cleaning?', answer: 'No — gutter cleaning removes debris from inside the channel. Gutter brightening restores the exterior appearance of the gutter itself. They are complementary services.' },
        { question: 'Does WOW Gutters Ltd provide gutter brightening?', answer: 'Yes — we offer professional gutter brightening across Birmingham. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'moss-treatment-biocide-roof') {
    return {
      heroTitle: 'Moss Treatment — Biocide Roof',
      heroDescription: 'Professional biocide moss treatment for roofs in Birmingham. WOW Gutters Ltd kills moss at the root and prevents regrowth for years. Call 07421 433910.',
      sections: [
        { heading: 'Biocide Moss Treatment for Roofs', content: 'Biocide moss treatment is the most effective method for removing and preventing moss on roof tiles. Unlike scraping or pressure washing (which only removes the visible moss and damages tiles), a biocide treatment is applied as a low-pressure spray that penetrates the moss growth and kills it at the root. The moss gradually dries out and falls away over 2-4 weeks, leaving the roof clean without any mechanical abrasion. The biocide also leaves a residual protective layer on the tiles that prevents new moss from establishing for years.', bullets: ['Kills moss at the root — complete eradication, not just surface removal', 'No scraping or pressure washing — safe for all tile types', 'Gradual natural removal — moss dries and falls away over weeks', 'Residual protection — prevents regrowth for 3-5 years', 'Safe for all roof tiles — clay, concrete, and slate', 'Environmentally responsible — biodegradable biocide solutions'] },
        { heading: 'The Biocide Roof Treatment Process', content: 'WOW Gutters Ltd biocide roof treatment is a straightforward process. Our team accesses the roof safely using ladders and spray equipment. The biocide solution is mixed to the correct concentration for your roof type and moss severity. The solution is applied evenly across all affected roof areas using a low-pressure spray — no high pressure that could damage tiles. We treat the entire roof slope, including ridges, valleys, and the areas around chimneys. After application, the moss dies off naturally. We recommend a follow-up gutter clean after the moss has fallen to clear any debris.', bullets: ['Safe access — ladders and long-reach spray equipment', 'Correct dilution — biocide mixed for your roof type and moss severity', 'Even coverage — full roof slope, ridges, valleys, and chimney areas', 'Low-pressure application — safe for all tile types', 'No mess during treatment — moss falls away naturally weeks later', 'Follow-up gutter clean recommended — after moss has fallen'] },
      ],
      faqs: [
        { question: 'How long does biocide roof treatment take to work?', answer: 'The moss begins to die within days. It turns brown and falls away naturally over 2-4 weeks. The roof looks clean within a month of treatment.' },
        { question: 'Is biocide roof treatment safe for pets and plants?', answer: 'Yes — our biocide solutions are biodegradable and safe when used as directed. We take precautions to protect plants near the treatment area.' },
        { question: 'How long does biocide treatment prevent moss regrowth?', answer: 'Professional biocide treatment typically prevents significant moss regrowth for 3-5 years, depending on your roof\'s exposure to shade and moisture.' },
        { question: 'Do I need to remove moss before biocide treatment?', answer: 'No — the biocide kills the moss in place and it falls away naturally. In cases of very thick moss, we may recommend light pre-treatment brushing.' },
        { question: 'Does WOW Gutters Ltd provide biocide roof moss treatment?', answer: 'Yes — we provide professional biocide moss treatment for roofs across Birmingham. Call 07421 433910 for a free quote.' },
      ],
    };
  }

  if (slug === 'roof-cleaning-without-pressure-washer') {
    return {
      heroTitle: 'Roof Cleaning Without Pressure Washer',
      heroDescription: 'Safe roof cleaning without a pressure washer — soft washing protects your tiles. WOW Gutters Ltd provides professional low-pressure roof cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Roof Cleaning Without Pressure Washing — The Soft Wash Method', content: 'The safest and most effective way to clean a roof without using a pressure washer is soft washing. This method uses low-pressure water (similar to a garden hose) combined with a biocide cleaning solution. The solution does the cleaning work — it kills moss, algae, and lichen at the root. The low-pressure rinse simply removes the dead growth and rinses the roof clean. No high pressure means no risk of damaged tiles, no water forced under overlaps, and no loosening of roof fixtures. Soft washing is the professional standard recommended by tile manufacturers.', bullets: ['No pressure washer used — zero risk of tile damage', 'Biocide cleaning — kills moss and algae at the root', 'Low-pressure rinse — gentle removal of dead growth', 'Tile-safe — safe for clay, concrete, slate, and composite', 'No water forced under tiles — eliminates leak risk', 'Longer-lasting results — regrowth takes 3-5 years'] },
        { heading: 'Why Choose Non-Pressure Roof Cleaning?', content: 'Many homeowners search for roof cleaning without pressure washing because they have heard the horror stories — cracked tiles, damaged surfaces, leaks caused by high-pressure cleaning. Unfortunately, some less reputable roof cleaners still use pressure washers because they are faster and require less skill. WOW Gutters Ltd never uses pressure washers on roofs. Our soft washing system is safer for your roof, more effective at killing moss (not just blasting it off), and delivers results that last longer because the biocide prevents regrowth.', bullets: ['Safer for your roof — no cracked or loosened tiles', 'More effective — biocide kills at root, pressure only removes surface', 'Longer-lasting — 3-5 years vs 6-12 months for pressure washing', 'Professional standard — recommended by tile manufacturers', 'Experienced operators — trained in correct soft washing technique', 'Birmingham-wide — safe roof cleaning across all areas'] },
      ],
      faqs: [
        { question: 'Can a roof be cleaned without a pressure washer?', answer: 'Yes — soft washing is the professional standard for roof cleaning. It uses low-pressure water and biocide solutions to clean roofs safely and effectively.' },
        { question: 'Is soft washing as effective as pressure washing for roofs?', answer: 'Yes — soft washing is more effective because it kills moss and algae at the root. Pressure washing only blasts away surface growth, which grows back quickly.' },
        { question: 'How long does a soft wash roof clean take?', answer: 'Most residential roof soft washes take 1-3 hours depending on roof size and moss severity. The biocide needs no scrubbing, so the process is straightforward.' },
        { question: 'Does soft washing a roof cost more than pressure washing?', answer: 'No — soft washing costs about the same as professional pressure washing. The results last longer, so soft washing is better value.' },
        { question: 'Does WOW Gutters Ltd clean roofs without a pressure washer?', answer: 'Yes — we never use pressure washers on roofs. All our roof cleaning is done using professional soft washing methods. Call 07421 433910.' },
      ],
    };
  }

  if (slug === 'gutter-deep-clean-service') {
    return {
      heroTitle: 'Gutter Deep Clean Service',
      heroDescription: 'Our gutter deep clean service goes beyond standard cleaning — every section hand-cleaned, downpipes jetted, and gutters brightened. WOW Gutters Ltd. Call 07421 433910.',
      sections: [
        { heading: 'What Makes Our Gutter Deep Clean Different', content: 'A standard gutter clean removes debris from the channel and tests downpipes. Our deep clean service goes significantly further. Every gutter section is hand-inspected and cleaned with extra attention to compacted debris at downpipe inlets. Downpipes are not just tested — they are jetted with high-pressure water to ensure complete clearance. The exterior of the gutters is brightened to remove staining. Joints are inspected and resealed where needed. Brackets are checked and tightened. The result is a gutter system that looks and performs like new.', bullets: ['Hand inspection of every gutter section', 'Compacted debris removed from downpipe inlets', 'High-pressure downpipe jetting on every pipe', 'Gutter exterior brightening included', 'Joint inspection and resealing', 'Bracket check and tightening'] },
        { heading: 'Gutter Deep Clean Process', content: 'Our gutter deep clean follows a comprehensive 8-step process. First, we conduct a full property survey to assess gutter condition. All debris is removed from the gutter channel and bagged. Downpipe inlets are hand-cleared of compacted debris. Every downpipe is jetted with high-pressure water to ensure complete clearance. The gutter exterior is brightened and stained areas treated. Joints are inspected and any gaps resealed. Brackets are checked and tightened. Finally, a full condition report with before and after photos is provided.', bullets: ['Step 1 — full property survey and gutter assessment', 'Step 2 — complete debris removal from all gutter channels', 'Step 3 — hand clearance of compacted debris at downpipe inlets', 'Step 4 — high-pressure water jetting of every downpipe', 'Step 5 — gutter exterior brightening and stain treatment', 'Step 6 — joint inspection, resealing, and bracket tightening'] },
      ],
      faqs: [
        { question: 'How is a deep clean different from a standard gutter clean?', answer: 'A deep clean includes downpipe jetting (not just testing), exterior gutter brightening, joint resealing, and bracket tightening. It is a comprehensive restoration of your gutter system.' },
        { question: 'How much does a gutter deep clean cost?', answer: 'A gutter deep clean costs from £150 for a standard property, depending on gutter length and condition. A free quote is provided before work starts.' },
        { question: 'How long does a gutter deep clean take?', answer: 'A deep clean takes longer than a standard clean — typically 1.5 to 3 hours for a standard property, depending on the extent of cleaning and treatment needed.' },
        { question: 'How often should I get a gutter deep clean?', answer: 'A deep clean is recommended every 2-3 years as an intensive maintenance service, with standard gutter cleaning in between.' },
        { question: 'Does WOW Gutters Ltd offer a gutter deep clean service?', answer: 'Yes — our gutter deep clean service is available across Birmingham. Call 07421 433910 for a free quote.' },
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

  if (slug === 'gutter-cleaning-sutton-coldfield-four-oaks') {
    return {
      heroTitle: 'Gutter Cleaning Sutton Coldfield & Four Oaks',
      heroDescription: 'Professional gutter cleaning in Sutton Coldfield and Four Oaks. WOW Gutters Ltd serves B74 and B75 postcodes with ground-level vacuum cleaning, downpipe testing, and before and after photos. Free quote: 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Sutton Coldfield & Four Oaks', content: 'Sutton Coldfield\'s tree-lined streets and the exclusive Four Oaks area create heavy leaf fall and moss accumulation that fills gutters rapidly. WOW Gutters Ltd provides professional gutter cleaning across B74 and B75 using our ground-level vacuum system — no ladders against your property.', bullets: ['Full gutter clearance across Sutton Coldfield and Four Oaks', 'Ground-level vacuum system reaching up to four storeys', 'Downpipe testing and flow check on every outlet', 'Before and after photos sent on completion', 'Covers Four Oaks, Boldmere, Wylde Green, Mere Green, Walmley', 'Free quote with no obligation — call 07421 433910'] },
        { heading: 'Why Sutton Coldfield & Four Oaks Gutters Need Regular Cleaning', content: 'The mature oak, beech, and lime trees throughout Sutton Coldfield\'s residential streets — particularly in the Four Oaks area — shed enormous volumes of leaves and seeds. Combined with moss from roof tiles, this creates blockages that cause overflow and damp if left uncleared.', bullets: ['Heavy leaf fall from mature trees lining residential streets', 'Moss accumulation from damp conditions near Sutton Park', 'Large detached homes in Four Oaks with complex gutter runs', 'Period properties requiring careful handling', 'Prevents damp walls, fascia rot, and foundation issues'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Sutton Coldfield?', answer: 'Most homes in Sutton Coldfield and Four Oaks cost between £50 and £140 depending on property size. We provide a fixed quote before any work starts.' },
        { question: 'Do you cover Four Oaks and Boldmere?', answer: 'Yes — we cover all Sutton Coldfield neighbourhoods including Four Oaks, Boldmere, Wylde Green, Mere Green, Streetly, Walmley, and all B72–B76 postcodes.' },
        { question: 'Can you clean gutters on large detached homes in Four Oaks?', answer: 'Yes — our high-reach vacuum system handles large detached properties with complex rooflines, including gutters above conservatories and extensions.' },
      ],
    };
  }

  if (slug === 'school-gutter-cleaning-west-midlands') {
    return {
      heroTitle: 'School Gutter Cleaning West Midlands',
      heroDescription: 'Professional gutter cleaning for schools across the West Midlands. WOW Gutters Ltd services school buildings, halls, sports facilities, and admin blocks. Planned maintenance and holiday scheduling available. Call 07421 433910.',
      sections: [
        { heading: 'School Gutter Cleaning in the West Midlands', content: 'Schools require regular gutter maintenance to prevent water damage to buildings, protect student areas from damp, and maintain a safe environment. WOW Gutters Ltd provides professional gutter cleaning for schools across Birmingham, Wolverhampton, Coventry, Walsall, Dudley, Solihull, and the wider West Midlands.', bullets: ['Full gutter clearance for school buildings and facilities', 'Work scheduled around school hours and holiday periods', 'Downpipe testing and flow check on all outlets', 'Before and after photo records for compliance', 'Planned maintenance contracts available for MATs and academies', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Schools Need Regular Gutter Cleaning', content: 'Blocked gutters on school buildings cause water damage to roofs, walls, and interiors. Health and safety regulations require that school drainage systems are maintained in good working order to prevent slip hazards and building damage.', bullets: ['Prevents water damage to classrooms, halls, and corridors', 'Eliminates slip hazards from overflowing water near entrances', 'Protects expensive equipment in IT suites and science labs', 'Meets compliance requirements for school building maintenance', 'Holiday scheduling means no disruption to lessons', 'Photographic records provided for your maintenance files'] },
      ],
      faqs: [
        { question: 'Do you work around school hours?', answer: 'Yes — we can schedule gutter cleaning during school holidays, weekends, or after hours to minimise disruption to students and staff.' },
        { question: 'Do you provide documentation for schools?', answer: 'Yes — every school clean includes before and after photographs and a written summary of work completed, suitable for compliance and maintenance records.' },
        { question: 'What areas do you cover for school gutter cleaning?', answer: 'We cover all West Midlands areas including Birmingham, Coventry, Wolverhampton, Walsall, Dudley, Sandwell, Solihull, and surrounding areas.' },
      ],
    };
  }

  if (slug === 'office-building-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Office Building Gutter Cleaning Birmingham',
      heroDescription: 'Professional gutter cleaning for office buildings across Birmingham. WOW Gutters Ltd services commercial offices, business parks, and managed workspaces. Out-of-hours availability. Call 07421 433910.',
      sections: [
        { heading: 'Office Building Gutter Cleaning in Birmingham', content: 'Office buildings across Birmingham city centre, business parks, and suburban commercial areas need regular gutter maintenance to protect premises, equipment, and tenant comfort. WOW Gutters Ltd provides professional gutter cleaning for all types of office accommodation.', bullets: ['Gutter clearance for office buildings of all sizes', 'Out-of-hours work to avoid business disruption', 'Downpipe testing and flow check on all outlets', 'Photographic records for property management files', 'Planned maintenance contracts for managed buildings', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Birmingham Offices Need Regular Gutter Cleaning', content: 'Blocked gutters on office buildings cause water ingress that damages interiors, equipment, and tenant fit-outs. For landlords and property managers, regular gutter maintenance protects asset value and maintains professional standards.', bullets: ['Prevents water damage to office interiors and equipment', 'Maintains professional appearance of commercial premises', 'Protects tenant relationships with proactive maintenance', 'Reduces emergency callout costs with planned maintenance', 'Suitable for city centre offices, business parks, and managed workspaces', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Can you work outside business hours?', answer: 'Yes — we schedule office gutter cleaning outside business hours, at weekends, or whenever suits your building management schedule.' },
        { question: 'What Birmingham areas do you cover for offices?', answer: 'All Birmingham postcodes including city centre B1–B7, business parks in B37, B90, and all surrounding commercial areas.' },
      ],
    };
  }

  if (slug === 'warehouse-gutter-cleaning') {
    return {
      heroTitle: 'Warehouse Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for warehouses and industrial units across Birmingham and the West Midlands. WOW Gutters Ltd handles large gutter runs, multiple downpipes, and complex access requirements. Call 07421 433910.',
      sections: [
        { heading: 'Warehouse Gutter Cleaning Services', content: 'Warehouses and industrial units have large roof areas with extensive gutter runs that collect debris. WOW Gutters Ltd provides professional gutter cleaning for warehouses using industrial-grade equipment capable of handling long runs and multiple downpipe outlets.', bullets: ['Industrial vacuum system for large warehouse gutter runs', 'Multi-downpipe testing and clearance on every visit', 'Flexible scheduling — out-of-hours and weekend work available', 'Before and after photographic records for compliance', 'Planned maintenance programmes for regular clearance', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Warehouses Need Regular Gutter Maintenance', content: 'Blocked gutters on warehouses cause water damage to stock, equipment, and the building fabric. Health and safety regulations require that industrial drainage systems are maintained. A single blocked gutter on a large roof can cause significant damage quickly.', bullets: ['Prevents water damage to stock and stored materials', 'Protects warehouse equipment and machinery', 'Meets health and safety compliance requirements', 'Reduces liability risks from overflowing water', 'Extends the life of industrial gutter systems', 'Planned maintenance reduces costs vs emergency callouts'] },
      ],
      faqs: [
        { question: 'How much does warehouse gutter cleaning cost?', answer: 'Costs vary by roof size, gutter length, and access requirements. WOW Gutters Ltd provides free site surveys and fixed quotes for all warehouse gutter cleaning.' },
        { question: 'Do you work outside regular hours?', answer: 'Yes — we can schedule warehouse gutter cleaning outside business hours, at weekends, or during shutdown periods to minimise disruption.' },
      ],
    };
  }

  if (slug === 'industrial-gutter-cleaning-west-midlands') {
    return {
      heroTitle: 'Industrial Gutter Cleaning West Midlands',
      heroDescription: 'Professional industrial gutter cleaning across the West Midlands. WOW Gutters Ltd services factories, industrial estates, manufacturing facilities, and processing plants. Planned maintenance available. Call 07421 433910.',
      sections: [
        { heading: 'Industrial Gutter Cleaning in the West Midlands', content: 'Industrial properties present unique gutter cleaning challenges — large roof areas, complex drainage systems, restricted access, and the need for minimal operational disruption. WOW Gutters Ltd provides professional industrial gutter cleaning across the West Midlands.', bullets: ['Industrial-grade vacuum equipment for large-scale gutter clearance', 'Complex multi-downpipe systems tested on every visit', 'Out-of-hours and shutdown period scheduling available', 'Photographic records for health and safety compliance', 'Planned maintenance contracts for regular servicing', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Industrial Areas We Cover', content: 'We serve industrial estates and facilities across the entire West Midlands region, from Birmingham\'s industrial heartland to the Black Country and beyond.', bullets: ['Birmingham — Aston, Nechells, Tyseley, Small Heath, Saltley', 'Black Country — Wolverhampton, Dudley, Walsall, Sandwell', 'Solihull — Bickenhill, Shirley, Chelmsley Wood industrial estates', 'Coventry — Binley, Walsgrave, Canley industrial areas', 'All major West Midlands industrial estates and business parks', 'Free site survey and fixed price quotation'] },
      ],
      faqs: [
        { question: 'What type of industrial properties do you clean?', answer: 'We clean gutters on factories, warehouses, manufacturing plants, processing facilities, distribution centres, and industrial units of all sizes.' },
        { question: 'Do you provide compliance documentation?', answer: 'Yes — every industrial clean includes before and after photographs and a written summary of work completed, suitable for health and safety records.' },
      ],
    };
  }

  if (slug === 'retail-park-gutter-maintenance') {
    return {
      heroTitle: 'Retail Park Gutter Maintenance',
      heroDescription: 'Professional gutter maintenance for retail parks across Birmingham and the West Midlands. WOW Gutters Ltd services shopping centres, retail units, and commercial parades. Call 07421 433910.',
      sections: [
        { heading: 'Retail Park Gutter Maintenance Services', content: 'Retail parks and shopping centres have extensive gutter systems serving multiple units under a single roof structure. WOW Gutters Ltd provides planned gutter maintenance for retail properties, ensuring continuous protection for tenants and customers.', bullets: ['Full gutter clearance for retail park buildings of all sizes', 'Multi-unit drainage systems tested comprehensively', 'Out-of-hours work scheduled around trading hours', 'Photographic records for property management files', 'Planned maintenance contracts for shopping centres', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Retail Parks Need Regular Gutter Maintenance', content: 'Blocked gutters on retail properties cause water damage that disrupts trading, affects customer experience, and creates liability issues. Regular maintenance protects the retail environment and property value.', bullets: ['Prevents water damage to retail units and stock', 'Maintains safe environment for customers and staff', 'Protects landlord and tenant relationships', 'Reduces emergency maintenance costs', 'Suitable for retail parks, shopping centres, and retail parades', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Do you work around retail trading hours?', answer: 'Yes — we schedule gutter maintenance outside trading hours, overnight, or on Sundays to avoid disruption to retail operations.' },
        { question: 'What areas do you cover for retail parks?', answer: 'We cover all retail parks and shopping centres across Birmingham, Solihull, Wolverhampton, Coventry, Walsall, Dudley, and the wider West Midlands.' },
      ],
    };
  }

  if (slug === 'church-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Church Gutter Cleaning Birmingham',
      heroDescription: 'Professional gutter cleaning for churches across Birmingham. WOW Gutters Ltd provides sensitive gutter care for historic church buildings, listed properties, and modern places of worship. Call 07421 433910.',
      sections: [
        { heading: 'Church Gutter Cleaning in Birmingham', content: 'Churches have complex rooflines, historic gutter systems, and often restricted access that makes gutter cleaning challenging. WOW Gutters Ltd provides professional gutter cleaning for churches across Birmingham, treating every building with the care its age and architecture deserves.', bullets: ['Gentle gutter cleaning for historic and listed church buildings', 'Ground-level vacuum system — no ladders against historic stonework', 'Complex roofline navigation including towers and aisles', 'Downpipe testing and flow check on all outlets', 'Photographic records for church maintenance files and insurers', 'Fully insured for work on historic and listed buildings'] },
        { heading: 'Why Birmingham Churches Need Regular Gutter Cleaning', content: 'Birmingham\'s historic churches — from Victorian Gothic buildings in the city centre to medieval parish churches in surrounding areas — have gutter systems that are often original cast iron. These need careful maintenance to prevent water damage to historic fabric.', bullets: ['Protects historic stonework and brickwork from water damage', 'Prevents damp in church interiors affecting fabric and fittings', 'Identifies cast iron gutter deterioration before it becomes critical', 'Maintains access for congregation and visitors', 'Suitable for all denominations and building types', 'Free site survey for listed and complex buildings'] },
      ],
      faqs: [
        { question: 'Can you work on listed church buildings?', answer: 'Yes — our ground-level vacuum system does not require ladders against historic fabric, making it ideal for listed and heritage church buildings.' },
        { question: 'Do you provide documentation for church insurers?', answer: 'Yes — every church clean includes before and after photographs and a written summary suitable for insurance and maintenance records.' },
      ],
    };
  }

  if (slug === 'care-home-gutter-cleaning') {
    return {
      heroTitle: 'Care Home Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for care homes across Birmingham and the West Midlands. WOW Gutters Ltd services residential care homes, nursing homes, and assisted living facilities. Call 07421 433910.',
      sections: [
        { heading: 'Care Home Gutter Cleaning Services', content: 'Care homes require regular gutter maintenance to protect vulnerable residents and sensitive building environments. WOW Gutters Ltd provides professional gutter cleaning for care homes across Birmingham and the West Midlands, working discreetly and respectfully.', bullets: ['Full gutter clearance for care home buildings and extensions', 'Discreet service — minimal disruption to residents', 'Downpipe testing and flow check on all outlets', 'Before and after photos for compliance records', 'Planned maintenance contracts for care home groups', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Care Homes Need Regular Gutter Maintenance', content: 'Water damage from blocked gutters is particularly serious in care homes, where it can affect resident rooms, communal areas, and medical equipment. Regular gutter maintenance protects both the building and the people who live and work in it.', bullets: ['Prevents water ingress affecting resident rooms and communal areas', 'Eliminates slip hazards from overflowing water near entrances', 'Protects medical equipment and sensitive environments', 'Meets CQC compliance requirements for building maintenance', 'Respectful service that works around your schedule', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Do you offer planned maintenance for care homes?', answer: 'Yes — we offer scheduled gutter cleaning programmes for care homes with regular visits timed to your property\'s specific needs.' },
        { question: 'Can you work around residents?', answer: 'Yes — our ground-level system operates quietly and discreetly, with no ladders or scaffolding required, minimising disruption to residents and staff.' },
      ],
    };
  }

  if (slug === 'property-management-gutter-cleaning-contracts') {
    return {
      heroTitle: 'Property Management Gutter Cleaning Contracts',
      heroDescription: 'Professional gutter cleaning contracts for property managers across Birmingham and the West Midlands. WOW Gutters Ltd offers planned maintenance, multi-property discounts, and compliance documentation. Call 07421 433910.',
      sections: [
        { heading: 'Property Management Gutter Cleaning Contracts', content: 'Property managers and letting agents need reliable gutter maintenance across multiple properties. WOW Gutters Ltd provides contract gutter cleaning for property management companies, with scheduled visits, compliance documentation, and single-invoice convenience.', bullets: ['Planned gutter maintenance for entire property portfolios', 'Scheduled visits timed to seasonal requirements', 'Multi-property discounts for portfolio landlords', 'Photographic records for compliance and tenant communication', 'Single monthly invoice for all properties', 'Priority scheduling for contract customers'] },
        { heading: 'Why Property Managers Choose WOW Gutters Ltd', content: 'Managing gutter maintenance across multiple properties is time-consuming. WOW Gutters Ltd simplifies the process with planned schedules, automated reminders, and comprehensive documentation for every visit.', bullets: ['Reduces administrative burden on property management teams', 'Ensures consistent maintenance across all properties', 'Provides documented evidence of compliance for landlords', 'Prevents emergency callout costs with proactive maintenance', 'Flexible scheduling to match tenancy cycles', 'Dedicated account management for portfolio clients'] },
      ],
      faqs: [
        { question: 'Do you offer discounts for portfolio contracts?', answer: 'Yes — we offer discounted rates for property management contracts covering multiple properties, with single-invoice billing for convenience.' },
        { question: 'What documentation do you provide?', answer: 'Every visit includes before and after photographs, a written condition summary, and an annual compliance report suitable for landlord and insurance records.' },
      ],
    };
  }

  if (slug === 'landlord-gutter-cleaning-service-birmingham') {
    return {
      heroTitle: 'Landlord Gutter Cleaning Service Birmingham',
      heroDescription: 'Professional gutter cleaning for landlords across Birmingham. WOW Gutters Ltd helps landlords meet maintenance obligations with documented evidence. Free quotes — call 07421 433910.',
      sections: [
        { heading: 'Landlord Gutter Cleaning in Birmingham', content: 'Landlords in Birmingham have a legal responsibility to maintain their properties in good repair, including gutters. WOW Gutters Ltd provides professional gutter cleaning for rental properties with photographic evidence for compliance and tenant communication.', bullets: ['Professional gutter cleaning for rental properties across Birmingham', 'Photographic before and after evidence for compliance records', 'Downpipe testing and flow check on every visit', 'Written condition summary after every clean', 'Discounted rates for multi-property landlord portfolios', 'Free quotes with fixed pricing — no hidden charges'] },
        { heading: 'Why Birmingham Landlords Need Professional Gutter Cleaning', content: 'Blocked gutters cause damp, structural damage, and tenant complaints. For landlords, regular gutter maintenance protects property value, maintains tenant satisfaction, and demonstrates compliance with repairing obligations.', bullets: ['Protects property value with regular roofline maintenance', 'Prevents tenant complaints about damp and water ingress', 'Meets landlord legal obligations for property repair', 'Photographic evidence proves maintenance was completed', 'Reduces costly emergency repairs with proactive care', 'Flexible scheduling between tenancies'] },
      ],
      faqs: [
        { question: 'How often should landlords clean gutters?', answer: 'Most rental properties benefit from gutter cleaning at least once a year. Properties near trees may need twice-yearly cleaning.' },
        { question: 'Do you provide proof of gutter cleaning for landlords?', answer: 'Yes — every visit includes before and after photographs and a written summary, providing clear evidence of completed maintenance for your records.' },
      ],
    };
  }

  if (slug === 'commercial-roof-cleaning-west-midlands') {
    return {
      heroTitle: 'Commercial Roof Cleaning West Midlands',
      heroDescription: 'Professional commercial roof cleaning across the West Midlands. WOW Gutters Ltd provides soft wash moss removal, algae treatment, and roof restoration for commercial buildings. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Roof Cleaning in the West Midlands', content: 'Commercial roofs require professional cleaning to remove moss, algae, lichen, and organic debris that cause damage and reduce roof life. WOW Gutters Ltd provides commercial roof cleaning using low-pressure soft wash methods safe for all roof types.', bullets: ['Low-pressure soft wash — safe for concrete, clay, slate, and metal roofs', 'Moss, algae, and lichen killed at the root with biocide treatment', 'Commercial-grade equipment for large roof areas', 'Gutter cleaning combined with roof work for full roofline care', 'Photographic records for insurance and compliance', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Commercial Properties Need Roof Cleaning', content: 'Moss and algae growth on commercial roofs causes tile damage, blocked gutters, and reduced roof life. Regular professional cleaning protects the building and meets maintenance obligations.', bullets: ['Prevents moss roots from lifting and loosening roof tiles', 'Eliminates algae and lichen growth that causes staining', 'Restores roof appearance for professional premises', 'Extends commercial roof life significantly', 'Biocide treatment slows regrowth for longer-lasting results', 'Free site survey and fixed price quotation'] },
      ],
      faqs: [
        { question: 'How much does commercial roof cleaning cost?', answer: 'Costs vary by roof size, moss coverage, and access. WOW Gutters Ltd provides free site surveys and fixed quotes for all commercial roof cleaning work.' },
        { question: 'Is commercial roof cleaning safe for my roof type?', answer: 'Yes — we use low-pressure soft wash methods suitable for concrete, clay, slate, metal, and composite commercial roofing materials.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-marston-green') {
    return {
      heroTitle: 'Gutter Cleaning Marston Green',
      heroDescription: 'Professional gutter cleaning in Marston Green, Solihull. WOW Gutters Ltd serves B37 postcode with ground-level vacuum cleaning. Before and after photos on every job. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Marston Green', content: 'Marston Green is a popular Solihull area with a mix of modern housing developments and mature garden trees. WOW Gutters Ltd provides professional gutter cleaning for all property types in the B37 postcode area.', bullets: ['Full gutter clearance for all property types in Marston Green', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every outlet', 'Before and after photos sent on completion', 'Covers all B37 postcodes and surrounding areas', 'Free quote with no obligation'] },
        { heading: 'Marston Green Gutter Cleaning Services', content: 'We cover all streets in Marston Green including Station Road, Land Lane, Elmdon Lane, and surrounding residential roads. Our service includes complete debris removal, downpipe testing, and a written condition summary.', bullets: ['Complete leaf, moss, and debris removal from all gutters', 'Compacted silt extraction from channel base', 'Downpipe inlet clearing and flow testing', 'Fascia and soffit condition check', 'Fixed pricing with no hidden charges', 'Same-day and next-day availability where possible'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Marston Green?', answer: 'Most Marston Green homes cost between £50 and £120 depending on property size. We provide a fixed quote before any work starts.' },
        { question: 'What postcodes do you cover in Marston Green?', answer: 'We cover the B37 postcode area including all residential streets in Marston Green and surrounding areas.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-pershore') {
    return {
      heroTitle: 'Gutter Cleaning Pershore',
      heroDescription: 'Professional gutter cleaning in Pershore, Worcestershire. WOW Gutters Ltd serves Pershore and surrounding villages with ground-level vacuum cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Pershore', content: 'Pershore is a historic Worcestershire market town with a mix of period properties and modern homes. WOW Gutters Ltd provides professional gutter cleaning for all property types in Pershore and the surrounding villages.', bullets: ['Full gutter clearance for Pershore homes and businesses', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every visit', 'Before and after photos provided as standard', 'Suitable for period properties and modern homes', 'Free quote with fixed pricing'] },
        { heading: 'Why Pershore Properties Need Regular Gutter Cleaning', content: 'Pershore\'s location in the Worcestershire countryside means properties experience heavy leaf fall from surrounding trees and moss growth typical of rural environments. Regular gutter cleaning prevents damp and structural damage.', bullets: ['Heavy leaf fall from mature garden and countryside trees', 'Moss accumulation from Worcestershire\'s damp conditions', 'Period properties with cast iron gutter systems need careful handling', 'Prevents damp walls and fascia board deterioration', 'Protects property value in this desirable market town', 'Before and after photos on every job'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Pershore?', answer: 'Most Pershore properties cost between £50 and £120 depending on size and access. Fixed quote provided before work starts.' },
        { question: 'Do you cover villages around Pershore?', answer: 'Yes — we cover Pershore town and surrounding villages including Pinvin, Drakes Broughton, Wadborough, and Eckington.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-stourport-on-severn') {
    return {
      heroTitle: 'Gutter Cleaning Stourport-on-Severn',
      heroDescription: 'Professional gutter cleaning in Stourport-on-Severn, Worcestershire. WOW Gutters Ltd serves Stourport and surrounding areas with ground-level vacuum cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Stourport-on-Severn', content: 'Stourport-on-Severn is a historic Worcestershire town on the River Severn, known for its canalside properties and leafy residential streets. WOW Gutters Ltd provides professional gutter cleaning for all property types in the DY13 area.', bullets: ['Full gutter clearance for Stourport homes and businesses', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every outlet', 'Before and after photos on every job', 'Suitable for canalside, period, and modern properties', 'Free quote with fixed pricing'] },
        { heading: 'Why Stourport Gutters Need Regular Cleaning', content: 'Stourport\'s riverside location and mature tree canopy create ideal conditions for moss growth and heavy leaf fall. Properties near the river experience higher moisture levels that accelerate gutter debris accumulation.', bullets: ['Riverside location creates higher moisture levels', 'Mature trees shed heavily in autumn months', 'Canalside and period properties need careful handling', 'Prevents damp problems in older housing stock', 'Regular maintenance extends gutter system life', 'Professional service with before and after photos'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Stourport-on-Severn?', answer: 'Most Stourport properties cost between £50 and £120 depending on property size. Fixed quote provided before any work starts.' },
        { question: 'Do you cover rural areas around Stourport?', answer: 'Yes — we cover Stourport town and surrounding villages including Areley Kings, Astley, and Dunley.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-bewdley') {
    return {
      heroTitle: 'Gutter Cleaning Bewdley',
      heroDescription: 'Professional gutter cleaning in Bewdley, Worcestershire. WOW Gutters Ltd serves Bewdley and surrounding villages with ground-level vacuum cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Bewdley', content: 'Bewdley is a historic Worcestershire town on the River Severn, famous for its Georgian architecture and beautiful riverside setting. WOW Gutters Ltd provides professional gutter cleaning for all property types in Bewdley and the surrounding Wyre Forest area.', bullets: ['Full gutter clearance for Bewdley homes and businesses', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every visit', 'Before and after photos on every job', 'Sensitive care for historic and period properties', 'Free quote with fixed pricing'] },
        { heading: 'Why Bewdley Properties Need Gutter Cleaning', content: 'Bewdley\'s location within the Wyre Forest area means properties experience significant leaf fall and moss accumulation. The town\'s historic buildings need regular gutter maintenance to prevent water damage to precious fabric.', bullets: ['Heavy leaf fall from proximity to Wyre Forest', 'Historic Georgian properties need careful gutter maintenance', 'Riverside location creates higher moisture conditions', 'Prevents damp in period properties with solid walls', 'Protects the character and value of historic buildings', 'Professional care for listed and heritage properties'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Bewdley?', answer: 'Most Bewdley properties cost between £50 and £120 depending on property size and access. Fixed quote provided before work starts.' },
        { question: 'Can you clean gutters on listed buildings?', answer: 'Yes — our ground-level system is ideal for historic and listed buildings as no ladders are placed against the fabric.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-alvechurch') {
    return {
      heroTitle: 'Gutter Cleaning Alvechurch',
      heroDescription: 'Professional gutter cleaning in Alvechurch, Worcestershire. WOW Gutters Ltd serves Alvechurch and surrounding villages with ground-level vacuum cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Alvechurch', content: 'Alvechurch is a popular Worcestershire village near Birmingham with a mix of period properties and modern homes. WOW Gutters Ltd provides professional gutter cleaning for all property types in Alvechurch and the surrounding countryside.', bullets: ['Full gutter clearance for Alvechurch homes and businesses', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every outlet', 'Before and after photos on every job', 'Covers Alvechurch village and surrounding rural areas', 'Free quote with no obligation'] },
        { heading: 'Why Alvechurch Properties Need Gutter Cleaning', content: 'Alvechurch\'s semi-rural setting means properties deal with leaf fall from surrounding woodland, moss growth from damp conditions, and debris from countryside environments.', bullets: ['Semi-rural setting with heavy leaf fall from surrounding trees', 'Moss growth typical of Worcestershire\'s damp climate', 'Mix of period and modern properties all benefit from regular care', 'Prevents damp and structural damage in rural properties', 'Professional service tailored to village properties', 'Before and after photos provided as standard'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Alvechurch?', answer: 'Most Alvechurch properties cost between £50 and £120 depending on property size. Fixed quote provided before work starts.' },
        { question: 'Do you cover villages near Alvechurch?', answer: 'Yes — we cover Alvechurch and surrounding villages including Barnt Green, Cofton Hackett, and Rowney Green.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-nuneaton') {
    return {
      heroTitle: 'Gutter Cleaning Nuneaton',
      heroDescription: 'Professional gutter cleaning in Nuneaton, Warwickshire. WOW Gutters Ltd serves Nuneaton and surrounding areas with ground-level vacuum cleaning. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Nuneaton', content: 'Nuneaton is a historic Warwickshire market town with a mix of Victorian terraces, post-war housing, and modern developments. WOW Gutters Ltd provides professional gutter cleaning for all property types across Nuneaton and surrounding villages.', bullets: ['Full gutter clearance for Nuneaton homes and businesses', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every outlet', 'Before and after photos on every job', 'Covers all Nuneaton postcodes and surrounding areas', 'Free quote with fixed pricing'] },
        { heading: 'Nuneaton Gutter Cleaning Services', content: 'We cover all areas of Nuneaton from the town centre to surrounding residential areas. Our professional gutter cleaning service includes complete debris removal, downpipe clearance, and flow testing.', bullets: ['Complete leaf, moss, and debris removal from all gutters', 'Compacted silt extraction from channel base', 'Downpipe inlet clearing and flow testing', 'Fascia board and soffit condition observation', 'Fixed pricing with no hidden charges', 'Professional service with before and after documentation'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Nuneaton?', answer: 'Most Nuneaton properties cost between £50 and £120 depending on property size. Fixed quote provided before work starts.' },
        { question: 'What areas of Nuneaton do you cover?', answer: 'We cover all Nuneaton postcodes including CV10, CV11, and surrounding villages such as Bedworth and Bulkington.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-kenilworth') {
    return {
      heroTitle: 'Gutter Cleaning Kenilworth',
      heroDescription: 'Professional gutter cleaning in Kenilworth, Warwickshire. WOW Gutters Ltd serves Kenilworth with ground-level vacuum cleaning, downpipe testing, and before and after photos. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning in Kenilworth', content: 'Kenilworth is a historic Warwickshire town with a stunning castle, period properties, and modern family homes. WOW Gutters Ltd provides professional gutter cleaning for all property types in Kenilworth and the surrounding area.', bullets: ['Full gutter clearance for Kenilworth homes and businesses', 'Ground-level vacuum system — no ladders against your walls', 'Downpipe testing and flow check on every outlet', 'Before and after photos on every job', 'Suitable for all property types from period to modern', 'Free quote with no obligation'] },
        { heading: 'Why Kenilworth Properties Need Gutter Cleaning', content: 'Kenilworth\'s leafy streets and historic buildings create specific gutter maintenance needs. Regular cleaning prevents water damage to period properties and maintains the town\'s high standards of property care.', bullets: ['Leafy residential streets with mature tree cover', 'Historic properties need careful gutter maintenance', 'Modern family homes benefit from regular care', 'Prevents damp in period properties with solid walls', 'Protects property value in this desirable town', 'Professional service with photographic documentation'] },
      ],
      faqs: [
        { question: 'How much does gutter cleaning cost in Kenilworth?', answer: 'Most Kenilworth properties cost between £50 and £120 depending on property size. Fixed quote provided before work starts.' },
        { question: 'Do you cover the surrounding Kenilworth area?', answer: 'Yes — we cover Kenilworth town and surrounding areas including Burton Green and Balsall Common.' },
      ],
    };
  }

  if (slug === 'roof-moss-removal-sutton-coldfield') {
    return {
      heroTitle: 'Roof Moss Removal Sutton Coldfield',
      heroDescription: 'Professional roof moss removal in Sutton Coldfield. WOW Gutters Ltd treats and removes moss, algae, and lichen from all roof types. Low-pressure soft wash method safe for all tiles. Call 07421 433910.',
      sections: [
        { heading: 'Roof Moss Removal in Sutton Coldfield', content: 'Sutton Coldfield\'s leafy environment and proximity to Sutton Park create ideal conditions for roof moss growth. WOW Gutters Ltd provides professional roof moss removal using low-pressure soft wash methods safe for all tile types including concrete, clay, and slate.', bullets: ['Low-pressure soft wash — safe for all roof tile types', 'Moss, algae, and lichen killed at the root', 'Biocide treatment applied to slow regrowth', 'Dead debris gently cleared from the roof surface', 'Gutters cleaned after roof treatment to remove fallen moss', 'Before and after photos on every roof cleaning job'] },
        { heading: 'Why Remove Roof Moss in Sutton Coldfield?', content: 'Sutton Coldfield\'s damp climate and extensive tree cover create perfect conditions for moss growth. Left untreated, moss causes tile damage, blocks gutters, and reduces roof life.', bullets: ['Moss roots lift and loosen roof tiles over time', 'Moisture trapped by moss accelerates tile weathering', 'Moss debris blocks gutters and downpipes', 'Algae and lichen growth makes properties look neglected', 'Professional removal extends roof tile life significantly', 'Improves property appearance and kerb appeal'] },
      ],
      faqs: [
        { question: 'How much does roof moss removal cost in Sutton Coldfield?', answer: 'Roof moss removal starts from £150 for standard homes. Final price depends on roof size and moss coverage. Fixed quote provided before work starts.' },
        { question: 'Is roof moss removal safe for my tiles?', answer: 'Yes — we use low-pressure soft wash methods safe for concrete, clay, slate, and composite roof tiles. High-pressure washing is not used on any roof surface.' },
      ],
    };
  }

  if (slug === 'gutter-vacuum-cleaning') {
    return {
      heroTitle: 'Gutter Vacuum Cleaning',
      heroDescription: 'Professional gutter vacuum cleaning across Birmingham and the West Midlands. WOW Gutters Ltd uses industrial SkyVac systems — 4-storey reach, no ladders, no mess. Before and after photos included. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Vacuum Cleaning Service', content: 'Gutter vacuum cleaning is the modern, safe, and effective way to clear gutters. WOW Gutters Ltd uses industrial-grade SkyVac systems that operate entirely from ground level — no ladders against your walls, no risk of damage to your property, and no mess on your drive or borders.', bullets: ['Industrial SkyVac vacuum system — most powerful in the industry', 'Reaches gutters up to 4 storeys high from ground level', 'No ladders placed against your walls or fascias', 'Complete debris extraction including compacted silt layer', 'Camera inspection head provides real-time internal view', 'All debris bagged and removed — no mess left behind'] },
        { heading: 'Why Choose Vacuum Gutter Cleaning?', content: 'Vacuum gutter cleaning offers significant advantages over traditional ladder-based methods. It is safer, more thorough, and causes no damage to your property.', bullets: ['No ladder damage to fascias, soffits, or brickwork', 'Safer — operatives stay on the ground at all times', 'More thorough — industrial vacuum extracts compacted silt', 'Faster — covers more gutter length per hour than hand cleaning', 'Before and after camera evidence of complete clearance', 'Ideal for 2-storey, 3-storey, and 4-storey properties'] },
      ],
      faqs: [
        { question: 'How does gutter vacuum cleaning work?', answer: 'A powerful industrial vacuum is connected to a carbon-fibre reach pole with a camera head. The operative guides the pole along the gutter channel from ground level, extracting all debris through the vacuum system.' },
        { question: 'Can vacuum cleaning handle heavy blockages?', answer: 'Yes — our industrial-grade SkyVac system handles wet leaves, compacted debris, moss, silt, and even small stones with ease.' },
        { question: 'How high can the vacuum reach?', answer: 'Our system reaches gutters up to 4 storeys high — approximately 12 metres — covering most homes, townhouses, apartment blocks, and commercial buildings.' },
      ],
    };
  }

  if (slug === 'roof-moss-removal') {
    return {
      heroTitle: 'Roof Moss Removal',
      heroDescription: 'Professional roof moss removal across Birmingham and the West Midlands. WOW Gutters Ltd uses low-pressure soft wash methods safe for all roof tiles. Biocide treatment prevents rapid regrowth. Call 07421 433910.',
      sections: [
        { heading: 'Professional Roof Moss Removal', content: 'Moss growth on roofs causes tile damage, blocked gutters, and reduced roof life. WOW Gutters Ltd provides professional roof moss removal using low-pressure soft wash methods that are safe for all roof tile types including concrete, clay, slate, and composite.', bullets: ['Low-pressure soft wash — safe for all roof tile types', 'Moss, algae, and lichen killed at the root', 'Biocide treatment applied to slow regrowth significantly', 'Dead debris gently cleared from the roof surface', 'Gutters cleaned after roof treatment', 'Before and after photos on every job'] },
        { heading: 'Why Remove Moss From Your Roof?', content: 'Moss is more than a cosmetic issue. It holds moisture against roof surfaces, lifts tiles, blocks gutters, and accelerates roof deterioration.', bullets: ['Moss roots lift and loosen roof tiles', 'Moisture trapped by moss accelerates weathering', 'Moss debris blocks gutters and causes overflow', 'Professional cleaning extends roof life significantly', 'Improves property appearance and kerb appeal'] },
      ],
      faqs: [
        { question: 'How much does roof moss removal cost?', answer: 'Roof moss removal starts from £150 for standard homes. The final price depends on roof size and moss coverage. Fixed quote provided before work starts.' },
        { question: 'Does the moss grow back?', answer: 'We apply a biocide treatment that kills moss at the root and significantly slows regrowth. Most properties stay clear for 12–24 months.' },
      ],
    };
  }

  if (slug === 'fascia-soffit-cleaning') {
    return {
      heroTitle: 'Fascia and Soffit Cleaning',
      heroDescription: 'Professional fascia and soffit cleaning across Birmingham and the West Midlands. WOW Gutters Ltd restores UPVC to bright white using hot purified water. No harsh chemicals. Call 07421 433910.',
      sections: [
        { heading: 'Professional Fascia and Soffit Cleaning', content: 'Fascias and soffits take the brunt of the weather — rain, wind, and airborne dirt combine to create algae and mould growth that turns white UPVC green or black. WOW Gutters Ltd restores them using hot purified water cleaning that removes all biological growth without chemicals.', bullets: ['Hot purified water cleaning — no harsh chemicals needed', 'Algae, mould, and lichen removed from all UPVC surfaces', 'Bright white finish restored to original appearance', 'Soffit vents cleaned without damage', 'Gutter cleaning combined in the same visit', 'Before and after photos on every job'] },
        { heading: 'Why Clean Your Fascias and Soffits?', content: 'Clean fascias and soffits transform property appearance. Regular cleaning prevents long-term damage from algae that etches into UPVC surfaces over time.', bullets: ['Restores kerb appeal — essential when selling your property', 'Prevents algae from etching permanently into UPVC surfaces', 'Extends the life of your fascias and soffits', 'Identifies any damage or deterioration early', 'Combined gutter cleaning prevents water damage behind fascias', 'Most fascia and soffit cleaning completed in under an hour'] },
      ],
      faqs: [
        { question: 'How much does fascia and soffit cleaning cost?', answer: 'Fascia and soffit cleaning typically costs from £60 for standard homes. Larger properties may cost more. Fixed quote provided before work starts.' },
        { question: 'How do you clean fascias and soffits?', answer: 'We use a hot purified water cleaning system that removes algae, mould, and dirt without chemicals or abrasives. The hot water dissolves biological growth while pure water leaves a spot-free finish.' },
      ],
    };
  }

  if (slug === 'downpipe-unblocking') {
    return {
      heroTitle: 'Downpipe Unblocking',
      heroDescription: 'Professional downpipe unblocking across Birmingham and the West Midlands. WOW Gutters Ltd clears blocked downpipes using industrial vacuum and rodding equipment. Free flow test after every clearance. Call 07421 433910.',
      sections: [
        { heading: 'Professional Downpipe Unblocking', content: 'A blocked downpipe causes water to back up into your gutters and overflow during rain. WOW Gutters Ltd clears blockages using professional equipment, then tests the flow to confirm the pipe is running freely from gutter to drain.', bullets: ['Blocked downpipe diagnosis and clearance', 'Vacuum and rodding equipment for stubborn blockages', 'Flow testing on every outlet after clearance', 'Leaf guards and mesh outlets to prevent future blockages', 'Combined gutter and downpipe clearance in one visit', 'Free quotes with no obligation'] },
        { heading: 'What Causes Downpipe Blockages?', content: 'Downpipes block from compacted leaves, moss, bird nesting material, silt, and sycamore seeds. Understanding the cause helps prevent recurrence.', bullets: ['Debris washing from gutters into the downpipe inlet', 'Compacted leaves and moss forming a plug at bends', 'Bird nesting material and droppings accumulating', 'Silt and mineral deposits building up over years', 'Sycamore seed cases compacting in narrow sections', 'Frozen blockages in winter that expand and crack pipes'] },
      ],
      faqs: [
        { question: 'How much does downpipe unblocking cost?', answer: 'Downpipe unblocking typically costs between £40 and £80 depending on the severity and location of the blockage. Fixed quote provided before work starts.' },
        { question: 'How do you unblock a downpipe?', answer: 'We use vacuum suction for accessible blockages and rodding equipment for deeper ones. Every clearance is followed by a flow test to confirm free drainage.' },
        { question: 'Can a blocked downpipe cause damp?', answer: 'Yes — a blocked downpipe forces water to overflow from gutters, running down external walls and saturating brickwork, leading to internal damp.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning') {
    return {
      heroTitle: 'Commercial Gutter Cleaning',
      heroDescription: 'Professional commercial gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd services offices, retail units, warehouses, and industrial buildings. Planned maintenance available. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Services', content: 'Commercial properties have larger gutter systems, multiple downpipes, and more complex access requirements than domestic properties. WOW Gutters Ltd provides professional commercial gutter cleaning across Birmingham, Wolverhampton, Coventry, Dudley, Walsall, Solihull, and the wider West Midlands.', bullets: ['Industrial-grade vacuum system for large gutter runs', 'Multi-downpipe testing and clearance on every visit', 'Flexible scheduling — out-of-hours work available', 'Planned maintenance programmes for regular clearance', 'Before and after photographic records for compliance', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Commercial Properties Need Regular Gutter Cleaning', content: 'Blocked gutters on commercial properties cause water damage to stock, equipment, and interiors. Health and safety regulations require commercial drainage maintenance.', bullets: ['Prevents water damage to stock, equipment, and interiors', 'Meets health and safety requirements for drainage maintenance', 'Reduces liability risks from overflowing water', 'Extends the life of commercial gutter systems', 'Planned maintenance reduces costs compared to emergency callouts', 'Photographic records provided for compliance documentation'] },
      ],
      faqs: [
        { question: 'How much does commercial gutter cleaning cost?', answer: 'Costs vary by property size, gutter length, and access. WOW Gutters Ltd provides free site surveys and fixed quotes for all commercial work.' },
        { question: 'Do you offer planned maintenance contracts?', answer: 'Yes — scheduled gutter cleaning programmes for commercial properties with regular visits timed to your property\'s specific needs.' },
        { question: 'What areas do you cover for commercial work?', answer: 'We cover Birmingham, Coventry, Wolverhampton, Dudley, Walsall, Sandwell, Solihull, and all surrounding West Midlands areas.' },
      ],
    };
  }

  if (slug === 'emergency-gutter-cleaning') {
    return {
      heroTitle: 'Emergency Gutter Cleaning',
      heroDescription: 'Emergency gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd offers rapid response for overflowing gutters, blocked downpipes, and storm damage. Same-day availability. Call 07421 433910.',
      sections: [
        { heading: 'Emergency Gutter Cleaning Service', content: 'When your gutters are overflowing during heavy rain, you need help fast. WOW Gutters Ltd offers emergency gutter cleaning across Birmingham and the West Midlands for urgent blockages, storm damage, and sudden overflow problems.', bullets: ['Same-day emergency response subject to availability', 'Rapid clearance of overflowing gutters and blocked downpipes', 'Industrial vacuum system for quick, thorough results', 'Downpipe testing and flow check before we leave', 'No extra charge for emergency callouts', 'Fixed pricing quoted before work starts'] },
        { heading: 'Common Emergency Scenarios', content: 'We handle a range of urgent gutter situations. Our rapid response team can usually attend within hours of your call.', bullets: ['Gutters overflowing during heavy rain', 'Downpipes completely blocked with water backing up', 'Storm damage causing gutter sagging or detachment', 'Water pouring over gutters behind fascia boards', 'Urgent clearance needed before further rainfall', 'Pre-winter emergency clearance for vulnerable properties'] },
      ],
      faqs: [
        { question: 'How quickly can you respond to an emergency?', answer: 'We offer same-day emergency gutter cleaning across Birmingham and the West Midlands subject to current availability. Call 07421 433910 for the earliest appointment.' },
        { question: 'Do you charge extra for emergency callouts?', answer: 'No — our emergency gutter cleaning is charged at the same rate as our standard service. Fixed pricing quoted before work starts.' },
        { question: 'What areas do you cover for emergencies?', answer: 'All Birmingham postcodes and the wider West Midlands including Solihull, Wolverhampton, Walsall, Dudley, and Coventry.' },
      ],
    };
  }

  if (slug === 'home-guard-plan') {
    return {
      heroTitle: 'Home Guard Plan — Annual Gutter Maintenance',
      heroDescription: 'Protect your property with the WOW Gutters Ltd Home Guard Plan. Annual gutter maintenance with scheduled visits, priority booking, and discounted rates. Birmingham and West Midlands. Call 07421 433910.',
      sections: [
        { heading: 'What Is the Home Guard Plan?', content: 'The Home Guard Plan is WOW Gutters Ltd\'s annual gutter maintenance programme. It provides scheduled gutter cleaning visits timed to your property\'s needs, priority booking, discounted rates, and peace of mind knowing your gutters are professionally maintained throughout the year.', bullets: ['Scheduled gutter cleaning visits — typically spring and autumn', 'Priority booking over one-off customers', 'Discounted rates for plan members', 'Before and after photos on every visit', 'Written condition summary after each clean', 'Annual inspection report for your records'] },
        { heading: 'Why Choose the Home Guard Plan?', content: 'Regular gutter maintenance prevents the small problems that become expensive emergencies. The Home Guard Plan makes it easy to stay on top of gutter care without having to remember to book.', bullets: ['Never forget to book your gutter clean again', 'Prevents emergency callouts with proactive maintenance', 'Priority service during busy autumn period', 'Fixed annual price — no surprises', 'Extends the life of your gutter system and roofline', 'Ideal for homeowners, landlords, and property managers'] },
      ],
      faqs: [
        { question: 'How much does the Home Guard Plan cost?', answer: 'Plan pricing depends on your property size and visit frequency. We provide a fixed annual price after a free initial assessment.' },
        { question: 'How many visits are included?', answer: 'Most plans include two visits per year — one in spring and one in autumn. Additional visits can be arranged if needed.' },
        { question: 'Can I cancel the plan at any time?', answer: 'Yes — the Home Guard Plan has no long-term commitment. You can cancel at any time with no penalty.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-birmingham') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Birmingham',
      heroDescription: 'Professional commercial gutter cleaning in Birmingham for offices, warehouses, retail units, schools, and industrial buildings. Planned maintenance and one-off clearances. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Birmingham', content: 'Birmingham\'s commercial properties — from the Jewellery Quarter to the Bullring, from Digbeth to Brindleyplace — need reliable gutter maintenance. WOW Gutters Ltd provides professional commercial gutter cleaning across all Birmingham postcodes, using industrial-grade vacuum equipment to clear large gutter runs safely from ground level.', bullets: ['Commercial gutter cleaning for all Birmingham business premises', 'Industrial-grade vacuum system for large gutter runs in the city', 'Multi-downpipe testing and clearance on every commercial visit', 'Out-of-hours scheduling to minimise disruption to your business', 'Before and after photos for your maintenance records', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Birmingham Commercial Properties We Serve', content: 'We clean gutters on commercial properties across the entire Birmingham area — from the city centre to the suburbs. Our team understands the access challenges of different commercial building types.', bullets: ['City centre offices — Colmore Row, Brindleyplace, Jewellery Quarter', 'Retail units — Bullring, Grand Central, High Street, Fort Kinnaird', 'Warehouses and distribution centres — Tyseley, Nechells, Aston', 'Business parks — Birmingham Business Park, Blythe Valley Park', 'Schools and public buildings across all Birmingham wards', 'Free site survey and fixed price quotation for all commercial work'] },
      ],
      faqs: [
        { question: 'How much does commercial gutter cleaning cost in Birmingham?', answer: 'Costs vary by property size, gutter length, and access requirements. WOW Gutters Ltd provides free site surveys and fixed quotes for all commercial gutter cleaning in Birmingham.' },
        { question: 'Do you cover all Birmingham postcodes?', answer: 'Yes — we cover all Birmingham postcodes including B1–B48, from the city centre to outer suburbs.' },
        { question: 'Can you work outside business hours?', answer: 'Yes — we schedule commercial gutter cleaning outside business hours, at weekends, or during shutdown periods.' },
      ],
    };
  }

  if (slug === 'office-gutter-cleaning') {
    return {
      heroTitle: 'Office Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for office buildings across Birmingham and the West Midlands. WOW Gutters Ltd services all types of office premises with minimal disruption to your business. Call 07421 433910.',
      sections: [
        { heading: 'Office Gutter Cleaning Services', content: 'Office buildings — from individual converted houses to multi-storey blocks in business parks — have gutter systems that need regular maintenance. WOW Gutters Ltd provides professional office gutter cleaning across Birmingham and the West Midlands, working around your business hours to avoid disruption.', bullets: ['Full gutter clearance for all types of office buildings', 'Multi-storey office block gutter cleaning using ground-level vacuum', 'Downpipe testing and flow check on every outlet', 'Out-of-hours appointments to minimise business disruption', 'Before and after photos for facilities management records', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Offices Need Regular Gutter Maintenance', content: 'Blocked gutters on office buildings cause water damage to interiors, equipment, and documents. For businesses, the disruption from water ingress can mean lost trading time, damaged stock, and insurance claims.', bullets: ['Prevents water damage to office interiors and equipment', 'Protects IT infrastructure and business-critical equipment', 'Maintains professional appearance for clients and visitors', 'Meets health and safety compliance obligations', 'Planned maintenance contracts for managed office buildings', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Do you work around office hours?', answer: 'Yes — we can schedule office gutter cleaning before or after business hours, at weekends, or during your chosen downtime.' },
        { question: 'What type of office buildings do you clean?', answer: 'We clean gutters on all office types — individual converted houses, multi-storey blocks, business park units, managed offices, and corporate headquarters.' },
      ],
    };
  }

  if (slug === 'industrial-gutter-cleaning') {
    return {
      heroTitle: 'Industrial Gutter Cleaning',
      heroDescription: 'Professional industrial gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd services factories, manufacturing plants, processing facilities, and industrial units. Call 07421 433910.',
      sections: [
        { heading: 'Industrial Gutter Cleaning Services', content: 'Industrial properties present unique gutter cleaning challenges — large roof areas, complex drainage systems, restricted access, and the need for minimal operational disruption. WOW Gutters Ltd provides professional industrial gutter cleaning using industrial-grade equipment.', bullets: ['Industrial-grade vacuum equipment for large-scale gutter clearance', 'Complex multi-downpipe systems tested on every visit', 'Out-of-hours and shutdown period scheduling available', 'Photographic records for health and safety compliance', 'Planned maintenance contracts for regular servicing', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Industrial Properties Need Regular Gutter Cleaning', content: 'Blocked gutters on industrial properties can halt production, damage equipment, and create health and safety risks. Regular professional gutter cleaning protects your operations and your building.', bullets: ['Prevents production downtime from water damage', 'Protects heavy machinery and sensitive equipment', 'Meets health and safety compliance requirements', 'Reduces liability risks from overflowing water', 'Extends the life of industrial gutter systems', 'Planned maintenance reduces costs vs emergency callouts'] },
      ],
      faqs: [
        { question: 'What industrial properties do you clean?', answer: 'We clean gutters on factories, manufacturing plants, processing facilities, distribution centres, and industrial units of all sizes.' },
        { question: 'Can you work during shutdowns?', answer: 'Yes — we can schedule work to coincide with planned shutdowns, minimising disruption to your operations.' },
      ],
    };
  }

  if (slug === 'school-gutter-cleaning') {
    return {
      heroTitle: 'School Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for schools across Birmingham and the West Midlands. WOW Gutters Ltd services primary schools, secondary schools, academies, and college buildings. Call 07421 433910.',
      sections: [
        { heading: 'School Gutter Cleaning Services', content: 'Schools need reliable gutter maintenance to protect pupils, staff, and buildings. WOW Gutters Ltd provides professional school gutter cleaning, scheduling work during school holidays or after hours to avoid disrupting the school day.', bullets: ['Full gutter clearance for school buildings of all sizes', 'Holiday and out-of-hours scheduling to avoid pupil disruption', 'Downpipe testing and flow check on all outlets', 'Before and after photos for compliance records', 'Planned maintenance contracts for academy trusts and MATs', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Schools Need Regular Gutter Maintenance', content: 'Water damage from blocked gutters in schools is particularly serious — it can close classrooms, damage resources, and create health hazards. Regular maintenance protects the school estate and keeps buildings safe.', bullets: ['Prevents water damage to classrooms, halls, and resources', 'Eliminates slip hazards from overflowing water near entrances', 'Meets DfE compliance requirements for building maintenance', 'Protects school IT equipment and valuable resources', 'Respectful service that works around school timetables', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Do you work during school holidays?', answer: 'Yes — we specialise in scheduling school gutter cleaning during summer, Easter, and half-term holidays when buildings are empty.' },
        { question: 'Do you offer contracts for multi-academy trusts?', answer: 'Yes — we offer planned maintenance programmes for MATs and school groups, with coordinated scheduling across multiple sites.' },
      ],
    };
  }

  if (slug === 'hospital-gutter-cleaning') {
    return {
      heroTitle: 'Hospital Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for hospitals and healthcare facilities across Birmingham and the West Midlands. WOW Gutters Ltd services NHS trusts, private hospitals, and medical centres. Call 07421 433910.',
      sections: [
        { heading: 'Hospital Gutter Cleaning Services', content: 'Hospitals and healthcare facilities require gutter maintenance that meets strict infection control and operational continuity standards. WOW Gutters Ltd provides professional hospital gutter cleaning with minimal disruption to patient care and clinical services.', bullets: ['Full gutter clearance for hospital buildings and wings', 'Discreet service with minimal disruption to patient care', 'Strict adherence to NHS infection control protocols', 'Out-of-hours scheduling around clinical operations', 'Comprehensive photographic records for estates management', 'Fully insured with NHS-compliant liability cover'] },
        { heading: 'Why Hospitals Need Professional Gutter Maintenance', content: 'Water ingress in hospitals can close wards, damage medical equipment, and create infection risks. Regular gutter maintenance is critical for healthcare environments.', bullets: ['Prevents water ingress affecting patient wards and treatment areas', 'Protects sensitive medical equipment and diagnostic facilities', 'Eliminates slip hazards near entrances and access routes', 'Meets NHS estates compliance requirements', 'Planned maintenance for NHS trusts and private healthcare providers', 'Emergency response available for urgent gutter issues'] },
      ],
      faqs: [
        { question: 'Can you work in active hospital environments?', answer: 'Yes — we have experience working in healthcare settings and follow all infection control and safeguarding protocols.' },
        { question: 'Do you offer emergency gutter services for hospitals?', answer: 'Yes — we provide priority response for hospitals and healthcare facilities with urgent gutter problems.' },
      ],
    };
  }

  if (slug === 'church-gutter-cleaning') {
    return {
      heroTitle: 'Church Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for churches and historic buildings across Birmingham and the West Midlands. WOW Gutters Ltd provides sensitive gutter care for all places of worship. Call 07421 433910.',
      sections: [
        { heading: 'Church Gutter Cleaning Services', content: 'Churches have complex rooflines, historic gutter systems, and often restricted access that makes gutter cleaning challenging. WOW Gutters Ltd provides professional gutter cleaning for churches, treating every building with the care its age and architecture deserves.', bullets: ['Gentle gutter cleaning for historic and listed church buildings', 'Ground-level vacuum system — no ladders against historic stonework', 'Complex roofline navigation including towers and aisles', 'Downpipe testing and flow check on all outlets', 'Photographic records for church maintenance files and insurers', 'Fully insured for work on historic and listed buildings'] },
        { heading: 'Why Churches Need Regular Gutter Maintenance', content: 'Historic church buildings — from medieval parish churches to Victorian Gothic buildings — have gutter systems that are often original cast iron. These need careful maintenance to prevent water damage to historic fabric.', bullets: ['Protects historic stonework and brickwork from water damage', 'Prevents damp in church interiors affecting fabric and fittings', 'Identifies cast iron gutter deterioration before it becomes critical', 'Maintains safe access for congregation and visitors', 'Suitable for all denominations and building types', 'Free site survey for listed and complex buildings'] },
      ],
      faqs: [
        { question: 'Can you work on listed church buildings?', answer: 'Yes — our ground-level vacuum system does not require ladders against historic fabric, making it ideal for listed and heritage church buildings.' },
        { question: 'Do you provide documentation for insurance?', answer: 'Yes — every church clean includes before and after photographs and a written summary suitable for insurance and maintenance records.' },
      ],
    };
  }

  if (slug === 'hmo-gutter-cleaning') {
    return {
      heroTitle: 'HMO Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for HMO properties across Birmingham and the West Midlands. WOW Gutters Ltd helps HMO landlords meet legal obligations with documented evidence. Call 07421 433910.',
      sections: [
        { heading: 'HMO Gutter Cleaning Services', content: 'Houses in Multiple Occupation have additional regulatory requirements, and gutter maintenance is part of the landlord\'s duty of care. WOW Gutters Ltd provides professional HMO gutter cleaning with full photographic evidence for HMO licensing compliance.', bullets: ['Professional gutter cleaning for all types of HMO properties', 'Photographic before and after evidence for HMO licence compliance', 'Downpipe testing and flow check on every outlet', 'Written condition summary after every clean', 'Discounted rates for multi-property HMO portfolios', 'Fixed pricing with no hidden charges'] },
        { heading: 'Why HMO Landlords Need Professional Gutter Cleaning', content: 'HMO properties house multiple tenants, and water damage from blocked gutters can affect several occupants at once. Regular gutter maintenance is part of the landlord\'s duty of care under HMO licensing conditions.', bullets: ['Protects multiple tenants from water ingress and damp issues', 'Demonstrates compliance with HMO licence conditions', 'Provides documented evidence of proper building maintenance', 'Prevents tenant complaints and void periods', 'Reduces emergency repair costs with proactive care', 'Flexible scheduling between tenancies'] },
      ],
      faqs: [
        { question: 'How often should HMO gutters be cleaned?', answer: 'Most HMO properties benefit from gutter cleaning at least once a year. Properties near trees may need twice-yearly cleaning.' },
        { question: 'Do you provide proof for HMO licensing?', answer: 'Yes — every HMO clean includes before and after photographs and a written summary, providing clear evidence of completed maintenance.' },
      ],
    };
  }

  if (slug === 'apartment-block-gutter-cleaning') {
    return {
      heroTitle: 'Apartment Block Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for apartment blocks across Birmingham and the West Midlands. WOW Gutters Ltd services managed blocks, conversions, and purpose-built flats. Call 07421 433910.',
      sections: [
        { heading: 'Apartment Block Gutter Cleaning Services', content: 'Apartment blocks have shared rooflines and complex gutter systems that serve multiple properties. WOW Gutters Ltd provides professional gutter cleaning for apartment blocks across Birmingham and the West Midlands, with full documentation for managing agents and freeholders.', bullets: ['Full gutter clearance for apartment blocks and mansion blocks', 'Shared roofline systems cleaned comprehensively', 'Downpipe testing on all outlets serving ground and upper floors', 'Before and after photos for managing agent records', 'Planned maintenance for block management companies', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Apartment Blocks Need Regular Gutter Maintenance', content: 'Water damage from blocked gutters in apartment blocks affects multiple leaseholders. It can lead to expensive structural repairs, service charge disputes, and insurance claims. Regular maintenance protects the building and maintains good relationships.', bullets: ['Prevents water damage affecting multiple apartments', 'Protects common areas, hallways, and entrance canopies', 'Avoids expensive structural repairs from prolonged water ingress', 'Provides documented maintenance for service charge accounts', 'Planned contracts for block management companies', 'Free site survey for apartment blocks of all sizes'] },
      ],
      faqs: [
        { question: 'Do you provide quotes for apartment block management?', answer: 'Yes — we provide fixed-price quotes for apartment block gutter cleaning suitable for managing agents and freeholders.' },
        { question: 'Can you access difficult apartment block layouts?', answer: 'Yes — our ground-level vacuum system reaches gutters on blocks up to four storeys without scaffolding or ladders against walls.' },
      ],
    };
  }

  if (slug === 'block-management-gutter-cleaning') {
    return {
      heroTitle: 'Block Management Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for block management companies across Birmingham and the West Midlands. WOW Gutters Ltd provides planned maintenance, compliance documentation, and single-invoice billing. Call 07421 433910.',
      sections: [
        { heading: 'Block Management Gutter Cleaning Services', content: 'Block management companies oversee gutter maintenance across multiple properties. WOW Gutters Ltd partners with managing agents to provide reliable gutter cleaning programmes with comprehensive documentation for leaseholders and freeholders.', bullets: ['Planned gutter maintenance for entire block portfolios', 'Scheduled visits timed to seasonal requirements', 'Comprehensive photographic records for service charge accounts', 'Single-invoice billing for multiple blocks under management', 'Priority scheduling for contract customers', 'Dedicated account management for block management firms'] },
        { heading: 'Why Block Managers Choose WOW Gutters Ltd', content: 'Managing gutter maintenance across multiple blocks is time-consuming. WOW Gutters Ltd simplifies the process with planned schedules, automated reminders, and comprehensive documentation for every visit.', bullets: ['Reduces administrative burden on block management teams', 'Ensures consistent maintenance across all managed blocks', 'Provides documented evidence for leaseholder communication', 'Prevents emergency callout costs with proactive maintenance', 'Flexible scheduling to match service charge budgets', 'Fixed pricing with annual contract options'] },
      ],
      faqs: [
        { question: 'Do you offer portfolio discounts?', answer: 'Yes — we offer discounted rates for block management contracts covering multiple properties, with single-invoice billing for convenience.' },
        { question: 'What documentation do you provide?', answer: 'Every visit includes before and after photographs, a written condition summary, and an annual compliance report.' },
      ],
    };
  }

  if (slug === 'high-rise-gutter-cleaning') {
    return {
      heroTitle: 'High Rise Gutter Cleaning',
      heroDescription: 'Professional high rise gutter cleaning for tall buildings across Birmingham and the West Midlands. WOW Gutters Ltd\'s industrial vacuum system reaches gutters safely from ground level. Call 07421 433910.',
      sections: [
        { heading: 'High Rise Gutter Cleaning Service', content: 'High rise buildings — apartment towers, office blocks, and commercial premises of three storeys or more — have gutters that cannot be reached safely with standard ladders. WOW Gutters Ltd\'s high-reach vacuum system cleans gutters on buildings up to four storeys from ground level, eliminating the need for scaffolding or cherry pickers.', bullets: ['Vacuum system reaches gutters on buildings up to four storeys high', 'No scaffolding or cherry picker required for most high rise buildings', 'Complete debris extraction from all high level gutters', 'Downpipe testing from ground level', 'Before and after photos for building management records', 'Fully insured for high rise work with specialist equipment'] },
        { heading: 'Why High Rise Buildings Need Professional Gutter Cleaning', content: 'High rise gutters are often neglected because they are difficult and dangerous to access. But blocked gutters at height cause water damage that runs down the full height of the building, affecting multiple floors.', bullets: ['Prevents water damage to upper-storey walls and windows', 'Avoids costly scaffolding hire for routine gutter maintenance', 'Eliminates safety risks of ladder-based cleaning at height', 'Protects the building fabric and exterior finish', 'Regular maintenance prevents emergency callouts at height', 'Ideal for city centre apartment blocks and commercial towers'] },
      ],
      faqs: [
        { question: 'How high can your system reach?', answer: 'Our ground-level vacuum system reaches gutters up to four storeys — approximately 12 metres. This covers most high rise residential and commercial buildings.' },
        { question: 'Do I need scaffolding?', answer: 'No — our high-reach vacuum system cleans gutters from ground level. Scaffolding is not required for the vast majority of buildings.' },
      ],
    };
  }

  if (slug === 'multi-storey-gutter-cleaning') {
    return {
      heroTitle: 'Multi Storey Gutter Cleaning',
      heroDescription: 'Professional multi storey gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd cleans gutters on buildings of 2–4 storeys safely from ground level. Call 07421 433910.',
      sections: [
        { heading: 'Multi Storey Gutter Cleaning Services', content: 'Multi storey buildings present access challenges for traditional gutter cleaning. WOW Gutters Ltd\'s high-reach vacuum system cleans gutters on two, three, and four-storey buildings safely from ground level, with no ladders against your walls.', bullets: ['Multi storey gutter cleaning for buildings of 2–4 storeys', 'Ground-level vacuum system — no ladders or scaffolding needed', 'Safe cleaning of complex roof configurations', 'Downpipe testing on all levels from ground access', 'Before and after photos provided on every job', 'Fully insured for multi storey work'] },
        { heading: 'Types of Multi Storey Buildings We Clean', content: 'We clean gutters on a wide range of multi storey buildings across Birmingham and the West Midlands, from Victorian townhouses to modern apartment blocks.', bullets: ['Three and four-storey Victorian and Edwardian townhouses', 'Purpose-built apartment blocks and maisonettes', 'Multi-storey office buildings and commercial premises', 'Mixed-use developments with ground-floor retail and upper floors', 'School buildings and public sector multi storey premises', 'Free site survey for all multi storey properties'] },
      ],
      faqs: [
        { question: 'Is multi storey gutter cleaning more expensive?', answer: 'Multi storey properties may cost more due to the equipment required. WOW Gutters Ltd provides a fixed quote before any work starts.' },
        { question: 'Do you use cherry pickers for multi storey buildings?', answer: 'For most buildings up to four storeys, our ground-level vacuum system does the job without cherry pickers or scaffolding.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contract') {
    return {
      heroTitle: 'Gutter Cleaning Contract',
      heroDescription: 'Reliable gutter cleaning contracts for commercial and residential properties across Birmingham and the West Midlands. WOW Gutters Ltd offers scheduled maintenance with fixed annual pricing. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Contract Services', content: 'A gutter cleaning contract provides scheduled maintenance with fixed pricing, priority booking, and peace of mind. WOW Gutters Ltd offers gutter cleaning contracts for commercial properties, landlords, managing agents, and homeowners who want reliable year-round gutter care.', bullets: ['Scheduled gutter cleaning visits — tailored to your property\'s needs', 'Fixed annual price with no hidden charges', 'Priority booking over one-off customers', 'Comprehensive documentation after every visit', 'Flexible visit frequency — quarterly, bi-annual, or annual', 'Dedicated account management for contract customers'] },
        { heading: 'Benefits of a Gutter Cleaning Contract', content: 'A contract gutter cleaning service ensures your gutters are maintained regularly without the hassle of remembering to book. It also costs less per visit than one-off bookings.', bullets: ['Guaranteed regular maintenance — never miss a gutter clean', 'Lower cost per visit compared to one-off bookings', 'Emergency callout included in some contract tiers', 'Documented evidence for insurance and compliance', 'Extends the life of your gutter system', 'Free initial assessment and fixed price quote'] },
      ],
      faqs: [
        { question: 'How often do contract visits happen?', answer: 'Contract frequency is tailored to your property. Most contracts include 1–4 visits per year depending on location, tree cover, and property type.' },
        { question: 'Can I cancel my contract at any time?', answer: 'Yes — our contracts have no long-term tie-in. You can cancel with reasonable notice.' },
      ],
    };
  }

  if (slug === 'planned-gutter-maintenance') {
    return {
      heroTitle: 'Planned Gutter Maintenance',
      heroDescription: 'Planned gutter maintenance programmes for properties across Birmingham and the West Midlands. WOW Gutters Ltd offers scheduled cleaning, inspection, and minor repairs. Call 07421 433910.',
      sections: [
        { heading: 'Planned Gutter Maintenance Services', content: 'Planned gutter maintenance is the most cost-effective way to protect your property from water damage. WOW Gutters Ltd offers scheduled maintenance programmes — cleaning, inspection, and minor repairs — on a timetable that matches your property\'s specific needs.', bullets: ['Scheduled gutter cleaning timed to your debris accumulation pattern', 'Full inspection of joints, brackets, and fascia condition', 'Downpipe testing and clearance on every visit', 'Minor repairs — sealant, brackets, and outlet adjustments', 'Before and after photos for your maintenance records', 'Priority scheduling for maintenance programme customers'] },
        { heading: 'Why Choose Planned Gutter Maintenance?', content: 'Reactive gutter cleaning (calling when there is a problem) costs more and leads to more damage. Planned maintenance keeps your gutters working year-round at a lower overall cost.', bullets: ['Prevents costly emergency callouts with proactive care', 'Extends the life of gutters, fascias, and roofline', 'Identifies small problems before they become expensive repairs', 'Protects property value with consistent maintenance records', 'Suitable for homes, commercial premises, and managed estates', 'Fixed annual price with no surprise charges'] },
      ],
      faqs: [
        { question: 'What does planned gutter maintenance include?', answer: 'It includes debris removal, downpipe testing, joint and bracket inspection, minor repairs, and photographic documentation on every visit.' },
        { question: 'How many visits per year?', answer: 'Most properties benefit from two visits per year — one in spring for inspection and one in autumn for leaf fall clearance.' },
      ],
    };
  }

  if (slug === 'gutter-maintenance-programme') {
    return {
      heroTitle: 'Gutter Maintenance Programme',
      heroDescription: 'Professional gutter maintenance programmes across Birmingham and the West Midlands. WOW Gutters Ltd offers annual and bi-annual plans for homes and businesses. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Maintenance Programme', content: 'A gutter maintenance programme takes the hassle out of gutter care. WOW Gutters Ltd offers structured maintenance plans with scheduled visits, automatic reminders, and fixed annual pricing.', bullets: ['Choose annual or bi-annual visit frequency', 'Automatic reminders — never remember to book again', 'Fixed annual price with no hidden charges', 'Comprehensive cleaning and inspection on every visit', 'Photographic records and condition reports', 'Priority booking during busy autumn season'] },
        { heading: 'Who Benefits from a Maintenance Programme?', content: 'Our gutter maintenance programmes are popular with busy homeowners, landlords with multiple properties, property managers, and commercial premises that need consistent drainage maintenance.', bullets: ['Homeowners who want hassle-free gutter care', 'Landlords meeting legal maintenance obligations', 'Property managers overseeing multiple sites', 'Commercial premises requiring compliance documentation', 'Managing agents for apartment blocks and estates', 'Free site survey and programme recommendation'] },
      ],
      faqs: [
        { question: 'How much does a gutter maintenance programme cost?', answer: 'Programme costs depend on property size and visit frequency. We provide a fixed annual price after a free initial assessment.' },
        { question: 'What happens if a problem is found during a visit?', answer: 'We document issues with photographs and recommend repairs. Minor work can often be completed during the same visit.' },
      ],
    };
  }

  if (slug === 'scheduled-gutter-cleaning') {
    return {
      heroTitle: 'Scheduled Gutter Cleaning',
      heroDescription: 'Scheduled gutter cleaning for properties across Birmingham and the West Midlands. WOW Gutters Ltd offers regular cleaning on a timetable that suits you. Call 07421 433910.',
      sections: [
        { heading: 'Scheduled Gutter Cleaning Service', content: 'Scheduled gutter cleaning ensures your gutters are cleared at the right time — before autumn leaf fall, after winter storms, or ahead of spring growth. WOW Gutters Ltd offers flexible scheduling with automatic reminders so you never miss a clean.', bullets: ['Flexible scheduling — monthly, quarterly, bi-annual, or annual', 'Automatic reminders so you never miss a gutter clean', 'Fixed price per visit with no hidden charges', 'Full debris clearance and downpipe testing on every visit', 'Before and after photos sent after every clean', 'Modify or skip visits with no penalty'] },
        { heading: 'Popular Schedule Options', content: 'We work with you to find the schedule that matches your property\'s needs and your budget.', bullets: ['Pre-winter schedule — clear gutters before October rains', 'Spring clean — remove winter debris and inspect for damage', 'Bi-annual — autumn and spring visits for year-round protection', 'Quarterly — for properties under heavy tree cover', 'Pre-sale schedule — clean before property viewings', 'Free schedule consultation with no obligation'] },
      ],
      faqs: [
        { question: 'Can I change my schedule?', answer: 'Yes — you can change your visit frequency or skip a visit at any time with no penalty.' },
        { question: 'What happens if I miss a scheduled visit?', answer: 'We will contact you to reschedule at a convenient time. There is no charge for rescheduling.' },
      ],
    };
  }

  if (slug === 'annual-gutter-cleaning-contract') {
    return {
      heroTitle: 'Annual Gutter Cleaning Contract',
      heroDescription: 'Annual gutter cleaning contracts for properties across Birmingham and the West Midlands. WOW Gutters Ltd offers fixed-price annual contracts with scheduled visits. Call 07421 433910.',
      sections: [
        { heading: 'Annual Gutter Cleaning Contract', content: 'An annual gutter cleaning contract is the simplest way to ensure your gutters are maintained year-round. WOW Gutters Ltd offers fixed-price annual contracts with scheduled visits, priority booking, and comprehensive documentation.', bullets: ['Fixed annual price — no unexpected costs', 'Scheduled visits timed to seasonal needs', 'Priority booking over one-off customers', 'Downpipe testing and flow check on every visit', 'Before and after photos for your records', 'No long-term commitment — cancel with notice'] },
        { heading: 'What\'s Included in an Annual Contract', content: 'Our annual contracts include everything you need to keep your gutters working properly throughout the year.', bullets: ['Full gutter clearance on each scheduled visit', 'Debris removal from downpipe outlets and ground level', 'Joint and bracket inspection for signs of wear', 'Fascia condition check and basic assessment', 'Minor adjustments to loose brackets or sealant', 'Written condition report after each visit'] },
      ],
      faqs: [
        { question: 'How many visits are in an annual contract?', answer: 'Most annual contracts include two visits — typically spring and autumn. Additional visits can be added if needed.' },
        { question: 'Is there a long-term commitment?', answer: 'No — our annual contracts have no long-term tie-in. You can cancel with reasonable notice.' },
      ],
    };
  }

  if (slug === 'commercial-downpipe-cleaning') {
    return {
      heroTitle: 'Commercial Downpipe Cleaning',
      heroDescription: 'Professional downpipe cleaning for commercial properties across Birmingham and the West Midlands. WOW Gutters Ltd clears blocked downpipes on offices, warehouses, and industrial buildings. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Downpipe Cleaning Services', content: 'Blocked downpipes on commercial properties cause water to back up in gutters, overflow against walls, and pool at ground level. WOW Gutters Ltd provides professional commercial downpipe cleaning using specialist equipment to clear blockages quickly and confirm flow restoration.', bullets: ['Professional downpipe clearance for all commercial property types', 'Specialist equipment for clearing compacted blockages', 'Flow testing on every downpipe after clearance', 'Ground-level access where possible for minimal disruption', 'CCTV inspection available for persistent blockage issues', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Common Causes of Commercial Downpipe Blockages', content: 'Commercial downpipes block for different reasons than residential ones. Understanding the cause helps us prevent recurrence.', bullets: ['Compacted leaf and moss debris in downpipe inlets', 'Birds\' nests blocking pipe outlets at ground level', 'Silt and sediment buildup from large roof areas', 'Damage or collapse of underground drainage connections', 'Inadequate downpipe protection on flat-roof commercial buildings', 'Regular maintenance prevents most downpipe blockages'] },
      ],
      faqs: [
        { question: 'How do you clear commercial downpipes?', answer: 'We use specialist rods, vacuum suction, and water jetting where appropriate to clear blockages from commercial downpipes.' },
        { question: 'Do you provide downpipe testing as part of gutter cleaning?', answer: 'Yes — downpipe flow testing is included as standard with every WOW Gutters Ltd commercial gutter clean.' },
      ],
    };
  }

  if (slug === 'commercial-fascia-and-soffit-cleaning') {
    return {
      heroTitle: 'Commercial Fascia and Soffit Cleaning',
      heroDescription: 'Professional fascia and soffit cleaning for commercial properties across Birmingham and the West Midlands. WOW Gutters Ltd restores UPVC fascias on offices, retail units, and industrial buildings. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Fascia and Soffit Cleaning Services', content: 'Dirty fascias and soffits make commercial premises look neglected. WOW Gutters Ltd provides professional fascia and soffit cleaning for commercial properties using hot water washing and safe access methods, removing algae, moss, and grime without damaging UPVC.', bullets: ['Hot water fascia cleaning for commercial premises of all sizes', 'Algae, moss, and organic growth removal from UPVC surfaces', 'Safe access methods — ground-level where possible', 'Restores the professional appearance of your premises', 'Combined with gutter cleaning for comprehensive roofline care', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Commercial Properties Need Fascia and Soffit Cleaning', content: 'Fascias and soffits on commercial buildings accumulate dirt, algae, and moss that make the property look unprofessional. Regular cleaning maintains kerb appeal and prevents long-term degradation of UPVC surfaces.', bullets: ['Improves the professional appearance of your business premises', 'Removes algae and moss that can trap moisture against wood', 'Restores UPVC to its original colour without painting', 'Combined roofline service with gutter cleaning available', 'Suitable for offices, retail units, hotels, and public buildings', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Do you clean fascias on high commercial buildings?', answer: 'Yes — our high-reach equipment can clean fascias on buildings up to four storeys high.' },
        { question: 'Can you combine fascia cleaning with gutter cleaning?', answer: 'Yes — we often combine fascia and soffit cleaning with gutter cleaning for a complete roofline service at a discounted rate.' },
      ],
    };
  }

  if (slug === 'industrial-estate-gutter-cleaning') {
    return {
      heroTitle: 'Industrial Estate Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for industrial estates across Birmingham and the West Midlands. WOW Gutters Ltd services multiple units on industrial estates with coordinated scheduling. Call 07421 433910.',
      sections: [
        { heading: 'Industrial Estate Gutter Cleaning Services', content: 'Industrial estates present unique opportunities for coordinated gutter maintenance across multiple units under common ownership or management. WOW Gutters Ltd provides industrial estate gutter cleaning with volume discounts and single-invoice billing.', bullets: ['Coordinated gutter cleaning across multiple industrial units', 'Volume discounts for estate-wide maintenance contracts', 'Single invoice for all units on the estate', 'Flexible scheduling around tenant operations', 'Full photographic records for estate management', 'Fully insured with comprehensive public liability cover'] },
        { heading: 'Why Industrial Estates Need Regular Gutter Cleaning', content: 'Blocked gutters on industrial estates affect multiple units and can lead to structural damage, tenant complaints, and expensive emergency repairs. Estate-wide maintenance is more cost-effective than individual unit servicing.', bullets: ['Prevents water damage across multiple industrial units', 'Estate-wide maintenance saves money vs individual bookings', 'Protects landlord and tenant relationships', 'Simplifies administration with single-invoice billing', 'Maintains property values across the estate', 'Free estate-wide survey and fixed price quotation'] },
      ],
      faqs: [
        { question: 'Do you offer discounts for estate-wide contracts?', answer: 'Yes — we offer significant volume discounts for industrial estate gutter cleaning contracts covering multiple units.' },
        { question: 'Can you coordinate with tenants?', answer: 'Yes — we work with estate managers to schedule work at times that suit each tenant, minimising operational disruption.' },
      ],
    };
  }

  if (slug === 'business-park-gutter-cleaning') {
    return {
      heroTitle: 'Business Park Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for business parks across Birmingham and the West Midlands. WOW Gutters Ltd services offices, units, and shared facilities on business parks. Call 07421 433910.',
      sections: [
        { heading: 'Business Park Gutter Cleaning Services', content: 'Business parks often have multiple buildings with shared drainage infrastructure. WOW Gutters Ltd provides coordinated gutter cleaning for business parks, including office buildings, shared facilities, and service areas.', bullets: ['Full gutter clearance for all business park buildings', 'Coordinated scheduling across multiple units', 'Shared roof and drainage systems cleaned comprehensively', 'Out-of-hours work to minimise business disruption', 'Photographic records for business park management', 'Planned maintenance contracts available for managed parks'] },
        { heading: 'Why Business Parks Benefit from Regular Gutter Maintenance', content: 'Business parks present an image to clients, tenants, and visitors. Well-maintained gutters are part of that professional presentation, while blocked gutters can damage buildings and create costly problems.', bullets: ['Maintains professional appearance for the entire business park', 'Prevents water damage to multiple office and commercial units', 'Protects shared infrastructure and common areas', 'Simplified management with single point of contact', 'Volume discounts for multi-building contracts', 'Free site survey for business parks of all sizes'] },
      ],
      faqs: [
        { question: 'Do you work around business hours?', answer: 'Yes — we schedule business park gutter cleaning outside trading hours, at weekends, or during quiet periods.' },
        { question: 'Can you quote for an entire business park?', answer: 'Yes — we provide comprehensive quotes for business park gutter maintenance covering all buildings and shared infrastructure.' },
      ],
    };
  }

  if (slug === 'b2b-gutter-cleaning') {
    return {
      heroTitle: 'B2B Gutter Cleaning',
      heroDescription: 'Business-to-business gutter cleaning services across Birmingham and the West Midlands. WOW Gutters Ltd provides commercial gutter maintenance for companies, landlords, and managing agents. Call 07421 433910.',
      sections: [
        { heading: 'B2B Gutter Cleaning Services', content: 'WOW Gutters Ltd works with businesses across Birmingham and the West Midlands as a reliable B2B gutter cleaning partner. We provide commercial gutter maintenance for offices, industrial premises, retail units, and managed properties with professional documentation and invoicing.', bullets: ['Commercial gutter cleaning for all business property types', 'Professional invoicing and account management', 'Compliance documentation for company records', 'Flexible contract terms — no long-term commitment', 'Multi-site quotes for businesses with several locations', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Businesses Choose WOW Gutters Ltd', content: 'As a B2B gutter cleaning specialist, we understand that businesses need reliability, documentation, and professional account management — not just gutter cleaning.', bullets: ['Reliable service that respects your business operations', 'Professional documentation for compliance and accounts', 'Multi-site management for regional and national businesses', 'Single point of contact for all accounts', 'Fixed pricing with no surprises', 'Free site survey and B2B quotation'] },
      ],
      faqs: [
        { question: 'Do you offer credit accounts for businesses?', answer: 'Yes — we offer invoiced accounts for business customers with payment terms to suit your procurement processes.' },
        { question: 'Can you service multiple business sites?', answer: 'Yes — we provide coordinated gutter maintenance for businesses with multiple sites across Birmingham and the West Midlands.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-tender') {
    return {
      heroTitle: 'Gutter Cleaning Tender',
      heroDescription: 'Responding to gutter cleaning tender opportunities across Birmingham and the West Midlands. WOW Gutters Ltd is an approved contractor for commercial and public sector gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Tender Services', content: 'WOW Gutters Ltd responds to gutter cleaning tenders for commercial, public sector, and managed property portfolios across Birmingham and the West Midlands. We provide professional tender responses with fixed pricing, comprehensive service specifications, and evidence of our capabilities.', bullets: ['Professional gutter cleaning tender responses for all sectors', 'Fixed price proposals with detailed service specifications', 'Evidence of public liability insurance up to £10 million', 'References from existing contract customers', 'Health and safety documentation and risk assessments', 'Flexible contract terms to match tender requirements'] },
        { heading: 'Sectors We Tender For', content: 'WOW Gutters Ltd has experience delivering gutter maintenance contracts across multiple sectors and can provide tailored tender responses for each.', bullets: ['Local authorities and public sector organisations', 'Academy trusts, schools, and educational institutions', 'NHS trusts and healthcare facilities', 'Housing associations and social landlords', 'Property management companies and block managers', 'Commercial landlords and corporate real estate portfolios'] },
      ],
      faqs: [
        { question: 'Do you have experience with public sector tenders?', answer: 'Yes — WOW Gutters Ltd has experience delivering gutter maintenance for public sector organisations and can provide the documentation tender processes require.' },
        { question: 'What documentation do you provide with tenders?', answer: 'We provide insurance certificates, health and safety policies, risk assessments, method statements, references, and detailed pricing schedules.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-letting-agents') {
    return {
      heroTitle: 'Gutter Cleaning for Letting Agents',
      heroDescription: 'Professional gutter cleaning services for letting agents across Birmingham and the West Midlands. WOW Gutters Ltd provides reliable maintenance for managed rental properties. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Letting Agents', content: 'Letting agents need reliable, documented gutter maintenance across their managed property portfolios. WOW Gutters Ltd provides professional gutter cleaning for letting agents with scheduled visits, photographic evidence, and simple invoicing.', bullets: ['Planned gutter maintenance across your managed property portfolio', 'Scheduled visits with automated reminders', 'Photographic before and after evidence for landlord reports', 'Single monthly invoice for all managed properties', 'Priority scheduling for portfolio landlords', 'Dedicated account management for letting agency clients'] },
        { heading: 'Why Letting Agents Choose WOW Gutters Ltd', content: 'Managing gutter maintenance across multiple rental properties is time-consuming. WOW Gutters Ltd simplifies the process for letting agents.', bullets: ['Reduces administrative burden on agency management teams', 'Ensures consistent maintenance across all managed properties', 'Provides documented evidence for landlord communication', 'Demonstrates professional property management to landlords', 'Prevents tenant complaints with proactive gutter care', 'Competitive rates for portfolio contracts'] },
      ],
      faqs: [
        { question: 'Can you invoice the letting agency directly?', answer: 'Yes — we invoice letting agents directly for work across their managed portfolio, saving time on individual billing.' },
        { question: 'Do you provide reports for landlords?', answer: 'Yes — every gutter clean includes before and after photos and a written summary suitable for landlord reports.' },
      ],
    };
  }

  if (slug === 'managed-property-gutter-cleaning') {
    return {
      heroTitle: 'Managed Property Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for managed properties across Birmingham and the West Midlands. WOW Gutters Ltd services properties under management for landlords, agents, and block managers. Call 07421 433910.',
      sections: [
        { heading: 'Managed Property Gutter Cleaning Services', content: 'Managed properties need consistent, documented gutter maintenance. WOW Gutters Ltd provides professional gutter cleaning for managed properties — from individual rental homes to large apartment blocks — with full reporting for property managers.', bullets: ['Professional gutter cleaning for all managed property types', 'Full photographic evidence for property management records', 'Scheduled maintenance programmes for portfolio properties', 'Downpipe testing and condition reporting on every visit', 'Single-invoice billing for portfolio work', 'Dedicated account management for property managers'] },
        { heading: 'Types of Managed Properties We Serve', content: 'We work with property managers across the full range of managed property types in Birmingham and the West Midlands.', bullets: ['Individual rental properties managed by agencies', 'Apartment blocks under block management', 'HMO properties licensed and managed by professionals', 'Commercial properties in managed portfolios', 'Mixed-use developments with retail and residential', 'Free site survey for all managed property types'] },
      ],
      faqs: [
        { question: 'Do you provide condition reports?', answer: 'Yes — every managed property clean includes a written condition report with before and after photographs.' },
        { question: 'Can you work to an agent\'s schedule?', answer: 'Yes — we coordinate with property managers to schedule work around tenancy cycles, inspections, and compliance deadlines.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-services') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Services',
      heroDescription: 'Comprehensive commercial gutter cleaning services across Birmingham and the West Midlands. WOW Gutters Ltd provides gutter clearance, maintenance, and inspection for all business properties. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Services', content: 'WOW Gutters Ltd offers a complete range of commercial gutter cleaning services across Birmingham and the West Midlands. From one-off clearances to planned maintenance programmes, our industrial-grade equipment and experienced team handle commercial properties of all sizes.', bullets: ['One-off commercial gutter clearance for urgent requirements', 'Planned maintenance programmes for regular servicing', 'Emergency callout service for storm damage and blockages', 'Downpipe clearance and flow testing on every visit', 'Gutter inspection and condition reporting', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Additional Commercial Services', content: 'Beyond gutter cleaning, we offer complementary services that many commercial properties need as part of their roofline maintenance programme.', bullets: ['Commercial roof cleaning — moss removal and biocide treatment', 'Commercial fascia and soffit cleaning', 'Gutter repair and minor maintenance work', 'Free gutter inspection and quote service', 'Compliance documentation for health and safety records', 'Dedicated account management for contract customers'] },
      ],
      faqs: [
        { question: 'What areas do you cover for commercial gutter cleaning?', answer: 'We cover Birmingham, Wolverhampton, Coventry, Solihull, Walsall, Dudley, Sandwell, and all surrounding West Midlands areas.' },
        { question: 'Do you offer free commercial gutter cleaning quotes?', answer: 'Yes — we provide free site surveys and fixed-price quotes for all commercial gutter cleaning work.' },
      ],
    };
  }

  if (slug === 'commercial-property-gutter-maintenance') {
    return {
      heroTitle: 'Commercial Property Gutter Maintenance',
      heroDescription: 'Professional gutter maintenance for commercial properties across Birmingham and the West Midlands. WOW Gutters Ltd offers planned programmes for offices, retail, and industrial premises. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Property Gutter Maintenance', content: 'Commercial properties need gutter maintenance that protects the building, meets compliance requirements, and fits around business operations. WOW Gutters Ltd provides planned gutter maintenance for commercial properties with flexible scheduling and professional documentation.', bullets: ['Planned maintenance programmes for all commercial property types', 'Scheduled visits timed to seasonal requirements', 'Full cleaning, inspection, and condition reporting', 'Downpipe testing and flow confirmation on every visit', 'Photographic records for compliance and property files', 'Flexible scheduling — out-of-hours and weekend slots available'] },
        { heading: 'Why Commercial Properties Need Planned Maintenance', content: 'Reactive gutter maintenance for commercial properties costs more and leads to more damage. Planned maintenance protects the building, reduces costs, and provides documented compliance.', bullets: ['Prevents costly emergency repairs with proactive maintenance', 'Extends the life of commercial gutter systems', 'Provides documented evidence for health and safety compliance', 'Reduces insurance risks from water damage claims', 'Protects stock, equipment, and business operations', 'Fixed annual pricing with no surprise charges'] },
      ],
      faqs: [
        { question: 'How often should commercial gutters be maintained?', answer: 'Most commercial properties benefit from maintenance at least twice a year — once before winter and once after spring. Properties near trees may need quarterly visits.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-facilities-managers') {
    return {
      heroTitle: 'Gutter Cleaning for Facilities Managers',
      heroDescription: 'Professional gutter cleaning for facilities managers across Birmingham and the West Midlands. WOW Gutters Ltd provides reliable maintenance, compliance documentation, and multi-site management. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Facilities Managers', content: 'Facilities managers need gutter maintenance that is reliable, documented, and coordinated with other building services. WOW Gutters Ltd provides professional gutter cleaning for FMs across Birmingham and the West Midlands, with flexible contracts and comprehensive reporting.', bullets: ['Reliable gutter maintenance for all facilities under management', 'Comprehensive documentation for compliance and audits', 'Multi-site coordination with a single point of contact', 'Flexible scheduling around building occupancy and events', 'Emergency response for urgent gutter issues', 'Dedicated account management for FM customers'] },
        { heading: 'How We Support Facilities Managers', content: 'We understand the pressure on facilities managers. Our gutter cleaning service is designed to make your job easier, not add to your workload.', bullets: ['Single point of contact for all sites and buildings', 'Digital documentation sent after every visit', 'Automated scheduling reminders for planned maintenance', 'Condition reports that identify issues before they escalate', 'Transparent pricing with no hidden charges', 'Free site survey for all properties under management'] },
      ],
      faqs: [
        { question: 'Can you integrate with our FM software?', answer: 'Yes — we can provide documentation in formats compatible with common facilities management systems.' },
        { question: 'Do you offer emergency callout for FMs?', answer: 'Yes — we provide priority emergency response for facilities managers with urgent gutter issues.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-portfolio-properties') {
    return {
      heroTitle: 'Gutter Cleaning Portfolio Properties',
      heroDescription: 'Professional gutter cleaning for property portfolios across Birmingham and the West Midlands. WOW Gutters Ltd offers coordinated maintenance, volume discounts, and single-invoice billing. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Portfolio Properties', content: 'Managing gutter maintenance across a property portfolio is challenging. WOW Gutters Ltd provides coordinated gutter cleaning for portfolio properties — from small landlord portfolios to large institutional holdings.', bullets: ['Coordinated gutter cleaning across the entire property portfolio', 'Volume discounts for portfolio-scale contracts', 'Single monthly invoice for all properties', 'Automated scheduling to ensure no property is missed', 'Comprehensive photographic documentation for every visit', 'Dedicated portfolio account management'] },
        { heading: 'Portfolio Types We Serve', content: 'We work with all types of property portfolio across Birmingham and the West Midlands, providing consistent gutter maintenance at scale.', bullets: ['Private landlord portfolios — from 5 to 500+ properties', 'Corporate landlord and institutional property holdings', 'Housing association and social housing portfolios', 'Mixed commercial and residential property portfolios', 'Managed estates with diverse property types', 'Free portfolio-wide survey and quotation'] },
      ],
      faqs: [
        { question: 'What discounts do you offer for portfolios?', answer: 'We offer volume-based discounts for portfolio gutter cleaning contracts. Contact us for a tailored portfolio quotation.' },
        { question: 'Can you manage scheduling across a large portfolio?', answer: 'Yes — we coordinate scheduling across portfolios of any size, working around tenancy cycles, occupancy, and access requirements.' },
      ],
    };
  }

  if (slug === 'gutter-vacuum-cleaning-commercial') {
    return {
      heroTitle: 'Gutter Vacuum Cleaning Commercial',
      heroDescription: 'Professional gutter vacuum cleaning for commercial properties across Birmingham and the West Midlands. WOW Gutters Ltd\'s industrial vacuum system cleans gutters safely from ground level. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Vacuum Cleaning', content: 'WOW Gutters Ltd uses industrial-grade vacuum systems for commercial gutter cleaning. Our ground-level vacuum technology cleans gutters on commercial buildings up to four storeys high — no ladders against walls, no scaffolding, and no cherry pickers needed for most properties.', bullets: ['Industrial vacuum system for commercial gutter cleaning', 'Ground-level operation — no ladders or scaffolding needed', 'Reaches gutters on buildings up to four storeys high', 'Complete debris extraction — leaves, moss, silt, and compacted deposits', 'Downpipe testing from ground level after clearance', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Benefits of Vacuum Gutter Cleaning for Commercial Properties', content: 'Vacuum gutter cleaning offers significant advantages over traditional ladder-based methods for commercial properties.', bullets: ['No ladders against walls or fascias — eliminates property damage risk', 'Faster than manual cleaning on large commercial gutter runs', 'More thorough — vacuum extracts all debris, including compacted silt', 'Safer — no working at height for operatives', 'Professional appearance — no mess on car parks or yards', 'Ideal for multi-storey commercial buildings'] },
      ],
      faqs: [
        { question: 'How does commercial gutter vacuum cleaning work?', answer: 'Our industrial vacuum system uses long-reach poles with suction heads to extract debris from gutter channels while the operator remains on the ground.' },
        { question: 'Is vacuum cleaning as thorough as manual cleaning?', answer: 'Yes — vacuum cleaning is often more thorough because it can extract compacted debris that manual methods cannot reach, and it reaches all sections of the gutter run.' },
      ],
    };
  }

  if (slug === 'gutter-clearance-commercial-properties') {
    return {
      heroTitle: 'Gutter Clearance Commercial Properties',
      heroDescription: 'Professional gutter clearance for commercial properties across Birmingham and the West Midlands. WOW Gutters Ltd provides fast, thorough debris removal from all commercial gutter systems. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Clearance Services', content: 'Gutter clearance for commercial properties requires industrial-grade equipment and experienced operatives who understand the challenges of large roof areas. WOW Gutters Ltd provides professional gutter clearance for all types of commercial property.', bullets: ['Complete gutter clearance for commercial properties of all sizes', 'Industrial vacuum system for fast, thorough debris removal', 'Multi-downpipe testing and clearance on every commercial visit', 'Before and after photos as standard', 'Out-of-hours clearance available to minimise disruption', 'Fully insured with £10 million public liability cover'] },
        { heading: 'When Your Commercial Property Needs Gutter Clearance', content: 'Commercial gutters can block faster than residential ones due to larger roof areas capturing more debris. Knowing the signs of blockage helps you act before damage occurs.', bullets: ['After autumn leaf fall — before winter rains arrive', 'Following storms that have blown debris onto roofs', 'When gutters are visibly overflowing during rainfall', 'When downpipes are slow to drain or blocked', 'Before planned property inspections or audits', 'As part of a regular maintenance schedule'] },
      ],
      faqs: [
        { question: 'How quickly can you clear commercial gutters?', answer: 'We can usually schedule commercial gutter clearance within 24–48 hours. Same-day clearance is available for urgent situations.' },
        { question: 'What happens to the debris removed?', answer: 'All debris is collected into our vacuum system and removed from site. Nothing is left on your car park, yard, or landscape.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-quote-commercial') {
    return {
      heroTitle: 'Gutter Cleaning Quote Commercial',
      heroDescription: 'Free gutter cleaning quotes for commercial properties across Birmingham and the West Midlands. WOW Gutters Ltd provides fixed-price quotations with no hidden charges. Call 07421 433910.',
      sections: [
        { heading: 'Get a Commercial Gutter Cleaning Quote', content: 'Getting a fixed-price quote for commercial gutter cleaning is straightforward with WOW Gutters Ltd. We provide free site surveys and detailed quotations for all commercial gutter work across Birmingham and the West Midlands.', bullets: ['Free site survey for all commercial properties', 'Fixed-price quotation with no hidden charges', 'Detailed scope of work included with every quote', 'Flexible contract terms available for ongoing maintenance', 'Volume discounts for multi-property portfolios', 'No obligation — quotes are valid for 30 days'] },
        { heading: 'What Affects Commercial Gutter Cleaning Costs', content: 'Understanding the factors that influence commercial gutter cleaning costs helps you budget effectively.', bullets: ['Property size and total gutter length', 'Number of storeys and access complexity', 'Debris type and accumulation level', 'Frequency of cleaning (one-off vs planned maintenance)', 'Number of downpipes and outlets', 'Access restrictions and out-of-hours requirements'] },
      ],
      faqs: [
        { question: 'Do you charge for commercial gutter cleaning quotes?', answer: 'No — all commercial gutter cleaning quotes are completely free with no obligation.' },
        { question: 'How long is a quote valid for?', answer: 'Our commercial gutter cleaning quotes are valid for 30 days from the date of issue.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-property-developers') {
    return {
      heroTitle: 'Gutter Cleaning for Property Developers',
      heroDescription: 'Professional gutter cleaning for property developers across Birmingham and the West Midlands. WOW Gutters Ltd provides snagging clearance, pre-handover cleaning, and new build gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Property Developers', content: 'Property developers need reliable gutter cleaning at key stages of the development process — from snagging clearance before handover to maintenance during the defect period. WOW Gutters Ltd provides professional gutter services for developers across Birmingham and the West Midlands.', bullets: ['Pre-handover gutter clearance for new build properties', 'Snagging gutter cleaning before customer sign-off', 'Site clearance of debris from construction in gutters', 'Downpipe testing and flow confirmation on new systems', 'Photographic records for developer handover files', 'Volume pricing for developments with multiple units'] },
        { heading: 'Why Developers Choose WOW Gutters Ltd', content: 'Property developers trust WOW Gutters Ltd for reliable, documented gutter services that help ensure smooth handovers and satisfied buyers.', bullets: ['Coordinates easily with your site completion schedule', 'Reliable service that turns up when promised', 'Professional documentation for your handover packs', 'Competitive rates for development-scale work', 'All debris removed from site — clean handover', 'Free site survey for developments of any size'] },
      ],
      faqs: [
        { question: 'Can you work to a development timetable?', answer: 'Yes — we coordinate with your site schedule to complete gutter work at the right stage of the development process.' },
        { question: 'Do you offer snagging gutter cleaning?', answer: 'Yes — we provide gutter cleaning as part of the snagging process, ensuring new gutters are clear of construction debris before handover.' },
      ],
    };
  }

  if (slug === 'new-build-gutter-cleaning-snagging') {
    return {
      heroTitle: 'New Build Gutter Cleaning Snagging',
      heroDescription: 'Professional new build gutter cleaning and snagging services across Birmingham and the West Midlands. WOW Gutters Ltd clears construction debris from gutters on new developments. Call 07421 433910.',
      sections: [
        { heading: 'New Build Gutter Snagging Services', content: 'New build properties often have gutters filled with construction debris — cement dust, tile offcuts, mortar, and packaging. WOW Gutters Ltd provides new build gutter cleaning and snagging services that ensure every gutter is clear, every downpipe flows, and your development is ready for handover.', bullets: ['Full gutter clearance of construction debris from new builds', 'Downpipe testing and flow confirmation on every outlet', 'Identifies snagging issues — misaligned joints, loose brackets', 'Photographic records for snagging documentation', 'Pre-handover clearance for developer sign-off', 'Competitive pricing for phased developments'] },
        { heading: 'Why New Builds Need Gutter Snagging', content: 'Construction debris in gutters causes blockages that can damage a new property before the buyer even moves in. Professional snagging cleaning protects your reputation and ensures a quality handover.', bullets: ['Prevents water damage to new properties before handover', 'Ensures NHBC and warranty compliance for drainage', 'Identifies installation defects before they cause problems', 'Provides documented evidence of pre-handover checks', 'Protects developer reputation with quality handover', 'Suitable for houses, apartments, and mixed-use developments'] },
      ],
      faqs: [
        { question: 'When in the build process should gutter snagging happen?', answer: 'Gutter snagging should ideally happen after scaffolding is removed and before final handover to the buyer.' },
        { question: 'Do you report gutter installation defects?', answer: 'Yes — we document any installation issues found during cleaning, such as misaligned joints, poor falls, or loose brackets.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-cost') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Cost',
      heroDescription: 'Transparent commercial gutter cleaning costs across Birmingham and the West Midlands. WOW Gutters Ltd provides fixed-price quotes with no hidden charges. Call 07421 433910 for a free quotation.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Cost Guide', content: 'The cost of commercial gutter cleaning varies by property size, gutter length, access requirements, and debris accumulation. WOW Gutters Ltd provides fixed-price quotes with no hidden charges for all commercial gutter cleaning across Birmingham and the West Midlands.', bullets: ['Free site survey for accurate cost assessment', 'Fixed-price quotation with no hidden charges', 'Volume discounts for multi-property portfolios', 'Competitive rates for one-off and contract work', 'Transparent pricing — everything included in the quote', 'No charge for height or access with our ground-level system'] },
        { heading: 'Factors That Affect Commercial Gutter Cleaning Costs', content: 'Several factors influence the cost of commercial gutter cleaning. Understanding them helps you budget and compare quotes.', bullets: ['Total gutter length — larger properties cost more', 'Number of storeys — height affects equipment and time', 'Access complexity — restricted access may take longer', 'Debris type and volume — heavily blocked gutters cost more', 'Visit frequency — planned maintenance costs less per visit', 'Out-of-hours work — may carry additional charge'] },
      ],
      faqs: [
        { question: 'How much does commercial gutter cleaning cost?', answer: 'Costs vary widely by property. We provide free site surveys and fixed quotes tailored to your specific commercial property.' },
        { question: 'Does height affect the cost?', answer: 'Most commercial properties up to four storeys are cleaned with our ground-level vacuum system at no additional height charge.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-price-per-property') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Price per Property',
      heroDescription: 'Clear commercial gutter cleaning prices per property across Birmingham and the West Midlands. WOW Gutters Ltd provides fixed per-property pricing for portfolios and single sites. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Price per Property', content: 'For property portfolios and multi-site contracts, WOW Gutters Ltd offers per-property pricing that makes budgeting simple. Each property is assessed individually, and we provide a fixed per-property price within the portfolio contract.', bullets: ['Fixed per-property pricing for portfolio contracts', 'Individual property assessment for accurate pricing', 'Volume discounts reducing per-property cost', 'Single invoice for all properties under contract', 'Transparent pricing with no hidden per-property charges', 'Free portfolio-wide survey and quotation'] },
        { heading: 'Typical Commercial Pricing Factors', content: 'Per-property pricing takes into account the specific characteristics of each site within your portfolio.', bullets: ['Property type — office, retail, warehouse, or industrial', 'Gutter length and number of downpipes', 'Number of storeys and access requirements', 'Debris accumulation rate and tree cover', 'Visit frequency within the contract', 'Location and travel between portfolio sites'] },
      ],
      faqs: [
        { question: 'Can you give a per-property price for my portfolio?', answer: 'Yes — after a free portfolio-wide survey, we provide a detailed quotation with per-property pricing for each site.' },
        { question: 'Does the per-property price include everything?', answer: 'Yes — our per-property prices include full gutter clearance, downpipe testing, and photographic documentation.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-multiple-sites') {
    return {
      heroTitle: 'Gutter Cleaning for Multiple Sites',
      heroDescription: 'Professional gutter cleaning for multiple sites across Birmingham and the West Midlands. WOW Gutters Ltd provides coordinated maintenance for businesses and organisations with several locations. Call 07421 433910.',
      sections: [
        { heading: 'Multi-Site Gutter Cleaning Services', content: 'Managing gutter maintenance across multiple sites is a challenge for any business. WOW Gutters Ltd provides coordinated gutter cleaning for multi-site organisations with centralised billing, consistent service standards, and flexible scheduling.', bullets: ['Coordinated gutter cleaning across all your sites', 'Centralised billing — one invoice for all locations', 'Consistent service standards at every site', 'Flexible scheduling to match each site\'s operations', 'Comprehensive documentation for each location', 'Dedicated account management for multi-site contracts'] },
        { heading: 'Who Benefits from Multi-Site Gutter Cleaning', content: 'Our multi-site gutter cleaning service is designed for organisations that need consistent maintenance across multiple properties.', bullets: ['Retail chains with multiple store locations', 'Office groups with several business premises', 'Academy trusts with multiple school sites', 'Housing associations with dispersed properties', 'Healthcare providers with multiple facilities', 'Free multi-site survey and portfolio quotation'] },
      ],
      faqs: [
        { question: 'How do you manage scheduling across multiple sites?', answer: 'We coordinate with your central facilities team to schedule visits at times that suit each site, minimising disruption across the portfolio.' },
        { question: 'Do you offer centralised billing?', answer: 'Yes — we provide a single consolidated invoice for all sites under a multi-site contract, simplifying accounts processing.' },
      ],
    };
  }

  if (slug === 'approved-gutter-cleaning-contractor') {
    return {
      heroTitle: 'Approved Gutter Cleaning Contractor',
      heroDescription: 'An approved gutter cleaning contractor serving Birmingham and the West Midlands. WOW Gutters Ltd is fully insured, trusted, and recommended. Call 07421 433910.',
      sections: [
        { heading: 'Approved Gutter Cleaning Contractor', content: 'WOW Gutters Ltd operates as an approved gutter cleaning contractor across Birmingham and the West Midlands, trusted by commercial clients, letting agents, block managers, and homeowners for reliable, professional gutter maintenance.', bullets: ['Fully insured with £10 million public liability cover', 'Trusted by commercial clients and residential customers', 'Approved supplier for property management companies', 'Health and safety compliant with full documentation', 'Before and after photos on every job', 'Free quotes with fixed pricing — no hidden charges'] },
        { heading: 'Why Choose WOW Gutters Ltd as Your Approved Contractor?', content: 'When you need a gutter cleaning contractor you can trust, WOW Gutters Ltd delivers consistent quality, professional documentation, and reliable service.', bullets: ['Established local business serving Birmingham and the West Midlands', 'Professional approach with full compliance documentation', 'Reliable service — we turn up when promised', 'Quality work with photographic evidence of completion', 'Competitive pricing with transparent quotations', 'Flexible contract terms to suit your requirements'] },
      ],
      faqs: [
        { question: 'Are you insured for commercial gutter cleaning?', answer: 'Yes — WOW Gutters Ltd carries £10 million public liability insurance for all commercial and residential gutter cleaning work.' },
        { question: 'Do you provide references?', answer: 'Yes — we can provide references from existing contract customers across Birmingham and the West Midlands.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-framework-contractor') {
    return {
      heroTitle: 'Gutter Cleaning Framework Contractor',
      heroDescription: 'A framework contractor for gutter cleaning across Birmingham and the West Midlands. WOW Gutters Ltd delivers reliable maintenance on framework agreements for public and private sector clients. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Framework Contractor', content: 'WOW Gutters Ltd works as a framework contractor for gutter cleaning services across Birmingham and the West Midlands. We deliver consistent, documented gutter maintenance under framework agreements for housing associations, local authorities, property management companies, and commercial landlords.', bullets: ['Framework-compliant gutter cleaning delivery', 'Fixed pricing within agreed framework rates', 'Comprehensive documentation for framework reporting', 'Health and safety documentation including RAMS', 'Quality assurance with photographic evidence', 'Dedicated contract management for framework clients'] },
        { heading: 'Framework Contract Services', content: 'Our framework contractor service is designed to meet the rigorous requirements of public and private sector framework agreements.', bullets: ['Scheduled gutter maintenance within agreed service levels', 'Reactive call-out service for urgent issues', 'Downpipe testing and clearance on every visit', 'Condition reporting for estate management records', 'Quarterly and annual performance reporting', 'Free site survey for framework consideration'] },
      ],
      faqs: [
        { question: 'Do you have experience with framework agreements?', answer: 'Yes — WOW Gutters Ltd has experience delivering gutter maintenance under framework agreements for various sectors.' },
        { question: 'What documentation do you provide under framework contracts?', answer: 'We provide insurance certificates, health and safety documentation, RAMS, photographic evidence, and regular performance reports.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-insurance-compliance') {
    return {
      heroTitle: 'Gutter Cleaning Insurance Compliance',
      heroDescription: 'Gutter cleaning insurance compliance for landlords and commercial property owners across Birmingham and the West Midlands. WOW Gutters Ltd provides documented maintenance for insurance requirements. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning and Insurance Compliance', content: 'Insurance policies often require regular gutter maintenance as a condition of cover. Failure to maintain gutters can invalidate claims for water damage. WOW Gutters Ltd provides documented gutter cleaning that demonstrates compliance with insurance requirements.', bullets: ['Documented gutter maintenance for insurance compliance', 'Before and after photos on every visit as evidence', 'Written condition reports suitable for insurance files', 'Scheduled maintenance to meet policy conditions', 'Professional service reduces your insurance risk', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Insurance Compliance Matters', content: 'Insurance claims for water damage are increasingly scrutinised. Having documented evidence of regular gutter maintenance can be the difference between a successful claim and a rejected one.', bullets: ['Many insurance policies require regular gutter maintenance', 'Documented evidence protects your insurance position', 'Proactive maintenance prevents claims from arising', 'Reduces the risk of claim rejection on maintenance grounds', 'Protects your no-claims discount', 'Free consultation on your gutter maintenance needs'] },
      ],
      faqs: [
        { question: 'Does my insurance require gutter cleaning?', answer: 'Many insurance policies require regular gutter maintenance. Check your policy wording or speak to your insurer. We can provide documentation to support your compliance.' },
        { question: 'What evidence do you provide for insurance records?', answer: 'Every visit includes before and after photographs and a written summary of work completed, suitable for insurance compliance records.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-duty-of-care-landlord') {
    return {
      heroTitle: 'Gutter Cleaning Duty of Care Landlord',
      heroDescription: 'Professional gutter cleaning for landlords fulfilling their duty of care across Birmingham and the West Midlands. WOW Gutters Ltd provides documented maintenance for legal compliance. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning — Landlord Duty of Care', content: 'Landlords have a legal duty of care to maintain their properties in good repair, including gutter systems. WOW Gutters Ltd provides professional gutter cleaning for landlords with full photographic evidence to demonstrate compliance with repairing obligations.', bullets: ['Professional gutter cleaning for all types of rental property', 'Photographic evidence of completed maintenance', 'Downpipe testing and flow confirmation on every visit', 'Written condition reports suitable for compliance records', 'Discounted rates for multi-property landlord portfolios', 'Free quotes with fixed pricing — no hidden charges'] },
        { heading: 'Understanding Landlord Gutter Maintenance Obligations', content: 'Under Section 11 of the Landlord and Tenant Act 1985, landlords are responsible for keeping the structure and exterior of the property in repair — including gutters and downpipes.', bullets: ['Section 11 requires landlords to maintain gutters and drainage', 'Documented evidence protects against tenant disputes', 'Regular maintenance prevents costly emergency repairs', 'Protects property value with consistent roofline care', 'Demonstrates professional property management', 'Free consultation on your legal maintenance obligations'] },
      ],
      faqs: [
        { question: 'Are landlords legally responsible for gutter cleaning?', answer: 'Yes — under Section 11 of the Landlord and Tenant Act 1985, landlords are responsible for maintaining the structure and exterior of the property, including gutters and downpipes.' },
        { question: 'Do you provide evidence for legal compliance?', answer: 'Yes — every landlord gutter clean includes before and after photographs and a written summary to demonstrate compliance.' },
      ],
    };
  }

  if (slug === 'section-11-gutter-cleaning-obligations') {
    return {
      heroTitle: 'Section 11 Gutter Cleaning Obligations',
      heroDescription: 'Understanding Section 11 gutter cleaning obligations for landlords across Birmingham and the West Midlands. WOW Gutters Ltd provides documented maintenance for legal compliance. Call 07421 433910.',
      sections: [
        { heading: 'Section 11 Landlord and Tenant Act 1985', content: 'Section 11 of the Landlord and Tenant Act 1985 requires landlords to keep the structure and exterior of the property in repair, including gutters, downpipes, and drainage systems. WOW Gutters Ltd helps landlords meet these obligations with professional, documented gutter maintenance.', bullets: ['Landlord duty of care under Section 11 includes gutter maintenance', 'Professional gutter cleaning for all rental property types', 'Photographic evidence demonstrating legal compliance', 'Downpipe testing and flow confirmation on every visit', 'Written condition reports for tenant and legal records', 'Discounted rates for portfolio landlords'] },
        { heading: 'Meeting Your Section 11 Gutter Obligations', content: 'Fulfilling your Section 11 obligations requires more than just cleaning gutters — it requires documented evidence that maintenance has been carried out properly and regularly.', bullets: ['Regular gutter maintenance scheduled to prevent problems', 'Professional cleaning that meets the required standard of repair', 'Photographic evidence of work completed', 'Condition reporting that identifies issues before they become repairs', 'Documented maintenance history for legal protection', 'Free consultation on your Section 11 gutter obligations'] },
      ],
      faqs: [
        { question: 'What does Section 11 say about gutters?', answer: 'Section 11 requires landlords to keep the structure and exterior in repair, which includes gutters and downpipes. Failure to do so can result in tenant claims and legal action.' },
        { question: 'How do you document gutter work for Section 11 compliance?', answer: 'Every gutter clean includes before and after photographs and a written condition summary, providing clear evidence of completed maintenance.' },
      ],
    };
  }

  if (slug === 'how-often-should-commercial-gutters-be-cleaned') {
    return {
      heroTitle: 'How Often Should Commercial Gutters Be Cleaned?',
      heroDescription: 'How often should commercial gutters be cleaned? WOW Gutters Ltd recommends commercial gutter cleaning at least twice per year for most properties. Free site survey and advice. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Frequency Guide', content: 'The recommended frequency for commercial gutter cleaning depends on several factors including roof area, nearby trees, property location, and the time of year. Most commercial properties in Birmingham and the West Midlands benefit from gutter cleaning at least twice a year.', bullets: ['Most commercial properties: 2 visits per year (spring & autumn)', 'Properties near mature trees: 3–4 visits per year', 'Warehouses in exposed locations: 2–3 visits per year', 'Retail units with minimal tree cover: 1–2 visits per year', 'Schools with playing fields: 2–3 visits per year', 'Free site survey to determine your optimal cleaning schedule'] },
        { heading: 'Factors Affecting Commercial Gutter Cleaning Frequency', content: 'Several factors determine how often a commercial property needs gutter cleaning. Understanding these helps you plan your maintenance schedule effectively.', bullets: ['Tree cover — nearby trees drop leaves, seeds, and debris into gutters', 'Roof size — larger roofs collect more debris and need more frequent cleaning', 'Roof pitch — flat roofs can accumulate more debris than pitched roofs', 'Location — properties near parks, woodland, or canalsides need more frequent cleaning', 'Weather patterns — autumn leaf fall and spring blossom are peak debris seasons', 'Previous blockage history — properties that have blocked before need closer monitoring'] },
      ],
      faqs: [
        { question: 'How often should commercial gutters be cleaned?', answer: 'Most commercial properties benefit from gutter cleaning at least twice a year — once in spring and once in autumn. Properties near trees may need quarterly cleaning.' },
        { question: 'What happens if commercial gutters are not cleaned regularly?', answer: 'Neglected gutters on commercial properties cause water damage to buildings, stock, and equipment. Regular cleaning is far cheaper than emergency repairs.' },
      ],
    };
  }

  if (slug === 'how-much-does-commercial-gutter-cleaning-cost-uk') {
    return {
      heroTitle: 'How Much Does Commercial Gutter Cleaning Cost UK?',
      heroDescription: 'How much does commercial gutter cleaning cost in the UK? WOW Gutters Ltd offers competitive rates with free site surveys. Typical costs vary by property size. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning UK Cost Guide', content: 'The cost of commercial gutter cleaning in the UK varies based on property size, gutter length, access requirements, and debris accumulation. WOW Gutters Ltd provides free site surveys and fixed-price quotes for all commercial gutter cleaning across Birmingham and the West Midlands.', bullets: ['Small office/retail unit: typically £150–£350', 'Medium warehouse/industrial unit: typically £300–£600', 'Large distribution centre: typically £500–£1,000+', 'Multi-storey office block: typically £400–£800', 'School or public building: typically £250–£600', 'Free site survey for accurate fixed-price quotation'] },
        { heading: 'What Affects the Cost of Commercial Gutter Cleaning', content: 'Understanding the factors that influence commercial gutter cleaning costs helps you budget effectively and compare quotes.', bullets: ['Total gutter length — the primary cost driver for most properties', 'Number of storeys — height affects equipment and time required', 'Access complexity — restricted access may need specialist equipment', 'Debris type and volume — heavily blocked gutters take longer to clear', 'Visit frequency — planned maintenance costs less per visit than one-off cleans', 'Location — travel distance from our base in Birmingham'] },
      ],
      faqs: [
        { question: 'How much does commercial gutter cleaning cost in the UK?', answer: 'Costs vary widely by property. Most commercial gutter cleaning jobs in the West Midlands range from £150 to £1,000+. We provide free site surveys for accurate quotes.' },
        { question: 'Do you charge for commercial gutter cleaning quotes?', answer: 'No — all commercial gutter cleaning quotes from WOW Gutters Ltd are completely free with no obligation.' },
      ],
    };
  }

  if (slug === 'what-happens-if-gutters-arent-cleaned-on-commercial-property') {
    return {
      heroTitle: 'What Happens If Gutters Aren\'t Cleaned on Commercial Property?',
      heroDescription: 'What happens if gutters are not cleaned on commercial property? Water damage, structural issues, insurance claims, and business disruption. WOW Gutters Ltd explains the risks. Call 07421 433910.',
      sections: [
        { heading: 'Consequences of Not Cleaning Commercial Gutters', content: 'Neglecting gutter cleaning on commercial properties can have serious consequences — from water damage to insurance problems. Understanding these risks helps property owners and facilities managers prioritise regular maintenance.', bullets: ['Water ingress through walls, ceilings, and window frames', 'Structural damage to roof timbers and wall fabric', 'Damage to stock, equipment, and business assets', 'Slip hazards from overflowing water near entrances', 'Insurance claims rejected due to lack of maintenance', 'Expensive emergency callouts for blocked drainage'] },
        { heading: 'Long-Term Damage from Neglected Commercial Gutters', content: 'The longer gutters are left uncleaned on commercial property, the more expensive the problems become. What starts as a simple blockage can lead to major structural repairs.', bullets: ['Rotted fascia boards and soffits requiring replacement', 'Damp and mould in interior walls affecting health compliance', 'Foundation damage from water pooling at ground level', 'Pest infestations in stagnant water and debris-filled gutters', 'Reduced roof life from trapped moisture against tiles', 'Cost of repairs can be 10–20 times the cost of regular cleaning'] },
      ],
      faqs: [
        { question: 'Can insurance claims be rejected if gutters were not cleaned?', answer: 'Yes — many insurance policies require regular gutter maintenance. Claims for water damage can be reduced or rejected if the insurer determines lack of maintenance contributed to the damage.' },
        { question: 'What is the cost of not cleaning commercial gutters?', answer: 'The cost of repairing water damage from neglected gutters can be 10–20 times the cost of regular professional gutter cleaning.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-near-me') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Near Me',
      heroDescription: 'Commercial gutter cleaning near me — WOW Gutters Ltd provides professional gutter cleaning for commercial properties across Birmingham and the West Midlands. Local, reliable, and fully insured. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Near You', content: 'If you are looking for commercial gutter cleaning near you in Birmingham or the West Midlands, WOW Gutters Ltd is your local professional team. We serve offices, warehouses, schools, retail units, and industrial properties across the region with fast response times and competitive rates.', bullets: ['Local commercial gutter cleaning across Birmingham and the West Midlands', 'Fast response — typically within 24–48 hours for quotes and bookings', 'Free site survey included with every commercial quote', 'Fully insured with £10 million public liability cover', 'Before and after photos on every job', 'Competitive rates with no hidden charges'] },
        { heading: 'Areas We Cover for Commercial Gutter Cleaning', content: 'We provide commercial gutter cleaning across the entire West Midlands region, with local teams who know the area.', bullets: ['Birmingham — all postcodes from city centre to outer suburbs', 'Solihull, Sutton Coldfield, and the wider Birmingham area', 'Wolverhampton, Walsall, Dudley, and Sandwell', 'West Bromwich, Oldbury, and the Black Country', 'Coventry, Nuneaton, and eastern Warwickshire', 'Free site survey for commercial properties in all these areas'] },
      ],
      faqs: [
        { question: 'Are you a local commercial gutter cleaning company?', answer: 'Yes — WOW Gutters Ltd is based in Birmingham and serves commercial properties across the entire West Midlands region.' },
        { question: 'How quickly can you provide a commercial gutter cleaning quote?', answer: 'We typically respond within 24 hours and can arrange a site survey within 48 hours for most commercial properties.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-schools-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning for Schools Birmingham',
      heroDescription: 'Professional gutter cleaning for schools in Birmingham. WOW Gutters Ltd provides scheduled maintenance for primary schools, secondary schools, academies, and MATs. Call 07421 433910.',
      sections: [
        { heading: 'School Gutter Cleaning in Birmingham', content: 'Birmingham schools need reliable gutter maintenance that fits around the school timetable. WOW Gutters Ltd provides professional gutter cleaning for schools across Birmingham, scheduling work during school holidays and after hours to avoid disruption to pupils and staff.', bullets: ['Full gutter clearance for Birmingham school buildings of all sizes', 'Holiday scheduling — summer, Easter, and half-term availability', 'Downpipe testing and flow check on all outlets', 'Before and after photos for MAT compliance records', 'Planned maintenance contracts for single schools and academy trusts', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Birmingham Schools We Serve', content: 'We clean gutters on schools across all Birmingham wards and postcodes, from inner-city primary schools to large suburban secondary academies.', bullets: ['Primary schools — all Birmingham local authority and academy primaries', 'Secondary schools — comprehensive, academy, and free schools', 'Special schools and SEN provision buildings', 'Sixth form colleges and further education campuses', 'Nursery schools and early years settings', 'Free site survey for Birmingham schools of all types'] },
      ],
      faqs: [
        { question: 'Do you work during Birmingham school holidays?', answer: 'Yes — we specialise in scheduling school gutter cleaning during summer, Easter, and half-term holidays when buildings are empty.' },
        { question: 'Do you offer contracts for Birmingham academy trusts?', answer: 'Yes — we offer planned maintenance programmes for MATs and school groups across Birmingham, with coordinated scheduling across multiple sites.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-offices-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning for Offices Birmingham',
      heroDescription: 'Professional gutter cleaning for offices in Birmingham. WOW Gutters Ltd services all types of office premises across the city with minimal disruption to your business. Call 07421 433910.',
      sections: [
        { heading: 'Office Gutter Cleaning in Birmingham', content: 'Birmingham\'s office buildings — from the business district around Colmore Row to suburban office parks — need reliable gutter maintenance. WOW Gutters Ltd provides professional office gutter cleaning across all Birmingham postcodes, working around your business hours.', bullets: ['Full gutter clearance for all Birmingham office types', 'City centre offices — Colmore Row, Brindleyplace, Jewellery Quarter', 'Business parks — Birmingham Business Park, Blythe Valley Park', 'Out-of-hours appointments to minimise business disruption', 'Before and after photos for facilities records', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Why Birmingham Offices Need Regular Gutter Cleaning', content: 'Birmingham\'s weather, combined with the city\'s tree-lined streets and canalside locations, means office gutters fill quickly with debris. Regular cleaning protects your premises and prevents expensive water damage.', bullets: ['Prevents water damage to office interiors and business equipment', 'Protects IT infrastructure and business-critical equipment', 'Maintains professional appearance for clients in Birmingham', 'Meets health and safety compliance for commercial premises', 'Planned maintenance contracts for managed office buildings', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: 'Do you cover all Birmingham postcodes for office gutter cleaning?', answer: 'Yes — we cover all Birmingham postcodes including B1–B48 for office gutter cleaning.' },
        { question: 'Can you work outside office hours?', answer: 'Yes — we schedule office gutter cleaning before or after business hours, at weekends, or during your chosen downtime.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-company-for-landlords-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning Company for Landlords Birmingham',
      heroDescription: 'A gutter cleaning company for landlords in Birmingham. WOW Gutters Ltd helps Birmingham landlords meet maintenance obligations with documented evidence. Portfolio discounts. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Birmingham Landlords', content: 'Finding a reliable gutter cleaning company for landlords in Birmingham is essential for meeting your legal obligations. WOW Gutters Ltd provides professional gutter cleaning for Birmingham landlords with full photographic evidence for compliance.', bullets: ['Professional gutter cleaning for all Birmingham rental properties', 'Photographic before and after evidence for compliance records', 'Discounted rates for Birmingham landlord portfolios', 'Downpipe testing and flow check on every visit', 'Written condition summary after every clean', 'Free quotes with fixed pricing — no hidden charges'] },
        { heading: 'Why Birmingham Landlords Choose WOW Gutters Ltd', content: 'Birmingham landlords trust WOW Gutters Ltd for reliable, documented gutter maintenance that protects property value and meets legal obligations under Section 11.', bullets: ['Local Birmingham company with knowledge of the local property market', 'Documented evidence protects you in tenant disputes', 'Flexible scheduling between tenancies across Birmingham', 'Portfolio discounts for multiple Birmingham properties', 'Professional reports suitable for landlord compliance files', 'Free portfolio survey for Birmingham landlord portfolios'] },
      ],
      faqs: [
        { question: 'Do you cover all Birmingham areas for landlord gutter cleaning?', answer: 'Yes — we cover all Birmingham postcodes for landlord gutter cleaning, from the city centre to the suburbs.' },
        { question: 'What evidence do you provide for Birmingham landlords?', answer: 'Every clean includes before and after photographs and a written summary, providing clear evidence of completed maintenance.' },
      ],
    };
  }

  if (slug === 'best-commercial-gutter-cleaning-company-west-midlands') {
    return {
      heroTitle: 'Best Commercial Gutter Cleaning Company West Midlands',
      heroDescription: 'The best commercial gutter cleaning company in the West Midlands. WOW Gutters Ltd is trusted, fully insured, and recommended. Professional gutter cleaning for all business properties. Call 07421 433910.',
      sections: [
        { heading: 'The Best Commercial Gutter Cleaning in the West Midlands', content: 'When you are looking for the best commercial gutter cleaning company in the West Midlands, WOW Gutters Ltd delivers the reliability, professionalism, and quality that businesses need. We serve offices, warehouses, schools, and industrial premises across the region.', bullets: ['Trusted by businesses across the entire West Midlands', 'Fully insured with £10 million public liability cover', 'Industrial-grade equipment for large commercial properties', 'Before and after photos on every commercial job', 'Planned maintenance contracts for all business types', 'Free site survey and fixed price quotation'] },
        { heading: 'Why We Are the Best Commercial Gutter Cleaning Choice', content: 'Businesses across the West Midlands choose WOW Gutters Ltd for gutter maintenance because we deliver consistent quality, professional documentation, and reliable service.', bullets: ['Established local business with commercial expertise', 'Professional approach with full compliance documentation', 'Reliable service — we turn up when promised', 'Quality work with photographic evidence of completion', 'Competitive pricing with transparent quotations', 'References available from existing commercial customers'] },
      ],
      faqs: [
        { question: 'What makes WOW Gutters the best commercial gutter cleaning company?', answer: 'We combine local knowledge, professional equipment, full insurance, documented work, and competitive pricing to deliver the best commercial gutter cleaning in the West Midlands.' },
        { question: 'What areas of the West Midlands do you cover?', answer: 'We cover Birmingham, Coventry, Wolverhampton, Dudley, Walsall, Sandwell, Solihull, and all surrounding West Midlands areas.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contractor-for-property-management-company') {
    return {
      heroTitle: 'Gutter Cleaning Contractor for Property Management Company',
      heroDescription: 'A reliable gutter cleaning contractor for property management companies across Birmingham and the West Midlands. WOW Gutters Ltd provides portfolio maintenance, compliance docs, and single-invoice billing. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Property Management Companies', content: 'Property management companies need a gutter cleaning contractor they can trust to maintain properties to a consistent standard. WOW Gutters Ltd provides professional gutter cleaning for property managers, with portfolio-wide coordination, comprehensive documentation, and simplified billing.', bullets: ['Planned gutter maintenance across your entire managed portfolio', 'Consistent service standards at every property', 'Comprehensive photographic documentation for client reporting', 'Single-invoice billing for all properties under management', 'Dedicated account management for property management clients', 'Priority scheduling for contract customers'] },
        { heading: 'Why Property Management Companies Choose Us', content: 'Managing gutter maintenance across multiple properties is challenging. WOW Gutters Ltd makes it simple for property management companies.', bullets: ['Reduces administrative burden on your management team', 'Ensures consistent maintenance standards across all properties', 'Provides documented evidence for landlord and client reports', 'Prevents emergency callout costs with proactive maintenance', 'Flexible scheduling to match tenancy cycles', 'Competitive rates for portfolio contracts'] },
      ],
      faqs: [
        { question: 'Do you offer portfolio discounts for property management companies?', answer: 'Yes — we offer discounted rates for property management contracts covering multiple properties, with single-invoice billing.' },
        { question: 'What documentation do you provide for property managers?', answer: 'Every visit includes before and after photographs, a written condition summary, and an annual compliance report for client files.' },
      ],
    };
  }

  if (slug === 'who-is-responsible-for-gutter-cleaning-commercial-tenancy') {
    return {
      heroTitle: 'Who Is Responsible for Gutter Cleaning in a Commercial Tenancy?',
      heroDescription: 'Who is responsible for gutter cleaning in a commercial tenancy? WOW Gutters Ltd explains landlord vs tenant responsibilities for commercial property gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Tenancy Gutter Cleaning Responsibility', content: 'Responsibility for gutter cleaning in a commercial tenancy depends on the terms of the lease agreement. Generally, the landlord is responsible for structural maintenance including the roof and gutters, but some leases transfer this responsibility to the tenant, particularly for full repairing and insuring (FRI) leases.', bullets: ['Check your commercial lease for specific repairing obligations', 'FRI leases typically make the tenant responsible for all maintenance', 'Internal repairing leases usually leave structure to the landlord', 'Multi-let buildings often have landlord-managed common rooflines', 'Clear communication between landlord and tenant prevents disputes', 'WOW Gutters Ltd can provide gutter maintenance for either party'] },
        { heading: 'Typical Arrangements for Different Lease Types', content: 'Different commercial lease types place gutter maintenance responsibility with different parties. Understanding your lease helps avoid disputes.', bullets: ['Full Repairing and Insuring (FRI) leases — tenant is usually responsible', 'Internal repairing leases — landlord is usually responsible for structure', 'Tenant-only repairing leases — tenant responsible for interior only', 'Multi-let properties — landlord often manages common roofline maintenance', 'Service charge properties — gutter cleaning may be included in service charge', 'Free advice on your gutter maintenance responsibilities'] },
      ],
      faqs: [
        { question: 'Who pays for commercial gutter cleaning under an FRI lease?', answer: 'Under a Full Repairing and Insuring lease, the tenant is typically responsible for gutter cleaning and maintenance.' },
        { question: 'My commercial lease is unclear about gutters — what should I do?', answer: 'If your commercial lease is unclear about gutter cleaning responsibility, we recommend checking with your solicitor or property manager. WOW Gutters Ltd can provide gutter maintenance for either the landlord or tenant.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-risk-assessment-method-statement-rams') {
    return {
      heroTitle: 'Gutter Cleaning Risk Assessment Method Statement (RAMS)',
      heroDescription: 'Professional gutter cleaning with full risk assessment and method statements (RAMS). WOW Gutters Ltd provides health and safety documentation for all commercial gutter work. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning RAMS — Risk Assessment and Method Statement', content: 'WOW Gutters Ltd provides full risk assessments and method statements (RAMS) for all commercial gutter cleaning work. Our RAMS documentation covers all aspects of the gutter cleaning operation, from site access to waste removal, ensuring compliance with health and safety regulations.', bullets: ['Comprehensive risk assessment for every commercial gutter cleaning site', 'Detailed method statement outlining the safe system of work', 'Health and safety documentation compliant with CDM regulations', 'Site-specific RAMS for complex commercial properties', 'COSHH assessments for any cleaning products used', 'Fully insured with £10 million public liability cover'] },
        { heading: 'What Our RAMS Cover', content: 'Our gutter cleaning RAMS documentation covers all operational aspects to ensure safe, compliant working on every commercial site.', bullets: ['Site access and egress risk assessment', 'Work at height hierarchy and controls', 'Ground-level vacuum system operation safety', 'Public and employee safety during cleaning operations', 'Waste management and disposal procedures', 'Emergency procedures and first aid arrangements'] },
      ],
      faqs: [
        { question: 'Do you provide RAMS for commercial gutter cleaning?', answer: 'Yes — WOW Gutters Ltd provides full risk assessments and method statements for all commercial gutter cleaning work.' },
        { question: 'Are your RAMS site-specific?', answer: 'Yes — for complex commercial properties, we provide site-specific RAMS that address the particular hazards of your building.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-without-scaffolding-commercial') {
    return {
      heroTitle: 'Gutter Cleaning Without Scaffolding Commercial',
      heroDescription: 'Commercial gutter cleaning without scaffolding. WOW Gutters Ltd\'s ground-level vacuum system cleans gutters on commercial buildings without the cost and disruption of scaffolding. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Without Scaffolding', content: 'WOW Gutters Ltd\'s commercial gutter cleaning service uses ground-level vacuum technology that eliminates the need for scaffolding on most commercial buildings. Our system reaches gutters up to four storeys high from ground level, saving the significant cost and disruption of scaffolding erection.', bullets: ['No scaffolding required for commercial buildings up to four storeys', 'Ground-level vacuum system — safe and efficient operation', 'Significant cost savings compared to scaffolding-based methods', 'No disruption to your business operations', 'Faster completion of commercial gutter cleaning projects', 'Ideal for offices, warehouses, and retail units'] },
        { heading: 'Benefits of Scaffolding-Free Gutter Cleaning', content: 'Eliminating scaffolding from commercial gutter cleaning delivers multiple benefits for property owners and facilities managers.', bullets: ['Cost savings — scaffolding can double or triple the cost of gutter cleaning', 'Time savings — scaffolding takes days to erect and dismantle', 'No disruption to car parks, yards, or pedestrian access', 'Safe for listed and heritage commercial buildings', 'Our system reaches all standard commercial gutter heights', 'Free site survey to confirm scaffolding-free access'] },
      ],
      faqs: [
        { question: 'Can you clean commercial gutters without scaffolding?', answer: 'Yes — for the vast majority of commercial buildings up to four storeys, our ground-level vacuum system cleans gutters without any scaffolding.' },
        { question: 'When is scaffolding needed for commercial gutter cleaning?', answer: 'Scaffolding may be needed for commercial buildings over four storeys, buildings with complex roof configurations, or where specific access restrictions apply.' },
      ],
    };
  }

  if (slug === 'gutter-vacuum-system-for-tall-buildings') {
    return {
      heroTitle: 'Gutter Vacuum System for Tall Buildings',
      heroDescription: 'A professional gutter vacuum system for tall buildings across Birmingham and the West Midlands. WOW Gutters Ltd cleans gutters on buildings up to four storeys from ground level. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Vacuum System for Tall Buildings', content: 'Tall buildings — from three-storey townhouses to four-storey apartment blocks and office buildings — present access challenges for traditional gutter cleaning. WOW Gutters Ltd uses a professional gutter vacuum system with extended-reach poles that cleans gutters on buildings up to four storeys high, all from ground level.', bullets: ['Industrial vacuum system reaches gutters up to four storeys high', 'No ladders, scaffolding, or cherry pickers needed for most tall buildings', 'Complete debris extraction from all high-level gutter channels', 'Safe operation — no working at height for operatives', 'Ideal for apartment blocks, offices, and townhouses', 'Fully insured for high-level gutter vacuum work'] },
        { heading: 'How Our Tall Building Gutter Vacuum System Works', content: 'Our gutter vacuum system uses a powerful industrial-grade suction unit combined with long-reach poles and specialist attachments to clean gutters at height entirely from ground level.', bullets: ['Industrial-grade vacuum unit with powerful debris extraction', 'Modular pole system reaches gutters up to 12 metres high', 'Specialist attachments for different gutter profiles and debris types', 'Camera inspection available for high-level downpipe testing', 'All debris contained in the vacuum — no mess on site', 'Professional operation with full health and safety compliance'] },
      ],
      faqs: [
        { question: 'How high can your gutter vacuum system reach?', answer: 'Our gutter vacuum system reaches gutters up to four storeys — approximately 12 metres — from ground level.' },
        { question: 'Do you need access inside the building for tall building gutter cleaning?', answer: 'No — our system operates entirely from the ground. We do not need access inside your building.' },
      ],
    };
  }

  if (slug === 'ground-based-gutter-cleaning-commercial-4-storey') {
    return {
      heroTitle: 'Ground Based Gutter Cleaning Commercial — Up to 4 Storeys',
      heroDescription: 'Ground based gutter cleaning for commercial buildings up to 4 storeys. WOW Gutters Ltd cleans gutters safely from ground level — no ladders, no scaffolding. Call 07421 433910.',
      sections: [
        { heading: 'Ground Based Gutter Cleaning for Commercial Buildings', content: 'Ground based gutter cleaning is the modern, safe way to maintain gutters on commercial buildings. WOW Gutters Ltd uses professional ground-level vacuum equipment to clean gutters on buildings up to four storeys high, eliminating the risks and costs of working at height.', bullets: ['Complete ground-level gutter cleaning for buildings up to 4 storeys', 'No ladders against walls or fascias at height', 'No scaffolding required for the vast majority of commercial buildings', 'Industrial-grade vacuum equipment for thorough cleaning', 'Safe for operatives and safe for your building', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Benefits of Ground Based Gutter Cleaning', content: 'Ground based gutter cleaning offers significant advantages over traditional ladder-based methods for commercial properties.', bullets: ['Eliminates working at height risks completely', 'No scaffold hire costs — significant savings', 'Faster than traditional methods on large commercial buildings', 'More thorough — vacuum extracts all debris including compacted silt', 'No damage to gutters, fascias, or UPVC from ladder contact', 'Professional documentation with before and after photos'] },
      ],
      faqs: [
        { question: 'Is ground based gutter cleaning as thorough as ladder cleaning?', answer: 'Yes — ground based gutter cleaning using our industrial vacuum system is often more thorough than ladder cleaning, as it extracts compacted debris that manual methods cannot reach.' },
        { question: 'Can you clean 4-storey commercial buildings from ground level?', answer: 'Yes — our ground-level vacuum system reaches gutters on buildings up to four storeys high (approximately 12 metres).' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-before-and-after') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Before and After',
      heroDescription: 'Commercial gutter cleaning before and after results. WOW Gutters Ltd provides photographic evidence of every commercial gutter clean. See the difference professional cleaning makes. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning Before and After', content: 'WOW Gutters Ltd provides before and after photographs for every commercial gutter cleaning job. Our photographic documentation shows the condition of your gutters before cleaning and the results after our professional service, giving you clear evidence of work completed for your maintenance records.', bullets: ['Before and after photos of every gutter run cleaned', 'Clear evidence of debris removal and gutter condition', 'Photographic records for compliance and insurance files', 'Documentation of any defects found during cleaning', 'Digital photos sent within 24 hours of completion', 'Professional standard suitable for audit and compliance'] },
        { heading: 'What Our Before and After Photos Show', content: 'Our photographic documentation provides a complete record of the gutter cleaning work completed on your commercial property.', bullets: ['Full gutter channel condition before cleaning', 'Evidence of debris, moss, silt, and blockages found', 'Downpipe inlet condition before clearance', 'Complete gutter run after thorough cleaning', 'Downpipe flow testing confirmation', 'Any identified defects noted for your attention'] },
      ],
      faqs: [
        { question: 'Do you provide before and after photos for commercial gutter cleaning?', answer: 'Yes — before and after photographs are included as standard with every WOW Gutters Ltd commercial gutter cleaning job.' },
        { question: 'How do I receive the before and after photos?', answer: 'Photos are sent digitally via email within 24 hours of completing the work.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-health-and-safety') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Health and Safety',
      heroDescription: 'Commercial gutter cleaning health and safety — WOW Gutters Ltd operates with full health and safety compliance, risk assessments, and method statements for all commercial work. Call 07421 433910.',
      sections: [
        { heading: 'Health and Safety in Commercial Gutter Cleaning', content: 'Health and safety is paramount in commercial gutter cleaning. WOW Gutters Ltd operates with full compliance with health and safety regulations, providing risk assessments, method statements, and safety documentation for every commercial project.', bullets: ['Full risk assessments for every commercial gutter cleaning site', 'Detailed method statements outlining safe working procedures', 'Compliance with CDM regulations for commercial projects', 'Ground-level vacuum system eliminates working at height risks', 'COSHH assessments for any cleaning products used', 'Fully insured with £10 million public liability cover'] },
        { heading: 'Our Health and Safety Commitment', content: 'WOW Gutters Ltd is committed to the highest health and safety standards in all commercial gutter cleaning operations.', bullets: ['All operatives have appropriate health and safety training', 'Regular equipment inspection and maintenance', 'Site-specific safety planning for every commercial property', 'Public safety protection during cleaning operations', 'Safe waste handling and disposal procedures', 'Ongoing health and safety training and improvement'] },
      ],
      faqs: [
        { question: 'Do you provide health and safety documentation for commercial gutter cleaning?', answer: 'Yes — we provide full health and safety documentation including risk assessments and method statements for all commercial work.' },
        { question: 'Are your operatives health and safety trained?', answer: 'Yes — all WOW Gutters Ltd operatives have appropriate health and safety training and certification.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-insurance-claim-prevention') {
    return {
      heroTitle: 'Commercial Gutter Cleaning for Insurance Claim Prevention',
      heroDescription: 'Commercial gutter cleaning for insurance claim prevention. Regular maintenance prevents water damage and demonstrates compliance. WOW Gutters Ltd helps protect your insurance position. Call 07421 433910.',
      sections: [
        { heading: 'Preventing Insurance Claims with Regular Gutter Cleaning', content: 'Water damage from blocked gutters is one of the most common insurance claims for commercial properties. Regular professional gutter cleaning prevents the damage from occurring and provides documented evidence that you have met your maintenance obligations.', bullets: ['Prevents water damage that leads to costly insurance claims', 'Demonstrates reasonable care and maintenance to insurers', 'Documented photographic evidence of regular gutter maintenance', 'Reduces the risk of claims being reduced or rejected', 'Proactive maintenance costs less than excess payments', 'Fully insured with £10 million public liability cover'] },
        { heading: 'How Gutter Maintenance Protects Your Insurance', content: 'Many insurance policies require policyholders to maintain their property in good condition. Regular gutter cleaning is a key part of this obligation.', bullets: ['Check your policy for gutter maintenance requirements', 'Documented maintenance strengthens your insurance position', 'Prevents the small issues that become major insurance claims', 'Regular cleaning costs a fraction of the average excess', 'Protects your no-claims discount from water damage claims', 'Free advice on insurance-compliant gutter maintenance'] },
      ],
      faqs: [
        { question: 'Can lack of gutter cleaning invalidate my insurance?', answer: 'Insurance claims for water damage can be reduced or rejected if the insurer determines that lack of maintenance contributed to the loss.' },
        { question: 'How does gutter cleaning prevent insurance claims?', answer: 'Regular gutter cleaning prevents the water overflow and ingress that cause the majority of commercial property water damage claims.' },
      ],
    };
  }

  if (slug === 'do-landlords-have-to-clean-gutters-uk') {
    return {
      heroTitle: 'Do Landlords Have to Clean Gutters in the UK?',
      heroDescription: 'Do landlords have to clean gutters in the UK? Yes — under Section 11 of the Landlord and Tenant Act 1985, landlords are responsible for gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'Landlord Gutter Cleaning Responsibilities in the UK', content: 'Yes, landlords in the UK have a legal responsibility to maintain their properties gutters. Under Section 11 of the Landlord and Tenant Act 1985, landlords must keep the structure and exterior of the property in repair, which includes gutters, downpipes, and drainage systems. Failure to maintain gutters can lead to tenant complaints, legal action, and insurance problems.', bullets: ['Section 11 requires landlords to maintain the exterior including gutters', 'Regular gutter cleaning prevents water damage and damp', 'Documented evidence demonstrates compliance with legal obligations', 'Neglected gutters can lead to tenant complaints and legal disputes', 'Portfolio landlords benefit from planned maintenance programmes', 'Free advice on your gutter maintenance legal obligations'] },
        { heading: 'Consequences of Not Cleaning Gutters as a Landlord', content: 'Failing to maintain gutters as a landlord can have serious consequences beyond just property damage.', bullets: ['Tenants can complain to environmental health about damp and mould', 'Insurance claims may be rejected due to lack of maintenance', 'Repair costs escalate when gutters are neglected long-term', 'Tenancy disputes over damp and water ingress damage', 'void periods due to uninhabitable conditions from water damage', 'Regular professional gutter cleaning is a small cost for peace of mind'] },
      ],
      faqs: [
        { question: 'Is gutter cleaning a legal requirement for UK landlords?', answer: 'Yes — under Section 11 of the Landlord and Tenant Act 1985, landlords must keep the structure and exterior of the property in repair, including gutters and downpipes.' },
        { question: 'Can I be sued for not cleaning gutters as a landlord?', answer: 'Yes — tenants can take legal action against landlords who fail to maintain their properties, including gutters, particularly if water damage affects the tenant\'s living conditions.' },
      ],
    };
  }

  if (slug === 'gutter-maintenance-obligations-for-landlords-uk') {
    return {
      heroTitle: 'Gutter Maintenance Obligations for Landlords UK',
      heroDescription: 'Understanding gutter maintenance obligations for landlords in the UK. WOW Gutters Ltd helps landlords meet Section 11 requirements with documented professional gutter cleaning. Call 07421 433910.',
      sections: [
        { heading: 'UK Landlord Gutter Maintenance Obligations', content: 'UK landlords have specific legal obligations regarding gutter maintenance under the Landlord and Tenant Act 1985 and the Homes (Fitness for Human Habitation) Act 2018. Gutters must be kept in good working order to prevent water damage, damp, and health hazards for tenants.', bullets: ['Section 11 requires landlords to maintain the structure including gutters', 'Homes Act requires properties to be fit for human habitation', 'Regular gutter cleaning prevents damp, mould, and water ingress', 'Documented evidence protects landlords in disputes', 'Portfolio landlords should have planned gutter maintenance', 'Free consultation on your gutter maintenance obligations'] },
        { heading: 'Meeting Your Landlord Gutter Maintenance Obligations', content: 'Fulfilling your gutter maintenance obligations as a landlord requires more than just occasional cleaning. A planned approach with documented evidence is the best way to demonstrate compliance.', bullets: ['Schedule regular gutter cleaning — at least annually for most properties', 'Use a professional gutter cleaning service with documented evidence', 'Keep records of all gutter maintenance for each property', 'Respond promptly to tenant reports of gutter problems', 'Inspect gutters during property visits between tenancies', 'Free portfolio survey and maintenance plan recommendation'] },
      ],
      faqs: [
        { question: 'How often should landlords clean gutters to meet legal obligations?', answer: 'Most landlords should clean gutters at least once a year. Properties near trees may need twice-yearly cleaning. Regular cleaning demonstrates compliance with your legal obligations.' },
        { question: 'What evidence should landlords keep for gutter maintenance?', answer: 'Keep photographs, invoices, and written condition reports from each gutter clean. This provides documented evidence of compliance with your legal obligations.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-service-level-agreement') {
    return {
      heroTitle: 'Gutter Cleaning Service Level Agreement',
      heroDescription: 'Professional gutter cleaning service level agreements for commercial properties. WOW Gutters Ltd provides SLAs with defined visit frequencies, response times, and reporting standards. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Service Level Agreements', content: 'A gutter cleaning service level agreement (SLA) defines the scope, frequency, and quality standards for gutter maintenance on your commercial property. WOW Gutters Ltd provides structured SLAs that give facilities managers and property owners clarity on what is delivered, when, and to what standard.', bullets: ['Defined visit frequency — monthly, quarterly, bi-annual, or annual', 'Clear scope of work for each gutter cleaning visit', 'Response time guarantees for urgent gutter issues', 'Quality standards and reporting requirements', 'Documented evidence for compliance and audit', 'Dedicated account management for SLA customers'] },
        { heading: 'What Our Gutter Cleaning SLAs Include', content: 'WOW Gutters Ltd gutter cleaning service level agreements are designed to meet the needs of commercial property owners, facilities managers, and property management companies.', bullets: ['Scheduled gutter cleaning visits to agreed frequency', 'Full clearance of all gutter channels and downpipes', 'Before and after photographic documentation', 'Written condition reports identifying any defects', 'Priority response for emergency callouts between visits', 'Quarterly and annual performance reporting'] },
      ],
      faqs: [
        { question: 'What is a gutter cleaning service level agreement?', answer: 'A gutter cleaning SLA is a formal agreement that defines the scope, frequency, quality standards, and reporting requirements for gutter maintenance on a property.' },
        { question: 'Do you offer gutter cleaning SLAs for commercial properties?', answer: 'Yes — WOW Gutters Ltd provides service level agreements for commercial properties of all types across Birmingham and the West Midlands.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-retail-units-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning for Retail Units Birmingham',
      heroDescription: 'Professional gutter cleaning for retail units in Birmingham. WOW Gutters Ltd services shops, shopping centres, and retail parades across the city. Call 07421 433910.',
      sections: [
        { heading: 'Retail Unit Gutter Cleaning in Birmingham', content: 'Birmingham\'s retail units — from the Bullring and Grand Central to local high street shops — need reliable gutter maintenance to protect stock and maintain a professional appearance. WOW Gutters Ltd provides professional gutter cleaning for retail units across Birmingham.', bullets: ['Full gutter clearance for all Birmingham retail premises', 'City centre retail units — Bullring, Grand Central, High Street', 'Shopping centres and retail parks across Birmingham', 'High street shops and independent retailers', 'Out-of-hours cleaning to avoid disrupting trading', 'Before and after photos for property management records'] },
        { heading: 'Why Retail Units in Birmingham Need Regular Gutter Cleaning', content: 'Retail properties are particularly vulnerable to gutter problems because water damage affects not just the building but also stock, customer experience, and trading operations.', bullets: ['Prevents water damage to stock and retail displays', 'Maintains professional appearance for customers', 'Eliminates slip hazards from overflowing water near entrances', 'Protects landlord and tenant relationships', 'Out-of-hours cleaning avoids disruption to trading', 'Free site survey for Birmingham retail properties'] },
      ],
      faqs: [
        { question: 'Can you clean retail unit gutters outside trading hours?', answer: 'Yes — we schedule retail gutter cleaning outside trading hours, overnight, or on Sundays to avoid disruption to your business.' },
        { question: 'Do you cover all Birmingham retail areas?', answer: 'Yes — we cover all Birmingham retail areas from the city centre to local high streets and suburban shopping parades.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-for-industrial-units-wolverhampton') {
    return {
      heroTitle: 'Gutter Cleaning for Industrial Units Wolverhampton',
      heroDescription: 'Professional gutter cleaning for industrial units in Wolverhampton. WOW Gutters Ltd services factories, warehouses, and industrial premises across Wolverhampton. Call 07421 433910.',
      sections: [
        { heading: 'Industrial Unit Gutter Cleaning in Wolverhampton', content: 'Wolverhampton has a strong industrial heritage with extensive industrial estates and manufacturing facilities that need professional gutter maintenance. WOW Gutters Ltd provides gutter cleaning for industrial units across Wolverhampton, using industrial-grade equipment for large roof areas.', bullets: ['Full gutter clearance for industrial units across Wolverhampton', 'Industrial estates — Bilston, Wednesfield, Heath Town, Fordhouses', 'Manufacturing facilities and factory buildings', 'Warehouses and distribution centres', 'Out-of-hours and shutdown period scheduling available', 'Before and after photos for compliance records'] },
        { heading: 'Why Wolverhampton Industrial Units Need Regular Gutter Cleaning', content: 'Industrial properties in Wolverhampton have large roof areas that collect significant debris. Regular gutter maintenance protects operations and prevents costly downtime.', bullets: ['Prevents production downtime from water damage to equipment', 'Protects stock and materials from water ingress', 'Meets health and safety compliance requirements', 'Reduces liability risks from overflowing water', 'Extends the life of industrial gutter systems', 'Free site survey for Wolverhampton industrial properties'] },
      ],
      faqs: [
        { question: 'What Wolverhampton industrial areas do you cover?', answer: 'We cover all Wolverhampton industrial estates including Bilston, Wednesfield, Heath Town, Fordhouses, Bushbury, and the surrounding areas.' },
        { question: 'Can you work during shutdowns?', answer: 'Yes — we can schedule industrial gutter cleaning to coincide with planned shutdowns, minimising disruption to your operations.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-quote-for-multiple-properties') {
    return {
      heroTitle: 'Gutter Cleaning Quote for Multiple Properties',
      heroDescription: 'Free gutter cleaning quotes for multiple properties across Birmingham and the West Midlands. WOW Gutters Ltd provides portfolio-wide quotations with volume discounts. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Quotes for Multiple Properties', content: 'Managing gutter cleaning across multiple properties is easier with a single quote covering your entire portfolio. WOW Gutters Ltd provides portfolio-wide gutter cleaning quotations with volume discounts, single-invoice billing, and coordinated scheduling.', bullets: ['Free portfolio-wide gutter cleaning quotation', 'Volume discounts for multi-property portfolios', 'Single invoice for all properties', 'Coordinated scheduling to suit your portfolio', 'Consistent service standards across all properties', 'Dedicated account management for portfolio customers'] },
        { heading: 'How Multi-Property Quotes Work', content: 'Getting a quote for gutter cleaning across multiple properties is straightforward with WOW Gutters Ltd.', bullets: ['We survey each property to assess gutter length and access needs', 'We provide a consolidated quote with per-property pricing', 'Volume discounts are applied based on total properties', 'You can accept the whole portfolio or start with a subset', 'Scheduling is coordinated to suit your priorities', 'Free portfolio survey with no obligation'] },
      ],
      faqs: [
        { question: 'Can you provide a quote for multiple properties?', answer: 'Yes — we provide free portfolio-wide quotations with per-property pricing and volume discounts.' },
        { question: 'Do you offer discounts for multiple properties?', answer: 'Yes — we offer volume-based discounts for gutter cleaning contracts covering multiple properties.' },
      ],
    };
  }

  if (slug === 'annual-gutter-maintenance-plan-for-landlords') {
    return {
      heroTitle: 'Annual Gutter Maintenance Plan for Landlords',
      heroDescription: 'Annual gutter maintenance plans for landlords across Birmingham and the West Midlands. WOW Gutters Ltd provides scheduled cleaning, inspections, and compliance documentation. Call 07421 433910.',
      sections: [
        { heading: 'Annual Gutter Maintenance Plans for Landlords', content: 'An annual gutter maintenance plan takes the hassle out of meeting your landlord obligations. WOW Gutters Ltd provides structured annual plans for landlords with scheduled gutter cleaning, full documentation, and fixed pricing.', bullets: ['Scheduled gutter cleaning visits — typically spring and autumn', 'Full photographic evidence for compliance records', 'Written condition reports after every visit', 'Downpipe testing and flow confirmation', 'Priority booking during busy periods', 'Fixed annual price with no hidden charges'] },
        { heading: 'Why Landlords Need Annual Gutter Maintenance', content: 'Annual gutter maintenance is the most cost-effective way for landlords to protect their properties and meet legal obligations.', bullets: ['Demonstrates compliance with Section 11 repairing obligations', 'Prevents costly emergency repairs with proactive maintenance', 'Protects property value with consistent roofline care', 'Provides documented evidence for tenant and insurance records', 'Reduces void periods by maintaining properties between tenancies', 'Free initial assessment and annual plan recommendation'] },
      ],
      faqs: [
        { question: 'How much does an annual gutter maintenance plan cost for landlords?', answer: 'Annual plan costs depend on property size and visit frequency. We provide a fixed annual price after a free initial assessment.' },
        { question: 'How many visits are included in the annual plan?', answer: 'Most annual landlord plans include two visits per year — one in spring and one in autumn. Additional visits can be arranged if needed.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contract-renewal-reminder') {
    return {
      heroTitle: 'Gutter Cleaning Contract Renewal Reminder',
      heroDescription: 'Gutter cleaning contract renewal reminders for commercial and residential customers. WOW Gutters Ltd provides automated reminders so you never miss your gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Contract Renewal — Never Miss a Clean', content: 'WOW Gutters Ltd provides automated contract renewal reminders so your gutter maintenance continues without interruption. When your gutter cleaning contract is due for renewal, we contact you in advance to agree the next period, ensuring your property remains protected year-round.', bullets: ['Automated contract renewal reminders before expiry', 'No interruption to your gutter maintenance schedule', 'Easy renewal process — single confirmation, no paperwork', 'Fixed pricing protected for the renewal period', 'Option to adjust visit frequency on renewal', 'Dedicated account management for contract customers'] },
        { heading: 'Why Contract Renewal Matters', content: 'Keeping your gutter cleaning contract active ensures continuous protection for your property without gaps in maintenance.', bullets: ['Prevents gaps in maintenance that could lead to blockages', 'Maintains your documented compliance record', 'Protects your priority booking status', 'Locks in your current pricing before any annual increase', 'Simple renewal process takes just minutes', 'Free contract review at renewal to ensure it still meets your needs'] },
      ],
      faqs: [
        { question: 'When will you remind me about contract renewal?', answer: 'We contact you approximately 30 days before your gutter cleaning contract is due for renewal, giving you plenty of time to review and confirm.' },
        { question: 'What happens if my contract expires before I renew?', answer: 'Your scheduled visits would stop and priority booking would lapse. We recommend renewing before the expiry date to maintain continuous protection.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-solihull') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Solihull',
      heroDescription: 'Professional commercial gutter cleaning in Solihull. WOW Gutters Ltd services offices, retail units, and industrial premises across Solihull and surrounding areas. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Solihull', content: 'Solihull\'s commercial properties — from the Touchwood shopping centre to Blythe Valley Business Park — need reliable gutter maintenance. WOW Gutters Ltd provides professional commercial gutter cleaning across all Solihull postcodes, using industrial-grade equipment for business premises of all types.', bullets: ['Commercial gutter cleaning for all Solihull business premises', 'Touchwood Shopping Centre and Solihull town centre', 'Blythe Valley Business Park and Solihull Business Park', 'Retail parks — Cranmore, Sears Retail Park, Chelmsley Wood', 'Office buildings throughout Solihull and Shirley', 'Free site survey and fixed price quotation'] },
        { heading: 'Why Solihull Commercial Properties Need Regular Gutter Cleaning', content: 'Solihull\'s commercial areas combine modern business parks with established retail centres and older industrial estates. Regular gutter maintenance protects all types of commercial property.', bullets: ['Protects Solihull offices and retail premises from water damage', 'Maintains professional appearance for Solihull businesses', 'Planned maintenance contracts for Solihull commercial properties', 'Out-of-hours cleaning to minimise disruption', 'Before and after photos for property management records', 'Free site survey for Solihull commercial properties'] },
      ],
      faqs: [
        { question: 'What Solihull commercial areas do you cover?', answer: 'We cover all Solihull commercial areas including Solihull town centre, Touchwood, Blythe Valley, Shirley, Chelmsley Wood, Dorridge, and Knowle.' },
        { question: 'Do you offer contracts for Solihull business parks?', answer: 'Yes — we offer planned maintenance contracts for Solihull business parks and commercial estates.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-sutton-coldfield') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Sutton Coldfield',
      heroDescription: 'Professional commercial gutter cleaning in Sutton Coldfield. WOW Gutters Ltd services offices, retail units, and business premises across Sutton Coldfield. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Sutton Coldfield', content: 'Sutton Coldfield\'s commercial properties — from the town centre to the retail parks and business areas — need professional gutter maintenance. WOW Gutters Ltd provides commercial gutter cleaning across Sutton Coldfield, serving all types of business premises.', bullets: ['Full gutter clearance for all Sutton Coldfield commercial properties', 'Sutton Coldfield town centre — retail and office premises', 'Retail parks — Maney Corner, Birmingham Road area', 'Business premises along the A38 corridor and surrounding areas', 'Out-of-hours cleaning to minimise business disruption', 'Free site survey and fixed price quotation'] },
        { heading: 'Why Sutton Coldfield Businesses Need Regular Gutter Cleaning', content: 'Sutton Coldfield\'s tree-lined streets and conservation areas mean commercial gutters collect significant debris from nearby trees. Regular professional cleaning is essential.', bullets: ['Protects retail and office premises from water damage', 'Maintains professional appearance in a prosperous area', 'Planned maintenance contracts for Sutton Coldfield businesses', 'Before and after photos for property records', 'Competitive rates with no hidden charges', 'Free site survey for Sutton Coldfield commercial properties'] },
      ],
      faqs: [
        { question: 'What areas of Sutton Coldfield do you cover?', answer: 'We cover all Sutton Coldfield areas including the town centre, Four Oaks, Boldmere, Wylde Green, New Oscott, and Walmley.' },
        { question: 'Do you work outside business hours in Sutton Coldfield?', answer: 'Yes — we schedule commercial gutter cleaning outside business hours to avoid disruption to Sutton Coldfield businesses.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-dudley') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Dudley',
      heroDescription: 'Professional commercial gutter cleaning in Dudley. WOW Gutters Ltd services offices, retail, and industrial premises across Dudley and the surrounding area. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Dudley', content: 'Dudley\'s commercial properties — from the town centre to industrial estates and retail parks — need reliable gutter maintenance. WOW Gutters Ltd provides commercial gutter cleaning across Dudley, serving all types of business premises.', bullets: ['Full gutter clearance for all Dudley commercial properties', 'Dudley town centre — retail and office premises', 'Industrial estates — Dudley, Netherton, Pensnett, Brierley Hill', 'Retail parks and shopping centres across the Dudley area', 'Out-of-hours cleaning to minimise business disruption', 'Free site survey and fixed price quotation'] },
        { heading: 'Why Dudley Businesses Need Regular Gutter Cleaning', content: 'Dudley\'s mix of historic buildings, modern retail, and industrial premises means a range of gutter maintenance needs. Regular professional cleaning protects all property types.', bullets: ['Protects Dudley retail and industrial premises from water damage', 'Maintains professional appearance for Dudley businesses', 'Planned maintenance contracts for Dudley commercial properties', 'Before and after photos for property management records', 'Competitive rates with no hidden charges', 'Free site survey for Dudley commercial properties'] },
      ],
      faqs: [
        { question: 'What Dudley areas do you cover?', answer: 'We cover all Dudley areas including the town centre, Netherton, Pensnett, Brierley Hill, Kingswinford, and Stourbridge.' },
        { question: 'Do you offer contracts for Dudley industrial estates?', answer: 'Yes — we offer planned maintenance contracts for Dudley industrial estates and business parks.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-walsall') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Walsall',
      heroDescription: 'Professional commercial gutter cleaning in Walsall. WOW Gutters Ltd services offices, retail, and industrial premises across Walsall and surrounding areas. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Walsall', content: 'Walsall\'s commercial properties — from the town centre to industrial estates and retail parks — need professional gutter maintenance. WOW Gutters Ltd provides commercial gutter cleaning across Walsall, serving all types of business premises.', bullets: ['Full gutter clearance for all Walsall commercial properties', 'Walsall town centre — retail and office premises', 'Industrial estates — Walsall, Bloxwich, Aldridge, Brownhills', 'Retail parks and business centres across the Walsall area', 'Out-of-hours cleaning to minimise business disruption', 'Free site survey and fixed price quotation'] },
        { heading: 'Why Walsall Businesses Need Regular Gutter Cleaning', content: 'Walsall\'s industrial heritage means many commercial properties have large roof areas that collect significant debris. Regular gutter maintenance protects operations and property value.', bullets: ['Protects Walsall industrial and retail premises from water damage', 'Maintains professional appearance for Walsall businesses', 'Planned maintenance contracts for Walsall commercial properties', 'Before and after photos for property management records', 'Competitive rates with no hidden charges', 'Free site survey for Walsall commercial properties'] },
      ],
      faqs: [
        { question: 'What Walsall areas do you cover?', answer: 'We cover all Walsall areas including the town centre, Bloxwich, Aldridge, Brownhills, Pelsall, Willenhall, and Darlaston.' },
        { question: 'Do you offer contracts for Walsall industrial estates?', answer: 'Yes — we offer planned maintenance contracts for Walsall industrial estates and commercial properties.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-wolverhampton') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Wolverhampton',
      heroDescription: 'Professional commercial gutter cleaning in Wolverhampton. WOW Gutters Ltd services offices, retail, and industrial premises across Wolverhampton. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Wolverhampton', content: 'Wolverhampton\'s commercial properties — from the city centre to the extensive industrial estates — need reliable gutter maintenance. WOW Gutters Ltd provides commercial gutter cleaning across Wolverhampton, serving all types of business premises.', bullets: ['Full gutter clearance for all Wolverhampton commercial properties', 'Wolverhampton city centre — retail and office premises', 'Industrial estates — Bilston, Wednesfield, Heath Town, Fordhouses', 'Retail parks and business centres across Wolverhampton', 'Out-of-hours cleaning to minimise business disruption', 'Free site survey and fixed price quotation'] },
        { heading: 'Why Wolverhampton Businesses Need Regular Gutter Cleaning', content: 'Wolverhampton has extensive industrial and commercial areas that require regular gutter maintenance to protect operations and property value.', bullets: ['Protects Wolverhampton industrial and retail premises from water damage', 'Maintains professional appearance for Wolverhampton businesses', 'Planned maintenance contracts for Wolverhampton commercial properties', 'Before and after photos for property management records', 'Competitive rates with no hidden charges', 'Free site survey for Wolverhampton commercial properties'] },
      ],
      faqs: [
        { question: 'What Wolverhampton areas do you cover?', answer: 'We cover all Wolverhampton areas including the city centre, Bilston, Wednesfield, Heath Town, Fordhouses, Bushbury, and Tettenhall.' },
        { question: 'Do you offer contracts for Wolverhampton industrial estates?', answer: 'Yes — we offer planned maintenance contracts for Wolverhampton industrial estates and commercial properties.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-west-bromwich') {
    return {
      heroTitle: 'Commercial Gutter Cleaning West Bromwich',
      heroDescription: 'Professional commercial gutter cleaning in West Bromwich. WOW Gutters Ltd services offices, retail, and industrial premises across West Bromwich. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in West Bromwich', content: 'West Bromwich\'s commercial properties — from the town centre to the retail parks and industrial estates — need professional gutter maintenance. WOW Gutters Ltd provides commercial gutter cleaning across West Bromwich.', bullets: ['Full gutter clearance for all West Bromwich commercial properties', 'West Bromwich town centre — retail and office premises', 'Industrial estates — West Bromwich, Oldbury, Smethwick', 'Retail parks and business centres across the area', 'Out-of-hours cleaning to minimise business disruption', 'Free site survey and fixed price quotation'] },
        { heading: 'Why West Bromwich Businesses Need Regular Gutter Cleaning', content: 'West Bromwich has a mix of traditional industrial premises and modern retail developments. Regular gutter maintenance protects all types of commercial property.', bullets: ['Protects West Bromwich industrial and retail premises from water damage', 'Maintains professional appearance for local businesses', 'Planned maintenance contracts for West Bromwich commercial properties', 'Before and after photos for property management records', 'Competitive rates with no hidden charges', 'Free site survey for West Bromwich commercial properties'] },
      ],
      faqs: [
        { question: 'What West Bromwich areas do you cover?', answer: 'We cover all West Bromwich areas including the town centre, Great Bridge, Stone Cross, Charlemont, and the surrounding Sandwell area.' },
        { question: 'Do you offer contracts for West Bromwich businesses?', answer: 'Yes — we offer planned maintenance contracts for West Bromwich commercial properties of all types.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-facilities-management-company-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning for Facilities Management Companies Birmingham',
      heroDescription: 'Professional gutter cleaning for facilities management companies in Birmingham. WOW Gutters Ltd provides reliable maintenance, compliance docs, and multi-site coordination. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for FM Companies in Birmingham', content: 'Facilities management companies in Birmingham need gutter maintenance partners who are reliable, documented, and easy to work with. WOW Gutters Ltd provides professional gutter cleaning for FM companies across Birmingham, with multi-site coordination, comprehensive reporting, and dedicated account management.', bullets: ['Reliable gutter maintenance for all sites under FM management in Birmingham', 'Comprehensive documentation for compliance and client reporting', 'Multi-site coordination with a single point of contact', 'Flexible scheduling around building occupancy and events', 'Emergency response for urgent gutter issues across Birmingham', 'Dedicated account management for FM company customers'] },
        { heading: 'Why FM Companies Choose WOW Gutters Ltd', content: 'Birmingham FM companies trust WOW Gutters Ltd for gutter maintenance because we make their job easier, not more complicated.', bullets: ['Single point of contact for all Birmingham sites under management', 'Digital documentation sent after every visit', 'Automated scheduling reminders for planned maintenance', 'Condition reports that identify issues before they escalate', 'Transparent pricing with no hidden charges', 'Free site survey for all properties under FM management'] },
      ],
      faqs: [
        { question: 'Can you coordinate gutter maintenance across multiple Birmingham sites?', answer: 'Yes — we provide multi-site coordination for FM companies with properties across Birmingham and the West Midlands.' },
        { question: 'What documentation do you provide for FM companies?', answer: 'We provide before and after photos, written condition reports, downpipe flow confirmation, and health and safety documentation for every site.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-managing-agent-birmingham') {
    return {
      heroTitle: 'Gutter Cleaning for Managing Agents Birmingham',
      heroDescription: 'Professional gutter cleaning for managing agents in Birmingham. WOW Gutters Ltd provides planned maintenance, compliance docs, and single-invoice billing. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Managing Agents in Birmingham', content: 'Managing agents in Birmingham oversee gutter maintenance across multiple properties and need services that are reliable, documented, and easy to administer. WOW Gutters Ltd partners with managing agents to provide professional gutter cleaning with comprehensive reporting.', bullets: ['Planned gutter maintenance for all managed properties in Birmingham', 'Scheduled visits timed to seasonal requirements', 'Comprehensive photographic records for client reporting', 'Single-invoice billing for all managed properties', 'Priority scheduling for managing agent contract customers', 'Dedicated account management for managing agent clients'] },
        { heading: 'Why Managing Agents Choose WOW Gutters Ltd', content: 'Birmingham managing agents trust WOW Gutters Ltd for reliable, professional gutter maintenance that simplifies their workload.', bullets: ['Reduces administrative burden on managing agent teams', 'Ensures consistent maintenance across all managed properties', 'Provides documented evidence for freeholder and leaseholder reporting', 'Prevents emergency callout costs with proactive maintenance', 'Flexible scheduling to match service charge budgets', 'Fixed pricing with annual contract options'] },
      ],
      faqs: [
        { question: 'Do you offer portfolio discounts for Birmingham managing agents?', answer: 'Yes — we offer discounted rates for managing agent contracts covering multiple properties, with single-invoice billing.' },
        { question: 'What documentation do you provide for managing agents?', answer: 'Every visit includes before and after photos, a written condition summary, and an annual compliance report for freeholder reporting.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contractor-chas-accredited') {
    return {
      heroTitle: 'Gutter Cleaning Contractor CHAS Accredited',
      heroDescription: 'A CHAS accredited gutter cleaning contractor serving Birmingham and the West Midlands. WOW Gutters Ltd provides health and safety compliant gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'CHAS Accredited Gutter Cleaning Contractor', content: 'WOW Gutters Ltd operates as a CHAS accredited contractor for gutter cleaning services across Birmingham and the West Midlands. CHAS accreditation demonstrates our commitment to health and safety compliance, making us a preferred contractor for commercial clients, public sector organisations, and large property portfolios.', bullets: ['CHAS accredited — health and safety compliance verified', 'The Common Assessment Standard compliant', 'Full health and safety documentation provided with every contract', 'Risk assessments and method statements for all work', 'Preferred contractor for commercial and public sector clients', 'Free site survey for CHAS-compliant gutter cleaning'] },
        { heading: 'Why CHAS Accreditation Matters for Gutter Cleaning', content: 'CHAS accreditation gives clients confidence that their gutter cleaning contractor meets recognised health and safety standards. Many commercial and public sector organisations require CHAS accreditation as a condition of engagement.', bullets: ['Required by many local authorities and public sector organisations', 'Preferred by large commercial clients and main contractors', 'Demonstrates commitment to health and safety compliance', 'Simplifies tender and procurement processes', 'Reduces client due diligence requirements', 'Free consultation on accreditation requirements'] },
      ],
      faqs: [
        { question: 'Are you CHAS accredited?', answer: 'We provide health and safety compliance documentation meeting CHAS standards for all commercial gutter cleaning contracts.' },
        { question: 'Do you provide CHAS-compliant documentation?', answer: 'Yes — we provide health and safety documentation that meets CHAS accreditation requirements for all commercial gutter cleaning work.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contractor-safecontractor-approved') {
    return {
      heroTitle: 'Gutter Cleaning Contractor SafeContractor Approved',
      heroDescription: 'A SafeContractor approved gutter cleaning contractor serving Birmingham and the West Midlands. WOW Gutters Ltd provides health and safety compliant gutter maintenance. Call 07421 433910.',
      sections: [
        { heading: 'SafeContractor Approved Gutter Cleaning Contractor', content: 'WOW Gutters Ltd operates to SafeContractor standards for gutter cleaning services across Birmingham and the West Midlands. SafeContractor approval demonstrates our commitment to health and safety compliance, making us a preferred contractor for commercial clients and public sector organisations.', bullets: ['SafeContractor compliant — health and safety standards met', 'Full health and safety documentation with every contract', 'Risk assessments and method statements for all work', 'Preferred contractor for commercial clients', 'Public sector approved for schools and council buildings', 'Free site survey with SafeContractor compliant quote'] },
        { heading: 'Why SafeContractor Approval Matters', content: 'SafeContractor approval gives clients confidence that their gutter cleaning contractor meets recognised health and safety standards. Many organisations require SafeContractor approval.', bullets: ['Required by many commercial and public sector organisations', 'Demonstrates commitment to health and safety', 'Simplifies contractor procurement and due diligence', 'Reduces client administration for contractor management', 'Annual health and safety audit ensures ongoing compliance', 'Free consultation on SafeContractor requirements'] },
      ],
      faqs: [
        { question: 'Do you meet SafeContractor standards?', answer: 'We provide health and safety compliance documentation meeting SafeContractor standards for all commercial gutter cleaning contracts.' },
        { question: 'What SafeContractor documentation do you provide?', answer: 'We provide health and safety policies, risk assessments, method statements, insurance certificates, and evidence of operative training.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contractor-for-schools-procurement') {
    return {
      heroTitle: 'Gutter Cleaning Contractor for Schools Procurement',
      heroDescription: 'A gutter cleaning contractor for schools procurement across Birmingham and the West Midlands. WOW Gutters Ltd provides compliant, documented gutter maintenance for educational settings. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Schools Procurement', content: 'Schools need gutter cleaning contractors who meet procurement requirements for educational settings. WOW Gutters Ltd provides professional gutter cleaning for schools with full health and safety compliance, safeguarding awareness, and educational sector experience.', bullets: ['Schools procurement compliant — health and safety documentation provided', 'DBS checked operatives for school access', 'Safeguarding awareness training for all school-based work', 'Holiday scheduling to avoid disruption to pupils', 'Comprehensive photographic records for MAT compliance', 'Free site survey for schools procurement quotation'] },
        { heading: 'Why Schools Choose WOW Gutters Ltd', content: 'Birmingham and West Midlands schools trust WOW Gutters Ltd for professional, compliant gutter maintenance that meets procurement standards.', bullets: ['School holiday scheduling — summer, Easter, half-term availability', 'Multi-academy trust contracts with coordinated scheduling', 'Full compliance documentation for school procurement files', 'Before and after photos for governing body reports', 'Competitive rates for single schools and MAT contracts', 'Free site survey for schools of all sizes'] },
      ],
      faqs: [
        { question: 'Do you have DBS checked operatives?', answer: 'Yes — our operatives have current DBS checks for working in schools and educational settings.' },
        { question: 'Can you work across a multi-academy trust?', answer: 'Yes — we provide coordinated gutter maintenance for MATs with scheduling across multiple school sites.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-nhs-trust-property') {
    return {
      heroTitle: 'Gutter Cleaning for NHS Trust Property',
      heroDescription: 'Professional gutter cleaning for NHS trust properties across Birmingham and the West Midlands. WOW Gutters Ltd provides compliant maintenance for healthcare settings. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for NHS Trust Properties', content: 'NHS trust properties need gutter maintenance that meets strict healthcare environment standards. WOW Gutters Ltd provides professional gutter cleaning for NHS premises across Birmingham and the West Midlands, with infection control compliance and minimal disruption to clinical services.', bullets: ['Professional gutter cleaning for NHS buildings and healthcare facilities', 'Infection control compliant working practices', 'Discreet service with minimal disruption to patient care', 'Out-of-hours scheduling around clinical operations', 'Comprehensive photographic records for estates management', 'Fully insured with NHS-compliant liability cover'] },
        { heading: 'Why NHS Trusts Need Professional Gutter Maintenance', content: 'Water ingress in NHS properties can close wards, damage medical equipment, and create infection risks. Regular gutter maintenance is critical for healthcare environments.', bullets: ['Prevents water ingress affecting patient wards and treatment areas', 'Protects sensitive medical equipment and diagnostic facilities', 'Eliminates slip hazards near entrances and access routes', 'Meets NHS estates compliance requirements', 'Planned maintenance for NHS trusts across the region', 'Free site survey for NHS properties'] },
      ],
      faqs: [
        { question: 'Can you work in active NHS environments?', answer: 'Yes — we have experience working in healthcare settings and follow all infection control protocols.' },
        { question: 'Do you offer emergency gutter services for NHS properties?', answer: 'Yes — we provide priority response for NHS trust properties with urgent gutter issues.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-council-owned-buildings') {
    return {
      heroTitle: 'Gutter Cleaning for Council Owned Buildings',
      heroDescription: 'Professional gutter cleaning for council owned buildings across Birmingham and the West Midlands. WOW Gutters Ltd provides compliant, documented maintenance for local authority properties. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Council Properties', content: 'Council owned buildings — from civic offices to libraries, leisure centres and public buildings — need reliable, compliant gutter maintenance. WOW Gutters Ltd provides professional gutter cleaning for local authority properties across Birmingham and the West Midlands.', bullets: ['Professional gutter cleaning for all types of council owned buildings', 'Full health and safety documentation including RAMS', 'CHAS-compliant working practices', 'Out-of-hours scheduling for public buildings', 'Before and after photos for asset management records', 'Free site survey for council property quotation'] },
        { heading: 'Why Councils Need Regular Gutter Maintenance', content: 'Local authorities have a duty to maintain their property portfolios. Regular gutter cleaning protects public buildings and demonstrates proper asset management.', bullets: ['Protects council property assets from water damage', 'Meets health and safety obligations for public buildings', 'Prevents disruption to council services from water ingress', 'Cost-effective planned maintenance vs reactive emergency repairs', 'Documented evidence for asset management and audit', 'Free consultation for council property maintenance'] },
      ],
      faqs: [
        { question: 'Do you provide RAMS for council building gutter cleaning?', answer: 'Yes — we provide full risk assessments and method statements for all council building gutter cleaning work.' },
        { question: 'Can you work around council building opening hours?', answer: 'Yes — we schedule work outside opening hours or during quiet periods to minimise disruption to council services.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-housing-association-properties') {
    return {
      heroTitle: 'Gutter Cleaning for Housing Association Properties',
      heroDescription: 'Professional gutter cleaning for housing association properties across Birmingham and the West Midlands. WOW Gutters Ltd provides portfolio-wide maintenance with compliance documentation. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning for Housing Associations', content: 'Housing associations manage large property portfolios that need consistent, documented gutter maintenance. WOW Gutters Ltd provides professional gutter cleaning for housing association properties across Birmingham and the West Midlands, with portfolio-wide coordination and compliance reporting.', bullets: ['Portfolio-wide gutter maintenance for housing association properties', 'Consistent service standards across all properties', 'Comprehensive photographic documentation for compliance', 'Single-invoice billing for portfolio work', 'Scheduled visits coordinated with tenant liaison', 'Dedicated account management for housing association clients'] },
        { heading: 'Why Housing Associations Choose WOW Gutters Ltd', content: 'Housing associations across the West Midlands trust WOW Gutters Ltd for reliable, compliant gutter maintenance that meets regulatory requirements.', bullets: ['Demonstrates compliance with regulatory maintenance standards', 'Protects housing stock value with consistent roofline care', 'Prevents tenant complaints with proactive gutter maintenance', 'Reduces emergency repair costs with planned maintenance', 'Flexible scheduling around tenant access requirements', 'Free portfolio-wide survey and maintenance plan proposal'] },
      ],
      faqs: [
        { question: 'Do you offer contracts for housing association properties?', answer: 'Yes — we offer planned maintenance contracts for housing association properties of all types across Birmingham and the West Midlands.' },
        { question: 'Can you coordinate with tenant access requirements?', answer: 'Yes — we work with housing associations to schedule gutter cleaning visits around tenant availability and access requirements.' },
      ],
    };
  }

  if (slug === 'gutter-overflow-damage-commercial-property') {
    return {
      heroTitle: 'Gutter Overflow Damage — Commercial Property',
      heroDescription: 'Gutter overflow damage on commercial property — causes, consequences, and prevention. WOW Gutters Ltd helps businesses prevent water damage from blocked gutters. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Overflow Damage on Commercial Property', content: 'Gutter overflow is one of the most common causes of water damage on commercial properties. When gutters are blocked, water spills over the channel edges, running down walls, saturating brickwork, and finding its way into the building. Understanding the causes and consequences helps property owners take preventive action.', bullets: ['Overflow from blocked gutters is the leading cause of commercial water damage', 'Water runs down walls, saturating brickwork and entering cavities', 'Prolonged overflow leads to damp, mould, and structural damage', 'Overflow at ground level creates slip hazards and standing water', 'Insurance claims for overflow damage can be rejected if maintenance is lacking', 'Regular gutter cleaning is the simplest and cheapest prevention'] },
        { heading: 'Signs of Gutter Overflow on Commercial Buildings', content: 'Spotting the early signs of gutter overflow helps you act before serious damage occurs.', bullets: ['Water staining on external walls below gutter level', 'Green algae or moss growth on walls from constant moisture', 'Damp patches appearing on internal ceilings and walls', 'Water pooling at ground level near downpipe outlets', 'Saturated ground or standing water around the building perimeter', 'Peeling paint or wallpaper near exterior walls on upper floors'] },
      ],
      faqs: [
        { question: 'What causes gutter overflow on commercial properties?', answer: 'Blocked gutters — filled with leaves, moss, silt, and debris — cause water to overflow the channel. Blocked downpipes prevent water from draining away.' },
        { question: 'How can I prevent gutter overflow damage?', answer: 'Regular professional gutter cleaning is the most effective way to prevent gutter overflow and the water damage it causes.' },
      ],
    };
  }

  if (slug === 'water-damage-commercial-building-blocked-gutters') {
    return {
      heroTitle: 'Water Damage to Commercial Buildings from Blocked Gutters',
      heroDescription: 'Water damage to commercial buildings from blocked gutters — causes, costs, and prevention. WOW Gutters Ltd helps businesses avoid costly water damage. Call 07421 433910.',
      sections: [
        { heading: 'Water Damage from Blocked Commercial Gutters', content: 'Blocked gutters are one of the most common causes of water damage to commercial buildings. When gutters fill with debris, rainwater cannot drain away. It overflows, runs down walls, and enters the building fabric, causing damage that can cost thousands to repair.', bullets: ['Blocked gutters cause water to overflow against walls and enter the building', 'Water ingress damages ceilings, walls, floors, and building fabric', 'Damp conditions promote mould growth, affecting health compliance', 'Stock and equipment can be destroyed by water ingress', 'Repair costs can be 10–20 times the cost of regular gutter cleaning', 'Insurance claims may be affected if maintenance cannot be demonstrated'] },
        { heading: 'Common Types of Water Damage from Blocked Gutters', content: 'The type and severity of water damage depends on the building construction and how long the blockage has been present.', bullets: ['Ceiling stains and plaster damage from water penetrating the roof edge', 'Cavity wall saturation leading to damp on internal walls', 'Timber decay in fascia boards, soffits, and roof timbers', 'Mould and mildew growth in affected areas', 'Foundation damage from persistent water pooling at ground level', 'Slip hazards from water overflowing onto paths and entrances'] },
      ],
      faqs: [
        { question: 'Can blocked gutters cause structural damage?', answer: 'Yes — prolonged water overflow from blocked gutters can saturate walls, rot timber, and in severe cases, affect foundations.' },
        { question: 'Is water damage from blocked gutters covered by insurance?', answer: 'Water damage may be covered, but insurers may reduce or reject claims if they determine that lack of gutter maintenance contributed to the damage.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-invoice-for-business') {
    return {
      heroTitle: 'Gutter Cleaning Invoice for Business',
      heroDescription: 'Professional gutter cleaning invoicing for businesses across Birmingham and the West Midlands. WOW Gutters Ltd provides detailed invoices suitable for company accounts. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Invoicing for Businesses', content: 'WOW Gutters Ltd provides professional invoicing for business customers, with detailed invoices suitable for company accounts, VAT returns, and procurement systems. Our invoices include full details of work completed, property addresses, dates, and pricing to simplify your accounting.', bullets: ['Professional VAT invoices for all commercial gutter cleaning work', 'Detailed breakdown of work completed per property', 'Company name, address, and purchase order processing', 'Digital invoices sent by email for easy record keeping', 'Payment terms to suit your business processes', 'Dedicated account management for business customers'] },
        { heading: 'Invoice Options for Businesses', content: 'We offer flexible invoicing options to suit different business requirements.', bullets: ['Per-job invoicing for one-off gutter cleaning', 'Monthly invoicing for contract and maintenance customers', 'Quarterly invoicing to match budget cycles', 'Annual invoicing for fixed-price contracts', 'Multi-site consolidated invoicing for property portfolios', 'Invoice copies available on request at any time'] },
      ],
      faqs: [
        { question: 'Do you provide VAT invoices for gutter cleaning?', answer: 'Yes — all WOW Gutters Ltd invoices are professional VAT invoices suitable for company accounts and VAT returns.' },
        { question: 'Can you set up monthly direct debit for gutter cleaning?', answer: 'Yes — we can arrange monthly direct debit or invoice payment for business gutter cleaning contracts.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-company-that-invoices-monthly') {
    return {
      heroTitle: 'Gutter Cleaning Company That Invoices Monthly',
      heroDescription: 'A gutter cleaning company that invoices monthly across Birmingham and the West Midlands. WOW Gutters Ltd offers monthly invoicing for contract gutter cleaning customers. Call 07421 433910.',
      sections: [
        { heading: 'Monthly Invoicing for Gutter Cleaning', content: 'WOW Gutters Ltd offers monthly invoicing for business and property management customers who prefer regular predictable payments. Monthly invoicing spreads the cost of annual gutter maintenance and simplifies budgeting.', bullets: ['Monthly invoicing available for contract gutter cleaning customers', 'Fixed monthly amount — no surprise charges', 'Spread the cost of annual gutter maintenance', 'Simplifies budgeting for facilities management', 'Digital invoices sent by email each month', 'Direct debit and bank transfer options available'] },
        { heading: 'Who Benefits from Monthly Invoicing', content: 'Monthly invoicing is popular with businesses and property managers who want predictable monthly costs rather than larger one-off invoices.', bullets: ['Property management companies with portfolio contracts', 'Facilities management companies managing multiple sites', 'Letting agents with managed property portfolios', 'Business premises with fixed monthly budgets', 'Housing associations and public sector organisations', 'Free consultation on monthly invoicing arrangements'] },
      ],
      faqs: [
        { question: 'Can I pay for gutter cleaning monthly?', answer: 'Yes — WOW Gutters Ltd offers monthly invoicing for contract gutter cleaning customers across Birmingham and the West Midlands.' },
        { question: 'How does monthly invoicing work?', answer: 'Your annual contract cost is divided into 12 equal monthly payments. You receive an invoice each month for the same amount.' },
      ],
    };
  }

  if (slug === 'recurring-gutter-cleaning-service-business') {
    return {
      heroTitle: 'Recurring Gutter Cleaning Service for Business',
      heroDescription: 'A recurring gutter cleaning service for businesses across Birmingham and the West Midlands. WOW Gutters Ltd provides scheduled maintenance with fixed pricing. Call 07421 433910.',
      sections: [
        { heading: 'Recurring Gutter Cleaning for Businesses', content: 'A recurring gutter cleaning service ensures your business premises are maintained year-round without the hassle of remembering to book. WOW Gutters Ltd provides scheduled, recurring gutter cleaning for businesses across Birmingham and the West Midlands.', bullets: ['Scheduled recurring gutter cleaning — monthly, quarterly, or bi-annual', 'Fixed pricing for each visit — no surprises', 'Automatic reminders and scheduling', 'Comprehensive documentation after every visit', 'Priority booking for recurring service customers', 'Free initial assessment and service plan'] },
        { heading: 'Benefits of Recurring Gutter Cleaning for Your Business', content: 'A recurring gutter cleaning service offers significant advantages over one-off bookings for business premises.', bullets: ['Never forget to book gutter cleaning again', 'Lower cost per visit compared to one-off bookings', 'Consistent maintenance protects your building year-round', 'Documented evidence for compliance and insurance', 'Emergency callout included with some service tiers', 'Free site survey and recurring service proposal'] },
      ],
      faqs: [
        { question: 'What is a recurring gutter cleaning service?', answer: 'A recurring gutter cleaning service provides scheduled gutter cleaning on a regular basis — monthly, quarterly, or bi-annually — with automatic reminders and fixed pricing.' },
        { question: 'How do I set up recurring gutter cleaning for my business?', answer: 'Contact WOW Gutters Ltd for a free site survey. We will recommend a service frequency and provide fixed pricing for your recurring gutter cleaning.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-company-with-public-liability-insurance') {
    return {
      heroTitle: 'Gutter Cleaning Company with Public Liability Insurance',
      heroDescription: 'A gutter cleaning company with £10 million public liability insurance. WOW Gutters Ltd provides fully insured gutter cleaning for commercial and residential properties. Call 07421 433910.',
      sections: [
        { heading: 'Fully Insured Gutter Cleaning Company', content: 'WOW Gutters Ltd carries £10 million public liability insurance for all gutter cleaning work. When you choose WOW Gutters Ltd, you have the peace of mind that comes with knowing you are working with a properly insured professional gutter cleaning company.', bullets: ['£10 million public liability insurance cover', 'Full insurance certificate available on request', 'Insurance covers all types of gutter cleaning work', 'Cover for commercial and residential properties', 'No shortcuts — fully compliant with all insurance requirements', 'Free quotes with proof of insurance provided'] },
        { heading: 'Why Insurance Matters for Gutter Cleaning', content: 'Using an insured gutter cleaning company protects both you and the contractor. Uninsured gutter cleaners can leave you liable for accidents or damage.', bullets: ['Covers accidental damage to your property during gutter cleaning', 'Protects you from liability if an operative is injured on your property', 'Required by many commercial contracts and landlord agreements', 'Demonstrates the contractor is a professional business', 'Provides peace of mind for you as the property owner', 'Always ask to see insurance certificates before booking'] },
      ],
      faqs: [
        { question: 'How much public liability insurance do you carry?', answer: 'WOW Gutters Ltd carries £10 million public liability insurance for all gutter cleaning work.' },
        { question: 'Can I see your insurance certificate?', answer: 'Yes — we are happy to provide our public liability insurance certificate on request before any work starts.' },
      ],
    };
  }

  if (slug === 'gutter-cleaning-contractor-birmingham-with-references') {
    return {
      heroTitle: 'Gutter Cleaning Contractor Birmingham — With References',
      heroDescription: 'A gutter cleaning contractor in Birmingham with references. WOW Gutters Ltd provides references from commercial and residential customers across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Gutter Cleaning Contractor in Birmingham with References', content: 'Choosing a gutter cleaning contractor in Birmingham is easier when you can check their references. WOW Gutters Ltd provides references from commercial and residential customers across Birmingham and the West Midlands.', bullets: ['References available from commercial gutter cleaning customers', 'References from residential customers across Birmingham', 'Contact details provided with permission for reference checks', 'Long-standing relationships with repeat customers', 'Trusted by Birmingham businesses and homeowners', 'Free site survey with full confidence in our reputation'] },
        { heading: 'What Our Birmingham Customers Say', content: 'WOW Gutters Ltd has built a strong reputation across Birmingham for reliable, professional gutter cleaning services.', bullets: ['Hundreds of satisfied customers across all Birmingham postcodes', 'Repeat business from commercial and residential customers', 'Positive reviews and recommendations from Birmingham clients', 'Long-term relationships with Birmingham property managers', 'Professional service with documented results every time', 'Free site survey — experience our professional approach'] },
      ],
      faqs: [
        { question: 'Can I speak to your existing Birmingham customers?', answer: 'Yes — we can provide references from existing customers in Birmingham with their permission.' },
        { question: 'Do you have reviews from Birmingham customers?', answer: 'Yes — we have reviews and testimonials from customers across Birmingham and the West Midlands.' },
      ],
    };
  }

  if (slug === 'commercial-gutter-cleaning-case-study-birmingham') {
    return {
      heroTitle: 'Commercial Gutter Cleaning Case Study — Birmingham',
      heroDescription: 'Commercial gutter cleaning case study in Birmingham. WOW Gutters Ltd shares real examples of commercial gutter cleaning projects across Birmingham. Call 07421 433910.',
      sections: [
        { heading: 'Commercial Gutter Cleaning in Birmingham — Case Study', content: 'WOW Gutters Ltd has completed hundreds of commercial gutter cleaning projects across Birmingham. Our case studies demonstrate the challenges, solutions, and results our customers have experienced — from city centre offices to suburban industrial estates.', bullets: ['Real examples of commercial gutter cleaning in Birmingham', 'Before and after results from actual projects', 'Challenges overcome — access issues, heavy blockages, complex rooflines', 'Solutions delivered using our industrial-grade equipment', 'Results that demonstrate the value of professional gutter cleaning', 'Free site survey — let us add your case study to our portfolio'] },
        { heading: 'Typical Birmingham Commercial Projects', content: 'Our commercial gutter cleaning projects across Birmingham cover a wide range of property types and challenges.', bullets: ['City centre office blocks — complex access and out-of-hours working', 'Retail units — cleaning around trading hours with no disruption', 'Warehouses and industrial units — large-scale gutter clearance', 'Schools — holiday scheduling for thorough gutter cleaning', 'Managed apartment blocks — coordinated cleaning for all elevations', 'Free consultation on your Birmingham commercial gutter cleaning project'] },
      ],
      faqs: [
        { question: 'Can you provide case studies of Birmingham commercial projects?', answer: 'Yes — we can share examples of commercial gutter cleaning projects we have completed across Birmingham.' },
        { question: 'Can you visit my Birmingham commercial property for a survey?', answer: 'Yes — we provide free site surveys for all commercial properties in Birmingham. Contact us to arrange a convenient time.' },
      ],
    };
  }

  if (slug === 'retail-gutter-cleaning') {
    return {
      heroTitle: 'Retail Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for retail properties across Birmingham and the West Midlands. WOW Gutters Ltd services shops, shopping centres, retail parks, and commercial parades. Call 07421 433910.',
      sections: [
        { heading: 'Retail Gutter Cleaning Services', content: 'Retail properties — from high street shops to retail parks and shopping centres — need reliable gutter maintenance to protect stock, customers, and the building. WOW Gutters Ltd provides professional gutter cleaning for all types of retail premises across Birmingham and the West Midlands.', bullets: ['Full gutter clearance for shops, retail parks, and shopping centres', 'Out-of-hours cleaning to avoid disrupting trading hours', 'Multi-unit shopping centre drainage systems cleaned comprehensively', 'Downpipe testing and flow check on all outlets', 'Before and after photos for property management records', 'Planned maintenance contracts for retail portfolios'] },
        { heading: 'Why Retail Properties Need Regular Gutter Cleaning', content: 'Blocked gutters on retail properties cause water damage to stock, create slip hazards for customers, and make the premises look neglected. Regular maintenance protects your business and your reputation.', bullets: ['Prevents water damage to stock, displays, and shop interiors', 'Eliminates slip hazards from overflowing water near entrances', 'Maintains professional appearance for customers and visitors', 'Protects landlord and tenant relationships in retail parks', 'Planned maintenance for multi-unit retail centres', 'Free site survey for retail properties of all sizes'] },
      ],
      faqs: [
        { question: 'Do you work around retail trading hours?', answer: 'Yes — we schedule retail gutter cleaning outside trading hours, overnight, or on Sundays to avoid disruption.' },
        { question: 'What retail areas do you cover?', answer: 'We cover all retail premises across Birmingham and the West Midlands, from city centre shops to out-of-town retail parks.' },
      ],
    };
  }

  if (slug === 'landlord-gutter-cleaning') {
    return {
      heroTitle: 'Landlord Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for landlords across Birmingham and the West Midlands. WOW Gutters Ltd helps landlords meet legal obligations with documented evidence. Call 07421 433910.',
      sections: [
        { heading: 'Landlord Gutter Cleaning Services', content: 'Landlords have a legal responsibility to maintain their rental properties in good repair, including gutters and drainage. WOW Gutters Ltd provides professional gutter cleaning for landlords with full photographic evidence for compliance, tenant communication, and insurance records.', bullets: ['Professional gutter cleaning for all types of rental property', 'Photographic before and after evidence for compliance', 'Downpipe testing and flow check on every visit', 'Written condition summary after every clean', 'Discounted rates for multi-property landlord portfolios', 'Free quotes with fixed pricing — no hidden charges'] },
        { heading: 'Why Landlords Need Professional Gutter Cleaning', content: 'Blocked gutters on rental properties cause damp, structural damage, and tenant complaints. Regular gutter maintenance protects property value and demonstrates compliance with Section 11 obligations.', bullets: ['Protects property value with regular roofline maintenance', 'Prevents tenant complaints about damp and water ingress', 'Meets landlord legal obligations for property repair', 'Photographic evidence proves maintenance was completed', 'Reduces costly emergency repairs with proactive care', 'Flexible scheduling between tenancies'] },
      ],
      faqs: [
        { question: 'Do landlords have to clean gutters?', answer: 'Yes — under Section 11 of the Landlord and Tenant Act 1985, landlords are responsible for maintaining the structure and exterior, including gutters.' },
        { question: 'What evidence do you provide for landlords?', answer: 'Every visit includes before and after photographs and a written summary, providing clear evidence of completed maintenance.' },
      ],
    };
  }

  if (slug === 'letting-agent-gutter-cleaning') {
    return {
      heroTitle: 'Letting Agent Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for letting agents across Birmingham and the West Midlands. WOW Gutters Ltd provides reliable maintenance for managed rental portfolios. Call 07421 433910.',
      sections: [
        { heading: 'Letting Agent Gutter Cleaning Services', content: 'Letting agents need reliable, documented gutter maintenance across their managed property portfolios. WOW Gutters Ltd provides professional gutter cleaning for letting agents with scheduled visits, photographic evidence, and simple invoicing.', bullets: ['Planned gutter maintenance across your managed property portfolio', 'Scheduled visits with automated reminders', 'Photographic before and after evidence for landlord reports', 'Single monthly invoice for all managed properties', 'Priority scheduling for portfolio landlords', 'Dedicated account management for letting agency clients'] },
        { heading: 'Why Letting Agents Choose WOW Gutters Ltd', content: 'Managing gutter maintenance across multiple rental properties is time-consuming. WOW Gutters Ltd simplifies the process for letting agents.', bullets: ['Reduces administrative burden on agency management teams', 'Ensures consistent maintenance across all managed properties', 'Provides documented evidence for landlord communication', 'Demonstrates professional property management to landlords', 'Prevents tenant complaints with proactive gutter care', 'Competitive rates for portfolio contracts'] },
      ],
      faqs: [
        { question: 'Can you invoice the letting agency directly?', answer: 'Yes — we invoice letting agents directly for work across their managed portfolio, saving time on individual billing.' },
        { question: 'Do you provide reports for landlords?', answer: 'Yes — every gutter clean includes before and after photos and a written summary suitable for landlord reports.' },
      ],
    };
  }

  if (slug === 'property-management-gutter-cleaning') {
    return {
      heroTitle: 'Property Management Gutter Cleaning',
      heroDescription: 'Professional gutter cleaning for property managers across Birmingham and the West Midlands. WOW Gutters Ltd provides reliable maintenance, compliance documentation, and portfolio management. Call 07421 433910.',
      sections: [
        { heading: 'Property Management Gutter Cleaning Services', content: 'Property managers need a gutter cleaning partner they can trust to maintain properties to a consistent standard. WOW Gutters Ltd provides professional gutter cleaning for property managers, with portfolio-wide coordination, comprehensive documentation, and simplified billing.', bullets: ['Planned gutter maintenance across your entire managed portfolio', 'Consistent service standards at every property', 'Comprehensive photographic documentation for client reporting', 'Single-invoice billing for all properties under management', 'Dedicated account management for property management clients', 'Priority scheduling for contract customers'] },
        { heading: 'Why Property Managers Choose WOW Gutters Ltd', content: 'Managing gutter maintenance across multiple properties is challenging. WOW Gutters Ltd makes it simple for property managers.', bullets: ['Reduces administrative burden on your management team', 'Ensures consistent maintenance standards across all properties', 'Provides documented evidence for landlord and client reports', 'Prevents emergency callout costs with proactive maintenance', 'Flexible scheduling to match tenancy cycles', 'Competitive rates for portfolio contracts'] },
      ],
      faqs: [
        { question: 'Do you offer portfolio discounts for property managers?', answer: 'Yes — we offer discounted rates for property management contracts covering multiple properties.' },
        { question: 'What documentation do you provide?', answer: 'Every visit includes before and after photographs, a written condition summary, and an annual compliance report for client files.' },
      ],
    };
  }

  if (slug.startsWith('commercial-gutter-clearing-')) {
    const area = slug.replace('commercial-gutter-clearing-', '');
    const areaName = titleCase(area.replace(/-/g, ' '));
    return {
      heroTitle: `Commercial Gutter Clearing ${areaName}`,
      heroDescription: `Professional commercial gutter clearing in ${areaName}. WOW Gutters Ltd services offices, retail units, warehouses, and industrial premises across ${areaName} and surrounding areas. Industrial-grade vacuum system, out-of-hours scheduling, and full photographic documentation. Call 07421 433910 for a free quote.`,
      sections: [
        { heading: `Commercial Gutter Clearing in ${areaName}`, content: `${areaName}'s commercial properties — from the town centre to industrial estates and retail parks — need professional gutter maintenance. WOW Gutters Ltd provides commercial gutter clearing across ${areaName}, serving all types of business premises with industrial-grade equipment and flexible scheduling.`, bullets: ['Full gutter clearance for all commercial properties', 'Industrial-grade vacuum system for large gutter runs', 'Multi-downpipe testing on every commercial visit', 'Out-of-hours cleaning to minimise business disruption', 'Before and after photos for property management records', 'Free site survey and fixed price quotation'] },
        { heading: `Why ${areaName} Businesses Need Regular Gutter Clearing`, content: `Regular commercial gutter clearing protects ${areaName} businesses from water damage, complies with health and safety requirements, and maintains property value. WOW Gutters Ltd provides reliable scheduled maintenance for all types of commercial premises.`, bullets: ['Protects business premises from water damage and damp', 'Meets health and safety compliance obligations', 'Maintains professional appearance for your business', 'Planned maintenance contracts for regular servicing', 'Emergency response available for urgent issues', 'Fixed pricing with no hidden charges'] },
      ],
      faqs: [
        { question: `What commercial areas of ${areaName} do you cover?`, answer: `We cover all ${areaName} commercial areas including the town centre, retail parks, industrial estates, and business premises throughout the ${areaName} area.` },
        { question: 'Do you offer planned maintenance contracts?', answer: 'Yes — we offer planned maintenance contracts for commercial properties with scheduled visits at discounted rates.' },
        { question: 'Do you provide compliance documentation?', answer: 'Yes — every commercial clean includes before and after photographs and a written summary suitable for health and safety records.' },
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
