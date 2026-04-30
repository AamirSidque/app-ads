/* ============================================================
   BYTE ENVISION — Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll Reveal ─────────────────────────────────────── */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── Nav active state ──────────────────────────────────── */
  function initNavActive() {
    var path = window.location.pathname.replace(/\/$/, '');
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (a) {
      var href = a.getAttribute('href').replace(/\/$/, '');
      if (href === path || (path === '' && href === '/') || (path.endsWith('index.html') && href === '/')) {
        a.classList.add('active');
      }
      /* partial match for pages/ */
      if (href !== '/' && href !== '/index.html' && path.includes(href.replace('../', '').replace('pages/', ''))) {
        a.classList.add('active');
      }
    });
  }

  /* ── Mobile nav ────────────────────────────────────────── */
  function initMobileNav() {
    var btn = document.getElementById('nav-hamburger');
    var drawer = document.getElementById('nav-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    /* close drawer when a link is clicked */
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Nav scroll shadow ─────────────────────────────────── */
  function initNavShadow() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      nav.style.borderBottomColor = window.scrollY > 10 ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.06)';
    }, { passive: true });
  }

  /* ── Contact form (Formspree) ──────────────────────────── */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var btn = form.querySelector('button[type="submit"]');
    var msg = document.getElementById('form-msg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

      fetch('https://formspree.io/f/byteenvision', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (res) {
        if (res.ok) {
          if (msg) { msg.textContent = '✓ Message sent! I'll reply within 24h.'; msg.style.color = '#4CAF50'; }
          form.reset();
        } else {
          if (msg) { msg.textContent = 'Something went wrong. Please email directly.'; msg.style.color = '#f44336'; }
        }
      }).catch(function () {
        if (msg) { msg.textContent = 'Network error. Please email directly.'; msg.style.color = '#f44336'; }
      }).finally(function () {
        if (btn) { btn.textContent = 'Send Message →'; btn.disabled = false; }
      });
    });
  }

  /* ── App filter (apps page) ────────────────────────────── */
  function initAppFilter() {
    var btns = document.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-category]');
    if (!btns.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = this.getAttribute('data-filter');
        btns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        cards.forEach(function (c) {
          if (f === 'all' || c.getAttribute('data-category') === f) {
            c.style.display = '';
            setTimeout(function () { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }, 10);
          } else {
            c.style.opacity = '0';
            c.style.transform = 'translateY(8px)';
            setTimeout(function () { c.style.display = 'none'; }, 220);
          }
        });
      });
    });
  }

  /* ── Smooth anchor scroll ──────────────────────────────── */
  function initAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = this.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initNavActive();
    initMobileNav();
    initNavShadow();
    initContactForm();
    initAppFilter();
    initAnchorScroll();
  });

})();
