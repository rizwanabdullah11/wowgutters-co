(function () {
  function openDialog() {
    var d = document.getElementById("wow-cta-dialog");
    if (!d) {
      window.location.href = "/quote/embed/";
      return;
    }
    if (typeof d.showModal === "function") {
      d.showModal();
    } else {
      window.location.href = "/quote/embed/";
    }
  }
  function closeDialog() {
    var d = document.getElementById("wow-cta-dialog");
    if (d && typeof d.close === "function") d.close();
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
  window.addEventListener("message", function (e) {
    try {
      if (e && e.data && e.data.type === "wow-close-quote") closeDialog();
    } catch (_) {}
  });
  window.wowOpenCtaDialog = openDialog;
})();
