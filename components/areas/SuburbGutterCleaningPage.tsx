'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Cable, Images, Shield, ChevronDown, CheckCircle } from 'lucide-react';
import { colors } from '@/constants/colors';
import { AREA_SERVICE_META, type AreaServiceKind } from '@/lib/areaServiceMeta';
import { AreaServiceQuoteCard } from '@/components/areas/AreaServiceBlock';
import AreaServicesRange from '@/components/areas/AreaServicesRange';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaCrawlFooter from '@/components/navigation/AreaCrawlFooter';
import GoogleReviewsBlock from '@/components/sections/GoogleReviewsBlock';


export interface SuburbPageData {
  city: string
  heroBadge: string
  heroTitleLine1: string
  heroTitleLine2: string
  whyTitle: string
  whyParagraphs: string[]
  guarantees?: string[]
  propertyTypesTitle: string
  propertyTypes: { label: string; detail: string }[]
  areasCoveredTitle: string
  areasCoveredText: string
  areaLinks: { href: string; label: string }[]
  whatsappPrefix: string
  faqs: { question: string; answer: string }[]
  postcodesTitle: string
  postcodeStreetTitle: string
  postcodeStreets: string[]
  postcodeFooter: string
  bookingTitle: string
  mapTitle: string
  mapSrc: string
  blogLocality: string
}

const WA = 'https://wa.me/447421433910';

const HERO_USP_PILLS = [
  { label: 'No ladders', Icon: Cable },
  { label: 'Before & after photos', Icon: Images },
  { label: 'Fully insured', Icon: Shield },
];

const defaultGuarantees = [
  'Ground-level vacuum system — no ladders placed against your property',
  'Reaches up to 4 storeys — Victorian terraces, semis and large detached homes',
  'Before & after photos included as standard on every job',
  'Fully insured — comprehensive public liability cover',
  '4.9★ rating from verified Google reviews',
  '1-year service guarantee on every clean',
];

