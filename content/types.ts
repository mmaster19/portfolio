export type Locale = "fr" | "en";
export type ProjectSlug = "veno" | "smartroute";

/**
 * Donnée pas encore disponible.
 * `null` → badge « TODO » en dev, élément masqué en production.
 */
export type Pending<T> = T | null;

/** Au moins un élément : une compétence doit être prouvée par un projet. */
export type NonEmpty<T> = [T, ...T[]];

export interface LinkItem {
  label: string;
  href: Pending<string>;
}

export interface ImageItem {
  /** Chemin relatif à /public, ex. "/projects/veno/dashboard.png" */
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };

  nav: {
    label: string;
    skipToContent: string;
    projects: string;
    journey: string;
    skills: string;
    contact: string;
    switchLanguage: string;
  };

  hero: {
    name: string;
    role: string;
    location: string;
    tagline: string;
    availability: string;
    availabilityDetail: string;
    ctaProjects: string;
    ctaContact: string;
    cv: { label: string; href: string };
    proofs: { label: string; href: string; external?: boolean }[];
  };

  projects: {
    title: string;
    intro: string;
    readCaseStudy: string;
    items: ProjectSummary[];
  };

  journey: {
    title: string;
    groups: Record<TimelineEntry["kind"], string>;
    items: TimelineEntry[];
  };

  skills: {
    title: string;
    intro: string;
    usedIn: string;
    groups: SkillGroup[];
  };

  contact: {
    title: string;
    text: string;
    emailLabel: string;
    copyEmail: string;
    copied: string;
    links: LinkItem[];
  };

  caseStudies: Record<ProjectSlug, CaseStudy>;

  ui: {
    backHome: string;
    nextProject: string;
    badgeProduction: string;
    badgeAcademic: string;
    screenshotPending: string;
    externalLink: string;
    sections: {
      problem: string;
      role: string;
      stack: string;
      decisions: string;
      challenges: string;
      results: string;
      roadmap: string;
      links: string;
      screenshots: string;
      demo: string;
    };
    decision: { context: string; choice: string; why: string };
    challenge: { problem: string; solution: string };
  };
}

export interface ProjectSummary {
  slug: ProjectSlug;
  name: string;
  kind: "production" | "academic";
  period: string;
  pitch: string;
  highlights: string[];
  stack: string[];
  cover: Pending<ImageItem>;
}

export interface TimelineEntry {
  period: Pending<string>;
  title: string;
  place: Pending<string>;
  line: Pending<string>;
  kind: "work" | "education";
  project?: ProjectSlug;
}

export interface SkillGroup {
  domain: "frontend" | "backend" | "data" | "devops";
  label: string;
  skills: { name: string; provenBy: NonEmpty<ProjectSlug> }[];
}

export interface CaseStudy {
  title: string;
  kind: "production" | "academic";
  period: string;
  metaDescription: string;
  intro: string[];
  problem: string[];
  role: string[];
  stack: { layer: string; items: string[] }[];
  decisions: { title: string; context: Pending<string>; choice: Pending<string>; why: Pending<string> }[];
  challenges: { title: string; problem: string; solution: string }[];
  results: { label: string; value: Pending<string> }[];
  roadmap?: string[];
  demo?: DemoContent;
  screenshots: ImageItem[];
  links: LinkItem[];
}

export interface DemoContent {
  title: string;
  intro: string;
  instructions: string;
  note: string;
  labels: {
    canvas: string;
    random: string;
    reset: string;
    points: string;
    nearestNeighbor: string;
    twoOpt: string;
    gain: string;
    empty: string;
  };
}
