const styles = {
  production: "bg-accent-soft text-text",
  academic: "border border-line text-muted",
} as const;

export function Badge({ kind, label }: { kind: keyof typeof styles; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[kind]}`}>
      {kind === "production" && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
      {label}
    </span>
  );
}
