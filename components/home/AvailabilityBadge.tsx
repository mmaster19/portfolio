export function AvailabilityBadge({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium">
        <span aria-hidden className="size-2 rounded-full bg-accent" />
        {label}
      </p>
      <p className="meta text-muted">{detail}</p>
    </div>
  );
}
