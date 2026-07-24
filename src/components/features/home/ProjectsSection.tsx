"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, MaterialIcon } from "@/components/ui";
import { projects } from "@/lib/constants";
import CaseStudyModal from "./CaseStudyModal";

type Project = (typeof projects)[number];

const tagColors: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/20", text: "text-primary" },
  secondary: { bg: "bg-secondary/20", text: "text-secondary" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400" },
};

const accents = [
  { glow: "bg-primary", text: "text-primary", soft: "bg-primary/10", border: "border-primary/20" },
  { glow: "bg-secondary", text: "text-secondary", soft: "bg-secondary/10", border: "border-secondary/20" },
  { glow: "bg-indigo-500", text: "text-indigo-400", soft: "bg-indigo-500/10", border: "border-indigo-500/20" },
];

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .split("-")
    .slice(0, 3)
    .join("-");
}

function ProjectCard({
  project,
  index,
  featured = false,
  onViewCaseStudy,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  onViewCaseStudy: (project: Project) => void;
}) {
  const accent = accents[index % accents.length];
  const slug = slugify(project.title);
  const topResults = project.caseStudy.results.slice(0, featured ? 3 : 2);
  const topStack = project.caseStudy.techStack.slice(0, featured ? 6 : 4);
  const remainingCount = project.caseStudy.techStack.length - topStack.length;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-surface flex flex-col ${featured ? "min-h-130 md:min-h-150" : "min-h-105 md:min-h-120"
        }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.07] transition-opacity duration-700 group-hover:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Color-tinted gradient blobs */}
      <div
        className={`absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[120px] opacity-20 transition-opacity duration-700 group-hover:opacity-40 ${accent.glow}`}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[120px] opacity-10 transition-opacity duration-700 group-hover:opacity-25 ${accent.glow}`}
      />

      {/* Project number watermark */}
      <span className="pointer-events-none absolute top-4 right-6 md:top-6 md:right-10 text-[140px] md:text-[180px] font-black text-white/[0.03] select-none leading-none tracking-tighter">
        0{index + 1}
      </span>

      {/* Window chrome bar */}
      <div className="relative z-10 flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-background/40 backdrop-blur-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 font-mono text-[11px] text-text-secondary/70 tracking-wide truncate">
          ~/primelynx/projects/{slug}
        </span>
      </div>

      {/* Content */}
      <div className={`relative z-10 flex-1 flex flex-col justify-between ${featured ? "p-8 md:p-12" : "p-6 md:p-8"}`}>
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => {
              const colors = tagColors[tag.color] || tagColors.primary;
              return (
                <span
                  key={tag.label}
                  className={`text-[10px] uppercase font-black tracking-[0.15em] animate-pulse px-3.5 py-1.5 ${colors.bg} ${colors.text} rounded-full backdrop-blur-sm border border-white/5`}
                >
                  {tag.label}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h3
            className={`font-black tracking-tight text-text-primary mb-3 leading-[1.1] ${featured ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"
              }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`text-text-secondary mb-6 leading-relaxed max-w-xl ${featured ? "text-base md:text-lg" : "text-sm"
              }`}
          >
            {project.description}
          </p>

          {/* Pulsing Modern Tech Stack Pills */}
          <div className="mb-6">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary/60 mb-2.5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${accent.glow || "bg-primary"}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${accent.glow || "bg-primary"}`} />
              </span>
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {topStack.map((tech) => (
                <span
                  key={tech}
                  className="group/pill relative px-3 py-1.5 rounded-lg border animate-pulse  border-white/10 bg-background/50 backdrop-blur-md text-xs font-medium text-text-secondary hover:text-white transition-all duration-300"
                >
                  {/* Subtle hover & continuous pulse accent line inside pill */}
                  <span className={`absolute inset-x-0 bottom-0 h-[2px] rounded-b-lg opacity-40 group-hover/pill:opacity-100 transition-opacity duration-300 ${accent.glow || "bg-primary"}`} />
                  {tech}
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs font-medium text-text-secondary/60">
                  +{remainingCount} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom row: metrics + CTA */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex gap-3 flex-wrap">
            {topResults.map((r) => (
              <div
                key={r.label}
                className={`rounded-xl ${accent.soft} border ${accent.border} px-3.5 py-2`}
              >
                <div className={`text-base md:text-lg font-black ${accent.text} leading-none`}>
                  {r.metric}
                </div>
                <div className="text-[10px] text-text-secondary mt-1 uppercase tracking-wider">
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onViewCaseStudy(project)}
            className="inline-flex items-center gap-3 text-primary font-bold text-sm group/link w-fit cursor-pointer"
          >
            <span className="relative">
              View Case Study
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 group-hover/link:bg-primary/20 group-hover/link:translate-x-1 transition-all duration-300">
              <MaterialIcon icon="arrow_forward" className="text-sm" />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [featured, ...rest] = projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 md:py-40 px-6 md:px-8 max-w-350 mx-auto">
      <SectionHeading
        title="Building digital excellence."
        subtitle="A curated selection of projects where bold design meets flawless engineering."
        badge="Selected Work"
      />

      {/* Featured project — full width */}
      <ProjectCard
        project={featured}
        index={0}
        featured
        onViewCaseStudy={setSelectedProject}
      />

      {/* Remaining projects — 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {rest.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i + 1}
            onViewCaseStudy={setSelectedProject}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
