"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading, MaterialIcon } from "@/components/ui";
import { projects } from "@/lib/constants";

const tagColors: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/20", text: "text-primary" },
  secondary: { bg: "bg-secondary/20", text: "text-secondary" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400" },
};

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-surface ${
        featured ? "min-h-130 md:min-h-150" : "min-h-105 md:min-h-120"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
        {/* Gradient overlay — always visible */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
      </div>

      {/* Decorative corner glow */}
      <div
        className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${
          index === 0 ? "bg-primary" : index === 1 ? "bg-secondary" : "bg-indigo-500"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
        {/* Project number */}
        <span className="absolute top-8 right-8 md:top-12 md:right-12 text-7xl md:text-8xl font-black text-white/3 select-none leading-none">
          0{index + 1}
        </span>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => {
            const colors = tagColors[tag.color] || tagColors.primary;
            return (
              <span
                key={tag.label}
                className={`text-[10px] uppercase font-black tracking-[0.15em] px-4 py-1.5 ${colors.bg} ${colors.text} rounded-full backdrop-blur-sm border border-white/5`}
              >
                {tag.label}
              </span>
            );
          })}
        </div>

        {/* Title */}
        <h3
          className={`font-black tracking-tight text-text-primary mb-3 leading-[1.1] ${
            featured ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`text-text-secondary mb-6 leading-relaxed max-w-xl ${
            featured ? "text-base md:text-lg" : "text-sm md:text-base"
          }`}
        >
          {project.description}
        </p>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-3 text-primary font-bold text-sm group/link w-fit"
        >
          <span className="relative">
            View Case Study
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 group-hover/link:bg-primary/20 group-hover/link:translate-x-1 transition-all duration-300">
            <MaterialIcon icon="arrow_forward" className="text-sm" />
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="py-40 px-6 md:px-8 max-w-350 mx-auto">
      <SectionHeading
        title="Building digital excellence."
        subtitle="A curated selection of projects where bold design meets flawless engineering."
        badge="Selected Work"
      />

      {/* Featured project — full width */}
      <ProjectCard project={featured} index={0} featured />

      {/* Remaining projects — 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i + 1} />
        ))}
      </div>

      {/* Bottom CTA */}
      {/* <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-text-primary font-bold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
        >
          View All Projects
          <MaterialIcon
            icon="arrow_forward"
            className="text-base text-primary group-hover:translate-x-1 transition-transform duration-300"
          />
        </a>
      </motion.div> */}
    </section>
  );
}
