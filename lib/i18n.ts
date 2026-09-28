import type { Locale } from "@/content/types";

export const LOCALES = ["fr", "en"] as const satisfies readonly Locale[];
export const DEFAULT_LOCALE: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Chemin public : le FR n'a pas de préfixe, l'EN est sous /en. */
export function localePath(locale: Locale, path = "/"): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

/** Lien vers une section de l'accueil, ex. "/#contact" ou "/en#contact". */
export function homeAnchor(locale: Locale, id: string): string {
  return `${localePath(locale, "/")}#${id}`;
}
