/**
 * One-off: normalize in-repo URL paths to lowercase (matches renamed app/ folders).
 * Uses regex so @/components/QuoteModal is NOT corrupted.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const SKIP = new Set(["node_modules", ".next", "out", ".git"]);

/** @param {string} dir @param {string[]} acc */
function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts|mjs|js|json|css|html)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

/**
 * Replace /Segment when it is a URL path (next char is delimiter or end).
 * Avoids matching /Quote inside .../QuoteModal.
 */
function seg(name) {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`/${esc}(?=["'\\/\\s\\)\\],]|$)`, "g");
}

const SEGMENTS = [
  "Quote",
  "Services",
  "About",
  "Contact",
  "Commercial",
  "ConservatoryCleaning",
  "GuttersCleaning",
  "HotWash",
  "HomeScreen",
  "Pricing",
  "Testimonials",
  "WindowsCleaning",
  "Dashboard",
  "Navbar",
  "Blog",
];

function transform(content) {
  let s = content;
  // Longest paths first
  s = s.replace(/\/Quote\/embed/g, "/quote/embed");
  s = s.replace(/https:\/\/wowgutters\.co\.uk\/Quote\b/g, "https://wowgutters.co.uk/quote");
  s = s.replace(/https:\/\/wowgutters\.co\.uk\/Services/g, "https://wowgutters.co.uk/services");
  s = s.replace(/https:\/\/wowgutters\.co\.uk\/About\b/g, "https://wowgutters.co.uk/about");
  s = s.replace(/https:\/\/wowgutters\.co\.uk\/Contact\b/g, "https://wowgutters.co.uk/contact");
  for (const name of SEGMENTS) {
    const lower =
      name === "ConservatoryCleaning"
        ? "conservatory-cleaning"
        : name === "GuttersCleaning"
          ? "gutters-cleaning"
          : name === "HotWash"
            ? "hot-wash"
            : name === "HomeScreen"
              ? "home-screen"
            : name === "WindowsCleaning"
              ? "windows-cleaning"
            : name.toLowerCase();
    s = s.replace(seg(name), `/${lower}`);
  }
  // Imports / app folder refs (no leading slash ambiguity)
  s = s.replace(/from ['"]\.\/HomeScreen\//g, `from './home-screen/`);
  s = s.replace(/from ['"]\.\/Navbar\//g, `from './navbar/`);
  s = s.replace(/app\/HomeScreen\b/g, "app/home-screen");
  return s;
}

const files = walk(root);
let n = 0;
for (const file of files) {
  if (file.includes(`${path.sep}scripts${path.sep}apply-lowercase-routes.mjs`)) continue;
  const raw = fs.readFileSync(file, "utf8");
  const next = transform(raw);
  if (next !== raw) {
    fs.writeFileSync(file, next, "utf8");
    n++;
  }
}
console.log(`apply-lowercase-routes: updated ${n} files`);
