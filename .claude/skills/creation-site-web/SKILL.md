---
name: creation-site-web
description: Utilise ce skill quand l'utilisateur demande de créer un site web, une page web, un site vitrine, une landing page, ou tout projet web complet. Couvre la structure HTML, les composants, la navigation, et l'organisation des fichiers.
---

# Création de site web

## Quand utiliser ce skill

Quand l'utilisateur demande de créer :
- Un site vitrine (restaurant, entreprise, portfolio, etc.)
- Une landing page (page d'atterrissage)
- Un site multi-pages
- Une application web

## Structure de fichiers à créer

```
src/
├── components/          # Composants réutilisables
│   ├── Header.jsx       # En-tête avec navigation
│   ├── Footer.jsx       # Pied de page
│   ├── Hero.jsx         # Section principale en haut de page
│   ├── Button.jsx       # Bouton réutilisable
│   └── Card.jsx         # Carte pour afficher du contenu
├── pages/               # Pages du site
│   ├── Home.jsx         # Page d'accueil
│   ├── About.jsx        # Page À propos
│   └── Contact.jsx      # Page Contact
├── styles/              # Fichiers de style
│   └── globals.css      # Styles globaux
├── assets/              # Images, polices, icônes
│   └── images/
├── App.jsx              # Composant principal
└── main.jsx             # Point d'entrée
```

## Étapes de création

### Étape 1 — Initialiser le projet
- Créer le projet avec Vite + React
- Installer Tailwind CSS
- Configurer la structure de dossiers

### Étape 2 — Créer les composants de base
- Header avec navigation responsive
- Footer avec informations de contact
- Section Hero avec titre accrocheur et appel à l'action

### Étape 3 — Créer les pages
- Assembler les composants dans chaque page
- Ajouter le contenu spécifique à chaque page
- Configurer la navigation entre les pages (React Router)

### Étape 4 — Styliser
- Appliquer le design avec Tailwind CSS
- Ajouter les couleurs et typographies du projet
- Rendre tout responsive (mobile, tablette, desktop)

### Étape 5 — Finaliser
- Ajouter les métadonnées SEO (titre, description)
- Optimiser les images
- Tester sur différentes tailles d'écran
- Préparer le déploiement

## Règles de qualité

- Chaque composant doit être dans son propre fichier
- Les commentaires doivent être en français
- Toujours prévoir le responsive dès le début
- Utiliser des images placeholder si le client n'a pas fourni les siennes
- Ajouter des textes alternatifs sur toutes les images
