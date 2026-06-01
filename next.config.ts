import type { NextConfig } from "next";

/**
 * Hostinger static hosting (public_html)
 * ─────────────────────────────────────
 * 1. Run: npm run build
 * 2. Upload the entire `out/` folder to Hostinger public_html (not the repo root)
 * 3. Do NOT enable Node.js app hosting — this is a static HTML export only
 *
 * `output: "export"` replaces the old `next export` command (Next.js 13+).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
