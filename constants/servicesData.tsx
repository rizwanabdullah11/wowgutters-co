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
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920',
    heroVideo: '/roof-cleaning-video.mp4',
    heroTitle: 'Professional Roof Cleaning',
    heroDescription: 'Expert roof cleaning services including moss removal, algae treatment, and roof washing to protect and maintain your roof.',
    sections: [
      {
        title: 'Why Clean Your Roof?',
        content: 'Regular roof cleaning provides many benefits:',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
        imagePosition: 'left',
        bulletPoints: [
          'Prevents moss and algae damage',
          'Extends roof lifespan',
          'Improves property appearance',
          'Maintains property value'
        ]
      }
    ],
    ctaSection: {
      title: 'ROOF CLEANING EXPERTS',
      description: 'Protect your roof with our professional cleaning service.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
  },
  {
    id: 'gutter-inspection',
    name: 'Gutter Inspection',
    icon: '🔍',
    heroImage: '/gutter-inspection.png',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Free Gutter Inspection',
    heroDescription: 'Comprehensive gutter inspection to identify blockages, leaks and damage before they become expensive problems.',
    sections: [
      {
        title: 'What We Inspect',
        content: 'Our thorough gutter inspection includes:',
        image: '/gutter-inspection.png',
        imagePosition: 'right',
        bulletPoints: [
          'Gutter condition and alignment',
          'Downpipe flow and blockages',
          'Joints, seals and brackets',
          'Detailed photo report'
        ]
      }
    ],
    ctaSection: {
      title: 'FREE GUTTER INSPECTION',
      description: 'Get peace of mind with our professional gutter inspection service.',
      phone: '07421 433910',
      buttonText: 'Book Free Inspection'
    }
  },
  {
    id: 'roof-inspection',
    name: 'Roof Inspection',
    icon: '🏠',
    heroImage: '/Roof-Cleaner.webp',
    heroVideo: '/roof-cleaning-video.mp4',
    heroTitle: 'Free Roof Inspection',
    heroDescription: 'Professional roof inspection to identify tile damage, moss, flashing issues and early leak risks.',
    sections: [
      {
        title: 'What We Inspect',
        content: 'Our thorough roof inspection includes:',
        image: '/Roof-Cleaner.webp',
        imagePosition: 'right',
        bulletPoints: [
          'Roof tiles and ridge condition',
          'Flashing and valley seals',
          'Moss and algae assessment',
          'Detailed photo report'
        ]
      }
    ],
    ctaSection: {
      title: 'FREE ROOF INSPECTION',
      description: 'Get peace of mind with our professional roof inspection service.',
      phone: '07421 433910',
      buttonText: 'Book Free Inspection'
    }
  },
  {
    id: 'conservatory',
    name: 'Conservatory Gutter Replacement',
    icon: '🔨',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Conservatory Gutter Services',
    heroDescription: 'Specialist conservatory gutter replacement and maintenance services.',
    sections: [
      {
        title: 'Conservatory Specialists',
        content: 'We provide complete conservatory gutter solutions:',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
        imagePosition: 'left',
        bulletPoints: [
          'Full gutter replacement',
          'Repair and maintenance',
          'Custom solutions',
          'Quality materials'
        ]
      }
    ],
    ctaSection: {
      title: 'CONSERVATORY EXPERTS',
      description: 'Specialist conservatory gutter services.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
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
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    heroVideo: '/gutter-cleaning-video.mp4',
    heroTitle: 'Commercial Gutter Cleaning',
    heroDescription: 'Professional commercial gutter cleaning for offices, warehouses, schools and retail units. Flexible scheduling and maintenance contracts.',
    sections: [
      {
        title: 'Commercial Gutter Solutions',
        content: 'Tailored gutter cleaning for commercial properties:',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        imagePosition: 'right',
        bulletPoints: [
          'Scheduled maintenance programs',
          'High-reach vacuum — up to 4 storeys',
          'Out-of-hours appointments',
          'Full photographic documentation'
        ]
      }
    ],
    ctaSection: {
      title: 'COMMERCIAL GUTTER CLEANING',
      description: 'Professional gutter cleaning for commercial properties across Birmingham and the West Midlands.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
  },
  {
    id: 'commercial-roof-cleaning',
    name: 'Commercial Roof Cleaning',
    icon: '🏠',
    heroImage: '/roof-cleaning.JPG',
    heroVideo: '/roof-cleaning-video.mp4',
    heroTitle: 'Commercial Roof Cleaning',
    heroDescription: 'Commercial roof cleaning and moss removal for warehouses, offices and industrial buildings. Safe soft-wash methods, fully insured.',
    sections: [
      {
        title: 'Commercial Roof Solutions',
        content: 'Specialist roof cleaning for business premises:',
        image: '/roof-cleaning.JPG',
        imagePosition: 'right',
        bulletPoints: [
          'Moss, algae and lichen treatment',
          'Soft-wash — no tile damage',
          'Flat and pitched roof experience',
          'Maintenance contracts available'
        ]
      }
    ],
    ctaSection: {
      title: 'COMMERCIAL ROOF CLEANING',
      description: 'Protect your commercial roof with professional cleaning across Birmingham and the West Midlands.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
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

