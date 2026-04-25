'use client';
import React, { useState } from 'react';
import { colors } from '@/constants/colors';
import { Search, Filter } from 'lucide-react';
import Talks from '@/components/sections/Talks';

// Sample talks data
const allTalks = [
  {
    id: 'gutter-maintenance-tips',
    title: 'Essential Gutter Maintenance Tips for Homeowners',
    excerpt: 'Learn the key maintenance practices that will keep your gutters functioning properly and extend their lifespan.',
    author: 'Mike Johnson',
    date: 'March 8, 2026',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'Maintenance',
    readTime: '5 min read'
  },
  {
    id: 'hot-wash-vs-traditional-cleaning',
    title: 'Hot Wash vs Traditional Cleaning: What\'s the Difference?',
    excerpt: 'Discover why hot wash cleaning is revolutionizing exterior cleaning and how it compares to traditional methods.',
    author: 'Sarah Williams',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    category: 'Technology',
    readTime: '7 min read'
  },
  {
    id: 'conservatory-care-guide',
    title: 'Complete Conservatory Care Guide',
    excerpt: 'Everything you need to know about maintaining your conservatory to keep it looking beautiful and functioning properly.',
    author: 'David Thompson',
    date: 'March 1, 2026',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    category: 'Guides',
    readTime: '8 min read'
  },
  {
    id: 'winter-gutter-protection',
    title: 'Protecting Your Gutters During Winter',
    excerpt: 'Essential steps to winterize your gutters and prevent ice damage during the cold months.',
    author: 'Mike Johnson',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    category: 'Seasonal',
    readTime: '6 min read'
  },
  {
    id: 'commercial-cleaning-benefits',
    title: 'Benefits of Professional Commercial Cleaning',
    excerpt: 'Why businesses should invest in professional exterior cleaning services for their commercial properties.',
    author: 'Sarah Williams',
    date: 'February 25, 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    category: 'Commercial',
    readTime: '5 min read'
  },
  {
    id: 'eco-friendly-cleaning-methods',
    title: 'Eco-Friendly Cleaning Methods for Your Home',
    excerpt: 'Sustainable and environmentally conscious approaches to keeping your home\'s exterior clean.',
    author: 'David Thompson',
    date: 'February 22, 2026',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    category: 'Environment',
    readTime: '7 min read'
  }
];

const categories = ['All', 'Maintenance', 'Technology', 'Guides', 'Seasonal', 'Commercial', 'Environment'];

export default function TalksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTalks = allTalks.filter(talk => {
    const matchesSearch = talk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talk.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || talk.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.white }}>
            💬 Talks & Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
            Expert advice, industry insights, and practical tips for maintaining your property
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: colors.textLight }} />
              <input
                type="text"
                placeholder="Search talks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5" style={{ color: colors.textLight }} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm" style={{ color: colors.textLight }}>
            Showing {filteredTalks.length} of {allTalks.length} talks
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Talks Grid */}
      <Talks 
        posts={filteredTalks}
        title=""
        subtitle=""
      />

      {/* No Results */}
      {filteredTalks.length === 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
              No talks found
            </h3>
            <p style={{ color: colors.textLight }}>
              Try adjusting your search terms or category filter.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}