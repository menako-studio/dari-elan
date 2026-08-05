"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PhotoItem {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
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
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (photo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#F9F9F8]/95 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl bg-[#F9F9F8] border-[0.5px] border-neutral-300 p-6 md:p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with index number and close button */}
            <div className="flex justify-between items-center pb-4 mb-6 border-b-[0.5px] border-neutral-300 font-suisse text-xs uppercase tracking-[0.2em]">
              <div className="flex items-center space-x-4 text-neutral-500">
                <span>({photo.number})</span>
                <span>/</span>
                <span className="text-[#111111]">{photo.category}</span>
              </div>
              <button
                onClick={onClose}
                className="text-[#111111] hover:text-neutral-500 transition-colors uppercase tracking-[0.2em] px-2 py-1 border-[0.5px] border-neutral-300"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Photo Display */}
              <div className="md:col-span-7 w-full bg-neutral-100 overflow-hidden border-[0.5px] border-neutral-200">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-auto object-contain max-h-[65vh]"
                />
              </div>

              {/* Editorial Details Column */}
              <div className="md:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="font-suisse text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-2">
                    {photo.location} — {photo.year}
                  </span>
                  <h3 className="font-suisse text-2xl md:text-3xl tracking-tight text-[#111111] mb-4">
                    {photo.title}
                  </h3>
                  <p className="font-times text-neutral-600 text-sm leading-relaxed mb-6">
                    {photo.description}
                  </p>
                </div>

                {/* Technical Camera Specifications */}
                <div className="pt-6 border-t-[0.5px] border-neutral-300 font-unica text-[11px] text-neutral-500 space-y-2 uppercase tracking-wider">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">CAMERA BODY:</span>
                    <span className="text-[#111111]">{photo.specs.camera}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">OPTICAL LENS:</span>
                    <span className="text-[#111111]">{photo.specs.lens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">EMULSION / FILM:</span>
                    <span className="text-[#111111]">{photo.specs.film}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">APERTURE:</span>
                    <span className="text-[#111111]">{photo.specs.aperture}</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-4 flex justify-between items-center text-xs font-suisse tracking-widest text-neutral-400">
                  <span>DARIELAN PERSONAL ARCHIVE</span>
                  <span>BALI, ID</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
