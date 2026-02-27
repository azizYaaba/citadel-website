/**
 * CITADEL - Gestion du thème clair/sombre
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'citadel-theme';

  function getTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'dark';
    } catch (e) {
      return 'dark';
    }
  }

  function setTheme(theme) {
    var root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  function toggleTheme() {
    var current = getTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  function initTheme() {
    setTheme(getTheme());
  }

  function initThemeToggle() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('#theme-toggle') || e.target.closest('#theme-toggle-mobile')) {
        toggleTheme();
      }
    });
  }

  setTheme(getTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
