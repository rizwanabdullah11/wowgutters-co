import type { BlogPost } from './blogTypes';

const IMG_HERO   = '/blog-images/birmingham-gutter-cleaning-checklist/birmingham-gutter-cleaning-checklist-hero.png';
const IMG_BEFORE = '/blog-images/birmingham-gutter-cleaning-checklist/birmingham-gutter-cleaning-checklist-before.png';
const IMG_AFTER  = '/blog-images/birmingham-gutter-cleaning-checklist/birmingham-gutter-cleaning-checklist-after.png';

const link = 'color: #19C58B; font-weight: 700; text-decoration: none;';
const h2 = 'font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;';
const h3 = 'font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-top: 28px;';
const p = 'color: #334155; line-height: 1.8;';
const th = 'text-align: left; padding: 10px 14px; background: #f1f5f9; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;';
const td = 'padding: 10px 14px; color: #334155; border-bottom: 1px solid #e2e8f0; vertical-align: top;';

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
  <h3 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0 0 12px 0;">DUE A CLEAN? BOOK BEFORE THE AUTUMN RUSH</h3>
  <p style="color: #334155; font-size: 0.98rem; line-height: 1.75; margin: 0 0 18px 0;">Ground-based vacuum gutter cleaning across Birmingham and the West Midlands. From £100, downpipes flushed and tested, before &amp; after photos on every job.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 12px;">
    <a href="/quote/" style="display: inline-flex; align-items: center; gap: 8px; background: #19C58B; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">Get a free quote</a>
    <a href="tel:07421433910" style="display: inline-flex; align-items: center; gap: 8px; background: #0f172a; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">📞 07421 433910</a>
  </div>
</div>`;

export const howOftenCleanGuttersBlogPost: BlogPost = {
  id: 'how-often-should-gutters-be-cleaned',
  seoTitle: 'How Often Should Gutters Be Cleaned in the UK?',
  title: 'How Often Should Gutters Be Cleaned in the UK?',
  excerpt:
    'Once a year is right for most UK homes, but trees, roof type and your area can mean twice. Here is how to work out the right schedule for your house.',
  image: IMG_HERO,
  date: '2026-10-21',
  views: '0',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'Professional Gutter Cleaning & Repair Specialists',
  category: 'Guides',
  featured: true,
  lastUpdated: '2026-10-21',
  quickAnswer:
    'Most UK homes need their gutters cleaned once a year, ideally in late autumn (November) after the leaves have fallen. Homes near trees, with mossy roofs or with flat roofs and valley gutters often need twice a year: late autumn and spring. New-build homes with no nearby trees can sometimes go 18–24 months between cleans.',
  shortSummary: 'How Often To Clean Gutters',
  breadcrumbName: 'How Often to Clean Gutters',
  content: `
<p style="${p}">Gutters don't come with a service light. They quietly fill with leaves, moss and silt until one heavy shower sends water over the edge and down your wall. So how often should you have them cleaned? For most UK homes the answer is <strong>once a year</strong>, but some houses need it twice and a few can wait longer. This guide explains how to work out the right schedule for yours.</p>

<h2 id="short-answer" style="${h2}">The short answer</h2>
<div style="overflow-x: auto; margin: 20px 0;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border: 1px solid #e2e8f0;">
  <thead><tr><th style="${th}">Your home</th><th style="${th}">How often</th><th style="${th}">Best time</th></tr></thead>
  <tbody>
    <tr><td style="${td}">Typical house, a few trees nearby</td><td style="${td}"><strong>Once a year</strong></td><td style="${td}">Late autumn (November)</td></tr>
    <tr><td style="${td}">Overhanging or neighbouring trees</td><td style="${td}"><strong>Twice a year</strong></td><td style="${td}">Late autumn and spring</td></tr>
    <tr><td style="${td}">Mossy concrete or clay tile roof</td><td style="${td}"><strong>Twice a year</strong></td><td style="${td}">Autumn and spring</td></tr>
    <tr><td style="${td}">Flat roof, box or valley gutters</td><td style="${td}"><strong>Twice a year</strong></td><td style="${td}">Autumn and spring</td></tr>
    <tr><td style="${td}">Newer home, no trees nearby</td><td style="${td}"><strong>Every 12–24 months</strong></td><td style="${td}">Autumn</td></tr>
    <tr><td style="${td}">Commercial or rented property</td><td style="${td}"><strong>At least once a year</strong></td><td style="${td}">Planned schedule</td></tr>
  </tbody>
</table>
</div>

<h2 id="what-decides" style="${h2}">What decides how often your gutters need cleaning?</h2>

<h3 style="${h3}">Trees</h3>
<p style="${p}">Trees are the biggest factor. Leaves drop in autumn, but trees also shed seeds, blossom, twigs and needles in spring and summer. Pine needles are especially troublesome because they knit together into a mat that traps silt. If branches overhang your roof, or a large tree sits in a neighbour's garden, plan for two cleans a year. Our guide on <a href="/blog/tree-gutter-cleaning/" style="${link}">how tree cover changes your gutter cleaning schedule</a> goes into more detail.</p>

<h3 style="${h3}">Moss on the roof</h3>
<p style="${p}">Concrete and clay roof tiles grow moss, especially on north-facing slopes. Rain washes moss and grit down into the gutters all year round, where it settles into a heavy sludge. If your roof is mossy, a <a href="/services/roof-cleaning/" style="${link}">roof moss treatment</a> alongside a gutter clean stops the problem coming straight back.</p>

