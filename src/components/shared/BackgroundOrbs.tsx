"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="orb w-[600px] h-[600px] bg-primary/10 top-[-100px] right-[-100px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb w-[700px] h-[700px] bg-secondary/10 bottom-[-200px] left-[-200px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb w-[500px] h-[500px] bg-indigo-500/5 top-[40%] left-[20%]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
