import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "@/components/Footer";
import WhatsAppChatPopup from "@/components/WhatsAppChatPopup";
import ContentProtection from "@/components/ContentProtection";
import MaybeStaticQuoteDialog from "@/components/MaybeStaticQuoteDialog";
import IosViewportStabilizer from "@/components/IosViewportStabilizer";
import { SEO_KEYWORD_LINKS } from "@/constants/seoKeywordLinks";

export const metadata: Metadata = {
  metadataBase: new URL('https://wowgutters.co.uk'),
  title: {
    default: "WOW Gutters | Gutter Cleaning & Roofline Services",
    template: "%s | WOW Gutters"
  },
  description: "Professional gutter cleaning, repairs, inspections, roof cleaning and exterior cleaning. Fast quotes and same-day booking from WOW Gutters.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  keywords: SEO_KEYWORD_LINKS.map((k) => k.label),
  authors: [{ name: "WOW Gutters", url: "https://wowgutters.co.uk" }],
  creator: "WOW Gutters",
  publisher: "WOW Gutters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wowgutters.co.uk",
    siteName: "WOW Gutters",
    title: "WOW Gutters | Gutter Cleaning & Roofline Services",
    description: "Professional gutter cleaning, repairs, inspections, roof cleaning and exterior cleaning. Fast quotes and same-day booking from WOW Gutters.",
    images: [
      {
        url: "/assets/wow-gutter-logo2.png",
        width: 1200,
        height: 630,
        alt: "WOW Gutters - Professional Gutter Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOW Gutters | Gutter Cleaning & Roofline Services",
    description: "Professional gutter cleaning, repairs, inspections, roof cleaning and exterior cleaning. Fast quotes and same-day booking from WOW Gutters.",
    images: ["/assets/wow-gutter-logo2.png"],
    creator: "@wowgutters",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      // Replace with real code from Bing Webmaster Tools: https://www.bing.com/webmasters
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://wowgutters.co.uk/",
  },
  category: "Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga4MeasurementId = (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "").trim();
  const gtmId = (process.env.NEXT_PUBLIC_GTM_ID || "").trim();
  const analyticsDebug = (process.env.NODE_ENV !== "production") ? "1" : "";

  // Structured Data for SEO
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressRegion = (process.env.NEXT_PUBLIC_BUSINESS_REGION || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const gbpCidUrl = (process.env.NEXT_PUBLIC_GBP_CID_URL || '').trim();
  const trustpilotUrl = (process.env.NEXT_PUBLIC_TRUSTPILOT_URL || '').trim();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wowgutters.co.uk/#business",
    "name": "WOW Gutters Ltd",
    "description": "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, no ladders, 4-storey reach, same-day booking, 1-year guarantee.",
    "image": "https://wowgutters.co.uk/gutter-cleaning.jpeg",
    "logo": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png",
    "url": "https://wowgutters.co.uk",
    "telephone": "+447421433910",
    "email": "support@wowgutters.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      ...(addressLine1 ? { "streetAddress": [addressLine1, addressLine2].filter(Boolean).join(', ') } : {}),
      ...(addressCity ? { "addressLocality": addressCity } : { "addressLocality": "Birmingham" }),
      ...(addressRegion ? { "addressRegion": addressRegion } : { "addressRegion": "West Midlands" }),
      ...(addressPostcode ? { "postalCode": addressPostcode } : {}),
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      "Birmingham",
      "Solihull",
      "Sutton Coldfield",
      "Wolverhampton",
      "Walsall",
      "Dudley",
      "West Bromwich",
      "Coventry",
      "Halesowen",
      "Stourbridge",
      "Redditch",
      "Tamworth",
      "Bromsgrove",
      "Smethwick"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gutter & Roof Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Cleaning Birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Cleaning Birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Downpipe Unblocking" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fascia & Soffit Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Gutter Cleaning" } }
      ]
    },
    "sameAs": [
      ...(gbpCidUrl ? [gbpCidUrl] : []),
      ...(trustpilotUrl ? [trustpilotUrl] : []),
      "https://www.facebook.com/wowgutters",
      "https://www.instagram.com/wowgutters",
      "https://twitter.com/wowgutters",
      "https://www.linkedin.com/company/wow-gutters",
      "https://www.youtube.com/@wowgutters"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2600",
      "bestRating": "5"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gutter Cleaning and Maintenance",
    "provider": {
      "@id": "https://wowgutters.co.uk/#business"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gutter Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gutter Cleaning",
            "description": "Professional gutter cleaning services for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gutter Repairs",
            "description": "Expert gutter repair and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conservatory Cleaning",
            "description": "Professional conservatory roof and window cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Gutter Cleaning",
            "description": "Commercial gutter cleaning services for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UPVC Cleaning",
            "description": "Professional UPVC fascia and soffit cleaning"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wowgutters.co.uk"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Bing Webmaster Verification */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Structured Data — plain <script> so next/script doesn't strip it from static export */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        {/*
          Static export (Next.js 16 Turbopack): plain <script> tags are
          written verbatim into the exported HTML. next/script with
          strategy="beforeInteractive" is stripped from the output, which
          would break the quote modal. Do NOT convert these to <Script>.
        */}
        {/* Analytics config + click tracking (safe no-op if GA ID not set) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){window.__WOW_ANALYTICS__={gaId:${JSON.stringify(ga4MeasurementId)},gtmId:${JSON.stringify(gtmId)},debug:${JSON.stringify(analyticsDebug)}};})();`,
          }}
        />
        {ga4MeasurementId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js', new Date());gtag('config', ${JSON.stringify(ga4MeasurementId)}, { send_page_view: true });})();`,
              }}
            />
          </>
        ) : null}
        <script src="/wow-analytics.js?v=20260428"></script>
        <script src="/wow-quote-config.js?v=20260421"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k=${JSON.stringify(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")};window.__WOW_QUOTE__=window.__WOW_QUOTE__||{};if(k && !window.__WOW_QUOTE__.web3formsAccessKey)window.__WOW_QUOTE__.web3formsAccessKey=k;})();`,
          }}
        />
        <script src="/wow-cta-dialog-init.js?v=20260421"></script>
        {/* Form engine: MutationObserver-based, completely outside React bundling */}
        <script src="/wow-quote-form-init.js?v=20260421"></script>
      </head>
      <body className="font-sans antialiased content-protected" suppressHydrationWarning>
        <IosViewportStabilizer />
        <ContentProtection />
        <Navbar />
        {children}
        <Footer />
        {/* <WhatsAppChatPopup /> */}
        <MaybeStaticQuoteDialog />
      </body>
    </html>
  );
}
