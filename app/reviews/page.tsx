'use client';

import { useEffect, useRef, useState } from 'react';
import { colors } from '@/constants/colors';
import { ThumbsUp, Quote, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Manchester',
    rating: 5,
    date: '2024-03-15',
    review: 'Absolutely fantastic service! The team arrived on time, were professional and thorough. My gutters look brand new and they even cleaned up perfectly afterwards. Highly recommend!',
    service: 'Gutter Cleaning'
  },
  {
    id: 2,
    name: 'Michael Brown',
    location: 'Birmingham',
    rating: 5,
    date: '2024-03-10',
    review: 'Best gutter cleaning service I\'ve used. They were efficient, reasonably priced, and did an excellent job. The before and after photos they provided were impressive.',
    service: 'Gutter Cleaning & Repair'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Leeds',
    rating: 5,
    date: '2024-03-05',
    review: 'Professional from start to finish. Great communication, fair pricing, and excellent workmanship. My gutters were in terrible condition but they restored them perfectly.',
    service: 'Gutter Installation'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Liverpool',
    rating: 5,
    date: '2024-02-28',
    review: 'I was impressed by their attention to detail and professionalism. They explained everything clearly and the results exceeded my expectations. Will definitely use again.',
    service: 'Roof & Gutter Cleaning'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    location: 'Sheffield',
    rating: 5,
    date: '2024-02-20',
    review: 'Excellent service at a great price. The team was friendly, efficient, and left everything spotless. My gutters are flowing perfectly now. Thank you!',
    service: 'Gutter Cleaning'
  },
  {
    id: 6,
    name: 'James Roberts',
    location: 'Bristol',
    rating: 5,
    date: '2024-02-15',
    review: 'Outstanding work! They cleared years of debris and repaired several leaks. Very professional team and great value for money. Highly recommended.',
    service: 'Gutter Repair'
  }
];

export default function ReviewsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const filteredReviews = filter === 'All' 
    ? reviews 
    : reviews.filter(r => r.service.includes(filter));

  return (
    <main className="bg-white">
      {/* Hero Section with Video */}
      <section className="reviews-hero-section">
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
          <div className="reviews-hero-overlay"></div>
        </div>

        <div className="reviews-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="hero-badge-text">Customer Reviews</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">What Our</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>Customers</span>
            <br />
            <span className="title-secondary">Say About Us</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Read genuine reviews from our satisfied customers across the UK
          </p>
        </div>

        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>4.9/5</div>
              <div className="text-gray-600 font-semibold">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>450+</div>
              <div className="text-gray-600 font-semibold">Reviews</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>98%</div>
              <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>450+</div>
              <div className="text-gray-600 font-semibold">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Customer <span style={{ color: colors.primary }}>Reviews</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <Quote className="w-10 h-10 mb-4 opacity-20" style={{ color: colors.primary }} />

                <p className="text-gray-700 leading-relaxed mb-6">
                  "{review.review}"
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: colors.primaryGradient }}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}>
                      {review.service}
                    </span>
                    <span className="text-gray-500">{new Date(review.date).toLocaleDateString('en-GB')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                Want to Share Your Experience?
              </h3>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                We'd love to hear from you! Message us on WhatsApp to share your feedback, ask questions, or tell us about your experience with our service.
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
                  Message Us on WhatsApp
                </a>

                <Link href="/quote">
                  <button 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white border-2"
                    style={{ borderColor: colors.primary, color: colors.primary }}
                  >
                    Get a Free Quote
                  </button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-green-200">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="font-semibold">450+ Happy Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="font-semibold">Fast Response Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ThumbsUp className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
          <h3 className="text-4xl md:text-5xl font-black mb-4">
            Join Our <span style={{ color: colors.primary }}>Happy Customers</span>
          </h3>
          <p className="text-xl text-white/80 mb-8">
            Experience the same exceptional service that our customers rave about
          </p>
          <Link href="/quote">
            <button className="px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:scale-105 transition-all" style={{ background: colors.primaryGradient }}>
              Get Your Free Quote
            </button>
          </Link>
        </div>
      </section>

      <ContactInfoSection />

      <style>{`
        .reviews-hero-section {
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

        .reviews-hero-overlay {
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

        .reviews-hero-content {
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

        .title-secondary {
          display: block;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          margin-top: 0.5rem;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 700px;
          margin: 0;
          line-height: 1.6;
          font-weight: 500;
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

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }

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
