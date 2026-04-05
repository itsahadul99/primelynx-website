"use client";

import { GlassCard, MaterialIcon, SectionHeading } from "@/components/ui";
import { services } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const accentColors = [
  { gradient: "from-primary to-blue-400", glow: "rgba(59, 130, 246, 0.3)", ring: "ring-primary/30", text: "text-primary" },
  { gradient: "from-secondary to-cyan-300", glow: "rgba(6, 182, 212, 0.3)", ring: "ring-secondary/30", text: "text-secondary" },
  { gradient: "from-indigo-500 to-purple-400", glow: "rgba(99, 102, 241, 0.3)", ring: "ring-indigo-400/30", text: "text-indigo-400" },
  { gradient: "from-primary to-blue-400", glow: "rgba(59, 130, 246, 0.3)", ring: "ring-primary/30", text: "text-primary" },
  { gradient: "from-secondary to-cyan-300", glow: "rgba(6, 182, 212, 0.3)", ring: "ring-secondary/30", text: "text-secondary" },
  { gradient: "from-indigo-500 to-purple-400", glow: "rgba(99, 102, 241, 0.3)", ring: "ring-indigo-400/30", text: "text-indigo-400" },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-40 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          title="Core Competencies"
          subtitle="Scalable solutions tailored to your unique technical landscape."
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const accent = accentColors[i % accentColors.length];
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow effect behind card */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl pointer-events-none"
                      style={{ background: accent.glow }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.6, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>

                <GlassCard className="relative p-10 h-full flex flex-col overflow-hidden" hoverEffect={true}>
                  {/* Decorative corner gradient */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Service number watermark */}
                  <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon with animated ring */}
                  <div className="relative mb-8">
                    <motion.div
                      className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center ring-1 ${accent.ring} transition-all duration-300`}
                      whileHover={{ rotate: -5, scale: 1.05 }}
                    >
                      <MaterialIcon
                        icon={service.icon}
                        className={`${service.iconColor} text-3xl`}
                      />
                    </motion.div>

                    {/* Animated dot accent */}
                    <motion.div
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${accent.gradient}`}
                      animate={{
                        scale: isHovered ? [1, 1.4, 1] : 1,
                        opacity: isHovered ? [0.7, 1, 0.7] : 0.5,
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>

                  {/* Title with gradient on hover */}
                  <h4 className="text-2xl font-black mb-4 tracking-tight transition-colors duration-300">
                    <span className={`bg-gradient-to-r ${accent.gradient} bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {service.title}
                    </span>
                  </h4>

                  {/* Description */}
                  <p className="text-text-secondary text-base leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-8 flex items-center gap-3">
                    <motion.div
                      className={`h-[2px] bg-gradient-to-r ${accent.gradient} rounded-full`}
                      initial={{ width: 24 }}
                      animate={{ width: isHovered ? 48 : 24 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* <motion.span
                      className={`text-sm font-medium ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      Learn more
                    </motion.span>
                    */}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
