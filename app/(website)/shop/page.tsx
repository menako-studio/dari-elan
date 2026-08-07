import { client } from "@/sanity/lib/client";
import { getProductsQuery } from "@/sanity/lib/queries";
import ShopClient from "./ShopClient";

export const revalidate = 60; // revalidate every 60 seconds

export default async function ShopPage() {
  const products = await client.fetch(getProductsQuery);
  
  return <ShopClient products={products} />;
}
