/**
 * CITADEL - Script principal
 * Gestion du chargement des composants header/footer et interactions
 */

(function () {
  'use strict';

  function loadComponent(elementId, url, onLoad) {
    var el = document.getElementById(elementId);
    if (!el) return;

    fetch(url)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        el.innerHTML = html;
        if (onLoad) onLoad();
      })
      .catch(function () {
        console.warn('Could not load component:', url);
      });
  }

  function initHeader() {
    const toggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('nav-mobile');
    const header = document.getElementById('site-header');

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        mobileNav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', mobileNav.classList.contains('is-open'));
      });

      mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('is-open');
        });
      });
    }

    if (header) {
      window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 20);
      });
    }

    setActiveNavLink();
  }

  function setActiveNavLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      const href = link.getAttribute('href') || '';
      const linkPage = href.split('/').pop() || 'index.html';
      link.classList.toggle('active', linkPage === current);

      if (linkPage === current && link.closest('.nav-mobile')) {
        link.closest('.nav-mobile').classList.remove('is-open');
      }
    });
  }

  function init() {
    var headerPlaceholder = document.getElementById('header-placeholder');
    var footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
      loadComponent('header-placeholder', 'includes/header.html', function () {
        initHeader();
      });
    } else {
      initHeader();
    }

    if (footerPlaceholder) {
      loadComponent('footer-placeholder', 'includes/footer.html');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
