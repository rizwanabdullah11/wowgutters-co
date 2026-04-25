import Link from 'next/link';
import { colors } from '@/constants/colors';
import { ArrowRight } from 'lucide-react';

const ACCENTS = ['#3B82F6', '#19C58B', '#F97316', '#8B5CF6', '#19C58B', '#3B82F6'];

const gutterServices = [
  {
    title: 'Gutter Cleaning',
    subtitle: 'POWERFUL & EFFECTIVE',
    description:
      'Professional gutter cleaning using high-reach vacuum systems to clear moss, leaves and debris before overflow causes water damage.',
    backContent: {
      features: ['High-reach vacuum system', 'Before & after photos', 'Debris disposal included', 'Same-day book available'],
      price: 'From £45'
    },
    image: '/gutter-cleaning.jpeg',
    link: '/services/gutter-cleaning',
  },
  {
    title: 'Roof Cleaning & Moss Removal',
    subtitle: 'SAFE LOW-PRESSURE METHODS',
    description:
      'Safe roof cleaning and moss removal with controlled treatment methods that protect tiles and restore your roof appearance.',
    backContent: {
      features: ['Soft washing technique', 'Moss treatment', 'Tile protection', 'Long-lasting results'],
      price: 'From £150'
    },
    image: '/roof-cleaning.JPG',
    link: '/services/roof-cleaning',
  },
  {
    title: 'Exterior uPVC Cleaning',
    subtitle: 'HOT PURIFIED WATER',
    description:
      'Exterior uPVC cleaning for fascias, soffits, frames and conservatories using purified water for a bright, streak-free finish.',
    backContent: {
      features: ['Purified water system', 'Streak-free finish', 'Fascias & soffits', 'Conservatory cleaning'],
      price: 'From £60'
    },
    image: '/upvc-cleaning.jpg',
    link: '/services/upvc-cleaning',
  },
  {
    title: 'Free Gutter Inspection',
    subtitle: 'EXPERT CHECK — NO CHARGE',
    description:
      'Book a free roof and gutter inspection to identify leaks, blockages and weak points early, with honest advice and no pressure.',
    backContent: {
      features: ['Camera inspection', 'Detailed report', 'No obligation quote', 'Expert recommendations'],
      price: 'FREE'
    },
    image: '/gutter-inspection.png',
    link: '/services/inspection',
  },
  {
    title: 'Gutter Repairs',
    subtitle: '6-MONTH GUARANTEE',
    description:
      'Fast gutter repairs for leaking joints, broken brackets and sagging sections, completed by trained engineers with stocked vans.',
    backContent: {
      features: ['6-month guarantee', 'Same-day book', 'Quality materials', 'Leak-proof joints'],
      price: 'From £80'
    },
    image: '/gutter-repair.png',
    link: '/services/gutter-repairs',
  },
  {
    title: 'Gutter Installation',
    subtitle: 'QUALITY uPVC SYSTEMS',
    description:
      'New uPVC gutter and downpipe installations measured and fitted for smooth rainwater flow, clean finish and long-term reliability.',
    backContent: {
      features: ['Quality uPVC systems', 'Professional fitting', '10-year warranty', 'Custom measurements'],
      price: 'From £300'
    },
    image: '/gutter-installation.png',
    link: '/services/gutter-cleaning',
  },
];

export default function AreaServicesRange() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            Our Services
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12" style={{ color: colors.text }}>
          Our Range of Gutter Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gutterServices.map((service, i) => (
            <Link
              key={i}
              href={service.link}
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group"
              style={{ borderTop: `3px solid ${ACCENTS[i]}` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-black mb-1" style={{ color: colors.text }}>
                  {service.title}
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: ACCENTS[i] }}>
                  {service.subtitle}
                </p>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: colors.textLight }}>
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-bold"
                  style={{ color: ACCENTS[i] }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
