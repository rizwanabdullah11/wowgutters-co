'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Cable, Images, Shield, ChevronDown, CheckCircle } from 'lucide-react';
import { colors } from '@/constants/colors';
import { AreaServiceQuoteCard } from '@/components/areas/AreaServiceBlock';
import AreaServicesRange from '@/components/areas/AreaServicesRange';
import AreaBlogSnippet from '@/components/areas/AreaBlogSnippet';
import AreaRecentWork from '@/components/areas/AreaRecentWork';
import AreaContactMap from '@/components/areas/AreaContactMap';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

const WA = 'https://wa.me/447421433910';

const HERO_USP_PILLS = [
  { label: 'No ladders', Icon: Cable },
  { label: 'Before & after photos', Icon: Images },
  { label: 'Fully insured', Icon: Shield },
];

const guaranteeItems = [
  'Ground-level vacuum system — no ladders placed against your property',
  'Reaches up to 4 storeys — Victorian terraces, semis and large detached homes',
  'Before & after photos included as standard on every job',
  'Fully insured — comprehensive public liability cover',
  '4.9★ rating from 2,696+ verified customer reviews',
  '1-year service guarantee on every clean',
];

const propertyTypes = [
  {
    label: 'Victorian terraces (St Mary\'s Row, Woodbridge Road, Salisbury Road)',
    detail: 'Moseley\'s Victorian terraces are among the most characterful properties in Birmingham — and among the most challenging for conventional ladder-based cleaning. Original cast iron guttering on these properties requires careful handling; our vacuum system operates from the ground, placing nothing against your brickwork or paintwork.',
  },
  {
    label: 'Edwardian semis (Wake Green Road, Oxford Road, College Road)',
    detail: 'The large Edwardian semis along Wake Green Road and Oxford Road have generous gutter runs and multiple downpipes. Our 4-storey reach covers every section in a single visit, with full downpipe flushing included at no extra charge.',
  },
  {
    label: 'Large detached homes (Moseley Park area, Church Road)',
    detail: 'Moseley\'s larger detached properties often have complex rooflines with multiple valleys and sections. Our vacuum system handles the full length from the ground — no scaffolding, no cherry pickers, no disruption to gardens.',
  },
  {
    label: 'Converted flats and apartments',
    detail: 'Many of Moseley\'s larger Victorian villas have been converted to flats. We work with freeholders and managing agents, provide photographic evidence for maintenance records, and can arrange planned maintenance contracts for blocks.',
  },
  {
    label: 'Period properties near Moseley Bog',
    detail: 'The properties bordering Moseley Bog nature reserve experience above-average leaf and debris fall due to proximity to ancient woodland. Annual cleaning is particularly important for these homes.',
  },
];

const whatsappQuestions = [
  'How much is gutter cleaning for my property?',
  'Do you have availability this week?',
  'Can you repair leaking or damaged gutters?',
  'Could I get a fast quote for my home?',
];

const faqs = [
  {
    question: 'How much does gutter cleaning cost in Moseley?',
    answer: 'Prices start from £55 for a standard terraced property in Moseley. Most Victorian and Edwardian semis in B13 range from £65 to £90, and larger detached properties from £90 to £140. All prices include downpipe flushing and before & after photos. Fixed quote provided before work starts — no hidden fees.',
  },
  {
    question: 'Is there a gutter cleaning service near me in Moseley?',
    answer: 'Yes — WOW Gutters covers all of Moseley (B13) including properties near Moseley Park & Pool, along Alcester Road, Salisbury Road, Wake Green Road, St Mary\'s Row, Woodbridge Road and all surrounding streets. We work in Moseley regularly and can often book within 2 to 3 working days. Call 07421 433910 to check today\'s availability.',
  },
  {
    question: 'Do you clean gutters near Moseley Park and the village area?',
    answer: 'Yes — we regularly work throughout the Moseley village area, on properties along St Mary\'s Row and on homes backing onto Moseley Park & Pool. The park\'s mature trees mean these properties experience significant leaf fall each autumn.',
  },
  {
    question: 'Can blocked gutters cause damp in Moseley\'s Victorian properties?',
    answer: 'Yes — this is one of the most common problems we see in B13. Victorian and Edwardian properties have solid brick construction, and when gutters overflow against the wall the water has nowhere to go except inward. We see interior damp patches, stained brickwork and damaged window frames — all caused by blocked gutters that cost a fraction of the repair bill to maintain.',
  },
  {
    question: 'What postcodes do you cover in Moseley?',
    answer: 'We cover B13 in full, including B13 0, B13 8 and B13 9 sectors. Key streets include Alcester Road, Salisbury Road, Wake Green Road, Oxford Road, College Road, Church Road, St Mary\'s Row, Woodbridge Road, Woodfield Road, Prospect Road and all surrounding streets. We also cover bordering postcodes B14 (Kings Heath), B12 (Balsall Heath) and B11 (Sparkhill).',
  },
  {
    question: 'Do you offer fascia and soffit cleaning in Moseley?',
    answer: 'Yes — our hot purified water system restores fascias and soffits on Moseley\'s period properties to a bright, streak-free finish. Popular with homeowners preparing to sell or following a roof replacement. Particularly effective on the white-painted uPVC rooflines common on Moseley\'s Edwardian semis.',
  },
  {
    question: 'How quickly can you get to Moseley?',
    answer: 'We aim to offer bookings within 2 to 5 working days across Moseley. Same-day visits may be available — call 07421 433910 to check availability.',
  },
];

