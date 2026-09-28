'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Tag, CheckCircle2, Shield, Calendar, AlertCircle, Building2, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { colors } from '@/constants/colors';

export interface KeywordItem {
  id: number;
  keyword: string;
  category: string;
  link?: string;
  badge?: string;
}

export const ROOF_CLEANING_KEYWORDS: KeywordItem[] = [
  // Core & general (1-15)
  { id: 1, keyword: 'roof cleaning', category: 'Core & General', link: '/services/roof-cleaning/', badge: 'Core' },
  { id: 2, keyword: 'roof cleaning Birmingham', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Location' },
  { id: 3, keyword: 'roof cleaning West Midlands', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Regional' },
  { id: 4, keyword: 'roof cleaning near me', category: 'Core & General', link: '/services/roof-cleaning/', badge: 'Popular' },
  { id: 5, keyword: 'roof cleaners Birmingham', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 6, keyword: 'roof cleaning company', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 7, keyword: 'roof cleaning services', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 8, keyword: 'professional roof cleaning', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 9, keyword: 'local roof cleaning', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 10, keyword: 'roof moss removal', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Moss' },
  { id: 11, keyword: 'roof moss removal Birmingham', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 12, keyword: 'roof cleaning specialists', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 13, keyword: 'roof cleaning experts', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 14, keyword: 'roof maintenance', category: 'Core & General', link: '/services/roof-cleaning/' },
  { id: 15, keyword: 'roof maintenance Birmingham', category: 'Core & General', link: '/roof-cleaning-birmingham/' },

  // Towns/boroughs (16-35)
  { id: 16, keyword: 'roof cleaning Solihull', category: 'Towns & Boroughs', link: '/roof-cleaning-solihull/' },
  { id: 17, keyword: 'roof cleaning Sutton Coldfield', category: 'Towns & Boroughs', link: '/roof-cleaning-sutton-coldfield/' },
  { id: 18, keyword: 'roof cleaning Wolverhampton', category: 'Towns & Boroughs', link: '/roof-cleaning-wolverhampton/' },
  { id: 19, keyword: 'roof cleaning Dudley', category: 'Towns & Boroughs', link: '/roof-cleaning-dudley/' },
  { id: 20, keyword: 'roof cleaning Walsall', category: 'Towns & Boroughs', link: '/roof-cleaning-walsall/' },
  { id: 21, keyword: 'roof cleaning Coventry', category: 'Towns & Boroughs', link: '/roof-cleaning-coventry/' },
  { id: 22, keyword: 'roof cleaning West Bromwich', category: 'Towns & Boroughs', link: '/roof-cleaning-west-bromwich/' },
  { id: 23, keyword: 'roof cleaning Halesowen', category: 'Towns & Boroughs', link: '/roof-cleaning-halesowen/' },
  { id: 24, keyword: 'roof cleaning Stourbridge', category: 'Towns & Boroughs', link: '/roof-cleaning-stourbridge/' },
  { id: 25, keyword: 'roof cleaning Smethwick', category: 'Towns & Boroughs', link: '/roof-cleaning-smethwick/' },
  { id: 26, keyword: 'roof cleaning Tamworth', category: 'Towns & Boroughs', link: '/roof-cleaning-tamworth/' },
  { id: 27, keyword: 'roof cleaning Bromsgrove', category: 'Towns & Boroughs', link: '/roof-cleaning-bromsgrove/' },
  { id: 28, keyword: 'roof cleaning Redditch', category: 'Towns & Boroughs', link: '/roof-cleaning-redditch/' },
  { id: 29, keyword: 'roof cleaning Kidderminster', category: 'Towns & Boroughs', link: '/roof-cleaning-kidderminster/' },
  { id: 30, keyword: 'roof cleaning Lichfield', category: 'Towns & Boroughs', link: '/roof-cleaning-lichfield/' },
  { id: 31, keyword: 'roof cleaning Cannock', category: 'Towns & Boroughs', link: '/roof-cleaning-cannock/' },
  { id: 32, keyword: 'roof cleaning Nuneaton', category: 'Towns & Boroughs', link: '/roof-cleaning-nuneaton/' },
  { id: 33, keyword: 'roof cleaning Kenilworth', category: 'Towns & Boroughs', link: '/roof-cleaning-kenilworth/' },
  { id: 34, keyword: 'roof cleaning Worcester', category: 'Towns & Boroughs', link: '/roof-cleaning-worcester/' },
  { id: 35, keyword: 'roof cleaning Evesham', category: 'Towns & Boroughs', link: '/roof-cleaning-evesham/' },

  // Price/buyer-intent (36-50)
  { id: 36, keyword: 'roof cleaning cost', category: 'Price & Quotes', link: '/services/roof-cleaning/', badge: 'Pricing' },
  { id: 37, keyword: 'roof cleaning cost Birmingham', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 38, keyword: 'roof cleaning prices', category: 'Price & Quotes', link: '/services/roof-cleaning/', badge: 'Pricing' },
  { id: 39, keyword: 'roof cleaning quote', category: 'Price & Quotes', link: '/quote/', badge: 'Instant Quote' },
  { id: 40, keyword: 'roof cleaning quote online', category: 'Price & Quotes', link: '/quote/' },
  { id: 41, keyword: 'cheap roof cleaning', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 42, keyword: 'affordable roof cleaning', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 43, keyword: 'roof cleaning price per m2', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 44, keyword: 'how much does roof cleaning cost', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 45, keyword: 'roof cleaning packages', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 46, keyword: 'roof cleaning cost calculator', category: 'Price & Quotes', link: '/quote/' },
  { id: 47, keyword: 'average cost of roof cleaning', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 48, keyword: 'roof cleaning cost 3 bed house', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 49, keyword: 'roof cleaning cost terraced house', category: 'Price & Quotes', link: '/services/roof-cleaning/' },
  { id: 50, keyword: 'roof cleaning cost detached house', category: 'Price & Quotes', link: '/services/roof-cleaning/' },

  // Method/service type (51-65)
  { id: 51, keyword: 'soft wash roof cleaning', category: 'Methods & Service Type', link: '/services/roof-cleaning/', badge: 'SoftWash' },
  { id: 52, keyword: 'roof steam cleaning', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 53, keyword: 'roof cleaning no pressure', category: 'Methods & Service Type', link: '/services/roof-cleaning/', badge: 'Low Pressure' },
  { id: 54, keyword: 'same day roof cleaning', category: 'Methods & Service Type', link: '/quote/' },
  { id: 55, keyword: 'emergency roof cleaning', category: 'Methods & Service Type', link: '/quote/' },
  { id: 56, keyword: 'annual roof cleaning', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 57, keyword: 'biocide roof treatment', category: 'Methods & Service Type', link: '/services/roof-cleaning/', badge: 'Biocide' },
  { id: 58, keyword: 'roof tile scraping', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 59, keyword: 'roof cleaning and inspection', category: 'Methods & Service Type', link: '/services/roof-inspection/' },
  { id: 60, keyword: 'roof cleaning without scaffolding', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 61, keyword: 'cherry picker roof cleaning', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 62, keyword: 'low pressure roof cleaning', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 63, keyword: 'roof cleaning for 2 storey house', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 64, keyword: 'roof cleaning for 3 storey house', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },
  { id: 65, keyword: 'roof cleaning for bungalows', category: 'Methods & Service Type', link: '/services/roof-cleaning/' },

  // Trust/decision (66-75)
  { id: 66, keyword: 'trusted roof cleaners', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 67, keyword: 'insured roof cleaning company', category: 'Trust & Reputation', link: '/about/', badge: '£10M Insured' },
  { id: 68, keyword: 'roof cleaning reviews', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 69, keyword: 'best roof cleaning company', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 70, keyword: 'reliable roof cleaners', category: 'Trust & Reputation', link: '/about/' },
  { id: 71, keyword: 'family run roof cleaning company', category: 'Trust & Reputation', link: '/about/' },
  { id: 72, keyword: 'rated roof cleaning company', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 73, keyword: 'roof cleaning before and after', category: 'Trust & Reputation', link: '/gallery/', badge: 'Photos' },
  { id: 74, keyword: 'roof cleaning with guarantee', category: 'Trust & Reputation', link: '/services/roof-cleaning/' },
  { id: 75, keyword: 'roof cleaning testimonials', category: 'Trust & Reputation', link: '/reviews/' },

  // Commercial (76-88)
  { id: 77, keyword: 'commercial roof cleaning', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/', badge: 'Commercial' },
  { id: 78, keyword: 'commercial roof cleaning Birmingham', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 79, keyword: 'commercial roof cleaning West Midlands', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 80, keyword: 'roof cleaning for landlords', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 81, keyword: 'commercial roof cleaning contract', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 82, keyword: 'roof cleaning for letting agents', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 83, keyword: 'roof cleaning for facilities managers', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 84, keyword: 'office roof cleaning', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 85, keyword: 'warehouse roof cleaning', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 86, keyword: 'school roof cleaning', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 87, keyword: 'roof cleaning for property managers', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 88, keyword: 'block management roof cleaning', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },
  { id: 76, keyword: 'roof cleaning for housing associations', category: 'Commercial Sectors', link: '/services/commercial-roof-cleaning/' },

  // Seasonal/timing (89-95)
  { id: 89, keyword: 'autumn roof cleaning', category: 'Seasonal & Timing', link: '/services/roof-cleaning/', badge: 'Seasonal' },
  { id: 90, keyword: 'spring roof cleaning', category: 'Seasonal & Timing', link: '/services/roof-cleaning/' },
  { id: 91, keyword: 'roof cleaning before winter', category: 'Seasonal & Timing', link: '/services/roof-cleaning/' },
  { id: 92, keyword: 'roof cleaning after storm', category: 'Seasonal & Timing', link: '/services/roof-cleaning/' },
  { id: 93, keyword: 'winter roof maintenance', category: 'Seasonal & Timing', link: '/services/roof-cleaning/' },
  { id: 94, keyword: 'moss season roof cleaning', category: 'Seasonal & Timing', link: '/services/roof-cleaning/' },
  { id: 95, keyword: 'pre-winter roof moss treatment', category: 'Seasonal & Timing', link: '/services/roof-cleaning/' },

  // Symptom-led (96-100)
  { id: 96, keyword: 'moss covered roof cleaning', category: 'Symptoms & Issues', link: '/services/roof-cleaning/', badge: 'Moss' },
  { id: 97, keyword: 'algae stained roof cleaning', category: 'Symptoms & Issues', link: '/services/roof-cleaning/' },
  { id: 98, keyword: 'roof cleaning for water ingress prevention', category: 'Symptoms & Issues', link: '/services/roof-cleaning/' },
  { id: 99, keyword: 'roof cleaning for moss and lichen', category: 'Symptoms & Issues', link: '/services/roof-cleaning/' },
  { id: 100, keyword: 'roof cleaning for tile longevity', category: 'Symptoms & Issues', link: '/services/roof-cleaning/' },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Core & General': <Tag className="w-4 h-4 text-emerald-600" />,
  'Towns & Boroughs': <MapPin className="w-4 h-4 text-emerald-600" />,
  'Price & Quotes': <Sparkles className="w-4 h-4 text-amber-600" />,
  'Methods & Service Type': <CheckCircle2 className="w-4 h-4 text-blue-600" />,
  'Trust & Reputation': <Shield className="w-4 h-4 text-purple-600" />,
  'Commercial Sectors': <Building2 className="w-4 h-4 text-indigo-600" />,
  'Seasonal & Timing': <Calendar className="w-4 h-4 text-orange-600" />,
  'Symptoms & Issues': <AlertCircle className="w-4 h-4 text-rose-600" />,
};

interface RoofCleaningKeywordsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}

export default function RoofCleaningKeywords({
  className = '',
  title = 'Roof Cleaning Keywords & Service Directory',
  subtitle = 'Explore 100 core roof cleaning search terms, West Midlands locations, soft wash biocide treatments, moss scraping methods, pricing, and tile longevity solutions.',
  showCta = true,
}: RoofCleaningKeywordsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const list = Array.from(new Set(ROOF_CLEANING_KEYWORDS.map((k) => k.category)));
    return ['All', ...list];
  }, []);

  const filteredKeywords = useMemo(() => {
    return ROOF_CLEANING_KEYWORDS.filter((item) => {
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
            <span>Roof Cleaning 100-Keyword Directory</span>
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
                placeholder="Search roof keywords (e.g. moss, Solihull, cost)..."
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
              Showing <span className="text-emerald-600 font-bold">{filteredKeywords.length}</span> of {ROOF_CLEANING_KEYWORDS.length} keywords
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? ROOF_CLEANING_KEYWORDS.length : ROOF_CLEANING_KEYWORDS.filter((k) => k.category === cat).length;
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
                <CheckCircle2 className="w-4 h-4" /> Professional West Midlands Roof Cleaning
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Restore & Protect Your Roof Tiles Today
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Gentle manual scraping, soft-wash biocide treatments, and cherry picker access. Safe for clay, slate, and concrete tiles.
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
                <span>Get Free Roof Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
