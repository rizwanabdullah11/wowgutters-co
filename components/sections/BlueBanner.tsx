import React from 'react';
import { colors } from '@/constants/colors';

export default function BlueBanner() {
  const items = [
    { emoji: '⬇️', title: 'Low-Prices', desc: 'Take advantage of our comprehensive service at amazing low prices', accent: '#3B82F6' },
    { emoji: '⭐⭐⭐⭐⭐', title: 'Top Rated Service', desc: 'Highly rated across multiple platforms', accent: '#19C58B' },
    { emoji: '🏆', title: 'Highly Rated', desc: 'Trusted by hundreds of satisfied customers across the West Midlands', accent: '#F97316' },
  ];

  return (
    <section className="py-10" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ borderTop: `3px solid ${item.accent}` }}
            >
              <div className="text-2xl mb-3">{item.emoji}</div>
              <h3 className="font-black text-base mb-2" style={{ color: colors.text }}>{item.title}</h3>
              <p className="text-sm" style={{ color: colors.textLight }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
