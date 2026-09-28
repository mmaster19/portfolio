/**
 * Données identiques dans toutes les langues.
 * Les valeurs `null` sont à compléter (voir `npm run check:content`).
 */

/** URL publique du site, sans slash final. Utilisée par metadata, OG, sitemap, canonical. */
export const SITE_URL = "https://mon-domaine.fr"; // TODO : remplacer par le vrai domaine

export const PERSON = {
  name: "Moussa Mbaye",
  email: "mbaye.moussa.pro@gmail.com",
  linkedin: null as string | null, // TODO : URL LinkedIn
  github: null as string | null, // TODO : URL GitHub
  cv: "/cv/moussa-mbaye-cv.pdf",
} as const;

export const PROJECT_LINKS = {
  venoSite: "https://getveno.fr",
  /** Repos privés → laisser à null, ils ne sont pas affichés. */
  venoRepo: null as string | null,
  smartrouteRepo: null as string | null, // TODO : URL si le repo est public
} as const;
