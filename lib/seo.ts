import type { Metadata } from "next";
import { SITE_URL } from "@/content/shared";
import type { Locale } from "@/content/types";
import { LOCALES, localePath } from "./i18n";

export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)]));

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: localePath(locale, path),
      languages: { ...languages, "x-default": localePath("fr", path) },
    },
    openGraph: {
      type: "website",
      url: localePath(locale, path),
      title,
      description,
      siteName: "Moussa Mbaye",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
