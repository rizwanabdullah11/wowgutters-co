'use client';

import React, { useState } from 'react';
import Head from 'next/head';

export default function GutterCleaningCalculator() {
  const [propertyType, setPropertytyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [gutterLength, setGutterLength] = useState('');
  const [condition, setCondition] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    let basePrice = 0;

    // Base price by property type
    switch (propertyType) {
      case 'bungalow':
        basePrice = 45;
        break;
      case 'semi':
        basePrice = 55;
        break;
      case 'detached':
        basePrice = 65;
        break;
      case 'terraced':
        basePrice = 50;
        break;
      default:
        basePrice = 50;
    }

    // Adjust by bedrooms
    const bedroomMultiplier = parseInt(bedrooms) || 3;
    basePrice += (bedroomMultiplier - 2) * 10;

    // Adjust by gutter length
    if (gutterLength === 'long') {
      basePrice += 15;
    } else if (gutterLength === 'very-long') {
      basePrice += 30;
    }

    // Adjust by condition
    if (condition === 'moderate') {
      basePrice += 10;
    } else if (condition === 'heavy') {
      basePrice += 25;
    }

    setEstimatedPrice(basePrice);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Gutter Cleaning Price Calculator | WowGutters West Midlands</title>
        <meta name="description" content="Calculate your gutter cleaning cost instantly with our free online calculator. Get accurate pricing for your property in Birmingham, Coventry & West Midlands." />
        <meta name="keywords" content="gutter cleaning calculator, gutter cleaning cost, gutter cleaning price, west midlands gutter prices, birmingham gutter cost" />
        <meta property="og:title" content="Gutter Cleaning Price Calculator - WowGutters" />
        <meta property="og:description" content="Calculate your gutter cleaning cost instantly with our free online calculator." />
        <link rel="canonical" href="https://wowgutters.pro/gutter-cleaning-calculator" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gutter Cleaning Calculator</h1>
          <p className="text-gray-600 mb-8">
            Get an instant estimate for your gutter cleaning service. Fill in the details below for a personalized quote.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertytyType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              >
                <option value="" className="text-gray-400">Select property type</option>
                <option value="bungalow" className="text-gray-900">Bungalow</option>
                <option value="terraced" className="text-gray-900">Terraced House</option>
                <option value="semi" className="text-gray-900">Semi-Detached</option>
                <option value="detached" className="text-gray-900">Detached House</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Bedrooms
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              >
                <option value="" className="text-gray-400">Select bedrooms</option>
                <option value="1" className="text-gray-900">1 Bedroom</option>
                <option value="2" className="text-gray-900">2 Bedrooms</option>
                <option value="3" className="text-gray-900">3 Bedrooms</option>
                <option value="4" className="text-gray-900">4 Bedrooms</option>
                <option value="5" className="text-gray-900">5+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gutter Length
              </label>
              <select
                value={gutterLength}
                onChange={(e) => setGutterLength(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              >
                <option value="" className="text-gray-400">Select gutter length</option>
                <option value="standard" className="text-gray-900">Standard (up to 15m)</option>
                <option value="long" className="text-gray-900">Long (15-25m)</option>
                <option value="very-long" className="text-gray-900">Very Long (25m+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gutter Condition
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              >
                <option value="" className="text-gray-400">Select condition</option>
                <option value="light" className="text-gray-900">Light debris (regular maintenance)</option>
                <option value="moderate" className="text-gray-900">Moderate blockage</option>
                <option value="heavy" className="text-gray-900">Heavy blockage/overgrown</option>
              </select>
            </div>

            <button
              onClick={calculatePrice}
              disabled={!propertyType || !bedrooms || !gutterLength || !condition}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Calculate Estimate
            </button>

            {estimatedPrice !== null && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Estimated Price</h2>
                <p className="text-4xl font-bold text-blue-600 mb-4">£{estimatedPrice}</p>
                <p className="text-sm text-gray-600 mb-4">
                  This is an estimate based on the information provided. Final price may vary depending on 
                  accessibility and actual condition upon inspection.
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors">
                  Get Accurate Quote
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Complete gutter clearance
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Downpipe unblocking
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Debris removal and disposal
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Before and after photos
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Full public liability insurance
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Our Service?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Team</h4>
                  <p className="text-sm text-gray-600">Fully trained and insured technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Equipment</h4>
                  <p className="text-sm text-gray-600">Latest vacuum and camera technology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Same Day Book</h4>
                  <p className="text-sm text-gray-600">Available for urgent bookings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Satisfaction Guarantee</h4>
                  <p className="text-sm text-gray-600">100% money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help Choosing?</h3>
            <p className="text-gray-700 mb-4">
              Not sure about your gutter length or condition? Our friendly team can help you get an accurate quote over the phone or via a free site visit.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:07421433910" className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Call Us Now
              </a>
              <a href="/quote" className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                Request Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-gray-900 cursor-pointer">How accurate is this calculator?</summary>
              <p className="mt-3 text-gray-600">
                This calculator provides an estimate based on typical property sizes and conditions. Final pricing may vary depending on accessibility, actual gutter condition, and any additional work required.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-gray-900 cursor-pointer">What if I don't know my gutter length?</summary>
              <p className="mt-3 text-gray-600">
                No problem! As a rough guide, a typical 3-bed semi-detached house has around 12-15m of guttering. We can provide an exact measurement during a free site visit.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-gray-900 cursor-pointer">Are there any hidden costs?</summary>
              <p className="mt-3 text-gray-600">
                No hidden costs. Our quotes include all labor, equipment, debris disposal, and VAT. Any additional work (like repairs) will be discussed and agreed before proceeding.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-gray-900 cursor-pointer">How long does gutter cleaning take?</summary>
              <p className="mt-3 text-gray-600">
                Most residential properties take 1-2 hours. Larger properties or those with heavy blockages may take longer. We'll give you an accurate time estimate with your quote.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
