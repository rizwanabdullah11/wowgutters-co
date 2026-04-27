'use client';
import Head from 'next/head';
import { colors } from '@/constants/colors';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import WhatsAppContactSection from '@/components/sections/WhatsAppContactSection';
import ServiceSEOSection from '@/components/sections/ServiceSEOSection';
import QuoteModal from '@/components/QuoteModal';
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact WowGutters - Get Your Free Quote | West Midlands Gutter Services</title>
        <meta name="description" content="Contact WowGutters for professional gutter cleaning, repairs & maintenance. Call 07421 433910 or get a free quote online. Same-day booking available across West Midlands." />
        <meta name="keywords" content="contact wowgutters, gutter cleaning contact, west midlands gutters, birmingham gutter service, free gutter quote, gutter cleaning phone number" />
        <meta property="og:title" content="Contact WowGutters - Professional Gutter Services" />
        <meta property="og:description" content="Get in touch for professional gutter services. Same-day booking available. Call 07421 433910 or request a free quote online." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wowgutters.co.uk/contact" />
      </Head>
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-emerald-50 via-white to-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-10">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Fast support from local gutter experts
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Contact Wow Gutters
              <span className="block" style={{ color: colors.primary }}>
                Get Your Free Quote Today
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Need gutter cleaning, repairs, or an inspection? Speak to our team now, or use the quote form already open on the right.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:07421433910"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: colors.primary }}
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>

          <QuoteModal isOpen={true} onClose={() => {}} mode="inline" showClose={false} align="right" />
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
                  <p className="text-slate-700">support@wowgutters.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Service areas</p>
                  <p className="text-slate-700">Sheffield, Worksop, Chesterfield and nearby areas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-semibold text-slate-900">Opening hours</p>
                  <p className="text-slate-700">Monday to Sunday, 7:00 AM - 7:00 PM.</p>
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
                <span>Trusted gutter cleaning, repair, and inspection specialists.</span>
              </li>
            </ul>
          </div>
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
        subtitle="West Midlands"
        mainParagraph1="Looking for reliable gutter cleaning, repair, or maintenance services in the West Midlands? WowGutters provides professional gutter services across Birmingham, Coventry, Wolverhampton, and surrounding areas. Our experienced team is ready to help protect your property from water damage with fast, efficient, and affordable gutter solutions."
        mainParagraph2="We understand that gutter problems can't wait. That's why we offer same-day booking, free quotes, and flexible scheduling to work around your busy life. Whether you need routine maintenance, emergency repairs, or a complete gutter inspection, our fully insured team delivers quality results you can trust."
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
          { icon: '📧', title: 'Email', desc: 'Send detailed inquiries to support@wowgutters.com' },
          { icon: '📝', title: 'Quote Form', desc: 'Fill out our online form for a free quote' },
          { icon: '🕐', title: 'Available 7 Days', desc: 'Monday to Sunday, 7:00 AM - 7:00 PM' },
          { icon: '⚡', title: 'Same-Day Booking', desc: 'Fast response for urgent gutter needs' }
        ]}
        highlightBoxTitle="Why Contact WowGutters?"
        highlightBoxColor="green"
        highlightBoxes={[
          { icon: '✅', title: 'Free Quotes', desc: 'No-obligation estimates for all services' },
          { icon: '🚀', title: 'Fast Response', desc: 'Same-day booking and quick turnaround' },
          { icon: '🛡️', title: 'Fully Insured', desc: 'Complete protection for your property' }
        ]}
        ctaTitle="Ready to Get Started?"
        ctaDescription="Contact us today for professional gutter services. Our friendly team is standing by to answer your questions and provide a free quote for your property."
        ctaButtonText="Get Your Free Quote Now"
      />

      {/* Contact Info Section */}
      <ContactInfoSection />
    </div>
  );
}
