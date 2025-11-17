import { Header } from "@/sections/Header";
import ProjectTabs from "@/sections/more-projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern web technologies.",
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <ProjectTabs />
    </main>
  );
}
