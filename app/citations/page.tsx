import type { Metadata } from 'next';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

const SITE_URL = 'https://wowgutters.pro';

function env(name: string) {
  return (process.env[name] || '').trim();
}

const business = {
  name: env('NEXT_PUBLIC_BUSINESS_NAME') || 'WOW Gutters Ltd',
  website: SITE_URL,
  phoneDisplay: env('NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY') || '07421 433910',
  phoneE164: env('NEXT_PUBLIC_BUSINESS_PHONE_E164') || '+447421433910',
  email: env('NEXT_PUBLIC_BUSINESS_EMAIL') || 'support@wowgutters.co.uk',
  addressLine1: env('NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1'),
  addressLine2: env('NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2'),
  city: env('NEXT_PUBLIC_BUSINESS_CITY') || 'Birmingham',
  postcode: env('NEXT_PUBLIC_BUSINESS_POSTCODE'),
  region: env('NEXT_PUBLIC_BUSINESS_REGION') || 'England',
  country: 'GB',
  facebook: env('NEXT_PUBLIC_FACEBOOK_URL') || 'https://www.facebook.com/wowgutters',
  instagram: env('NEXT_PUBLIC_INSTAGRAM_URL') || 'https://www.instagram.com/wowgutters',
  twitter: env('NEXT_PUBLIC_TWITTER_URL') || 'https://twitter.com/wowgutters',
  googleBusinessProfile: env('NEXT_PUBLIC_GBP_URL'),
};

const fullAddress = [
  business.addressLine1,
  business.addressLine2,
  business.city,
  business.postcode,
].filter(Boolean).join(', ');

export const metadata: Metadata = {
  title: 'Citations & Business Info | WOW Gutters',
  description:
    'Official business information for WOW Gutters Ltd (NAP). Use these details for local citations, directories, and partner listings.',
  alternates: { canonical: `${SITE_URL}/citations` },
  robots: { index: true, follow: true },
};

export default function CitationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SchemaMarkup
        id="schema-citations-webpage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Citations & Business Info',
          url: `${SITE_URL}/citations`,
          isPartOf: { '@type': 'WebSite', name: 'WOW Gutters', url: SITE_URL },
        }}
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Citations & Business Info</h1>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          Use the details below when creating or updating local directory listings (NAP consistency).
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-xl font-extrabold text-slate-900">Official NAP</h2>

          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Business name</dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">{business.name}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Website</dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">{business.website}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Phone</dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">{business.phoneDisplay}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Email</dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">{business.email}</dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Address</dt>
              <dd className="mt-1 text-base font-semibold text-slate-900">
                {fullAddress || 'Add your address in environment variables (recommended for citations).'}
              </dd>
              {!business.postcode && (
                <p className="mt-2 text-sm text-slate-600">
                  Tip: set `NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1`, `NEXT_PUBLIC_BUSINESS_CITY`, and
                  `NEXT_PUBLIC_BUSINESS_POSTCODE` so your citations match Google Business Profile exactly.
                </p>
              )}
            </div>
          </dl>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-xl font-extrabold text-slate-900">Profiles to match (sameAs)</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Facebook:</span> {business.facebook}
            </li>
            <li>
              <span className="font-semibold text-slate-900">Instagram:</span> {business.instagram}
            </li>
            <li>
              <span className="font-semibold text-slate-900">X/Twitter:</span> {business.twitter}
            </li>
            {business.googleBusinessProfile && (
              <li>
                <span className="font-semibold text-slate-900">Google Business Profile:</span>{' '}
                {business.googleBusinessProfile}
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}

