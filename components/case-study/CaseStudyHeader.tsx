import Link from "next/link";
import type { CaseStudy, Locale, SiteContent } from "@/content/types";
import { homeAnchor } from "@/lib/i18n";
import { Badge } from "../ui/Badge";

type Props = { locale: Locale; study: CaseStudy; ui: SiteContent["ui"] };

export function CaseStudyHeader({ locale, study, ui }: Props) {
  const badge = study.kind === "production" ? ui.badgeProduction : ui.badgeAcademic;

  return (
    <header className="py-12 sm:py-20">
      <Link
        href={homeAnchor(locale, "projets")}
        className="meta inline-flex items-center gap-1.5 text-muted hover:text-text"
      >
        <span aria-hidden>←</span> {ui.backHome}
      </Link>

      <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
        <Badge kind={study.kind} label={badge} />
        <span className="meta text-muted">{study.period}</span>
      </div>
      <h1 className="font-display mt-4 text-5xl leading-[1.05] sm:text-6xl">{study.title}</h1>

      <div className="mt-8 max-w-[38rem] space-y-4 text-lg leading-relaxed">
        {study.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </header>
  );
}
