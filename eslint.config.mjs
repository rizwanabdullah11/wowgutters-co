import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Static-export runtime scripts (vanilla JS, not part of TS/React build)
    "public/**/*.js",
  ]),
  {
    rules: {
      // This site uses lots of natural-language apostrophes/quotes in JSX copy.
      // The escaping rule is noisy and blocks linting.
      "react/no-unescaped-entities": "off",
      // Content/data modules sometimes intentionally use `any` for flexibility.
      "@typescript-eslint/no-explicit-any": "off",
      // Static export relies on plain <script> tags in <head>.
      "@next/next/no-sync-scripts": "off",
      // Some routes intentionally use plain anchors in static-export context.
      "@next/next/no-html-link-for-pages": "off",
      // This codebase uses a mount-flag pattern in a few places; keep lint unblocked.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
