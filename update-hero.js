const fs = require('fs');
const filePath = 'constants/blogData.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Find and update the Wolverhampton entry
const updated = content.replace(
  /image: '\/wolverhampton-gutter-cleaning-before\.jpeg',/,
  "image: '/wolverhamtpon-gutter-cleaning-hero-section.png',"
);

fs.writeFileSync(filePath, updated, 'utf8');
console.log('✅ Updated hero image for Wolverhampton blog post');
