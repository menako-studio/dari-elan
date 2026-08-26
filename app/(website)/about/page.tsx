"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Brandmark from "@/components/Brandmark";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
} as const;

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FFFDF4]">
      {/* Category Header */}
      <motion.section
        {...fadeInUp}
        className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center"
      >
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          ABOUT & MANIFESTO — ELAN BUDIKUSUMAH
        </h2>
      </motion.section>

      {/* 1. Hero Full-Bleed Landscape */}
      <section className="w-full relative overflow-hidden bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[21/9] min-h-[380px] relative"
        >
          <Image
            src="/images/slowly.jpg"
            alt="Slowly by Elan Budikusumah"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8 md:p-16 z-10">
            <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-white/80">
              BANDUNG, INDONESIA — 2024
            </span>
          </div>
        </motion.div>
      </section>

      {/* 2. The Manifesto Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-36 border-b-[0.5px] border-neutral-300">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <Brandmark className="h-10 w-auto text-[#D36F83] mb-6 opacity-90" />
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-6">
            THE MANIFESTO
          </span>
          <p className="font-times text-2xl md:text-4xl leading-relaxed text-[#111111] font-normal mb-8">
            “to be the link between humans and memories.”
          </p>
          <p className="font-times text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Hi, I’m Elan Budikusumah. A Bali-based photographer dedicated to quiet observation. Most days, you’ll find me documenting human gestures, architecture, and light across Indonesia.
          </p>
        </motion.div>
      </section>

      {/* 3. 3-Column Philosophy Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 border-b-[0.5px] border-neutral-300">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-500 block mb-2">
            THREE PILLARS
          </span>
          <h3 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111]">
            MY APPROACH TO THE CRAFT
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Pillar 1 */}
          <motion.div
            {...fadeInUp}
            className="pt-6 border-t-[0.5px] border-neutral-300"
          >
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-4">
              01 / INTENTION
            </span>
            <h4 className="font-suisse text-lg tracking-tight mb-4 text-[#111111]">
              Human Connection
            </h4>
            <p className="font-times text-neutral-600 text-sm leading-relaxed">
              Photography is never about extracting an image; it is about building mutual stillness. Before releasing the shutter, I listen to the natural cadence of the subject and landscape.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
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
              Shadow is not the absence of light, but its co-author. I embrace deep contrast and warm natural highlights to create images that feel like quiet lingering memories.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
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
              Observing how tropical structure anchors the human body. Every line, timber slat, and horizon line is composed to evoke emotional resonance and equilibrium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Journey & Integrated Social Links Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Textured background with overlapping portrait */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-7 relative"
          >
            <div className="w-full aspect-[4/3] bg-neutral-200 p-8 md:p-12 relative overflow-hidden border-[0.5px] border-neutral-300">
              <div className="absolute inset-0 bg-[#EFECE6] opacity-90" />
              <div className="relative z-10 w-4/5 aspect-[3/4] ml-auto overflow-hidden border-[0.5px] border-neutral-300 bg-neutral-800">
                <Image
                  src="/images/elan.jpeg"
                  alt="Elan Budikusumah portrait"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Integrated Copy & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-3">
              LOCATION & CONNECTIVITY
            </span>
            <h3 className="font-suisse text-2xl md:text-3xl tracking-tight mb-6 text-[#111111]">
              Based in Bali, Documenting Globally
            </h3>
            <div className="space-y-4 font-times text-neutral-600 text-base leading-relaxed">
              <p>
                Based between Ubud and Canggu, Elan collaborates with high-end editorial publications, architecture studios, and private collectors.
              </p>
              <p>
                Every project begins with listening—understanding what emotion needs to be held in physical form before turning the lens toward the light.
              </p>
            </div>
            
            {/* Integrated Social Links */}
            <div className="mt-8 pt-6 border-t-[0.5px] border-neutral-300 font-suisse text-xs uppercase tracking-wider space-y-3">
              <span className="text-neutral-400 block mb-2">ONLINE PORTFOLIOS & SOCIALS:</span>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.instagram.com/elanbudikusumah" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1.5 border-[0.5px] border-neutral-300 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                >
                  Instagram ↗
                </a>
                <a 
                  href="https://www.behance.net/elanobrokoli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1.5 border-[0.5px] border-neutral-300 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                >
                  Behance ↗
                </a>
                <a 
                  href="https://www.linkedin.com/in/elan-budikusumah-764072140/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1.5 border-[0.5px] border-neutral-300 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
