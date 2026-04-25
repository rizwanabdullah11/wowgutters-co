'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/wow-gutter-logo.png';
import { colors } from '@/constants/colors';
import { Phone, Mail, Facebook, Youtube, Twitter, Instagram, MessageCircle, Smartphone, Search, FileText, HelpCircle, ThumbsUp, MapPin, Map, Navigation } from 'lucide-react';

export default function ContactInfoSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const fullAddress = [addressLine1, addressLine2, addressCity, addressPostcode].filter(Boolean).join(', ');

  const openingTimes = [
    { day: 'Sunday', hours: '10:00am – 6:00pm' },
    { day: 'Monday', hours: '7:00am – 8:00pm' },
    { day: 'Tuesday', hours: '7:00am – 8:00pm' },
    { day: 'Wednesday', hours: '7:00am – 8:00pm' },
    { day: 'Thursday', hours: '7:00am – 8:00pm' },
    { day: 'Friday', hours: '7:00am – 8:00pm' },
    { day: 'Saturday', hours: '9:00am – 6:00pm' }
  ];

  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        
        {/* Left Column: Contact info */}
        <div className="contact-main-col">
          <div className="contact-header">
            <div className="contact-logo-wrap">
              <Image
                src={logo}
                alt="WOW Gutters logo — professional gutter cleaning Birmingham & West Midlands"
                width={260}
                height={100}
                sizes="(max-width: 768px) 180px, 260px"
                className="contact-logo"
              />
            </div>
            <div className="contact-header-text">
              <span className="contact-eyebrow">REACH OUT TODAY</span>
              <h2 className="contact-title">Get in Touch</h2>
            </div>
          </div>

          <div className="contact-methods">
            <a href="tel:+447421433910" className="contact-method-card">
              <div className="contact-icon-box">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="contact-method-label">Call Us</span>
                <span className="contact-method-value">07421 433910</span>
              </div>
            </a>
            <a href="mailto:support@wowgutters.co.uk" className="contact-method-card">
              <div className="contact-icon-box">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="contact-method-label">Email Us</span>
                <span className="contact-method-value">support@wowgutters.co.uk</span>
              </div>
            </a>
          </div>

          {fullAddress && (
            <div className="contact-methods" aria-label="Business address">
              <div className="contact-method-card" role="group" aria-label="Address">
                <div className="contact-icon-box" aria-hidden="true">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="contact-method-label">Address</span>
                  <span className="contact-method-value" style={{ fontSize: '1rem' }}>{fullAddress}</span>
                </div>
              </div>
            </div>
          )}

          <div className="contact-socials">
            <p className="contact-social-label">Follow our updates</p>
            <div className="contact-social-row">
              <a href="https://www.facebook.com/wowgutters" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters on Facebook" className="social-pill"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.youtube.com/@wowgutters" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters on YouTube" className="social-pill"><Youtube className="w-5 h-5"/></a>
              <a href="https://twitter.com/wowgutters" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters on X/Twitter" className="social-pill"><Twitter className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/wowgutters" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters on Instagram" className="social-pill"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="social-pill"><MessageCircle className="w-5 h-5"/></a>
            </div>
          </div>
          
          {/* Quick buttons */}
          <div className="contact-quick-actions">
            <button className="contact-quick-btn">
              <FileText className="w-5 h-5" /> Fast Quote
            </button>
            <button className="contact-quick-btn">
              <HelpCircle className="w-5 h-5" /> Help Centre
            </button>
          </div>
        </div>

        {/* Middle Column: Opening Times */}
        <div className="contact-times-col">
          <h3 className="times-title">Opening Hours</h3>
          <div className="times-list">
            {openingTimes.map((time, index) => {
              const isToday = index === new Date().getDay();
              return (
                <div key={index} className={`time-row ${isToday ? 'time-row-today' : ''}`}>
                  <span className="time-day">{time.day}</span>
                  <span className="time-hours">{time.hours}</span>
                  {isToday && <span className="time-badge">Open Today</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Search Local Team */}
        <div className="contact-search-col">
          <div className="search-card">
            <div className="search-card-header">
              <div className="search-icon-circle">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <h3 className="search-title">Find Your Local Team</h3>
              <p className="search-desc">
                Enter your Town or City to connect directly with your independent local gutter engineer.
              </p>
            </div>
            
            <div className="search-input-wrap">
              <input
                type="text"
                placeholder="E.g. Nottingham..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-submit">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <div className="search-illustration">
              <MapPin className="w-12 h-12 illustration-pin" />
              <Map className="w-24 h-24 illustration-map" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-info-section {
          padding: 100px 24px;
          background-color: #F8FAFC;
          position: relative;
        }

        .contact-info-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .contact-info-container {
            grid-template-columns: 1.2fr 1fr;
          }
          .contact-search-col {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .contact-info-container {
            grid-template-columns: 1fr;
          }
        }

        /* Left Col */
        .contact-header {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: nowrap;
          margin-bottom: 40px;
        }
        .contact-logo-wrap {
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: transparent;
        }
        .contact-logo {
          width: auto;
          height: 96px;
          max-width: none;
          object-fit: contain;
        }
        .contact-header-text {
          min-width: 0;
        }
        @media (max-width: 768px) {
          .contact-header {
            gap: 12px;
          }
          .contact-logo-wrap {
            height: 70px;
          }
          .contact-logo {
            height: 80px;
          }
          .contact-eyebrow {
            font-size: 0.65rem;
            letter-spacing: 1.4px;
          }
          .contact-title {
            font-size: 1.9rem;
          }
        }
        .contact-eyebrow {
          color: #166534;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 4px;
          display: block;
        }
        .contact-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          letter-spacing: -1px;
          line-height: 1;
          white-space: nowrap;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }
        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: white;
          border-radius: 16px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.3s ease;
        }
        .contact-method-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.06);
          border-color: #19C58B;
        }
        .contact-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #F1F5F9;
          color: #19C58B;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .contact-method-card:hover .contact-icon-box {
          background: #19C58B;
          color: white;
        }
        .contact-method-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-method-value {
          display: block;
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
        }

        .contact-socials {
          margin-bottom: 36px;
        }
        .contact-social-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #64748B;
          margin: 0 0 12px 0;
        }
        .contact-social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .social-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: white;
          color: #1e293b;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.04);
          transition: all 0.2s ease;
        }
        .social-pill:hover {
          background: #19C58B;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(25, 197, 139, 0.25);
        }

        .contact-quick-actions {
          display: flex;
          gap: 16px;
        }
        .contact-quick-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          border-radius: 12px;
          background: #166534;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .contact-quick-btn:hover {
          background: #14532B;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(22, 101, 52, 0.2);
        }

        /* Middle Col */
        .contact-times-col {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .times-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 24px 0;
          padding-bottom: 20px;
          border-bottom: 2px dashed #E2E8F0;
        }
        .times-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .time-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 8px;
          transition: background 0.2s ease;
        }
        .time-row:hover {
          background: #F8FAFC;
        }
        .time-row-today {
          background: rgba(25, 197, 139, 0.1) !important;
          position: relative;
        }
        .time-badge {
          position: absolute;
          right: -10px;
          top: -10px;
          background: #19C58B;
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 100px;
          text-transform: uppercase;
        }
        .time-day {
          font-weight: 600;
          color: #64748B;
        }
        .time-row-today .time-day {
          color: #166534;
          font-weight: 800;
        }
        .time-hours {
          font-weight: 700;
          color: #0F172A;
        }
        .time-row-today .time-hours {
          color: #166534;
        }

        /* Right Col (Search) */
        .search-card {
          background: linear-gradient(135deg, #166534 0%, #19C58B 100%);
          border-radius: 24px;
          padding: 36px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(25, 197, 139, 0.2);
        }
        .search-card-header {
          position: relative;
          z-index: 2;
        }
        .search-icon-circle {
          width: 56px;
          height: 56px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .search-title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin: 0 0 12px 0;
          line-height: 1.1;
        }
        .search-desc {
          color: rgba(255,255,255,0.85);
          font-size: 1.05rem;
          line-height: 1.5;
          margin: 0 0 32px 0;
        }

        .search-input-wrap {
          position: relative;
          z-index: 2;
          margin-bottom: auto;
        }
        .search-input {
          width: 100%;
          padding: 18px 24px;
          padding-right: 60px;
          border-radius: 16px;
          border: none;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0F172A;
          background: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .search-input:focus {
          outline: 4px solid rgba(255,255,255,0.3);
        }
        .search-submit {
          position: absolute;
          right: 8px;
          top: 8px;
          bottom: 8px;
          width: 44px;
          border-radius: 12px;
          background: #166534;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .search-submit:hover {
          background: #14532B;
        }

        .search-illustration {
          position: absolute;
          bottom: -20px;
          right: -20px;
          opacity: 0.15;
          z-index: 1;
          transform: rotate(-10deg);
          pointer-events: none;
        }
        .illustration-pin {
          position: absolute;
          top: -20px;
          left: 40px;
          color: white;
          animation: bounce 2s infinite ease-in-out;
        }
        .illustration-map {
          color: white;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
