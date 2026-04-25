'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Video sources
  const videos = [
    '/gutter-final-video.mp4',
    '/gutter-cleaning-video.mp4'
  ];

  // Rotating headlines — location-first for local SEO
  const heroHeadlines = [
    {
      prefix: 'Gutter Cleaning in',
      service: 'Birmingham',
      highlight: '& West Midlands',
      bottom: 'Book Today',
    },
    {
      prefix: 'Same-Day',
      service: 'Gutter',
      highlight: '& Roof',
      bottom: 'Cleaning',
    },
    {
      prefix: 'Get Your',
      service: 'FREE',
      highlight: 'Quote',
      bottom: 'in 60 Seconds',
    }
  ];

  useEffect(() => {
    // Force play the video on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  useEffect(() => {
    const switchInterval = window.setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 3500);

    return () => window.clearInterval(switchInterval);
  }, [heroHeadlines.length]);

  // Switch videos every 15 seconds
  useEffect(() => {
    const videoSwitchInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 15000); // Switch every 15 seconds

    return () => clearInterval(videoSwitchInterval);
  }, [videos.length]);

  // Play video when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <>
      <section className="hero-section">
        {/* Video Background */}
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/gutter-cleaning.jpeg"
            aria-label="WOW Gutters professional gutter cleaning service in Birmingham & West Midlands"
            className="hero-video"
            key={currentVideoIndex}
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <img
              src="/gutter-cleaning.jpeg"
              alt="Professional gutter cleaning Birmingham — WOW Gutters"
              className="hero-video"
            />
          </video>
          {/* Advanced Gradient Overlay for better text legibility */}
          <div className="hero-overlay"></div>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-container">

            {/* Top Badge */}
            {/* <div className="hero-badge animate-fade-in-up">
              <ShieldCheck className="w-4 h-4 text-[#19C58B]" />
              <span className="hero-badge-text">Award-Winning Specialists • UK Wide</span>
            </div> */}

            {/* Dynamic Headline */}
            <h1 className="hero-title animate-fade-in-up delay-100">
              <div className={`headline-slider ${isAnimating ? 'headline-hidden' : 'headline-visible'}`}>
                <span className="title-prefix">{heroHeadlines[headlineIndex].prefix}</span>{' '}
                <span className="title-service">{heroHeadlines[headlineIndex].service}</span>
                {heroHeadlines[headlineIndex].highlight && (
                  <>
                    {' '}
                    <span className="title-highlight">
                      {heroHeadlines[headlineIndex].highlight}
                    </span>
                  </>
                )}
                <br />
                <span className="title-bottom">
                  {heroHeadlines[headlineIndex].bottom}
                </span>
              </div>
            </h1>

            {/* Subtext */}
            <p className="hero-subtitle animate-fade-in-up delay-200">
              Rated 4.9★ by over 2,600 customers. Same-day booking across Birmingham, Coventry, Wolverhampton, Solihull, Worcester & 10 more areas — no ladders, no mess.
            </p>

            {/* CTA Row */}
            <div className="hero-cta-row animate-fade-in-up delay-300">
              <button
                type="button"
                data-static-quote-open
                aria-haspopup="dialog"
                aria-controls="wow-cta-dialog"
                className="hero-primary-btn"
              >
                <span className="btn-arrow">&#9658;</span>
                <span className="btn-label">
                  Get A <span className="btn-free">FREE</span> Quote
                </span>
              </button>

            </div>

          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          height: 90vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #0f172a;
        }
        @media (max-width: 768px) {
          .hero-section {
            /* Reduce bottom empty space on mobile (fixed WhatsApp bar + iOS browser UI). */
            height: calc(100svh - 90px);
            min-height: 540px;
            align-items: flex-start;
            padding-top: 42px; /* reliable spacing below fixed navbar in build */
          }
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
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.75) 0%,
            rgba(15, 23, 42, 0.65) 50%,
            rgba(15, 23, 42, 0.85) 100%
          );
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 0 24px;
        }
        @media (max-width: 768px) {
          .hero-content {
            padding: 18px 16px 0;
          }
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 20px;
          border-radius: 100px;
          backdrop-filter: blur(10px);
          margin-bottom: 20px;
        }
        .hero-badge-text {
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Title */
        .hero-title {
          margin: 0 0 20px 0;
          line-height: 1.1;
          color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .headline-slider {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .headline-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .headline-hidden {
          opacity: 0;
          transform: translateY(15px);
        }

        .title-prefix {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
        }
        .title-service {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          color: #19C58B;
        }
        .title-secondary {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
        }
        .title-highlight {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          color: #2DD4BF;
        }
        .title-bottom {
          display: block;
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          font-weight: 900;
          margin-top: 8px;
        }

        /* Subtitle */
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          max-width: 800px;
          margin: 0 0 20px 0;
          line-height: 1.6;
          font-weight: 500;
        }

        /* CTA Row */
        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          max-width: 560px;
        }

        .hero-primary-btn {
          width: 70%;
          max-width: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          background: linear-gradient(135deg, #19C58B 0%, #14B27D 100%);
          padding: 12px 12px 12px 24px;
          border-radius: 100px;
          border: none;
          font: inherit;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(25, 197, 139, 0.3);
          position: relative;
          overflow: hidden;
        }
        .hero-primary-btn:hover {
          background: #19C58B;
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(25, 197, 139, 0.55);
        }

        .btn-arrow {
          color: white;
          font-size: 1.4rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .btn-label {
          color: white;
          font-size: clamp(1.2rem, 2.2vw, 1.5rem);
          font-weight: 800;
          letter-spacing: 0.3px;
        }
        .btn-free {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .hero-reviews-box {
          flex: 1;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 18px 32px;
          border-radius: 100px;
          backdrop-filter: blur(12px);
        }
        .stars-row {
          display: flex;
          gap: 6px;
          margin-bottom: 4px;
        }
        .reviews-text {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .reviews-score {
          color: white;
          font-weight: 800;
          font-size: 1rem;
        }
        .reviews-count {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Wave Bottom */
        .hero-wave-bottom {
          position: absolute;
          bottom: -1px; /* fix subpixel rendering issues */
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

        /* Animations */
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
