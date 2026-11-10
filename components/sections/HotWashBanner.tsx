import React from 'react';
import { Sparkles, Home, Droplets, ArrowRight, Flame } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <Sparkles className="w-6 h-6" />, label: 'Windows & Frames', link: '/windows-cleaning', accent: '#3B82F6', desc: 'Streak-free finish' },
  { icon: <Droplets className="w-6 h-6" />, label: 'Gutters & Fascias', link: '/services/gutter-cleaning/', accent: '#19C58B', desc: 'Deep exterior clean' },
  { icon: <Home className="w-6 h-6" />, label: 'Conservatories', link: '/services/conservatory/', accent: '#F97316', desc: 'Restore the shine' },
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
              
              <Link href="/services/hot-wash-cleaning/" className="hot-wash-cta">
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
                    <h3 className="hot-wash-card-title">{svc.label}</h3>
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

    </section>
  );
}
