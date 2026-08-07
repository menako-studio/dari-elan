import { client } from "@/sanity/lib/client";
import { getCommercialProjectsQuery } from "@/sanity/lib/queries";
import CommercialClient from "./CommercialClient";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function CommercialPage() {
  const projects = await client.fetch(getCommercialProjectsQuery);
  
  return <CommercialClient projects={projects} />;
}
