"use client";

import { motion } from "framer-motion";
import { MaterialIcon } from "@/components/ui";
import { whyChooseUs } from "@/lib/constants";

export default function WhyChooseUsSection() {
  return (
    <section className="py-40 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.title}
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <MaterialIcon icon={item.icon} className="text-secondary text-5xl" />
            <h4 className="text-xl font-black tracking-tight">{item.title}</h4>
            <p className="text-text-secondary text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
