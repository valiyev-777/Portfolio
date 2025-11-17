"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import StarIcon from "@/assets/icons/star.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import myworkHtmlcss from "@/assets/images/myworkHtml.jpg";
import Alabanda from "@/assets/images/albana.png";
import LibraryForMedicineStudents from "@/assets/images/medic.png";
import AppleSaaS from "@/assets/images/apple.png";
import DenteloMaster from "@/assets/images/dentelo.png";
import volti from "@/assets/images/volti.png";
import animations3d from "@/assets/images/3d.png";
import WritingEssays from "@/assets/images/writing.png";
import Texnos from "@/assets/images/texnos.png";

const portfolioProjects = [
  {
    id: 1,
    company: "From telegram",
    year: "2025",
    title: "Writing Essays",
    results: [
      "Boosted sales by 20%",
      "Students can write faster and better",
      "Increased brand awareness by 15%",
    ],
    description:
      "Modern Writing Essays platform  and advanced analytics dashboard",
    tech: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Clerk",
      "supabase",
      "motion",
      "AI",
    ],
    tags: ["React", "AI"],
    link: "https://writingesseys.netlify.app/",
    githubLink: "https://github.com/valiyev-777/Writing",
    image: WritingEssays,
    featured: true,
  },
  {
    id: 9,
    company: "Texnos",
    year: "2025",
    title: "Full E-commerce Website",
    results: ["2k users used the website", "Improved site speed by 50%"],
    description: "Full E-commerce Website for Texnos",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn/UI",
      "Clerk",
      "motion",
      "sanity",
      "zustand",
      "AI",
    ],
    tags: ["Next.js", "AI", "E-commerce"],
    link: "https://texnos.netlify.app",
    githubLink: "https://github.com/valiyev-777/TexnoS",
    image: Texnos,
    featured: true,
  },

  {
    id: 2,
    company: "Personal Project",
    year: "2024",
    title: "Learning Animations and 3D",
    description: "Learning Animations and 3D Models with HTML CSS JS",
    tech: ["HTML", "CSS", "JS"],
    tags: ["HTML CSS JS"],
    results: ["Animations and 3D Models", "Responsive design"],
    link: "https://3danimationand.netlify.app/",
    githubLink: "https://github.com/valiyev-777/3D-SAAS",
    image: animations3d,
    featured: false,
  },

  {
    id: 3,
    company: "Personal Project",
    year: "2025",
    title: "Library For Medicine students",
    description: "Library For Medicine students to find books and articles",
    tech: ["HTML", "CSS", "JS", "Cloudflare R2"],
    tags: ["HTML CSS JS", "AI"],
    results: ["Responsive design", "Performance optimization"],
    link: "https://formedic.netlify.app/",
    githubLink: "https://github.com/valiyev-777/Valiyev-books",
    image: LibraryForMedicineStudents,
    featured: true,
  },

  {
    id: 4,
    company: "Upwork",
    year: "2025",
    title: "Upwork client project",
    description: "Fully Responsive Landing Page for Upwork client project",
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML CSS JS", "E-commerce"],
    results: ["Mobile-responsive design", "SEO optimization"],
    link: "https://voltielectiricbike.netlify.app/",
    githubLink: "https://github.com/valiyev-777/volti",
    image: volti,
    featured: false,
  },
  {
    id: 5,
    company: "Dentelo Master Landing Page",
    year: "2024",
    title: "Dentelo Master Landing Page",
    description: "Fully Responsive Landing Page for Dentelo Master",
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML CSS JS"],
    results: ["Responsive design", "Performance optimization"],
    link: "https://dentelomaster.netlify.app",
    githubLink: "https://github.com/valiyev-777/dentelo-master",
    image: DenteloMaster,
    featured: false,
  },
  {
    id: 6,
    company: "Personal Project",
    year: "2024",
    title: "Apple SaaS Landing Page",
    description: "Fully Responsive Landing Page for Apple SaaS",
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML CSS JS", "E-commerce"],
    results: ["Responsive design", "Performance optimization"],
    link: "https://myhtmlsaasa.netlify.app",
    githubLink: "https://github.com/valiyev-777/AppleSAAS",
    image: AppleSaaS,
    featured: false,
  },
  {
    id: 7,
    company: "Personal Project",
    year: "2024",
    title: "AVENTADOR",
    description: "Fully Responsive Landing Page",
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML CSS JS"],
    results: ["User experience improvement", "Perfomance improvement"],
    link: "https://prismatic-crostata-a5c975.netlify.app",
    githubLink: "https://github.com/valiyev-777/html-css-js-for-P.1",
    image: myworkHtmlcss,
    featured: false,
  },
  {
    id: 8,
    company: "Personal Project",
    year: "2024",
    title: "ALBANDA",
    description: "Fully Responsive Landing Page for SaaS",
    tech: ["React", "Tailwind CSS", "Vite"],
    tags: ["React"],
    results: ["Responsive design", "Performance optimization"],
    link: "saas-for-alabanda.netlify.app",
    githubLink: "https://github.com/valiyev-777/ALAbanda-SAAS",
    image: Alabanda,
    featured: false,
  },
];

const allTags = ["All", "Next.js", "React", "HTML CSS JS", "AI", "E-commerce"];

export default function ProjectTabs() {
  const [activeTag, setActiveTag] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeTag === "All"
      ? portfolioProjects
      : portfolioProjects.filter((proj) =>
          (proj.tags ?? []).some(
            (tag) => tag.toLowerCase() === activeTag.toLowerCase()
          )
        );

  return (
    <div className="relative min-h-screen pt-20 pb-10">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <Image
          src={Grain}
          alt="Grain texture"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div> */}

      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Explore a curated collection of my work, showcasing modern web
            applications built with cutting-edge technologies. Each project
            represents my commitment to creating exceptional user experiences
            and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-label={`Filter projects by ${tag}`}
              aria-pressed={activeTag === tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, transition: { duration: 0 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTag === tag
                  ? "bg-linear-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
              } focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative h-full"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1 px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full text-sm font-semibold">
                      <StarIcon className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 group-hover:scale-[1.02] flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} project`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <span>View Project</span>
                        <ArrowUpRightIcon
                          className="w-4 h-4"
                          aria-hidden="true"
                        />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Header */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium mb-1.5">
                        {project.company} • {project.year}
                      </p>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-1 mb-3">
                      {project.results.slice(0, 2).map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 text-xs text-gray-300"
                        >
                          <CheckIcon className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons (pastga yopishadi) */}
                    <div className="mt-auto flex flex-col sm:flex-row gap-1.5">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live site for ${project.title}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-linear-to-r from-emerald-500 to-blue-500 text-white py-1.5 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-sm shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon
                          className="w-3 h-3"
                          aria-hidden="true"
                        />
                      </motion.a>
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-1.5 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-sm hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <GitHubIcon
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                          />
                          <span className="hidden sm:inline">GitHub</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">
              Try selecting a different category or check back later for new
              projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
