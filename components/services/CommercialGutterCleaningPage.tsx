'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building2, CheckCircle } from 'lucide-react';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef } from 'react';

export default function CommercialGutterCleaningPage() {
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
            <source src="/gutter-cleaning-video.mp4" type="video/mp4" />
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
                Commercial Gutter<br />
                <span style={{ color: colors.primary }}>Cleaning</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
                Professional gutter cleaning for warehouses, schools, retail units and office buildings.
                <span className="font-semibold"> Flexible scheduling, minimal disruption.</span>
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
                  <span>Up to 4 Storeys</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span>Maintenance Contracts</span>
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
              Commercial Properties <span style={{ color: colors.primary }}>We Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored gutter cleaning for every type of business premises across Birmingham and the West Midlands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏢', title: 'Offices & Business Parks', desc: 'Scheduled cleans with minimal disruption to staff and visitors' },
              { icon: '🏪', title: 'Retail & Shopping Units', desc: 'Before-hours or quiet-period visits to keep shopfronts presentable' },
              { icon: '🏭', title: 'Warehouses & Industrial', desc: 'Large-scale gutter runs cleared with high-reach vacuum equipment' },
              { icon: '🏫', title: 'Schools & Colleges', desc: 'Term-time scheduling and full documentation for facilities managers' },
              { icon: '🏘️', title: 'Landlords & Managing Agents', desc: 'Multi-property maintenance plans across your portfolio' },
              { icon: '🏛️', title: 'Community & Public Buildings', desc: 'Churches, halls and civic buildings — insured and compliant' },
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
                Why Businesses Choose WOW Gutters Ltd
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Ground-Level Vacuum System',
                    description: 'No ladders against your building. Safe for staff, customers and your property fabric.',
                  },
                  {
                    title: 'Flexible Scheduling',
                    description: 'Early mornings, evenings and weekends available to avoid business disruption.',
                  },
                  {
                    title: 'Maintenance Contracts',
                    description: 'Annual or quarterly planned visits — one less thing for facilities teams to manage.',
                  },
                  {
                    title: 'Full Documentation',
                    description: 'Before and after photos and written reports suitable for maintenance records and compliance.',
                  },
                  {
                    title: '£10M Public Liability Insurance',
                    description: 'Fully insured commercial work on every job, without exception.',
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
                What&apos;s Included on Every Commercial Job
              </h3>
              <div className="space-y-4">
                {[
                  'Full gutter channel vacuum clearance',
                  'Downpipe inspection and clearance',
                  'Flow testing before we leave',
                  'Before and after photographs',
                  'Written condition report',
                  'Fixed quote confirmed before arrival',
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
        title="Commercial enquiry?"
        subtitle="Message us on WhatsApp"
        description="Get a fast response for commercial gutter cleaning quotes, maintenance contracts and multi-site scheduling across Birmingham and the West Midlands."
        questions={[
          'Do you offer commercial maintenance contracts?',
          'Can you work outside business hours?',
          'Do you cover multi-site portfolios?',
          'What documentation do you provide?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Commercial Gutter Cleaning</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Blocked commercial gutters cause water ingress, facade damage and costly emergency call-outs. Our
                industrial vacuum system clears gutters on warehouses, retail parks and office buildings up to four
                storeys — entirely from ground level.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We work with facilities managers, landlords and business owners across Birmingham and the West
                Midlands on one-off clears and long-term maintenance programmes. Every visit includes downpipe
                clearance, flow testing and photographic documentation.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'High-reach vacuum — up to 4 storeys',
                  'No ladders placed against your building',
                  'Out-of-hours appointments available',
                  'Planned maintenance contracts',
                  'Multi-property portfolio coverage',
                  'Competitive commercial rates',
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

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
                  alt="Commercial gutter cleaning for office buildings"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Book Commercial Gutter Cleaning
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Flexible scheduling, competitive rates, and professional results for every commercial property.
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
