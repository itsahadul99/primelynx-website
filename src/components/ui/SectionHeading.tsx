"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${centered ? "text-center flex flex-col items-center" : ""} mb-16 md:mb-24 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase mb-8 border border-primary/20 inline-block">
          {badge}
        </span>
      )}
      <h2 className="text-[38px] md:text-6xl font-black tracking-tight mb-4 md:mb-6 leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
