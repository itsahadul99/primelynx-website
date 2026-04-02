"use client";

import { motion } from "framer-motion";
import { GlassCard, MaterialIcon } from "@/components/ui";

const cards = [
  {
    icon: "target",
    title: "Our Mission",
    description:
      "To bridge the gap between imagination and reality by engineering innovative digital solutions that accelerate human potential and business growth.",
    gradient: "from-primary to-secondary",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: "satellite",
    title: "Our Vision",
    description:
      "To be the global benchmark for technical excellence, where the most complex challenges are met with elegant, forward-thinking architecture.",
    gradient: "from-secondary to-indigo-500",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="py-20 pt-0 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <GlassCard className="p-14 relative overflow-hidden group">
              <div
                className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${card.gradient}`}
              />
              <div
                className={`mb-10 w-20 h-20 ${card.iconBg} rounded-2xl flex items-center justify-center`}
              >
                <MaterialIcon icon={card.icon} className={`${card.iconColor} text-5xl`} />
              </div>
              <h3 className="text-4xl font-black mb-8 tracking-tight">{card.title}</h3>
              <p className="text-text-secondary text-xl leading-relaxed">
                {card.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
