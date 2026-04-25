'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { colors } from '@/constants/colors';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Award, Users, Clock, CheckCircle,
  Phone, Star, Target, Heart, Zap, PenTool
} from 'lucide-react';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const stats = [
    { value: '2,600+', label: '5-Star Reviews', icon: Star },
    { value: '14+', label: 'West Midlands Areas Served', icon: Users },
    { value: '40ft', label: 'Ground-Level Vacuum Reach', icon: Award },
    { value: '4.9/5', label: 'Average Customer Rating', icon: Clock }
  ];

  const values = [
    {
      icon: Target,
      title: 'Supreme Quality',
      description: 'We chase flawless results on every project, leaving your drainage systems immaculately clear.'
    },
    {
      icon: Heart,
      title: 'Dedicated Focus',
      description: 'Your peace of mind tops our agenda. Every property receives the utmost respect and care.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Prompt, dependable action without ever cutting corners. We value both your time and structural integrity.'
    },
    {
      icon: ShieldCheck,
      title: 'Absolute Integrity',
      description: 'Thoroughly covered, highly qualified experts you can trust for straightforward, reliable advice.'
    }
  ];

  const whyChooseUs = [
    'Fully Certified & Insured Technicians',
    'Available 7 Days A Week',
    'Complimentary Quotes & Surveys',
    'Total Satisfaction Promise',
    'Fair & Transparent Rates',
    'Cutting-Edge Vacuum Gear',
    'Wealth of Industry Experience',
    'Rapid Emergency Response'
  ];

  return (
    <main className="bg-white about-page-wrapper">
      <Head>
        <title>About WOW Gutters — Birmingham & West Midlands Gutter Specialists</title>
        <meta name="description" content="WOW Gutters Ltd — Birmingham and West Midlands' most-reviewed professional gutter cleaning company. 4.9★ from 2,600+ customers. Fully insured, ladder-free service." />
        <meta name="keywords" content="about wow gutters, gutter cleaning birmingham, west midlands gutter specialists, professional gutter service, ladder free gutter cleaning" />
        <meta property="og:title" content="About WOW Gutters — Birmingham & West Midlands Gutter Specialists" />
        <meta property="og:description" content="Trusted gutter cleaning specialists serving Birmingham, Coventry, Wolverhampton, Solihull & the West Midlands — 4.9★ from 2,600+ customers." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wowgutters.pro/about" />
      </Head>
      {/* Premium Hero Section */}
      <section className="about-hero-section">
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
          <div className="about-hero-overlay"></div>
        </div>

        <div className="about-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Award className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Premium Standards • UK-Wide Excellence</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">About</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>WOW Gutters</span>
            <br />
            <span className="title-secondary">Birmingham & West Midlands' Trusted Gutter Specialists</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Rated 4.9★ by over 2,600 customers across Birmingham, Coventry, Wolverhampton, Solihull and the wider West Midlands. Fully insured, ladder-free vacuum technology — same-day bookings available.
          </p>

          <div className="hero-cta-row animate-fade-in-up delay-300">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn">
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <IconComponent className="w-10 h-10 mx-auto mb-3" style={{ color: colors.primary }} />
                  <div className="text-4xl font-black mb-2" style={{ color: colors.navy }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Our Story: <span style={{ color: colors.primary }}>WOW Gutter Cleaning</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg">
                Welcome to WOW GUtters an innovative exterior maintenance firm focused
                on combatting routine damp and drainage issues through modern methodology.
                We specialise in delivering an <strong>exceptional ground-operated clearance service</strong>,
                bypassing traditional risks with powerful vacuum equipment.
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-200"><strong>High-Elevation Access:</strong> Safely clear pipework up to 40 feet without ever setting foot on a ladder.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-200"><strong>Pristine Environment:</strong> State-of-the-art suction guarantees zero overflow onto your patios or lawns.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-200"><strong>Transparent Results:</strong> Complete peace of mind with documented before-and-after imagery.</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                Our procedures are not only drastically safer but considerably faster, guaranteeing
                your roofline remains clear without disruptive scaffolding or dangerous climbing.
                Fully insured and unwavering in our pursuit of 5-star customer gratification.
              </p>


              <div className="flex items-center gap-4 pt-4">
                <span className="text-lg font-bold">Rated 4.9/5 by 2,600+ customers</span>
              </div>
            </div>

            {/* Right - Image/Logo */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <Image
                  src="/blog8.png"
                  alt="WOW Gutter Cleaning Logo"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Core <span style={{ color: colors.primary }}>Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: colors.primaryGradient }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Guttering Service Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <div className="relative h-[400px] lg:h-full lg:min-h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/gutter-cleaning.jpeg"
                alt="Full gutter service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Comprehensive <span style={{ color: colors.primary }}>Roofline Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are dedicated to the holistic well-being of your property's exterior. Our full-scale approach
                guarantees that every component functions seamlessly and looks immaculate.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <h3 className="text-xl text-gray-900 font-bold mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: colors.primary }}></span>
                    Gutter Networks
                  </h3>
                  <p className="text-gray-600">The crucial channel system designed to harvest downpours and safely divert moisture away from your foundational brickwork.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <h3 className="text-xl text-gray-900 font-bold mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: colors.primary }}></span>
                    Soffit Boards
                  </h3>
                  <p className="text-gray-600">Positioned beneath the eaves, these elements allow essential airflow into your attic while keeping nesting pests out.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <h3 className="text-xl text-gray-900 font-bold mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: colors.primary }}></span>
                    Fascia Panels
                  </h3>
                  <p className="text-gray-600">The robust frontline boards that bear the weight of your entire guttering framework and seal the roof space from the elements.</p>
                </div>
              </div>

              <p className="mt-8 text-gray-500 italic">
                Our all-inclusive plans involve meticulously inspecting and rejuvenating these critical sections,
                thereby reinforcing the absolute durability of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Why Choose Us */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                Why Choose <span style={{ color: colors.primary }}>WOW Gutters?</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-xl bg-[#f1f5f9] border border-slate-200">
                <p className="text-slate-800 font-medium flex items-center gap-3 text-xl mb-4">
                  <Phone className="w-6 h-6" style={{ color: colors.primary }} /> Call us today:
                </p>
                <p className="text-3xl font-black tracking-widest" style={{ color: '#0f172a' }}>
                  07421 433910
                </p>
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="w-full">
              <div className="bg-white p-10 rounded-3xl border border-gray-100 text-center shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r" style={{ backgroundImage: colors.primaryGradient }} />

                <h3 className="text-4xl font-black text-gray-900 mb-3 leading-tight mt-4">
                  Ready to Get <br /> Started?
                </h3>
                <p className="text-gray-500 font-medium mb-8 text-lg">
                  Get your free quote in less than 60 seconds
                </p>
                <Link href="/quote" className="block w-full">
                  <button className="w-full flex items-center justify-center gap-3 py-5 rounded-full text-white font-bold text-lg transition-transform duration-200 hover:scale-105 shadow-xl" style={{ background: colors.primaryGradient }}>
                    Get Free Quote <PenTool className="w-5 h-5" />
                  </button>
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Or call us directly</p>
                  <a
                    href="tel:07421433910"
                    className="text-2xl font-bold hover:underline"
                    style={{ color: colors.primary }}
                  >
                    07421 433910
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <WhatsAppContactSection
        title="Have Questions About Our Services?"
        subtitle="Chat With Us on WhatsApp"
        description="Get instant answers about gutter cleaning, repairs, pricing, and scheduling. Our team is ready to help you protect your home with professional gutter services."
        questions={[
          'What gutter services do you offer?',
          'How much does gutter cleaning cost?',
          'Do you offer same-day service?',
          'Can you repair damaged gutters?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      {/* Trust Badges Section */}
      <section className="py-16 px-4" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-2xl font-bold mb-2">LOW PRICES</h3>
              <p className="text-white/90">
                Comprehensive service at amazing low prices
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <span className="text-5xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">TOP RATED SERVICE</h3>
              <p className="text-white/90">
                Consistently 5-star rated by our customers
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">TRUSTED SERVICE</h3>
              <p className="text-white/90">
                Highly Rated Gutter Cleaning & Repair Company
              </p>
              {/* <p className="text-sm text-white/80">2021, 2022 & 2023</p> */}
            </div>
          </div>
        </div>
      </section>

      <ContactInfoSection />

      <style>{`
        .about-page-wrapper {
          overflow-x: hidden;
        }

        .about-hero-section {
          position: relative;
          min-height: 70vh;
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

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(15, 23, 42, 0.65) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }

        .about-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1000px;
          padding: 72px 24px 72px;
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
          margin-bottom: 2rem;
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
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
        }
        
        .title-service {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
        }

        .title-secondary {
          display: block;
          font-size: clamp(1.5rem, 3.5vw, 3rem);
          font-weight: 900;
          margin-top: 0.5rem;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 0 1.25rem 0;
          line-height: 1.6;
          font-weight: 500;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 560px;
        }

        .hero-primary-btn-link {
          width: 100%;
          max-width: 560px;
          text-decoration: none;
        }

        .hero-primary-btn {
          width: 100%;
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
          .about-hero-section {
            min-height: 90svh;
            align-items: flex-start;
          }

          .about-hero-content {
            padding: 76px 16px 120px;
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
