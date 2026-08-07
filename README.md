# Darielan - Photography Portfolio

An introspective, editorial online photo exhibition portfolio for Elan Budikusumah, built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

## Overview
This project serves as a digital photo exhibition gallery and manifesto, inspired by the quiet, light-filled, minimalist aesthetic of **Hideaki Hamada** combined with asymmetric editorial magazine layouts ("The Local Project"). It embraces an off-white palette (`#F9F9F8`), hairline dividers, strict typography rules, subtle micro-animations, and an intimate viewing experience.

## Tech Stack & Performance
- **Framework:** Next.js 16 (App Router) with Turbopack
- **CMS:** Sanity.io (Embedded Studio)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations:** Framer Motion (organic `[0.16, 1, 0.3, 1]` ease curves)
- **Image Performance:** Next.js `<Image>` optimization (`next/image`) with WebP/AVIF output, `priority` preloading for hero LCP elements, and responsive `sizes` definitions.
- **Atmosphere:** HTML5 Audio modern CarPlay styled ambient soundscape
- **Analytics:** Vercel Analytics & SpeedInsights

## Core Features
- **Hideaki Hamada Exhibition UX:** Minimal photobook archive with Grid/List view switching, category filters, camera EXIF metadata displays (camera, lens, film emulsion, aperture), and floating preview popups.
- **Editorial Layouts:** Asymmetrical column structures and full-bleed image interruptions.
- **Introspective Tone:** Copywriting and visual design centered around raw, unpolished, emotional storytelling ("Photography as therapy").
- **Strict Design System:** Absolute zero `border-radius`, strict typography hierarchy (`font-poynter`, `font-suisse`, `font-times`, `font-unica`), and hairline dividers.

## Development
```bash
npm install
npm run dev
```

## Production Build & Verification
```bash
npm run build
```

## AI Agent Guidelines
Refer to `PROJECT_STATE.md` for comprehensive rules on architecture, design guidelines, image optimization requirements, and coding conventions.
