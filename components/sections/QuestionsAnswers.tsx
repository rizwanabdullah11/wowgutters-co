'use client';
import React, { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const categories = [
  'Conservatory Gutters', 'Damp', 'General', 'Gutter Cleaning',
  'Gutter Guards', 'Gutter Problems', 'Gutter Repairs',
  'Hot Wash Services', 'How to', 'Most Asked', 'Parapet Wall',
  'Roof Cleaning', 'Water Butts',
];

const questions: Record<string, string[]> = {
  'Conservatory Gutters': [
    'How do you clean gutters between a house and conservatory?',
    'How do you clean gutters over a conservatory?',
    'How to fix leaking conservatory gutters',
  ],
  'Gutter Cleaning': [
    'How often should gutters be cleaned?',
    'What is the best time of year to clean gutters?',
    'Can I clean gutters myself?',
  ],
  'General': [
    'What areas do you cover?',
    'Do you offer free quotes?',
    'Are you insured?',
  ],
};

const CAT_ACCENTS = ['#3B82F6', '#19C58B', '#F97316', '#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#6366F1', '#10B981', '#EF4444', '#06B6D4', '#84CC16', '#F97316'];

export default function QuestionsAnswers() {
  const [activeCategory, setActiveCategory] = useState('Conservatory Gutters');
  const [searchQuery, setSearchQuery] = useState('');

  const currentQuestions = questions[activeCategory] || questions['Conservatory Gutters'];
  const activeCatIdx = categories.indexOf(activeCategory);

  return (
    <section className="qa-section">
      {/* Wave Top */}
      <div className="qa-wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="qa-container">
        
        {/* Header */}
        <div className="qa-header">
          <span className="qa-eyebrow">GUTTER HELP</span>
          <h2 className="qa-title">Common Gutter Cleaning Questions</h2>
          <p className="qa-desc">
            Clear answers about gutter cleaning, downpipe blockages, repairs, roof cleaning and regular maintenance.
          </p>
        </div>

        <div className="qa-grid">
          
          {/* Left: Categories + Questions */}
          <div className="qa-main-col">
            
            {/* Category Pills */}
            <div className="qa-pills">
              {categories.map((cat, i) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`qa-pill ${isActive ? 'qa-pill-active' : ''}`}
                    style={{
                      '--cat-accent': CAT_ACCENTS[i],
                    } as React.CSSProperties}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Question List */}
            <div className="qa-list">
              {currentQuestions.map((q, index) => (
                <div key={index} className="qa-card" style={{ '--current-accent': CAT_ACCENTS[activeCatIdx] } as React.CSSProperties}>
                  <div className="qa-card-icon">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <p className="qa-card-text">{q}</p>
                  <ArrowRight className="qa-card-arrow w-5 h-5" />
                </div>
              ))}
            </div>

          </div>

          {/* Right: Sticky Sidebar Card */}
          <div className="qa-sidebar-col">
            <div className="qa-sidebar-card">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400"
                alt="Help Centre"
                className="qa-sidebar-img"
              />
              <div className="qa-sidebar-content">
                <span className="qa-sidebar-eyebrow">NEED ADVICE?</span>
                <h3 className="qa-sidebar-title">Ask our local team</h3>

                <div className="qa-sidebar-search">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="qa-search-input"
                  />
                  <HelpCircle className="qa-search-icon w-5 h-5" />
                </div>

                <button className="qa-sidebar-btn">
                  Visit Help Centre
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave Bottom */}
      <div className="qa-wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <style>{`
        .qa-section {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 0;
          overflow: hidden;
        }

        .qa-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(25, 197, 139, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .qa-wave-top,
        .qa-wave-bottom {
          display: block;
          line-height: 0;
        }
        .qa-wave-top svg,
        .qa-wave-bottom svg {
          width: 100%;
          height: 60px;
          display: block;
        }

        .qa-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px 60px;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .qa-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .qa-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .qa-title {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: white;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        .qa-desc {
          color: rgba(255,255,255,0.85);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID */
        .qa-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        @media (max-width: 1024px) {
          .qa-grid { grid-template-columns: 1fr; }
        }

        /* Pills */
        .qa-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        .qa-pill {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          border-top: 2px solid var(--cat-accent, rgba(255,255,255,0.3));
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
        }
        .qa-pill:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        .qa-pill-active {
          background: white !important;
          color: #0F172A !important;
          border-top: 3px solid var(--cat-accent) !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        /* List Cards */
        .qa-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .qa-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          padding: 20px 24px;
          border-radius: 20px;
          cursor: pointer;
          border-left: 4px solid var(--current-accent);
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .qa-card:hover {
          transform: translateX(6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
        .qa-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--current-accent);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .qa-card:hover .qa-card-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .qa-card-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          flex: 1;
        }
        .qa-card-arrow {
          color: var(--current-accent);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .qa-card:hover .qa-card-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        /* Sidebar Card */
        .qa-sidebar-col {
          position: relative;
        }
        .qa-sidebar-card {
          position: sticky;
          top: 32px;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .qa-sidebar-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        .qa-sidebar-content {
          padding: 32px;
        }
        .qa-sidebar-eyebrow {
          color: #166534;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 8px;
        }
        .qa-sidebar-title {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0F172A;
          margin: 0 0 24px 0;
        }

        .qa-sidebar-search {
          position: relative;
          margin-bottom: 24px;
        }
        .qa-search-input {
          width: 100%;
          padding: 16px 20px;
          padding-right: 48px;
          border-radius: 14px;
          border: 2px solid #E2E8F0;
          font-size: 1rem;
          font-weight: 500;
          color: #0F172A;
          outline: none;
          transition: border-color 0.2s;
        }
        .qa-search-input:focus {
          border-color: #19C58B;
        }
        .qa-search-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }

        .qa-sidebar-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #0F172A;
          color: white;
          padding: 16px;
          border-radius: 14px;
          font-weight: 800;
          font-size: 1.05rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .qa-sidebar-btn:hover {
          background: #19C58B;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(25, 197, 139, 0.3);
        }
        .qa-sidebar-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
