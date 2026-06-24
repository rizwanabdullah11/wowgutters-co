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

export const GUTTER_REPAIR_FAQS = [
  {
    question: 'How much do gutter repairs cost?',
    answer:
      'Repair pricing depends on how many joints, brackets, or sections need work and how accessible the gutter is. Most minor residential repairs fall between £80 and £250. We confirm the price before any work starts.',
    icon: '💳',
  },
  {
    question: 'Do you guarantee gutter repair work?',
    answer:
      'Yes. Qualifying gutter repairs come with a 6-month guarantee on workmanship. If a joint or bracket we fitted fails within that period, we will put it right.',
    icon: '✅',
  },
  {
    question: 'Can you repair leaking gutters on the same day?',
    answer:
      'Same-day and next-day gutter repairs are often available across Birmingham and the West Midlands. Message or call us with a photo of the problem and we will confirm the earliest slot.',
    icon: '⚡',
  },
  {
    question: 'What are the signs my gutters need repair?',
    answer:
      'Drips from joints after rain, gutters pulling away from the fascia, standing water in the channel, overflow in light rain, and staining on walls below the gutter line are common warning signs.',
    icon: '🔍',
  },
  {
    question: 'Should I repair or replace my gutters?',
    answer:
      'Isolated joint failures, loose brackets, and short cracked sections are usually worth repairing. If multiple runs are brittle, badly misaligned, or over 25–30 years old, a full gutter installation may be more cost-effective. We advise honestly after inspection.',
    icon: '🔧',
  },
];

export const UPVC_CLEANING_FAQS = [
  {
    question: 'How much does fascia and UPVC cleaning cost?',
    answer:
      'Pricing depends on property size, how much fascia and soffit runs around the roofline, and access. Most residential fascia and soffit cleans start from around £60–£150. We confirm your price before work begins.',
    icon: '💳',
  },
  {
    question: 'What is purified hot-water UPVC cleaning?',
    answer:
      'We use heated purified water to lift algae, grime, and pollution staining from UPVC without harsh chemicals or aggressive pressure. It is effective on fascias and soffits and helps achieve a streak-free finish.',
    icon: '💧',
  },
  {
    question: 'Will cleaning damage my UPVC or window seals?',
    answer:
      'We use controlled, low-pressure methods suited to plastic roofline components and frames. We avoid blasting at seals, joints, or painted timber — and we protect borders and brickwork during the wash.',
    icon: '🛡️',
  },
  {
    question: 'How often should fascias and soffits be cleaned?',
    answer:
      'Most homes benefit from exterior UPVC cleaning every 1–2 years. Properties under trees, near busy roads, or with heavy algae growth may need annual cleaning to stay bright.',
    icon: '🗓️',
  },
  {
    question: 'Can you clean UPVC at the same time as gutter cleaning?',
    answer:
      'Yes. Combining gutter cleaning with fascia and soffit cleaning is one of our most popular bookings — one visit, full roofline refresh, and often better value than booking separately.',
    icon: '✨',
  },
];

export const ROOF_CLEANING_FAQS = [
  {
    question: 'How much does roof cleaning cost?',
    answer:
      'Roof cleaning pricing depends on roof size, pitch, access, and how heavy the moss coverage is. Most residential roof cleans start from around £150–£400. We provide a clear quote after assessing your property.',
    icon: '💳',
  },
  {
    question: 'Is roof cleaning safe for my tiles?',
    answer:
      'Yes. We use low-pressure soft wash methods designed for UK roof tiles — not aggressive jet washing that can dislodge tiles or force water under slates. The method is matched to your roof type.',
    icon: '🛡️',
  },
  {
    question: 'Do you remove moss from roof tiles?',
    answer:
      'Yes. Moss removal is a core part of our roof cleaning service. We lift moss and algae carefully, rinse the roof, and can apply biocide treatment to help slow regrowth.',
    icon: '🌿',
  },
  {
    question: 'How often should a roof be cleaned?',
    answer:
      'Most properties benefit from roof cleaning every 2–3 years. Homes under trees, on north-facing slopes, or with heavy moss may need treatment more often — sometimes annually alongside gutter cleaning.',
    icon: '🗓️',
  },
  {
    question: 'Can roof cleaning be booked with gutter cleaning?',
    answer:
      'Yes. This is one of our most recommended combinations. Treating the roof and clearing the gutters in one visit stops moss from refilling the channels soon after a gutter clean.',
    icon: '✨',
  },
];

export const GUTTER_INSPECTION_FAQS = [
  {
    question: 'Is the gutter inspection really free?',
    answer:
      'Yes. Our gutter inspection is free with no obligation to book cleaning or repairs afterwards. If work is recommended, we provide a clear quote and you decide whether to proceed.',
    icon: '✅',
  },
  {
    question: 'What does a gutter inspection include?',
    answer:
      'We check gutter channels, downpipes, joints, brackets, alignment, and visible fascia condition. We explain findings clearly and can provide photos of problem areas.',
    icon: '🔍',
  },
  {
    question: 'How long does a gutter inspection take?',
    answer:
      'Most domestic gutter inspections take around 20–40 minutes depending on property size, access, and how many rooflines need checking.',
    icon: '⏱️',
  },
  {
    question: 'When should I book a gutter inspection?',
    answer:
      'Book after storms, before winter, when buying a home, or if you see overflow, staining, sagging gutters, or plants growing in the channel.',
    icon: '🗓️',
  },
  {
    question: 'Can you repair or clean gutters after the inspection?',
    answer:
      'Yes. If we find blockages or damage, we can quote for gutter cleaning, repairs, or installation — often in the same visit if scheduling allows.',
    icon: '🔧',
  },
];

export const ROOF_INSPECTION_FAQS = [
  {
    question: 'Is the roof inspection free?',
    answer:
      'Yes. Our roof inspection is free with no obligation. We explain what we find and provide a quote only if further work such as roof cleaning or repairs is recommended.',
    icon: '✅',
  },
  {
    question: 'What does a roof inspection check?',
    answer:
      'We assess visible tiles, ridges, valleys, flashing, moss coverage, and signs of damage — plus how roof condition may affect gutters and fascias below.',
    icon: '🔍',
  },
  {
    question: 'Do you walk on the roof during inspection?',
    answer:
      'We use safe external assessment methods suited to the property. The priority is a thorough check without unnecessary risk to tiles or slates.',
    icon: '🛡️',
  },
  {
    question: 'How often should a roof be inspected?',
    answer:
      'An annual or biennial roof check is sensible for most UK homes. Properties with heavy moss, overhanging trees, or older tiles may benefit from more frequent inspections.',
    icon: '🗓️',
  },
  {
    question: 'Can roof inspection be combined with gutter cleaning?',
    answer:
      'Yes. This is a popular combination — we inspect the roof, then clear or repair gutters so moss and debris do not refill the system straight away.',
    icon: '✨',
  },
];

export type AreaFaqItem = {
  question: string;
  answer: string;
  icon: string;
};

type AreaFAQProps = {
  faqs?: AreaFaqItem[];
  title?: string;
  subtitle?: string;
};

export default function AreaFAQ({
  faqs = AREA_FAQS,
  title = 'Gutter General Questions',
  subtitle = 'Find answers to the most common gutter cleaning questions.',
}: AreaFAQProps) {
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
            {title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, i) => (
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
                <p className="text-white font-bold text-lg mb-4">Our Guarantees</p>
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
