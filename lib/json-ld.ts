export interface VisualArtworkSchemaProps {
  title: string;
  description: string;
  imageUrl: string;
  dateCreated?: string;
  creatorName?: string;
  category?: string;
}

export function generateArtworkJsonLd({
  title,
  description,
  imageUrl,
  dateCreated = "2026",
  creatorName = "Elan Budikusumah",
  category = "Photography",
}: VisualArtworkSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: title,
    description: description,
    image: imageUrl,
    dateCreated: dateCreated,
    artMedium: "Fine Art Photography",
    artForm: category,
    creator: {
      "@type": "Person",
      name: creatorName,
      jobTitle: "Photographer",
      sameAs: [
        "https://instagram.com/darielan",
        "https://behance.net/darielan",
      ],
    },
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elan Budikusumah",
    alternateName: "DARI ELAN",
    jobTitle: "Commercial & Fine Art Photographer",
    url: "https://darielan.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bali",
      addressCountry: "Indonesia",
    },
    sameAs: [
      "https://instagram.com/darielan",
      "https://behance.net/darielan",
      "https://linkedin.com/in/elanbudikusumah",
    ],
  };
}
