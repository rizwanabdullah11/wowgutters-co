'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { Home, Sun, Droplets, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ConservatoryCleaningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block rounded-full px-6 py-2 mb-6 text-lg font-bold" 
               style={{ backgroundColor: colors.white, color: colors.primary }}>
            HOT WASH SERVICE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.white }}>
            🏡 Conservatory Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.white }}>
            Complete conservatory restoration using hot, purified water cleaning
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Get Conservatory Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Clean Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Complete Conservatory Cleaning Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Roof Panels',
                description: 'Glass and polycarbonate roof panel cleaning inside and out'
              },
              {
                icon: '🪟',
                title: 'Wall Panels',
                description: 'Complete cleaning of all glass wall panels and glazing'
              },
              {
                icon: '🔲',
                title: 'Framework',
                description: 'Deep cleaning of UPVC, aluminum, or timber framework'
              },
              {
                icon: '🚪',
                title: 'Doors & Vents',
                description: 'Cleaning of doors, windows, and ventilation systems'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.text }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: colors.textLight }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Conservatory Problems We Solve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="w-12 h-12" />,
                title: 'Green Algae Growth',
                description: 'Hot wash removes stubborn green algae that blocks light and makes your conservatory look neglected.',
                solution: 'Crystal clear panels that let maximum light through'
              },
              {
                icon: <Droplets className="w-12 h-12" />,
                title: 'Moss & Lichen',
                description: 'Organic growth in roof valleys and frame joints that regular cleaning cannot reach.',
                solution: 'Complete removal from all areas including hard-to-reach spots'
              },
              {
                icon: <Home className="w-12 h-12" />,
                title: 'Frame Discoloration',
                description: 'Years of weather exposure causing UPVC frames to look yellow, grey, or stained.',
                solution: 'Restore frames to original bright white condition'
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Water Marks',
                description: 'Mineral deposits and water staining that make glass panels look cloudy and dirty.',
                solution: 'Purified water leaves no streaks or mineral deposits'
              }
            ].map((problem, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4" style={{ color: colors.primary }}>
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                  {problem.title}
                </h3>
                <p className="mb-4" style={{ color: colors.textLight }}>
                  {problem.description}
                </p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.lightGray }}>
                  <div className="font-semibold mb-2" style={{ color: colors.primary }}>
                    Our Solution:
                  </div>
                  <p className="text-sm" style={{ color: colors.text }}>
                    {problem.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Benefits of Hot Wash Conservatory Cleaning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '☀️ Maximum Light',
                description: 'Clean panels allow up to 30% more natural light into your conservatory, making it brighter and more enjoyable.'
              },
              {
                title: '🌡️ Better Temperature Control',
                description: 'Clean roof panels improve insulation properties and help maintain comfortable temperatures year-round.'
              },
              {
                title: '🏠 Increased Property Value',
                description: 'A well-maintained conservatory adds significant value to your property and improves curb appeal.'
              },
              {
                title: '🛡️ Extended Lifespan',
                description: 'Regular hot wash cleaning prevents damage from algae and organic growth, extending your conservatory\'s life.'
              },
              {
                title: '💰 Cost Effective',
                description: 'Professional cleaning is much more affordable than conservatory replacement or major repairs.'
              },
              {
                title: '🌿 Eco-Friendly',
                description: 'Hot, purified water cleaning requires no harsh chemicals, making it safe for plants and the environment.'
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

      {/* Process Section */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Our Conservatory Cleaning Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '1',
                title: 'Safety Setup',
                description: 'We set up safety equipment and protect surrounding areas before starting work.'
              },
              {
                step: '2',
                title: 'Roof Cleaning',
                description: 'Hot water treatment removes algae, moss, and organic growth from roof panels.'
              },
              {
                step: '3',
                title: 'Frame Restoration',
                description: 'Deep cleaning of all framework to restore original color and condition.'
              },
              {
                step: '4',
                title: 'Glass Polishing',
                description: 'All glass surfaces are cleaned and polished to crystal clear finish.'
              },
              {
                step: '5',
                title: 'Final Inspection',
                description: 'Complete quality check to ensure every area meets our high standards.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold" 
                     style={{ backgroundColor: colors.primary, color: colors.white }}>
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.text }}>
                  {process.title}
                </h3>
                <p className="text-sm" style={{ color: colors.textLight }}>
                  {process.description}
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
            Transform Your Conservatory Today
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.white }}>
            Bring your conservatory back to life with professional hot wash cleaning
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