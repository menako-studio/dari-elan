"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface PhotoItem {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  images?: string[];
  aspectRatio: string;
  specs: {
    camera: string;
    lens: string;
    film: string;
    aperture: string;
  };
  description: string;
}

interface PhotoModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function PhotoModal({ photo, onClose, onNext, onPrev }: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    if (photo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  // Determine list of images for this article/project
  const displayImages = photo.images && photo.images.length > 0 ? photo.images : [photo.imageUrl];

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#FFFDF4] text-[#111111] selection:bg-[#D36F83] selection:text-white"
          onClick={onClose}
        >
          {/* Sticky Modal Navigation Bar */}
          <header 
            className="sticky top-0 z-20 w-full px-6 md:px-12 py-4 bg-[#FFFDF4]/90 backdrop-blur-md border-b-[0.5px] border-neutral-300 flex justify-between items-center font-suisse text-xs uppercase tracking-[0.2em]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 text-neutral-500">
              <span className="text-[#111111] font-medium">({photo.number})</span>
              <span>/</span>
              <span>{photo.category}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-neutral-400">{photo.location} ({photo.year})</span>
            </div>
            <div className="flex items-center space-x-2">
              {onPrev && (
                <button
                  onClick={onPrev}
                  title="Previous Photo (←)"
                  className="text-[#111111] hover:text-neutral-500 transition-colors uppercase tracking-[0.15em] px-2.5 py-1 border-[0.5px] border-neutral-400 bg-white/50 text-[11px]"
                >
                  ← Prev
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  title="Next Photo (→)"
                  className="text-[#111111] hover:text-neutral-500 transition-colors uppercase tracking-[0.15em] px-2.5 py-1 border-[0.5px] border-neutral-400 bg-white/50 text-[11px]"
                >
                  Next →
                </button>
              )}
              <button
                onClick={onClose}
                title="Close Modal (Esc)"
                className="text-[#111111] hover:text-neutral-500 transition-colors uppercase tracking-[0.15em] px-3 py-1 border-[0.5px] border-neutral-400 bg-white/50 text-[11px] ms-2"
              >
                ✕ Close
              </button>
            </div>
          </header>

          {/* Modal Inner Content Container */}
          <div 
            className="w-full min-h-screen py-10 md:py-16 px-4 md:px-8 max-w-[1700px] mx-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kinfolk Editorial Prologue (Text Section First) */}
            <header className="w-full max-w-3xl mx-auto text-center pt-4 pb-12 md:pb-16 border-b-[0.5px] border-neutral-300/60 mb-12 md:mb-16">
              <div className="font-suisse text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-neutral-400 mb-4">
                {photo.location} — {photo.year}
              </div>
              <h2 className="font-suisse text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#111111] mb-8 leading-[1.15]">
                {photo.title}
              </h2>
              
              {/* Prologue Description */}
              <div className="font-times text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto text-center italic font-normal space-y-4">
                {photo.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Technical Specifications Bar (Subtle EXIF Data) */}
              <div className="mt-10 pt-6 border-t-[0.5px] border-neutral-300/40 font-unica text-[10px] md:text-[11px] text-neutral-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <div><span className="text-neutral-300 me-1">CAM:</span> <span className="text-neutral-600 font-medium">{photo.specs.camera}</span></div>
                <span>•</span>
                <div><span className="text-neutral-300 me-1">LENS:</span> <span className="text-neutral-600 font-medium">{photo.specs.lens}</span></div>
                <span>•</span>
                <div><span className="text-neutral-300 me-1">FILM:</span> <span className="text-neutral-600 font-medium">{photo.specs.film}</span></div>
                <span>•</span>
                <div><span className="text-neutral-300 me-1">APERTURE:</span> <span className="text-neutral-600 font-medium">{photo.specs.aperture}</span></div>
              </div>
            </header>

            {/* Main Dish: Exhibition Full-Size Image(s) Showcase */}
            <main className="w-full flex flex-col items-center space-y-12 md:space-y-20 pb-20">
              {displayImages.map((imgUrl, index) => (
                <div 
                  key={index}
                  className="w-full max-w-[1600px] flex flex-col items-center"
                >
                  <div className="w-full aspect-[4/3] md:aspect-[16/10] relative bg-[#F2F2EF] border-[0.5px] border-neutral-300/50 shadow-sm overflow-hidden flex items-center justify-center min-h-[50vh] max-h-[85vh]">
                    <Image
                      src={imgUrl}
                      alt={`${photo.title} — Frame ${index + 1}`}
                      fill
                      sizes="(max-width: 1600px) 100vw, 1600px"
                      className="object-contain p-2 md:p-6"
                    />
                  </div>
                  {displayImages.length > 1 && (
                    <span className="mt-3 font-suisse text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                      FIG. {index + 1} — {photo.title}
                    </span>
                  )}
                </div>
              ))}
            </main>

            {/* Footer Tag */}
            <footer className="w-full max-w-3xl pt-8 border-t-[0.5px] border-neutral-300/60 flex justify-between items-center font-suisse text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-neutral-400">
              <span>ELAN BUDIKUSUMAH PERSONAL ARCHIVE</span>
              <span>EXHIBITION PRINT NO. {photo.number}</span>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
