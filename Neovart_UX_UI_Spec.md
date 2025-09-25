# Neovart – Dossier UX & UI

## 1. Vision de marque & principes directeurs
- **Positionnement** : galerie d'art en ligne nouvelle génération, offrant une scène partagée entre artistes établis et talents émergents.
- **Promesse** : rendre l'art visible, compréhensible et sensible grâce à un accompagnement humain et des outils immersifs.
- **Valeurs** : authenticité (récits honnêtes, transparence des prix et des parcours), transparence (processus clairs, fiches détaillées), impact (mise en avant de la portée culturelle et sociale des œuvres).
- **Expression UI** : esthétique muséale contemporaine, fonds lumineux, typographie éditoriale. L'œuvre reste le protagoniste. Accent chromatique unique décliné en micro-éléments ; palette contextuelle issue des œuvres.
- **Différenciants** : visionneuse 3D, expériences AR, images HD intégrées comme fonctionnalités natives. Présence systématique de badges et modes immersifs.
- **Ton éditorial** : curateur bienveillant, voix accessible et inspirante. Sentences actives, vocabulaire non technique.

## 2. Personae & objectifs
### Artistes professionnels et émergents
- Comprendre l'accompagnement, la visibilité et les modalités de commercialisation.
- Évaluer la crédibilité de la plateforme et demander à exposer.
- Valoriser leur univers via une page profil riche.

### Collectionneurs et amateurs
- Découvrir et comparer rapidement des œuvres.
- Visualiser en grand, en 3D ou en AR pour se projeter.
- Entrer facilement en contact pour manifester un intérêt ou acheter.

### Curieux & passionnés
- Explorer librement, sauvegarder leurs coups de cœur.
- S'abonner à la newsletter pour suivre la curation.
- Partager des découvertes sur leurs réseaux.

### Priorités P0
1. Accéder à une œuvre en ≤2 interactions depuis la home.
2. Visualiser une œuvre en grand (zoom, lightbox, 3D/AR) sans friction.
3. Contacter l'équipe ou l'artiste avec des CTA évidents et des formulaires courts.
4. Permettre aux artistes de comprendre l'offre d'accompagnement et de demander à exposer.

## 3. Architecture de l'information & navigation
- **Header sticky** : Logo | Découvrir | Artistes | À propos | Offres/Services | Contact + icône loupe (raccourci clavier « / »). Sur scroll, le header se compresse (hauteur réduite) et conserve le champ de recherche.
- **Navigation secondaire** : breadcrumbs sur les fiches œuvres et profils artistes.
- **Footer** : mentions légales, politique de confidentialité, réseaux sociaux (Instagram, LinkedIn, Pinterest), adresse e-mail directe.
- **Recherche universelle** : modale accessible via icône loupe et raccourci, filtrant œuvres, artistes, contenus éditoriaux.

## 4. User flows clés
### Flow 1 – Découverte → Visualisation → Intérêt
1. **Home** : l'utilisateur voit immédiatement le héros avec CTA "Découvrir les œuvres".
2. **Listing des œuvres** : la grille apparait avec filtres visibles. Sélection d'une œuvre en 1 clic.
3. **Fiche œuvre** : visuel XL, options de visualisation (zoom, plein écran, 3D/AR). CTA "Manifester un intérêt".
4. **Formulaire d'intérêt** : modale light, champs (Nom, Email, Message facultatif). Confirmation claire et engagement de réponse.

### Flow 2 – Artiste → Demander à exposer
1. **Home** : CTA "Rejoindre en tant qu'artiste" ou passage par la navigation "Offres/Services".
2. **Page Offres/Services** : sections détaillant accompagnement, visibilité, commercialisation + preuves sociales.
3. **CTA Demander à exposer** : formulaire (Nom, Email, Lien portfolio, Message). Feedback de réception + information sur délais de réponse.
4. **Onboarding lite** : page de confirmation avec ressources "Pourquoi exposer ?", "Ce que vous obtenez", guide des prochaines étapes.

