# Shahrood Hotel — Luxury Hotel Landing Page

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

## Language (English / Persian)

The site ships with full English and Persian (فارسی) translations and a
language switcher in the navbar (desktop: top right; mobile: inside the
drawer).

- `src/i18n/translations.ts` — every string on the site, keyed by section
  (`hero.headline`, `rooms.items`, `footer.email`, etc.), once per language.
- `src/i18n/LanguageContext.tsx` — a small provider exposing `language`,
  `setLanguage`, `dir`, and a `t(path)` accessor. The chosen language is
  remembered in `localStorage`.
- Persian automatically switches the whole document to `dir="rtl"` and
  swaps the heading font to **Vazirmatn** (Cormorant Garamond doesn't have
  Persian glyphs). MUI's layout mirrors correctly via `stylis-plugin-rtl`,
  wired up in `src/theme/createEmotionCache.ts` and `src/main.tsx`.

To add a third language: add a new key to `translations.ts` matching the
existing shape, add it to the `Language` type, and add a button for it in
`Navbar.tsx`'s language switcher.

## The Lobby: a real 3D walk-through

`components/Lobby.tsx` is the "walking into the hotel" moment, and it's
built as an actual 3D scene rather than a photo crossfade:

- The section sets `perspective` on its root and `transform-style:
  preserve-3d` on an inner scene container.
- Each lobby photo is a plane positioned with `translateZ`, `translateX`,
  `rotateY` and `scale`. On scroll (via a pinned GSAP ScrollTrigger
  timeline), each plane animates from far-away/small/blurred, in toward
  the camera and to one side (like passing a vignette on your left or
  right as you walk), then swings past and recedes behind you — real
  depth motion, not opacity fades.
- The final plane (the reception desk) resolves dead-ahead and holds,
  representing arrival.
- Captions crossfade in sync with each plane's approach.

If you want the same treatment elsewhere, copy the pattern in `Lobby.tsx`:
a `perspective` root, a `preserve-3d` scene, absolutely-positioned planes
centered with `xPercent/yPercent: -50`, and a GSAP timeline animating
`z`, `x`, `rotateY`, `scale`, `opacity` and `filter` per plane.

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
