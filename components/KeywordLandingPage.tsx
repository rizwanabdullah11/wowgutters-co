'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Phone, ShieldCheck, CheckCircle, PenTool, Cable, Images, Shield,
  CheckCircle2, ChevronDown,
} from 'lucide-react';
import { colors } from '@/constants/colors';
import { KeywordPage } from '@/lib/keywordPages';
import GoogleReviewsBlock from '@/components/sections/GoogleReviewsBlock';
import AreaServicesRange from '@/components/areas/AreaServicesRange';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaCrawlFooter from '@/components/navigation/AreaCrawlFooter';
import { AreaServiceQuoteCard } from '@/components/areas/AreaServiceBlock';

const WA = 'https://wa.me/447421433910';

function detectCategory(slug: string): string {
  if (slug.includes('pressure-wash') || slug.includes('jetwash') || slug.includes('smouts')) return 'pressure-wash';
  if (slug.includes('window-clean') || slug.includes('window-cleaners')) return 'window';
  if (slug.includes('roof-clean') || slug.includes('roof-moss') || slug.includes('roof-replacement') || slug.includes('roof-and-gutter') || slug.includes('soft-wash')) return 'roof';
  if (slug.includes('conservatory')) return 'conservatory';
  if (slug.includes('fascia') || slug.includes('fascias') || slug.includes('upvc') || slug.includes('flawless')) return 'upvc';
  if (slug.includes('gutter') || slug.includes('guttering') || slug.includes('downpipe') || slug.includes('spouting')) return 'gutter';
  if (slug.includes('handyman') || slug.includes('property-maintenance') || slug.includes('professional-clean')) return 'handyman';
  return 'gutter';
}

function categoryLabel(cat: string, slug: string): string {
  if (cat === 'pressure-wash') return 'Pressure Washing';
  if (cat === 'window') return 'Window Cleaning';
  if (cat === 'roof') return 'Roof Cleaning';
  if (cat === 'conservatory') return 'Conservatory Cleaning';
  if (cat === 'upvc') return 'UPVC & Fascia Cleaning';
  if (cat === 'handyman') return 'Handyman & Property Maintenance';
  return slug.includes('gutter-prices') || slug.includes('how-much') || slug.includes('cost') ? 'Gutter Services' : 'Gutter Cleaning';
}

function categoryLabelLower(cat: string, slug: string): string {
  return categoryLabel(cat, slug).toLowerCase();
}

function heroPills(cat: string) {
  if (cat === 'window') return [
    { label: 'Purified water system', Icon: Cable },
    { label: 'Streak-free finish', Icon: Images },
    { label: 'Fully insured', Icon: Shield },
  ];
  if (cat === 'pressure-wash') return [
    { label: 'Hot water pressure wash', Icon: Cable },
    { label: 'Driveways & patios', Icon: Images },
    { label: 'Fully insured', Icon: Shield },
  ];
  if (cat === 'roof') return [
    { label: 'Soft-wash method', Icon: Cable },
    { label: 'Biocide treatment', Icon: Images },
    { label: 'Fully insured', Icon: Shield },
  ];
  if (cat === 'conservatory') return [
    { label: 'No climbing on glass', Icon: Cable },
    { label: 'Before & after photos', Icon: Images },
    { label: 'Fully insured', Icon: Shield },
  ];
  return [
    { label: 'No ladders', Icon: Cable },
    { label: 'Before & after photos', Icon: Images },
    { label: 'Fully insured', Icon: Shield },
  ];
}

function whyBody(cat: string, page: KeywordPage): string[] {
  const label = categoryLabel(cat, page.slug);
  const firstSection = page.sections[0]?.content ?? '';
  return [
    page.heroDescription,
    firstSection || `We provide professional ${label.toLowerCase()} across Birmingham and the West Midlands. Every job is completed by experienced, insured technicians using modern equipment.`,
  ];
}

function whyTitle(cat: string, slug: string): string {
  const label = categoryLabel(cat, slug);
  return `Why Choose WOW Gutters Ltd for ${label}`;
}

