'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { BIRMINGHAM_AREA_FAQS } from '@/constants/birminghamFaqs';

export default function BirminghamFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#19C58B]">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Gutter Cleaning Birmingham - Questions Answered
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our Birmingham gutter cleaning service. Can&apos;t find your answer? Call{' '}
            <a href="tel:07421433910" className="font-bold underline underline-offset-2 text-[#19C58B]">
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
                className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
                  openIdx === i
                    ? 'border-[#19C58B] shadow-lg'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-2xl shrink-0">{faq.icon}</span>
                    <span className="text-slate-900 font-bold text-lg group-hover:text-[#19C58B] transition-colors">
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
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                    <div className="pl-12 pr-4">
                      <p className="text-slate-600 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-[#19C58B] to-[#14B27D] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-black mb-4">Free Quote in 60 Seconds</h3>
                <p className="text-white/95 mb-6 leading-relaxed">
                  Tell us your property type and postcode - we&apos;ll give you a fixed price instantly, no obligation.
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
                    className="w-full bg-white text-[#19C58B] font-bold py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Get My Free Quote
                  </button>
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
                <h4 className="text-slate-900 font-bold text-lg mb-4">As on the brochure</h4>
                <div className="space-y-3">
                  {[
                    'Fully insured',
                    'Before & after photos',
                    '7 days a week',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0 text-[#19C58B]" />
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
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
