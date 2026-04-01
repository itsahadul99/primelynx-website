"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl ${hoverEffect ? "" : "hover:transform-none hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)]"} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
