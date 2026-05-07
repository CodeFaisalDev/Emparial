"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  className?: string;
}

export default function Reveal({ 
  children, 
  delay = 0, 
  duration = 1.2, 
  y = 60, 
  scale = 0.95,
  className = "" 
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.85, 0, 0.15, 1] as const
      }}
    >
      {children}
    </motion.div>
  );
}
