'use client';

import { colors } from '@/constants/colors';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    title: 'Spring Gutter Maintenance: Essential Tips for Homeowners',
    excerpt: 'As spring arrives, it\'s crucial to prepare your gutters for the rainy season. Learn the essential maintenance tips to protect your home.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'
  },
  {
    id: 2,
    title: 'Why Regular Gutter Cleaning Saves You Money',
    excerpt: 'Discover how investing in regular gutter cleaning can prevent costly repairs and protect your property value.',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Cost Savings',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800'
  },
  {
    id: 3,
    title: 'New Service Areas Announced',
    excerpt: 'We\'re excited to announce our expansion into new areas. Check if we now service your location.',
    date: '2024-03-05',
    readTime: '3 min read',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
  }
];

export default function LatestNews() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Newspaper className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">News & Updates</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Latest News
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights from WOW Gutter Cleaning
          </p>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: colors.primary }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#19C58B] transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                    style={{ color: colors.primary }}
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Card */}
          <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">More News Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay tuned for more updates, tips, and insights from our team of gutter cleaning experts.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Subscribe to our newsletter for the latest news, tips, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <button 
              className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105 shadow-lg"
              style={{ background: colors.primaryGradient }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
