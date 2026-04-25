'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface GalleryGridProps {
  items?: GalleryItem[];
}

const defaultItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Professional Gutter Cleaning',
    description: 'Expert team performing thorough gutter cleaning service',
    image: '/professional-gutter-clean.png',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Gutter Repair Work',
    description: 'Professional gutter repair and maintenance in progress',
    image: '/gutter-repair.png',
    category: 'Repair'
  },
  {
    id: 3,
    title: 'Gutter Cleaning Service',
    description: 'Complete gutter cleaning and debris removal',
    image: '/gutter-cleaning.jpeg',
    category: 'Residential'
  },
  {
    id: 4,
    title: 'Professional Experience',
    description: 'Experienced technicians at work on gutter maintenance',
    image: '/Professional-experience.png',
    category: 'Commercial'
  },
  {
    id: 5,
    title: 'Roof Cleaning Service',
    description: 'Professional roof and gutter cleaning in action',
    image: '/roof-cleaning.JPG',
    category: 'Maintenance'
  },
  {
    id: 6,
    title: 'Gutter Inspection',
    description: 'Thorough gutter inspection and assessment',
    image: '/gutter-inspection.png',
    category: 'Inspection'
  },
  {
    id: 7,
    title: 'UPVC Cleaning',
    description: 'Professional UPVC and fascia cleaning service',
    image: '/upvc-cleaning.jpg',
    category: 'Maintenance'
  },
  {
    id: 8,
    title: 'Gutter Installation',
    description: 'Professional gutter installation and setup',
    image: '/gutter-installation.png',
    category: 'Residential'
  }
];

export default function GalleryGrid({ items = defaultItems }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                        <div class="text-center p-4">
                          <div class="text-6xl mb-2">🏠</div>
                          <p class="text-sm text-gray-600">${item.category}</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative aspect-video bg-gray-100">
              <img 
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
