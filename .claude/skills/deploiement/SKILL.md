---
name: deploiement
description: Utilise ce skill quand l'utilisateur veut mettre son site en ligne, déployer, publier, héberger, ou rendre accessible sur internet. Couvre Vercel, Netlify, et la préparation au déploiement.
---

# Déploiement

## Quand utiliser ce skill

- Quand l'utilisateur dit "je veux mettre mon site en ligne"
- Quand le projet est terminé et prêt à être publié
- Quand l'utilisateur mentionne Vercel, Netlify, hébergement, ou déploiement

## Checklist avant déploiement

Avant toute mise en ligne, vérifier :

- [ ] Le build de production fonctionne sans erreur (`npm run build`)
- [ ] Aucun lien vers localhost dans le code
- [ ] Les variables d'environnement sont configurées
- [ ] Le fichier .gitignore exclut node_modules et .env
- [ ] Les images sont optimisées
- [ ] Le SEO est en place (titres, descriptions, sitemap)
- [ ] Le site est responsive
- [ ] Pas de console.log oublié dans le code

## Option 1 : Vercel (recommandé pour React)

### Étapes
1. S'assurer que le projet est sur GitHub
2. Aller sur vercel.com et se connecter avec GitHub
3. Importer le projet depuis GitHub
4. Vercel détecte automatiquement les paramètres
5. Cliquer sur "Deploy"
6. Le site est en ligne avec une URL du type nom-du-projet.vercel.app

### Configuration Vercel
Créer un fichier `vercel.json` à la racine si nécessaire :
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Option 2 : Netlify

### Étapes
1. S'assurer que le projet est sur GitHub
2. Aller sur netlify.com et se connecter avec GitHub
3. "Add new site" > "Import an existing project"
4. Sélectionner le dépôt GitHub
5. Build command : `npm run build`
6. Publish directory : `dist` (pour Vite)
7. Cliquer sur "Deploy site"

## Option 3 : GitHub Pages (sites statiques simples)

Pour les sites HTML/CSS simples sans React :
1. Activer GitHub Pages dans les paramètres du dépôt
2. Sélectionner la branche `main` et le dossier `/root`
3. Le site est en ligne

## Nom de domaine personnalisé

Si l'utilisateur a un nom de domaine :
1. Ajouter le domaine dans les paramètres de Vercel/Netlify
2. Configurer les DNS chez le fournisseur de domaine
3. Attendre la propagation (peut prendre jusqu'à 48h)
4. Le HTTPS est automatique sur Vercel et Netlify

## Après le déploiement

- Vérifier que le site fonctionne correctement en ligne
- Tester sur mobile et desktop
- Vérifier les performances avec Lighthouse (outil intégré à Chrome)
- Partager l'URL avec l'utilisateur
