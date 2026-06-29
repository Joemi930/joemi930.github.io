# Admin Integration

Date : 2026-06-29

## Objectif

Le portfolio public reste hébergé sur GitHub Pages et lit maintenant les contenus publiés depuis Supabase. Si Supabase est indisponible, l'affichage retombe automatiquement sur les fichiers locaux `src/data`.

## Source distante

- Supabase project ref : `wkpcrxsvhfogegrcddgb`
- URL publique : `https://wkpcrxsvhfogegrcddgb.supabase.co`
- Clé utilisée côté public : publishable key configurée en GitHub Actions variable.

## Fallback local

Les fichiers `src/data/*.js` restent la source de secours :

- profil
- navigation
- textes publics
- projets
- compétences
- parcours
- liens sociaux

## Sécurité

- Aucune clé serveur n'est utilisée dans le portfolio public.
- Le portfolio public ne possède aucune route d'écriture.
- Les lectures Supabase sont limitées par RLS aux contenus `is_published` ou `is_visible`.
- Les variables GitHub Pages configurées sont publiques par nature et ne remplacent pas RLS.

## Admin séparé

Le backoffice est préparé dans un dépôt privé séparé `Joemi930/joemi-portfolio-admin`, avec Next.js, Supabase Auth, RLS, Storage, validations Zod, audit logs et déploiement cible Vercel `joemi-portfolio-admin`.
