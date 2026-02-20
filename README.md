# CITADEL - Maquette du site web

Maquette statique du site web du **Centre d'Excellence Interdisciplinaire en Intelligence Artificielle pour le Développement (CITADEL)**, conçue pour un déploiement sur GitHub Pages.

Site officiel : [citadel.bf](https://citadel.bf/)

## Structure du projet

```
CITADEL-website/
├── index.html              # Accueil
├── a-propos.html           # À propos
├── axes-recherche.html     # Axes de recherche
├── activites.html         # Activités
├── actualites.html        # Liste des actualités
├── actualites/            # Pages détaillées des actualités
│   ├── indabax-2025.html
│   ├── fellows-cohorte-6.html
│   └── ...
├── publications.html      # Publications
├── partenaires.html       # Partenaires
├── contact.html          # Contact
├── sitemap.html          # Plan du site
├── mentions-legales.html  # Mentions légales
├── css/
│   ├── main.css          # Styles principaux
│   ├── variables.css     # Variables CSS
│   ├── layout.css        # Layout
│   └── components.css    # Composants réutilisables
├── js/
│   └── main.js           # Script principal (header/footer, menu mobile)
├── includes/
│   ├── header.html       # Header commun
│   └── footer.html       # Footer commun
└── README.md
```

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub (ex. `CITADEL-website`)
2. Poussez le contenu du projet
3. Allez dans **Settings** → **Pages**
4. Source : **Deploy from a branch**
5. Branch : **main** (ou **master**), dossier **/ (root)**
6. Sauvegardez

Le site sera accessible à : `https://<username>.github.io/CITADEL-website/`

### Test local

Pour tester localement (le chargement du header/footer nécessite un serveur HTTP) :

```bash
# Avec Python
python -m http.server 8000

# Ou avec Node.js (npx)
npx serve
```

Puis ouvrez `http://localhost:8000` (ou le port indiqué).

## Sections du site

- **Accueil** : Bannière, slogan, CTA, partenaires, axes de recherche, activités, actualités récentes
- **À propos** : Présentation, vision, objectifs, équipe
- **Axes de recherche** : IA, science des données, éthique, IA pour le développement
- **Activités** : Formations, projets, événements, ressources
- **Actualités** : Liste et pages détaillées des articles
- **Publications** : Documents et rapports téléchargeables
- **Partenaires** : Logos et liens des organisations affiliées
- **Contact** : Formulaire, coordonnées, section Rejoignez-nous
- **Footer** : Navigation, plan du site, mentions légales

## Technologies

- HTML5
- CSS3 (variables, Grid, Flexbox)
- JavaScript vanilla (sans framework)
- Compatible site statique (pas de backend)

## Personnalisation

- **Couleurs** : Modifier `css/variables.css`
- **Contenu** : Éditer les fichiers HTML et `includes/`
- **Formulaire** : Pour un envoi réel, intégrer [Formspree](https://formspree.io/) ou un service similaire
