import type { BlogPost } from './blogTypes';

const IMG_HERO   = '/blog-images/birmingham-gutter-cleaning-checklist/birmingham-gutter-cleaning-checklist-hero.webp';
const IMG_BEFORE = '/blog-images/birmingham-gutter-cleaning-checklist/birmingham-gutter-cleaning-checklist-before.webp';
const IMG_AFTER  = '/blog-images/birmingham-gutter-cleaning-checklist/birmingham-gutter-cleaning-checklist-after.webp';

const link = 'color: #19C58B; font-weight: 700; text-decoration: none;';

const ctaTop = `
<blockquote style="border-left: 4px solid #19C58B; padding: 16px 20px; margin: 24px 0; background: #f0fdf4; border-radius: 0 8px 8px 0; color: #1e293b;">
  <strong>📞 WOW Gutters Ltd — Birmingham's gutter cleaning specialists:</strong>
  <a href="tel:07421433910" style="color: #0f172a; font-weight: 700; text-decoration: none;">07421 433910</a><br/>
  Ground-based vacuum system · Live camera inspection · Before &amp; after photos on every job
</blockquote>`;

const ctaBox = `
<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border: 2px solid #19C58B; border-radius: 16px; padding: 28px 32px; margin: 40px 0; box-shadow: 0 4px 20px rgba(25,197,139, 0.12);">
  <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin: 0 0 12px 0; line-height: 1.3;">SPOTTED A SYMPTOM? GET IT PROPERLY CHECKED.</h3>
  <p style="color: #334155; font-size: 0.98rem; line-height: 1.75; margin: 0 0 20px 0;">WOW Gutters Ltd works from the ground with an industrial vacuum and telescopic pole reaching up to four storeys. Every job includes a live camera inspection and dated before-and-after photographs. Fully insured. Covering Birmingham and the wider West Midlands.</p>
  <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px 24px;">
    <div>
      <span style="display: block; font-weight: 800; color: #0f172a; font-size: 1rem;">See the symptom. Book the visit.</span>
      <span style="display: block; color: #64748b; font-size: 0.825rem; margin-top: 2px;">Same-week appointments across Birmingham &amp; West Midlands</span>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
      <a href="/quote/" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #19C58B; color: #334155; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 8px rgba(25,197,139, 0.3);">
        <span>&#9658;</span> Get Free Quote
      </a>
      <a href="tel:07421433910" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #0f172a; color: #334155; font-size: 0.95rem; font-weight: 700; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
        <span>📞</span> 07421 433910
      </a>
    </div>
  </div>
</div>`;

