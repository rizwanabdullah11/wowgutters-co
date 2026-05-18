import { MetadataRoute } from 'next'

/**
 * Auto-generated robots.txt at build time
 * Replaces static public/robots.txt
 * 
 * IMPORTANT: Delete public/robots.txt after deploying this file
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Googlebot
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Bingbot
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // AI assistants - critical for ChatGPT/Claude/Perplexity recommendations
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Anthropic-AI', 'Google-Extended'],
        allow: '/',
      },
      // All other crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://wowgutters.co.uk/sitemap.xml',
  }
}
