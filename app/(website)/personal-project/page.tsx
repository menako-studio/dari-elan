"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PhotoModal, { PhotoItem } from "@/components/PhotoModal";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";

// Curated 36 high-quality photography items matching Hideaki Hamada's light-filled, minimalist, editorial aesthetic
const PERSONAL_PHOTOS: PhotoItem[] = [
  {
    id: "photo-tisa-granicia",
    number: "01",
    title: "Tisa Granicia",
    category: "commercial",
    location: "Jakarta & Bali",
    year: "2026",
    imageUrl: "/images/Tisa-Granicia.jpg",
    aspectRatio: "aspect-[4/5]",
    specs: {
      camera: "Leica M10-R",
      lens: "Summilux-M 35mm f/1.4",
      film: "Digital RAW",
      aperture: "f/1.4",
    },
    description: `A body of work is never created by chance. It is shaped by the way we think, the way we live, and how we respond to every experience that comes our way. Every small decision, every habit we build, every conversation we have, and every perspective we choose gradually influences the way we create.

What we make is ultimately a reflection of who we are. Our perspective, values, curiosity, as well as the pain and joy we have experienced, all leave their mark on our work. As we grow, as our way of living and seeing the world evolves, our work evolves with us.

In the end, every piece of work becomes a record of a person's way of thinking. It captures how they observe the world, make sense of it, and transform those experiences into something that others can see, feel, and connect with.`,
  },
  {
    id: "photo-between-takes",
    number: "02",
    title: "Between the Takes",
    category: "documentary",
    location: "Yogyakarta, Indonesia",
    year: "2026",
    imageUrl: "/images/Between-the-Takes.jpg",
    aspectRatio: "aspect-[4/5]",
    specs: {
      camera: "Contax 645",
      lens: "Carl Zeiss Planar 80mm f/2.0",
      film: "Kodak Portra 400",
      aperture: "f/2.0",
    },
    description: `Being part of the behind-the-scenes process for Syarikat Idola Remaja's music video, inspired by the feeling of coming home in Indonesia, was a memorable experience. Behind every scene, there were countless visual details that made me want to pick up my camera and capture them.

From the early preparations before filming to the final moments after the shoot, I enjoyed every part of the process. I was given the freedom to document everything through my own perspective. After hearing the story behind why the song was written, every frame I captured carried a deeper meaning.`,
  },
  {
    id: "photo-ior",
    number: "03",
    title: "I O R",
    category: "personal",
    location: "Canggu, Bali",
    year: "2025",
    imageUrl: "/images/I-O-R.jpg",
    aspectRatio: "aspect-square",
    specs: {
      camera: "Hasselblad 500C/M",
      lens: "Carl Zeiss Planar 80mm f/2.8",
      film: "Ilford HP5 Plus 400",
      aperture: "f/2.8",
    },
    description: "Even the smallest presence can steady the heart, easing the weight of lonely moments and turning the day into something a little gentler.",
  },
  {
    id: "photo-lena-beigel",
    number: "04",
    title: "Lena Beigel",
    category: "still life",
    location: "Ubud & Uluwatu, Bali",
    year: "2026",
    imageUrl: "/images/Lena-Beigel.jpg",
    images: ["/images/Lena-Beigel.jpg", "/images/Lena-Beigel-2.jpg"],
    aspectRatio: "aspect-[3/4]",
    specs: {
      camera: "Fujifilm GFX 100 II",
      lens: "GF 110mm & GF 45mm",
      film: "Provia Standard / Acros",
      aperture: "f/4.0 - f/5.6",
    },
    description: "Architectural & spatial exploration capturing natural light, raw textures, and modern structural forms. Vol. I & II examine light penetration and geometric shadows across serene spaces.",
  },
  {
    id: "photo-just-play",
    number: "05",
    title: "Just Play",
    category: "lifestyle",
    location: "Pererenan, Bali",
    year: "2025",
    imageUrl: "/images/Just-Play.jpg",
    aspectRatio: "aspect-[4/3]",
    specs: {
      camera: "Leica M6 TTL",
      lens: "Summicron 35mm f/2.0",
      film: "Kodak Gold 200",
      aperture: "f/5.6",
    },
    description: "Capturing candid playfulness, lighthearted rhythm, and unstructured spontaneity.",
  },
];

