'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Shield } from 'lucide-react';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef } from 'react';

export default function RoofInspectionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <main className="bg-white">
      <section
        className="relative overflow-hidden"
        style={{ height: '70vh', minHeight: '500px' }}
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="/roof-cleaning-video.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.85) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Professional Roof Inspection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
                FREE Roof<br />
                <span style={{ color: colors.primary }}>Inspection</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
                Spot roof problems early with a thorough professional inspection.
                <span className="font-semibold"> Completely free, no obligation.</span>
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link href="/quote">
                  <Button
                    className="px-8 py-6 text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-transform"
                    style={{ background: colors.primaryGradient, color: 'white' }}
                  >
                    Book FREE Roof Inspection
                  </Button>
                </Link>
                <a href="tel:07421433910">
                  <Button className="px-8 py-6 text-lg font-bold rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 transition-all">
                    Call Now
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>Same-Day Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>Photo Report Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: colors.text }}>
              What We <span style={{ color: colors.primary }}>Inspect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive roof inspection covers every critical area of your roofline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏠', title: 'Roof Tiles & Slates', desc: 'Check for cracks, slips, and missing sections' },
              { icon: '🌿', title: 'Moss & Algae Growth', desc: 'Assess organic build-up and moisture retention' },
              { icon: '⚡', title: 'Flashing & Valleys', desc: 'Inspect seals around chimneys and roof joins' },
              { icon: '🔝', title: 'Ridge & Hip Caps', desc: 'Check mortar, pointing, and cap security' },
              { icon: '🧱', title: 'Chimney Surrounds', desc: 'Examine leadwork, pointing, and weathering' },
              { icon: '💧', title: 'Drainage & Gutters', desc: 'Assess how the roof sheds water to gutters' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4"
                style={{ borderColor: colors.primary }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.dark }}>
                Why Choose Our Roof Inspection?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: '100% FREE Service',
                    description: 'No hidden costs or obligations — completely free inspection and quote.',
                  },
                  {
                    title: 'Qualified Technicians',
                    description: 'Fully trained and insured professionals with years of experience.',
                  },
                  {
                    title: 'Detailed Report',
                    description: 'Comprehensive written report with photos and recommendations.',
                  },
                  {
                    title: 'No Pressure Sales',
                    description: 'Honest assessment with no pressure to purchase additional services.',
                  },
                  {
                    title: 'Same Day Booking',
                    description: 'Often available for same-day booking in most areas.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center mt-1"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: colors.dark }}>
                        {benefit.title}
                      </h3>
                      <p style={{ color: colors.textLight }}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>
                What Happens Next?
              </h3>
              <div className="space-y-4">
                {[
                  'Book your free roof inspection online or by phone',
                  'We arrange a convenient time to visit',
                  'Thorough inspection of your roof and roofline',
                  'Detailed report with photos and findings',
                  'Free quote for any recommended work',
                  'No obligation to proceed',
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: colors.primary }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ color: colors.text }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppContactSection
        title="Need a quick answer?"
        subtitle="Message us on WhatsApp"
        description="Get instant answers about our free roof inspection service. Our team is ready to help with scheduling, questions about the inspection process, and any concerns you may have."
        questions={[
          'How long does a free roof inspection take?',
          'What areas do you cover for roof inspections?',
          'Can I book a roof inspection for today?',
          'What will the roof inspection report include?',
        ]}
        backgroundImage="/Roof-Cleaner.webp"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Roof-Cleaner.webp"
                  alt="Professional Roof Inspection Service"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Roof Inspection</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our roof inspection service identifies issues before they lead to leaks, structural damage, or
                costly emergency repairs. We assess tiles, flashing, valleys, ridge lines, and chimney surrounds
                to give you a clear picture of your roof&apos;s condition.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Moss, algae, and debris on a roof often indicate underlying moisture problems that accelerate tile
                deterioration. Our qualified technicians document everything with photographs and provide an honest
                written assessment — with no pressure to book further work.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Full roof surface condition assessment',
                  'Moss, algae, and lichen evaluation',
                  'Flashing and valley inspection',
                  'Ridge, hip, and chimney surround check',
                  'Gutter connection and drainage review',
                  'Free quotation for any recommended work',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/quote">
                <Button
                  className="px-8 py-4 text-lg font-bold rounded-full hover:scale-105 transition-transform"
                  style={{ background: colors.primaryGradient, color: 'white' }}
                >
                  Book Roof Inspection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Regular Roof <span style={{ color: colors.primary }}>Inspections Matter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your property with professional roof inspection services across Birmingham and the West Midlands
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Roof problems rarely announce themselves until water is already inside your property. A professional
                inspection catches slipped tiles, failing flashing, and moss damage early — when fixes are straightforward
                and affordable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our roof inspection service gives you photographic evidence and a clear written report, so you know
                exactly what condition your roof is in and what — if anything — needs attention.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Our Inspection Includes:</h3>
                <ul className="space-y-3">
                  {[
                    'Complete roof surface assessment',
                    'Tile, slate, and ridge inspection',
                    'Flashing and valley check',
                    'Photographic evidence',
                    'Detailed written report',
                    'Free quotation for recommended work',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Common Problems We Identify</h3>
              <div className="grid gap-4">
                {[
                  { icon: '🌿', title: 'Moss Build-up', desc: 'Organic growth trapping moisture against tiles' },
                  { icon: '🔧', title: 'Slipped Tiles', desc: 'Tiles out of position exposing the roof beneath' },
                  { icon: '💧', title: 'Failed Flashing', desc: 'Gaps around chimneys, valleys, and abutments' },
                  { icon: '⚠️', title: 'Ridge Deterioration', desc: 'Cracked mortar or loose ridge caps' },
                  { icon: '🏠', title: 'Blocked Valleys', desc: 'Debris preventing water drainage' },
                  { icon: '📉', title: 'Early Leak Signs', desc: 'Staining, damp patches, and tile damage' },
                ].map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-3xl">{problem.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-gray-600">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">Don&apos;t Wait for a Leak</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Our free roof inspection helps you stay ahead of potential problems, protecting your home and
              avoiding costly emergency repairs.
            </p>
            <Link href="/quote">
              <Button
                className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
                style={{ background: colors.primaryGradient, color: 'white' }}
              >
                Book Your Free Roof Inspection Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Ready for Your FREE Roof Inspection?
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Don&apos;t wait for small problems to become expensive repairs. Book your free inspection today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote">
              <Button
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Book FREE Inspection
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2"
                style={{ borderColor: colors.white, color: colors.white }}
              >
                Call Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