function guarantees(cat: string): string[] {
  if (cat === 'window') return [
    'Purified water cleaning system — no spots or residue',
    'Streak-free finish on all glass and UPVC frames',
    'Interior and exterior window cleaning available',
    'Fascias, soffits and conservatories cleaned on request',
    'Fully insured with £10 million public liability cover',
    'Regular schedules available — weekly, fortnightly, monthly',
  ];
  if (cat === 'pressure-wash') return [
    'Commercial-grade hot water pressure washing equipment',
    'Removes algae, moss, oil stains and ingrained dirt',
    'Safe for block paving, concrete, tarmac and stone',
    'Before and after photos on every job',
    'Fully insured with £10 million public liability cover',
    'Free quotes with same-day service where available',
  ];
  if (cat === 'roof') return [
    'Low-pressure soft wash methods — safe for all tile types',
    'Moss, algae and lichen removal included on every job',
    'Biocide treatment applied after cleaning to slow regrowth',
    'Before and after photos included as standard',
    'Fully insured with comprehensive public liability cover',
    '4.9★ rating from verified Google reviews',
  ];
  if (cat === 'conservatory') return [
    'Specialist conservatory roof, gutter and frame cleaning',
    'Low-reach equipment — no climbing on glass or polycarbonate',
    'Algae and moss removal from roof panels and UPVC frames',
    'Gutter clearing between house and conservatory rooflines',
    'Hot wash options for stubborn staining on frames',
    'Free quote with honest advice on seals and maintenance',
  ];
  return [
    'Ground-level vacuum system — no ladders placed against your property',
    'Reaches up to 4 storeys — suitable for all property types',
    'Before and after photos included as standard on every job',
    'Fully insured with comprehensive public liability cover',
    '4.9★ rating from verified Google reviews',
    'Free, no-obligation quotes in 60 seconds',
  ];
}

function pricingInfo(cat: string): { priceFrom: number; priceTo: number; label: string } {
  if (cat === 'window') return { priceFrom: 25, priceTo: 60, label: 'window cleaning' };
  if (cat === 'pressure-wash') return { priceFrom: 60, priceTo: 200, label: 'pressure washing' };
  if (cat === 'roof') return { priceFrom: 150, priceTo: 400, label: 'roof cleaning' };
  if (cat === 'conservatory') return { priceFrom: 80, priceTo: 200, label: 'conservatory cleaning' };
  return { priceFrom: 50, priceTo: 140, label: 'gutter cleaning' };
}

function localSpotlight(cat: string, page: KeywordPage): string | null {
  const label = categoryLabelLower(cat, page.slug);
  const desc = page.heroDescription;
  if (desc.length < 80) return null;
  return desc.length > 200 ? desc.slice(0, 200) + '...' : desc;
}

function propertyTypes(cat: string): { label: string; detail: string }[] {
  if (cat === 'roof') return [
    { label: 'Terraced Houses', detail: 'Small to medium roof areas — quick turnaround with our soft-wash system.' },
    { label: 'Semi-Detached Homes', detail: 'Two-storey roofs cleaned efficiently using low-pressure methods.' },
    { label: 'Detached Properties', detail: 'Larger roof sections treated section by section with biocide.' },
    { label: 'Bungalows', detail: 'Low-pitch roofs cleaned safely without high-pressure risk.' },
  ];
  if (cat === 'window') return [
    { label: 'Terraced Houses', detail: 'Standard window sizes — purified water system for streak-free results.' },
    { label: 'Semi-Detached Homes', detail: 'Multiple windows cleaned inside and out on request.' },
    { label: 'Detached Properties', detail: 'Larger homes with many windows — fortnightly or monthly schedules.' },
    { label: 'Commercial Premises', detail: 'Shop fronts, offices and business premises cleaned to a high standard.' },
  ];
  if (cat === 'pressure-wash') return [
    { label: 'Driveways', detail: 'Block paving, concrete and tarmac driveways — oil stains and algae removed.' },
    { label: 'Patios & Paths', detail: 'Slabs, stone and brick pathways restored to their original colour.' },
    { label: 'Walls & Fences', detail: 'Brick walls, rendered surfaces and timber fences cleaned safely.' },
    { label: 'Commercial Premises', detail: 'Car parks, forecourts, loading bays and walkways.' },
  ];
  return [
    { label: 'Terraced Houses', detail: 'Standard 2-3 bed terraces with straightforward gutter runs — quick and cost-effective.' },
    { label: 'Semi-Detached Homes', detail: 'Medium-sized properties with side access — suitable for vacuum systems.' },
    { label: 'Detached Properties', detail: 'Larger roofs with complex gutter layouts — fully covered at a fixed price.' },
    { label: 'Commercial Premises', detail: 'Offices, retail units and warehouses — planned maintenance available.' },
  ];
}

