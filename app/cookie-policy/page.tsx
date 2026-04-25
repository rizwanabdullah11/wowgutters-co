import React from 'react';
import { Cookie, Settings, BarChart, Target, Shield } from 'lucide-react';
import { colors } from '@/constants/colors';
import SEOMeta from '@/components/seo/SEOMeta';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOMeta
        title="Cookie Policy | WOW Gutters"
        description="Read the WOW Gutters cookie policy and learn how cookies are used to improve your experience on wowgutters.pro."
        canonicalUrl="https://wowgutters.pro/cookie-policy"
      />
      <SchemaMarkup
        id="schema-cookie-webpage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Cookie Policy',
          url: 'https://wowgutters.pro/cookie-policy',
        }}
      />
      {/* Hero Section */}
      <div className="text-white py-16 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-4xl mx-auto text-center">
          <Cookie className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-white/90">
            Learn how we use cookies to improve your experience
          </p>
        </div>
      </div>

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
              <strong>Good to know:</strong> Cookies don't contain any personal information and can't harm your device. 
              You can control and delete cookies through your browser settings.
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
                    like page navigation and access to secure areas of the website.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Session management</li>
                      <li>• Security features</li>
                      <li>• Load balancing</li>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This helps us improve our website's performance.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Page load times</li>
                      <li>• Error tracking</li>
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
                    These cookies allow the website to remember choices you make (such as your preferred language) 
                    and provide enhanced, more personal features.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Language preferences</li>
                      <li>• Region selection</li>
                      <li>• Customized content</li>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are used to track visitors across websites. The intention is to display ads that 
                    are relevant and engaging for individual users.
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Advertising networks</li>
                      <li>• Social media pixels</li>
                      <li>• Retargeting campaigns</li>
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
            <h2 className="text-2xl font-bold text-gray-900">Managing Cookies</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can control and manage cookies in various ways:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
              <p className="text-sm text-gray-600 mb-2">
                Most browsers allow you to refuse or accept cookies through their settings.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chrome: Settings → Privacy</li>
                <li>• Firefox: Options → Privacy</li>
                <li>• Safari: Preferences → Privacy</li>
                <li>• Edge: Settings → Privacy</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Third-Party Tools</h4>
              <p className="text-sm text-gray-600 mb-2">
                Use privacy tools to manage tracking cookies across websites.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Privacy Badger</li>
                <li>• Ghostery</li>
                <li>• uBlock Origin</li>
                <li>• Cookie AutoDelete</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 border-l-4 p-4 rounded-r" style={{ backgroundColor: `${colors.cta}15`, borderColor: colors.cta }}>
            <p className="text-sm text-gray-700">
              <strong>Please note:</strong> Blocking some types of cookies may impact your experience on our website 
              and the services we are able to offer.
            </p>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may use third-party services such as Google Analytics to help us understand how our website is 
            used. These services may set their own cookies on your device.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}30` }}>
                <span className="font-bold text-sm" style={{ color: colors.primary }}>GA</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                <p className="text-sm text-gray-600">Helps us understand visitor behavior and improve our website</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}30` }}>
                <span className="font-bold text-sm" style={{ color: colors.primary }}>FB</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Facebook Pixel</h4>
                <p className="text-sm text-gray-600">Enables us to measure advertising effectiveness</p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with 
            an updated revision date. We encourage you to review this policy periodically.
          </p>
          <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
            <p className="text-sm text-gray-700">
              If you have any questions about our use of cookies, please contact us through our website or 
              email us at privacy@wowgutters.co.uk
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-sm text-gray-600">Last updated:</span>
            <span className="text-sm font-semibold text-gray-900">March 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
