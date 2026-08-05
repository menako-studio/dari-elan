"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full bg-[#F9F9F8]">
      {/* 1. Header Category Banner */}
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          SELECTED WORKS — ISSUE N° 04
        </h2>
      </section>

      {/* 2. Hero Staggered 2-Column Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column (40% width -> col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col"
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="The Quiet Weight of Presence portrait by Elan Budikusumah"
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-2">
                PORTRAIT / ESSAY — BALI
              </span>
              <h1 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111]">
                The Quiet Weight of Presence
              </h1>
              <p className="font-times text-neutral-600 mt-3 text-sm leading-relaxed">
                An intimate study of stillness amidst the morning fog of Munduk. Observing human posture when unobserved—translating unspoken silence into lasting form.
              </p>
            </div>
          </motion.div>

          {/* Right Column (60% width -> col-span-7 with mt-24 md:mt-32 staggering) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col mt-12 md:mt-32"
          >
            <div className="w-full aspect-[4/3] relative overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1400&q=85"
                alt="Rituals of Steam & Ceramic by Elan Budikusumah"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-2">
                CRAFT / DOCUMENTARY
              </span>
              <h2 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111]">
                Rituals of Steam & Ceramic
              </h2>
              <p className="font-times text-neutral-600 mt-3 text-sm leading-relaxed max-w-xl">
                Hands shaped by terracotta and decades of patience in Tabanan. Capturing the tactile rhythm of smoke, clay, and early daylight filtering through wooden slats.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full border-b-[0.5px] border-neutral-300" />
      </div>

      {/* 3. Full-Bleed Interruption Quote */}
      <section className="w-full py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[21/9] min-h-[360px] flex items-center justify-center overflow-hidden bg-neutral-900"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
            alt="Full-bleed landscape by Elan Budikusumah"
            className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
            <blockquote className="font-times italic text-2xl md:text-4xl lg:text-5xl leading-tight font-normal">
              "Photography is therapy—translating raw, unsaid human emotion into fragile geometric balances of light and shadow."
            </blockquote>
            <p className="font-suisse text-[11px] uppercase tracking-[0.3em] mt-8 text-neutral-300">
              — ELAN BUDIKUSUMAH, BALI 2026
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. Magazine 3-Column Feed Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-32">
        <div className="mb-16 pb-4 border-b-[0.5px] border-neutral-300 flex justify-between items-end">
          <div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-1">
              CURATED ESSAYS
            </span>
            <h3 className="font-suisse text-xl md:text-2xl tracking-tight">
              ARCHIVAL FEED
            </h3>
          </div>
          <span className="font-suisse text-xs text-neutral-400">03 STORIES</span>
        </div>

        {/* 3-Column Grid (Middle column has mt-16 to break horizontal alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Wedding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                alt="Vows in the Valley Mist"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              WEDDING / DOCUMENTARY
            </span>
            <h4 className="font-suisse text-xl tracking-tight mb-3">
              Vows in the Valley Mist
            </h4>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              Quiet moments captured during dawn ceremonies in Sidemen. Away from staged perfection, capturing real human breath and sacred quietude.
            </p>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex justify-between items-center text-xs font-suisse tracking-wider">
              <span>EXPLORE GALLERY</span>
              <span>→</span>
            </div>
          </motion.div>

          {/* Column 2: Street (MIDDLE COLUMN HAS mt-16 BREAKING ALIGNMENT) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col mt-0 md:mt-16"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=85"
                alt="Market Murmurs"
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
              />
            </div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              STREET / OBSERVATION
            </span>
            <h4 className="font-suisse text-xl tracking-tight mb-3">
              Market Murmurs
            </h4>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              The fleeting interactions in Denpasar markets before the heat sets in. High contrast chiaroscuro framing everyday resilience and community rituals.
            </p>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex justify-between items-center text-xs font-suisse tracking-wider">
              <span>EXPLORE GALLERY</span>
              <span>→</span>
            </div>
          </motion.div>

          {/* Column 3: Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                alt="Teak Slats & Concrete"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              ARCHITECTURE / FORM
            </span>
            <h4 className="font-suisse text-xl tracking-tight mb-3">
              Teak Slats & Concrete
            </h4>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              Modernist tropical dwellings in Uluwatu where raw brutalism meets organic warmth. Exploring how light slices through timber screens.
            </p>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex justify-between items-center text-xs font-suisse tracking-wider">
              <span>EXPLORE GALLERY</span>
              <span>→</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Bottom Call to Action Section */}
      <section className="w-full border-t-[0.5px] border-neutral-300 py-24 bg-[#F0F0F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-500 block mb-4">
            COMMISSIONS & ARCHIVE
          </span>
          <h3 className="font-suisse text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto mb-8">
            Available for Select Projects & Private Commissions
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/about"
              className="font-suisse text-xs uppercase tracking-widest bg-[#111111] text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
            >
              Read Manifesto
            </Link>
            <Link
              href="/shop"
              className="font-suisse text-xs uppercase tracking-widest border border-[#111111] text-[#111111] px-8 py-4 hover:bg-[#111111] hover:text-white transition-colors"
            >
              Browse Print Archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
