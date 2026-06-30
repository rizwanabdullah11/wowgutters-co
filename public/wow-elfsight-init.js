/**
 * Elfsight Google Reviews — static export helper.
 *
 * The platform script is injected in app/layout.tsx with
 * data-cookieconsent="ignore" so Cookiebot auto-blocking does NOT block it.
 * This helper just (re)initialises the widget once the platform is ready,
 * including for visitors who arrive before hydration completes.
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
    var existing =
      document.getElementById('elfsight-platform') ||
      document.querySelector('script[src="' + PLATFORM_SRC + '"]');

    if (existing) {
      refreshElfsightApps();
      return;
    }

    var script = document.createElement('script');
    script.src = PLATFORM_SRC;
    script.async = true;
    script.setAttribute('data-cookieconsent', 'ignore');
    script.onload = refreshElfsightApps;
    document.body.appendChild(script);
  }

  function boot() {
    ensurePlatform();
    refreshElfsightApps();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Retry after hydration / late platform load.
  setTimeout(boot, 1200);
  setTimeout(boot, 3500);
})();
