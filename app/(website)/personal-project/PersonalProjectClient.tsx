"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PhotoModal, { PhotoItem } from "@/components/PhotoModal";
import { urlForImage } from "@/sanity/lib/image";

interface PersonalProject {
  _id: string;
  title: string;
  slug: string;
  projectType: string;
  mainImage: any;
  gallery: any[];
  description: string;
  date: string;
}

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

const getImageSrc = (img: any) => {
  if (!img) return "";
  if (typeof img === "string") return img;
  const builderUrl = urlForImage(img)?.url();
  return builderUrl || "";
};

export default function PersonalProjectClient({ projects }: { projects: PersonalProject[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategory = searchParams.get("category") || "all";
  const viewMode = (searchParams.get("view") as "grid" | "list") || "grid";
  const gridCols = (searchParams.get("density") as "dense" | "standard" | "large") || "dense";
  const activePhotoId = searchParams.get("photo");

  const [hoveredPhoto, setHoveredPhoto] = useState<PersonalProject | null>(null);

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

  const selectedPhoto = useMemo(() => {
    if (!activePhotoId) return null;
    return projects.find((p) => p._id === activePhotoId) || null;
  }, [activePhotoId, projects]);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return projects;
    // Assuming projectType or a new category field is used, since there's no exact category mapping in the schema yet, we use projectType.
    return projects.filter((photo) => photo.projectType?.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory, projects]);

  const selectedIndex = useMemo(() => {
    if (!selectedPhoto) return -1;
    return filteredPhotos.findIndex((p) => p._id === selectedPhoto._id);
  }, [selectedPhoto, filteredPhotos]);

  const handleNextPhoto = () => {
    if (selectedIndex >= 0 && selectedIndex < filteredPhotos.length - 1) {
      const nextPhoto = filteredPhotos[selectedIndex + 1];
      updateQuery({ photo: nextPhoto._id });
    }
  };

  const handlePrevPhoto = () => {
    if (selectedIndex > 0) {
      const prevPhoto = filteredPhotos[selectedIndex - 1];
      updateQuery({ photo: prevPhoto._id });
    }
  };

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
      <header className="w-full pt-6 pb-4 px-6 md:px-12 bg-[#F9F9F8]">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-between items-center pb-4">
            <h1 className="font-suisse text-xs md:text-sm uppercase tracking-[0.25em] text-[#111111] font-medium">
              PERSONAL EXPLORATIONS (2012–2026)
            </h1>

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

      <main className="w-full px-4 md:px-12 py-8 md:py-12 max-w-[1800px] mx-auto min-h-[70vh]">
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`grid ${gridColsClass} transition-all duration-500`}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
                onClick={() => updateQuery({ photo: photo._id })}
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
                className="group relative cursor-pointer overflow-hidden bg-neutral-200 border-[0.5px] border-neutral-300/40"
              >
                <div className="w-full aspect-[4/3] sm:aspect-square relative overflow-hidden bg-neutral-200">
                  {photo.mainImage && (
                    <Image
                      src={getImageSrc(photo.mainImage)}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 10vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-[#111111]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-3 flex flex-col justify-between text-white pointer-events-none z-10">
                  <div className="flex justify-between items-start font-suisse text-[9px] uppercase tracking-wider text-neutral-300">
                    <span>(0{index + 1})</span>
                    <span>{photo.date}</span>
                  </div>
                  <div>
                    <h3 className="font-suisse text-xs font-normal tracking-wide line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="font-suisse text-[9px] uppercase tracking-widest text-neutral-300 mt-0.5">
                      {photo.projectType}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {viewMode === "list" && (
          <div className="w-full flex flex-col divide-y-[0.5px] divide-neutral-300/60 border-t-[0.5px] border-b-[0.5px] border-neutral-300/60">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo._id}
                onClick={() => updateQuery({ photo: photo._id })}
                onMouseEnter={() => setHoveredPhoto(photo)}
                onMouseLeave={() => setHoveredPhoto(null)}
                className="group py-4 px-2 flex justify-between items-center cursor-pointer hover:bg-neutral-100/80 transition-colors font-suisse text-xs uppercase tracking-[0.15em]"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-neutral-400 font-mono text-[10px]">(0{index + 1})</span>
                  <span className="text-[#111111] group-hover:underline underline-offset-4 font-medium">{photo.title}</span>
                </div>
                <div className="flex items-center space-x-6 text-neutral-500 text-[10px]">
                  <span className="hidden sm:inline">{photo.projectType}</span>
                  <span>{photo.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredPhotos.length === 0 && (
          <div className="py-24 text-center font-suisse text-xs text-neutral-400 uppercase tracking-widest">
            NO WORKS FOUND IN CATEGORY "{activeCategory}"
          </div>
        )}
      </main>

      <AnimatePresence>
        {hoveredPhoto && hoveredPhoto.mainImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-12 right-12 z-40 hidden lg:block pointer-events-none"
          >
            <div className="bg-[#F9F9F8] p-2 border-[0.5px] border-neutral-400 shadow-xl max-w-[220px]">
              <div className="relative w-48 h-64 bg-neutral-200">
                <Image
                  src={getImageSrc(hoveredPhoto.mainImage)}
                  alt={hoveredPhoto.title}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 font-suisse text-[10px] uppercase tracking-wider text-neutral-600 flex justify-between">
                <span className="truncate">{hoveredPhoto.title}</span>
                <span className="text-neutral-400 font-mono">(01)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full border-t-[0.5px] border-neutral-300 py-6 px-6 md:px-12 bg-[#F9F9F8]">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row justify-between items-center font-suisse text-[10px] text-neutral-400 uppercase tracking-[0.2em] gap-4">
          <div>
            SHOWING {filteredPhotos.length} OF {projects.length} ARCHIVAL WORKS
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

      {/* Note: PhotoModal expects a specific shape that might need adaptation. 
          For now we pass selectedPhoto mapped roughly. */}
      {selectedPhoto && (
        <PhotoModal
          photo={{
            id: selectedPhoto._id,
            number: "01",
            title: selectedPhoto.title,
            category: selectedPhoto.projectType,
            location: "",
            year: selectedPhoto.date,
            imageUrl: getImageSrc(selectedPhoto.mainImage),
            aspectRatio: "aspect-[4/5]",
            specs: {
              camera: "Unknown",
              lens: "Unknown",
              film: "Unknown",
              aperture: "Unknown",
            },
            description: selectedPhoto.description || "",
          }}
          onClose={() => updateQuery({ photo: null })}
          onNext={selectedIndex < filteredPhotos.length - 1 ? handleNextPhoto : undefined}
          onPrev={selectedIndex > 0 ? handlePrevPhoto : undefined}
        />
      )}
    </div>
  );
}
