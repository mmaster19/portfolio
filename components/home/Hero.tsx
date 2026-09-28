import type { Locale, SiteContent } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { LinkButton } from "../ui/LinkButton";
import { AvailabilityBadge } from "./AvailabilityBadge";

export function Hero({ locale, hero }: { locale: Locale; hero: SiteContent["hero"] }) {
  return (
    <section aria-labelledby="hero-title" className="@container py-14 sm:py-24">
      <div className="reveal" style={{ ["--i" as string]: 0 }}>
        <AvailabilityBadge label={hero.availability} detail={hero.availabilityDetail} />
      </div>

      <h1
        id="hero-title"
        className="reveal font-display mt-10 text-5xl leading-[1.02] @xl:text-6xl @2xl:text-7xl"
        style={{ ["--i" as string]: 1 }}
      >
        {hero.name}
      </h1>
      <p
        className="reveal font-display mt-2 text-2xl text-muted @xl:text-3xl italic"
        style={{ ["--i" as string]: 2 }}
      >
        {hero.role}
        <span className="meta mt-2 block not-italic @xl:mt-0 @xl:ml-3 @xl:inline @xl:align-middle">
          <span aria-hidden className="hidden @xl:inline">· </span>
          {hero.location}
        </span>
      </p>

      <p className="reveal mt-8 max-w-[36rem] text-lg leading-relaxed" style={{ ["--i" as string]: 3 }}>
        {hero.tagline}
      </p>

      <div className="reveal mt-9 flex flex-wrap items-center gap-3" style={{ ["--i" as string]: 4 }}>
        <LinkButton href="#projets">{hero.ctaProjects}</LinkButton>
        <LinkButton href="#contact" variant="secondary">
          {hero.ctaContact}
        </LinkButton>
        <a
          href={hero.cv.href}
          download
          className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-accent underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          {hero.cv.label}
        </a>
      </div>

      <ul className="reveal mt-12 flex flex-col gap-2 border-t border-line pt-6 @xl:flex-row @xl:gap-8" style={{ ["--i" as string]: 5 }}>
        {hero.proofs.map((proof) => (
          <li key={proof.href}>
            <a
              href={proof.external ? proof.href : localePath(locale, proof.href)}
              {...(proof.external && { target: "_blank", rel: "noopener" })}
              className="meta group inline-flex items-center gap-1.5 text-muted hover:text-text"
            >
              <span>{proof.label}</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                {proof.external ? "↗" : "→"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
