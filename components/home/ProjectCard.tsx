import Image from "next/image";
import Link from "next/link";
import type { Locale, ProjectSummary, SiteContent } from "@/content/types";
import { publicFileExists } from "@/lib/assets";
import { localePath } from "@/lib/i18n";
import { Badge } from "../ui/Badge";
import { Todo } from "../ui/Todo";

type Props = {
  locale: Locale;
  project: ProjectSummary;
  ui: SiteContent["ui"];
  readLabel: string;
};

export function ProjectCard({ locale, project, ui, readLabel }: Props) {
  const href = localePath(locale, `/projets/${project.slug}`);
  const cover = project.cover && publicFileExists(project.cover.src) ? project.cover : null;
  const badge = project.kind === "production" ? ui.badgeProduction : ui.badgeAcademic;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line transition-colors hover:border-muted">
      {cover ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="(min-width: 768px) 720px, 100vw"
          className="aspect-[16/9] w-full border-b border-line object-cover object-top"
        />
      ) : (
        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
          <Todo what={`cover ${project.slug}`} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Badge kind={project.kind} label={badge} />
          <span className="meta text-muted">{project.period}</span>
        </div>

        <h3 className="font-display mt-4 text-3xl sm:text-4xl">
          {/* Le lien couvre toute la carte via ::after */}
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 max-w-[38rem] leading-relaxed">{project.pitch}</p>

        <ul className="mt-5 space-y-2 text-[0.9375rem] text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech} className="meta rounded-md bg-surface px-2 py-0.5 text-muted">
              {tech}
            </li>
          ))}
        </ul>

        <p aria-hidden className="mt-7 inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-accent">
          {readLabel}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </p>
      </div>
    </article>
  );
}
