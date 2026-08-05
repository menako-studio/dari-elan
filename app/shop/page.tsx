"use client";

import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "print-01",
    title: "Munduk Fog N° 01",
    category: "LIMITED FINE ART PRINT",
    price: "$280 USD",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 25",
  },
  {
    id: "print-02",
    title: "Tabanan Terracotta Study",
    category: "FINE ART PRINT",
    price: "$240 USD",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 50",
  },
  {
    id: "preset-01",
    title: "Bali Chiaroscuro Lightroom Suite",
    category: "DIGITAL PRESETS",
    price: "$85 USD",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    edition: "Instant Download",
  },
  {
    id: "monograph-01",
    title: "Light & Shadow Monograph (Vol I)",
    category: "HARDCOVER BOOK",
    price: "$110 USD",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=85",
    edition: "160 Pages, Linen Bound",
  },
  {
    id: "print-03",
    title: "Uluwatu Sunset Geometry",
    category: "FINE ART PRINT",
    price: "$320 USD",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 15",
  },
  {
    id: "print-04",
    title: "Denpasar Market Silhouette",
    category: "LIMITED FINE ART PRINT",
    price: "$210 USD",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 30",
  },
  {
    id: "print-05",
    title: "Sidemen Rice Valley Dawn",
    category: "FINE ART PRINT",
    price: "$290 USD",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 20",
  },
  {
    id: "preset-02",
    title: "Analog Film Tones Pack",
    category: "DIGITAL PRESETS",
    price: "$65 USD",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    edition: "Instant Download",
  },
];

export default function ShopPage() {
  return (
    <div className="w-full bg-[#F9F9F8]">
      {/* Category Tag Header */}
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          EDITION PRINTS & DIGITAL TOOLS
        </h2>
      </section>

      {/* 1. Shop Main Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-suisse text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#111111] uppercase"
        >
          THE PRINT & PRESET ARCHIVE
        </motion.h1>
        <p className="font-times text-neutral-500 text-sm md:text-base mt-4 max-w-xl mx-auto italic">
          Curated museum-grade archival prints and custom color profiles crafted in Bali.
        </p>
      </section>

      {/* 2. Featured Item (2-Column Block at the top) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-b-[0.5px] border-neutral-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
        >
          {/* Featured Image in Grey Box */}
          <div className="md:col-span-7 bg-[#F0F0F0] p-8 md:p-12 aspect-[4/3] flex items-center justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
              alt="Bali Chiaroscuro Preset Pack Featured"
              className="max-h-full max-w-full object-contain shadow-lg grayscale"
            />
            <span className="absolute top-4 left-4 font-suisse text-[9px] uppercase tracking-[0.25em] bg-[#111111] text-white px-3 py-1">
              FEATURED RELEASE
            </span>
          </div>

          {/* Featured Details */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              LIGHTROOM & CAPTURE ONE SUITE
            </span>
            <h2 className="font-suisse text-3xl md:text-4xl tracking-tight text-[#111111] mb-4">
              Bali Chiaroscuro Preset Pack
            </h2>
            <p className="font-times text-neutral-600 text-base leading-relaxed mb-6">
              Elan’s signature color profiles refined over 8 years in tropical humidity and intense shadow contrasts. Engineered for deep muted greens, organic skin tones, and rich chiaroscuro black levels.
            </p>
            <div className="flex items-center justify-between py-4 border-t-[0.5px] border-b-[0.5px] border-neutral-300 mb-8">
              <span className="font-times text-lg text-[#111111] font-medium">$85 USD</span>
              <span className="font-unica text-xs text-neutral-500">INCLUDES 12 PROFILES + WORKFLOW GUIDE</span>
            </div>
            <button className="w-full font-suisse text-xs uppercase tracking-widest bg-[#111111] text-white py-4 hover:bg-neutral-800 transition-colors">
              ACQUIRE SUITE — $85 USD
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. Product Grid Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="flex justify-between items-end border-b-[0.5px] border-neutral-300 pb-4">
          <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            ALL ARCHIVAL EDITIONS (08)
          </span>
          <span className="font-suisse text-xs text-neutral-400">WORLDWIDE SHIPPING AVAILABLE</span>
        </div>
      </section>

      {/* 4. Product Grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Card Container: bg-[#F0F0F0] p-8 flex items-center justify-center aspect-[4/5] */}
              <div className="bg-[#F0F0F0] p-8 flex items-center justify-center aspect-[4/5] overflow-hidden relative mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Minimal Product Details Below Box */}
              <div className="flex flex-col">
                <span className="font-suisse text-[9px] uppercase tracking-[0.2em] text-neutral-400 mb-1">
                  {product.category}
                </span>
                <h3 className="font-suisse text-sm tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-2 pt-2 border-t-[0.5px] border-neutral-200">
                  <span className="font-times text-xs text-neutral-500">
                    {product.price}
                  </span>
                  <span className="font-unica text-[10px] text-neutral-400 uppercase">
                    {product.edition}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
