# PROJECT_STATE.md

## 1. EXECUTIVE SUMMARY & TECH STACK
- **Purpose**: "darielan.com" is the portfolio website for Elan Budikusumah, a Bali-based photographer. The aesthetic is inspired by an online photo exhibition experience heavily influenced by Hideaki Hamada's signature style—soft lighting, calm atmosphere, elegant spacing, light minimalism, introspective copywriting, asymmetric editorial grids ("The Local Project" inspired), hairline dividers, and a strict typography hierarchy.
- **Tech Stack**:
  - **Framework**: Next.js 16.3.0 (App Router)
  - **Core Libraries**: React 19.2.8, React DOM 19.2.8
  - **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with strict design system enforcement
  - **Animations**: Framer Motion v13.0.0 (cubic-bezier `[0.16, 1, 0.3, 1]` ease curves for soft organic exhibition transitions)
  - **Image Optimization**: Next.js `<Image>` component (`next/image`) with `priority` on above-the-fold hero images to guarantee zero severe LCP performance issues.
  - **Audio Engine**: HTML5 Audio Player (Modern CarPlay/iPhone 15 widget style with local .mp3 files)
  - **Analytics**: `@vercel/analytics`, `@vercel/speed-insights`

## 2. PROJECT STRUCTURE & ARCHITECTURE
- **Architecture Pattern**: Next.js App Router (Server/Client components). Interactive client components (`"use client"`) isolated for Framer Motion, view toggling, and Web Audio API.
- **Directory Tree**:
  - `/app/`: Core application logic and routing.
    - `layout.tsx`: Root layout including global navigation, font variables, global footer, Vercel Analytics, and SpeedInsights.
    - `globals.css`: Global styles enforcing strict rules (e.g., zero `border-radius` across all elements).
    - `page.tsx`: Landing page (Selected Works) - Features asymmetrical editorial 2-column hero, 3-column highlights, quote spreads, and Next.js `<Image>` LCP priority loading.
    - `/about/page.tsx`: About page (Manifesto & Philosophy) - Features hero landscape (`slowly.jpg`), three pillars of craft, portrait collage, and integrated social links.
    - `/commercial/page.tsx`: Commercial & assigned works archive - Featured project pairs, magazine spreads, and detail viewing drawer.
    - `/shop/page.tsx`: Print & preset archive - Featured preset suite, 4-column archival print grid with Next.js `<Image>` component.
    - `/personal-project/page.tsx`: Hideaki Hamada photobook archive index - Photobook mosaic grid with density controls, list view hover popup previews, category filtering, and modal viewer.
    - `/personal-projects/page.tsx`: Permanent redirect to `/personal-project`.
  - `/components/`: Reusable UI components.
    - `Navigation.tsx`: Sticky responsive header navigation with brand logo in `font-poynter` and mobile drawer dropdown.
    - `PhotoModal.tsx`: Intimate exhibition viewing modal with EXIF camera specs and editorial prologue.
    - `AmbientAudioPlayer.tsx`: Modern CarPlay-style HTML5 audio player for gallery atmosphere (persists globally in layout).
  - `/public/images/`: Local photography assets (`Tisa-Granicia.jpg`, `Between-the-Takes.jpg`, `I-O-R.jpg`, `Lena-Beigel.jpg`, `Lena-Beigel-2.jpg`, `Just-Play.jpg`, `Silas-House.jpg`, `slowly.jpg`, `elan.jpeg`).
  - Root config files: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`.

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW
- **Active Features**:
  - **LCP Image Optimization**: All key imagery is served via Next.js `<Image>` with explicit `priority` flags on hero sections to eliminate LCP bottlenecks and reduce bandwidth footprint by up to 80%.
  - **Hideaki Hamada Exhibition UX**: Light, quiet, air-filled layout, Grid/List view switching, EXIF specs bar (camera, lens, film emulsion, aperture), and floating preview popups.
  - **Landing Page (`/`)**: 2-column hero grid, 3-column magazine highlights, introspective quote spread, and full-bleed cinematic break banner.
  - **Commercial Page (`/commercial`)**: Detailed commercial portfolio showcase with modal overlay for storytelling.
  - **About Page (`/about`)**: Full-bleed hero image with gradient overlay, 3-column philosophy pillars, and portrait section with Instagram/Behance/LinkedIn links.
  - **Shop Page (`/shop`)**: Print and preset archive with featured product highlight block and responsive edition grid.
  - **Ambient Sound Player**: CarPlay/iPhone 15 styled widget running local .mp3 files with dynamic sizing and frosted glass.

## 4. REMAINING TASKS & TECHNICAL DEBT
- **Pending Features**:
  - Functional cart and checkout system for `/shop`.
  - CMS/Database integration for dynamic content management (e.g. Sanity, Strapi, or Supabase).
  - Web font optimization: Replace CSS font variables with custom webfont files in `public/fonts/` or Next.js `next/font/local`.

## 5. AI AGENT CODING GUIDELINES
- **Strict Design & Aesthetic Rules**:
  - **Visual Tone**: Hamada Hideaki aesthetic—quiet, serene, high-key warm light, soft contrast, ample whitespace, and unhurried presentation.
  - **Typography**: 
    - `font-poynter` for brand logo ("DARIELAN") only.
    - `font-suisse` for headings, category meta-tags, view toggles, buttons.
    - `font-times` for body text, excerpts, quotes, and prologues.
    - `font-unica` for footer copyright & technical specs ONLY.
  - **Zero Border-Radius**: Absolute zero `border-radius` anywhere (`* { border-radius: 0 !important; }`), EXCEPT for specific modern components like the CarPlay styled `AmbientAudioPlayer`.
  - **Dividers**: Hairline borders only (`border-b-[0.5px] border-neutral-300`). No heavy drop shadows.
  - **Palette**: Background `bg-[#F9F9F8]`, text `text-[#111111]`, container backgrounds `bg-neutral-200` or `bg-[#F0F0F0]`.
  - **LCP & Image Rules**: ALWAYS use Next.js `<Image>` component (`next/image`) for image rendering. Always add `priority` to above-the-fold hero images and define explicit `sizes` attributes for responsive srcset generation.
  - **Animations**: Soft, organic Framer Motion transitions with `ease: [0.16, 1, 0.3, 1]`.
