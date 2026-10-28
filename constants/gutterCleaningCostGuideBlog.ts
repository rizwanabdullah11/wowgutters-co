import type { BlogPost } from './blogTypes';
import { GUTTER_PRICING } from './gutterPricing';

const IMG_HERO   = '/blog-images/hiring-gutter-cleaning-westmidlands/hiring-gutter-cleaning-westmidlands-hero.webp';
const IMG_BEFORE = '/blog-images/hiring-gutter-cleaning-westmidlands/hiring-gutter-cleaning-westmidlands-before.webp';
const IMG_AFTER  = '/blog-images/hiring-gutter-cleaning-westmidlands/hiring-gutter-cleaning-westmidlands-after.webp';

const link = 'color: #047857; font-weight: 700; text-decoration: none;';
const h2 = 'font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;';
const h3 = 'font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-top: 28px;';
const p = 'color: #334155; line-height: 1.8;';
const th = 'text-align: left; padding: 10px 14px; background: #f1f5f9; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;';
const td = 'padding: 10px 14px; color: #334155; border-bottom: 1px solid #e2e8f0;';

const P2 = GUTTER_PRICING.twoBedroom;
const P3 = GUTTER_PRICING.threeBedroom;
const PF = GUTTER_PRICING.fasciaAndSoffit;

function faq(question: string, answer: string): string {
  return `
  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>${question}</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">${answer}</p>
    </div>
  </details>`;
}

const ctaBox = `
<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border: 2px solid #19C58B; border-radius: 16px; padding: 28px 32px; margin: 40px 0;">
  <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 12px 0;">FIXED PRICES IN BIRMINGHAM &amp; THE WEST MIDLANDS</h3>
  <p style="color: #334155; font-size: 0.98rem; line-height: 1.75; margin: 0 0 18px 0;">£${P2} for a 2-bed home, £${P3} for a 3-bed home, £140–£210 for larger detached homes. Downpipe flushing and before &amp; after photos included. No ladders against your walls.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 12px;">
    <a href="/gutter-cleaning-prices/" style="display: inline-flex; align-items: center; gap: 8px; background: #19C58B; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">See full price list</a>
    <a href="tel:07421433910" style="display: inline-flex; align-items: center; gap: 8px; background: #0f172a; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">📞 07421 433910</a>
  </div>
</div>`;

