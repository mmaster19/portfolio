import { fr } from "./fr";
import type { SiteContent } from "./types";

// TEMPORAIRE : réutilise le FR tant que la version française n'est pas validée.
export const en = {
  ...fr,
  hero: { ...fr.hero, cv: { ...fr.hero.cv, label: "CV (French)" } },
} satisfies SiteContent;
