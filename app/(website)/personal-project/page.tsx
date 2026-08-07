import { client } from "@/sanity/lib/client";
import { getPersonalProjectsQuery } from "@/sanity/lib/queries";
import PersonalProjectClient from "./PersonalProjectClient";
import { Suspense } from "react";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function PersonalProjectPage() {
  const projects = await client.fetch(getPersonalProjectsQuery);
  
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#F9F9F8]" />}>
      <PersonalProjectClient projects={projects} />
    </Suspense>
  );
}
