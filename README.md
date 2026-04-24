# Ashanti Beauty

Site vitrine premium Next.js + Tailwind CSS pour un institut de beauté à Balma.

## Installation

```bash
npm install
```

## Démarrage local

```bash
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Déploiement sur Vercel

1. Importer le projet dans Vercel.
2. Laisser Vercel détecter automatiquement `Next.js`.
3. Déployer sans configuration supplémentaire.
4. Ajouter ensuite le vrai domaine, les vraies images et les liens réels de réservation / Instagram.

## Personnalisation rapide

- Remplacer les visuels de `public/`.
- Mettre à jour le lien Instagram dans `lib/site.ts`.
- Brancher le formulaire `components/contact-form.tsx` à une API ou un outil de réservation.
- Remplacer `bookingHref` dans `lib/site.ts` par l’URL réelle du système de réservation.
