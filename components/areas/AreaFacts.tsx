'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import Link from 'next/link';

const tabs = ["Gutter Cleaning Facts", "Gutter Cleaning Prices", "Gutter Cleaning Discount", "Gutter Cleaning Near Me"];

const tabContent = [
  {
    // Gutter Cleaning Facts
    title: "Why Gutter Cleaning Is Important",
    content: [
      "Gutters should be cleaned at least twice a year, typically in the spring and autumn. However, if you have overhanging trees or frequent storms, more frequent cleaning may be necessary.",
      "Clogged gutters can lead to water damage, roof leaks, foundation issues, and even pest infestations. Regular cleaning helps prevent costly repairs.",
      "Overflowing water, sagging gutters, visible plant growth, or water stains on your walls are all indicators your gutters are blocked.",
      "While it's possible to clean gutters yourself, professional gutter cleaning ensures thorough removal of debris, safe access to hard-to-reach areas, and early detection of damage."
    ],
    image: "/gutter-cleaning-before.jpeg",
    buttonText: "Schedule a Clearance",
    buttonLink: "/quote"
  },
  {
    // Gutter Cleaning Prices
    title: "How Much Does Gutter Cleaning Cost?",
    content: [
      "Costs vary based on the property size, gutter condition, and accessibility, but typical residential cleanings range from £50-£150.",
      "WOW Gutters Ltd offers Expert Local Gutter Cleaning to keep your gutters maintained for homes and businesses.",
      "Our knowledgeable staff removes obstructions, carries out small repairs, and checks loose joints for a fair cost.",
      "We also clean downspouts to assure you of steady water flow and peace of mind."
    ],
    image: "/gutter-cleaning-before.jpeg",
    buttonText: "Request Your Estimate",
    buttonLink: "/quote"
  },
  {
    // Gutter Cleaning Discount
    title: "Get Your FREE Instant Quote",
    content: [
      "We'll text you your quote and you'll even be able to book-in online.",
      "No Card Required.",
      "From £70.",
      "No Obligation."
    ],
    image: "/gutter-cleaning-before.jpeg",
    buttonText: "Explore Promotions",
    buttonLink: "/neighbourhood-discount"
  },
  {
    // Gutter Cleaning Near Me
    title: "Gutter Cleaning Near Me",
    content: [
      "Searching for \"Gutter Cleaning Near Me\"? You have found the right team. WOW Gutters Ltd covers Birmingham and the entire West Midlands with professional, no-ladder gutter cleaning.",
      "We clean from the ground using a high-reach vacuum system that reaches up to four storeys — no ladders against your walls, no risk to your fascias, no mess left behind.",
      "Every job includes before and after photos, downpipe clearing as standard, and a full condition report flagging any repairs needed. We are fully insured with £10 million public liability cover.",
      "Call 07421 433910 or request a free instant quote online. Same-day and next-day appointments available across the West Midlands."
    ],
    image: "/gutter-cleaning-before.jpeg",
    buttonText: "Get Your Free Quote",
    buttonLink: "/quote"
  }
];

export default function AreaFacts() {
  const [activeTab, setActiveTab] = useState(0);
  const currentContent = tabContent[activeTab];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Tabs */}
        <div className="flex flex-wrap shadow-sm rounded-t-lg overflow-hidden border border-gray-200">
          {tabs.map((tab, i) => (
             <button 
               key={i}
               onClick={() => setActiveTab(i)}
               className={`flex-1 min-w-[150px] py-4 px-2 text-sm sm:text-[15px] font-medium text-center transition-colors ${
                 activeTab === i ? 'text-white' : 'text-gray-700 hover:bg-gray-50'
               } border-r border-gray-200 last:border-r-0`}
               style={{ backgroundColor: activeTab === i ? colors.primary : 'white' }}
             >
               {tab}
             </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="p-8 sm:p-12 border border-t-0 border-gray-200 rounded-b-lg flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{currentContent.title}</h2>
            <div className="text-gray-600 leading-relaxed text-[15px] space-y-5 mb-8">
              {currentContent.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link href={currentContent.buttonLink}>
              <Button className="text-white font-black italic px-8 py-6 rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: colors.primary }}>
                {currentContent.buttonText}
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[500px] shrink-0 relative">
             <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-lg aspect-[4/3] max-h-[400px]">
               <img 
                 src={currentContent.image}
                 alt={tabs[activeTab]}
                 className="w-full h-full object-cover object-center"
               />
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
