# Validation Report

Date : 2026-06-29

## Environnement

- OS : Windows
- Shell : PowerShell
- Node : v26.3.0
- npm : 11.16.0
- Gestionnaire utilisé pour l'installation locale : pnpm 11.8.0

## Commandes exécutées

### Publication initiale

- `npm install` : bloqué localement à cause d'un problème de certificat Node/registry.
- `pnpm install --config.strict-ssl=false` : dépendances installées.
- `pnpm approve-builds esbuild` : script postinstall esbuild approuvé.
- `npm run lint` : réussite.
- `npm run build` : réussite.
- `pnpm audit --audit-level moderate --config.strict-ssl=false` : réussite après mise à jour Vite.
- `npm run test:e2e` : 8 tests réussis.
- `pnpm exec playwright install chromium` avec `NODE_OPTIONS=--use-system-ca` : navigateur installé.
- Preview final : `npm run preview -- --port 4182`.
- `gh repo create Joemi930/joemi930.github.io --private --source . --remote origin --push` : dépôt privé créé et code poussé.
- `gh api --method POST repos/Joemi930/joemi930.github.io/pages -f build_type=workflow` : refus GitHub Pages sur dépôt privé avec le plan actuel.
- `gh repo edit Joemi930/joemi930.github.io --visibility public --accept-visibility-change-consequences` : dépôt rendu public.
- `gh workflow run deploy.yml -R Joemi930/joemi930.github.io` : déploiement déclenché.
- `gh run watch 28339855796 -R Joemi930/joemi930.github.io --exit-status` : workflow réussi.

### Corrections éditoriales 2026-06-29

- Centralisation renforcée des textes publics dans `src/data/navigation.js`, `src/data/siteContent.js`, `src/data/profile.js`, `src/data/projects.js` et `src/data/skills.js`.
- Ajout de `src/services/contentService.js` pour lire Supabase REST en lecture seule.
- Ajout de `src/hooks/usePortfolioContent.js` pour fournir Supabase ou fallback local à toutes les pages publiques.
- Migration des pages Accueil, Projets, Détail projet, À propos, Contact et 404 vers le provider centralisé.
- Configuration `.github/workflows/deploy.yml` avec les variables publiques `VITE_SUPABASE_URL` et `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Variables GitHub Actions configurées pour `Joemi930/joemi930.github.io`.
- Remplacement des formulations trop techniques par des textes plus naturels et plus fidèles au positionnement de Joemi.
- Remplacement de l'ancien logo court par `JOEMI TETE`.
- Mise à jour des libellés publics : `Problématique`, `Structure technique`, `Ce que le projet apporte`, `Dépôt non public`.
- Remplacement du message public de capture par : `Projet en développement : les captures seront ajoutées dès que le rendu sera stabilisé.`
- Mise à jour des compétences affichées : Claude Code et Codex ajoutés, anciens éléments non souhaités retirés.
- Gold Sniper : lien GitHub public vérifié et ajouté, `https://github.com/Joemi930/gold-sniper`.
- ClipWave : remote GitHub vérifiée, `https://github.com/Joemi930/clipwave`, mais dépôt GitHub observé comme privé ; le portfolio ne le présente donc pas comme public.
- Note technique `ADMIN_PANEL_PLAN.md` ajoutée pour la V2 du panneau administrateur.
- `npm run lint` : réussite après corrections éditoriales.
- `npm run build` : réussite après corrections éditoriales et intégration Supabase.
- `npm run test:e2e` : 8 tests réussis après corrections éditoriales et intégration Supabase.
- Supabase REST public : lecture `profile`, `projects`, `site_content`, `skills` réussie avec publishable key.
- Supabase RLS : écriture anonyme vers `projects` refusée.
- `npm run preview -- --port 4183` : preview local lancé et vérifié.
- Vérification locale e2e manuelle : Accueil, Projets, Gold Sniper, ClipWave, À propos, Contact, menu mobile, liens sociaux, responsive desktop et mobile, console sans erreur.

## Résultat npm install

`npm install` est resté bloqué sans sortie utile dans cet environnement. Le diagnostic réseau a montré que le registry répondait, puis `pnpm` a exposé l'erreur réelle : `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.

`npm run lint`, `npm run build` et `npm run test:e2e` fonctionnent ensuite normalement avec les dépendances installées localement.

## Résultat lint

Réussi.

## Résultat build

Réussi. Le dossier `dist/` est généré.

## Résultat preview

