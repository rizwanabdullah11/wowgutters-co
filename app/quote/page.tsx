'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { colors } from '@/constants/colors';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import QuoteModal from '@/components/QuoteModal';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import ServiceSEOSection from '@/components/sections/ServiceSEOSection';
import {
  CheckCircle,
  Shield,
  Clock,
  Phone,
  Sparkles,
  ArrowRight,
  Users,
  Award,
  Zap,
  MapPin,
  ThumbsUp,
  Hand,
} from 'lucide-react';

const trustStats = [
  { icon: Shield, title: 'Always Free', desc: 'Quotes cost you nothing — ever' },
  { icon: Clock, title: 'Same-Day Book', desc: 'We come to you fast' },
  { icon: Users, title: '450+ Homes', desc: 'Served across the West Midlands' },
  { icon: Award, title: 'Top Rated', desc: 'Trusted by local homeowners' },
];

const whyChooseUs = [
  { icon: Shield, title: 'Insured & Fully Covered', desc: 'Public liability insurance included — your home is always protected.' },
  { icon: Award, title: 'Loved by Local Homeowners', desc: 'Over 1,000 five-star experiences across the West Midlands.' },
  { icon: Zap, title: 'We Move Fast', desc: 'Same-day booking available — we work around you.' },
  { icon: CheckCircle, title: 'Guaranteed Workmanship', desc: 'Every installation backed by our written lifetime guarantee.' },
];

const ourPromise = [
  { icon: CheckCircle, title: 'Honest, Upfront Pricing', desc: 'The price we quote is the price you pay — no add-ons after the fact.' },
  { icon: ThumbsUp, title: 'Only What You Actually Need', desc: 'We assess your gutters honestly and only recommend necessary work.' },
  { icon: Shield, title: 'We Show Up & Follow Through', desc: 'Reliable appointments, timely updates, and the job done right first time.' },
];

