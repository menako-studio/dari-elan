import { groq } from 'next-sanity'

// Fetch all commercial projects
export const getCommercialProjectsQuery = groq`
  *[_type == "commercialProject"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    gallery,
    description,
    client,
    date
  }
`

// Fetch all personal projects
export const getPersonalProjectsQuery = groq`
  *[_type == "personalProject"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    gallery,
    description,
    date
  }
`

// Fetch all products / shop items
export const getProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    gallery,
    description,
    details,
    price,
    link
  }
`
