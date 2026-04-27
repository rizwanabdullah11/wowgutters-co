import React from 'react';
import { Lock, Eye, Shield, Database, UserCheck, Mail } from 'lucide-react';
import { colors } from '@/constants/colors';
import SEOMeta from '@/components/seo/SEOMeta';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export default function PrivacyPolicy() {
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOMeta
        title="Privacy Policy | WOW Gutters"
        description="Read the WOW Gutters privacy policy. Learn how we protect your data when you request gutter cleaning, repairs, or inspections in Birmingham & West Midlands."
        canonicalUrl="https://wowgutters.co.uk/privacy-policy"
      />
      <SchemaMarkup
        id="schema-privacy-webpage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy',
          url: 'https://wowgutters.co.uk/privacy-policy',
        }}
      />
      {/* Hero Section */}
      <div className="text-white py-16 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-4xl mx-auto text-center">
          <Lock className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2" style={{ color: colors.primary }} />
            <h3 className="font-bold text-gray-900 text-sm">GDPR Compliant</h3>
            <p className="text-xs text-gray-600 mt-1">Full data protection</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Lock className="w-8 h-8 mx-auto mb-2" style={{ color: colors.primary }} />
            <h3 className="font-bold text-gray-900 text-sm">Secure Storage</h3>
            <p className="text-xs text-gray-600 mt-1">Encrypted databases</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <UserCheck className="w-8 h-8 mx-auto mb-2" style={{ color: colors.primary }} />
            <h3 className="font-bold text-gray-900 text-sm">Your Control</h3>
            <p className="text-xs text-gray-600 mt-1">Manage your data</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us when using our services:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Name and contact details</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Property address</li>
                </ul>
              </div>
              <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
                <h4 className="font-semibold text-gray-900 mb-2">Service Information:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Property details</li>
                  <li>• Service history</li>
                  <li>• Payment information</li>
                  <li>• Communication preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect to provide and improve our services:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Service Delivery', desc: 'To provide and deliver our gutter cleaning services' },
                { title: 'Communication', desc: 'To communicate with you about appointments and services' },
                { title: 'Payment Processing', desc: 'To process payments and send invoices' },
                { title: 'Service Improvement', desc: 'To improve our services and customer experience' },
                { title: 'Marketing', desc: 'To send marketing communications (with your consent)' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${colors.primary}30` }}>
                    <span className="text-xs font-bold" style={{ color: colors.primary }}>{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
            </div>
            <div className="border-l-4 p-4 rounded-r-lg" style={{ backgroundColor: `${colors.primary}15`, borderColor: colors.primary }}>
              <p className="font-semibold text-gray-900 mb-2">We Never Sell Your Data</p>
              <p className="text-sm text-gray-700">
                We do not sell or rent your personal information to third parties. We may share your information 
                with service providers who assist us in operating our business, subject to strict confidentiality agreements.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Measures:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• SSL encryption</li>
                  <li>• Secure databases</li>
                  <li>• Regular backups</li>
                  <li>• Access controls</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Organizational Measures:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Staff training</li>
                  <li>• Confidentiality agreements</li>
                  <li>• Regular audits</li>
                  <li>• Incident response plan</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Under GDPR, you have the following rights regarding your personal data:
            </p>
            <div className="space-y-2">
              {[
                'Access your personal information',
                'Correct inaccurate information',
                'Request deletion of your information',
                'Object to processing of your data',
                'Request data portability',
                'Opt-out of marketing communications',
                'Lodge a complaint with a supervisory authority'
              ].map((right, i) => (
                <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}30` }}>
                    <span className="text-xs" style={{ color: colors.primary }}>✓</span>
                  </div>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in 
              this policy, unless a longer retention period is required by law. Typically, we retain customer 
              data for 7 years for accounting and legal purposes.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>Email:</strong> privacy@wowgutters.co.uk</p>
                <p className="text-gray-700"><strong>Phone:</strong> 07421 433910</p>
                {(addressLine1 || addressLine2 || addressCity || addressPostcode) && (
                  <p className="text-gray-700">
                    <strong>Address:</strong>{' '}
                    {[addressLine1, addressLine2, addressCity, addressPostcode].filter(Boolean).join(', ')}
                  </p>
                )}
              </div>
            </div>
          </section>
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
