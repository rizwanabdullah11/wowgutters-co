'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import { ThumbsUp, Star, MessageSquare, Clock } from 'lucide-react';
import ElfsightReviews from '@/components/sections/ElfsightReviews';
import FeaturedReviewsGrid from '@/components/reviews/FeaturedReviewsGrid';
import { GOOGLE_REVIEWS_SUMMARY, gbpReviewUrl } from '@/lib/googleReviews';

export default function ReviewsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reviewUrl = gbpReviewUrl();

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
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
            <Star className="h-4 w-4 text-amber-400" fill="#FBBF24" />
            <span className="hero-badge-text">{GOOGLE_REVIEWS_SUMMARY.starsDisplay} on Google</span>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-100">
            <span className="title-prefix">Customer</span>{' '}
            <span className="title-service" style={{ color: colors.primary }}>
              Reviews
            </span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up delay-200">
            Real feedback from homeowners across Birmingham and the West Midlands — before &amp; after photos,
            punctual crews, and honest gutter reports on every job.
          </p>
        </div>

        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { value: GOOGLE_REVIEWS_SUMMARY.starsDisplay, label: 'Average Google rating' },
            { value: '100+', label: 'Verified customers' },
            { value: '24 hrs', label: 'Open every day' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 text-center"
            >
              <div className="text-3xl font-black" style={{ color: colors.primary }}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-8 bg-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">Google Business Profile</p>
          <p className="mt-2 text-slate-700 leading-relaxed">
            WOW Gutters Ltd is rated {GOOGLE_REVIEWS_SUMMARY.ratingLabel}★ on Google Business Profile. Reviews
            below update automatically from Google. We read every review and reply on Google within two working days.
          </p>
          {reviewUrl ? (
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105"
              style={{ backgroundColor: colors.primary }}
            >
              Leave a Google review
            </a>
          ) : null}
        </div>
      </section>

      <section className="px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
              Featured <span style={{ color: colors.primary }}>reviews</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              A sample of what customers say about our gutter cleaning service
            </p>
          </div>
          <FeaturedReviewsGrid />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
              Live <span style={{ color: colors.primary }}>Google feed</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600">Updated automatically from Google</p>
          </div>
          <ElfsightReviews />
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <MessageSquare className="h-8 w-8" style={{ color: colors.primary }} />
              <h2 className="text-2xl font-black text-gray-900">How we handle reviews</h2>
            </div>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0" style={{ color: colors.primary }} />
                <span>
                  <strong>We reply to every Google review</strong> — usually within two working days. Thank
                  yous get a personal reply; concerns get a direct follow-up.
                </span>
              </li>
              <li className="flex gap-3">
                <Star className="mt-1 h-5 w-5 shrink-0" style={{ color: colors.primary }} />
                <span>
                  <strong>Before &amp; after photos</strong> are sent on every job so you can see exactly what
                  was cleared — the same standard our reviewers mention.
                </span>
              </li>
              <li className="flex gap-3">
                <ThumbsUp className="mt-1 h-5 w-5 shrink-0" style={{ color: colors.primary }} />
                <span>
                  <strong>Not happy?</strong> Contact us within 48 hours and we will put it right at no extra
                  charge — see our{' '}
                  <Link href="/terms-and-conditions/" className="font-bold underline" style={{ color: colors.primary }}>
                    service guarantee
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-12 text-center shadow-lg">
            <h3 className="text-3xl font-black text-gray-900">Share your experience</h3>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Had your gutters cleaned by WOW Gutters Ltd? Leave a Google review or message us on WhatsApp —
              your feedback helps other homeowners choose with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {reviewUrl ? (
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
                  style={{ backgroundColor: colors.primary }}
                >
                  Leave a Google review
                </a>
              ) : null}
              <a
                href="https://wa.me/447421433910"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
              >
                Message on WhatsApp
              </a>
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-lg font-bold transition hover:bg-white"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] px-4 py-20 text-white">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <ThumbsUp className="mx-auto mb-6 h-16 w-16" style={{ color: colors.primary }} />
          <h3 className="text-4xl font-black md:text-5xl">
            Join our <span style={{ color: colors.primary }}>happy customers</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-xl text-white/80">
            Same-day bookings available across Birmingham and the West Midlands
          </p>
          <Link
            href="/quote/"
            className="mt-8 inline-flex rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105"
            style={{ background: colors.primaryGradient }}
          >
            Get your free quote
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
        .hero-video-wrapper { position: absolute; inset: 0; z-index: 1; }
        .hero-video { width: 100%; height: 100%; object-fit: cover; }
        .reviews-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.75) 50%, rgba(15,23,42,0.9) 100%);
        }
        .reviews-hero-content {
          position: relative; z-index: 10; width: 100%; max-width: 900px;
          padding: 60px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          padding: 8px 24px; border-radius: 100px; backdrop-filter: blur(8px); margin-bottom: 1.5rem;
        }
        .hero-badge-text { color: white; font-size: 0.95rem; font-weight: 700; letter-spacing: 0.5px; }
        .hero-title { margin: 0 0 1.5rem; line-height: 1.1; color: white; text-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .title-prefix { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; }
        .title-service { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; }
        .hero-subtitle {
          color: rgba(255,255,255,0.85); font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 700px; margin: 0; line-height: 1.6; font-weight: 500;
        }
        .hero-wave-bottom { position: absolute; bottom: -1px; left: 0; right: 0; line-height: 0; z-index: 10; }
        .hero-wave-bottom svg { width: 100%; height: 60px; display: block; }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
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
