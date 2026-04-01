"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-40 px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[1.1]">
          Ready to build something great?
        </h2>
        <p className="text-text-secondary text-xl mb-16 leading-relaxed">
          Let&apos;s discuss how we can turn your vision into a market-leading digital
          product.
        </p>

        <form className="flex flex-col gap-5 max-w-xl mx-auto mb-16" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input
              className="w-full bg-surface-elevated border border-white/5 rounded-2xl px-8 py-6 focus:ring-2 focus:ring-primary text-text-primary placeholder:text-text-secondary/50 outline-none transition-all"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              type="submit"
              className="absolute right-3 top-3 bottom-3 px-8 bg-primary text-white rounded-xl font-black hover:bg-primary/90 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-12 text-text-secondary font-black tracking-widest text-sm uppercase">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
