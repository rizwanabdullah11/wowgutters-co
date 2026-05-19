#!/usr/bin/env node

/**
 * Verify Upload Files Script
 * 
 * This script checks the out/ folder and shows what should be uploaded
 * to avoid malware false positives.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'out');

console.log('🔍 Verifying Upload Files...\n');

// Check if out/ exists
if (!fs.existsSync(outDir)) {
  console.error('❌ ERROR: out/ folder not found!');
  console.error('   Run "npm run build" first.\n');
  process.exit(1);
}

// Count files by type
const stats = {
  html: 0,
  js: 0,
  css: 0,
  images: 0,
  xml: 0,
  txt: 0,
  other: 0,
  total: 0
};

function countFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      countFiles(filePath);
    } else {
      stats.total++;
      const ext = path.extname(file).toLowerCase();
      
      if (ext === '.html') stats.html++;
      else if (ext === '.js') stats.js++;
      else if (ext === '.css') stats.css++;
      else if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.ico'].includes(ext)) stats.images++;
      else if (ext === '.xml') stats.xml++;
      else if (ext === '.txt') stats.txt++;
      else stats.other++;
    }
  }
}

countFiles(outDir);

console.log('📊 File Statistics:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`   HTML files:       ${stats.html.toString().padStart(4)}`);
console.log(`   JavaScript files: ${stats.js.toString().padStart(4)}`);
console.log(`   CSS files:        ${stats.css.toString().padStart(4)}`);
console.log(`   Images:           ${stats.images.toString().padStart(4)}`);
console.log(`   XML files:        ${stats.xml.toString().padStart(4)}`);
console.log(`   Text files:       ${stats.txt.toString().padStart(4)}`);
console.log(`   Other files:      ${stats.other.toString().padStart(4)}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`   TOTAL:            ${stats.total.toString().padStart(4)}`);
console.log('');

// Check for suspicious patterns that might trigger false positives
console.log('🔍 Checking for patterns that trigger false positives...\n');

const suspiciousPatterns = [
  { pattern: /_next\/static\/chunks\/.*\.js$/, name: 'Next.js chunks (minified)' },
  { pattern: /\.min\.js$/, name: 'Minified JavaScript' },
  { pattern: /_next\/static\/.*\.js$/, name: 'Next.js static files' }
];

let foundSuspicious = false;

function checkSuspiciousFiles(dir, relativePath = '') {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const relPath = path.join(relativePath, file).replace(/\\/g, '/');
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      checkSuspiciousFiles(filePath, relPath);
    } else {
      for (const { pattern, name } of suspiciousPatterns) {
        if (pattern.test(relPath)) {
          if (!foundSuspicious) {
            console.log('⚠️  Found files that may trigger false positives:');
            foundSuspicious = true;
          }
          console.log(`   ${name}: ${relPath}`);
          break;
        }
      }
    }
  }
}

checkSuspiciousFiles(outDir);

if (foundSuspicious) {
  console.log('\n⚠️  These files are LEGITIMATE but may trigger malware scanners.');
  console.log('   They are minified JavaScript from Next.js framework.\n');
} else {
  console.log('✅ No suspicious patterns found.\n');
}

// Show what should be uploaded
console.log('📤 Upload Instructions:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('   1. Upload ONLY the contents of the out/ folder');
console.log('   2. DO NOT upload: .next/, node_modules/, app/, components/');
console.log('   3. Upload to your hosting public_html or www folder');
console.log('   4. If malware warnings appear, contact hosting support');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check for required files
console.log('✅ Required Files Check:');
const requiredFiles = [
  'index.html',
  'sitemap.xml',
  'robots.txt',
  '_next/static'
];

for (const file of requiredFiles) {
  const filePath = path.join(outDir, file);
  const exists = fs.existsSync(filePath);
  const icon = exists ? '✅' : '❌';
  console.log(`   ${icon} ${file}`);
}

console.log('\n✅ Verification complete!\n');
console.log('📖 Read MALWARE_FALSE_POSITIVE_FIX.md for detailed instructions.\n');
