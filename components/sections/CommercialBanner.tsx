import Link from 'next/link';

export default function CommercialBanner() {
  return (
    <section className="commercial-banner-section">
      {/* Decorative background elements */}
      <div className="commercial-bg-decoration">
        <div className="commercial-circle commercial-circle-1"></div>
        <div className="commercial-circle commercial-circle-2"></div>
        <div className="commercial-circle commercial-circle-3"></div>
      </div>

      <div className="commercial-banner-container">
        <div className="commercial-banner-wrapper">
          {/* Left side - Icon and decorative elements */}
          <div className="commercial-icon-section">
            <div className="commercial-icon-wrapper">
              <div className="commercial-icon-ring commercial-icon-ring-1"></div>
              <div className="commercial-icon-ring commercial-icon-ring-2"></div>
              <div className="commercial-icon-main">
                <span className="commercial-emoji">🏢</span>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="commercial-badge commercial-badge-1">
              <span className="badge-icon">✓</span>
              <span className="badge-text">Trusted</span>
            </div>
            <div className="commercial-badge commercial-badge-2">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">Fast</span>
            </div>
          </div>

          {/* Center - Content */}
          <div className="commercial-content">
            <div className="commercial-label-wrapper">
              <span className="commercial-label-badge">BUSINESS OWNER?</span>
              <div className="commercial-sparkle">✨</div>
            </div>
            <h3 className="commercial-title">
              Commercial Roofline Services
            </h3>
            <p className="commercial-description">
              Reliable gutter cleaning, repairs and exterior care for shops, offices, rental properties, schools and commercial buildings.
              <span className="commercial-highlight"> Flexible visits available.</span>
            </p>
            
            {/* Features list */}
            <div className="commercial-features">
              <div className="commercial-feature-item">
                <span className="feature-check">✓</span>
                <span>Out-of-hours options</span>
              </div>
              <div className="commercial-feature-item">
                <span className="feature-check">✓</span>
                <span>Same Day Booking</span>
              </div>
              <div className="commercial-feature-item">
                <span className="feature-check">✓</span>
                <span>Planned maintenance</span>
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="commercial-cta-section">
            <Link href="/services/commercial-gutter-cleaning/" className="commercial-cta-btn">
              <span className="cta-btn-text">View Commercial Services</span>
              <div className="cta-btn-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cta-btn-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="cta-btn-shine"></div>
            </Link>
            
            {/* Trust indicators */}
            <div className="commercial-trust">
              <div className="trust-item">
                <span className="trust-number">24 Hours</span>
                <span className="trust-label">Available</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">4.9★</span>
                <span className="trust-label">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
