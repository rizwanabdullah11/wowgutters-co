import fs from 'fs';
import path from 'path';

const BASE = 'C:/Users/Nauman Abdullah/Desktop/wowgutters-co';

const pages = [
  { slug: 'acocks-green', name: 'Acocks Green', pc: 'B27', pf: 50, pt: 110, la: 52.445, lo: -1.820, na: ['Yardley', 'Hall Green', 'Olton', 'Birmingham', 'Tyseley'] },
  { slug: 'allens-cross', name: 'Allens Cross', pc: 'B69, B66', pf: 50, pt: 110, la: 52.490, lo: -1.970, na: ['Smethwick', 'Rowley Regis', 'Oldbury', 'Birmingham', 'Bearwood'] },
  { slug: 'alum-rock', name: 'Alum Rock', pc: 'B8', pf: 50, pt: 105, la: 52.485, lo: -1.850, na: ['Washwood Heath', 'Ward End', 'Saltley', 'Birmingham', 'Stechford'] },
  { slug: 'castle-bromwich', name: 'Castle Bromwich', pc: 'B34, B36', pf: 50, pt: 115, la: 52.505, lo: -1.790, na: ['Chelmsley Wood', 'Stechford', 'Birmingham', 'Solihull', 'Yardley'] },
  { slug: 'chad-valley', name: 'Chad Valley', pc: 'B44, B42', pf: 50, pt: 110, la: 52.530, lo: -1.900, na: ['Kingstanding', 'Perry Barr', 'Great Barr', 'Birmingham', 'Hamstead'] },
  { slug: 'chemical-heath', name: 'Chemical Heath', pc: 'B33, B8', pf: 50, pt: 105, la: 52.478, lo: -1.835, na: ['Stechford', 'Ward End', 'Bordesley Green', 'Birmingham', 'Small Heath'] },
  { slug: 'cofton-hackett', name: 'Cofton Hackett', pc: 'B45, B31', pf: 55, pt: 120, la: 52.380, lo: -1.990, na: ['Longbridge', 'Rednal', 'Birmingham', 'Barnt Green', 'Rubery'] },
  { slug: 'fox-hollies', name: 'Fox Hollies', pc: 'B26, B27', pf: 50, pt: 110, la: 52.440, lo: -1.810, na: ['Acocks Green', 'Yardley', 'Hall Green', 'Birmingham', 'Tyseley'] },
  { slug: 'gilbertstone', name: 'Gilbertstone', pc: 'B26', pf: 50, pt: 110, la: 52.450, lo: -1.800, na: ['Yardley', 'Sheldon', 'Acocks Green', 'Birmingham', 'Stechford'] },
  { slug: 'glebe-farm', name: 'Glebe Farm', pc: 'B90', pf: 55, pt: 115, la: 52.420, lo: -1.820, na: ['Shirley', 'Solihull', 'Hall Green', 'Birmingham', 'Yardley Wood'] },
  { slug: 'hamstead', name: 'Hamstead', pc: 'B43, B44', pf: 50, pt: 110, la: 52.540, lo: -1.930, na: ['Great Barr', 'Kingstanding', 'Perry Barr', 'Birmingham', 'Walsall'] },
  { slug: 'hill-cross', name: 'Hill Cross', pc: 'B73, B72', pf: 55, pt: 120, la: 52.555, lo: -1.820, na: ['Sutton Coldfield', 'Maney', 'Walmley', 'Birmingham', 'Erdington'] },
  { slug: 'king-edward', name: 'King Edward', pc: 'B1, B16', pf: 55, pt: 120, la: 52.475, lo: -1.920, na: ['Ladywood', 'Edgbaston', 'Birmingham', 'Harborne', 'Jewellery Quarter'] },
  { slug: 'maney', name: 'Maney', pc: 'B72, B73', pf: 55, pt: 120, la: 52.560, lo: -1.820, na: ['Sutton Coldfield', 'Wylde Green', 'Birmingham', 'Erdington', 'Walmley'] },
  { slug: 'marston-green', name: 'Marston Green', pc: 'B37', pf: 50, pt: 115, la: 52.470, lo: -1.740, na: ['Chelmsley Wood', 'Birmingham', 'Solihull', 'Castle Bromwich', 'Coleshill'] },
  { slug: 'moor-green', name: 'Moor Green', pc: 'B44, B23', pf: 50, pt: 110, la: 52.530, lo: -1.870, na: ['Kingstanding', 'Erdington', 'Birmingham', 'Perry Barr', 'Great Barr'] },
  { slug: 'newtown', name: 'Newtown', pc: 'B19', pf: 50, pt: 105, la: 52.495, lo: -1.905, na: ['Aston', 'Birmingham', 'Hockley', 'Ladywood', 'Winson Green'] },
  { slug: 'old-oscott', name: 'Old Oscott', pc: 'B73', pf: 55, pt: 115, la: 52.545, lo: -1.840, na: ['Sutton Coldfield', 'Erdington', 'Birmingham', 'Walmley', 'Kingstanding'] },
  { slug: 'pype-hayes', name: 'Pype Hayes', pc: 'B23, B24', pf: 50, pt: 110, la: 52.520, lo: -1.830, na: ['Erdington', 'Sutton Coldfield', 'Birmingham', 'Walmley', 'Minworth'] },
  { slug: 'roughley', name: 'Roughley', pc: 'B74, B75', pf: 55, pt: 125, la: 52.570, lo: -1.840, na: ['Sutton Coldfield', 'Four Oaks', 'Birmingham', 'Mere Green', 'Streetly'] },
  { slug: 'short-heath', name: 'Short Heath', pc: 'B23, B24', pf: 50, pt: 110, la: 52.530, lo: -1.840, na: ['Erdington', 'Sutton Coldfield', 'Birmingham', 'Pype Hayes', 'Kingstanding'] },
  { slug: 'stockland-green', name: 'Stockland Green', pc: 'B33, B34', pf: 50, pt: 105, la: 52.490, lo: -1.810, na: ['Stechford', 'Castle Bromwich', 'Birmingham', 'Ward End', 'Hodge Hill'] },
  { slug: 'tyburn', name: 'Tyburn', pc: 'B35', pf: 50, pt: 110, la: 52.515, lo: -1.790, na: ['Castle Vale', 'Erdington', 'Birmingham', 'Minworth', 'Walmley'] },
  { slug: 'walmley', name: 'Walmley', pc: 'B76', pf: 55, pt: 120, la: 52.540, lo: -1.790, na: ['Sutton Coldfield', 'Minworth', 'Birmingham', 'Erdington', 'Castle Bromwich'] },
  { slug: 'weoley-hill', name: 'Weoley Hill', pc: 'B29', pf: 50, pt: 110, la: 52.435, lo: -1.945, na: ['Selly Oak', 'Weoley Castle', 'Birmingham', 'Northfield', 'Harborne'] },
  { slug: 'world-s-end', name: 'Worlds End', pc: 'B8, B10', pf: 50, pt: 105, la: 52.480, lo: -1.845, na: ['Alum Rock', 'Small Heath', 'Birmingham', 'Washwood Heath', 'Saltley'] },
];

