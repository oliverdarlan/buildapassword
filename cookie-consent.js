(function () {
  "use strict";

  var STORAGE_KEY = "buildapassword.cookieConsent";
  var GA_MEASUREMENT_ID = "G-00T8C39XHF";

  function loadGoogleAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}

    if (stored === "accepted") loadGoogleAnalytics();

    var banner = document.getElementById("cookie-banner");
    var acceptBtn = document.getElementById("cookie-accept");
    var declineBtn = document.getElementById("cookie-decline");
    if (!banner || !acceptBtn || !declineBtn) return;

    if (stored === "accepted" || stored === "declined") return;

    banner.classList.add("is-visible");

    function setChoice(choice) {
      try { localStorage.setItem(STORAGE_KEY, choice); } catch (_) {}
      banner.classList.remove("is-visible");
    }

    acceptBtn.addEventListener("click", function () {
      setChoice("accepted");
      loadGoogleAnalytics();
    });
    declineBtn.addEventListener("click", function () { setChoice("declined"); });
  });
})();
