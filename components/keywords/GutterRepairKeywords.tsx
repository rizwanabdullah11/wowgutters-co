'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Tag, CheckCircle2, Shield, Calendar, AlertCircle, Building2, Phone, ArrowRight, Sparkles, Wrench } from 'lucide-react';
import { colors } from '@/constants/colors';

export interface KeywordItem {
  id: number;
  keyword: string;
  category: string;
  link?: string;
  badge?: string;
}

export const GUTTER_REPAIR_KEYWORDS: KeywordItem[] = [
  // Core & general (1-15)
  { id: 1, keyword: 'gutter repair', category: 'Core & General', link: '/services/gutter-repairs/', badge: 'Core' },
  { id: 2, keyword: 'gutter repair Birmingham', category: 'Core & General', link: '/services/gutter-repairs/', badge: 'Location' },
  { id: 3, keyword: 'gutter repair West Midlands', category: 'Core & General', link: '/services/gutter-repairs/', badge: 'Regional' },
  { id: 4, keyword: 'gutter repair near me', category: 'Core & General', link: '/services/gutter-repairs/', badge: 'Popular' },
  { id: 5, keyword: 'gutter repairers Birmingham', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 6, keyword: 'gutter repair company', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 7, keyword: 'gutter repair services', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 8, keyword: 'professional gutter repair', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 9, keyword: 'local gutter repair', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 10, keyword: 'gutter fix', category: 'Core & General', link: '/services/gutter-repairs/', badge: 'Quick Fix' },
  { id: 11, keyword: 'gutter fix Birmingham', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 12, keyword: 'gutter repair specialists', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 13, keyword: 'gutter repair experts', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 14, keyword: 'gutter maintenance and repair', category: 'Core & General', link: '/services/gutter-repairs/' },
  { id: 15, keyword: 'guttering repairs Birmingham', category: 'Core & General', link: '/services/gutter-repairs/' },

  // Towns/boroughs (16-35)
  { id: 16, keyword: 'gutter repair Solihull', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 17, keyword: 'gutter repair Sutton Coldfield', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 18, keyword: 'gutter repair Wolverhampton', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 19, keyword: 'gutter repair Dudley', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 20, keyword: 'gutter repair Walsall', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 21, keyword: 'gutter repair Coventry', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 22, keyword: 'gutter repair West Bromwich', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 23, keyword: 'gutter repair Halesowen', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 24, keyword: 'gutter repair Stourbridge', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 25, keyword: 'gutter repair Smethwick', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 26, keyword: 'gutter repair Tamworth', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 27, keyword: 'gutter repair Bromsgrove', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 28, keyword: 'gutter repair Redditch', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 29, keyword: 'gutter repair Kidderminster', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 30, keyword: 'gutter repair Lichfield', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 31, keyword: 'gutter repair Cannock', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 32, keyword: 'gutter repair Nuneaton', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 33, keyword: 'gutter repair Kenilworth', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 34, keyword: 'gutter repair Worcester', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },
  { id: 35, keyword: 'gutter repair Evesham', category: 'Towns & Boroughs', link: '/services/gutter-repairs/' },

  // Price/buyer-intent (36-50)
  { id: 36, keyword: 'gutter repair cost', category: 'Price & Quotes', link: '/services/gutter-repairs/', badge: 'Pricing' },
  { id: 37, keyword: 'gutter repair cost Birmingham', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 38, keyword: 'gutter repair prices', category: 'Price & Quotes', link: '/services/gutter-repairs/', badge: 'Pricing' },
  { id: 39, keyword: 'gutter repair quote', category: 'Price & Quotes', link: '/quote/', badge: 'Instant Quote' },
  { id: 40, keyword: 'gutter repair quote online', category: 'Price & Quotes', link: '/quote/' },
  { id: 41, keyword: 'cheap gutter repair', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 42, keyword: 'affordable gutter repair', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 43, keyword: 'gutter repair price per metre', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 44, keyword: 'how much does gutter repair cost', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 45, keyword: 'gutter repair packages', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 46, keyword: 'gutter repair cost calculator', category: 'Price & Quotes', link: '/quote/' },
  { id: 47, keyword: 'average cost of gutter repair', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 48, keyword: 'gutter repair cost 3 bed house', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 49, keyword: 'gutter repair cost terraced house', category: 'Price & Quotes', link: '/services/gutter-repairs/' },
  { id: 50, keyword: 'gutter repair cost detached house', category: 'Price & Quotes', link: '/services/gutter-repairs/' },

  // Method/service type (51-65)
  { id: 51, keyword: 'gutter joint sealing', category: 'Methods & Service Type', link: '/services/gutter-repairs/', badge: 'Joints' },
  { id: 52, keyword: 'gutter bracket replacement', category: 'Methods & Service Type', link: '/services/gutter-repairs/', badge: 'Brackets' },
  { id: 53, keyword: 'leaking gutter repair', category: 'Methods & Service Type', link: '/services/gutter-repairs/', badge: 'Leak Fix' },
  { id: 54, keyword: 'same day gutter repair', category: 'Methods & Service Type', link: '/quote/' },
  { id: 55, keyword: 'emergency gutter repair', category: 'Methods & Service Type', link: '/services/gutter-repairs/', badge: 'Emergency' },
  { id: 56, keyword: 'annual gutter repair inspection', category: 'Methods & Service Type', link: '/services/gutter-inspection/' },
  { id: 57, keyword: 'seamless gutter lining', category: 'Methods & Service Type', link: '/gutter-lining/' },
  { id: 58, keyword: 'sagging gutter fix', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },
  { id: 59, keyword: 'gutter repair and inspection', category: 'Methods & Service Type', link: '/services/gutter-inspection/' },
  { id: 60, keyword: 'gutter repair without scaffolding', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },
  { id: 61, keyword: 'downpipe repair and replacement', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },
  { id: 62, keyword: 'cast iron gutter repair', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },
  { id: 63, keyword: 'gutter repair for 2 storey house', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },
  { id: 64, keyword: 'gutter repair for 3 storey house', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },
  { id: 65, keyword: 'gutter repair for bungalows', category: 'Methods & Service Type', link: '/services/gutter-repairs/' },

  // Trust/decision (66-75)
  { id: 66, keyword: 'trusted gutter repairers', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 67, keyword: 'insured gutter repair company', category: 'Trust & Reputation', link: '/about/', badge: '£10M Insured' },
  { id: 68, keyword: 'gutter repair reviews', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 69, keyword: 'best gutter repair company', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 70, keyword: 'reliable gutter repairers', category: 'Trust & Reputation', link: '/about/' },
  { id: 71, keyword: 'family run gutter repair company', category: 'Trust & Reputation', link: '/about/' },
  { id: 72, keyword: 'rated gutter repair company', category: 'Trust & Reputation', link: '/reviews/' },
  { id: 73, keyword: 'gutter repair before and after', category: 'Trust & Reputation', link: '/gallery/', badge: 'Photos' },
  { id: 74, keyword: 'gutter repair with guarantee', category: 'Trust & Reputation', link: '/services/gutter-repairs/' },
  { id: 75, keyword: 'gutter repair testimonials', category: 'Trust & Reputation', link: '/reviews/' },

  // Commercial (76-88)
  { id: 76, keyword: 'commercial gutter repair', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/', badge: 'Commercial' },
  { id: 77, keyword: 'commercial gutter repair Birmingham', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 78, keyword: 'commercial gutter repair West Midlands', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 79, keyword: 'gutter repair for landlords', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 80, keyword: 'commercial gutter repair contract', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 81, keyword: 'gutter repair for letting agents', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 82, keyword: 'gutter repair for facilities managers', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 83, keyword: 'office gutter repair', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 84, keyword: 'warehouse gutter repair', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 85, keyword: 'school gutter repair', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 86, keyword: 'gutter repair for property managers', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 87, keyword: 'block management gutter repair', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },
  { id: 88, keyword: 'gutter repair for housing associations', category: 'Commercial Sectors', link: '/services/commercial-gutter-cleaning/' },

  // Seasonal/timing (89-95)
  { id: 89, keyword: 'autumn gutter repair', category: 'Seasonal & Timing', link: '/services/gutter-repairs/', badge: 'Seasonal' },
  { id: 90, keyword: 'spring gutter repair', category: 'Seasonal & Timing', link: '/services/gutter-repairs/' },
  { id: 91, keyword: 'gutter repair before winter', category: 'Seasonal & Timing', link: '/services/gutter-repairs/' },
  { id: 92, keyword: 'storm damage gutter repair', category: 'Seasonal & Timing', link: '/services/gutter-repairs/', badge: 'Storm' },
  { id: 93, keyword: 'winter freeze gutter repair', category: 'Seasonal & Timing', link: '/services/gutter-repairs/' },
  { id: 94, keyword: 'heavy rain gutter leak repair', category: 'Seasonal & Timing', link: '/services/gutter-repairs/' },
  { id: 95, keyword: 'pre-winter gutter fix', category: 'Seasonal & Timing', link: '/services/gutter-repairs/' },

  // Symptom-led (96-100)
  { id: 96, keyword: 'leaking gutter joint repair', category: 'Symptoms & Issues', link: '/services/gutter-repairs/', badge: 'Leak' },
  { id: 97, keyword: 'cracked gutter repair', category: 'Symptoms & Issues', link: '/services/gutter-repairs/' },
  { id: 98, keyword: 'overflowing gutter slope repair', category: 'Symptoms & Issues', link: '/services/gutter-repairs/' },
  { id: 99, keyword: 'detached downpipe repair', category: 'Symptoms & Issues', link: '/services/gutter-repairs/' },
  { id: 100, keyword: 'sagging gutter bracket fix', category: 'Symptoms & Issues', link: '/services/gutter-repairs/' },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Core & General': <Wrench className="w-4 h-4 text-emerald-600" />,
  'Towns & Boroughs': <MapPin className="w-4 h-4 text-emerald-600" />,
  'Price & Quotes': <Sparkles className="w-4 h-4 text-amber-600" />,
  'Methods & Service Type': <CheckCircle2 className="w-4 h-4 text-blue-600" />,
  'Trust & Reputation': <Shield className="w-4 h-4 text-purple-600" />,
  'Commercial Sectors': <Building2 className="w-4 h-4 text-indigo-600" />,
  'Seasonal & Timing': <Calendar className="w-4 h-4 text-orange-600" />,
  'Symptoms & Issues': <AlertCircle className="w-4 h-4 text-rose-600" />,
};

interface GutterRepairKeywordsProps {
  className?: string;
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}

export default function GutterRepairKeywords({
  className = '',
  title = 'Gutter Repair Keywords & Service Directory',
  subtitle = 'Discover 100 essential gutter repair queries, West Midlands town coverage, joint sealing, bracket replacement, leak fixes, prices, and emergency storm repairs.',
  showCta = true,
}: GutterRepairKeywordsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const list = Array.from(new Set(GUTTER_REPAIR_KEYWORDS.map((k) => k.category)));
    return ['All', ...list];
  }, []);

  const filteredKeywords = useMemo(() => {
    return GUTTER_REPAIR_KEYWORDS.filter((item) => {
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
            <span>Gutter Repair 100-Keyword Directory</span>
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
                placeholder="Search repair keywords (e.g. leak, joint, cost)..."
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
              Showing <span className="text-emerald-600 font-bold">{filteredKeywords.length}</span> of {GUTTER_REPAIR_KEYWORDS.length} keywords
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? GUTTER_REPAIR_KEYWORDS.length : GUTTER_REPAIR_KEYWORDS.filter((k) => k.category === cat).length;
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
                <CheckCircle2 className="w-4 h-4" /> Fast West Midlands Gutter Repairs
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Leaking, Sagging, or Broken Gutters?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                On-site joint resealing, bracket replacement, fall alignment, downpipe repairs, and seamless gutter lining with full warranty.
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
                <span>Book Gutter Repair</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
