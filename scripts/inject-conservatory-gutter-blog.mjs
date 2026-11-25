import fs from 'fs';

const filePath = 'constants/blogData.tsx';
let c = fs.readFileSync(filePath, 'utf8');

const importLine = "import { cleaningGuttersAboveConservatoryBlogPost } from './cleaningGuttersAboveConservatoryBlog';\r\n";
if (!c.includes('cleaningGuttersAboveConservatoryBlogPost')) {
  c = importLine + c;
  console.log('Import added.');
} else {
  console.log('Import already present.');
}

const arrayTarget      = 'export const blogPosts: BlogPost[] = [\r\n  gutterGuardsBirminghamBlogPost,';
const arrayReplacement = 'export const blogPosts: BlogPost[] = [\r\n  cleaningGuttersAboveConservatoryBlogPost,\r\n  gutterGuardsBirminghamBlogPost,';

if (c.includes('cleaningGuttersAboveConservatoryBlogPost,\r\n  gutterGuardsBirminghamBlogPost')) {
  console.log('Array entry already present.');
} else if (c.includes(arrayTarget)) {
  c = c.replace(arrayTarget, arrayReplacement);
  console.log('Array entry inserted at position 0.');
} else {
  console.error('ERROR: Could not find array insertion target.');
  process.exit(1);
}

fs.writeFileSync(filePath, c);
console.log('blogData.tsx updated successfully.');
