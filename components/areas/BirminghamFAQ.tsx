'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { BIRMINGHAM_AREA_FAQS } from '@/constants/birminghamFaqs';

export default function BirminghamFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d6e4e 0%, #19C58B 50%, #14B27D 100%)' }}
      >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm tracking-wider uppercase">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Gutter Cleaning Birmingham — Questions Answered
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to know about our Birmingham gutter cleaning service. Can&apos;t find your answer? Call{' '}
            <a href="tel:07421433910" className="font-bold underline underline-offset-2">
              07421 433910
            </a>
            .
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {BIRMINGHAM_AREA_FAQS.map((faq, i) => (
              <div
                key={faq.question}
                className={`bg-[#0f172a] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openIdx === i
                    ? 'border-white/30 shadow-lg shadow-black/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-2xl shrink-0">{faq.icon}</span>
                    <span className="text-white font-bold text-lg group-hover:text-[#19C58B] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-[#19C58B] transition-transform duration-300 shrink-0 ${
                      openIdx === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIdx === i ? 'max-h-[28rem]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-12 pr-4">
                      <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-[#19C58B] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Free Quote in 60 Seconds</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Tell us your property type and postcode — we&apos;ll give you a fixed price instantly, no obligation.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:07421433910"
                    className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-semibold">Call us</p>
                      <p className="text-lg font-bold">07421 433910</p>
                    </div>
                  </a>
                  <a
                    href="mailto:support@wowgutters.co.uk"
                    className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-semibold">Email</p>
                      <p className="text-sm font-bold">support@wowgutters.co.uk</p>
                    </div>
                  </a>
                </div>
                <Link href="/quote" className="block mt-6">
                  <button
                    type="button"
                    className="w-full bg-[#0f172a] text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Get My Free Quote
                  </button>
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-white font-bold text-lg mb-4">As on the brochure</h4>
                <div className="space-y-3">
                  {[
                    'Fully insured',
                    'Before & after photos',
                    '7 days a week',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0 text-white" />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
