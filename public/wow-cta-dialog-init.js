(function () {
  function openDialog() {
    try {
      if (typeof window.wowTrack === "function") {
        window.wowTrack("quote_open", { source: "cta_dialog" });
      }
    } catch (_) {}
    var d = document.getElementById("wow-cta-dialog");
    if (!d) {
      window.location.href = "/quote/embed/";
      return;
    }
    if (d.open) return;
    if (typeof d.showModal === "function") {
      try {
        d.showModal();
      } catch (_) {
        window.location.href = "/quote/embed/";
      }
    } else {
      window.location.href = "/quote/embed/";
    }
  }
  function closeDialog() {
    var d = document.getElementById("wow-cta-dialog");
    if (d && typeof d.close === "function") d.close();
    try {
      if (typeof window.wowTrack === "function") {
        window.wowTrack("quote_close", { source: "cta_dialog" });
      }
    } catch (_) {}
  }
  function isQuoteMarketingHref(href) {
    if (!href) return false;
    try {
      var u = new URL(href, window.location.href);
      var p = u.pathname || "";
      if (p.length > 1 && p.slice(-1) === "/") p = p.slice(0, -1);
      return p.toLowerCase() === "/quote";
    } catch (_) {
      return false;
    }
  }
  function skipInterceptNav(e) {
    return e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
  }
  document.addEventListener(
    "click",
    function (e) {
      var openEl = e.target.closest("[data-static-quote-open],[data-wow-open-cta]");
      if (openEl) {
        e.preventDefault();
        try {
          if (typeof window.wowTrack === "function") {
            window.wowTrack("cta_clicked", {
              cta_label: openEl.getAttribute("data-analytics-label") || "quote_open",
              cta_location: safeLocation(),
            });
          }
        } catch (_) {}
        openDialog();
        return;
      }
      if (e.target.closest("#wow-quote-dialog-close-btn")) {
        e.preventDefault();
        closeDialog();
        return;
      }
      var a = e.target.closest && e.target.closest("a[href]");
      if (
        a &&
        !skipInterceptNav(e) &&
        a.getAttribute("target") !== "_blank" &&
        isQuoteMarketingHref(a.getAttribute("href"))
      ) {
        e.preventDefault();
        openDialog();
      }
    },
    true
  );

  /* Auto hover trigger for elements with [data-static-quote-hover] */
  var hoverCooldownUntil = 0;
  var hasHoverTriggered = false;

  document.addEventListener(
    "mouseover",
    function (e) {
      var hoverEl = e.target && e.target.closest && e.target.closest("[data-static-quote-hover]");
      if (!hoverEl) {
        if (hasHoverTriggered && Date.now() > hoverCooldownUntil) {
          hasHoverTriggered = false;
        }
        return;
      }
      var d = document.getElementById("wow-cta-dialog");
      if (d && d.open) return;
      if (Date.now() < hoverCooldownUntil) return;
      if (hasHoverTriggered) return;

      hasHoverTriggered = true;
      hoverCooldownUntil = Date.now() + 3000;
      openDialog();
    },
    true
  );

  document.addEventListener(
    "mouseout",
    function (e) {
      var fromEl = e.target && e.target.closest && e.target.closest("[data-static-quote-hover]");
      var toEl = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest("[data-static-quote-hover]");
      if (fromEl && !toEl) {
        var remaining = Math.max(300, hoverCooldownUntil - Date.now());
        setTimeout(function () {
          hasHoverTriggered = false;
        }, remaining);
      }
    },
    true
  );

  window.addEventListener(
    "close",
    function (e) {
      if (e.target && e.target.id === "wow-cta-dialog") {
        hoverCooldownUntil = Date.now() + 2500;
      }
    },
    true
  );

  window.addEventListener("message", function (e) {
    try {
      if (e && e.data && e.data.type === "wow-close-quote") closeDialog();
    } catch (_) {}
  });
  window.wowOpenCtaDialog = openDialog;

  function safeLocation() {
    try {
      return window.location && window.location.pathname ? window.location.pathname : "";
    } catch (_) {
      return "";
    }
  }
})();
