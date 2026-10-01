'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Tag, CheckCircle2, Shield, Calendar, AlertCircle, Home, Phone, ArrowRight, Sparkles, Layers } from 'lucide-react';

export interface KeywordItem {
  id: number;
  keyword: string;
  category: string;
  link?: string;
  badge?: string;
}

export const EXTERIOR_UPVC_GUTTER_CLEANING_KEYWORDS: KeywordItem[] = [
  // Core & General (1-15)
  { id: 1, keyword: 'exterior upvc gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/', badge: 'Core' },
  { id: 2, keyword: 'upvc gutter cleaning Birmingham', category: 'Core & General', link: '/gutter-cleaning-birmingham/', badge: 'Location' },
  { id: 3, keyword: 'exterior upvc wash West Midlands', category: 'Core & General', link: '/gutter-cleaning-westmidlands/', badge: 'Regional' },
  { id: 4, keyword: 'upvc fascia soffit and gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/', badge: 'Popular' },
  { id: 5, keyword: 'exterior gutter washing near me', category: 'Core & General', link: '/gutter-cleaning-near-me/' },
  { id: 6, keyword: 'upvc roofline cleaning specialists', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 7, keyword: 'exterior gutter cleaning services', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 8, keyword: 'upvc gutter brightening service', category: 'Core & General', link: '/services/gutter-cleaning/', badge: 'Brightening' },
  { id: 9, keyword: 'white upvc gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 10, keyword: 'black upvc gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 11, keyword: 'anthracite grey upvc gutter cleaning', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 12, keyword: 'upvc gutter stain removal', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 13, keyword: 'exterior gutter restoration', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 14, keyword: 'upvc roofline soft wash Birmingham', category: 'Core & General', link: '/services/gutter-cleaning/' },
  { id: 15, keyword: 'exterior plastic guttering wash', category: 'Core & General', link: '/services/gutter-cleaning/' },

  // Towns & Boroughs (16-35)
  { id: 16, keyword: 'upvc gutter cleaning Solihull', category: 'Towns & Boroughs', link: '/gutter-cleaning-solihull/' },
  { id: 17, keyword: 'upvc gutter cleaning Sutton Coldfield', category: 'Towns & Boroughs', link: '/gutter-cleaning-sutton-coldfield/' },
  { id: 18, keyword: 'upvc gutter cleaning Wolverhampton', category: 'Towns & Boroughs', link: '/gutter-cleaning-wolverhampton/' },
  { id: 19, keyword: 'upvc gutter cleaning Dudley', category: 'Towns & Boroughs', link: '/gutter-cleaning-dudley/' },
  { id: 20, keyword: 'upvc gutter cleaning Walsall', category: 'Towns & Boroughs', link: '/gutter-cleaning-walsall/' },
  { id: 21, keyword: 'upvc gutter cleaning Coventry', category: 'Towns & Boroughs', link: '/gutter-cleaning-coventry/' },
  { id: 22, keyword: 'upvc gutter cleaning West Bromwich', category: 'Towns & Boroughs', link: '/gutter-cleaning-west-bromwich/' },
  { id: 23, keyword: 'upvc gutter cleaning Halesowen', category: 'Towns & Boroughs', link: '/gutter-cleaning-halesowen/' },
  { id: 24, keyword: 'upvc gutter cleaning Stourbridge', category: 'Towns & Boroughs', link: '/gutter-cleaning-stourbridge/' },
  { id: 25, keyword: 'upvc gutter cleaning Smethwick', category: 'Towns & Boroughs', link: '/gutter-cleaning-smethwick/' },
  { id: 26, keyword: 'upvc gutter cleaning Tamworth', category: 'Towns & Boroughs', link: '/gutter-cleaning-tamworth/' },
  { id: 27, keyword: 'upvc gutter cleaning Bromsgrove', category: 'Towns & Boroughs', link: '/gutter-cleaning-bromsgrove/' },
  { id: 28, keyword: 'upvc gutter cleaning Redditch', category: 'Towns & Boroughs', link: '/gutter-cleaning-redditch/' },
  { id: 29, keyword: 'upvc gutter cleaning Kidderminster', category: 'Towns & Boroughs', link: '/gutter-cleaning-kidderminster/' },
  { id: 30, keyword: 'upvc gutter cleaning Lichfield', category: 'Towns & Boroughs', link: '/gutter-cleaning-lichfield/' },
  { id: 31, keyword: 'upvc gutter cleaning Cannock', category: 'Towns & Boroughs', link: '/gutter-cleaning-cannock/' },
  { id: 32, keyword: 'upvc gutter cleaning Nuneaton', category: 'Towns & Boroughs', link: '/gutter-cleaning-nuneaton/' },
  { id: 33, keyword: 'upvc gutter cleaning Kenilworth', category: 'Towns & Boroughs', link: '/gutter-cleaning-kenilworth/' },
  { id: 34, keyword: 'upvc gutter cleaning Worcester', category: 'Towns & Boroughs', link: '/gutter-cleaning-worcester/' },
  { id: 35, keyword: 'upvc gutter cleaning Evesham', category: 'Towns & Boroughs', link: '/gutter-cleaning-evesham/' },

  // Price & Quotes (36-50)
  { id: 36, keyword: 'exterior upvc gutter cleaning cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/', badge: 'Pricing' },
  { id: 37, keyword: 'upvc gutter and fascia cleaning prices', category: 'Price & Quotes', link: '/gutter-cleaning-prices/', badge: 'Pricing' },
  { id: 38, keyword: 'exterior gutter wash quote Birmingham', category: 'Price & Quotes', link: '/quote/', badge: 'Instant Quote' },
  { id: 39, keyword: 'how much to clean upvc gutters', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 40, keyword: 'upvc roofline cleaning cost per metre', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 41, keyword: 'cheap upvc gutter washing near me', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 42, keyword: 'affordable exterior upvc cleaners', category: 'Price & Quotes', link: '/services/gutter-cleaning/' },
  { id: 43, keyword: 'upvc soffit fascia and gutter quote', category: 'Price & Quotes', link: '/quote/' },
  { id: 44, keyword: 'exterior plastic guttering wash price', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 45, keyword: 'upvc gutter restoration cost', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 46, keyword: 'full roofline & upvc wash price Birmingham', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 47, keyword: 'upvc gutter cleaning cost semi-detached', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 48, keyword: 'upvc gutter cleaning cost detached house', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 49, keyword: 'upvc gutter cleaning cost terraced house', category: 'Price & Quotes', link: '/gutter-cleaning-prices/' },
  { id: 50, keyword: 'exterior upvc cleaning quote online', category: 'Price & Quotes', link: '/quote/' },

  // Roofline & Components (51-75)
  { id: 51, keyword: 'upvc fascia board cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/', badge: 'Fascias' },
  { id: 52, keyword: 'upvc soffit board cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/', badge: 'Soffits' },
  { id: 53, keyword: 'upvc downpipe washing', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 54, keyword: 'upvc bargeboard cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 55, keyword: 'upvc cladding and gutter washing', category: 'Roofline Components', link: '/services/gutter-cleaning/', badge: 'Cladding' },
  { id: 56, keyword: 'dormer window upvc gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 57, keyword: 'upvc porch gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 58, keyword: 'upvc garage gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 59, keyword: 'upvc bay window gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 60, keyword: 'upvc guttering joint cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 61, keyword: 'upvc hopper head cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 62, keyword: 'upvc gutter union bracket wash', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 63, keyword: 'upvc gutter end cap cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 64, keyword: 'upvc apex roofline wash', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 65, keyword: 'upvc Tudor board and gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 66, keyword: 'deep clean upvc fascia and soffits', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 67, keyword: 'upvc roofline algae removal', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 68, keyword: 'upvc roofline grime & dirt wash', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 69, keyword: 'upvc black streak removal from gutters', category: 'Roofline Components', link: '/services/gutter-cleaning/', badge: 'Streak Removal' },
  { id: 70, keyword: 'upvc green algae treatment roofline', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 71, keyword: 'upvc gutter mould removal', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 72, keyword: 'upvc gutter oxidation cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 73, keyword: 'wood-effect upvc gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 74, keyword: 'rosewood upvc gutter wash', category: 'Roofline Components', link: '/services/gutter-cleaning/' },
  { id: 75, keyword: 'golden oak upvc gutter cleaning', category: 'Roofline Components', link: '/services/gutter-cleaning/' },

  // Methods & Finishes (76-100)
  { id: 76, keyword: 'pure water upvc gutter wash', category: 'Methods & Finishes', link: '/services/gutter-cleaning/', badge: 'Pure Water' },
  { id: 77, keyword: 'water fed pole upvc gutter cleaning', category: 'Methods & Safety', link: '/services/gutter-cleaning/', badge: 'Reach Pole' },
  { id: 78, keyword: 'soft wash chemical treatment upvc gutters', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 79, keyword: 'non-abrasive upvc gutter detergent wash', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 80, keyword: 'high pressure vs soft wash upvc gutters', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 81, keyword: 'ground-based upvc exterior washing', category: 'Methods & Finishes', link: '/services/gutter-cleaning/', badge: 'No Ladders' },
  { id: 82, keyword: 'upvc gutter cleaning without ladders', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 83, keyword: 'upvc roofline detail clean Birmingham', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 84, keyword: 'residential upvc exterior cleaning company', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 85, keyword: 'commercial upvc gutter & fascia wash', category: 'Methods & Finishes', link: '/services/commercial-gutter-cleaning/' },
  { id: 86, keyword: 'upvc guttering seasonal wash', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 87, keyword: 'upvc guttering inspection and wash', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 88, keyword: 'upvc gutter cleaning service guarantee', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 89, keyword: 'insured upvc gutter washing Birmingham', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 90, keyword: 'upvc gutter streak-free finish', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 91, keyword: 'upvc roofline glow restoration', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 92, keyword: 'upvc guttering traffic film removal', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 93, keyword: 'upvc guttering lichen treatment', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 94, keyword: 'upvc guttering spider web removal', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 95, keyword: 'upvc guttering before & after photos', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 96, keyword: 'upvc guttering deep clean West Midlands', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 97, keyword: 'upvc guttering maintenance Birmingham', category: 'Methods & Finishes', link: '/gutter-cleaning-birmingham/' },
  { id: 98, keyword: 'upvc exterior cleaning contractors', category: 'Methods & Finishes', link: '/services/gutter-cleaning/' },
  { id: 99, keyword: 'top rated upvc gutter cleaning Birmingham', category: 'Methods & Finishes', link: '/services/gutter-cleaning/', badge: 'Top Rated' },
  { id: 100, keyword: 'WOW Gutters upvc exterior washing', category: 'Methods & Finishes', link: '/services/gutter-cleaning/', badge: 'WOW Quality' }
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Core & General': <Layers className="w-3.5 h-3.5" />,
  'Towns & Boroughs': <MapPin className="w-3.5 h-3.5" />,
  'Price & Quotes': <Tag className="w-3.5 h-3.5" />,
  'Roofline Components': <Home className="w-3.5 h-3.5" />,
  'Methods & Finishes': <Shield className="w-3.5 h-3.5" />,
};

interface ComponentProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showCta?: boolean;
}