## 5. Home – contenu et structure
1. **Hero pleine largeur**
   - Titre : *La galerie d'art en ligne 2.0*
   - Sous-titre : *Pour artistes professionnels et talents émergents. Voir, comprendre, ressentir.*
   - CTA primaire : "Découvrir les œuvres" ; CTA secondaire : "Rejoindre en tant qu'artiste".
   - Visuel : grande œuvre sans carrousel, mode focus au survol (assombrissement progressif du fond).

2. **Sélection du moment**
   - Grille de 6 à 8 œuvres. Tags : médium, style. Hover : zoom léger + badges (3D, AR, HD).

3. **Artistes à la une**
   - Trois cartes avec portrait, bio courte (≤180 caractères), CTA "Voir tous les artistes".

4. **Expériences immersives**
   - Trois cartes illustrant Visionneuse 3D, Voir en AR, Photo HD. Micro-démos animées (GIF/loop) déclenchées au survol.

5. **Comment ça marche ?**
   - Trois étapes linéaires avec icônes minimalistes : Explorer → Visualiser (3D/AR) → Contacter / Acquérir.

6. **Newsletter**
   - Champ email + consentement explicite. Texte : "Suivez la curation et les coulisses". CTA "S'abonner".

### Hero wireframe (desktop)
```
--------------------------------------------------
| LOGO | Nav items         | Loupe | CTA "Découvrir" |
|------------------------------------------------|
|                Visuel œuvre XL                 |
|                                                |
|  Titre H1                                      |
|  Sous-titre                                   |
|  [CTA Découvrir]   [CTA Rejoindre artiste]     |
--------------------------------------------------
```

## 6. Listing des œuvres – page "Découvrir"
- **Layout** : grille responsive (4 colonnes desktop, 2 tablette, 1 mobile). Gouttière 24px desktop / 16px mobile.
- **Filtres** : visibles en panneau latéral (desktop) ou bottom sheet (mobile) comprenant médium, mouvement/style, couleurs dominantes (sélecteur color chips), dimensions (sliders), prix/disponibilité, artistes, nouveautés.
- **Tri** : menu déroulant "Trier par" (Pertinence, Nouveautés, Prix, Popularité).
- **Carte œuvre** :
  - Image occupant 80% de la carte.
  - Hover : zoom subtil, affichage de pictos 3D/AR/HD.
  - Légende sous image : *Titre — Artiste, Année*.
  - Icône cœur (favori) en coin, CTA "Voir l'œuvre".
- **Empty state** : message empathique + CTA "Réinitialiser les filtres".

### Wireframe listing (desktop)
```
--------------------------------------------------
| Header sticky                                  |
--------------------------------------------------
| Filtres latéraux | [Carte œuvre] [Carte œuvre]  |
|                  | [Carte œuvre] [Carte œuvre]  |
|                  | ...                          |
--------------------------------------------------
```

