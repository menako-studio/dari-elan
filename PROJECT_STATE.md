# PROJECT_STATE.md

## 1. EXECUTIVE SUMMARY & TECH STACK
- **Purpose**: "darielan.com" is the portfolio website for Elan Budikusumah, a Bali-based photographer. The aesthetic is inspired by an online photo exhibition experience heavily influenced by Hideaki Hamada's signature style and the official **dari elan BIM (Brand Identity Manual)**—soft lighting, calm atmosphere, elegant spacing, light minimalism, introspective copywriting, asymmetric editorial grids ("The Local Project" inspired), hairline dividers, and a strict typography and color hierarchy.
- **Brand Tagline**: *"to be the link between humans and memories."*
- **Tech Stack**:
  - **Framework**: Next.js 16.3.0 (App Router)
  - **Core Libraries**: React 19.2.8, React DOM 19.2.8
  - **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with strict brand design system enforcement
  - **Typography Engine**: Next.js `next/font/google` with Inter & EB Garamond
  - **Animations**: Framer Motion v13.0.0 (cubic-bezier `[0.16, 1, 0.3, 1]` ease curves for soft organic exhibition transitions)
  - **Image Optimization**: Next.js `<Image>` component (`next/image`) with `priority` on above-the-fold hero images to guarantee zero severe LCP performance issues.
  - **Audio Engine**: HTML5 Audio Player (Modern CarPlay/iPhone 15 widget style with local .mp3 files)
  - **Analytics**: `@vercel/analytics`, `@vercel/speed-insights`

## 2. PROJECT STRUCTURE & ARCHITECTURE
- **Architecture Pattern**: Next.js App Router (Server/Client components). Interactive client components (`"use client"`) isolated for Framer Motion, view toggling, and Web Audio API.
- **Directory Tree**:
  - `/app/`: Core application logic and routing.
    - `layout.tsx`: Root layout including global navigation, font variables, global footer, Vercel Analytics, and SpeedInsights.
    - `globals.css`: Global styles enforcing brand color variables (`--brand-bg: #FFFDF4`, `--brand-pink: #D36F83`, etc.) and zero `border-radius`.
    - `page.tsx`: Landing page (Selected Works) - Features asymmetrical editorial 2-column hero, 3-column highlights, quote spreads, and Next.js `<Image>` LCP priority loading.
    - `/about/page.tsx`: About page (Manifesto & Philosophy) - Features hero landscape (`slowly.jpg`), three pillars of craft, portrait collage, brandmark stamp, and integrated social links.
    - `/commercial/page.tsx`: Commercial & assigned works archive - Featured project pairs, magazine spreads, and detail viewing drawer.
    - `/shop/page.tsx`: Print & preset archive - Featured preset suite, 4-column archival print grid with Next.js `<Image>` component.
    - `/personal-project/page.tsx`: Hideaki Hamada photobook archive index - Photobook mosaic grid with density controls, list view hover popup previews, category filtering, and modal viewer.
    - `/personal-projects/page.tsx`: Permanent redirect to `/personal-project`.
  - `/components/`: Reusable UI components.
    - `BrandLogo.tsx`: Primary signature cursive wordmark component strictly observing brand guideline proportions (min height 25px, clear space).
    - `Brandmark.tsx`: Botanical stamp logogram component in Nostalgia Pink / dark / light variants.
    - `Navigation.tsx`: Sticky responsive header navigation with authentic `BrandLogo` and mobile drawer with brandmark stamp.
    - `PhotoModal.tsx`: Intimate exhibition viewing modal with EXIF camera specs and editorial prologue.
    - `AmbientAudioPlayer.tsx`: Modern CarPlay-style HTML5 audio player for gallery atmosphere (persists globally in layout).
  - `/public/images/`: Local photography assets & vector SVG brand assets (`darielan-wordmark.svg`, `darielan-brandmark.svg`, `darielan-brandmark-pink.svg`, `Tisa-Granicia.jpg`, `Between-the-Takes.jpg`, `I-O-R.jpg`, `Lena-Beigel.jpg`, `Lena-Beigel-2.jpg`, `Just-Play.jpg`, `Silas-House.jpg`, `slowly.jpg`, `elan.jpeg`).
  - `/public/brand_guideline/`: Official brand documentation (`darielan_BIM.pdf`).
  - Root config files: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`.

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW
- **Active Features**:
  - **BIM Brand Guidelines Conformity**:
    - Primary Wordmark vector integration (`BrandLogo.tsx` / `darielan-wordmark.svg`).
    - Complementary Brandmark botanical stamp (`Brandmark.tsx` / `darielan-brandmark.svg`).
    - Standardized typography using Inter (Sans) and EB Garamond (Serif) via Google Fonts.
    - Exact brand color palette: Warm Ivory background (`#FFFDF4`), Nostalgia Pink accent (`#D36F83`), Muted Card (`#E5DED4`), and Ink (`#111111`).
  - **LCP Image Optimization**: All key imagery is served via Next.js `<Image>` with explicit `priority` flags on hero sections to eliminate LCP bottlenecks and reduce bandwidth footprint by up to 80%.
  - **Hideaki Hamada Exhibition UX**: Light, quiet, air-filled layout, Grid/List view switching, EXIF specs bar (camera, lens, film emulsion, aperture), and floating preview popups.
  - **Landing Page (`/`)**: 2-column hero grid, 3-column magazine highlights, introspective quote spread, and full-bleed cinematic break banner.
  - **Commercial Page (`/commercial`)**: Detailed commercial portfolio showcase with modal overlay for storytelling.
  - **About Page (`/about`)**: Full-bleed hero image with gradient overlay, 3-column philosophy pillars, and portrait section with Instagram/Behance/LinkedIn links.
  - **Shop Page (`/shop`)**: Print and preset archive with featured product highlight block and responsive edition grid.
  - **Ambient Sound Player**: CarPlay/iPhone 15 styled widget running local .mp3 files with dynamic sizing and frosted glass.
  - **Headless CMS & Embedded Studio**: Integrated Sanity.io with Embedded Studio at `/studio`, configured with global CSS inheritance, clean white background, and `suppressHydrationWarning` to eliminate browser extension attribute mismatch errors.
  - **Dynamic Sanity Content Integration**: Created GROQ queries and client/server split components for `/commercial`, `/personal-project`, and `/shop` to seamlessly bridge CMS data with fallback data.

