import fs from 'fs';

const filePath = 'constants/blogData.tsx';
let c = fs.readFileSync(filePath, 'utf8');

const importLine = "import { neverCleanGuttersDamageBlogPost } from './neverCleanGuttersDamageBlog';\r\n";
if (!c.includes('neverCleanGuttersDamageBlogPost')) {
  c = importLine + c;
  console.log('Import added.');
} else {
  console.log('Import already present.');
}

const arrayTarget      = 'export const blogPosts: BlogPost[] = [\r\n  guttersBeforeChristmasBlogPost,';
const arrayReplacement = 'export const blogPosts: BlogPost[] = [\r\n  neverCleanGuttersDamageBlogPost,\r\n  guttersBeforeChristmasBlogPost,';

if (c.includes('neverCleanGuttersDamageBlogPost,\r\n  guttersBeforeChristmasBlogPost')) {
  console.log('Array entry already present.');
} else if (c.includes(arrayTarget)) {
  c = c.replace(arrayTarget, arrayReplacement);
  console.log('Array entry inserted at position 0.');
} else {
  console.error('ERROR: Could not find insertion target.');
  process.exit(1);
}

fs.writeFileSync(filePath, c);
console.log('blogData.tsx updated successfully.');