function whatsappQuestions(cat: string): string[] {
  if (cat === 'window') return [
    'How much is window cleaning for my property?',
    'Do you clean windows inside and out?',
    'Do you have availability this week?',
    'Could I get a fast quote?',
  ];
  if (cat === 'pressure-wash') return [
    'How much is pressure washing for my drive?',
    'Can you remove oil stains from block paving?',
    'Do you have availability this week?',
    'Could I get a fast quote?',
  ];
  if (cat === 'roof') return [
    'How much is roof cleaning for my property?',
    'Do you remove moss from all roof tiles?',
    'Do you have availability this week?',
    'Could I get a fast quote for my home?',
  ];
  return [
    'How much is gutter cleaning for my property?',
    'Can you repair leaking or damaged gutters?',
    'Do you have availability this week?',
    'Could I get a fast quote for my home?',
  ];
}

function faqItems(cat: string, page: KeywordPage): { question: string; answer: string }[] {
  const label = categoryLabel(cat, page.slug);
  const l = categoryLabelLower(cat, page.slug);
  if (cat === 'window') return [
    { question: `How much does ${l} cost?`, answer: `Prices depend on property size and frequency. Most Birmingham homes cost between £25–£60 for a standard clean. Contact us for a free quote.` },
    { question: 'Do you clean windows in the rain?', answer: 'Yes — purified water systems work effectively in wet conditions. We avoid heavy storms for safety and quality.' },
    { question: 'How often should I have my windows cleaned?', answer: 'Every 4–8 weeks is typical for most homes. We offer weekly, fortnightly and monthly schedules.' },
    { question: 'Do you offer interior window cleaning?', answer: 'Yes — interior and exterior cleaning is available. We use purified water for a spotless, streak-free finish.' },
    { question: 'Are you insured?', answer: 'Yes — we hold comprehensive public liability insurance and all our technicians are trained and vetted.' },
  ];
  if (cat === 'pressure-wash') return [
    { question: `How much does ${l} cost?`, answer: `Pricing depends on surface area and condition. Driveways typically cost £60–£200. Contact us for a free, no-obligation quote.` },
    { question: 'Can you remove oil stains from my driveway?', answer: 'Yes — our commercial-grade hot water system treats oil stains, tyre marks and ingrained dirt effectively.' },
    { question: 'Is pressure washing safe for my paving?', answer: 'Yes — our technicians use controlled pressure settings suitable for your surface type. We do not damage block paving, concrete or stone.' },
    { question: 'How often should I have my driveway pressure washed?', answer: 'Every 1–2 years is sufficient for most properties. High-traffic areas may need annual cleaning.' },
    { question: 'Are you insured?', answer: 'Yes — we hold comprehensive public liability insurance covering all pressure washing work.' },
  ];
  if (cat === 'roof') return [
    { question: `How much does ${l} cost?`, answer: `Roof cleaning starts from £150 depending on roof size, moss coverage and access. We provide fixed quotes before any work begins.` },
    { question: 'Do you use high-pressure washing on roofs?', answer: 'No — we use low-pressure soft wash methods that are safe for all tile types, including concrete, clay and slate.' },
    { question: 'How long does roof cleaning take?', answer: 'Most domestic roofs take 2–4 hours. Larger properties may take longer. We give you a time estimate when quoting.' },
    { question: 'Will the moss grow back?', answer: 'We apply biocide treatment after cleaning to slow regrowth. Annual maintenance treatments keep your roof clear longer.' },
    { question: 'Are you insured for roof work?', answer: 'Yes — we hold comprehensive public liability insurance for all roof cleaning and roof access work.' },
  ];
  if (cat === 'conservatory') return [
    { question: `How much does ${l} cost?`, answer: `Conservatory cleaning starts from £80 depending on size and condition. We provide a fixed price before booking.` },
    { question: 'Do you clean conservatory roofs?', answer: 'Yes — we clean conservatory roof panels, gutters and frames using low-reach equipment. No climbing on glass.' },
    { question: 'Can you clean polycarbonate roofs?', answer: 'Yes — we clean polycarbonate and glass conservatory roofs safely using appropriate methods and cleaning agents.' },
    { question: 'Do you clean the gutters above the conservatory?', answer: 'Yes — we clear the narrow gutter channel between your house and conservatory as part of our service.' },
    { question: 'Are you insured?', answer: 'Yes — we hold comprehensive public liability insurance covering all conservatory cleaning work.' },
  ];
  return [
    { question: `How much does ${l} cost?`, answer: `Most homes are quoted from £50 for a standard terrace up to £140+ for larger detached properties. Your price is confirmed before we visit.` },
    { question: 'Do you use ladders or a vacuum system?', answer: 'We use a ground-level high-reach vacuum system — no ladders placed against your property. It reaches up to 4 storeys.' },
    { question: 'How long does a gutter clean take?', answer: 'Most homes take 30–60 minutes. We clear all debris, test downpipes and provide before and after photos.' },
    { question: 'Do you include downpipe clearing?', answer: 'Yes — every clean includes downpipe clearing and flow testing as standard at no extra charge.' },
    { question: 'Are you insured?', answer: 'Yes — we hold comprehensive public liability insurance. All work is guaranteed.' },
  ];
}

