'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import { ThumbsUp } from 'lucide-react';
import ElfsightReviews from '@/components/sections/ElfsightReviews';
import { GOOGLE_REVIEWS_SUMMARY, gbpReviewUrl } from '@/lib/googleReviews';

export default function ReviewsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reviewUrl = gbpReviewUrl();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <main className="bg-white">
      <section className="reviews-hero-section">
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/gutter-hero-poster.jpg"
            className="hero-video"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="/gutter-final-video.mp4" type="video/mp4" />
          </video>
          <div className="reviews-hero-overlay" />
        </div>

        <div className="reviews-hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="hero-badge-text">Customer Reviews</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">What Our</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>
              Customers
            </span>
            <br />
            <span className="title-secondary">Say About Us</span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Live Google reviews from homeowners across Birmingham and the West Midlands
          </p>
        </div>

        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <section className="px-4 pb-4 bg-white">
        <div className="max-w-3xl mx-auto rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">Google Business Profile</p>
          <p className="mt-2 text-slate-700 leading-relaxed">
            WOW Gutters Ltd is rated {GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ on Google across Birmingham and the West Midlands.
            Reviews below update automatically from Google. We reply to every review.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            {reviewUrl ? (
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm"
                style={{ backgroundColor: colors.primary }}
              >
                Leave a Google review
              </a>
            ) : null}
            <Link
              href="/citations/#gbp-reviews"
              className="inline-flex rounded-full border border-emerald-600 px-6 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-100"
            >
              How we respond to reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>
                {GOOGLE_REVIEWS_SUMMARY.starsDisplay}
              </div>
              <div className="text-gray-600 font-semibold">Average on Google</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>
                Live
              </div>
              <div className="text-gray-600 font-semibold">Updates from Google</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Customer <span style={{ color: colors.primary }}>Reviews</span>
            </h2>
            <p className="text-xl text-gray-600">Updated live from Google — scroll for more</p>
          </div>

          <ElfsightReviews />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">Want to Share Your Experience?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Leave a Google review or message us on WhatsApp — we read every one and reply on Google.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {reviewUrl ? (
                  <a
                    href={reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white shadow-lg hover:scale-105 transition-all"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Leave a Google review
                  </a>
                ) : null}
                <a
                  href="https://wa.me/447421433910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg bg-[#25D366]"
                >
                  Message on WhatsApp
                </a>
                <Link href="/quote/">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white border-2"
                    style={{ borderColor: colors.primary, color: colors.primary }}
                  >
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ThumbsUp className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
          <h3 className="text-4xl md:text-5xl font-black mb-4">
            Join Our <span style={{ color: colors.primary }}>Happy Customers</span>
          </h3>
          <p className="text-xl text-white/80 mb-8">
            Experience the same exceptional service our Google reviewers describe
          </p>
          <Link href="/quote/">
            <button
              type="button"
              className="px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:scale-105 transition-all"
              style={{ background: colors.primaryGradient }}
            >
              Get Your Free Quote
            </button>
          </Link>
        </div>
      </section>

      <style>{`
        .reviews-hero-section {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0f172a;
        }
        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .reviews-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.85) 0%,
            rgba(15, 23, 42, 0.75) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }
        .reviews-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
          padding: 60px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 24px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          margin-bottom: 1.5rem;
        }
        .hero-badge-text {
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .hero-title {
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
          color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .title-prefix {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
        }
        .title-service {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
        }
        .title-secondary {
          display: block;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          margin-top: 0.5rem;
        }
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 700px;
          margin: 0;
          line-height: 1.6;
          font-weight: 500;
        }
        .hero-wave-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          line-height: 0;
          z-index: 10;
        }
        .hero-wave-bottom svg {
          width: 100%;
          height: 60px;
          display: block;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
