import fs from 'fs';

const filePath = 'lib/keywordPages.ts';
let code = fs.readFileSync(filePath, 'utf8');

// Find and replace the end of getContent
code = code.replace(
  /if\s*\(\s*slug\.includes\('pressure-washing'\)[\s\S]*?return generateSmartContent\(keyword, slug\);[\s\S]*?\n\}/,
  'return generateSmartContent(keyword, slug);\n}'
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Fixed end of getContent');
