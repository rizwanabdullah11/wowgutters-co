import fs from 'fs';

const filePath = 'constants/blogData.tsx';
let c = fs.readFileSync(filePath, 'utf8');

const importLine = "import { castIronVsUpvcGutterCleaningBlogPost } from './castIronVsUpvcGutterCleaningBlog';\r\n";
if (!c.includes('castIronVsUpvcGutterCleaningBlogPost')) {
  c = importLine + c;
  console.log('Import added.');
} else {
  console.log('Import already present.');
}

const arrayTarget      = 'export const blogPosts: BlogPost[] = [\r\n  cleaningGuttersAboveConservatoryBlogPost,';
const arrayReplacement = 'export const blogPosts: BlogPost[] = [\r\n  castIronVsUpvcGutterCleaningBlogPost,\r\n  cleaningGuttersAboveConservatoryBlogPost,';

if (c.includes('castIronVsUpvcGutterCleaningBlogPost,\r\n  cleaningGuttersAboveConservatoryBlogPost')) {
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
