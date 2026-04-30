/* ============================================================
   BYTE ENVISION — Shared Components (nav + footer)
   Injected into every page via data-component attributes
   ============================================================ */

(function () {
  'use strict';

  var ROOT = (function () {
    var p = window.location.pathname;
    return p.includes('/pages/') ? '../' : './';
  })();

  /* ── NAV HTML ───────────────────────────────────────────── */
  var NAV_HTML = '\
<nav class="nav" role="navigation" aria-label="Main navigation">\
  <div class="nav-inner">\
    <a class="nav-logo" href="' + ROOT + 'index.html">Byte<span>Envision</span></a>\
    <ul class="nav-links">\
      <li><a href="' + ROOT + 'index.html">Home</a></li>\
      <li><a href="' + ROOT + 'pages/apps.html">Apps</a></li>\
      <li><a href="' + ROOT + 'pages/projects.html">Projects</a></li>\
      <li><a href="' + ROOT + 'pages/services.html">Services</a></li>\
      <li><a href="' + ROOT + 'pages/blog.html">Blog</a></li>\
      <li><a href="' + ROOT + 'pages/contact.html">Contact</a></li>\
      <li><a class="nav-cta" href="' + ROOT + 'pages/contact.html">Hire Me</a></li>\
    </ul>\
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">\
      <span></span><span></span><span></span>\
    </button>\
  </div>\
</nav>\
<div class="nav-drawer" id="nav-drawer" role="dialog" aria-label="Mobile menu">\
  <a href="' + ROOT + 'index.html">Home</a>\
  <a href="' + ROOT + 'pages/apps.html">Apps</a>\
  <a href="' + ROOT + 'pages/projects.html">Projects</a>\
  <a href="' + ROOT + 'pages/services.html">Services</a>\
  <a href="' + ROOT + 'pages/blog.html">Blog</a>\
  <a href="' + ROOT + 'pages/contact.html">Contact</a>\
  <a class="btn btn-primary" href="' + ROOT + 'pages/contact.html" style="margin-top:8px">Hire Me →</a>\
</div>';

  /* ── FOOTER HTML ────────────────────────────────────────── */
  var FOOTER_HTML = '\
<footer class="footer">\
  <div class="container">\
    <div class="footer-grid">\
      <div>\
        <div class="footer-brand">Byte<span>Envision</span></div>\
        <p class="footer-desc">Android developer &amp; product builder based in Baramulla, Kashmir. Building privacy-first apps and useful tools.</p>\
        <a class="btn btn-primary btn-sm" href="' + ROOT + 'pages/contact.html">Start a Project →</a>\
      </div>\
      <div>\
        <div class="footer-col-title">Apps</div>\
        <ul class="footer-links">\
          <li><a href="https://play.google.com/store/apps/details?id=editor.pdf" target="_blank" rel="noopener">PDF Editor</a></li>\
          <li><a href="https://play.google.com/store/apps/details?id=com.picmeta" target="_blank" rel="noopener">Pic Meta</a></li>\
          <li><a href="https://play.google.com/store/apps/details?id=code.editor.learn" target="_blank" rel="noopener">Code Editor</a></li>\
          <li><a href="https://play.google.com/store/apps/details?id=com.byteenvision.calculator" target="_blank" rel="noopener">Calculator</a></li>\
          <li><a href="https://play.google.com/store/apps/details?id=com.slapit.app" target="_blank" rel="noopener">Slap It</a></li>\
          <li><a href="https://play.google.com/store/apps/developer?id=Byte+Envision" target="_blank" rel="noopener">All Apps →</a></li>\
        </ul>\
      </div>\
      <div>\
        <div class="footer-col-title">Navigate</div>\
        <ul class="footer-links">\
          <li><a href="' + ROOT + 'index.html">Home</a></li>\
          <li><a href="' + ROOT + 'pages/apps.html">Apps</a></li>\
          <li><a href="' + ROOT + 'pages/projects.html">Projects</a></li>\
          <li><a href="' + ROOT + 'pages/services.html">Services</a></li>\
          <li><a href="' + ROOT + 'pages/blog.html">Blog</a></li>\
          <li><a href="' + ROOT + 'pages/contact.html">Contact</a></li>\
        </ul>\
      </div>\
      <div>\
        <div class="footer-col-title">Legal</div>\
        <ul class="footer-links">\
          <li><a href="' + ROOT + 'pages/privacy.html">Privacy Policy</a></li>\
          <li><a href="' + ROOT + 'pages/terms.html">Terms of Use</a></li>\
          <li><a href="' + ROOT + 'pages/disclaimer.html">Disclaimer</a></li>\
          <li><a href="mailto:byteenvision@gmail.com">byteenvision@gmail.com</a></li>\
        </ul>\
      </div>\
    </div>\
    <div class="footer-bottom">\
      <span>© 2025 Byte Envision · Aamir Sidque · Baramulla, Kashmir, India</span>\
      <span>Built with intent. Privacy first.</span>\
    </div>\
  </div>\
</footer>';

  /* ── Inject ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var navSlot = document.getElementById('nav-slot');
    if (navSlot) navSlot.outerHTML = NAV_HTML;

    var footerSlot = document.getElementById('footer-slot');
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
  });

})();
