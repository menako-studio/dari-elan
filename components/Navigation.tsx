"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import Brandmark from "@/components/Brandmark";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF4]/90 backdrop-blur-md border-b-[0.5px] border-neutral-300/80 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Primary Wordmark strictly adhering to Brand Guideline (min height 25px) */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="flex items-center group py-1"
          aria-label="dari elan homepage"
        >
          <BrandLogo className="h-7 md:h-8 w-auto text-[#111111] group-hover:opacity-75 transition-opacity" />
        </Link>

        {/* Desktop Navigation Links in font-suisse */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            href="/commercial" 
            className="font-suisse text-[11px] uppercase tracking-[0.2em] text-[#111111] hover:text-neutral-500 transition-colors"
          >
            Commercial
          </Link>
          <Link 
            href="/personal-project" 
            className="font-suisse text-[11px] uppercase tracking-[0.2em] text-[#111111] hover:text-neutral-500 transition-colors"
          >
            Personal Projects
          </Link>
          <Link 
            href="/about" 
            className="font-suisse text-[11px] uppercase tracking-[0.2em] text-[#111111] hover:text-neutral-500 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/shop" 
            className="font-suisse text-[11px] uppercase tracking-[0.2em] text-[#111111] hover:text-neutral-500 transition-colors"
          >
            Archive & Shop
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden font-suisse text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border-[0.5px] border-neutral-300 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? "CLOSE [✕]" : "MENU [≡]"}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b-[0.5px] border-neutral-300/80 bg-[#FFFDF4]"
          >
            <div className="px-6 py-6 flex flex-col space-y-5 font-suisse text-xs uppercase tracking-[0.2em]">
              <Link 
                href="/commercial" 
                onClick={closeMenu}
                className="py-2 border-b-[0.5px] border-neutral-200 text-[#111111] hover:text-neutral-500 transition-colors flex justify-between items-center"
              >
                <span>Commercial</span>
                <span className="text-neutral-400">01</span>
              </Link>
              <Link 
                href="/personal-project" 
                onClick={closeMenu}
                className="py-2 border-b-[0.5px] border-neutral-200 text-[#111111] hover:text-neutral-500 transition-colors flex justify-between items-center"
              >
                <span>Personal Projects</span>
                <span className="text-neutral-400">02</span>
              </Link>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className="py-2 border-b-[0.5px] border-neutral-200 text-[#111111] hover:text-neutral-500 transition-colors flex justify-between items-center"
              >
                <span>About</span>
                <span className="text-neutral-400">03</span>
              </Link>
              <Link 
                href="/shop" 
                onClick={closeMenu}
                className="py-2 text-[#111111] hover:text-neutral-500 transition-colors flex justify-between items-center"
              >
                <span>Archive & Shop</span>
                <span className="text-neutral-400">04</span>
              </Link>
              <div className="pt-4 border-t-[0.5px] border-neutral-200/80 flex items-center justify-between">
                <span className="text-[10px] text-neutral-400 normal-case font-times italic">
                  “to be the link between humans and memories.”
                </span>
                <Brandmark className="h-6 w-auto text-[#D36F83] opacity-80" />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
