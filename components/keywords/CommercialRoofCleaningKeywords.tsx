'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Tag, CheckCircle2, Shield, Calendar, AlertCircle, Building2, Phone, ArrowRight, Sparkles, Briefcase } from 'lucide-react';

export interface KeywordItem {
  id: number;
  keyword: string;
  category: string;
  link?: string;
  badge?: string;
}

export const COMMERCIAL_ROOF_CLEANING_KEYWORDS: KeywordItem[] = [
  // Core & General (1-15)
  { id: 1, keyword: 'commercial roof cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Core' },
  { id: 2, keyword: 'commercial roof cleaning Birmingham', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Location' },
  { id: 3, keyword: 'commercial roof cleaning West Midlands', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Regional' },
  { id: 4, keyword: 'commercial roof cleaning near me', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Popular' },
  { id: 5, keyword: 'industrial roof cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Industrial' },
  { id: 6, keyword: 'commercial roof cleaning company', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 7, keyword: 'commercial roof washing services', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 8, keyword: 'professional commercial roof cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 9, keyword: 'warehouse roof cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/', badge: 'Warehouse' },
  { id: 10, keyword: 'factory roof moss removal', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 11, keyword: 'commercial soft wash roof cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 12, keyword: 'commercial roof steam cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 13, keyword: 'commercial roof coating & cleaning', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 14, keyword: 'industrial roof moss removal Birmingham', category: 'Core & General', link: '/roof-cleaning-birmingham/' },
  { id: 15, keyword: 'commercial roof maintenance contractors', category: 'Core & General', link: '/roof-cleaning-birmingham/' },

  // Towns & Boroughs (16-35)
  { id: 16, keyword: 'commercial roof cleaning Solihull', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 17, keyword: 'commercial roof cleaning Sutton Coldfield', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 18, keyword: 'commercial roof cleaning Wolverhampton', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 19, keyword: 'commercial roof cleaning Dudley', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 20, keyword: 'commercial roof cleaning Walsall', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 21, keyword: 'commercial roof cleaning Coventry', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 22, keyword: 'commercial roof cleaning West Bromwich', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 23, keyword: 'commercial roof cleaning Halesowen', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 24, keyword: 'commercial roof cleaning Stourbridge', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 25, keyword: 'commercial roof cleaning Smethwick', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 26, keyword: 'commercial roof cleaning Tamworth', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 27, keyword: 'commercial roof cleaning Bromsgrove', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 28, keyword: 'commercial roof cleaning Redditch', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 29, keyword: 'commercial roof cleaning Kidderminster', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 30, keyword: 'commercial roof cleaning Lichfield', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 31, keyword: 'commercial roof cleaning Cannock', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 32, keyword: 'commercial roof cleaning Nuneaton', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 33, keyword: 'commercial roof cleaning Telford', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 34, keyword: 'commercial roof cleaning Worcester', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },
  { id: 35, keyword: 'commercial roof cleaning Rugby', category: 'Towns & Boroughs', link: '/roof-cleaning-birmingham/' },

  // Price & Quotes (36-50)
  { id: 36, keyword: 'commercial roof cleaning cost', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/', badge: 'Pricing' },
  { id: 37, keyword: 'commercial roof cleaning prices UK', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/', badge: 'Pricing' },
  { id: 38, keyword: 'industrial roof cleaning cost per m2', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 39, keyword: 'commercial roof moss removal quote', category: 'Price & Quotes', link: '/quote/', badge: 'Instant Quote' },
  { id: 40, keyword: 'warehouse roof cleaning quote', category: 'Price & Quotes', link: '/quote/' },
  { id: 41, keyword: 'commercial roof cleaning estimate Birmingham', category: 'Price & Quotes', link: '/quote/' },
  { id: 42, keyword: 'commercial cladding and roof cleaning prices', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 43, keyword: 'affordable commercial roof cleaners', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 44, keyword: 'cheap commercial roof cleaning Birmingham', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 45, keyword: 'commercial roof washing quote online', category: 'Price & Quotes', link: '/quote/' },
  { id: 46, keyword: 'industrial unit roof cleaning prices', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 47, keyword: 'retail park roof cleaning cost', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 48, keyword: 'commercial roof pressure washing prices', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 49, keyword: 'commercial soft washing roof cost', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },
  { id: 50, keyword: 'commercial roof biocide treatment cost', category: 'Price & Quotes', link: '/roof-cleaning-birmingham/' },

  // Commercial Property Types (51-75)
  { id: 51, keyword: 'warehouse roof moss removal', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 52, keyword: 'factory roof washing', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 53, keyword: 'retail park roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 54, keyword: 'office building roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 55, keyword: 'school roof moss removal West Midlands', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 56, keyword: 'hospital roof cleaning services', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 57, keyword: 'supermarket roof moss cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 58, keyword: 'industrial estate roof maintenance', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 59, keyword: 'logistics hub roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 60, keyword: 'car dealership roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 61, keyword: 'hotel roof moss removal Birmingham', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 62, keyword: 'sports hall roof washing', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 63, keyword: 'church & heritage roof soft washing', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 64, keyword: 'distribution centre roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 65, keyword: 'apartment block roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 66, keyword: 'commercial property roof moss treatment', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 67, keyword: 'industrial unit cladding & roof wash', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 68, keyword: 'metal roof cleaning commercial', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 69, keyword: 'cladding and roof soft wash contractors', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 70, keyword: 'composite roof panel cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 71, keyword: 'asbestos roof soft wash safety', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 72, keyword: 'solar panel and commercial roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 73, keyword: 'commercial skylight & roof cleaning', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 74, keyword: 'flat roof moss & algae cleaning commercial', category: 'Property Types', link: '/roof-cleaning-birmingham/' },
  { id: 75, keyword: 'commercial gutter and roof cleaning contractors', category: 'Property Types', link: '/roof-cleaning-birmingham/' },

  // Methods & Treatments (76-100)
  { id: 76, keyword: 'soft wash commercial roof cleaning', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/', badge: 'Soft Wash' },
  { id: 77, keyword: 'biocide treatment commercial roof', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 78, keyword: 'steam cleaning commercial roof tiles', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 79, keyword: 'low pressure commercial roof wash', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 80, keyword: 'moss scraping commercial roof', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 81, keyword: 'MEWP cherry picker roof cleaning', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/', badge: 'MEWP/IPAF' },
  { id: 82, keyword: 'commercial roof cleaning RAMS certified', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 83, keyword: 'IPAF certified commercial roof cleaners', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 84, keyword: 'commercial roof cleaning insurance £10M', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 85, keyword: 'commercial roof algae & lichen removal', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 86, keyword: 'commercial roof anti-fungal treatment', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 87, keyword: 'industrial roof coating prep cleaning', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 88, keyword: 'commercial roof tile washing', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 89, keyword: 'commercial slate roof cleaning', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 90, keyword: 'commercial roof valley cleaning', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 91, keyword: 'commercial roof overhaul and clean', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 92, keyword: 'commercial roof inspection & clean', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 93, keyword: 'commercial roof bio-clean West Midlands', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 94, keyword: 'commercial roof moss prevention contract', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 95, keyword: 'commercial roof cleaning contract Birmingham', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 96, keyword: 'annual commercial roof cleaning PPM', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 97, keyword: 'out-of-hours commercial roof cleaning', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 98, keyword: 'weekend commercial roof cleaning service', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 99, keyword: 'commercial roof drone survey and clean', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/' },
  { id: 100, keyword: 'commercial roof cleaning Specialists West Midlands', category: 'Methods & Compliance', link: '/roof-cleaning-birmingham/', badge: 'Specialist' }
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Core & General': <Briefcase className="w-3.5 h-3.5" />,
  'Towns & Boroughs': <MapPin className="w-3.5 h-3.5" />,
  'Price & Quotes': <Tag className="w-3.5 h-3.5" />,
  'Property Types': <Building2 className="w-3.5 h-3.5" />,
  'Methods & Compliance': <Shield className="w-3.5 h-3.5" />,
};

interface ComponentProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showCta?: boolean;
}

export default function CommercialRoofCleaningKeywords({
  title = 'Commercial Roof Cleaning Search Directory',
  subtitle = 'Browse our comprehensive list of commercial roof cleaning, industrial moss removal, and soft-wash services across Birmingham & the West Midlands.',
  className = '',
  showCta = true,
}: ComponentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(COMMERCIAL_ROOF_CLEANING_KEYWORDS.map(item => item.category)));
    return ['All', ...cats];
  }, []);

  const filteredKeywords = useMemo(() => {
    return COMMERCIAL_ROOF_CLEANING_KEYWORDS.filter(item => {
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
            <span>Commercial Roof 100-Keyword Directory</span>
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
                placeholder="Search commercial roof keywords (e.g. soft wash, warehouse, cost)..."
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
              Showing <span className="text-emerald-600 font-bold">{filteredKeywords.length}</span> of {COMMERCIAL_ROOF_CLEANING_KEYWORDS.length} keywords
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? COMMERCIAL_ROOF_CLEANING_KEYWORDS.length : COMMERCIAL_ROOF_CLEANING_KEYWORDS.filter((k) => k.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-slate-700 text-slate-200' : 'bg-slate-200 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Keyword Grid */}
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
                <CheckCircle2 className="w-4 h-4" /> Professional Commercial &amp; Industrial Roof Cleaning
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need Commercial Roof Moss Removal or Soft Wash?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Soft-wash biocide treatments and low-pressure steam cleaning for warehouses, factories, retail parks, and office buildings. Full RAMS and £10M insurance.
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
                <span>Get Free 60s Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
