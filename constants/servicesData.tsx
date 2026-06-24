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
        title: 'Gutter Cleaning Prices',
        content: 'Our gutter cleaning prices are agreed before we start — no hidden charges on the day. The cost depends on property size, gutter length, and access. See our gutter cleaning prices guide for typical rates, or request a free quote for an exact figure.',
        image: '/gutter-cleaning-after.jpeg',
        imagePosition: 'left',
        bulletPoints: [
          'Terraced houses — from £50',
          'Semi-detached houses — from £60',
          'Detached houses — from £80',
          'Bungalows — from £50',
          'Flats and apartments — from £60 (up to 4 storeys)',
          'Commercial properties — quoted individually based on size and access'
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
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920',
    heroVideo: '/gutter-repair%20(2).mp4',
    heroTitle: 'Professional Gutter Repair Services',
    heroDescription: 'Expert gutter repair services for damaged, leaking, or sagging gutters. Our trained technicians will restore your gutters to perfect working condition.',
    sections: [
      {
        title: 'Common Gutter Problems',
        content: 'We repair all types of gutter issues including:',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        imagePosition: 'left',
        bulletPoints: [
          'Leaking joints and seams',
          'Sagging or pulling away from the house',
          'Damaged or broken sections',
          'Rust and corrosion'
        ]
      }
    ],
    ctaSection: {
      title: 'GUTTER REPAIR EXPERTS',
      description: 'Don\'t let damaged gutters cause water damage to your property. Our expert repair services will fix any gutter problem quickly and efficiently.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
  },
  {
    id: 'upvc-cleaning',
    name: 'Exterior UPVC Cleaning',
    icon: '⭕',
    heroImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920',
    heroVideo: '/exterior-upvc-video.mp4',
    heroTitle: 'UPVC Cleaning Services',
    heroDescription: 'Professional exterior UPVC cleaning for fascias, soffits, and cladding. Restore your property\'s appearance with our specialist cleaning service.',
    sections: [
      {
        title: 'What We Clean',
        content: 'Our UPVC cleaning service covers:',
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
        imagePosition: 'right',
        bulletPoints: [
          'Fascias and soffits',
          'Window frames and sills',
          'Doors and conservatories',
          'UPVC cladding'
        ]
      }
    ],
    ctaSection: {
      title: 'UPVC CLEANING SPECIALISTS',
      description: 'Keep your property looking its best with our professional UPVC cleaning service.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
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