export default function QuotePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const services = [
    'Gutter Cleaning',
    'Roof Cleaning', 
    'Gutter Repairs',
    'Gutter Inspection',
    'Conservatory Cleaning',
    'Hot Wash Cleaning',
    'Commercial Services'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const openModal = () => setIsQuoteModalOpen(true);
  const closeModal = () => setIsQuoteModalOpen(false);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Free Gutter Quote - WowGutters West Midlands | Same-Day Booking</title>
        <meta name="description" content="Get your free gutter cleaning quote today! Same-day booking available. Professional gutter services across Birmingham, Coventry, Wolverhampton & West Midlands. No hidden fees." />
        <meta name="keywords" content="free gutter quote, gutter cleaning quote, west midlands gutters, birmingham gutter cleaning, same day booking, free inspection" />
        <meta property="og:title" content="Free Gutter Quote - WowGutters West Midlands" />
        <meta property="og:description" content="Get your free gutter cleaning quote today with same-day booking available across the West Midlands." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wowgutters.pro/quote" />
      </Head>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f0fdf8 0%, #ffffff 50%, #fff7f0 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: colors.primary }} />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ backgroundColor: colors.cta }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg mb-6 sm:mb-8 animate-fadeInUp" style={{ backgroundColor: colors.primary }}>
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            West Midlands\'s Most Trusted Gutter Specialists — WowGutters!
            <Sparkles className="w-4 h-4 flex-shrink-0" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight animate-fadeInUp animation-delay-200">
            <span className="text-gray-900">Get A </span>
            <span className="relative inline-block px-2">
              <span className="relative z-10" style={{ color: colors.primary }}>FREE</span>
              <span
                className="absolute bottom-0 left-0 right-0 h-3 opacity-20 rounded-full"
                style={{ backgroundColor: colors.primary, transform: 'rotate(-1deg)' }}
              />
            </span>
            <span className="text-gray-900"> </span>
            <span className="relative inline-block min-w-[320px] sm:min-w-[450px] md:min-w-[550px]">
              <span
                key={currentService}
                className="absolute left-0 right-0 text-gray-900 animate-fadeInUp whitespace-nowrap"
                style={{
                  animation: 'fadeInUp 0.5s ease-in-out',
                }}
              >
                {services[currentService]}
              </span>
              <span className="invisible whitespace-nowrap">{services[4]}</span>
            </span>
            <br />
            <span className="text-gray-900">& Quote — Today!</span>
          </h1>

          {/* Guarantee pill */}
          <div className="flex justify-center mb-8 sm:mb-10 animate-fadeInUp animation-delay-400">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 px-5 py-3 sm:px-7 sm:py-4 bg-white rounded-2xl shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{ borderColor: colors.primary }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                style={{ backgroundColor: colors.primary }}
              >
                <Hand className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-base sm:text-xl font-bold" style={{ color: colors.primary }}>Completely Free Quote</p>
                <p className="text-xs sm:text-sm text-gray-500">No commitment · No surprise charges</p>
              </div>
            </button>
          </div>

          {/* Our Promise cards */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fadeInUp animation-delay-600">
            {ourPromise.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-left"
                style={{ borderColor: `${colors.primary}30` }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow"
                  style={{ backgroundColor: colors.primary }}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-bold" style={{ color: colors.primary }}>{item.title}</span>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fadeInUp animation-delay-800">
            {trustStats.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 mb-3 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: colors.primary }}>
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 text-center mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fadeInUp animation-delay-1000">
            <button
              onClick={openModal}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-3"
              style={{ backgroundColor: colors.cta }}
            >
              <Zap className="w-5 h-5 flex-shrink-0" />
              Book My Free Gutter Quote
              <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <a
              href="tel:07421433910"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl border-2 hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              Call: 07421 433910
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500 animate-fadeInUp animation-delay-1200">
            {[
              { icon: CheckCircle, label: 'Zero Sales Pressure' },
              { icon: Shield, label: 'Liability Insured' },
              { icon: Award, label: 'Experienced Specialists' },
              { icon: Clock, label: 'Same-Day Book' },
              { icon: MapPin, label: 'West Midlands & Surrounding Areas' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: colors.primary }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ POPULAR SERVICES ═══════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-900">Our Most </span>
              <span style={{ color: colors.primary }}>Popular Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we've got your property covered
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🧹',
                title: 'Gutter Cleaning',
                desc: 'Professional cleaning to prevent blockages and water damage',
                popular: true,
              },
              {
                icon: '🏠',
                title: 'Roof Cleaning',
                desc: 'Remove moss, algae, and debris for a pristine roof',
                popular: true,
              },
              {
                icon: '🔧',
                title: 'Gutter Repairs',
                desc: 'Fix leaks, cracks, and damaged sections quickly',
                popular: false,
              },
              {
                icon: '🔍',
                title: 'Free Inspection',
                desc: 'Comprehensive assessment with no obligation',
                popular: false,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div
                      className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1"
                      style={{ backgroundColor: colors.cta }}
                    >
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                
                <button
                  onClick={openModal}
                  className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg group-hover:scale-105 flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.primary }}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services Link */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Need something else?</p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-bold transition-all duration-300 hover:bg-green-50"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY CHOOSE US ═══════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.cta})` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative group animate-fadeInLeft order-2 lg:order-1">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: colors.primary }}
              />
              <div className="relative bg-white p-4 sm:p-6 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/Roof-Cleaner.webp"
                  alt="Professional Gutter Cleaning Services"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                />
                {/* Image badge */}
                <div className="absolute top-8 left-8">
                  <div className="px-4 py-2 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg" style={{ backgroundColor: colors.primary }}>
                    ✨ Professional Service
                  </div>
                </div>
                {/* Rating badge */}
                <div className="absolute bottom-8 right-8">
                  <div className="bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">4.9 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 animate-fadeInRight order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
                  <span className="text-gray-900">What Makes WowGutters</span>
                  <br />
                  <span style={{ color: colors.primary }}>The Right Choice?</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We show up, we get the job done right, and we back every single piece of work
                  with a guarantee you can actually rely on. No fuss, no surprises.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {whyChooseUs.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0" style={{ backgroundColor: colors.primary }}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openModal}
                  className="flex-1 px-6 py-4 text-sm sm:text-base font-bold text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.cta }}
                >
                  <Sparkles className="w-5 h-5" />
                  Request a Free Quote
                </button>
                <a
                  href="tel:07421433910"
                  className="flex-1 px-6 py-4 text-sm sm:text-base font-bold rounded-2xl border-2 hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  <Phone className="w-5 h-5" />
                  07421 433910
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHATSAPP SECTION ═══════════════════════════════ */}
      <WhatsAppContactSection
        title="Got Questions About Your Quote?"
        subtitle="Ask Us on WhatsApp"
        description="Get instant answers about pricing, scheduling, services, and anything else you need to know. Our team responds quickly to help you make the right decision for your property."
        questions={[
          'How much does gutter cleaning cost?',
          'Do you offer same-day service?',
          'What areas do you cover?',
          'Can you repair damaged gutters too?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      {/* ═══════════════════════════════ SEO SECTION ═══════════════════════════════ */}
      <ServiceSEOSection
        title="Free Gutter Quotes"
        subtitle="West Midlands"
        mainParagraph1="Getting a professional gutter quote shouldn't be complicated or expensive. At WowGutters, we provide completely free, no-obligation quotes for all gutter services across the West Midlands. Whether you need routine cleaning, urgent repairs, or a complete gutter replacement, our transparent pricing ensures you know exactly what to expect before any work begins."
        mainParagraph2="Our free quote service includes a thorough inspection of your gutters, downpipes, and drainage system. We assess the condition, identify any issues, and provide honest recommendations for the work that's actually needed—not unnecessary upsells. With same-day booking available and flexible scheduling, getting your free quote has never been easier."
        processTitle="What's Included in Your Free Quote:"
        processSteps={[
          { text: 'Complete gutter and downpipe inspection' },
          { text: 'Detailed assessment of any damage or blockages' },
          { text: 'Transparent pricing with no hidden fees' },
          { text: 'Professional recommendations for your property' },
          { text: 'Same-day or next-day appointment options' },
          { text: 'Written guarantee on all quoted work' }
        ]}
        problemsTitle="Common Gutter Issues We Quote For"
        problems={[
          { icon: '🍂', title: 'Blocked Gutters', desc: 'Leaves, debris, and moss causing overflow' },
          { icon: '💧', title: 'Leaking Gutters', desc: 'Cracks, holes, or joint failures' },
          { icon: '📉', title: 'Sagging Gutters', desc: 'Damaged brackets or improper installation' },
          { icon: '🚰', title: 'Downpipe Issues', desc: 'Blockages preventing proper drainage' },
          { icon: '🔧', title: 'Gutter Repairs', desc: 'Damaged sections needing replacement' },
          { icon: '🏠', title: 'Full Replacement', desc: 'Old gutters beyond economical repair' }
        ]}
        highlightBoxTitle="Why Choose WowGutters for Your Quote?"
        highlightBoxColor="green"
        highlightBoxes={[
          { icon: '💰', title: 'Always Free', desc: 'No charge for quotes, inspections, or assessments' },
          { icon: '⚡', title: 'Fast Response', desc: 'Same-day booking and quick turnaround times' },
          { icon: '✅', title: 'Honest Pricing', desc: 'Transparent costs with no hidden surprises' }
        ]}
        ctaTitle="Ready for Your Free Gutter Quote?"
        ctaDescription="Join hundreds of satisfied homeowners across the West Midlands who trust WowGutters for honest, professional gutter services. Get your free quote today and protect your property from water damage."
        ctaButtonText="Get Your Free Quote Now"
      />

      {/* ═══════════════════════════════ FINAL CTA ═══════════════════════════════ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #14B27D 100%)` }}>
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s Sort Your Gutters Out!
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed">
            Hundreds of homeowners across the West Midlands have already chosen WowGutters — book your free visit today.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-10">
            {[
              { value: '450+', label: 'Gutters Cleaned & Fixed' },
              { value: '4.9★', label: 'Homeowner Rating' },
              { value: '100%', label: 'Free Quotes, Always' },
            ].map(({ value, label }) => (
              <div key={label} className="text-white">
                <p className="text-2xl sm:text-4xl font-black">{value}</p>
                <p className="text-xs sm:text-sm text-white/70 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openModal}
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 text-sm sm:text-lg font-bold bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
              style={{ color: colors.primary }}
            >
              <Zap className="w-5 h-5" />
              Claim My Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="tel:07421433910"
              className="group w-full sm:w-auto px-8 py-4 sm:py-5 text-sm sm:text-lg font-bold text-white rounded-2xl border-2 border-white/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-white/60">
            🔒 No spam ever · Zero pressure · Your free quote is on us
          </p>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeModal} />

      {/* Contact Info */}
      <ContactInfoSection />

      {/* ═══════════════ MOBILE STICKY WHATSAPP BAR ═══════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden items-center justify-between gap-3 px-4 py-3 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-md"
          style={{ backgroundColor: colors.primary }}
        >
          W
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate">WowGutters</p>
          <a
            href="tel:07421433910"
            className="text-xs font-semibold truncate block"
            style={{ color: colors.primary }}
          >
            07421 433910
          </a>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/447421433910?text=Hi%2C%20I%27d%20like%20a%20free%20gutter%20quote%20please!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg flex-shrink-0 active:scale-95 transition-transform duration-150"
          style={{ backgroundColor: '#25D366' }}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 flex-shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>

      {/* Bottom padding so content isn't hidden behind sticky bar on mobile */}
      <div className="block sm:hidden h-20" />
    </main>
  );
}
