"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" },
} as const;

export default function LandingPage() {
  return (
    <div className="w-full bg-[#F9F9F8]">
      {/* 1. Header Category Banner */}
      <motion.section
        {...fadeInUp}
        className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center"
      >
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          BALI EDITORIAL JOURNAL — ISSUE N° 04 (2026)
        </h2>
      </motion.section>

      {/* 2. Hero Staggered 2-Column Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b-[0.5px] border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Feature Block (7 columns) */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-7 flex flex-col"
          >
            <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85"
                alt="The Crown of Sacred Waters by Elan Budikusumah"
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-2">
                BALI ARCHITECTURE & CRAFT / VOL. I
              </span>
              <h1 className="font-suisse text-2xl md:text-4xl tracking-tight text-[#111111] mb-3">
                The Crown of Sacred Waters
              </h1>
              <p className="font-times text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
                Examining the gilded ritual diadems of Karangasem temples. Where artisan metalwork transcends ornamentation, transforming into a vessel for quiet devotions under the zenith sun.
              </p>
            </div>
          </motion.div>

          {/* Right Feature Block (5 columns, staggered with mt-12 md:mt-24) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 flex flex-col mt-6 md:mt-24"
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85"
                alt="The Quiet Weight of Presence by Elan Budikusumah"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-2">
                PORTRAIT / ESSAY — MUNDUK
              </span>
              <h2 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111] mb-3">
                The Quiet Weight of Presence
              </h2>
              <p className="font-times text-neutral-600 text-sm leading-relaxed">
                An intimate observation of morning domesticity in the highlands. Light filtering through woven bamboo shutters onto linen, capturing human stillness before the world awakens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. 3-Column Asymmetrical Magazine Feed */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b-[0.5px] border-neutral-300">
        <motion.div
          {...fadeInUp}
          className="mb-14 pb-4 border-b-[0.5px] border-neutral-300 flex justify-between items-end"
        >
          <div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-1">
              CURATED ESSAYS — ARCHIVAL JOURNAL
            </span>
            <h3 className="font-suisse text-xl md:text-3xl tracking-tight">
              FEATURED PHOTOGRAPHY SERIES
            </h3>
          </div>
          <span className="font-suisse text-xs text-neutral-400">ISSUE 04</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
          {/* Card 1 */}
          <motion.div
            {...fadeInUp}
            className="flex flex-col"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300 mb-6">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                alt="Rituals of Steam & Clay"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              TERRACOTTA / TABANAN
            </span>
            <h4 className="font-suisse text-xl md:text-2xl tracking-tight mb-3">
              Rituals of Steam & Clay
            </h4>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              Decades of pottery mastery in Tabanan village. Capturing weathered hands shaping raw earth into timeless form amid rising kiln smoke.
            </p>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex justify-between items-center text-xs font-suisse tracking-wider">
              <span>READ ESSAY</span>
              <span>→</span>
            </div>
          </motion.div>

          {/* Card 2 (Middle column staggered with mt-0 md:mt-16) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col mt-0 md:mt-16"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300 mb-6">
              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=85"
                alt="Market Murmurs at Dawn"
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              STREET / DENPASAR
            </span>
            <h4 className="font-suisse text-xl md:text-2xl tracking-tight mb-3">
              Market Murmurs at Dawn
            </h4>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              Chiaroscuro shadows casting geometric silhouettes across old Denpasar spice stalls before the midday tropical heat sets in.
            </p>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex justify-between items-center text-xs font-suisse tracking-wider">
              <span>READ ESSAY</span>
              <span>→</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300 mb-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                alt="Silence Over Sidemen Valley"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              ARCHIVAL / SIDEMEN
            </span>
            <h4 className="font-suisse text-xl md:text-2xl tracking-tight mb-3">
              Silence Over Sidemen Valley
            </h4>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              Morning mist settling across terraced rice slopes, translating unspoken emotional quietude into delicate geometries of light and shadow.
            </p>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex justify-between items-center text-xs font-suisse tracking-wider">
              <span>READ ESSAY</span>
              <span>→</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Full-Bleed Interruption Banner with Introspective Manifesto Quote */}
      <section className="w-full py-20 md:py-28 bg-[#111111] text-white">
        <motion.div
          {...fadeInUp}
          className="relative w-full aspect-[21/9] min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85"
            alt="Full bleed horizon by Elan Budikusumah"
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
            <blockquote className="font-times italic text-2xl md:text-4xl lg:text-5xl leading-snug font-normal text-neutral-100">
              "Photography is not just about framing; it is about learning about life, therapy, and translating emotions into light and shadow."
            </blockquote>
            <p className="font-suisse text-[10px] uppercase tracking-[0.3em] mt-8 text-neutral-400">
              — ELAN BUDIKUSUMAH, BALI 2026
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5. Asymmetrical Mixed Layout (8 columns + 4 columns) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b-[0.5px] border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* 8-column wide feature */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-8 flex flex-col"
          >
            <div className="w-full aspect-[16/9] relative overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
                alt="Monoliths of the Cliff Edge by Elan Budikusumah"
                className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-2">
                DOCUMENTARY / ULUWATU
              </span>
              <h3 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111] mb-3">
                Monoliths of the Cliff Edge
              </h3>
              <p className="font-times text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl">
                Limestone precipices meeting ocean surges. Exploring how modernist tropical architecture anchors itself within wild coastal geography.
              </p>
            </div>
          </motion.div>

          {/* 4-column side feature */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 flex flex-col"
          >
            <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
                alt="Silver & Vessel Studies"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300">
              <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-2">
                OBJECT / STILL LIFE
              </span>
              <h3 className="font-suisse text-xl md:text-2xl tracking-tight text-[#111111] mb-3">
                Silver & Vessel Studies
              </h3>
              <p className="font-times text-neutral-600 text-sm leading-relaxed">
                Brushed steel, artisan glassware, and light gradients captured in natural afternoon shadows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Commissions & Archive CTA Section */}
      <section className="w-full py-24 bg-[#F0F0F0] border-t-[0.5px] border-neutral-300">
        <motion.div
          {...fadeInUp}
          className="max-w-[1400px] mx-auto px-6 md:px-12 text-center"
        >
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-500 block mb-4">
            COMMISSIONS & ARCHIVE
          </span>
          <h3 className="font-suisse text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto mb-8 text-[#111111]">
            Available for Select Projects & Private Commissions
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/about"
              className="font-suisse text-xs uppercase tracking-widest bg-[#111111] text-white px-8 py-4 border border-[#111111] hover:bg-neutral-800 transition-colors"
            >
              Read Manifesto
            </Link>
            <Link
              href="/personal-project"
              className="font-suisse text-xs uppercase tracking-widest border border-[#111111] text-[#111111] px-8 py-4 hover:bg-[#111111] hover:text-white transition-colors"
            >
              Personal Projects Collage
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
