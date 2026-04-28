'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, ChevronDown, Phone, Mail, Droplets, Wrench, Circle, Search, Hammer, Building } from 'lucide-react';
import mobileLogo from '@/assets/wow-gutter-logo.png';
import { colors } from '@/constants/colors';
import { isQuoteEmbedPath } from '@/lib/isQuoteEmbedPath';

export default function Navbar() {
  const pathname = usePathname();
  if (isQuoteEmbedPath(pathname)) {
    return null;
  }

  const services = [
    { name: 'Gutter Cleaning', icon: Droplets, href: '/services/gutter-cleaning' },
    { name: 'Gutter Repairs', icon: Wrench, href: '/services/gutter-repairs' },
    { name: 'Exterior UPVC Cleaning', icon: Circle, href: '/services/upvc-cleaning' },
    { name: 'Roof Cleaning', icon: Home, href: '/services/roof-cleaning' },
    { name: 'Roof & Gutter Inspection', icon: Search, href: '/services/inspection' },
    { name: 'Conservatory Gutter Replacement', icon: Hammer, href: '/services/conservatory' },
    { name: 'Commercial Gutter Cleaning', icon: Building, href: '/services/commercial' },
  ];

  return (
    <nav className="wow-navbar bg-white text-gray-800 shadow-md z-50">
      <style jsx>{`
        /* No-JS / build safety: native <details> dropdown */
        details.services-details > summary {
          list-style: none;
        }
        details.services-details > summary::-webkit-details-marker {
          display: none;
        }
        details.services-details .services-menu {
          display: none;
        }
        details.services-details[open] .services-menu {
          display: block;
        }

        /* Mobile: force fixed header (sticky can be flaky on iOS). */
        .wow-navbar {
          position: fixed;
          top: var(--vv-top, 0px);
          left: 0;
          right: 0;
          z-index: 967;
          padding-top: env(safe-area-inset-top, 0px);
        }

        /* Desktop keeps sticky behaviour */
        @media (min-width: 1024px) {
          .wow-navbar {
            position: sticky;
            top: 0;
            transform: none;
            will-change: auto;
            padding-top: 0;
          }
        }

        /* Add safe top padding so content isn't hidden under fixed mobile header (iOS notch safe area too) */
        :global(body) {
          /* IMPORTANT: do NOT add --vv-top here (it changes while scrolling on iOS and causes page "jumping"). */
          padding-top: calc(116px + env(safe-area-inset-top, 0px)); /* 40px top bar + 76px main bar */
        }

        @media (min-width: 1024px) {
          :global(body) {
            padding-top: 0;
          }
        }
      `}</style>
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        {/* Top Bar — Pay a Bill | Help Centre */}
        <div className="text-white" style={{ backgroundColor: colors.navy }}>
          <div className="flex divide-x divide-white/20">
            <button className="flex-1 py-2.5 text-center text-[13px] font-bold hover:bg-black/20 transition-colors">
              Pay a Bill
            </button>
            <Link 
              href="/help"
              className="flex-1 py-2.5 text-center text-[13px] font-bold text-white hover:bg-black/20 transition-colors"
            >
              Help Centre
            </Link>
          </div>
        </div>

        {/* Main Bar — Logo left | Status center | Icons right */}
        <div className="bg-white border-b border-gray-100 shadow-sm relative z-50">
          <div className="flex items-center justify-between h-[76px] px-3 sm:px-4">

            {/* Left: Background-removed logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={mobileLogo}
                alt="WOW Gutter Cleaning Service Logo"
                width={160}
                height={70}
                className="h-[52px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Center: OPEN status */}
            <div className="flex flex-col items-center justify-center mt-1">
              <span className="text-slate-900 text-2xl font-black leading-none tracking-widest drop-shadow-sm" style={{ color: colors.navy }}>OPEN</span>
              <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">7 Days a Week</span>
            </div>

            {/* Right: Email + Phone */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Email */}
              <a
                href="mailto:support@wowgutters.co.uk"
                className="w-12 h-12 rounded-xl flex items-center justify-center active:scale-95 transition-all shadow-md"
                style={{ backgroundColor: colors.primary }}
                aria-label="Email us"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              {/* Phone */}
              <a
                href="tel:07421433910"
                className="w-12 h-12 rounded-xl flex items-center justify-center hover:opacity-90 active:scale-95 transition-all shadow-md shadow-orange-500/20"
                style={{ backgroundColor: colors.cta }}
                aria-label="Call us"
              >
                <Phone className="w-6 h-6 text-white" fill="white" strokeWidth={0} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Desktop Navbar - Keep existing */}
      <div className="hidden lg:block">
        {/* Top bar */}
        <div className="text-white text-lg sm:text-lg py-2 px-4 border-b border-black/10" style={{ backgroundColor: colors.navy }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-center">📞 Contact your nearest technician</span>
              <span className="font-semibold hidden sm:inline">| OPEN 7 DAYS A WEEK</span>
              <span className="font-semibold sm:hidden">OPEN 7 DAYS</span>
            </div>
            <div className="hidden md:flex gap-4">
              <Link href="/reviews" className="hover:underline">Review Us</Link>
              <Link href="/quote" className="hover:underline">Request a Call</Link>
              <Link href="/help" className="hover:underline">Help Centre</Link>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-[90px] relative">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={mobileLogo}
                alt="WOW Gutter Cleaning Service Logo"
                width={300}
                height={150}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-gray-700 hover:text-[#19C58B] transition-colors font-semibold text-[17px] tracking-tight">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#19C58B] transition-colors font-semibold text-[17px] tracking-tight">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#19C58B] transition-colors font-semibold text-[17px] tracking-tight">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#19C58B] transition-colors font-semibold text-[17px] tracking-tight">
                Contact
              </Link>

              {/* Services Dropdown */}
              <details className="relative services-details">
                <summary className="cursor-pointer select-none text-gray-700 hover:text-[#19C58B] transition-colors flex items-center gap-1 font-semibold text-[17px] tracking-tight py-2">
                  Services
                  <ChevronDown size={20} className="mt-0.5" />
                </summary>
                <div className="services-menu absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-xl shadow-xl shadow-black/5 z-50 overflow-hidden">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-slate-50 hover:text-[#19C58B] transition-colors border-b border-gray-50 last:border-0"
                      >
                        <IconComponent size={20} className="text-slate-400" />
                        <span className="text-[16px] font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </details>

              <div className="flex items-center gap-3 ml-2 lg:ml-4">
                <a
                  href="mailto:support@wowgutters.co.uk"
                  className="flex items-center justify-center gap-2 text-[16px] px-5 py-2.5 rounded-full font-bold transition-all duration-300 text-white hover:scale-105 hover:shadow-xl shadow-md whitespace-nowrap"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="tel:07421433910"
                  className="flex items-center justify-center gap-2 text-[16px] px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-white hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 shadow-md whitespace-nowrap"
                  style={{ backgroundColor: colors.cta }}
                >
                  <Phone size={20} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
