"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import grain from "@/assets/images/grain.jpg";
import memojiComputer from "@/assets/images/memoji-computer.png";

// Skills data with icons
const skills = [
  { name: "React", icon: "⚛️", level: 95, category: "Frontend" },
  { name: "TypeScript", icon: "📘", level: 90, category: "Frontend" },
  { name: "Next.js", icon: "▲", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 88, category: "Frontend" },
  { name: "PostgreSQL", icon: "🐘", level: 82, category: "Database" },
  { name: "AWS", icon: "☁️", level: 78, category: "Cloud" },
];

// Experience timeline
const experience = [
  {
    year: "Dec 2024 - Sep 2025",
    title: "Web Application",
    company: "Tech Stack: React.js, Next.js, TypeScript, Tailwind CSS",
    description:
      "Delivered responsive web experiences focused on clean code and performance.",
    achievements: [
      "Developed 25+ responsive landing pages using HTML, CSS, JavaScript, and Tailwind CSS",
      "Built interactive UI components and animations with React.js and modern design principles",
      "Focused on fast load times and mobile-first responsive layouts",
      "Delivered SEO-friendly, cross-browser compatible pages for diverse project needs",
    ],
  },
  {
    year: "Jan 2025 - May 2025",
    title: "Full-Stack Food Ordering App",
    company: "Personal Project",
    description:
      "Built a responsive platform with modern UI, advanced animations, and admin tooling.",
    achievements: [
      "Developed a responsive food ordering platform with modern UI, advanced animations, and admin panel features",
      "Enabled local market vendors to receive online orders with over 200 users registered",
      "Displayed product names, quantities, and prices clearly for both customers and sellers",
      "Designed architecture for scalability and future feature expansion",
    ],
  },
  {
    year: "May 2025 - Sep 2025",
    title: "Full-Stack Web Application",
    company: "Personal Project",
    description:
      "Shipped a feature-rich app with authentication, custom interactions, and rapid adoption.",
    achievements: [
      "Built a full-stack web app using React, Next.js, TypeScript, Tailwind, and Framer Motion",
      "Implemented full authentication including login, logout, and admin access with RBAC",
      "Added smooth animations, custom cursor, and integrated a live code editor",
      "Deployed bug-free on first release and scaled to 1,000 users and 2,000 monthly visits",
    ],
  },
];

// Fun facts
const funFacts = [
  { number: "3+", label: "Years Experience", icon: "💼" },
  { number: "27+", label: "Projects Completed", icon: "🚀" },
  { number: "99%", label: "Client Satisfaction", icon: "⭐" },
  { number: "24/7", label: "Available for Work", icon: "🌙" },
];

const MotionLink = motion(Link);

export const AboutVCard = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${grain.src})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-2 rounded-lg">
                  <div className="bg-green-500 rounded-full size-2.5 relative">
                    <div className="bg-green-500 absolute inset-0 animate-ping rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    Available for new opportunities
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Crafting Digital
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-600">
                    Experiences
                  </span>
                </h1>
                <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                  I'm a passionate full-stack developer who transforms ideas
                  into elegant, user-centered digital solutions. Let's build
                  something extraordinary together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <MotionLink
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Work with me
                  <ArrowUpRightIcon className="w-5 h-5" />
                </MotionLink>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/15 text-white rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"
                >
                  Download CV
                </motion.button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-emerald-600/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-emerald-600/10 rounded-3xl -rotate-3" />

                {/* Main image container */}
                <div className="relative w-full h-full bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-emerald-600/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={memojiComputer}
                      alt="Profile"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-xl">🎯</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            >
              I believe in creating digital experiences that not only look
              beautiful but also solve real problems. With over 5 years of
              experience, I've helped companies transform their ideas into
              successful digital products.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
              <p className="text-white/60 leading-relaxed">
                To build intuitive, scalable, and performant applications that
                delight users and drive business growth. I focus on clean code,
                modern technologies, and user-centered design principles.
              </p>
              <p className="text-white/60 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <div className="space-y-4">
                {[
                  "Full-stack web development",
                  "UI/UX design consultation",
                  "Performance optimization",
                  "SEO optimization",
                  "Team mentoring",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-white/60">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
          >
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-400 to-emerald-600" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <span className="text-emerald-400 font-semibold text-sm">
                        {exp.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-white/70">@ {exp.company}</span>
                    </div>
                    <p className="text-white/60 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <CheckIcon className="w-4 h-4 text-emerald-400" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-300 ${
                        hoveredSkill === skill.name
                          ? "shadow-lg shadow-emerald-500/25"
                          : ""
                      }`}
                    />
                  </div>
                  <span className="text-sm text-white/70">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-3">{fact.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">
                  {fact.number}
                </div>
                <div className="text-white/60 text-sm">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 text-white/60"
            >
              Let's discuss your project and turn your vision into reality.
            </motion.p>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Start a Project
              <ArrowUpRightIcon className="w-5 h-5" />
            </MotionLink>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
