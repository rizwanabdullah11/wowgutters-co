'use client';
import Link from 'next/link';

const cards = [
  {
    id: 'inspect',
    imageSrc: '/Professional-experience.png',
    backgroundImage: '/gutter-inspection.jfif',
    imageAlt: 'Gutter inspection illustration',
    title: 'Inspect',
    description: 'Careful roofline and gutter checks to find leaks, blockages and weak points before they become costly.',
    buttonText: 'Book a Free Inspection',
    link: '/help/inspect',
    accentColor: '#19C58B',
  },
  {
    id: 'unblock',
    imageSrc: '/gutter-cleaning-icon.png',
    backgroundImage: '/gutter-cleaning.jpeg',
    imageAlt: 'Gutter cleaning illustration',
    title: 'Unblock',
    description: 'High-reach gutter vacuum cleaning and downpipe unblocking to keep rainwater flowing safely away.',
    buttonText: 'Get Unblocking',
    link: '/help/unblock',
    accentColor: '#14B27D',
  },
  {
    id: 'repair',
    imageSrc: '/gutter-repair-icon.png',
    backgroundImage: '/gutter-repair.jfif',
    imageAlt: 'Gutter repair illustration',
    title: 'Repair',
    description: 'Gutter repairs for leaking joints, loose clips, sagging sections and damaged brackets.',
    buttonText: 'Request Repair',
    link: '/help/repair',
    accentColor: '#8DC63F',
  },
  {
    id: 'clean',
    imageSrc: '/Roof-Cleaner.webp',
    backgroundImage: '/roof-cleaning.JPG',
    imageAlt: 'Roof and exterior cleaning image',
    title: 'Clean',
    description: 'Roof, fascia, soffit and exterior cleaning to remove moss, algae, staining and built-up grime.',
    buttonText: 'Book Cleaning',
    link: '/help/clean',
    accentColor: '#FF6B35',
  },
];

