'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, Phone, Check, Building2, Home, Warehouse, Cable, Images, Shield } from 'lucide-react';
import { colors } from '@/constants/colors';
import { areaPath } from '@/lib/areaSlugs';
import AreaServicesRange from '@/components/areas/AreaServicesRange';
import DerbyFAQ from '@/components/areas/DerbyFAQ';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaCrawlFooter from '@/components/navigation/AreaCrawlFooter';
import GoogleReviewsBlock from '@/components/sections/GoogleReviewsBlock';

const HERO_USP_PILLS: { label: string; Icon: LucideIcon }[] = [
  { label: 'No ladders', Icon: Cable },
  { label: 'Before & after photos', Icon: Images },
  { label: 'Fully insured', Icon: Shield },
];

const PDF_BENEFITS = [
  {
    title: 'Ground-level vacuum system',
    body: 'No ladders against your Derby home — zero risk of damage to fascias, soffits or brickwork on historic properties.',
  },
  {
    title: 'Up to 4 storeys',
    body: 'Handles everything from Derby terraces to modern apartment blocks across the city.',
  },
  {
    title: 'Before & after photos',
    body: 'We photograph every clean, showing you exactly what was removed and the condition of your system.',
  },
  {
    title: 'Downpipe clearing included',
    body: 'All downpipes flushed and tested as standard — no extra cost, no call-backs.',
  }
] as const;

const PDF_PROCESS = [
  {
    step: 1,
    title: 'Assessment',
    body: 'We arrive at your Derby property and carry out a full inspection of the gutter system — checking for blockages, slipped joints, broken brackets, and any signs of water damage before we begin work.',
  },
  {
    step: 2,
    title: 'Vacuum clean',
    body: 'Our ground-level vacuum system removes all debris — leaves, moss, silt, twigs and nests — directly into a sealed collection unit. No ladders, no mess in your garden, no disruption.',
  },
  {
    step: 3,
    title: 'Downpipe flush',
    body: 'We flush each downpipe with water to confirm clear flow. Blocked downpipes are cleared on the spot using our jetting equipment — included in every Derby clean at no extra charge.',
  },
  {
    step: 4,
    title: 'Report & photos',
    body: 'You receive before and after photos showing the full clean. We also send a condition report highlighting any repairs or maintenance we recommend — honest advice, never hard sell.',
  },
] as const;

const PDF_ISSUES = [
  {
    tag: 'Most common',
    title: 'Leaf & debris build-up',
    body: 'Derby has some of the highest tree coverage in the East Midlands. Parks, gardens and tree-lined streets drop leaves from late August, and by October most gutters need clearing to prevent overflow.',
  },
  {
    tag: 'Year-round',
    title: 'Moss & algae growth',
    body: 'Derby homes near the River Derwent and in areas like Allestree and Darley Abbey suffer from persistent damp microclimates. Moss builds up fast, weighing down gutters and trapping debris.',
  },
  {
    tag: 'Urgent',
    title: 'Overflowing gutters',
    body: 'When water spills over blocked gutters, it saturates Derby sandstone and brickwork. Left unchecked, this causes internal damp and structural damage that costs thousands to repair.',
  },
  {
    tag: 'Included',
    title: 'Blocked downpipes',
    body: 'Derby homes with older uPVC systems often have narrow downpipe outlets that clog with leaf sludge. We clear and flush every downpipe as part of the standard clean — no call-backs.',
  },
  {
    tag: 'Winter risk',
    title: 'Ice & freeze damage',
    body: 'Derby winter temperatures regularly dip below freezing. Water trapped in blocked gutters expands as ice, cracking joints and splitting pipes. A pre-winter clean prevents this.',
  },
  {
    tag: 'Common',
    title: 'Bird & pest debris',
    body: 'Pigeons and starlings nest in Derby roof spaces and gutters all year round. Nesting material blocks outlets quickly and droppings accelerate corrosion. We remove it all hygienically.',
  },
] as const;

const PDF_PROPERTY_ROWS: { type: string; issue: string; approach: string }[] = [
  {
    type: 'Victorian & Edwardian terraces',
    issue: 'Cast iron gutters common in Derby conservation areas; prone to rust and joint failure',
    approach: 'Specialist low-pressure vacuum to avoid disturbing original brackets; rust points noted in report',
  },
  {
    type: '1950s\u201370s semi-detached',
    issue: 'Standardised estates across Mickleover, Littleover, Chaddesden; heavy moss from mature gardens',
    approach: 'Full gutter vacuum, downpipe flush, bracket tighten — same-day service on most estate properties',
  },
  {
    type: 'Modern detached houses',
    issue: '2\u20133 storey new builds with flat roof interfaces and multiple valleys',
    approach: 'Extension lances reach all sections including garage and conservatory gutters without scaffolding',
  },
  {
    type: 'Bungalows',
    issue: 'Single-storey but ground-level gutters clog with lawn clippings and low-hanging tree debris',
    approach: 'Rapid clean and flush in under 30 minutes; full guarantee included',
  },
  {
    type: 'Flats & apartment blocks',
    issue: 'Three-plus storeys; landlord compliance and tenant safety requirements',
    approach: 'Industrial-reach vacuum for multi-storey access; block discounts for Derbyshire landlords',
  },
  {
    type: 'Commercial properties',
    issue: 'Retail premises in Derby city centre; strict health and safety protocols',
    approach: 'Out-of-hours cleaning available; fixed-price maintenance contracts for Derbyshire businesses',
  },
];