## 4. REMAINING TASKS & TECHNICAL DEBT
- **Pending Features**:
  - Functional cart and checkout system for `/shop`.
  - Additional photobook essay narrative pages for special series.

## 5. AI AGENT CODING GUIDELINES
- **Strict Design & Aesthetic Rules**:
  - **Visual Tone**: Hamada Hideaki aesthetic + BIM Brand Guideline—quiet, serene, warm high-key light, soft contrast, ample whitespace, and unhurried presentation.
  - **Brand Color Palette**:
    - Background: `bg-[#FFFDF4]` (Warm Ivory)
    - Primary Accent: `text-[#D36F83]` / `bg-[#D36F83]` (Nostalgia Pink)
    - Card / Muted Neutral: `bg-[#E5DED4]`
    - Body Ink: `text-[#111111]`
    - Muted Text: `text-[#606060]` / `text-neutral-500`
    - Hairline Border: `border-neutral-300/80` or `border-[#E5DED4]`
  - **Typography**: 
    - `BrandLogo` / SVG for brand wordmark only.
    - `font-inter` / `font-suisse` for headings, category meta-tags, view toggles, buttons.
    - `font-garamond` / `font-times` for body text, excerpts, quotes, and prologues.
    - `font-unica` for footer copyright & technical specs ONLY.
  - **Zero Border-Radius**: Absolute zero `border-radius` anywhere (`* { border-radius: 0 !important; }`), EXCEPT for specific modern components like the CarPlay styled `AmbientAudioPlayer`.
  - **Dividers**: Hairline borders only (`border-b-[0.5px] border-neutral-300`). No heavy drop shadows.
  - **LCP & Image Rules**: ALWAYS use Next.js `<Image>` component (`next/image`) for image rendering. Always add `priority` to above-the-fold hero images and define explicit `sizes` attributes for responsive srcset generation.
  - **Animations**: Soft, organic Framer Motion transitions with `ease: [0.16, 1, 0.3, 1]`.
