import { client } from "@/sanity/lib/client";
import { getPersonalProjectsQuery } from "@/sanity/lib/queries";
import PersonalProjectClient from "./PersonalProjectClient";
import { Suspense } from "react";
import { MOCK_PERSONAL_PROJECTS } from "@/lib/mockData";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function PersonalProjectPage() {
  let projects = [];
  try {
    projects = await client.fetch(getPersonalProjectsQuery);
  } catch (err) {
    console.error("Failed to fetch personal projects from Sanity, using fallback mock data", err);
  }

  const displayProjects = projects && projects.length > 0 ? projects : MOCK_PERSONAL_PROJECTS;

  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#F9F9F8]" />}>
      <PersonalProjectClient projects={displayProjects} />
    </Suspense>
  );
}

