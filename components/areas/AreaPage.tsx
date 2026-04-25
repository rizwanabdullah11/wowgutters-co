'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { colors } from '@/constants/colors';
import Link from 'next/link';
import { ShieldCheck, PenTool, CheckCircle, MapPin, Phone } from 'lucide-react';
import AreaServiceBlock from '@/components/areas/AreaServiceBlock';
import AreaServicesRange from '@/components/areas/AreaServicesRange';
import AreaFAQ from '@/components/areas/AreaFAQ';
import AreaFacts from '@/components/areas/AreaFacts';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaReviews from '@/components/areas/AreaReviews';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaFeatures from '@/components/areas/AreaFeatures';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

interface AreaPageProps {
  areaName: string;
  county?: string;
  postcodes?: string[];
}

export default function AreaPage({ areaName }: AreaPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play the video on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);
  // Format area name for display (e.g., "mansfield" -> "Mansfield")
  const formattedArea = areaName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const whatsappQuestions = [
    'How much is gutter cleaning for my property?',
    'Can you repair leaking or damaged gutters?',
    'Do you have availability this week?',
    'Could I get a fast quote for my home?',
  ];
  const whatsappBaseUrl = 'https://wa.me/447421433910';

  return (
    <main className="bg-white area-page-wrapper">
      <Head>
        <title>Gutter Cleaning {formattedArea} | Professional Service | WowGutters</title>
        <meta name="description" content={`Professional gutter cleaning, repairs & maintenance in ${formattedArea}. Same-day booking, fully insured, 450+ happy customers. Free quotes available. Call 07421 433910.`} />
        <meta name="keywords" content={`gutter cleaning ${areaName}, ${areaName} gutter services, gutter repair ${areaName}, ${areaName} gutter maintenance, professional gutters ${areaName}`} />
        <meta property="og:title" content={`Gutter Cleaning ${formattedArea} - WowGutters`} />
        <meta property="og:description" content={`Professional gutter services in ${formattedArea}. Same-day booking available. Free quotes.`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://wowgutters.pro/gutter-cleaning-${areaName}/`} />
      </Head>
      {/* 1) Premium Hero Section matching Home Page */}
      <section className="area-hero-section">
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
          <div className="area-hero-overlay"></div>
        </div>

        <div className="area-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Local {formattedArea} Specialists • Fully Insured</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">Professional</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>Gutter Cleaning</span>
            <br />
            <span className="title-secondary">in {formattedArea}</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Relied upon by domestic residents and commercial landlords throughout {formattedArea} and its neighbouring districts to aggressively defend their estates against water ingress. Impressively fast, utterly dependable, and universally five-star recommended.
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

        {/* Decorative Bottom Wave connecting into the next section */}
        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* 2) Engineer Profile & Work Section */}
      {/* <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10" style={{ backgroundColor: colors.primary }}></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
                MEET YOUR EXPERT
              </span>
              <span className="h-px w-10" style={{ backgroundColor: colors.primary }}></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Your Local {formattedArea} Team
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 shadow-2xl rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
            {/* Left Profile Card */}
      {/* <div className="flex-1 p-8 md:p-12 flex flex-col items-center text-center justify-center relative bg-white">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-6 overflow-hidden border-[6px] shadow-lg relative" style={{ borderColor: colors.primary, backgroundColor: '#f3f4f6' }}>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                  alt="Engineer Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">
                Gutter Cleaning {formattedArea}
              </h3>
              <p className="text-gray-500 font-medium mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Covering {formattedArea} & Surrounds
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md">
                "Hi, I'm the local WOW Gutters engineer. I am your local specialist for gutter cleaning, repairs, and maintenance across all of {formattedArea}."
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Fully Equipped
                </span>
                <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Ladders & Vacuums
                </span>
              </div>
            </div>
             */}
      {/* Right Work Photo */}
      {/* <div className="flex-[1.2] relative min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1000" 
                alt="Gutter Cleaning in Progress" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h4 className="text-white text-2xl font-bold mb-2">High-Reach Technology</h4>
                <p className="text-gray-200 shadow-sm">Cleaning safely from the ground up to 4 stories.</p>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* 3) Info & Free Quote Form Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-[#f8fafc] to-white border-t border-gray-100">
        {/* Top styling wave (optional styling choice to blend better) */}
        <div className="absolute top-0 left-0 right-0 h-10 w-full overflow-hidden leading-[0]">
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">

          {/* Left Text */}
          <div className="flex-[1.2] text-[#0f172a]">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Professional <br />
              <span style={{ color: colors.primary }}>{formattedArea} Gutter Services</span>
            </h2>

            <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
              <p>
                <strong className="text-slate-900">WOW Gutter</strong> delivers unmatched property maintenance throughout {formattedArea} and its adjacent community zones. Our skilled technicians are highly proficient in comprehensive clearance tasks, targeted leak fixes, alleviating choked downspouts, and intensive fascia rejuvenation.
              </p>
              <p>
                We integrate state-of-the-art suction apparatus that empowers us to eradicate lodged debris from altitudes reaching four storeys—all achieved with both feet firmly on the ground. This agility allows us to effortlessly navigate restrictive gaps or stretch over large conservatories. In addition, we always carry the appropriate traditional access tools, ensuring that awkward mechanical repairs are finalised without delay.
              </p>
              <div className="p-6 rounded-xl bg-[#f1f5f9] border border-slate-200 mt-8">
                <p className="text-slate-800 font-medium flex items-center gap-3 text-xl mb-4">
                  <Phone className="w-6 h-6" style={{ color: colors.primary }} /> Call us directly:
                </p>
                <p className="text-3xl font-black tracking-widest" style={{ color: '#0f172a' }}>
                  07421 433910
                </p>
              </div>
            </div>
          </div>

          {/* Right Lead Form Card, mimicking Home page dynamic style */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 text-center shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 group">
              {/* Subtle top color bar */}
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

      {/* New Service Blocks matching the detailed designs */}
      <AreaServiceBlock
        title={`EXPERT CLEARANCE IN ${formattedArea.toUpperCase()}`}
        descriptions={[
          `We are the leading authority for exterior maintenance inside ${formattedArea}. We fully acknowledge that ascending ladders to scoop out sludge is highly undesirable, incredibly messy, and fraught with peril—which is precisely why our team is here to assist.`,
          `Refrain from balancing precariously at height; allow our operatives to engage the heavy lifting. Our intervention is famously swift and free from scattered debris, leaning heavily on market-leading, high-velocity vacuums engineered to devour every trace of organic matter suffocating your home's roofline.`
        ]}
        iconSrc="/gutter-cleaning-icon.png"
        backgroundColor="bg-white"
        buttonText="Get A Quote"
        phoneNumber="07421 433910"
      />

      <AreaServiceBlock
        title={`DEDICATED UPKEEP FOR ${formattedArea.toUpperCase()}`}
        descriptions={[
          `Positioned as the go-to regional specialists for definitive remedial work within ${formattedArea}.`,
          `Our acclaimed, top-tier structural assistance remains heavily sought-after simply because identifying a dependable, transparent operative is notoriously difficult.`,
          `A WOW Gutters representative will rapidly isolate the core defect causing your leaks. Furthermore, because our fleet patrols carrying a vast inventory of bespoke brackets, joints, and seals, we reliably conclude the vast majority of interventions right there and then.`
        ]}
        iconSrc="/gutter-repair-icon.png"
        backgroundColor="bg-gray-50"
        buttonText="Get A Quote"
        phoneNumber="07421 433910"
      />

      <AreaServiceBlock
        title={`COMPREHENSIVE ZERO-COST EVALUATION`}
        descriptions={[
          `Before you are ever asked to authorise any monetary commitment inside ${formattedArea}, you can exploit our complimentary visual health check, a signature offering constructed by WOW Gutters. An established surveyor covering ${formattedArea} will diligently observe your setup to ascertain if any corrective intervention is legitimately required.`,
          `To absolutely guarantee your peace of mind and avert concealed shocks, this meticulous appraisal is run by a verified local pro. It encompasses a close scrutiny of your overlapping tiles, mortar integrity, connected fascias, immediate valleys, and primary flow channels.`
        ]}
        iconSrc="/gutter-cleaning-icon.png" /* Temporary fallback due to quota */
        backgroundColor="bg-[#e4e4e4]"
        buttonText="Book Now"
        phoneNumber="07421 433910"
      />

      {/* 4) WhatsApp Section */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] py-20 px-4">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/30 blur-[1px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/24 blur-[1px]" />
        <div className="pointer-events-none absolute left-[28%] top-[28%] h-20 w-56 -rotate-12 rounded-[30%] bg-white/70" />
        <div className="pointer-events-none absolute right-[16%] bottom-[10%] h-16 w-48 rotate-12 rounded-[30%] bg-white/65" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight">
              Require a rapid response?
              <br />
              <span className="text-[#34e3b6]">Reach out via WhatsApp</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#dbe7ff]/88 max-w-xl">
              Expect prompt engagement from our designated {formattedArea} crew. Forward a single text, and we will immediately clarify pricing structures, availability metrics, and repair strategies.
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
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi, I am in ${formattedArea}. ${question}`)}`}
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
      <AreaServicesRange />
      <AreaFAQ />
      <AreaFacts />
      <AreaBlogSnippet />

      {/* Inserted Features Section directly after WhatsApp */}
      <AreaFeatures formattedArea={formattedArea} />

      {/* New Footer/Bottom Components */}
      <AreaRecentWork />
      <AreaReviews />
      <AreaContactMap />
      <ContactInfoSection />

      <style>{`
        /* Hero Section Scoped Styles */
        .area-page-wrapper {
          overflow-x: hidden;
        }

        .area-hero-section {
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

        .area-hero-overlay {
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

        .area-hero-content {
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
          .area-hero-section {
            min-height: 90svh;
            align-items: flex-start;
          }

          .area-hero-content {
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

        /* Animations */
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
