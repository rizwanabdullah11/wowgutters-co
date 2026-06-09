import Link from 'next/link';
import GoogleMapsEmbed from '@/components/seo/GoogleMapsEmbed';
import { WOW_GUTTERS_NAP, formatNapAddress, gbpProfileUrl, gbpReviewUrl } from '@/lib/businessDetails';
import { MARKETING_DESTINATION_URLS } from '@/lib/utmLinks';
import {
  BACKLINK_OUTREACH_TARGETS,
  MONTHLY_BACKLINK_AUDIT_STEPS,
  PRIMARY_COMPETITOR,
} from '@/lib/competitorBacklinkGaps';

const DIRECTORY_TARGETS = [
  { name: 'Google Business Profile', note: 'Primary local listing — keep NAP, hours, services, and photos in sync with this page.' },
  { name: 'Checkatrade', note: 'Trade directory; use identical business name, phone, and website.' },
  { name: 'Yell.com', note: 'General business directory for West Midlands searches.' },
  { name: 'Yelp', note: 'Consumer reviews; link back to wowgutters.co.uk.' },
  { name: 'Thomson Local', note: 'Legacy local directory still cited by aggregators.' },
  { name: 'FreeIndex', note: 'UK trades listing — match categories to gutter cleaning & roofline.' },
  { name: 'Facebook', note: 'Social profile listed as sameAs in site schema.' },
  { name: 'Instagram', note: 'Brand handle @wowgutters — use West Midlands service area in bio.' },
];

const GBP_POST_IDEAS = [
  'Before & after photos from a completed gutter clean (with customer permission).',
  'Seasonal reminder: autumn leaf build-up across Birmingham postcodes.',
  'Short video clip of ground-level vacuum system — no ladders on customer walls.',
  'Neighbourhood discount or OAP offer with link to wowgutters.co.uk/quote/.',
  'New service area page published — e.g. gutter cleaning in a West Midlands suburb.',
  '5-star review highlight (first name + area only) with thank-you to the customer.',
];

