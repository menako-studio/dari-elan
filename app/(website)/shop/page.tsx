"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/lib/useCart";

const PRODUCTS = [
  {
    id: "print-01",
    title: "Munduk Fog N° 01",
    category: "LIMITED FINE ART PRINT",
    price: 280,
    priceFormatted: "$280 USD",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 25",
    type: "print" as const,
  },
  {
    id: "print-02",
    title: "Tabanan Terracotta Study",
    category: "FINE ART PRINT",
    price: 240,
    priceFormatted: "$240 USD",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 50",
    type: "print" as const,
  },
  {
    id: "preset-01",
    title: "Bali Chiaroscuro Lightroom Suite",
    category: "DIGITAL PRESETS",
    price: 85,
    priceFormatted: "$85 USD",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    edition: "Instant Download",
    type: "preset" as const,
  },
  {
    id: "monograph-01",
    title: "Light & Shadow Monograph (Vol I)",
    category: "HARDCOVER BOOK",
    price: 110,
    priceFormatted: "$110 USD",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=85",
    edition: "160 Pages, Linen Bound",
    type: "print" as const,
  },
  {
    id: "print-03",
    title: "Uluwatu Sunset Geometry",
    category: "FINE ART PRINT",
    price: 320,
    priceFormatted: "$320 USD",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 15",
    type: "print" as const,
  },
  {
    id: "print-04",
    title: "Denpasar Market Silhouette",
    category: "LIMITED FINE ART PRINT",
    price: 210,
    priceFormatted: "$210 USD",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 30",
    type: "print" as const,
  },
  {
    id: "print-05",
    title: "Sidemen Rice Valley Dawn",
    category: "FINE ART PRINT",
    price: 290,
    priceFormatted: "$290 USD",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
    edition: "Edition of 20",
    type: "print" as const,
  },
  {
    id: "preset-02",
    title: "Analog Film Tones Pack",
    category: "DIGITAL PRESETS",
    price: 65,
    priceFormatted: "$65 USD",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    edition: "Instant Download",
    type: "preset" as const,
  },
];

export default function ShopPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  return (
    <div className="w-full bg-[#F9F9F8] relative min-h-screen text-[#111111]">
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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-suisse text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#111111] uppercase font-light"
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
          <div className="md:col-span-7 bg-[#F0F0F0] aspect-[4/3] relative flex items-center justify-center overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
              alt="Bali Chiaroscuro Preset Pack Featured"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-contain grayscale p-8"
            />
            <span className="absolute top-4 left-4 font-suisse text-[9px] uppercase tracking-[0.25em] bg-[#111111] text-white px-3 py-1 z-10">
              FEATURED RELEASE
            </span>
          </div>

          {/* Featured Details */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              LIGHTROOM & CAPTURE ONE SUITE
            </span>
            <h2 className="font-suisse text-3xl md:text-4xl tracking-tight text-[#111111] mb-4 font-light">
              Bali Chiaroscuro Preset Pack
            </h2>
            <p className="font-times text-neutral-600 text-base leading-relaxed mb-6">
              Elan’s signature color profiles refined over 8 years in tropical humidity and intense shadow contrasts. Engineered for deep muted greens, organic skin tones, and rich chiaroscuro black levels.
            </p>
            <div className="flex items-center justify-between py-4 border-t-[0.5px] border-b-[0.5px] border-neutral-300 mb-8">
              <span className="font-times text-lg text-[#111111] font-medium">$85 USD</span>
              <span className="font-unica text-xs text-neutral-500">INCLUDES 12 PROFILES + WORKFLOW GUIDE</span>
            </div>
            <button
              onClick={() => {
                addToCart({
                  id: "preset-01",
                  title: "Bali Chiaroscuro Lightroom Suite",
                  edition: "Instant Download",
                  price: 85,
                  imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
                  type: "preset",
                });
                setIsCartOpen(true);
              }}
              className="w-full font-suisse text-xs uppercase tracking-widest bg-[#111111] text-white py-4 hover:bg-neutral-800 transition-colors"
            >
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

      {/* 4. Product Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              {/* Card Container: bg-[#F0F0F0] aspect-[4/5] */}
              <div className="bg-[#F0F0F0] relative aspect-[4/5] overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Minimal Product Details Below Box */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <span className="font-suisse text-[9px] uppercase tracking-[0.2em] text-neutral-400 mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="font-suisse text-sm tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {product.title}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t-[0.5px] border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-times text-sm text-[#111111] font-medium">
                      {product.priceFormatted}
                    </span>
                    <span className="font-unica text-[10px] text-neutral-400 uppercase">
                      {product.edition}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        title: product.title,
                        edition: product.edition,
                        price: product.price,
                        imageUrl: product.image,
                        type: product.type,
                      });
                      setIsCartOpen(true);
                    }}
                    className="w-full font-suisse text-[10px] uppercase tracking-[0.2em] border-[0.5px] border-neutral-400 py-2.5 hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Cart Trigger Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-[#111111] text-white px-5 py-3 shadow-2xl flex items-center space-x-3 font-suisse text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
      >
        <span>CART</span>
        <span className="bg-white text-[#111111] font-bold text-[10px] px-2 py-0.5 font-mono">
          {totalItems}
        </span>
      </button>

      {/* Slide-over Shopping Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-[#F9F9F8] border-l-[0.5px] border-neutral-300 flex flex-col justify-between p-6 md:p-8"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center pb-6 border-b-[0.5px] border-neutral-300 font-suisse text-xs uppercase tracking-[0.2em]">
                  <span>PRINT ARCHIVE CART ({totalItems})</span>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="hover:text-neutral-500 text-sm"
                  >
                    ✕ CLOSE
                  </button>
                </div>

                {/* Items List */}
                <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="py-12 text-center text-neutral-400 font-times italic">
                      Your print archive cart is currently empty.
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start border-b-[0.5px] border-neutral-200 pb-4"
                      >
                        <div className="flex space-x-3">
                          <div className="w-16 h-16 relative bg-neutral-200 flex-shrink-0">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-suisse text-xs font-medium text-[#111111]">
                              {item.title}
                            </h4>
                            <p className="font-unica text-[10px] text-neutral-400 uppercase mt-0.5">
                              {item.edition}
                            </p>
                            <div className="flex items-center space-x-2 mt-2 font-mono text-xs">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 border border-neutral-300 hover:bg-neutral-200"
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 border border-neutral-300 hover:bg-neutral-200"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="font-times text-sm font-medium">
                            ${item.price * item.quantity} USD
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-3 font-suisse text-[9px] uppercase tracking-widest text-neutral-400 hover:text-red-600 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && (
                <div className="pt-6 border-t-[0.5px] border-neutral-300 font-suisse">
                  <div className="flex justify-between items-center text-sm uppercase tracking-wider mb-2">
                    <span>Subtotal</span>
                    <span className="font-times text-base font-bold">${totalPrice} USD</span>
                  </div>
                  <p className="font-unica text-[10px] text-neutral-400 mb-6 uppercase">
                    Taxes & global insured shipping calculated at checkout.
                  </p>
                  <button
                    onClick={() => {
                      alert(`Proceeding to checkout with total: $${totalPrice} USD`);
                    }}
                    className="w-full bg-[#111111] text-white py-4 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors mb-2"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center text-neutral-400 hover:text-neutral-600 text-[10px] uppercase tracking-widest py-1"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
