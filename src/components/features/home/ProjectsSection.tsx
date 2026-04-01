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

export default function ProjectsSection() {
  return (
    <section id="work" className="py-40 px-8 max-w-7xl mx-auto">
      <SectionHeading title="Building digital excellence." badge="Selected Work" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card relative group aspect-video overflow-hidden rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="project-overlay absolute inset-0 bg-background/90 backdrop-blur-md p-10 flex flex-col justify-end">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => {
                    const colors = tagColors[tag.color] || tagColors.primary;
                    return (
                      <span
                        key={tag.label}
                        className={`text-[10px] uppercase font-black tracking-widest px-3 py-1 ${colors.bg} ${colors.text} rounded-md`}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>
                <h3 className="text-3xl font-black tracking-tight text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all"
                >
                  View Case Study{" "}
                  <MaterialIcon icon="arrow_forward" className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