const COVERAGE_LINKS: { label: string; slug: string }[] = [
  { label: 'Nottingham', slug: 'nottingham' },
  { label: 'Burton upon Trent', slug: 'burton-upon-trent' },
  { label: 'Chesterfield', slug: 'chesterfield' },
  { label: 'Mansfield', slug: 'mansfield' },
  { label: 'Long Eaton', slug: 'long-eaton' },
  { label: 'Swadlincote', slug: 'swadlincote' },
  { label: 'Ilkeston', slug: 'ilkeston' },
  { label: 'Matlock', slug: 'matlock' },
  { label: 'Ashbourne', slug: 'ashbourne' },
  { label: 'Belper', slug: 'belper' },
  { label: 'Ripley', slug: 'ripley' },
  { label: 'Alfreton', slug: 'alfreton' },
];

const WHATSAPP_QS = [
  'What does gutter cleaning cost near me in Derby?',
  'Do you offer a discount for annual gutter cleaning?',
  'Can you come out this week for a quote?',
  'Will you clean conservatory gutters too?',
] as const;

const WA = 'https://wa.me/447421433910';

export default function DerbyGutterCleaningPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <main className="bg-white area-page-wrapper">
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
            <span className="hero-badge-text">Local Derby specialists &bull; Same-day booking</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-line">Gutter Cleaning Derby</span>
            <br />
            <span className="title-accent" style={{ color: colors.primary }}>
              WOW Gutters Ltd
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

          <p className="hero-subtitle hidden md:block">
            WOW Gutters Ltd is Derby&apos;s trusted gutter cleaning specialist. We use a ground-level vacuum system &mdash;
            no ladders, no damage, no mess. Up to 4-storey reach, before &amp; after photos on every job, and a 1-year
            service guarantee. Fully insured.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full max-w-xl animate-fade-in-up delay-300">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn flex-1">
              <span className="btn-arrow">&gt;</span>
              <span className="btn-label">
                Get a <span className="btn-free">FREE</span> quote
              </span>
            </Link>
            <a
              href="tel:07421433910"
              className="hero-primary-btn-link flex-1 min-h-[56px] flex items-center justify-center gap-2 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors"
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

      <section className="py-16 md:py-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: colors.primary }}>
            Local gutter cleaning specialists
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
            Why Derby gutters need regular professional cleaning
          </h2>
          <div className="text-slate-600 text-lg leading-relaxed space-y-5 text-left">
            <p>
              Derby sits on the River Derwent with tree-lined streets running through the Cathedral Quarter, Allestree,
              Darley Abbey and the suburbs beyond. The combination of mature gardens, parkland and above-average East
              Midlands rainfall means gutters here fill faster than in most UK cities &mdash; especially during autumn when
              leaves from lime, sycamore and oak trees blanket Derby rooftops.
            </p>
            <p>
              Blocked gutters don&apos;t just spill water &mdash; they direct it into your walls, windows and foundations.
              Over time this causes penetrating damp, rotten fascias, damaged pointing and in severe cases, subsidence risk
              around Derby&apos;s clay-heavy soil. The cost of repairing water damage is always far higher than the cost of a
              professional gutter clean.
            </p>
            <p>
              We recommend Derby homeowners book a gutter clean twice a year &mdash; late September to clear summer debris
              before autumn leaf fall, and a spring clean in March or April to remove moss and nesting material from the
              winter months.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-10">
            What you get with WOW Gutters Ltd in Derby
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PDF_BENEFITS.map((b) => (
              <li
                key={b.title}
                className="flex gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: colors.primaryGradient }}
                >
                  <Check className="w-4 h-4 text-white" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">{b.title}</p>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07421433910"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:opacity-95 transition-opacity"
              style={{ background: colors.primaryGradient }}
            >
              <Phone className="w-5 h-5" />
              Get a same-day quote &mdash; 07421 433910
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Average rating', value: '4.9' },
              { label: 'Google rating', value: '4.9\u2605' },
              { label: 'Storeys reach', value: '4' },
              { label: 'Days a week', value: '7' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-3xl font-black" style={{ color: colors.primary }}>
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-slate-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 mt-10 max-w-2xl mx-auto">
            Call our Derby team now for a fast, friendly quote. We cover all DE postcodes including Derby city centre,
            Allestree, Mickleover, Chellaston and Spondon — and can often book within 2 working days.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-center mb-3" style={{ color: colors.primary }}>
            Our process
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-4">
            Our gutter cleaning process &mdash; safe, thorough, no mess
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Every WOW Gutters Ltd job across Derby follows the same four-step process &mdash; from inspection to photo
            report. No shortcuts, no skipped downpipes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {PDF_PROCESS.map((p) => (
              <div
                key={p.step}
                className="relative p-8 rounded-2xl border border-slate-200 bg-slate-50/80 hover:border-[#19C58B]/40 transition-colors"
              >
                <span className="absolute top-6 right-6 text-5xl font-black text-slate-200 select-none" aria-hidden>
                  {p.step}
                </span>
                <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: colors.primary }}>
                  Step {p.step}
                </p>
                <h3 className="text-xl font-black text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Typical gutter issues we resolve in Derby
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 text-sm">
            Typical gutter issues our Derby customers face across the city and surrounding suburbs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PDF_ISSUES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/25 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#34e3b6]">{c.tag}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{c.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto min-w-[min(100%,720px)]">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start flex-wrap">
            <Building2 className="w-8 h-8" style={{ color: colors.primary }} />
            <Home className="w-7 h-7 text-slate-400" />
            <Warehouse className="w-7 h-7 text-slate-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center md:text-left">
            Gutter cleaning for every Derby property type
          </h2>
          <p className="text-slate-600 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            Derby&apos;s housing spans Grade II listed Georgian terraces in the Cathedral Quarter, interwar semis in Mickleover, and modern estates across Oakwood and Chellaston. We clean them all.
          </p>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-black text-slate-900">Property type</th>
                  <th className="p-4 font-black text-slate-900 hidden md:table-cell">Common gutter issue in Derby</th>
                  <th className="p-4 font-black text-slate-900">Our approach</th>
                </tr>
              </thead>
              <tbody>
                {PDF_PROPERTY_ROWS.map((row) => (
                  <tr key={row.type} className="border-b border-slate-100 last:border-0 bg-white hover:bg-slate-50/80">
                    <td className="p-4 font-bold text-slate-900 align-top">{row.type}</td>
                    <td className="p-4 text-slate-600 align-top hidden md:table-cell">{row.issue}</td>
                    <td className="p-4 text-slate-700 align-top">{row.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-4">
            Areas we cover across Derbyshire
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            We cover Derby city and all surrounding towns. Pick a town below. Not listed? Call us on{' '}
            <a href="tel:07421433910" className="font-semibold underline" style={{ color: colors.primary }}>
              07421 433910
            </a>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COVERAGE_LINKS.map(({ label, slug }) => (
              <Link
                key={slug}
                href={areaPath(slug)}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] py-20 px-4">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/30 blur-[1px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/24 blur-[1px]" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight">
              Need a fast answer?{' '}
              <span className="text-[#34e3b6]">Message us on WhatsApp</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#dbe7ff]/88 max-w-xl">
              Our Derby team responds quickly to WhatsApp messages. One tap and we&apos;ll help you with quotes,
              availability and advice.
            </p>
          </div>

          <div className="w-full max-w-[560px] rounded-2xl border border-white/20 bg-[#f8fafc]/96 p-4 md:p-6 shadow-[0_18px_45px_rgba(4,12,32,0.45)]">
            <h3 className="mb-4 text-center text-2xl md:text-3xl font-black text-[#0f1e3d]">Ask us a question</h3>
            <p className="text-center text-sm text-slate-600 mb-4">
              Tap to send directly to our team &mdash; we reply fast.
            </p>
            <div className="space-y-2">
              {WHATSAPP_QS.map((question) => (
                <div
                  key={question}
                  className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[#e6f9f1] transition-colors"
                >
                  <span className="text-[15px] md:text-base text-[#1c2a44] font-semibold">
                    &quot;{question}&quot;
                  </span>
                  <a
                    href={`${WA}?text=${encodeURIComponent(`Hi, I am in Derby. ${question}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md bg-[#16c784] px-4 py-1.5 text-base font-black text-white hover:bg-[#0fb272] transition-colors inline-flex items-center gap-1.5 shadow-[0_6px_14px_rgba(22,199,132,0.35)]"
                  >
                    Ask
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AreaServicesRange />

      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-center mb-3" style={{ color: colors.primary }}>
            More services
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-4">
            Our full range of services across Derbyshire
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/roof-cleaning"
              className="group p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">Popular</p>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">
                Roof cleaning &amp; moss removal
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Soft-wash roof cleaning and moss treatment across Derby. Extends tile life, removes black streaks, improves
                kerb appeal.
              </p>
            </Link>
            <Link
              href="/services/upvc-cleaning"
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">
                Exterior uPVC cleaning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hot purified water cleaning for fascias, soffits, frames and conservatories. Streak-free, bright finish every
                time.
              </p>
            </Link>
            <Link
              href="/services/gutter-repairs"
              className="group p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">Gutter repairs</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leaking joints, broken brackets, sagging sections. Fast repairs with a 6-month guarantee by trained
                engineers.
              </p>
            </Link>
            <Link
              href="/services/gutter-inspection"
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">Free gutter inspection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert roof and gutter inspection &mdash; no charge. We identify issues early and give honest advice before work
                starts.
              </p>
            </Link>
            <Link
              href="/commercial"
              className="group p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">
                Commercial gutter cleaning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reliable maintenance for offices, retail, schools and landlords. Planned contracts and flexible scheduling
                available.
              </p>
            </Link>
            <Link
              href="/services/conservatory"
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">
                Conservatory gutter cleaning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Specialist reach equipment for gutters over conservatories, porches and bay windows &mdash; common on Derby
                period properties and new builds alike.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <DerbyFAQ />

      <GoogleReviewsBlock city="Derby" className="bg-white" />

      <section
        className="py-16 px-4 border-t border-slate-200"
        style={{ background: `linear-gradient(180deg, ${colors.lightGray} 0%, #fff 100%)` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Book your gutter clean in Derby &mdash; free quote in 60 seconds
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn w-full sm:w-auto min-w-[240px]">
              <span className="btn-arrow">&gt;</span>
              <span className="btn-label">
                Get a <span className="btn-free">FREE</span> quote online
              </span>
            </Link>
            <a
              href={`${WA}?text=${encodeURIComponent('Hi, I would like a quote for gutter cleaning in Derby.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full border-2 font-bold border-[#16c784] text-[#0f766e] hover:bg-[#ecfdf5] transition-colors"
            >
              WhatsApp us
            </a>
          </div>
          <p className="text-slate-800 font-semibold mb-1">
            Call us:{' '}
            <a href="tel:07421433910" className="hover:underline">
              07421 433910
            </a>
          </p>
          <p className="text-slate-600 text-sm mb-1">
            Email:{' '}
            <a href="mailto:support@wowgutters.co.uk" className="hover:underline">
              support@wowgutters.co.uk
            </a>
          </p>
          <p className="text-slate-500 text-sm">
            Open 24 hours a day, 7 days a week
          </p>
          <p className="text-slate-500 text-sm mt-6 max-w-lg mx-auto">
            WOW Gutters Ltd &mdash; professional gutter cleaning and roofline services across Derby city,
            Derbyshire and the East Midlands. 4.9 stars on Google. Same-day bookings available across all DE postcodes.
          </p>
        </div>
      </section>

      <AreaBlogSnippet locality="Derby" />
      <AreaRecentWork />
      <AreaContactMap geo={{ latitude: 52.9225, longitude: -1.4746 }} />
      <AreaCrawlFooter currentSlug="derby" />

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
        }
        .title-line {
          font-size: clamp(1.25rem, 3.2vw, 2rem);
          font-weight: 900;
        }
        .title-accent {
          font-size: clamp(1.65rem, 4.2vw, 2.85rem);
          font-weight: 900;
        }
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          max-width: 720px;
          margin: 0 0 1.35rem 0;
          line-height: 1.58;
          font-weight: 500;
          text-wrap: balance;
          text-shadow: 0 1px 2px rgba(0,0,0,0.65), 0 2px 16px rgba(0,0,0,0.45);
          opacity: 1;
        }
        .hero-primary-btn-link { text-decoration: none; }
        .hero-primary-btn {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: ${colors.primaryGradient};
          padding: 18px 32px; border-radius: 100px; cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(25, 197, 139, 0.3);
        }
        .hero-primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(25, 197, 139, 0.4);
        }
        .btn-arrow { color: white; font-size: 1.1rem; line-height: 1; }
        .btn-label { color: white; font-size: clamp(1.05rem, 2vw, 1.35rem); font-weight: 800; }
        .btn-free { text-decoration: underline; text-underline-offset: 3px; }
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
            flex: 0 1 auto;
          }
          .hero-subtitle {
            font-size: 1rem;
            line-height: 1.55;
            padding: 0 2px;
            margin-bottom: 1.5rem;
          }
          .hero-badge { padding: 8px 16px; }
          .hero-badge-text { font-size: 0.8rem; }
          .hero-primary-btn { padding: 14px 20px; }
        }

        .animate-fade-in-up { opacity: 0; animation: derbyFadeInUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes derbyFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            opacity: 1;
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}