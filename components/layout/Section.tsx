import type { ReactNode } from "react";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 sm:py-20">
      <h2 id={`${id}-title`} className="font-display text-3xl sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-[36rem] text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
