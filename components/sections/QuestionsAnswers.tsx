'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, HelpCircle } from 'lucide-react';

const categories = [
  'Conservatory Gutters', 'Damp', 'General', 'Gutter Cleaning',
  'Gutter Guards', 'Gutter Problems', 'Gutter Repairs',
  'Hot Wash Services', 'How to', 'Most Asked', 'Parapet Wall',
  'Roof Cleaning',
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
          <span className="qa-eyebrow">HELP CENTRE</span>
          <h2 className="qa-title">Common Questions About Our Services</h2>
          <p className="qa-desc">
            Clear answers about gutter cleaning, repairs, roof cleaning, downpipe blockages and regular maintenance.
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
              <Image
                src="/professional-gutter-clean.webp"
                alt="WOW Gutters Ltd help centre — ask our Birmingham gutter cleaning team"
                width={400}
                height={300}
                loading="lazy"
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

    </section>
  );
}
