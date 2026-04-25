import fs from "node:fs";
import path from "node:path";

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

/** Duplicate /gutter-cleaning/{slug}/ → /gutter-cleaning-{slug}/ for SEO URLs (before path fixing). */
function copyGutterCleaningSeoAliases() {
  const slugs = loadAreaSlugsFromLib();
  let n = 0;
  for (const slug of slugs) {
    const src = path.join(outDir, "gutter-cleaning", slug, "index.html");
    const dstDir = path.join(outDir, `gutter-cleaning-${slug}`);
    const dst = path.join(dstDir, "index.html");
    if (!fs.existsSync(src)) {
      console.warn(`postexport: skip copy, missing ${src}`);
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

// Hostinger/Apache helper: allow /about (no slash) and /about/ to work.
// Put this file in Hostinger `public_html/` together with the export.
const htaccessPath = path.join(outDir, ".htaccess");
const htaccess = `Options -MultiViews
DirectoryIndex index.html

# Ensure correct MIME types for static export assets
AddType application/javascript .js
AddType text/css .css
AddType application/json .json
AddType image/svg+xml .svg
AddType font/woff2 .woff2
AddType font/woff .woff
AddType application/vnd.ms-fontobject .eot
AddType font/ttf .ttf
AddType font/otf .otf

AddDefaultCharset UTF-8

RewriteEngine On

# SEO: legacy PascalCase URLs → lowercase (bookmarks / old links)
RewriteRule ^About/?$ about/ [R=301,L]
RewriteRule ^Contact/?$ contact/ [R=301,L]
RewriteRule ^Quote/?$ quote/ [R=301,L]
RewriteRule ^Services/?$ services/ [R=301,L]
RewriteRule ^Blog/?$ blog/ [R=301,L]
RewriteRule ^Commercial/?$ commercial/ [R=301,L]
RewriteRule ^ConservatoryCleaning/?$ conservatory-cleaning/ [R=301,L]
RewriteRule ^GuttersCleaning/?$ gutters-cleaning/ [R=301,L]
RewriteRule ^HotWash/?$ hot-wash/ [R=301,L]
RewriteRule ^HomeScreen/?$ / [R=301,L]
RewriteRule ^Pricing/?$ pricing/ [R=301,L]
RewriteRule ^Testimonials/?$ testimonials/ [R=301,L]
RewriteRule ^WindowsCleaning/?$ windows-cleaning/ [R=301,L]
RewriteRule ^Dashboard/?$ dashboard/ [R=301,L]
RewriteRule ^Navbar/?$ / [R=301,L]
RewriteRule ^navbar/?$ / [R=301,L]
RewriteRule ^home-screen/?$ / [R=301,L]

# Legacy /areas/{city}/ → canonical /gutter-cleaning-{city}/
RewriteRule ^areas/([a-zA-Z0-9-]+)/?$ gutter-cleaning-$1/ [R=301,L]

# Never rewrite Next.js client bundles — must load as real files with correct MIME type
RewriteCond %{REQUEST_URI} /_next/
RewriteRule ^ - [L]

# Serve existing files/dirs as-is
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Add trailing slash for "pretty" routes (no dot-extension)
RewriteCond %{REQUEST_URI} !/$
RewriteCond %{REQUEST_URI} !\\.[^./]+$
RewriteRule ^(.+)$ $1/ [R=301,L]

# Map /path/ to /path/index.html
RewriteCond %{REQUEST_URI} /$
RewriteRule ^(.+)/$ $1/index.html [L]
`;

try {
  fs.writeFileSync(htaccessPath, htaccess, "utf8");
} catch (err) {
  console.warn("postexport: failed to write .htaccess", err);
}

console.log(`postexport: fixed asset paths in ${htmlFiles.length} HTML files`);

