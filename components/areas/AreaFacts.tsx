'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import Link from 'next/link';

const tabs = ["Gutter Cleaning Facts", "Gutter Cleaning Prices", "Gutter Cleaning Discount", "Gutter Cleaning Near Me"];

const tabContent = [
  {
    // Gutter Cleaning Facts
    title: "Why Regular Gutter Upkeep Matters",
    content: [
      "Clearing out gutters is an undeniably messy and hazardous task, yet it remains a non-negotiable part of homeownership. Often, property owners overlook their drainage systems until an evident overflow occurs, highlighting the critical need for proactive maintenance.",
      "Throughout the year, your gutters act as a catchment area for diverse debris. While autumn leaves are prime culprits, you'll also find moss, twigs, broken slate, mortar, and accumulated silt causing severe blockages within your pipework.",
      "Furthermore, undisturbed gutters can become nesting grounds for pests and accumulate bird droppings. When blockages form, trapped water overflows, posing a massive threat to your internal walls, roofing structures, and foundations. Consistent clearing mitigates these expensive risks.",
      "Industry standards suggest engaging a professional service twice annually—usually aligning with the shift in seasons during spring and late autumn. Homes flanked by large, overhanging trees will naturally demand closer attention purely due to the sheer volume of organic matter shed."
    ],
    image: "/professional-gutter-fact1.png",
    buttonText: "Schedule a Clearance",
    buttonLink: "/quote"
  },
  {
    // Gutter Cleaning Prices
    title: "Honest and Clear Pricing Structures",
    content: [
      "Here at WOW Gutter Cleaning, we champion honest, straightforward pricing without any unexpected surcharges. Every quote we provide is tailored considering the dimensions of your property, ease of access, and total gutter length, assuring excellent value for dedicated expertise.",
      "Standard clearance for average residential properties typically sits between £60 and £150. For instance, a standard three-bed semi-detached home is generally quoted around the £80 to £100 mark. Naturally, expansive properties or those featuring large conservatories involve a tailored assessment.",
      "Our quoted fee covers a comprehensive overhaul: targeted debris extraction, thorough downpipe flushing, and a concluding visual health check accompanied by photographic evidence. We also extend competitive package rates for those committing to recurring annual upkeep.",
      "Commercial entities receive bespoke quotations mapping out their specific scale and access requirements. We eagerly supply zero-obligation estimates promptly, and every job completed is shielded by our extensive insurance and firm commitment to satisfaction."
    ],
    image: "/professional-gutter-fact1.png",
    buttonText: "Request Your Estimate",
    buttonLink: "/quote"
  },
  {
    // Gutter Cleaning Discount
    title: "Valuable Savings and Local Offers",
    content: [
      "We continually strive to deliver cost-effective solutions for your property care. Through our 'Street Saver' initiative, homeowners and adjoining neighbours who schedule coordinated appointments on the same date can unlock collective discounts of up to 20%.",
      "We hold deep respect for our senior community; hence, all clients aged 65 and over automatically qualify for a 10% concession across our entire service range. We remain committed to helping elderly residents safeguard their homes affordably and safely.",
      "Loyal clients enrolled in our routine maintenance plans also reap the rewards. By arranging systematic bi-annual or yearly cleans, you can secure reductions of up to 15% per visit, ensuring peace of mind that your drainage functions impeccably all year round without premium fees.",
      "New clients are welcomed with an introductory discount, and we frequently launch seasonal campaigns aligned with extreme weather months. Reach out to our customer care team today to discover which promotions you can benefit from."
    ],
    image: "/professional-gutter-fact1.png",
    buttonText: "Explore Promotions",
    buttonLink: "/neighbourhood-discount"
  },
  {
    // Gutter Cleaning Near Me
    title: "Dependable Specialists in Your Region",
    content: [
      "WOW Gutters operates a robust national network, bringing exceptional, professional-grade maintenance directly to your doorstep. Our regional franchises guarantee that you benefit from swift, localised attention from practitioners familiar with the area's distinct property profiles.",
      "Our coverage spans prominently across vital locales, including but not limited to Birmingham, Worcester, Wolverhampton, and their neighbouring commuter belts. For time-sensitive matters like acute overflows, our nearby teams are frequently capable of dispatching same-day or next-day assistance.",
      "While part of a broader brand, each regional crew is autonomously managed, carrying rigorous insurance and exhaustive training credentials. They arrive fully fortified with state-of-the-art camera inspection tools and heavy-duty, ground-operated suction units.",
      "Locating your closest technician takes seconds—simply pop your details into our online portal for a swift calculation. A member of your local team will touch base shortly afterwards to fix a time that causes minimal disruption to your daily routine."
    ],
    image: "/professional-gutter-fact1.png",
    buttonText: "Discover Local Technicians",
    buttonLink: "/gutter-cleaning-birmingham/"
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
             <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-lg">
               <img 
                 src={currentContent.image}
                 alt={tabs[activeTab]}
                 className="w-full h-[400px] object-cover"
               />
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
