import type { BlogPost } from './blogTypes';

const IMG_HERO   = '/blog-images/sale-sign-birmingham/sale-sign-birmingham-hero.png';
const IMG_BEFORE = '/blog-images/sale-sign-birmingham/sale-sign-birmingham-before.png';
const IMG_AFTER  = '/blog-images/sale-sign-birmingham/sale-sign-birmingham-after.png';

const link = 'color: #047857; font-weight: 700; text-decoration: none;';

const ctaTop = `
<blockquote style="border-left: 4px solid #19C58B; padding: 16px 20px; margin: 24px 0; background: #f0fdf4; border-radius: 0 8px 8px 0; color: #1e293b;">
  <strong>📞 WOW Gutters Ltd — Birmingham's gutter cleaning specialists:</strong>
  <a href="tel:07421433910" style="color: #0f172a; font-weight: 700; text-decoration: none;">07421 433910</a> | 
  <a href="/quote/" style="color: #047857; font-weight: 700; text-decoration: none;">Request a quote</a><br/>
  Ground-based vacuum system · Live camera inspection · Before &amp; after photo records for buyers
</blockquote>`;

const ctaBox = `
<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border: 2px solid #19C58B; border-radius: 16px; padding: 28px 32px; margin: 40px 0; box-shadow: 0 4px 20px rgba(25,197,139, 0.12);">
  <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin: 0 0 12px 0; line-height: 1.3; text-transform: uppercase;">GET THE ROOFLINE READY BEFORE YOU LIST</h3>
  <p style="color: #334155; font-size: 0.98rem; line-height: 1.75; margin: 0 0 20px 0;">WOW Gutters Ltd provides fully insured, ground-based gutter cleaning across Birmingham and the West Midlands, with live camera inspection and before and after photographs on every job. No ladders. Present a clean, well-maintained roofline to prospective buyers and surveyors.</p>
  <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px 24px;">
    <div>
      <span style="display: block; font-weight: 800; color: #0f172a; font-size: 1rem;">Listing your property soon?</span>
      <span style="display: block; color: #64748b; font-size: 0.825rem; margin-top: 2px;">Same-week appointments across Birmingham &amp; West Midlands</span>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
      <a href="/quote/" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #047857; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 8px rgba(25,197,139, 0.3);">
        <span>&#9658;</span> Get Free Quote
      </a>
      <a href="tel:07421433910" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #0f172a; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
        <span>📞</span> 07421 433910
      </a>
    </div>
  </div>
</div>`;

