import { Header } from "@/sections/Header";
import { AboutVCard } from "@/sections/AboutVCard";

export const metadata = {
  title: "About",
  description:
    "Learn more about my experience, skills, and journey as a frontend developer specializing in React, Next.js, and TypeScript.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutVCard />
    </main>
  );
}
