import React from 'react';
import { colors } from '@/constants/colors';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Springfield',
      rating: 5,
      text: 'Absolutely fantastic service! They were prompt, professional, and did an amazing job cleaning our gutters. Highly recommend!',
      date: 'Feb 2026'
    },
    {
      name: 'Mike Thompson',
      location: 'Riverside',
      rating: 5,
      text: 'Best gutter service I\'ve ever used. They found and fixed issues I didn\'t even know existed. Great value for money.',
      date: 'Jan 2026'
    },
    {
      name: 'Emily Chen',
      location: 'Lakewood',
      rating: 5,
      text: 'Very impressed with their professionalism and attention to detail. They left my property cleaner than they found it!',
      date: 'Jan 2026'
    },
    {
      name: 'Robert Davis',
      location: 'Hillside',
      rating: 5,
      text: 'Quick response time and excellent work. They explained everything they were doing and why. Will definitely use again.',
      date: 'Dec 2025'
    },
    {
      name: 'Jennifer Martinez',
      location: 'Oakville',
      rating: 5,
      text: 'Outstanding service from start to finish. Fair pricing, friendly staff, and quality workmanship. Couldn\'t ask for more!',
      date: 'Dec 2025'
    },
    {
      name: 'David Wilson',
      location: 'Greenfield',
      rating: 5,
      text: 'They saved me from a potential disaster! Found major issues during inspection and fixed them same day. True professionals.',
      date: 'Nov 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#2563EB] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-lg sm:text-xl text-gray-300">Real reviews from real customers</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6">
            <div className="flex text-2xl sm:text-3xl" style={{ color: colors.cta }}>
              {'★'.repeat(5)}
            </div>
            <span className="text-xl sm:text-2xl font-bold">5.0</span>
            <span className="text-sm sm:text-base text-gray-400">/ 5.0 (500+ reviews)</span>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="flex text-lg sm:text-xl mb-4" style={{ color: colors.cta }}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
                <div className="text-sm text-gray-400 mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-[#8DC63F] rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join Our Happy Customers</h2>
          <p className="text-base sm:text-lg text-white/90 mb-8">Experience the difference quality service makes</p>
          <button className="bg-[#FF6B35] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#e55a28] transition-colors">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
