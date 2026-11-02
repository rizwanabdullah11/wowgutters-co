import type { BlogPost } from './blogTypes';

const IMG_HERO      = '/blog-images/damp-external-wall-gutters/water-damage-blocked-gutters-hero.png';
const IMG_OVERFLOW  = '/blog-images/damp-external-wall-gutters/overflow-wall-damage.png';
const IMG_INTERIOR  = '/blog-images/damp-external-wall-gutters/penetrating-damp-interior.png';
const IMG_DOWNPIPE  = '/blog-images/damp-external-wall-gutters/downpipe-water-damage.png';
const IMG_FASCIA    = '/blog-images/damp-external-wall-gutters/water-damage-fascia-rot.png';

const link = 'color: #19C58B; font-weight: 700; text-decoration: none;';

const ctaTop = `
<blockquote style="border-left: 4px solid #19C58B; padding: 16px 20px; margin: 24px 0; background: #f0fdf4; border-radius: 0 8px 8px 0; color: #1e293b;">
  <strong>📞 WOW Gutters Ltd:</strong>
  <a href="tel:07421433910" style="color: #0f172a; font-weight: 700; text-decoration: none;">07421 433910</a> | 
  📋 <a href="/quote/" style="${link}">Request a quote</a> | 
  🌐 <a href="/contact/" style="${link}">Contact us</a><br/>
  Ground-based gutter vacuum cleaning · Up to 4 storeys without ladders · Wireless camera verification of joints &amp; outlets
</blockquote>`;

const ctaBox = `
<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border: 2px solid #19C58B; border-radius: 16px; padding: 28px 24px; margin: 40px 0; box-shadow: 0 4px 20px rgba(25, 197, 139, 0.12);">
  <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin: 0 0 12px 0; line-height: 1.3; text-transform: uppercase;">RULE THE GUTTERS IN OR OUT</h3>
  <p style="color: #334155; font-size: 0.98rem; line-height: 1.75; margin: 0 0 20px 0;">WOW Gutters Ltd provides fully insured, ground-based gutter cleaning and camera inspection across Birmingham and the West Midlands, with before and after photographs on every job. No ladders for standard gutter work up to four storeys.</p>
  <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px 20px;">
    <div style="min-width: 240px; flex: 1 1 280px;">
      <span style="display: block; font-weight: 800; color: #0f172a; font-size: 1rem;">Noticed dark damp streaks on your brickwork?</span>
      <span style="display: block; color: #64748b; font-size: 0.85rem; margin-top: 2px;">Same-week camera inspection &amp; clearance across the West Midlands</span>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px; width: 100%; max-width: 380px;">
      <a href="/quote/" style="flex: 1 1 160px; min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #19C58B; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 20px; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 8px rgba(25, 197, 139, 0.3);">
        <span>&#9658;</span> Get Free Quote
      </a>
      <a href="tel:07421433910" style="flex: 1 1 140px; min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #0f172a; color: #ffffff; font-size: 0.95rem; font-weight: 700; padding: 12px 20px; border-radius: 8px; text-decoration: none;">
        <span>📞</span> 07421 433910
      </a>
    </div>
  </div>
</div>`;

