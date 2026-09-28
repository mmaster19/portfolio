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
- **CV** : déposer le PDF dans `public/cv/`, sous le nom indiqué dans `content/shared.ts` (`PERSON.cv`).

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
3. **Variable d'environnement** (Settings → Environment Variables) :
   - `NEXT_PUBLIC_SITE_URL` = l'URL publique définitive, sans slash final (ex. `https://moussambaye.fr`).
   - Sans cette variable, le site utilise le domaine de production Vercel (`*.vercel.app`) pour le canonical,
     l'Open Graph et le sitemap.
   - La variable est lue au build : il faut redéployer après l'avoir modifiée.
4. **Domaine personnalisé** (Settings → Domains) : ajouter le domaine et suivre les instructions DNS,
   puis mettre à jour `NEXT_PUBLIC_SITE_URL` et redéployer.

Chaque push sur `main` déclenche un déploiement de production, et chaque autre branche une preview.
