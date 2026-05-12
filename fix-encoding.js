const fs = require('fs');

// Read the file
const filePath = 'constants/blogData.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all encoding issues
content = content.replace(/â€"/g, '—');  // em dash
content = content.replace(/ðŸ"ž/g, '📞');  // phone emoji
content = content.replace(/ðŸ"§/g, '📧');  // email emoji
content = content.replace(/🌐/g, '🌐');  // globe emoji (if needed)

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ All encoding issues fixed!');
console.log('Fixed:');
console.log('  - â€" → —');
console.log('  - ðŸ"ž → 📞');
console.log('  - ðŸ"§ → 📧');