export default function ExteriorUpvcGutterCleaningKeywords({
  title = 'Exterior uPVC Gutter Cleaning Search Directory',
  subtitle = 'Browse our comprehensive list of exterior uPVC gutter cleaning, fascia & soffit washing, and roofline restoration services across Birmingham & the West Midlands.',
  className = '',
  showCta = true,
}: ComponentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(EXTERIOR_UPVC_GUTTER_CLEANING_KEYWORDS.map(item => item.category)));
    return ['All', ...cats];
  }, []);

  const filteredKeywords = useMemo(() => {
    return EXTERIOR_UPVC_GUTTER_CLEANING_KEYWORDS.filter(item => {
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
            <span>Exterior uPVC 100-Keyword Directory</span>
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
                placeholder="Search uPVC keywords (e.g. fascia, soffit, streak removal)..."
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
              Showing <span className="text-emerald-600 font-bold">{filteredKeywords.length}</span> of {EXTERIOR_UPVC_GUTTER_CLEANING_KEYWORDS.length} keywords
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
            {categories.map((cat) => {
              const count = cat === 'All' ? EXTERIOR_UPVC_GUTTER_CLEANING_KEYWORDS.length : EXTERIOR_UPVC_GUTTER_CLEANING_KEYWORDS.filter((k) => k.category === cat).length;
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
                <CheckCircle2 className="w-4 h-4" /> Professional Exterior uPVC &amp; Roofline Cleaning
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Restore Your uPVC Fascias, Soffits &amp; Gutters
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Pure water reach-pole system removes green algae, black streaks, traffic film, and dirt from uPVC guttering. Restore kerb appeal fast.
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
