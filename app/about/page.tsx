"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F9F9F8]">
      {/* Category Header */}
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          ABOUT & PHILOSOPHY — ELAN BUDIKUSUMAH
        </h2>
      </section>

      {/* 1. Hero Full-Bleed Landscape */}
      <section className="w-full relative overflow-hidden bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[21/9] min-h-[380px] relative"
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=90"
            alt="Bali landscape by Elan Budikusumah"
            className="w-full h-full object-cover object-center grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-8 md:p-16">
            <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-white/80">
              BALI, INDONESIA — 2026
            </span>
          </div>
        </motion.div>
      </section>

      {/* 2. The Manifesto Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-36 border-b-[0.5px] border-neutral-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-8">
            THE MANIFESTO
          </span>
          <p className="font-times text-xl md:text-3xl leading-relaxed text-[#111111] font-normal">
            "Hi, I’m Elan Budikusumah. A storyteller using photography as my voice. Most days, you’ll find me capturing the world around me. It feels like therapy—translating emotions into light and shadow. Learning about life, not just framing."
          </p>
        </motion.div>
      </section>

      {/* 3. 3-Column Philosophy Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 border-b-[0.5px] border-neutral-300">
        <div className="mb-16">
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-500 block mb-2">
            THREE PILLARS
          </span>
          <h3 className="font-suisse text-2xl md:text-3xl tracking-tight">
            MY APPROACH TO THE CRAFT
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 border-t-[0.5px] border-neutral-300"
          >
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              01 / INTENTION
            </span>
            <h4 className="font-suisse text-lg tracking-tight mb-4 text-[#111111]">
              Human Connection
            </h4>
            <p className="font-times text-neutral-600 text-sm leading-relaxed">
              Photography is never about extracting an image; it is about building mutual stillness. Before clicking the shutter, I listen to the cadence of the subject and the landscape.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 border-t-[0.5px] border-neutral-300"
          >
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              02 / ATMOSPHERE
            </span>
            <h4 className="font-suisse text-lg tracking-tight mb-4 text-[#111111]">
              Chiaroscuro & Tone
            </h4>
            <p className="font-times text-neutral-600 text-sm leading-relaxed">
              Shadow is not the absence of light, but its co-author. I embrace deep blacks and warm natural highlights to create images that feel like quiet lingering memories rather than fast snapshots.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 border-t-[0.5px] border-neutral-300"
          >
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              03 / ARCHITECTURE
            </span>
            <h4 className="font-suisse text-lg tracking-tight mb-4 text-[#111111]">
              Spatial Geometry
            </h4>
            <p className="font-times text-neutral-600 text-sm leading-relaxed">
              Observing how tropical structure anchors the human body. Every line, timber slat, and horizon line is composed to evoke emotional resonance and spatial equilibrium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Image Stagger Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Textured background with overlapping asymmetrical portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 relative"
          >
            <div className="w-full aspect-[4/3] bg-neutral-200 p-8 md:p-12 relative overflow-hidden">
              {/* Background texture block */}
              <div className="absolute inset-0 bg-[#EFECE6] opacity-90" />
              
              {/* Overlapping portrait image */}
              <div className="relative z-10 w-4/5 aspect-[3/4] ml-auto overflow-hidden shadow-2xl bg-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85"
                  alt="Elan Budikusumah portrait in studio"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-3">
              JOURNEY & LIVING
            </span>
            <h3 className="font-suisse text-2xl md:text-3xl tracking-tight mb-6">
              Rooted in Bali, Travelling Worldwide
            </h3>
            <div className="space-y-4 font-times text-neutral-600 text-base leading-relaxed">
              <p>
                Based between the lush hills of Ubud and the coastal light of Canggu, Elan works with editorial clients, private collectors, and couples seeking authentic photographic documentation.
              </p>
              <p>
                Every project begins with dialogue—understanding what emotion needs to be held in physical form before turning the lens toward the light.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-xs tracking-wider uppercase text-[#111111]">
                COMMISSIONS & ENQUIRIES: <a href="mailto:elan@darielan.com" className="underline hover:text-neutral-500">ELAN@DARIELAN.COM</a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
