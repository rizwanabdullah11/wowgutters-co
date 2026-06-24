export interface ServiceDetail {
  id: string;
  name: string;
  icon: string;
  heroImage: string;
  heroVideo?: string;
  heroTitle: string;
  heroDescription: string;
  sections: {
    title: string;
    content: string;
    image?: string;
    imagePosition?: 'left' | 'right';
    bulletPoints?: string[];
  }[];
  ctaSection: {
    title: string;
    description: string;
    phone: string;
    buttonText: string;
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    icon: '🌧️',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Professional Gutter Cleaning',
    heroDescription: 'Professional gutter cleaning that removes leaves, moss, silt and debris from your gutter channels and downpipes. Ground-level vacuum system, no ladders, up to 4-storey reach, before and after photos, and downpipe testing on every visit.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd?',
        content: 'WOW Gutters Ltd specialises in gutter cleaning using a professional ground-level vacuum system — no ladders against your walls, no fascia damage, and no mess left on your driveway or garden. Our team clears the full gutter run, tests downpipes, and sends before and after photos so you can see exactly what was done.',
        image: '/gutter-cleaning.jpeg',
        imagePosition: 'right',
        bulletPoints: [
          'Ground-level gutter cleaning — no ladders placed against your property',
          'High-reach vacuum equipment for homes, flats, and commercial properties',
          'Before and after photos sent on every gutter cleaning visit',
          'Downpipe clearing and flow testing included as standard',
          'Fully insured with £10 million public liability cover',
          'Honest advice if gutter repairs or gutter inspection are needed'
        ]
      },
      {
        title: 'What\'s Included in Every Gutter Clean',
        content: 'Every gutter cleaning appointment follows the same thorough process. We do not just scoop visible debris — we clear the channel, check outlets, and confirm rainwater can flow away from your property. If we spot damage, we explain whether gutter repairs are needed without pressure to book extra work.',
        image: '/gutter-cleaning-before.jpeg',
        imagePosition: 'left',
        bulletPoints: [
          'Full gutter vacuum clean — leaves, moss, silt, and compacted debris removed',
          'Downpipe clearing and flush testing on every visit',
          'Before and after photo documentation',
          'Condition report with notes on joints, brackets, and alignment',
          'Free gutter inspection advice when we spot early problems',
          'Same-day or next-day gutter cleaning slots where available'
        ]
      },
      {
        title: 'How Often Should Gutters Be Cleaned?',
        content: 'Most properties need gutter cleaning once or twice a year. Homes under trees, properties with moss on the roof, and buildings with slow-draining downpipes often need more frequent gutter maintenance to prevent overflow and damp.',
        image: '/guttercleaningblog.jpeg',
        imagePosition: 'right',
        bulletPoints: [
          'Once a year — minimum for most UK homes, usually in autumn',
          'Twice a year — recommended near trees or after heavy leaf fall',
          'After storms — when you see overflow, staining, or sagging gutters',
          'Before winter — to reduce freeze-thaw blockages and ice dams',
          'Commercial properties — quarterly gutter cleaning for planned maintenance'
        ]
      },
      {
        title: 'Why Regular Gutter Cleaning Matters',
        content: 'Blocked gutters force rainwater over the edge of the channel instead of into the downpipe. That overflow leads to damp walls, fascia rot, foundation problems, and internal mould. Regular gutter cleaning is one of the most cost-effective ways to protect your home — far cheaper than roof cleaning, fascia replacement, or damp repairs after the damage is done.',
        image: '/files/12_gutter_overflow_water_damage.jpg',
        imagePosition: 'left',
        bulletPoints: [
          'Prevents damp patches and water staining on external walls',
          'Stops water pooling at the base of walls and around foundations',
          'Protects fascia, soffits, and timber behind the gutter line',
          'Reduces mould, condensation, and internal moisture problems',
          'Removes nesting material that attracts birds, insects, and rodents',
          'Prevents bracket strain from wet, heavy debris in the gutter'
        ]
      },
      {
        title: 'Our Ground-Level Vacuum System',
        content: 'Traditional ladder-based gutter cleaning can mark walls, damage fascias, and leave debris on the ground. Our high-reach vacuum system lets us complete professional gutter cleaning from the ground — including gutters above conservatories, porches, and extensions where ladder access is awkward.',
        image: '/files/15_ground_based_vacuum_operative.jpg',
        imagePosition: 'right',
        bulletPoints: [
          'No ladders against your property — safer for your home and our team',
          'Reaches up to 4 storeys from ground level on most properties',
          'Camera checks available so you can see inside the gutter before and after',
          'Ideal for gutters over conservatories and awkward rooflines',
          'All waste collected into our vacuum — nothing left on paths or lawns',
          'Most domestic gutter cleaning visits completed in 30–60 minutes'
        ]
      },
      {
        title: 'Gutter Cleaning & Related Services',
        content: 'Many customers book gutter cleaning alongside gutter inspection, gutter repairs, roof cleaning, or exterior uPVC cleaning. WOW Gutters Ltd covers the full roofline — from clearing blocked gutters to fixing leaking joints and removing moss from the roof.',
        image: '/gutter-cleaning-westmidlands.png',
        imagePosition: 'right',
        bulletPoints: [
          'Gutter inspection — check condition before problems become costly',
          'Gutter repairs — leaking joints, loose brackets, and cracked sections',
          'Roof cleaning — moss removal to reduce future gutter blockages',
          'Exterior uPVC cleaning — fascias, soffits, frames, and conservatories',
          'Commercial gutter cleaning — shops, offices, schools, and industrial units',
          'Hot wash cleaning — exterior surfaces alongside gutter work'
        ]
      }
    ],
    ctaSection: {
      title: 'Book Your Gutter Clean Today',
      description: 'Get a free, no-obligation quote in 60 seconds. Same-day and next-day gutter cleaning appointments available. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote'
    }
  },
  {
    id: 'gutter-repairs',
    name: 'Gutter Repairs',
    icon: '🔧',
    heroImage: '/gutter-repair-before.png',
    heroVideo: '/gutter-repair%20(2).mp4',
    heroTitle: 'Professional Gutter Repairs',
    heroDescription:
      'Expert gutter repairs for leaking joints, sagging runs, loose brackets, cracked sections, and damaged downpipes. Quality materials, flow testing on every job, and a 6-month guarantee on qualifying repair work from WOW Gutters Ltd.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Gutter Repairs?',
        content:
          'WOW Gutters Ltd fixes gutter problems properly — not quick silicone patches that fail in the next downpour. Our technicians diagnose the root cause, use quality seals and brackets, and test water flow before we leave. Many repairs are completed on the first visit, with honest advice if a full gutter replacement makes more sense.',
        image: '/gutter-repair-after.jpeg',
        imagePosition: 'right',
        bulletPoints: [
          'Leaking joints, sagging gutters, and loose brackets repaired by trained technicians',
          'Quality uPVC seals, connectors, and brackets — not temporary DIY fixes',
          '6-month guarantee on qualifying gutter repair work',
          'Flow testing after every repair to confirm rainwater drains correctly',
          'Fully insured with £10 million public liability cover',
          'Same-day and emergency gutter repairs where availability allows',
        ],
      },
      {
        title: 'Common Gutter Problems We Fix',
        content:
          'From small drips at a joint to a full run pulling away from the fascia, we repair the gutter issues that cause damp walls, stained brickwork, and rotten fascia boards. If we spot blockages or moss contributing to the damage, we will explain whether gutter cleaning or roof cleaning should be booked alongside the repair.',
        image: '/gutter-repair-before.png',
        imagePosition: 'left',
        bulletPoints: [
          'Leaking joints and failed seals at corners and connectors',
          'Sagging gutter runs caused by broken or spaced brackets',
          'Cracked, split, or perforated gutter sections',
          'Loose or missing fascia brackets and fixings',
          'Damaged downpipe shoes, connectors, and offsets',
          'Poor fall (slope) corrected so water flows to the outlet',
        ],
      },
      {
        title: 'Signs Your Gutters Need Repair',
        content:
          'Gutters often fail slowly. Catching problems early is far cheaper than repairing damp internally or replacing rotten fascia boards. Book a gutter inspection if you are unsure — we will tell you honestly whether cleaning, a small repair, or replacement is the right call.',
        bulletPoints: [
          'Water dripping from joints after rain has stopped',
          'Overflow during light rainfall — may indicate blockage or poor fall',
          'Visible gap between the gutter and fascia board',
          'Green or black staining on walls beneath the gutter line',
          'Standing water visible inside the gutter channel',
          'Gutter sections visibly dipping or pulling away from the wall',
        ],
      },
      {
        title: 'What\'s Included in Every Repair Visit',
        content:
          'Every gutter repair appointment follows a clear process. We explain what we find, agree the work before we start, and leave your gutters flowing properly. Where access is awkward — over conservatories, porches, or extensions — we use appropriate equipment to work safely and efficiently.',
        bulletPoints: [
          'On-site assessment of joints, brackets, fall, and downpipe connections',
          'Clear quote before repair work begins — no hidden extras',
          'Replacement seals, brackets, connectors, or short gutter sections as needed',
          'Realignment of sagging runs with correct spacing between brackets',
          'Downpipe joint repairs and outlet checks included where relevant',
          'Before and after photos on request for your records',
        ],
      },
      {
        title: 'Our Gutter Repair Process',
        content:
          'We focus on lasting repairs. That means fixing why the gutter failed — not just where the water escaped. After joints are resealed or replaced and brackets secured, we run water through the system to confirm everything drains to the downpipe as it should.',
        bulletPoints: [
          'Inspect the full gutter run, outlets, and nearby fascia condition',
          'Remove failed sealant or damaged components where necessary',
          'Fit new seals, brackets, or sections using manufacturer-approved parts',
          'Set correct fall so water does not pool in the channel',
          'Flow test downpipes and advise on gutter cleaning if debris caused the fault',
          'Most domestic gutter repairs completed within 1–2 hours on site',
        ],
      },
      {
        title: 'Gutter Repairs & Related Services',
        content:
          'Many customers book gutter repairs after a gutter clean or inspection reveals joint failure, bracket fatigue, or storm damage. WOW Gutters Ltd covers the full roofline — from fixing leaking gutters to clearing blockages and removing moss that accelerates wear.',
        image: '/gutter-repair-after.jpeg',
        imagePosition: 'right',
        bulletPoints: [
          'Gutter cleaning — clear debris before it strains brackets and joints',
          'Gutter inspection — identify problems before costly water damage',
          'Gutter installation — full replacement when repairs are no longer economical',
          'Exterior uPVC cleaning — fascias and soffits alongside gutter work',
          'Roof cleaning — reduce moss and debris entering the gutter system',
          'Commercial gutter repairs — shops, offices, schools, and industrial units',
        ],
      },
    ],
    ctaSection: {
      title: 'Book Your Gutter Repair Today',
      description:
        'Get a free, no-obligation repair quote in 60 seconds. Same-day and emergency appointments where available. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote',
    },
  },
  {
    id: 'upvc-cleaning',
    name: 'Exterior UPVC Cleaning',
    icon: '⭕',
    heroImage: '/upvc-cleaning.jpg',
    heroVideo: '/exterior-upvc-video.mp4',
    heroTitle: 'Professional Exterior UPVC Cleaning',
    heroDescription:
      'Purified hot-water exterior UPVC cleaning for fascias, soffits, gutter exteriors, window frames, doors, and conservatories. Removes algae, green staining, and grime — streak-free finish, safe for your property, and ideal alongside gutter cleaning.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for UPVC Cleaning?',
        content:
          'WOW Gutters Ltd cleans exterior UPVC and roofline plastics using purified hot water — not harsh chemicals or high-pressure blasting that can mark fragile surfaces. We reach fascias, soffits, and frames from the ground where possible, protect borders and brickwork, and leave your roofline looking bright again without risking seals or painted finishes.',
        image: '/upvc-cleaning.jpg',
        imagePosition: 'right',
        bulletPoints: [
          'Purified hot-water system for fascias, soffits, and UPVC cladding',
          'Streak-free finish on window frames, doors, and conservatory rooflines',
          'Safe, low-pressure methods — no damage to seals, paint, or brickwork',
          'Ideal combined with gutter cleaning or gutter repairs in one visit',
          'Fully insured with £10 million public liability cover',
          'Honest advice if fascia boards need repair rather than cleaning alone',
        ],
      },
      {
        title: 'What We Clean',
        content:
          'Our exterior UPVC cleaning service covers the full visible roofline and common plastic surfaces on homes, flats, and commercial buildings across Birmingham and the West Midlands.',
        bulletPoints: [
          'Fascia boards and bargeboards',
          'Soffits and eaves trim',
          'Exterior gutter faces and downpipe surfaces',
          'UPVC window frames and sills',
          'External doors and porch surrounds',
          'Conservatory rooflines, frames, and cladding panels',
        ],
      },
      {
        title: 'Signs Your UPVC Needs Cleaning',
        content:
          'Green algae, black streaks, and ingrained dirt build slowly on UPVC. Cleaning before staining etches into the plastic saves money compared with replacement — and keeps your property looking cared for.',
        bulletPoints: [
          'Green or black algae streaks on fascias and soffits',
          'Dull, grey UPVC that no longer matches newer sections',
          'Visible dirt lines below gutter outlets or roof edges',
          'Conservatory roof bars or frames turning green',
          'Window frames stained from overflow or moss runoff',
          'Preparing a property for sale, rental, or exterior painting',
        ],
      },
      {
        title: "What's Included in Every UPVC Clean",
        content:
          'Every appointment follows the same careful approach. We assess access, explain what we can reach safely, and agree the price before we start — whether you book fascia cleaning alone or as part of a wider roofline visit.',
        bulletPoints: [
          'On-site check of surfaces, access, and drainage below the work area',
          'Purified hot-water wash to lift algae, grime, and pollution staining',
          'Fascias, soffits, and agreed UPVC surfaces cleaned in one visit',
          'Runoff managed so borders, paths, and driveways are protected',
          'Optional add-ons: gutter cleaning, repairs, or conservatory glass',
          'Before and after photos on request',
        ],
      },
      {
        title: 'Our UPVC Cleaning Process',
        content:
          'We match the method to the surface. Hot purified water loosens biological growth without aggressive pressure, then we rinse for an even, streak-free finish along the roofline.',
        bulletPoints: [
          'Walk-around to confirm which fascias, soffits, and frames are included',
          'Ground-based or appropriate access equipment set up safely',
          'Application of purified hot water to lift algae and ingrained dirt',
          'Controlled rinse along the roofline for an even finish',
          'Final check for missed sections and tidy-down of the work area',
          'Most domestic fascia and soffit cleans completed in 2–4 hours',
        ],
      },
      {
        title: 'Exterior UPVC Cleaning & Related Services',
        content:
          'Many customers book UPVC cleaning with gutter cleaning, gutter repairs, or roof moss removal — one team, one visit, full roofline refresh. WOW Gutters Ltd covers the exterior from gutters to fascias and roof surfaces.',
        image: '/upvc-cleaning.jpg',
        imagePosition: 'left',
        bulletPoints: [
          'Gutter cleaning — clear channels while fascias are still accessible',
          'Gutter repairs — fix leaking joints found during roofline work',
          'Roof cleaning — reduce moss and debris staining gutters and UPVC',
          'Conservatory cleaning — frames and roof glass where agreed',
          'Hot wash cleaning — stubborn exterior grime on paths and render',
          'Commercial fascia cleaning — shops, offices, and industrial units',
        ],
      },
    ],
    ctaSection: {
      title: 'Book Your UPVC Clean Today',
      description:
        'Get a free, no-obligation quote in 60 seconds. Fascia and soffit cleaning from £60. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote',
    },
  },
  {
    id: 'roof-cleaning',
    name: 'Roof Cleaning',
    icon: '🏠',
    heroImage: '/roof-cleaning.JPG',
    heroVideo: '/roof-cleaning-video.mp4',
    heroTitle: 'Professional Roof Cleaning',
    heroDescription:
      'Safe roof cleaning and moss removal for homes across Birmingham and the West Midlands. Low-pressure soft wash methods, biocide treatment, and careful moss clearance to protect tiles and reduce future gutter blockages.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Roof Cleaning?',
        content:
          'WOW Gutters Ltd treats roof cleaning as roof care — not pressure washing that strips tiles or forces water under slates. We use low-pressure soft wash techniques suited to UK roofs, remove moss and algae carefully, and apply treatment to slow regrowth. Many customers book roof cleaning with gutter cleaning so debris does not refill the gutters within weeks.',
        image: '/roof-cleaning.JPG',
        imagePosition: 'right',
        bulletPoints: [
          'Low-pressure soft wash methods — tile-safe roof cleaning',
          'Moss, algae, and lichen removal from roof tiles and ridges',
          'Biocide treatment applied to slow moss regrowth',
          'Ideal combined with gutter cleaning or gutter inspection',
          'Fully insured with £10 million public liability cover',
          'Honest advice if tiles need repair rather than cleaning alone',
        ],
      },
      {
        title: 'What We Treat',
        content:
          'Our roof cleaning service covers the main roof surfaces and problem areas that cause moss buildup, staining, and blocked gutters on typical UK properties.',
        bulletPoints: [
          'Concrete and clay roof tiles',
          'Moss and algae on roof slopes and ridges',
          'Lichen and black streak staining on tiles',
          'North-facing and shaded roof sections',
          'Roof edges where moss falls into gutters',
          'Flat roof membranes and commercial roof surfaces where agreed',
        ],
      },
      {
        title: 'Signs Your Roof Needs Cleaning',
        content:
          'Moss holds moisture against tiles and sheds into gutters after rain. Cleaning early protects the roof surface and reduces how often you need gutter clearing — especially on Birmingham properties with tree cover and shaded slopes.',
        bulletPoints: [
          'Thick green moss visible on roof tiles or ridges',
          'Gutters refilling quickly after a recent gutter clean',
          'Dark staining or algae streaks across roof slopes',
          'Tiles lifting or mortar damage near moss-heavy areas',
          'Damp or green staining on walls below the roofline',
          'Preparing a property for sale or end-of-tenancy work',
        ],
      },
      {
        title: "What's Included in Every Roof Clean",
        content:
          'Every roof cleaning visit starts with a sensible assessment of access, tile type, and how heavy the moss coverage is. We explain what we will do, agree the price, and leave the roof treated — not just briefly rinsed.',
        bulletPoints: [
          'Roof survey from the ground or safe access point before work starts',
          'Low-pressure soft wash to lift moss and organic growth',
          'Careful clearance of loosened moss from the roof surface',
          'Biocide treatment to help slow moss and algae regrowth',
          'Advice on gutter cleaning if moss debris is entering the channels',
          'Before and after photos on request',
        ],
      },
      {
        title: 'Our Roof Cleaning Process',
        content:
          'We match the method to your roof type and the level of growth. The goal is a cleaner, healthier roof surface — without the damage risk of high-pressure jet washing on brittle tiles.',
        bulletPoints: [
          'Assess tile type, pitch, access, and moss coverage',
          'Set up safe access and protect borders, paths, and planted areas',
          'Apply soft wash solution to lift moss and algae from tiles',
          'Remove loosened moss and rinse the roof evenly',
          'Apply biocide treatment where appropriate for longer-lasting results',
          'Most domestic roof cleans completed in half a day to one day',
        ],
      },
      {
        title: 'Roof Cleaning & Related Services',
        content:
          'Roof moss is one of the main reasons gutters block again soon after cleaning. WOW Gutters Ltd can treat the roof and clear the gutters in one visit — plus fascia cleaning, repairs, and inspections where needed.',
        image: '/roof-cleaning-before-after.jpeg',
        imagePosition: 'left',
        bulletPoints: [
          'Gutter cleaning — clear moss and silt after roof treatment',
          'Gutter inspection — check for damage revealed once moss is removed',
          'Gutter repairs — fix joints and brackets found during roofline work',
          'Exterior UPVC cleaning — fascias and soffits below the roof edge',
          'Commercial roof cleaning — warehouses, offices, and industrial units',
          'Roof inspection — separate service for structural roof checks',
        ],
      },
    ],
    ctaSection: {
      title: 'Book Your Roof Clean Today',
      description:
        'Get a free, no-obligation quote in 60 seconds. Roof cleaning from £150 depending on size and moss coverage. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote',
    },
  },
  {
    id: 'gutter-inspection',
    name: 'Gutter Inspection',
    icon: '🔍',
    heroImage: '/gutter-inspection.png',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Free Gutter Inspection',
    heroDescription:
      'Free gutter inspection across Birmingham and the West Midlands. We check gutters, downpipes, joints, brackets, and fascia condition — with clear photos and honest advice, no obligation to book work.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Gutter Inspection?',
        content:
          'WOW Gutters Ltd offers free gutter inspections so you can spot blockages, leaks, and bracket problems before they cause damp or expensive repairs. Our technicians explain what they find in plain English, send photos where helpful, and never pressure you to book work you do not need.',
        image: '/gutter-inspection.png',
        imagePosition: 'right',
        bulletPoints: [
          'Free gutter inspection with no obligation to proceed',
          'Ground-level and high-reach checks on gutters and downpipes',
          'Photo documentation of problem areas where useful',
          'Honest advice on cleaning, repairs, or replacement',
          'Fully insured with £10 million public liability cover',
          'Same-day and next-day inspection slots where available',
        ],
      },
      {
        title: 'What We Inspect',
        content:
          'Our gutter inspection covers the full rainwater system visible from safe access points — not just a quick glance at the front elevation.',
        bulletPoints: [
          'Gutter channel condition, alignment, and debris level',
          'Downpipe flow, blockages, and shoe connections',
          'Joints, seals, corners, and outlet condition',
          'Bracket spacing, fixings, and signs of sagging',
          'Fascia and soffit condition near the gutter line',
          'Overflow staining and signs of historic water escape',
        ],
      },
      {
        title: 'Signs You Need a Gutter Inspection',
        content:
          'You do not need to wait for overflow damage to book an inspection. If you notice any of the signs below, a free check can confirm whether cleaning, repairs, or monitoring is the right next step.',
        bulletPoints: [
          'Overflow during rainfall or staining on external walls',
          'Plants, moss, or visible debris in the gutter channel',
          'Gutters dipping, gapping from the fascia, or loose brackets',
          'Drips from joints after rain has stopped',
          'Buying a home or reviewing a rental property roofline',
          'After storms, heavy leaf fall, or before winter',
        ],
      },
      {
        title: "What's Included in Every Gutter Inspection",
        content:
          'Every inspection follows the same thorough approach. We tell you what we can see, what it means, and what we would recommend — without sales pressure.',
        bulletPoints: [
          'External assessment of gutters, outlets, and downpipes',
          'Checks on joints, brackets, fall, and visible damage',
          'Clear explanation of findings on site or by phone',
          'Photo report of key issues where access allows',
          'No-obligation quote for cleaning or repairs if needed',
          'Typical domestic inspection completed in 20–40 minutes',
        ],
      },
      {
        title: 'Our Gutter Inspection Process',
        content:
          'We keep inspections straightforward. The goal is clarity — so you know whether your gutters are fine, need a clean, or require repair work.',
        bulletPoints: [
          'Confirm property access and which rooflines are included',
          'Walk the gutter run and check downpipe outlets',
          'Note blockages, joint failures, bracket issues, or misalignment',
          'Photograph significant findings for your records',
          'Explain recommended next steps with transparent pricing if work is needed',
          'Leave you with a clear yes/no on urgency — no hard sell',
        ],
      },
      {
        title: 'Gutter Inspection & Related Services',
        content:
          'Many customers book a gutter inspection before cleaning, after spotting a leak, or alongside roof and fascia work. WOW Gutters Ltd can handle the full roofline in one visit where needed.',
        image: '/professional-gutter-clean.png',
        imagePosition: 'left',
        bulletPoints: [
          'Gutter cleaning — clear debris found during inspection',
          'Gutter repairs — fix joints and brackets identified on the visit',
          'Roof cleaning — reduce moss falling back into gutters',
          'Exterior UPVC cleaning — fascias and soffits below the gutter line',
          'Roof inspection — separate check for tile and flashing condition',
          'Gutter installation — when replacement is more economical than repair',
        ],
      },
    ],
    ctaSection: {
      title: 'Book Your Free Gutter Inspection',
      description:
        'Free gutter inspection with honest advice and no obligation. Same-day slots where available. Call 07421 433910 or request a booking online.',
      phone: '07421 433910',
      buttonText: 'Book Free Inspection',
    },
  },
  {
    id: 'roof-inspection',
    name: 'Roof Inspection',
    icon: '🏠',
    heroImage: '/roof-cleaning.JPG',
    heroVideo: '/roof-cleaning-video.mp4',
    heroTitle: 'Free Roof Inspection',
    heroDescription:
      'Free roof inspection for tiles, ridges, flashing, valleys, and moss across Birmingham and the West Midlands. Clear photos, honest advice, and no obligation — catch problems before leaks and costly damage.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Roof Inspection?',
        content:
          'WOW Gutters Ltd roof inspections focus on early warning signs — moss loading, slipped tiles, flashing defects, and valley issues — before water gets into the property. We explain findings clearly, provide photos where useful, and advise whether cleaning, repair, or monitoring is appropriate.',
        image: '/roof-cleaning.JPG',
        imagePosition: 'right',
        bulletPoints: [
          'Free roof inspection with no obligation to book further work',
          'Tile, ridge, flashing, and valley checks from safe access',
          'Moss and algae assessment with gutter impact explained',
          'Photo documentation of areas of concern',
          'Fully insured with £10 million public liability cover',
          'Ideal for homeowners, landlords, and pre-purchase peace of mind',
        ],
      },
      {
        title: 'What We Inspect',
        content:
          'Our roof inspection covers the main visible roof elements that affect weatherproofing and how much debris reaches your gutters.',
        bulletPoints: [
          'Roof tiles, slates, and ridge line condition',
          'Flashing around chimneys, abutments, and roof joins',
          'Valleys and areas where debris and moss collect',
          'Moss, algae, and lichen coverage on slopes',
          'Signs of slipped, cracked, or damaged tiles',
          'Gutter and fascia interface where roof water discharges',
        ],
      },
      {
        title: 'Signs Your Roof Needs Inspection',
        content:
          'Roof problems often start small. A free inspection helps you decide whether you need roof cleaning, local repairs, or simply to keep monitoring — before damp or tile damage escalates.',
        bulletPoints: [
          'Visible moss or algae on roof slopes or ridges',
          'Gutters filling quickly after a recent clean',
          'Slipped or missing tiles seen from the ground',
          'Damp patches or staining on upper walls or ceilings',
          'Buying a property or reviewing a rental roof condition',
          'After storms, high winds, or fallen branches nearby',
        ],
      },
      {
        title: "What's Included in Every Roof Inspection",
        content:
          'Each roof inspection is structured to give you useful information — not a vague “looks fine” with no detail.',
        bulletPoints: [
          'External roof survey from safe vantage points',
          'Assessment of tiles, ridges, valleys, and flashing',
          'Moss and debris risk noted with gutter impact explained',
          'Clear verbal summary and photo evidence where needed',
          'No-obligation quote for cleaning or repairs if recommended',
          'Typical domestic roof inspection completed in 30–45 minutes',
        ],
      },
      {
        title: 'Our Roof Inspection Process',
        content:
          'We inspect methodically and report honestly. If the roof only needs monitoring, we will say so — if moss or tile issues need action, you will know why.',
        bulletPoints: [
          'Confirm which roof slopes and features are included',
          'Inspect tiles, ridges, valleys, and flashing from safe access',
          'Note moss coverage, debris traps, and visible defects',
          'Check how roof condition may affect gutters and fascias',
          'Photograph significant findings for your records',
          'Recommend roof cleaning, repairs, or gutter work if appropriate',
        ],
      },
      {
        title: 'Roof Inspection & Related Services',
        content:
          'Roof condition and gutter performance are closely linked. WOW Gutters Ltd can inspect the roof and clear or repair the gutters in one coordinated visit.',
        image: '/roof-cleaning-before-after.jpeg',
        imagePosition: 'left',
        bulletPoints: [
          'Roof cleaning — treat moss that feeds gutter blockages',
          'Gutter cleaning — clear debris after roof moss is disturbed',
          'Gutter inspection — check drainage while reviewing the roof',
          'Gutter repairs — fix outlets and joints found during the visit',
          'Exterior UPVC cleaning — fascias below moss-heavy roof edges',
          'Commercial roof cleaning — larger sites and industrial roofs',
        ],
      },
    ],
    ctaSection: {
      title: 'Book Your Free Roof Inspection',
      description:
        'Free roof inspection with photos and honest advice. No obligation. Call 07421 433910 or book online.',
      phone: '07421 433910',
      buttonText: 'Book Free Inspection',
    },
  },
  {
    id: 'conservatory',
    name: 'Conservatory Cleaning',
    icon: '🪟',
    heroImage: '/upvc-cleaning.jpg',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Conservatory Cleaning',
    heroDescription:
      'Specialist conservatory cleaning across Birmingham and the West Midlands — safe gutter clearing, roof panel treatment, and UPVC frame cleaning without climbing on glass or polycarbonate. Low-reach tools, hot wash options, and honest advice on leaks and maintenance.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Conservatory Cleaning?',
        content:
          'WOW Gutters Ltd understands conservatories need a gentler approach than standard house gutters. We clean conservatory gutters, roof panels, and UPVC frameworks using low-reach equipment — no ladders on the structure, no high-pressure damage to polycarbonate or glass. Many customers combine conservatory cleaning with house gutter cleaning or fascia work in one visit.',
        image: '/upvc-cleaning.jpg',
        imagePosition: 'right',
        bulletPoints: [
          'Low-reach conservatory gutter cleaning — no weight on the roof structure',
          'Safe treatment for glass, polycarbonate, and UPVC conservatory roofs',
          'Gutter clearing between house and conservatory rooflines',
          'Hot wash options for algae on frames, fascias, and roof panels',
          'Fully insured with £10 million public liability cover',
          'Honest advice on leaks, seals, and when replacement is needed',
        ],
      },
      {
        title: 'What We Clean',
        content:
          'Our conservatory cleaning service covers the full structure — from narrow gutter channels to green roof panels and stained UPVC frames.',
        bulletPoints: [
          'Conservatory gutters and box gutters along the house join',
          'Gutters above conservatory roofs and dwarf walls',
          'Glass and polycarbonate conservatory roof panels',
          'UPVC frames, cappings, and finials',
          'Conservatory fascias, soffits, and external trims',
          'Downpipes serving the conservatory roofline',
        ],
      },
      {
        title: 'Signs Your Conservatory Needs Cleaning',
        content:
          'Algae and blocked conservatory gutters develop quickly on north-facing extensions and under tree cover. Cleaning early keeps the room brighter, reduces leaks, and protects seals before moisture causes bigger problems.',
        bulletPoints: [
          'Green algae or moss on conservatory roof panels blocking light',
          'Overflow or staining where the house meets the conservatory',
          'Blocked narrow gutters with leaves, moss, or rooted plants',
          'Black streaks on UPVC frames, cappings, or finials',
          'Condensation or damp smells after heavy rain',
          'Preparing a property for sale or end-of-tenancy presentation',
        ],
      },
      {
        title: "What's Included in Every Conservatory Clean",
        content:
          'Every conservatory visit starts with a quick assessment of access, panel type, and how heavy the growth is. We explain what we will do, agree the price, and leave the structure cleaner — not just briefly rinsed.',
        bulletPoints: [
          'Assessment of conservatory type, access, and gutter condition',
          'Debris removal from conservatory gutters and outlets',
          'Algae treatment on roof panels and frames where agreed',
          'Purified-water or hot wash finish on UPVC where appropriate',
          'Downpipe checks and flow advice if blockages are found',
          'Before and after photos on request',
        ],
      },
      {
        title: 'Our Conservatory Cleaning Process',
        content:
          'We match the method to your conservatory materials. The goal is a brighter, healthier structure — without the damage risk of pressure washing on brittle panels or climbing on the roof.',
        bulletPoints: [
          'Confirm panel type — glass, polycarbonate, or solid roof sections',
          'Set up low-reach tools and protect borders, paths, and planting',
          'Clear conservatory gutters and check joints near the house wall',
          'Apply appropriate cleaning method to roof panels and UPVC frames',
          'Rinse and inspect seals, outlets, and drainage paths',
          'Most domestic conservatory cleans completed in 1–3 hours',
        ],
      },
      {
        title: 'Conservatory Cleaning & Related Services',
        content:
          'Conservatory gutters often block faster than house gutters because the channels are smaller and roof moss washes straight in. WOW Gutters Ltd can clean the conservatory, clear the main house gutters, and refresh fascias in one coordinated visit.',
        image: '/gutter-cleaning-westmidlands.png',
        imagePosition: 'left',
        bulletPoints: [
          'Gutter cleaning — clear house gutters that feed the conservatory',
          'Gutter repairs — fix leaking joints at the house-to-conservatory join',
          'Exterior UPVC cleaning — fascias and soffits along the extension',
          'Hot wash cleaning — algae on frames and north-facing panels',
          'Roof cleaning — reduce moss falling into conservatory gutters',
          'Gutter inspection — check the full roofline before winter',
        ],
      },
    ],
    ctaSection: {
      title: 'Book Your Conservatory Clean Today',
      description:
        'Get a free, no-obligation quote for conservatory cleaning, gutter clearing, and frame restoration. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote',
    },
  },
  {
    id: 'water-butt',
    name: 'Water Butt Installation',
    icon: '💧',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920',
    heroTitle: 'Water Butt Installation',
    heroDescription: 'Professional water butt installation to help you save water and reduce bills.',
    sections: [
      {
        title: 'Benefits of Water Butts',
        content: 'Water butts provide many advantages:',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
        imagePosition: 'right',
        bulletPoints: [
          'Save money on water bills',
          'Eco-friendly solution',
          'Perfect for garden watering',
          'Professional installation'
        ]
      }
    ],
    ctaSection: {
      title: 'WATER BUTT INSTALLATION',
      description: 'Save water and money with our installation service.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
  },
  // {
  //   id: 'drain-cleaning',
  //   name: 'Drain Cleaning',
  //   icon: '⚫',
  //   heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920',
  //   heroTitle: 'Professional Drain Cleaning',
  //   heroDescription: 'Expert drain cleaning and unblocking services for residential and commercial properties.',
  //   sections: [
  //     {
  //       title: 'Drain Cleaning Services',
  //       content: 'We handle all types of drain issues:',
  //       image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
  //       imagePosition: 'left',
  //       bulletPoints: [
  //         'Blocked drain clearing',
  //         'High-pressure jetting',
  //         'CCTV drain surveys',
  //         'Preventive maintenance'
  //       ]
  //     }
  //   ],
  //   ctaSection: {
  //     title: 'DRAIN CLEANING EXPERTS',
  //     description: 'Fast and effective drain cleaning services.',
  //     phone: '07421 433910',
  //     buttonText: 'Get A Quote'
  //   }
  // },
  {
    id: 'commercial-gutter-cleaning',
    name: 'Commercial Gutter Cleaning',
    icon: '🏢',
    heroImage: '/gutter-cleaning-westmidlands.png',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Commercial Gutter Cleaning',
    heroDescription:
      'Professional commercial gutter cleaning for offices, warehouses, schools, retail units, and industrial estates across Birmingham and the West Midlands. Planned maintenance contracts, out-of-hours slots, high-reach vacuum access, and full photographic documentation.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Commercial Gutter Cleaning?',
        content:
          'WOW Gutters Ltd delivers commercial gutter cleaning that fits around your operations — not the other way around. We clear gutters on warehouses, offices, schools, and retail parks using ground-level vacuum systems and safe access methods where height requires it. Every visit includes downpipe testing, defect notes, and before and after photos for your maintenance records.',
        image: '/files/17_aerial_warehouse_roof_overview.jpg',
        imagePosition: 'right',
        bulletPoints: [
          'Commercial gutter cleaning for warehouses, offices, schools, and retail',
          'High-reach vacuum access — up to 4 storeys from ground level where possible',
          'Out-of-hours and weekend appointments to minimise disruption',
          'Planned maintenance contracts with scheduled gutter clearing',
          'Before and after photos plus notes on joints, brackets, and defects',
          'Fully insured with £10 million public liability cover',
        ],
      },
      {
        title: 'What We Cover',
        content:
          'Our commercial gutter cleaning team works across property types and rooflines common in Birmingham and the wider West Midlands — from single-storey retail units to multi-elevation warehouse complexes.',
        bulletPoints: [
          'Warehouses, distribution centres, and industrial units',
          'Office buildings, business parks, and managed estates',
          'Schools, colleges, and public-sector buildings',
          'Retail units, shopping parades, and hospitality venues',
          'Flats and apartment blocks with shared rooflines',
          'Sites with restricted access, tree cover, or canalside elevations',
        ],
      },
      {
        title: 'Signs Your Commercial Gutters Need Cleaning',
        content:
          'Blocked commercial gutters cause overflow staining, internal damp, and insurance headaches. On larger buildings, small blockages at one outlet can back up long gutter runs — regular clearing is far cheaper than emergency repairs.',
        bulletPoints: [
          'Overflow during rainfall or staining on cladding and brickwork',
          'Standing water visible in gutter channels from ground level',
          'Plants, moss, or silt building up along warehouse roof edges',
          'Downpipes not flowing when tested after dry weather',
          'Maintenance audits or insurance inspections due',
          'After storms, autumn leaf fall, or adjacent tree work',
        ],
      },
      {
        title: "What's Included in Every Commercial Gutter Clean",
        content:
          'Every commercial gutter cleaning visit follows a documented process suited to site records, facilities managers, and planned maintenance schedules.',
        bulletPoints: [
          'Full gutter vacuum clear along agreed rooflines and elevations',
          'Downpipe clearing and flow confirmation where accessible',
          'Before and after photography of each gutter run',
          'Notes on structural defects, loose brackets, or failing joints',
          'Waste removed from site — nothing left on car parks or yards',
          'Quote for repairs or increased frequency if problems are found',
        ],
      },
      {
        title: 'Our Commercial Gutter Cleaning Process',
        content:
          'We assess access, height, and risk before work starts — then complete the clear efficiently with the right equipment for your building type.',
        bulletPoints: [
          'Site evaluation — access routes, height, and safety requirements',
          'Agree scope, timing, and any out-of-hours constraints',
          'Set up ground-level vacuum or approved access equipment',
          'Clear gutters, outlets, and downpipes along the agreed runs',
          'Test flow, photograph results, and note defects observed',
          'Provide documentation for your maintenance or compliance records',
        ],
      },
      {
        title: 'Commercial Gutter Cleaning & Related Services',
        content:
          'Many commercial sites need more than gutter clearing alone. WOW Gutters Ltd can combine commercial gutter cleaning with roof treatment, fascia cleaning, and repairs in one coordinated programme.',
        image: '/files/16_gutter_cleared_clean_result.jpg',
        imagePosition: 'left',
        bulletPoints: [
          'Commercial roof cleaning — treat moss that refills gutters quickly',
          'Residential gutter cleaning — for managed housing portfolios',
          'Gutter repairs — joints, brackets, and outlets found during clearing',
          'Gutter inspection — document roofline condition for audits',
          'Exterior UPVC cleaning — fascias and cladding below the gutter line',
          'Hot wash cleaning — algae on north-facing elevations',
        ],
      },
    ],
    ctaSection: {
      title: 'Request Your Commercial Gutter Quote',
      description:
        'Free site evaluation and clear pricing for commercial gutter cleaning and maintenance contracts. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote',
    },
  },
  {
    id: 'commercial-roof-cleaning',
    name: 'Commercial Roof Cleaning',
    icon: '🏢',
    heroImage: '/roof-cleaning.JPG',
    heroVideo: '/roof-cleaning-video.mp4',
    heroTitle: 'Commercial Roof Cleaning',
    heroDescription:
      'Commercial roof cleaning and moss removal for warehouses, offices, and industrial buildings across Birmingham and the West Midlands. Low-pressure soft wash methods, biocide treatment, maintenance contracts, and fully insured teams.',
    sections: [
      {
        title: 'Why Choose WOW Gutters Ltd for Commercial Roof Cleaning?',
        content:
          'WOW Gutters Ltd treats commercial roof cleaning as asset protection — not aggressive jet washing that damages membranes, dislodges fixings, or forces water into the building. We remove moss and algae carefully, apply treatment to slow regrowth, and coordinate with gutter clearing so debris does not block drainage straight after the roof is treated.',
        image: '/files/18_aerial_moss_patches_roof.jpg',
        imagePosition: 'right',
        bulletPoints: [
          'Soft-wash commercial roof cleaning — suited to UK warehouse and office roofs',
          'Moss, algae, and lichen treatment on pitched and flat roofs',
          'Biocide application to help slow regrowth on large roof areas',
          'Maintenance contracts for estates and multi-building portfolios',
          'Fully insured with £10 million public liability cover',
          'Coordinated gutter clearing after roof moss removal',
        ],
      },
      {
        title: 'What We Treat',
        content:
          'Our commercial roof cleaning service covers the main roof surfaces and problem areas that cause moss buildup, blocked gutters, and staining on typical UK commercial buildings.',
        bulletPoints: [
          'Warehouse and industrial corrugated and profiled roofs',
          'Office and retail unit pitched tile and membrane roofs',
          'Moss and algae on large flat roof sections where agreed',
          'North-facing and shaded elevations with heavy organic growth',
          'Roof edges where moss sheds into commercial gutter runs',
          'Cladding and fascia interfaces below moss-heavy rooflines',
        ],
      },
      {
        title: 'Signs Your Commercial Roof Needs Cleaning',
        content:
          'Moss holds moisture against roof surfaces and sheds into gutters after rain. On commercial buildings, that often means repeated gutter blockages, overflow staining on cladding, and preventable maintenance call-outs.',
        bulletPoints: [
          'Visible moss or algae across warehouse or office roof slopes',
          'Commercial gutters refilling soon after a recent clear',
          'Dark staining or organic growth visible from ground level',
          'Blocked valleys or debris traps on multi-elevation roofs',
          'Insurance or facilities audits flagging roof condition',
          'Preparing a unit for lease, sale, or tenant handover',
        ],
      },
      {
        title: "What's Included in Every Commercial Roof Clean",
        content:
          'Every commercial roof cleaning visit starts with a sensible assessment of access, roof type, and coverage. We explain the method, agree scope and price, and leave the roof treated — with documentation for your records.',
        bulletPoints: [
          'Roof survey from safe access points before work starts',
          'Low-pressure soft wash to lift moss and organic growth',
          'Careful clearance of loosened debris from the roof surface',
          'Biocide treatment where appropriate for longer-lasting results',
          'Advice on gutter clearing if moss debris is entering channels',
          'Before and after photos on request for maintenance files',
        ],
      },
      {
        title: 'Our Commercial Roof Cleaning Process',
        content:
          'We match the method to your roof type, building use, and access constraints. The goal is a cleaner, healthier roof surface without unnecessary downtime or damage risk.',
        bulletPoints: [
          'Assess roof type, pitch, access, and moss coverage',
          'Agree timing, safety plan, and any operational restrictions',
          'Set up safe access and protect yards, plant, and pedestrian routes',
          'Apply soft wash solution and remove loosened moss evenly',
          'Apply biocide treatment where agreed for slower regrowth',
          'Coordinate gutter clearing on the same visit where scheduled',
        ],
      },
      {
        title: 'Commercial Roof Cleaning & Related Services',
        content:
          'Roof moss is one of the main reasons commercial gutters block again soon after clearing. WOW Gutters Ltd can treat the roof and clear the gutters in one visit — plus fascia cleaning, inspections, and repairs where needed.',
        image: '/roof-cleaning-before-after.jpeg',
        imagePosition: 'left',
        bulletPoints: [
          'Commercial gutter cleaning — clear moss and silt after roof treatment',
          'Residential roof cleaning — for mixed portfolios and housing stock',
          'Gutter inspection — check drainage once moss is removed',
          'Gutter repairs — fix outlets and joints found during roofline work',
          'Exterior UPVC cleaning — fascias and cladding below the roof edge',
          'Roof inspection — separate service for structural checks',
        ],
      },
    ],
    ctaSection: {
      title: 'Request Your Commercial Roof Quote',
      description:
        'Free site evaluation and clear pricing for commercial roof cleaning and maintenance programmes. Call 07421 433910 or request a quote online.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote',
    },
  },
  {
    id: 'gutter-installation',
    name: 'Gutter Installation',
    icon: '🔩',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920',
    heroTitle: 'Professional Gutter Installation',
    heroDescription: 'New uPVC gutter and downpipe systems measured, supplied and fitted by WOW Gutters Ltd. Quality materials, professional finish, 10-year warranty on parts.',
    sections: [
      {
        title: 'Why Replace Your Gutters?',
        content: 'Old or damaged gutters can cause serious water damage to your property. Signs you need new gutters include:',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        imagePosition: 'left',
        bulletPoints: [
          'Persistent leaks that repairs cannot fix',
          'Gutters pulling away from the fascia',
          'Visible cracks, splits or rust',
          'Gutters more than 20 years old'
        ]
      },
      {
        title: 'What\'s Included in Our Installation',
        content: 'Every WOW Gutters Ltd installation includes:',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
        imagePosition: 'right',
        bulletPoints: [
          'Free survey and fixed quote before work starts',
          'Quality uPVC gutters and downpipes',
          'Professional fitting with correct fall angles',
          'Old gutter removal and disposal',
          '10-year manufacturer warranty on parts',
          'Before and after photos'
        ]
      }
    ],
    ctaSection: {
      title: 'GET A FREE INSTALLATION QUOTE',
      description: 'Tell us your property type and postcode — we\'ll survey your gutters and give you a fixed price with no hidden extras. Installations from £300.',
      phone: '07421 433910',
      buttonText: 'Get A Free Quote'
    }
  }
];

/** Combined commercial landing at /commercial/ */
export const commercialCombinedService: ServiceDetail = {
  id: 'commercial',
  name: 'Commercial Gutter Cleaning',
  icon: '🏢',
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
  heroVideo: '/dome-cleaning-video.mp4',
  heroTitle: 'Commercial Gutter Services',
  heroDescription:
    'Professional gutter cleaning and maintenance for commercial properties, offices, and industrial buildings.',
  sections: [
    {
      title: 'Commercial Solutions',
      content: 'Tailored services for commercial properties:',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      imagePosition: 'right',
      bulletPoints: [
        'Scheduled maintenance programs',
        'Large-scale cleaning',
        'Minimal disruption',
        'Competitive rates',
      ],
    },
  ],
  ctaSection: {
    title: 'COMMERCIAL SERVICES',
    description: 'Professional gutter services for commercial properties.',
    phone: '07421 433910',
    buttonText: 'Get A Quote',
  },
};

export function getServiceById(id: string): ServiceDetail | undefined {
  if (id === 'commercial') {
    return commercialCombinedService;
  }
  return servicesData.find((service) => service.id === id);
}