const CATEGORIES = [
  "all",
  "advertisement",
  "editorial",
  "commercial",
  "personal",
  "portrait",
  "lifestyle",
  "documentary",
  "still life",
  "travel",
];

function PersonalProjectGallery() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read URL query parameters
  const activeCategory = searchParams.get("category") || "all";
  const viewMode = (searchParams.get("view") as "grid" | "list") || "grid";
  const gridCols = (searchParams.get("density") as "dense" | "standard" | "large") || "dense";
  const activePhotoId = searchParams.get("photo");

  const [hoveredPhoto, setHoveredPhoto] = useState<PhotoItem | null>(null);

  // Helper to update query string without page reload
  const updateQuery = (params: Record<string, string | null>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    Object.entries(params).forEach(([key, val]) => {
      if (val === null || val === "all" || val === "grid" || val === "dense") {
        current.delete(key);
      } else {
        current.set(key, val);
      }
    });
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  // Derive selected photo from activePhotoId
  const selectedPhoto = useMemo(() => {
    if (!activePhotoId) return null;
    return PERSONAL_PHOTOS.find((p) => p.id === activePhotoId) || null;
  }, [activePhotoId]);

  // Filter photos based on active category
  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return PERSONAL_PHOTOS;
    return PERSONAL_PHOTOS.filter((photo) => photo.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  // Next / Prev photo navigation logic
  const selectedIndex = useMemo(() => {
    if (!selectedPhoto) return -1;
    return filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
  }, [selectedPhoto, filteredPhotos]);

  const handleNextPhoto = () => {
    if (selectedIndex >= 0 && selectedIndex < filteredPhotos.length - 1) {
      const nextPhoto = filteredPhotos[selectedIndex + 1];
      updateQuery({ photo: nextPhoto.id });
    }
  };

  const handlePrevPhoto = () => {
    if (selectedIndex > 0) {
      const prevPhoto = filteredPhotos[selectedIndex - 1];
      updateQuery({ photo: prevPhoto.id });
    }
  };

  // Determine Tailwind grid column classes based on selected density
  const gridColsClass = useMemo(() => {
    switch (gridCols) {
      case "dense":
        return "grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-1.5 md:gap-2";
      case "standard":
        return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3";
      case "large":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6";
      default:
        return "grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-1.5 md:gap-2";
    }
  }, [gridCols]);

  return (
    <div className="w-full min-h-screen bg-[#F9F9F8] text-[#111111] selection:bg-neutral-200">
      
      {/* Hideaki Hamada Style Simplified Minimal Header */}
      <header className="w-full pt-6 pb-4 px-6 md:px-12 bg-[#F9F9F8]">
        <div className="max-w-[1800px] mx-auto">
          {/* Main Title & View Switcher Bar */}
          <div className="flex justify-between items-center pb-4">
            <h1 className="font-suisse text-xs md:text-sm uppercase tracking-[0.25em] text-[#111111] font-medium">
              PERSONAL EXPLORATIONS (2012–2026)
            </h1>

            {/* View Mode Toggle: Grid • List */}
            <div className="flex items-center space-x-3 font-suisse text-[11px] tracking-[0.2em] uppercase">
              <button
                onClick={() => updateQuery({ view: "grid" })}
                className={`transition-colors ${
                  viewMode === "grid"
                    ? "text-[#111111] font-medium underline underline-offset-4"
                    : "text-neutral-400 hover:text-[#111111]"
                }`}
              >
                Grid
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => updateQuery({ view: "list" })}
                className={`transition-colors ${
                  viewMode === "list"
                    ? "text-[#111111] font-medium underline underline-offset-4"
                    : "text-neutral-400 hover:text-[#111111]"
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Minimal Inline Category Selector */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 border-t-[0.5px] border-neutral-300/60 font-suisse text-[11px] uppercase tracking-[0.18em]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => updateQuery({ category: cat })}
                  className={`transition-all duration-200 py-1 ${
                    isActive
                      ? "text-[#111111] font-semibold border-b border-[#111111]"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Works Content View (Grid or List) */}
      <main className="w-full px-4 md:px-12 py-8 md:py-12 max-w-[1800px] mx-auto min-h-[70vh]">
        
        {/* GRID VIEW — Hideaki Hamada Photobook Mosaic */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`grid ${gridColsClass} transition-all duration-500`}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
                onClick={() => updateQuery({ photo: photo.id })}
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
                className="group relative cursor-pointer overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300/40"
              >
                {/* Photo Thumbnail Container */}
                <div className="w-full aspect-[4/3] sm:aspect-square relative overflow-hidden bg-neutral-200">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 10vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>

                {/* Subtle Hover Caption Overlay */}
                <div className="absolute inset-0 bg-[#111111]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-3 flex flex-col justify-between text-white pointer-events-none z-10">
                  <div className="flex justify-between items-start font-suisse text-[9px] uppercase tracking-wider text-neutral-300">
                    <span>({photo.number})</span>
                    <span>{photo.year}</span>
                  </div>
                  <div>
                    <h3 className="font-suisse text-xs font-normal tracking-wide line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="font-suisse text-[9px] uppercase tracking-widest text-neutral-300 mt-0.5">
                      {photo.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* LIST VIEW — Clean Archival List with Hover Preview */}
        {viewMode === "list" && (
          <div className="w-full flex flex-col divide-y-[0.5px] divide-neutral-300/60 border-t-[0.5px] border-b-[0.5px] border-neutral-300/60">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => updateQuery({ photo: photo.id })}
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
                className="group py-4 px-2 flex justify-between items-center cursor-pointer hover:bg-neutral-100/80 transition-colors font-suisse text-xs uppercase tracking-[0.15em]"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-neutral-400 font-mono text-[10px]">({photo.number})</span>
                  <span className="text-[#111111] group-hover:underline underline-offset-4 font-medium">{photo.title}</span>
                </div>
                <div className="flex items-center space-x-6 text-neutral-500 text-[10px]">
                  <span className="hidden sm:inline">{photo.category}</span>
                  <span>{photo.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State if filter returns no items */}
        {filteredPhotos.length === 0 && (
          <div className="py-24 text-center font-suisse text-xs text-neutral-400 uppercase tracking-widest">
            NO WORKS FOUND IN CATEGORY "{activeCategory}"
          </div>
        )}
      </main>

      {/* Floating Hover Preview Box */}
      <AnimatePresence>
        {hoveredPhoto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-12 right-12 z-40 hidden lg:block pointer-events-none"
          >
            <div className="bg-[#F9F9F8] p-2 border-[0.5px] border-neutral-400 shadow-xl max-w-[220px]">
              <div className="relative w-48 h-64 bg-neutral-200">
                <Image
                  src={hoveredPhoto.imageUrl}
                  alt={hoveredPhoto.title}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 font-suisse text-[10px] uppercase tracking-wider text-neutral-600 flex justify-between">
                <span className="truncate">{hoveredPhoto.title}</span>
                <span className="text-neutral-400 font-mono">({hoveredPhoto.number})</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Footer Info & Count */}
      <footer className="w-full border-t-[0.5px] border-neutral-300 py-6 px-6 md:px-12 bg-[#F9F9F8]">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row justify-between items-center font-suisse text-[10px] text-neutral-400 uppercase tracking-[0.2em] gap-4">
          <div>
            SHOWING {filteredPhotos.length} OF {PERSONAL_PHOTOS.length} ARCHIVAL WORKS
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#111111] transition-colors"
            >
              ↑ BACK TO TOP
            </button>
            <span>•</span>
            <span>1 / 1</span>
          </div>
        </div>
      </footer>

      {/* Intimate Close-up Viewing Modal */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={() => updateQuery({ photo: null })}
        onNext={selectedIndex < filteredPhotos.length - 1 ? handleNextPhoto : undefined}
        onPrev={selectedIndex > 0 ? handlePrevPhoto : undefined}
      />
    </div>
  );
}

export default function PersonalProjectPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#F9F9F8]" />}>
      <PersonalProjectGallery />
    </Suspense>
  );
}
