'use client';

import Link from 'next/link';
import { colors } from '@/constants/colors';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ACCENTS = ['#3B82F6', '#19C58B', '#F97316', '#8B5CF6', '#19C58B', '#3B82F6'];

const gutterServices = [
  {
    title: 'Gutter Cleaning',
    subtitle: 'POWERFUL & EFFECTIVE',
    description:
      'Local gutter cleaning using high-reach vacuum systems to remove leaves, moss and debris before overflow causes damage.',
    backContent: {
      features: ['High-reach vacuum system', 'Debris removal included', 'Downpipe checks', 'Flexible appointments'],
      price: 'From £45'
    },
    image: '/gutter-cleaning.jpeg',
    link: '/services/gutter-cleaning',
  },
  {
    title: 'Roof Cleaning & Moss Removal',
    subtitle: 'SAFE LOW-PRESSURE METHODS',
    description:
      'Safe roof cleaning and moss removal to help protect tiles, improve appearance and reduce blocked gutter problems.',
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
      'Exterior uPVC cleaning for fascias, soffits, frames and conservatories for a brighter, fresher finish.',
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
      'Book a gutter inspection to identify leaks, blockages, loose parts and weak points early, with honest advice.',
    backContent: {
      features: ['Visual inspection', 'Clear advice', 'No obligation quote', 'Expert recommendations'],
      price: 'FREE'
    },
    image: '/gutter-inspection.png',
    link: '/services/inspection',
  },
  {
    title: 'Gutter Repairs',
    subtitle: '6-MONTH GUARANTEE',
    description:
      'Gutter repairs for leaking joints, broken brackets and sagging sections, completed by trained local technicians.',
    backContent: {
      features: ['6-month guarantee', 'Same-day repairs', 'Quality materials', 'Leak-proof joints'],
      price: 'From £80'
    },
    image: '/gutter-repair.png',
    link: '/services/gutter-repairs',
  },
  {
    title: 'Gutter Installation',
    subtitle: 'QUALITY uPVC SYSTEMS',
    description:
      'uPVC gutter and downpipe installations measured and fitted for smooth rainwater flow and a clean finish.',
    backContent: {
      features: ['Quality uPVC systems', 'Professional fitting', '10-year warranty', 'Custom measurements'],
      price: 'From £300'
    },
    image: '/gutter-installation.png',
    link: '/services/gutter-cleaning',
  },
];

export default function GutterServicesRange() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleMouseLeave = (index: number) => {
    // Auto flip back when mouse leaves
    if (flippedCards.includes(index)) {
      setFlippedCards(prev => prev.filter(i => i !== index));
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
          Gutter Services
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12" style={{ color: colors.text }}>
          Full Gutter, Roofline & Exterior Cleaning Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gutterServices.map((service, i) => (
            <div
              key={i}
              className="flip-card-container"
              style={{ perspective: '1000px', height: '480px' }}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <div
                className={`flip-card ${flippedCards.includes(i) ? 'flipped' : ''}`}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.4s',
                  transformStyle: 'preserve-3d',
                  transform: flippedCards.includes(i) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of card */}
                <div
                  className="flip-card-front"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                    style={{ borderTop: `4px solid ${ACCENTS[i]}` }}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-56 object-cover"
                      />
                      <div 
                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg"
                        onClick={() => toggleFlip(i)}
                      >
                        <span className="text-xl">ℹ️</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col">
                      <h3 className="text-lg font-black mb-1" style={{ color: colors.text }}>
                        {service.title}
                      </h3>
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: ACCENTS[i] }}>
                        {service.subtitle}
                      </p>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: colors.textLight }}>
                        {service.description}
                      </p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1 text-sm font-bold hover:gap-2 transition-all mt-auto"
                        style={{ color: ACCENTS[i] }}
                      >
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="flip-card-back"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg h-full p-6"
                    style={{ 
                      borderTop: `4px solid ${ACCENTS[i]}`,
                      background: `linear-gradient(135deg, ${ACCENTS[i]}15 0%, white 100%)`
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-black" style={{ color: colors.text }}>
                        {service.title}
                      </h3>
                      <button
                        onClick={() => toggleFlip(i)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <span className="text-lg">✕</span>
                      </button>
                    </div>

                    <div className="flex flex-col flex-1">
                      <h4 className="text-sm font-bold mb-3" style={{ color: ACCENTS[i] }}>
                        SERVICE INCLUDES:
                      </h4>
                      <ul className="space-y-2.5 mb-auto">
                        {service.backContent.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: colors.textLight }}>
                            <span className="text-green-600 mt-0.5">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.link}
                      className="w-full py-3 rounded-lg text-white font-bold text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 mt-6"
                      style={{ backgroundColor: ACCENTS[i] }}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
