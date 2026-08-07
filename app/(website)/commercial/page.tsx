import { client } from "@/sanity/lib/client";
import { getCommercialProjectsQuery } from "@/sanity/lib/queries";
import CommercialClient from "./CommercialClient";
import { MOCK_COMMERCIAL_PROJECTS } from "@/lib/mockData";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function CommercialPage() {
  let projects = [];
  try {
    projects = await client.fetch(getCommercialProjectsQuery);
  } catch (err) {
    console.error("Failed to fetch commercial projects from Sanity, using fallback mock data", err);
  }
  
  const displayProjects = projects && projects.length > 0 ? projects : MOCK_COMMERCIAL_PROJECTS;

  return <CommercialClient projects={displayProjects} />;
}