const areaNameInTitle = (name) => {
  if (name === 'Worlds End') return "World's End";
  return name;
};

const genTitle = (name, slug) => {
  const n = areaNameInTitle(name);
  return `Gutter Cleaning ${n}, Birmingham | WOW Gutters Ltd`;
};

const genDesc = (name, pc) => {
  return `Professional gutter cleaning in ${name}, Birmingham (${pc}). No ladders, vacuum system, before & after photos. From £${pages.find(p => p.name === name)?.pf || 50}. Call: 07421 433910.`;
};

const genGeoArr = (na) => {
  return na.map(a => `'${a}'`).join(', ');
};

const genPostcodesArr = (pc) => {
  return pc.split(', ').map(p => `'${p}'`).join(', ');
};

const genFaqQs = (slug) => {
  const p = pages.find(x => x.slug === slug);
  const n = p.name;
  const pc = p.pc.split(', ')[0];
  return `[
      { question: 'How much does gutter cleaning cost in ${n}?', answer: 'Prices start from \u00a3${p.pf} for a standard terraced property in ${n}. Most properties in ${pc} range from \u00a3${p.pf} to \u00a3${p.pf + 30}, and larger detached properties from \u00a3${p.pf + 30} to \u00a3${p.pt}. All prices include downpipe flushing and before & after photos.' },
      { question: 'Is there a gutter cleaning service near me in ${n}?', answer: 'Yes — WOW Gutters Ltd covers all of ${n} (${pc}) including properties across the area. We work in ${n} regularly and can often book within 2 to 3 working days. Call 07421 433910 to check today\u2019s availability.' },
      { question: 'Do you offer fascia and soffit cleaning in ${n}?', answer: 'Yes — our hot purified water system restores fascias and soffits on ${n} properties to a bright, streak-free finish. Particularly popular with homeowners following a gutter clean.' },
      { question: 'Can blocked gutters cause damp in ${n}\u2019s older properties?', answer: 'Yes — this is one of the most common problems we see in ${pc}. When gutters overflow against solid brick walls, water has nowhere to go except inward. We regularly see interior damp patches caused by neglected gutters.' },
      { question: 'What postcodes do you cover in ${n}?', answer: 'We cover ${pc} across ${n}. Call 07421 433910 to check if your street is covered.' },
      { question: 'How quickly can you get to ${n}?', answer: 'We aim to offer bookings within 2 to 5 working days across ${n}. Same-day visits may be available — call 07421 433910 to check availability.' },
      { question: 'How do you clean gutters from ground level?', answer: 'We use a high-reach vacuum system that operates entirely from ground level. No ladders are placed against your walls, and all debris is collected into a sealed unit. This is safer, faster, and more thorough than traditional ladder-based methods.' },
    ]`;
};

