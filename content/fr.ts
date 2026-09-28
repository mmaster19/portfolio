import { PERSON, PROJECT_LINKS } from "./shared";
import type { SiteContent } from "./types";

export const fr = {
  meta: {
    title: "Moussa Mbaye — Développeur full-stack",
    description:
      "Développeur full-stack. J'ai construit seul Veno, un SaaS de réservation en production. Disponible en stage de 6 mois à partir de février 2027, en Alsace ou à Bâle.",
  },

  nav: {
    label: "Navigation principale",
    skipToContent: "Aller au contenu",
    projects: "Projets",
    journey: "Parcours",
    skills: "Compétences",
    contact: "Contact",
    switchLanguage: "Read in English",
  },

  hero: {
    name: PERSON.name,
    role: "Développeur full-stack",
    location: "Saint-Louis (68) · Alsace, Bâle",
    tagline:
      "Je conçois, je livre et je maintiens des produits web utilisés en conditions réelles. Veno, le SaaS de réservation que j'ai construit seul, est en production auprès de professionnels de la beauté.",
    availability: "Disponible en stage — février 2027",
    availabilityDetail:
      "6 mois à partir du 15 février 2027 · Alsace, Bâle, Suisse du Nord-Ouest",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    cv: { label: "Télécharger mon CV (PDF)", href: PERSON.cv },
    proofs: [
      { label: "En production : getveno.fr", href: PROJECT_LINKS.venoSite, external: true },
      { label: "Démo : Nearest Neighbor + 2-opt", href: "/projets/smartroute#demo" },
    ],
  },

  projects: {
    title: "Projets phares",
    intro: "Un produit en production, et un projet algorithmique né de mon expérience terrain.",
    readCaseStudy: "Lire l'étude de cas",
    items: [
      {
        slug: "veno",
        name: "Veno",
        kind: "production",
        period: "Depuis mai 2026",
        pitch:
          "SaaS de réservation en ligne pour les indépendants de la beauté, conçu, développé, déployé et maintenu seul.",
        highlights: [
          "Migré de Laravel + MySQL vers Next.js en conservant le modèle de données",
          "Réservation atomique côté Postgres : aucune double réservation possible",
          "Abonnements Stripe gérés par webhooks, avec délai de grâce",
        ],
        stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Vercel"],
        cover: null,
      },
      {
        slug: "smartroute",
        name: "SmartRoute",
        kind: "academic",
        period: "Licence Pro · 2026–2027",
        pitch:
          "Application mobile d'optimisation et d'attribution de tournées de livraison, inspirée de mon année d'agent logistique chez Post CH.",
        highlights: [
          "Moteur d'optimisation Nearest Neighbor + 2-opt sur distances routières",
          "API REST ASP.NET Core : authentification, rôles, optimisation, attribution",
          "Tournées consultables hors ligne par les livreurs",
        ],
        stack: ["React Native", "TypeScript", "C#", "ASP.NET Core", "MongoDB"],
        cover: null,
      },
    ],
  },

  journey: {
    title: "Parcours",
    groups: { work: "Expérience", education: "Formation" },
    items: [
      {
        period: "Depuis mai 2026",
        title: "Fondateur et développeur — Veno",
        place: "Projet personnel, en production",
        line: "Conception, développement, déploiement et maintenance d'un SaaS de réservation, seul.",
        kind: "work",
        project: "veno",
      },
      {
        period: "Oct. 2025 – sept. 2026",
        title: "Agent logistique — Post CH",
        place: "Egerkingen, Suisse",
        line: "Tri des colis par tournée, plannings d'expédition, répartition entre livreurs. Le terrain qui a inspiré SmartRoute.",
        kind: "work",
        project: "smartroute",
      },
      {
        period: "Mars – avr. 2024",
        title: "Développeur web — Cité administrative", // TODO : ajouter « stage BTS » si c'en était un
        place: "Colmar",
        line: "Refonte de l'intranet : recueil des besoins, nouvelle architecture de l'information, mise en œuvre.",
        kind: "work",
      },
      {
        period: "2026 – 2027",
        title: "Licence Pro Conception, Développement et Test de Logiciels",
        place: "Université Haute-Alsace, Mulhouse",
        line: "Génie logiciel, tests, projet SmartRoute.",
        kind: "education",
        project: "smartroute",
      },
      {
        period: "2022 – 2024",
        title: "BTS SIO, option SLAM (développement logiciel)",
        place: "Lycée Camille Sée, Colmar",
        line: "Développement web et objet, bases de données, sécurité web (injections SQL, XSS, CSRF).",
        kind: "education",
      },
    ],
  },

  skills: {
    title: "Compétences",
    intro: "Uniquement ce que j'ai utilisé sur un projet réel. Chaque compétence renvoie au projet qui la prouve.",
    usedIn: "Utilisé dans",
    groups: [
      {
        domain: "frontend",
        label: "Frontend",
        skills: [
          { name: "TypeScript", provenBy: ["veno", "smartroute"] },
          { name: "Next.js (App Router)", provenBy: ["veno"] },
          { name: "React", provenBy: ["veno"] },
          { name: "React Native / Expo", provenBy: ["smartroute"] },
          { name: "Tailwind CSS", provenBy: ["veno"] },
        ],
      },
      {
        domain: "backend",
        label: "Backend",
        skills: [
          { name: "C# / ASP.NET Core", provenBy: ["smartroute"] },
          { name: "Laravel (PHP)", provenBy: ["veno"] },
          { name: "Stripe (abonnements, webhooks)", provenBy: ["veno"] },
          { name: "Supabase Auth", provenBy: ["veno"] },
          { name: "API de géocodage et de routage", provenBy: ["smartroute"] },
        ],
      },
      {
        domain: "data",
        label: "Données & algorithmique",
        skills: [
          { name: "PostgreSQL (RLS, fonctions PL/pgSQL)", provenBy: ["veno"] },
          { name: "MySQL", provenBy: ["veno"] },
          { name: "MongoDB", provenBy: ["smartroute"] },
          { name: "SQLite", provenBy: ["smartroute"] },
          { name: "Algorithmique : TSP, Nearest Neighbor, Cheapest Insertion, 2-opt", provenBy: ["smartroute"] },
        ],
      },
      {
        domain: "devops",
        label: "DevOps",
        skills: [
          { name: "Vercel", provenBy: ["veno"] },
          { name: "Docker", provenBy: ["smartroute"] },
          { name: "GitLab CI/CD", provenBy: ["smartroute"] },
          { name: "Git", provenBy: ["veno", "smartroute"] },
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    text: "Je cherche un stage de 6 mois en développement logiciel ou full-stack à partir du 15 février 2027, en Alsace, à Bâle ou en Suisse du Nord-Ouest. Le plus simple : un email.",
    emailLabel: PERSON.email,
    copyEmail: "Copier l'adresse",
    copied: "Adresse copiée",
    links: [
      { label: "LinkedIn", href: PERSON.linkedin },
      { label: "GitHub", href: PERSON.github },
    ],
  },

  caseStudies: {
    veno: {
      title: "Veno",
      kind: "production",
      period: "Depuis mai 2026",
      metaDescription:
        "Étude de cas : Veno, SaaS de réservation pour les indépendants de la beauté, conçu, développé et maintenu seul. Next.js, Supabase, Stripe.",
      intro: [
        "Veno est une plateforme de réservation en ligne pour les professionnels indépendants de la beauté : coiffeurs, esthéticiennes, prothésistes ongulaires. Je l'ai conçue, développée et mise en production seul, et je la maintiens depuis mai 2026.",
      ],
      problem: [
        "Beaucoup d'indépendants de la beauté prennent encore leurs rendez-vous par messages ou par téléphone. Résultat : du temps perdu, des oublis, des doubles réservations.",
        "Les outils de réservation existants, comme Acuity, sont généralistes. Ils ne sont pas pensés pour les métiers de la beauté ni pour une clientèle francophone.",
        "Veno se positionne sur cette niche : une page vitrine par professionnel, accessible par un lien court, et un tunnel de réservation en quelques étapes, sans compte client.",
      ],
      role: [
        "Seul sur tout le produit : conception, UX, modèle de données, développement front et back, paiements, emails transactionnels, déploiement et maintenance.",
        "Le produit est en production, utilisé par des professionnels actifs.",
      ],
      stack: [
        { layer: "Application", items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"] },
        { layer: "Données et auth", items: ["Supabase", "PostgreSQL", "Row Level Security"] },
        { layer: "Paiements", items: ["Stripe Billing", "Webhooks"] },
        { layer: "Emails", items: ["Resend", "React Email"] },
        { layer: "Hébergement", items: ["Vercel"] },
      ],
      decisions: [
        {
          title: "Migrer de Laravel vers Next.js sans casser le modèle de données",
          context:
            "La première version tournait sur Laravel et MySQL. Le modèle métier était déjà stable : utilisateurs, salons, prestataires, services, rendez-vous, créneaux.",
          choice:
            "Réécrire l'application en Next.js (App Router) sur Supabase/PostgreSQL, en reprenant les mêmes entités et les mêmes relations.",
          why:
            "Un seul langage (TypeScript) du front au back, des pages vitrines rendues côté serveur, et un déploiement simple. En gardant le modèle, la migration portait sur la technique, pas sur le métier.",
        },
        {
          title: "Confier les règles critiques à la base de données",
          context:
            "Les visiteurs réservent sans compte, depuis une page publique, et les données de chaque salon doivent rester cloisonnées.",
          choice:
            "Row Level Security sur les tables, et une fonction PostgreSQL dédiée pour créer une réservation.",
          why:
            "La règle est appliquée au plus près des données : même un bug dans l'application ne peut pas l'outrepasser.",
        },
        {
          title: "Deux modes de planification",
          context:
            "Tous les professionnels n'ont pas d'horaires fixes : certains travaillent à domicile ou ouvrent des créneaux au cas par cas.",
          choice:
            "Un mode « horaires réguliers » (horaires d'ouverture par jour) et un mode « flexible » (créneaux ponctuels ou récurrents), choisis pendant l'onboarding.",
          why: "Coller à la réalité du métier plutôt qu'imposer le modèle d'un salon classique.",
        },
      ],
      challenges: [
        {
          title: "Empêcher les doubles réservations",
          problem:
            "Deux clients qui valident le même créneau au même instant pouvaient tous deux passer la vérification de disponibilité avant l'insertion (race condition).",
          solution:
            "Une fonction PostgreSQL atomique : verrou sur les réservations du praticien pour la journée (SELECT … FOR UPDATE), nouvelle vérification du chevauchement dans la même transaction, puis insertion ou erreur explicite.",
        },
        {
          title: "Vérifier les conflits malgré la Row Level Security",
          problem:
            "Les visiteurs anonymes n'ont pas le droit de lire les réservations. La vérification de conflit lisait donc zéro ligne et laissait tout passer.",
          solution:
            "Une fonction SECURITY DEFINER au périmètre minimal : search_path figé, droits d'exécution limités aux rôles nécessaires. Aucune nouvelle surface d'écriture n'est exposée.",
        },
        {
          title: "Abonnements et paiements échoués",
          problem:
            "Un paiement refusé ne doit pas couper brutalement un professionnel qui a des rendez-vous prévus.",
          solution:
            "Le webhook Stripe pilote l'état de l'abonnement. En cas d'échec ou de résiliation, un délai de grâce de 5 jours s'ouvre, puis le compte passe en lecture seule. Le webhook est exclu du proxy d'authentification, qui renvoyait des redirections 307 à Stripe.",
        },
      ],
      results: [
        { label: "Mise en production", value: "Mai 2026" },
        { label: "Professionnels actifs", value: null }, // TODO
        { label: "Réservations traitées", value: null }, // TODO
        {
          label: "Parcours livrés",
          value: "Onboarding en 5 étapes, page vitrine, tunnel de réservation, dashboard praticien",
        },
      ],
      screenshots: [
        {
          src: "/projects/veno/vitrine.png",
          alt: "Page vitrine d'un professionnel sur Veno, avec ses prestations et le bouton de réservation",
          caption: "Page vitrine accessible par lien court",
          width: 1440,
          height: 900,
        },
        {
          src: "/projects/veno/reservation.png",
          alt: "Tunnel de réservation Veno : choix de la prestation, du créneau puis confirmation",
          caption: "Tunnel de réservation",
          width: 1440,
          height: 900,
        },
        {
          src: "/projects/veno/dashboard.png",
          alt: "Dashboard praticien Veno avec l'agenda de la semaine",
          caption: "Dashboard praticien",
          width: 1440,
          height: 900,
        },
      ],
      links: [
        { label: "getveno.fr", href: PROJECT_LINKS.venoSite },
        { label: "Code source", href: PROJECT_LINKS.venoRepo },
      ],
    },

    smartroute: {
      title: "SmartRoute",
      kind: "academic",
      period: "Licence Pro · 2026–2027",
      metaDescription:
        "Étude de cas : SmartRoute, application mobile d'optimisation de tournées de livraison (Nearest Neighbor + 2-opt), avec démo interactive.",
      intro: [
        "Pendant un an, j'ai été agent logistique chez Post CH : tri des colis par tournée, plannings d'expédition, répartition entre livreurs. J'ai vu de près ce que coûte une tournée mal construite.",
        "SmartRoute est né de ce terrain : une application mobile pour calculer une tournée efficace, l'attribuer à un livreur, et la lui rendre consultable même sans réseau.",
      ],
      problem: [
        "Ordonner une tournée à la main, à partir d'une liste d'adresses, donne rarement le chemin le plus court. Chaque détour se paie en kilomètres et en retards.",
        "Sur le terrain, le livreur doit pouvoir consulter sa tournée même quand le réseau est faible ou absent.",
      ],
      role: [
        "Projet académique, réalisé dans le cadre de la Licence Pro. Deux rôles métier : responsable logistique et livreur.",
        "Trois cas d'usage : optimiser une tournée, l'attribuer à un livreur, la consulter et la synchroniser hors ligne.",
      ],
      stack: [
        { layer: "Mobile", items: ["React Native", "Expo", "TypeScript", "SQLite (hors ligne)"] },
        { layer: "API", items: ["C#", "ASP.NET Core (REST, authentification JWT)"] },
        { layer: "Données", items: ["MongoDB"] },
        { layer: "Infra", items: ["Docker", "GitLab CI/CD"] },
      ],
      decisions: [
        {
          title: "Des distances routières, pas des distances à vol d'oiseau",
          context: "Deux adresses proches à vol d'oiseau peuvent être éloignées par la route (fleuve, sens uniques, autoroute).",
          choice: "Géocoder les adresses, puis construire une matrice de distances routières via une API de routage.",
          why: "L'algorithme optimise ce que le livreur parcourt réellement.",
        },
        {
          title: "Une heuristique plutôt qu'un solveur exact",
          context:
            "Le problème du voyageur de commerce (TSP) est NP-difficile : la solution exacte devient impraticable dès quelques dizaines d'arrêts.",
          choice:
            "Construction de la tournée par Nearest Neighbor ou Cheapest Insertion, puis amélioration par 2-opt, le tout exécuté côté API.",
          why:
            "Une solution rapide et de bonne qualité, facile à expliquer à un responsable logistique. 2-opt supprime les croisements typiques de Nearest Neighbor.",
        },
        {
          title: "MongoDB côté serveur",
          context: null, // TODO : à rédiger par Moussa
          choice: null, // TODO
          why: null, // TODO
        },
        {
          title: "Le hors ligne d'abord, côté livreur",
          context: "Le livreur perd régulièrement le réseau en tournée.",
          choice: "La tournée est stockée localement sur le téléphone (SQLite), puis synchronisée au retour du réseau.",
          why: "La tournée reste consultable en toutes circonstances.",
        },
      ],
      challenges: [
        {
          title: "Un périmètre de MVP assumé",
          problem: "Le vrai problème (plusieurs véhicules, fenêtres horaires, capacités) est beaucoup plus large qu'un projet de quelques mois.",
          solution:
            "Le MVP optimise une seule tournée, mais proprement, de bout en bout. Les extensions sont identifiées et documentées plutôt que bâclées.",
        },
      ],
      results: [],
      roadmap: [
        "VRP multi-véhicules : répartir automatiquement les colis entre plusieurs livreurs",
        "Fenêtres horaires de livraison",
        "Métaheuristiques (recuit simulé, recherche tabou) pour les grandes instances",
      ],
      demo: {
        title: "Démo : Nearest Neighbor, puis 2-opt",
        intro: "Placez des points de livraison : la tournée est calculée dans votre navigateur avec les mêmes heuristiques que SmartRoute.",
        instructions: "Cliquez dans la zone pour ajouter des arrêts, ou générez-les au hasard. Le premier point est le dépôt.",
        note: "Ici, les distances sont euclidiennes. Dans l'application, elles viennent d'une matrice de distances routières.",
        labels: {
          canvas: "Zone de placement des points de livraison",
          random: "12 points au hasard",
          reset: "Effacer",
          points: "arrêts",
          nearestNeighbor: "Nearest Neighbor",
          twoOpt: "Après 2-opt",
          gain: "Gain",
          empty: "Ajoutez au moins 4 points pour voir la différence.",
        },
      },
      screenshots: [
        {
          src: "/projects/smartroute/tournee.png",
          alt: "Écran SmartRoute affichant une tournée optimisée sur une carte",
          caption: "Tournée optimisée",
          width: 1170,
          height: 2532,
        },
        {
          src: "/projects/smartroute/livreur.png",
          alt: "Écran livreur SmartRoute listant les arrêts de la tournée",
          caption: "Vue livreur, disponible hors ligne",
          width: 1170,
          height: 2532,
        },
      ],
      links: [{ label: "Code source", href: PROJECT_LINKS.smartrouteRepo }],
    },
  },

  ui: {
    backHome: "Retour à l'accueil",
    nextProject: "Projet suivant",
    badgeProduction: "En production",
    badgeAcademic: "Projet académique",
    screenshotPending: "Capture à venir",
    externalLink: "(nouvel onglet)",
    sections: {
      problem: "Le problème",
      role: "Mon rôle",
      stack: "Stack",
      decisions: "Décisions techniques",
      challenges: "Difficultés résolues",
      results: "Résultats",
      roadmap: "Évolutions prévues",
      links: "Liens",
      screenshots: "Captures",
      demo: "Démo interactive",
    },
    decision: { context: "Contexte", choice: "Choix", why: "Pourquoi" },
    challenge: { problem: "Problème", solution: "Solution" },
  },
} satisfies SiteContent;
