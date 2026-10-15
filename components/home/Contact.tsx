import { PERSON } from "@/content/shared";
import type { SiteContent } from "@/content/types";
import { Section } from "../layout/Section";
import { SHOW_PENDING } from "@/lib/env";
import { Todo } from "../ui/Todo";
import { CopyEmailButton } from "./CopyEmailButton";

export function Contact({ contact }: { contact: SiteContent["contact"] }) {
  // En production, les liens sans URL ne sont pas affichés.
  const links = contact.links.filter((link) => link.href || SHOW_PENDING);

  return (
    <Section id="contact" title={contact.title} intro={contact.text}>
      <a
        href={`mailto:${PERSON.email}`}
        className="font-display inline-block text-2xl break-all text-accent underline decoration-1 underline-offset-[6px] hover:decoration-2 sm:text-3xl"
      >
        {contact.emailLabel}
      </a>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <CopyEmailButton email={PERSON.email} label={contact.copyEmail} copiedLabel={contact.copied} />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex min-h-11 items-center gap-1.5 font-medium hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden className="text-muted group-hover:text-accent">
                    ↗
                  </span>
                </a>
              ) : (
                <Todo what={link.label} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
