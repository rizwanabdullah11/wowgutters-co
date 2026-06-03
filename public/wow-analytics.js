/**
 * wow-analytics.js
 *
 * Plain <script> analytics helper for static export builds.
 * GA4 events, Meta Pixel conversions (Lead only on real submits), tel/WhatsApp clicks.
 *
 * Configuration via window.__WOW_ANALYTICS__ from app/layout.tsx.
 */
(function () {
  'use strict';

  var CFG = (typeof window !== 'undefined' && window.__WOW_ANALYTICS__) || {};
  var GA_ID = String(CFG.gaId || '').trim();
  var META_PIXEL_ID = String(CFG.metaPixelId || '').trim();
  var DEBUG = String(CFG.debug || '').trim() === '1';

  function safeStr(v) {
    return String(v == null ? '' : v);
  }

  function readUtmFromUrl() {
    try {
      var u = new URL(window.location.href);
      var params = u.searchParams;
      var out = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'].forEach(
        function (k) {
          var v = params.get(k);
          if (v) out[k] = v;
        }
      );
      return out;
    } catch (_) {
      return {};
    }
  }

  function getStoredAttribution() {
    try {
      var raw = localStorage.getItem('wow_attribution');
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return null;
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function storeAttributionFromUrl() {
    var utm = readUtmFromUrl();
    var keys = Object.keys(utm);
    if (!keys.length) return;
    var payload = {
      first_seen_at: new Date().toISOString(),
      landing_url: safeStr(window.location.href),
      referrer: safeStr(document.referrer || ''),
      params: utm,
    };
    try {
      if (!getStoredAttribution()) {
        localStorage.setItem('wow_attribution', JSON.stringify(payload));
      }
    } catch (_) {}
  }

  if (typeof window !== 'undefined') {
    storeAttributionFromUrl();
  }

  function mergeAttribution(base) {
    var out = base && typeof base === 'object' ? base : {};
    var attribution = getStoredAttribution();
    if (attribution && attribution.params) {
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'].forEach(
        function (k) {
          if (attribution.params[k] && out[k] == null) out[k] = attribution.params[k];
        }
      );
    }
    if (out.page_location == null) out.page_location = safeStr(window.location.href);
    if (out.page_referrer == null) out.page_referrer = safeStr(document.referrer || '');
    if (out.page_path == null) {
      try {
        out.page_path = window.location.pathname || '';
      } catch (_) {}
    }
    return out;
  }

  /** Meta Lead — only for real conversions (never on PageView). */
  function trackMetaLead(params) {
    if (!META_PIXEL_ID || typeof window.fbq !== 'function') return;
    try {
      window.fbq('track', 'Lead', params || {});
    } catch (_) {}
  }

  function track(eventName, params) {
    var name = safeStr(eventName).trim();
    if (!name) return;

    var base = mergeAttribution(params && typeof params === 'object' ? params : {});

    if (DEBUG && typeof console !== 'undefined' && console.log) {
      console.log('[WOW analytics]', name, base);
    }

    if (GA_ID && typeof window.gtag === 'function') {
      try {
        window.gtag('event', name, base);
      } catch (_) {}
    }

    /* GA4 recommended key events + Meta conversion mapping */
    if (name === 'quote_submitted') {
      var leadParams = Object.assign({}, base, {
        lead_type: 'quote',
        form_name: base.form_name || 'quote_modal',
      });
      if (GA_ID && typeof window.gtag === 'function') {
        try {
          window.gtag('event', 'generate_lead', leadParams);
        } catch (_) {}
      }
      trackMetaLead({
        content_name: leadParams.form_name,
        content_category: 'quote',
      });
    }

    if (name === 'phone_click' && GA_ID && typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'click', {
          link_url: base.phone_href || base.phone_number,
          link_domain: 'tel',
          outbound: true,
          event_category: 'engagement',
          event_label: 'phone_call',
        });
      } catch (_) {}
    }

    if (name === 'whatsapp_click' && GA_ID && typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'click', {
          link_url: base.link_url,
          link_domain: 'wa.me',
          outbound: true,
          event_category: 'engagement',
          event_label: 'whatsapp',
        });
      } catch (_) {}
    }
  }

  window.wowTrack = track;
  window.wowGetAttribution = function () {
    return getStoredAttribution();
  };

  /* data-analytics-event clicks */
  document.addEventListener(
    'click',
    function (e) {
      try {
        var el = e.target && e.target.closest ? e.target.closest('[data-analytics-event]') : null;
        if (!el) return;
        var ev = el.getAttribute('data-analytics-event');
        if (!ev) return;
        track(ev, {
          analytics_label: el.getAttribute('data-analytics-label') || undefined,
          analytics_value: el.getAttribute('data-analytics-value') || undefined,
        });
      } catch (_) {}
    },
    true
  );

  /* Phone (tel:) clicks — GA4 key event phone_click */
  document.addEventListener(
    'click',
    function (e) {
      try {
        var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
        if (!a) return;
        var href = a.getAttribute('href') || '';
        track('phone_click', {
          phone_href: href,
          phone_number: href.replace(/^tel:/i, ''),
          link_text: safeStr(a.textContent).slice(0, 80),
        });
      } catch (_) {}
    },
    true
  );

  /* WhatsApp outbound clicks */
  document.addEventListener(
    'click',
    function (e) {
      try {
        var w = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
        if (!w) return;
        track('whatsapp_click', { link_url: w.getAttribute('href') || '' });
      } catch (_) {}
    },
    true
  );
})();
