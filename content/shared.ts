/**
 * Données identiques dans toutes les langues.
 * Les valeurs `null` sont à compléter (voir `npm run check:content`).
 */

/**
 * URL publique du site, sans slash final. Utilisée par metadata, OG, sitemap, canonical.
 * NEXT_PUBLIC_SITE_URL permet de la surcharger (ex. pour tester un autre domaine) ;
 * sinon, le domaine de production est utilisé partout, y compris en preview et en local.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://mbayemoussa.com").replace(/\/+$/, "");

export const PERSON = {
  name: "Moussa Mbaye",
  email: "mbaye.moussa.pro@gmail.com",
  linkedin: null as string | null, // TODO : URL LinkedIn
  github: null as string | null, // TODO : URL GitHub
  cv: { fr: "/cv/moussa-mbaye-cv-fr.pdf", en: "/cv/moussa-mbaye-cv-en.pdf" },
} as const;

export const PROJECT_LINKS = {
  venoSite: "https://getveno.fr",
  /** Repos privés → laisser à null, ils ne sont pas affichés. */
  venoRepo: null as string | null,
  smartrouteRepo: null as string | null, // TODO : URL si le repo est public
} as const;
