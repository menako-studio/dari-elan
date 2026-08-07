"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface CommercialProject {
  _id: string;
  title: string;
  slug: string;
  projectType: string;
  mainImage: any;
  gallery: any[];
  description: string;
  client?: string;
  date: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
} as const;

export default function CommercialClient({ projects }: { projects: CommercialProject[] }) {
  const [selectedProject, setSelectedProject] = useState<CommercialProject | null>(null);

  // If there are less than 2 projects, we'll just show them in the grid.
  const featuredProject1 = projects[0];
  const featuredProject2 = projects[1];
  const otherProjects = projects.slice(2);

  return (
    <div className="w-full bg-[#F9F9F8] min-h-screen text-[#111111]">
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          COMMERCIAL & ASSIGNED WORKS (2024–2026)
        </h2>
      </section>

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

      {(featuredProject1 || featuredProject2) && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-b-[0.5px] border-neutral-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {featuredProject1 && (
              <motion.div
                {...fadeIn}
                className="md:col-span-7 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProject(featuredProject1)}
              >
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 mb-6">
                  {featuredProject1.mainImage && (
                    <Image
                      src={urlForImage(featuredProject1.mainImage).url()}
                      alt={featuredProject1.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4 z-10 bg-[#111111]/80 backdrop-blur-md text-white font-suisse text-[9px] uppercase tracking-[0.25em] px-3 py-1.5">
                    FEATURED WORK
                  </div>
                </div>
                <div className="flex items-center justify-between font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
                  <span>{featuredProject1.projectType}</span>
                  <span>{featuredProject1.date}</span>
                </div>
                <h2 className="font-suisse text-3xl md:text-5xl tracking-tight text-[#111111] mb-4 group-hover:text-neutral-600 transition-colors">
                  {featuredProject1.title}
                </h2>
                <div className="space-y-4 font-times text-neutral-700 text-sm md:text-base leading-relaxed">
                  <p className="line-clamp-4">{featuredProject1.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex items-center justify-between font-suisse text-[11px] uppercase tracking-widest text-[#111111]">
                  <span>READ FULL STORY & VIEW GALLERY ↗</span>
                  <span className="text-neutral-400">01</span>
                </div>
              </motion.div>
            )}

            {featuredProject2 && (
              <motion.div
                {...fadeIn}
                className="md:col-span-5 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProject(featuredProject2)}
              >
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-200 mb-6">
                  {featuredProject2.mainImage && (
                    <Image
                      src={urlForImage(featuredProject2.mainImage).url()}
                      alt={featuredProject2.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4 z-10 bg-[#111111]/80 backdrop-blur-md text-white font-suisse text-[9px] uppercase tracking-[0.25em] px-3 py-1.5">
                    FEATURED WORK
                  </div>
                </div>
                <div className="flex items-center justify-between font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
                  <span>{featuredProject2.projectType}</span>
                  <span>{featuredProject2.date}</span>
                </div>
                <h2 className="font-suisse text-3xl md:text-4xl tracking-tight text-[#111111] mb-4 group-hover:text-neutral-600 transition-colors">
                  {featuredProject2.title}
                </h2>
                <div className="space-y-4 font-times text-neutral-700 text-sm md:text-base leading-relaxed">
                  <p className="line-clamp-4">{featuredProject2.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t-[0.5px] border-neutral-300 flex items-center justify-between font-suisse text-[11px] uppercase tracking-widest text-[#111111]">
                  <span>READ FULL STORY & VIEW GALLERY ↗</span>
                  <span className="text-neutral-400">02</span>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b-[0.5px] border-neutral-300">
          <div className="mb-12 flex justify-between items-end border-b-[0.5px] border-neutral-300 pb-4">
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              SELECTED PROJECTS & ASSIGNMENTS
            </span>
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project._id}
                {...fadeIn}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-neutral-200 mb-6">
                  {project.mainImage && (
                    <Image
                      src={urlForImage(project.mainImage).url()}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <span className="font-suisse text-[9px] uppercase tracking-[0.2em] text-neutral-500 mb-2 block">
                  {project.projectType}
                </span>
                <h3 className="font-suisse text-2xl tracking-tight text-[#111111] mb-3 group-hover:text-neutral-600 transition-colors">
                  {project.title}
                </h3>
                <p className="font-times text-xs md:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 pt-3 border-t-[0.5px] border-neutral-200 flex justify-between font-suisse text-[10px] uppercase tracking-wider text-neutral-400">
                  <span>CLIENT: {project.client || "N/A"}</span>
                  <span>{project.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

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
                <span className="text-neutral-500">{selectedProject.projectType}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1 border-[0.5px] border-neutral-300 hover:bg-[#111111] hover:text-white transition-colors"
                >
                  CLOSE [✕]
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-grow md:overflow-hidden">
                <div className="w-full md:w-3/4 lg:w-4/5 relative bg-neutral-100 border-[0.5px] border-neutral-200 min-h-[60vh] md:min-h-0 md:h-full">
                  {selectedProject.mainImage && (
                    <Image
                      src={urlForImage(selectedProject.mainImage).url()}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-contain"
                    />
                  )}
                </div>
                
                <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col justify-between space-y-6 md:overflow-y-auto pb-6 md:pb-0 pr-2 custom-scrollbar">
                  <div>
                    <span className="font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-2">
                      CLIENT: {selectedProject.client || "N/A"} — {selectedProject.date}
                    </span>
                    <h3 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111] mb-4">
                      {selectedProject.title}
                    </h3>
                    <div className="space-y-4 font-times text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {selectedProject.description}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
