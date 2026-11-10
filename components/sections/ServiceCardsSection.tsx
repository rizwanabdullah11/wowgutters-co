'use client';
import Link from 'next/link';

const cards = [
  {
    id: 'inspect',
    imageSrc: '/professional-gutter-clean.webp',
    backgroundImage: '/gutter-inspection.webp',
    imageAlt: 'Gutter inspection illustration',
    title: 'Inspect',
    description: 'Careful roofline and gutter checks to find leaks, blockages and weak points before they become costly.',
    buttonText: 'Book a Free Inspection',
    link: '/services/gutter-inspection/',
    features: ['Gutter & downpipe check', 'Photos of any problems found', 'Honest advice, no pressure', 'Fully insured technicians'],
    accentColor: '#19C58B',
  },
  {
    id: 'unblock',
    imageSrc: '/gutter-cleaning-icon.webp',
    backgroundImage: '/gutter-cleaning.webp',
    imageAlt: 'Gutter cleaning illustration',
    title: 'Unblock',
    description: 'High-reach gutter vacuum cleaning and downpipe unblocking to keep rainwater flowing safely away.',
    buttonText: 'Get Unblocking',
    link: '/help/unblock',
    features: ['High-reach vacuum from the ground', 'Downpipes flushed & flow-tested', 'Before & after photos', 'Debris taken away'],
    accentColor: '#14B27D',
  },
  {
    id: 'repair',
    imageSrc: '/gutter-repair-icon.webp',
    backgroundImage: '/gutter-repair.webp',
    imageAlt: 'Gutter repair illustration',
    title: 'Repair',
    description: 'Gutter repairs for leaking joints, loose clips, sagging sections and damaged brackets.',
    buttonText: 'Request Repair',
    link: '/help/repair',
    features: ['Leaking joints resealed', 'Brackets & clips refitted', 'Sagging runs realigned', 'Water flow tested after'],
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
    features: ['Roof moss removal', 'Fascia & soffit cleaning', 'Conservatory roof cleaning', 'Gutters cleared afterwards'],
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
          <span className="how-help-eyebrow">HOW CAN WE HELP?</span>
          <h2 className="how-help-title">Gutter Services for Every Property</h2>
          <p className="how-help-subtitle">
            Inspect, unblock, repair or clean — WOW Gutters Ltd helps protect your home or business across Birmingham and the West Midlands.
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
                          {card.features.map((f) => (
                            <li key={f}>✓ {f}</li>
                          ))}
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

    </section>
  );
}
