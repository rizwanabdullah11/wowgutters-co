import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./section-styles.css";
import Navbar from "./navbar/page";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import WhatsAppChatPopup from "@/components/WhatsAppChatPopup";
import ContentProtection from "@/components/ContentProtection";
import MaybeStaticQuoteDialog from "@/components/MaybeStaticQuoteDialog";
import IosViewportStabilizer from "@/components/IosViewportStabilizer";

/**
 * Google Search Console meta-tag token. The env var was set to the HTML-file
 * name ("google463adee36af827ed.html"), which printed an invalid tag on every
 * page. The HTML file in /public already verifies the site, so only a real
 * meta token (no ".html", not the filename) is output.
 */
function googleSiteVerificationToken(): string | undefined {
  const raw = (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '').trim();
  if (!raw || /\.html?$/i.test(raw) || /^google[0-9a-f]+$/i.test(raw)) return undefined;
  return raw;
}

export const metadata: Metadata = {
  metadataBase: new URL('https://wowgutters.co.uk'),
  title: "WOW Gutters Ltd | Gutter Cleaning & Roofline Services",
  description: "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, repairs, inspections, roof cleaning. Fast quotes and same-day booking from WOW Gutters Ltd.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.webp", type: "image/png" },
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
    google: googleSiteVerificationToken(),
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
  const clarityProjectId = (process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "z9voqi0s5k").trim();
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


  return (
    <html lang="en-GB">
      <head>
        {/*
          Google Consent Mode v2 defaults — must run BEFORE Cookiebot and gtag.js.
          Oct 30 2026 fix: GA4 used to be type="text/plain" and only ran after Cookiebot consent.
          Cookiebot was not authorised for wowgutters.co.uk, so the banner never showed and GA4
          never loaded at all. Now gtag.js always loads; until a visitor accepts statistics
          cookies GA4 sends cookieless, consent-denied pings (UK GDPR/PECR friendly), and
          Cookiebot updates consent automatically once the banner works.
        */}
        <script
          id="consent-defaults"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
// Oct 31 2026 speed fix: third-party tags (Cookiebot, gtag.js) are loaded after the page has
// loaded — on the first scroll/tap/keypress, or 3.5s after load. dataLayer queues every hit
// until then, so no GA4 data is lost. Before this, GTM + Cookiebot added ~2s of blocking time.
// Cookiebot is injected from here (not a separate <script async>) because React hoists async
// scripts above inline ones — Google requires the consent default to run first.
(function(){var q=[],done=false;
function run(){if(done)return;done=true;for(var i=0;i<q.length;i++)q[i]();q=[];
['scroll','pointerdown','keydown','touchstart'].forEach(function(e){removeEventListener(e,run,{passive:true});});}
window.__wowDefer=function(fn){if(done)fn();else q.push(fn);};
window.__wowLoadScript=function(src,attrs){window.__wowDefer(function(){var s=document.createElement('script');s.async=true;s.src=src;
for(var k in (attrs||{}))s.setAttribute(k,attrs[k]);document.head.appendChild(s);});};
['scroll','pointerdown','keydown','touchstart'].forEach(function(e){addEventListener(e,run,{passive:true});});
function later(){setTimeout(run,3500);}
if(document.readyState==='complete')later();else addEventListener('load',later);
window.__wowLoadScript('https://consent.cookiebot.com/uc.js',{id:'Cookiebot','data-cbid':'90235ab0-b3ea-4224-a9f3-a1c438800254','data-blockingmode':'auto'});})();`,
          }}
        />
        
        {/* Bing Webmaster Verification */}
        {bingVerificationCode ? (
          <meta name="msvalidate.01" content={bingVerificationCode} />
        ) : null}
        
        {/* Google Search Console Verification */}
        
        {/* VideoObject schema now lives on the homepage only (app/page.tsx) — the video
            is not the main content of other pages (Oct 27 2026 audit). */}
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
              id="ga4"
              data-cookieconsent="ignore"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${ga4ConfigId});
// gtag.js loads deferred (see consent-defaults) — hits queue in dataLayer until it arrives.
window.__wowLoadScript('https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}',{'data-cookieconsent':'ignore'});`,
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
        {/* Microsoft Clarity — session recordings & heatmaps */}
        {clarityProjectId ? (
          <script
            id="microsoft-clarity"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", ${JSON.stringify(clarityProjectId)});`,
            }}
          />
        ) : null}
        {/* Elfsight Google Reviews: platform.js is loaded on demand by
            components/sections/ElfsightReviews.tsx when the widget scrolls near
            view (data-cookieconsent="ignore" is set there), so pages without
            reviews no longer pay for it. */}
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
        <script src="/wow-cta-dialog-init.js?v=20260706" defer />
        <script src="/wow-quote-form-init.js?v=20260706" defer />
        <script src="/wow-elfsight-init.js?v=20261016" defer />
      </body>
    </html>
  );
}
