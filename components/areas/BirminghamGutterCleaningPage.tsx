'use client';

/**
 * Gutter cleaning Birmingham — page copy aligned with gutter-cleaning-birmingham.pdf
 */
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Check, Building2, Home, Warehouse } from 'lucide-react';
import { colors } from '@/constants/colors';
import { areaPath } from '@/lib/areaSlugs';
import AreaServicesRange from '@/components/areas/AreaServicesRange';
import BirminghamFAQ from '@/components/areas/BirminghamFAQ';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaContactMap from '@/components/areas/AreaContactMap';
import AreaFeatures from '@/components/areas/AreaFeatures';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

/** PDF: top trust strip */
const PDF_TRUST_LINE_1 = [
  '4.9 from 2,696+ reviews',
  'Vacuum system — no ladders',
  '4-storey reach',
  '7 days a week',
] as const;

const PDF_HERO_PILLS = ['No ladders', 'Before & after photos', 'Fully insured'] as const;

const PDF_BENEFITS = [
  {
    title: 'Ground-level vacuum system',
    body: 'No ladders placed against your property, zero risk of fascia damage.',
  },
  {
    title: 'Up to 4 storeys',
    body: 'Reaches all Birmingham homes, flats and commercial buildings.',
  },
  {
    title: 'Before & after photos',
    body: 'Visual proof of every clean, sent directly to you.',
  },
  {
    title: 'Downpipe clearing included',
    body: 'We flush and test every downpipe as standard.',
  }
] as const;

const PDF_PROCESS = [
  {
    step: 1,
    title: 'Assessment',
    body: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections, and areas of concern. We tell you exactly what we find.',
  },
  {
    step: 2,
    title: 'Vacuum clean',
    body: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — directly into a sealed collection unit. No mess left behind.',
  },
  {
    step: 3,
    title: 'Downpipe check',
    body: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.',
  },
  {
    step: 4,
    title: 'Photos & report',
    body: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.',
  },
] as const;

const PDF_ISSUES = [
  {
    tag: 'Most common',
    title: 'Leaf & debris build-up',
    body: "Birmingham's dense tree canopy fills gutters rapidly each autumn. Our vacuum removes all leaf and organic debris completely, restoring full gutter flow.",
  },
  {
    tag: 'Year-round',
    title: 'Moss & algae growth',
    body: 'Moss narrows gutter channels and adds significant weight. Left uncleared, it accelerates joint failure and bracket damage. We remove it all at root level.',
  },
  {
    tag: 'Urgent',
    title: 'Overflowing gutters',
    body: 'Water cascading over gutters during rainfall is a clear sign of blockage. We clear the cause and test the full system to prevent it happening again.',
  },
  {
    tag: 'Included',
    title: 'Blocked downpipes',
    body: 'Downpipe blockages are the most common cause of water backing up into gutters. We clear and flush every downpipe as part of the standard service.',
  },
  {
    tag: 'Winter risk',
    title: 'Ice & freeze damage',
    body: 'Standing water in blocked gutters freezes in winter, expanding and cracking joints. A pre-winter clean eliminates this risk entirely.',
  },
  {
    tag: 'Common',
    title: 'Bird & pest debris',
    body: 'Bird nests and droppings block gutter outlets and attract further pests. We remove all nesting material and debris safely and hygienically.',
  },
] as const;

const PDF_PROPERTY_ROWS: { type: string; issue: string; approach: string }[] = [
  {
    type: 'Victorian & Edwardian terraces',
    issue: 'Older cast iron or aged uPVC systems, often neglected for years',
    approach: 'Careful vacuum clean preserving original features; condition report included',
  },
  {
    type: '1950s–70s semi-detached',
    issue: 'Standard uPVC runs with heavy leaf and moss accumulation',
    approach: 'Thorough vacuum clean, downpipe flush, bracket inspection',
  },
  {
    type: 'Modern detached houses',
    issue: '2–3 storeys; debris over extensions and garage roofs',
    approach: 'Full reach vacuum system covers all sections including conservatory gutters',
  },
  {
    type: 'Bungalows',
    issue: 'Lower gutters but moss build-up still causes overflow',
    approach: 'Quick, affordable clean; same professional standard and guarantee',
  },
  {
    type: 'Flats & apartment blocks',
    issue: 'Multi-storey access; landlord maintenance requirements',
    approach: '4-storey reach; commercial rates for landlords and managing agents',
  },
  {
    type: 'Commercial properties',
    issue: 'Planned maintenance obligations; large gutter runs',
    approach: 'Maintenance contracts available; flexible out-of-hours scheduling',
  },
];

