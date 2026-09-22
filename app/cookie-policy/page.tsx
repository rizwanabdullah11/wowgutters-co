'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, Settings, BarChart, Target, Shield, ArrowRight } from 'lucide-react';
import { colors } from '@/constants/colors';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export default function CookiePolicy() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SchemaMarkup
        id="schema-cookie-webpage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Cookie Policy',
          url: 'https://wowgutters.co.uk/cookie-policy',
        }}
      />
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-4 min-h-[440px] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/gutter-cleaning.jpeg"
            className="w-full h-full object-cover"
          >
            <source src="/gutter-final-video.mp4" type="video/mp4" />
            <source src="/gutter-cleaning-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Cookie className="w-5 h-5" style={{ color: colors.primary }} />
            <span className="text-white font-semibold text-sm">Transparency &amp; Privacy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Cookie <span style={{ color: colors.primary }}>Policy</span>
          </h1>
          <p className="text-xl text-gray-200">
            Learn how WOW Gutters Ltd uses cookies to improve your browsing experience and enhance site performance across the West Midlands.
          </p>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 line-height-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 block">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What are Cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-8 h-8" style={{ color: colors.primary }} />
            <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files that are placed on your device when you visit our website. They help 
            us provide you with a better experience by remembering your preferences and understanding how you 
            use our site.
          </p>
          <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
            <p className="text-sm text-gray-700">
              <strong>Good to know:</strong> Cookies don't contain sensitive personal data like card details or passwords and cannot harm your device. 
              You can control and delete cookies at any time through your browser settings.
            </p>
          </div>
        </div>

        {/* Types of Cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border-l-4 rounded-r-lg p-6" style={{ backgroundColor: `${colors.primary}15`, borderColor: colors.primary }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}30` }}>
                  <Shield className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions 
                    like page navigation, quote calculation, and access to secure areas of the website.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Session state management</li>
                      <li>• Security features &amp; anti-spam verification</li>
                      <li>• Load balancing &amp; fast server response</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: `${colors.primary}30` }}>
                    <span className="text-xs font-bold" style={{ color: colors.primary }}>Always Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Cookies */}
            <div className="border-l-4 rounded-r-lg p-6" style={{ backgroundColor: `${colors.accent}15`, borderColor: colors.accent }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.accent}30` }}>
                  <BarChart className="w-6 h-6" style={{ color: colors.accent }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance &amp; Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This helps us optimize speed and user navigation.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Google Analytics (anonymized visitor statistics)</li>
                      <li>• Page load speed metrics</li>
                      <li>• Error and broken link tracking</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: `${colors.accent}30` }}>
                    <span className="text-xs font-bold" style={{ color: colors.accent }}>Optional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Functionality Cookies */}
            <div className="border-l-4 rounded-r-lg p-6" style={{ backgroundColor: `${colors.navy}15`, borderColor: colors.navy }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.navy}30` }}>
                  <Settings className="w-6 h-6" style={{ color: colors.navy }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Functionality Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies allow the website to remember choices you make (such as your preferred location or form progress) 
                    and provide enhanced, tailored features.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Regional service preferences</li>
                      <li>• Quote form draft saving</li>
                      <li>• Accessibility view preferences</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: `${colors.navy}30` }}>
                    <span className="text-xs font-bold" style={{ color: colors.navy }}>Optional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border-l-4 rounded-r-lg p-6" style={{ backgroundColor: `${colors.cta}15`, borderColor: colors.cta }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.cta}30` }}>
                  <Target className="w-6 h-6" style={{ color: colors.cta }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing &amp; Targeting Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are used to track visitor interest across services so we can present relevant 
                    seasonal gutter maintenance offers and neighborhood discount promotions.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Google Ads conversion tags</li>
                      <li>• Neighborhood discount campaign attribution</li>
                      <li>• Social engagement measurement</li>
                    </ul>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: `${colors.cta}30` }}>
                    <span className="text-xs font-bold" style={{ color: colors.cta }}>Optional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-8 h-8" style={{ color: colors.primary }} />
            <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can control and manage cookies in various ways directly in your web browser:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Browser Settings:</h4>
              <p className="text-sm text-gray-600 mb-2">
                Most browsers allow you to refuse or accept cookies through their settings:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chrome: Settings → Privacy and security → Cookies</li>
                <li>• Firefox: Options → Privacy &amp; Security</li>
                <li>• Safari: Preferences → Privacy</li>
                <li>• Microsoft Edge: Settings → Cookies and site permissions</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Privacy Tools:</h4>
              <p className="text-sm text-gray-600 mb-2">
                You can also use privacy extensions to manage tracking scripts:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Google Analytics Opt-out Browser Add-on</li>
                <li>• Privacy Badger</li>
                <li>• uBlock Origin</li>
                <li>• Cookie AutoDelete</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 border-l-4 p-4 rounded-r" style={{ backgroundColor: `${colors.cta}15`, borderColor: colors.cta }}>
            <p className="text-sm text-gray-700">
              <strong>Please note:</strong> Disabling essential cookies may impact certain interactive tools on our website, 
              such as the online price calculator or quote submission form.
            </p>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We review and update this Cookie Policy periodically to reflect any changes in cookie technology or regulatory guidance.
          </p>
          <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
            <p className="text-sm text-gray-700">
              Questions about cookies or data handling? Email{' '}
              <a href="mailto:privacy@wowgutters.co.uk" className="font-bold" style={{ color: colors.primary }}>
                privacy@wowgutters.co.uk
              </a>{' '}
              or read our{' '}
              <Link href="/privacy-policy/" className="font-bold underline" style={{ color: colors.primary }}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms-and-conditions/" className="font-bold underline" style={{ color: colors.primary }}>
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-sm text-gray-600">Last updated:</span>
            <span className="text-sm font-semibold text-gray-900">March 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