export const dampExternalWallGuttersBlogPost: BlogPost = {
  id: 'damp-external-wall-gutters',
  seoTitle: 'Damp Patches on an Outside Wall? How to Tell If the Gutters Are the Cause',
  title: 'Damp Patches on an Outside Wall? How to Tell If the Gutters Are the Cause',
  excerpt:
    'Damp patches on an external wall can come from overflowing gutters or from something else. How to read the pattern, what to check from the ground and who to call. Call 07421 433910.',
  image: IMG_HERO,
  heroVideo: '/gutter-cleaning-video.mp4',
  date: '2026-10-30',
  views: '0',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'West Midlands Gutter Cleaning & Roofline Specialists',
  category: 'Troubleshooting',
  featured: true,
  lastUpdated: '2026-10-30',
  quickAnswer:
    'A damp patch on an outside wall is often caused by an overflowing gutter, leaking joint, or choked downpipe outlet directly above the stain. If the wet mark follows a vertical line from the roofline and dries out between downpours, gutters are the primary suspect. Clearing gutters and testing outlets first removes the active water source before diagnosing underlying masonry or render.',
  shortSummary: 'Damp Outside Wall Gutters Guide',
  breadcrumbName: 'Damp Outside Wall Gutters',
  content: `
<p>A dark, damp patch on an outside wall has several possible causes, and gutters are only one of them. The useful question is whether the pattern points at the gutters. This guide covers how to read the pattern across <a href="/gutter-cleaning-birmingham/" style="${link}">Birmingham</a> and the wider <a href="/areas-we-cover/" style="${link}">West Midlands</a>, what to check safely from the ground, and what to do first. We cannot diagnose internal masonry causes, and a gutter visit cannot either. What it can do is establish whether your <a href="/gutter-cleaning/" style="${link}">gutter cleaning</a> needs are feeding the problem.</p>

${ctaTop}

<nav style="background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px 28px; margin: 32px 0;">
  <h2 style="font-size: 1.2rem; font-weight: 800; color: #0f172a; margin: 0 0 16px 0;">Table of Contents</h2>
  <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.8; font-size: 0.95rem;">
    <li><a href="#gutters-possible-cause" style="${link}">Gutters Are One Possible Cause</a></li>
    <li><a href="#patterns-point-gutters" style="${link}">Patterns That Point at the Gutters</a></li>
    <li><a href="#patterns-point-elsewhere" style="${link}">Patterns That Point Elsewhere</a></li>
    <li><a href="#how-water-reaches-wall" style="${link}">How Gutter Water Reaches the Wall</a></li>
    <li><a href="#check-from-ground" style="${link}">What to Check From the Ground</a></li>
    <li><a href="#right-order-action" style="${link}">The Right Order of Action</a></li>
    <li><a href="#what-gutter-visit-covers" style="${link}">What a Gutter Visit Covers</a></li>
    <li><a href="#what-it-cant-do" style="${link}">What It Can’t Do</a></li>
    <li><a href="#who-to-call" style="${link}">Who to Call for What</a></li>
    <li><a href="#brickwork-mortar-algae" style="${link}">Brickwork, Mortar and Algae</a></li>
    <li><a href="#property-types" style="${link}">Property Types</a></li>
    <li><a href="#trees-moss-wind" style="${link}">Trees, Moss and Wind</a></li>
    <li><a href="#seasons-timing" style="${link}">Seasons and Timing</a></li>
    <li><a href="#records-insurance-selling" style="${link}">Records, Insurance and Selling</a></li>
    <li><a href="#landlords-tenants" style="${link}">Landlords and Tenants</a></li>
    <li><a href="#compare-contractors" style="${link}">How to Compare Contractors</a></li>
    <li><a href="#verify-wow-gutters" style="${link}">Where to Find and Verify WOW Gutters Ltd</a></li>
    <li><a href="#areas-we-cover" style="${link}">Areas We Cover</a></li>
    <li><a href="#faq" style="${link}">FAQ: Damp External Walls &amp; Gutters</a></li>
    <li><a href="#rule-gutters-in-out" style="${link}">Rule the Gutters In or Out</a></li>
    <li><a href="#related-articles" style="${link}">Related Articles</a></li>
  </ol>
</nav>

<h2 id="gutters-possible-cause" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Gutters Are One Possible Cause</h2>
<p>External wall dampness can originate from numerous building defects: failed pointing or defective render, rising ground damp, a leaking plumbing waste pipe, cracked masonry, a bridged damp-proof course (DPC), condensation, high external ground levels or a defective roof covering. Gutters are a primary suspect on the external façade, but they are not the sole culprit.</p>
<p>Treat this guide as a practical method to rule roofline drainage in or out, rather than a final internal structural diagnosis. For the wider picture of how water penetrating from outside impacts internal rooms, see <a href="/blog/can-blocked-gutters-cause-damp/" style="${link}">Can Blocked Gutters Cause Damp?</a> and <a href="/blog/is-your-west-midlands-home-storing-water-damage/" style="${link}">Is Your West Midlands Home Quietly Storing Water Damage Right Now?</a>.</p>

<h2 id="patterns-point-gutters" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Patterns That Point at the Gutters</h2>
<p>Gutter-related moisture patches share distinct visual and behavioral characteristics:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Vertical streaks directly below roofline features:</strong> A dark patch positioned immediately beneath a gutter union joint, corner bend, running outlet or sagging channel section.</li>
  <li><strong>Downpipe alignment staining:</strong> Dark staining following the vertical drop of a downpipe, especially behind offset swan-neck bends or at the bottom shoe.</li>
  <li><strong>Rain-correlated dampness:</strong> Wetness that appears prominently during or shortly after heavy rain and gradually dries back during prolonged dry spells.</li>
  <li><strong>Localized green biological growth:</strong> Algae streaks or moss blooms concentrated along a vertical line on external brickwork or render.</li>
  <li><strong>Fascia paint failure above the stain:</strong> Flaking paint, discoloured UPVC joints or rotting timber boards directly above the damp brickwork.</li>
  <li><strong>Basement or plinth puddling:</strong> Standing water around the downpipe gully base accompanied by dampness creeping up the lower brick courses.</li>
</ul>
<p><a href="/blog/professional-gutter-cleaning-extends-roofline-life/" style="${link}">How Professional Gutter Cleaning Extends the Life of Your Roofline</a> explains the mechanical progression of water damage, while <a href="/blog/gutter-water-damage-guide/" style="${link}">Water Damage From Gutters: Birmingham Homeowner Guide</a> walks through the stages of moisture penetration.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_OVERFLOW}" alt="External brick wall showing vertical water staining from overflowing eaves gutters" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Uncontrolled gutter spillover creates distinct vertical tide marks on exterior masonry that worsen during wet weather.</figcaption>
</figure>

<h2 id="patterns-point-elsewhere" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Patterns That Point Elsewhere</h2>
<p>Certain damp presentations are less typical of rainwater gutter overflow and usually warrant an independent damp specialist or RICS building surveyor:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>A uniform horizontal band along the base of the wall:</strong> Consistent dampness extending 300mm to 1m above ground level, which typically suggests rising damp, bridged damp-proof courses or high flowerbeds.</li>
  <li><strong>Patches that remain persistently wet in dry summer weather:</strong> Indicative of leaking internal pressurized mains pipes, buried central heating lines or leaking internal waste connections.</li>
  <li><strong>Damp matching internal bathroom or kitchen pipework:</strong> Water spots aligning with internal soil stacks, unvented cylinders or shower trays.</li>
  <li><strong>White powdery efflorescence deposits:</strong> Heavy hygroscopic salt crystallization erupting through plaster, often associated with ground water transfer.</li>
  <li><strong>Damp appearing on internal chimney breasts or central party walls:</strong> Unrelated to external roof eaves.</li>
</ul>
<p>While an overflowing gutter can occasionally exacerbate ground dampness by pooling water at the foundation footings, these patterns usually indicate a broader building envelope defect requiring a certified surveyor.</p>

<h2 id="how-water-reaches-wall" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">How Gutter Water Reaches the Wall</h2>
<p>Rainwater escaping from neglected gutters typically reaches external brickwork via four common pathways:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Spillover over the front lip:</strong> When the trough fills with compact silt, water sheets over the external lip, where wind drives it back against the masonry façade.</li>
  <li><strong>Water backing up behind the channel:</strong> Blocked channels force stormwater over the rear rim, soaking the fascia board, rotting timber rafter feet and running down the cavity or solid wall.</li>
  <li><strong>A leaking gutter joint:</strong> Perished rubber seals or failed union clips allow persistent dripping in one concentrated spot, eroding mortar joints over time. See <a href="/blog/dripping-gutter-joints/" style="${link}">Dripping Gutter Joints in Birmingham: Why They Leak and What Fixes Them</a> and <a href="/blog/leaking-gutter-repair/" style="${link}">Leaking Gutter Repair Birmingham: Fix or Replace?</a>.</li>
  <li><strong>A choked or cracked downpipe:</strong> Choked swan-neck bends force pressurized water through pipe joints or fracture cast iron brackets. <a href="/blog/downpipe-unblocking-birmingham/" style="${link}">Downpipe Unblocking Birmingham | Fast Response</a> and <a href="/blog/downpipes-blocked-again-birmingham-fix-homeowners-miss/" style="${link}">Downpipes Blocked Again? The Birmingham Fix Most Homeowners Miss</a> detail why bends clog first.</li>
</ul>
<p>Overflow is commonly driven by compacted organic silt, bracket sag or choked outlets. <a href="/blog/overflowing-gutters-fix/" style="${link}">Overflowing Gutters in Birmingham? Causes &amp; Quick Fixes</a> explains how to interpret spillover locations, while <a href="/blog/hidden-gutter-damage-easier-spot-summer/" style="${link}">Hidden Gutter Damage Is Easier to Spot in Summer</a> shows why deep silt remains invisible from ground level.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_INTERIOR}" alt="Internal plaster showing penetrating damp and bubbling paint caused by external rainwater ingress" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Persistent external wall saturation eventually bridges solid brickwork or wall cavities, damaging interior plaster and decor.</figcaption>
</figure>

<h2 id="check-from-ground" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What to Check From the Ground</h2>
<p>Spend ten minutes on a dry day, and inspect again during rainfall safely from ground level:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Trace the stain upward:</strong> Follow the line of the damp patch to the roofline. Is there a joint, running outlet, hopper head or sagging bracket directly above it?</li>
  <li><strong>Inspect the channel fall:</strong> Look along the eaves run to see if any section visibly dips lower than neighbouring brackets.</li>
  <li><strong>Check for vegetation:</strong> Look for weeds, moss cushions or grass blades protruding over the rim.</li>
  <li><strong>Listen for downpipe drainage:</strong> Hollow gurgling or rattling sounds during light drizzle indicate trapped air and downstream blockages.</li>
  <li><strong>Inspect the downpipe base:</strong> Look for persistent puddle pooling, overflowing gully grates or damp brickwork around the bottom shoe.</li>
  <li><strong>Observe during rain:</strong> If safe to do so from the garden, check if water is cascading over the gutter lip or weeping from rear seals.</li>
  <li><strong>Take dated photographic records:</strong> Document the damp stain during both wet and dry periods to track its behaviour.</li>
</ul>
<p>Review the <a href="/blog/gutters-blocked-checklist/" style="${link}">blocked gutters checklist</a>, <a href="/blog/clogged-gutters-signs/" style="${link}">Clogged Gutters Birmingham: Signs You’re Missing</a>, <a href="/blog/what-your-gutters-are-trying-to-tell-you-this-summer/" style="${link}">What Your Gutters Are Trying to Tell You This Summer</a> and <a href="/blog/downpipe-blocked-signs-birmingham-homes/" style="${link}">How Do You Know If Your Downpipe Is Blocked? Signs Birmingham Homes Show</a>. Please do not climb ladders to inspect. Working at height carries high accident risks, as detailed in <a href="/blog/can-you-clean-your-own-gutters-safely-birmingham-ladder-safety/" style="${link}">Can You Clean Your Own Gutters Safely? A Birmingham Ladder Safety Reality Check</a> and the HSE’s <a href="https://www.hse.gov.uk/work-at-height/" target="_blank" rel="noopener noreferrer" style="${link}">guidance on working at height</a>. <a href="/blog/clean-gutters-two-storey-house-birmingham-safely/" style="${link}">How Do You Clean Gutters on a Two-Storey House in Birmingham Safely?</a> covers safe procedures.</p>
<p>If water is actively entering living spaces or gutter brackets have pulled loose from timber fascias, treat it urgently via <a href="/blog/emergency-gutter-cleaning/" style="${link}">Emergency Gutter Cleaning Birmingham After Heavy Rain</a>.</p>

<h2 id="right-order-action" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">The Right Order of Action</h2>
<p>When dealing with damp masonry, sequential order matters far more than rushing into decorative fixes:</p>
<ol style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Stop the water source:</strong> Have the gutters, outlets and downpipes vacuum-cleared and camera-tested first. Any plaster repair or repainting will simply fail if the next heavy shower pours water down the wall again.</li>
  <li><strong>Photograph everything:</strong> Take dated photos of the external wall, the gutter condition and the camera inspection feed.</li>
  <li><strong>Diagnose root causes:</strong> If moisture persists after roofline drainage is cleared, engage a qualified surveyor or damp specialist to investigate masonry cavities and internal leaks.</li>
  <li><strong>Execute structural repairs:</strong> Replace deteriorated gutter unions, warped fascia boards, broken brackets or cracked mortar joints with the appropriate trades.</li>
  <li><strong>Allow the wall to dry out:</strong> Masonry walls hold substantial trapped water and may require several weeks or months of dry weather to dry completely.</li>
  <li><strong>Redecorate last:</strong> Emulsion paint or external masonry coatings are cosmetic finishes; applying them before the wall is dry traps moisture and blisters paintwork.</li>
</ol>
<p>Clearing gutters first establishes a reliable baseline: if the wall patch dries out consistently after clearance, the roofline was clearly the driver. If it remains wet, you have definitively ruled gutters out without wasting money on speculative internal treatments.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_DOWNPIPE}" alt="Blocked downpipe leaking at joint seams and saturating adjacent external brickwork" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Downpipe joint failures saturate external brickwork continuously, leading to spalling frost damage and internal moisture stains.</figcaption>
</figure>

<h2 id="what-gutter-visit-covers" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What a Gutter Visit Covers</h2>
<p>A professional gutter maintenance appointment includes seven systematic checks:</p>
<ol style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Ground-level walk-round:</strong> Staining tracks, joint alignment, vegetation growth and elevation access.</li>
  <li><strong>Extraction to the channel floor:</strong> Powerful suction lifts wet leaves, decomposing mud, roof grit and root systems.</li>
  <li><strong>Wireless camera inspection:</strong> Live video inspects rubber union seals, bracket stability and channel fall.</li>
  <li><strong>Downpipe flow test:</strong> Water flow testing at every reached downpipe outlet confirms free downward drainage.</li>
  <li><strong>Fascia and soffit visual observation:</strong> Identify timber softening, peeling paint or dislodged bracket fixings.</li>
  <li><strong>Roof edge review:</strong> Note visible ridge moss colonies, cracked verge mortar or slipped tiles.</li>
  <li><strong>Photographic audit summary:</strong> High-resolution before-and-after images of every run reached for your records.</li>
</ol>
<p>A live camera feed can reveal a weeping joint positioned directly above your damp patch, providing clear evidence for your builder or surveyor. Our ground-based methodology is detailed in <a href="/blog/how-clean-gutters-without-ladder-birmingham-method/" style="${link}">How Do You Clean Gutters Without a Ladder? The Method Birmingham Pros Use</a> and <a href="/blog/gutter-vacuum-cleaning-birmingham/" style="${link}">Gutter Vacuum Cleaning Birmingham</a>, and the complete visit is described in <a href="/blog/what-happens-during-professional-gutter-clean-birmingham-walkthrough/" style="${link}">What Happens During a Professional Gutter Clean? A Birmingham Homeowner’s Walkthrough</a>. Severely choked runs fall under <a href="/gutter-clearing/" style="${link}">gutter clearing</a>, outlets are serviced via <a href="/downpipe-unblocking/" style="${link}">downpipe unblocking</a>, and exterior plastics are washed under <a href="/fascia-soffit-cleaning/" style="${link}">fascia and soffit cleaning</a>. See also <a href="/blog/roofline-cleaning-birmingham/" style="${link}">Roofline Cleaning Birmingham: Gutters, Fascias &amp; Soffits</a> and <a href="/blog/soffit-damage-west-midlands-homes-early-signs/" style="${link}">Soffit Damage in West Midlands Homes: Early Signs You Shouldn’t Ignore</a>, with real case studies in our <a href="/gallery/" style="${link}">project gallery</a>.</p>

<h2 id="what-it-cant-do" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What It Can’t Do</h2>
<p>A gutter cleaning appointment records what is visible and clears channels. It does not replace building trades. Specifically, a gutter visit cannot:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li>Diagnose the scientific cause of internal masonry dampness.</li>
  <li>Repair brickwork, crumbling pointing, cracked render or internal plaster.</li>
  <li>Repair rotted timber fascias or structural roof trusses.</li>
  <li>Clear below-ground subterranean drains or collapsed soakaways.</li>
  <li>Assess structural foundation subsidence or verify damp-proof course continuity.</li>
</ul>
<p>Specialist damp surveyors, general builders, carpenters, drainage engineers or structural engineers handle those respective building requirements. A contractor who transparently states operational limitations is far more reliable than one claiming a gutter clean will cure all damp issues.</p>

<figure style="margin: 32px 0;">
  <img src="${IMG_FASCIA}" alt="Rotting timber fascia board damaged by repeated gutter overflow behind the channel" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Water overflowing behind gutters rots timber fascia boards and travels down the cavity, creating stubborn damp patches.</figcaption>
</figure>

<h2 id="who-to-call" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Who to Call for What</h2>
<div style="overflow-x: auto; margin: 32px 0;">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; color: #334155;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 14px 18px; font-weight: 800; color: #0f172a;">Identified Problem</th>
        <th style="padding: 14px 18px; font-weight: 800; color: #0f172a;">Appropriate Professional</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 18px; font-weight: 600;">Blocked gutter, silt bed, moss fall, choked downpipe</td>
        <td style="padding: 12px 18px;">Gutter cleaning specialist (WOW Gutters Ltd)</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
        <td style="padding: 12px 18px; font-weight: 600;">Weeping joint, cracked union clip, loose bracket</td>
        <td style="padding: 12px 18px;">Gutter repair specialist or roofer</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 18px; font-weight: 600;">Soft, spongy or rotted timber fascia or soffit</td>
        <td style="padding: 12px 18px;">Carpenter or roofline joiner</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
        <td style="padding: 12px 18px; font-weight: 600;">Persistent internal wall dampness or rising damp</td>
        <td style="padding: 12px 18px;">Certified damp specialist or RICS building surveyor</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 18px; font-weight: 600;">Crumbling mortar pointing or cracked external render</td>
        <td style="padding: 12px 18px;">Builder or pointing specialist</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
        <td style="padding: 12px 18px; font-weight: 600;">Blocked underground storm drain, backed-up gully</td>
        <td style="padding: 12px 18px;">Drainage specialist</td>
      </tr>
      <tr>
        <td style="padding: 12px 18px; font-weight: 600;">Structural cracks, masonry movement, foundation shifts</td>
        <td style="padding: 12px 18px;">Chartered structural engineer</td>
      </tr>
    </tbody>
  </table>
</div>
<p>Our core capability is high-reach vacuum clearance and live camera inspection. For localized gutter repair requirements, <a href="/contact/" style="${link}">contact us</a> to discuss your property layout.</p>

<h2 id="brickwork-mortar-algae" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Brickwork, Mortar and Algae</h2>
<p>Repeated water saturation darkens brick faces, fosters aggressive green algae growth and, over repeated winter freeze-thaw cycles, causes mortar joints to crumble and brick faces to spall. A green mossy streak running down from a gutter union is a common sight across the West Midlands. Power-washing the stain without fixing the leaking gutter above achieves nothing; the moisture will return with the next rainfall.</p>
<p>Furthermore, much of the West Midlands sits on clay subsoils where prolonged downpipe saturation can soften ground beneath foundation pads. This gradual process is explored in <a href="/blog/birmingham-clay-soil-foundation-damage-blocked-gutters/" style="${link}">How Birmingham’s Clay Soil Affects Foundation Damage From Blocked Gutters</a>. Structural damage progression from blocked downpipes is detailed in <a href="/blog/hidden-damage-blocked-downpipe-solihull/" style="${link}">The Hidden Damage Behind Every Blocked Downpipe in Solihull</a>.</p>

<h2 id="property-types" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Property Types</h2>
<p>Different property styles interact with external water in unique ways:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Victorian and Edwardian properties:</strong> Solid brick walls without cavity insulation allow moisture to penetrate directly to internal lath-and-plaster. Heavy cast iron gutters require non-destructive vacuum handling (<a href="/blog/victorian-homes-birmingham-different-gutter-cleaning-approach/" style="${link}">Why Victorian Homes in Birmingham Need a Different Gutter Cleaning Approach</a>).</li>
  <li><strong>Semi-detached and terraced rows:</strong> Continuous eaves channels and shared party-wall downpipes mean a neighbour’s choked gutter can saturate your wall. See <a href="/blog/gutter-cleaning-semi-detached-shared-boundary-birmingham/" style="${link}">Gutter Cleaning for Semi-Detached Homes: The Shared Boundary Issue in Birmingham</a> and <a href="/blog/terraced-house-gutters/" style="${link}">Terraced House Gutters in Birmingham</a>.</li>
  <li><strong>Bungalows:</strong> Lower wall heights sit beneath overhanging tree canopies, concentrating debris (<a href="/blog/bungalow-gutter-cleaning/" style="${link}">Gutter Cleaning for Bungalows Birmingham | Safe &amp; Fast</a>).</li>
  <li><strong>Extensions and flat roofs:</strong> Concealed parapets and flat-roof junctions present high pooling risks (<a href="/blog/flat-roof-gutters-birmingham-maintenance-guide/" style="${link}">Flat Roof Gutters in Birmingham: The Maintenance Problem Most Guides Ignore</a> and our <a href="/conservatory-roof-cleaning/" style="${link}">conservatory roof cleaning</a> service).</li>
  <li><strong>Taller multi-storey buildings:</strong> Water falling from three or four storeys drives deeper into masonry (<a href="/blog/high-level-gutter-cleaning/" style="${link}">High-Level Gutter Cleaning Birmingham | Fully Insured</a>).</li>
  <li><strong>Commercial facilities:</strong> Long eaves runs and box gutters handle large water volumes (<a href="/blog/offices-schools-gutter-cleaning/" style="${link}">Gutter Cleaning for Offices and Schools in Birmingham</a>, <a href="/blog/commercial-warehouse-gutter-clearing-birmingham/" style="${link}">Commercial Warehouse Gutter Clearing Birmingham</a>, <a href="/blog/warehouse-gutter-clearing-box-gutter-case-study/" style="${link}">Warehouse Gutter Clearing: When Grass Is Growing in Your Box Gutter</a> and our <a href="/commercial-gutter-cleaning/" style="${link}">commercial gutter cleaning</a> service).</li>
</ul>

<h2 id="trees-moss-wind" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Trees, Moss and Wind</h2>
<p>Surrounding tree cover determines how quickly channels fill. <a href="/blog/tree-cover-gutter-cleaning-schedule-birmingham/" style="${link}">How Tree Cover Changes Your Gutter Cleaning Schedule in Birmingham</a> and <a href="/blog/autumn-leaf-fall-tree-type-birmingham-gutters-hardest-hit/" style="${link}">Autumn Leaf Fall by Tree Type: Which Birmingham House Gutters Get Hit Hardest</a> examine species differences. Decomposing foliage compacts into heavy silt beds (<a href="/blog/leaves-in-gutters/" style="${link}">Leaves in Gutters? Birmingham Autumn Clearance Service</a>), promoting root growth (<a href="/blog/gutters-full-of-weeds/" style="${link}">Gutters Full of Weeds or Seeds? Birmingham Clearing Guide</a>).</p>
<p>Prevailing winds drive leaves toward specific elevations (<a href="/blog/wind-direction-debris-buildup-birmingham-gutters/" style="${link}">How Wind Direction Affects Debris Build-Up in Birmingham Gutters</a>), while roof moss continually drops into gutters all year (<a href="/blog/moss-on-your-roof-what-its-doing-to-birmingham-gutters/" style="${link}">Moss on Your Roof? What It’s Doing to Your Birmingham Gutters Right Now</a> and <a href="/blog/roof-moss-removal-birmingham/" style="${link}">Roof Moss in Birmingham: Why It Grows, What It Does and How to Clear It</a>). Treating the source via <a href="/roof-cleaning/" style="${link}">roof cleaning</a> and <a href="/moss-removal/" style="${link}">moss removal</a> stops ongoing channel accumulation. Why gutters refill is detailed in <a href="/blog/stop-gutters-blocking/" style="${link}">How Do You Stop Gutters From Blocking Again? A West Midlands Fix Guide</a>.</p>

<h2 id="seasons-timing" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Seasons and Timing</h2>
<p>External damp patches show most prominently in autumn and winter when rainfall is persistent and low temperatures prevent masonry drying. <a href="/blog/why-autumn-most-dangerous-season-birmingham-gutters/" style="${link}">Why Autumn Is the Most Dangerous Season for Birmingham Gutters</a> details this cycle, and seasonal planning is addressed in <a href="/blog/get-gutters-ready-before-birmingham-autumn-leaves/" style="${link}">Get Your Gutters Ready Before Birmingham’s Autumn Leaves Arrive</a> and <a href="/blog/gutter-cleaning-before-winter/" style="${link}">Gutter Cleaning Before Winter Birmingham | Book Now</a>. Late-shedding trees like oak make advance booking sensible (<a href="/blog/beat-autumn-rush-book-summer-gutter-cleaning-early/" style="${link}">Beat the Autumn Rush: Book Your Summer Gutter Cleaning Early</a>).</p>
<p>Summer offers ideal dry conditions to inspect for exterior staining. See <a href="/blog/dry-summer-weather-gutter-inspections-birmingham/" style="${link}">How Dry Summer Weather Makes Gutter Inspections Easier</a>, <a href="/blog/birmingham-gutter-health-check-summer/" style="${link}">Why Every Birmingham Home Needs a Gutter Health Check This Summer</a> and <a href="/blog/preparing-gutters-summer-seasons-ahead/" style="${link}">Preparing Your Gutters During Summer for the Seasons Ahead</a>. Summer downpours also present sudden risks (<a href="/blog/summer-storms-blocked-gutters-west-midlands-dry-season-risk/" style="${link}">Summer Storms and Blocked Gutters</a>), and late summer bridges the seasonal gap (<a href="/blog/late-summer-gutter-maintenance-prepare-for-autumn/" style="${link}">Late Summer Gutter Maintenance: Prepare Your Home for Autumn</a>).</p>
<p>Track your yearly maintenance using our <a href="/blog/birmingham-gutter-maintenance-calendar-seasonal-guide/" style="${link}">Birmingham Gutter Maintenance Calendar</a>, <a href="/blog/getting-ready-autumn-west-midlands-pre-season-timeline/" style="${link}">pre-season preparation timeline</a> and <a href="/blog/gutter-cleaning-rainy-season-west-midlands-prep-list/" style="${link}">Gutter Cleaning in Rainy Season: A West Midlands Homeowner’s Prep List</a>.</p>

<h2 id="records-insurance-selling" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Records, Insurance and Selling</h2>
<p>Dated photos of the wall stain and before-and-after camera inspection photos provide crucial evidence if insurance claims arise regarding water ingress. <a href="/blog/gutter-maintenance-home-insurance-birmingham/" style="${link}">Gutter Maintenance and Home Insurance: What Birmingham Homeowners Need to Know</a> covers standard policy maintenance requirements. Photographic evidence also reassures buyers and mortgage surveyors during property sales (<a href="/blog/gutters-before-selling/" style="${link}">Gutters Before the For Sale Sign: A Birmingham Seller’s Checklist</a> and <a href="/blog/selling-birmingham-home-surveyors-check-gutters-first/" style="${link}">Selling Your Birmingham Home? Why Surveyors Always Check the Gutters First</a>).</p>

<h2 id="landlords-tenants" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Landlords and Tenants</h2>
<p>Tenants rarely monitor external eaves troughs, meaning water ingress can cause internal mould before it is reported. <a href="/blog/landlord-gutter-cleaning/" style="${link}">Gutter Cleaning for Landlords &amp; Letting Agents Birmingham</a> addresses tenant reporting gaps, while <a href="/blog/block-management-gutter-maintenance-checklist-west-midlands/" style="${link}">Block Management Gutter Maintenance: A West Midlands Property Manager’s Checklist</a> covers managed estates. The official GOV.UK guidance on <a href="https://www.gov.uk/private-renting/repairs" target="_blank" rel="noopener noreferrer" style="${link}">repairs in private renting</a> sets out statutory exterior maintenance obligations.</p>
<p>For elderly residents, ground-based camera cleaning allows homeowners to watch the inspection safely from inside (<a href="/blog/elderly-gutter-cleaning/" style="${link}">Gutter Cleaning for Elderly Homeowners Birmingham</a>). Understanding why gutter cleaning is consistently missed is discussed in <a href="/blog/one-home-maintenance-task-birmingham-homeowners-miss-summer/" style="${link}">The One Home Maintenance Task Birmingham Homeowners Consistently Miss Each Summer</a> and <a href="/blog/home-maintenance-job-birmingham-homeowners-forget-summer/" style="${link}">The Home Maintenance Job Most Birmingham Homeowners Forget Every Summer</a>, while <a href="/blog/how-clean-gutters-protect-your-home-year-round/" style="${link}">How Clean Gutters Help Protect Your Home Throughout the Year</a> details what stays protected. For the comprehensive reference, consult <a href="/blog/complete-guide-gutter-maintenance-birmingham-west-midlands/" style="${link}">The Complete Guide to Gutter Maintenance for Birmingham &amp; West Midlands Homeowners</a>.</p>

<h2 id="compare-contractors" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">How to Compare Contractors</h2>
<p>When selecting a gutter cleaner to evaluate potential leak points, ask these essential questions:</p>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong>Do you extract down to the channel floor and inspect the structure?</strong> See <a href="/blog/one-question-before-hiring-gutter-cleaner-west-midlands/" style="${link}">The One Question to Ask Before Hiring Any Gutter Cleaner in the West Midlands</a>.</li>
  <li><strong>Do you work safely from the ground?</strong> Eliminating ladders protects your property and eliminates fall liabilities.</li>
  <li><strong>Are you fully insured with commercial and domestic public liability?</strong> Always ask to view the policy certificate.</li>
  <li><strong>Do I receive dated before-and-after photographs, including of any joint above the damp stain?</strong></li>
  <li><strong>Will you clearly explain what lies outside your diagnostic scope?</strong></li>
</ul>
<p>Be wary of any tradesperson promising to cure wall dampness solely through gutter cleaning, or offering unsolicited doorstep treatments. Be cautious of unusually quick visits (<a href="/blog/gutter-clean-duration/" style="${link}">How Long Does a Professional Gutter Clean Take in Birmingham?</a>). Both <a href="https://www.ageuk.org.uk/" target="_blank" rel="noopener noreferrer" style="${link}">Age UK</a> and <a href="https://www.citizensadvice.org.uk/" target="_blank" rel="noopener noreferrer" style="${link}">Citizens Advice</a> provide guidance on avoiding doorstep pressure. Read our verified <a href="/reviews/" style="${link}">reviews</a> and learn more <a href="/about/" style="${link}">about us</a>.</p>

${ctaBox}

<h2 id="verify-wow-gutters" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Where to Find and Verify WOW Gutters Ltd</h2>
<p>Independent third-party directories confirm our business registration, insurance and regional presence:</p>
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
<p>You can also check our <a href="/faq/" style="${link}">FAQ</a> for common operational questions.</p>

<h2 id="areas-we-cover" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Areas We Cover</h2>
<p>WOW Gutters Ltd provides gutter cleaning and camera inspection across <a href="/gutter-cleaning-birmingham/" style="${link}">Birmingham</a>, <a href="/gutter-cleaning-solihull/" style="${link}">Solihull</a>, <a href="/gutter-cleaning-sutton-coldfield/" style="${link}">Sutton Coldfield</a>, <a href="/gutter-cleaning-wolverhampton/" style="${link}">Wolverhampton</a>, <a href="/gutter-cleaning-walsall/" style="${link}">Walsall</a>, <a href="/gutter-cleaning-dudley/" style="${link}">Dudley</a>, <a href="/gutter-cleaning-coventry/" style="${link}">Coventry</a>, <a href="/gutter-cleaning-redditch/" style="${link}">Redditch</a>, <a href="/gutter-cleaning-worcester/" style="${link}">Worcester</a>, <a href="/gutter-cleaning-bromsgrove/" style="${link}">Bromsgrove</a>, <a href="/gutter-cleaning-west-bromwich/" style="${link}">West Bromwich</a> and <a href="/areas-we-cover/" style="${link}">all West Midlands areas</a>.</p>
<p><a href="/contact/" style="${link}">Contact us</a> or <a href="/quote/" style="${link}">request a quote</a>.</p>
<p>📞 <a href="tel:07421433910" style="color: #0f172a; font-weight: 700; text-decoration: none;">07421 433910</a> | 📧 <a href="mailto:support@wowgutters.co.uk" style="${link}">support@wowgutters.co.uk</a> | 🌐 <a href="https://wowgutters.co.uk" style="${link}">https://wowgutters.co.uk</a></p>

<h2 id="faq" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">FAQ: Damp External Walls &amp; Gutters</h2>

<div style="margin-top: 24px;">

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Can gutters cause damp patches on an outside wall?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Yes. Gutter overflow, leaking joint seals, or blocked downpipe outlets can saturate brickwork, though they are not the only potential cause. See <a href="/blog/can-blocked-gutters-cause-damp/" style="${link}">Can Blocked Gutters Cause Damp?</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>How do I tell if the damp is from the gutters?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Look for a vertical damp streak directly below a gutter joint, outlet or downpipe, wetness that appears after rain, and returning puddles at the downpipe shoe. A damp specialist can provide formal confirmation.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Will cleaning the gutters cure the damp?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Cleaning stops new rainwater spilling down the wall. It does not repair saturated plaster, damaged mortar or underlying cavity issues, which require separate drying and repair.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What should I do first?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Clear the gutters and downpipes first to stop active water flow. Photograph the patch, then have the root cause diagnosed before repainting. See <a href="/blog/gutter-water-damage-guide/" style="${link}">Water Damage From Gutters</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Is it safe to check the gutters myself?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Visual checks from the garden are completely safe. Ladder work carries severe fall hazards. See <a href="/blog/can-you-clean-your-own-gutters-safely-birmingham-ladder-safety/" style="${link}">Can You Clean Your Own Gutters Safely?</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Do you diagnose or treat damp?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">No. We clean and inspect gutters, downpipes and rooflines, recording what camera feeds reveal. A certified damp specialist or surveyor diagnoses the masonry.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What areas do you cover?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;"><a href="/gutter-cleaning-birmingham/" style="${link}">Birmingham</a>, <a href="/gutter-cleaning-solihull/" style="${link}">Solihull</a>, <a href="/gutter-cleaning-sutton-coldfield/" style="${link}">Sutton Coldfield</a>, <a href="/gutter-cleaning-wolverhampton/" style="${link}">Wolverhampton</a>, <a href="/gutter-cleaning-walsall/" style="${link}">Walsall</a>, <a href="/gutter-cleaning-dudley/" style="${link}">Dudley</a>, <a href="/gutter-cleaning-coventry/" style="${link}">Coventry</a>, <a href="/gutter-cleaning-redditch/" style="${link}">Redditch</a>, <a href="/gutter-cleaning-worcester/" style="${link}">Worcester</a>, <a href="/gutter-cleaning-bromsgrove/" style="${link}">Bromsgrove</a> and <a href="/areas-we-cover/" style="${link}">all West Midlands areas</a>.</p>
    </div>
  </details>

</div>

<h2 id="rule-gutters-in-out" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Rule the Gutters In or Out</h2>
<p>WOW Gutters Ltd provides fully insured, ground-based gutter cleaning and camera inspection across Birmingham and the West Midlands, with before and after photographs on every job. No ladders.</p>
<p>📞 <a href="tel:07421433910" style="color: #0f172a; font-weight: 700; text-decoration: none;">07421 433910</a> | 🌐 <a href="https://wowgutters.co.uk" style="${link}">https://wowgutters.co.uk</a> | 📋 <a href="/quote/" style="${link}">Request a quote</a></p>
<p>Serving <a href="/gutter-cleaning-birmingham/" style="${link}">Birmingham</a>, <a href="/gutter-cleaning-solihull/" style="${link}">Solihull</a>, <a href="/gutter-cleaning-sutton-coldfield/" style="${link}">Sutton Coldfield</a>, <a href="/gutter-cleaning-wolverhampton/" style="${link}">Wolverhampton</a>, <a href="/gutter-cleaning-dudley/" style="${link}">Dudley</a>, <a href="/gutter-cleaning-walsall/" style="${link}">Walsall</a>, <a href="/gutter-cleaning-coventry/" style="${link}">Coventry</a>, <a href="/gutter-cleaning-redditch/" style="${link}">Redditch</a>, <a href="/gutter-cleaning-worcester/" style="${link}">Worcester</a>, <a href="/gutter-cleaning-bromsgrove/" style="${link}">Bromsgrove</a> and <a href="/areas-we-cover/" style="${link}">all West Midlands areas</a>.</p>

<h2 id="related-articles" style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Related Articles</h2>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><strong><a href="/blog/can-blocked-gutters-cause-damp/" style="${link}">Can Blocked Gutters Cause Damp?</a></strong></li>
  <li><strong><a href="/blog/gutter-water-damage-guide/" style="${link}">Water Damage From Gutters: Birmingham Homeowner Guide</a></strong></li>
  <li><strong><a href="/blog/is-your-west-midlands-home-storing-water-damage/" style="${link}">Is Your West Midlands Home Quietly Storing Water Damage?</a></strong></li>
  <li><strong><a href="/blog/dripping-gutter-joints/" style="${link}">Dripping Gutter Joints in Birmingham: Why They Leak and What Fixes Them</a></strong></li>
  <li><strong><a href="/blog/overflowing-gutters-fix/" style="${link}">Overflowing Gutters in Birmingham? Causes &amp; Quick Fixes</a></strong></li>
  <li><strong><a href="/blog/roofline-cleaning-birmingham/" style="${link}">Roofline Cleaning Birmingham: Gutters, Fascias &amp; Soffits</a></strong></li>
  <li><strong><a href="/blog/complete-guide-gutter-maintenance-birmingham-west-midlands/" style="${link}">The Complete Guide to Gutter Maintenance for Birmingham &amp; West Midlands Homeowners</a></strong></li>
</ul>
`,
};
