import React from 'react';
import { Sparkles, Home, Droplets, ArrowRight, Flame } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <Sparkles className="w-6 h-6" />, label: 'Windows & Frames', link: '/windows-cleaning', accent: '#3B82F6', desc: 'Streak-free finish' },
  { icon: <Droplets className="w-6 h-6" />, label: 'Gutters & Fascias', link: '/gutters-cleaning', accent: '#19C58B', desc: 'Deep exterior clean' },
  { icon: <Home className="w-6 h-6" />, label: 'Conservatories', link: '/conservatory-cleaning', accent: '#F97316', desc: 'Restore the shine' },
];

export default function HotWashBanner() {
  return (
    <section className="hot-wash-section">
      {/* Asymmetrical skewed background line */}
      <div className="hot-wash-bg-skew"></div>

      <div className="hot-wash-container">
        
        {/* Main Banner Area - Asymmetrical shape */}
        <div className="hot-wash-banner">
          
          {/* Asymmetrical Glows */}
          <div className="hot-wash-glow hot-wash-glow-1"></div>
          <div className="hot-wash-glow hot-wash-glow-2"></div>
          
          <div className="hot-wash-content-wrapper">
            {/* Left Content */}
            <div className="hot-wash-text-content">
              <div className="hot-wash-badge-row">
                <span className="hot-wash-new-badge">
                  <Flame className="w-4 h-4" />
                  EXTERIOR CLEANING
                </span>
                <span className="hot-wash-eyebrow">DEEP CLEAN OPTION</span>
              </div>
              
              <h2 className="hot-wash-title">
                Restore Your Exterior With <br/>
                <span className="hot-wash-highlight">Hot Wash Cleaning</span>
              </h2>
              
              <p className="hot-wash-desc">
                Hot wash cleaning helps lift stubborn grime, algae and dirt from exterior surfaces for a brighter finish on gutters, fascias, soffits, frames and conservatories.
              </p>
              
              <Link href="/hot-wash" className="hot-wash-cta">
                Explore Hot Wash Cleaning
                <span className="hot-wash-cta-icon">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>

            {/* Right Side Cards */}
            <div className="hot-wash-cards">
              {services.map((svc, i) => (
                <Link key={i} href={svc.link} className="hot-wash-card" style={{ '--card-accent': svc.accent } as React.CSSProperties}>
                  <div className="hot-wash-card-icon">
                    {svc.icon}
                  </div>
                  <div className="hot-wash-card-text">
                    <h4 className="hot-wash-card-title">{svc.label}</h4>
                    <span className="hot-wash-card-desc">{svc.desc}</span>
                  </div>
                  <div className="hot-wash-card-arrow">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      <style>{`
        .hot-wash-section {
          position: relative;
          padding: 100px 24px;
          background-color: #F8FAFC;
          overflow: hidden;
          z-index: 1;
        }

        /* Asymmetrical background slash */
        .hot-wash-bg-skew {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(105deg, #F1F5F9 45%, #E2E8F0 45.1%);
          pointer-events: none;
        }

        .hot-wash-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hot-wash-banner {
          position: relative;
          /* Asymmetrical gradient! */
          background: linear-gradient(115deg, #0F172A 20%, #1e293b 75%, #080c16 100%);
          /* Asymmetrical rounded corners */
          border-radius: 20px 100px 20px 40px;
          padding: 80px 64px;
          overflow: hidden;
          box-shadow: 
            20px 30px 60px rgba(15, 23, 42, 0.25),
            -10px -10px 40px rgba(255, 255, 255, 0.4);
        }

        /* Asymmetrical Ambient Glows */
        .hot-wash-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
        }
        /* Top left glow - large and stretched */
        .hot-wash-glow-1 {
          top: -30%;
          left: -15%;
          width: 800px;
          height: 400px;
          background: #FF6B35;
          transform: rotate(-25deg);
          animation: asymmetricalPulse 9s infinite alternate;
        }
        /* Bottom right glow - perfectly round but smaller */
        .hot-wash-glow-2 {
          bottom: -15%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: #3B82F6;
          animation: asymmetricalPulse 7s infinite alternate-reverse;
        }

        @keyframes asymmetricalPulse {
          0% { transform: scale(1) translate(0, 0) rotate(-25deg); opacity: 0.15; }
          100% { transform: scale(1.15) translate(40px, -20px) rotate(-15deg); opacity: 0.25; }
        }

        .hot-wash-content-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 72px;
        }
        
        @media (max-width: 1024px) {
          .hot-wash-content-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 48px;
          }
          .hot-wash-banner {
            padding: 56px 32px;
            /* Adjust corners for mobile while keeping them asymmetrical */
            border-radius: 20px 60px 20px 20px;
          }
        }

        /* Text Content */
        .hot-wash-text-content {
          flex: 1.2;
        }

        .hot-wash-badge-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .hot-wash-new-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #FF6B35, #ff4d00);
          color: white;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(255, 107, 53, 0.4);
        }

        .hot-wash-eyebrow {
          color: #94A3B8;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .hot-wash-title {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.05;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }

        .hot-wash-highlight {
          background: linear-gradient(to right, #FF6B35, #FFA15C, #FF6B35);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .hot-wash-desc {
          font-size: 1.15rem;
          color: #94A3B8;
          line-height: 1.65;
          margin-bottom: 44px;
          max-width: 520px;
        }

        .hot-wash-cta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          background: white;
          color: #0F172A;
          padding: 14px 24px 14px 32px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hot-wash-cta-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FF6B35;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .hot-wash-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .hot-wash-cta:hover .hot-wash-cta-icon {
          transform: translateX(5px);
        }

        /* Right Cards */
        .hot-wash-cards {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
          width: 100%;
        }

        .hot-wash-card {
          display: flex;
          align-items: center;
          gap: 22px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          /* Asymmetrical rounding on the cards too! */
          border-radius: 12px 30px 12px 12px;
          padding: 22px 28px;
          text-decoration: none;
          backdrop-filter: blur(12px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .hot-wash-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: var(--card-accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hot-wash-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(-6px) translateY(-2px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 12px 12px 30px rgba(0,0,0,0.2);
        }

        .hot-wash-card:hover::before {
          opacity: 1;
        }

        .hot-wash-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          /* Asymmetrical squircle */
          border-radius: 16px 24px 12px 20px;
          background: rgba(255, 255, 255, 0.08);
          color: var(--card-accent);
          flex-shrink: 0;
          transition: all 0.4s ease;
        }

        .hot-wash-card:hover .hot-wash-card-icon {
          transform: scale(1.15) rotate(-5deg);
          background: var(--card-accent);
          color: white;
          border-radius: 20px 16px 24px 12px;
        }

        .hot-wash-card-text {
          flex: 1;
        }

        .hot-wash-card-title {
          color: white;
          font-weight: 700;
          font-size: 1.15rem;
          margin: 0 0 6px 0;
        }

        .hot-wash-card-desc {
          color: #94A3B8;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .hot-wash-card-arrow {
          color: rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .hot-wash-card:hover .hot-wash-card-arrow {
          color: white;
          transform: translateX(6px);
        }

        @media (max-width: 640px) {
          .hot-wash-card {
            padding: 20px;
            gap: 16px;
            border-radius: 12px 24px 12px 12px;
          }
          .hot-wash-card-text {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
