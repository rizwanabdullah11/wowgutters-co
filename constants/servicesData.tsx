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
    heroDescription: 'Get our top-rated gutter cleaning maintenance service, at a fantastic price, and completed by trusted gutter installation and maintenance service engineers, trained gutter experts drain unblocking, gutter repairs.',
    sections: [
      {
        title: 'How Often Should Gutters be Cleaned?',
        content: 'The frequency of gutter cleaning depends on several factors, such as:',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
        imagePosition: 'left',
        bulletPoints: [
          'The amount of tree cover around your property',
          'The climate in your area',
          'The slope of your roof'
        ]
      },
      {
        title: 'Why Gutter Cleaning is Important',
        content: 'When gutters are clogged, they can\'t channel water away from your property, which can lead to a range of problems, such as:',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
        imagePosition: 'right',
        bulletPoints: [
          'Water damage to your property\'s foundation, walls, and roof',
          'Pest infestations, such as bugs and rodents',
          'Damage to your gutters due to the weight of debris and standing water'
        ]
      }
    ],
    ctaSection: {
      title: '"GUTTER CLEANING NEAR ME"',
      description: 'Are you searching for "gutter cleaning near me?" WOW has got you covered! Gutters are an important part of any property, protecting your foundation, walls, and roof from water damage.',
      phone: '07421 433910',
      buttonText: 'Get A Quote'
    }
  },
  {
    id: 'gutter-repairs',
    name: 'Gutter Repairs',
    icon: '🔧',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920',
    heroVideo: '/gutter-final-video.mp4',
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
  }
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.id === id);
}

