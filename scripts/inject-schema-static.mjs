/**
 * Post-export script: extract JSON-LD from the RSC payload and inject it
 * as a static <script type="application/ld+json"> tag in each page's HTML.
 *
 * Next.js 16 static export delivers server component output through the RSC
 * stream (self.__next_f.push), which requires client-side React hydration
 * before JSON-LD appears in the DOM. This script extracts the already-built
 * JSON-LD from the RSC data and places it directly in the <head> as static
 * HTML — no JavaScript execution needed for Google to see it.
 */

import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, "out");

if (!fs.existsSync(outDir)) {
  console.error(`inject-schema: missing ${outDir}`);
  process.exit(1);
}

/** Recursively collect all HTML files */
function listHtmlFiles(dir) {
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

/** Unescape a JS-string-literal body to its actual string value */
function unescapeJsString(str) {
  return str
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    );
}

/**
 * Extract per-page JSON-LD from the RSC payload.
 *
 * The RSC payload contains the per-page schema (LocalBusiness + HowTo)
 * as a JSON string inside self.__next_f.push. It always starts with:
 *   {"@context":"https://schema.org","@graph":[...]}
 *
 * The push format is:
 *   <script>self.__next_f.push([1,"<CONTENT>"])</script>
 * where <CONTENT> may have JS-string-escaped quotes (\") and
 * Unicode escapes (\uXXXX).
 */
function extractJsonLdFromRsc(html) {
  const marker = '<script>self.__next_f.push([1,"';

  // Split by the push opening marker, skip the first segment (before
  // any push)
  const segments = html.split(marker);
  for (let i = 1; i < segments.length; i++) {
    const segment = segments[i];
    const endIdx = segment.indexOf('"])</script>');
    if (endIdx === -1) continue;

    // Extract the content between [1," and "])
    const content = segment.substring(0, endIdx);

    // Look for the per-page schema: starts with the JSON-LD @graph
    // pattern. The content is JS-string-escaped, so we compare
    // against the escaped version.
    if (
      content.includes('\\"@graph\\"') ||
      content.includes('"@graph"')
    ) {
      return content;
    }
  }

  return null;
}

/** Inject a static JSON-LD script tag into the HTML head */
function injectSchema(htmlPath) {
  let html = fs.readFileSync(htmlPath, "utf8");

  // Don't re-inject if already present
  if (html.includes('id="schema-static"')) return false;

  const rawJsonLd = extractJsonLdFromRsc(html);
  if (!rawJsonLd) return false;

  // Unescape the JS string to get valid JSON
  let jsonStr = unescapeJsString(rawJsonLd);

  // Validate it's well-formed JSON and actually schema.org markup
  try {
    JSON.parse(jsonStr);
  } catch {
    console.warn(
      `inject-schema: invalid JSON after unescape in ${htmlPath}, skipping`
    );
    return false;
  }

  if (!jsonStr.includes('"@graph"')) return false;

  // Normalise: strip any trailing newline or whitespace
  jsonStr = jsonStr.trim();

  const scriptTag =
    `<script id="schema-static" type="application/ld+json">${jsonStr}</script>`;

  // Inject before </head>
  if (html.includes("</head>")) {
    html = html.replace("</head>", `${scriptTag}\n</head>`);
  } else if (html.includes("</body>")) {
    html = html.replace("</body>", `${scriptTag}\n</body>`);
  } else {
    html = scriptTag + "\n" + html;
  }

  fs.writeFileSync(htmlPath, html, "utf8");
  return true;
}

// Only run on suburb gutter-cleaning pages
const htmlFiles = listHtmlFiles(outDir);
let injected = 0;

for (const file of htmlFiles) {
  const rel = path.relative(outDir, file).replace(/\\/g, "/");
  if (
    rel.startsWith("gutter-cleaning-") ||
    rel.startsWith("gutter-cleaning/")
  ) {
    if (injectSchema(file)) {
      injected++;
    }
  }
}

console.log(
  `inject-schema: injected static JSON-LD into ${injected} HTML files`
);
