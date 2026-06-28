# Portfolio Joemi Tete

Portfolio officiel de TETE NGITUKA JOEMI, étudiant en Master Génie logiciel à Kinshasa, RDC.

## Stack

- React 18
- Vite
- JavaScript
- React Router avec `HashRouter`
- CSS moderne organisé par thème, layout, composants et animations
- GitHub Actions pour GitHub Pages

## Installation

```bash
npm install
```

Si l'environnement local bloque le certificat du registry npm, installer avec un gestionnaire compatible en gardant le projet inchangé. Dans cette livraison, `pnpm install --config.strict-ssl=false` a été utilisé pour contourner une erreur locale `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.

## Lancement local

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview production

```bash
npm run preview
```

## Tests

```bash
npm run lint
npm run build
npm run test:e2e
```

## Déploiement

Le workflow `.github/workflows/deploy.yml` construit `dist` puis publie sur GitHub Pages.

Le projet cible le dépôt utilisateur :

```txt
Joemi930/joemi930.github.io
```

## Structure

```txt
public/
  images/profile/avatar.jpg
  images/projects/
  cv/README.md
src/
  components/
  data/
  hooks/
  layout/
  pages/
  sections/
  styles/
```

Les contenus publics sont centralisés dans `src/data`.
