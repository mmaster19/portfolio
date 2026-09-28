import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import { homeAnchor, localePath } from "@/lib/i18n";
import { Container } from "./Container";
import { LangSwitch } from "./LangSwitch";

export function SiteHeader({ locale, content }: { locale: Locale; content: SiteContent }) {
  const home = localePath(locale, "/");
  const { nav, hero } = content;
  const anchors = [
    { id: "projets", label: nav.projects },
    { id: "parcours", label: nav.journey },
    { id: "competences", label: nav.skills },
    { id: "contact", label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link href={home} className="font-display text-lg whitespace-nowrap">
          {hero.name}
        </Link>
        <nav aria-label={nav.label} className="flex items-center gap-1 text-sm">
          <ul className="hidden items-center gap-1 sm:flex">
            {anchors.map((a) => (
              <li key={a.id}>
                <a
                  href={homeAnchor(locale, a.id)}
                  className="rounded-md px-2.5 py-2 text-muted transition-colors hover:text-text"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={homeAnchor(locale, "contact")}
            className="rounded-md px-2.5 py-2 text-muted hover:text-text sm:hidden"
          >
            {nav.contact}
          </a>
          <LangSwitch locale={locale} label={nav.switchLanguage} />
        </nav>
      </Container>
    </header>
  );
}
