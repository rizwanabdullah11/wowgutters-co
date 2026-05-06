'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const AREA_FAQS = [
  {
    question: "How often should gutters be cleaned?",
    answer: "Gutters should be cleaned at least twice a year, typically in the spring and autumn. However, if you have overhanging trees or frequent storms, more frequent cleaning may be necessary.",
    icon: "🗓️"
  },
  {
    question: "Why is gutter cleaning important?",
    answer: "Clogged gutters can lead to water damage, roof leaks, foundation issues, and even pest infestations. Regular cleaning helps prevent costly repairs.",
    icon: "✨"
  },
  {
    question: "What are the signs that my gutters need cleaning?",
    answer: "Overflowing water, sagging gutters, visible plant growth, or water stains on your walls are all indicators your gutters are blocked.",
    icon: "🏠"
  },
  {
    question: "Can I clean my gutters myself?",
    answer: "While it’s possible, professional gutter cleaning ensures thorough removal of debris, safe access to hard-to-reach areas, and early detection of damage.",
    icon: "🪜"
  },
  {
    question: "How much does gutter cleaning cost?",
    answer: "Costs vary based on the property size, gutter condition, and accessibility, but typical residential cleanings range from £50–£150.",
    icon: "💳"
  }
];

export default function AreaFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d6e4e 0%, #19C58B 50%, #14B27D 100%)' }}>
      {/* Note: FAQPage schema is now included in AreaPageSchema component */}
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm tracking-wider uppercase">Faq</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Gutter General <span className="text-white">Questions</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to the most common gutter cleaning questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {AREA_FAQS.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-[#0f172a] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openIdx === i 
                    ? 'border-white/30 shadow-lg shadow-black/20' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl">{faq.icon}</div>
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
                    openIdx === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-16 pr-8">
                      <p className="text-gray-300 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card - Green with dark elements */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Still Have Questions Card */}
              <div className="bg-[#19C58B] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Get Your FREE Instant Quote</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  We&apos;ll text you your quote and you&apos;ll even be able to book-in online.
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
                      <p className="text-xs text-white/80 font-semibold">Call Us Now</p>
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
                      <p className="text-xs text-white/80 font-semibold">Email Us</p>
                      <p className="text-sm font-bold">support@wowgutters.co.uk</p>
                    </div>
                  </a>
                </div>

                <Link href="/quote" className="block mt-6">
                  <button className="w-full bg-[#0f172a] text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all duration-300 hover:scale-105 shadow-lg">
                    Get Free Quote
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-white font-bold text-lg mb-4">Our Guarantees</h4>
                <div className="space-y-3">
                  {[
                    'Comprehensive Public Liability',
                    'Expert Technicians',
                    'Rapid Response Times',
                    'Transparent Pricing Policies'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0 text-white" />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/help" className="inline-flex items-center gap-2 text-white font-bold text-lg hover:underline">
            FREE Instant quote
            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
