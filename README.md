# Neovart MVP

Prototype statique du site Neovart, galerie d'art en ligne nouvelle génération. Le MVP comprend les écrans principaux décrits dans le dossier UX/UI :

- **Home** (`index.html`) avec hero, sélection d'œuvres, artistes à la une, expériences immersives et newsletter.
- **Listing des œuvres** (`discover.html`) avec panneaux de filtres et cartes interactives.
- **Fiche œuvre** (`artwork.html`) présentant visuel XL, informations détaillées et CTA.
- **Profils artistes** (`artists.html`, `artist.html`) avec grille d'œuvres, timeline et témoignages.
- **Offres & Services** (`services.html`) détaillant l'accompagnement proposé.
- Pages éditoriales complémentaires : `about.html`, `contact.html`, `mentions-legales.html`, `politique-confidentialite.html`.

## Utilisation

Ouvrez les fichiers HTML dans votre navigateur pour parcourir l'expérience. Les interactions (recherche universelle, formulaires d'intérêt, demandes artistes) sont simulées via JavaScript pour afficher un message de confirmation sans backend.

## Structure

```
assets/
  css/style.css   # Système visuel, layout et composants
  js/main.js      # Header sticky, modales de recherche/contact, confirmations de formulaires
```

Les images sont chargées via Unsplash pour illustrer les œuvres et portraits.
