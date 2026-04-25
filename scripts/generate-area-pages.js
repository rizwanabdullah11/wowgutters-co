/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// All area data with postcodes
const areas = {
  // Birmingham Areas
  birmingham: [
    { slug: 'balsall-heath', name: 'Balsall Heath', postcodes: ['B12'] },
    { slug: 'moseley', name: 'Moseley', postcodes: ['B13'] },
    { slug: 'kings-heath', name: 'Kings Heath', postcodes: ['B14'] },
    { slug: 'kings-norton', name: 'Kings Norton', postcodes: ['B30', 'B38'] },
    { slug: 'northfield', name: 'Northfield', postcodes: ['B31'] },
    { slug: 'longbridge', name: 'Longbridge', postcodes: ['B31', 'B45'] },
    { slug: 'frankley', name: 'Frankley', postcodes: ['B45'] },
    { slug: 'rubery', name: 'Rubery', postcodes: ['B45'] },
    { slug: 'bartley-green', name: 'Bartley Green', postcodes: ['B32'] },
    { slug: 'quinton', name: 'Quinton', postcodes: ['B32'] },
    { slug: 'ladywood', name: 'Ladywood', postcodes: ['B16'] },
    { slug: 'jewellery-quarter', name: 'Jewellery Quarter', postcodes: ['B18'] },
    { slug: 'digbeth', name: 'Digbeth', postcodes: ['B5', 'B9'] },
    { slug: 'bordesley-green', name: 'Bordesley Green', postcodes: ['B9'] },
    { slug: 'nechells', name: 'Nechells', postcodes: ['B7'] },
    { slug: 'lozells', name: 'Lozells', postcodes: ['B19'] },
    { slug: 'winson-green', name: 'Winson Green', postcodes: ['B18'] },
    { slug: 'tyseley', name: 'Tyseley', postcodes: ['B11'] },
    { slug: 'hall-green', name: 'Hall Green', postcodes: ['B28'] },
    { slug: 'castle-vale', name: 'Castle Vale', postcodes: ['B35'] },
  ],
  
  // Solihull
  solihull: [
    { slug: 'solihull', name: 'Solihull', postcodes: ['B90', 'B91', 'B92', 'B93', 'B94'] },
    { slug: 'shirley', name: 'Shirley', postcodes: ['B90'] },
    { slug: 'knowle', name: 'Knowle', postcodes: ['B93'] },
    { slug: 'dorridge', name: 'Dorridge', postcodes: ['B93'] },
    { slug: 'olton', name: 'Olton', postcodes: ['B92'] },
    { slug: 'chelmsley-wood', name: 'Chelmsley Wood', postcodes: ['B37'] },
    { slug: 'castle-bromwich', name: 'Castle Bromwich', postcodes: ['B36'] },
    { slug: 'marston-green', name: 'Marston Green', postcodes: ['B37'] },
    { slug: 'hockley-heath', name: 'Hockley Heath', postcodes: ['B94'] },
    { slug: 'meriden', name: 'Meriden', postcodes: ['CV7'] },
    { slug: 'hampton-in-arden', name: 'Hampton in Arden', postcodes: ['B92'] },
    { slug: 'balsall-common', name: 'Balsall Common', postcodes: ['CV7'] },
  ],
  
  // Sandwell
  sandwell: [
    { slug: 'west-bromwich', name: 'West Bromwich', postcodes: ['B70', 'B71'] },
    { slug: 'oldbury', name: 'Oldbury', postcodes: ['B68', 'B69'] },
    { slug: 'smethwick', name: 'Smethwick', postcodes: ['B66', 'B67'] },
    { slug: 'tipton', name: 'Tipton', postcodes: ['DY4'] },
    { slug: 'rowley-regis', name: 'Rowley Regis', postcodes: ['B65'] },
    { slug: 'wednesbury', name: 'Wednesbury', postcodes: ['WS10'] },
    { slug: 'blackheath', name: 'Blackheath', postcodes: ['B65'] },
    { slug: 'cradley-heath', name: 'Cradley Heath', postcodes: ['B64'] },
  ],
  
  // Walsall
  walsall: [
    { slug: 'walsall', name: 'Walsall', postcodes: ['WS1', 'WS2', 'WS3', 'WS4', 'WS5'] },
    { slug: 'bloxwich', name: 'Bloxwich', postcodes: ['WS3'] },
    { slug: 'willenhall', name: 'Willenhall', postcodes: ['WV12', 'WV13'] },
    { slug: 'aldridge', name: 'Aldridge', postcodes: ['WS9'] },
    { slug: 'brownhills', name: 'Brownhills', postcodes: ['WS8'] },
    { slug: 'pelsall', name: 'Pelsall', postcodes: ['WS3'] },
    { slug: 'darlaston', name: 'Darlaston', postcodes: ['WS10'] },
    { slug: 'rushall', name: 'Rushall', postcodes: ['WS4'] },
    { slug: 'shelfield', name: 'Shelfield', postcodes: ['WS4'] },
    { slug: 'streetly', name: 'Streetly', postcodes: ['B74'] },
  ],
  
  // Dudley
  dudley: [
    { slug: 'dudley', name: 'Dudley', postcodes: ['DY1', 'DY2', 'DY3'] },
    { slug: 'stourbridge', name: 'Stourbridge', postcodes: ['DY8', 'DY9'] },
    { slug: 'halesowen', name: 'Halesowen', postcodes: ['B62', 'B63'] },
    { slug: 'brierley-hill', name: 'Brierley Hill', postcodes: ['DY5'] },
    { slug: 'sedgley', name: 'Sedgley', postcodes: ['DY3'] },
    { slug: 'coseley', name: 'Coseley', postcodes: ['WV14'] },
    { slug: 'kingswinford', name: 'Kingswinford', postcodes: ['DY6'] },
    { slug: 'netherton', name: 'Netherton', postcodes: ['DY2'] },
    { slug: 'gornal', name: 'Gornal', postcodes: ['DY3'] },
    { slug: 'amblecote', name: 'Amblecote', postcodes: ['DY8'] },
    { slug: 'lye', name: 'Lye', postcodes: ['DY9'] },
  ],
  
  // Wolverhampton
  wolverhampton: [
    { slug: 'wolverhampton', name: 'Wolverhampton', postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6'] },
    { slug: 'bilston', name: 'Bilston', postcodes: ['WV14'] },
    { slug: 'wednesfield', name: 'Wednesfield', postcodes: ['WV11'] },
    { slug: 'tettenhall', name: 'Tettenhall', postcodes: ['WV6'] },
    { slug: 'bushbury', name: 'Bushbury', postcodes: ['WV10'] },
    { slug: 'penn', name: 'Penn', postcodes: ['WV4'] },
    { slug: 'oxley', name: 'Oxley', postcodes: ['WV10'] },
  ],
  
  // Coventry
  coventry: [
    { slug: 'coventry', name: 'Coventry', postcodes: ['CV1', 'CV2', 'CV3', 'CV4', 'CV5', 'CV6'] },
    { slug: 'tile-hill', name: 'Tile Hill', postcodes: ['CV4'] },
    { slug: 'earlsdon', name: 'Earlsdon', postcodes: ['CV5'] },
    { slug: 'wyken', name: 'Wyken', postcodes: ['CV2'] },
    { slug: 'foleshill', name: 'Foleshill', postcodes: ['CV6'] },
    { slug: 'radford', name: 'Radford', postcodes: ['CV6'] },
    { slug: 'canley', name: 'Canley', postcodes: ['CV4'] },
    { slug: 'binley', name: 'Binley', postcodes: ['CV3'] },
    { slug: 'stoke', name: 'Stoke', postcodes: ['CV2', 'CV3'] },
    { slug: 'allesley', name: 'Allesley', postcodes: ['CV5'] },
  ],
  
  // Expansion Areas
  expansion: [
    { slug: 'sutton-coldfield', name: 'Sutton Coldfield', postcodes: ['B72', 'B73', 'B74', 'B75', 'B76'] },
    { slug: 'boldmere', name: 'Boldmere', postcodes: ['B73'] },
    { slug: 'wylde-green', name: 'Wylde Green', postcodes: ['B73'] },
    { slug: 'four-oaks', name: 'Four Oaks', postcodes: ['B74'] },
    { slug: 'redditch', name: 'Redditch', postcodes: ['B97', 'B98'] },
    { slug: 'bromsgrove', name: 'Bromsgrove', postcodes: ['B60', 'B61'] },
    { slug: 'tamworth', name: 'Tamworth', postcodes: ['B77', 'B78', 'B79'] },
    { slug: 'lichfield', name: 'Lichfield', postcodes: ['WS13', 'WS14'] },
    { slug: 'cannock', name: 'Cannock', postcodes: ['WS11', 'WS12'] },
    { slug: 'kidderminster', name: 'Kidderminster', postcodes: ['DY10', 'DY11'] },
  ],
};

// Template for legacy /areas page generation.
// The area page wording/headings live in components/areas/AreaPage.tsx so every
// generated area receives the same updated content structure with its own area name.
const generatePageContent = (slug, name, postcodes, county) => {
  return `import AreaPage from '@/components/areas/AreaPage';

export default function ${name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <AreaPage
      areaName="${name}"
      county="${county}"
      postcodes={${JSON.stringify(postcodes)}}
    />
  );
}
`;
};

// County mapping
const countyMap = {
  birmingham: 'Birmingham',
  solihull: 'Solihull',
  sandwell: 'Sandwell',
  walsall: 'Walsall',
  dudley: 'Dudley',
  wolverhampton: 'Wolverhampton',
  coventry: 'Coventry',
  expansion: 'West Midlands',
};

// Generate all pages
let totalCreated = 0;
const baseDir = path.join(__dirname, '..', 'app', 'areas');

// Ensure base directory exists
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

Object.keys(areas).forEach((region) => {
  const county = countyMap[region];
  
  areas[region].forEach((area) => {
    const areaDir = path.join(baseDir, area.slug);
    const pageFile = path.join(areaDir, 'page.tsx');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(areaDir)) {
      fs.mkdirSync(areaDir, { recursive: true });
    }
    
    // Generate and write page content
    const content = generatePageContent(area.slug, area.name, area.postcodes, county);
    fs.writeFileSync(pageFile, content, 'utf8');
    
    totalCreated++;
    console.log(`Created legacy page: /areas/${area.slug} -> /gutter-cleaning-${area.slug}/`);
  });
});

console.log(`\nSuccessfully created ${totalCreated} legacy area pages.`);
console.log('\nCanonical area URLs use:');
console.log('   yoursite.com/gutter-cleaning-[area-name]/');
console.log('\nShared page copy is controlled by components/areas/AreaPage.tsx and AreaFAQ.tsx.');
