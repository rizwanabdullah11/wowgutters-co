import type { BlogPost } from './blogTypes';

const IMG_HERO = '/blog-images/leaves-gutter-cleaning/leaves-hero.webp';
const IMG_MID = '/blog-images/leaves-gutter-cleaning/blocked-downpipe-leaves.webp';
const IMG_BEFORE = '/blog-images/debris-gutter-cleaning/debris-gutter-cleaning-before.webp';
const IMG_AFTER = '/blog-images/debris-gutter-cleaning/debris-gutter-cleaning-after.webp';

const link = 'color: #19C58B; font-weight: 700; text-decoration: none;';
const cardHeader = 'background: #1e293b; color: #ffffff; padding: 10px 16px; border-radius: 6px 6px 0 0; margin: 0;';
const cardBody = 'background: #ffffff; color: #334155; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px; padding: 16px 20px; margin-bottom: 24px;';
const checkItem = 'display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;';
const checkIcon = 'color: #19C58B; font-weight: 700; flex-shrink: 0; margin-top: 2px;';

export const guttersBeforeChristmasBlogPost: BlogPost = {
  id: 'gutters-before-christmas',
  seoTitle: 'Gutter Cleaning Before Christmas: A Birmingham Homeowner\'s December Checklist',
  title: 'Gutter Cleaning Before Christmas: A Birmingham Homeowner\'s December Checklist',
  excerpt: 'December is when gutters get tested hardest and noticed least. A practical checklist for Birmingham homes before the frost arrives and the visitors do.',
  shortSummary: 'What to check on your Birmingham gutters before Christmas, what can safely wait until January and when to book a clean.',
  image: IMG_HERO,
  heroVideo: '/gutter-cleaning-video.mp4',
  date: '2026-11-19',
  featured: true,
  category: 'Seasonal',
  author: 'WOW Gutters Ltd Technical Team',
  authorRole: 'Gutter Cleaning Specialists',
  authorBio: 'WOW Gutters Ltd provides fully insured gutter cleaning, unblocking, repair and roofline maintenance across Birmingham and the West Midlands.',
  breadcrumbName: 'December Checklist',
  quickAnswer: 'Check your gutters from the ground after the last big leaf fall, ideally in November or early December. Look for overflow stains, sagging sections and visible debris at downpipe heads. Book a clean if you see any of these — Christmas week slots fill fast.',

  content: `
<p>December is when gutters get tested hardest and noticed least. Leaves are still coming down, frost is arriving, rain is steady, and everyone is busy with something else. If you have visitors coming, or a house that looks its best from the road, ten minutes now can save a nasty surprise in January. This checklist is for homes in <a href="https://wowgutters.co.uk/gutter-cleaning-birmingham" style="${link}">Birmingham</a>. It is general guidance, not a diagnosis of your house.</p>

<p>📞 <strong>WOW Gutters Ltd: 07421 433910</strong> | 📋 <a href="https://wowgutters.co.uk/quote" style="${link}">Request a quote</a></p>

<blockquote style="border-left: 4px solid #19C58B; padding: 12px 16px; background: #f0fdf4; border-radius: 0 6px 6px 0; margin: 24px 0; color: #334155;">
  <strong>Quick answer:</strong> Check your gutters from the ground after the last big leaf fall. If you see overflow stains on brickwork, sagging channels or debris piled at downpipe heads, book a clean before Christmas week — slots fill up fast and a blocked gutter that freezes overnight can pull a bracket off the fascia.
</blockquote>

<h2>Why December Is Different</h2>

<p>Most gutter problems build slowly. December compresses the timeline. Three things happen at once:</p>

<ul style="color: #334155; padding-left: 20px; line-height: 1.8;">
  <li><strong>Late leaf fall.</strong> Oak and sycamore can still be dropping leaves into early December in a mild year. A gutter that was clear in October may be half-full by Christmas.</li>
  <li><strong>Frost.</strong> Standing water in a blocked gutter freezes overnight. Ice expands and can crack a plastic channel, work a joint loose or pull a bracket away from the fascia in one night.</li>
  <li><strong>Heavy sustained rain.</strong> Birmingham's December average is around 70–80mm. A partially blocked gutter that copes in October stops coping in December.</li>
</ul>

<p>None of these is a crisis on its own. All three together — leaf debris, frost, heavy rain — is when you start finding wet patches on internal walls in January.</p>

<img src="${IMG_HERO}" alt="Leaves and debris blocking a gutter before Christmas cleaning" style="width: 100%; border-radius: 8px; margin: 24px 0;" loading="lazy" />

<h2>The December Ground-Level Check</h2>

<p>You do not need a ladder for this. Stand back from the house and work round it in daylight after a dry spell. You are looking for five things:</p>

<div style="margin: 24px 0;">
  <div style="${cardHeader}"><strong style="color:#ffffff;">1. Overflow staining on brickwork or render</strong></div>
  <div style="${cardBody}">
    <p>A green or brown tide mark running vertically from the gutter line is water that has been spilling over the front lip. It dries and stains. Fresh staining means the blockage is recent and active. Old staining means the problem has been there a while. Either needs attention before frost arrives.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">2. Visible debris at downpipe heads</strong></div>
  <div style="${cardBody}">
    <p>The entry to a downpipe is where debris piles up first. If you can see a mat of leaves, moss or grit sitting just above where the pipe disappears into the wall, water has nowhere to go in heavy rain. This is the most common cause of an overflowing downpipe.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">3. Sagging or separated channels</strong></div>
  <div style="${cardBody}">
    <p>A gutter full of wet debris is heavy. The weight pulls brackets down over time. Look for a section that dips noticeably in the middle — water pools there, never reaches the downpipe and eventually overflows at the lowest point. A sagging gutter also loses fall, which is the gentle slope that moves water along the channel.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">4. Downpipe discharge</strong></div>
  <div style="${cardBody}">
    <p>During or just after rain, go outside and look at each downpipe outlet. Water should be flowing out steadily. No flow during heavy rain means a blockage somewhere in the downpipe itself, not just the gutter. A partial blockage produces a trickle when you would expect a steady stream.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">5. The fascia behind the gutter</strong></div>
  <div style="${cardBody}">
    <p>Where you can see the fascia board above and behind the gutter, look for dark damp patches or paint bubbling. A gutter sitting slightly off the fascia — common after a bracket fails — lets water run behind it rather than into it. The fascia soaks up water silently and rots from the inside.</p>
  </div>
</div>

<img src="${IMG_MID}" alt="Blocked downpipe head full of leaves and autumn debris" style="width: 100%; border-radius: 8px; margin: 24px 0;" loading="lazy" />

<h2>What Frost Does to a Blocked Gutter</h2>

<p>This is worth understanding before you decide to leave a partly blocked gutter until spring.</p>

<p>When water freezes in a plastic gutter channel, it expands by roughly 9%. A gutter that is half-full of standing water — sitting there because the downpipe entry is clogged — can expand enough overnight to push a joint apart. The joint re-seals partially when it thaws but the rubber seal is now misaligned. The next freeze does a little more damage. By February the joint leaks every time it rains.</p>

<p>Cast iron gutters on older Birmingham properties handle freeze-thaw better than plastic but are more vulnerable to cracking if there is already a small crack or a corroded section. A gutter that has been leaking at a joint for a couple of seasons may crack through in December.</p>

<p>The practical point: a partly blocked gutter in November is an inconvenience. The same gutter in a freeze is a repair job.</p>

<h2>The Before-Christmas Decision: Book Now or Wait?</h2>

<div style="margin: 24px 0;">
  <div style="${cardHeader}"><strong style="color:#ffffff;">Book a clean now if you see any of these</strong></div>
  <div style="${cardBody}">
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Overflow staining on the wall, fresh or old</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Visible debris mat at a downpipe head</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>No water discharging from a downpipe during rain</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>A sagging or separated gutter section</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Last clean was more than 18 months ago</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Overhanging trees that shed late (oak, sycamore)</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>A downstairs room that smells damp in winter</span></div>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">What can wait until January</strong></div>
  <div style="${cardBody}">
    <div style="${checkItem}"><span style="${checkIcon}">→</span><span>A routine annual clean where no symptoms are visible and gutters were cleaned in spring</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">→</span><span>Cosmetic fascia cleaning where the fascia is structurally sound</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">→</span><span>Repainting or resealing joints where there is no active leak in heavy rain</span></div>
    <p style="margin-top: 10px; font-size: 0.9em; color: #64748b;">January is quieter and slots are easier to book. If you are unsure, call and describe what you saw — most contractors will be honest about whether it is urgent.</p>
  </div>
</div>

<h2>Booking Before Christmas: What to Know</h2>

<p>The last two weeks of November and the first two weeks of December are the busiest weeks of the year for gutter cleaning in Birmingham. Every homeowner who did the same ground check is booking at the same time. By mid-December, most contractors are either fully booked or quoting into the new year.</p>

<p>If you book in the first week of December you can usually get a slot before the 20th. If you book the week of the 15th, you may be looking at January.</p>

<p>What to have ready when you call:</p>
<ul style="color: #334155; padding-left: 20px; line-height: 1.8;">
  <li>Number of storeys (single, two, or three-storey)</li>
  <li>Approximate length of guttering (or just describe the house — a mid-terrace, a detached bungalow, a semi)</li>
  <li>Whether there is a downpipe that you know is blocked or slow</li>
  <li>Access notes — shared drive, parked cars along the front, side gate locked</li>
</ul>

<p>📞 <strong><a href="tel:07421433910" style="${link}">Call WOW Gutters Ltd: 07421 433910</a></strong> | 📋 <a href="https://wowgutters.co.uk/quote" style="${link}">Request a quote online</a></p>

<h2>What a Pre-Christmas Gutter Clean Includes</h2>

<img src="${IMG_BEFORE}" alt="Gutters full of autumn debris before cleaning" style="width: 100%; border-radius: 8px; margin: 24px 0;" loading="lazy" />

<p>A standard visit from WOW Gutters Ltd covers:</p>

<ul style="color: #334155; padding-left: 20px; line-height: 1.8;">
  <li>Clearing all debris from the gutter channels — leaves, moss, grit and seed pods</li>
  <li>Flushing downpipes to confirm they are flowing freely</li>
  <li>Checking and re-seating any loose brackets</li>
  <li>Reporting any visible cracks, joint failures or fascia issues found during the job</li>
  <li>Camera footage of the inside of the gutters on request (high-reach vacuum jobs)</li>
</ul>

<img src="${IMG_AFTER}" alt="Gutters after professional cleaning — clear channels and clean fascia" style="width: 100%; border-radius: 8px; margin: 24px 0;" loading="lazy" />

<p>We use a high-reach vacuum system for most properties, which means no ladder against the building. The debris goes into a sealed unit on the van, not onto your driveway. For properties where the system cannot reach — unusual roof profiles, valleys, internal gutters — we will advise on the right method before we start.</p>

<p>Learn more about how the system works: <a href="https://wowgutters.co.uk/blog/high-reach-gutter-vacuum" style="${link}">High-Reach Gutter Vacuum Cleaning in Birmingham</a>.</p>

<h2>The Safety Point: Please Do Not Climb</h2>

<div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 14px 18px; border-radius: 0 6px 6px 0; margin: 24px 0; color: #7c2d12;">
  <strong>⚠ December is not the month to get a ladder out.</strong>
  <p style="margin: 8px 0 0;">Wet leaves, damp decking and frost-slicked paving are the conditions behind most domestic ladder accidents in winter. If you spotted something in the ground check, the right step is to book a contractor who carries their own access equipment and insurance — not to climb up with a household ladder on a December morning. The job takes thirty minutes; a fall can take months to recover from.</p>
</div>

<p>If you are a landlord with a rented property in Birmingham, your obligations around gutter maintenance are covered in our separate guide: <a href="https://wowgutters.co.uk/blog/landlord-gutter-checklist" style="${link}">Landlord's Gutter Checklist: Protecting a Birmingham Rental</a>.</p>

<h2>Keeping a Record</h2>

<p>This is worth doing even if it feels like admin. A short note — date of check, what you saw, date of clean — takes two minutes and can be worth a lot more if you ever need to show a loss adjuster or buyer's solicitor that the property has been maintained. Take a photo from the same position each year. The change over three or four years is often striking even when each individual year looks fine.</p>

<div style="margin: 24px 0;">
  <div style="${cardHeader}"><strong style="color:#ffffff;">What to record each December</strong></div>
  <div style="${cardBody}">
    <div style="${checkItem}"><span style="${checkIcon}">📋</span><span>Date of ground-level check</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">📋</span><span>Any symptoms observed (overflow staining, slow downpipe, etc.)</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">📋</span><span>Date and company for any clean booked</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">📋</span><span>Any repair work recommended by the contractor</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">📋</span><span>Photo of each elevation taken from the same spot</span></div>
  </div>
</div>

<h2>The Doorstep Warning</h2>

<p>December is also when doorstep contractors call saying they happened to notice a problem with your gutters while they were in the area. Occasionally this is genuine. More often it is not — or the problem is minor and the price is not.</p>

<p>If a stranger knocks and mentions your gutters:</p>
<ul style="color: #334155; padding-left: 20px; line-height: 1.8;">
  <li>Ask for a written quote before agreeing to anything</li>
  <li>Do not pay cash upfront</li>
  <li>Check whether they carry public liability insurance — a reputable contractor will confirm this without being asked</li>
  <li>If you are unsure, call a contractor you have found independently and ask them to look at the same point</li>
</ul>

<p>WOW Gutters Ltd is fully insured, based in Birmingham and does not cold-call. All quotes are written and no payment is required before the work begins.</p>

<h2>Frequently Asked Questions</h2>

<div style="margin: 24px 0;">
  <div style="${cardHeader}"><strong style="color:#ffffff;">Can gutters be cleaned in cold weather?</strong></div>
  <div style="${cardBody}">
    <p>Yes. A high-reach vacuum system works in most weather conditions. The main exception is ice on the ground around the van — if conditions are genuinely dangerous the contractor will reschedule. Light rain does not stop a gutter clean.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">What if my gutters freeze before I can book?</strong></div>
  <div style="${cardBody}">
    <p>Do not try to clear them yourself. Wait for a thaw and then book immediately — a frozen-and-thawed gutter is more likely to have joint or bracket damage that needs reporting. If water has been getting behind the fascia, the thaw is when you will see it.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">Is December too late — should I have done this in autumn?</strong></div>
  <div style="${cardBody}">
    <p>Autumn is the ideal time for a post-leaf-fall clean, but December is not too late — especially if your trees shed late. The important thing is to get it done before a sustained freeze. A clean in December is better than no clean at all.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">How much does a pre-Christmas gutter clean cost in Birmingham?</strong></div>
  <div style="${cardBody}">
    <p>Price depends on the property: number of storeys, run length and access. A mid-terrace in Birmingham is typically towards the lower end; a large detached with complex rooflines will be higher. The best approach is to request a written quote — WOW Gutters Ltd quotes are free and without obligation. See our <a href="https://wowgutters.co.uk/blog/gutter-cleaning-cost-guide" style="${link}">gutter cleaning cost guide</a> for more detail.</p>
  </div>

  <div style="${cardHeader}"><strong style="color:#ffffff;">What if I find damage after Christmas?</strong></div>
  <div style="${cardBody}">
    <p>January and February are good months for repairs — contractors are less busy and damage from the Christmas freeze-thaw is fresh and easy to assess. If you hear a dripping or scraping sound from the gutterline in January, do not ignore it. Early repair is cheaper than waiting until spring when the damage has had all winter to develop. See our guide to <a href="https://wowgutters.co.uk/blog/dripping-gutter-joints" style="${link}">dripping gutter joints</a> for what to look for.</p>
  </div>
</div>

<h2>Summary Checklist</h2>

<div style="margin: 24px 0;">
  <div style="${cardHeader}"><strong style="color:#ffffff;">Birmingham Homeowner's December Gutter Checklist</strong></div>
  <div style="${cardBody}">
    <p style="font-weight: 600; color: #334155; margin-bottom: 12px;">Do this from the ground — no ladder needed:</p>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Check for overflow staining on brickwork at the gutter line</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Look at downpipe heads for visible debris mats</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Watch downpipe outlets during rain — steady flow or trickle?</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Look for sagging or separated gutter sections</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Check the fascia behind the gutter for damp patches</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Note when gutters were last cleaned — more than 18 months? Book now</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Book before mid-December if you see any symptoms — slots fill fast</span></div>
    <div style="${checkItem}"><span style="${checkIcon}">✔</span><span>Record today's date, your findings, and any action taken</span></div>
  </div>
</div>

<p>📞 <strong><a href="tel:07421433910" style="${link}">WOW Gutters Ltd: 07421 433910</a></strong> | 📋 <a href="https://wowgutters.co.uk/quote" style="${link}">Request a free quote</a> — no obligation, written quote, fully insured.</p>

<p>Related reading: <a href="https://wowgutters.co.uk/blog/clogged-gutter-symptoms" style="${link}">9 Clogged Gutter Symptoms to Check From the Ground</a> | <a href="https://wowgutters.co.uk/blog/gutter-maintenance-schedule" style="${link}">Month-by-Month Gutter Maintenance Schedule for Birmingham</a></p>
`,
};