const postcodeStreets = [
  'Alcester Road', 'Salisbury Road', 'Wake Green Road', 'Oxford Road',
  'College Road', 'Church Road', 'St Mary\'s Row', 'Woodbridge Road',
  'Woodfield Road', 'Prospect Road', 'Chantry Road', 'Russell Road',
  'Stoney Lane', 'Billesley Lane', 'Park Hill', 'Valentine Road',
  'Trafalgar Road', 'Springfield Road', 'Richmond Road',
];

const localReviews = [
  {
    initial: 'M',
    name: 'Mark M.',
    place: 'Moseley',
    text: 'Harley came out to sort my gutters today. Great service, friendly and professional. Pictures showed how blocked the gutters were — couldn\'t believe it! Would 100% recommend.',
  },
  {
    initial: 'N',
    name: 'Neil G.',
    place: 'Moseley',
    text: 'Excellent, friendly and professional service from Ian. We had persistent leaks at various points around the house — all sorted now. Highly recommend WOW Gutters.',
  },
  {
    initial: 'G',
    name: 'Graham B.',
    place: 'Kings Heath',
    text: 'Highly recommended. Friendly service, arrived on time and did a thorough job. The before and after photos were brilliant — you could really see the difference.',
  },
];

export default function MoseleyGutterCleaningPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

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
            <span className="hero-badge-text">Local Moseley specialists • Same-day booking</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-line">Gutter Cleaning Moseley</span>
            <br />
            <span className="title-accent" style={{ color: colors.primary }}>
              Professional Service for B13 Properties
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

      {/* SECTION 1 — WHY MOSELEY */}
      <section className="py-16 md:py-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-center">
            Why Moseley Gutters Need Regular Professional Cleaning
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-slate-600 text-lg leading-relaxed space-y-5">
              <p>
                Moseley is one of Birmingham&apos;s most beautiful and tree-lined suburbs — and that character comes at a cost to your
                gutters every autumn. The mature lime trees lining Alcester Road, the established oaks in residential gardens
                throughout Salisbury Road and Wake Green Road, and the ancient woodland of nearby Moseley Bog all shed significant
                volumes of leaves, seeds and organic debris from October through to December.
              </p>
              <p>
                Properties throughout B13 experience some of the heaviest leaf fall in Birmingham. A gutter on a Victorian terrace
                in St Mary&apos;s Row can fill completely within two to three weeks of peak leaf fall season — and the consequence of
                leaving it is not just overflow. Standing water in a blocked gutter freezes in winter, expanding and cracking
                joints. Overflow runs down the beautiful period brickwork Moseley is known for, leaving green staining and in time
                causing damp penetration through external walls.
              </p>
              <p>
                Moseley&apos;s housing stock makes this particularly important. The area is characterised by Victorian and Edwardian
                properties — terraces, semis and large detached homes — many with original or early-replacement cast iron and uPVC
                gutter systems that are vulnerable to joint failure when debris is left to accumulate. Our post-clean condition
                report gives you a clear picture of the state of your guttering after every visit, with honest recommendations and
                no pressure to spend further.
              </p>
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
            What You Get With WOW Gutters in Moseley
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {guaranteeItems.map((g) => (
              <li key={g} className="flex gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle className="w-6 h-6 shrink-0" style={{ color: colors.primary }} />
                <span className="text-slate-800 font-semibold">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3 — PROPERTY TYPES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            Gutter Cleaning for Every Moseley Property Type
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
            <div className="flex-1 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
              {propertyTypes.map((row) => (
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
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Areas We Cover Around Moseley
          </h2>
          <p className="text-slate-700 text-lg">
            Kings Heath, Balsall Heath, Sparkhill | Stirchley, Bournville, Selly Park | Hall Green, Billesley | Nearby: Birmingham city centre, Harborne, Edgbaston
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/gutter-cleaning-birmingham/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Gutter cleaning Birmingham</Link>
            <Link href="/gutter-cleaning-kings-heath/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Gutter cleaning Kings Heath</Link>
            <Link href="/gutter-cleaning-harborne/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Gutter cleaning Harborne</Link>
            <Link href="/gutter-cleaning-edgbaston/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Gutter cleaning Edgbaston</Link>
            <Link href="/help/repair/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Gutter repairs</Link>
            <Link href="/services/upvc-cleaning/" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm">Fascia & soffit cleaning</Link>
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
              Our Moseley team responds quickly to WhatsApp messages. One tap and we&apos;ll help with quotes, availability and advice.
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
                    href={`${WA}?text=${encodeURIComponent(`Hi, I am in Moseley. ${question}`)}`}
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">FAQs — Gutter Cleaning Moseley</h2>
            <p className="text-xl text-white/90">
              Can&apos;t find your answer? Call{' '}
              <a href="tel:07421433910" className="font-bold underline underline-offset-2">07421 433910</a>.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`bg-[#0f172a] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openFaqIdx === i ? 'border-white/30 shadow-lg shadow-black/20' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="text-white font-bold text-lg group-hover:text-[#19C58B] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#19C58B] transition-transform duration-300 shrink-0 ${
                      openFaqIdx === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIdx === i ? 'max-h-[28rem]' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — REVIEWS */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: colors.primary }}>
                Customer reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                What Moseley Customers Say About WOW Gutters
              </h2>
              <p className="text-slate-600 mt-2">
                4.9 based on 2,696+ verified Google reviews. Fully insured · 1-year guarantee · Before &amp; after photos · 7 days a week.
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
            {localReviews.map((r) => (
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
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — POSTCODES */}
      <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Gutter Cleaning Across Moseley — Postcodes We Cover
          </h2>
          <p className="text-slate-700 text-lg mb-8">
            We cover all B13 postcodes across Moseley, including:
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-8">
            {postcodeStreets.map((street) => (
              <span
                key={street}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium"
              >
                {street}
              </span>
            ))}
          </div>
          <p className="text-slate-600">
            We also cover the bordering areas of Kings Heath (B14), Balsall Heath (B12), Sparkhill (B11), Sparkbrook (B12) and Stirchley (B30).
          </p>
          <p className="text-slate-700 font-semibold mt-4">
            Not sure if we cover your street? Call{' '}
            <a href="tel:07421433910" className="underline" style={{ color: colors.primary }}>07421 433910</a> — we will confirm in under a minute.
          </p>
        </div>
      </section>

      {/* SECTION 9 — BOOKING CTA */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Book Your Gutter Clean in Moseley — Free Quote in 60 Seconds
          </h2>
          <div className="mt-8 flex justify-center">
            <AreaServiceQuoteCard />
          </div>
        </div>
      </section>

      {/* SECTION 10 — MAP */}
      <section className="w-full">
        <div className="w-full h-[400px] sm:h-[420px] bg-[#e8efe8]">
          <iframe
            title="WOW Gutters — Moseley B13 service area map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.910%2C52.435%2C-1.860%2C52.465&layer=mapnik&marker=52.4479%2C-1.8831"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <AreaBlogSnippet locality="Moseley" />
      <AreaServicesRange />
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

        .animate-fade-in-up { opacity: 0; animation: moseleyFadeInUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes moseleyFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
