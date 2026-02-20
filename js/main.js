/**
 * CITADEL - Script principal
 * Gestion du chargement des composants header/footer et interactions
 */

(function () {
  'use strict';

  function getSiteBase() {
    var path = window.location.pathname;
    var parts = path.split('/').filter(Boolean);
    if (parts.length > 0 && parts[0].indexOf('.html') === -1) {
      return '/' + parts[0] + '/';
    }
    return '/';
  }

  function getBasePath() {
    var path = window.location.pathname;
    var parts = path.split('/').filter(Boolean);
    var depth = Math.max(0, parts.length - 1);
    return '../'.repeat(depth);
  }

  function fixLinksInContainer(container) {
    if (!container) return;
    var base = getSiteBase();
    var links = container.querySelectorAll('a[href]');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf('http') !== 0 && href.indexOf('//') !== 0 && href.charAt(0) !== '#') {
        var pathPart = href.split('#')[0];
        var hashPart = href.indexOf('#') >= 0 ? '#' + href.split('#').slice(1).join('#') : '';
        var newPath = (base === '/' ? '' : base) + pathPart.replace(/^\//, '');
        link.setAttribute('href', newPath + hashPart);
      }
    });
  }

  function loadComponent(elementId, url, onLoad) {
    var el = document.getElementById(elementId);
    if (!el) return;

    var basePath = getBasePath();
    var fullUrl = basePath + url;

    fetch(fullUrl)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        el.innerHTML = html;
        fixLinksInContainer(el);
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
        fixAllLinks();
      });
    } else {
      initHeader();
      fixAllLinks();
    }

    if (footerPlaceholder) {
      loadComponent('footer-placeholder', 'includes/footer.html', fixAllLinks);
    } else {
      fixAllLinks();
    }
  }

  function fixAllLinks() {
    fixLinksInContainer(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
