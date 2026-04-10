---
name: seo-optimisation
description: Utilise ce skill quand tu crées ou modifies des pages web pour optimiser le référencement naturel (SEO). Aussi quand l'utilisateur mentionne Google, référencement, SEO, visibilité, ou positionnement.
---

# Optimisation SEO

## Quand utiliser ce skill

- À chaque création de nouvelle page web
- Quand l'utilisateur veut améliorer la visibilité de son site sur Google
- Lors de la finalisation d'un projet web

## Actions obligatoires sur chaque page

### 1. Balises meta dans le head
```html
<head>
  <title>Nom de la page — Nom du site</title>
  <meta name="description" content="Description claire (150-160 caractères)" />
  <meta property="og:title" content="Titre de la page" />
  <meta property="og:description" content="Description de la page" />
  <meta property="og:image" content="url-de-l-image.jpg" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```
N'oublie pas `<html lang="fr">` pour indiquer la langue.

### 2. Structure des titres
- Un seul H1 par page (le titre principal)
- H2 pour les sections principales
- H3 pour les sous-sections
- Ne jamais sauter un niveau (pas de H1 puis H3 sans H2)

### 3. Images optimisées
- Attribut alt descriptif en français sur chaque image
- Format WebP quand possible (plus léger)
- Dimensions spécifiées (width et height)
- Nom de fichier descriptif (restaurant-italien-paris.webp, pas IMG_001.jpg)

### 4. Liens et navigation
- URLs propres et lisibles (/a-propos plutôt que /page?id=2)
- Liens internes entre les pages du site
- Textes de liens descriptifs ("Voir notre menu" plutôt que "Cliquez ici")

### 5. Performance
- Le site doit charger en moins de 3 secondes
- Images compressées
- Code minifié en production
- Polices optimisées (font-display: swap)

### 6. Fichiers techniques à créer
- `robots.txt` — Indique à Google quoi indexer
- `sitemap.xml` — Liste toutes les pages du site

## Checklist SEO avant déploiement

- [ ] Chaque page a un titre unique et descriptif
- [ ] Chaque page a une meta description unique
- [ ] Les images ont des textes alternatifs
- [ ] La structure H1 > H2 > H3 est respectée
- [ ] Le site est responsive (mobile-friendly)
- [ ] Le site charge en moins de 3 secondes
- [ ] robots.txt est présent
- [ ] sitemap.xml est présent
