'use client';

import React, { useRef, useEffect } from 'react';
import { Shield, FileText, AlertCircle, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { colors } from '@/constants/colors';
import Link from 'next/link';

export default function TermsAndConditions() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Video */}
      <div className="relative text-white py-20 px-4 overflow-hidden" style={{ minHeight: '400px' }}>
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
            <source src="/gutter-final-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/90">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Summary */}
        <div className="border-l-4 rounded-r-lg p-6 mb-8" style={{ backgroundColor: `${colors.primary}15`, borderColor: colors.primary }}>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.primary }} />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Summary</h3>
              <p className="text-gray-700 text-sm">
                By using our gutter cleaning services, you agree to these terms. We're committed to providing professional, 
                safe, and reliable services while protecting both your property and our team.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>1</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-13">
              These Terms and Conditions govern your use of our gutter cleaning services. By engaging our services, 
              you agree to be bound by these terms. We reserve the right to update these terms at any time, and 
              continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>2</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Services</h2>
            </div>
            <div className="pl-13 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                We provide professional gutter cleaning, conservatory cleaning, window cleaning, and hot wash services. 
                All services are subject to availability and weather conditions.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Service Scope:</h4>
                <ul className="space-y-2">
                  {['Gutter cleaning and clearance', 'Downpipe unblocking', 'Gutter repairs and installation', 'Roof cleaning and moss removal', 'UPVC and conservatory cleaning'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>3</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Booking and Payment</h2>
            </div>
            <div className="pl-13">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: colors.primary }}>•</span>
                  <span>All bookings must be confirmed in writing or via our online booking system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: colors.primary }}>•</span>
                  <span>Payment is due upon completion of services unless otherwise agreed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: colors.primary }}>•</span>
                  <span>We accept cash, bank transfer, and card payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold" style={{ color: colors.primary }}>•</span>
                  <span>Cancellations must be made at least 24 hours in advance to avoid charges</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>4</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Access and Safety</h2>
            </div>
            <div className="pl-13 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Customers must provide safe access to all areas requiring service. We reserve the right to refuse 
                service if conditions are deemed unsafe for our team or your property.
              </p>
              <div className="border-l-4 p-4 rounded-r" style={{ backgroundColor: `${colors.cta}15`, borderColor: colors.cta }}>
                <p className="text-sm" style={{ color: colors.text }}>
                  <strong>Important:</strong> Please ensure pets are secured and inform us of any hazards on your property 
                  before our arrival.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <Shield className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Liability & Insurance</h2>
            </div>
            <div className="pl-13 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                We maintain full public liability insurance up to £5 million. Any damage caused by our negligence will be covered. 
                Pre-existing damage should be reported before work commences.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
                  <h4 className="font-semibold text-gray-900 mb-2">We Cover:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Accidental damage during service</li>
                    <li>• Property damage from negligence</li>
                    <li>• Third-party liability</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.cta}15` }}>
                  <h4 className="font-semibold text-gray-900 mb-2">Not Covered:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pre-existing damage</li>
                    <li>• Acts of nature</li>
                    <li>• Wear and tear</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>6</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Service-Specific Terms</h2>
            </div>
            <div className="pl-13 space-y-6">
              
              {/* Gutter Cleaning */}
              <div className="border rounded-lg p-5" style={{ borderColor: `${colors.primary}40` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Gutter Cleaning Services
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>All debris will be removed from gutters, downpipes, and surrounding areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>We will dispose of all waste responsibly unless otherwise requested</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Before and after photos will be provided as standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Any damage or issues discovered during cleaning will be reported immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Water testing of gutters and downpipes is included to ensure proper flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Regular maintenance schedules can be arranged at discounted rates</span>
                  </li>
                </ul>
              </div>

              {/* Roof Cleaning */}
              <div className="border rounded-lg p-5" style={{ borderColor: `${colors.primary}40` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Roof Cleaning Services
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Roof inspections will be conducted before cleaning to assess condition and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>We use soft washing techniques to prevent damage to roof tiles and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Moss, algae, and lichen removal is included in the service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Biocide treatment can be applied to prevent regrowth (additional charge may apply)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>We will not proceed if roof tiles are deemed unsafe or too fragile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Surrounding areas will be protected from cleaning solutions and debris</span>
                  </li>
                </ul>
              </div>

              {/* Gutter Repairs */}
              <div className="border rounded-lg p-5" style={{ borderColor: `${colors.primary}40` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Gutter Repair Services
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Free inspection and quote provided before any repair work begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>All repairs include a 12-month workmanship guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>We repair leaks, cracks, sagging gutters, and damaged brackets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Materials used will match existing gutters where possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Additional charges may apply if extensive damage is discovered during repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Customer approval required before proceeding with repairs exceeding quoted price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Emergency repair services available with priority scheduling</span>
                  </li>
                </ul>
              </div>

              {/* Gutter Installation */}
              <div className="border rounded-lg p-5" style={{ borderColor: `${colors.primary}40` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Gutter Installation Services
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Detailed site survey and measurements conducted before installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Written quote includes all materials, labor, and disposal of old guttering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Choice of materials: uPVC, aluminum, or cast iron available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>All installations come with a 10-year guarantee on materials and workmanship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Fascia board repairs or replacement can be included if required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Installation timeline will be confirmed in writing before work commences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>50% deposit required for installations, balance due upon completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: colors.primary }}>•</span>
                    <span>Building regulations compliance ensured for all installations</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg p-4 mt-4" style={{ backgroundColor: `${colors.primary}10` }}>
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> All services are subject to a site assessment. Prices quoted are estimates and may vary based on property condition, accessibility, and specific requirements discovered during inspection.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>7</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Weather Conditions</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-13">
              Services may be postponed due to adverse weather conditions for safety reasons. We will reschedule 
              at the earliest convenient time at no additional charge.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>8</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Service Guarantee</h2>
            </div>
            <div className="pl-13 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                We guarantee our workmanship. If you are not satisfied with our service, please contact us within 
                48 hours and we will rectify any issues at no additional cost.
              </p>
              <div className="rounded-lg p-4" style={{ backgroundColor: `${colors.primary}15` }}>
                <p className="text-sm text-gray-700">
                  Our guarantee covers workmanship quality but does not extend to issues arising from property defects 
                  or subsequent weather damage.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <span className="font-bold" style={{ color: colors.primary }}>9</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-13">
              For any questions regarding these terms, please contact us through our website contact form or 
              call us at 07421 433910.
            </p>
          </section>
        </div>

        {/* WhatsApp Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] mb-6 shadow-lg">
              <svg viewBox="0 0 24 24" className="w-11 h-11" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
              Questions About Our Terms?
            </h3>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Need clarification on any of our terms and conditions? Message us on WhatsApp and our team will be happy to help explain anything you're unsure about.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/447421433910"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-[#25D366]"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Ask Us on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link href="/quote">
                <button 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white border-2"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Get a Free Quote
                </button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-green-200">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="font-semibold">Fast Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="font-semibold">Same Day Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="font-semibold">Professional Service</span>
                </div>
              </div>
            </div>
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
