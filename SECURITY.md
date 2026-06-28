# Security

## Nature du site

Ce portfolio est un site statique. Il ne contient pas de backend, ne stocke pas de données utilisateur et ne collecte volontairement aucune information personnelle.

## Secrets

Le site ne doit jamais contenir :

- clé API
- token
- mot de passe
- fichier `.env`
- identifiant privé
- adresse complète

Les fichiers `.env` et variantes sont exclus par `.gitignore`.

## Liens externes

Les liens externes ouvrent dans un nouvel onglet avec :

```jsx
target="_blank"
rel="noopener noreferrer"
```

## Limites

Ce site statique réduit la surface d'attaque, mais il ne garantit pas une sécurité absolue. La sécurité dépend aussi de l'hébergement, du navigateur, des dépendances et de la configuration GitHub Pages.

## Signalement

Pour signaler un problème de sécurité, contacter :

```txt
joemitete12@gmail.com
```
