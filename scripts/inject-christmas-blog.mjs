import fs from 'fs';

const filePath = 'constants/blogData.tsx';
let c = fs.readFileSync(filePath, 'utf8');

// 1. Add import at the top (before existing first import)
const importLine = "import { guttersBeforeChristmasBlogPost } from './guttersBeforeChristmasBlog';\r\n";
if (!c.includes("guttersBeforeChristmasBlogPost")) {
  c = importLine + c;
  console.log('Import added.');
} else {
  console.log('Import already present.');
}

// 2. Insert at position 0 in blogPosts array
const arrayTarget = 'export const blogPosts: BlogPost[] = [\r\n  gutterCleaning2027PlanningGuideBlogPost,';
const arrayReplacement = 'export const blogPosts: BlogPost[] = [\r\n  guttersBeforeChristmasBlogPost,\r\n  gutterCleaning2027PlanningGuideBlogPost,';

if (c.includes('guttersBeforeChristmasBlogPost,\r\n  gutterCleaning2027PlanningGuideBlogPost')) {
  console.log('Array entry already present.');
} else if (c.includes(arrayTarget)) {
  c = c.replace(arrayTarget, arrayReplacement);
  console.log('Array entry inserted at position 0.');
} else {
  console.error('ERROR: Could not find array insertion target. Check line endings.');
  process.exit(1);
}

fs.writeFileSync(filePath, c);
console.log('blogData.tsx updated successfully.');
