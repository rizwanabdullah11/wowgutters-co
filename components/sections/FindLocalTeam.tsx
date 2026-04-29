'use client';
import { useState } from 'react';
import { MapPin, Search, Navigation } from 'lucide-react';

const locations = [
  { name: 'Your area', coordinates: '52.4862,-1.8904' },
  { name: 'Coventry', coordinates: '52.4068,-1.5197' },
  { name: 'Wolverhampton', coordinates: '52.5865,-2.1285' },
  { name: 'Dudley', coordinates: '52.5120,-2.0890' },
  { name: 'Sandwell', coordinates: '52.5361,-1.9644' },
  { name: 'Solihull', coordinates: '52.4118,-1.7776' },
  { name: 'Walsall', coordinates: '52.5862,-1.9829' },
  { name: 'Worcester', coordinates: '52.1936,-2.2208' },
  { name: 'Redditch', coordinates: '52.3068,-1.9410' },
  { name: 'Bromsgrove', coordinates: '52.3356,-2.0575' },
  { name: 'Kidderminster', coordinates: '52.3880,-2.2497' },
  { name: 'Malvern', coordinates: '52.1122,-2.3250' },
  { name: 'Evesham', coordinates: '52.0930,-1.9490' },
  { name: 'Droitwich Spa', coordinates: '52.2680,-2.1520' },
];

export default function FindLocalTeam() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('United Kingdom');

  const filtered = locations.filter(
    (loc) => searchQuery === '' || loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="find-local-team" className="local-team-section">
      <div className="local-team-container">

        {/* Header content */}
        <div className="local-team-header">
          <div className="local-team-eyebrow-wrap">
            <span className="local-team-line"></span>
            <span className="local-team-eyebrow">SERVICE AREAS</span>
            <span className="local-team-line"></span>
          </div>
          
          <h2 className="local-team-title">Find Gutter Cleaning Near You</h2>
          <p className="local-team-desc">
            Find local gutter cleaning coverage in your town or city.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="local-team-grid">
          
          {/* Left Column: Search & List */}
          <div className="local-team-search-col">
            
            <div className="local-team-search-box">
              <Search className="search-icon-left" />
              <input
                type="text"
                placeholder="Search your town or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="local-team-input"
              />
            </div>

            <div className="local-team-pills">
              {filtered.length > 0 ? (
                filtered.map((loc, i) => {
                  const isSelected = selectedLocation === `${loc.name}, UK`;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedLocation(`${loc.name}, UK`)}
                      className={`local-pill ${isSelected ? 'local-pill-active' : ''}`}
                    >
                      <MapPin className="local-pill-icon" />
                      {loc.name}
                    </button>
                  );
                })
              ) : (
                <div className="local-team-empty">
                  No locations found matching &quot;{searchQuery}&quot;
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Map Block */}
          <div className="local-team-map-col">
            <div className="local-team-map-wrapper">
              {/* Optional UI overlay over map to make it look premium */}
              <div className="map-overlay-badge">
                <Navigation className="w-4 h-4 text-[#19C58B]" />
                Viewing: <strong style={{ color: '#0F172A' }}>{selectedLocation.replace(', UK', '')}</strong>
              </div>
              <iframe
                title="Service Area Map"
                className="local-team-map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(selectedLocation)}&zoom=10`}
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .local-team-section {
          padding: 80px 24px 100px;
          background: #FFFFFF;
          position: relative;
        }

        .local-team-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        /* HEADER */
        .local-team-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .local-team-eyebrow-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .local-team-eyebrow {
          color: #19C58B;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .local-team-line {
          height: 1px;
          width: 40px;
          background-color: #19C58B;
          opacity: 0.5;
        }
        .local-team-title {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: #0F172A;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        .local-team-desc {
          color: #64748B;
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID */
        .local-team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .local-team-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* LEFT SIDE - Search */
        .local-team-search-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .local-team-search-box {
          position: relative;
          background: white;
          border-radius: 100px;
          box-shadow: 0 4px 25px rgba(0,0,0,0.06);
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
        }
        .local-team-search-box:focus-within {
          box-shadow: 0 8px 30px rgba(25, 197, 139, 0.15);
          border-color: #19C58B;
        }
        .search-icon-left {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
          width: 20px;
          height: 20px;
        }
        .local-team-input {
          width: 100%;
          padding: 20px 24px 20px 54px;
          border: none;
          background: transparent;
          font-size: 1.05rem;
          font-weight: 500;
          color: #0F172A;
          outline: none;
        }
        .local-team-input::placeholder {
          color: #94A3B8;
        }

        /* PILLS */
        .local-team-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-content: flex-start;
          max-height: 480px;
          overflow-y: auto;
          padding-right: 8px; /* For scrollbar */
        }
        
        /* Custom scrollbar for pills */
        .local-team-pills::-webkit-scrollbar {
          width: 6px;
        }
        .local-team-pills::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 10px;
        }
        .local-team-pills::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 10px;
        }

        .local-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 100px;
          background: white;
          border: 1px solid #E2E8F0;
          color: #475569;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .local-pill-icon {
          width: 16px;
          height: 16px;
          color: #94A3B8;
          transition: color 0.2s ease;
        }

        .local-pill:hover {
          border-color: #19C58B;
          color: #166534;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(25, 197, 139, 0.1);
        }
        .local-pill:hover .local-pill-icon {
          color: #19C58B;
        }

        .local-pill-active {
          background: #19C58B;
          border-color: #19C58B;
          color: white !important;
          box-shadow: 0 6px 16px rgba(25, 197, 139, 0.25);
        }
        .local-pill-active .local-pill-icon {
          color: white !important;
        }
        
        .local-team-empty {
          width: 100%;
          text-align: center;
          padding: 40px;
          color: #64748B;
          font-weight: 500;
          background: #F8FAFC;
          border-radius: 16px;
          border: 1px dashed #E2E8F0;
        }

        /* RIGHT SIDE - Map */
        .local-team-map-col {
          width: 100%;
          height: 100%;
          min-height: 500px;
        }
        .local-team-map-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08); /* Premium dropping shadow */
          background: #E2E8F0;
          /* Nice thick green border for brand feeling */
          border: 4px solid white;
          border-bottom: 6px solid #19C58B;
        }
        
        .map-overlay-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 10;
          background: white;
          padding: 8px 16px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #64748B;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          pointer-events: none; /* Let clicks pass through to map */
        }

        .local-team-map {
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </section>
  );
}
