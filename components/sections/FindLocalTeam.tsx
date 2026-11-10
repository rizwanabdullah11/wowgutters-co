'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Search, Navigation } from 'lucide-react';
import { areaPath } from '@/lib/areaSlugs';
import { mapsPlaceEmbedSrc } from '@/lib/mapsEmbed';

const locations: { name: string; coordinates: string; slug?: string }[] = [
  { name: 'Birmingham', coordinates: '52.4862,-1.8904', slug: 'birmingham' },
  { name: 'Solihull', coordinates: '52.4118,-1.7776', slug: 'solihull' },
  { name: 'Sutton Coldfield', coordinates: '52.5630,-1.8226', slug: 'sutton-coldfield' },
  { name: 'Wolverhampton', coordinates: '52.5865,-2.1285', slug: 'wolverhampton' },
  { name: 'Walsall', coordinates: '52.5862,-1.9829', slug: 'walsall' },
  { name: 'Dudley', coordinates: '52.5120,-2.0890', slug: 'dudley' },
  { name: 'West Bromwich', coordinates: '52.5187,-1.9945', slug: 'west-bromwich' },
  { name: 'Sandwell', coordinates: '52.5361,-1.9644', slug: 'sandwell' },
  { name: 'Halesowen', coordinates: '52.4502,-2.0509', slug: 'halesowen' },
  { name: 'Coventry', coordinates: '52.4068,-1.5197', slug: 'coventry' },
  { name: 'Worcester', coordinates: '52.1936,-2.2208', slug: 'worcester' },
  { name: 'Redditch', coordinates: '52.3068,-1.9410', slug: 'redditch' },
  { name: 'Bromsgrove', coordinates: '52.3356,-2.0575', slug: 'bromsgrove' },
  { name: 'Kidderminster', coordinates: '52.3880,-2.2497', slug: 'kidderminster' },
  { name: 'Malvern', coordinates: '52.1122,-2.3250', slug: 'malvern' },
  { name: 'Evesham', coordinates: '52.0930,-1.9490', slug: 'evesham' },
  { name: 'Droitwich Spa', coordinates: '52.2680,-2.1520', slug: 'droitwich-spa' },
];

export default function FindLocalTeam() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Birmingham, West Midlands');

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
          
          <h2 className="local-team-title">Find WOW Gutters Near You</h2>
          <p className="local-team-desc">
            Find local gutter and exterior service coverage in your town or city.
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
                  const pillClass = `local-pill ${isSelected ? 'local-pill-active' : ''}`;
                  if (loc.slug) {
                    return (
                      <Link
                        key={loc.slug}
                        href={areaPath(loc.slug)}
                        onClick={() => setSelectedLocation(`${loc.name}, UK`)}
                        className={pillClass}
                      >
                        <MapPin className="local-pill-icon" />
                        {loc.name}
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedLocation(`${loc.name}, UK`)}
                      className={pillClass}
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
                src={mapsPlaceEmbedSrc(selectedLocation, 11)}
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
