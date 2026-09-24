import fs from 'fs';

const keywordFile = 'lib/keywordPages.ts';
let content = fs.readFileSync(keywordFile, 'utf8');

const newKeywords = JSON.parse(fs.readFileSync('scratch/cleanedKeywords.json', 'utf8'));

// Find RAW_KEYWORDS array in file
const match = content.match(/const RAW_KEYWORDS\s*=\s*\[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not find RAW_KEYWORDS array');
  process.exit(1);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[,.'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Parse existing keywords
const existingRaw = match[1];
const existingList = existingRaw
  .split('\n')
  .map(l => l.trim().replace(/^['"]|['"],?$/g, '').trim())
  .filter(Boolean);

const seenSlugs = new Set();
const finalKeywords = [];

for (const kw of existingList) {
  const s = slugify(kw);
  if (!seenSlugs.has(s) && s.length > 0) {
    seenSlugs.add(s);
    finalKeywords.push(kw);
  }
}

let addedCount = 0;
for (const kw of newKeywords) {
  const s = slugify(kw);
  if (!seenSlugs.has(s) && s.length > 0) {
    seenSlugs.add(s);
    finalKeywords.push(kw);
    addedCount++;
  }
}

console.log(`Original keywords: ${existingList.length}, Added: ${addedCount}, Total now: ${finalKeywords.length}`);

const newArrayStr = `const RAW_KEYWORDS = [\n${finalKeywords.map(k => `  '${k.replace(/'/g, "\\'")}',`).join('\n')}\n];`;
content = content.replace(/const RAW_KEYWORDS\s*=\s*\[[\s\S]*?\];/, newArrayStr);

fs.writeFileSync(keywordFile, content, 'utf8');
console.log('Successfully updated lib/keywordPages.ts');
