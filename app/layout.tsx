import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DARIELAN — Elan Budikusumah Photography",
  description: "Photography as therapy. Translating emotions into light and shadow in Bali, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F9F9F8] text-[#111111] antialiased">
      <body suppressHydrationWarning={true} className="min-h-screen flex flex-col justify-between bg-[#F9F9F8] text-[#111111] font-times selection:bg-neutral-200">
        {/* Responsive Navigation Header */}
        <Navigation />

        {/* Main Content Page Body */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer in font-unica ONLY */}
        <footer className="border-t-[0.5px] border-neutral-300 bg-[#F9F9F8] py-16 md:py-24 font-unica text-[11px] tracking-wider text-neutral-600 uppercase">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b-[0.5px] border-neutral-300">
              <div>
                <p className="text-[#111111] font-medium mb-3">Location</p>
                <p className="leading-relaxed">Ubud & Canggu, Bali</p>
                <p className="leading-relaxed">Indonesia 80361</p>
                <p className="mt-2 text-neutral-400">8°24'S 115°11'E</p>
              </div>

              <div>
                <p className="text-[#111111] font-medium mb-3">Navigation</p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/commercial" className="hover:text-[#111111] transition-colors">Commercial (01)</Link>
                  </li>
                  <li>
                    <Link href="/personal-project" className="hover:text-[#111111] transition-colors">Personal Projects (02)</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[#111111] transition-colors">Manifesto (03)</Link>
                  </li>
                  <li>
                    <Link href="/shop" className="hover:text-[#111111] transition-colors">Print Archive (04)</Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[#111111] font-medium mb-3">Connect</p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.instagram.com/elanbudikusumah" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">Instagram ↗</a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/elanobrokoli" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">Behance ↗</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/elan-budikusumah-764072140/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">LinkedIn ↗</a>
                  </li>
                  <li>
                    <a href="mailto:elan@darielan.com" className="hover:text-[#111111] transition-colors">elan@darielan.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[#111111] font-medium mb-3">Philosophy</p>
                <p className="normal-case font-times text-xs text-neutral-500 leading-relaxed italic">
                  "Photography is not just about framing; it is about learning about life, therapy, and translating emotions into light and shadow."
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-neutral-400 gap-4">
              <p>© {new Date().getFullYear()} DARIELAN — ELAN BUDIKUSUMAH. ALL RIGHTS RESERVED.</p>
              
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
