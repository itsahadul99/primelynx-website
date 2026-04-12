"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui";
import {
  techCategories,
  techMarqueeRow1,
  techMarqueeRow2,
} from "@/lib/constants";
import type { TechItem } from "@/types";

function MarqueeRow({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""} gap-10`}>
      {[0, 1].map((groupIdx) => (
        <div key={groupIdx} className="flex gap-10 items-center shrink-0">
          {items.map((tech, i) => (
            <span
              key={`${groupIdx}-${i}`}
              className={`tech-badge px-12 py-6 rounded-2xl border border-white/10 text-xl font-black tracking-tight ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section className="py-20 md:py-40 pb-16 overflow-hidden relative border-y border-white/5 bg-linear-to-b from-background via-surface/75 to-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/7 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-xs uppercase tracking-[0.5em] font-black text-secondary mb-6">
            Built with industry-leading tools
          </h5>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            Our Technology Stack
          </h2>
        </motion.div>

        {/* Category Grouping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className={`p-8 text-left border-l-4 ${cat.borderColor}`}>
                <h6 className={`font-black text-${cat.color} text-xs uppercase tracking-widest mb-4`}>
                  {cat.title}
                </h6>
                <p className="text-text-secondary text-sm font-medium">{cat.techs}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        <MarqueeRow items={techMarqueeRow1} />
        <MarqueeRow items={techMarqueeRow2} reverse />
      </div>
    </section>
  );
}
