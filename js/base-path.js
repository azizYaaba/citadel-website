/**
 * Définit la base URL pour les liens relatifs (compatible avec GitHub Pages et tout autre domaine)
 * Utilise l'URL absolue du script pour déduire la racine du site.
 */
(function () {
  // Récupère l'URL absolue de ce script (ex: https://monsite.com/repo/js/base-path.js)
  var scriptUrl = document.currentScript.src;

  // Construit l'URL de base en retirant la partie spécifique au script
  var baseUrl = scriptUrl.replace(/\/js\/base-path\.js(\?.*)?$/, '/');

  // Injecte la balise <base> pour que tous les liens relatifs partent de baseUrl
  var base = document.createElement('base');
  base.href = baseUrl;
  document.head.insertBefore(base, document.head.firstChild);
})();
