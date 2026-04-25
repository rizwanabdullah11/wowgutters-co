'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { Sparkles, Eye, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function WindowsCleaningPage() {
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
            ✨ Windows & Frames Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.white }}>
            Crystal clear windows with streak-free finish using hot, purified water
          </p>
          <Link href="/quote">
            <Button 
              className="px-8 py-4 text-lg font-semibold"
              style={{ backgroundColor: colors.white, color: colors.primary }}
            >
              Get Window Cleaning Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Clean Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Complete Window Cleaning Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🪟',
                title: 'Window Glass',
                description: 'Inside and outside glass cleaning for crystal clear visibility'
              },
              {
                icon: '🔲',
                title: 'Window Frames',
                description: 'Deep cleaning of UPVC, wood, and metal window frames'
              },
              {
                icon: '📏',
                title: 'Window Sills',
                description: 'Thorough cleaning of interior and exterior window sills'
              },
              {
                icon: '🔧',
                title: 'Hardware',
                description: 'Cleaning of handles, locks, and window hardware'
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

      {/* Hot Wash Benefits */}
      <section className="py-16" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Why Hot Wash for Windows?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Streak-Free Finish',
                description: 'Purified water leaves no mineral deposits or streaks, ensuring perfect clarity every time.'
              },
              {
                icon: <Eye className="w-12 h-12" />,
                title: 'Superior Visibility',
                description: 'Hot water removes stubborn dirt, grime, and film that cold water cleaning often leaves behind.'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Frame Protection',
                description: 'Gentle hot wash cleaning protects delicate window seals and frame materials.'
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: 'Longer Lasting',
                description: 'Hot wash cleaning removes more dirt and grime, keeping windows cleaner for longer periods.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="mb-4" style={{ color: colors.primary }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Our Window Cleaning Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Pre-Clean Assessment',
                description: 'We inspect your windows and frames to identify any special requirements or problem areas.'
              },
              {
                step: '2',
                title: 'Hot Water Preparation',
                description: 'Our system heats and purifies water to the optimal temperature for maximum cleaning power.'
              },
              {
                step: '3',
                title: 'Deep Clean Process',
                description: 'Hot, purified water is applied to dissolve dirt, grime, and stubborn marks from glass and frames.'
              },
              {
                step: '4',
                title: 'Final Polish',
                description: 'Windows are squeegeed and polished to a streak-free, crystal clear finish.'
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
            Ready for Crystal Clear Windows?
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.white }}>
            Experience the difference hot wash window cleaning makes
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