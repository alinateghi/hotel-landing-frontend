# Aurelia — Luxury Hotel Landing Page

A cinematic, scroll-driven one-page hotel site built with React, TypeScript,
Material UI, Framer Motion and GSAP ScrollTrigger. Every section is designed
to feel like a step deeper into the hotel — hero doors → lobby → rooms →
restaurant → spa → pool → facilities → gallery → reviews → booking.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/images/     Real hotel photography + central image import map
  components/        One component per section (Hero, Lobby, Rooms, …)
  hooks/useGsap.ts    Small wrapper around gsap.context + ScrollTrigger
  theme/theme.ts      MUI theme: luxury palette, serif/sans type scale
  App.tsx             Assembles the full one-page journey
  main.tsx            Entry point
```

## A note on imagery

Five real photographs of the hotel lobby & reception were supplied and are
used throughout (`src/assets/images`). Sections that don't yet have their
own category photography (Rooms, Restaurant, Spa, Pool) currently use a
mix of tasteful gradient treatments, subtle reuse of the lobby imagery, and
icon-led layouts rather than stock/placeholder photos. As soon as real
photography for those spaces is available, drop the files into
`src/assets/images/`, add them to `src/assets/images/index.ts`, and swap
the relevant `<Box component="img" />` / background-image references in:

- `components/Rooms.tsx`
- `components/Restaurant.tsx`
- `components/Spa.tsx`
- `components/Pool.tsx`

## Customizing

- **Colors** — edit the `palette` object in `src/theme/theme.ts`.
- **Copy** — all headline/body text lives directly in each section component.
- **Scroll animations** — GSAP scenes are set up via the `useScrollScene`
  hook (see `Hero.tsx` or `Lobby.tsx` for examples); Framer Motion handles
  simpler fade/rise reveals via the shared `<Reveal />` component.

## Tech

- React 18 + TypeScript + Vite
- Material UI v6
- Framer Motion (in-view reveals, hover/tap micro-interactions)
- GSAP + ScrollTrigger (parallax, pinned crossfade lobby walkthrough)
