const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Nauman Abdullah/.gemini/antigravity/brain/7b41d24c-1a19-4d46-bf9e-2b8b0dd20fd5/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('"step_index":674')) {
    const obj = JSON.parse(line);
    fs.writeFileSync('wolverhampton_prompt.txt', obj.content, 'utf8');
    console.log('Saved prompt length:', obj.content.length);
  }
});