export default function CitationsHubContent() {
  const gbp = gbpProfileUrl();
  const reviewUrl = gbpReviewUrl();

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-black text-slate-900">Official NAP (name, address, phone)</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Use these details exactly when creating or updating listings. Inconsistent NAP is one of the most common
          reasons local rankings stall — every directory should match Google Business Profile and this page.
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Business name</dt>
            <dd className="mt-1 font-semibold text-slate-900">{WOW_GUTTERS_NAP.name}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Website</dt>
            <dd className="mt-1 font-semibold text-slate-900">{WOW_GUTTERS_NAP.website}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Phone</dt>
            <dd className="mt-1 font-semibold text-slate-900">{WOW_GUTTERS_NAP.phoneDisplay}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Email</dt>
            <dd className="mt-1 font-semibold text-slate-900">{WOW_GUTTERS_NAP.email}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
            <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Address</dt>
            <dd className="mt-1 font-semibold text-slate-900">{formatNapAddress()}</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-black text-slate-900">Service area</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          WOW Gutters Ltd operates across Birmingham and the wider West Midlands — including Coventry, Wolverhampton,
          Walsall, Dudley, Sandwell, Solihull, Worcester, Redditch, and 200+ neighbourhood pages on this site. The map
          below shows our Birmingham base; technicians route daily across the region.
        </p>
        <div className="mt-6">
          <GoogleMapsEmbed title="WOW Gutters Ltd — Google Maps" />
        </div>
        <p className="mt-4 text-slate-600">
          <Link href="/service-areas/" className="font-semibold text-emerald-700 underline underline-offset-2">
            View all service areas
          </Link>{' '}
          for suburb-level landing pages and postcodes we cover.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-slate-900">Directory & citation targets</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Local citation building strengthens trust signals when your business name, address, and phone appear
          consistently on reputable UK directories. Prioritise the profiles below; copy the NAP block verbatim and
          use the same primary category: gutter cleaning service (or closest available).
        </p>
        <ul className="mt-6 space-y-4">
          {DIRECTORY_TARGETS.map((d) => (
            <li key={d.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-bold text-slate-900">{d.name}</p>
              <p className="mt-1 text-sm text-slate-600">{d.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="gbp-posts">
        <h2 className="text-2xl font-black text-slate-900">Google Business Profile posts (weekly minimum)</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Google rewards active profiles. Publish at least one GBP post per week, ideally tied to a real completed job.
          Posts can appear in branded search and the local pack — use before-and-after gutter photos, a short outcome
          line, and a link to the free quote page. Avoid duplicate stock text; rotate suburbs and services.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
          {GBP_POST_IDEAS.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
        <p className="mt-5 text-slate-600">
          Suggested CTA on every GBP post (use this UTM link so GA4 attributes traffic correctly):{' '}
          <a
            href={MARKETING_DESTINATION_URLS.quoteGbpPost}
            className="break-all font-semibold text-emerald-700 underline underline-offset-2"
          >
            {MARKETING_DESTINATION_URLS.quoteGbpPost}
          </a>
          . After posting, share the same image to Facebook/Instagram with the matching UTM link below.
        </p>
        {gbp ? (
          <p className="mt-4">
            <Link
              href={gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700"
            >
              Open Google Business Profile
            </Link>
          </p>
        ) : (
          <p className="mt-4 text-sm text-slate-500">
            Set <code className="rounded bg-slate-100 px-1">NEXT_PUBLIC_GBP_CID_URL</code> in production env for a
            direct dashboard link.
          </p>
        )}
      </section>

      <section id="gbp-reviews">
        <h2 className="text-2xl font-black text-slate-900">Google review responses</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Respond to every Google review within 48 hours — positive and negative. Replies show engagement to Google
          and reassure homeowners comparing gutter cleaners in Birmingham and the West Midlands. Use the customer&apos;s
          first name, mention the service (gutter clean, downpipe flush, repair), and invite them to call 07421 433910
          if anything needs follow-up.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">5-star template</p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              &quot;Thank you, [Name] — we&apos;re glad the gutter clean in [Area] went well. The before &amp; after
              photos are there so you can see the full clear. If you need us again before autumn, just call 07421
              433910. — WOW Gutters Ltd&quot;
            </p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-amber-900">Constructive feedback</p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              &quot;Thank you for your honest feedback, [Name]. We take service quality seriously — please email
              support@wowgutters.co.uk or call 07421 433910 so we can put this right. — WOW Gutters Ltd&quot;
            </p>
          </div>
        </div>
        <p className="mt-5 text-slate-600">
          Public reviews also appear on our{' '}
          <Link href="/reviews/" className="font-semibold text-emerald-700 underline underline-offset-2">
            customer reviews page
          </Link>
          . Encourage happy customers to leave a Google review after photo proof is sent.
          {reviewUrl ? (
            <>
              {' '}
              <Link
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline underline-offset-2"
              >
                Leave a Google review
              </Link>
            </>
          ) : null}
        </p>
      </section>

      <section id="backlink-audit">
        <h2 className="text-2xl font-black text-slate-900">Backlink health (monthly audit)</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Toxic or spammy links should be reviewed in Google Search Console, not ignored. WOW Gutters Ltd earns links
          through citations, reviews, and local press — disavow only domains that are clearly malicious (gambling,
          pharma, foreign scraper sites with zero relevance).
        </p>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-700">
          {MONTHLY_BACKLINK_AUDIT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-slate-600">
          Disavow file upload:{' '}
          <a
            href="https://search.google.com/search-console/disavow-links"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            Google Search Console Disavow Tool
          </a>
          . Keep a spreadsheet of referring domains; do not disavow legitimate directories listed above.
        </p>
      </section>

      <section id="competitor-backlinks">
        <h2 className="text-2xl font-black text-slate-900">Competitor backlink gaps ({PRIMARY_COMPETITOR.name})</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Gap analysis vs <strong>{PRIMARY_COMPETITOR.domain}</strong> — {PRIMARY_COMPETITOR.note} Target the same
          reputable categories with WOW Gutters Ltd NAP and a link to the matching{' '}
          <Link href="/service-areas/" className="font-semibold text-emerald-700 underline underline-offset-2">
            area page
          </Link>{' '}
          when pitching local stories.
        </p>
        <ul className="mt-6 space-y-4">
          {BACKLINK_OUTREACH_TARGETS.map((t) => (
            <li key={t.category} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-bold text-slate-900">{t.category}</p>
              <p className="mt-1 text-sm text-slate-600">
                Examples: {t.examples.join(', ')}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-semibold">Outreach:</span> {t.action}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="utm-links">
        <h2 className="text-2xl font-black text-slate-900">UTM links for ads &amp; social (GA4 attribution)</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Use these exact destination URLs in Meta Ads, Google Business Profile posts, and organic social bios so
          GA4 can attribute sessions by source. Do not use bare wowgutters.co.uk/quote/ on paid posts.
        </p>
        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <span className="font-bold text-slate-900">GBP posts → quote</span>
            <p className="mt-1 break-all font-mono text-xs">{MARKETING_DESTINATION_URLS.quoteGbpPost}</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <span className="font-bold text-slate-900">Meta Ads → quote</span>
            <p className="mt-1 break-all font-mono text-xs">{MARKETING_DESTINATION_URLS.quoteMetaAds}</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <span className="font-bold text-slate-900">Facebook organic → quote</span>
            <p className="mt-1 break-all font-mono text-xs">{MARKETING_DESTINATION_URLS.quoteFacebookOrganic}</p>
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <span className="font-bold text-slate-900">Instagram → quote</span>
            <p className="mt-1 break-all font-mono text-xs">{MARKETING_DESTINATION_URLS.quoteInstagram}</p>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          In Meta Events Manager, map the <strong>Lead</strong> standard event to quote form submissions only — not
          PageView. PageView is fired on every page load by design; Lead fires only after a successful Web3Forms submit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-slate-900">Social profiles (sameAs)</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>
            <span className="font-semibold text-slate-900">Facebook:</span>{' '}
            https://web.facebook.com/wowgutters.co.uk
          </li>
          <li>
            <span className="font-semibold text-slate-900">Instagram:</span> https://www.instagram.com/wowgutters/
          </li>
          <li>
            <span className="font-semibold text-slate-900">X/Twitter:</span> https://twitter.com/wowgutters
          </li>
          <li>
            <span className="font-semibold text-slate-900">YouTube:</span> https://www.youtube.com/@wowgutters
          </li>
        </ul>
      </section>
    </div>
  );
}
