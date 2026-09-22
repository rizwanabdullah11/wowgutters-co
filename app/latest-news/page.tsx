'use client';

import React, { useEffect, useRef } from 'react';
import { colors } from '@/constants/colors';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';

const newsArticles = [
  {
    slug: 'ask-before-hiring-gutter-cleaner',
    title: 'The One Question to Ask Before Hiring Any Gutter Cleaner in the West Midlands',
    excerpt: 'One question genuinely separates a thorough gutter cleaning service from a surface-level one. Here is what to ask before hiring anyone across Birmingham.',
    date: '2026-03-20',
    readTime: '6 min read',
    category: 'Consumer Guide',
  },
  {
    slug: 'birmingham-gutter-health-check',
    title: 'Essential Gutter Health Checks for West Midlands Homeowners',
    excerpt: 'How regular ground-level camera inspection and vacuum extraction prevent costly water ingress and foundation damp during seasonal storms.',
    date: '2026-02-28',
    readTime: '5 min read',
    category: 'Maintenance',
  },
  {
    slug: 'victorian-terrace-cast-iron-gutters',
    title: 'Maintaining Victorian & Period Cast-Iron Gutters in Birmingham',
    excerpt: 'Specialist advice on handling heavy cast-iron gutters, high-reach vacuuming without ladder damage, and seal maintenance on heritage properties.',
    date: '2026-01-15',
    readTime: '7 min read',
    category: 'Heritage Care',
  }
];

export default function LatestNews() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-4 min-h-[460px] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/gutter-cleaning.jpeg"
            className="w-full h-full object-cover"
          >
            <source src="/gutter-final-video.mp4" type="video/mp4" />
            <source src="/gutter-cleaning-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Newspaper className="w-5 h-5" style={{ color: colors.primary }} />
            <span className="text-white font-semibold text-sm">News &amp; Updates</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Latest <span style={{ color: colors.primary }}>News &amp; Advisories</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with seasonal maintenance advice, weather warnings, and exterior cleaning guides across the West Midlands.
          </p>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 line-height-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 block">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <article 
                key={article.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold text-gray-500 mb-3">
                    <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: colors.primary }}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#19C58B] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href={`/blog/${article.slug}/`}
                    className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all"
                    style={{ color: colors.primary }}
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">
            Book Your Seasonal <span style={{ color: colors.primary }}>Gutter Clean</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get an upfront fixed quote with before &amp; after photographic proof on every visit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 rounded-full font-bold text-white shadow-xl transition hover:scale-105"
              style={{ background: colors.primaryGradient }}
            >
              Get Free Instant Quote
            </Link>
            <a
              href="tel:07421433910"
              className="px-8 py-4 rounded-full font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
            >
              📞 07421 433910
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
