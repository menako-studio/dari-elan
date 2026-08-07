"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
} as const;

export default function LandingPage() {
  return (
    <div className="w-full bg-[#F9F9F8] min-h-screen text-[#111111]">
      {/* Category Header Banner (The Local Project Style) */}
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          EXPLORE ALL COMMERCIAL & LIFESTYLE ARTICLES — DARIELAN
        </h2>
      </section>

      {/* Main Page Title */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12 border-b-[0.5px] border-neutral-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2 block">
              EDITORIAL & COMMERCIAL ARCHIVE
            </span>
            <h1 className="font-suisse text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#111111] font-light uppercase">
              LIFESTYLE & STORIES
            </h1>
          </div>
          <p className="font-times text-neutral-500 text-sm md:text-base italic max-w-sm">
            A curated record of human connection, architecture, and quiet moments across Indonesia.
          </p>
        </div>
      </section>

      {/* Section 1: The Local Project Style Top Featured Pair (2-Column Hero Grid) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b-[0.5px] border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Featured Card 1: Tisa Granicia */}
          <motion.article {...fadeInProps} className="flex flex-col group">
            <Link href="/commercial" className="block w-full">
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 mb-6">
                <Image
                  src="/images/Tisa-Granicia.jpg"
                  alt="Tisa Granicia by Elan Budikusumah"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[10%_20%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-3 block">
                PROFILE — COMMERCIAL
              </span>
              <h2 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111111] mb-4 group-hover:text-neutral-600 transition-colors">
                Tisa Granicia
              </h2>
              <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                A body of work is never created by chance. It is shaped by the way we think, the way we live, and how we respond to every experience that comes our way. Every small decision, every habit we build, every conversation we have, and every perspective we choose gradually influences the way we create.
              </p>
              <div className="font-suisse text-[10px] uppercase tracking-wider text-neutral-400 border-t-[0.5px] border-neutral-200 pt-4 flex justify-between">
                <span>Words & Photography by Elan Budikusumah</span>
                <span>2026</span>
              </div>
            </Link>
          </motion.article>

          {/* Featured Card 2: Between the Takes */}
          <motion.article {...fadeInProps} className="flex flex-col group">
            <Link href="/commercial" className="block w-full">
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 mb-6">
                <Image
                  src="/images/Between-the-Takes.jpg"
                  alt="Between the Takes by Elan Budikusumah"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[30%_30%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-3 block">
                DOCUMENTARY — MUSIC VIDEO
              </span>
              <h2 className="font-suisse text-3xl md:text-5xl leading-[1.1] text-[#111111] mb-4 group-hover:text-neutral-600 transition-colors">
                Between the Takes
              </h2>
              <p className="font-times text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                Being part of the behind-the-scenes process for Syarikat Idola Remaja's music video, inspired by the feeling of coming home in Indonesia, was a memorable experience. Behind every scene, there were countless visual details that made me want to pick up my camera and capture them.
              </p>
              <div className="font-suisse text-[10px] uppercase tracking-wider text-neutral-400 border-t-[0.5px] border-neutral-200 pt-4 flex justify-between">
                <span>Words & Photography by Elan Budikusumah</span>
                <span>2026</span>
              </div>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Section 2: The Local Project Style 3-Column Magazine Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b-[0.5px] border-neutral-300">
        <div className="flex justify-between items-center mb-12 border-b-[0.5px] border-neutral-300 pb-4">
          <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            LIFESTYLE & EDITORIAL HIGHLIGHTS
          </span>
          <Link href="/commercial" className="font-suisse text-[10px] uppercase tracking-[0.2em] text-[#111111] hover:underline">
            VIEW ALL COMMERCIAL ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: I O R */}
          <motion.article {...fadeInProps} className="flex flex-col group">
            <Link href="/commercial" className="block w-full">
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-neutral-200 mb-6">
                <Image
                  src="/images/I-O-R.jpg"
                  alt="I O R by Elan Budikusumah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[0%_25%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-3 block">
                EDITORIAL — STILLNESS
              </span>
              <h3 className="font-suisse text-2xl md:text-3xl leading-[1.1] text-[#111111] mb-3 group-hover:text-neutral-600 transition-colors">
                I O R
              </h3>
              <p className="font-times text-sm text-neutral-600 leading-relaxed mb-4">
                Even the smallest presence can steady the heart, easing the weight of lonely moments and turning the day into something a little gentler.
              </p>
              <span className="font-suisse text-[10px] uppercase text-neutral-400 block pt-2 border-t-[0.5px] border-neutral-200">
                ELAN BUDIKUSUMAH
              </span>
            </Link>
          </motion.article>

          {/* Card 2: Lena Beigel */}
          <motion.article {...fadeInProps} className="flex flex-col group">
            <Link href="/commercial" className="block w-full">
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-neutral-200 mb-6">
                <Image
                  src="/images/Lena-Beigel-2.jpg"
                  alt="Lena Beigel by Elan Budikusumah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[0%_100%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-3 block">
                POTTERY — BALI
              </span>
              <h3 className="font-suisse text-2xl md:text-3xl leading-[1.1] text-[#111111] mb-3 group-hover:text-neutral-600 transition-colors">
                Lena Beigel
              </h3>
              <p className="font-times text-sm text-neutral-600 leading-relaxed mb-4">
                A glimpse into the world of ceramics, where hands shape clay into vessels of quiet strength and subtle imperfection.
              </p>
              <span className="font-suisse text-[10px] uppercase text-neutral-400 block pt-2 border-t-[0.5px] border-neutral-200">
                ELAN BUDIKUSUMAH
              </span>
            </Link>
          </motion.article>

          {/* Card 3: Just Play */}
          <motion.article {...fadeInProps} className="flex flex-col group">
            <Link href="/commercial" className="block w-full">
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-neutral-200 mb-6">
                <Image
                  src="/images/Silas-House.jpg"
                  alt="Silas House by Elan Budikusumah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_40%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-suisse text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-3 block">
                ARCHITECTURE — BANDUNG
              </span>
              <h3 className="font-suisse text-2xl md:text-3xl leading-[1.1] text-[#111111] mb-3 group-hover:text-neutral-600 transition-colors">
                Silas House
              </h3>
              <p className="font-times text-sm text-neutral-600 leading-relaxed mb-4">
                Architectural and spatial exploration capturing natural light, raw textures, and modern structural forms in Bandung.
              </p>
              <span className="font-suisse text-[10px] uppercase text-neutral-400 block pt-2 border-t-[0.5px] border-neutral-200">
                ELAN BUDIKUSUMAH
              </span>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Section 3: Editorial Quote Spread & Feature Banner */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 border-b-[0.5px] border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Deep Manifesto Quote */}
          <motion.div {...fadeInProps} className="md:col-span-5 flex flex-col justify-center">
            <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4 block">
              INTROSPECTIVE PERSPECTIVE
            </span>
            <blockquote className="font-times text-2xl md:text-3xl leading-relaxed text-[#111111] italic mb-6">
              "What we make is ultimately a reflection of who we are. Our perspective, values, curiosity, as well as the pain and joy we have experienced, all leave their mark on our work."
            </blockquote>
            <p className="font-times text-sm text-neutral-600 leading-relaxed">
              In the end, every piece of work becomes a record of a person's way of thinking. It captures how they observe the world, make sense of it, and transform those experiences into something that others can see, feel, and connect with.
            </p>
          </motion.div>

          {/* Right: Featured Architectural Image */}
          <motion.div {...fadeInProps} className="md:col-span-7">
            <div className="w-full aspect-[4/3] relative overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300">
              <Image
                src="/images/Lena-Beigel.jpg"
                alt="Lena Beigel Architectural Feature"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-[50%_50%]"
              />
            </div>
            <div className="mt-3 flex justify-between font-suisse text-[10px] uppercase text-neutral-400 tracking-wider">
              <span>LENA BEIGEL ARCHITECTURE STUDY</span>
              <span>BALI, INDONESIA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Full-Bleed Cinematic Break Banner */}
      <section className="w-full aspect-[21/9] md:aspect-[2.5/1] relative my-20 overflow-hidden">
        <motion.div {...fadeInProps} className="w-full h-full relative">
          <Image
            src="/images/Just-Play.jpg"
            alt="Sweeping cinematic landscape of a dark, moody Bali beach at dusk"
            fill
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 bg-black/30">
            <p className="font-times italic text-2xl md:text-4xl text-white text-center font-light leading-relaxed max-w-4xl drop-shadow-md">
              Photography is not just about framing. It is learning about life, therapy, and translating emotions into light and shadow.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
