# PROJECT_STATE.md

## 1. EXECUTIVE SUMMARY & TECH STACK
- **Purpose**: "darielan.com" is the portfolio website for Elan Budikusumah, a Bali-based photographer. The aesthetic is heavily inspired by editorial magazine layouts (specifically "The Local Project"), utilizing an off-white palette, asymmetric grids, hairline dividers, an introspective tone, and a strict typography system.
- **Tech Stack**:
  - **Framework**: Next.js 16.3.0 (App Router)
  - **Core Libraries**: React 19.2.8, React DOM 19.2.8
  - **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with strict design system enforcement
  - **Animations**: Framer Motion v13.0.0
  - **Analytics**: `@vercel/analytics`, `@vercel/speed-insights`
  - **State Management & Databases**: None configured currently. Primarily static/client-side presentational content.

## 2. PROJECT STRUCTURE & ARCHITECTURE
- **Architecture Pattern**: Next.js App Router (Server/Client components). Mostly static/presentational client components (`use client` due to Framer Motion usage).
- **Directory Tree**:
  - `/app/`: Core application logic and routing.
    - `layout.tsx`: Root layout including global navigation, fonts, footer, Vercel Analytics, and SpeedInsights.
    - `globals.css`: Global styles, enforcing strict rules (e.g., zero `border-radius`).
    - `page.tsx`: Landing page (Selected Works) - Features asymmetrical editorial layouts and full-bleed image banners.
    - `/about/page.tsx`: About page (Manifesto & Philosophy) - Features introspective tone and structured 2-column layout.
    - `/shop/page.tsx`: Shop page (Archive prints and presets).
    - `/personal-project/page.tsx`: A scattered, collage-style interactive photo grid.
    - `/personal-projects/page.tsx`: Redirects to `/personal-project`.
  - `/components/`: Reusable UI components.
    - `PhotoModal.tsx`: Intimate viewing modal for the personal project collage.
    - `AmbientAudioPlayer.tsx`: Background audio player for atmosphere.
  - `/public/`: (Assumed) Static assets (currently relying on external Unsplash URLs).
  - Root config files: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`.

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW
- **Active Features**:
  - **Landing Page (`/`)**: Asymmetric 2-column hero, mixed layout grids (8+4 columns), full-bleed introspective manifesto banners.
  - **About Page (`/about`)**: Full-width hero, two-column editorial text-heavy manifesto, staggered asymmetrical imagery.
  - **Shop Page (`/shop`)**: Hero banner, featured item highlight, 4-column product grid with minimal details.
  - **Personal Project Page (`/personal-project`)**: Floating/scattered layout simulating physical photos on a desk, interactive modal, ambient audio.
- **Data Flow & Schema**: No active database or API endpoints. Data (like shop products and personal photos) is currently mocked directly in the client components.

## 4. REMAINING TASKS, TODOs & TECHNICAL DEBT
- **Technical Debt**:
  - All current pages (`page.tsx`, `about/page.tsx`, `shop/page.tsx`, `personal-project/page.tsx`) are marked as `"use client"` solely for Framer Motion or React state. This prevents optimal static rendering. Consider abstracting `motion` components and state into smaller, isolated client components so the bulk of the page remains Server Components.
  - Images use standard HTML `<img>` tags pointing to external Unsplash URLs. Next.js `<Image>` component is recommended for optimization but requires configuring remote patterns in `next.config.ts`.
- **Pending Features**:
  - Functional cart/checkout for the `/shop` route.
  - Dynamic data fetching (CMS or DB integration) for projects, shop items, and text content.
  - Setup proper local font files (e.g., Poynter, Suisse, Times, Unica) in `app/fonts/` and update `next/font` configuration, currently just relying on system fallbacks and CSS variables.

## 5. AI AGENT CODING GUIDELINES
- **Strict Design Rules**:
  - **Typography**: 
    - `font-poynter` for brand logo ("DARIELAN") only.
    - `font-suisse` for all headings, titles, category meta-tags.
    - `font-times` for body text, excerpts, quotes.
    - `font-unica` for footer only.
  - **Shapes**: Absolute zero `border-radius` anywhere (`* { border-radius: 0 !important; }`).
  - **Dividers**: Hairline dividers only (`border-b-[0.5px] border-neutral-300`). No box shadows.
  - **Colors**: Global background `bg-[#F9F9F8]`, text `text-[#111111]`, shop item containers `bg-[#F0F0F0]`.
  - **Tone & Copywriting**: Always maintain an introspective, slightly melancholic, therapeutic, and observant tone in any dummy text or copywriting generated.
  - **Spacing**: Use exaggerated negative space (e.g., `py-24`, `py-32`).
- **Standard Workflow**:
  1. Define types/interfaces (if data becomes dynamic).
  2. Implement Server Component where possible; abstract interactive/animated parts to isolated Client Components (`"use client"`).
  3. Ensure strict adherence to the design rules above using Tailwind.
  4. Test responsive layout (mobile/tablet/desktop) using `grid-cols-1 md:grid-cols-X` patterns.
