/** En dev, les données manquantes sont signalées ; en production, elles sont masquées. */
export const SHOW_PENDING = process.env.NODE_ENV !== "production";
