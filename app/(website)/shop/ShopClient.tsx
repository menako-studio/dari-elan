"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/lib/useCart";
import { urlForImage } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  images: any[];
  description: string;
  features: string[];
  size?: string;
  stripePriceId?: string;
}

export default function ShopClient({ products }: { products: Product[] }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  
  const featuredProduct = products.length > 0 ? products[0] : null;

  return (
    <div className="w-full bg-[#F9F9F8] relative min-h-screen text-[#111111]">
      <section className="w-full border-b-[0.5px] border-neutral-300 py-6 text-center">
        <h2 className="font-suisse text-[10px] uppercase tracking-[0.3em] text-[#111111]">
          EDITION PRINTS & DIGITAL TOOLS
        </h2>
      </section>

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

      {featuredProduct && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 border-b-[0.5px] border-neutral-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
          >
            <div className="md:col-span-7 bg-[#F0F0F0] aspect-[4/3] relative flex items-center justify-center overflow-hidden">
              {featuredProduct.images && featuredProduct.images.length > 0 && (
                <Image
                  src={urlForImage(featuredProduct.images[0]).url()}
                  alt={featuredProduct.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-contain p-8"
                />
              )}
              <span className="absolute top-4 left-4 font-suisse text-[9px] uppercase tracking-[0.25em] bg-[#111111] text-white px-3 py-1 z-10">
                FEATURED RELEASE
              </span>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                {featuredProduct.category}
              </span>
              <h2 className="font-suisse text-3xl md:text-4xl tracking-tight text-[#111111] mb-4 font-light">
                {featuredProduct.name}
              </h2>
              <p className="font-times text-neutral-600 text-base leading-relaxed mb-6">
                {featuredProduct.description}
              </p>
              <div className="flex items-center justify-between py-4 border-t-[0.5px] border-b-[0.5px] border-neutral-300 mb-8">
                <span className="font-times text-lg text-[#111111] font-medium">${featuredProduct.price} USD</span>
                <span className="font-unica text-xs text-neutral-500">{featuredProduct.size || "Instant Download"}</span>
              </div>
              <button
                onClick={() => {
                  addToCart({
                    id: featuredProduct._id,
                    title: featuredProduct.name,
                    edition: featuredProduct.size || "Instant Download",
                    price: featuredProduct.price,
                    imageUrl: featuredProduct.images && featuredProduct.images.length > 0 ? urlForImage(featuredProduct.images[0]).url() : "",
                    type: featuredProduct.category.toLowerCase().includes("preset") ? "preset" : "print",
                  });
                  setIsCartOpen(true);
                }}
                className="w-full font-suisse text-xs uppercase tracking-widest bg-[#111111] text-white py-4 hover:bg-neutral-800 transition-colors"
              >
                ACQUIRE SUITE — ${featuredProduct.price} USD
              </button>
            </div>
          </motion.div>
        </section>
      )}

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="flex justify-between items-end border-b-[0.5px] border-neutral-300 pb-4">
          <span className="font-suisse text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            ALL ARCHIVAL EDITIONS ({products.length})
          </span>
          <span className="font-suisse text-xs text-neutral-400">WORLDWIDE SHIPPING AVAILABLE</span>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="bg-[#F0F0F0] relative aspect-[4/5] overflow-hidden mb-4">
                {product.images && product.images.length > 0 && (
                  <Image
                    src={urlForImage(product.images[0]).url()}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <span className="font-suisse text-[9px] uppercase tracking-[0.2em] text-neutral-400 mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="font-suisse text-sm tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t-[0.5px] border-neutral-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-times text-sm text-[#111111] font-medium">
                      ${product.price} USD
                    </span>
                    <span className="font-unica text-[10px] text-neutral-400 uppercase">
                      {product.size || "Instant Download"}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart({
                        id: product._id,
                        title: product.name,
                        edition: product.size || "Instant Download",
                        price: product.price,
                        imageUrl: product.images && product.images.length > 0 ? urlForImage(product.images[0]).url() : "",
                        type: product.category.toLowerCase().includes("preset") ? "preset" : "print",
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

      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-[#111111] text-white px-5 py-3 shadow-2xl flex items-center space-x-3 font-suisse text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
      >
        <span>CART</span>
        <span className="bg-white text-[#111111] font-bold text-[10px] px-2 py-0.5 font-mono">
          {totalItems}
        </span>
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-[#F9F9F8] border-l-[0.5px] border-neutral-300 flex flex-col justify-between p-6 md:p-8"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b-[0.5px] border-neutral-300 font-suisse text-xs uppercase tracking-[0.2em]">
                  <span>PRINT ARCHIVE CART ({totalItems})</span>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="hover:text-neutral-500 text-sm"
                  >
                    ✕ CLOSE
                  </button>
                </div>

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
                            {item.imageUrl && (
                              <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            )}
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
