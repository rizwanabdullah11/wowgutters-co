import { HideOnQuoteEmbed, OnlyOnHome } from '@/components/navigation/PathGate';
import ScrollTopButton from '@/components/navigation/ScrollTopButton';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/wow-gutter-logo.webp';
import { colors } from '@/constants/colors';
import { areaPath } from '@/lib/areaSlugs';
import { BUSINESS_DIRECTORY_LISTINGS } from '@/lib/citationListings';
import { formatNapAddress } from '@/lib/businessDetails';
import { 
  Phone, Mail, MapPin, Star, ArrowUp, 
  Facebook, Instagram, Linkedin,
  CheckCircle, ArrowRight 
} from 'lucide-react';

export default function Footer() {
  const services = [
    'Gutter Cleaning', 'Gutter Repairs', 'Roof Cleaning',
    'Hot Wash Cleaning'
  ];

  const specialServices = [
    { name: 'Gutter Inspection', path: '/services/gutter-inspection' },
    { name: 'Roof Inspection', path: '/services/roof-inspection' },
    { name: 'Commercial Gutter Cleaning', path: '/services/commercial-gutter-cleaning' },
    { name: 'Commercial Roof Cleaning', path: '/services/commercial-roof-cleaning' },
    { name: 'Conservatory Cleaning', path: '/services/conservatory' },
  ];

  const general = [
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Gutter Blog', path: '/blog' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Gutter Cleaning Calculator', path: '/gutter-cleaning-calculator' },
  ];

  const legal = [
    { name: 'Privacy', path: '/privacy-policy' },
    { name: 'Terms', path: '/terms-and-conditions' },
    { name: 'Cookies', path: '/cookie-policy' },
  ];

  const info = [
    { name: 'Questions & Answers', path: '/help' },
    { name: 'Latest News', path: '/latest-news' },
    { name: 'The Gutter Gallery', path: '/the-gutter-gallery' },
    { name: 'Neighbourhood Discount', path: '/neighbourhood-discount' },
    { name: 'OAP Discount', path: '/oap-discount' },
    { name: 'Prices', path: '/gutter-cleaning-prices' },
    { name: 'Quotes', path: '/quote' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const areas = [
    'Birmingham', 'Solihull', 'Sutton Coldfield', 'Wolverhampton',
    'Walsall', 'Dudley', 'West Bromwich', 'Sandwell', 'Halesowen',
    'Coventry', 'Worcester',
    'Redditch', 'Bromsgrove', 'Kidderminster', 'Malvern',
    'Evesham', 'Droitwich Spa'
  ];

  const hubLinks = [
    { name: 'All Gutter Cleaning Areas', path: '/gutter-cleaning-service-areas/' },
    { name: 'All Roof Cleaning Areas', path: '/roof-cleaning-service-areas/' },
    { name: 'Full Service Directory', path: '/service-areas/' },
  ];

  return (
    <HideOnQuoteEmbed>
      <footer className="site-footer">
        <div className="footer-wave-top">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z" fill="#0F172A" />
        </svg>
      </div>

      <div className="footer-main-area">
        <div className="footer-container">
          
          {/* Top Brand Block */}
          <div className="footer-brand-header">
            <div className="footer-logo-box">
              <Image
                src={logo}
                alt="WOW Gutters Ltd logo — professional gutter cleaning and roofline services"
                width={320}
                height={150}
                sizes="(max-width: 900px) 240px, 320px"
                className="footer-logo"
                priority={false}
              />
            </div>
            <div className="footer-brand-text">
              <p className="footer-company-name">WOW Gutters Ltd</p>
              <p className="footer-company-tagline">
                Professional{' '}
                <OnlyOnHome>gutter cleaning in Birmingham</OnlyOnHome>
                <OnlyOnHome invert>
                  <Link href="/" className="footer-tagline-link">gutter cleaning in Birmingham</Link>
                </OnlyOnHome>{' '}
                &amp; roofline services across the West Midlands
              </p>
              <div className="footer-ratings">
                <span className="rating-text">Rated 4.9★ on Google</span>
              </div>
            </div>
            
            <div className="footer-contact-pills">
              <div className="contact-pill"><Phone className="w-4 h-4"/> 07421 433910</div>
              <div className="contact-pill"><Mail className="w-4 h-4"/> support@wowgutters.co.uk</div>
              <address className="contact-pill not-italic"><MapPin className="w-4 h-4"/> {formatNapAddress()}</address>
            </div>
          </div>

          <OnlyOnHome><hr className="footer-divider" /></OnlyOnHome>

          {/* Four-column link grid — homepage only */}
          <OnlyOnHome>
              <h2 className="sr-only">Site navigation and service areas</h2>
              <div className="footer-links-grid">
                <div className="footer-col">
                  <h3 className="footer-col-title">Our Services</h3>
                  <ul className="footer-list">
                    {services.map((item, i) => (
                      <li key={i}>
                        <Link href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
                          <ArrowRight className="w-3 h-3 link-arrow" /> {item}
                        </Link>
                      </li>
                    ))}
                    {specialServices.map((item, i) => (
                      <li key={`special-${i}`}>
                        <Link href={item.path} className="footer-link">
                          <ArrowRight className="w-3 h-3 link-arrow" /> {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer-col">
                  <h3 className="footer-col-title">General</h3>
                  <ul className="footer-list">
                    {general.map((item, i) => (
                      <li key={i}>
                        <Link href={item.path} className="footer-link">
                          <ArrowRight className="w-3 h-3 link-arrow" /> {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer-col">
                  <h3 className="footer-col-title">Information</h3>
                  <ul className="footer-list">
                    {info.map((item, i) => (
                      <li key={i}>
                        <Link href={item.path} className="footer-link">
                          <ArrowRight className="w-3 h-3 link-arrow" /> {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer-col">
                  <h3 className="footer-col-title">Service Areas</h3>
                  <ul className="footer-list">
                    {areas.map((item, i) => (
                      <li key={i}>
                        <Link href={areaPath(item.toLowerCase().replace(/\s+/g, '-'))} className="footer-link">
                          <ArrowRight className="w-3 h-3 link-arrow" /> {item}
                        </Link>
                      </li>
                    ))}
                  
                  </ul>
                </div>
              </div>

              <hr className="footer-divider" />
          </OnlyOnHome>

          <OnlyOnHome invert><hr className="footer-divider" /></OnlyOnHome>

          {/* Business Directory Citations */}
          <div className="footer-citations">
            <p className="footer-citations-label">WOW Gutters Ltd — Listed on</p>
            <ul className="footer-citations-list">
              {BUSINESS_DIRECTORY_LISTINGS.map((l) => (
                <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className="footer-citation-link">{l.name}</a></li>
              ))}
            </ul>
          </div>
          <hr className="footer-divider" />

          {/* Bottom Row */}
          <div className="footer-bottom-row">
            <div className="footer-social-box">
              <a href="https://web.facebook.com/wowgutters.co.uk" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on Facebook"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/wowgutters/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on Instagram"><Instagram className="w-5 h-5"/></a>
              <a href="https://www.linkedin.com/company/wow-gutters" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on LinkedIn"><Linkedin className="w-5 h-5"/></a>
              <a href="https://uk.pinterest.com/wowguttersltd/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WOW Gutters Ltd on Pinterest"><svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.31-.24.99-.27 1.13-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg></a>
            </div>

            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} WOW Gutters Ltd. All Rights Reserved.
            </div>

            <nav className="footer-legal-links" aria-label="Legal">
              {legal.map((item) => (
                <Link key={item.path} href={item.path} className="footer-legal-link">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="footer-trust-badge">
              <CheckCircle className="w-5 h-5 text-green-400" /> Fully Licensed & Insured
            </div>
          </div>

        </div>
      </div>

      <ScrollTopButton />

      <style>{`
        .site-footer {
          position: relative;
          z-index: 5;
          isolation: isolate;
          background: #0F172A;
          color: #94A3B8;
          scroll-margin-top: 48px;
        }

        .footer-wave-top {
          position: absolute;
          top: -47px;
          left: 0;
          right: 0;
          height: 48px;
          line-height: 0;
          z-index: 10;
        }
        .footer-wave-top svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .footer-main-area {
          padding: 80px 24px 40px;
        }
        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        /* HEADER */
        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 60px;
        }
        @media (max-width: 900px) {
          .footer-brand-header {
            flex-direction: column;
            text-align: center;
          }
        }
        .footer-logo-box {
          height: 150px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-logo {
          width: auto;
          height: 100px;
          max-width: none;
          object-fit: contain;
        }
        @media (max-width: 900px) {
          .footer-logo-box {
            height: 120px;
          }
          .footer-logo {
            height: 120px;
          }
        }
        .footer-brand-text {
          flex: 1;
        }
        .footer-company-name {
          color: white;
          font-size: 2.5rem;
          font-weight: 900;
          margin: 0 0 4px;
          letter-spacing: -1px;
        }
        .footer-tagline-link { color: inherit; text-decoration: underline; text-underline-offset: 2px; }
        .footer-company-tagline {
          color: #19C58B;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 12px;
        }
        .footer-ratings {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        @media (max-width: 900px) {
          .footer-ratings {
            justify-content: center;
          }
        }
        .rating-text {
          color: #CBD5E1;
          font-size: 0.95rem;
          font-weight: 600;
          margin-left: 8px;
        }

        .footer-contact-pills {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (max-width: 900px) {
          .footer-contact-pills {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px 24px;
          border-radius: 100px;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          transition: background 0.2s;
        }
        .contact-pill:hover {
          background: rgba(255,255,255,0.1);
        }

        /* DIVIDER */
        .footer-divider {
          border: none;
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 0 0 60px 0;
        }

        /* LINKS */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }
        @media (max-width: 1024px) {
          .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .footer-links-grid { grid-template-columns: 1fr; }
        }

        .footer-col-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 800;
          margin: 0 0 24px 0;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
        }
        .footer-link .link-arrow {
          color: #19C58B;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: white;
          transform: translateX(5px);
        }
        .footer-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* BOTTOM ROW */
        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .footer-bottom-row {
            flex-direction: column;
            text-align: center;
          }
        }
        .footer-social-box {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          color: white;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #19C58B;
          transform: translateY(-4px);
          color: white;
        }
        
        .footer-copyright {
          color: #64748B;
          font-size: 0.95rem;
        }

        .footer-legal-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px 20px;
        }
        .footer-legal-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: color 0.2s;
        }
        .footer-legal-link:hover {
          color: #19C58B;
        }

        .footer-trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 700;
          background: rgba(22, 101, 52, 0.4);
          padding: 10px 20px;
          border-radius: 100px;
        }

        .footer-citations {
          padding: 16px 0 8px;
          text-align: center;
        }
        .footer-citations-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #475569;
          margin-bottom: 10px;
        }
        .footer-citations-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 12px;
        }
        .footer-citation-link {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748B;
          text-decoration: none;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          transition: color 0.2s, background 0.2s;
        }
        .footer-citation-link:hover {
          color: #19C58B;
          background: rgba(25,197,139,0.1);
        }

        /* Scroll Top Btn */
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          right: 88px;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 99;
        }
        .scroll-top-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.45);
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }
        @media (max-width: 768px) {
          .scroll-top-btn {
            right: 80px;
            bottom: 16px;
            width: 48px;
            height: 48px;
            border-radius: 14px;
          }
        }
      `}</style>
      </footer>

      {/* Spacer so fixed bar doesn't cover content (mobile only) */}
      <div
        className="md:hidden"
        aria-hidden="true"
        style={{ height: 'calc(74px + env(safe-area-inset-bottom, 0px) + var(--vv-bottom-gap, 0px))' }}
      />

      {/* Mobile sticky footer bar (matches screenshot) */}
      <div
        id="wow-mobile-sticky-bar"
        aria-label="Quick contact actions"
        className="fixed inset-x-0 bottom-0 z-[10000] hidden w-full items-center justify-between gap-3 border-t border-slate-900/10 bg-white/95 px-3.5 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:px-4 max-[767px]:flex"
        style={{
          bottom: 'var(--vv-bottom-gap, 0px)',
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
        }}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-slate-900/10 bg-white" aria-hidden="true">
            <Image
              src={logo}
              alt="WOW Gutters Ltd logo"
              width={44}
              height={44}
              className="h-11 w-11 object-cover"
              priority={false}
            />
          </div>
          <div className="min-w-0 leading-[1.05]">
            <div className="truncate text-[16px] font-black text-slate-900">WOW Gutters Ltd</div>
            <a className="mt-0.5 inline-block text-[14px] font-extrabold text-teal-500 no-underline" href="tel:+447421433910">
              07421 433910
            </a>
          </div>
        </div>
        <a
          className="inline-flex h-[46px] flex-none items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-gradient-to-br from-[#25D366] to-[#19C58B] px-4 text-[14px] font-black text-white shadow-[0_12px_26px_rgba(15,23,42,0.12)]"
          href="https://wa.me/447421433910?text=Hi%2C%20I%20need%20a%20quote%20please"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </HideOnQuoteEmbed>
  );
}
