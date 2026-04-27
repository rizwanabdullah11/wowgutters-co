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
              Commercial Gutter Cleaning
            </h3>
            <p className="commercial-description">
              Reliable gutter and downpipe cleaning for shops, offices, rental properties, schools and commercial buildings.
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
                <span>Fully insured</span>
              </div>
              <div className="commercial-feature-item">
                <span className="feature-check">✓</span>
                <span>Planned maintenance</span>
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="commercial-cta-section">
            <Link href="/commercial" className="commercial-cta-btn">
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
                <span className="trust-number">7 Days</span>
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

      <style>{`
        .commercial-banner-section {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          padding: 60px 0 80px;
          position: relative;
          overflow: hidden;
        }

        /* Decorative background */
        .commercial-bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .commercial-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(25, 197, 139, 0.08) 0%, transparent 70%);
          animation: float 20s infinite ease-in-out;
        }
        .commercial-circle-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          left: -100px;
          animation-delay: 0s;
        }
        .commercial-circle-2 {
          width: 300px;
          height: 300px;
          bottom: -150px;
          right: 10%;
          animation-delay: 7s;
        }
        .commercial-circle-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          right: -50px;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .commercial-banner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .commercial-banner-wrapper {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 40px;
          align-items: center;
          background: white;
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(226, 232, 240, 0.5);
          position: relative;
          overflow: hidden;
        }

        /* Subtle gradient overlay */
        .commercial-banner-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #19C58B, #14B27D, #8DC63F, #FF6B35);
          background-size: 200% 100%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @media (max-width: 1024px) {
          .commercial-banner-wrapper {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
            padding: 32px 24px;
          }
        }

        /* Icon Section */
        .commercial-icon-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .commercial-icon-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .commercial-icon-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid;
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .commercial-icon-ring-1 {
          width: 100%;
          height: 100%;
          border-color: rgba(25, 197, 139, 0.3);
          animation-delay: 0s;
        }
        .commercial-icon-ring-2 {
          width: 85%;
          height: 85%;
          border-color: rgba(25, 197, 139, 0.5);
          animation-delay: 1s;
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        .commercial-icon-main {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #19C58B 0%, #14B27D 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 10px 30px rgba(25, 197, 139, 0.3),
            0 0 0 8px rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 1;
          animation: icon-bounce 2s ease-in-out infinite;
        }

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .commercial-emoji {
          font-size: 3rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        /* Floating badges */
        .commercial-badge {
          position: absolute;
          background: white;
          padding: 6px 12px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          animation: badge-float 3s ease-in-out infinite;
        }
        .commercial-badge-1 {
          top: 0;
          right: -10px;
          color: #19C58B;
          animation-delay: 0s;
        }
        .commercial-badge-2 {
          bottom: 10px;
          left: -10px;
          color: #FF6B35;
          animation-delay: 1.5s;
        }

        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .badge-icon {
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .commercial-icon-section {
            margin: 0 auto;
          }
          .commercial-badge {
            display: none;
          }
        }

        /* Content Section */
        .commercial-content {
          flex: 1;
        }

        .commercial-label-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .commercial-label-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #19C58B;
          background: rgba(25, 197, 139, 0.1);
          border: 1.5px solid rgba(25, 197, 139, 0.3);
          border-radius: 100px;
          padding: 6px 14px;
          text-transform: uppercase;
        }

        .commercial-sparkle {
          font-size: 1rem;
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.7; }
        }

        .commercial-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 900;
          color: #0F172A;
          margin: 0 0 12px;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .commercial-description {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        .commercial-highlight {
          color: #19C58B;
          font-weight: 700;
        }

        .commercial-features {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .commercial-feature-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: #334155;
          font-weight: 600;
        }

        .feature-check {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #19C58B, #14B27D);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 900;
        }

        @media (max-width: 1024px) {
          .commercial-content {
            text-align: center;
          }
          .commercial-label-wrapper {
            justify-content: center;
          }
          .commercial-features {
            justify-content: center;
          }
        }

        /* CTA Section */
        .commercial-cta-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .commercial-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #19C58B 0%, #14B27D 100%);
          color: white;
          font-size: 1rem;
          font-weight: 800;
          padding: 18px 32px;
          border-radius: 16px;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          box-shadow: 
            0 10px 30px rgba(25, 197, 139, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.2) inset;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .commercial-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 20px 40px rgba(25, 197, 139, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.3) inset;
        }

        .commercial-cta-btn:active {
          transform: translateY(-1px);
        }

        .cta-btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }

        .cta-btn-text {
          position: relative;
          z-index: 1;
        }

        .cta-btn-icon-wrapper {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .commercial-cta-btn:hover .cta-btn-icon-wrapper {
          transform: translateX(4px);
        }

        .cta-btn-arrow {
          width: 14px;
          height: 14px;
        }

        /* Trust indicators */
        .commercial-trust {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 20px;
          background: rgba(25, 197, 139, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(25, 197, 139, 0.1);
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .trust-number {
          font-size: 1.25rem;
          font-weight: 900;
          color: #19C58B;
          line-height: 1;
        }

        .trust-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .trust-divider {
          width: 1px;
          height: 30px;
          background: rgba(25, 197, 139, 0.2);
        }

        @media (max-width: 1024px) {
          .commercial-cta-section {
            width: 100%;
          }
          .commercial-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .commercial-banner-wrapper {
            padding: 24px 20px;
          }
          .commercial-icon-wrapper {
            width: 100px;
            height: 100px;
          }
          .commercial-icon-main {
            width: 75px;
            height: 75px;
          }
          .commercial-emoji {
            font-size: 2.5rem;
          }
          .commercial-title {
            font-size: 1.5rem;
          }
          .commercial-cta-btn {
            font-size: 0.9rem;
            padding: 16px 24px;
          }
        }
      `}</style>
    </section>
  );
}
