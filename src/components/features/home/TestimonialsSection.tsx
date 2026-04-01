"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard, MaterialIcon } from "@/components/ui";
import { testimonials } from "@/lib/constants";

function StarRating() {
  return (
    <div className="flex gap-1 text-secondary mb-8">
      {[...Array(5)].map((_, i) => (
        <MaterialIcon key={i} icon="star" className="text-2xl" filled />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-40 px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-black tracking-tight mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Voices of Success
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-12 flex flex-col justify-between h-full">
                <div>
                  <StarRating />
                  <p className="text-xl font-medium italic mb-12 leading-relaxed text-text-primary">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-black text-text-primary">{testimonial.name}</p>
                    <p className="text-xs text-text-secondary uppercase tracking-widest font-black">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
