import type { Metadata } from "next";
import Link from "next/link";
import { Inter, EB_Garamond } from "next/font/google";
import Navigation from "@/components/Navigation";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";
import BrandLogo from "@/components/BrandLogo";
import Brandmark from "@/components/Brandmark";
import { generatePersonJsonLd } from "@/lib/json-ld";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DARIELAN — Elan Budikusumah Photography",
  description: "to be the link between humans and memories. Photography as therapy in Bali, Indonesia.",
  metadataBase: new URL("https://darielan.com"),
  icons: {
    icon: "/images/darielan-brandmark-pink.svg",
    apple: "/images/darielan-brandmark-pink.svg",
  },
  openGraph: {
    title: "DARIELAN — Elan Budikusumah Photography",
    description: "to be the link between humans and memories. Translating emotions into light and shadow in Bali, Indonesia.",
    url: "https://darielan.com",
    siteName: "DARIELAN",
    images: [
      {
        url: "/api/og?title=SELECTED%20WORKS%20(2012-2026)&category=FINE%20ART%20%26%20COMMERCIAL",
        width: 1200,
        height: 630,
        alt: "DARIELAN — Elan Budikusumah Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARIELAN — Elan Budikusumah Photography",
    description: "to be the link between humans and memories. Translating emotions into light and shadow in Bali, Indonesia.",
    images: ["/api/og?title=SELECTED%20WORKS%20(2012-2026)&category=FINE%20ART%20%26%20COMMERCIAL"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable} bg-[#FFFDF4] text-[#111111] antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="min-h-screen flex flex-col justify-between bg-[#FFFDF4] text-[#111111] font-times selection:bg-[#D36F83] selection:text-white"
      >
        {/* Responsive Navigation Header */}
        <Navigation />

        {/* Main Content Page Body */}
        <main className="flex-grow">{children}</main>

        {/* Global Ambient iPod Player */}
        <AmbientAudioPlayer />

        {/* Global Footer strictly following Brand Typography & Structure */}
        <footer className="border-t-[0.5px] border-neutral-300/80 bg-[#FFFDF4] py-16 md:py-24 font-unica text-[11px] tracking-wider text-neutral-600 uppercase">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b-[0.5px] border-neutral-300/80">
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
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#111111] font-medium">Philosophy</p>
                  <Brandmark className="h-5 w-auto text-[#D36F83] opacity-85" />
                </div>
                <p className="normal-case font-times text-xs text-neutral-600 leading-relaxed italic">
                  “to be the link between humans and memories.”
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-neutral-400 gap-4">
              <div className="flex items-center space-x-3">
                <BrandLogo className="h-5 w-auto text-neutral-500 hover:text-[#111111] transition-colors" />
                <span className="text-neutral-300">/</span>
                <p>© {new Date().getFullYear()} DARIELAN — ELAN BUDIKUSUMAH. ALL RIGHTS RESERVED.</p>
              </div>
              <div className="flex items-center space-x-2 text-[10px] tracking-widest text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#D36F83]/60 inline-block"></span>
                <span>NOSTALGIA PINK & WARM IVORY</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
