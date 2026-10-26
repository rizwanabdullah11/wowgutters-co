---
name: design-taste-frontend
description: Frontend taste and anti-slop guidelines. Applies rigorous art direction, typography, responsive hierarchy, visual rhythm, and clean design judgment to avoid generic AI frontend tropes.
---

# Design Taste & Anti-Slop Frontend Guidelines

This skill enforces intentional art direction, high-agency design judgment, and strict anti-slop rules across all web pages and components.

---

## 1. Absolute Zero (Anti-Slop Ban List)
Do NOT generate or permit any of the following AI clichés:
- ❌ **No Floating Gradient Blobs**: No blurry, ambient, oversized neon/purple "jellyfish" glowing SVG radial blobs behind hero cards.
- ❌ **No Default AI Color Palettes**: No generic indigo/purple (`#6366f1` / `#8b5cf6`) backgrounds on enterprise, utility, or trade websites. Ground palettes in brand reality (e.g. emerald/slate `#19C58B`, `#0f172a`, `#1e293b`).
- ❌ **No Cliché 3-Card Grids**: Do not default every section to three identical cards with a centered circle icon, a bold title, and two lines of filler text.
- ❌ **No Fake UI Placeholders**: Do not render fake dashboards made of random grey `div` bars, fake graphs, or placeholder wireframes. Use real content, real metrics, and real imagery.
- ❌ **No Lazy Fonts**: Do not fall back to generic `Inter`, `Roboto`, or `Arial` without brand-intentional typography pairings.
- ❌ **No Redundant Eyebrow Overuse**: Avoid repetitive uppercase pill tags or unnecessary em-dashes (`—`) on every single headline.

---

## 2. Brief Inference & Dial Calibration
Before writing UI markup or modifying pages, assess:
- **Project Context & Audience**: E.g., UK homeowner looking for reliable, insured gutter cleaning and roof maintenance.
- **Tone & Identity**: Trustworthy, professional, technically sound, clear, without frivolous tech-bro hype.
- **Calibrate Dials (1-10)**:
  - `DESIGN_VARIANCE`: **7/10** (Vary section rhythms: hero -> proof banner -> narrative with side-by-side comparison -> callout cards -> FAQ accordion -> sticky action bar).
  - `MOTION_INTENSITY`: **4/10** (Subtle, responsive micro-interactions: smooth accordion toggles, button hover lifts, no nauseating parallax).
  - `VISUAL_DENSITY`: **7/10** (Compact, scannable data: clear specs, direct contact info, quick answers, high information-to-whitespace ratio).

---

## 3. Typography & Structural Layout
- **Reading Comfort**: Keep body prose containers restrained (`max-width: 68ch` to `75ch`) for effortless readability.
- **Headline Rhythm**: Tight line-height on large headings (`1.15` - `1.25`), comfortable line-height on body text (`1.65` - `1.8`).
- **Contrast**: Maintain strict WCAG AA+ contrast. Never use light grey text on light backgrounds or low-contrast muted links.
- **Section Variety**: Alternate layout structures:
  - Full-width hero with high-contrast text and real background video/imagery.
  - Two-column before/after photo comparisons.
  - Trust callouts with clear badges, direct phone click-to-call, and quote triggers.
  - Interactive accordion FAQs for skimmable information.

---

## 4. Mobile & Touch Ergonomics
- Minimum touch target size: **48px × 48px** for all buttons and key links.
- Responsive button stacks: On viewports `< 480px`, action buttons should stretch to full width (`100%`) rather than wrapping awkwardly.
- Sticky or prominent call & quote actions visible within the first thumb-scroll.

---

## 5. Real Assets & Visual Proof
- Use genuine high-resolution job site photography, inspection camera captures, and authentic before/after pairs.
- Every figure must have a clean, informative caption detailing the problem and resolution.
