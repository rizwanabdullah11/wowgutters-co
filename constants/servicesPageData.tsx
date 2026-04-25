import { Camera, FileText, Clock, CheckCircle, Droplets, Zap, Shield, Wrench, Award, Sparkles, ThermometerSun } from 'lucide-react';

export interface ServicePageData {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  processTitle: string;
  processSteps: Array<{
    icon: any;
    title: string;
    description: string;
  }>;
  benefitsTitle: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  benefitsImage: string;
  benefitsImageAlt: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export const servicesData: ServicePageData[] = [
  {
    slug: 'inspect',
    metadata: {
      title: 'Free Gutter Inspection | WOW Gutter Cleaning',
      description: 'Book a free gutter inspection from our trained experts anywhere in the UK. We check your roof and gutters for leaks, blockages and damage so you can prevent costly repairs before they start.',
      keywords: 'free gutter inspection, gutter check, roof and gutter inspection UK, gutter survey, gutter assessment, gutter cleaning and repair',
    },
    heroTitle: 'Free Gutter Inspection',
    heroSubtitle: 'Quick, honest roof and gutter checks from trained UK experts – no obligation, just peace of mind.',
    heroButtonText: 'Book Your Free Gutter Check',
    processTitle: 'Who Is Our Free Gutter Check For?',
    processSteps: [
      {
        icon: CheckCircle,
        title: 'Existing Homeowners',
        description: 'Protect your biggest investment by catching small gutter issues before they turn into damp, leaks or costly structural damage.'
      },
      {
        icon: Camera,
        title: 'Landlords & Lettings',
        description: 'Get a clear, independent view of your tenants’ gutters and roofline so problems are spotted early and budgets stay under control.'
      },
      {
        icon: FileText,
        title: 'New Home Buyers',
        description: 'Give your survey a second pair of eyes with a focused roof and gutter check before the first big UK rainstorm arrives.'
      },
      {
        icon: Clock,
        title: 'Busy Households',
        description: 'If you never get round to checking your gutters, our fast 15–30 minute visit tells you exactly what needs attention, if anything.'
      }
    ],
    benefitsTitle: 'Why Book a Free Gutter Inspection?',
    benefits: [
      {
        title: 'Prevent Costly Repairs',
        description: 'Blocked or leaking gutters can lead to damp walls, rotten fascias and foundation damage. A simple check now can save thousands later.'
      },
      {
        title: 'Honest, Expert Advice',
        description: 'Your gutters are checked by trained specialists who explain what they find in plain English, with clear photos where needed.'
      },
      {
        title: 'Full Roofline Check',
        description: 'We look at gutters, downpipes, joints and roof drainage so you get a complete picture of how well your property is coping with the UK weather.'
      },
      {
        title: 'No Obligation',
        description: 'If everything looks fine, we simply let you know – no pressure, no hard sell. If work is needed, we provide a clear, no‑obligation quote.'
      }
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800',
    benefitsImageAlt: 'Gutter inspection on a UK-style house',
    ctaTitle: 'Book Your Free Gutter Check Today',
    ctaDescription: 'Fill in your details and one of our local gutter experts will arrange a convenient time to check your gutters and roofline – completely free and with no obligation.',
    ctaButtonText: 'Book Free Gutter Inspection'
  },
  {
    slug: 'unblock',
    metadata: {
      title: 'Professional Gutter Unblocking Services | WOW Gutter Cleaning',
      description: 'Expert gutter unblocking and cleaning services using powerful professional equipment. Fast, efficient removal of blockages, leaves, and debris from your gutters.',
      keywords: 'gutter unblocking, gutter cleaning, blocked gutters, gutter clearance, professional gutter cleaning, remove blockages',
    },
    heroTitle: 'Professional Gutter Unblocking Services',
    heroSubtitle: 'Powerful equipment and expert techniques to clear any blockage',
    heroButtonText: 'Get Unblocking Service Now',
    processTitle: 'Our Unblocking Process',
    processSteps: [
      {
        icon: Droplets,
        title: 'Powerful Vacuum',
        description: 'Industrial-strength vacuum systems remove all debris'
      },
      {
        icon: Zap,
        title: 'High-Pressure Flush',
        description: 'Thorough flushing ensures complete clearance'
      },
      {
        icon: Shield,
        title: 'Safe Methods',
        description: 'No damage to your gutters or property'
      },
      {
        icon: CheckCircle,
        title: 'Quality Check',
        description: 'Final inspection to ensure perfect flow'
      }
    ],
    benefitsTitle: 'Why Our Unblocking Service?',
    benefits: [
      {
        title: 'Professional Equipment',
        description: 'State-of-the-art vacuum and cleaning systems'
      },
      {
        title: 'Trained Experts',
        description: 'Fully qualified and experienced technicians'
      },
      {
        title: 'Fast Service',
        description: 'Most blockages cleared in under 2 hours'
      },
      {
        title: 'Competitive Pricing',
        description: 'Affordable rates that beat competitors'
      }
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    benefitsImageAlt: 'Professional Gutter Unblocking',
    ctaTitle: 'Don\'t Let Blocked Gutters Cause Damage',
    ctaDescription: 'Get professional unblocking service today and protect your property',
    ctaButtonText: 'Book Unblocking Service'
  },
  {
    slug: 'repair',
    metadata: {
      title: 'Guaranteed Gutter Repair Services | WOW Gutter Cleaning',
      description: 'Expert gutter repair services with guaranteed workmanship. Our trained professionals fix leaks, replace damaged sections, and restore your gutter system to perfect condition.',
      keywords: 'gutter repair, gutter fixing, leak repair, gutter replacement, fascia repair, downpipe repair, guaranteed repairs',
    },
    heroTitle: 'Guaranteed Gutter Repair Services',
    heroSubtitle: 'Expert repairs by trained professionals with quality guarantee',
    heroButtonText: 'Request Repair Quote',
    processTitle: 'Repair Services We Offer',
    processSteps: [
      {
        icon: Wrench,
        title: 'Leak Repairs',
        description: 'Fix leaking joints and damaged sections permanently'
      },
      {
        icon: CheckCircle,
        title: 'Section Replacement',
        description: 'Replace damaged gutter sections with quality materials'
      },
      {
        icon: Award,
        title: 'Fascia Repairs',
        description: 'Fix damaged fascia boards and brackets'
      },
      {
        icon: Clock,
        title: 'Downpipe Repairs',
        description: 'Repair or replace damaged downpipes and fittings'
      }
    ],
    benefitsTitle: 'Why Choose Our Repair Service?',
    benefits: [
      {
        title: 'Guaranteed Workmanship',
        description: 'All repairs come with our quality guarantee'
      },
      {
        title: 'Trained Experts',
        description: 'Fully qualified technicians with years of experience'
      },
      {
        title: 'Quality Materials',
        description: 'We use only premium materials for lasting repairs'
      },
      {
        title: 'Fair Pricing',
        description: 'Competitive rates with no hidden costs'
      },
      {
        title: 'Fast Response',
        description: 'Quick turnaround to prevent further damage'
      }
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
    benefitsImageAlt: 'Professional Gutter Repair',
    ctaTitle: 'Need Gutter Repairs?',
    ctaDescription: 'Get a free quote from our expert repair team today',
    ctaButtonText: 'Get Free Repair Quote'
  },
  {
    slug: 'clean',
    metadata: {
      title: 'Hot Water Exterior Cleaning Services | WOW Gutter Cleaning',
      description: 'Professional exterior cleaning using HOT, PURIFIED water. Clean windows, conservatories, fascias, and gutters with incredible results. Eco-friendly and effective.',
      keywords: 'hot water cleaning, exterior cleaning, window cleaning, conservatory cleaning, fascia cleaning, purified water cleaning, eco-friendly cleaning',
    },
    heroTitle: 'HOT WASH Exterior Cleaning',
    heroSubtitle: 'Incredible cleaning power using HOT, PURIFIED water',
    heroButtonText: 'Book Cleaning Service',
    processTitle: 'What We Clean',
    processSteps: [
      {
        icon: Sparkles,
        title: 'Windows & Frames',
        description: 'Crystal clear windows with spotless frames'
      },
      {
        icon: Droplets,
        title: 'Gutters & Fascias',
        description: 'Remove years of dirt and grime buildup'
      },
      {
        icon: ThermometerSun,
        title: 'Conservatories',
        description: 'Complete conservatory cleaning inside and out'
      },
      {
        icon: CheckCircle,
        title: 'Cladding & Siding',
        description: 'Restore your exterior to like-new condition'
      }
    ],
    benefitsTitle: 'Why Hot Water Cleaning?',
    benefits: [
      {
        title: 'Superior Cleaning Power',
        description: 'Hot water cuts through grease, grime, and stubborn dirt'
      },
      {
        title: 'Purified Water',
        description: 'Leaves no streaks or spots for perfect results'
      },
      {
        title: 'Eco-Friendly',
        description: 'No harsh chemicals needed, safe for environment'
      },
      {
        title: 'Long-Lasting Results',
        description: 'Surfaces stay cleaner for longer periods'
      },
      {
        title: 'Safe & Effective',
        description: 'Gentle on surfaces but tough on dirt'
      }
    ],
    benefitsImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800',
    benefitsImageAlt: 'Hot Water Cleaning',
    ctaTitle: 'Experience the Hot Water Difference',
    ctaDescription: 'Transform your property with our professional hot water cleaning',
    ctaButtonText: 'Get Your Free Quote'
  }
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData.find(service => service.slug === slug);
}
