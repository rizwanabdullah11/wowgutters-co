'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Before & After' | 'Residential' | 'Commercial' | 'Roof & UPVC' | 'Heritage & Period';
  location?: string;
  tag?: string;
}

export const galleryItems: GalleryItem[] = [
  // ── Before & After ────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Gutter Clearance - West Midlands Home',
    description: 'Deep compacted organic silt, weeds, and moss completely extracted down to the channel floor.',
    image: '/blog-images/hiring-gutter-cleaning-westmidlands/hiring-gutter-cleaning-westmidlands-after.png',
    category: 'Before & After',
    location: 'West Midlands',
    tag: 'After'
  },
  {
    id: 2,
    title: 'Heavily Blocked Gutter Channel',
    description: 'Severe weed and sediment blockage restricting rainwater discharge before extraction.',
    image: '/blog-images/hiring-gutter-cleaning-westmidlands/hiring-gutter-cleaning-westmidlands-before.png',
    category: 'Before & After',
    location: 'West Midlands',
    tag: 'Before'
  },
  {
    id: 3,
    title: 'Walsall Gutter Clearance - After',
    description: 'Channel floor cleared and downpipe flow tested using ground-level high-reach vacuum suction.',
    image: '/gutter-cleaning-walsall-after.png',
    category: 'Before & After',
    location: 'Walsall',
    tag: 'After'
  },
  {
    id: 4,
    title: 'Walsall Gutter Clearance - Before',
    description: 'Heavy silt and moss buildup threatening overflow onto external brickwork and foundations.',
    image: '/gutter-cleaning-walsall-before.png',
    category: 'Before & After',
    location: 'Walsall',
    tag: 'Before'
  },
  {
    id: 5,
    title: 'Harborne Residential Gutter - After',
    description: 'Complete removal of dense tree debris with joints and brackets verified in pristine condition.',
    image: '/harborne-gutter-cleaning-after.png',
    category: 'Before & After',
    location: 'Harborne',
    tag: 'After'
  },
  {
    id: 6,
    title: 'Harborne Residential Gutter - Before',
    description: 'Severe seasonal leaf fall and moss blocking the primary downpipe outlet.',
    image: '/harborne-gutter-cleaning-before.png',
    category: 'Before & After',
    location: 'Harborne',
    tag: 'Before'
  },
  {
    id: 7,
    title: 'Solihull Gutter Channel - After',
    description: 'Spotless UPVC channel restored to maximum capacity with unrestricted flow lines.',
    image: '/solihull-gutter-cleaning-after.png',
    category: 'Before & After',
    location: 'Solihull',
    tag: 'After'
  },
  {
    id: 8,
    title: 'Solihull Gutter Channel - Before',
    description: 'Soil, moss, and decaying organic debris choking the full length of the gutter run.',
    image: '/solihull-gutter-cleaning-before.png',
    category: 'Before & After',
    location: 'Solihull',
    tag: 'Before'
  },
  {
    id: 9,
    title: 'Acocks Green Gutter Clean - After',
    description: 'Vacuum extraction completed with before-and-after photo confirmation delivered to customer.',
    image: '/gutter-cleaning-acocks-green-after.png',
    category: 'Before & After',
    location: 'Acocks Green',
    tag: 'After'
  },
  {
    id: 10,
    title: 'Acocks Green Gutter Clean - Before',
    description: 'Overflowing gutters showing weed growth and standing water in channel.',
    image: '/gutter-cleaning-acocks-green-before.png',
    category: 'Before & After',
    location: 'Acocks Green',
    tag: 'Before'
  },
  {
    id: 11,
    title: 'Bartley Green Gutter Clean - After',
    description: 'Clean channel floor with outlets cleared and checked for free rainwater flow.',
    image: '/gutter-ceaning-bartley-green-after.png',
    category: 'Before & After',
    location: 'Bartley Green',
    tag: 'After'
  },
  {
    id: 12,
    title: 'Bartley Green Gutter Clean - Before',
    description: 'Full blockage along roofline causing water pooling behind fascia board.',
    image: '/gutter-ceaning-bartley-green-before.png',
    category: 'Before & After',
    location: 'Bartley Green',
    tag: 'Before'
  },
  {
    id: 13,
    title: 'Selly Oak Property Clean - After',
    description: 'Terraced house guttering fully cleared and structural alignment checked from ground.',
    image: '/selly-oak-gutter-cleaning-after.png',
    category: 'Before & After',
    location: 'Selly Oak',
    tag: 'After'
  },
  {
    id: 14,
    title: 'Selly Oak Property Clean - Before',
    description: 'Congested gutter channel with heavy debris causing eaves damp risks.',
    image: '/selly-oak-gutter-cleaning-before.png',
    category: 'Before & After',
    location: 'Selly Oak',
    tag: 'Before'
  },
  {
    id: 15,
    title: 'Coventry Gutter Clearance - After',
    description: 'Full-depth vacuum extraction leaving zero mess on surrounding ground or driveways.',
    image: '/gutter-cleaning-coventry-after.png',
    category: 'Before & After',
    location: 'Coventry',
    tag: 'After'
  },
  {
    id: 16,
    title: 'Coventry Gutter Clearance - Before',
    description: 'Downpipe junction backed up with moss clumps dislodged from the main roof tiles.',
    image: '/gutter-cleaning-coventry-before.png',
    category: 'Before & After',
    location: 'Coventry',
    tag: 'Before'
  },
  {
    id: 17,
    title: 'Wolverhampton Gutter Clearance - After',
    description: 'Restored drainage lines on detached property with overhanging tree cover.',
    image: '/wolverhampton-gutter-cleaning-after.png',
    category: 'Before & After',
    location: 'Wolverhampton',
    tag: 'After'
  },
  {
    id: 18,
    title: 'Wolverhampton Gutter Clearance - Before',
    description: 'Heavy seasonal organic sludge putting structural weight on supporting brackets.',
    image: '/wolverhampton-gutter-cleaning-before.png',
    category: 'Before & After',
    location: 'Wolverhampton',
    tag: 'Before'
  },
  {
    id: 19,
    title: 'West Midlands Dual Transformation',
    description: 'Side-by-side verification showing full extraction of dense rooted vegetation.',
    image: '/westmidlands-before-after.png',
    category: 'Before & After',
    location: 'West Midlands',
    tag: 'Before & After'
  },

  // ── Heritage & Period Properties ──────────────────────────────────────────
  {
    id: 20,
    title: 'Victorian Cast Iron System - After',
    description: 'Heritage cast iron guttering cleaned to the channel floor without abrasive damage to original seals.',
    image: '/blog-images/victorian-gutter-cleaning/victorian-gutter-cleaning-after.png',
    category: 'Heritage & Period',
    location: 'Bournville',
    tag: 'After'
  },
  {
    id: 21,
    title: 'Victorian Cast Iron System - Before',
    description: 'Heavy mud and organic buildup placing extreme stress on period cast iron bracket fixings.',
    image: '/blog-images/victorian-gutter-cleaning/victorian-gutter-cleaning-before.png',
    category: 'Heritage & Period',
    location: 'Bournville',
    tag: 'Before'
  },
  {
    id: 22,
    title: 'Victorian Property Roofline Clearance',
    description: 'Ground-level vacuum reach safely maintaining historic fascias and decorative mouldings without ladder contact.',
    image: '/blog-images/victorian-gutter-cleaning/victorian-gutter-cleaning-hero.png',
    category: 'Heritage & Period',
    location: 'Edgbaston',
    tag: 'In Action'
  },

  // ── Residential Gutter Cleaning ───────────────────────────────────────────
  {
    id: 23,
    title: 'High-Reach Vacuum Cleaning on Semi-Detached Home',
    description: 'Industrial-grade suction reaching gutters over conservatories and extensions safely from the ground.',
    image: '/blog-images/hiring-gutter-cleaning-westmidlands/hiring-gutter-cleaning-westmidlands-hero.png',
    category: 'Residential',
    location: 'Solihull',
    tag: 'In Action'
  },
  {
    id: 24,
    title: 'Ground-Based Gutter Maintenance System',
    description: 'Technician operating high-flow vacuum system with wireless camera guidance for precision clearance.',
    image: '/gutter-cleaning.jpeg',
    category: 'Residential',
    location: 'Birmingham',
    tag: 'Equipment'
  },
  {
    id: 25,
    title: 'Two-Storey Residential Gutter Clearance',
    description: 'Safe clearance up to 40ft without setting ladders against walls, windows, or painted render.',
    image: '/B30-gutter-cleaning-hero.png',
    category: 'Residential',
    location: 'Kings Norton',
    tag: 'In Action'
  },
  {
    id: 26,
    title: 'Canopy & Tree Cover Clearance Project',
    description: 'Extraction of fine silt and pine needles that typical scooping methods leave behind on the channel floor.',
    image: '/blog-images/tree-cover-gutter-cleaning/tree-cover-gutter-cleaning-hero.png',
    category: 'Residential',
    location: 'Moseley',
    tag: 'In Action'
  },
  {
    id: 27,
    title: 'Seasonal Gutter Health Inspection',
    description: 'Comprehensive assessment of fall angle, joint seals, and downpipe outlets.',
    image: '/blog-images/summer-gutter-inspection/summer-gutter-inspection-hero.png',
    category: 'Residential',
    location: 'Sutton Coldfield',
    tag: 'Inspection'
  },

  // ── Commercial & Flat Roof ────────────────────────────────────────────────
  {
    id: 28,
    title: 'Commercial Box Gutter Clearance - After',
    description: 'Industrial property drainage run cleared to prevent internal warehouse leaks and stock damage.',
    image: '/blog-images/flat-roof-cleaning/flat-roof-cleaning-after.png',
    category: 'Commercial',
    location: 'Nechells Industrial Estate',
    tag: 'After'
  },
  {
    id: 29,
    title: 'Commercial Box Gutter Clearance - Before',
    description: 'Compacted industrial dust, debris, and moss obstructing commercial rainwater drainage.',
    image: '/blog-images/flat-roof-cleaning/flat-roof-cleaning-before.png',
    category: 'Commercial',
    location: 'Nechells Industrial Estate',
    tag: 'Before'
  },
  {
    id: 30,
    title: 'Commercial Gutter & Parapet Assessment',
    description: 'Ground-based vacuum maintenance for business premises, industrial units, and office blocks.',
    image: '/blog-images/flat-roof-cleaning/flat-roof-cleaning-hero.png',
    category: 'Commercial',
    location: 'Birmingham Commercial Zone',
    tag: 'Commercial'
  },
  {
    id: 31,
    title: 'Nechells Commercial Unit - After',
    description: 'Cleaned box gutter and high-capacity drainage ready for heavy rainfall.',
    image: '/nechells-gutter-cleaning-after.png',
    category: 'Commercial',
    location: 'Nechells',
    tag: 'After'
  },
  {
    id: 32,
    title: 'Nechells Commercial Unit - Before',
    description: 'Extensive vegetation growth in commercial roof drainage channel.',
    image: '/nechells-gutter-cleaning-before.png',
    category: 'Commercial',
    location: 'Nechells',
    tag: 'Before'
  },

  // ── Roof & UPVC Cleaning ──────────────────────────────────────────────────
  {
    id: 33,
    title: 'Roof De-Mossing & Gutter Extraction - After',
    description: 'Roofline and gutters cleared of invasive moss that causes repeated seasonal downpipe clogs.',
    image: '/dudley-roof-cleaning-after.png',
    category: 'Roof & UPVC',
    location: 'Dudley',
    tag: 'After'
  },
  {
    id: 34,
    title: 'Roof De-Mossing & Gutter Extraction - Before',
    description: 'Severe moss infestation rolling off roof tiles and filling gutter capacity.',
    image: '/dudley-roof-cleaning-before.png',
    category: 'Roof & UPVC',
    location: 'Dudley',
    tag: 'Before'
  },
  {
    id: 35,
    title: 'Fascia & Soffit Washing - After',
    description: 'UPVC restored to bright, clean condition removing green algae and traffic film.',
    image: '/blog-images/scoffts-gutter-cleaning/scoffts-gutter-cleaning-after.png',
    category: 'Roof & UPVC',
    location: 'West Midlands',
    tag: 'After'
  },
  {
    id: 36,
    title: 'Fascia & Soffit Washing - Before',
    description: 'Heavy grime, atmospheric staining, and mildew coating UPVC roofline boards.',
    image: '/blog-images/scoffts-gutter-cleaning/scoffts-gutter-cleaning-before.png',
    category: 'Roof & UPVC',
    location: 'West Midlands',
    tag: 'Before'
  },
  {
    id: 37,
    title: 'Professional Roof & Tile Cleaning',
    description: 'Safe low-pressure tile cleaning preventing moss re-entry into newly cleared gutters.',
    image: '/roof-cleaning.JPG',
    category: 'Roof & UPVC',
    location: 'Birmingham',
    tag: 'Roof Cleaning'
  },
  {
    id: 38,
    title: 'Exterior UPVC & Cladding Restoration',
    description: 'Pure water hot wash cleaning for fascias, soffits, and conservatory gutters.',
    image: '/upvc-cleaning.jpg',
    category: 'Roof & UPVC',
    location: 'Solihull',
    tag: 'UPVC'
  }
];

