'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Tag, CheckCircle2, Shield, Calendar, AlertCircle, Home, Phone, ArrowRight, Sparkles, Sun } from 'lucide-react';

export interface KeywordItem {
  id: number;
  keyword: string;
  category: string;
  link?: string;
  badge?: string;
}

export const CONSERVATORY_GUTTER_CLEANING_KEYWORDS: KeywordItem[] = [
  // Core & General (1-15)
  { id: 1, keyword: 'conservatory gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/', badge: 'Core' },
  { id: 2, keyword: 'conservatory gutter cleaning Birmingham', category: 'Core & General', link: '/gutter-cleaning-birmingham/', badge: 'Location' },
  { id: 3, keyword: 'conservatory gutter cleaning West Midlands', category: 'Core & General', link: '/gutter-cleaning-westmidlands/', badge: 'Regional' },
  { id: 4, keyword: 'conservatory gutter cleaning near me', category: 'Core & General', link: '/gutter-cleaning-near-me/', badge: 'Popular' },
  { id: 5, keyword: 'conservatory roof and gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/', badge: 'Roof & Gutter' },
  { id: 6, keyword: 'conservatory gutter cleaners', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 7, keyword: 'conservatory guttering services', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 8, keyword: 'professional conservatory gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 9, keyword: 'local conservatory gutter cleaning', category: 'Core & General', link: '/gutter-cleaning-near-me/' },
  { id: 10, keyword: 'conservatory gutter unblocking', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 11, keyword: 'conservatory gutter clearance', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 12, keyword: 'glass conservatory gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 13, keyword: 'polycarbonate conservatory gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 14, keyword: 'conservatory box gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/', badge: 'Box Gutter' },
  { id: 15, keyword: 'conservatory gutter repair and clean', category: 'Core & General', link: '/services/gutter-repair/' },

  // Towns & Boroughs (16-35)
  { id: 16, keyword: 'conservatory gutter cleaning Solihull', category: 'Towns & Boroughs', link: '/gutter-cleaning-solihull/' },
  { id: 17, keyword: 'conservatory gutter cleaning Sutton Coldfield', category: 'Towns & Boroughs', link: '/gutter-cleaning-sutton-coldfield/' },
  { id: 18, keyword: 'conservatory gutter cleaning Wolverhampton', category: 'Towns & Boroughs', link: '/gutter-cleaning-wolverhampton/' },
  { id: 19, keyword: 'conservatory gutter cleaning Dudley', category: 'Towns & Boroughs', link: '/gutter-cleaning-dudley/' },
  { id: 20, keyword: 'conservatory gutter cleaning Walsall', category: 'Towns & Boroughs', link: '/gutter-cleaning-walsall/' },
  { id: 21, keyword: 'conservatory gutter cleaning Coventry', category: 'Towns & Boroughs', link: '/gutter-cleaning-coventry/' },
  { id: 22, keyword: 'conservatory gutter cleaning West Bromwich', category: 'Towns & Boroughs', link: '/gutter-cleaning-west-bromwich/' },
  { id: 23, keyword: 'conservatory gutter cleaning Halesowen', category: 'Towns & Boroughs', link: '/gutter-cleaning-halesowen/' },
  { id: 24, keyword: 'conservatory gutter cleaning Stourbridge', category: 'Towns & Boroughs', link: '/gutter-cleaning-stourbridge/' },
  { id: 25, keyword: 'conservatory gutter cleaning Smethwick', category: 'Towns & Boroughs', link: '/gutter-cleaning-smethwick/' },
  { id: 26, keyword: 'conservatory gutter cleaning Tamworth', category: 'Towns & Boroughs', link: '/gutter-cleaning-tamworth/' },
  { id: 27, keyword: 'conservatory gutter cleaning Bromsgrove', category: 'Towns & Boroughs', link: '/gutter-cleaning-bromsgrove/' },
  { id: 28, keyword: 'conservatory gutter cleaning Redditch', category: 'Towns & Boroughs', link: '/gutter-cleaning-redditch/' },
  { id: 29, keyword: 'conservatory gutter cleaning Kidderminster', category: 'Towns & Boroughs', link: '/gutter-cleaning-kidderminster/' },
  { id: 30, keyword: 'conservatory gutter cleaning Lichfield', category: 'Towns & Boroughs', link: '/gutter-cleaning-lichfield/' },
  { id: 31, keyword: 'conservatory gutter cleaning Cannock', category: 'Towns & Boroughs', link: '/gutter-cleaning-cannock/' },
  { id: 32, keyword: 'conservatory gutter cleaning Nuneaton', category: 'Towns & Boroughs', link: '/gutter-cleaning-nuneaton/' },
  { id: 33, keyword: 'conservatory gutter cleaning Kenilworth', category: 'Towns & Boroughs', link: '/gutter-cleaning-kenilworth/' },
  { id: 34, keyword: 'conservatory gutter cleaning Worcester', category: 'Towns & Boroughs', link: '/gutter-cleaning-worcester/' },
  { id: 35, keyword: 'conservatory gutter cleaning Evesham', category: 'Towns & Boroughs', link: '/gutter-cleaning-evesham/' },

  // Price & Quotes (36-50)
  { id: 36, keyword: 'conservatory gutter cleaning cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/', badge: 'Pricing' },
  { id: 37, keyword: 'conservatory gutter cleaning prices Birmingham', category: 'Price & Quotes', link: '/gutter-cleaning-prices/', badge: 'Pricing' },
  { id: 38, keyword: 'how much to clean conservatory gutters', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 39, keyword: 'conservatory roof and gutter clean cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 40, keyword: 'conservatory gutter cleaning quote', category: 'Price & Quotes', link: '/quote/', badge: 'Instant Quote' },
  { id: 41, keyword: 'conservatory box gutter leak repair cost', category: 'Price & Quotes', link: '/services/gutter-repair/' },
  { id: 42, keyword: 'cheap conservatory gutter cleaning near me', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 43, keyword: 'affordable conservatory gutter cleaners', category: 'Price & Quotes', link: '/services/gutter-cleaning/' },
  { id: 44, keyword: 'conservatory guttering maintenance cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 45, keyword: 'conservatory valet and gutter cleaning price', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 46, keyword: 'conservatory downpipe unblocking cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 47, keyword: 'upvc conservatory gutter cleaning prices', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 48, keyword: 'lean-to conservatory gutter clean cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 49, keyword: 'victorian conservatory gutter cleaning cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 50, keyword: 'conservatory gutter clearance quote online', category: 'Price & Quotes', link: '/quote/' },

  // Specialised & Structure Types (51-75)
  { id: 51, keyword: 'conservatory box gutter clearance', category: 'Structure & Types', link: '/services/gutter-cleaning/', badge: 'Box Gutter' },
  { id: 52, keyword: 'conservatory valley gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 53, keyword: 'lean-to conservatory gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 54, keyword: 'victorian conservatory gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 55, keyword: 'edwardian conservatory gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 56, keyword: 'p-shape conservatory gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 57, keyword: 'gable front conservatory gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 58, keyword: 'orangeries gutter cleaning Birmingham', category: 'Structure & Types', link: '/services/gutter-cleaning/', badge: 'Orangery' },
  { id: 59, keyword: 'sunroom gutter cleaning West Midlands', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 60, keyword: 'hard-to-reach conservatory gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/', badge: 'High Reach' },
  { id: 61, keyword: 'conservatory guttering leaking at joints', category: 'Structure & Types', link: '/services/gutter-repair/' },
  { id: 62, keyword: 'conservatory gutter seal replacement', category: 'Structure & Types', link: '/services/gutter-repair/' },
  { id: 63, keyword: 'conservatory downpipe clearing', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 64, keyword: 'conservatory fascia & gutter cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 65, keyword: 'conservatory roof finial & cresting clean', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 66, keyword: 'upvc conservatory gutter wash', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 67, keyword: 'conservatory gutter moss clearance', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 68, keyword: 'conservatory gutter silt & leaf removal', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 69, keyword: 'conservatory overflow fix Birmingham', category: 'Structure & Types', link: '/blog/overflowing-gutters-fix/' },
  { id: 70, keyword: 'conservatory box gutter lining repair', category: 'Structure & Types', link: '/services/gutter-repair/' },
  { id: 71, keyword: 'conservatory gutter guard installation', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 72, keyword: 'conservatory gutter bracket repair', category: 'Structure & Types', link: '/services/gutter-repair/' },
  { id: 73, keyword: 'conservatory rainwater hopper cleaning', category: 'Structure & Types', link: '/services/gutter-cleaning/' },
  { id: 74, keyword: 'internal conservatory gutter leak fix', category: 'Structure & Types', link: '/services/gutter-repair/' },
  { id: 75, keyword: 'conservatory roof gutter maintenance plan', category: 'Structure & Types', link: '/services/gutter-cleaning/' },

  // Methods & Safety (76-100)
  { id: 76, keyword: 'conservatory gutter cleaning without climbing on roof', category: 'Methods & Safety', link: '/services/gutter-cleaning/', badge: 'No Ladders' },
  { id: 77, keyword: 'skyVac conservatory gutter cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/', badge: 'skyVac' },
  { id: 78, keyword: 'pure water conservatory gutter cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 79, keyword: 'long reach pole conservatory gutter cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 80, keyword: 'camera inspection conservatory gutters', category: 'Methods & Safety', link: '/services/gutter-cleaning/', badge: 'Camera Inspection' },
  { id: 81, keyword: 'safe conservatory gutter cleaning Birmingham', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 82, keyword: 'conservatory gutter vacuuming system', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 83, keyword: 'non-abrasive conservatory gutter cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 84, keyword: 'conservatory gutter cleaning before and after photos', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 85, keyword: 'annual conservatory gutter maintenance', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 86, keyword: 'autumn conservatory leaf clearance', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 87, keyword: 'spring conservatory gutter wash', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 88, keyword: 'conservatory gutter moss scraper', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 89, keyword: 'conservatory box gutter unblocking tool', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 90, keyword: 'insured conservatory gutter cleaners', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 91, keyword: 'same-week conservatory gutter cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 92, keyword: 'residential conservatory gutter cleaners', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 93, keyword: 'conservatory rainwater drainage check', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 94, keyword: 'conservatory downpipe flush service', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 95, keyword: 'conservatory roof gutter soft washing', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 96, keyword: 'conservatory uPVC restoration & gutter clean', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 97, keyword: 'conservatory gutter cleaning quote West Midlands', category: 'Methods & Safety', link: '/quote/' },
  { id: 98, keyword: 'conservatory gutter maintenance specialists', category: 'Methods & Safety', link: '/services/gutter-cleaning/' },
  { id: 99, keyword: 'best conservatory gutter cleaners Birmingham', category: 'Methods & Safety', link: '/services/gutter-cleaning/', badge: 'Top Rated' },
  { id: 100, keyword: 'WOW Gutters conservatory cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/', badge: 'WOW Quality' }
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Core & General': <Sun className="w-3.5 h-3.5" />,
  'Towns & Boroughs': <MapPin className="w-3.5 h-3.5" />,
  'Price & Quotes': <Tag className="w-3.5 h-3.5" />,
  'Structure & Types': <Home className="w-3.5 h-3.5" />,
  'Methods & Safety': <Shield className="w-3.5 h-3.5" />,
};

interface ComponentProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showCta?: boolean;
}

export default function ConservatoryGutterCleaningKeywords({
  title = 'Conservatory Gutter Cleaning Search Directory',
  subtitle = 'Browse our comprehensive list of conservatory gutter cleaning, box gutter clearing, and roofline maintenance services across Birmingham & the West Midlands.',
  className = '',
  showCta = true,
}: ComponentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(CONSERVATORY_GUTTER_CLEANING_KEYWORDS.map(item => item.category)));
    return ['All', ...cats];
  }, []);

  const filteredKeywords = useMemo(() => {
    return CONSERVATORY_GUTTER_CLEANING_KEYWORDS.filter(item => {
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
            <span>Conservatory Gutter 100-Keyword Directory</span>
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
                placeholder="Search conservatory keywords (e.g. box gutter, cost, lean-to)..."
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
              Showing <span className="text-emerald-600 font-bold">{filteredKeywords.length}</span> of {CONSERVATORY_GUTTER_CLEANING_KEYWORDS.length} keywords
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? CONSERVATORY_GUTTER_CLEANING_KEYWORDS.length : CONSERVATORY_GUTTER_CLEANING_KEYWORDS.filter((k) => k.category === cat).length;
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
                <CheckCircle2 className="w-4 h-4" /> Professional Conservatory Gutter &amp; Roofline Cleaning
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need Conservatory Gutter or Box Gutter Clearing?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Ground-based high-reach vacuum system — zero climbing on delicate glass or polycarbonate panels. Free wireless camera inspection before &amp; after.
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
