import { PERSON, PROJECT_LINKS } from "./shared";
import type { SiteContent } from "./types";

export const en = {
  meta: {
    title: "Moussa Mbaye — Full-stack developer",
    description:
      "Full-stack developer. I built Veno, a booking SaaS in production, on my own. Available for a 6-month internship from February 2027, in Alsace or Basel.",
  },

  nav: {
    label: "Main navigation",
    skipToContent: "Skip to content",
    projects: "Projects",
    journey: "Background",
    skills: "Skills",
    contact: "Contact",
    switchLanguage: "Lire en français",
  },

  hero: {
    name: PERSON.name,
    role: "Full-stack developer",
    location: "Saint-Louis, France · Alsace, Basel",
    tagline:
      "I design, ship and maintain web products used in real conditions. Veno, the booking SaaS I built on my own, is in production with beauty professionals.",
    availability: "Available for an internship — February 2027",
    availabilityDetail: "6 months from February 15, 2027 · Alsace, Basel, Northwestern Switzerland",
    ctaProjects: "See my projects",
    ctaContact: "Get in touch",
    cv: { label: "Download my CV (PDF)", href: PERSON.cv.en },
    proofs: [
      { label: "In production: getveno.fr", href: PROJECT_LINKS.venoSite, external: true },
      { label: "Demo: Nearest Neighbor + 2-opt", href: "/projets/smartroute#demo" },
    ],
  },

  projects: {
    title: "Featured projects",
    intro: "A product in production, and an algorithmic project born from my field experience.",
    readCaseStudy: "Read the case study",
    items: [
      {
        slug: "veno",
        name: "Veno",
        kind: "production",
        period: "Since May 2026",
        pitch:
          "Online booking SaaS for independent beauty professionals, designed, built, deployed and maintained on my own.",
        highlights: [
          "Migrated from Laravel + MySQL to Next.js while keeping the data model",
          "Atomic booking in Postgres: double bookings are impossible",
          "Stripe subscriptions driven by webhooks, with a grace period",
        ],
        stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Vercel"],
        cover: null,
      },
      {
        slug: "smartroute",
        name: "SmartRoute",
        kind: "academic",
        period: "Professional Bachelor's · 2026–2027",
        pitch:
          "Mobile app that optimizes and assigns delivery routes, inspired by my year as a logistics agent at Post CH.",
        highlights: [
          "Nearest Neighbor + 2-opt optimization engine on road distances",
          "ASP.NET Core REST API: authentication, roles, optimization, assignment",
          "Routes available offline for drivers",
        ],
        stack: ["React Native", "TypeScript", "C#", "ASP.NET Core", "MongoDB"],
        cover: null,
      },
    ],
  },

  journey: {
    title: "Background",
    groups: { work: "Experience", education: "Education" },
    seeProject: "See project:",
    items: [
      {
        period: "Since May 2026",
        title: "Founder and developer — Veno",
        place: "Personal project, in production",
        line: "Design, development, deployment and maintenance of a booking SaaS, on my own.",
        kind: "work",
        project: "veno",
      },
      {
        period: "Oct. 2025 – Sept. 2026",
        title: "Logistics agent — Post CH",
        place: "Egerkingen, Switzerland",
        line: "Sorting parcels by route, shipping schedules, dispatching parcels between drivers. The field experience that inspired SmartRoute.",
        kind: "work",
        project: "smartroute",
      },
      {
        period: "Mar. – Apr. 2024",
        title: "Web developer — Cité administrative",
        place: "Colmar, France",
        line: "Intranet redesign: user needs analysis, new information architecture, implementation.",
        kind: "work",
      },
      {
        period: "Sept. 2026 – Feb. 2027",
        title: "Professional Bachelor's in Software Design, Development and Testing",
        place: "Université de Haute-Alsace, Mulhouse",
        line: "Software engineering, testing, SmartRoute project.",
        kind: "education",
        project: "smartroute",
      },
      {
        period: "2022 – 2024",
        title: "BTS SIO, software development track (two-year higher national diploma)",
        place: "Lycée Camille Sée, Colmar",
        line: "Web and object-oriented development, databases, web security (SQL injection, XSS, CSRF).",
        kind: "education",
      },
    ],
  },

  skills: {
    title: "Skills",
    intro: "Only what I have used on a real project. Each skill links to the project that proves it.",
    usedIn: "Used in",
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
          { name: "Stripe (subscriptions, webhooks)", provenBy: ["veno"] },
          { name: "Supabase Auth", provenBy: ["veno"] },
          { name: "Geocoding and routing APIs", provenBy: ["smartroute"] },
        ],
      },
      {
        domain: "data",
        label: "Data & algorithms",
        skills: [
          { name: "PostgreSQL (RLS, PL/pgSQL functions)", provenBy: ["veno"] },
          { name: "MySQL", provenBy: ["veno"] },
          { name: "MongoDB", provenBy: ["smartroute"] },
          { name: "SQLite", provenBy: ["smartroute"] },
          { name: "Algorithms: TSP, Nearest Neighbor, Cheapest Insertion, 2-opt", provenBy: ["smartroute"] },
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
    text: "I am looking for a 6-month internship in software or full-stack development starting February 15, 2027, in Alsace, Basel or Northwestern Switzerland. The easiest way to reach me: email.",
    emailLabel: PERSON.email,
    copyEmail: "Copy address",
    copied: "Address copied",
    links: [
      { label: "LinkedIn", href: PERSON.linkedin },
      { label: "GitHub", href: PERSON.github },
    ],
  },

  caseStudies: {
    veno: {
      title: "Veno",
      kind: "production",
      period: "Since May 2026",
      metaDescription:
        "Case study: Veno, a booking SaaS for independent beauty professionals, designed, built and maintained on my own. Next.js, Supabase, Stripe.",
      intro: [
        "Veno is an online booking platform for independent beauty professionals: hairdressers, beauticians, nail technicians. I designed it, built it and put it into production on my own, and I have been maintaining it since May 2026.",
      ],
      problem: [
        "Many independent beauty professionals still take appointments through text messages or phone calls. The result: lost time, forgotten appointments, double bookings.",
        "Existing booking tools such as Acuity are general-purpose. They are not designed for beauty businesses or for French-speaking clients.",
        "Veno targets this niche: one showcase page per professional, reachable through a short link, and a booking flow in a few steps, with no client account required.",
      ],
      role: [
        "Sole owner of the whole product: design, UX, data model, front-end and back-end development, payments, transactional emails, deployment and maintenance.",
        "The product is in production, used by active professionals.",
      ],
      stack: [
        { layer: "Application", items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"] },
        { layer: "Data and auth", items: ["Supabase", "PostgreSQL", "Row Level Security"] },
        { layer: "Payments", items: ["Stripe Billing", "Webhooks"] },
        { layer: "Emails", items: ["Resend", "React Email"] },
        { layer: "Hosting", items: ["Vercel"] },
      ],
      decisions: [
        {
          title: "Migrating from Laravel to Next.js without breaking the data model",
          context:
            "The first version ran on Laravel and MySQL. The business model was already stable: users, salons, practitioners, services, appointments, time slots.",
          choice:
            "Rewrite the application in Next.js (App Router) on Supabase/PostgreSQL, keeping the same entities and relationships.",
          why:
            "One language (TypeScript) from front end to back end, server-rendered showcase pages, and simple deployment. Keeping the model meant the migration was about technology, not business logic.",
        },
        {
          title: "Enforcing critical rules in the database",
          context:
            "Visitors book without an account, from a public page, and each salon's data must stay isolated.",
          choice: "Row Level Security on the tables, and a dedicated PostgreSQL function to create a booking.",
          why: "The rule is enforced as close to the data as possible: even a bug in the application cannot bypass it.",
        },
        {
          title: "Two scheduling modes",
          context:
            "Not every professional has fixed hours: some work at clients' homes or open slots case by case.",
          choice:
            "A \"regular hours\" mode (opening hours per day) and a \"flexible\" mode (one-off or recurring slots), chosen during onboarding.",
          why: "Fit how the trade actually works instead of imposing a traditional salon model.",
        },
      ],
      challenges: [
        {
          title: "Preventing double bookings",
          problem:
            "Two clients confirming the same slot at the same moment could both pass the availability check before the insert (race condition).",
          solution:
            "An atomic PostgreSQL function: lock the practitioner's bookings for the day (SELECT … FOR UPDATE), re-check for overlaps within the same transaction, then insert or raise an explicit error.",
        },
        {
          title: "Checking conflicts despite Row Level Security",
          problem:
            "Anonymous visitors are not allowed to read bookings, so the conflict check read zero rows and let everything through.",
          solution:
            "A SECURITY DEFINER function with a minimal scope: fixed search_path, execution rights limited to the required roles. No new write surface is exposed.",
        },
        {
          title: "Subscriptions and failed payments",
          problem: "A declined payment must not abruptly cut off a professional who has upcoming appointments.",
          solution:
            "The Stripe webhook drives the subscription state. After a failed payment or a cancellation, a 5-day grace period starts, then the account becomes read-only. The webhook is excluded from the authentication proxy, which was sending 307 redirects to Stripe.",
        },
      ],
      results: [
        { label: "Launched", value: "May 2026" },
        { label: "Active professionals", value: null }, // TODO
        { label: "Bookings processed", value: null }, // TODO
        {
          label: "Shipped flows",
          value: "5-step onboarding, showcase page, booking flow, practitioner dashboard",
        },
      ],
      screenshots: [
        {
          src: "/projects/veno/vitrine.png",
          alt: "A professional's showcase page on Veno, with their services and the booking button",
          caption: "Showcase page reachable through a short link",
          width: 1440,
          height: 900,
        },
        {
          src: "/projects/veno/reservation.png",
          alt: "Veno booking flow: choosing the service, then the time slot, then confirmation",
          caption: "Booking flow",
          width: 1440,
          height: 900,
        },
        {
          src: "/projects/veno/dashboard.png",
          alt: "Veno practitioner dashboard showing the weekly calendar",
          caption: "Practitioner dashboard",
          width: 1440,
          height: 900,
        },
      ],
      links: [
        { label: "getveno.fr", href: PROJECT_LINKS.venoSite },
        { label: "Source code", href: PROJECT_LINKS.venoRepo },
      ],
    },

    smartroute: {
      title: "SmartRoute",
      kind: "academic",
      period: "Professional Bachelor's · 2026–2027",
      metaDescription:
        "Case study: SmartRoute, a mobile app that optimizes delivery routes (Nearest Neighbor + 2-opt), with an interactive demo.",
      intro: [
        "For a year, I worked as a logistics agent at Post CH: sorting parcels by route, shipping schedules, dispatching parcels between drivers. I saw first-hand what a poorly built route costs.",
        "SmartRoute grew out of that experience: a mobile app to compute an efficient route, assign it to a driver, and keep it available to them even without a network.",
      ],
      problem: [
        "Ordering a route by hand from a list of addresses rarely gives the shortest path. Every detour costs kilometers and delays.",
        "In the field, drivers must be able to check their route even when the network is weak or unavailable.",
      ],
      role: [
        "Academic project, built as part of the Professional Bachelor's. Two business roles: logistics manager and driver.",
        "Three use cases: optimize a route, assign it to a driver, view it and sync it offline.",
      ],
      stack: [
        { layer: "Mobile", items: ["React Native", "Expo", "TypeScript", "SQLite (offline)"] },
        { layer: "API", items: ["C#", "ASP.NET Core (REST, JWT authentication)", "Geocoding and routing"] },
        { layer: "Data", items: ["MongoDB"] },
        { layer: "Infra", items: ["Docker", "GitLab CI/CD"] },
      ],
      decisions: [
        {
          title: "Road distances, not straight-line distances",
          context:
            "Two addresses close as the crow flies can be far apart by road (river, one-way streets, highway).",
          choice: "Geocode the addresses, then build a road distance matrix through a routing API.",
          why: "The algorithm optimizes what the driver actually drives.",
        },
        {
          title: "A heuristic rather than an exact solver",
          context:
            "The traveling salesman problem (TSP) is NP-hard: the exact solution becomes impractical beyond a few dozen stops.",
          choice:
            "Build the route with Nearest Neighbor or Cheapest Insertion, then improve it with 2-opt, all running on the API side.",
          why:
            "A fast, good-quality solution that is easy to explain to a logistics manager. 2-opt removes the crossings typical of Nearest Neighbor.",
        },
        {
          title: "MongoDB on the server",
          context: null, // TODO : à rédiger par Moussa
          choice: null, // TODO
          why: null, // TODO
        },
        {
          title: "Offline first, for drivers",
          context: "Drivers regularly lose network coverage on their route.",
          choice: "The route is stored locally on the phone (SQLite), then synced when the network comes back.",
          why: "The route stays available in all circumstances.",
        },
      ],
      challenges: [
        {
          title: "A deliberate MVP scope",
          problem:
            "The real problem (multiple vehicles, time windows, capacities) is far broader than a project of a few months.",
          solution:
            "The MVP optimizes a single route, but properly, end to end. Extensions are identified and documented rather than rushed.",
        },
      ],
      results: [],
      roadmap: [
        "Multi-vehicle VRP: automatically split parcels between several drivers",
        "Delivery time windows",
        "Metaheuristics (simulated annealing, tabu search) for large instances",
      ],
      demo: {
        title: "Demo: Nearest Neighbor, then 2-opt",
        intro: "Place delivery points: the route is computed in your browser with the same heuristics as SmartRoute.",
        instructions: "Click in the area to add stops, or generate them at random. The first point is the depot.",
        note: "Here, distances are Euclidean. In the app, they come from a road distance matrix.",
        labels: {
          canvas: "Area for placing delivery points",
          random: "12 random points",
          reset: "Clear",
          points: "stops",
          nearestNeighbor: "Nearest Neighbor",
          twoOpt: "After 2-opt",
          gain: "Gain",
          empty: "Add at least 4 points to see the difference.",
        },
      },
      screenshots: [
        {
          src: "/projects/smartroute/tournee.png",
          alt: "SmartRoute screen showing an optimized route on a map",
          caption: "Optimized route",
          width: 1170,
          height: 2532,
        },
        {
          src: "/projects/smartroute/livreur.png",
          alt: "SmartRoute driver screen listing the stops of the route",
          caption: "Driver view, available offline",
          width: 1170,
          height: 2532,
        },
      ],
      links: [{ label: "Source code", href: PROJECT_LINKS.smartrouteRepo }],
    },
  },

  ui: {
    backHome: "Back to home",
    nextProject: "Next project",
    badgeProduction: "In production",
    badgeAcademic: "Academic project",
    screenshotPending: "Screenshot coming soon",
    externalLink: "(opens in a new tab)",
    sections: {
      problem: "The problem",
      role: "My role",
      stack: "Stack",
      decisions: "Technical decisions",
      challenges: "Challenges solved",
      results: "Results",
      roadmap: "Planned improvements",
      links: "Links",
      screenshots: "Screenshots",
      demo: "Interactive demo",
    },
    decision: { context: "Context", choice: "Choice", why: "Why" },
    challenge: { problem: "Problem", solution: "Solution" },
  },
} satisfies SiteContent;
