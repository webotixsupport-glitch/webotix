# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commandes essentielles

```bash
npm run dev       # Lancer le serveur de développement (http://localhost:5173)
npm run build     # Compiler pour la production (dossier dist/)
npm run preview   # Prévisualiser le build de production
npm run lint      # Vérifier les erreurs de code avec ESLint
```

---

## Architecture du projet

**Stack** : React 19 + Vite 8 + Tailwind CSS 4 (via `@tailwindcss/vite`) + React Router DOM 7

### Structure des fichiers importants

```
src/
  App.jsx          — Router principal + FooterConditionnel + ScrollAnimator
  main.jsx         — Point d'entrée React
  index.css        — Reset, polices, animations globales (.fade-up, .will-animate, .card-lift)
  components/
    Header.jsx     — Header fixe, toujours sombre (fond rgba sombre + blur)
    Footer.jsx     — Footer sombre #04060b, masqué sur /contact
    Logo.jsx       — SVG + texte "WEBOTIX" dégradé bleu→indigo
  pages/
    Home.jsx       — Page d'accueil (Hero, Services, Avantages, Processus, Témoignages, CTA)
    About.jsx      — À propos (Hero, Qui sommes-nous, Valeurs, Citation)
    Contact.jsx    — Contact (En-tête, Cartes infos, Formulaire simulé)
```

### Patterns clés à respecter absolument

**Centrage** : toujours `maxWidth: '1200px'` + `margin: '0 auto'` + `padding: '0 24px'` en CSS inline. Ne jamais utiliser Tailwind `max-w-*` seul.

**Styles** : CSS inline majoritairement (pour éviter les conflits Tailwind v4). Tailwind utilisé uniquement pour quelques utilitaires (`hidden md:block`, `flex`, `min-h-screen`).

**Polices** : Outfit (800, titres) + DM Sans (corps). **Inter est interdit.** Chargées via Google Fonts dans `index.css`.

**Animations** :
- `.fade-up` / `.fade-up-2` / `.fade-up-3` → animation CSS au chargement de page (utilisé sur le Hero)
- `.will-animate` → fade-in au scroll déclenché par `ScrollAnimator` dans `App.jsx` (IntersectionObserver global, threshold 0.15). Ajouter `transitionDelay` en style inline pour les effets en cascade.
- `.card-lift` → hover lift CSS (translateY -6px + ombre)

**Hover sur cartes** : `onMouseEnter` / `onMouseLeave` React avec `e.currentTarget.style` (pas de classes CSS conditionnelles).

### Palette de couleurs (thème SOMBRE validé)

| Usage | Valeur |
|---|---|
| Fond page | `#f8f9ff` (pages) / `#080b14` (App wrapper) |
| Fond footer | `#04060b` |
| Accent principal | `#0ea5e9` (sky-500) |
| Accent secondaire | `#6366f1` (indigo) |
| Accent tertiaire | `#f59e0b` (amber) |
| Accent succès | `#22c55e` (vert) |
| Header | `rgba(9,9,15,0.30→0.55)` + `backdropFilter blur(20px)` |

### Photos et médias

Images Unsplash uniquement (IDs permanents documentés dans la mémoire). Format URL :
```
https://images.unsplash.com/{photo-id}?w=700&h=480&fit=crop&q=85
```
Avatars témoignages : `?w=80&h=80&fit=crop&crop=faces&q=85`

### Routing

- `/` → Home.jsx
- `/a-propos` → About.jsx
- `/contact` → Contact.jsx (footer masqué sur cette route)

Le composant `FooterConditionnel` dans `App.jsx` gère l'affichage conditionnel du footer.

---

## Règles de communication (OBLIGATOIRES)

- **Toujours en français** — explications, commentaires dans le code, messages de commit
- **Expliquer avant de coder** — décrire ce qui va être fait en langage simple avant chaque action
- **Confirmation avant changements importants** — ne jamais modifier plusieurs fichiers en profondeur sans accord
- **Maximum 2 tentatives** avant d'informer l'utilisateur d'un blocage

L'utilisateur est non-développeur francophone. Adapter le niveau de langage en conséquence.

---

## Déploiement

**Ce projet est hébergé sur un VPS Hostinger — déploiement via GitHub Actions (PAS Coolify).**

| Élément | Valeur |
|---|---|
| URL live | https://webotix.cloud |
| GitHub source | https://github.com/webotixsupport-glitch/webotix (public, branche main) |
| Workflow | `.github/workflows/deploy.yml` |
| Serveur web | nginx:alpine (Docker) + Traefik (SSL auto Let's Encrypt) |
| Fichiers servis | `/var/www/webotix/` sur le VPS |

### Pour déployer une mise à jour
```bash
git push origin main
```
C'est tout — GitHub Actions build et déploie automatiquement en ~1 minute.

### Ce qui se passe automatiquement
1. Build React/Vite sur le runner GitHub (Node 22)
2. Copie de `dist/` vers `/var/www/webotix/` sur le VPS via SCP
3. Rechargement de nginx
4. Restauration de la mémoire de Beep si nécessaire

### Règle critique
Ne JAMAIS commiter `node_modules/` ou `dist/`. Coolify est supprimé — ne plus l'utiliser.

---

## Skills et agents disponibles

- `/deployer` ou `@deployeur` — déploiement complet sur VPS Coolify (autonome)
- Consulte `.claude/skills/` pour les autres compétences spécialisées.
