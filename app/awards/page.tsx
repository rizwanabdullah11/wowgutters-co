'use client';

import { useEffect, useRef } from 'react';
import { colors } from '@/constants/colors';
import { Award, Trophy, Medal, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

const achievements = [
  {
    year: '2023',
    title: '450+ Happy Customers',
    organization: 'West Midlands & Surrounding Areas',
    description: 'Serving over 450 satisfied homeowners with professional gutter services'
  },
  {
    year: '2023',
    title: '4.9 Star Rating',
    organization: 'Customer Reviews',
    description: 'Consistently rated 4.9 stars for exceptional service quality and customer care'
  },
  {
    year: '2022',
    title: 'Same-Day Booking',
    organization: 'Fast Response Service',
    description: 'Offering same-day booking to meet urgent gutter cleaning and repair needs'
  },
  {
    year: '2022',
    title: 'Fully Insured',
    organization: 'Public Liability Coverage',
    description: 'Complete insurance protection for your peace of mind on every job'
  },
  {
    year: '2021',
    title: 'Professional Team',
    organization: 'Trained Specialists',
    description: 'Experienced gutter cleaning specialists using advanced equipment and techniques'
  },
  {
    year: '2021',
    title: 'Transparent Pricing',
    organization: 'No Hidden Fees',
    description: 'Honest, upfront pricing with free quotes and no surprise charges'
  }
];

export default function AwardsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="awards-hero-section">
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="/wow_gutters_final.mp4" type="video/mp4" />
          </video>
          <div className="awards-hero-overlay"></div>
        </div>

        <div className="awards-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Trophy className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Trusted Service</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">Why Choose</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>WowGutters</span>
            <br />
            <span className="title-secondary">Our Commitment</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Celebrating excellence in gutter cleaning and customer satisfaction
          </p>
        </div>

        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our <span style={{ color: colors.primary }}>Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building trust through quality service and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ borderColor: colors.primary }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: colors.primaryGradient }}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl font-black" style={{ color: colors.primary }}>{achievement.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h3>

                <p className="text-sm font-semibold mb-4" style={{ color: colors.primary }}>
                  {achievement.organization}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Makes Us <span style={{ color: colors.primary }}>Different</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that drive our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: 'Quality Service', desc: 'Consistently exceeding customer expectations' },
              { icon: CheckCircle, title: 'Professional Team', desc: 'Highly trained and certified technicians' },
              { icon: Medal, title: 'Innovation', desc: 'Using the latest technology and methods' },
              { icon: Trophy, title: 'Customer Focus', desc: 'Putting customers first in everything we do' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: colors.primaryGradient }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Trophy className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
          <h3 className="text-4xl md:text-5xl font-black mb-4">
            Experience <span style={{ color: colors.primary }}>Professional</span> Service
          </h3>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of satisfied customers who trust our professional team
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
        .awards-hero-section {
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

        .awards-hero-overlay {
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

        .awards-hero-content {
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
