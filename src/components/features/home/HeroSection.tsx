"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui";
import { heroStats } from "@/lib/constants";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const num = parseInt(value);
  const suffix = value.replace(/\d+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const unsub = rounded.on("change", setDisplay);
    const ctrl = animate(count, num, { duration: 2, delay: 1.2, ease: "easeOut" });
    return () => { unsub(); ctrl.stop(); };
  }, [count, num, rounded]);

  return (
    <div className="group">
      <p className="text-3xl md:text-5xl font-black text-primary mb-2 transition-transform group-hover:scale-110">
        {display}
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-text-secondary font-bold">
        {label}
      </p>
    </div>
  );
}

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className} style={{ perspective: "600px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[calc(100vh-1rem)] flex flex-col justify-center items-center text-center px-6 pt-16 pb-8 bg-grid"
    >
      {/* Animated gradient orbs that follow mouse */}
      <motion.div
        className="orb w-[500px] h-[500px] bg-primary/30"
        animate={{
          x: `${mousePos.x * 100 - 50}%`,
          y: `${mousePos.y * 100 - 50}%`,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        style={{ top: "10%", left: "20%" }}
      />
      <motion.div
        className="orb w-[400px] h-[400px] bg-secondary/20"
        animate={{
          x: `${(1 - mousePos.x) * 80 - 40}%`,
          y: `${(1 - mousePos.y) * 80 - 40}%`,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 80 }}
        style={{ bottom: "10%", right: "15%" }}
      />
      <motion.div
        className="orb w-[300px] h-[300px] bg-indigo-500/15"
        animate={{
          x: `${mousePos.x * 60 - 30}%`,
          y: `${(1 - mousePos.y) * 60 - 30}%`,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 60 }}
        style={{ top: "40%", right: "30%" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            top: `${10 + (i * 37) % 80}%`,
            left: `${5 + (i * 53) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto mt-4">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-sm text-text-secondary font-medium">
            Available for new projects
          </span>
        </motion.div>

        {/* Heading with letter-by-letter animation */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-text-primary leading-[1.1] mb-6">
          <AnimatedText text="Connecting Ideas." />
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]">
            <AnimatedText text="Building the Future." />
          </span>
        </h1>

        {/* Paragraph with blur-in reveal */}
        <motion.p
          className="text-text-secondary text-base md:text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          We design and engineer high-performance digital ecosystems that empower
          brands to redefine their market presence.
        </motion.p>

        {/* Buttons with staggered scale-up */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 1 } },
          }}
        >
          {[
            { variant: "primary" as const, href: "#work", label: "Explore Our Work" },
            { variant: "secondary" as const, href: "#contact", label: "Get in Touch" },
          ].map((btn) => (
            <motion.div
              key={btn.label}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Button className="py-1 h-12 flex justify-center items-center" variant={btn.variant}>
                <a href={btn.href}>{btn.label}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } },
          }}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <AnimatedCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    
    </section>
  );
}
