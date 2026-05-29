const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'constants', 'cityGutterLandingData.ts');
let text = fs.readFileSync(file, 'utf8');
const before = {
  u201c: (text.match(/\u201c/g) || []).length,
  u201d: (text.match(/\u201d/g) || []).length,
  u2018: (text.match(/\u2018/g) || []).length,
  u2019: (text.match(/\u2019/g) || []).length,
};
text = text
  .replace(/\u201c/g, '\\u201C')
  .replace(/\u201d/g, '\\u201D')
  .replace(/\u2018/g, '\\u2018')
  .replace(/\u2019/g, '\\u2019');
fs.writeFileSync(file, text, 'utf8');
const after = {
  u201c: (text.match(/\\u201C/g) || []).length,
  u201d: (text.match(/\\u201D/g) || []).length,
  u2018: (text.match(/\\u2018/g) || []).length,
  u2019: (text.match(/\\u2019/g) || []).length,
};
console.log('before', before, 'after', after);
