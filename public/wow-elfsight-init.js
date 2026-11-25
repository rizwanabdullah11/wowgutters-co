/**
 * Elfsight Google Reviews — static export helper.
 *
 * Performance (Oct 2026): the platform script is no longer in <head>. It is
 * fetched only on pages that actually contain a reviews widget, and only when
 * that widget comes within 400px of the viewport. data-cookieconsent="ignore"
 * keeps Cookiebot auto-blocking from blocking it. Works before hydration too;
 * components/sections/ElfsightReviews.tsx uses the same script tag.
 */
(function () {
  'use strict';

  var PLATFORM_SRC = 'https://elfsightcdn.com/platform.js';

  function refreshElfsightApps() {
    try {
      var w = window;
      if (w.eapps && typeof w.eapps.init === 'function') w.eapps.init();
      if (w.eapps && w.eapps.Platform && typeof w.eapps.Platform.init === 'function') {
        w.eapps.Platform.init();
      }
    } catch (_) {}
  }

  function ensurePlatform() {
    var existing = document.querySelector('script[src="' + PLATFORM_SRC + '"]');
    if (existing) {
      refreshElfsightApps();
      return;
    }
    var script = document.createElement('script');
    script.src = PLATFORM_SRC;
    script.async = true;
    script.setAttribute('data-cookieconsent', 'ignore');
    script.onload = function () {
      script.dataset.loaded = '1';
      refreshElfsightApps();
    };
    document.body.appendChild(script);
  }

  // Nov 25 2026: wait for the visitor's first scroll / tap / key / mouse move before even
  // watching for the widget, so the ~500 KB platform never competes with the hero image
  // on pages where the reviews sit right under the hero (Birmingham mobile speed was 53).
  var INTERACTION_EVENTS = ['scroll', 'pointerdown', 'touchstart', 'keydown', 'mousemove', 'wheel'];
  function onFirstInteraction(cb) {
    var fired = false;
    var opts = { passive: true, capture: true };
    function handler(e) {
      // Ignore the synthetic zero-distance mousemove browsers fire while a page loads.
      if (e.type === 'mousemove' && !e.movementX && !e.movementY) return;
      if (fired) return;
      fired = true;
      for (var i = 0; i < INTERACTION_EVENTS.length; i++) {
        window.removeEventListener(INTERACTION_EVENTS[i], handler, opts);
      }
      cb();
    }
    for (var i = 0; i < INTERACTION_EVENTS.length; i++) {
      window.addEventListener(INTERACTION_EVENTS[i], handler, opts);
    }
  }

  function boot() {
    if (!document.querySelector('[class*="elfsight-app-"]')) return;
    onFirstInteraction(watch);
  }

  function watch() {
    var widgets = document.querySelectorAll('[class*="elfsight-app-"]');
    if (!widgets.length) return;

    if (!('IntersectionObserver' in window)) {
      ensurePlatform();
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            io.disconnect();
            ensurePlatform();
            return;
          }
        }
      },
      { rootMargin: '400px 0px' }
    );
    for (var j = 0; j < widgets.length; j++) io.observe(widgets[j]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
