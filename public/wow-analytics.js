/**
 * wow-analytics.js
 *
 * Plain <script> analytics helper for static export builds.
 * This stays outside React/Next bundling (similar to the quote scripts).
 *
 * Configuration is passed via window.__WOW_ANALYTICS__ from app/layout.tsx.
 */
(function () {
  'use strict';

  var CFG = (typeof window !== 'undefined' && window.__WOW_ANALYTICS__) || {};
  var GA_ID = String(CFG.gaId || '').trim();
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
      // If already stored, keep first-touch; do not overwrite.
      if (!getStoredAttribution()) {
        localStorage.setItem('wow_attribution', JSON.stringify(payload));
      }
    } catch (_) {}
  }

  // Store first-touch attribution early.
  if (typeof window !== 'undefined') {
    storeAttributionFromUrl();
  }

  function track(eventName, params) {
    var name = safeStr(eventName).trim();
    if (!name) return;

    var base = params && typeof params === 'object' ? params : {};
    var attribution = getStoredAttribution();
    if (attribution && attribution.params) {
      // Only copy a small, safe subset.
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'].forEach(
        function (k) {
          if (attribution.params[k] && base[k] == null) base[k] = attribution.params[k];
        }
      );
    }
    if (base.page_location == null) base.page_location = safeStr(window.location.href);
    if (base.page_referrer == null) base.page_referrer = safeStr(document.referrer || '');

    if (DEBUG && typeof console !== 'undefined' && console.log) {
      console.log('[WOW analytics]', name, base);
    }

    // GA4 (gtag) if available
    if (GA_ID && typeof window.gtag === 'function') {
      try {
        window.gtag('event', name, base);
      } catch (_) {}
    }
  }

  // Expose a stable global for other scripts.
  window.wowTrack = track;
  window.wowGetAttribution = function () {
    return getStoredAttribution();
  };

  // Generic click tracking via data attributes (works across React + static scripts).
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
})();