const genReviews = (n) => `[
      { initial: 'J', name: 'James M.', place: '${n}', text: 'Excellent service from start to finish. Gutters cleared and downpipes flushed. The photos showed the difference clearly. Very professional. Will use again.' },
      { initial: 'L', name: 'Linda T.', place: '${n}', text: 'Ian came to clean our gutters. Very thorough, arrived on time, cleared everything from ground level. Fair price and great service. Highly recommend.' },
      { initial: 'R', name: 'Robert P.', place: 'Birmingham', text: 'Great work from WOW Gutters Ltd. On time, professional, no mess. Clear before and after photos provided. Definitely recommend.' },
    ]`;

for (const p of pages) {
  const dir = path.join(BASE, `app/gutter-cleaning-${p.slug}`);
  const fpath = path.join(dir, 'page.tsx');

  if (fs.existsSync(dir)) {
    console.log(`Skipping ${p.slug} — directory already exists`);
    continue;
  }

  if (fs.existsSync(fpath)) {
    console.log(`Skipping ${p.slug} — page.tsx already exists`);
    continue;
  }

  const n = areaNameInTitle(p.name);
  const title = genTitle(p.name, p.slug);
  const desc = genDesc(p.name, p.pc);
  const geoArr = genGeoArr(p.na);
  const postcodesArr = genPostcodesArr(p.pc);
  const faqQs = genFaqQs(p.slug);
  const reviews = genReviews(p.name);
  const ogSlug = p.slug;

  const content = `import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-${p.slug}/'
const pageData = suburbPages['${p.slug}']

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc}',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: '${title}',
    description: 'Professional gutter cleaning in ${p.name}, Birmingham (${p.pc}). No ladders, vacuum system, before & after photos. From \u00a3${p.pf}. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/${ogSlug}.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 ${title}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title}',
    description: 'Professional gutter cleaning in ${p.name}, Birmingham (${p.pc}). From \u00a3${p.pf}. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/${ogSlug}.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in ${p.name}, Birmingham',
  description: 'Our 4-step professional gutter cleaning process for ${p.name} properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for ${p.name}\u2019s properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function ${n.replace(/[\s'-]/g, '')}Page() {
  return (
    <>
      <LocalBusinessSchema
        city="${p.name}"
        url={URL_PATH}
        priceFrom={${p.pf}}
        priceTo={${p.pt}}
        nearbyAreas={[${geoArr}]}
        geo={{ latitude: ${p.la}, longitude: ${p.lo} }}
        postcodes={[${postcodesArr}]}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
`;

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fpath, content, 'utf8');
  console.log(`Created ${p.slug}/page.tsx`);
}

console.log('Done');
