---
name: corrections-bugs
description: Utilise ce skill quand l'utilisateur signale un bug, une erreur, quelque chose qui ne marche pas, un problème d'affichage, ou quand tu rencontres une erreur pendant le développement. Couvre le diagnostic, la correction, et la prévention des bugs.
---

# Corrections de bugs

## Quand utiliser ce skill

- Quand l'utilisateur dit "ça ne marche pas", "il y a un bug", "erreur"
- Quand une commande échoue avec une erreur
- Quand quelque chose ne s'affiche pas comme prévu

## Méthode de diagnostic

### Étape 1 — Comprendre le problème
Pose ces questions à l'utilisateur (en français simple) :
- Que se passe-t-il exactement ?
- Que devrait-il se passer normalement ?
- Quand est-ce que ça a commencé ?
- As-tu changé quelque chose récemment ?

### Étape 2 — Identifier l'erreur
Cherche dans cet ordre :
1. La console du navigateur (erreurs JavaScript)
2. Le terminal (erreurs de build ou de serveur)
3. Les fichiers récemment modifiés
4. Les dépendances (package.json)

### Étape 3 — Expliquer à l'utilisateur
Avant de corriger, explique :
- "Le problème vient de [explication simple]"
- "C'est comme si [analogie simple]"
- "Pour corriger, je vais [action prévue]"

### Étape 4 — Corriger
- Ne change qu'une seule chose à la fois
- Teste après chaque modification
- Si ça ne fonctionne pas après 2 tentatives, explique la situation

### Étape 5 — Vérifier
- Le bug original est-il résolu ?
- N'y a-t-il pas de nouveau bug introduit ?
- Tout le reste fonctionne-t-il encore ?

## Erreurs courantes et solutions

### "Module not found" (Module introuvable)
- Vérifier que le paquet est installé : `npm install`
- Vérifier l'orthographe de l'import
- Vérifier le chemin du fichier

### "Unexpected token" (Caractère inattendu)
- Souvent un problème de syntaxe (virgule, parenthèse manquante)
- Vérifier le fichier indiqué dans l'erreur

### Page blanche
- Ouvrir la console du navigateur
- Souvent une erreur JavaScript qui empêche le rendu
- Vérifier le composant principal (App.jsx)

### "CORS error" (Erreur de partage de ressources)
- Le serveur externe n'autorise pas les requêtes depuis ton site
- Solution : utiliser un proxy ou modifier la configuration du serveur

### Styles qui ne s'appliquent pas
- Vérifier que Tailwind est bien configuré
- Vérifier les classes CSS (orthographe, espaces)
- Vider le cache du navigateur

## Règle absolue

Ne jamais faire plus de 2 tentatives de correction sans informer l'utilisateur.
Toujours expliquer ce qui se passe en termes simples.
