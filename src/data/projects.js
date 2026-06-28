export const projects = [
  {
    slug: "gold-sniper",
    title: "Gold Sniper",
    category: "IA / Trading / Moteur autonome",
    status: "En développement avancé",
    shortDescription:
      "Moteur Python de décision et de replay pour XAUUSD, organisé autour d'agents, d'un blackboard, de diagnostics et d'une gestion du risque.",
    longDescription:
      "Gold Sniper est un projet Python orienté trading automatisé et simulation. Le code contient un moteur asynchrone, une chaîne d'agents spécialisés, une passerelle MetaTrader 5, un pipeline de replay, des outils de diagnostic POI/Micro, un dashboard aiohttp/WebSocket et plusieurs tests ciblant la décision, la sécurité du dashboard et le backtesting sans MT5.",
    problem:
      "Construire un système capable d'analyser le marché de manière structurée, de rejouer des scénarios historiques et de documenter les raisons d'une décision sans exposer les secrets ni promettre une rentabilité non démontrée.",
    solution:
      "Le projet découpe la logique en agents, contrats de décision, replay, gestion du risque, dashboard et diagnostics. Les décisions sont publiées dans un blackboard, puis évaluées par des composants spécialisés avant toute action simulée ou connectée.",
    features: [
      "Moteur asyncio supervisant ingestion, agents, orchestrateur, watchdogs et notifications.",
      "Agents spécialisés pour contexte marché, cartographie, liquidité, Fibonacci, microstructure, sentinelle et sessions.",
      "Pipeline de replay avec EvidenceBundle, ProfessionalDecisionEngine, Kasper Scenario Engine et readiness/risk gate.",
      "Dashboard local aiohttp avec routes API, WebSocket et logique de redaction des données sensibles.",
      "Outils de diagnostic pour POI, micro-readiness, proximité d'entrée et synergie POI/Micro."
    ],
    technologies: ["Python", "asyncio", "aiohttp", "MetaTrader 5", "pandas", "matplotlib", "discord.py", "WebSocket"],
    architecture: [
      { label: "Data", description: "Ingestion ticks/bougies, historique multi-timeframes et préparation replay." },
      { label: "Agents", description: "Chaîne d'agents 1 à 7 pour enrichir le contexte de décision." },
      { label: "Decision", description: "EvidenceBundle, ProfessionalDecisionEngine, contrats POI/Micro et Kasper scenario." },
      { label: "Risk", description: "Calcul de lot, seuils, garde-fous d'exécution et mode paper/live." },
      { label: "Dashboard", description: "Serveur aiohttp, API d'état, flux WebSocket et redaction des champs sensibles." },
      { label: "Testing", description: "Tests unitaires et diagnostics pour agents, dashboard, replay et modèles de risque." }
    ],
    screenshots: [],
    repository: {
      isPublic: false,
      url: null
    },
    demo: {
      available: false,
      url: null
    },
    highlights: [
      "Architecture événementielle avec blackboard partagé.",
      "Séparation entre replay propre et orchestrateur live.",
      "Tests de sécurité vérifiant la redaction des tokens et comptes dans le dashboard.",
      "Diagnostics dédiés aux blocages POI_MISSING et MICRO_MISSING."
    ],
    learnings: [
      "Structurer un moteur décisionnel en contrats vérifiables.",
      "Limiter les promesses produit quand les résultats dépendent encore de validations techniques.",
      "Documenter les chemins de décision pour garder le système auditable."
    ],
    filters: ["IA", "Automation", "En développement"]
  },
  {
    slug: "clipwave",
    title: "ClipWave",
    category: "Mobile / Vidéo / Plateforme artistes",
    status: "Prototype en développement",
    shortDescription:
      "Prototype académique d'application mobile et desktop pour publier, modérer et découvrir des clips vidéos d'artistes.",
    longDescription:
      "ClipWave est structuré comme un monorepo avec une application Flutter/Dart et une API NestJS/TypeScript. Le code actuel confirme un socle Flutter minimal, un service API NestJS initial, des dossiers de modules backend et une documentation d'architecture détaillant les rôles, la validation administrative, les commentaires, likes, abonnements, recommandations et futures intégrations vidéo.",
    problem:
      "Permettre aux artistes de publier des clips tout en gardant une validation administrative, une structure de rôles et une base technique capable d'évoluer sans stocker les fichiers vidéo directement en base.",
    solution:
      "Le projet prévoit une application Flutter pour mobile/desktop, une API NestJS modulaire, PostgreSQL pour les métadonnées, Cloudflare Stream pour la vidéo, Redis pour le cache et Firebase Cloud Messaging pour les notifications. Le code reste au stade prototype avec des placeholders de modules.",
    features: [
      "Application Flutter/Dart initiale avec thème Material 3.",
      "API NestJS/TypeScript initialisée avec scripts de build, test et développement.",
      "Modules backend préparés pour auth, users, artists, videos, uploads, comments, likes, follows, playlists, moderation, admin et notifications.",
      "Architecture documentée pour visiteurs, utilisateurs, artistes, modérateurs, admins et super admin.",
      "Règle métier documentée : publication de vidéos visible seulement après validation administrative."
    ],
    technologies: ["Flutter", "Dart", "NestJS", "TypeScript", "PostgreSQL prévu", "Cloudflare Stream prévu", "Redis prévu", "Firebase FCM prévu"],
    architecture: [
      { label: "Mobile", description: "Application Flutter prévue pour mobile et desktop." },
      { label: "Backend", description: "API NestJS pensée comme monolithe modulaire." },
      { label: "Data", description: "PostgreSQL prévu pour utilisateurs, vidéos, rôles et interactions." },
      { label: "Video", description: "Cloudflare Stream prévu pour stockage, encodage et diffusion." },
      { label: "Moderation", description: "Validation admin, signalements et contrôle des contenus." },
      { label: "Testing", description: "Dossiers prévus pour tests frontend, backend, sécurité et scénarios." }
    ],
    screenshots: [],
    repository: {
      isPublic: false,
      url: null
    },
    demo: {
      available: false,
      url: null
    },
    highlights: [
      "Vision claire pour une plateforme de clips orientée artistes.",
      "Architecture documentée avant implémentation complète.",
      "Choix d'un monolithe modulaire pour éviter la complexité prématurée.",
      "Modération administrative prévue dès le MVP."
    ],
    learnings: [
      "Distinguer architecture validée et fonctionnalités déjà codées.",
      "Préparer une app mobile évolutive sans surcharger le prototype.",
      "Documenter les règles métier avant de développer les modules."
    ],
    filters: ["Web", "En développement"]
  }
];
