'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef } from 'react';

export default function RepairPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <main className="bg-gray-50">
      {/* Hero Section with Video Background */}
      <section 
        className="relative overflow-hidden"
        style={{ height: '70vh', minHeight: '500px' }}
      >
        {/* Video Background */}
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
            <source src="/gutter-final-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        </div>

        {/* Content - Centered Vertically */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
                Expert Gutter Repair Service
              </p>
              <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
                Professional Gutter Repairs
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
                Expert gutter repair service to fix leaks, sagging and damage and protect your property from water problems.
              </p>
              <Link href="/quote">
                <Button 
                  className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
                  style={{ backgroundColor: colors.white, color: colors.primary }}
                >
                  Request Repair Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Repair Section */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.dark }}>
            Common Gutter Repairs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💧',
                title: 'Leak Repairs',
                description: 'Fix leaking joints, cracks, and holes to prevent water damage to your property.'
              },
              {
                icon: '🔧',
                title: 'Sagging Gutters',
                description: 'Repair and reinforce sagging sections with new brackets and proper alignment.'
              },
              {
                icon: '🔗',
                title: 'Joint Replacement',
                description: 'Replace damaged joints and seals to restore watertight connections.'
              },
              {
                icon: '📐',
                title: 'Alignment Issues',
                description: 'Correct gutter alignment and gradient for proper water flow and drainage.'
              },
              {
                icon: '🏠',
                title: 'Bracket Repairs',
                description: 'Replace broken or loose brackets to secure gutters properly to your home.'
              },
              {
                icon: '🌊',
                title: 'Downpipe Repairs',
                description: 'Fix damaged downpipes, joints, and connections for complete drainage system.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.dark }}>
                  {item.title}
                </h3>
                <p style={{ color: colors.textLight }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Repairs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.dark }}>
                Why Choose Our Repair Service?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Quality Materials',
                    description: 'We use only high-quality, weather-resistant materials for lasting repairs.'
                  },
                  {
                    title: 'Experienced Technicians',
                    description: 'Skilled professionals with years of experience in gutter repair work.'
                  },
                  {
                    title: 'Warranty Included',
                    description: 'All repairs come with our comprehensive warranty for your peace of mind.'
                  },
                  {
                    title: 'Emergency Repairs',
                    description: 'Urgent repair service available to prevent further damage to your property.'
                  },
                  {
                    title: 'Competitive Pricing',
                    description: 'Fair, transparent pricing with no hidden costs or surprise charges.'
                  }
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
                      <p style={{ color: colors.textLight }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>
                Signs You Need Repairs
              </h3>
              <div className="space-y-4">
                {[
                  'Visible cracks or holes in gutters',
                  'Water dripping from joints or seams',
                  'Gutters pulling away from the house',
                  'Rust spots or corrosion damage',
                  'Overflowing during moderate rainfall',
                  'Loose or missing brackets'
                ].map((sign, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: colors.accent }}
                    >
                      !
                    </div>
                    <p style={{ color: colors.text }}>
                      {sign}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppContactSection
        title="Need gutter repairs?"
        subtitle="Message us on WhatsApp"
        description="Get instant answers about our gutter repair service. Our team is ready to help with repair quotes, emergency fixes, warranty information, and any concerns about damaged gutters."
        questions={[
          'How much do gutter repairs cost?',
          'Can you repair my leaking gutters today?',
          'Do you offer warranty on repairs?',
          'What types of gutter damage can you fix?',
        ]}
        backgroundImage="/gutter-repair.png"
      />

      {/* Repair Results Section - Text Left, Images Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Gutter Repairs</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our expert gutter repair service transforms damaged, leaking gutters into fully functional systems 
                that protect your property. We fix all types of gutter problems including leaks, sagging sections, 
                broken brackets, and damaged joints.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Using quality materials and proven repair techniques, we restore your gutters to optimal condition. 
                Every repair is backed by our comprehensive warranty, giving you peace of mind that your gutter 
                system will perform reliably for years to come.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-xl font-bold text-red-600 mb-3">Before Repair</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Leaking joints causing water damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sagging sections from broken brackets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Debris accumulation and blockages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Water overflow damaging property</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>After Repair</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span style={{ color: colors.primary }} className="font-bold">✓</span>
                      <span>Fully repaired and watertight system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: colors.primary }} className="font-bold">✓</span>
                      <span>Properly aligned with secure brackets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: colors.primary }} className="font-bold">✓</span>
                      <span>Clean and free-flowing drainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: colors.primary }} className="font-bold">✓</span>
                      <span>Property protected from water damage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/quote">
                <Button 
                  className="px-8 py-4 text-lg font-bold rounded-full hover:scale-105 transition-transform"
                  style={{ background: colors.primaryGradient, color: 'white' }}
                >
                  Get Your Repair Quote
                </Button>
              </Link>
            </div>

            {/* Right - Before/After Images Stacked */}
            <div className="space-y-6">
              {/* Before Image */}
              <div>
                <p className="text-lg font-bold mb-3 text-gray-600 uppercase tracking-wide">Before Repair</p>
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '250px' }}>
                  <img 
                    src="/gutter-repair-before.png" 
                    alt="Damaged Gutter Before Repair - Leaking and Broken" 
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '250px' }}
                  />
                </div>
              </div>
              
              {/* After Image */}
              <div>
                <p className="text-lg font-bold mb-3 uppercase tracking-wide" style={{ color: colors.primary }}>After Repair</p>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/gutter-repair-after.jpeg" 
                    alt="Repaired Gutter After Service - Clean and Functional" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Expert Gutter <span style={{ color: colors.primary }}>Repair Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional gutter repairs to fix leaks, damage, and prevent costly water damage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Damaged gutters can quickly lead to serious property problems. Leaking joints, sagging sections, 
                and broken brackets allow water to overflow, causing damage to walls, foundations, and landscaping. 
                Our professional gutter repair service fixes these issues before they escalate into expensive problems.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in all types of gutter repairs, from simple joint resealing to complete section 
                replacement. Our experienced technicians use quality materials and proven techniques to ensure 
                repairs last for years, backed by our comprehensive warranty.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Repair Services Include:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Leak detection and sealing',
                    'Bracket replacement and reinforcement',
                    'Joint and seal repairs',
                    'Alignment correction',
                    'Downpipe repairs and replacement',
                    'Complete section replacement'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Common Gutter Problems We Fix
              </h3>
              
              <div className="grid gap-4">
                {[
                  { icon: '💧', title: 'Leaking Joints', desc: 'Failed seals and connections causing water escape' },
                  { icon: '📉', title: 'Sagging Sections', desc: 'Gutters pulling away due to broken brackets or weight' },
                  { icon: '🔧', title: 'Rust & Corrosion', desc: 'Metal deterioration requiring section replacement' },
                  { icon: '🔗', title: 'Broken Brackets', desc: 'Loose or missing fixings compromising gutter stability' },
                  { icon: '⚠️', title: 'Cracks & Holes', desc: 'Physical damage from debris, weather, or age' },
                  { icon: '📐', title: 'Poor Alignment', desc: 'Incorrect slope preventing proper water drainage' }
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
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

          {/* Why Act Fast Section */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-12 border border-amber-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Why Quick Repairs Save Money
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🛡️',
                  title: 'Prevent Escalation',
                  desc: 'Small leaks become major water damage if left unrepaired'
                },
                {
                  icon: '💰',
                  title: 'Lower Costs',
                  desc: 'Early repairs cost far less than replacing damaged gutters'
                },
                {
                  icon: '🏠',
                  title: 'Protect Property',
                  desc: 'Stop water damage to walls, foundations, and interiors'
                }
              ].map((reason, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{reason.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{reason.title}</h4>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Fix It Now, Save Money Later
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Don&apos;t let minor gutter damage turn into major repair bills. Our professional repair 
              service fixes problems quickly and effectively with quality materials and workmanship.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
                style={{ background: colors.primaryGradient, color: 'white' }}
              >
                Get Your Repair Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Don&apos;t Let Small Problems Become Big Expenses
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Get professional gutter repairs before minor issues cause major damage to your property.
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold mr-4"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Get Repair Quote
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/10 active:bg-white/20"
              style={{ borderColor: colors.white, color: colors.white }}
            >
              Emergency Repairs
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}