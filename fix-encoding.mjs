import { readFileSync, writeFileSync } from 'fs';

const file = './constants/cityGutterLandingData.ts';
let content = readFileSync(file, 'utf8');

// The problem: "" inside double-quoted strings breaks TypeScript
// These "" are corrupted em dashes. Replace them with a plain hyphen " - "
// which is safe in all string contexts and looks clean on screen.

// Replace "" that appears inside double-quoted template strings
content = content.replaceAll('""', ' - ');

// Also fix any remaining mojibake that wasn't caught before
// (these appear as multi-byte sequences read as latin1)
content = content.replaceAll('\u00e2\u0080\u0094', ' - ');
content = content.replaceAll('\u00e2\u0080\u0093', ' - ');
content = content.replaceAll('\u00e2\u0080\u0099', "'");
content = content.replaceAll('\u00e2\u0080\u0098', "'");
content = content.replaceAll('\u00c2\u00a3', '\u00a3');

// Remove pricing from FAQ answers - replace with generic quote CTA
const pricingPatterns = [
  /answer:\s*'Prices start from[^']+'/g,
  /answer:\s*'Typical prices start from[^']+'/g,
  /answer:\s*'Most semis are[^']+'/g,
  /answer:\s*'What does a gutter clean cost[^']+'/g,
];

const replacement = "answer: 'WOW Gutters provides fixed quotes for all properties. Get yours online at wowgutters.co.uk or call 07421 433910. No hidden fees.'";

for (const pattern of pricingPatterns) {
  content = content.replace(pattern, replacement);
}

writeFileSync(file, content, 'utf8');
console.log('Done');
