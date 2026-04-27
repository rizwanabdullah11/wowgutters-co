'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef } from 'react';

export default function UnblockPage() {
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
            <source src="/gutter-cleaning-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        </div>

        {/* Content - Centered Vertically */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
                Professional Gutter Unblocking Service
              </p>
              <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
                Gutter Cleaning & Unblocking
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
                Professional gutter cleaning and unblocking to clear debris and keep rainwater flowing away from your home.
              </p>
              <Link href="/quote">
                <Button 
                  className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
                  style={{ backgroundColor: colors.white, color: colors.primary }}
                >
                  Get Unblocking Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Clean Section */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.dark }}>
            What We Clean & Unblock
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🍃',
                title: 'Leaves & Debris',
                description: 'Remove all leaves, twigs, and organic matter that cause blockages and overflow.'
              },
              {
                icon: '🌿',
                title: 'Moss & Algae',
                description: 'Clear moss, algae, and plant growth that can damage gutters and cause blockages.'
              },
              {
                icon: '🏠',
                title: 'Downpipes',
                description: 'Thoroughly clean and unblock all downpipes to ensure proper water drainage.'
              },
              {
                icon: '🔧',
                title: 'Gutter Channels',
                description: 'Clean entire gutter channels removing all dirt, silt, and accumulated debris.'
              },
              {
                icon: '🐦',
                title: 'Nests & Animals',
                description: 'Safely remove bird nests and prevent animal-related blockages.'
              },
              {
                icon: '💧',
                title: 'Water Testing',
                description: 'Test water flow after cleaning to ensure complete unblocking and proper drainage.'
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

      {/* Why Choose Our Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.dark }}>
                Why Choose Our Unblocking Service?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Professional Equipment',
                    description: 'High-powered vacuum systems and specialized tools for thorough cleaning.'
                  },
                  {
                    title: 'Same Day Booking',
                    description: 'Same day booking for urgent gutter unblocking needs.'
                  },
                  {
                    title: 'No Mess Guarantee',
                    description: 'We clean up completely - no debris left on your property.'
                  },
                  {
                    title: 'Same Day Book',
                    description: 'Emergency unblocking available - often same day in most areas.'
                  },
                  {
                    title: 'Preventive Advice',
                    description: 'Expert tips to prevent future blockages and maintain your gutters.'
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
                Signs You Need Unblocking
              </h3>
              <div className="space-y-4">
                {[
                  'Water overflowing from gutters during rain',
                  'Visible debris or plants growing in gutters',
                  'Sagging gutters from weight of debris',
                  'Water stains on exterior walls',
                  'Damp or water damage around foundations',
                  'Gurgling sounds from downpipes'
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
        title="Need urgent unblocking?"
        subtitle="Message us on WhatsApp"
        description="Get instant answers about our gutter unblocking service. Our team is ready to help with emergency unblocking, scheduling, pricing, and any concerns about blocked gutters."
        questions={[
          'How quickly can you unblock my gutters?',
          'Do you offer emergency unblocking service?',
          'What causes gutter blockages?',
          'How much does gutter unblocking cost?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      {/* Unblock Service Section - Text Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Gutter Unblocking</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Blocked gutters can cause serious damage to your property, leading to water overflow, damp walls, 
                and structural issues. Our professional gutter unblocking service uses advanced equipment to thoroughly 
                clear all blockages and restore proper water flow.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We use high-powered vacuum systems and specialized tools to remove leaves, moss, debris, and any 
                obstructions from your gutters and downpipes. Our team works efficiently to ensure your gutter system 
                is completely clear and functioning properly across the West Midlands.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'High-powered vacuum extraction',
                  'Complete debris removal',
                  'Downpipe clearing and flushing',
                  'Water flow testing included',
                  'Before and after photos',
                  'Same-day booking available'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/quote">
                <Button 
                  className="px-8 py-4 text-lg font-bold rounded-full hover:scale-105 transition-transform"
                  style={{ background: colors.primaryGradient, color: 'white' }}
                >
                  Book Unblocking Service
                </Button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/gutter-cleaning.jpeg" 
                  alt="Professional Gutter Unblocking Service" 
                  className="w-full h-auto object-cover"
                />
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
              Professional Gutter <span style={{ color: colors.primary }}>Unblocking Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert gutter cleaning and unblocking to protect your property from water damage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Blocked gutters are one of the most common causes of property damage in the UK. When gutters become 
                clogged with leaves, moss, and debris, water cannot drain properly, leading to overflow, damp walls, 
                and potential structural damage to your home.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our professional gutter unblocking service uses high-powered vacuum systems and specialized equipment 
                to thoroughly clear all blockages. We work from ground level using advanced technology, ensuring safe 
                and effective cleaning without the need for ladders or scaffolding.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Unblocking Process:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Initial inspection and assessment',
                    'High-powered vacuum extraction',
                    'Downpipe clearing and flushing',
                    'Complete debris removal',
                    'Water flow testing',
                    'Before and after photos'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <span className="text-white text-xs font-bold">{index + 1}</span>
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
                Common Causes of Gutter Blockages
              </h3>
              
              <div className="grid gap-4">
                {[
                  { icon: '🍂', title: 'Autumn Leaves', desc: 'Fallen leaves are the primary cause of blockages, especially in autumn' },
                  { icon: '🌿', title: 'Moss & Lichen', desc: 'Growth from nearby trees and roofs accumulates in gutters' },
                  { icon: '🐦', title: 'Bird Nests', desc: 'Birds often build nests in gutters, causing severe blockages' },
                  { icon: '🌳', title: 'Tree Seeds', desc: 'Seeds, twigs, and small branches fall into gutter systems' },
                  { icon: '🏠', title: 'Roof Debris', desc: 'Broken tiles, mortar, and roofing materials wash into gutters' },
                  { icon: '💨', title: 'Wind-Blown Debris', desc: 'Plastic bags, paper, and other materials blown by wind' }
                ].map((cause, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="text-3xl">{cause.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{cause.title}</h4>
                      <p className="text-sm text-gray-600">{cause.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consequences Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-12 border border-red-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Consequences of Blocked Gutters
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '💧',
                  title: 'Water Damage',
                  desc: 'Overflow causes damp walls, ceiling damage, and interior water penetration'
                },
                {
                  icon: '🏚️',
                  title: 'Structural Issues',
                  desc: 'Foundation damage, fascia rot, and weakened building structure'
                },
                {
                  icon: '💰',
                  title: 'Costly Repairs',
                  desc: 'Preventable damage can cost thousands in repair bills'
                }
              ].map((consequence, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{consequence.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{consequence.title}</h4>
                  <p className="text-gray-600 text-sm">{consequence.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Don&apos;t Wait Until It&apos;s Too Late
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Regular gutter unblocking prevents costly damage and keeps your property protected. 
              Book our professional service today for fast, effective results.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
                style={{ background: colors.primaryGradient, color: 'white' }}
              >
                Get Your Gutters Unblocked Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Don&apos;t Let Blocked Gutters Damage Your Home
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Get professional gutter cleaning and unblocking service today. Protect your property from water damage.
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold mr-4"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Get Unblocking Service
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/10 active:bg-white/20"
              style={{ borderColor: colors.white, color: colors.white }}
            >
              Emergency Service
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}