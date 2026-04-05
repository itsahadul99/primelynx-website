"use client";

import { motion } from "framer-motion";
import { MaterialIcon, SectionHeading } from "@/components/ui";
import { whyChooseUs } from "@/lib/constants";

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 md:py-40 px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="orb w-125 h-125 bg-primary/8 -top-40 -left-40" />
      <div className="orb w-100 h-100 bg-secondary/8 -bottom-32 -right-32" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="Why Us"
          title="Why Choose Primelynx?"
          subtitle="Discover the benefits of our cutting-edge AI solutions for your business."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative glass-card rounded-2xl p-8 flex flex-col items-start gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-5 text-7xl font-black text-white/3 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon container */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/15 group-hover:border-secondary/30 transition-all duration-300">
                <MaterialIcon
                  icon={item.icon}
                  className="text-secondary text-3xl"
                  filled
                />
              </div>

              <h4 className="text-lg font-black tracking-tight text-text-primary">
                {item.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
