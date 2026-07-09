import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ShieldCheck, Check, ArrowRight, Droplets, Wrench, Search, Home, Cable, Images, Shield } from 'lucide-react';
import { colors } from '@/constants/colors';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning Services — Professional Roofline Care | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning services across Birmingham and the West Midlands. Vacuum gutter cleaning, repairs, roof cleaning, uPVC cleaning, inspections — all from one trusted local team. Call 07421 433910.',
  canonicalPath: '/gutter-cleaning-services/',
});

const services = [
  {
    icon: Droplets,
    title: 'Gutter Cleaning',
    description: 'Industrial vacuum system removes all leaf, moss and silt from your gutters and downpipes. Ground-level operation, up to 4 storeys, before and after photos included on every visit.',
    link: '/services/gutter-cleaning/',
  },
  {
    icon: Wrench,
    title: 'Gutter Repairs',
    description: 'Leaking joints, broken brackets, sagging sections, cracked downpipes — all repaired with a 6-month guarantee. Trained engineers with fully stocked vans.',
    link: '/services/gutter-repairs/',
  },
  {
    icon: Home,
    title: 'Roof Cleaning & Moss Removal',
    description: 'Soft-wash roof cleaning that removes moss, algae and lichen without pressure damage. Biocide treatment prevents regrowth. Improves roof appearance and extends tile life.',
    link: '/services/roof-cleaning/',
  },
  {
    icon: Shield,
    title: 'Exterior uPVC Cleaning',
    description: 'Hot purified water system for fascias, soffits, window frames and conservatories. Streak-free finish that restores bright white uPVC without chemicals.',
    link: '/services/upvc-cleaning/',
  },
  {
    icon: Search,
    title: 'Gutter Inspection',
    description: 'Free no-obligation gutter inspection across the full system — channels, downpipes, joints, brackets and fascia condition. Written report with honest recommendations.',
    link: '/services/gutter-inspection/',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Complimentary roof assessment covering tiles, flashing, ridge condition, moss coverage and ventilation. Identifies issues before they become expensive repairs.',
    link: '/services/roof-inspection/',
  },
];

export default function GutterCleaningServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 bg-[url('/gutter-cleaning.jpeg')] bg-cover bg-center opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#0f172a]/95" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" style={{ color: colors.primary }} />
            <span className="text-sm font-bold text-white tracking-wide">WOW Gutters Ltd</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Gutter Cleaning Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-white/85 leading-relaxed mb-4">
            Complete roofline care from one trusted local team — gutter cleaning, repairs, roof treatment,
            uPVC restoration and professional inspections across Birmingham and the West Midlands.
          </p>
          <p className="mx-auto max-w-2xl text-base text-white/70 leading-relaxed mb-10">
            No subcontractors. No call-out charges. Fixed quotes before any work starts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-lg transition-opacity hover:opacity-95"
              style={{ background: colors.primaryGradient }}
            >
              Get a FREE quote
            </Link>
            <a
              href="tel:07421433910"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              07421 433910
            </a>
          </div>
        </div>
        <div className="relative z-10 leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-12" aria-hidden>
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: colors.primary }}>
            Complete roofline care
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            All your gutter and roofline services in one place
          </h2>
          <div className="text-slate-600 text-lg leading-relaxed space-y-5 text-left">
            <p>
              WOW Gutters Ltd provides a full range of gutter and roofline services across Birmingham, the
              West Midlands and surrounding areas. From a standard gutter clean to full roof moss treatment
              and uPVC restoration, every job is completed by our directly employed team using professional
              equipment.
            </p>
            <p>
              We do not use ladders against your walls, we photograph every clean for proof, and we
              include downpipe testing as standard on every visit. Our prices are fixed upfront with no
              hidden fees — and we offer same-day and next-day appointments wherever possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-4">
            What we offer
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Every service is available as a standalone booking or combined into a single visit for
            complete roofline maintenance.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.link}
                  className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#19C58B]/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: colors.primaryGradient }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-black text-slate-900 group-hover:text-[#0f766e] transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: colors.primary }}>
                    Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-center mb-3" style={{ color: colors.primary }}>
            Why WOW Gutters Ltd
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-12">
            What sets our gutter services apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Ground-level vacuum system', body: 'No ladders touching your property means zero risk of damage to fascias, gutters or brickwork. Safe for you and your home.' },
              { title: 'Before & after photos on every job', body: 'We photograph every clean from multiple angles and send the images to you the same day — visual proof of what was done.' },
              { title: 'Downpipe testing included', body: 'Every visit includes a full downpipe flush and flow test. Blocked downpipes are cleared on the spot at no extra charge.' },
              { title: 'Fixed prices, no surprises', body: 'You get a clear written quote before any work starts. No call-out fee, no hourly rate, no hidden charges.' },
              { title: 'Fully insured team', body: '£10 million public liability cover. All engineers are directly employed, trained and vetted. Your property is in safe hands.' },
              { title: 'Same-day availability', body: 'Most areas can be booked within 2–3 working days. Emergency gutter clearance available where needed.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.primaryGradient }}>
                  <Check className="w-4 h-4 text-white" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas CTA */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Serving Birmingham, West Midlands & beyond
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We cover Birmingham, Solihull, Coventry, Walsall, Wolverhampton, Dudley, Worcester,
            Bromsgrove, Redditch and all surrounding areas. If you are not sure whether we cover
            your postcode, call us — we will confirm in 30 seconds.
          </p>
          <Link
            href="/gutter-cleaning-birmingham/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-800 font-bold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
          >
            Gutter cleaning in Birmingham <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to book your gutter service?</h2>
          <p className="text-white/90 text-lg mb-8">
            Free quotes in 60 seconds. Same-day and next-day appointments available across most areas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-8 py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#1e293b]"
            >
              Get a free quote
            </Link>
            <a
              href="tel:07421433910"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              07421 433910
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Open 24 hours a day, 7 days a week. Email: support@wowgutters.co.uk
          </p>
        </div>
      </section>
    </main>
  );
}