export default function GalleryGrid({ items = galleryItems }: { items?: GalleryItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Before & After',
    'Residential',
    'Heritage & Period',
    'Commercial',
    'Roof & UPVC'
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12 justify-center">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#19C58B] text-white shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          >
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100">
                        <div class="text-center p-4">
                          <div class="text-5xl mb-2">🏠</div>
                          <p class="text-xs font-bold text-slate-600">${item.category}</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />

              {/* Tag / Badge */}
              {item.tag && (
                <span
                  className={`absolute top-3 left-3 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                    item.tag === 'After'
                      ? 'bg-[#19C58B] text-white'
                      : item.tag === 'Before'
                      ? 'bg-[#0f172a] text-white'
                      : 'bg-white/90 text-slate-800 backdrop-blur-sm'
                  }`}
                >
                  {item.tag}
                </span>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="inline-flex items-center gap-1.5 text-white text-sm font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  🔍 Click to Enlarge
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#19C58B] uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.location && (
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      📍 {item.location}
                    </span>
                  )}
                </div>
                <h3 className="font-black text-lg text-slate-900 leading-snug mb-2 group-hover:text-[#19C58B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl animate-fade-in-up flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 max-h-[60vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[60vh] object-contain"
              />
              {selectedImage.tag && (
                <span
                  className={`absolute top-4 left-4 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg ${
                    selectedImage.tag === 'After'
                      ? 'bg-[#19C58B] text-white'
                      : selectedImage.tag === 'Before'
                      ? 'bg-[#0f172a] text-white'
                      : 'bg-white text-slate-900'
                  }`}
                >
                  {selectedImage.tag}
                </span>
              )}
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#19C58B] uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  {selectedImage.location && (
                    <span className="text-xs text-slate-500 font-medium">
                      📍 {selectedImage.location}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-black text-slate-900">{selectedImage.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedImage.description}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="/quote"
                  className="px-6 py-3 rounded-full bg-[#19C58B] text-white font-bold text-sm hover:bg-[#14B27D] transition-colors shadow-md"
                >
                  Get A Free Quote
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
