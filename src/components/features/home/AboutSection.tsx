"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { GlassCard, MaterialIcon, SectionHeading } from "@/components/ui";
import { aboutStats, teamMembers } from "@/lib/constants";

function AnimatedCounter({ value, className }: { value: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [display, setDisplay] = useState(0);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
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

const missionVisionCards = [
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

const socialIcons: Record<string, string> = {
  github: "code",
  linkedin: "work",
  twitter: "tag",
};


export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto space-y-32">
      {/* Section Heading */}
      <SectionHeading
        badge="About Us"
        title="Who we are"
        subtitle="A passionate team of creators and engineers turning bold ideas into exceptional digital experiences."
      />

      {/* About Intro + Stats */}
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

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {missionVisionCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <GlassCard className="p-14 relative overflow-hidden group">
              <div
                className={`absolute top-0 left-0 w-full h-[2px] bg-linear-to-r ${card.gradient}`}
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
