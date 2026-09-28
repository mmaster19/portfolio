import { en } from "./en";
import { fr } from "./fr";
import type { Locale, SiteContent } from "./types";

const content: Record<Locale, SiteContent> = { fr, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export * from "./shared";
export type * from "./types";
