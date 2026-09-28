'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Tag, CheckCircle2, Shield, Calendar, AlertCircle, Building2, Phone, ArrowRight, Sparkles, Briefcase } from 'lucide-react';
import { colors } from '@/constants/colors';

export interface KeywordItem {
  id: number;
  keyword: string;
  category: string;
  link?: string;
  badge?: string;
}

export const COMMERCIAL_GUTTER_CLEANING_KEYWORDS: KeywordItem[] = [
  // Core & general (1-15)
  { id: 1, keyword: 'commercial gutter cleaning', category: 'Core & General', link: '/services/commercial-gutter-cleaning/', badge: 'Core' },
  { id: 2, keyword: 'commercial gutter cleaning Birmingham', category: 'Core & General', link: '/services/commercial-gutter-cleaning/', badge: 'Location' },
  { id: 3, keyword: 'commercial gutter cleaning West Midlands', category: 'Core & General', link: '/services/commercial-gutter-cleaning/', badge: 'Regional' },
  { id: 4, keyword: 'commercial gutter cleaning near me', category: 'Core & General', link: '/services/commercial-gutter-cleaning/', badge: 'Popular' },
  { id: 5, keyword: 'commercial gutter cleaners Birmingham', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 6, keyword: 'commercial gutter cleaning company', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 7, keyword: 'commercial gutter cleaning services', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 8, keyword: 'professional commercial gutter cleaning', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 9, keyword: 'local commercial gutter cleaning', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 10, keyword: 'industrial gutter clearance', category: 'Core & General', link: '/services/commercial-gutter-cleaning/', badge: 'Industrial' },
  { id: 11, keyword: 'industrial gutter clearance Birmingham', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 12, keyword: 'commercial gutter cleaning specialists', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 13, keyword: 'commercial gutter cleaning experts', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 14, keyword: 'commercial gutter maintenance', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },
  { id: 15, keyword: 'commercial gutter maintenance Birmingham', category: 'Core & General', link: '/services/commercial-gutter-cleaning/' },

  // Towns/boroughs (16-35)
  { id: 16, keyword: 'commercial gutter cleaning Solihull', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 17, keyword: 'commercial gutter cleaning Sutton Coldfield', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 18, keyword: 'commercial gutter cleaning Wolverhampton', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 19, keyword: 'commercial gutter cleaning Dudley', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 20, keyword: 'commercial gutter cleaning Walsall', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 21, keyword: 'commercial gutter cleaning Coventry', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 22, keyword: 'commercial gutter cleaning West Bromwich', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 23, keyword: 'commercial gutter cleaning Halesowen', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 24, keyword: 'commercial gutter cleaning Stourbridge', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 25, keyword: 'commercial gutter cleaning Smethwick', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 26, keyword: 'commercial gutter cleaning Tamworth', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 27, keyword: 'commercial gutter cleaning Bromsgrove', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 28, keyword: 'commercial gutter cleaning Redditch', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 29, keyword: 'commercial gutter cleaning Kidderminster', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 30, keyword: 'commercial gutter cleaning Lichfield', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 31, keyword: 'commercial gutter cleaning Cannock', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 32, keyword: 'commercial gutter cleaning Nuneaton', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 33, keyword: 'commercial gutter cleaning Kenilworth', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 34, keyword: 'commercial gutter cleaning Worcester', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },
  { id: 35, keyword: 'commercial gutter cleaning Evesham', category: 'Towns & Boroughs', link: '/services/commercial-gutter-cleaning/' },

  // Price/buyer-intent (36-50)
  { id: 36, keyword: 'commercial gutter cleaning cost', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/', badge: 'Pricing' },
  { id: 37, keyword: 'commercial gutter cleaning cost Birmingham', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 38, keyword: 'commercial gutter cleaning prices', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/', badge: 'Pricing' },
  { id: 39, keyword: 'commercial gutter cleaning quote', category: 'Price & Quotes', link: '/quote/', badge: 'Instant Quote' },
  { id: 40, keyword: 'commercial gutter cleaning quote online', category: 'Price & Quotes', link: '/quote/' },
  { id: 41, keyword: 'affordable commercial gutter cleaning', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 42, keyword: 'cost-effective commercial gutter cleaning', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 43, keyword: 'commercial gutter cleaning price per metre', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 44, keyword: 'how much does commercial gutter cleaning cost', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 45, keyword: 'commercial gutter maintenance packages', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 46, keyword: 'commercial gutter cleaning cost calculator', category: 'Price & Quotes', link: '/quote/' },
  { id: 47, keyword: 'average cost of commercial gutter cleaning', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 48, keyword: 'commercial gutter cleaning cost retail unit', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 49, keyword: 'commercial gutter cleaning cost industrial unit', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },
  { id: 50, keyword: 'commercial gutter cleaning cost office building', category: 'Price & Quotes', link: '/services/commercial-gutter-cleaning/' },

  // Method/service type (51-65)
  { id: 51, keyword: 'commercial gutter vacuum cleaning', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/', badge: 'SkyVac' },
  { id: 52, keyword: 'high level commercial gutter cleaning', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/', badge: 'High Reach' },
  { id: 53, keyword: 'commercial gutter cleaning no ladders', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },
  { id: 54, keyword: 'same day commercial gutter cleaning', category: 'Methods & Access', link: '/quote/' },
  { id: 55, keyword: 'emergency commercial gutter cleaning', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/', badge: 'Emergency' },
  { id: 56, keyword: 'annual commercial gutter maintenance', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },
  { id: 57, keyword: 'commercial gutter cleaning contract', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/', badge: 'PPM Contract' },
  { id: 58, keyword: 'commercial box gutter deep clean', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/', badge: 'Box Gutters' },
  { id: 59, keyword: 'commercial gutter cleaning and inspection', category: 'Methods & Access', link: '/services/gutter-inspection/' },
  { id: 60, keyword: 'commercial cherry picker gutter cleaning', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/', badge: 'MEWP Access' },
  { id: 61, keyword: 'ground based commercial gutter vacuum', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },
  { id: 62, keyword: 'industrial gutter vacuum system', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },
  { id: 63, keyword: 'commercial gutter cleaning multi storey', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },
  { id: 64, keyword: 'factory gutter cleaning', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },
  { id: 65, keyword: 'warehouse gutter cleaning', category: 'Methods & Access', link: '/services/commercial-gutter-cleaning/' },

  // Trust/decision (66-75)
  { id: 66, keyword: 'trusted commercial gutter cleaners', category: 'Trust & Compliance', link: '/reviews/' },
  { id: 67, keyword: 'insured commercial gutter cleaning company (£10M cover)', category: 'Trust & Compliance', link: '/about/', badge: '£10M Insured' },
  { id: 68, keyword: 'commercial gutter cleaning reviews', category: 'Trust & Compliance', link: '/reviews/' },
  { id: 69, keyword: 'best commercial gutter cleaning company', category: 'Trust & Compliance', link: '/reviews/' },
  { id: 70, keyword: 'reliable commercial gutter contractors', category: 'Trust & Compliance', link: '/about/' },
  { id: 71, keyword: 'accredited commercial gutter cleaning company', category: 'Trust & Compliance', link: '/about/', badge: 'RAMS / Safe' },
  { id: 72, keyword: 'rated commercial gutter cleaning company', category: 'Trust & Compliance', link: '/reviews/' },
  { id: 73, keyword: 'commercial gutter cleaning before and after', category: 'Trust & Compliance', link: '/gallery/', badge: 'Photos' },
  { id: 74, keyword: 'commercial gutter cleaning with guarantee', category: 'Trust & Compliance', link: '/services/commercial-gutter-cleaning/' },
  { id: 75, keyword: 'commercial gutter cleaning testimonials', category: 'Trust & Compliance', link: '/reviews/' },

  // Commercial Sectors (76-88)
  { id: 76, keyword: 'commercial gutter cleaning for landlords', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/', badge: 'Landlords' },
  { id: 77, keyword: 'commercial gutter cleaning for letting agents', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 78, keyword: 'commercial gutter cleaning for facilities managers', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/', badge: 'FM' },
  { id: 79, keyword: 'office gutter cleaning', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 80, keyword: 'warehouse gutter cleaning Birmingham', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 81, keyword: 'factory gutter cleaning West Midlands', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 82, keyword: 'school gutter cleaning', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/', badge: 'Education' },
  { id: 83, keyword: 'hospital and healthcare gutter cleaning', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 84, keyword: 'retail park gutter cleaning', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 85, keyword: 'gutter cleaning for property managers', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 86, keyword: 'block management gutter cleaning', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 87, keyword: 'gutter cleaning for housing associations', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 88, keyword: 'hotel and leisure gutter cleaning', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },

  // Seasonal/timing (89-95)
  { id: 89, keyword: 'autumn commercial gutter cleaning', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/', badge: 'Seasonal' },
  { id: 90, keyword: 'spring commercial gutter maintenance', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/' },
  { id: 91, keyword: 'commercial gutter cleaning before winter', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/' },
  { id: 92, keyword: 'emergency commercial storm gutter clean', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/', badge: 'Storm' },
  { id: 93, keyword: 'winter commercial gutter maintenance', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/' },
  { id: 94, keyword: 'high leaf season commercial gutter clearing', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/' },
  { id: 95, keyword: 'pre-winter commercial gutter clear', category: 'Seasonal & Timing', link: '/services/commercial-gutter-cleaning/' },

  // Symptom-led (96-100)
  { id: 96, keyword: 'commercial blocked box gutter cleaning', category: 'Symptoms & Issues', link: '/services/commercial-gutter-cleaning/', badge: 'Box Gutter' },
  { id: 97, keyword: 'commercial overflowing gutter cleaning', category: 'Symptoms & Issues', link: '/services/commercial-gutter-cleaning/' },
  { id: 98, keyword: 'commercial gutter cleaning for water damage prevention', category: 'Symptoms & Issues', link: '/services/commercial-gutter-cleaning/' },
  { id: 99, keyword: 'commercial valley gutter moss and debris removal', category: 'Symptoms & Issues', link: '/services/commercial-gutter-cleaning/' },
  { id: 100, keyword: 'commercial gutter cleaning for internal water ingress prevention', category: 'Symptoms & Issues', link: '/services/commercial-gutter-cleaning/' },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Core & General': <Building2 className="w-4 h-4 text-emerald-600" />,
  'Towns & Boroughs': <MapPin className="w-4 h-4 text-emerald-600" />,
  'Price & Quotes': <Sparkles className="w-4 h-4 text-amber-600" />,
  'Methods & Access': <CheckCircle2 className="w-4 h-4 text-blue-600" />,
  'Trust & Compliance': <Shield className="w-4 h-4 text-purple-600" />,
  'Commercial Sectors': <Briefcase className="w-4 h-4 text-indigo-600" />,
  'Seasonal & Timing': <Calendar className="w-4 h-4 text-orange-600" />,
  'Symptoms & Issues': <AlertCircle className="w-4 h-4 text-rose-600" />,
};

interface CommercialGutterCleaningKeywordsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}

export default function CommercialGutterCleaningKeywords({
  className = '',
  title = 'Commercial Gutter Cleaning Keywords & Service Directory',
  subtitle = 'Explore 100 commercial and industrial gutter clearing keywords, West Midlands towns, FM contracts, warehouse box gutters, RAMS compliance, and high-reach access.',
  showCta = true,
}: CommercialGutterCleaningKeywordsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const list = Array.from(new Set(COMMERCIAL_GUTTER_CLEANING_KEYWORDS.map((k) => k.category)));
    return ['All', ...list];
  }, []);

  const filteredKeywords = useMemo(() => {
    return COMMERCIAL_GUTTER_CLEANING_KEYWORDS.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.keyword.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-b border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Commercial 100-Keyword Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search commercial keywords (e.g. warehouse, PPM, cost)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Badge */}
            <div className="text-xs sm:text-sm font-semibold text-slate-500 self-end md:self-center">
              Showing <span className="text-emerald-600 font-bold">{filteredKeywords.length}</span> of {COMMERCIAL_GUTTER_CLEANING_KEYWORDS.length} keywords
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? COMMERCIAL_GUTTER_CLEANING_KEYWORDS.length : COMMERCIAL_GUTTER_CLEANING_KEYWORDS.filter((k) => k.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat !== 'All' && CATEGORY_ICONS[cat]}
                  <span>{cat}</span>
                  <span className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Keyword Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredKeywords.map((item) => {
            const content = (
              <div className="group flex items-center justify-between gap-2 p-3 bg-white rounded-xl border border-slate-200/90 hover:border-emerald-500 hover:shadow-md transition-all h-full">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-emerald-50 flex items-center justify-center flex-shrink-0 text-slate-500 group-hover:text-emerald-600 transition-colors">
                    {CATEGORY_ICONS[item.category] || <Tag className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-700 truncate">
                    {item.keyword}
                  </span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 flex-shrink-0">
                    {item.badge}
                  </span>
                )}
              </div>
            );

            return item.link ? (
              <Link key={item.id} href={item.link} className="block no-underline">
                {content}
              </Link>
            ) : (
              <div key={item.id}>{content}</div>
            );
          })}
        </div>

        {filteredKeywords.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <AlertCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <p className="text-slate-600 font-semibold text-sm">No keywords match &quot;{searchTerm}&quot;</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-3 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom CTA Block */}
        {showCta && (
          <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                <CheckCircle2 className="w-4 h-4" /> Commercial & Industrial Roofline Specialists
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need Commercial Gutter Maintenance or PPM Contracts?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Full RAMS documentation, £10M public liability insurance, IPAF certified cherry picker operators, and HD photographic reporting.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:07421433910"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>07421 433910</span>
              </a>
              <Link
                href="/quote/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-105"
              >
                <span>Request Commercial Tender</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
