import { existsSync } from "node:fs";
import path from "node:path";

/** Vrai si le fichier existe dans /public (évalué au build, côté serveur). */
export function publicFileExists(src: string): boolean {
  return existsSync(path.join(process.cwd(), "public", src));
}
