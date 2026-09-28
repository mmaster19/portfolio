import { SHOW_PENDING } from "@/lib/env";

/** Badge visible uniquement en dev, pour signaler une donnée à compléter. */
export function Todo({ what }: { what: string }) {
  if (!SHOW_PENDING) return null;
  return (
    <span className="inline-flex items-center rounded border border-dashed border-amber-600 px-1.5 py-0.5 font-mono text-xs text-amber-700 dark:text-amber-400">
      TODO · {what}
    </span>
  );
}
