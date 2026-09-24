import fs from 'fs';

const filePath = 'lib/keywordPages.ts';
let code = fs.readFileSync(filePath, 'utf8');

// Find RAW_KEYWORDS
const match = code.match(/const RAW_KEYWORDS\s*=\s*\[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not find RAW_KEYWORDS');
  process.exit(1);
}

const rawSection = match[1];
const lines = rawSection.split('\n');
const cleanedKeywords = [];
const seen = new Set();

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[,.'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

for (const line of lines) {
  let cleaned = line.trim();
  if (!cleaned) continue;
  // Strip surrounding quotes and trailing comma
  cleaned = cleaned.replace(/^['"]/, '').replace(/['"],?$/, '');
  // Unescape any escaped characters
  cleaned = cleaned.replace(/\\'/g, "'").replace(/\\\\/g, '').replace(/\\/g, '');
  const s = slugify(cleaned);
  if (s && !seen.has(s)) {
    seen.add(s);
    cleanedKeywords.push(cleaned);
  }
}

console.log('Cleaned total keywords in array:', cleanedKeywords.length);

// Format safely using JSON.stringify for each item to avoid quote issues
const newArrayStr = `const RAW_KEYWORDS = [\n${cleanedKeywords.map(k => `  ${JSON.stringify(k)},`).join('\n')}\n];`;
code = code.replace(/const RAW_KEYWORDS\s*=\s*\[[\s\S]*?\];/, newArrayStr);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully cleaned RAW_KEYWORDS in lib/keywordPages.ts');