const COVERAGE_LINKS: { label: string; slug: string }[] = [
  { label: 'Solihull', slug: 'solihull' },
  { label: 'Wolverhampton', slug: 'wolverhampton' },
  { label: 'Walsall', slug: 'walsall' },
  { label: 'Coventry', slug: 'coventry' },
  { label: 'Dudley', slug: 'dudley' },
  { label: 'Sandwell & West Bromwich', slug: 'sandwell' },
  { label: 'Worcester', slug: 'worcester' },
  { label: 'Bromsgrove', slug: 'bromsgrove' },
  { label: 'Redditch', slug: 'redditch' },
  { label: 'Kidderminster', slug: 'kidderminster' },
  { label: 'Malvern', slug: 'malvern' },
  { label: 'Evesham', slug: 'evesham' },
];

const PDF_REVIEWS = [
  {
    initial: 'M',
    name: 'Mark M.',
    place: 'Birmingham',
    text: "Harley came out to sort my gutters today. Great service, friendly and professional. Pictures showed how blocked the gutters were — couldn't believe it! Would 100% recommend.",
  },
  {
    initial: 'N',
    name: 'Neil G.',
    place: 'Birmingham',
    text: 'Excellent, friendly and professional service from Ian. We had persistent leaks at various points around the house — all sorted now. Highly recommend WOW Gutters.',
  },
  {
    initial: 'G',
    name: 'Graham B.',
    place: 'Sutton Coldfield',
    text: 'Highly recommended. Friendly service, arrived on time and did a thorough job. The before and after photos were brilliant — you could really see the difference.',
  },
] as const;

const WHATSAPP_QS = [
  'How much is gutter cleaning for my property?',
  'Can you repair leaking or damaged gutters?',
  'Do you have availability this week?',
  'Could I get a fast quote for my home?',
] as const;

const WA = 'https://wa.me/447421433910';

