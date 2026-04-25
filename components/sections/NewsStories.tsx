import React from 'react';
import Link from 'next/link';
import { colors } from '@/constants/colors';

export default function NewsStories() {
  const newsStories = [
    {
      title: "Gutter Cleaning Emergency: Local Hero Iain Saves the Day in Torrential Rain",
      excerpt: "Gutter Cleaning Emergency: Local Hero Iain Saves the Day in Torrential Rain When storms hit, gutter emergencies can cause chaos and devastation. One such emergency was resolved by Iain, a [...]",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400"
    },
    {
      title: "Snowmageddon Strikes: Gutter Chaos Unleashed!",
      excerpt: "Winter has arrived in all its snowy glory, and while the sight of snow-covered rooftops may have filled Instagram feeds with festive vibes, it's been a nightmare for gutters [...]",
      image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400"
    },
    {
      title: "Drowned Britain: Why Your Gutters Are Waving a White Flag (and How to Save Them)",
      excerpt: "So, here we are in October 2024, and Britain is getting absolutely pummeled by rain. It's not just your typical drizzle anymore. Nope, it's like the sky's decided to [...]",
      image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: colors.primary }}>
            NEWS STORIES....
          </h2>
          <p className="flex flex-col sm:flex-row sm:items-center gap-2 text-base sm:text-lg" style={{ color: colors.textLight }}>
            <span className="flex items-center gap-2">
              <span className="text-gray-500">📰</span>
              Explore the latest updates on our activities with our general news coverage.
            </span>
            <Link href="/news" className="hover:underline" style={{ color: colors.primary }}>[see all]</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsStories.map((story, index) => (
            <div 
              key={index} 
              className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-auto sm:h-[450px] lg:h-[500px] flex flex-col"
              style={{ backgroundColor: colors.white }}
            >
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-40 sm:h-48 lg:h-60 object-cover flex-shrink-0"
              />
              <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 flex-1" style={{ color: colors.text }}>
                  {story.title}
                </h3>
                <p className="text-base sm:text-base lg:text-lg sm:line-clamp-4 mt-auto" style={{ color: colors.textLight }}>
                  {story.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
