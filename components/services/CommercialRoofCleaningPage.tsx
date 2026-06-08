'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building2, CheckCircle } from 'lucide-react';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef } from 'react';

export default function CommercialRoofCleaningPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
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
                <Building2 className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Commercial & Industrial</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
                Commercial Roof<br />
                <span style={{ color: colors.primary }}>Cleaning</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
                Safe moss removal and roof cleaning for commercial buildings, warehouses and industrial estates.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link href="/quote">
                  <Button
                    className="px-8 py-6 text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-transform"
                    style={{ background: colors.primaryGradient, color: 'white' }}
                  >
                    Request Commercial Quote
                  </Button>
                </Link>
                <a href="tel:07421433910">
                  <Button className="px-8 py-6 text-lg font-bold rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 transition-all">
                    Call 07421 433910
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>Soft-Wash Methods</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>Ground-Level Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>Fully Insured</span>
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
              Commercial Roofs <span style={{ color: colors.primary }}>We Clean</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialist roof cleaning for business premises across Birmingham and the West Midlands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏢', title: 'Office Buildings', desc: 'Moss and algae removal to protect flat and pitched commercial roofs' },
              { icon: '🏭', title: 'Warehouses & Factories', desc: 'Large roof areas treated with controlled soft-wash methods' },
              { icon: '🏪', title: 'Retail & Leisure', desc: 'Improve kerb appeal and prevent gutter blockages from roof debris' },
              { icon: '🏫', title: 'Schools & Campuses', desc: 'Scheduled during holidays or quiet periods for minimal disruption' },
              { icon: '🏘️', title: 'HMOs & Rental Blocks', desc: 'Multi-unit properties maintained on a planned schedule' },
              { icon: '⛪', title: 'Churches & Community Halls', desc: 'Careful treatment of heritage and older roof materials' },
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
                Why Commercial Roof Cleaning Matters
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Prevents Structural Damage',
                    description: 'Moss holds moisture against tiles and membranes, accelerating deterioration and leak risk.',
                  },
                  {
                    title: 'Reduces Gutter Blockages',
                    description: 'Roof moss washes into gutters constantly — cleaning the roof reduces recurring gutter problems.',
                  },
                  {
                    title: 'Improves Building Appearance',
                    description: 'A clean roof projects professionalism to customers, tenants and visitors.',
                  },
                  {
                    title: 'Extends Roof Lifespan',
                    description: 'Regular treatment protects your investment and defers costly re-roofing.',
                  },
                  {
                    title: 'Safe, Controlled Methods',
                    description: 'Soft-wash and biocide treatments — no pressure washing that damages tiles or coatings.',
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
                What&apos;s Included on Every Commercial Roof Clean
              </h3>
              <div className="space-y-4">
                {[
                  'Full roof surface assessment',
                  'Moss, algae and lichen treatment',
                  'Controlled soft-wash application',
                  'Gutter debris clearance where accessible',
                  'Before and after photographs',
                  'Written condition report',
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
        title="Commercial roof enquiry?"
        subtitle="Message us on WhatsApp"
        description="Get a fast response for commercial roof cleaning quotes, site assessments and planned maintenance across Birmingham and the West Midlands."
        questions={[
          'Do you clean flat commercial roofs?',
          'Can you work on industrial warehouses?',
          'What method do you use on commercial tiles?',
          'Do you offer annual maintenance plans?',
        ]}
        backgroundImage="/roof-cleaning.JPG"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/roof-cleaning.JPG"
                  alt="Commercial roof cleaning and moss removal"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Expert <span style={{ color: colors.primary }}>Commercial Roof Cleaning</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Commercial roofs face heavier organic build-up than residential properties — larger surface areas,
                less regular maintenance, and greater consequences when moss causes water retention or gutter
                blockages. Our team treats roofs on warehouses, retail units and office buildings across the
                West Midlands.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We use safe soft-wash methods and professional biocide treatments that kill moss and algae at the
                root, delivering longer-lasting results than simple scraping. Work is carried out from ground level
                wherever possible, with full insurance on every commercial job.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Moss, algae and lichen removal',
                  'Soft-wash — no damaging pressure',
                  'Flat and pitched roof experience',
                  'Out-of-hours scheduling available',
                  'Maintenance contracts offered',
                  'Fully insured commercial team',
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
                  Get Commercial Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Book Commercial Roof Cleaning
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Protect your commercial property with professional roof cleaning — scheduled around your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote">
              <Button
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2"
                style={{ borderColor: colors.white, color: colors.white }}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
