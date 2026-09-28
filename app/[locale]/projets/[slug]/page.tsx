import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { Container } from "@/components/layout/Container";
import { getContent } from "@/content";
import type { Locale, ProjectSlug } from "@/content/types";
import { buildMetadata } from "@/lib/seo";

const SLUGS: ProjectSlug[] = ["veno", "smartroute"];

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

function isSlug(value: string): value is ProjectSlug {
  return (SLUGS as string[]).includes(value);
}

export async function generateMetadata({ params }: PageProps<"/[locale]/projets/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isSlug(slug)) return {};
  const study = getContent(locale as Locale).caseStudies[slug];
  return buildMetadata({
    locale: locale as Locale,
    path: `/projets/${slug}`,
    title: `${study.title} — Moussa Mbaye`,
    description: study.metaDescription,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/[locale]/projets/[slug]">) {
  const { locale, slug } = await params;
  if (!isSlug(slug)) notFound();
  const content = getContent(locale as Locale);

  return (
    <main id="contenu">
      <Container>
        <CaseStudyHeader locale={locale as Locale} study={content.caseStudies[slug]} ui={content.ui} />
        {/* Sections Problème → Liens : étape « Études de cas » */}
      </Container>
    </main>
  );
}
