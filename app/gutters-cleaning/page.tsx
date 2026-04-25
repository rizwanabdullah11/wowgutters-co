'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { Droplets, Shield, Zap, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function GuttersCleaningPage() {
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
            💧 Gutters & Fascias Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.white }}>
            Remove years of grime, algae, and staining with hot, purified water power
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Get Gutters Cleaning Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Clean Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Complete Gutters & Fascias Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Gutter Exteriors',
                description: 'Deep cleaning of gutter exteriors to remove dirt, algae, and staining'
              },
              {
                icon: '📐',
                title: 'Fascia Boards',
                description: 'Thorough cleaning of fascia boards and soffits to restore original color'
              },
              {
                icon: '🔗',
                title: 'Downpipes',
                description: 'Complete cleaning of downpipes and drainage connections'
              },
              {
                icon: '🎯',
                title: 'Detail Work',
                description: 'Attention to brackets, joints, and hard-to-reach areas'
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

      {/* Problems We Solve */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Problems We Solve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12" />,
                title: 'Algae & Moss Growth',
                description: 'Hot water effectively removes green algae and moss that makes gutters look dirty and aged.',
                before: 'Green, slimy buildup',
                after: 'Clean, original color'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Black Staining',
                description: 'Stubborn black streaks and stains that regular cleaning cannot remove.',
                before: 'Unsightly black marks',
                after: 'Bright, clean appearance'
              },
              {
                icon: <Droplets className="w-12 h-12" />,
                title: 'Weather Damage',
                description: 'Years of weather exposure causing discoloration and grime buildup.',
                before: 'Weathered, dirty look',
                after: 'Like-new condition'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'UPVC Restoration',
                description: 'Restore white UPVC gutters and fascias to their original bright white color.',
                before: 'Yellowed, dull plastic',
                after: 'Brilliant white finish'
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
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded" style={{ backgroundColor: '#fee2e2' }}>
                    <div className="font-semibold text-red-700">Before:</div>
                    <div className="text-red-600">{problem.before}</div>
                  </div>
                  <div className="p-3 rounded" style={{ backgroundColor: '#e0f2fe' }}>
                    <div className="font-semibold" style={{ color: colors.primary }}>After:</div>
                    <div style={{ color: colors.primary }}>{problem.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Our Hot Wash Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Assessment',
                description: 'We examine your gutters and fascias to identify problem areas and staining levels.'
              },
              {
                step: '2',
                title: 'Pre-Treatment',
                description: 'Stubborn areas receive special attention with targeted hot water application.'
              },
              {
                step: '3',
                title: 'Hot Wash Clean',
                description: 'High-temperature purified water removes algae, stains, and years of buildup.'
              },
              {
                step: '4',
                title: 'Final Rinse',
                description: 'Complete rinse with purified water ensures no residue and perfect finish.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" 
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
            Transform Your Gutters & Fascias
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.white }}>
            See the dramatic difference hot wash cleaning makes to your property's appearance
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