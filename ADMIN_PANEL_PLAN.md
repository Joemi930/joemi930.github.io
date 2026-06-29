# Plan V2 - Panneau administrateur

Objectif : préparer une V2 permettant à Joemi de modifier le portfolio sans éditer le code.

## Fonctionnalités prévues

- Authentification sécurisée pour accéder au panneau.
- Gestion du profil : nom, titre, bio, localisation, avatar.
- Gestion des projets : titre, description, statut, technologies, liens, captures.
- Gestion des compétences par catégorie.
- Gestion des liens sociaux : GitHub, LinkedIn, WhatsApp, email.
- Upload du CV avec statut public `CV bientôt disponible` tant qu'aucun fichier n'est validé.
- Upload des captures projets avec validation avant publication.
- Option CMS ou backend dédié selon le niveau d'autonomie souhaité.

## Options techniques

| Option | Points forts | Limites |
| --- | --- | --- |
| Supabase | Auth, base PostgreSQL, stockage fichiers, API rapide à mettre en place. | Demande de structurer les règles d'accès avec soin. |
| Firebase | Auth simple, stockage fichiers, déploiement rapide, bon écosystème. | Modèle NoSQL moins naturel pour des contenus relationnels. |
| Strapi | CMS complet, rôles, médias, API REST/GraphQL. | Backend Node à héberger et maintenir. |
| Directus | Interface admin propre sur base SQL existante, permissions détaillées. | Plus lourd qu'une simple configuration statique. |
| Sanity | Très bon studio éditorial, contenu flexible, API robuste. | Modèle de contenu à concevoir et dépendance à un service externe. |

## Recommandation initiale

Supabase est une bonne première option pour une V2 légère : authentification, base de données et stockage des médias dans le même outil. Si Joemi veut surtout un vrai CMS éditorial avec une interface prête à l'emploi, Directus ou Strapi seront plus adaptés.

## Étapes proposées

1. Définir les champs éditables du portfolio.
2. Créer le schéma de données.
3. Ajouter l'authentification.
4. Construire les écrans admin.
5. Ajouter l'upload CV et captures.
6. Protéger les routes admin.
7. Tester la publication du contenu côté site public.

Ce panneau administrateur n'est pas inclus dans la correction actuelle.
