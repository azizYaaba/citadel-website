/**
 * Définit la base URL pour les liens relatifs (compatible GitHub Pages)
 * Sur GitHub Pages project site: /repo-name/ → base = /repo-name/
 * En local ou user site: / → base = /
 */
(function () {
  var path = window.location.pathname;
  var parts = path.split('/').filter(Boolean);
  var basePath = '/';
  if (parts.length > 0 && parts[0].indexOf('.html') === -1) {
    basePath = '/' + parts[0] + '/';
  }
  var base = document.createElement('base');
  base.href = window.location.origin + basePath;
  document.head.insertBefore(base, document.head.firstChild);
})();
