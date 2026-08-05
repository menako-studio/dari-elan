"use client";

import { motion } from "framer-motion";

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" },
} as const;

export default function LandingPage() {
  return (
    <div className="w-full bg-[#F9F9F8] min-h-screen text-[#111]">
      {/* Section 1: The Asymmetrical Hero (The Core of the Design) */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-12 px-4 md:px-12 py-24">
        {/* Left Item (40% width) */}
        <motion.div
          {...fadeInProps}
          className="w-full md:w-[40%] flex flex-col"
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
            <img
              src="/images/hero_portrait_balinese.png"
              alt="Cinematic portrait of a Balinese local in natural window light"
              className="w-full h-full object-cover rounded-none bg-neutral-200"
              data-nanobanana-prompt="Cinematic portrait of a Balinese local in natural window light, deep chiaroscuro lighting, intense shadows, soft organic textures, 35mm film aesthetic, muted earthy color palette, raw emotion, highly detailed, minimalist background --ar 3:4"
            />
          </div>
          <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            HUMAN CONNECTION — BALI
          </span>
          <h1 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111] mb-3">
            The Quiet Weight of Presence
          </h1>
          <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm">
            Translating unspoken emotions into light and shadow. A study of intimate moments.
          </p>
        </motion.div>

        {/* Right Item (50% width) - MUST ADD mt-24 md:mt-48 to this wrapper to push it down drastically */}
        <motion.div
          {...fadeInProps}
          className="w-full md:w-[50%] flex flex-col mt-24 md:mt-48"
        >
          <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-6">
            <img
              src="/images/hero_still_life_ceramic.png"
              alt="Still life photography of textured ceramic coffee cups"
              className="w-full h-full object-cover rounded-none bg-neutral-200"
              data-nanobanana-prompt="Still life photography of textured ceramic coffee cups on an old wooden table, dramatic morning sunlight piercing through blinds, sharp shadows, rising steam, wabi-sabi aesthetic, Kinfolk magazine style, 35mm photography --ar 4:3"
            />
          </div>
          <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            STILL LIFE — 2026
          </span>
          <h2 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111] mb-3">
            Rituals of Ceramic & Steam
          </h2>
          <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm">
            Finding geometry and peace in the slow-paced mornings of the island.
          </p>
        </motion.div>
      </section>

      {/* Section 2: The 3-Column Magazine Feed */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 my-32 border-t-[0.5px] border-neutral-300 pt-8">
        {/* Column 1 (Normal alignment) */}
        <motion.div
          {...fadeInProps}
          className="flex flex-col"
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
            <img
              src="/images/wedding_misty_jungle.png"
              alt="Vows in the Valley Mist"
              className="w-full h-full object-cover rounded-none bg-neutral-200"
              data-nanobanana-prompt="Intimate minimalist wedding photography, a couple standing in a misty Bali jungle, wide shot, extreme negative space, soft diffused light, poetic and emotional, analog film grain, muted greens and earthy tones --ar 3:4"
            />
          </div>
          <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            WEDDING — BALI
          </span>
          <h3 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111] mb-3">
            Vows in the Valley Mist
          </h3>
          <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm">
            Intimate celebrations anchored by nature.
          </p>
        </motion.div>

        {/* Column 2 (MIDDLE - MUST BE OFFSET with mt-16 md:mt-24) */}
        <motion.div
          {...fadeInProps}
          className="flex flex-col mt-16 md:mt-24"
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
            <img
              src="/images/street_market_murmurs.png"
              alt="Market Murmurs"
              className="w-full h-full object-cover rounded-none bg-neutral-200"
              data-nanobanana-prompt="Street photography in a Bali traditional market, silhouette of a person passing by, intense harsh morning sunlight creating long dramatic shadows, high contrast black and white style, cinematic composition, storytelling --ar 3:4"
            />
          </div>
          <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            STREET — DENPASAR
          </span>
          <h3 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111] mb-3">
            Market Murmurs
          </h3>
          <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm">
            The chaotic beauty of morning trade in Denpasar.
          </p>
        </motion.div>

        {/* Column 3 (Normal alignment) */}
        <motion.div
          {...fadeInProps}
          className="flex flex-col"
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
            <img
              src="/images/arch_teak_concrete.png"
              alt="Teak Slats & Concrete"
              className="w-full h-full object-cover rounded-none bg-neutral-200"
              data-nanobanana-prompt="Architectural photography of a minimalist villa in Bali, focus on texture of teak wood and raw concrete, sharp geometrical shadows cast by sunlight, negative space, The Local Project magazine aesthetic, photorealistic --ar 3:4"
            />
          </div>
          <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            ARCHITECTURE — BALI
          </span>
          <h3 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111] mb-3">
            Teak Slats & Concrete
          </h3>
          <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm">
            Where organic light meets structured permanence.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Full-Bleed Cinematic Break */}
      <section className="w-full aspect-[21/9] md:aspect-[2.5/1] relative my-24 overflow-hidden">
        <motion.div
          {...fadeInProps}
          className="w-full h-full relative"
        >
          <img
            src="/images/cinematic_beach_dusk.png"
            alt="Sweeping cinematic landscape of a dark, moody Bali beach at dusk"
            className="w-full h-full object-cover rounded-none bg-neutral-200"
            data-nanobanana-prompt="Sweeping cinematic landscape of a dark, moody Bali beach at dusk, long exposure water, mysterious and therapeutic atmosphere, vast negative space, soft gradients of gray and deep blue, Leica photography --ar 21:9"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 bg-black/20">
            <p className="font-times italic text-3xl md:text-5xl text-white text-center font-light leading-snug max-w-4xl drop-shadow-md">
              Photography is not just about framing. It is learning about life, therapy, and translating emotions into light and shadow.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Text-Heavy Footer Teaser */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 py-24">
        {/* Left Column: Sticky philosophy text block */}
        <motion.div
          {...fadeInProps}
          className="flex flex-col justify-start md:sticky md:top-24 self-start"
        >
          <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            PHILOSOPHY & MANIFESTO
          </span>
          <h2 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111] mb-6">
            Hi, I’m Elan Budikusumah. A storyteller using photography as my voice.
          </h2>
          <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed max-w-sm">
            Most days, you’ll find me capturing the world around me. It feels like therapy—a way to ground myself in the present.
          </p>
        </motion.div>

        {/* Right Column: Single large vertical image */}
        <motion.div
          {...fadeInProps}
          className="w-full flex flex-col"
        >
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200">
            <img
              src="/images/photographer_portrait_shadows.png"
              alt="Candid portrait of a photographer holding a camera"
              className="w-full h-full object-cover rounded-none bg-neutral-200"
              data-nanobanana-prompt="Candid portrait of a photographer holding a camera, hidden in deep shadows, chiaroscuro lighting, minimalist, highly artistic, muted tones, 35mm film --ar 3:4"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
