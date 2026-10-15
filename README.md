# Portfolio — Moussa Mbaye

Site personnel statique, bilingue FR/EN : Next.js 16 (App Router), TypeScript et Tailwind CSS v4.
Pas de backend ni de base de données : tout le contenu est dans `content/`.

## Lancer en local

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev          # http://localhost:3000
```

Pour tester la version de production :

```bash
npm run build
npm start
```

En dev, les données manquantes (`null`) apparaissent sous forme de badges `TODO`.
En production, elles sont masquées.

## Modifier le contenu

Aucun composant à toucher, tout se passe dans `content/` :

| Fichier | Contenu |
|---|---|
| `content/shared.ts` | Ce qui ne se traduit pas : email, LinkedIn, GitHub, chemin du CV, liens des projets, `SITE_URL` |
| `content/fr.ts` | Tous les textes en français : hero, projets, parcours, compétences, contact, études de cas |
| `content/en.ts` | La version anglaise (même structure) |
| `content/types.ts` | Le schéma. Une clé manquante ou mal typée empêche la compilation |

Règles utiles :

- **Donnée pas encore disponible** : mettre `null`. Elle est signalée en dev et n'apparaît pas en production.
- **Compétences** : chaque compétence doit citer au moins un projet dans `provenBy` (`"veno"` ou `"smartroute"`).
- **Repos privés** : laisser le lien à `null`, il ne sera pas affiché.
- **Images** : déposer les captures dans `public/projects/veno/` et `public/projects/smartroute/`, avec les noms déclarés dans `content/fr.ts` (`screenshots`, `cover`). Une image absente n'est simplement pas affichée.
- **CV** : déposer le PDF FR et EN dans `public/cv/`, sous les noms indiqués dans `content/shared.ts` (`PERSON.cv.fr`, `PERSON.cv.en`).

Après une modification, vérifier que tout compile :

```bash
npx tsc --noEmit
npm run lint
```

## URLs

- Français, sans préfixe : `/`, `/projets/veno`, `/projets/smartroute`
- Anglais : `/en`, `/en/projets/veno`, `/en/projets/smartroute`

Les routes internes sont sous `app/[locale]/`. Les rewrites de `next.config.ts` masquent le préfixe `/fr`,
et `/fr/...` redirige vers l'URL sans préfixe.

## Déployer sur Vercel

1. Pousser le repo sur GitHub.
2. Sur [vercel.com/new](https://vercel.com/new), importer le repo. Vercel détecte Next.js tout seul : ne rien changer
   aux commandes de build.
3. **Domaine** (Settings → Domains) : ajouter `mbayemoussa.com` et `www.mbayemoussa.com`, puis suivre les
   instructions DNS de Vercel chez le registrar. Choisir l'une des deux versions comme principale : l'autre y redirige.
4. **URL du site** : `https://mbayemoussa.com` est la valeur par défaut de `SITE_URL` (`content/shared.ts`),
   utilisée pour le canonical, l'Open Graph et le sitemap. Aucune variable d'environnement n'est nécessaire.
   Pour changer de domaine, définir `NEXT_PUBLIC_SITE_URL` (sans slash final) dans Settings → Environment Variables,
   puis redéployer : la variable est lue au build.

Chaque push sur `main` déclenche un déploiement de production, et chaque autre branche une preview.
