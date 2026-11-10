'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isQuoteEmbedPath } from '@/lib/isQuoteEmbedPath';
import { areaNavigationUrl } from '@/lib/areaSlugs';
import { resolveAreaSlug } from '@/lib/resolveAreaSlug';
import logo from '@/assets/wow-gutters-logo1.webp';
import { Phone, Mail, Facebook, Instagram, MessageCircle, Search, FileText, HelpCircle, MapPin, Map, Navigation } from 'lucide-react';
import { BUSINESS_HOURS, getFormattedBusinessHours, getFormattedHours } from '@/lib/businessHours';

export default function ContactInfoSection() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState('');
  const [openingTimes, setOpeningTimes] = useState(() =>
    BUSINESS_HOURS.map((hour) => ({
      day: hour.day,
      hours: hour.isOpen ? getFormattedHours(hour.opens, hour.closes) : 'Closed',
      isToday: false,
      isOpen: hour.isOpen,
    })),
  );

  useEffect(() => {
    setOpeningTimes(getFormattedBusinessHours());
  }, []);

  if (isQuoteEmbedPath(pathname)) {
    return null;
  }
  
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const fullAddress = [addressLine1, addressLine2, addressCity, addressPostcode].filter(Boolean).join(', ');

  // Full-page navigation — reliable on static export (Hostinger); router.push can fail in production.
  const handleSearch = () => {
    const slug = resolveAreaSlug(searchQuery);
    if (slug) {
      window.location.href = areaNavigationUrl(slug);
      return;
    }
    setSearchError(
      searchQuery.trim()
        ? `No coverage page found for "${searchQuery.trim()}". Try Birmingham, Coventry, or Wolverhampton.`
        : 'Please enter a town or city name.',
    );
  };

  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        
        {/* Left Column: Contact info */}
        <div className="contact-main-col">
          <div className="contact-header">
            <div className="contact-logo-wrap">
              <Image
                src={logo}
                alt="WOW Gutters Ltd logo — professional gutter cleaning and roofline services"
                width={260}
                height={100}
                sizes="(max-width: 768px) 180px, 260px"
                className="contact-logo"
              />
            </div>
            <div className="contact-header-text">
              <span className="contact-eyebrow">BOOK YOUR CLEAN</span>
              <h2 className="contact-title">Contact WOW Gutters Ltd</h2>
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
            <p className="contact-social-label">Follow WOW Gutters Ltd updates</p>
            <div className="contact-social-row">
              <a href="https://web.facebook.com/wowgutters.co.uk" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on Facebook" className="social-pill"><Facebook className="w-5 h-5"/></a>
              <a href="https://uk.pinterest.com/wowguttersltd/" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on Pinterest" className="social-pill"><svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.31-.24.99-.27 1.13-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg></a>
              <a href="https://www.instagram.com/wowgutters/" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on Instagram" className="social-pill"><Instagram className="w-5 h-5"/></a>
              <a href="https://wa.me/447421433910" target="_blank" rel="noopener noreferrer" aria-label="Message WOW Gutters Ltd on WhatsApp" className="social-pill"><MessageCircle className="w-5 h-5"/></a>
            </div>
          </div>
          
          {/* Quick buttons */}
          <div className="contact-quick-actions">
            <Link href="/quote/">
              <button className="contact-quick-btn">
                <FileText className="w-5 h-5" /> Fast Quote
              </button>
            </Link>
            <Link href="/help/">
              <button className="contact-quick-btn">
                <HelpCircle className="w-5 h-5" /> Help Centre
              </button>
            </Link>
          </div>
        </div>

        {/* Middle Column: Opening Times */}
        <div className="contact-times-col">
          <h3 className="times-title">Opening Hours</h3>
          <div className="times-list">
            {openingTimes.map((time, index) => (
              <div key={index} className={`time-row ${time.isToday ? 'time-row-today' : ''}`}>
                <span className="time-day">{time.day}</span>
                <span className="time-hours">{time.hours}</span>
                {time.isToday && <span className="time-badge">Open Now</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Search Local Team */}
        <div className="contact-search-col">
          <div className="search-card">
            <div className="search-card-header">
              <div className="search-icon-circle">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <h3 className="search-title">Find Gutter Cleaning Near You</h3>
              <p className="search-desc">
                Enter your town or city to check local gutter cleaning coverage near you.
              </p>
            </div>
            
            <div className="search-input-wrap">
              {/* No <form> — native GET submit caused wowgutters.co.uk/? on static export before hydration */}
              <div role="search" className="search-field">
                <input
                  type="text"
                  placeholder="E.g. your town..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (searchError) setSearchError('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                  className="search-input"
                  aria-label="Search for gutter cleaning in your town or city"
                  aria-describedby={searchError ? 'area-search-error' : undefined}
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  className="search-submit"
                  aria-label="Search locations"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              {searchError && (
                <p id="area-search-error" className="search-error" role="alert">
                  {searchError}
                </p>
              )}
            </div>
            
            <div className="search-illustration">
              <MapPin className="w-12 h-12 illustration-pin" />
              <Map className="w-24 h-24 illustration-map" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
