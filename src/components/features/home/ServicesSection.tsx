"use client";

import { motion } from "framer-motion";
import { GlassCard, MaterialIcon, SectionHeading } from "@/components/ui";
import { services } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-40 px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Core Competencies"
          subtitle="Scalable solutions tailored to your unique technical landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-12">
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-8`}
                >
                  <MaterialIcon
                    icon={service.icon}
                    className={`${service.iconColor} text-3xl`}
                  />
                </div>
                <h4 className="text-2xl font-black mb-5 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-text-secondary text-base leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
