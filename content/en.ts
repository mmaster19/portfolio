import { fr } from "./fr";
import { PERSON } from "./shared";
import type { SiteContent } from "./types";

// TEMPORAIRE : réutilise le FR tant que la version française n'est pas validée.
export const en = {
  ...fr,
  hero: { ...fr.hero, cv: { label: "Download my CV (PDF)", href: PERSON.cv.en } },
} satisfies SiteContent;
