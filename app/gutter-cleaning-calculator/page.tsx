'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  CheckCircle,
  Phone,
  Home,
  ArrowRight,
  Shield,
  Camera,
} from 'lucide-react';
import { colors } from '@/constants/colors';
import {
  estimateGutterCleaningPrice,
  type GutterCondition,
  type GutterLength,
  type PropertyType,
} from '@/lib/gutterPriceCalculator';
import { GUTTER_PRICING, formatGbp } from '@/constants/gutterPricing';

const INCLUDED = [
  'Complete gutter clearance from ground level',
  'Downpipe unblocking and flow testing',
  'Debris removal — no mess left behind',
  'Before and after photos on every job',
  'Fully insured (£5M public liability)',
];

export default function GutterCleaningCalculator() {
  const [propertyType, setPropertyType] = useState<PropertyType | ''>('');
  const [bedrooms, setBedrooms] = useState('');
  const [gutterLength, setGutterLength] = useState<GutterLength | ''>('');
  const [condition, setCondition] = useState<GutterCondition | ''>('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const canCalculate =
    propertyType && bedrooms && gutterLength && condition;

  const calculatePrice = () => {
    if (!canCalculate) return;
    setEstimatedPrice(
      estimateGutterCleaningPrice({
        propertyType: propertyType as PropertyType,
        bedrooms: parseInt(bedrooms, 10),
        gutterLength: gutterLength as GutterLength,
        condition: condition as GutterCondition,
      })
    );
  };

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20';

  return (
    <main className="bg-white">
      <section className="relative px-4 py-20" style={{ background: colors.primaryGradient }}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
            <Calculator className="h-5 w-5 text-white" />
            <span className="text-sm font-bold text-white">Instant estimate</span>
          </div>
          <h1 className="text-4xl font-black text-white md:text-5xl">Gutter Cleaning Calculator</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Get a ballpark price for professional gutter cleaning in Birmingham and the West Midlands.
            Final quotes are confirmed after a quick property check.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-12 w-full">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
              <h2 className="mb-6 text-2xl font-black text-gray-900">Your property details</h2>
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">Property type</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as PropertyType | '')}
                    className={inputClass}
                  >
                    <option value="">Select property type</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="terraced">Terraced house</option>
                    <option value="semi">Semi-detached</option>
                    <option value="detached">Detached house</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">Bedrooms</label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select bedrooms</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2 bedrooms</option>
                    <option value="3">3 bedrooms</option>
                    <option value="4">4 bedrooms</option>
                    <option value="5">5+ bedrooms</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">Gutter length</label>
                  <select
                    value={gutterLength}
                    onChange={(e) => setGutterLength(e.target.value as GutterLength | '')}
                    className={inputClass}
                  >
                    <option value="">Select gutter length</option>
                    <option value="standard">Standard (up to 15m)</option>
                    <option value="long">Long (15–25m)</option>
                    <option value="very-long">Very long (25m+)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">Gutter condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as GutterCondition | '')}
                    className={inputClass}
                  >
                    <option value="">Select condition</option>
                    <option value="light">Light debris (regular maintenance)</option>
                    <option value="moderate">Moderate blockage</option>
                    <option value="heavy">Heavy blockage / overgrown</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={calculatePrice}
                  disabled={!canCalculate}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ background: colors.primaryGradient }}
                >
                  <Calculator className="h-5 w-5" />
                  Calculate estimate
                </button>
              </div>

              {estimatedPrice !== null && (
                <div
                  className="mt-8 rounded-2xl border-2 p-6"
                  style={{ borderColor: colors.primary, backgroundColor: `${colors.primary}10` }}
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-600">Estimated price</p>
                  <p className="mt-1 text-5xl font-black" style={{ color: colors.primary }}>
                    £{estimatedPrice}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Guide price only. Access, roof height, and actual blockage level can affect the final
                    quote. We confirm the price before work starts — no surprises on the day.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      data-static-quote-open
                      data-analytics-label="calculator_accurate_quote"
                      aria-haspopup="dialog"
                      aria-controls="wow-cta-dialog"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white"
                      style={{ background: colors.primaryGradient }}
                    >
                      Get accurate quote
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href="tel:07421433910"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 px-6 py-3 font-bold"
                      style={{ borderColor: colors.primary, color: colors.primary }}
                    >
                      <Phone className="h-4 w-4" />
                      Call 07421 433910
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-black text-gray-900">What&apos;s included</h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" style={{ color: colors.primary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <Home className="h-5 w-5" style={{ color: colors.primary }} />
                <h3 className="font-black text-gray-900">Typical guide prices</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>2 bedroom</span>
                  <span className="font-bold">{formatGbp(GUTTER_PRICING.twoBedroom)}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>3 bedroom</span>
                  <span className="font-bold">{formatGbp(GUTTER_PRICING.threeBedroom)}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Premium service</span>
                  <span className="font-bold">{formatGbp(GUTTER_PRICING.premium)}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Fascia &amp; soffit</span>
                  <span className="font-bold">{formatGbp(GUTTER_PRICING.fasciaAndSoffit)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Installation</span>
                  <span className="font-bold">{formatGbp(GUTTER_PRICING.installation)}</span>
                </li>
              </ul>
              <Link
                href="/gutter-cleaning-prices/"
                className="mt-4 inline-flex text-sm font-bold"
                style={{ color: colors.primary }}
              >
                View full price list →
              </Link>
            </div>

            <div className="rounded-2xl p-6 text-white" style={{ background: colors.navy }}>
              <Shield className="mb-3 h-8 w-8" style={{ color: colors.primary }} />
              <p className="font-bold">No ladders against your walls</p>
              <p className="mt-2 text-sm text-white/80">
                We use ground-based vacuum equipment — safer for your property and our team.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-black text-gray-900">Common questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'How accurate is this calculator?',
                a: 'It gives a realistic guide based on property type, size, and condition. We confirm the exact price before booking — often matching the estimate on site.',
              },
              {
                q: 'Are there hidden costs?',
                a: 'No. Quotes include labour, equipment, debris disposal, and VAT. Repairs or extra work are only done with your approval.',
              },
              {
                q: 'How long does a clean take?',
                a: 'Most homes take 1–2 hours. Larger properties or heavy blockages may take longer — we will tell you when we quote.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer font-bold text-gray-900">{faq.q}</summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] p-10 text-center text-white">
          <Camera className="mb-4 h-10 w-10" style={{ color: colors.primary }} />
          <h2 className="text-3xl font-black">Want a fixed quote instead?</h2>
          <p className="mt-3 max-w-xl text-white/80">
            Send your postcode and a photo of your gutters — we often reply with a confirmed price the same day.
          </p>
          <button
            type="button"
            data-static-quote-open
            data-analytics-label="calculator_request_quote"
            aria-haspopup="dialog"
            aria-controls="wow-cta-dialog"
            className="mt-6 rounded-full px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
            style={{ background: colors.primaryGradient }}
          >
            Request free quote
          </button>
        </div>
      </section>
    </main>
  );
}
