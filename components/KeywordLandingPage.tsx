'use client';

import { colors } from '@/constants/colors';
import Link from 'next/link';
import { Phone, ShieldCheck, CheckCircle, PenTool, Sparkles } from 'lucide-react';
import { KeywordPage } from '@/lib/keywordPages';

export default function KeywordLandingPage({ page }: { page: KeywordPage }) {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f172a] py-20 md:py-28 px-4">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #19C58B 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#19C58B]/20 blur-3xl" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm mb-6">
            <ShieldCheck className="h-4 w-4" style={{ color: colors.primary }} />
            <span className="text-sm font-bold text-white tracking-wide">
              WOW Gutters Ltd • Birmingham &amp; West Midlands
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            {page.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
            {page.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition-opacity hover:opacity-95"
              style={{ background: colors.primaryGradient }}
            >
              Get a FREE Quote <PenTool className="w-4 h-4" />
            </Link>
            <a
              href="tel:07421433910"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              07421 433910
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-10" aria-hidden>
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Content Sections */}
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

      {/* Related Links */}
      <section className="py-12 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/gutter-cleaning/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Gutter Cleaning</Link>
            <Link href="/services/gutter-repairs/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Gutter Repairs</Link>
            <Link href="/services/roof-cleaning/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Roof Cleaning</Link>
            <Link href="/services/upvc-cleaning/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">UPVC Cleaning</Link>
            <Link href="/window-cleaning/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Window Cleaning</Link>
            <Link href="/services/gutter-inspection/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Gutter Inspection</Link>
            <Link href="/gutter-cleaning-birmingham/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Birmingham</Link>
            <Link href="/pricing/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Prices</Link>
            <Link href="/quote/" className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors">Free Quote</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{page.cta.title}</h2>
          <p className="text-white/90 text-base sm:text-lg mb-8">
            {page.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-8 py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#1e293b]"
            >
              Request a free quote
            </Link>
            <a
              href="tel:07421433910"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call 07421 433910
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
