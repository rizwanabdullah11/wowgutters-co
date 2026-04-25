'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { Sparkles, Home, Droplets, Thermometer, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HotWashPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block rounded-full px-6 py-2 mb-6 text-lg font-bold transform -rotate-3 border-4" 
               style={{ backgroundColor: colors.white, color: colors.cta, borderColor: colors.white }}>
            NEW SERVICE!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.white }}>
            🔥 HOT WASH Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.white }}>
            Incredible exterior cleaning power using our <span className="font-bold">HOT, PURIFIED</span> water system
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Get Hot Wash Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Hot Wash Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            What Makes Hot Wash Different?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Thermometer className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                Hot Water Power
              </h3>
              <p style={{ color: colors.textLight }}>
                Our heated water system reaches optimal temperatures to break down dirt, grime, and organic matter more effectively than cold water cleaning.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Droplets className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                Purified Water
              </h3>
              <p style={{ color: colors.textLight }}>
                We use a purification system that removes minerals and impurities, leaving surfaces spotless without streaks or water marks.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                Eco-Friendly
              </h3>
              <p style={{ color: colors.textLight }}>
                No harsh chemicals needed! The combination of hot, purified water provides superior cleaning while being environmentally safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Hot Wash Cleaning Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Windows & Frames',
                description: 'Crystal clear windows with streak-free finish. Perfect for residential and commercial properties.',
                features: ['Streak-free cleaning', 'Frame deep clean', 'Sill cleaning included']
              },
              {
                icon: <Droplets className="w-12 h-12" />,
                title: 'Gutters & Fascias',
                description: 'Remove years of built-up grime, algae, and staining from gutters and fascia boards.',
                features: ['Algae removal', 'Stain elimination', 'Brightens white UPVC']
              },
              {
                icon: <Home className="w-12 h-12" />,
                title: 'Conservatories',
                description: 'Complete conservatory cleaning including roof, walls, and framework restoration.',
                features: ['Roof panel cleaning', 'Frame restoration', 'Moss & algae removal']
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Exterior Walls',
                description: 'Transform dirty, stained exterior walls back to their original condition.',
                features: ['Render cleaning', 'Brick restoration', 'Paint preparation']
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Driveways & Patios',
                description: 'Remove oil stains, moss, and embedded dirt from hard surfaces.',
                features: ['Oil stain removal', 'Moss treatment', 'Joint cleaning']
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Commercial Cleaning',
                description: 'Professional hot wash services for business premises and commercial buildings.',
                features: ['Scheduled maintenance', 'Large area cleaning', 'Minimal disruption']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4" style={{ color: colors.primary }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>
                  {service.title}
                </h3>
                <p className="mb-4" style={{ color: colors.textLight }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm" style={{ color: colors.textLight }}>
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Why Choose Hot Wash Cleaning?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '🔥 Superior Cleaning Power',
                description: 'Hot water breaks down dirt and grime more effectively than cold water, achieving better results in less time.'
              },
              {
                title: '💧 No Streaks or Marks',
                description: 'Purified water leaves no mineral deposits, ensuring a perfect, streak-free finish every time.'
              },
              {
                title: '🌱 Environmentally Safe',
                description: 'No harsh chemicals required - just the power of hot, purified water for eco-friendly cleaning.'
              },
              {
                title: '⚡ Faster Results',
                description: 'Hot water cleaning is more efficient, meaning faster completion times and less disruption.'
              },
              {
                title: '🛡️ Gentle on Surfaces',
                description: 'While powerful on dirt, hot wash is gentle on delicate surfaces like painted frames and glass.'
              },
              {
                title: '💰 Better Value',
                description: 'Longer-lasting results mean less frequent cleaning required, saving you money over time.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border-l-4" style={{ borderColor: colors.primary }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.text }}>
                  {benefit.title}
                </h3>
                <p style={{ color: colors.textLight }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.white }}>
            Ready to Experience Hot Wash Cleaning?
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.white }}>
            See the difference hot, purified water makes to your property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                className="px-8 py-4 text-lg font-semibold border-2"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: colors.white,
                  borderColor: colors.white
                }}
              >
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}