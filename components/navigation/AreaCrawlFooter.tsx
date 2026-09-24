'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, CheckCircle2, Wrench, Sparkles, 
  Home, CloudRain, Award, ArrowRight, Camera, Gauge, Calculator, Star
} from 'lucide-react';
import { colors } from '@/constants/colors';
import { AREA_SERVICE_META, type AreaServiceKind } from '@/lib/areaServiceMeta';
import { getAreaData } from '@/lib/getAreaData';

function formatTopicName(slug: string): string {
  if (!slug) return 'Birmingham & the West Midlands';
  const clean = slug
    .replace(/^gutter-cleaning-/i, '')
    .replace(/^roof-cleaning-/i, '')
    .replace(/^gutter-repair-/i, '')
    .replace(/^gutter-inspection-/i, '')
    .replace(/^roof-inspection-/i, '')
    .replace(/^exterior-upvc-cleaning-/i, '')
    .replace(/^gutter-installation-/i, '');

  const area = getAreaData(clean);
  if (area?.name) return area.name;

  return clean
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function hashSlug(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const ARCHITECTURE_PARAGRAPHS = [
  (name: string) => `Properties across ${name} encompass a distinctive architectural heritage, from traditional brick-built Victorian and Edwardian terraces to 1930s bay-fronted family homes and modern housing estates. Many of these properties feature high-eave rooflines, narrow side passages, and shared boundary wall gutter runs that require specialized attention to prevent water infiltration.`,
  (name: string) => `Residential and commercial buildings throughout ${name} require dedicated drainage maintenance due to their varied roofline profiles. From steeply pitched tiled roofs to deep box gutters and multi-storey eaves, keeping rainwater channels free from silt and blockages is essential for preserving internal wall structures and ceilings.`,
  (name: string) => `In ${name}, local homes and commercial premises face demanding weather conditions. Older properties with cast-iron or pressed-steel rainwater systems benefit from non-invasive clearing that protects mounting brackets, while modern uPVC guttering requires routine silt removal to preserve watertight rubber seals.`,
  (name: string) => `The diverse property portfolio in ${name}—spanning detached suburban homes, period townhouses, and commercial units—demands an adaptable cleaning approach. Gutter runs located above conservatories, rear extensions, and lean-to porches require specialized high-reach clearance to avoid ladder contact with fragile glass.`,
];

const WEATHER_PARAGRAPHS = [
  (name: string) => `The regional West Midlands climate brings substantial seasonal rainfall, heavy autumn leaf fall from local tree canopies, and rapid moss colonization on roof slopes. In ${name}, neglected gutters quickly accumulate dense wet sludge, pine needles, and silt, forcing overflowing rainwater down exterior brickwork and causing damp penetration.`,
  (name: string) => `During sudden heavy downpours in ${name}, a single blocked downpipe outlet can cause rainwater to cascade over fascias within minutes. In freezing winter periods, trapped moisture expands into ice blocks, pulling brackets away from rotten fascia boards and leading to cracked union joints.`,
  (name: string) => `Roof moss accumulation is the primary contributor to recurring gutter choke points in ${name}. Rainwater washes dislodged moss clumps straight into downpipe swan-necks, causing compacted plugs that prevent natural drainage and saturate foundation masonry.`,
  (name: string) => `Persistent moisture throughout ${name} encourages weed, grass, and dandelion roots to take hold in accumulated gutter silt. These root networks trap further debris, create heavy sagging points along the gutter run, and accelerate joint leaks.`,
];

const METHODOLOGY_PARAGRAPHS = [
  (name: string) => `WOW Gutters Ltd uses commercial-grade, ground-based vacuum systems fitted with ultra-light carbon-fibre poles. This enables our experienced technicians in ${name} to clear gutters up to four storeys high completely from the ground—eliminating ladder damage to your fascias, walls, and delicate conservatory roofs.`,
  (name: string) => `Our high-suction vacuum clearing removes wet sludge, decomposing vegetation, and stubborn downpipe blockages across ${name}. Every service includes high-definition camera surveys before and after cleaning so you have clear visual proof that your gutter channels are completely clear.`,
  (name: string) => `Safety, precision, and thoroughness define our approach in ${name}. Operating from ground level allows us to access awkward angles over conservatories, single-storey extensions, and narrow side passages where traditional ladders cannot be safely placed.`,
  (name: string) => `Every project in ${name} concludes with comprehensive water flow testing to verify that downpipes and outlets discharge freely into ground soakaways, ensuring your home remains fully protected against water ingress.`,
];

export default function AreaCrawlFooter({
  currentSlug = 'birmingham',
  serviceKind = 'gutter',
}: {
  currentSlug?: string;
  serviceKind?: AreaServiceKind;
}) {
  const meta = AREA_SERVICE_META[serviceKind];
  const topicName = formatTopicName(currentSlug);
  const seed = hashSlug(currentSlug + serviceKind);

  const archText = ARCHITECTURE_PARAGRAPHS[seed % ARCHITECTURE_PARAGRAPHS.length](topicName);
  const weatherText = WEATHER_PARAGRAPHS[(seed + 1) % WEATHER_PARAGRAPHS.length](topicName);
  const methodText = METHODOLOGY_PARAGRAPHS[(seed + 2) % METHODOLOGY_PARAGRAPHS.length](topicName);

  return (
    <section className="py-16 md:py-20 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-100 text-emerald-800 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Local Property Maintenance &amp; Roofline Guide
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Professional Exterior Care &amp; Gutter Protection for {topicName}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Expert property insights, seasonal maintenance guidance, and preventative roofline drainage solutions from WOW Gutters Ltd.
          </p>
        </div>

        {/* 3-Column Editorial Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Local Architecture */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 font-bold">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Property Architecture &amp; Rooflines
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {archText}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Whether your roofline features modern deep-flow uPVC or period cast profiles, maintaining proper fall and watertight joints is vital. If your channels are suffering from dripping seams, explore our fast on-site <Link href="/services/gutter-repairs/" className="text-emerald-700 font-semibold hover:underline">gutter repairs &amp; joint sealing</Link> or consider a complete <Link href="/services/gutter-installation/" className="text-emerald-700 font-semibold hover:underline">gutter replacement &amp; installation</Link>.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link href="/services/gutter-repairs/" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline">
                Explore Gutter Repairs →
              </Link>
            </div>
          </div>

          {/* Card 2: Weather & Moss Risk */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 font-bold">
                <CloudRain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Seasonal Weather &amp; Blockage Risks
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {weatherText}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Read our detailed guide on <Link href="/why-is-my-gutter-overflowing" className="text-emerald-700 font-semibold hover:underline">why gutters overflow and how to fix them</Link>. If moss from roof tiles is continuously filling your channels, pair your clean with our gentle <Link href="/services/roof-cleaning/" className="text-emerald-700 font-semibold hover:underline">roof moss removal &amp; biocide treatment</Link> to prevent recurring blockages.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link href="/services/roof-cleaning/" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline">
                Explore Roof Moss Removal →
              </Link>
            </div>
          </div>

          {/* Card 3: Advanced Cleaning Methods */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                High-Reach Vacuum Methodology
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {methodText}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Learn more about our advanced <Link href="/sky-vac-gutter-cleaning" className="text-emerald-700 font-semibold hover:underline">SkyVac ground-level vacuum cleaning</Link> system, calculate instant pricing with our <Link href="/gutter-cleaning-calculator/" className="text-emerald-700 font-semibold hover:underline">online gutter price calculator</Link>, or book a zero-cost <Link href="/services/gutter-inspection/" className="text-emerald-700 font-semibold hover:underline">camera gutter inspection</Link>.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <Link href="/gutter-cleaning-calculator/" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline">
                Use Price Calculator →
              </Link>
            </div>
          </div>

        </div>

        {/* 4 Feature Highlights Grid with Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <Link href="/services/gutter-inspection/" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition-all flex items-start gap-3 group">
            <Camera className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Before &amp; After HD Photos</p>
              <p className="text-xs text-slate-500 mt-0.5">Camera verification provided on every clean</p>
            </div>
          </Link>

          <Link href="/downpipe-unblocking" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition-all flex items-start gap-3 group">
            <Gauge className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Flow-Tested Drainage</p>
              <p className="text-xs text-slate-500 mt-0.5">Downpipes unblocked and water tested</p>
            </div>
          </Link>

          <Link href="/reviews/" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition-all flex items-start gap-3 group">
            <Star className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">4.9★ Rated on Google</p>
              <p className="text-xs text-slate-500 mt-0.5">£10M liability insurance &amp; verified reviews</p>
            </div>
          </Link>

          <Link href="/gutter-cleaning-prices/" className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition-all flex items-start gap-3 group">
            <Calculator className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Fixed Upfront Pricing</p>
              <p className="text-xs text-slate-500 mt-0.5">Transparent rates with no call-out fee</p>
            </div>
          </Link>

        </div>

        {/* Clean Contextual Resource Navigation Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 shadow-sm">
          <span className="font-bold text-slate-900">Explore Essential Services &amp; Guides:</span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <Link href="/services/gutter-cleaning/" className="text-emerald-700 hover:underline font-semibold">Gutter Cleaning</Link>
            <Link href="/services/gutter-repairs/" className="text-emerald-700 hover:underline font-semibold">Gutter Repairs</Link>
            <Link href="/services/roof-cleaning/" className="text-emerald-700 hover:underline font-semibold">Roof Moss Removal</Link>
            <Link href="/services/upvc-cleaning/" className="text-emerald-700 hover:underline font-semibold">uPVC Cleaning</Link>
            <Link href="/services/conservatory" className="text-emerald-700 hover:underline font-semibold">Conservatories</Link>
            <Link href="/services/commercial-gutter-cleaning" className="text-emerald-700 hover:underline font-semibold">Commercial</Link>
            <Link href="/blog/gutter-clean-duration" className="text-emerald-700 hover:underline font-semibold">Clean Duration Guide</Link>
            <Link href="/gutter-cleaning-calculator/" className="text-emerald-700 hover:underline font-semibold">Price Calculator</Link>
            <Link href="/quote/" className="text-emerald-700 hover:underline font-bold">Get a Quote →</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
