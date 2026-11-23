import fs from 'fs';

const filePath = 'constants/blogData.tsx';
let c = fs.readFileSync(filePath, 'utf8');

const importLine = "import { gutterCleaning2027AnnualPlanBlogPost } from './gutterCleaning2027AnnualPlanBlog';\r\n";
if (!c.includes('gutterCleaning2027AnnualPlanBlogPost')) {
  c = importLine + c;
  console.log('Import added.');
} else {
  console.log('Import already present.');
}

const arrayTarget      = 'export const blogPosts: BlogPost[] = [\r\n  neverCleanGuttersDamageBlogPost,';
const arrayReplacement = 'export const blogPosts: BlogPost[] = [\r\n  gutterCleaning2027AnnualPlanBlogPost,\r\n  neverCleanGuttersDamageBlogPost,';

if (c.includes('gutterCleaning2027AnnualPlanBlogPost,\r\n  neverCleanGuttersDamageBlogPost')) {
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