export const cloggedGutterSymptomsBlogPost: BlogPost = {
  id: 'clogged-gutter-symptoms',
  seoTitle: 'Clogged Gutter Symptoms: 9 Warning Signs Birmingham Homeowners Miss',
  title: 'Clogged Gutter Symptoms: 9 Warning Signs Birmingham Homeowners Miss',
  excerpt:
    'Not sure if your gutters are clogged? Nine symptoms to check from the ground, what each one usually means and what to do next. Call 07421 433910.',
  shortSummary:
    'Nine symptoms of clogged gutters in Birmingham and the West Midlands, what each usually means, how to check safely from the ground and what to do next.',
  image: IMG_HERO,
  heroVideo: '/gutter-cleaning-video.mp4',
  date: '2026-11-12',
  featured: true,
  category: 'Guides',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'Gutter Cleaning Specialists',
  authorBio:
    'WOW Gutters Ltd provides fully insured, ground-based gutter cleaning and camera inspection across Birmingham and the West Midlands.',
  breadcrumbName: 'Clogged Gutter Symptoms',
  quickAnswer:
    'Nine clogged gutter symptoms Birmingham homeowners miss: water over the front lip, water behind the gutter on the fascia, a gurgling downpipe in light rain, a recurring puddle at the downpipe base, a section sitting lower than its neighbours, plants or a green fringe at the edge, vertical staining on the wall below, dripping long after rain stops, and peeling paint on the fascia. Overflow is usually the last sign to appear.',
  content: `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Clogged Gutter Symptoms: 9 Warning Signs Birmingham Homeowners Miss",
  "description": "Nine symptoms of clogged gutters in Birmingham and the West Midlands, what each usually means, how to check safely from the ground and what to do next.",
  "author": { "@type": "Organization", "name": "WOW Gutters Ltd", "url": "https://wowgutters.co.uk" },
  "publisher": { "@type": "Organization", "name": "WOW Gutters Ltd" },
  "mainEntityOfPage": "https://wowgutters.co.uk/blog/clogged-gutter-symptoms"
}
</script>

<h1 style="font-size:2rem;font-weight:800;margin-bottom:1rem;">Clogged Gutter Symptoms: 9 Warning Signs Birmingham Homeowners Miss</h1>

<p>Most clogged gutters don't announce themselves. A partly blocked gutter still works in light rain, so the first symptoms are quiet ones. This guide lists nine, what each usually points to and what to do about it. It is general guidance for homeowners in <a href="https://wowgutters.co.uk/gutter-cleaning-birmingham" style="${link}">Birmingham</a> and the wider <a href="https://wowgutters.co.uk/areas-we-cover" style="${link}">West Midlands</a>, not a diagnosis of your house.</p>

${ctaTop}

<figure style="margin: 32px 0;">
  <img src="${IMG_HERO}" alt="Birmingham gutter checklist — ground-level inspection of guttering on a semi-detached house" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" loading="lazy" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Ground-level inspection is usually enough to spot the first warning signs — no ladder needed.</figcaption>
</figure>

<nav style="background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px 28px; margin: 32px 0;">
  <h2 style="font-size: 1.1rem; font-weight: 800; color: #0f172a; margin: 0 0 16px 0;">On This Page</h2>
  <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.9; font-size: 0.95rem;">
    <li><a href="#why-quiet" style="${link}">Why the First Symptoms Are Quiet</a></li>
    <li><a href="#nine-symptoms" style="${link}">The Nine Symptoms</a></li>
    <li><a href="#check-safely" style="${link}">How to Check Safely From the Ground</a></li>
    <li><a href="#what-next" style="${link}">What to Do Next</a></li>
    <li><a href="#emergency" style="${link}">Is It an Emergency?</a></li>
    <li><a href="#what-visit-cant-do" style="${link}">What a Visit Can't Do</a></li>
    <li><a href="#choose-contractor" style="${link}">Choosing a Contractor</a></li>
    <li><a href="#faq" style="${link}">FAQ</a></li>
  </ol>
</nav>

<h2 id="why-quiet" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Why the First Symptoms Are Quiet</h2>

<p>A gutter loses capacity slowly. Silt compacts at the channel base over several seasons, then leaves settle on top, then moss from the roof adds to the mass. Through all of this, the system still moves water in light rain, so there is no obvious alarm. By the time the gutter overflows in a downpour, it has usually been partially blocked for a year or more.</p>

<p>The symptoms below appear before overflow does. They are visible from the garden with a little patience. Our <a href="https://wowgutters.co.uk/blog/gutters-blocked-checklist" style="${link}">blocked gutters checklist</a> turns them into a ten-minute walk-round you can do today.</p>

<h2 id="nine-symptoms" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">The Nine Symptoms</h2>

<p>Work through these in daylight, binoculars if you have them, and again during or just after rain when you can see the system under load.</p>

<div style="margin: 32px 0;">

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #19C58B; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">1</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">Water spilling over the front lip</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">The classic sign — but usually the last to appear, not the first. When overflow is <em>localised</em> to one spot, the cause is typically a dropped bracket or a pile of debris directly behind that point. When water overflows along the whole run, a blocked downpipe is more likely, because the channel fills from one end.</p>
      <p style="margin: 0; color: #334155;">See <a href="https://wowgutters.co.uk/blog/overflowing-gutters-fix" style="${link}">Overflowing Gutters in Birmingham: Causes and Quick Fixes</a> for how to tell them apart.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #0f172a; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">2</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">Water running down the wall behind the gutter</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">Harder to see than front-lip overflow, and more damaging. Water reaching the fascia board from behind soaks into timber slowly, then spreads to the soffit. The fascia starts to soften, brackets work loose, and the gutter sags — which then holds even more water. The cycle is covered in our guide to <a href="https://wowgutters.co.uk/blog/leaking-gutter-repair" style="${link}">leaking gutter repair</a>.</p>
      <p style="margin: 0; color: #334155;">Look for a tide-mark or dark stain on the section of fascia directly above the overflow point.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #19C58B; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">3</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">A gurgle from a downpipe in light rain</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">A healthy downpipe is nearly silent. A gurgle means air is being pulled past a partial blockage, usually at an offset bend where debris collects first. The noise gets louder as the blockage grows. This is one of the earliest signs you will hear rather than see.</p>
      <p style="margin: 0; color: #334155;">Stand near the downpipe during light rain. If it gurgles or makes a sucking sound, something is narrowing the bore. Our <a href="https://wowgutters.co.uk/downpipe-unblocking" style="${link}">downpipe unblocking service</a> clears the full length.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #0f172a; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">4</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">A puddle that keeps returning at the downpipe base</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">Water arriving at the base in surges (rather than a steady flow) suggests a partial restriction somewhere above. A puddle that reappears after every shower in the same spot — even when the soil elsewhere is dry — is a reliable indicator. On Birmingham's clay-heavy soils, water discharged repeatedly at one spot can also affect drainage near the foundation over time.</p>
      <p style="margin: 0; color: #334155;">Check whether the puddle is growing with each rain event, which suggests the blockage is worsening.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #19C58B; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">5</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">A section that sits lower than its neighbours</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">Stand at a distance and look along the gutter run. A section that dips is carrying weight it was not designed for. Wet silt is surprisingly heavy — a metre of channel packed with compacted debris can weigh several kilograms — and that sustained load bends the bracket downward. Once a section sags, it traps standing water, which accelerates bracket corrosion.</p>
      <p style="margin: 0; color: #334155;">This is usually visible from the garden without binoculars. Look for a gentle bow in what should be a straight run.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #0f172a; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">6</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">Plants or a green fringe at the gutter edge</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">Seeds blown onto a gutter can only germinate when there is enough silt to root in and enough moisture to sustain them. A green fringe, grass or small weeds at the channel edge means debris has been sitting long enough for a micro-habitat to form. A joint with plant growth is almost always blocked.</p>
      <p style="margin: 0; color: #334155;">Our guide to <a href="https://wowgutters.co.uk/blog/gutters-full-of-weeds" style="${link}">gutters full of weeds</a> explains why removing the plant without clearing the silt underneath is only a temporary fix.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #19C58B; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">7</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">Vertical staining on the wall below the gutter</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">A dark streak running down the brickwork below a gutter section is evidence of repeated overflow at that point. Fresh overflow dries quickly and may leave little mark. Old overflow stains are darker, often with a green algae tinge, and show that water has been escaping from the same spot across many rain events over months or years.</p>
      <p style="margin: 0; color: #334155;">Don't repaint over it. The stain is a symptom; the underlying cause is an overflow point that needs finding. Repainting before clearing the gutter means the stain returns.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #0f172a; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">8</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">Water dripping long after rain stops</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">A clear gutter drains within a few minutes of rain stopping. If yours continues dripping for 20 minutes or more, the channel is retaining water. That standing water is evidence of a blockage restricting flow to the downpipe, a sagged section holding water below the outlet level, or both. Standing water also accelerates the breakdown of plastic joints and seals.</p>
      <p style="margin: 0; color: #334155;">Listen from an upstairs window or watch from the garden after a shower has passed.</p>
    </div>
  </div>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
    <div style="background: #19C58B; color: #fff; padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 1.5rem; font-weight: 900; min-width: 32px; color: #fff;">9</span>
      <strong style="font-size: 1.05rem; color: #ffffff;">Peeling paint on the fascia</strong>
    </div>
    <div style="padding: 18px 20px; color: #334155; line-height: 1.75; background: #ffffff;">
      <p style="margin: 0 0 10px 0; color: #334155;">Moisture is reaching the fascia board from behind — either from overflow falling behind the gutter, or from the gutter sitting hard against the board and creating a trapped damp zone. Peeling paint on a fascia that was recently decorated is a reliable signal that moisture is continuing to arrive.</p>
      <p style="margin: 0; color: #334155;">Don't repaint until you know why. Find and clear the overflow point first. Repainting a wet fascia board traps moisture and hastens rot.</p>
    </div>
  </div>

</div>

<figure style="margin: 32px 0;">
  <img src="${IMG_BEFORE}" alt="Clogged Birmingham gutter packed with compacted silt and leaf debris before professional cleaning" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" loading="lazy" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Compacted silt at the channel base — invisible from the ground, but responsible for most of the symptoms listed above.</figcaption>
</figure>

<h2 id="check-safely" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">How to Check Safely From the Ground</h2>

<p>All nine symptoms above can be spotted without leaving the ground. Here is a simple method:</p>

<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li style="margin-bottom: 10px;"><strong>Choose a dry day first.</strong> Look along the gutter run from a distance for sagging sections. Check the wall below each section for staining. Look at the gutter edge for plant growth.</li>
  <li style="margin-bottom: 10px;"><strong>Then watch during light rain.</strong> Listen for downpipe gurgles. Watch for where water exits the channel and where it doesn't. Time how long dripping continues after rain stops.</li>
  <li style="margin-bottom: 10px;"><strong>Take dated photographs.</strong> A photo of a stain or a sag, with a date, is useful context for a contractor and for any future insurance query.</li>
  <li style="margin-bottom: 10px;"><strong>Don't climb.</strong> Working at height is where most DIY roofline injuries happen. The HSE's <a href="https://www.hse.gov.uk/work-at-height/" target="_blank" rel="noopener noreferrer" style="${link}">guidance on working at height</a> is to avoid it wherever a safer method exists. Ground-level checking is both safer and usually sufficient.</li>
</ul>

<p>Our guide on <a href="https://wowgutters.co.uk/blog/how-clean-gutters-without-ladder-birmingham-method" style="${link}">how to clean gutters without a ladder</a> explains why the professional method works from the ground up to four storeys without compromising on what gets cleared.</p>

<h2 id="what-next" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What to Do Next</h2>

<ol style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li style="margin-bottom: 12px;"><strong>Photograph the symptoms.</strong> Dated photos record where you are starting from and help the contractor understand what to look for.</li>
  <li style="margin-bottom: 12px;"><strong>Book a full clear and camera inspection.</strong> A proper visit clears to the channel floor — not just the visible top layer — and uses a live camera to check joints, brackets and fall angle. See <a href="https://wowgutters.co.uk/gutter-cleaning" style="${link}">our gutter cleaning service</a> for what that includes.</li>
  <li style="margin-bottom: 12px;"><strong>Insist on downpipe flow-testing.</strong> A pipe that looks clear after debris is removed may still be partially obstructed at a bend. Flow-testing confirms the pipe is clear all the way through.</li>
  <li style="margin-bottom: 12px;"><strong>Repair before you redecorate.</strong> Clear the gutters, fix any leaks or bracket faults, then repaint the fascia. Reversing that order means moisture continues arriving behind fresh paint.</li>
</ol>

${ctaBox}

<figure style="margin: 32px 0;">
  <img src="${IMG_AFTER}" alt="Birmingham gutter fully cleaned to channel floor after professional ground-based vacuum service" style="width: 100%; border-radius: 12px; border: 1px solid #e2e8f0;" loading="lazy" />
  <figcaption style="text-align: center; color: #64748b; font-size: 0.875rem; margin-top: 8px;">Channel floor cleared and downpipe flow-tested — every WOW Gutters visit includes dated before-and-after photographs.</figcaption>
</figure>

<h2 id="emergency" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Is It an Emergency?</h2>

<p>Most clogged gutter symptoms are not urgent enough to warrant same-day attendance. Book promptly, but don't panic. Two situations do warrant faster action:</p>

<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li style="margin-bottom: 10px;"><strong>Water entering the building</strong> — through a ceiling, a wall or a window reveal — needs addressing quickly.</li>
  <li style="margin-bottom: 10px;"><strong>A section pulling away from the wall</strong> — a bracket has failed, the section is at risk of falling, and the gap will direct water straight onto the fascia.</li>
</ul>

<p>Everything else — staining, dripping, plants, puddles — can wait for a scheduled visit. See <a href="https://wowgutters.co.uk/blog/emergency-gutter-cleaning" style="${link}">emergency gutter cleaning after heavy rain</a> for a fuller guide to where the line sits.</p>

<h2 id="what-visit-cant-do" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">What a Gutter Visit Can't Do</h2>

<p>A gutter clean and camera inspection confirms the state of the gutters and downpipes. It is not a structural survey. Here is what sits outside its scope:</p>

<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li style="margin-bottom: 10px;"><strong>Rotten timber</strong> needs a carpenter or joiner.</li>
  <li style="margin-bottom: 10px;"><strong>Damp inside the building</strong> may have multiple causes and needs a qualified damp specialist.</li>
  <li style="margin-bottom: 10px;"><strong>Buried or underground drainage</strong> needs a drainage contractor.</li>
  <li style="margin-bottom: 10px;"><strong>Structural movement</strong> needs a structural engineer.</li>
</ul>

<p>A good contractor tells you what is outside their scope and doesn't guess. If a visit reveals a repair need, our guide to <a href="https://wowgutters.co.uk/blog/gutter-repair-or-replace" style="${link}">gutter repair or full replacement</a> explains how to assess what is worth fixing versus what should be replaced.</p>

<h2 id="choose-contractor" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Choosing a Contractor</h2>

<p>When getting quotes, ask these five questions:</p>

<ol style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li style="margin-bottom: 10px;">Do you clear to the channel floor, or just remove surface debris?</li>
  <li style="margin-bottom: 10px;">Do you work from the ground, or do you need ladders?</li>
  <li style="margin-bottom: 10px;">Can you show a current public liability insurance certificate?</li>
  <li style="margin-bottom: 10px;">Do I get before and after photographs?</li>
  <li style="margin-bottom: 10px;">What is outside your scope — what won't this visit check?</li>
</ol>

<p>You can check WOW Gutters Ltd independently before booking on <a href="https://www.fyple.co.uk/company/wow-gutters-ltd-texh084/" target="_blank" rel="noopener noreferrer" style="${link}">Fyple</a>, <a href="https://ratingsplus.co.uk/city/birmingham/gutter-cleaners/wow-gutters-ltd" target="_blank" rel="noopener noreferrer" style="${link}">RatingsPlus</a> and <a href="https://www.friday-ad.co.uk/business/-/wow-gutters-ltd/7124953" target="_blank" rel="noopener noreferrer" style="${link}">Friday-Ad</a>. A directory listing confirms a business exists, not that it is good — so ask the questions too.</p>

<h2 id="faq" style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-top: 40px;">FAQ</h2>

<div style="margin-top: 24px;">

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What are the first signs of clogged gutters?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Usually quiet ones: a gurgling downpipe, a returning puddle at the downpipe base, a green fringe at the gutter edge, or a vertical stain on the wall below — often before any overflow occurs.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Can gutters be clogged without overflowing?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Yes. A partly blocked gutter works in light rain and fails only when rainfall exceeds the reduced capacity. Absence of overflow proves very little about the gutter's condition.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>How often should gutters be cleaned?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">Once a year suits most homes. Heavy tree cover nearby — particularly oak, sycamore or pine — often needs two clears a year: once in late autumn after leaf fall and once in spring. See our guide on <a href="https://wowgutters.co.uk/blog/how-often-clean-gutters" style="${link}">how often to clean gutters</a>.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>Do clogged gutters cause damp?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;">They can contribute over time, particularly when overflow runs down a wall or sits against a fascia repeatedly. Damp has multiple possible causes, so a blocked gutter is one item to rule out, not the automatic explanation.</p>
    </div>
  </details>

  <details style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; overflow: hidden;">
    <summary style="cursor: pointer; padding: 18px 22px; font-size: 1rem; font-weight: 700; color: #0f172a; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; user-select: none; background: #fff;">
      <span>What areas do you cover?</span>
      <span style="flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #19C58B; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; line-height: 1; font-weight: 400;">+</span>
    </summary>
    <div style="padding: 0 22px 18px; color: #475569; line-height: 1.75; border-top: 1px solid #f1f5f9;">
      <p style="margin: 16px 0 0;"><a href="https://wowgutters.co.uk/gutter-cleaning-birmingham" style="${link}">Birmingham</a>, <a href="https://wowgutters.co.uk/gutter-cleaning-solihull" style="${link}">Solihull</a>, <a href="https://wowgutters.co.uk/gutter-cleaning-sutton-coldfield" style="${link}">Sutton Coldfield</a>, <a href="https://wowgutters.co.uk/gutter-cleaning-wolverhampton" style="${link}">Wolverhampton</a>, <a href="https://wowgutters.co.uk/gutter-cleaning-walsall" style="${link}">Walsall</a>, <a href="https://wowgutters.co.uk/gutter-cleaning-dudley" style="${link}">Dudley</a> and <a href="https://wowgutters.co.uk/areas-we-cover" style="${link}">all West Midlands areas</a>.</p>
    </div>
  </details>

</div>

<h2 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 40px;">Related Reading</h2>
<ul style="padding-left: 20px; line-height: 1.9; color: #334155;">
  <li><a href="https://wowgutters.co.uk/blog/gutters-blocked-checklist" style="${link}">How Do You Know If Your Gutters Are Blocked? (10-Minute Checklist)</a></li>
  <li><a href="https://wowgutters.co.uk/blog/overflowing-gutters-fix" style="${link}">Overflowing Gutters in Birmingham: Causes and Quick Fixes</a></li>
  <li><a href="https://wowgutters.co.uk/blog/gutters-full-of-weeds" style="${link}">Gutters Full of Weeds or Seeds: Birmingham Clearing Guide</a></li>
  <li><a href="https://wowgutters.co.uk/blog/gutter-repair-or-replace" style="${link}">Gutter Repair or Full Replacement: What Drives the Cost in Birmingham</a></li>
  <li><a href="https://wowgutters.co.uk/blog/emergency-gutter-cleaning" style="${link}">Emergency Gutter Cleaning After Heavy Rain</a></li>
  <li><a href="https://wowgutters.co.uk/blog/how-often-clean-gutters" style="${link}">How Often Should You Clean Gutters?</a></li>
</ul>

<p style="margin-top: 32px; padding: 20px; background: #f8fafc; border-radius: 10px; color: #334155; line-height: 1.75;">WOW Gutters Ltd provides fully insured, ground-based gutter cleaning and camera inspection across Birmingham and the West Midlands, with before and after photographs on every job.<br/><br/>
📞 <a href="tel:07421433910" style="${link}">07421 433910</a> | 📋 <a href="https://wowgutters.co.uk/quote" style="${link}">Request a quote</a> | 📧 <a href="mailto:support@wowgutters.co.uk" style="${link}">support@wowgutters.co.uk</a></p>
`,
};
