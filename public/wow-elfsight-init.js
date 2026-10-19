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

  function boot() {
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
