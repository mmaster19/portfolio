import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-accent text-accent-contrast hover:opacity-90",
  secondary: "border border-line text-text hover:border-text",
} as const;

type Props = ComponentProps<typeof Link> & { variant?: keyof typeof variants };

export function LinkButton({ variant = "primary", className = "", ...props }: Props) {
  return (
    <Link
      {...props}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-[0.9375rem] font-medium transition ${variants[variant]} ${className}`}
    />
  );
}
