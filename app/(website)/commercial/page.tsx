"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CommercialProject {
  id: string;
  title: string;
  category: string;
  client?: string;
  year: string;
  image: string;
  aspect: string;
  description: string;
  quote?: string;
  specs?: {
    location?: string;
    camera?: string;
    role?: string;
  };
}

const COMMERCIAL_PROJECTS: CommercialProject[] = [
  {
    id: "tisa-granicia",
    title: "Tisa Granicia",
    category: "COMMERCIAL PORTRAIT & ARTICLE",
    client: "Tisa Granicia Studio",
    year: "2026",
    image: "/images/Tisa-Granicia.jpg",
    aspect: "aspect-[4/5]",
    description: `A body of work is never created by chance. It is shaped by the way we think, the way we live, and how we respond to every experience that comes our way. Every small decision, every habit we build, every conversation we have, and every perspective we choose gradually influences the way we create.

What we make is ultimately a reflection of who we are. Our perspective, values, curiosity, as well as the pain and joy we have experienced, all leave their mark on our work. As we grow, as our way of living and seeing the world evolves, our work evolves with us.

In the end, every piece of work becomes a record of a person's way of thinking. It captures how they observe the world, make sense of it, and transform those experiences into something that others can see, feel, and connect with.`,
    quote: "What we make is ultimately a reflection of who we are.",
    specs: {
      location: "Jakarta & Bali",
      camera: "Leica M10-R",
      role: "Lead Photographer & Visual Direction",
    },
  },
  {
    id: "between-the-takes",
    title: "Between the Takes",
    category: "DOCUMENTARY & MUSIC VIDEO",
    client: "Syarikat Idola Remaja",
    year: "2026",
    image: "/images/Between-the-Takes.jpg",
    aspect: "aspect-[4/5]",
    description: `Being part of the behind-the-scenes process for Syarikat Idola Remaja's music video, inspired by the feeling of coming home in Indonesia, was a memorable experience. Behind every scene, there were countless visual details that made me want to pick up my camera and capture them.

From the early preparations before filming to the final moments after the shoot, I enjoyed every part of the process. I was given the freedom to document everything through my own perspective. After hearing the story behind why the song was written, every frame I captured carried a deeper meaning.`,
    quote: "Behind every scene, there were countless visual details.",
    specs: {
      location: "Yogyakarta, Indonesia",
      camera: "Contax 645 & Kodak Portra 400",
      role: "Behind The Scenes Stills & Documentary",
    },
  },
  {
    id: "ior",
    title: "I O R",
    category: "EDITORIAL & STILLNESS",
    client: "IOR Collective",
    year: "2025",
    image: "/images/I-O-R.jpg",
    aspect: "aspect-square",
    description: `Even the smallest presence can steady the heart, easing the weight of lonely moments and turning the day into something a little gentler.`,
    quote: "Even the smallest presence can steady the heart.",
    specs: {
      location: "Canggu, Bali",
      camera: "Hasselblad 500C/M",
      role: "Editorial Stills",
    },
  },
  {
    id: "lena-beigel",
    title: "Lena Beigel",
    category: "ARCHITECTURE & INTERIORS",
    client: "Lena Beigel Design",
    year: "2026",
    image: "/images/Lena-Beigel.jpg",
    aspect: "aspect-[4/5]",
    description: `Architectural and spatial documentation exploring how daylight interacts with raw timber, concrete, and organic forms. Highlighting the balance between structural permanence and human presence.`,
    specs: {
      location: "Ubud, Bali",
      camera: "Fujifilm GFX 100 II",
      role: "Architectural Photographer",
    },
  },
  {
    id: "just-play",
    title: "Just Play",
    category: "LIFESTYLE & CANDID",
    client: "Just Play Activewear",
    year: "2025",
    image: "/images/Just-Play.jpg",
    aspect: "aspect-[4/3]",
    description: `Capturing candid playfulness, lighthearted rhythm, and unstructured spontaneity. A study of joyful human motion set against tropical backgrounds.`,
    specs: {
      location: "Pererenan, Bali",
      camera: "Leica M6 TTL",
      role: "Campaign Stills",
    },
  },
  {
    id: "lena-beigel-2",
    title: "Lena Beigel — Space & Texture",
    category: "ARCHITECTURE & INTERIORS",
    client: "Lena Beigel Design",
    year: "2026",
    image: "/images/Lena-Beigel-2.jpg",
    aspect: "aspect-[3/4]",
    description: `Volume II of spatial photography for Lena Beigel. A deeper look into shadow play, tactile materials, and quiet indoor sanctuaries.`,
    specs: {
      location: "Uluwatu, Bali",
      camera: "Fujifilm GFX 100 II",
      role: "Architectural Photographer",
    },
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
} as const;

export default function CommercialPage() {
  const [selectedProject, setSelectedProject] = useState<CommercialProject | null>(null);

  return (
    <div className="w-full bg-[#F9F9F8] min-h-screen text-[#111111]">
      {/* Top Banner / Category Marker */}
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          COMMERCIAL & ASSIGNED WORKS (2024–2026)
        </h2>
      </section>

      {/* Page Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b-[0.5px] border-neutral-300">
          <div>
            <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2 block">
              PORTFOLIO ARCHIVE
            </span>
            <h1 className="font-suisse text-4xl sm:text-6xl tracking-tight text-[#111111] uppercase font-light">
              COMMERCIAL
            </h1>
          </div>
          <p className="font-times text-neutral-600 text-sm md:text-base max-w-md leading-relaxed italic">
            Editorial portraiture, documentary stills, architectural design, and brand storytelling crafted with quiet intention across Indonesia.
          </p>
        </div>
      </section>

      {/* Main Showcase Section 1: Hero Featured Pair (Tisa Granicia & Between the Takes) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-b-[0.5px] border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Project 1: Tisa Granicia (Col 1-7) */}
          <motion.div
            {...fadeIn}
            className="md:col-span-7 flex flex-col group cursor-pointer"
            onClick={() => setSelectedProject(COMMERCIAL_PROJECTS[0])}
          >
            <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 mb-6">
              <Image
                src={COMMERCIAL_PROJECTS[0].image}
                alt={COMMERCIAL_PROJECTS[0].title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10 bg-[#111111]/80 backdrop-blur-md text-white font-suisse text-[9px] uppercase tracking-[0.25em] px-3 py-1.5">
                FEATURED WORK
              </div>
            </div>
            <div className="flex items-center justify-between font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
              <span>{COMMERCIAL_PROJECTS[0].category}</span>
              <span>{COMMERCIAL_PROJECTS[0].year}</span>
            </div>
            <h2 className="font-suisse text-3xl md:text-5xl tracking-tight text-[#111111] mb-4 group-hover:text-neutral-600 transition-colors">
              {COMMERCIAL_PROJECTS[0].title}
            </h2>
            <div className="space-y-4 font-times text-neutral-700 text-sm md:text-base leading-relaxed">
              <p className="line-clamp-4">{COMMERCIAL_PROJECTS[0].description}</p>
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex items-center justify-between font-suisse text-[11px] uppercase tracking-widest text-[#111111]">
              <span>READ FULL STORY & VIEW GALLERY ↗</span>
              <span className="text-neutral-400">01</span>
            </div>
          </motion.div>

          {/* Project 2: Between the Takes (Col 8-12) */}
          <motion.div
            {...fadeIn}
            className="md:col-span-5 flex flex-col group cursor-pointer"
            onClick={() => setSelectedProject(COMMERCIAL_PROJECTS[1])}
          >
            <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 mb-6">
              <Image
                src={COMMERCIAL_PROJECTS[1].image}
                alt={COMMERCIAL_PROJECTS[1].title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10 bg-[#111111]/80 backdrop-blur-md text-white font-suisse text-[9px] uppercase tracking-[0.25em] px-3 py-1.5">
                MUSIC VIDEO STILLS
              </div>
            </div>
            <div className="flex items-center justify-between font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
              <span>{COMMERCIAL_PROJECTS[1].category}</span>
              <span>{COMMERCIAL_PROJECTS[1].year}</span>
            </div>
            <h2 className="font-suisse text-3xl md:text-4xl tracking-tight text-[#111111] mb-4 group-hover:text-neutral-600 transition-colors">
              {COMMERCIAL_PROJECTS[1].title}
            </h2>
            <div className="space-y-4 font-times text-neutral-700 text-sm md:text-base leading-relaxed">
              <p className="line-clamp-4">{COMMERCIAL_PROJECTS[1].description}</p>
            </div>
            <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex items-center justify-between font-suisse text-[11px] uppercase tracking-widest text-[#111111]">
              <span>READ FULL STORY & VIEW GALLERY ↗</span>
              <span className="text-neutral-400">02</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Showcase Section 2: 3-Column Magazine Spread */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b-[0.5px] border-neutral-300">
        <div className="mb-12 flex justify-between items-end border-b-[0.5px] border-neutral-300 pb-4">
          <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            SELECTED PROJECTS & ASSIGNMENTS
          </span>
          <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            BALI & JAKARTA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {COMMERCIAL_PROJECTS.slice(2).map((project, idx) => (
            <motion.div
              key={project.id}
              {...fadeIn}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-neutral-200 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-suisse text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-2 block">
                {project.category}
              </span>
              <h3 className="font-suisse text-2xl tracking-tight text-[#111111] mb-3 group-hover:text-neutral-600 transition-colors">
                {project.title}
              </h3>
              <p className="font-times text-xs md:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4 pt-3 border-t-[0.5px] border-neutral-200 flex justify-between font-suisse text-[10px] uppercase tracking-wider text-neutral-400">
                <span>CLIENT: {project.client}</span>
                <span>{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for viewing detailed text & image */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#F9F9F8]/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full md:w-[95vw] md:h-[95vh] bg-[#F9F9F8] border-[0.5px] border-neutral-300 p-4 md:p-6 flex flex-col max-h-[100vh] overflow-y-auto md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-3 mb-4 border-b-[0.5px] border-neutral-300 font-suisse text-xs uppercase tracking-[0.2em] shrink-0">
                <span className="text-neutral-500">{selectedProject.category}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1 border-[0.5px] border-neutral-300 hover:bg-[#111111] hover:text-white transition-colors"
                >
                  CLOSE [✕]
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-grow md:overflow-hidden">
                {/* Image Section - Main Dish */}
                <div className="w-full md:w-3/4 lg:w-4/5 relative bg-neutral-100 border-[0.5px] border-neutral-200 min-h-[60vh] md:min-h-0 md:h-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain"
                  />
                </div>
                
                {/* Text Section - Sidebar */}
                <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col justify-between space-y-6 md:overflow-y-auto pb-6 md:pb-0 pr-2 custom-scrollbar">
                  <div>
                    <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-2">
                      CLIENT: {selectedProject.client} — {selectedProject.year}
                    </span>
                    <h3 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111] mb-4">
                      {selectedProject.title}
                    </h3>
                    <div className="space-y-4 font-times text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {selectedProject.description}
                    </div>
                  </div>

                  {selectedProject.specs && (
                    <div className="pt-4 mt-8 border-t-[0.5px] border-neutral-300 font-unica text-[10px] text-neutral-500 space-y-2 uppercase tracking-wider shrink-0">
                      {selectedProject.specs.location && (
                        <div className="flex justify-between gap-4">
                          <span className="shrink-0">LOCATION:</span>
                          <span className="text-[#111111] text-right">{selectedProject.specs.location}</span>
                        </div>
                      )}
                      {selectedProject.specs.camera && (
                        <div className="flex justify-between gap-4">
                          <span className="shrink-0">GEAR / EMULSION:</span>
                          <span className="text-[#111111] text-right">{selectedProject.specs.camera}</span>
                        </div>
                      )}
                      {selectedProject.specs.role && (
                        <div className="flex justify-between gap-4">
                          <span className="shrink-0">ROLE:</span>
                          <span className="text-[#111111] text-right">{selectedProject.specs.role}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
