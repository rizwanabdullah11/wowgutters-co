'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Shield } from 'lucide-react';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import { useEffect, useRef, useState } from 'react';

export default function InspectionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Video sources - alternating between gutter and roof cleaning
  const videos = [
    '/gutter-cleaning-video.mp4',
    '/roof-cleaning-video.mp4'
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // Switch videos every 10 seconds
  useEffect(() => {
    const videoSwitchInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(videoSwitchInterval);
  }, [videos.length]);

  // Play video when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <main className="bg-white">
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
            key={currentVideoIndex}
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        </div>
        
        {/* Content - Centered Vertically */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Professional Inspection Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
                FREE Gutter & Roof<br />
                <span style={{ color: colors.primary }}>Inspection</span>
              </h1>
              
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
                Catch problems early with our comprehensive inspection service. 
                <span className="font-semibold"> Completely free, no obligation.</span>
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link href="/quote">
                  <Button 
                    className="px-8 py-6 text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-transform"
                    style={{ background: colors.primaryGradient, color: 'white' }}
                  >
                    Book FREE Inspection
                  </Button>
                </Link>
                <a href="tel:07421433910">
                  <Button 
                    className="px-8 py-6 text-lg font-bold rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 transition-all"
                  >
                    Call Now
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
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
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Inspect Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: colors.text }}>
              What We <span style={{ color: colors.primary }}>Inspect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive inspection covers every aspect of your gutter system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Gutter Condition',
                desc: 'Check for cracks, rust, and structural damage'
              },
              {
                icon: '💧',
                title: 'Water Flow',
                desc: 'Test drainage and identify blockages'
              },
              {
                icon: '🔗',
                title: 'Joints & Seals',
                desc: 'Inspect for leaks and loose connections'
              },
              {
                icon: '📏',
                title: 'Alignment',
                desc: 'Check for sagging or improper slope'
              },
              {
                icon: '🏠',
                title: 'Fascia & Soffit',
                desc: 'Examine for water damage and rot'
              },
              {
                icon: '🍂',
                title: 'Debris Build-up',
                desc: 'Assess cleaning requirements'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4"
                style={{ borderColor: colors.primary }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Inspection Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.dark }}>
                Why Choose Our Inspection Service?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: '100% FREE Service',
                    description: 'No hidden costs or obligations - completely free inspection and quote.'
                  },
                  {
                    title: 'Qualified Technicians',
                    description: 'Fully trained and insured professionals with years of experience.'
                  },
                  {
                    title: 'Detailed Report',
                    description: 'Comprehensive written report with photos and recommendations.'
                  },
                  {
                    title: 'No Pressure Sales',
                    description: 'Honest assessment with no pressure to purchase additional services.'
                  },
                  {
                    title: 'Same Day Book',
                    description: 'Often available for same-day book in most areas.'
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
                What Happens Next?
              </h3>
              <div className="space-y-4">
                {[
                  'Book your free inspection online or by phone',
                  'We arrange a convenient time to visit',
                  'Thorough inspection of your gutter system',
                  'Detailed report with photos and findings',
                  'Free quote for any recommended work',
                  'No obligation to proceed'
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: colors.primary }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ color: colors.text }}>
                      {step}
                    </p>
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
        description="Get instant answers about our free inspection service. Our team is ready to help with scheduling, questions about the inspection process, and any concerns you may have."
        questions={[
          'How long does a free inspection take?',
          'What areas do you cover for inspections?',
          'Can I book an inspection for today?',
          'What will the inspection report include?',
        ]}
        backgroundImage="/gutter-inspection.jfif"
      />

      {/* Gutter Inspection Section - Text Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Professional <span style={{ color: colors.primary }}>Gutter Inspection</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our comprehensive gutter inspection service identifies potential problems before they become costly repairs. 
                We thoroughly examine every component of your gutter system to ensure optimal performance and protection 
                for your property.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Using advanced inspection techniques, our qualified technicians assess the condition of gutters, downpipes, 
                joints, and fascia boards. We provide detailed photographic evidence and a comprehensive written report 
                highlighting any issues discovered.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Complete gutter system assessment',
                  'Blockage and debris identification',
                  'Structural integrity evaluation',
                  'Water flow and drainage testing',
                  'Fascia and soffit inspection',
                  'Free repair quotation provided'
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
                  Book Gutter Inspection
                </Button>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/gutter-inspection.png" 
                  alt="Professional Gutter Inspection Service" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Cleaning Section - Image Left, Text Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Roof-Cleaner.webp" 
                  alt="Professional Roof Cleaning Service" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: colors.text }}>
                Expert <span style={{ color: colors.primary }}>Roof Cleaning</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Professional roof cleaning is essential for maintaining your property's appearance and structural integrity. 
                Moss, algae, and debris accumulation can cause significant damage to roof tiles and shingles, leading to 
                leaks and expensive repairs if left untreated.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our roof cleaning service uses safe, effective methods to remove moss, algae, lichen, and debris without 
                damaging your roof. We work carefully to restore your roof's appearance while extending its lifespan and 
                protecting your property investment across the West Midlands.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Safe moss and algae removal',
                  'Debris clearance from roof surface',
                  'Gentle cleaning methods used',
                  'Extends roof lifespan significantly',
                  'Improves property appearance',
                  'Prevents water damage and leaks'
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
                  Book Roof Cleaning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Regular Gutter <span style={{ color: colors.primary }}>Inspections Matter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your property investment with professional gutter inspection services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Regular gutter inspections are essential for maintaining the structural integrity of your property. 
                Blocked or damaged gutters can lead to serious issues including water damage to your roof, walls, 
                and foundation, potentially costing thousands in repairs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our professional gutter inspection service identifies problems before they escalate. We use 
                advanced inspection techniques to assess the condition of your entire gutter system, including 
                downpipes, joints, and fascia boards.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Our Inspection Includes:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Complete gutter system assessment',
                    'Downpipe flow testing',
                    'Structural integrity check',
                    'Photographic evidence',
                    'Detailed written report',
                    'Free repair quotation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Common Problems We Identify
              </h3>
              
              <div className="grid gap-4">
                {[
                  { icon: '🍂', title: 'Blockages', desc: 'Leaves, moss, and debris accumulation' },
                  { icon: '💧', title: 'Leaks', desc: 'Damaged joints and seals causing water escape' },
                  { icon: '📉', title: 'Sagging', desc: 'Improper slope or bracket failure' },
                  { icon: '🔧', title: 'Damage', desc: 'Cracks, rust, and structural deterioration' },
                  { icon: '🏠', title: 'Fascia Issues', desc: 'Water damage to boards and soffits' },
                  { icon: '⚠️', title: 'Poor Drainage', desc: 'Blocked downpipes and overflow points' }
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

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Don't Wait for Visible Damage
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Our free inspection service helps you stay ahead of potential problems, 
              saving you money and protecting your property investment.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
                style={{ background: colors.primaryGradient, color: 'white' }}
              >
                Book Your Free Inspection Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Ready for Your FREE Inspection?
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
