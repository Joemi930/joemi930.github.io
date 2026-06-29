export const projects = [
  {
    slug: "gold-sniper",
    title: "Gold Sniper",
    category: "IA / Trading / Moteur autonome",
    status: "En développement avancé",
    shortDescription:
      "Projet Python autour de l'analyse de marché, de la simulation et de la prise de décision structurée.",
    longDescription:
      "Gold Sniper est un projet Python orienté trading automatisé, analyse de marché et simulation. Il regroupe un moteur asynchrone, une chaîne d'agents spécialisés, un pipeline de replay, des outils de diagnostic, un dashboard et des tests ciblant la décision, le risque et les scénarios de marché.",
    problem:
      "Les décisions de trading peuvent vite devenir difficiles à suivre quand l'analyse, le contexte, le risque et les validations techniques ne sont pas organisés clairement.",
    solution:
      "Gold Sniper apporte une base structurée pour organiser l'analyse, rejouer des scénarios, suivre les signaux importants et garder une trace claire des décisions sans promettre de résultat financier.",
    features: [
      "Moteur asyncio supervisant ingestion, agents, orchestrateur, watchdogs et notifications.",
      "Agents spécialisés pour contexte marché, cartographie, liquidité, Fibonacci, microstructure, sentinelle et sessions.",
      "Pipeline de replay avec construction d'éléments de décision, scénarios et garde-fous de risque.",
      "Dashboard local aiohttp avec routes API, WebSocket et logique de redaction des données sensibles.",
      "Outils de diagnostic pour POI, micro-readiness, proximité d'entrée et synergie POI/Micro."
    ],
    technologies: ["Python", "asyncio", "aiohttp", "pandas", "matplotlib", "discord.py", "WebSocket"],
    architecture: [
      { label: "Data", description: "Ingestion ticks/bougies, historique multi-timeframes et préparation replay." },
      { label: "Agents", description: "Chaîne d'agents 1 à 7 pour enrichir le contexte de décision." },
      { label: "Decision", description: "Éléments de décision, contrats POI/Micro et scénarios structurés." },
      { label: "Risk", description: "Calcul de lot, seuils, garde-fous d'exécution et mode paper/live." },
      { label: "Dashboard", description: "Serveur aiohttp, API d'état, flux WebSocket et redaction des champs sensibles." },
      { label: "Testing", description: "Tests unitaires et diagnostics pour agents, dashboard, replay et modèles de risque." }
    ],
    screenshots: [],
    repository: {
      isPublic: true,
      url: "https://github.com/Joemi930/gold-sniper"
    },
    demo: {
      available: false,
      url: null
    },
    highlights: [
      "Organisation événementielle avec blackboard partagé.",
      "Séparation entre replay propre et orchestrateur live.",
      "Tests vérifiant la redaction des données sensibles dans le dashboard.",
      "Diagnostics dédiés aux blocages POI_MISSING et MICRO_MISSING."
    ],
    learnings: [
      "Structurer un moteur décisionnel avec des étapes vérifiables.",
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
      "Les artistes et créateurs ont besoin d'un espace clair pour publier, organiser et valoriser leurs clips sans dépendre d'une structure lourde ou mal adaptée à leur contenu.",
    solution:
      "ClipWave apporte une base d'application orientée publication, découverte et gestion de clips, avec une structure pensée pour évoluer vers une plateforme complète avec profils, modération et interactions.",
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
      url: "https://github.com/Joemi930/clipwave"
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
