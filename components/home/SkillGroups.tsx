import Link from "next/link";
import type { Locale, ProjectSlug, SiteContent } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { Section } from "../layout/Section";

const tagStyles: Record<"production" | "academic", string> = {
  production: "bg-accent-soft text-text",
  academic: "border border-line text-muted",
};

export function SkillGroups({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { skills, projects } = content;
  const project = (slug: ProjectSlug) => projects.items.find((p) => p.slug === slug)!;

  return (
    <Section id="competences" title={skills.title} intro={skills.intro}>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {skills.groups.map((group) => (
          <div key={group.domain}>
            <h3 className="meta font-medium tracking-wide text-muted uppercase">{group.label}</h3>
            <ul className="mt-3">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0"
                >
                  <span className="min-w-0 text-[0.9375rem]">{skill.name}</span>
                  <span className="flex shrink-0 gap-1.5">
                    {skill.provenBy.map((slug) => {
                      const p = project(slug);
                      return (
                        <Link
                          key={slug}
                          href={localePath(locale, `/projets/${slug}`)}
                          className={`inline-flex min-h-6 items-center rounded-full px-2.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent ${tagStyles[p.kind]}`}
                        >
                          <span className="sr-only">
                            {skill.name} — {skills.usedIn}{" "}
                          </span>
                          {p.name}
                        </Link>
                      );
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