export default function BirminghamGutterCleaningPage() {
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
            className="hero-video"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="/gutter-final-video.mp4" type="video/mp4" />
          </video>
          <div className="area-hero-overlay" />
        </div>

        <div className="area-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="hero-badge-text">Local Birmingham specialists • Same-day booking</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-line">Gutter Cleaning Birmingham —</span>
            <br />
            <span className="title-accent" style={{ color: colors.primary }}>
              Professional, Safe &amp; Guaranteed
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-4 max-w-3xl animate-fade-in-up delay-150">
            {PDF_TRUST_LINE_1.map((chip) => (
              <span
                key={chip}
                className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/95"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl animate-fade-in-up delay-175">
            {PDF_HERO_PILLS.map((p) => (
              <span
                key={p}
                className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-md bg-black/25 border border-white/15 text-white"
              >
                {p}
              </span>
            ))}
          </div>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            WOW Gutters Ltd is Birmingham&apos;s trusted gutter cleaning specialist. We use a ground-level vacuum system — no
            ladders, no damage, no mess. Up to 4-storey reach, before &amp; after photos on every job
            guarantee.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full max-w-xl animate-fade-in-up delay-300">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn flex-1">
              <span className="btn-arrow">&#9658;</span>
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
            Why Birmingham gutters need regular professional cleaning
          </h2>
          <div className="text-slate-600 text-lg leading-relaxed space-y-5 text-left">
            <p>
              Birmingham has one of the densest urban tree canopies of any UK city. From the mature oaks lining
              Edgbaston&apos;s streets to the established gardens of Sutton Coldfield and Moseley, autumn leaf fall fills
              gutters rapidly — and Birmingham&apos;s above-average annual rainfall of around 750mm means blocked gutters can
              cause serious water damage within weeks.
            </p>
            <p>
              When gutters overflow, water runs down your external walls instead of safely away via the downpipe. Over time
              this leads to damp patches, staining on brickwork, damage to window frames, and in severe cases, penetration
              into the foundations. The repair costs for water damage caused by blocked gutters are consistently far higher
              than the cost of an annual clean.
            </p>
            <p>
              Most Birmingham homes need their gutters cleaned once or twice a year — late autumn (October–November) being
              the most critical time, with a spring clean in April or May for properties with significant tree coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-10">
            What you get with WOW Gutters in Birmingham
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
              Get a same-day quote — 07421 433910
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Average rating', value: '4.9' },
              { label: 'Verified reviews', value: '2,696+' },
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
            Call our Birmingham team now for a fast, friendly quote. We cover all Birmingham postcodes and can often book
            within 2–3 working days.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-center mb-3" style={{ color: colors.primary }}>
            Our process
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-4">
            Our gutter cleaning process — safe, thorough, no mess
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Every WOW Gutters job in Birmingham follows the same five-step process — from the moment we arrive to the
            moment we leave, with photo proof throughout.
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
            Typical gutter issues we resolve in Birmingham
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 text-sm">
            Common problems we solve — wording as on our Birmingham service guide.
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
            Gutter cleaning for every Birmingham property type
          </h2>
          <p className="text-slate-600 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            Birmingham&apos;s housing stock is one of the most diverse in the UK — from Victorian terraces to modern
            commercial buildings. We handle all of them.
          </p>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-black text-slate-900">Property type</th>
                  <th className="p-4 font-black text-slate-900 hidden md:table-cell">Common gutter issue in Birmingham</th>
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
            Areas we cover across Birmingham
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            We cover the entire city and all surrounding neighbourhoods. Click your area to find out more. Not listed? Call us
            on{' '}
            <a href="tel:07421433910" className="font-semibold underline" style={{ color: colors.primary }}>
              07421 433910
            </a>{' '}
            — we cover many more postcodes across the West Midlands and Worcestershire.
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
              Our Birmingham team responds quickly to WhatsApp messages. One tap and we&apos;ll help you with quotes,
              availability and advice.
            </p>
          </div>

          <div className="w-full max-w-[560px] rounded-2xl border border-white/20 bg-[#f8fafc]/96 p-4 md:p-6 shadow-[0_18px_45px_rgba(4,12,32,0.45)]">
            <h3 className="mb-4 text-center text-2xl md:text-3xl font-black text-[#0f1e3d]">Ask us a question</h3>
            <p className="text-center text-sm text-slate-600 mb-4">
              Tap to send directly to our team — we reply fast.
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
                    href={`${WA}?text=${encodeURIComponent(`Hi, I am in Birmingham. ${question}`)}`}
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
            Our full range of services in Birmingham
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
                Safe soft-wash roof cleaning and moss treatment in Birmingham. Protects tiles, extends roof life, improves
                appearance.
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
              href="/services/free-gutter-inspection"
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">Free gutter inspection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert roof and gutter inspection — no charge. We identify issues early and give honest advice before work
                starts.
              </p>
            </Link>
            <Link
              href="/services/commercial-gutter-cleaning"
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
              href="/services/conservatory-cleaning"
              className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#19C58B]/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0f766e] mb-2">
                Conservatory gutter cleaning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Specialist access equipment for gutters over conservatories and porches — a common challenge on Birmingham
                homes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <BirminghamFAQ />

      <AreaFeatures formattedArea="Birmingham" />

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: colors.primary }}>
                Customer reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                What Birmingham customers say about WOW Gutters
              </h2>
              <p className="text-slate-600 mt-2">
                4.9 based on 2,696+ verified Google reviews. Fully insured· Before &amp; after photos · 7
                days a week.
              </p>
            </div>
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white shrink-0"
              style={{ background: colors.primaryGradient }}
            >
              See all reviews
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PDF_REVIEWS.map((r) => (
              <blockquote
                key={r.name}
                className="p-8 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-slate-900 block">{r.name}</cite>
                    <span className="text-sm text-slate-500">{r.place}</span>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt=""
                    className="w-5 h-5 ml-auto opacity-80"
                  />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[11px] text-slate-500 mt-3 font-semibold">Verified Google review</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 border-t border-slate-200"
        style={{ background: `linear-gradient(180deg, ${colors.lightGray} 0%, #fff 100%)` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Book your gutter clean in Birmingham — free quote in 60 seconds
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/quote" className="hero-primary-btn-link hero-primary-btn w-full sm:w-auto min-w-[240px]">
              <span className="btn-arrow">&#9658;</span>
              <span className="btn-label">
                Get a <span className="btn-free">FREE</span> quote online
              </span>
            </Link>
            <a
              href={`${WA}?text=${encodeURIComponent('Hi, I would like a quote for gutter cleaning in Birmingham.')}`}
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
            Mon–Fri 7am–8pm · Sat 9am–6pm · Sun 10am–6pm
          </p>
          <p className="text-slate-500 text-sm mt-6 max-w-lg mx-auto">
            WOW Gutters — professional gutter cleaning and roofline services across Birmingham, West Midlands and
            Worcestershire. Trusted by 2,696+ customers. Same-day bookings available.
          </p>
        </div>
      </section>

      <AreaBlogSnippet />
      <AreaRecentWork />
      <AreaContactMap />
      <ContactInfoSection />

      <style>{`
        .area-page-wrapper { overflow-x: hidden; }
        .area-hero-section {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
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
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          max-width: 720px; margin: 0 0 1.25rem 0;
          line-height: 1.6; font-weight: 500;
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
          .area-hero-section { min-height: 90svh; align-items: flex-start; }
          .area-hero-content { max-width: 100%; padding: 76px 16px 120px; }
          .hero-badge { padding: 8px 16px; }
          .hero-badge-text { font-size: 0.8rem; }
          .hero-primary-btn { padding: 14px 20px; }
        }

        .animate-fade-in-up { opacity: 0; animation: bhamFadeInUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-175 { animation-delay: 0.175s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes bhamFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
