"use client";

import { MaterialIcon } from "@/components/ui";
import { projects } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { slugify } from "./ProjectsSection";

type Project = (typeof projects)[number];

const tagColors: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/20", text: "text-primary" },
  secondary: { bg: "bg-secondary/20", text: "text-secondary" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400" },
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

export default function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [project]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const cs = project?.caseStudy;

  return (
    <AnimatePresence>
      {project && cs && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-h-[85vh] overflow-y-auto custom-scrollbar max-w-4xl mx-4 my-8 md:my-12 rounded-3xl border border-white/10 bg-surface overflow-x-hidden"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Banner Header */}
            <div className="relative h-44 md:h-52 overflow-hidden bg-background">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              {/* Glows */}
              <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[120px] opacity-30 bg-primary" />
              <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[120px] opacity-20 bg-secondary" />

              {/* Top Chrome / Path Bar */}
              <div className="relative z-10 flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-background/40 backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 font-mono text-[11px] text-text-secondary/70 tracking-wide truncate">
                  ~/case-studies/{slugify(project.title)}
                </span>
              </div>

              {/* Hero Banner Accent Content */}
              <div className="relative z-10 px-6 md:px-12 py-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Featured Case Study
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-surface to-transparent pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-white/10 text-text-secondary hover:text-text-primary hover:bg-background/80 transition-colors cursor-pointer"
              >
                <MaterialIcon icon="close" className="text-xl" />
              </button>
            </div>

            {/* Modal Main Body (All content rendered ONCE here) */}
            <div className="px-6 md:px-12 pb-10 -mt-10 relative z-10">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
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
              <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-6 leading-tight">
                {project.title}
              </h2>

              {/* Overview */}
              <p className="text-text-secondary leading-relaxed mb-10 text-base md:text-lg">
                {cs.overview}
              </p>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl border border-white/5 bg-background/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-red-500/15 border border-red-500/20">
                      <MaterialIcon icon="warning" className="text-red-400 text-base" />
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">The Challenge</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{cs.challenge}</p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-background/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/15 border border-primary/20">
                      <MaterialIcon icon="lightbulb" className="text-primary text-base" />
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">Our Solution</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                  <MaterialIcon icon="checklist" className="text-secondary" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cs.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-background/30 px-4 py-3"
                    >
                      <MaterialIcon
                        icon="check_circle"
                        className="text-primary text-base mt-0.5 shrink-0"
                      />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                  <MaterialIcon icon="trending_up" className="text-secondary" />
                  Results & Impact
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="text-center rounded-2xl border border-white/5 bg-background/50 p-5"
                    >
                      <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                        {r.metric}
                      </div>
                      <div className="text-text-secondary text-xs">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <MaterialIcon icon="code" className="text-secondary" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cs.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-4 py-2 rounded-xl bg-background/60 text-text-secondary border border-white/10 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