export const gutterCleaningCostGuideBlogPost: BlogPost = {
  id: 'gutter-cleaning-cost-guide',
  seoTitle: 'How Much Does Gutter Cleaning Cost in the UK? (2026 Guide)',
  title: 'How Much Does Gutter Cleaning Cost in the UK? 2026 Price Guide',
  excerpt:
    'What UK homeowners pay for gutter cleaning in 2026, what changes the price, and what should be included. Plus our fixed Birmingham prices from £100.',
  image: IMG_HERO,
  date: '2026-10-21',
  views: '0',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'Professional Gutter Cleaning & Repair Specialists',
  category: 'Guides',
  featured: true,
  lastUpdated: '2026-10-21',
  quickAnswer:
    `Most UK homeowners pay £75–£200 for a standard gutter clean in 2026: around £75 for a terraced house, £100 for a semi-detached and £150 for a detached home. Height, access, how blocked the gutters are and where you live change the price. In Birmingham, WOW Gutters Ltd charges a fixed £${P2} for a 2-bed home and £${P3} for a 3-bed home.`,
  shortSummary: 'UK Gutter Cleaning Cost Guide',
  breadcrumbName: 'Gutter Cleaning Cost Guide',
  content: `
<p style="${p}">"How much will it cost?" is the first question almost every customer asks us. The honest answer is that it depends on the size of your home, how high and easy to reach the gutters are, and how blocked they've become. This guide explains what UK homeowners typically pay in 2026, what pushes the price up or down, what a proper clean should include, and how to tell a fair quote from a cheap one that cuts corners.</p>

<p style="${p}">If you just want our prices for Birmingham and the West Midlands, they're on our <a href="/gutter-cleaning-prices/" style="${link}">gutter cleaning prices</a> page.</p>

<h2 id="average-cost" style="${h2}">Average gutter cleaning cost in the UK (2026)</h2>

<p style="${p}">Independent UK cost data from <a href="https://www.myjobquote.co.uk/costs/cleaning-your-guttering" rel="nofollow noopener" target="_blank" style="${link}">MyJobQuote</a> (updated October 2026) puts the typical range for a standard clean at <strong>£75–£200</strong>, with larger or more complex properties reaching about £450.</p>

<div style="overflow-x: auto; margin: 20px 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border: 1px solid #e2e8f0;">
  <thead><tr><th style="${th}">Property type</th><th style="${th}">UK average</th><th style="${th}">Typical time</th></tr></thead>
  <tbody>
    <tr><td style="${td}">Flat / apartment</td><td style="${td}">£60</td><td style="${td}">1–3 hours</td></tr>
    <tr><td style="${td}">Bungalow</td><td style="${td}">£70</td><td style="${td}">2–4 hours</td></tr>
    <tr><td style="${td}">Terraced house</td><td style="${td}">£75</td><td style="${td}">2–5 hours</td></tr>
    <tr><td style="${td}">End of terrace</td><td style="${td}">£90</td><td style="${td}">2–5 hours</td></tr>
    <tr><td style="${td}">Semi-detached</td><td style="${td}">£100</td><td style="${td}">3–5 hours</td></tr>
    <tr><td style="${td}">Detached</td><td style="${td}">£150</td><td style="${td}">4–7 hours</td></tr>
    <tr><td style="${td}">3-storey house</td><td style="${td}">£180</td><td style="${td}">5–8 hours</td></tr>
  </tbody>
</table>
</div>
<p style="color: #64748b; font-size: 0.85rem;">Source: MyJobQuote UK gutter cleaning cost guide, October 2026. Averages vary by region: highest in London and the South East, lower in the North and Scotland.</p>

<img src="${IMG_BEFORE}" alt="Blocked gutter full of leaves and moss before cleaning" width="1670" height="942" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

<h2 id="what-affects-price" style="${h2}">What affects the price of gutter cleaning?</h2>

<h3 style="${h3}">1. The size of your home</h3>
<p style="${p}">More house means more metres of gutter. That's why most companies price by property type or number of bedrooms. A 2-bed terrace might have 15–20 metres of gutter; a large detached home with a garage and extension can have well over double that.</p>

<h3 style="${h3}">2. Height and access</h3>
<p style="${p}">This is the biggest hidden cost. Ladder-based cleaners can only reach so far safely, and conservatories, extensions and steep driveways make it harder. When a ladder won't do, some firms need scaffolding or a cherry picker, which can add hundreds of pounds. A ground-based vacuum system like ours reaches up to four storeys from the ground, so access rarely changes our price.</p>

<h3 style="${h3}">3. How blocked the gutters are</h3>
<p style="${p}">Gutters cleaned every year mostly hold loose leaves. Gutters left for several years fill with compacted silt, moss and sometimes plants, and take much longer to clear. If your gutters are overflowing every time it rains, expect the first clean to take longer than a routine one.</p>

<h3 style="${h3}">4. Downpipes</h3>
<p style="${p}">A clean gutter feeding a blocked downpipe still overflows. Some companies charge extra to clear downpipes; we include flushing and testing every downpipe as standard.</p>

<h3 style="${h3}">5. Where you live</h3>
<p style="${p}">Prices in London and the South East run noticeably higher than the national average. In the West Midlands, prices usually sit close to the UK averages above.</p>

<h3 style="${h3}">6. Minimum charges</h3>
<p style="${p}">Most gutter cleaners have a minimum call-out charge, typically £40–£75, so very small jobs (a single porch or garage gutter) rarely cost less than that.</p>

${ctaBox}

<h2 id="whats-included" style="${h2}">What should a gutter clean include?</h2>
<p style="${p}">A low price isn't a bargain if half the job is missing. Before you book, check the quote includes:</p>
<ul style="${p} padding-left: 22px;">
  <li><strong>Every gutter run</strong>, including rear gutters, garages, porches and extensions, not just the front.</li>
  <li><strong>Downpipe clearing and flow testing</strong>, so water actually reaches the drain.</li>
  <li><strong>Removal of all debris</strong>, bagged and taken away, not left on your lawn or path.</li>
  <li><strong>Before and after photos</strong>, so you can see gutters you can't see from the ground.</li>
  <li><strong>An honest condition check</strong>: leaking joints, sagging sections or loose brackets flagged, with no pressure to buy repairs.</li>
  <li><strong>Insurance</strong>: always ask. Working at height on someone else's property needs proper public liability cover.</li>
</ul>

<img src="${IMG_AFTER}" alt="Clean, clear gutter after a professional vacuum gutter clean" width="1670" height="942" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

<h2 id="birmingham-prices" style="${h2}">Our gutter cleaning prices in Birmingham</h2>
<p style="${p}">We publish fixed prices so you know the cost before we arrive:</p>
<div style="overflow-x: auto; margin: 20px 0;">
<table style="width: 100%; max-width: 560px; border-collapse: collapse; font-size: 0.95rem; border: 1px solid #e2e8f0;">
  <tbody>
    <tr><td style="${td}">2-bed home</td><td style="${td}"><strong>£${P2}</strong></td></tr>
    <tr><td style="${td}">3-bed home</td><td style="${td}"><strong>£${P3}</strong></td></tr>
    <tr><td style="${td}">Larger detached homes</td><td style="${td}"><strong>£140–£210</strong></td></tr>
    <tr><td style="${td}">Fascia &amp; soffit cleaning</td><td style="${td}"><strong>£${PF}</strong></td></tr>
  </tbody>
</table>
</div>
<p style="${p}">Every clean includes downpipe flushing, before and after photos and a condition check. We cover <a href="/" style="${link}">gutter cleaning in Birmingham</a> and across the West Midlands, including <a href="/gutter-cleaning-solihull/" style="${link}">Solihull</a>, <a href="/gutter-cleaning-wolverhampton/" style="${link}">Wolverhampton</a>, <a href="/gutter-cleaning-dudley/" style="${link}">Dudley</a> and <a href="/gutter-cleaning-coventry/" style="${link}">Coventry</a>.</p>

<h2 id="save-money" style="${h2}">How to keep gutter cleaning costs down</h2>
<ul style="${p} padding-left: 22px;">
  <li><strong>Clean every year.</strong> An annual clean is quicker (and cheaper) than clearing years of compacted silt, and it avoids repair bills from overflowing water.</li>
  <li><strong>Book before the rush.</strong> Late autumn is the busiest time of year. Booking in September or early October usually means quicker appointments.</li>
  <li><strong>Ask neighbours.</strong> If you share a gutter with a semi or terrace neighbour, cleaning both sides at once is more effective and convenient.</li>
  <li><strong>Combine jobs.</strong> If you also need fascias, soffits or roof moss treated, doing it in one visit saves a second call-out.</li>
</ul>
<p style="${p}">Not sure how often your home needs it? Read <a href="/blog/how-often-should-gutters-be-cleaned/" style="${link}">how often should gutters be cleaned in the UK</a>.</p>

<h2 id="faq" style="${h2}">FAQ: Gutter Cleaning Costs</h2>
<div>
${faq('How much does gutter cleaning cost in the UK?', 'Most UK homeowners pay £75–£200 for a standard clean in 2026: about £75 for a terraced house, £100 for a semi-detached and £150 for a detached home, according to MyJobQuote’s October 2026 cost guide.')}
${faq('How much is gutter cleaning in Birmingham?', `WOW Gutters Ltd charges a fixed £${P2} for a 2-bed home, £${P3} for a 3-bed home and £140–£210 for larger detached homes, including downpipe flushing and before and after photos.`)}
${faq('Why do some quotes cost much more than others?', 'Access is usually the reason. Firms that rely on ladders may need scaffolding or a cherry picker for tall or awkward homes, which adds a lot to the price. Ground-based vacuum systems reach up to four storeys without it.')}
${faq('Is downpipe clearing included in the price?', 'It should be, but not every company includes it. Always check. We flush and test every downpipe as standard at no extra charge.')}
${faq('Is it cheaper to clean gutters yourself?', 'It costs less in money, but ladder work is one of the most common causes of falls at home. A professional clean also includes downpipes, debris removal and a condition check you can’t easily do yourself.')}
</div>

<h2 id="related-articles" style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Related Articles</h2>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><a href="/blog/how-often-should-gutters-be-cleaned/" style="${link}">How Often Should Gutters Be Cleaned in the UK?</a></li>
  <li><a href="/blog/ask-before-hiring-gutter-cleaner/" style="${link}">Questions to Ask Before Hiring a Gutter Cleaner</a></li>
  <li><a href="/blog/gutter-clean-duration/" style="${link}">How Long Does Gutter Cleaning Take?</a></li>
  <li><a href="/blog/gutter-ladder-safety/" style="${link}">Can You Clean Your Own Gutters Safely?</a></li>
</ul>
`,
};