export default function SuburbGutterCleaningPage({
  data,
  serviceKind = 'gutter',
  priceFrom = 50,
  priceTo = 140,
  areaSlug,
}: {
  data: SuburbPageData;
  serviceKind?: AreaServiceKind;
  priceFrom?: number;
  priceTo?: number;
  areaSlug?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const meta = AREA_SERVICE_META[serviceKind];
  const guarantees = data.guarantees ?? (serviceKind === 'roof'
    ? [
        'Controlled soft-wash methods — no damaging high-pressure washing',
        'Moss, algae and lichen removal included on every job',
        'Biocide treatment applied after cleaning to slow regrowth',
        'Before & after photos included as standard on every job',
        'Fully insured — comprehensive public liability cover',
        '4.9★ rating from verified Google reviews',
      ]
    : defaultGuarantees);
  const whatsappQuestions = [...meta.whatsappQuestions];
  const faqGroupName = `faq-${data.city.toLowerCase().replace(/\s+/g, '-')}`;

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <main className="bg-white area-page-wrapper">
      {/* HERO */}
      <section className="area-hero-section">
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={meta.heroPoster}
            className="hero-video"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src={meta.heroVideo} type="video/mp4" />
          </video>
          <div className="area-hero-overlay" />
        </div>

        <div className="area-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">{data.heroBadge}</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-line">{data.heroTitleLine1}</span>
            <br />
            <span className="title-accent" style={{ color: colors.primary }}>
              {data.heroTitleLine2}
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl animate-fade-in-up delay-150">
            {HERO_USP_PILLS.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-md bg-black/30 border border-white/20 text-white"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: colors.primary }} aria-hidden />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full max-w-xl animate-fade-in-up delay-300">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn flex-1">
              Get a FREE quote
            </Link>
            <a
              href="tel:07421433910"
              className="hero-primary-btn-link hidden md:flex flex-1 min-h-[56px] items-center justify-center gap-2 rounded-full border-2 border-white/40 text-white font-bold text-md hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              07421 433910
            </a>
          </div>
        </div>

        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* SECTION 1 — WHY */}
      <section className="py-16 md:py-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-center">{data.whyTitle}</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-slate-600 text-lg leading-relaxed space-y-5">
              {data.whyParagraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
              <AreaServiceQuoteCard buttonLabel="Book Now" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — GUARANTEES */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-10">
            What You Get With WOW Gutters Ltd in {data.city}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((g) => (
              <li key={g} className="flex gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle className="w-6 h-6 shrink-0" style={{ color: colors.primary }} />
                <span className="text-slate-800 font-semibold">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {meta.label} prices in {data.city}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Most {data.city} homes are quoted from <strong>£{priceFrom}</strong> for a standard terrace up to{' '}
            <strong>£{priceTo}+</strong> for larger detached properties. Your fixed price is confirmed before we
            visit — no call-out fee and no hidden charges on the day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={meta.priceGuideHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white"
              style={{ background: colors.primaryGradient }}
            >
              View full price guide
            </Link>
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold border-2"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROPERTY TYPES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">{data.propertyTypesTitle}</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            <div className="flex-1 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
              {data.propertyTypes.map((row) => (
                <div key={row.label} className="p-6 border-b border-slate-100 last:border-0">
                  <p className="font-black text-slate-900">{row.label}</p>
                  <p className="text-slate-600 mt-2">{row.detail}</p>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
              <AreaServiceQuoteCard buttonLabel="Book Now" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AREAS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{data.areasCoveredTitle}</h2>
          <p className="text-slate-700 text-lg">{data.areasCoveredText}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {data.areaLinks.map((l, i) => {
              const variants = [l.label, `Gutter cleaning in ${l.label.replace(/^(Gutter cleaning) /i, '')}`, `${l.label.replace(/^(Gutter cleaning) /i, '')} gutter services`];
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm"
                >
                  {variants[i % variants.length]}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHATSAPP */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] py-20 px-4">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight">
              Need a fast answer? <span className="text-[#34e3b6]">Message us on WhatsApp</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#dbe7ff]/88 max-w-xl">
              Our {data.city} team responds quickly to WhatsApp messages. One tap and we&apos;ll help with quotes, availability and advice.
            </p>
          </div>

          <div className="w-full max-w-[560px] rounded-2xl border border-white/20 bg-[#f8fafc]/96 p-4 md:p-6 shadow-[0_18px_45px_rgba(4,12,32,0.45)]">
            <h3 className="mb-4 text-center text-2xl md:text-3xl font-black text-[#0f1e3d]">Ask us a question</h3>
            <div className="space-y-2">
              {whatsappQuestions.map((question) => (
                <div
                  key={question}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[#e6f9f1] transition-colors"
                >
                  <span className="text-[15px] md:text-base text-[#1c2a44] font-semibold">
                    &quot;{question}&quot;
                  </span>
                  <a
                    href={`${WA}?text=${encodeURIComponent(`Hi, I am in ${data.whatsappPrefix}. ${question}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md bg-[#16c784] px-4 py-1.5 text-base font-black text-white hover:bg-[#0fb272] transition-colors"
                  >
                    Ask
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQs */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d6e4e 0%, #19C58B 50%, #14B27D 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">FAQs — Gutter Cleaning {data.city}</h2>
            <p className="text-xl text-white/90">
              Can&apos;t find your answer? Call{' '}
              <a href="tel:07421433910" className="font-bold underline underline-offset-2">07421 433910</a>.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {data.faqs.map((faq, i) => (
              <details
                key={faq.question}
                name={faqGroupName}
                open={i === 0}
                className="group bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 open:border-white/30 open:shadow-lg open:shadow-black/20 hover:border-white/20"
              >
                <summary className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-white font-bold text-lg group-open:text-[#19C58B] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-6 h-6 text-[#19C58B] transition-transform duration-300 shrink-0 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsBlock city={data.city} className="bg-white" />

      {/* SECTION 8 — POSTCODES */}
      <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{data.postcodesTitle}</h2>
          <p className="text-slate-700 text-lg mb-8">{data.postcodeStreetTitle}</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-8">
            {data.postcodeStreets.map((street) => (
              <span
                key={street}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium"
              >
                {street}
              </span>
            ))}
          </div>
          <p className="text-slate-600">{data.postcodeFooter}</p>
          <p className="text-slate-700 font-semibold mt-4">
            Not sure if we cover your street? Call{' '}
            <a href="tel:07421433910" className="underline" style={{ color: colors.primary }}>07421 433910</a> — we will confirm in under a minute.
          </p>
        </div>
      </section>

      {/* SECTION 9 — BOOKING CTA */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{data.bookingTitle}</h2>
          <div className="mt-8 flex justify-center">
            <AreaServiceQuoteCard />
          </div>
        </div>
      </section>

      <AreaBlogSnippet locality={data.blogLocality} />
      <AreaServicesRange />
      <AreaRecentWork />
      <AreaContactMap />
      <AreaCrawlFooter currentSlug={areaSlug} serviceKind={serviceKind} />

      <style>{`
        .area-page-wrapper { overflow-x: hidden; }
        .area-hero-section {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
          overflow-y: visible;
          background-color: #0f172a;
        }
        .hero-video-wrapper { position: absolute; inset: 0; z-index: 1; }
        .hero-video { width: 100%; height: 100%; object-fit: cover; }
        .area-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.9) 100%);
          z-index: 1;
        }
        .area-hero-content {
          position: relative; z-index: 10; width: 100%; max-width: 1000px;
          padding: 72px 24px 72px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 24px; border-radius: 100px; backdrop-filter: blur(8px);
          margin-bottom: 1.25rem;
        }
        .hero-badge-text { color: white; font-size: 0.95rem; font-weight: 700; letter-spacing: 0.5px; }
        .hero-title {
          margin: 0 0 1rem 0; line-height: 1.15; color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
          font-size: clamp(1.55rem, 3.6vw, 2.65rem);
          font-weight: 900;
          max-width: 900px;
        }
        .title-line { color: white; }
        .title-accent { color: ${colors.primary}; }
        .hero-primary-btn-link { text-decoration: none; }
        .hero-primary-btn {
          display: flex; align-items: center; justify-content: center;
          background: ${colors.primaryGradient};
          padding: 18px 32px; border-radius: 100px; cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(25, 197, 139, 0.3);
          color: white;
          font-weight: 800;
        }
        .hero-primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(25, 197, 139, 0.4);
        }
        .hero-wave-bottom { position: absolute; bottom: -1px; left: 0; right: 0; line-height: 0; z-index: 10; }
        .hero-wave-bottom svg { width: 100%; height: 60px; display: block; }

        @media (max-width: 768px) {
          .area-hero-section {
            min-height: 90svh;
            align-items: flex-start;
            padding-bottom: 6rem;
          }
          .area-hero-content {
            max-width: 100%;
            padding: 76px 16px 9rem;
          }
          .hero-badge { padding: 8px 16px; }
          .hero-badge-text { font-size: 0.8rem; }
          .hero-title { font-size: clamp(1.85rem, 8.4vw, 2.45rem); }
          .hero-primary-btn { padding: 14px 20px; }
        }

        .animate-fade-in-up { opacity: 0; animation: suburbFadeInUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes suburbFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
