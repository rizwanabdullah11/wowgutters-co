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
    heroTitle: 'Professional Gutter Cleaning Services',
    heroDescription: 'Expert gutter cleaning across Birmingham and the West Midlands. Ground-level vacuum system, no ladders, up to 4-storey reach. Before & after photos, downpipe clearing included, 1-year guarantee. Same-day booking available.',
    sections: [
      {
        title: 'Why Choose WOW Gutters for Gutter Cleaning?',
        content: 'WOW Gutters uses a professional ground-level vacuum system to clean your gutters safely and thoroughly — no ladders placed against your property, no risk of fascia damage, and no mess left behind. Our high-reach equipment reaches up to 4 storeys, making us the ideal choice for homes, flats, and commercial buildings across Birmingham and the West Midlands.',
        image: '/gutter-cleaning.jpeg',
        imagePosition: 'right',
        bulletPoints: [
          'Ground-level vacuum system — no ladders, no damage to your property',
          'Reaches up to 4 storeys high — suitable for all property types',
          'Before & after photos sent directly to you as proof of work',
          'Downpipe clearing and testing included as standard',
          '1-year service guarantee on all gutter cleaning work',
          'Fully insured with £10 million public liability cover'
        ]
      },
      {
        title: 'What\'s Included in Our Gutter Cleaning Service',
        content: 'Every WOW Gutters cleaning service follows the same professional process, ensuring your gutters are completely clear and functioning properly:',
        image: '/gutter-repair-after.jpeg',
        imagePosition: 'left',
        bulletPoints: [
          'Full gutter vacuum clean — removes all leaves, moss, silt, and debris',
          'Downpipe clearing and flow testing — we flush every downpipe to confirm water flows freely',
          'Before & after photo documentation — visual proof of the work completed',
          'Condition report — we flag any damage, leaks, or repairs needed (honest advice, no pressure)',
          'Gutter inspection — we check brackets, joints, and alignment',
          'Same-day or next-day service available in most areas'
        ]
      },
      {
        title: 'How Often Should Gutters Be Cleaned?',
        content: 'Most UK homes need their gutters cleaned once or twice a year. The ideal frequency depends on your property and surroundings:',
        image: '/blog2.png',
        imagePosition: 'right',
        bulletPoints: [
          'Once a year (autumn) — for properties with minimal tree coverage',
          'Twice a year (spring & autumn) — for properties near trees or with heavy leaf fall',
          'After storms — if you notice overflow or visible debris build-up',
          'Before winter — to prevent freeze-thaw damage and ice formation',
          'Commercial properties — quarterly cleaning recommended for planned maintenance'
        ]
      },
      {
        title: 'Why Regular Gutter Cleaning Matters',
        content: 'Blocked gutters don\'t just overflow — they cause serious, expensive damage to your property. When gutters are clogged, water can\'t drain away properly, leading to:',
        image: '/blog3.png',
        imagePosition: 'left',
        bulletPoints: [
          'Damp and water damage — water runs down external walls, causing staining and penetration',
          'Foundation damage — constant water pooling at the base of walls can cause subsidence',
          'Fascia and soffit rot — standing water in gutters soaks timber behind the gutter line',
          'Internal damp and mould — moisture ingress through walls and around windows',
          'Pest infestations — standing water and debris attract insects, birds, and rodents',
          'Gutter damage — the weight of wet debris can pull brackets loose and crack joints'
        ]
      },
      {
        title: 'Our Ground-Level Vacuum System',
        content: 'Unlike traditional ladder-based gutter cleaning, our high-reach vacuum system allows us to clean your gutters from the ground — safer for our team, safer for your property, and more thorough than hand-scooping debris.',
        image: '/Professional-experience.png',
        imagePosition: 'right',
        bulletPoints: [
          'No ladders against your property — zero risk of fascia damage or wall marks',
          'Reaches up to 4 storeys (approximately 12 metres) — suitable for most UK properties',
          'Camera inspection available — we can show you the inside of your gutters before and after',
          'Works on conservatory gutters — we can reach gutters over extensions and porches',
          'All debris collected — nothing falls on your garden, driveway, or patio',
          'Faster and more efficient — we complete most domestic properties in 30–60 minutes'
        ]
      },
      {
        title: 'Gutter Cleaning Prices',
        content: 'Our gutter cleaning prices are transparent and fixed before we start work — no hidden fees, no surprises on the day. Pricing depends on property size, gutter length, and access:',
        image: '/gutter-cleaning.jpeg',
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
        title: 'Areas We Cover',
        content: 'WOW Gutters provides professional gutter cleaning services across Birmingham, the West Midlands, and Worcestershire. We cover all major towns and cities including:',
        image: '/blog4.png',
        imagePosition: 'right',
        bulletPoints: [
          'Birmingham and all surrounding areas',
          'Solihull, Sutton Coldfield, and Walsall',
          'Wolverhampton, Dudley, and West Bromwich',
          'Coventry and Warwickshire',
          'Worcester, Bromsgrove, and Redditch',
          'Plus many more towns and villages — call us to check if we cover your area'
        ]
      },
      {
        title: 'What Our Customers Say',
        content: 'WOW Gutters is rated 4.9 out of 5 based on over 2,696 verified Google reviews. Our customers consistently praise our professionalism, quality of work, and transparent pricing.',
        image: '/blog5.png',
        imagePosition: 'left',
        bulletPoints: [
          '"Excellent service, arrived on time and did a thorough job. The before and after photos were brilliant." — Mark M., Birmingham',
          '"Highly recommended. Friendly service and the gutters are now flowing perfectly." — Neil G., Birmingham',
          '"Great value for money. No mess, no fuss, and the team were very professional." — Graham B., Sutton Coldfield',
          '"I was impressed by how quickly they worked and how clean they left everything." — Sarah T., Solihull'
        ]
      }
    ],
    ctaSection: {
      title: 'Book Your Gutter Clean Today',
      description: 'Get a free, no-obligation quote in 60 seconds. Same-day and next-day appointments available across Birmingham and the West Midlands. Call us now on 07421 433910 or request a quote online.',
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
    id: 'inspection',
    name: 'Roof & Gutter Inspection',
    icon: '🔍',
    heroImage: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=1920',
    heroVideo: '/gutter-final-video.mp4',
    heroTitle: 'Professional Inspection Services',
    heroDescription: 'Comprehensive roof and gutter inspection to identify issues before they become expensive problems.',
    sections: [
      {
        title: 'What We Inspect',
        content: 'Our thorough inspection includes:',
        image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800',
        imagePosition: 'right',
        bulletPoints: [
          'Gutter condition and alignment',
          'Downspout functionality',
          'Roof condition assessment',
          'Detailed photo report'
        ]
      }
    ],
    ctaSection: {
      title: 'INSPECTION SERVICES',
      description: 'Get peace of mind with our professional inspection service.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
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
    id: 'commercial',
    name: 'Commercial Gutter Cleaning',
    icon: '🏢',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    heroVideo: '/dome-cleaning-video.mp4',
    heroTitle: 'Commercial Gutter Services',
    heroDescription: 'Professional gutter cleaning and maintenance for commercial properties, offices, and industrial buildings.',
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
          'Competitive rates'
        ]
      }
    ],
    ctaSection: {
      title: 'COMMERCIAL SERVICES',
      description: 'Professional gutter services for commercial properties.',
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
    heroDescription: 'New uPVC gutter and downpipe systems measured, supplied and fitted by WOW Gutters. Quality materials, professional finish, 10-year warranty on parts.',
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
        content: 'Every WOW Gutters installation includes:',
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

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.id === id);
}