export default function ServiceCardsSection() {
  return (
    <section className="how-can-we-help-section">
      {/* Wave top */}
      <div className="how-help-wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="how-help-container">
        {/* Header */}
        <div className="how-help-header">
          <span className="how-help-eyebrow">OUR SERVICES</span>
          <h2 className="how-help-title">Gutter Services for Every Property</h2>
          <p className="how-help-subtitle">
            From blocked gutter cleaning to roofline repairs, we keep Birmingham properties protected from water damage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="how-help-grid">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="flip-card-wrapper"
              >
                <div className="how-help-card">
                  {/* Front of card */}
                  <div 
                    className="card-face card-front"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98)), url(${card.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Colored top border */}
                    <div className="how-help-card-top-bar" style={{ backgroundColor: card.accentColor }} />

                    {/* Demo-style service image */}
                    <div className="how-help-image-wrap">
                      <div className="how-help-image-ring" style={{ borderColor: card.accentColor }}>
                        <img src={card.imageSrc} alt={card.imageAlt} className="how-help-service-image" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="how-help-card-title">{card.title}</h3>
                    <p className="how-help-card-desc">{card.description}</p>

                    {/* CTA Button */}
                    <Link href={card.link} className="how-help-card-btn" style={{ backgroundColor: card.accentColor }}>
                      {card.buttonText}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="how-help-btn-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="card-face card-back" 
                    style={{ 
                      background: `linear-gradient(135deg, ${card.accentColor}15 0%, rgba(255, 255, 255, 0.98) 50%), url(${card.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="how-help-card-top-bar" style={{ backgroundColor: card.accentColor }} />

                    <div className="card-back-content">
                      <h3 className="how-help-card-title">{card.title}</h3>
                      
                      <div className="back-features">
                        <h4 className="back-features-title" style={{ color: card.accentColor }}>WHAT&apos;S INCLUDED:</h4>
                        <ul className="back-features-list">
                          <li>✓ Professional assessment</li>
                          <li>✓ Flexible bookings available</li>
                          <li>✓ Clear advice before work starts</li>
                          <li>✓ Fully insured service</li>
                        </ul>
                      </div>

                      <Link href={card.link} className="how-help-card-btn back-btn" style={{ backgroundColor: card.accentColor }}>
                        {card.buttonText}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="how-help-btn-arrow">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="how-help-wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
              <stop offset="50%" stopColor="#f1f5f9" stopOpacity="1" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="url(#waveGradient)" />
        </svg>
      </div>

      <style>{`
        .how-can-we-help-section {
          position: relative;
          background: linear-gradient(135deg, #0d6e4e 0%, #19C58B 50%, #14B27D 100%);
          padding: 0;
          overflow: hidden;
        }

        .how-help-wave-top,
        .how-help-wave-bottom {
          display: block;
          line-height: 0;
        }
        .how-help-wave-top svg,
        .how-help-wave-bottom svg {
          width: 100%;
          height: 60px;
          display: block;
        }

        /* Subtle animated background dots */
        .how-can-we-help-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .how-help-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 48px;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .how-help-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .how-help-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .how-help-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 14px;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }
        .how-help-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.75);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Grid */
        .how-help-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .how-help-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .how-help-grid { grid-template-columns: 1fr; }
        }

        /* Flip Card Wrapper */
        .flip-card-wrapper {
          perspective: 1000px;
          height: 420px;
        }

        /* Card */
        .how-help-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-wrapper:hover .how-help-card {
          transform: rotateY(180deg);
        }

        /* Card Faces */
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: #fff;
          border-radius: 18px;
          padding: 0 0 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          transition: box-shadow 0.28s ease;
        }
        .flip-card-wrapper:hover .card-face {
          box-shadow: 0 20px 48px rgba(0,0,0,0.18);
        }
        .card-back {
          transform: rotateY(180deg);
          overflow: hidden;
        }

        /* Back card content */
        .card-back-content {
          width: 100%;
          padding: 50px 22px 0;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .back-features {
          margin: 16px 0;
          text-align: left;
        }
        .back-features-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .back-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.88rem;
          color: #334155;
        }
        .back-features-list li {
          padding: 6px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .back-btn {
          margin-top: auto;
        }

        /* Top accent bar */
        .how-help-card-top-bar {
          width: 100%;
          height: 5px;
          border-radius: 18px 18px 0 0;
          flex-shrink: 0;
          transition: height 0.25s ease;
        }
        .how-help-card:hover .how-help-card-top-bar {
          height: 7px;
        }

        /* Service image */
        .how-help-image-wrap {
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 26px auto 0;
          transition: transform 0.3s ease;
        }
        .how-help-image-ring {
          width: 100%;
          height: 100%;
          border-radius: 999px;
          border: 3px solid;
          padding: 6px;
          background: white;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
        }
        .how-help-service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 999px;
        }
        .how-help-card:hover .how-help-image-wrap {
          transform: scale(1.1) rotate(-4deg);
        }

        /* Title */
        .how-help-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin: 16px 22px 10px;
          letter-spacing: -0.3px;
        }

        /* Description */
        .how-help-card-desc {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.62;
          margin: 0 22px 22px;
          flex-grow: 1;
          max-width: 290px;
        }

        /* CTA button */
        .how-help-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 auto;
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.2px;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .how-help-card-btn:hover {
          opacity: 0.88;
          transform: translateX(2px);
        }
        .how-help-btn-arrow {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .how-help-card-btn:hover .how-help-btn-arrow {
          transform: translateX(3px);
        }

        /* Mobile fix: touch devices can't hover, so always show back content */
        @media (max-width: 768px) {
          .flip-card-wrapper {
            perspective: none;
            height: auto;
          }
          .how-help-card {
            transform: none !important;
            transform-style: flat;
            height: auto;
          }
          .card-face {
            position: relative !important;
            backface-visibility: visible !important;
            -webkit-backface-visibility: visible !important;
            transform: none !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: flex !important;
            width: 100%;
            height: auto;
          }
          .card-back {
            margin-top: 16px;
          }
          .card-back-content {
            padding: 24px 22px;
          }
        }
      `}</style>
    </section>
  );
}
