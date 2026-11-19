import type { BlogPost } from './blogTypes';
import { GUTTER_PRICING } from './gutterPricing';

// Nov 2026: 2027 planning & booking guide. Deliberately NOT a month-by-month maintenance
// calendar (that is /blog/gutter-maintenance-schedule/ and /blog/birmingham-seasonal-gutter-guide/)
// and NOT a price guide (that is /blog/gutter-cleaning-cost-guide/ and /gutter-cleaning-prices/).
// This page answers: how many cleans do I need in 2027, when should I book them, what will it
// cost me over the year, and what should I check before I book.

const IMG_HERO = '/blog-images/dispatch-gutter-cleaning/dispatch-gutter-cleaning-hero.webp';

const link = 'color: #047857; font-weight: 700; text-decoration: none;';
const h2 = 'font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;';
const h3 = 'font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-top: 28px;';
const p = 'color: #334155; line-height: 1.8;';
const li = 'color: #334155; line-height: 1.8; margin-bottom: 8px;';
const th = 'text-align: left; padding: 10px 14px; background: #f1f5f9; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;';
const td = 'padding: 10px 14px; color: #334155; border-bottom: 1px solid #e2e8f0; vertical-align: top;';
const table = 'width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem;';
const wrap = 'overflow-x: auto; -webkit-overflow-scrolling: touch;';

const P2 = GUTTER_PRICING.twoBedroom;
const P3 = GUTTER_PRICING.threeBedroom;
const PP = GUTTER_PRICING.premium;
const PF = GUTTER_PRICING.fasciaAndSoffit;
const PC = GUTTER_PRICING.conservatoryGutterCleaning;

function faq(question: string, answer: string): string {
  return `
  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>${question}</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">${answer}</p>
    </div>
  </details>`;
}

const ctaBox = `
<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border: 2px solid #19C58B; border-radius: 16px; padding: 28px 32px; margin: 40px 0;">
  <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 12px 0;">BOOK YOUR 2027 GUTTER CLEAN EARLY</h3>
  <p style="color: #334155; font-size: 0.98rem; line-height: 1.75; margin: 0 0 18px 0;">£${P2} for a 2-bed home, £${P3} for a 3-bed home, Premium from £${PP} for 4+ bed or three-storey homes. Downpipe flushing and before &amp; after photos included. Cleared from the ground — no ladders against your walls.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 12px;">
    <a href="tel:07421433910" style="display: inline-flex; align-items: center; gap: 8px; background: #047857; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">📞 07421 433910</a>
    <a href="/gutter-cleaning-calculator/" style="display: inline-flex; align-items: center; gap: 8px; background: #0f172a; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">Get an instant price</a>
  </div>
</div>`;

