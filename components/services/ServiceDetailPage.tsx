'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { colors } from '@/constants/colors';
import Link from 'next/link';
import { ShieldCheck, PenTool, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { ServiceDetail } from '@/constants/servicesData';
import AreaServiceBlock from '@/components/areas/AreaServiceBlock';
import AreaFAQ from '@/components/areas/AreaFAQ';
import AreaFacts from '@/components/areas/AreaFacts';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaReviews from '@/components/areas/AreaReviews';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaFeatures from '@/components/areas/AreaFeatures';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import { areaPath } from '@/lib/areaSlugs';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const whatsappQuestions = [
    `How much is ${service.name.toLowerCase()} for my property?`,
    'Can you help with my gutter problem?',
    'Do you have availability this week?',
    'Could I get a fast quote for my home?',
  ];
  const whatsappBaseUrl = 'https://wa.me/447421433910';

  return (
    <main className="bg-white service-page-wrapper">
      <Head>
        <title>Professional {service.name} | WOW Gutters</title>
        <meta name="description" content={`Professional ${service.name.toLowerCase()} with WOW Gutters. ${service.heroDescription.substring(0, 150)}...`} />
        <meta name="keywords" content={`${service.name.toLowerCase()}, professional ${service.name.toLowerCase()}, gutter services, roofline services, free quote`} />
        <meta property="og:title" content={`${service.name} Services - WowGutters`} />
        <meta property="og:description" content={service.heroDescription.substring(0, 160)} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://wowgutters.co.uk/services/${service.id}`} />
      </Head>
      {/* Premium Hero Section */}
      <section className="service-hero-section">
        {/* Video Background */}
        <div className="hero-video-wrapper">
          {service.heroVideo && (
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
              <source src={service.heroVideo} type="video/mp4" />
            </video>
          )}
          <div className="service-hero-overlay"></div>
        </div>

        <div className="service-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Professional Service • Same-Day Booking</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">Professional</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>{service.name}</span>
            <br />
            <span className="title-secondary">Services</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            {service.heroDescription}
          </p>

          <div className="hero-cta-row animate-fade-in-up delay-300">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn">
              <span className="btn-arrow">&#9658;</span>
              <span className="btn-label">
                Click For A <span className="btn-free">FREE</span> Quote
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

      {/* Info & Free Quote Form Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-[#f8fafc] to-white border-t border-gray-100">
        <div className="absolute top-0 left-0 right-0 h-10 w-full overflow-hidden leading-[0]"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          {/* Left Text */}
          <div className="flex-[1.2] text-[#0f172a]">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Professional <br />
              <span style={{ color: colors.primary }}>{service.name}</span>
            </h2>

            <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
              {service.sections.map((section, index) => (
                <div key={index}>
                  <p className="font-semibold text-slate-900 mb-2">{section.title}</p>
                  <p>{section.content}</p>
                  {section.bulletPoints && (
                    <ul className="mt-3 space-y-2">
                      {section.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              
              <div className="p-6 rounded-xl bg-[#f1f5f9] border border-slate-200 mt-8">
                <p className="text-slate-800 font-medium flex items-center gap-3 text-xl mb-4">
                  <Phone className="w-6 h-6" style={{ color: colors.primary }} /> Call us directly:
                </p>
                <p className="text-3xl font-black tracking-widest" style={{ color: '#0f172a' }}>
                  {service.ctaSection.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Right Lead Form Card */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 text-center shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r" style={{ backgroundImage: colors.primaryGradient }} />

              <h3 className="text-4xl font-black text-gray-900 mb-3 leading-tight mt-4">
                Get Your FREE <br /> Quote Now
              </h3>
              <p className="text-gray-500 font-medium mb-8">
                Takes less than 60 seconds to complete
              </p>
              <Link href="/quote" className="block w-full">
                <button className="w-full flex items-center justify-center gap-3 py-5 rounded-full text-white font-bold text-lg transition-transform duration-200 group-hover:scale-105 shadow-xl" style={{ background: colors.primaryGradient }}>
                  Get Started <PenTool className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <AreaServiceBlock
        title={service.ctaSection.title}
        descriptions={[service.ctaSection.description]}
        iconSrc="/gutter-cleaning-icon.png"
        backgroundColor="bg-white"
        buttonText={service.ctaSection.buttonText}
        phoneNumber={service.ctaSection.phone}
      />

      {/* WhatsApp Section */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] py-20 px-4">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/30 blur-[1px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/24 blur-[1px]" />
        <div className="pointer-events-none absolute left-[28%] top-[28%] h-20 w-56 -rotate-12 rounded-[30%] bg-white/70" />
        <div className="pointer-events-none absolute right-[16%] bottom-[10%] h-16 w-48 rotate-12 rounded-[30%] bg-white/65" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight">
              Need a quick answer?
              <br />
              <span className="text-[#34e3b6]">Message us on WhatsApp</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#dbe7ff]/88 max-w-xl">
              Fast replies from our team. Send one tap and we will help with quotes, repairs, and availability.
            </p>
          </div>

          <div className="w-full max-w-[560px] rounded-2xl border border-white/20 bg-[#f8fafc]/96 p-4 md:p-6 shadow-[0_18px_45px_rgba(4,12,32,0.45)]">
            <h3 className="mb-4 text-center text-3xl md:text-4xl font-black text-[#0f1e3d]">
              Ask us a question
            </h3>

            <div className="space-y-2">
              {whatsappQuestions.map((question, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[#e6f9f1] transition-colors"
                >
                  <span className="text-[15px] md:text-base text-[#1c2a44] font-semibold">
                    "{question}"
                  </span>
                  <a
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi, ${question}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md bg-[#16c784] px-4 py-1.5 text-base font-black text-white hover:bg-[#0fb272] transition-colors inline-flex items-center gap-1.5 shadow-[0_6px_14px_rgba(22,199,132,0.35)]"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M19.11 17.21c-.28-.14-1.64-.81-1.89-.91-.25-.09-.43-.14-.61.14-.19.28-.71.91-.88 1.09-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.19 0-.49.07-.75.35s-.98.95-.98 2.33 1 2.71 1.14 2.89c.14.19 1.97 3 4.78 4.2.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.06-.12-.24-.19-.52-.33z" />
                      <path d="M16.03 3.2C8.95 3.2 3.2 8.95 3.2 16.03c0 2.25.59 4.45 1.7 6.38L3 29l6.8-1.86a12.8 12.8 0 0 0 6.23 1.6h.01c7.08 0 12.83-5.75 12.83-12.83C28.87 8.95 23.12 3.2 16.03 3.2zm0 23.49h-.01a10.63 10.63 0 0 1-5.42-1.48l-.39-.23-4.03 1.1 1.08-3.93-.25-.41a10.61 10.61 0 0 1-1.63-5.69c0-5.89 4.79-10.68 10.68-10.68s10.68 4.79 10.68 10.68-4.79 10.64-10.71 10.64z" />
                    </svg>
                    Ask
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Section 1 - Service Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Why Opt For Dedicated <span style={{ color: colors.primary }}>{service.name}</span>?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Securing professional {service.name.toLowerCase()} plays a pivotal role in preserving your building's structural health and averting catastrophic water intrusion. Our accomplished operatives wield premium, industry-endorsed equipment to produce immaculate results with unyielding consistency.
                </p>
                <p className="text-lg">
                  Committing to routine {service.name.toLowerCase()} aggressively shields your residence or commercial premises against unseen decay, aggressive weed growth, and shifting foundations. Acting proactively is practically always vastly more economical than addressing irreversible water damage down the line.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Swift Call-Outs</h3>
                      <p className="text-sm text-gray-600">Immediate, same-day dispatch booking regionally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Vetted Specialists</h3>
                      <p className="text-sm text-gray-600">Strictly insured, background-checked personnel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Clear-Cut Costing</h3>
                      <p className="text-sm text-gray-600">Honest estimations entirely devoid of hidden extras</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Definitive Guarantee</h3>
                      <p className="text-sm text-gray-600">Absolute satisfaction or a comprehensive resolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/professional-gutter-clean.png"
                  alt={`Professional ${service.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                    Excellent Service
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900 mt-2">Rated 4.9/5 by 450+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Section 2 - Process & Methodology */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Focused <span style={{ color: colors.primary }}>{service.name}</span> Blueprint
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We strictly adhere to an optimised, step-by-step strategy to guarantee a flawless finish for every single assignment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Complimentary Survey',
                description: 'A deep-dive evaluation of your premises to map out vulnerabilities and frame a precise fee'
              },
              {
                step: '02',
                title: 'Expert Execution',
                description: 'Our certified crews rapidly deploy cutting-edge gear to resolve blockages safely from the ground'
              },
              {
                step: '03',
                title: 'Rigorous Verification',
                description: 'A final, scrupulous audit confirming that our output entirely satisfies our stringent criteria'
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description: 'Actionable upkeep advice and scheduling preferences to lock in long-term resilience'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-black mb-4 opacity-10" style={{ color: colors.primary }}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Section 3 - Common Problems & Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Typical Challenges We <span style={{ color: colors.primary }}>Eradicate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bespoke remedies formulated for every conceivable {service.name.toLowerCase()} dilemma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💧',
                title: 'Unchecked Surges',
                description: 'Guard your landscaping and internal plasterwork from the hazardous impacts of overflowing water'
              },
              {
                icon: '🍂',
                title: 'Obstinate Build-Ups',
                description: 'Eradicate heavy foliage, impacted soil, and moss that severely choke external drainage routes'
              },
              {
                icon: '🔧',
                title: 'Physical Deterioration',
                description: 'Promptly rectify snapped brackets or failing seals to bypass entirely funding a new installation'
              },
              {
                icon: '🐛',
                title: 'Unwanted Vermin',
                description: 'Dismantle the damp, sheltered environments that attract and sustain gnats, rodents, and birds'
              },
              {
                icon: '❄️',
                title: 'Freezing Hazards',
                description: 'Neutralise winter blockages that formulate perilous ice formations capable of fracturing pipes'
              },
              {
                icon: '🏠',
                title: 'Diminished Aesthetics',
                description: 'Boost immediate kerb side appeal while concurrently protecting your long-term property equity'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Section 4 - Service Areas & Availability */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Your <span style={{ color: colors.primary }}>Trusted</span> {service.name} Authority
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We supply an elite-level {service.name.toLowerCase()} provision across a multitude of UK postcodes. Our decentralised hubs are on standby to dispatch urgent assistance directly to your door.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expansive Reach</h3>
                    <p className="text-gray-300">Successfully servicing domestic households and robust commercial estates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Crisis Intervention</h3>
                    <p className="text-gray-300">A reliable round-the-clock rapid response designed for sudden overflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 shrink-0" style={{ color: colors.primary }} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Tailored Bookings</h3>
                    <p className="text-gray-300">Operating efficiently through weekends to seamlessly align with your routine</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-3">Check availability near you</h3>
              <p className="text-gray-300 mb-6">
                Enter your town or city to see coverage and request a fast quote.
              </p>
              <Link
                href="/#find-local-team"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold text-white shadow-lg hover:opacity-95 transition-opacity"
                style={{ backgroundImage: colors.primaryGradient }}
              >
                Find local team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AreaFAQ />
      <AreaFacts />
      <AreaBlogSnippet />
      <AreaFeatures
        serviceLabel={service.name}
        featureSet={service.id === 'roof-cleaning' ? 'roof' : 'gutter'}
      />
      <AreaRecentWork />
      <AreaReviews />
      <AreaContactMap />
      <ContactInfoSection />

      <style>{`
        .service-page-wrapper {
          overflow-x: hidden;
        }

        .service-hero-section {
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

        .service-hero-overlay {
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

        .service-hero-content {
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
          font-size: clamp(2rem, 4.5vw, 4rem);
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
          position: relative;
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
          .service-hero-section {
            min-height: 90svh;
            align-items: flex-start;
          }

          .service-hero-content {
            max-width: 100%;
            padding: 76px 16px 120px;
          }

          .hero-badge {
            padding: 8px 16px;
            margin-bottom: 1.25rem;
          }

          .hero-badge-text {
            font-size: 0.8rem;
          }

          .title-prefix {
            font-size: clamp(1.9rem, 7.5vw, 2.4rem);
          }

          .title-service {
            font-size: clamp(2.3rem, 9vw, 3rem);
          }

          .title-secondary {
            font-size: clamp(1.9rem, 8vw, 2.7rem);
            margin-top: 0.3rem;
          }

          .hero-subtitle {
            font-size: 1rem;
            line-height: 1.45;
            margin: 0 0 1.05rem 0;
          }

          .hero-cta-row {
            max-width: 360px;
          }

          .hero-primary-btn {
            padding: 14px 20px;
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
