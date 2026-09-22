'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import ServiceSEOSection from '@/components/sections/ServiceSEOSection';
import QuoteModal from '@/components/QuoteModal';
import GoogleMapsEmbed from '@/components/seo/GoogleMapsEmbed';
import { formatNapAddress } from '@/lib/businessDetails';
import { Clock3, Mail, MapPin, Phone, ShieldCheck, MessageSquare } from 'lucide-react';

export default function ContactPageContent() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-gray-100 min-h-[500px] flex items-center">
        {/* Background Video */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70 z-10" />
        </div>

        <div className="relative z-20 mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white">
              <ShieldCheck className="h-4 w-4" style={{ color: colors.primary }} />
              Fast support from local West Midlands gutter specialists
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Contact <span style={{ color: colors.primary }}>WOW Gutters Ltd</span>
              <span className="block text-2xl sm:text-3xl text-gray-200 mt-2 font-bold">
                Get Your Free Instant Quote Today
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-200 sm:text-lg">
              Need gutter cleaning, leak repairs, roof moss removal, or an inspection? Speak directly to our local dispatch team or complete the quick quote form on the right.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:07421433910"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-xl transition hover:scale-105"
                style={{ background: colors.primaryGradient }}
              >
                <Phone className="h-5 w-5" />
                Call 07421 433910
              </a>
              <a
                href="https://wa.me/447421433910"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-xl transition hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative z-20">
            <QuoteModal isOpen={true} onClose={() => {}} mode="inline" showClose={false} align="right" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-700">07421 433910</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-700">support@wowgutters.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Service areas</p>
                  <p className="text-slate-700">
                    Birmingham, Coventry, Wolverhampton, Walsall, Dudley, Sandwell, Solihull and 200+ West Midlands
                    neighbourhoods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Availability</p>
                  <p className="text-slate-700">Available 24 hours a day, 7 days a week.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-2xl font-bold text-slate-900">Why people choose us</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>Fast response with local teams available 7 days a week.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>Clear pricing and free quote before any work begins.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>Modern ground-level high suction vacuum clearance up to 4 stories.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>Digital before-and-after photo confirmation on every job.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="service-area-map" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Find us on Google Maps</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Our Birmingham base at {formatNapAddress()} — mobile teams cover the West Midlands daily. Use the map for
          directions, or open Google Maps for reviews and our Business Profile.
        </p>
        <div className="mt-6 max-w-4xl">
          <GoogleMapsEmbed title="WOW Gutters Ltd — contact page Google Maps embed" />
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <WhatsAppContactSection
        title="Quick Questions?"
        subtitle="Message Us on WhatsApp"
        description="Get instant responses to your gutter service questions. Whether you need a quote, want to schedule an appointment, or have questions about our services, we're here to help."
        questions={[
          'What areas do you cover?',
          'How much does gutter cleaning cost?',
          'Can you come today?',
          'Do you offer emergency services?',
        ]}
        backgroundImage="/gutter-cleaning.jpeg"
      />

      {/* SEO Content Section */}
      <ServiceSEOSection
        title="Professional Gutter Services"
        subtitle="Gutter Cleaning • Repairs • Maintenance"
        mainParagraph1="Looking for reliable gutter cleaning, repair, or maintenance? WOW Gutters Ltd provides professional gutter services to help protect your property from water damage with fast, efficient, and affordable solutions."
        mainParagraph2="We understand that gutter problems can't wait. That's why we offer same-day booking, free quotes, and flexible scheduling to work around your busy life. Whether you need routine maintenance, emergency repairs, or a complete gutter inspection, our team delivers quality results you can trust."
        processTitle="How to Get Started:"
        processSteps={[
          { text: 'Contact us by phone, email, or WhatsApp' },
          { text: 'Receive your free, no-obligation quote' },
          { text: 'Schedule a convenient appointment time' },
          { text: 'Our team arrives and completes the work' },
          { text: 'Enjoy clean, functional gutters and peace of mind' }
        ]}
        problemsTitle="Ways to Reach Us"
        problems={[
          { icon: '📞', title: 'Phone', desc: 'Call 07421 433910 for immediate assistance' },
          { icon: '💬', title: 'WhatsApp', desc: 'Message us for quick responses and quotes' },
          { icon: '📧', title: 'Email', desc: 'Send detailed inquiries to support@wowgutters.co.uk' },
          { icon: '📝', title: 'Quote Form', desc: 'Fill out our online form for a free quote' },
          { icon: '🕐', title: 'Available 24 Hours', desc: 'Contact us any time — day or night, 7 days a week' },
          { icon: '⚡', title: 'Same-Day Booking', desc: 'Fast response for urgent gutter needs' }
        ]}
        highlightBoxTitle="Why Contact WowGutters?"
        highlightBoxColor="green"
        highlightBoxes={[
          { icon: '✅', title: 'Free Quotes', desc: 'No-obligation estimates for all services' },
          { icon: '🚀', title: 'Fast Response', desc: 'Same-day booking and quick turnaround' },
          { icon: '🛡️', title: 'Same Day Booking', desc: 'Same day booking for urgent gutter needs' }
        ]}
        ctaTitle="Ready to Get Started?"
        ctaDescription="Contact us today for professional gutter services. Our friendly team is standing by to answer your questions and provide a free quote for your property."
        ctaButtonText="Get Your Free Quote Now"
      />

    </div>
  );
}
