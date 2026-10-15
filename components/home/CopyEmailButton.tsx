"use client";

import { useState } from "react";

export function CopyEmailButton({ email, label, copiedLabel }: { email: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Presse-papiers indisponible : le lien mailto reste utilisable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-[0.9375rem] font-medium transition hover:border-text"
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