export const guttersBeforeSellingBlogPost: BlogPost = {
  id: 'gutters-before-selling',
  seoTitle: 'Gutters Before the For Sale Sign: A Birmingham Seller’s Checklist',
  title: 'Gutters Before the For Sale Sign: A Birmingham Seller’s Checklist',
  excerpt:
    "Selling in Birmingham? Gutters, fascias and downpipes are among the first things buyers and surveyors see. Here is what to check and fix before listing. Call 07421 433910.",
  image: IMG_HERO,
  heroVideo: '/gutter-cleaning-video.mp4',
  date: '2026-10-20',
  views: '0',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'Professional Gutter Cleaning & Repair Specialists',
  category: 'Guides',
  featured: true,
  lastUpdated: '2026-10-20',
  quickAnswer:
    'Clean and check your gutters before listing, ideally before the estate agent’s photos and well before viewings. Clear the gutters and downpipes first, photograph the work, have any damaged fascia timber assessed before painting, and keep a dated record to show buyers. It removes an avoidable negative.',
  shortSummary: 'Gutters Before the For Sale Sign Birmingham',
  breadcrumbName: 'Gutters Before Selling',
  content: `
<p>Most sellers tidy the garden, repaint the hall and book the photographer. Few look up. Yet the roofline is in the first exterior photo, on the first viewing walk-up and near the top of a surveyor’s list. This guide covers what buyers and surveyors notice about gutters across <a href="/gutter-cleaning-birmingham" style="${link}">Birmingham</a> and the wider <a href="/gutter-cleaning-service-areas/" style="${link}">West Midlands</a>, what to check from the ground, what to fix first, and how to document it. It is about presentation and avoiding avoidable surprises. It makes no promises about sale price or speed, because nobody can.</p>

${ctaTop}

<nav style="background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px 28px; margin: 32px 0;">
  <h2 style="font-size: 1.2rem; font-weight: 800; color: #0f172a; margin: 0 0 16px 0;">Table of Contents</h2>
  <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.8; font-size: 0.95rem;">
    <li><a href="#why-sellers-look-up" style="${link}">Why Sellers Should Look Up</a></li>
    <li><a href="#thirty-seconds-buyers" style="${link}">What Buyers See in Thirty Seconds</a></li>
    <li><a href="#what-surveyors-look-for" style="${link}">What Surveyors Look For</a></li>
    <li><a href="#ground-check" style="${link}">The Seller’s Ten-Minute Ground Check</a></li>
    <li><a href="#right-order" style="${link}">Fix in the Right Order</a></li>
    <li><a href="#timing-surveys" style="${link}">Timing Around Photos, Viewings and Surveys</a></li>
    <li><a href="#what-cleaning-wont-fix" style="${link}">What Cleaning Won’t Fix</a></li>
    <li><a href="#moss-fascias-kerb-appeal" style="${link}">Moss, Fascias and Kerb Appeal</a></li>
    <li><a href="#shared-gutters" style="${link}">Shared Gutters and Neighbours</a></li>
    <li><a href="#property-types" style="${link}">Property Types and Selling</a></li>
    <li><a href="#records-for-buyers" style="${link}">Records for the Buyer’s Side</a></li>
    <li><a href="#landlords-probate-managed" style="${link}">Landlords, Probate and Managed Sales</a></li>
    <li><a href="#seasons-timing" style="${link}">Seasons and Timing</a></li>
    <li><a href="#choosing-contractor" style="${link}">Choosing a Contractor</a></li>
    <li><a href="#verify-wow-gutters" style="${link}">Where to Find and Verify WOW Gutters Ltd</a></li>
    <li><a href="#areas-we-cover" style="${link}">Areas We Cover</a></li>
    <li><a href="#faq" style="${link}">FAQ</a></li>
  </ol>
</nav>

<h2 id="why-sellers-look-up" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Why Sellers Should Look Up</h2>
<p>A gutter fault is visible, cheap to fix early and easy to photograph. That combination makes it a favourite finding in a survey report. Our existing guide, <a href="/blog/gutters-before-selling/" style="${link}">Selling Your Birmingham Home? Why Surveyors Always Check the Gutters First</a>, explains the surveyor’s side. This page is the seller’s side: what to do about it before you list.</p>
<p>The underlying chain is the same whatever the sale. Blocked water goes into the fascia, soffit, wall and eventually inside, as <a href="/blog/roofline-damage-prevention/" style="${link}">How Professional Gutter Cleaning Extends the Life of Your Roofline</a> explains. <a href="/blog/gutter-water-damage-guide" style="${link}">Water Damage From Gutters: Birmingham Homeowner Guide</a> walks through the stages.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_HERO}" alt="Birmingham residential property with 'For Sale' sign and pristine, professionally cleaned gutters" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">A well-maintained roofline elevates kerb appeal and removes red flags before estate agent photos and viewings.</figcaption>
</figure>

<h2 id="thirty-seconds-buyers" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What Buyers See in Thirty Seconds</h2>
<p>Buyers don’t inspect. They glance. From the pavement they notice:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li>A green fringe or plants at the gutter edge, covered in <a href="/blog/gutters-full-of-weeds" style="${link}">Gutters Full of Weeds or Seeds? Birmingham Clearing Guide</a></li>
  <li>A sagging section</li>
  <li>Dark streaks down the brickwork</li>
  <li>Peeling fascia paint</li>
  <li>Moss on the roof</li>
  <li>A puddle at a downpipe base</li>
</ul>
<p>None of these proves a serious problem. All of them read as “not looked after”, and buyers may then wonder what else was missed. <a href="/blog/clogged-gutters-signs" style="${link}">Clogged Gutters Birmingham: Signs You’re Missing</a> and <a href="/blog/summer-gutter-warning/" style="${link}">What Your Gutters Are Trying to Tell You This Summer</a> list the signs in detail.</p>

<h2 id="what-surveyors-look-for" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What Surveyors Look For</h2>
<p>A surveyor works from visible evidence, and the roofline gives plenty. Typical observations include blocked or sagging gutters, damp staining, defective downpipes, vegetation and timber condition at the eaves. Gutter issues often feed into wider comments about damp or timber, so a small fault can grow in the report.</p>
<p>Surveyors can’t see everything, so a clean roofline with clear paperwork helps. Remember too that a survey report isn’t a verdict on your home, but it does give a buyer something to raise.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_BEFORE}" alt="Heavily clogged gutter run before cleaning showing silt, leaves, and overflow staining" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Clogged gutters with compacted organic matter — an immediate flag on a RICS homebuyer survey report.</figcaption>
</figure>

<h2 id="ground-check" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">The Seller’s Ten-Minute Ground Check</h2>
<p>Do this on a dry day, from the garden, with no ladder. Work through the <a href="/blog/gutters-blocked-checklist" style="${link}">blocked gutters checklist</a> as you go:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li>Look along each run for a section that sits lower than its neighbours.</li>
  <li>Look for vertical stains below the gutter line.</li>
  <li>Look for plants or a green fringe.</li>
  <li>Listen in light rain for a gurgle from a downpipe, as <a href="/blog/downpipe-blocked-signs-birmingham-homes" style="${link}">How Do You Know If Your Downpipe Is Blocked? Signs Birmingham Homes Show</a> explains.</li>
  <li>Check each downpipe base for a returning puddle.</li>
  <li>Check the fascia and soffit for peeling paint and staining. <a href="/blog/soffit-damage-signs/" style="${link}">Soffit Damage in West Midlands Homes: Early Signs You Shouldn’t Ignore</a> covers the underside.</li>
  <li>Check upstairs for a musty smell near an outside wall. <a href="/blog/can-blocked-gutters-cause-damp" style="${link}">Can Blocked Gutters Cause Damp?</a> explains how external water gets inside.</li>
</ul>
<p>Please don’t climb to check. Working at height is where most DIY injuries happen, as <a href="/blog/gutter-ladder-safety/" style="${link}">Can You Clean Your Own Gutters Safely? A Birmingham Ladder Safety Reality Check</a> and the HSE’s <a href="https://www.hse.gov.uk/work-at-height/" target="_blank" rel="noopener noreferrer" style="${link}">guidance on working at height</a> explain. <a href="/blog/clean-gutters-two-storey-house-birmingham-safely" style="${link}">How Do You Clean Gutters on a Two-Storey House in Birmingham Safely?</a> covers standard houses.</p>

<h2 id="right-order" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Fix in the Right Order</h2>
<p>Order matters more than speed. A repair done in the wrong sequence gets wet again:</p>
<ol style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Clear the gutters and downpipes first:</strong> Otherwise anything you repair or paint gets soaked.</li>
  <li><strong>Photograph everything:</strong> Dated, before and after.</li>
  <li><strong>Have damaged timber assessed by a carpenter before it is painted:</strong> Peeling paint is moisture pushing from behind.</li>
  <li><strong>Deal with leaking joints:</strong> <a href="/blog/leaking-gutter-repair" style="${link}">Leaking Gutter Repair Birmingham: Fix or Replace?</a> explains how to judge repair against replacement.</li>
  <li><strong>Get interior damp diagnosed by a specialist:</strong> Because not all damp comes from gutters.</li>
  <li><strong>Redecorate last:</strong> Paint is the finish, not the fix.</li>
</ol>
<p><a href="/blog/roofline-cleaning-birmingham" style="${link}">Roofline Cleaning Birmingham: Gutters, Fascias &amp; Soffits</a> explains why the three parts fail together. <a href="/blog/stop-gutters-blocking" style="${link}">How Do You Stop Gutters From Blocking Again? A West Midlands Fix Guide</a> explains why a gutter refills if the cause isn’t fixed.</p>

<h2 id="timing-surveys" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Timing Around Photos, Viewings and Surveys</h2>
<p>Book the gutter visit before the estate agent’s photographer, so the exterior shots show a clean roofline. Book it well before the first viewings, so any follow-up work has time to be done. And leave time before a buyer’s survey, because a visit on the day before is better than none but leaves no room to fix anything it finds.</p>
<p>If your trees are still shedding, think about the date. Oak holds its leaves late, as <a href="/blog/tree-gutter-cleaning/" style="${link}">How Tree Cover Changes Your Gutter Cleaning Schedule in Birmingham</a> and <a href="/blog/autumn-leaf-buildup/" style="${link}">Autumn Leaf Fall by Tree Type: Which Birmingham House Gutters Get Hit Hardest</a> explain. A visit too early can leave you with a second wave on top of a clean gutter, as <a href="/blog/leaves-in-gutters" style="${link}">Leaves in Gutters? Birmingham Autumn Clearance Service</a> and <a href="/blog/gutter-cleaning-before-winter" style="${link}">Gutter Cleaning Before Winter Birmingham | Book Now</a> describe.</p>

<h2 id="what-cleaning-wont-fix" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What Cleaning Won’t Fix</h2>
<p>A gutter visit clears the gutters and downpipes, checks them with a live camera and notes what it sees. It won’t repair rotten timber or plaster, diagnose interior damp, confirm loft ventilation or assess structural movement. Those need a carpenter, a damp specialist or a structural engineer.</p>
<p>It also won’t make a sale happen on its own. What it does is remove an avoidable negative and give you a dated record. <a href="/blog/west-midlands-water-damage/" style="${link}">Is Your West Midlands Home Quietly Storing Water Damage Right Now?</a> covers the slow, hidden kind of damage that a seller may not know about.</p>
<p>On clay-influenced ground, repeated downpipe discharge in one spot matters more, as <a href="/blog/gutter-water-damage-guide/" style="${link}">How Birmingham’s Clay Soil Affects Foundation Damage From Blocked Gutters</a> explains carefully. It is a gradual process, and any structural worry belongs with a qualified structural engineer. For how a downpipe fault escalates, see <a href="/blog/hidden-damage-blocked-downpipe-solihull" style="${link}">The Hidden Damage Behind Every Blocked Downpipe in Solihull</a>.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_AFTER}" alt="Clean, empty gutter channel floor after high-reach vacuum clearing ready for property marketing" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Clear guttering down to the channel floor with flow-tested downpipes, documented for your buyer’s pack.</figcaption>
</figure>

<h2 id="moss-fascias-kerb-appeal" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Moss, Fascias and Kerb Appeal</h2>
<p>Roof moss is one of the most visible things a buyer sees, and it feeds the gutters all year. <a href="/blog/roof-moss-damage/" style="${link}">Moss on Your Roof? What It’s Doing to Your Birmingham Gutters Right Now</a> explains the cycle. Our <a href="/roof-cleaning" style="${link}">roof cleaning</a> and <a href="/roof-cleaning/" style="${link}">moss removal</a> services treat the source, and our <a href="/fascia-soffit-cleaning" style="${link}">fascia and soffit cleaning</a> service looks after the outside surfaces.</p>
<p>Cleaning isn’t painting. If a fascia is soft or peeling, have it assessed before anyone repaints it. A fresh coat over damp timber looks good for a few weeks and then fails.</p>
<p>A glazed extension has its own service, our <a href="/services/conservatory/" style="${link}">conservatory roof cleaning</a>. Flat roofs on extensions need a different assessment, as <a href="/blog/flat-roof-gutters/" style="${link}">Flat Roof Gutters in Birmingham: The Maintenance Problem Most Guides Ignore</a> explains.</p>

<h2 id="shared-gutters" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Shared Gutters and Neighbours</h2>
<p>On semi-detached houses and terraces, a gutter section or downpipe may be shared. A neighbour’s neglected side can affect yours, and a buyer’s surveyor may spot it. <a href="/blog/gutter-cleaning-semi-detached-shared-boundary-birmingham" style="${link}">Gutter Cleaning for Semi-Detached Homes: The Shared Boundary Issue in Birmingham</a> explains the pattern. If you can, tell the neighbour you’re listing and offer to book at the same time. <a href="/blog/downpipe-blocked-signs-birmingham-homes/" style="${link}">Downpipes Blocked Again? The Birmingham Fix Most Homeowners Miss</a> explains why shared pipes cause recurring trouble, and our <a href="/downpipe-unblocking" style="${link}">downpipe unblocking</a> service tests every outlet.</p>

<h2 id="property-types" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Property Types and Selling</h2>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Victorian and Edwardian homes</strong> have cast iron joints and original timber. See <a href="/blog/victorian-gutter-cleaning-birmingham/" style="${link}">Why Victorian Homes in Birmingham Need a Different Gutter Cleaning Approach</a>.</li>
  <li><strong>Bungalows</strong> have low gutters under overhanging trees. See <a href="/blog/bungalow-gutter-cleaning" style="${link}">Gutter Cleaning for Bungalows Birmingham | Safe &amp; Fast</a>.</li>
  <li><strong>Taller houses and apartment buildings</strong> hide faults at height. See <a href="/blog/high-level-gutter-cleaning" style="${link}">High-Level Gutter Cleaning Birmingham | Fully Insured</a>.</li>
  <li><strong>Flats in managed blocks</strong> depend on the freeholder. See <a href="/blog/block-gutter-maintenance/" style="${link}">Block Management Gutter Maintenance: A West Midlands Property Manager’s Checklist</a>.</li>
  <li><strong>Commercial property</strong> has long runs and box gutters. See <a href="/blog/commercial-warehouse-gutter-clearing-birmingham" style="${link}">Commercial Warehouse Gutter Clearing Birmingham</a>, <a href="/blog/warehouse-gutter-case-study/" style="${link}">Warehouse Gutter Clearing: When Grass Is Growing in Your Box Gutter</a> and our <a href="/commercial-gutter-cleaning" style="${link}">commercial gutter cleaning</a> service.</li>
</ul>

<h2 id="records-for-buyers" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Records for the Buyer’s Side</h2>
<p>A seller who can say “the gutters were cleared and checked on this date, and here are the photos” is better placed than one who can only say “they were fine”. Every visit we do produces before and after photographs of each run and a written condition summary. <a href="/blog/gutter-water-damage-guide/" style="${link}">Gutter Maintenance and Home Insurance: What Birmingham Homeowners Need to Know</a> explains why dated records matter. That guide is general information, not insurance advice.</p>
<p>During a sale you may be asked about repairs or damp. Check with your conveyancer what to disclose and when. Don’t hide a known problem, and don’t claim a repair that wasn’t done. A truthful record helps more than a polished silence.</p>

<h2 id="landlords-probate-managed" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Landlords, Probate and Managed Sales</h2>
<p>Selling a tenanted property? Tenants rarely look up, so faults can run unreported for years, as <a href="/blog/landlord-gutter-cleaning" style="${link}">Gutter Cleaning for Landlords &amp; Letting Agents Birmingham</a> explains. Check before you list, and coordinate access through the tenant or agent.</p>
<p>For a property being sold on behalf of a relative, a ground-based visit with photographs lets family members see the condition without anyone climbing. <a href="/blog/elderly-gutter-cleaning" style="${link}">Gutter Cleaning for Elderly Homeowners Birmingham</a> covers that situation.</p>

<h2 id="seasons-timing" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Seasons and Timing</h2>
<p>Autumn is the pressure point, as <a href="/blog/birmingham-autumn-gutter-guide/" style="${link}">Why Autumn Is the Most Dangerous Season for Birmingham Gutters</a> explains, and bookings fill quickly. <a href="/blog/summer-gutter-cleaning-early/" style="${link}">Beat the Autumn Rush: Book Your Summer Gutter Cleaning Early</a> explains why booking ahead helps, and <a href="/blog/birmingham-autumn-gutter-guide/" style="${link}">Get Your Gutters Ready Before Birmingham’s Autumn Leaves Arrive</a> covers timing.</p>
<p>Summer is the best time to inspect, because dry weather shows defects clearly. See <a href="/blog/summer-gutter-inspections/" style="${link}">How Dry Summer Weather Makes Gutter Inspections Easier</a>, <a href="/blog/birmingham-gutter-health-check-summer" style="${link}">Why Every Birmingham Home Needs a Gutter Health Check This Summer</a> and <a href="/blog/summer-gutter-preparation/" style="${link}">Preparing Your Gutters During Summer for the Seasons Ahead</a>. Even summer isn’t risk-free, as <a href="/blog/blocked-gutters-birmingham/" style="${link}">Summer Storms and Blocked Gutters</a> shows, and <a href="/blog/summer-gutter-maintenance/" style="${link}">Late Summer Gutter Maintenance: Prepare Your Home for Autumn</a> covers the bridge visit.</p>
<p>For the year as a whole, see the <a href="/blog/birmingham-seasonal-gutter-guide/" style="${link}">Birmingham Gutter Maintenance Calendar</a>, the <a href="/blog/birmingham-autumn-gutter-guide/" style="${link}">pre-season preparation timeline</a> and <a href="/blog/heavy-rain-birmingham-gutters-ready/" style="${link}">Gutter Cleaning in Rainy Season: A West Midlands Homeowner’s Prep List</a>. Wind decides which side fills first, as <a href="/blog/wind-debris-gutters/" style="${link}">How Wind Direction Affects Debris Build-Up in Birmingham Gutters</a> explains. If water is already spilling, see <a href="/blog/overflowing-gutters-fix" style="${link}">Overflowing Gutters in Birmingham? Causes &amp; Quick Fixes</a> and <a href="/blog/emergency-gutter-cleaning" style="${link}">Emergency Gutter Cleaning Birmingham After Heavy Rain</a>.</p>

<h2 id="choosing-contractor" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Choosing a Contractor</h2>
<p>Ask five questions:</p>
<ol style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li>Do you clear to the channel floor and check the structure? See <a href="/blog/ask-before-hiring-gutter-cleaner/" style="${link}">The One Question to Ask Before Hiring Any Gutter Cleaner in the West Midlands</a>.</li>
  <li>Do you work from the ground, and are you insured?</li>
  <li>Do I get before and after photos of every run?</li>
  <li>Can I have a written summary I can show a buyer?</li>
  <li>Will you tell me what’s outside your scope?</li>
</ol>
<p>Be cautious about unusually quick visits, as <a href="/blog/gutter-clean-duration" style="${link}">How Long Does a Professional Gutter Clean Take in Birmingham?</a> explains. Our method is described in <a href="/blog/how-clean-gutters-without-ladder-birmingham-method" style="${link}">How Do You Clean Gutters Without a Ladder? The Method Birmingham Pros Use</a> and <a href="/blog/gutter-vacuum-cleaning-birmingham" style="${link}">Gutter Vacuum Cleaning Birmingham</a>, and the full process is in <a href="/blog/professional-gutter-walkthrough/" style="${link}">What Happens During a Professional Gutter Clean? A Birmingham Homeowner’s Walkthrough</a>. Heavily neglected runs fall under our <a href="/gutter-clearing" style="${link}">gutter clearing</a> service, and our <a href="/the-gutter-gallery/" style="${link}">gallery</a> shows real examples.</p>
<p>Check that the business exists outside its own website. Our listings on <a href="https://www.fyple.co.uk/company/wow-gutters-ltd-texh084/" target="_blank" rel="noopener noreferrer" style="${link}">Fyple</a>, <a href="https://ratingsplus.co.uk/city/birmingham/gutter-cleaners/wow-gutters-ltd" target="_blank" rel="noopener noreferrer" style="${link}">RatingsPlus</a> and <a href="https://www.friday-ad.co.uk/business/-/wow-gutters-ltd/7124953" target="_blank" rel="noopener noreferrer" style="${link}">Friday-Ad</a> are a quick first check. <a href="/blog/seasonal-home-maintenance/" style="${link}">The One Home Maintenance Task Birmingham Homeowners Consistently Miss Each Summer</a> and <a href="/blog/summer-home-maintenance/" style="${link}">The Home Maintenance Job Most Birmingham Homeowners Forget Every Summer</a> explain why this job so often gets skipped. For everything in one place, <a href="/blog/birmingham-seasonal-gutter-guide/" style="${link}">The Complete Guide to Gutter Maintenance for Birmingham &amp; West Midlands Homeowners</a> is the pillar guide.</p>

${ctaBox}

<h2 id="verify-wow-gutters" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Where to Find and Verify WOW Gutters Ltd</h2>
<p>You can check our business details on independent directories before you book:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><a href="https://www.fyple.co.uk/company/wow-gutters-ltd-texh084/" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on Fyple</a></li>
  <li><a href="https://ratingsplus.co.uk/city/birmingham/gutter-cleaners/wow-gutters-ltd" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on RatingsPlus (Birmingham gutter cleaners)</a></li>
  <li><a href="https://www.friday-ad.co.uk/business/-/wow-gutters-ltd/7124953" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on Friday-Ad</a></li>
  <li><a href="https://www.yellowleaf.co.uk/pages/63019-wow-gutters-ltd.html" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on YellowLeaf</a></li>
  <li><a href="https://find-open.co.uk/birmingham/wow-gutters-ltd-4426278" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on Find-Open (Birmingham)</a></li>
  <li><a href="https://www.bing.com/forbusiness/singleEntity?bizid=f252fb7c-de29-4a90-a23f-641c49097484" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on Bing Places</a></li>
  <li><a href="https://www.openstreetmap.org/user/Wow%20Gutters" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters on OpenStreetMap</a></li>
  <li><a href="https://www.bizify.co.uk/search/wow-gutters-ltd-in-birmingham" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on Bizify</a></li>
  <li><a href="https://www.hotfrog.co.uk/company/AC_Jc5Tkc3-Wrx18WK3Nfw/wow-gutters-ltd/birmingham/cleaning-services" target="_blank" rel="noopener noreferrer" style="${link}">WOW Gutters Ltd on Hotfrog (cleaning services, Birmingham)</a></li>
</ul>
<p>You can also read our <a href="/reviews" style="${link}">reviews</a>, learn <a href="/about" style="${link}">about us</a> or check the <a href="/help/" style="${link}">FAQ</a>.</p>

<h2 id="areas-we-cover" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Areas We Cover</h2>
<p>WOW Gutters Ltd provides gutter cleaning for sellers across <a href="/gutter-cleaning-birmingham" style="${link}">Birmingham</a>, <a href="/gutter-cleaning-solihull" style="${link}">Solihull</a>, <a href="/gutter-cleaning-sutton-coldfield" style="${link}">Sutton Coldfield</a>, <a href="/gutter-cleaning-wolverhampton" style="${link}">Wolverhampton</a>, <a href="/gutter-cleaning-walsall" style="${link}">Walsall</a>, <a href="/gutter-cleaning-dudley" style="${link}">Dudley</a>, <a href="/gutter-cleaning-coventry" style="${link}">Coventry</a>, <a href="/gutter-cleaning-redditch" style="${link}">Redditch</a>, <a href="/gutter-cleaning-worcester" style="${link}">Worcester</a>, <a href="/gutter-cleaning-bromsgrove" style="${link}">Bromsgrove</a>, <a href="/gutter-cleaning-west-bromwich" style="${link}">West Bromwich</a> and <a href="/gutter-cleaning-service-areas/" style="${link}">all West Midlands areas</a>.</p>
<p><a href="/contact" style="${link}">Contact us</a> or <a href="/quote" style="${link}">request a quote</a>.</p>

<h2 id="faq" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">FAQ: Gutters Before Selling in Birmingham</h2>

<div style="margin-top: 24px;">

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Should I clean my gutters before selling my house?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">It’s sensible. Visible gutter problems are easy for buyers and surveyors to spot and cheap to deal with early. See <a href="/blog/gutters-before-selling/" style="${link}">Selling Your Birmingham Home?</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Will clean gutters raise my sale price?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Nobody can promise that. It removes an avoidable negative and gives you a dated record.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>When should I book before listing?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Before the estate agent’s photos and well before viewings, so any follow-up work has time. See <a href="/blog/gutter-cleaning-before-winter" style="${link}">Gutter Cleaning Before Winter Birmingham</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Should I repaint a peeling fascia before selling?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Not until you know why it’s peeling. Clear the gutters first and have the timber checked.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Do I have to tell a buyer about gutter problems?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Ask your conveyancer what to disclose. Don’t hide a known problem.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What can a gutter visit not do?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">It can’t repair timber, diagnose damp or assess structural movement. See <a href="/blog/gutter-water-damage-guide" style="${link}">Water Damage From Gutters</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What if my gutters are shared with a neighbour?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Tell them you’re listing and offer to book together. See <a href="/blog/gutter-cleaning-semi-detached-shared-boundary-birmingham" style="${link}">Gutter Cleaning for Semi-Detached Homes</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What areas do you cover?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #047857; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;"><a href="/gutter-cleaning-birmingham" style="${link}">Birmingham</a>, <a href="/gutter-cleaning-solihull" style="${link}">Solihull</a>, <a href="/gutter-cleaning-sutton-coldfield" style="${link}">Sutton Coldfield</a>, <a href="/gutter-cleaning-wolverhampton" style="${link}">Wolverhampton</a>, <a href="/gutter-cleaning-walsall" style="${link}">Walsall</a>, <a href="/gutter-cleaning-dudley" style="${link}">Dudley</a>, <a href="/gutter-cleaning-coventry" style="${link}">Coventry</a>, <a href="/gutter-cleaning-redditch" style="${link}">Redditch</a>, <a href="/gutter-cleaning-worcester" style="${link}">Worcester</a>, <a href="/gutter-cleaning-bromsgrove" style="${link}">Bromsgrove</a> and <a href="/gutter-cleaning-service-areas/" style="${link}">all West Midlands areas</a>.</p>
    </div>
  </details>

</div>

<h2 id="related-articles" style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Related Articles</h2>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong><a href="/blog/gutters-before-selling/" style="${link}">Selling Your Birmingham Home? Why Surveyors Always Check the Gutters First</a></strong></li>
  <li><strong><a href="/blog/roofline-cleaning-birmingham" style="${link}">Roofline Cleaning Birmingham: Gutters, Fascias &amp; Soffits</a></strong></li>
  <li><strong><a href="/blog/gutter-water-damage-guide" style="${link}">Water Damage From Gutters: Birmingham Homeowner Guide</a></strong></li>
  <li><strong><a href="/blog/gutter-water-damage-guide/" style="${link}">Gutter Maintenance and Home Insurance: What Birmingham Homeowners Need to Know</a></strong></li>
  <li><strong><a href="/blog/gutter-vacuum-cleaning-birmingham" style="${link}">Gutter Vacuum Cleaning Birmingham</a></strong></li>
  <li><strong><a href="/blog/downpipe-unblocking-birmingham" style="${link}">Downpipe Unblocking Birmingham | Fast Response</a></strong></li>
  <li><strong><a href="/blog/birmingham-seasonal-gutter-guide/" style="${link}">The Complete Guide to Gutter Maintenance for Birmingham &amp; West Midlands Homeowners</a></strong></li>
</ul>
`,
};
