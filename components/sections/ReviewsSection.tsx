import React from 'react';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import { ArrowRight, Users, Star, ThumbsUp, Award } from 'lucide-react';

const reviews = [
  { name: 'Graham B.', initial: 'G', date: '11 days ago', rating: 5, text: 'Highly recommended, friendly service.', response: null, bgColor: '#6B7280' },
  { name: 'Neil G.', initial: 'N', date: '17 days ago', rating: 5, text: 'Excellent, friendly and professional service from Ian at WOW Gutter Services. We had persistent leaks at various points around the house.', response: 'Great to hear your feedback, Neil! Glad', bgColor: '#8B5CF6' },
  { name: 'Debbie B.', initial: 'D', date: '25 days ago', rating: 5, text: 'Great service I have a conservatory so very difficult to access gutter — this service is perfect.', response: 'Great to hear your feedback, Debbie!', bgColor: '#92400E' },
  { name: 'hendo m', initial: 'h', date: 'a month ago', rating: 5, text: 'Excellent service. Reliable, professional, polite. Rikesh is a very pleasant guy to deal with who goes the extra mile. Highly recommended.', response: null, bgColor: '#BE185D' },
  { name: 'Mark M.', initial: 'M', date: 'a month ago', rating: 5, text: 'Harley came out to sort my gutters out today. Great service, friendly & professional. Pictures showed how blocked the gutters were.', response: 'Great to hear your feedback, Mark! Glad', bgColor: '#DC2626' },
  { name: 'Frances B.', initial: 'F', date: 'a month ago', rating: 5, text: 'Fantastic service! Harley was very helpful from the moment we made contact. After heavy snow broke our conservatory guttering, WOW Gutter Cleaning saved the day.', response: null, bgColor: '#059669' },
  { name: 'Maree G.', initial: 'M', date: 'a month ago', rating: 5, text: 'Outstanding service — excellent job of cleaning soffits and fascia. Would recommend to anyone that needs this service.', response: null, bgColor: '#BE185D' },
  { name: 'Kevin P.', initial: 'K', date: 'a month ago', rating: 5, text: 'Outstanding service. Excellent job of cleaning soffits and fascia. Would recommend to anyone.', response: null, bgColor: '#78350F' },
];

export default function ReviewsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            Customer Reviews
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
            Latest Reviews…
          </h2>
          <Link
            href="/reviews"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{ color: colors.primary }}
          >
            See All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Google Rating Banner */}
        <div
          className="bg-white rounded-2xl p-6 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{ borderTop: `3px solid ${colors.primary}` }}
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0" style={{ backgroundColor: colors.primary }}>
            S
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-black" style={{ color: colors.text }}>Excellent — WOW Gutter Maintenance</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-bold" style={{ color: colors.textLight }}>Based on 2,696 reviews</span>
            </div>
          </div>
          <button
            className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: colors.primaryGradient }}
          >
            See all reviews
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              style={{ borderTop: `3px solid ${review.bgColor}` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: review.bgColor }}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: colors.text }}>{review.name}</p>
                  <p className="text-xs" style={{ color: colors.textLight }}>{review.date}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1 mt-3" style={{ color: colors.text }}>{review.text}</p>
              {review.response && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs font-bold mb-1" style={{ color: colors.textLight }}>Response from owner:</p>
                  <p className="text-xs" style={{ color: colors.textLight }}>{review.response}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