export const gutterCleaning2027PlanningGuideBlogPost: BlogPost = {
  id: 'gutter-cleaning-2027-planning-guide',
  seoTitle: 'Gutter Cleaning in 2027: When to Book & What to Expect',
  title: 'Gutter Cleaning in 2027: A Planning & Booking Guide for West Midlands Homes',
  excerpt:
    'How many gutter cleans your home needs in 2027, the best weeks to book them, what a year of gutter care costs, and the checks to make before you book.',
  image: IMG_HERO,
  date: '2026-11-18',
  views: '0',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'Professional Gutter Cleaning & Repair Specialists',
  category: 'Guides',
  featured: true,
  lastUpdated: '2026-11-18',
  quickAnswer:
    `Most West Midlands homes need one gutter clean in 2027, booked for late November or early December once the leaves are down. Homes under or near big trees usually need two: one in late spring and one in late autumn. Book the autumn clean by September, because October and November are the busiest weeks of the year. With WOW Gutters Ltd a 2-bed home is £${P2} per clean and a 3-bed home is £${P3}, with downpipes and photos included.`,
  shortSummary: '2027 Gutter Cleaning Planner',
  breadcrumbName: 'Gutter Cleaning 2027 Guide',
  content: `
<p style="${p}">Every year the same thing happens: the first big autumn storm arrives, gutters overflow across the West Midlands, and everyone tries to book a gutter clean in the same fortnight. The homeowners who avoid that rush are the ones who planned their year in advance. This guide helps you do that for 2027 — how many cleans your home actually needs, when to book them, what the year will cost, and what to check before you hand over your money.</p>

<p style="${p}">If you want a detailed list of jobs for each month, see our <a href="/blog/gutter-maintenance-schedule/" style="${link}">month-by-month gutter maintenance schedule</a>. This page is about planning and booking.</p>

<h2 id="how-many" style="${h2}">Step 1: Work Out How Many Cleans You Need in 2027</h2>

<p style="${p}">The number of cleans depends far more on the trees around your house than on the size of the house. Find the row that matches your home:</p>

<div style="${wrap}">
<table style="${table}">
  <thead>
    <tr><th style="${th}">Your home</th><th style="${th}">Cleans in 2027</th><th style="${th}">When</th></tr>
  </thead>
  <tbody>
    <tr><td style="${td}">No large trees within about 20 metres</td><td style="${td}">1</td><td style="${td}">Late November or early December</td></tr>
    <tr><td style="${td}">One or two trees nearby, or a tree in next door’s garden</td><td style="${td}">1, plus a check in spring</td><td style="${td}">Late November; look at the gutters again in April</td></tr>
    <tr><td style="${td}">Overhanging trees, or backing onto a park, woodland or canal</td><td style="${td}">2</td><td style="${td}">Late May and late November</td></tr>
    <tr><td style="${td}">Mossy roof, north-facing slope or shaded plot</td><td style="${td}">2</td><td style="${td}">Spring (moss washes down over winter) and late autumn</td></tr>
    <tr><td style="${td}">Flat-roofed extension, box gutter or valley gutter</td><td style="${td}">2</td><td style="${td}">Spring and autumn — these overflow inside the house, not just down the wall</td></tr>
    <tr><td style="${td}">Rented home or HMO</td><td style="${td}">At least 1, with photos</td><td style="${td}">Before winter, so you have dated evidence for your records</td></tr>
  </tbody>
</table>
</div>

<p style="${p}">Not sure which row you fit? Stand in the garden after heavy rain. If you see water spilling over the front of the gutter, staining the brickwork or splashing off the path, your gutters need clearing now — whatever the calendar says. Our guide to the <a href="/blog/clogged-gutters-signs/" style="${link}">signs of clogged gutters</a> lists the others.</p>

<h2 id="when-to-book" style="${h2}">Step 2: Book the Right Weeks (and Book Early)</h2>

<p style="${p}">There is a difference between when a clean should happen and when you should pick up the phone. These are the booking windows that work best:</p>

<h3 style="${h3}">Your autumn clean: book in August or September</h3>
<p style="${p}">The best time for the main clean is after most leaves have fallen — usually from mid-November into early December in the West Midlands. Clean too early in October and the gutters can fill again within weeks. Because almost every household wants the same few weeks, the diary fills up fast. Booking in August or September gets you the date you want, rather than whatever is left in mid-December.</p>

<h3 style="${h3}">Your spring clean: book in March or April</h3>
<p style="${p}">If your home needs two cleans, the spring one clears moss, seeds and blossom that built up over winter. Late April to early June is ideal. It is a quieter time of year, so booking a few weeks ahead is normally enough.</p>

<h3 style="${h3}">Combine jobs to save a second visit</h3>
<p style="${p}">If you are planning any other roofline work in 2027 — <a href="/gutter-and-fascia/" style="${link}">fascia and soffit cleaning</a>, conservatory gutters or <a href="/gutter-repairs/" style="${link}">gutter repairs</a> — book them for the same visit. A repair is much easier to spot on a gutter that has just been cleared, and you only need to be in once.</p>

<h2 id="budget" style="${h2}">Step 3: Budget for the Year</h2>

<p style="${p}">Gutter cleaning is one of the cheapest bits of home maintenance you can plan for. These are our current fixed prices; we will update this page if they change in 2027.</p>

<div style="${wrap}">
<table style="${table}">
  <thead>
    <tr><th style="${th}">Home</th><th style="${th}">1 clean in 2027</th><th style="${th}">2 cleans in 2027</th></tr>
  </thead>
  <tbody>
    <tr><td style="${td}">1–2 bedrooms</td><td style="${td}">£${P2}</td><td style="${td}">£${P2 * 2}</td></tr>
    <tr><td style="${td}">3 bedrooms</td><td style="${td}">£${P3}</td><td style="${td}">£${P3 * 2}</td></tr>
    <tr><td style="${td}">4+ bedrooms or three storeys (Premium)</td><td style="${td}">From £${PP}</td><td style="${td}">From £${PP * 2}</td></tr>
  </tbody>
</table>
</div>

<p style="${p}">Optional extras: conservatory gutters £${PC}, fascia &amp; soffit cleaning £${PF}. Downpipe flushing and before &amp; after photos are included in every clean, and there is no call-out fee. For an exact figure for your house, use our <a href="/gutter-cleaning-calculator/" style="${link}">gutter cleaning price calculator</a>, or see the full <a href="/gutter-cleaning-prices/" style="${link}">gutter cleaning prices</a> page.</p>

<p style="${p}">To put that in context: one blocked downpipe left over winter can soak a wall, stain render or bring damp through to an inside wall. Repairing that costs far more than a year of cleans. Our <a href="/blog/gutter-cleaning-cost-guide/" style="${link}">UK gutter cleaning cost guide</a> compares typical prices across the country.</p>

${ctaBox}

<h2 id="what-to-expect" style="${h2}">Step 4: Know What Happens on the Day</h2>

<p style="${p}">A proper gutter clean should be quick, tidy and fully visible to you. This is what a WOW Gutters visit looks like:</p>

<ol style="padding-left: 22px; margin: 16px 0;">
  <li style="${li}"><strong>A fixed price before we start.</strong> You know the cost before any work begins.</li>
  <li style="${li}"><strong>Cleared from the ground.</strong> We use a high-reach gutter vacuum that reaches up to four storeys, so no ladder rests on your gutters, fascias or conservatory.</li>
  <li style="${li}"><strong>Every run, not just the front.</strong> Front, back, sides, porches, bays and extensions.</li>
  <li style="${li}"><strong>Downpipes flushed and tested.</strong> A clear gutter is no use if the downpipe below it is blocked.</li>
  <li style="${li}"><strong>Before &amp; after photos.</strong> Taken with a pole camera, so you can see the parts of the roofline you can’t see from the ground.</li>
  <li style="${li}"><strong>Any problems pointed out.</strong> Loose brackets, leaking joints or sagging sections are shown in your photos. We don’t carry out repairs without your agreement.</li>
</ol>

<p style="${p}">Want to understand the method? Read how <a href="/blog/ladder-free-gutter-cleaning/" style="${link}">ladder-free gutter cleaning</a> works.</p>

<h2 id="checks" style="${h2}">Step 5: Check Before You Book</h2>

<p style="${p}">Whoever you book with in 2027, a few quick questions will tell you whether you are getting a proper job:</p>

<ul style="padding-left: 22px; margin: 16px 0;">
  <li style="${li}"><strong>Are you insured?</strong> Ask for public liability cover. If something is damaged, you want it covered.</li>
  <li style="${li}"><strong>Is the price fixed?</strong> Avoid “we’ll see when we get there” quotes.</li>
  <li style="${li}"><strong>Do you clear the downpipes?</strong> Many cheap cleans skip them.</li>
  <li style="${li}"><strong>Will I get photos?</strong> Without photos you can’t tell whether the back gutter was done.</li>
  <li style="${li}"><strong>How do you reach the gutters?</strong> Ladders leaned on plastic gutters can crack them. Ground-based vacuums avoid that.</li>
</ul>

<p style="${p}">We go through these in more detail in <a href="/blog/ask-before-hiring-gutter-cleaner/" style="${link}">questions to ask before hiring a gutter cleaner</a>.</p>

<h2 id="checklist" style="${h2}">Your 2027 Gutter Planner</h2>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px 26px; margin: 20px 0;">
  <ul style="padding-left: 20px; margin: 0;">
    <li style="${li}"><strong>January–February:</strong> after storms, look for water spilling over or dripping joints. Book a clean straight away if you see it.</li>
    <li style="${li}"><strong>March–April:</strong> book your spring clean if your home needs two.</li>
    <li style="${li}"><strong>Late April–early June:</strong> spring clean.</li>
    <li style="${li}"><strong>August–September:</strong> book your autumn clean before the rush.</li>
    <li style="${li}"><strong>Mid-November–early December:</strong> main clean, once the leaves are down.</li>
    <li style="${li}"><strong>December:</strong> keep your photos with your home records, and note any repairs to plan for 2028.</li>
  </ul>
</div>

<p style="${p}">If you live in or around the city, our <a href="/gutter-cleaning-birmingham/" style="${link}">gutter cleaning Birmingham</a> page covers the areas and postcodes we work in.</p>

<h2 id="faq" style="${h2}">FAQ: Planning Gutter Cleaning in 2027</h2>

${faq('When is the best time to clean gutters in 2027?', 'For most homes, late November to early December, once the trees have dropped their leaves. If you have trees overhanging the roof, add a second clean in late spring.')}
${faq('How far ahead should I book my autumn gutter clean?', 'Book in August or September. October and November are the busiest weeks of the year, so leaving it late usually means waiting until December or later.')}
${faq('Do I really need two cleans a year?', 'Only if your home is near trees, backs onto a park or woodland, has a mossy roof, or has flat-roof or valley gutters. Homes with no trees nearby are normally fine with one clean a year.')}
${faq('How much should I budget for gutter cleaning in 2027?', `With WOW Gutters Ltd, a 2-bed home is £${P2} per clean and a 3-bed home is £${P3}. Larger homes are Premium from £${PP}. If you need two cleans, simply double that figure. Downpipes and photos are included.`)}
${faq('Can I book a clean now if my gutters are already overflowing?', 'Yes. Overflowing gutters should be cleared as soon as possible rather than waiting for the ideal month. Call 07421 433910 and we will give you the next available date.')}

<h2 style="${h2}">Related Reading</h2>
<ul style="padding-left: 22px; margin: 16px 0;">
  <li style="${li}"><a href="/blog/gutter-maintenance-schedule/" style="${link}">Gutter maintenance schedule: month by month</a></li>
  <li style="${li}"><a href="/blog/birmingham-seasonal-gutter-guide/" style="${link}">Birmingham gutter maintenance calendar</a></li>
  <li style="${li}"><a href="/blog/how-often-should-gutters-be-cleaned/" style="${link}">How often should gutters be cleaned?</a></li>
  <li style="${li}"><a href="/blog/gutter-cleaning-cost-guide/" style="${link}">How much does gutter cleaning cost in the UK?</a></li>
</ul>
`,
};
