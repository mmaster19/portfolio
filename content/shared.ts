/**
 * Données identiques dans toutes les langues.
 * Les valeurs `null` sont à compléter (voir `npm run check:content`).
 */

/**
 * URL publique du site, sans slash final. Utilisée par metadata, OG, sitemap, canonical.
 * Ordre de priorité :
 *  1. NEXT_PUBLIC_SITE_URL (à définir sur Vercel une fois le domaine choisi) ;
 *  2. le domaine de production Vercel, fourni automatiquement au build ;
 *  3. localhost, en local.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "http://localhost:3000"
).replace(/\/+$/, "");

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
