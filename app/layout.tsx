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
  description: "Professional gutter cleaning, repairs, inspections, roof cleaning and exterior cleaning. Fully insured team and fast quotes from WOW Gutters.",
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
    description: "Professional gutter cleaning, repairs, inspections, roof cleaning and exterior cleaning. Fully insured team and fast quotes from WOW Gutters.",
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
    description: "Professional gutter cleaning, repairs, inspections, roof cleaning and exterior cleaning. Fully insured team and fast quotes from WOW Gutters.",
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
    canonical: "https://wowgutters.co.uk",
  },
  category: "Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressRegion = (process.env.NEXT_PUBLIC_BUSINESS_REGION || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wowgutters.co.uk/#business",
    "name": "WOW Gutters Ltd",
    "description": "Professional gutter cleaning, repairs, roof cleaning and exterior maintenance. Fully insured team and fast quotes.",
    "image": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png",
    "logo": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png",
    "url": "https://wowgutters.co.uk",
    "telephone": "+447421433910",
    "email": "support@wowgutters.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      ...(addressLine1 ? { "streetAddress": [addressLine1, addressLine2].filter(Boolean).join(', ') } : {}),
      ...(addressCity ? { "addressLocality": addressCity } : {}),
      ...(addressRegion ? { "addressRegion": addressRegion } : {}),
      ...(addressPostcode ? { "postalCode": addressPostcode } : {}),
      "addressCountry": "GB"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "areaServed": ["United Kingdom"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gutter & Roof Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior UPVC Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Gutter Cleaning" } }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/wowgutters",
      "https://www.instagram.com/wowgutters",
      "https://twitter.com/wowgutters",
      "https://www.linkedin.com/company/wow-gutters",
      "https://www.youtube.com/@wowgutters"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2696",
      "bestRating": "5"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gutter Cleaning and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "WOW Gutters",
      "telephone": "+447421433910",
      "url": "https://wowgutters.co.uk"
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
