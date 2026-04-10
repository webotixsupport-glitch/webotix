---
name: design-responsive
description: Utilise ce skill quand tu dois rendre un site ou une application adaptable à toutes les tailles d'écran (mobile, tablette, desktop). Aussi quand l'utilisateur mentionne mobile, responsive, adaptatif, ou taille d'écran.
---

# Design responsive

## Quand utiliser ce skill

- Quand tu crées un nouveau composant ou une nouvelle page
- Quand l'utilisateur dit que quelque chose ne s'affiche pas bien sur mobile
- Quand tu dois vérifier l'adaptabilité d'un élément existant

## Les 3 tailles d'écran

### Mobile (moins de 640px)
- Navigation : menu hamburger (3 barres)
- Contenu : une seule colonne
- Texte : taille minimale 16px
- Boutons : minimum 44x44px (taille du doigt)
- Images : pleine largeur

### Tablette (640px à 1024px)
- Navigation : visible ou hamburger selon l'espace
- Contenu : 2 colonnes maximum
- Espacement : moyen

### Desktop (plus de 1024px)
- Navigation : barre complète visible
- Contenu : 3-4 colonnes possible
- Largeur max du contenu : 1200px centré
- Espacement : généreux

## Classes Tailwind essentielles

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    /* Grille responsive */
text-sm md:text-base lg:text-lg                     /* Texte responsive */
p-4 md:p-6 lg:p-8                                  /* Espacement responsive */
hidden md:block                                      /* Masqué sur mobile */
block md:hidden                                      /* Visible mobile uniquement */
flex flex-col md:flex-row                            /* Colonne mobile, ligne desktop */
```

## Points de rupture Tailwind
- `sm:` — 640px+ (grand mobile)
- `md:` — 768px+ (tablette)
- `lg:` — 1024px+ (petit desktop)
- `xl:` — 1280px+ (grand desktop)

## Checklist responsive

- [ ] S'affiche bien en 375px (iPhone)
- [ ] S'affiche bien en 768px (iPad)
- [ ] S'affiche bien en 1440px (Desktop)
- [ ] Texte lisible partout
- [ ] Images ne débordent pas
- [ ] Boutons cliquables sur mobile
- [ ] Navigation fonctionnelle sur mobile
- [ ] Pas de scroll horizontal
