"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhotoModal, { PhotoItem } from "@/components/PhotoModal";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";

const PERSONAL_PHOTOS: PhotoItem[] = [
  {
    id: "photo-01",
    number: "01",
    title: "Skin & Horizon",
    category: "Portraits / Body",
    location: "Canggu, Bali",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-[3/4]",
    specs: {
      camera: "Leica M6 TTL",
      lens: "Summilux-M 35mm f/1.4",
      film: "Kodak Portra 400",
      aperture: "f/2.0",
    },
    description:
      "A delicate examination of human warmth against natural light. Capturing tactile texture and organic contours during late afternoon sea haze.",
  },
  {
    id: "photo-02",
    number: "02",
    title: "Reflection in Rain",
    category: "Observation / B&W",
    location: "Denpasar, Bali",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-[4/5]",
    specs: {
      camera: "Hasselblad 500C/M",
      lens: "Carl Zeiss Planar 80mm f/2.8",
      film: "Ilford HP5 Plus 400",
      aperture: "f/4.0",
    },
    description:
      "Wet pavement mirroring passing figures during a monsoon downpour. Translating fleeting urban silhouettes into abstract graphite textures.",
  },
  {
    id: "photo-03",
    number: "03",
    title: "Shadow at Stazi",
    category: "Street / Atmosphere",
    location: "Ubud, Bali",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-[3/4]",
    specs: {
      camera: "Leica M10-R",
      lens: "Noctilux-M 50mm f/0.95",
      film: "Digital RAW / Monochrome",
      aperture: "f/1.2",
    },
    description:
      "High-contrast framing of a lone silhouette against warm window light. Exploring atmospheric isolation and emotional resonance.",
  },
  {
    id: "photo-04",
    number: "04",
    title: "Orange Canopy & Glass",
    category: "Objects / Form",
    location: "Seminyak, Bali",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-square",
    specs: {
      camera: "Contax T2",
      lens: "Sonnar 38mm f/2.8",
      film: "Fujifilm Pro 400H",
      aperture: "f/5.6",
    },
    description:
      "Geometry of daylight slicing through frosted glass panels. Vibrant color pops breaking through soft neutral gradients.",
  },
  {
    id: "photo-05",
    number: "05",
    title: "Yellow Heat Window",
    category: "Color Study",
    location: "Sanur, Bali",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-square",
    specs: {
      camera: "Mamiya 7 II",
      lens: "Mamiya 80mm f/4.0",
      film: "Kodak Ektar 100",
      aperture: "f/8.0",
    },
    description:
      "Steamy glass panes catching golden hour light. Overlapping layers of condensation, shadow, and warm tropical embers.",
  },
  {
    id: "photo-06",
    number: "06",
    title: "Poster Behind Steam",
    category: "Objects / Urban",
    location: "Denpasar, Bali",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[2/1]",
    specs: {
      camera: "Ricoh GR III",
      lens: "GR 18.3mm f/2.8",
      film: "Digital / Street Film Presets",
      aperture: "f/2.8",
    },
    description:
      "A weathered street bill obscured by morning coffee steam. Finding art in forgotten corners and worn urban surfaces.",
  },
  {
    id: "photo-07",
    number: "07",
    title: "The Dark Suit & Hand",
    category: "Portraits / Detail",
    location: "Uluwatu, Bali",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-square",
    specs: {
      camera: "Leica M6 TTL",
      lens: "Summicron-M 50mm f/2.0",
      film: "Kodak Tri-X 400",
      aperture: "f/2.8",
    },
    description:
      "Subtle gesture of a hand resting against tailored dark fabric. A quiet study in poise, texture, and understated dignity.",
  },
  {
    id: "photo-08",
    number: "08",
    title: "Mid-Air Momentum",
    category: "Movement / People",
    location: "Kuta, Bali",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
    aspectRatio: "aspect-[3/4]",
    specs: {
      camera: "Canon AE-1 Program",
      lens: "FD 50mm f/1.4",
      film: "Cinestill 800T",
      aperture: "f/1.4",
    },
    description:
      "A frozen instant of kinetic freedom. Capturing airborne weightlessness against weathered brick and late sun shadows.",
  },
];

const CATEGORY_TAGS = ["People", "Portraits", "Nature", "B&W", "Objects", "Commercial"];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" },
} as const;

