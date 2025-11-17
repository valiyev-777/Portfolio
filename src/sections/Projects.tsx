import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import WritingEssays from "@/assets/images/writing.png";
import Texnos from "@/assets/images/texnos.png";
import Spelling from "@/assets/images/startupspelling.png";

const portfolioProjects = [
  {
    company: "Texnos",
    year: "2025",
    title: "Full E-commerce Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "2k users used the website" },
    ],
    link: "https://texnos.netlify.app/",
    githubLink: "https://github.com/valiyev-777/TexnoS",
    image: Texnos,
  },
  {
    company: "From telegram",
    year: "2025",
    title: "Writing Essays",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Students can write faster and better" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://writingesseys.netlify.app/",
    githubLink: "https://github.com/valiyev-777/Writing",
    image: WritingEssays,
  },
  {
    company: "Startup",
    year: "2025",
    title: "AI Startup Education Website",
    results: [
      { title: "Students can learn faster and better" },
      { title: "10k students can use the website" },
      { title: "Website for spelling words" },
    ],
    link: "https://valiyevspelling.netlify.app/",
    githubLink: "https://github.com/valiyev-777/Spelling",
    image: Spelling,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured and Startup Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        {/* Projects List */}
        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:px-12 md:pt-12 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* Project Content */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left Column */}
                <div className="lg:pb-16">
                  <div
                    className="bg-linear-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase
                               tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit live site for ${project.title}`}
                      className="bg-white text-gray-950 h-12 px-6 w-full sm:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white h-12 px-6 w-full sm:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <GitHubIcon className="size-5" aria-hidden="true" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.company} project screenshot`}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={projectIndex === 0 ? 90 : 75}
                    priority={projectIndex === 0}
                    {...(projectIndex === 0 ? {} : { loading: "lazy" })}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center  items-center flex-col mt-10">
          <p className="text-center text-white/60 mt-4 max-w-md mx-auto lg:text-xl">
            Want to see more? Check out my other projects.
          </p>
          <a
            href="/projects"
            className="bg-white text-gray-950 h-12 px-6 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
          >
            <span>View All Projects</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
