'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef } from 'react';

export default function CleanPage() {
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
            <source src="/roof-cleaning-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        </div>

        {/* Content - Centered Vertically */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
                Professional Roof & Exterior Cleaning
              </p>
              <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
                Roof & Exterior Cleaning
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
                Specialist roof and exterior cleaning to remove moss, algae and dirt and keep your home looking its best.
              </p>
              <Link href="/quote">
                <Button 
                  className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
                  style={{ backgroundColor: colors.white, color: colors.primary }}
                >
                  Book Cleaning Service
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
            Our Cleaning Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Roof Cleaning',
                description: 'Remove moss, algae, lichen and dirt from all types of roofing materials safely.'
              },
              {
                icon: '🌿',
                title: 'Moss Removal',
                description: 'Complete moss removal and treatment to prevent regrowth and roof damage.'
              },
              {
                icon: '🧽',
                title: 'UPVC Cleaning',
                description: 'Professional cleaning of UPVC windows, doors, fascias and soffits.'
              },
              {
                icon: '🏗️',
                title: 'Fascia & Soffit',
                description: 'Deep clean fascia boards and soffits to restore their original appearance.'
              },
              {
                icon: '💧',
                title: 'Pressure Washing',
                description: 'Professional pressure washing for driveways, patios, and exterior surfaces.'
              },
              {
                icon: '✨',
                title: 'Protective Treatment',
                description: 'Apply protective treatments to prevent future moss and algae growth.'
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

      {/* Why Choose Our Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.dark }}>
                Why Choose Our Cleaning Service?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Safe Methods',
                    description: 'Low-pressure cleaning methods that protect your roof and property from damage.'
                  },
                  {
                    title: 'Eco-Friendly Products',
                    description: 'Environmentally safe cleaning products that are effective yet gentle.'
                  },
                  {
                    title: 'Same Day Booking',
                    description: 'Same day booking for urgent roof cleaning needs.'
                  },
                  {
                    title: 'Long-Lasting Results',
                    description: 'Professional cleaning that lasts longer with optional protective treatments.'
                  },
                  {
                    title: 'No Damage Guarantee',
                    description: 'Safe cleaning methods with guarantee against damage to your property.'
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
                Benefits of Regular Cleaning
              </h3>
              <div className="space-y-4">
                {[
                  'Prevents costly roof damage from moss and algae',
                  'Improves your home\'s curb appeal and value',
                  'Extends the life of your roofing materials',
                  'Prevents blocked gutters from debris',
                  'Maintains warranty on roofing materials',
                  'Creates a healthier environment around your home'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: colors.primary }}
                    >
                      ✓
                    </div>
                    <p style={{ color: colors.text }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppContactSection
        title="Need roof cleaning?"
        subtitle="Message us on WhatsApp"
        description="Get instant answers about our roof and exterior cleaning services. Our team is ready to help with quotes, scheduling, cleaning methods, and any questions about moss removal and roof maintenance."
        questions={[
          'How much does roof cleaning cost?',
          'Is roof cleaning safe for my tiles?',
          'How often should I clean my roof?',
          'Do you remove moss and algae?',
        ]}
        backgroundImage="/gutter-clean.png"
      />

      {/* Roof Cleaning Results Section - Text Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Roof Cleaning</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transform your roof from moss-covered and stained to clean and protected. Our professional roof 
                cleaning service safely removes moss, algae, lichen, and dirt without damaging your roofing materials, 
                extending the life of your roof and improving your property's appearance.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Using low-pressure cleaning techniques and eco-friendly products, we restore your roof to its 
                original condition. Our service includes optional protective treatments to prevent future moss 
                and algae growth across the West Midlands.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Safe moss and algae removal',
                  'Low-pressure cleaning methods',
                  'Eco-friendly cleaning products',
                  'Extends roof lifespan significantly',
                  'Improves property appearance',
                  'Optional protective treatments'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <span className="text-white text-sm font-bold">✓</span>
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
                  Book Roof Cleaning
                </Button>
              </Link>
            </div>

            {/* Right - Single Large Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '400px' }}>
                <img 
                  src="/roof-cleaning-before-after.jpeg" 
                  alt="Professional Roof Cleaning Service - Moss Removal" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
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
              Professional Roof <span style={{ color: colors.primary }}>Cleaning Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert roof and exterior cleaning to remove moss, algae, and restore your property&apos;s appearance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Moss, algae, and lichen growth on your roof isn&apos;t just unsightly—it can cause serious damage. 
                These organisms trap moisture, lift tiles, and accelerate deterioration of roofing materials. 
                Regular professional cleaning protects your investment and extends the life of your roof.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our specialist roof cleaning service uses low-pressure techniques and eco-friendly products to 
                safely remove moss, algae, and dirt without damaging your roof. We work on all types of roofing 
                materials including tiles, slate, and flat roofs.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Cleaning Process:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Roof inspection and assessment',
                    'Safe moss and debris removal',
                    'Low-pressure cleaning treatment',
                    'Algae and lichen elimination',
                    'Gutter clearing and cleaning',
                    'Optional protective treatment application'
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
                What We Clean
              </h3>
              
              <div className="grid gap-4">
                {[
                  { icon: '🏠', title: 'Roof Tiles', desc: 'All types of tiles, slate, and concrete roofing' },
                  { icon: '🌿', title: 'Moss & Algae', desc: 'Complete removal of moss, algae, and lichen growth' },
                  { icon: '🧽', title: 'UPVC Fascias', desc: 'Fascia boards, soffits, and guttering exteriors' },
                  { icon: '🪟', title: 'Windows & Frames', desc: 'UPVC windows, doors, and conservatories' },
                  { icon: '🏗️', title: 'Flat Roofs', desc: 'Felt, rubber, and fibreglass flat roof systems' },
                  { icon: '💧', title: 'Driveways', desc: 'Pressure washing for patios, paths, and driveways' }
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-12 border border-green-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Benefits of Professional Roof Cleaning
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🛡️',
                  title: 'Extends Roof Life',
                  desc: 'Removes damaging organisms that deteriorate roofing materials'
                },
                {
                  icon: '💰',
                  title: 'Increases Value',
                  desc: 'Improves curb appeal and property value significantly'
                },
                {
                  icon: '✨',
                  title: 'Prevents Damage',
                  desc: 'Stops moisture retention and tile lifting before it starts'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Restore Your Roof&apos;s Appearance Today
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Professional roof cleaning that&apos;s safe, effective, and long-lasting. Protect your 
              investment and enhance your home&apos;s appearance with our expert service.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
                style={{ background: colors.primaryGradient, color: 'white' }}
              >
                Book Your Roof Cleaning Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Keep Your Home Looking Its Best
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.white }}>
            Professional cleaning services that protect your investment and enhance your home&apos;s appearance.
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold mr-4"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Book Cleaning Service
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-white/10 active:bg-white/20"
              style={{ borderColor: colors.white, color: colors.white }}
            >
              Get Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}