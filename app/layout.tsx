import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import WhatsAppChatPopup from "@/components/WhatsAppChatPopup";
import ContentProtection from "@/components/ContentProtection";
import MaybeStaticQuoteDialog from "@/components/MaybeStaticQuoteDialog";
import IosViewportStabilizer from "@/components/IosViewportStabilizer";

export const metadata: Metadata = {
  metadataBase: new URL('https://wowgutters.co.uk'),
  title: "WOW Gutters Ltd | Gutter Cleaning & Roofline Services",
  description: "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, repairs, inspections, roof cleaning. Fast quotes and same-day booking from WOW Gutters Ltd.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  authors: [{ name: "WOW Gutters Ltd", url: "https://wowgutters.co.uk" }],
  creator: "WOW Gutters Ltd",
  publisher: "WOW Gutters Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
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
  // Do not set alternates.canonical here — it would apply to every route without its own
  // metadata and point inner pages at the homepage (duplicate-content signal in GSC).
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "WOW Gutters Ltd",
    title: "WOW Gutters Ltd | Gutter Cleaning & Roofline Services",
    description: "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, repairs, inspections, roof cleaning. Fast quotes and same-day booking from WOW Gutters Ltd.",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "WOW Gutters Ltd - Professional Gutter Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOW Gutters Ltd | Gutter Cleaning & Roofline Services",
    description: "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, repairs, inspections, roof cleaning. Fast quotes and same-day booking from WOW Gutters Ltd.",
    images: ["/og/default.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "msvalidate.01":
        process.env.NEXT_PUBLIC_BING_VERIFICATION || "733327357EAC2C662B6C711EA4E78993",
    },
  },
  category: "Home Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga4MeasurementId = (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-X0YK1TD470").trim();
  const gtmId = (process.env.NEXT_PUBLIC_GTM_ID || "").trim();
  const metaPixelId = (process.env.NEXT_PUBLIC_META_PIXEL_ID || "1108538397342086").trim();
  const analyticsDebug = (process.env.NODE_ENV !== "production") ? "1" : "";
  const ga4ConfigId = JSON.stringify(ga4MeasurementId);

  // Structured Data for SEO
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressRegion = (process.env.NEXT_PUBLIC_BUSINESS_REGION || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const gbpCidUrl = (process.env.NEXT_PUBLIC_GBP_CID_URL || '').trim();
  const trustpilotUrl = (process.env.NEXT_PUBLIC_TRUSTPILOT_URL || '').trim();
  const bingVerificationCode = (
    process.env.NEXT_PUBLIC_BING_VERIFICATION || "733327357EAC2C662B6C711EA4E78993"
  ).trim();
  const googleVerificationCode = (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '').trim();

  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "WOW Gutters Ltd — Professional Gutter Cleaning Service",
    "description":
      "See our ground-level vacuum gutter cleaning system in action. No ladders, no mess, before & after photo proof on every job. Serving Birmingham and the West Midlands.",
    "thumbnailUrl": "https://wowgutters.co.uk/gutter-cleaning.jpeg",
    "contentUrl": "https://wowgutters.co.uk/gutter-final-video.mp4",
    "embedUrl": "https://wowgutters.co.uk/gutter-final-video.mp4",
    "duration": "PT1M30S",
    "uploadDate": "2025-01-15",
    "publisher": {
      "@type": "Organization",
      "@id": "https://wowgutters.co.uk/#business",
      "name": "WOW Gutters Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png",
      },
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Cookiebot — async so it does not block LCP/INP (still loads for consent) */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="90235ab0-b3ea-4224-a9f3-a1c438800254"
          data-blockingmode="auto"
          type="text/javascript"
          async
          defer
        />
        
        {/* Bing Webmaster Verification */}
        {bingVerificationCode ? (
          <meta name="msvalidate.01" content={bingVerificationCode} />
        ) : null}
        
        {/* Google Search Console Verification */}
        {googleVerificationCode ? (
          <meta name="google-site-verification" content={googleVerificationCode} />
        ) : null}
        
        {/* Structured Data — plain <script> so next/script doesn't strip it from static export */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoObjectSchema),
          }}
        />
        {/*
          Static export (Next.js 16 Turbopack): plain <script> tags are
          written verbatim into the exported HTML. next/script is NOT emitted
          as real script tags (only RSC payload), so GA4/Meta never ran.
          Cookiebot unblocks type="text/plain" scripts after consent.
        */}
        {/* Analytics config + click tracking (safe no-op if GA ID not set) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){window.__WOW_ANALYTICS__={gaId:${JSON.stringify(ga4MeasurementId)},metaPixelId:${JSON.stringify(metaPixelId)},gtmId:${JSON.stringify(gtmId)},debug:${JSON.stringify(analyticsDebug)}};})();`,
          }}
        />
        {/* Google tag (gtag.js) — plain scripts required for static export */}
        {ga4MeasurementId ? (
          <>
            <script
              type="text/plain"
              data-cookieconsent="statistics"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`}
            />
            <script
              id="ga4"
              type="text/plain"
              data-cookieconsent="statistics"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${ga4ConfigId});`,
              }}
            />
          </>
        ) : null}
        {/* Meta Pixel — plain script required for static export */}
        {metaPixelId ? (
          <>
            <script
              id="facebook-pixel"
              type="text/plain"
              data-cookieconsent="marketing"
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(metaPixelId)});
fbq('track', 'PageView');`,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${encodeURIComponent(metaPixelId)}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        ) : null}
        {/* Elfsight Google Reviews — data-cookieconsent="ignore" tells Cookiebot
            auto-blocking NOT to block this, so the widget loads in every
            environment (localhost + production) without requiring consent. */}
        <script
          id="elfsight-platform"
          data-cookieconsent="ignore"
          async
          src="https://elfsightcdn.com/platform.js"
        />
      </head>
      <body className="font-sans antialiased content-protected" suppressHydrationWarning>
        <IosViewportStabilizer />
        <ContentProtection />
        <Navbar />
        {children}
        <ContactInfoSection />
        <Footer />
        {/* <WhatsAppChatPopup /> */}
        <MaybeStaticQuoteDialog />
        {/* Quote modal + analytics — end of body so they do not block first paint */}
        <script src="/wow-area-search.js?v=20260609" defer />
        <script src="/wow-analytics.js?v=20260602" defer />
        <script src="/wow-quote-config.js?v=20260421" defer />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(){var k=${JSON.stringify(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")};window.__WOW_QUOTE__=window.__WOW_QUOTE__||{};if(k && !window.__WOW_QUOTE__.web3formsAccessKey)window.__WOW_QUOTE__.web3formsAccessKey=k;})();`,
          }}
        />
        <script src="/wow-cta-dialog-init.js?v=20260421" defer />
        <script src="/wow-quote-form-init.js?v=20260421" defer />
        <script src="/wow-elfsight-init.js?v=20260630" defer />
      </body>
    </html>
  );
}
