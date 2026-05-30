import fs from 'fs';

const raw = fs.readFileSync('C:/Users/Nauman Abdullah/.local/share/opencode/tool-output/tool_e7814422b001RDxD7ncwNgsywN', 'utf8');

// Find the ```typescript block start
const start = raw.indexOf('```typescript');
if (start === -1) { console.error('Could not find block'); process.exit(1); }

// Extract everything after it
let block = raw.slice(start + 12).trim();

// Remove the closing ``` if present (it may be truncated)
if (block.endsWith('```')) {
  block = block.slice(0, -3).trim();
}

// The block should end with '  },' or '  }' for the last entry
// Remove trailing XML/task wrapper content
const lastValidEnd = block.lastIndexOf("  'world-s-end':");
if (lastValidEnd > 0) {
  // Find the end of the world-s-end entry
  const worldSEnd = block.indexOf("  },", lastValidEnd);
  if (worldSEnd > 0) {
    block = block.slice(0, worldSEnd + 4).trimEnd();
  }
}

// Add comma separator
if (!block.endsWith(',')) {
  block += ',';
}

// Read the data file
let dataFile = fs.readFileSync('C:/Users/Nauman Abdullah/Desktop/wowgutters-co/lib/suburbPageData.ts', 'utf8');

// Replace the final } with new entries + }
dataFile = dataFile.trimEnd();
if (dataFile.endsWith('};')) {
  dataFile = dataFile.slice(0, -2).trimEnd();
  dataFile += '\n\n' + block + '\n};\n';
  fs.writeFileSync('C:/Users/Nauman Abdullah/Desktop/wowgutters-co/lib/suburbPageData.ts', dataFile, 'utf8');
  console.log('Done - appended agent 2 entries');
} else if (dataFile.endsWith('}')) {
  dataFile = dataFile.slice(0, -1).trimEnd();
  dataFile += '\n\n' + block + '\n};\n';
  fs.writeFileSync('C:/Users/Nauman Abdullah/Desktop/wowgutters-co/lib/suburbPageData.ts', dataFile, 'utf8');
  console.log('Done - appended agent 2 entries');
} else {
  console.error('File has unexpected ending');
  console.error('Last 20 chars:', JSON.stringify(dataFile.slice(-20)));
}
