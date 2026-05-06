import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, "out");
const homepage = path.join(outDir, "index.html");

if (!fs.existsSync(outDir)) {
  console.error(`assert-jsonld: missing export folder: ${outDir}`);
  process.exit(1);
}

if (!fs.existsSync(homepage)) {
  console.error(`assert-jsonld: missing homepage HTML: ${homepage}`);
  process.exit(1);
}

const html = fs.readFileSync(homepage, "utf8");

const hasLdJson = html.includes('type="application/ld+json"');
const hasLocalBusiness =
  html.includes('"@type":"LocalBusiness"') || 
  html.includes('"@type": "LocalBusiness"') ||
  html.includes('"@type":"HomeAndConstructionBusiness"') || 
  html.includes('"@type": "HomeAndConstructionBusiness"');

if (!hasLdJson || !hasLocalBusiness) {
  console.error("assert-jsonld: FAILED — homepage export is missing JSON-LD business schema.");
  console.error({ hasLdJson, hasLocalBusiness });
  process.exit(1);
}

console.log("assert-jsonld: OK — Business JSON-LD detected in out/index.html");
