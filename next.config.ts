import type { NextConfig } from "next";

/**
 * Le français est servi sans préfixe (/ et /projets/…) ; les routes internes
 * vivent sous app/[locale]. Les rewrites masquent /fr, les redirections évitent
 * le contenu dupliqué.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/", destination: "/fr" },
      { source: "/projets/:slug", destination: "/fr/projets/:slug" },
    ];
  },
  async redirects() {
    return [
      { source: "/fr", destination: "/", permanent: true },
      { source: "/fr/projets/:slug", destination: "/projets/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
