import { client } from "@/sanity/lib/client";
import { getProductsQuery } from "@/sanity/lib/queries";
import ShopClient from "./ShopClient";
import { MOCK_PRODUCTS } from "@/lib/mockData";

export const revalidate = 60; // revalidate every 60 seconds

export default async function ShopPage() {
  let products = [];
  try {
    products = await client.fetch(getProductsQuery);
  } catch (err) {
    console.error("Failed to fetch products from Sanity, using fallback mock data", err);
  }
  
  const displayProducts = products && products.length > 0 ? products : MOCK_PRODUCTS;

  return <ShopClient products={displayProducts} />;
}

