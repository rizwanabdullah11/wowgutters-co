import { MetadataRoute } from 'next'

/**
 * robots.txt — wowgutters.co.uk
 * WOW Gutters Ltd | Birmingham, West Midlands, UK
 * Updated: May 2026 | Version: 3.1
 */

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── SECTION 1: MAJOR SEARCH ENGINES ──────────────────────────────────
      { userAgent: 'Googlebot',        allow: '/' },
      { userAgent: 'Googlebot-Image',  allow: '/' },
      { userAgent: 'Googlebot-News',   allow: '/' },
      { userAgent: 'Googlebot-Video',  allow: '/' },
      { userAgent: 'Googlebot-Mobile', allow: '/' },
      { userAgent: 'Bingbot',          allow: '/' },
      { userAgent: 'BingPreview',      allow: '/' },
      { userAgent: 'msnbot',           allow: '/' },
      { userAgent: 'Slurp',            allow: '/' },
      { userAgent: 'DuckDuckBot',      allow: '/' },
      { userAgent: 'YandexBot',        allow: '/' },
      { userAgent: 'YandexImages',     allow: '/' },
      { userAgent: 'Baiduspider',      allow: '/' },
      { userAgent: 'Ecosiabot',        allow: '/' },
      { userAgent: 'Brave',            allow: '/' },

      // ── SECTION 2: OPENAI / CHATGPT ──────────────────────────────────────
      { userAgent: 'GPTBot',           allow: '/' },
      { userAgent: 'ChatGPT-User',     allow: '/' },
      { userAgent: 'OAI-SearchBot',    allow: '/' },
      { userAgent: 'openai-crawler',   allow: '/' },

      // ── SECTION 3: ANTHROPIC / CLAUDE ────────────────────────────────────
      { userAgent: 'ClaudeBot',        allow: '/' },
      { userAgent: 'Anthropic-AI',     allow: '/' },
      { userAgent: 'Claude-Web',       allow: '/' },

      // ── SECTION 4: GOOGLE AI / GEMINI ────────────────────────────────────
      { userAgent: 'Google-Extended',       allow: '/' },
      { userAgent: 'Google-CloudVertexBot', allow: '/' },

      // ── SECTION 5: PERPLEXITY AI ─────────────────────────────────────────
      { userAgent: 'PerplexityBot',    allow: '/' },
      { userAgent: 'Perplexity-User',  allow: '/' },

      // ── SECTION 6: META AI ───────────────────────────────────────────────
      { userAgent: 'FacebookBot',          allow: '/' },
      { userAgent: 'Meta-ExternalAgent',   allow: '/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },

      // ── SECTION 7: APPLE / SIRI ──────────────────────────────────────────
      { userAgent: 'Applebot',          allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },

      // ── SECTION 8: MICROSOFT COPILOT ─────────────────────────────────────
      { userAgent: 'CopilotBot',   allow: '/' },
      { userAgent: 'msnbot-media', allow: '/' },

      // ── SECTION 9: OTHER AI PLATFORMS ────────────────────────────────────
      { userAgent: 'cohere-ai',      allow: '/' },
      { userAgent: 'YouBot',         allow: '/' },
      { userAgent: 'Diffbot',        allow: '/' },
      { userAgent: 'Bytespider',     allow: '/' },
      { userAgent: 'Amazonbot',      allow: '/' },
      { userAgent: 'ia_archiver',    allow: '/' },
      { userAgent: 'MistralBot',     allow: '/' },
      { userAgent: 'Grok',           allow: '/' },
      { userAgent: 'xAI',            allow: '/' },
      { userAgent: 'DeepSeek',       allow: '/' },
      { userAgent: 'HuggingFaceBot', allow: '/' },

      // ── SECTION 10: AI TRAINING DATASETS ─────────────────────────────────
      { userAgent: 'CCBot',           allow: '/' },
      { userAgent: 'archive.org_bot', allow: '/' },
      { userAgent: 'Scrapy',          allow: '/' },

      // ── SECTION 11: SEO TOOLS ────────────────────────────────────────────
      { userAgent: 'SemrushBot',                allow: '/' },
      { userAgent: 'AhrefsBot',                 allow: '/' },
      { userAgent: 'rogerbot',                  allow: '/' },
      { userAgent: 'dotbot',                    allow: '/' },
      { userAgent: 'MJ12bot',                   allow: '/' },
      { userAgent: 'Screaming Frog SEO Spider', allow: '/' },

      // ── SECTION 12: SOCIAL MEDIA CRAWLERS ────────────────────────────────
      { userAgent: 'Twitterbot',  allow: '/' },
      { userAgent: 'LinkedInBot', allow: '/' },
      { userAgent: 'Pinterest',   allow: '/' },
      { userAgent: 'WhatsApp',    allow: '/' },
      { userAgent: 'TelegramBot', allow: '/' },
      { userAgent: 'Slackbot',    allow: '/' },

      // ── SECTION 13: ALL OTHER CRAWLERS (global fallback) ─────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/studio/', '/cdn-cgi/'],
      },
    ],

    // ── SECTION 14 & 15: SITEMAPS + AI INFORMATION FILES ─────────────────
    sitemap: [
      'https://wowgutters.co.uk/sitemap.xml',
      'https://wowgutters.co.uk/llm-full.txt',
      'https://wowgutters.co.uk/llm.txt',
    ],
  }
}