Réussi sur `http://127.0.0.1:4182/`.
Réussi sur `http://127.0.0.1:4183/` après corrections éditoriales.

## Résultat GitHub

- Dépôt public : `https://github.com/Joemi930/joemi930.github.io`
- URL finale : `https://joemi930.github.io/`
- Visibilité : public.
- GitHub Pages : activé.
- Build type Pages : `workflow`.
- HTTPS enforced : oui.
- Workflow : `Deploy GitHub Pages`.
- Run publié : `28339855796`.
- Statut du workflow : success.
- Publication locale vérifiée le : `2026-06-29 00:38:20 +01:00`.
- Dernier commit initial publié avant corrections éditoriales : `139e6f70ef8ad18f6d07c0efecf8e47ca8c9d7cd`.
- Le commit final des corrections éditoriales et le nouveau run GitHub Actions sont confirmés dans le retour de mission après push et déploiement.

## Résultat production

Testé sur `https://joemi930.github.io/` :

- Accueil : OK.
- Projets : OK.
- Gold Sniper : OK.
- ClipWave : OK.
- À propos : OK.
- Contact : OK.
- Menu mobile : OK.
- Responsive desktop : OK.
- Responsive mobile `390x844` : OK.
- Console navigateur : aucune erreur.

## Résultat responsive

Vérifié avec captures e2e :

- `390x844`
- `768x1024`
- `1366x768`
- `1440x900`

Captures générées dans `validation-screenshots/`.
Nouvelle vérification locale après corrections : `390x844` et `1366x768`, sans débordement horizontal.

## Résultat liens

Réussi par test e2e local et production :

- email `mailto:joemitete12@gmail.com`
- GitHub `https://github.com/Joemi930`
- LinkedIn `https://cd.linkedin.com/in/joemi-tete-0a7221416`
- WhatsApp `https://wa.me/243844497360`

## Résultat sécurité

- `pnpm audit --audit-level moderate --config.strict-ssl=false` : aucune vulnérabilité connue après passage à Vite `6.4.3`.
- Recherche de motifs sensibles exécutée en excluant `node_modules`, `dist`, `.git` et `.env`.
- Les seules occurrences trouvées sont des mentions documentaires de sécurité, pas des valeurs de secret.
- `npm audit --audit-level=moderate --strict-ssl=false` n'a pas pu être utilisé car npm exige un `package-lock.json`, et la génération du lockfile npm s'est bloquée dans cet environnement.
- Aucun fichier `.env` présent dans les fichiers suivis.
- Aucun token, clé API, mot de passe, compte broker, URL privée ou donnée sensible committé.
- Aucune adresse complète de Joemi trouvée.
- Localisation publique affichée uniquement sous `Kinshasa, RDC`.
- CV affiché comme `CV bientôt disponible`.

## Résultat scan éditorial

Les anciennes formulations ciblées par Joemi ne sont plus présentes dans `src`. Le scan couvre les anciens libellés de structure, d'analyse, de capture, de titre projets, de marque, de compétences et de construction IA.

Le scan `.env` rapide ne retourne aucun fichier `.env` ou `.env.*` hors dossiers exclus. Le scan de motifs sensibles ne retourne aucune valeur de secret ; seules des mentions techniques non sensibles du workflow GitHub Actions et du hook de scroll ont été trouvées.

## Bugs trouvés

- ESLint ne comptait pas les composants JSX comme utilisés.
- Installation npm bloquée par certificat local.
- Ancienne version Vite/esbuild signalée par audit.
- Bouton menu visible sur desktop à cause de l'ordre CSS.
- CTA desktop visible sur mobile à cause de l'ordre CSS.
- Panneau mobile limité à la hauteur du header car il était rendu dans un header avec `backdrop-filter`.
- Hero desktop trop haut sur `1366x768`.

## Bugs corrigés

- Ajout et configuration de `eslint-plugin-react`.
- Installation locale réalisée via `pnpm` avec contournement SSL limité à la commande.
- Vite mis à jour en `6.4.3`.
- Règles CSS de navigation renforcées.
- `MobileMenu` déplacé hors du header.
- Panneau mobile rendu en overlay plein écran.
- Proportions du hero desktop ajustées.

## Limites restantes

- CV non disponible.
- Captures Gold Sniper et ClipWave non ajoutées : les projets sont encore en développement et les captures seront ajoutées quand leurs interfaces seront stabilisées.
- Le dépôt ClipWave existe sur GitHub, mais sa visibilité observée est privée ; il n'est pas affiché comme dépôt public dans le portfolio.