<h3 style="${h3}">Roof and gutter type</h3>
<p style="${p}">Valley gutters (where two roof slopes meet), box gutters and flat-roof outlets collect debris faster and overflow more easily than standard half-round gutters. They benefit from more frequent checks.</p>

<h3 style="${h3}">Birds and pests</h3>
<p style="${p}">Pigeons and other birds nest in gutters and behind fascias, leaving nesting material and droppings that block outlets. If birds regularly roost on your roof, check gutters more often.</p>

<img src="${IMG_BEFORE}" alt="Gutter blocked with leaves, moss and silt" width="1602" height="982" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

<h2 id="best-time" style="${h2}">The best time of year to clean gutters</h2>
<p style="${p}"><strong>Late autumn</strong> (usually November) is the most important clean, once most leaves have fallen and before winter rain and frost. Water that sits in blocked gutters can freeze and expand, straining joints and brackets.</p>
<p style="${p}"><strong>Spring</strong> (April or May) is the second clean for homes near trees or with mossy roofs. It clears winter debris, seeds and blossom before summer storms.</p>
<p style="${p}">Booking in early autumn helps too. October and November are the busiest months for gutter cleaners, so appointments fill quickly. Our <a href="/blog/birmingham-seasonal-gutter-guide/" style="${link}">seasonal gutter maintenance calendar</a> sets out what to do each season.</p>

${ctaBox}

<h2 id="signs" style="${h2}">Signs your gutters need cleaning now</h2>
<p style="${p}">Whatever your schedule, book a clean straight away if you notice:</p>
<ul style="${p} padding-left: 22px;">
  <li>Water spilling over the gutter edge when it rains</li>
  <li>Plants, grass or moss growing out of the gutter</li>
  <li>Damp patches, green stains or algae on outside walls</li>
  <li>A downpipe that stays dry during heavy rain (it's blocked)</li>
  <li>Gutters sagging or pulling away from the fascia</li>
  <li>Damp or mould on ceilings or walls inside, near the roofline</li>
</ul>
<p style="${p}">More warning signs are in <a href="/blog/clogged-gutters-signs/" style="${link}">signs your gutters are clogged</a>.</p>

<h2 id="what-happens" style="${h2}">What happens if you don't clean your gutters?</h2>
<p style="${p}">Blocked gutters rarely cause a problem overnight, but the damage builds up. Overflowing water soaks brickwork and can cause damp inside, rots timber fascias and soffits, stains render and can pool around foundations. The weight of wet debris also pulls gutters out of line, so joints start leaking. A yearly clean costs far less than fixing any of these. See <a href="/gutter-cleaning-prices/" style="${link}">our gutter cleaning prices</a>, or read <a href="/blog/gutter-cleaning-cost-guide/" style="${link}">how much gutter cleaning costs in the UK</a>.</p>

<img src="${IMG_AFTER}" alt="Clear gutter after a professional clean" width="1602" height="982" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin: 24px 0;" />

<h2 id="birmingham" style="${h2}">Gutter cleaning in Birmingham and the West Midlands</h2>
<p style="${p}">Many Birmingham suburbs have mature, tree-lined streets, so plenty of local homes need two cleans a year. We provide <a href="/" style="${link}">gutter cleaning in Birmingham</a> and across the West Midlands, including <a href="/gutter-cleaning-solihull/" style="${link}">Solihull</a>, <a href="/gutter-cleaning-sutton-coldfield/" style="${link}">Sutton Coldfield</a>, <a href="/gutter-cleaning-wolverhampton/" style="${link}">Wolverhampton</a> and <a href="/gutter-cleaning-coventry/" style="${link}">Coventry</a>. Our ground-based vacuum reaches up to four storeys without ladders, and every visit includes downpipe flushing and before and after photos.</p>

<h2 id="faq" style="${h2}">FAQ: How Often to Clean Gutters</h2>
<div>
${faq('How often should gutters be cleaned in the UK?', 'Once a year for most homes, ideally in late autumn. Homes near trees, with mossy roofs or with valley and box gutters usually need twice a year: late autumn and spring.')}
${faq('What month is best for gutter cleaning?', 'November is usually best, after most leaves have fallen and before winter rain and frost. A second clean in April or May suits homes near trees.')}
${faq('Can I leave my gutters for two years?', 'Sometimes, on newer homes with no trees nearby. Most homes build up enough leaves, moss and silt in a year to start overflowing, so annual cleaning is the safer choice.')}
${faq('Do gutter guards mean I never need to clean my gutters?', 'No. Guards reduce leaves but fine silt, moss and seeds still get through or sit on top, so gutters with guards still need checking and occasional cleaning.')}
${faq('How often should landlords clean gutters?', 'At least once a year, as part of planned maintenance. Blocked gutters can lead to damp and mould, which landlords are responsible for preventing in rented homes.')}
</div>

<h2 id="related-articles" style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Related Articles</h2>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><a href="/blog/gutter-cleaning-cost-guide/" style="${link}">How Much Does Gutter Cleaning Cost in the UK?</a></li>
  <li><a href="/blog/tree-gutter-cleaning/" style="${link}">How Tree Cover Changes Your Gutter Cleaning Schedule</a></li>
  <li><a href="/blog/birmingham-seasonal-gutter-guide/" style="${link}">Birmingham Gutter Maintenance Calendar</a></li>
  <li><a href="/blog/leaves-in-gutters/" style="${link}">Leaves in Gutters: What to Do</a></li>
</ul>
`,
};
