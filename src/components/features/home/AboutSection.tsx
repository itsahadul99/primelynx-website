"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard } from "@/components/ui";
import { aboutStats } from "@/lib/constants";

function AnimatedCounter({ value, className }: { value: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  // Parse "50+" → { num: 50, suffix: "+" }
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref} className={`text-5xl font-black ${className} mb-3`}>
      {isInView ? display : 0}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-40 pt-12 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.15]">
            We are builders, thinkers, and{" "}
            <span className="text-secondary">problem solvers</span>.
          </h2>
          <p className="text-text-secondary text-xl leading-relaxed max-w-xl">
            Our team blends creative strategy with technical excellence to deliver
            products that don&apos;t just work&mdash;they inspire. We push boundaries to
            ensure your digital presence is a competitive advantage.
          </p>
          <div className="flex items-center gap-5 text-primary">
            <span className="w-16 h-[2px] bg-primary" />
            <span className="text-sm font-black uppercase tracking-[0.3em]">
              Our Methodology
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {aboutStats.map((stat) => (
            <GlassCard
              key={stat.label}
              className={`p-10 flex flex-col justify-center items-center text-center ${
                stat.offsetTop ? "mt-12" : ""
              } ${stat.offsetBottom ? "-mt-12" : ""}`}
            >
              <AnimatedCounter value={stat.value} className={stat.color} />
              <span className="text-xs uppercase tracking-[0.2em] text-text-secondary font-bold">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
