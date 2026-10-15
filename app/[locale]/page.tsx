import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { SkillGroups } from "@/components/home/SkillGroups";
import { Timeline } from "@/components/home/Timeline";
import { Container } from "@/components/layout/Container";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  const content = getContent(locale);

  return (
    <main id="contenu">
      <Container>
        <Hero locale={locale} hero={content.hero} />
        <FeaturedProjects locale={locale} content={content} />
        <Timeline locale={locale} content={content} />
        <SkillGroups locale={locale} content={content} />
      </Container>
    </main>
  );
}
