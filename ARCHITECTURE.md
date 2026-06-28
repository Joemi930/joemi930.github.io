# Architecture

## Vue générale

Le portfolio est une application React statique construite avec Vite. Il ne contient pas de backend et ne collecte volontairement aucune donnée.

## React + Vite

Vite est utilisé pour obtenir un build rapide, une configuration simple et une sortie statique adaptée à GitHub Pages.

## Routing

Le routing utilise `HashRouter` afin d'éviter les erreurs 404 lors d'un accès direct à une route GitHub Pages.

Routes principales :

- `/`
- `#/projects`
- `#/projects/gold-sniper`
- `#/projects/clipwave`
- `#/about`
- `#/contact`

## Données

Les données publiques sont dans `src/data` :

- `profile.js`
- `socials.js`
- `skills.js`
- `projects.js`
- `experience.js`

Les composants lisent ces fichiers au lieu de dupliquer les contenus dans chaque page.

## Composants

Les composants réutilisables se trouvent dans `src/components` :

- navigation
- boutons
- badges
- cartes projets
- footer
- titres de section

Les sections composées se trouvent dans `src/sections`.

## Thème

Le thème Onyx / Candy Blue est défini dans `src/styles/variables.css`, puis appliqué dans :

- `global.css`
- `layout.css`
- `components.css`
- `animations.css`

## Animations

Les animations restent légères :

- reveal au scroll
- hover doux des cartes
- halo discret des boutons
- micro-animation du bloc code
- menu mobile fluide

`prefers-reduced-motion` désactive les animations.

## Sécurité

Le site est statique. Les liens externes utilisent `target="_blank"` avec `rel="noopener noreferrer"`. Aucun `.env`, token ou secret n'est lu par l'application.

## Limites MVP

- Le CV n'est pas disponible.
- Les dépôts projets sont affichés comme privés.
- Les captures Gold Sniper et ClipWave ne sont pas inventées.
- Le déploiement distant dépendra de la disponibilité GitHub Pages sur le dépôt cible.
