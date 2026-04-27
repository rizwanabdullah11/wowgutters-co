'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/constants/blogData';
import { colors } from '@/constants/colors';
import { 
  BookOpen, Calendar, Eye, User, ArrowRight, 
  Search, Tag, TrendingUp, Clock
} from 'lucide-react';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';

export default function BlogPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // Get unique categories
  const categories: string[] = ['All', ...Array.from(new Set(blogPosts.map(post => post.category).filter((cat): cat is string => Boolean(cat))))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured post (most views)
  const featuredPost = blogPosts.reduce((prev, current) => 
    (parseInt(current.views) > parseInt(prev.views)) ? current : prev
  );

  return (
    <main className="bg-white blog-page-wrapper">
      <Head>
        <title>Gutter Cleaning Blog Birmingham — Expert Tips & Guides | WOW Gutters</title>
        <meta name="description" content="Expert gutter cleaning tips, maintenance guides and industry insights from WOW Gutters — Birmingham and West Midlands' most-reviewed gutter specialists." />
        <meta name="keywords" content="gutter cleaning blog, gutter maintenance tips, gutter repair advice, birmingham gutter cleaning, west midlands gutters, water damage prevention" />
        <meta property="og:title" content="Gutter Cleaning Blog Birmingham — Expert Tips & Guides" />
        <meta property="og:description" content="Expert gutter cleaning tips, maintenance guides and industry insights from Birmingham & West Midlands' trusted gutter specialists." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wowgutters.co.uk/blog" />
      </Head>
      {/* Premium Hero Section */}
      <section className="blog-hero-section">
        {/* Video Background */}
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="/gutter-final-video.mp4" type="video/mp4" />
          </video>
          <div className="blog-hero-overlay"></div>
        </div>

        <div className="blog-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <BookOpen className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Expert Tips & Insights</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">WOW Gutters Blog —</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>Birmingham & West Midlands</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Expert gutter cleaning tips, maintenance guides, and local insights from Birmingham's trusted gutter specialists
          </p>

          {/* Search Bar */}
          <div className="search-bar-wrapper animate-fade-in-up delay-300">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons animate-fade-in-up delay-400">
            <Link href="/quote" className="hero-primary-btn">
              <span className="btn-arrow">&#9658;</span>
              <span className="btn-label">
                Get A <span className="btn-free">FREE</span> Quote
              </span>
            </Link>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6" style={{ color: colors.primary }} />
            <h2 className="text-3xl font-black text-gray-900">Featured Article</h2>
          </div>

          <Link href={`/blog/${featuredPost.id}`}>
            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg" style={{ background: colors.primaryGradient }}>
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 group-hover:text-[#19C58B] transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-2 font-bold" style={{ color: colors.primary }}>
                  Read Full Article
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-5 h-5" style={{ color: colors.primary }} />
            <h3 className="text-lg font-bold text-gray-900">Filter by Category:</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={selectedCategory === category ? { background: colors.primaryGradient } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6" style={{ color: colors.primary }} />
            <h2 className="text-3xl font-black text-gray-900">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-500 font-semibold">({filteredPosts.length})</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg" style={{ background: colors.primaryGradient }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {post.views}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-[#19C58B] transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="font-bold text-sm flex items-center gap-1" style={{ color: colors.primary }}>
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <WhatsAppContactSection
        title="Have Questions About Gutter Care?"
        subtitle="Ask Our Experts on WhatsApp"
        description="Get instant answers about gutter maintenance, cleaning tips, repair advice, and more. Our team is here to help you keep your gutters in perfect condition."
        questions={[
          'How often should I clean my gutters?',
          'What are signs of gutter damage?',
          'Do you offer emergency services?',
          'How can I prevent gutter blockages?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      {/* SEO Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Expert Gutter <span style={{ color: colors.primary }}>Knowledge Hub</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your complete resource for gutter maintenance, repair tips, and property protection advice
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Regular Gutter Maintenance Matters
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your gutters play a crucial role in protecting your property from water damage. Regular maintenance 
                prevents costly repairs, extends the life of your roofing system, and keeps your home safe from 
                structural issues caused by water infiltration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our blog provides expert insights on gutter care, seasonal maintenance tips, common problems and 
                solutions, and the latest industry best practices. Whether you're a homeowner or property manager, 
                you'll find valuable information to help protect your investment.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Popular Topics:</h4>
                <ul className="space-y-3">
                  {[
                    'Seasonal gutter cleaning schedules',
                    'Identifying and fixing gutter leaks',
                    'Preventing ice dams in winter',
                    'Choosing the right gutter guards',
                    'DIY vs professional gutter services',
                    'Signs your gutters need replacement'
                  ].map((topic, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Common Gutter Problems We Cover
              </h3>
              
              <div className="grid gap-4">
                {[
                  { icon: '🍂', title: 'Blocked Gutters', desc: 'Learn how to identify and clear blockages before they cause damage' },
                  { icon: '💧', title: 'Leaking Joints', desc: 'Discover repair techniques for common gutter leak issues' },
                  { icon: '📉', title: 'Sagging Gutters', desc: 'Understand causes and solutions for drooping gutter systems' },
                  { icon: '❄️', title: 'Ice Damage', desc: 'Prevent winter ice dams and cold weather gutter problems' },
                  { icon: '🌧️', title: 'Overflow Issues', desc: 'Fix drainage problems and improve water flow' },
                  { icon: '🔧', title: 'Maintenance Tips', desc: 'Expert advice on keeping gutters in top condition' }
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="text-3xl">{problem.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-gray-600">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Need Professional Gutter Services?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              While our blog provides valuable DIY tips, some jobs require professional expertise. 
              Get a free quote for expert gutter cleaning, repairs, or installation.
            </p>
            <Link href="/quote">
              <button 
                className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform text-white"
                style={{ background: colors.primaryGradient }}
              >
                Get Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/24 blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Stay <span style={{ color: colors.primary }}>Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest tips, guides, and updates delivered straight to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none text-gray-900 font-medium shadow-lg"
            />
            <button 
              className="px-8 py-4 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-transform whitespace-nowrap"
              style={{ background: colors.primaryGradient }}
            >
              Subscribe Now
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            Join 5,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      <ContactInfoSection />

      <style>{`
        .blog-page-wrapper {
          overflow-x: hidden;
        }

        .blog-hero-section {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0f172a;
        }

        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.85) 0%,
            rgba(15, 23, 42, 0.75) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }

        .blog-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
          padding: 60px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 24px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          margin-bottom: 1.5rem;
        }

        .hero-badge-text {
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .hero-title {
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
          color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .title-prefix {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
        }
        
        .title-service {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 700px;
          margin: 0 0 1.5rem 0;
          line-height: 1.6;
          font-weight: 500;
        }

        .search-bar-wrapper {
          width: 100%;
          max-width: 600px;
          margin-bottom: 1.5rem;
        }

        .hero-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 560px;
        }

        .hero-primary-btn {
          width: 100%;
          max-width: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: ${colors.primaryGradient};
          padding: 18px 32px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(25, 197, 139, 0.3);
          text-decoration: none;
        }

        .hero-primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(25, 197, 139, 0.4);
          background: #14B27D;
        }

        .btn-arrow {
          color: white;
          font-size: 1.1rem;
          line-height: 1;
        }

        .btn-label {
          color: white;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 800;
        }

        .btn-free {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .search-bar {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 20px;
          height: 20px;
        }

        .search-input {
          width: 100%;
          padding: 16px 20px 16px 52px;
          border-radius: 100px;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .search-input::placeholder {
          color: #94a3b8;
        }

        .newsletter-input::placeholder {
          color: white;
        }

        .hero-wave-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          line-height: 0;
          z-index: 10;
        }

        .hero-wave-bottom svg {
          width: 100%;
          height: 60px;
          display: block;
        }

        @media (max-width: 768px) {
          .blog-hero-section {
            min-height: 70vh;
          }

          .blog-hero-content {
            padding: 60px 16px;
          }

          .search-bar-wrapper {
            max-width: 100%;
            margin-bottom: 1rem;
          }

          .hero-cta-buttons {
            max-width: 100%;
          }

          .hero-primary-btn {
            padding: 14px 24px;
          }

          .btn-label {
            font-size: 1.1rem;
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}