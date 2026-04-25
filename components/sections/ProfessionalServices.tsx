'use client';

import { ArrowRight } from 'lucide-react';

import { colors } from '@/constants/colors';

export default function ProfessionalServices() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

          {/* Left side — Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src="/Professional-experience.png"
              alt="Professional Gutter Services"
              className="w-full h-[560px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right side — Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            {/* Eyebrow Label */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <span
                className="h-px w-10"
                style={{ backgroundColor: colors.primary }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: colors.primary }}
              >
                Professional Gutter Services
              </span>
              <span
                className="h-px w-10"
                style={{ backgroundColor: colors.primary }}
              />
            </div>

            {/* Main Headline */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight"
              style={{ color: colors.text }}
            >
              Welcome to WOW Gutters
            </h2>

            {/* Body Copy — Paragraph 1 */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-5"
              style={{ color: colors.textLight }}
            >
              <strong style={{ color: colors.text }}>WOW Gutters</strong> is{' '}
              <strong style={{ color: colors.text }}>Birmingham and West Midlands'
              most-reviewed</strong> gutter cleaning company, with{' '}
              <strong style={{ color: colors.text }}>over 2,600 five-star reviews</strong>{' '}
              from homeowners across Coventry, Wolverhampton, Solihull, Worcester,
              Redditch and beyond.
            </p>

            {/* Body Copy — Paragraph 2 */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: colors.textLight }}
            >
              We use professional{' '}
              <strong style={{ color: colors.text }}>ground-level vacuum technology</strong>{' '}
              that reaches gutters up to <strong style={{ color: colors.text }}>40ft high</strong> — no ladders,
              no scaffolding, no mess. Our <strong style={{ color: colors.text }}>fully insured</strong> technicians
              complete most jobs in a single visit, with <strong style={{ color: colors.text }}>same-day bookings</strong> available
              across all our service areas.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: colors.text }}>Same Day Booking</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: colors.text }}>Fully Insured</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: colors.text }}>No Hidden Fees</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: colors.text }}>100% Satisfaction</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              data-static-quote-open
              aria-haspopup="dialog"
              aria-controls="wow-cta-dialog"
              className="group relative inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-full text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_20px_-10px_rgba(25,197,139,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(25,197,139,0.7)] overflow-hidden border-0 cursor-pointer"
              style={{ background: colors.primaryGradient }}
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
