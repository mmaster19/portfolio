import Link from "next/link";
import type { Locale, SiteContent, TimelineEntry } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { Section } from "../layout/Section";
import { Todo } from "../ui/Todo";

const KINDS: TimelineEntry["kind"][] = ["work", "education"];

export function Timeline({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { journey, projects } = content;
  const projectName = (slug: string) => projects.items.find((p) => p.slug === slug)?.name ?? slug;

  return (
    <Section id="parcours" title={journey.title}>
      <div className="space-y-12">
        {KINDS.map((kind) => (
          <div key={kind}>
            <h3 className="meta font-medium tracking-wide text-muted uppercase">{journey.groups[kind]}</h3>
            <ol className="mt-5 border-l border-line">
              {journey.items
                .filter((item) => item.kind === kind)
                .map((item) => (
                  <li key={item.title} className="relative pb-8 pl-6 last:pb-0 sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-6 sm:pl-8">
                    <span aria-hidden className="absolute top-2 -left-[4.5px] size-2 rounded-full border border-muted bg-bg" />
                    <p className="meta pt-0.5 text-muted">{item.period ?? <Todo what="période" />}</p>
                    <div className="mt-1 sm:mt-0">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-[0.9375rem] text-muted">{item.place ?? <Todo what="lieu" />}</p>
                      {item.line ? (
                        <p className="mt-2 max-w-[34rem] text-[0.9375rem] leading-relaxed">{item.line}</p>
                      ) : (
                        <p className="mt-2">
                          <Todo what="description" />
                        </p>
                      )}
                      {item.project && (
                        <Link
                          href={localePath(locale, `/projets/${item.project}`)}
                          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline hover:underline-offset-4"
                        >
                          {journey.seeProject} {projectName(item.project)}
                          <span aria-hidden>→</span>
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