## 7. Fiche œuvre
- **Hero** : image XL ou visionneuse 3D centrée, boutons superposés : "Voir en plein écran", "Voir en AR", "Zoom".
- **Bloc infos clés** (côté droit sur desktop, sous l'image sur mobile) : Titre, Artiste (lien), Année, Technique, Dimensions, Série/Édition, Disponibilité/Prix, Délai d'expédition.
- **CTA** : "Manifester un intérêt" (primaire), "Ajouter aux favoris", "Partager".
- **Description** : 2–4 phrases grand public.
- **Bio artiste courte** : 3 lignes + lien "En savoir plus" vers profil complet.
- **Œuvres liées** : carrousel manuel (pas d'autoplay) montrant 3–4 œuvres similaires.
- **3D/AR** : vignette preview cliquable, instruction "Scannez le QR code pour voir en AR".
- **Micro-interactions** : transitions 150–200 ms, skeletons pendant chargement, hover zoom doux.

### Wireframe fiche œuvre (desktop)
```
--------------------------------------------------
| Header                                         |
--------------------------------------------------
| [Image/3D viewer XL]   | Titre                 |
|                        | Artiste (lien)        |
|                        | Année, Technique      |
|                        | Dimensions            |
|                        | Disponibilité/Prix    |
|                        | CTA Manifester intérêt|
|                        | CTA Favori / Partager |
--------------------------------------------------
| Description | Bio artiste courte | Œuvres liées |
--------------------------------------------------
```

## 8. Profil artiste
- **Above the fold** : portrait pleine largeur ou signature visuelle, bio courte (≤400 caractères), liens réseaux, localisation.
- **CTA** : "Contacter l'artiste" (primaire), "Suivre" (secondaire).
- **Grille d'œuvres** : même composant que listing avec tri et filtres limités (médium, séries, disponibilité).
- **Section narration** : timeline des expositions, inspirations, citations.
- **Section témoignages/press kit** : citations courtes de collectionneurs ou médias.
- **Empty state** : si aucune œuvre, message invitant à explorer la sélection globale.

### Wireframe profil artiste (desktop)
```
--------------------------------------------------
| Header                                         |
--------------------------------------------------
| Portrait | Bio courte | CTA Contacter | Suivre  |
--------------------------------------------------
| Grille d'œuvres (3-4 colonnes)                 |
--------------------------------------------------
| Timeline & récit | Témoignages                 |
--------------------------------------------------
```

## 9. Page Offres / Services
- **Intro** : phrase d'accroche "Nous accompagnons les artistes à chaque étape".
- **Bloc 1 – Accompagnement & professionnalisation** : description, liste des services (coaching, stratégie artistique, ateliers).
- **Bloc 2 – Visibilité & diffusion** : galerie en ligne, curation, réseaux, événements.
- **Bloc 3 – Commercialisation éthique & équitable** : transparence sur commissions, services de vente, logistique.
- **Preuves** : mosaïque de logos partenaires, témoignages, chiffres clés (expositions organisées, œuvres vendues).
- **CTA final** : "Demander à exposer" → formulaire simple (Nom, Email, Lien portfolio, Message). Validation instantanée, message de confirmation.
- **Encadré ressources** : liens vers FAQ artiste, guide de préparation des œuvres.

### Wireframe Offres/Services (desktop)
```
--------------------------------------------------
| Header                                         |
--------------------------------------------------
| Héro court + accroche                          |
| [Bloc 1] [Bloc 2] [Bloc 3]                     |
| Témoignages / Partenaires                      |
| CTA Demander à exposer                         |
--------------------------------------------------
```

## 10. Page À propos
- **Mission** : paragraphe (3–4 phrases) détaillant la volonté de rendre l'art accessible et de soutenir les artistes.
- **Valeurs** : liste à puces (Authenticité, Transparence, Impact) avec micro-explications.
- **Objectifs** : trois items (ex : soutenir 200 artistes en 2024, démocratiser AR dans l'art, créer des passerelles avec les collectionneurs).
- **Fondateurs** : portraits ronds, mini-bio (2–3 lignes), rôle.
- **Timeline** : frise horizontale 2024 → Aujourd'hui → Roadmap (expositions phares, lancement AR, prochaine fonctionnalité).
- **CTA** : "Nous contacter" renvoyant vers la page contact.

## 11. Page Contact
- **Introduction chaleureuse** : "Nous sommes à l'écoute. Chaque message compte.".
- **Coordonnées directes** : e-mail cliquable, téléphone optionnel.
- **Formulaire court** : Nom, Email, Message (textarea). Case à cocher consentement RGPD ("J'accepte que Neovart utilise mes informations pour répondre à ma demande").
- **Promesse de réponse** : microcopy "On vous répond vite".
- **Fallback** : mention des réseaux sociaux pour échanges rapides.

### Wireframe Contact (desktop)
```
--------------------------------------------------
| Header                                         |
--------------------------------------------------
| Texte intro + coordonnées directes             |
| [Formulaire Nom | Email | Message | Consent]   |
| CTA "Envoyer"                                  |
--------------------------------------------------
```

## 12. Design system
### Palette chromatique
- **Fond** : blanc cassé / ivoire (#F8F6F2).
- **Texte principal** : gris anthracite (#1F1F1F).
- **Accent principal** : à définir (proposition : bleu profond #2046A1) utilisé pour CTA primaires, liens actifs, focus.
- **Accents contextuels** : couleurs extraites automatiquement des œuvres (appliquées aux tags, badges secondaires).
- **Contraste** : toutes les combinaisons respectent AA, focus outline en accent principal à 3px.

### Typographies
- **Titres** : sérif contemporaine (ex. "Canela" ou "Playfair Display"), taille H1 56px desktop / 36px mobile, interlignage 120%.
- **Texte courant & UI** : sans-sérif géométrique (ex. "Suisse Intl" ou "Inter"), corps 18px desktop / 16px mobile, interlignage 150%.
- **Système 8pt** : marges et paddings multiples de 8.

### Composants clés
- **Boutons**
  - *Primaire* : fond accent, texte blanc, rayon 8px, hover foncer de 8%, focus anneau.
  - *Secondaire* : contour accent, fond transparent, texte accent.
  - *Texte* : sans fond, soulignement au hover.
  - États : disabled (30% opacité), loading (spinner minimal).
- **Badges** : pastille arrondie, fond semi-transparent dérivé de l'accent, icône (cube pour 3D, AR pour réalité augmentée, loupe pour HD).
- **Cartes œuvre** : bordure 1px gris clair, ombre douce au hover. Intègrent icône favori et CTA.
- **Filtres** : chips sélectionnables, sliders pour dimensions/prix, toggles pour disponibilité.
- **Accordéons** : pour FAQ ou informations supplémentaires.
- **Modales** : lightbox pleine largeur sur desktop (max 80vw) ; mobile plein écran. Bouton fermer accessible.
- **Bannières d'information** : annonces (expositions virtuelles, nouvelles fonctionnalités).
- **Tooltips** : pour expliquer icônes 3D/AR.

### États & feedbacks
- **Hover** : transitions 150–200 ms, légère élévation.
- **Focus** : contour accent 3px, accessible clavier.
- **Active** : légère réduction d'échelle (0,98) pour feedback tactile.
- **Disabled** : opacité réduite, curseur interdit.
- **Loading** : skeletons pour cartes œuvres, spinner pour boutons.
- **Empty states** : illustration légère + message empathique + CTA.
- **Erreurs** : message clair, ton humain, lien retour.

### Motion & interactions
- Animations cohérentes (easing standard). Révélations progressives au scroll pour sections d'œuvres et témoignages.
- Lightbox 3D/AR : transition fade + scale-in.
- Favoris : animation de cœur (scale up/down) + message "Ajouté aux favoris".
- Formulaires : validation inline, feedback succès (bannière verte douce).

### Accessibilité
- Navigation complète au clavier, ordre logique.
- Focus visible et cohérent sur tous les éléments interactifs.
- Texte alternatif détaillé pour chaque œuvre.
- Cibles tactiles ≥44px.
- Gestion des contrastes AA.
- Contrôles AR/3D utilisables via clavier et descriptions textuelles.

## 13. Comportements & microcontenus
- **Favoris** : persistance locale (cookies/local storage). Message "Ajouté aux favoris" / "Retiré des favoris".
- **Partage** : options réseaux (Instagram, Pinterest, LinkedIn) + copie du lien.
- **Formulaires** : placeholders clairs, aide contextuelle (ex. "Lien vers portfolio en ligne"). Erreurs : "Merci de vérifier votre adresse e-mail".
- **Empty states** :
  - Filtres sans résultat : "Aucune œuvre ne correspond… Essayez d'élargir vos filtres.".
  - Profil sans œuvre : "Cette sélection est en préparation. Explorez la galerie.".
- **Onboarding artiste** : mini-séquence 3 slides (Pourquoi exposer ? / Ce que vous obtenez / Demander à exposer) accessible après formulaire.

## 14. Responsive & mobile
- **Mobile first** :
  - Header condensé avec menu burger (nav secondaire en plein écran).
  - Héros plein écran avec CTA primaire immédiatement visible.
  - Grilles : 1 colonne <768px, 2 colonnes ≥768px, 4 colonnes desktop.
  - Filtres : bottom sheet avec boutons "Appliquer" et "Réinitialiser" persistants.
  - Gestes natifs : pinch-to-zoom, swipe en lightbox, tap pour afficher/masquer métadonnées.
- **Desktop** : panneaux latéraux pour filtres, info sur fiche œuvre à côté du visuel.
- **Tablette** : compromis 2 colonnes, header sticky réduit.

## 15. Contenus & style rédactionnel
- Titres accrocheurs, centrés bénéfices (ex. "Découvrez des œuvres prêtes à rencontrer leur public").
- Descriptions d'œuvres : 2–4 phrases, vocabulaire accessible.
- Bio artistes : 400 caractères maximum au-dessus du pli, version longue optionnelle.
- CTAs : verbes d'action clairs (Découvrir, Voir en AR, Demander à exposer, Nous contacter).
- Microcopy cohérente avec ton de curateur bienveillant.

## 16. Indicateurs UX
- **Accès rapide** : suivi du nombre de clics pour atteindre une fiche œuvre depuis la home.
- **Performance CTA** : taux de clics sur "Découvrir les œuvres" et "Demander à exposer".
- **Conversion formulaires** : taux de complétion pour Contact et Manifester un intérêt.
- **Engagement immersif** : nombre d'ouvertures visionneuse 3D/AR.

## 17. Wireframes (texte)
### Home (mobile)
```
-----------------------------------
| Logo | Menu | Loupe             |
| Visuel œuvre pleine hauteur     |
| H1 + Sous-titre                 |
| [CTA Découvrir]                 |
| [CTA Rejoindre]                 |
| Sélection (cards 1 colonne)     |
| Artistes à la une (slider)      |
| Expériences immersives (stack)  |
| Comment ça marche (3 étapes)    |
| Newsletter                      |
-----------------------------------
```

### Listing (mobile)
```
-----------------------------------
| Header sticky                   |
| [Bouton Filtres] [Tri]          |
| Carte œuvre                     |
| Carte œuvre                     |
| ...                             |
-----------------------------------
```

### Fiche œuvre (mobile)
```
-----------------------------------
| Header                          |
| Image pleine largeur            |
| Boutons : Plein écran | AR | Zoom|
| Bloc infos clés                 |
| CTA Manifester intérêt          |
| CTA Favori | Partager           |
| Description                     |
| Bio artiste courte              |
| Œuvres liées (slider horizontal)|
-----------------------------------
```

### Profil artiste (mobile)
```
-----------------------------------
| Portrait / Signature            |
| Bio courte                      |
| CTA Contacter | Suivre          |
| Grille (1 colonne)              |
| Timeline                        |
| Témoignages                     |
-----------------------------------
```

### Offres/Services (mobile)
```
-----------------------------------
| Accroche                         |
| Bloc 1                           |
| Bloc 2                           |
| Bloc 3                           |
| Preuves / Témoignages            |
| CTA Demander à exposer           |
-----------------------------------
```

### À propos (mobile)
```
-----------------------------------
| Mission                          |
| Valeurs (liste)                  |
| Objectifs                        |
| Fondateurs (cards)               |
| Timeline verticale               |
| CTA Nous contacter               |
-----------------------------------
```

### Contact (mobile)
```
-----------------------------------
| Texte intro                      |
| E-mail cliquable                 |
| Formulaire                       |
| CTA Envoyer                      |
| Promesse de réponse              |
-----------------------------------
```

## 18. Livrables et prochaines étapes
- **Cartes de flux** : diagrammes à produire à partir des flows décrits (utiliser notation simple : rectangles pour pages, losanges pour décisions). Priorité aux deux flows P0.
- **Wireframes low/medium-fi** : dériver les wireframes textuels en maquettes Figma/Whimsical, en conservant l'accent sur le visuel des œuvres.
- **Bibliothèque UI** : composer un kit de composants (boutons, cartes, filtres, modales, badges) avec les états documentés.
- **Guidelines de contenu** : rédiger des exemples de microcopy (titres de section, messages d'erreur, confirmations).
- **Tests utilisateur** : planifier des sessions rapides (5 collectionneurs, 5 artistes) pour valider flows Découverte et Demander à exposer.

Ce dossier constitue la base pour l'équipe design/produit afin de réaliser prototypes et maquettes haute fidélité, en veillant à préserver la centralité des œuvres et une expérience immersive et accessible.
