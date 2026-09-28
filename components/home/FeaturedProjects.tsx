import type { Locale, SiteContent } from "@/content/types";
import { Section } from "../layout/Section";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects({ locale, content }: { locale: Locale; content: SiteContent }) {
  const { projects, ui } = content;
  return (
    <Section id="projets" title={projects.title} intro={projects.intro}>
      <div className="grid gap-6">
        {projects.items.map((project) => (
          <ProjectCard
            key={project.slug}
            locale={locale}
            project={project}
            ui={ui}
            readLabel={projects.readCaseStudy}
          />
        ))}
      </div>
    </Section>
  );
}
