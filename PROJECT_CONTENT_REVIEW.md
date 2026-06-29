# Project Content Review

Date : 2026-06-28

## Gold Sniper

### Résumé réel

Gold Sniper est un projet Python de moteur décisionnel pour XAUUSD/trading, avec replay, agents, blackboard, dashboard et diagnostics. Le code contient des éléments de mode live/paper, mais le portfolio ne promet pas de rentabilité ni de production ready.

### Technologies observées

- Python
- asyncio
- aiohttp
- WebSocket
- pandas
- matplotlib
- discord.py
- python-dotenv
- psutil
- schedule

### Structure observée

- `main.py` : bootstrap, cold start, connecteur broker, dashboard, Discord command loop.
- `core/` : moteur, blackboard, connecteur broker, ingestion ticks, candle builder.
- `agents/` : agents 1 à 7, macro monitor, risk manager.
- `replay/` : replay engine, decision pipeline, evidence builder, no-lookahead guard.
- `strategy/` : contrats, ProfessionalDecisionEngine, Kasper scenario, risk allocator.
- `execution/` : trade manager, broker gateway, execution guard, risk calculator.
- `web/` : dashboard aiohttp, API, WebSocket, redaction de secrets.
- `tests/` : tests agents, replay, dashboard security, risk model et diagnostics.

### Fonctionnalités confirmées

- Moteur asyncio supervisé.
- Chaîne d'agents spécialisés.
- Préchargement historique multi-timeframes.
- Pipeline replay avec EvidenceBundle et décision structurée.
- Dashboard local avec API et WebSocket.
- Redaction des secrets dans les payloads dashboard.
- Outils de diagnostic POI/Micro et readiness/risk gate.
- Tests ciblés pour dashboard, agents, backtest hors connexion broker et modèles de risque.

### Fonctionnalités supposées mais non confirmées

- Rentabilité du bot.
- Robustesse production.
- Déploiement live stable.
- Sécurité complète.
- Disponibilité publique du dashboard.

### Statut réel

En développement avancé.

### Captures recommandées

- Dashboard local nettoyé de toute donnée sensible.
- Résumé replay anonymisé.
- Vue de logs sans token, compte, serveur broker ou URL Cloudflare privée.

### Risques de présentation

- Ne pas promettre de performance financière.
- Ne pas exposer `.env`, compte broker, tokens Discord ou URL Cloudflare.
- Ne pas présenter les diagnostics comme une validation finale.

### Texte final proposé pour le portfolio

Moteur Python de décision et de replay pour XAUUSD, organisé autour d'agents, d'un blackboard, de diagnostics et d'une gestion du risque. Le projet est en développement avancé et sert à explorer une architecture de décision auditable, sans promesse de rentabilité.

## ClipWave

### Résumé réel

ClipWave est un prototype académique d'application mobile/desktop pour publier des clips vidéos d'artistes. Le dépôt contient une app Flutter minimale, une API NestJS initiale, une architecture documentée et des modules backend placeholder.

### Technologies observées

- Flutter
- Dart
- NestJS
- TypeScript
- Jest
- PostgreSQL prévu par la documentation
- Cloudflare Stream prévu par la documentation
- Redis prévu par la documentation
- Firebase Cloud Messaging prévu par la documentation

### Structure observée

- `apps/clipwave_app/` : application Flutter.
- `services/api/` : API NestJS.
- `services/api/src/modules/` : modules préparés pour auth, users, artists, videos, uploads, comments, likes, follows, playlists, moderation, admin, notifications.
- `docs/` : architecture, API, database, security, UI/UX.
- `tests/` : organisation prévue pour tests frontend, backend, sécurité et scénarios.

### Fonctionnalités confirmées

- App Flutter démarre sur un écran texte `ClipWave`.
- API NestJS initialisée.
- Scripts backend `start`, `start:dev`, `build`, `test`.
- Architecture fonctionnelle documentée.
- Règle de validation administrative des vidéos documentée.
- Rôles utilisateur/artiste/modérateur/admin documentés.

### Fonctionnalités supposées mais non confirmées

- Upload vidéo fonctionnel.
- Authentification complète.
- Lecture vidéo.
- Commentaires, likes, follows et playlists implémentés.
- Notifications push.
- Recommandations intelligentes.
- Stockage Cloudflare Stream opérationnel.

### Statut réel

Prototype en développement.

### Captures recommandées

- Écran Flutter réel après évolution UI.
- Swagger/API ou logs de modules quand l'API expose des routes réelles.
- Maquettes validées si elles ne contiennent aucune donnée privée.

### Risques de présentation

- Ne pas présenter la plateforme comme terminée.
- Distinguer clairement code existant et architecture prévue.
- Ne pas afficher de capture fictive d'upload ou de lecture vidéo.

### Texte final proposé pour le portfolio

Prototype académique d'application mobile et desktop pour publier, modérer et découvrir des clips vidéos d'artistes. Le code actuel confirme un socle Flutter, une API NestJS initiale et une architecture documentée, mais les fonctionnalités métier restent à implémenter.
