'use client';

import { useEffect, useRef, useState } from 'react';
import { blogPosts } from '@/constants/blogData';
import { colors } from '@/constants/colors';
import { Calendar, User, Share2, Phone, PenTool, BookOpen } from 'lucide-react';
import Link from 'next/link';
import BlogViewCount from '@/components/blog/BlogViewCount';
import { formatBlogDate } from '@/lib/dateUtils';
import { resolveBlogImageUrl } from '@/lib/blogImageUrl';


// ── Accordion item ──────────────────────────────────────────────────────────
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        marginBottom: 12,
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: open ? '0 4px 16px rgba(0,0,0,0.08)' : undefined,
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '20px 24px',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#0f172a',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          userSelect: 'none',
        }}
      >
        <span>{question}</span>
        <span
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: open ? '#0f172a' : '#19C58B',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            lineHeight: 1,
            fontWeight: 400,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.25s ease, background 0.2s ease',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: '0 24px 20px',
            color: '#475569',
            lineHeight: 1.75,
            borderTop: '1px solid #f1f5f9',
          }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}

// ── Smart content renderer — replaces <details> with React accordion ────────
function BlogContent({ html }: { html: string }) {
  const parts: Array<{ type: 'html' | 'faq'; content: string; question?: string; answer?: string }> = [];
  const detailsRe = /<details[\s\S]*?<\/details>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = detailsRe.exec(html)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'html', content: html.slice(lastIndex, match.index) });
    }
    const questionMatch =
      match[0].match(/<summary[^>]*>[\s\S]*?<span>([^<]+)<\/span>/i) ??
      match[0].match(/<summary[^>]*>([^<]+)<\/summary>/i);
    const answerMatch = match[0].match(/<div[^>]*>([\s\S]*?)<\/div>\s*<\/details>/i);
    if (questionMatch && answerMatch) {
      parts.push({
        type: 'faq',
        content: match[0],
        question: questionMatch[1].trim(),
        answer: answerMatch[1].trim(),
      });
    } else {
      parts.push({ type: 'html', content: match[0] });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < html.length) {
    parts.push({ type: 'html', content: html.slice(lastIndex) });
  }

  return (
    <>
      {parts.map((part, i) =>
        part.type === 'faq' ? (
          <AccordionItem key={i} question={part.question!} answer={part.answer!} />
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: part.content }} />
        )
      )}
    </>
  );
}

