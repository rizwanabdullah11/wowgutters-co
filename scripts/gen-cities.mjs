import fs from 'fs';

const entries = [
  { slug: 'acocks-green', name: 'Acocks Green', pc: ['B27'], na: ['Yardley', 'Hall Green', 'Olton', 'Birmingham', 'Tyseley'], la: 52.4450, lo: -1.8200, pf: 50, pt: 110 },
  { slug: 'allens-cross', name: 'Allens Cross', pc: ['B69', 'B66'], na: ['Smethwick', 'Rowley Regis', 'Oldbury', 'Birmingham', 'Bearwood'], la: 52.4900, lo: -1.9700, pf: 50, pt: 110 },
  { slug: 'alum-rock', name: 'Alum Rock', pc: ['B8'], na: ['Washwood Heath', 'Ward End', 'Saltley', 'Birmingham', 'Stechford'], la: 52.4850, lo: -1.8500, pf: 50, pt: 105 },
  { slug: 'castle-bromwich', name: 'Castle Bromwich', pc: ['B34', 'B36'], na: ['Chelmsley Wood', 'Stechford', 'Birmingham', 'Solihull', 'Yardley'], la: 52.5050, lo: -1.7900, pf: 50, pt: 115 },
  { slug: 'chad-valley', name: 'Chad Valley', pc: ['B44', 'B42'], na: ['Kingstanding', 'Perry Barr', 'Great Barr', 'Birmingham', 'Hamstead'], la: 52.5300, lo: -1.9000, pf: 50, pt: 110 },
  { slug: 'chemical-heath', name: 'Chemical Heath', pc: ['B33', 'B8'], na: ['Stechford', 'Ward End', 'Bordesley Green', 'Birmingham', 'Small Heath'], la: 52.4780, lo: -1.8350, pf: 50, pt: 105 },
  { slug: 'cofton-hackett', name: 'Cofton Hackett', pc: ['B45', 'B31'], na: ['Longbridge', 'Rednal', 'Birmingham', 'Barnt Green', 'Rubery'], la: 52.3800, lo: -1.9900, pf: 55, pt: 120 },
  { slug: 'fox-hollies', name: 'Fox Hollies', pc: ['B26', 'B27'], na: ['Acocks Green', 'Yardley', 'Hall Green', 'Birmingham', 'Tyseley'], la: 52.4400, lo: -1.8100, pf: 50, pt: 110 },
  { slug: 'gilbertstone', name: 'Gilbertstone', pc: ['B26'], na: ['Yardley', 'Sheldon', 'Acocks Green', 'Birmingham', 'Stechford'], la: 52.4500, lo: -1.8000, pf: 50, pt: 110 },
  { slug: 'glebe-farm', name: 'Glebe Farm', pc: ['B90'], na: ['Shirley', 'Solihull', 'Hall Green', 'Birmingham', 'Yardley Wood'], la: 52.4200, lo: -1.8200, pf: 55, pt: 115 },
  { slug: 'hamstead', name: 'Hamstead', pc: ['B43', 'B44'], na: ['Great Barr', 'Kingstanding', 'Perry Barr', 'Birmingham', 'Walsall'], la: 52.5400, lo: -1.9300, pf: 50, pt: 110 },
  { slug: 'hill-cross', name: 'Hill Cross', pc: ['B73', 'B72'], na: ['Sutton Coldfield', 'Maney', 'Walmley', 'Birmingham', 'Erdington'], la: 52.5550, lo: -1.8200, pf: 55, pt: 120 },
  { slug: 'king-edward', name: 'King Edward', pc: ['B1', 'B16'], na: ['Ladywood', 'Edgbaston', 'Birmingham', 'Harborne', 'Jewellery Quarter'], la: 52.4750, lo: -1.9200, pf: 55, pt: 120 },
  { slug: 'maney', name: 'Maney', pc: ['B72', 'B73'], na: ['Sutton Coldfield', 'Wylde Green', 'Birmingham', 'Erdington', 'Walmley'], la: 52.5600, lo: -1.8200, pf: 55, pt: 120 },
  { slug: 'marston-green', name: 'Marston Green', pc: ['B37'], na: ['Chelmsley Wood', 'Birmingham', 'Solihull', 'Castle Bromwich', 'Coleshill'], la: 52.4700, lo: -1.7400, pf: 50, pt: 115 },
  { slug: 'moor-green', name: 'Moor Green', pc: ['B44', 'B23'], na: ['Kingstanding', 'Erdington', 'Birmingham', 'Perry Barr', 'Great Barr'], la: 52.5300, lo: -1.8700, pf: 50, pt: 110 },
  { slug: 'newtown', name: 'Newtown', pc: ['B19'], na: ['Aston', 'Birmingham', 'Hockley', 'Ladywood', 'Winson Green'], la: 52.4950, lo: -1.9050, pf: 50, pt: 105 },
  { slug: 'old-oscott', name: 'Old Oscott', pc: ['B73'], na: ['Sutton Coldfield', 'Erdington', 'Birmingham', 'Walmley', 'Kingstanding'], la: 52.5450, lo: -1.8400, pf: 55, pt: 115 },
  { slug: 'pype-hayes', name: 'Pype Hayes', pc: ['B23', 'B24'], na: ['Erdington', 'Sutton Coldfield', 'Birmingham', 'Walmley', 'Minworth'], la: 52.5200, lo: -1.8300, pf: 50, pt: 110 },
  { slug: 'roughley', name: 'Roughley', pc: ['B74', 'B75'], na: ['Sutton Coldfield', 'Four Oaks', 'Birmingham', 'Mere Green', 'Streetly'], la: 52.5700, lo: -1.8400, pf: 55, pt: 125 },
  { slug: 'short-heath', name: 'Short Heath', pc: ['B23', 'B24'], na: ['Erdington', 'Sutton Coldfield', 'Birmingham', 'Pype Hayes', 'Kingstanding'], la: 52.5300, lo: -1.8400, pf: 50, pt: 110 },
  { slug: 'stockland-green', name: 'Stockland Green', pc: ['B33', 'B34'], na: ['Stechford', 'Castle Bromwich', 'Birmingham', 'Ward End', 'Hodge Hill'], la: 52.4900, lo: -1.8100, pf: 50, pt: 105 },
  { slug: 'tyburn', name: 'Tyburn', pc: ['B35'], na: ['Castle Vale', 'Erdington', 'Birmingham', 'Minworth', 'Walmley'], la: 52.5150, lo: -1.7900, pf: 50, pt: 110 },
  { slug: 'walmley', name: 'Walmley', pc: ['B76'], na: ['Sutton Coldfield', 'Minworth', 'Birmingham', 'Erdington', 'Castle Bromwich'], la: 52.5400, lo: -1.7900, pf: 55, pt: 120 },
  { slug: 'weoley-hill', name: 'Weoley Hill', pc: ['B29'], na: ['Selly Oak', 'Weoley Castle', 'Birmingham', 'Northfield', 'Harborne'], la: 52.4350, lo: -1.9450, pf: 50, pt: 110 },
  { slug: 'world-s-end', name: 'Worlds End', pc: ['B8', 'B10'], na: ['Alum Rock', 'Small Heath', 'Birmingham', 'Washwood Heath', 'Saltley'], la: 52.4800, lo: -1.8450, pf: 50, pt: 105 },
];

let out = '';
for (const e of entries) {
  out += `  '${e.slug}': {\n`;
  out += `    slug: '${e.slug}',\n`;
  out += `    name: '${e.name}',\n`;
  out += `    postcodes: ${JSON.stringify(e.pc)},\n`;
  out += `    nearbyAreas: ${JSON.stringify(e.na)},\n`;
  out += `    geo: { latitude: ${e.la}, longitude: ${e.lo} },\n`;
  out += `    pricing: { terraced: { min: ${e.pf}, max: ${e.pf + 20} }, semiDetached: { min: ${e.pf + 10}, max: ${e.pf + 35} }, detached: { min: ${e.pf + 35}, max: ${e.pt} } },\n`;
  out += `    priceFrom: ${e.pf},\n`;
  out += `    priceTo: ${e.pt},\n`;
  out += `    region: 'West Midlands',\n`;
  out += `    county: 'West Midlands',\n`;
  out += `    tier: 'suburb',\n`;
  out += `  },\n\n`;
}

fs.writeFileSync('C:/Users/Nauman Abdullah/Desktop/wowgutters-co/scripts/cities-addendum.txt', out, 'utf8');
console.log('Done, wrote ' + entries.length + ' entries');
