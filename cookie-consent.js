(function () {
  "use strict";

  var STORAGE_KEY = "buildapassword.cookieConsent";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var banner = document.getElementById("cookie-banner");
    var acceptBtn = document.getElementById("cookie-accept");
    var declineBtn = document.getElementById("cookie-decline");
    if (!banner || !acceptBtn || !declineBtn) return;

    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}

    if (stored === "accepted" || stored === "declined") return;

    banner.classList.add("is-visible");

    function setChoice(choice) {
      try { localStorage.setItem(STORAGE_KEY, choice); } catch (_) {}
      banner.classList.remove("is-visible");
    }

    acceptBtn.addEventListener("click", function () { setChoice("accepted"); });
    declineBtn.addEventListener("click", function () { setChoice("declined"); });
  });
})();
