'use client';

import { useEffect, useRef } from 'react';
import { blogPosts } from '@/constants/blogData';
import { colors } from '@/constants/colors';
import { Calendar, User, Eye, Share2, Phone, PenTool, BookOpen } from 'lucide-react';
import Link from 'next/link';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import AreaFAQ from '@/components/areas/AreaFAQ';
import AreaReviews from '@/components/areas/AreaReviews';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';

interface BlogDetailContentProps {
  post: typeof blogPosts[0];
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const sameCategoryPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category);
  const otherPosts = blogPosts.filter(p => p.id !== post.id && p.category !== post.category);
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.image,
    'author': {
      '@type': post.author ? 'Person' : 'Organization',
      'name': post.author || 'WOW Gutters LTD',
      'url': 'https://wowgutters.co.uk'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'WOW Gutters LTD',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://wowgutters.co.uk/logo.png'
      }
    },
    'datePublished': post.date,
    'dateModified': post.lastUpdated || post.date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://wowgutters.co.uk/blog/${post.id}`
    }
  };

  return (
    <main className="bg-white blog-detail-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Premium Hero Section */}
      <section className="blog-detail-hero-section">
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
            <source src={post.heroVideo || '/wow_gutters_final.mp4'} type="video/mp4" />
          </video>
          <div className="blog-detail-hero-overlay"></div>
        </div>

        <div className="blog-detail-hero-content">
          {/* Category Badge */}
          {post.category && (
            <div className="hero-badge animate-fade-in-up delay-100">
              <BookOpen className="w-4 h-4" style={{ color: colors.primary }} />
              <span className="hero-badge-text">{post.category}</span>
            </div>
          )}

          <h1 className="hero-title animate-fade-in-up delay-200">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="hero-meta animate-fade-in-up delay-300">
            {post.author && (
              <div className="meta-item">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            )}
            <div className="meta-item">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="meta-item">
              <Eye className="w-5 h-5" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Article Content */}
          <article className="flex-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100">
              {/* Published + Last Updated */}
              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                <span>Published: <strong className="text-gray-700">{post.date}</strong></span>
                {post.lastUpdated && (
                  <>
                    <span className="hidden sm:inline">|</span>
                    <time dateTime={post.lastUpdated} className="font-semibold" style={{ color: colors.primary }}>
                      Last Updated: {post.lastUpdated}
                    </time>
                  </>
                )}
                {post.author && (
                  <>
                    <span className="hidden sm:inline">|</span>
                    <span>Reviewed by: <strong className="text-gray-700">WOW Gutters Technical Team</strong></span>
                  </>
                )}
              </div>

              {/* Quick Answer capsule — optimised for AI platform extraction */}
              {post.quickAnswer && (
                <div
                  className="mb-10 rounded-2xl p-6 border-l-4"
                  style={{
                    background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
                    borderColor: colors.primary,
                  }}
                >
                  <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: colors.primary }}>
                    Quick Answer
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-800 m-0">
                    {post.quickAnswer}
                  </p>
                </div>
              )}

              {/* Excerpt */}
              <div className="mb-10 pb-10 border-b border-gray-200">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
                  {post.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none blog-content">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      This comprehensive guide covers everything you need to know about this important topic.
                    </p>
                  </div>
                )}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-gray-500" />
                    <span className="font-semibold text-gray-700">Share this article:</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                      Facebook
                    </button>
                    <button className="px-4 py-2 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors">
                      Twitter
                    </button>
                    <button className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: colors.primaryGradient }}>
                <h3 className="text-3xl font-black mb-4 text-white">
                  Need Professional Gutter Services?
                </h3>
                <p className="mb-6 text-white text-lg">
                  Our expert team is ready to help with all your gutter cleaning, repair, and maintenance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote">
                    <button className="px-8 py-4 text-lg font-bold rounded-full bg-white hover:bg-gray-100 transition-colors shadow-xl" style={{ color: colors.primary }}>
                      Get Free Quote
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="px-8 py-4 text-lg font-bold border-2 border-white rounded-full text-white hover:bg-white/10 transition-colors">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[380px] shrink-0 space-y-8">
            {/* Quick Quote Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-8">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r" style={{ backgroundImage: colors.primaryGradient }} />
              
              <h3 className="text-3xl font-black text-gray-900 mb-3 mt-4">
                Get Your FREE Quote
              </h3>
              <p className="text-gray-600 font-medium mb-6">
                Takes less than 60 seconds
              </p>
              <Link href="/quote" className="block w-full">
                <button className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 shadow-lg" style={{ background: colors.primaryGradient }}>
                  Get Started <PenTool className="w-5 h-5" />
                </button>
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 font-semibold flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5" style={{ color: colors.primary }} /> Or call us:
                </p>
                <p className="text-2xl font-black tracking-wide" style={{ color: colors.primary }}>
                  07421 433910
                </p>
              </div>
            </div>

            {/* Author Info — E-E-A-T signals (Experience, Expertise, Authority, Trust) */}
            {post.author && (
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: colors.primaryGradient }}>
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{post.author}</h4>
                    <p className="text-sm text-gray-600">{post.authorRole || 'Senior Gutter Technician at WOW Gutters'}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.authorBio || `Written by ${post.author}, Senior Gutter Technician at WOW Gutters. Our blog content is reviewed for technical accuracy and written to help homeowners understand gutter cleaning, repairs, and roofline maintenance.`}
                </p>
                {post.lastUpdated && (
                  <p className="mt-3 text-xs text-gray-500">
                    Last updated: <time dateTime={post.lastUpdated}>{post.lastUpdated}</time> · Reviewed by: WOW Gutters Technical Team
                  </p>
                )}
              </div>
            )}

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
              <h4 className="font-bold text-gray-900 text-lg mb-4">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.map(p => p.category).filter(Boolean))).map((category, index) => (
                  <Link 
                    key={index}
                    href={`/blog?category=${category}`}
                    className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
              Related <span style={{ color: colors.primary }}>Articles</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg" style={{ background: colors.primaryGradient }}>
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#19C58B] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.views} views</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      <AreaBlogSnippet />
      <AreaFAQ />
      <AreaReviews />
      <ContactInfoSection />

      <style>{`
        .blog-detail-wrapper {
          overflow-x: hidden;
        }

        .blog-detail-hero-section {
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

        .blog-detail-hero-overlay {
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

        .blog-detail-hero-content {
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

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          margin-bottom: 1.5rem;
          padding: 8px 20px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-4px);
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
          line-height: 1.2;
          color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 900;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          color: rgba(255, 255, 255, 0.9);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
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

        .blog-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .blog-content p {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
        }

        .blog-content ul {
          list-style: none;
          padding-left: 0;
          margin: 1.5rem 0;
        }

        .blog-content ul li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.75rem;
          color: #475569;
          line-height: 1.7;
          font-size: 1.125rem;
        }

        .blog-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${colors.primary};
        }

        .blog-content strong {
          color: #0f172a;
          font-weight: 700;
        }

        .blog-content img {
          width: 100%;
          max-height: 600px;
          border-radius: 1rem;
          margin: 2rem 0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .blog-detail-hero-section {
            min-height: 50vh;
          }

          .blog-detail-hero-content {
            padding: 40px 16px;
          }

          .hero-title {
            font-size: 1.75rem;
          }

          .hero-meta {
            gap: 1rem;
            font-size: 0.875rem;
          }

          .blog-content h2 {
            font-size: 1.5rem;
          }

          .blog-content h3 {
            font-size: 1.25rem;
          }

          .blog-content p,
          .blog-content ul li {
            font-size: 1rem;
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

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
