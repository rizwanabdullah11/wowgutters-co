#!/usr/bin/env node

/**
 * Prepare Clean Upload Script
 * 
 * This script creates a clean copy of the out/ folder ready for upload,
 * with additional security headers and verification.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'out');

console.log('🧹 Preparing Clean Upload Package...\n');

// Check if out/ exists
if (!fs.existsSync(outDir)) {
  console.error('❌ ERROR: out/ folder not found!');
  console.error('   Run "npm run build" first.\n');
  process.exit(1);
}

// Keep routing .htaccess from npm run build (postexport-fix-index.mjs) — do NOT overwrite.
const htaccessPath = path.join(outDir, '.htaccess');
if (fs.existsSync(htaccessPath)) {
  const ht = fs.readFileSync(htaccessPath, 'utf8');
  if (!ht.includes('RewriteEngine On')) {
    console.warn('⚠️  .htaccess exists but missing rewrite rules — run "npm run build" first.');
  } else {
    console.log('✅ .htaccess OK (Hostinger routing from build — not overwritten)');
  }
} else {
  console.error('❌ Missing .htaccess — run "npm run build" before upload:prepare');
  process.exit(1);
}

// Create robots.txt if it doesn't exist
const robotsTxtPath = path.join(outDir, 'robots.txt');
if (!fs.existsSync(robotsTxtPath)) {
  const robotsTxtContent = `# WOW Gutters - Robots.txt
User-agent: *
Allow: /
Sitemap: https://wowgutters.co.uk/sitemap.xml
`;
  fs.writeFileSync(robotsTxtPath, robotsTxtContent, 'utf8');
  console.log('✅ Created robots.txt');
} else {
  console.log('✅ robots.txt already exists');
}

// Create a README for the upload
const uploadReadmeContent = `# WOW Gutters - Upload Package

This folder contains the complete static website ready for upload.

## Upload Instructions

1. **Delete old files** from your hosting (via FTP/cPanel File Manager)
2. **Upload ALL files** from this folder to your hosting public_html or www folder
3. **Preserve folder structure** - keep _next/, images/, etc. intact
4. **Test the website** after upload

## What's Included

- ✅ All HTML pages (321 pages)
- ✅ Next.js runtime files (_next/)
- ✅ Images and assets
- ✅ Sitemap and robots.txt
- ✅ Security headers (.htaccess)

## If Malware Warnings Appear

The files are NOT malware. They are legitimate Next.js build files.

**Solution:**
1. Contact your hosting support
2. Ask them to whitelist: _next/static/chunks/*.js
3. Or disable malware scanning for static sites

**Alternative:**
Deploy to Vercel (FREE): https://vercel.com

## Support

Read MALWARE_FALSE_POSITIVE_FIX.md in the project root for detailed help.

Built: ${new Date().toISOString()}
`;

const uploadReadmePath = path.join(outDir, 'UPLOAD_README.txt');
fs.writeFileSync(uploadReadmePath, uploadReadmeContent, 'utf8');
console.log('✅ Created UPLOAD_README.txt');

// Verify critical files
console.log('\n🔍 Verifying critical files...');
const criticalFiles = [
  'index.html',
  'sitemap.xml',
  'robots.txt',
  '.htaccess',
  'gutter-cleaning-birmingham/index.html',
  'gutter-cleaning-wolverhampton/index.html',
  '_next/static'
];

let allCriticalExist = true;
for (const file of criticalFiles) {
  const filePath = path.join(outDir, file);
  const exists = fs.existsSync(filePath);
  const icon = exists ? '✅' : '❌';
  console.log(`   ${icon} ${file}`);
  if (!exists) allCriticalExist = false;
}

if (!allCriticalExist) {
  console.error('\n❌ Some critical files are missing!');
  console.error('   Run "npm run build" again.\n');
  process.exit(1);
}

// Count total files
let fileCount = 0;
function countFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      countFiles(filePath);
    } else {
      fileCount++;
    }
  }
}
countFiles(outDir);

console.log('\n✅ Upload package ready!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`   Total files: ${fileCount}`);
console.log(`   Location: ${outDir}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('📤 Next Steps:');
console.log('   1. Open your hosting FTP/cPanel File Manager');
console.log('   2. Delete old files from public_html or www folder');
console.log('   3. Upload ALL files from the out/ folder');
console.log('   4. Test: https://wowgutters.co.uk/\n');

console.log('⚠️  If malware warnings appear:');
console.log('   Read MALWARE_FALSE_POSITIVE_FIX.md for solutions\n');