// ── Split blog content into main body (including FAQs) and full-width bottom CTA ──
function splitBlogContent(content: string): { mainHtml: string; bottomHtml: string } {
  if (!content) return { mainHtml: '', bottomHtml: '' };

  // 1. Check if there's an FAQ section heading (<h2 id="faq"...)
  const faqHeadingMatch = content.match(/<h2[^>]*id=["']faq["'][^>]*>[\s\S]*?<\/h2>/i);
  if (faqHeadingMatch && faqHeadingMatch.index !== undefined) {
    const afterFaqHeadingPos = faqHeadingMatch.index + faqHeadingMatch[0].length;
    const afterFaqHeading = content.slice(afterFaqHeadingPos);
    
    // Look for the next section heading (<h2...) after the FAQ list
    const nextHeadingMatch = afterFaqHeading.match(/<h2/i);
    if (nextHeadingMatch && nextHeadingMatch.index !== undefined) {
      const splitPos = afterFaqHeadingPos + nextHeadingMatch.index;
      return {
        mainHtml: content.slice(0, splitPos).trim(),
        bottomHtml: content.slice(splitPos).trim(),
      };
    }
  }

  // 2. Alternative: Look for closing CTA / summary heading
  const ctaHeadingMatch = content.match(/<h2[^>]*id=["'](?:book|ask|ready|contact|take-action|conclusion|coverage|fix-the-cause)[^"']*["'][^>]*>/i);
  if (ctaHeadingMatch && ctaHeadingMatch.index !== undefined && ctaHeadingMatch.index > 500) {
    return {
      mainHtml: content.slice(0, ctaHeadingMatch.index).trim(),
      bottomHtml: content.slice(ctaHeadingMatch.index).trim(),
    };
  }

  return { mainHtml: content, bottomHtml: '' };
}

interface BlogDetailContentProps {
  post: typeof blogPosts[0];
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const sameCategoryPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category);
  const otherPosts = blogPosts.filter(p => p.id !== post.id && p.category !== post.category);
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);

  // Extract FAQ data from content if present
  const extractFAQs = (content: string) => {
    const faqs: Array<{ question: string; answer: string }> = [];

    // Pattern 1: <h3>Q: ...</h3><p><strong>A:</strong> format
    const faqRegex = /<h3[^>]*>Q:\s*([^<]+)<\/h3>\s*<p[^>]*><strong[^>]*>A:<\/strong>\s*([^<]+(?:<[^>]+>[^<]*<\/[^>]+>)*[^<]*)<\/p>/gi;
    let match;
    while ((match = faqRegex.exec(content)) !== null) {
      faqs.push({
        question: match[1].trim(),
        answer: match[2].replace(/<[^>]+>/g, '').trim()
      });
    }

    // Pattern 2: <details>/<summary> accordion format
    if (faqs.length === 0) {
      const detailsRegex = /<summary[^>]*>[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/summary>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/details>/gi;
      while ((match = detailsRegex.exec(content)) !== null) {
        faqs.push({
          question: match[1].trim(),
          answer: match[2].replace(/<[^>]+>/g, '').trim()
        });
      }
    }

    return faqs;
  };

  const faqs = post.content ? extractFAQs(post.content) : [];

  // JSON-LD structured data for SEO - Enhanced Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // BlogPosting Schema
      {
        '@type': 'BlogPosting',
        '@id': `https://wowgutters.co.uk/blog/${post.id}#blogposting`,
        'headline': post.title,
        'description': post.excerpt,
        'image': {
          '@type': 'ImageObject',
          'url': resolveBlogImageUrl(post.image),
          'width': 1200,
          'height': 630
        },
        'author': {
          '@type': 'Organization',
          'name': 'WOW Gutters Ltd',
          'url': 'https://wowgutters.co.uk',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png'
          }
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'WOW Gutters Ltd',
          'url': 'https://wowgutters.co.uk',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
            'width': 600,
            'height': 60
          }
        },
        'datePublished': post.date,
        'dateModified': post.lastUpdated || post.date,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://wowgutters.co.uk/blog/${post.id}`
        },
        'articleSection': post.category || 'Maintenance',
        'keywords': `gutter cleaning, ${post.category}, gutter maintenance, blocked gutters, gutter repair`,
        'inLanguage': 'en-GB',
        'isPartOf': {
          '@id': 'https://wowgutters.co.uk/blog#website'
        }
      },
      // Article Schema
      {
        '@type': 'Article',
        '@id': `https://wowgutters.co.uk/blog/${post.id}#article`,
        'headline': post.title,
        'description': post.excerpt,
        'image': {
          '@type': 'ImageObject',
          'url': resolveBlogImageUrl(post.image),
          'width': 1200,
          'height': 630
        },
        'author': {
          '@type': 'Organization',
          'name': 'WOW Gutters Ltd',
          'url': 'https://wowgutters.co.uk'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'WOW Gutters Ltd',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://wowgutters.co.uk/og/default.jpg'
          }
        },
        'datePublished': post.date,
        'dateModified': post.lastUpdated || post.date,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://wowgutters.co.uk/blog/${post.id}/`
        }
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `https://wowgutters.co.uk/blog/${post.id}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://wowgutters.co.uk/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://wowgutters.co.uk/blog/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': post.breadcrumbName || post.title,
            'item': `https://wowgutters.co.uk/blog/${post.id}/`
          }
        ]
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': `https://wowgutters.co.uk/blog/${post.id}#webpage`,
        'url': `https://wowgutters.co.uk/blog/${post.id}/`,
        'name': post.title,
        'description': post.excerpt,
        'isPartOf': {
          '@id': 'https://wowgutters.co.uk/blog#website'
        },
        'primaryImageOfPage': {
          '@id': `https://wowgutters.co.uk/blog/${post.id}#primaryimage`
        },
        'datePublished': post.date,
        'dateModified': post.lastUpdated || post.date,
        'breadcrumb': {
          '@id': `https://wowgutters.co.uk/blog/${post.id}#breadcrumb`
        },
        'inLanguage': 'en-GB'
      },
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': 'https://wowgutters.co.uk#organization',
        'name': 'WOW Gutters Ltd',
        'url': 'https://wowgutters.co.uk',
        'logo': {
          '@type': 'ImageObject',
          '@id': 'https://wowgutters.co.uk#logo',
          'url': 'https://wowgutters.co.uk/assets/wow-gutter-logo2.png',
          'width': 600,
          'height': 60
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+44-7421-433910',
          'contactType': 'customer service',
          'areaServed': 'GB',
          'availableLanguage': 'English'
        },
        'sameAs': [
          'https://web.facebook.com/wowgutters.co.uk',
          'https://www.instagram.com/wowgutters/'
        ]
      },
      // FAQPage Schema (if FAQs are present in content)
      ...(faqs.length > 0 ? [{
        '@type': 'FAQPage',
        '@id': `https://wowgutters.co.uk/blog/${post.id}#faqpage`,
        'mainEntity': faqs.map((faq, index) => ({
          '@type': 'Question',
          '@id': `https://wowgutters.co.uk/blog/${post.id}#faq-${index + 1}`,
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }] : [])
    ]
  };

  const { mainHtml, bottomHtml } = post.content ? splitBlogContent(post.content) : { mainHtml: '', bottomHtml: '' };

  return (
    <main className="bg-white blog-detail-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Premium Hero Section */}
      <section className="blog-detail-hero-section">
        {/* Video Background */}
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src={post.heroVideo || '/wow_gutters_final.mp4'} type="video/mp4" />
          </video>
          <div className="blog-detail-hero-overlay"></div>
        </div>

        <div className="blog-detail-hero-content">
          <h1 className="hero-title animate-fade-in-up delay-200">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="hero-meta animate-fade-in-up delay-300">
            {post.author && (
              <div className="meta-item">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            )}
            <div className="meta-item">
              <Calendar className="w-5 h-5" />
              <span>{formatBlogDate(post.date)}</span>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50/80">
        {/* 1. Article Content + Sticky Sidebar (Sidebar remains fixed alongside article all the way through FAQs) */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Main Article Content */}
          <article className="flex-1 min-w-0 w-full">
            <div className="bg-white rounded-3xl shadow-md border border-gray-100/80 p-6 sm:p-10 md:p-12">
              {/* Published + Last Updated Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-500 pb-6 border-b border-gray-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>Published: <strong className="text-gray-800">{formatBlogDate(post.date)}</strong></span>
                </span>
                {post.lastUpdated && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 font-medium">
                    <time dateTime={post.lastUpdated} className="font-semibold" style={{ color: colors.primary }}>
                      Updated: {formatBlogDate(post.lastUpdated)}
                    </time>
                  </span>
                )}
                {post.author && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 font-medium">
                    <User className="w-3.5 h-3.5 text-gray-500" />
                    <span>Reviewed by: <strong className="text-gray-800">WOW Gutters Ltd Technical Team</strong></span>
                  </span>
                )}
              </div>

              {/* Quick Answer capsule — optimised for AI platform extraction */}
              {post.quickAnswer && (
                <div
                  className="mb-10 rounded-2xl p-6 sm:p-7 border-l-4 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
                    borderColor: colors.primary,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider m-0" style={{ color: colors.primary }}>
                      Quick Answer / Summary
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-800 m-0 font-normal">
                    {post.quickAnswer}
                  </p>
                </div>
              )}

              {/* Excerpt */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
                  {post.excerpt}
                </p>
              </div>

              {/* Main Article Body (Headings, Content, Before/After Images, FAQs) */}
              <div className="prose prose-lg max-w-none blog-content">
                {mainHtml ? (
                  <BlogContent html={mainHtml} />
                ) : post.content ? (
                  <BlogContent html={post.content} />
                ) : (
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      This comprehensive guide covers everything you need to know about this important topic.
                    </p>
                  </div>
                )}
              </div>

              {!bottomHtml && (
                <>
                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <Share2 className="w-5 h-5 text-gray-500" />
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">Share this guide:</span>
                      </div>
                      <div className="flex gap-2.5">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=https://wowgutters.co.uk/blog/${post.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                        >
                          Facebook
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=https://wowgutters.co.uk/blog/${post.id}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-[#000000] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                        >
                          X / Twitter
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - https://wowgutters.co.uk/blog/${post.id}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* In-Article Bottom CTA Banner */}
                  <div className="mt-12 p-8 sm:p-10 rounded-2xl text-center shadow-lg relative overflow-hidden" style={{ background: colors.primaryGradient }}>
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight relative z-10">
                      Need Professional Gutter Cleaning in Birmingham?
                    </h3>
                    <p className="mb-6 text-white/90 text-base sm:text-lg max-w-2xl mx-auto relative z-10">
                      Our ground-based vacuum system with live camera inspection clears channels to the floor and tests every downpipe. Free quote with same-week availability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3.5 justify-center relative z-10">
                      <Link href="/quote">
                        <button className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg font-bold rounded-full bg-white hover:bg-gray-50 transition-all shadow-md hover:shadow-xl hover:scale-105" style={{ color: colors.primary }}>
                          Get Free Quote
                        </button>
                      </Link>
                      <a href="tel:07421433910">
                        <button className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg font-bold border-2 border-white/90 rounded-full text-white hover:bg-white/15 transition-all">
                          Call 07421 433910
                        </button>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </article>

          {/* Sticky Sidebar — Fixed alongside article through FAQs, then stops before the full-width section */}
          <aside className="w-full lg:w-[380px] shrink-0 sticky top-24 self-start space-y-6 z-20">
            {/* Quick Quote Card */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-100 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r" style={{ backgroundImage: colors.primaryGradient }} />
              
              <div className="flex items-center gap-2 mb-2 mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ★ 4.9/5 Rated Specialist
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
                Get Your FREE Quote
              </h3>
              <p className="text-gray-600 font-medium text-sm mb-6">
                Takes less than 60 seconds · Same-week availability
              </p>

              <Link href="/quote" className="block w-full mb-4">
                <button className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25" style={{ background: colors.primaryGradient }}>
                  <span>Get Instant Free Quote</span>
                  <PenTool className="w-4 h-4" />
                </button>
              </Link>

              {/* Service Guarantees */}
              <div className="space-y-2.5 py-4 border-y border-gray-100 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Free before & after photos on every visit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Real-time wireless camera inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Full downpipe flow testing included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Ground-based vacuum system (No ladders)</span>
                </div>
              </div>

              <div className="mt-5 pt-1 text-center">
                <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">
                  Or Call Direct (Mon–Sat)
                </p>
                <a
                  href="tel:07421433910"
                  className="inline-flex items-center justify-center gap-2 text-2xl font-black tracking-tight hover:opacity-90 transition-opacity"
                  style={{ color: colors.primary }}
                >
                  <Phone className="w-5 h-5" />
                  07421 433910
                </a>
              </div>
            </div>

            {/* Author / Expert Info Card */}
            {post.author && (
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-md">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold text-white shadow-sm" style={{ background: colors.primaryGradient }}>
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{post.author}</h4>
                    <p className="text-xs text-gray-500">{post.authorRole || 'Senior Gutter Specialist at WOW Gutters Ltd'}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed m-0">
                  {post.authorBio || `Written and verified by ${post.author}. All WOW Gutters guides are technically reviewed to give Birmingham homeowners accurate, transparent gutter maintenance advice.`}
                </p>
                {post.lastUpdated && (
                  <p className="mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-400 m-0">
                    Last updated: <time dateTime={post.lastUpdated}>{formatBlogDate(post.lastUpdated)}</time> · West Midlands Gutter Maintenance Standard
                  </p>
                )}
              </div>
            )}
          </aside>
        </div>

        {/* 2. Full-Width Bottom CTA & Booking Section (Covers Whole Width — Right side quote stops above this) */}
        {bottomHtml && (
          <div className="max-w-7xl mx-auto mt-10 w-full">
            <div className="bg-white rounded-3xl shadow-md border border-gray-100/80 p-6 sm:p-10 md:p-14">
              <div className="prose prose-lg max-w-none blog-content">
                <BlogContent html={bottomHtml} />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-gray-500" />
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">Share this guide:</span>
                  </div>
                  <div className="flex gap-2.5">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://wowgutters.co.uk/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://wowgutters.co.uk/blog/${post.id}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#000000] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                    >
                      X / Twitter
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - https://wowgutters.co.uk/blog/${post.id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* In-Article Bottom CTA Banner */}
              <div className="mt-12 p-8 sm:p-10 rounded-2xl text-center shadow-lg relative overflow-hidden" style={{ background: colors.primaryGradient }}>
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight relative z-10">
                  Need Professional Gutter Cleaning in Birmingham?
                </h3>
                <p className="mb-6 text-white/90 text-base sm:text-lg max-w-2xl mx-auto relative z-10">
                  Our ground-based vacuum system with live camera inspection clears channels to the floor and tests every downpipe. Free quote with same-week availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-3.5 justify-center relative z-10">
                  <Link href="/quote">
                    <button className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg font-bold rounded-full bg-white hover:bg-gray-50 transition-all shadow-md hover:shadow-xl hover:scale-105" style={{ color: colors.primary }}>
                      Get Free Quote
                    </button>
                  </Link>
                  <a href="tel:07421433910">
                    <button className="w-full sm:w-auto px-8 py-3.5 text-base sm:text-lg font-bold border-2 border-white/90 rounded-full text-white hover:bg-white/15 transition-all">
                      Call 07421 433910
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
              Related <span style={{ color: colors.primary }}>Articles</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg" style={{ background: colors.primaryGradient }}>
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-[#19C58B] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatBlogDate(relatedPost.date)}</span>
                        <span>
                          <BlogViewCount postId={relatedPost.id} publishedDate={relatedPost.date} suffix="views" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .blog-detail-wrapper {
          overflow-x: hidden;
        }

        .blog-detail-hero-section {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0f172a;
        }

        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-detail-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.85) 0%,
            rgba(15, 23, 42, 0.75) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }

        .blog-detail-hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
          padding: 60px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          margin-bottom: 1.5rem;
          padding: 8px 20px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-4px);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 24px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          margin-bottom: 1.5rem;
        }

        .hero-badge-text {
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .hero-title {
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
          color: white;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 900;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          color: rgba(255, 255, 255, 0.9);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }

        .hero-wave-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          line-height: 0;
          z-index: 10;
        }

        .hero-wave-bottom svg {
          width: 100%;
          height: 60px;
          display: block;
        }

        .blog-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .blog-content p {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
        }

        .blog-content ul {
          list-style: none;
          padding-left: 0;
          margin: 1.5rem 0;
        }

        .blog-content ul li,
        .blog-content ol li {
          position: relative;
          margin-bottom: 0.75rem;
          color: #475569;
          line-height: 1.7;
          font-size: 1.125rem;
        }

        .blog-content ul li {
          padding-left: 2rem;
        }

        .blog-content ol {
          padding-left: 1.5rem;
          margin: 1.5rem 0;
        }

        .blog-content ol li {
          padding-left: 0.25rem;
        }

        .blog-content ol li::marker {
          color: #0f172a;
          font-weight: 700;
        }

        .blog-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${colors.primary};
        }

        .blog-content strong {
          color: #0f172a;
          font-weight: 700;
        }

        .blog-content img {
          width: 100%;
          max-height: 600px;
          border-radius: 1rem;
          margin: 2rem 0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        /* ── Dynamic FAQ accordion ── */
        .blog-content details {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
          background: #ffffff;
          transition: box-shadow 0.2s ease;
        }

        .blog-content details[open] {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        .blog-content details summary {
          cursor: pointer;
          padding: 20px 24px;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          user-select: none;
          transition: background 0.15s ease;
        }

        .blog-content details summary::-webkit-details-marker {
          display: none;
        }

        .blog-content details summary:hover {
          background: #f8fafc;
        }

        /* The + icon span */
        .blog-content details summary > span:last-child {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #19C58B;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          line-height: 1;
          font-weight: 400;
          transition: transform 0.25s ease, background 0.2s ease;
        }

        .blog-content details[open] summary > span:last-child {
          transform: rotate(45deg);
          background: #0f172a;
        }

        /* Animated content panel */
        .blog-content details > div {
          padding: 0 24px 20px;
          color: #475569;
          line-height: 1.75;
          border-top: 1px solid #f1f5f9;
          animation: faqSlideDown 0.25s ease forwards;
        }

        .blog-content details > div p {
          margin: 16px 0 0;
          font-size: 1rem;
        }

        /* Override the bullet ::before for FAQ list items inside details */
        .blog-content details ul li::before {
          display: none;
        }

        .blog-content details ul li {
          padding-left: 0;
        }

        @keyframes faqSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .blog-content blockquote {
          border-left: 4px solid #19C58B;
          padding: 18px 24px;
          margin: 28px 0;
          background: #f0fdf4;
          border-radius: 0 16px 16px 0;
          color: #1e293b;
          font-style: normal;
        }

        .blog-content blockquote strong {
          color: #0f172a;
        }

        .blog-content nav {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 28px;
          margin: 32px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .blog-content figure {
          margin: 32px 0;
        }

        .blog-content figcaption {
          font-size: 14px;
          color: #64748b;
          margin-top: 10px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .blog-detail-hero-section {
            min-height: 50vh;
          }

          .blog-detail-hero-content {
            padding: 40px 16px;
          }

          .hero-title {
            font-size: 1.75rem;
          }

          .hero-meta {
            gap: 1rem;
            font-size: 0.875rem;
          }

          .blog-content h2 {
            font-size: 1.5rem;
          }

          .blog-content h3 {
            font-size: 1.25rem;
          }

          .blog-content p,
          .blog-content ul li,
          .blog-content ol li {
            font-size: 1rem;
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