export default function PersonalProjectPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#F9F9F8] relative overflow-x-hidden selection:bg-neutral-200">
      {/* Category Header */}
      <motion.section
        {...fadeInUp}
        className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center"
      >
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          PERSONAL PROJECTS — EXPERIMENTAL SCATTERED ARCHIVE
        </h2>
      </motion.section>

      {/* Page Title & Intro */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <motion.div {...fadeInUp} className="max-w-2xl">
          <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-3">
            UNSTRUCTURED / INTUITIVE
          </span>
          <h1 className="font-suisse text-3xl md:text-5xl tracking-tight text-[#111111] mb-4">
            Fragmented Notes & Visual Therapy
          </h1>
          <p className="font-times text-neutral-600 text-base md:text-lg leading-relaxed">
            An open collage of uncommissioned studies, personal observations, and raw film frames. Click any image for an intimate close-up viewing.
          </p>
        </motion.div>
      </section>

      {/* Floating Category Navigation Cloud */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 mb-8">
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap items-center gap-4 border-y-[0.5px] border-neutral-300 py-4 font-suisse text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          <span className="text-[#111111] font-medium mr-2">DISCOVER:</span>
          {CATEGORY_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border-[0.5px] border-neutral-300 bg-white/50 hover:bg-[#111111] hover:text-white transition-all cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Experimental Free-Flowing Overlapping Masonry Collage */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="relative w-full min-h-[1400px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Item 1 - Left Top (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[0])}
            className="md:col-span-4 group cursor-pointer relative z-10 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-sm">
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[0].imageUrl}
                  alt={PERSONAL_PHOTOS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[0].number})</span>
                <span>{PERSONAL_PHOTOS[0].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 2 - Right Top (Col span 5, shifted right & down) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[1])}
            className="md:col-span-5 md:col-start-7 mt-8 md:mt-16 group cursor-pointer relative z-20 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-sm">
              <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[1].imageUrl}
                  alt={PERSONAL_PHOTOS[1].title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[1].number})</span>
                <span>{PERSONAL_PHOTOS[1].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Scattered Tag Overlay Label */}
          <div className="hidden md:block absolute top-64 left-1/2 -translate-x-1/2 font-suisse text-xs uppercase tracking-[0.3em] text-neutral-400 rotate-90 pointer-events-none select-none">
            PORTRAITS & NATURE
          </div>

          {/* Item 3 - Center Center (Col span 4, offset upwards overlapping) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[2])}
            className="md:col-span-4 md:col-start-4 -mt-4 md:-mt-24 group cursor-pointer relative z-25 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-md">
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[2].imageUrl}
                  alt={PERSONAL_PHOTOS[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[2].number})</span>
                <span>{PERSONAL_PHOTOS[2].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 4 - Left Middle (Col span 3, square format) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[3])}
            className="md:col-span-3 mt-6 md:mt-12 group cursor-pointer relative z-15 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-sm">
              <div className="w-full aspect-square overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[3].imageUrl}
                  alt={PERSONAL_PHOTOS[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[3].number})</span>
                <span>{PERSONAL_PHOTOS[3].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 5 - Right Middle (Col span 4, offset down) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[4])}
            className="md:col-span-4 md:col-start-9 mt-6 md:mt-20 group cursor-pointer relative z-20 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-sm">
              <div className="w-full aspect-square overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[4].imageUrl}
                  alt={PERSONAL_PHOTOS[4].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[4].number})</span>
                <span>{PERSONAL_PHOTOS[4].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 6 - Panoramic Strip (Col span 6, centered across grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[5])}
            className="md:col-span-6 md:col-start-2 mt-8 md:mt-16 group cursor-pointer relative z-25 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-sm">
              <div className="w-full aspect-[2/1] overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[5].imageUrl}
                  alt={PERSONAL_PHOTOS[5].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[5].number})</span>
                <span>{PERSONAL_PHOTOS[5].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 7 - Large Portrait Anchor (Col span 5, Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[6])}
            className="md:col-span-5 md:col-start-8 -mt-6 md:-mt-32 group cursor-pointer relative z-30 transition-transform duration-500 hover:z-40 hover:scale-[1.02]"
          >
            <div className="bg-white p-4 border-[0.5px] border-neutral-300 shadow-xl">
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[6].imageUrl}
                  alt={PERSONAL_PHOTOS[6].title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between items-center font-suisse text-[11px] uppercase tracking-widest text-neutral-800 font-medium">
                <span>({PERSONAL_PHOTOS[6].number}) — {PERSONAL_PHOTOS[6].title}</span>
                <span>{PERSONAL_PHOTOS[6].category}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 8 - Bottom Left (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            onClick={() => setSelectedPhoto(PERSONAL_PHOTOS[7])}
            className="md:col-span-4 md:col-start-3 mt-6 md:mt-12 group cursor-pointer relative z-20 transition-transform duration-500 hover:z-30 hover:scale-[1.02]"
          >
            <div className="bg-white p-3 border-[0.5px] border-neutral-300 shadow-sm">
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200">
                <img
                  src={PERSONAL_PHOTOS[7].imageUrl}
                  alt={PERSONAL_PHOTOS[7].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between items-center font-suisse text-[10px] uppercase tracking-widest text-neutral-500">
                <span>({PERSONAL_PHOTOS[7].number})</span>
                <span>{PERSONAL_PHOTOS[7].category}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Intimate Viewing Modal */}
      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      {/* Ambient Audio Player Toggle */}
      <AmbientAudioPlayer />
    </div>
  );
}
