import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "@/components/Footer";
import WhatsAppChatPopup from "@/components/WhatsAppChatPopup";
import ContentProtection from "@/components/ContentProtection";
import MaybeStaticQuoteDialog from "@/components/MaybeStaticQuoteDialog";
import IosViewportStabilizer from "@/components/IosViewportStabilizer";

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
        url: "/og/default.jpg",
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
    images: ["/og/default.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || undefined,
    other: {
      ...(process.env.BING_VERIFICATION_CODE
        ? { "msvalidate.01": process.env.BING_VERIFICATION_CODE }
        : {}),
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
  const metaPixelId = (process.env.NEXT_PUBLIC_META_PIXEL_ID || "1108538397342086").trim();
  const analyticsDebug = (process.env.NODE_ENV !== "production") ? "1" : "";

  // Structured Data for SEO
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressRegion = (process.env.NEXT_PUBLIC_BUSINESS_REGION || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const gbpCidUrl = (process.env.NEXT_PUBLIC_GBP_CID_URL || '').trim();
  const trustpilotUrl = (process.env.NEXT_PUBLIC_TRUSTPILOT_URL || '').trim();
  const bingVerificationCode = (process.env.BING_VERIFICATION_CODE || '').trim();

  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "WOW Gutters — Professional Gutter Cleaning Service",
    "description":
      "See our ground-level vacuum gutter cleaning system in action. No ladders, no mess, before & after photo proof on every job. Serving Birmingham and the West Midlands.",
    "thumbnailUrl": "https://wowgutters.co.uk/gutter-cleaning.jpeg",
    "contentUrl": "https://wowgutters.co.uk/gutter-final-video.mp4",
    "uploadDate": "2025-01-15",
    "publisher": {
      "@type": "Organization",
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
        {/* Bing Webmaster Verification */}
        {bingVerificationCode ? (
          <meta name="msvalidate.01" content={bingVerificationCode} />
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
        {/* Meta Pixel — plain <script> so it survives static export */}
        {metaPixelId ? (
          <>
            <script
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
