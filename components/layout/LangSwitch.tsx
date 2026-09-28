"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { localePath, otherLocale } from "@/lib/i18n";

/** Lien vers la même page dans l'autre langue. */
export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const target = otherLocale(locale);
  const basePath = pathname.replace(/^\/(en|fr)(?=\/|$)/, "") || "/";

  return (
    <Link
      href={localePath(target, basePath)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      className="ml-1 rounded-md border border-line px-2.5 py-1.5 text-xs font-medium tracking-wide text-muted uppercase transition-colors hover:border-text hover:text-text"
    >
      {target}
    </Link>
  );
}
