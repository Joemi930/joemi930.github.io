# Validation Report

Date : 2026-06-29

## Environnement

- OS : Windows
- Shell : PowerShell
- Node : v26.3.0
- npm : 11.16.0
- Gestionnaire utilisé pour l'installation locale : pnpm 11.8.0

## Commandes exécutées

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

## Résultat npm install

`npm install` est resté bloqué sans sortie utile dans cet environnement. Le diagnostic réseau a montré que le registry répondait, puis `pnpm` a exposé l'erreur réelle : `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.

`npm run lint`, `npm run build` et `npm run test:e2e` fonctionnent ensuite normalement avec les dépendances installées localement.

## Résultat lint

Réussi.

## Résultat build

Réussi. Le dossier `dist/` est généré.

## Résultat preview

Réussi sur `http://127.0.0.1:4182/`.

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
- Commit déployé au moment de la publication : `62574413ce2922b5b2678b36f4baf3e5960e9de1`.

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

Vérifié avec captures Playwright :

- `390x844`
- `768x1024`
- `1366x768`
- `1440x900`

Captures générées dans `validation-screenshots/`.

## Résultat liens

Réussi par test Playwright local et production :

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
- Aucun token, clé API, mot de passe, compte MT5, URL privée ou donnée sensible committé.
- Aucune adresse complète de Joemi trouvée.
- Localisation publique affichée uniquement sous `Kinshasa, RDC`.
- CV affiché comme `CV bientôt disponible`.

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
- Captures Gold Sniper et ClipWave non ajoutées, car les projets sources n'ont pas été lancés en rendu complet pendant cette passe.
