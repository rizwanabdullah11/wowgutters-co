'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { allFAQs, categories } from '@/constants/faqData';
import { colors } from '@/constants/colors';
import { 
  Search, ChevronDown, HelpCircle, Phone, Mail, 
  MessageCircle, Filter, ArrowRight 
} from 'lucide-react';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import SEOMeta from '@/components/seo/SEOMeta';

export default function HelpPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // Filter FAQs
  const filteredFAQs = allFAQs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get category counts
  const getCategoryCount = (category: string) => {
    if (category === 'All') return allFAQs.length;
    return allFAQs.filter(faq => faq.category === category).length;
  };

  return (
    <main className="bg-white help-page-wrapper">
      <SEOMeta
        title="Gutter Cleaning FAQ | West Midlands | WOW Gutters"
        description="Answers to common questions about gutter cleaning, repairs, inspections and more in Birmingham & West Midlands. Call 07421 433910 for a FREE quote."
        canonicalUrl="https://wowgutters.co.uk/help"
      />
      <SchemaMarkup
        id="schema-faqpage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allFAQs.slice(0, 50).map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />
      {/* Premium Hero Section */}
      <section className="help-hero-section">
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
          <div className="help-hero-overlay"></div>
        </div>

        <div className="help-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <HelpCircle className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Help Centre</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">Gutter Cleaning FAQs —</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>Birmingham & West Midlands</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Self-contained answers to common questions about gutter cleaning, repairs, roof cleaning and inspections across Birmingham and the West Midlands.
          </p>

          {/* Search Bar */}
          <div className="search-bar-wrapper animate-fade-in-up delay-300">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
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

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5" style={{ color: colors.primary }} />
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
                <span className="ml-2 text-sm opacity-75">({getCategoryCount(category)})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Questions' : `${selectedCategory} Questions`}
            </h2>
            <p className="text-gray-600">
              Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}
            </p>
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-xl text-gray-500">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-[#19C58B] font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openFAQ === faq.id
                      ? 'border-[#19C58B] shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl">{faq.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#19C58B] transition-colors mb-1">
                          {faq.question}
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#19C58B] transition-transform duration-300 shrink-0 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === faq.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-16 pr-8 bg-gray-50 rounded-xl p-6">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] mb-6 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-11 h-11" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
                Need Quick Answers?
              </h3>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Can't find what you're looking for? Message us on WhatsApp for instant help! Our team is ready to answer your questions quickly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/447421433910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-[#25D366]"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:07421433910"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white border-2"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-green-200">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="font-semibold">Fast Response Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="font-semibold">Expert Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="font-semibold">Available 7 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/24 blur-[100px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Still Need <span style={{ color: colors.primary }}>Help?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our friendly team is here to help!
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <a
              href="tel:07421433910"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group border border-white/20"
            >
              <div className="w-14 h-14 bg-[#19C58B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300 font-semibold">Call Us Now</p>
                <p className="text-xl font-bold">07421 433910</p>
              </div>
            </a>

            <a
              href="mailto:support@wowgutters.co.uk"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group border border-white/20"
            >
              <div className="w-14 h-14 bg-[#19C58B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300 font-semibold">Email Us</p>
                <p className="text-lg font-bold">support@wowgutters.co.uk</p>
              </div>
            </a>
          </div>

          <Link href="/quote">
            <button
              className="px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              style={{ background: colors.primaryGradient }}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <ContactInfoSection />

      <style>{`
        .help-page-wrapper {
          overflow-x: hidden;
        }

        .help-hero-section {
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

        .help-hero-overlay {
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

        .help-hero-content {
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
          margin: 0 0 2rem 0;
          line-height: 1.6;
          font-weight: 500;
        }

        .search-bar-wrapper {
          width: 100%;
          max-width: 600px;
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
          .help-hero-section {
            min-height: 70vh;
          }

          .help-hero-content {
            padding: 60px 16px;
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
