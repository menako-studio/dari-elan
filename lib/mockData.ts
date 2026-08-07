export interface CommercialProject {
  _id: string;
  title: string;
  slug: string;
  projectType: string;
  mainImage: any;
  gallery: any[];
  description: string;
  client?: string;
  date: string;
}

export interface PersonalProject {
  _id: string;
  title: string;
  slug: string;
  projectType: string;
  mainImage: any;
  gallery: any[];
  description: string;
  date: string;
}

export interface ProductItem {
  _id: string;
  name: string;
  title?: string;
  slug: string;
  category: string;
  price: number;
  mainImage?: any;
  images: any[];
  description: string;
  features: string[];
  size?: string;
  stripePriceId?: string;
}

export const MOCK_COMMERCIAL_PROJECTS: CommercialProject[] = [
  {
    _id: "mock-comm-1",
    title: "BETWEEN THE TAKES",
    slug: "between-the-takes",
    projectType: "EDITORIAL PORTRAITURE",
    mainImage: "/images/Between-the-Takes.jpg",
    gallery: ["/images/Between-the-Takes.jpg"],
    description: "An intimate glimpse into quiet moments behind the scenes during high-fashion editorial productions in Jakarta and Bali.",
    client: "Kinfolk Magazine",
    date: "2025",
  },
  {
    _id: "mock-comm-2",
    title: "LENA BEIGEL ARCHITECTURE",
    slug: "lena-beigel-architecture",
    projectType: "ARCHITECTURAL STILLS",
    mainImage: "/images/Lena-Beigel.jpg",
    gallery: ["/images/Lena-Beigel.jpg", "/images/Lena-Beigel-2.jpg"],
    description: "Documenting organic tropical minimalist architectural forms designed by Lena Beigel in Uluwatu.",
    client: "Studio Beigel",
    date: "2024",
  },
  {
    _id: "mock-comm-3",
    title: "SILAS HOUSE & LIVING",
    slug: "silas-house",
    projectType: "BRAND STORYTELLING",
    mainImage: "/images/Silas-House.jpg",
    gallery: ["/images/Silas-House.jpg"],
    description: "Visual identity campaign capturing earthy textures, natural shadow plays, and slow living philosophy.",
    client: "Silas Living",
    date: "2024",
  },
  {
    _id: "mock-comm-4",
    title: "TISA GRANICIA TALENT",
    slug: "tisa-granicia",
    projectType: "COMMERCIAL PORTRAITURE",
    mainImage: "/images/Tisa-Granicia.jpg",
    gallery: ["/images/Tisa-Granicia.jpg"],
    description: "Character-driven studio portraits exploring subtle light shifts and organic facial expressions.",
    client: "Granicia Studio",
    date: "2025",
  },
];

export const MOCK_PERSONAL_PROJECTS: PersonalProject[] = [
  {
    _id: "mock-pers-1",
    title: "JUST PLAY",
    slug: "just-play",
    projectType: "PERSONAL",
    mainImage: "/images/Just-Play.jpg",
    gallery: ["/images/Just-Play.jpg"],
    description: "A spontaneous visual inquiry into childhood playfulness and uncluttered curiosity.",
    date: "2025",
  },
  {
    _id: "mock-pers-2",
    title: "IN ORDINARY RHYTHM",
    slug: "i-o-r",
    projectType: "DOCUMENTARY",
    mainImage: "/images/I-O-R.jpg",
    gallery: ["/images/I-O-R.jpg"],
    description: "Observational street frames observing the steady cadence of daily life across rural Bali.",
    date: "2024",
  },
  {
    _id: "mock-pers-3",
    title: "SLOWLY DRIFTING",
    slug: "slowly",
    projectType: "STILL LIFE",
    mainImage: "/images/slowly.jpg",
    gallery: ["/images/slowly.jpg"],
    description: "Meditative medium-format studies on shadow movement, coastlines, and quiet atmosphere.",
    date: "2023",
  },
  {
    _id: "mock-pers-4",
    title: "ELAN SELF PORTRAITURE",
    slug: "elan-self",
    projectType: "PORTRAIT",
    mainImage: "/images/elan.jpeg",
    gallery: ["/images/elan.jpeg"],
    description: "Self-reflective monochrome studies captured with analog gear.",
    date: "2024",
  },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    _id: "mock-prod-1",
    name: "BETWEEN THE TAKES — ARCHIVAL PRINT",
    title: "BETWEEN THE TAKES — ARCHIVAL PRINT",
    slug: "between-the-takes-print",
    category: "ARCHIVAL PRINT",
    price: 250,
    mainImage: "/images/Between-the-Takes.jpg",
    images: ["/images/Between-the-Takes.jpg"],
    description: "Limited edition of 25 fine art giclée print on Hahnemühle Photo Rag 308gsm paper.",
    features: ["Hand-signed & numbered", "Certificate of authenticity", "Museum-grade archival ink"],
    size: "A2 (420 x 594 mm)",
  },
  {
    _id: "mock-prod-2",
    name: "LENA BEIGEL STRUCTURES — PRINT",
    title: "LENA BEIGEL STRUCTURES — PRINT",
    slug: "lena-beigel-print",
    category: "ARCHIVAL PRINT",
    price: 300,
    mainImage: "/images/Lena-Beigel.jpg",
    images: ["/images/Lena-Beigel.jpg"],
    description: "Architectural study print capturing light geometry in natural tropical timber.",
    features: ["Limited edition of 15", "Hahnemühle Bamboo paper", "Framing ready"],
    size: "A1 (594 x 841 mm)",
  },
  {
    _id: "mock-prod-3",
    name: "SLOWLY — COLOR PROFILE PRESET PACK",
    title: "SLOWLY — COLOR PROFILE PRESET PACK",
    slug: "slowly-preset-pack",
    category: "LIGHTROOM PRESET",
    price: 45,
    mainImage: "/images/slowly.jpg",
    images: ["/images/slowly.jpg"],
    description: "Custom Lightroom & Capture One color profiles emulating warm film tones and gentle shadow roll-offs.",
    features: ["10 Custom Film Profiles", "Desktop & Mobile compatible", "Installation guide included"],
    size: "Instant Digital Download",
  },
];
