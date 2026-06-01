import fs from "node:fs";
import path from "node:path";
import { generateHostingerHtaccess } from "./hostinger-htaccess.mjs";

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, "out");

if (!fs.existsSync(outDir)) {
  console.error(`postexport: missing ${outDir}`);
  process.exit(1);
}

function listHtmlFiles(dir) {
  /** @type {string[]} */
  const results = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results.push(...listHtmlFiles(full));
    } else if (ent.isFile() && ent.name.toLowerCase().endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function fixHtmlForFileProtocol(htmlPath) {
  const relFromOut = path.relative(outDir, htmlPath).replaceAll("\\", "/");
  const depth = relFromOut.split("/").length - 1; // number of parent folders
  const prefix = depth === 0 ? "." : "../".repeat(depth).replace(/\/$/, "");

  let html = fs.readFileSync(htmlPath, "utf8");

  // Rewrite only href/src that start with "/" (site-root absolute paths).
  // This makes exported pages work when opened via file:// (no server).
  //
  // Examples:
  // - out/index.html:  "/_next/..." -> "./_next/..."
  // - out/about/index.html: "/_next/..." -> "../_next/..."
  const rewrite = (match, attr, url) => {
    // Leave protocol URLs, hash links, and double-slash URLs alone.
    if (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:") ||
      url.startsWith("#") ||
      url.startsWith("//")
    ) {
      return match;
    }
    if (!url.startsWith("/")) return match;
    return `${attr}="${prefix}${url}"`;
  };

  html = html.replace(/(href|src)="([^"]+)"/g, rewrite);

  try {
    fs.writeFileSync(htmlPath, html, "utf8");
  } catch (err) {
    // On Windows, antivirus/indexers can momentarily lock files.
    // A short retry makes the build robust.
    if (err && (err.code === "EBUSY" || err.code === "EPERM")) {
      for (let i = 0; i < 5; i++) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 150);
        try {
          fs.writeFileSync(htmlPath, html, "utf8");
          return;
        } catch (retryErr) {
          if (i === 4) throw retryErr;
        }
      }
      return;
    }
    throw err;
  }
}

/** @returns {string[]} */
function loadAreaSlugsFromLib() {
  const p = path.join(projectRoot, "lib", "areaSlugs.ts");
  const t = fs.readFileSync(p, "utf8");
  const slugs = [];
  for (const line of t.split("\n")) {
    const m = line.match(/^\s*'([^']+)',?\s*$/);
    if (m) slugs.push(m[1]);
  }
  return slugs;
}

/** Cities with their own app/gutter-cleaning-{slug}/ route — never overwrite from /gutter-cleaning/{slug}/. */
const DEDICATED_GUTTER_CITY_SLUGS = new Set(["birmingham", "wolverhampton"]);

/** Duplicate /gutter-cleaning/{slug}/ → /gutter-cleaning-{slug}/ when no dedicated page exists. */
function copyGutterCleaningSeoAliases() {
  const slugs = loadAreaSlugsFromLib();
  let n = 0;
  for (const slug of slugs) {
    if (DEDICATED_GUTTER_CITY_SLUGS.has(slug)) {
      continue;
    }
    const src = path.join(outDir, "gutter-cleaning", slug, "index.html");
    const dstDir = path.join(outDir, `gutter-cleaning-${slug}`);
    const dst = path.join(dstDir, "index.html");
    if (!fs.existsSync(src)) {
      console.warn(`postexport: skip copy, missing ${src}`);
      continue;
    }
    if (fs.existsSync(dst)) {
      const preview = fs.readFileSync(src, "utf8").slice(0, 200);
      if (preview.includes("NEXT_REDIRECT")) {
        console.warn(`postexport: skip copy, source is a redirect ${src}`);
        continue;
      }
      console.warn(`postexport: skip copy, destination already exists ${dst}`);
      continue;
    }
    fs.mkdirSync(dstDir, { recursive: true });
    fs.copyFileSync(src, dst);
    n++;
  }
  console.log(`postexport: copied ${n} gutter-cleaning SEO alias pages`);
}

copyGutterCleaningSeoAliases();

const htmlFiles = listHtmlFiles(outDir);
for (const file of htmlFiles) fixHtmlForFileProtocol(file);

// Hostinger: full Apache rules for static export (upload entire out/ to public_html)
const htaccessPath = path.join(outDir, ".htaccess");
try {
  fs.writeFileSync(htaccessPath, generateHostingerHtaccess(), "utf8");
  console.log("postexport: wrote Hostinger .htaccess");
} catch (err) {
  console.warn("postexport: failed to write .htaccess", err);
}

console.log(`postexport: fixed asset paths in ${htmlFiles.length} HTML files`);