function areasTitle(cat: string, slug: string): string {
  const label = categoryLabel(cat, slug);
  return `Areas We Cover for ${label}`;
}

function areasContent(cat: string, slug: string): string {
  return `We provide ${categoryLabelLower(cat, slug)} across Birmingham, the West Midlands and surrounding areas. Our team covers all major postcodes and towns in the region. Contact us to check availability in your area.`;
}

export default function KeywordLandingPage({ page }: { page: KeywordPage }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cat = detectCategory(page.slug);
  const pills = heroPills(cat);
  const wq = whatsappQuestions(cat);
  const faqs = faqItems(cat, page);
  const spot = localSpotlight(cat, page);
  const { priceFrom, priceTo } = pricingInfo(cat);
  const propTypes = propertyTypes(cat);
  const guaranteesList = guarantees(cat);
  const label = categoryLabel(cat, page.slug);
  const labelLc = categoryLabelLower(cat, page.slug);
  const faqLabel = page.heroTitle.replace(/Professional | services/gi, '').trim() || label;

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
            poster="/gutter-hero-poster.jpg"
            className="hero-video"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="https://wowgutters.co.uk/gutter-final-video.mp4" type="video/mp4" />
          </video>
          <div className="area-hero-overlay" />
        </div>

        <div className="area-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">WOW Gutters Ltd • Birmingham &amp; West Midlands</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-line">{page.heroTitle}</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl animate-fade-in-up delay-150">
            {pills.map(({ label: pillLabel, Icon }) => (
              <span
                key={pillLabel}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-md bg-black/30 border border-white/20 text-white"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" style={{ color: colors.primary }} aria-hidden />
                {pillLabel}
              </span>
            ))}
          </div>

          <p className="hero-subtitle animate-fade-in-up delay-200">{page.heroDescription}</p>

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

      {/* WHY SECTION */}
      <section className="py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-center">{whyTitle(cat, page.slug)}</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-slate-600 text-lg leading-relaxed space-y-5">
              {whyBody(cat, page).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
              <AreaServiceQuoteCard buttonLabel="Book Now" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SPOTLIGHT */}
      {spot ? (
        <section className="py-14 px-4 bg-emerald-50/80 border-y border-emerald-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              Local {label} in Birmingham &amp; West Midlands
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">{spot}</p>
          </div>
        </section>
      ) : null}

      {/* GUARANTEES */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            What You Get With WOW Gutters Ltd
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {guaranteesList.map((g) => (
              <li key={g} className="flex gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: colors.primary }} />
                <span className="text-slate-800 font-semibold">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {label} prices in Birmingham &amp; West Midlands
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Most properties are quoted between <strong>£{priceFrom}</strong> and{' '}
            <strong>£{priceTo}</strong> depending on the size and condition of your property.
            Fixed price confirmed before we arrive — no call-out fee and no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing/"
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

      {/* PROPERTY TYPES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            {label} — Property Types We Cover
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            <div className="flex-1 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
              {propTypes.map((row) => (
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

      {/* AREAS COVERED */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{areasTitle(cat, page.slug)}</h2>
          <p className="text-slate-700 text-lg">{areasContent(cat, page.slug)}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/gutter-cleaning-birmingham/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Birmingham</Link>
            <Link href="/gutter-cleaning-coventry/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Coventry</Link>
            <Link href="/gutter-cleaning-wolverhampton/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Wolverhampton</Link>
            <Link href="/gutter-cleaning-derby/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Derby</Link>
            <Link href="/gutter-cleaning-solihull/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Solihull</Link>
            <Link href="/gutter-cleaning-walsall/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Walsall</Link>
            <Link href="/gutter-cleaning-dudley/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Dudley</Link>
            <Link href="/gutter-cleaning-near-me/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Near Me</Link>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {page.sections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-16 md:py-20 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
              {section.heading}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {section.content}
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {section.bullets.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* WHATSAPP */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] py-20 px-4">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight">
              Need a fast answer? <span className="text-[#34e3b6]">Message us on WhatsApp</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#dbe7ff]/88 max-w-xl">
              Our team responds quickly to WhatsApp messages. One tap and we&apos;ll help with quotes, availability and advice.
            </p>
          </div>

          <div className="w-full max-w-[560px] rounded-2xl border border-white/20 bg-[#f8fafc]/96 p-4 md:p-6 shadow-[0_18px_45px_rgba(4,12,32,0.45)]">
            <h3 className="mb-4 text-center text-2xl md:text-3xl font-black text-[#0f1e3d]">Ask us a question</h3>
            <div className="space-y-2">
              {wq.map((question) => (
                <div
                  key={question}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[#e6f9f1] transition-colors"
                >
                  <span className="text-[15px] md:text-base text-[#1c2a44] font-semibold">
                    &quot;{question}&quot;
                  </span>
                  <a
                    href={`${WA}?text=${encodeURIComponent(`Hi, ${question}`)}`}
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

      {/* FAQ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d6e4e 0%, #19C58B 50%, #14B27D 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">FAQs — {faqLabel}</h2>
            <p className="text-xl text-white/90">
              Can&apos;t find your answer? Call{' '}
              <a href="tel:07421433910" className="font-bold underline underline-offset-2">07421 433910</a>.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                name={`kw-faq-${page.slug}`}
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

      <GoogleReviewsBlock className="bg-white" />

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{page.cta.title}</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">{page.cta.description}</p>
          <div className="mt-8 flex justify-center">
            <AreaServiceQuoteCard />
          </div>
        </div>
      </section>

      <AreaBlogSnippet />
      <AreaServicesRange />
      <AreaRecentWork />
      <AreaContactMap />
      <AreaCrawlFooter currentSlug={page.slug} />

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
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          max-width: 720px;
          margin: 0 0 1.35rem 0;
          line-height: 1.58;
          font-weight: 500;
        }
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

        .animate-fade-in-up { opacity: 0; animation: kwFadeInUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes kwFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
