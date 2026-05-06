"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const SECTION_LABELS = [
  { threshold: 0.0, label: "Intro" },
  { threshold: 0.25, label: "Portfolio" },
  { threshold: 0.5, label: "Process" },
  { threshold: 0.75, label: "Services" },
  { threshold: 0.95, label: "Footer" }
];

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState("Intro");

  // Track scroll position to update label
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const activeSection = [...SECTION_LABELS].reverse().find(s => latest >= s.threshold);
    if (activeSection && activeSection.label !== currentSection) {
      setCurrentSection(activeSection.label);
    }
  });

  // Smooth the scroll progress for position mapping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate velocity for stretching physics
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Transform velocity into scaleY (stretches when scrolling fast)
  const scaleY = useTransform(smoothVelocity, [-2, 0, 2], [2.5, 1, 2.5]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Map progress (0 to 1) to Y position of the pill.
  const pillHeight = 40;
  const y = useTransform(smoothProgress, [0, 1], [0, windowHeight - pillHeight]);

  return (
    <div className="fixed right-0 top-0 w-8 h-full pointer-events-none z-[100] hidden md:flex flex-col items-center justify-center">
      
      {/* Scrollbar Track */}
      <div className="absolute right-4 top-0 bottom-0 w-[2px] bg-white/5 rounded-full my-4 overflow-hidden">
        
        {/* Active glowing progress line behind the pill */}
        <motion.div 
          className="absolute top-0 left-0 right-0 origin-top bg-white/20"
          style={{ 
            height: "100%",
            scaleY: smoothProgress 
          }}
        />

        {/* The active dynamic pill inside the track */}
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-white/90 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-end"
          style={{ 
            y,
            height: pillHeight,
            scaleY 
          }}
        >
          {/* Dynamic Section Label floating next to pill */}
          <div className="absolute right-full mr-6 text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap hidden lg:block" style={{ transform: "scaleY(calc(1 / var(--scale-y, 1)))" }}>
            {currentSection}
          </div>
        </motion.div>
      </div>

      {/* Decorative dots / section markers */}
      <div className="absolute right-[22px] top-0 bottom-0 h-full flex flex-col justify-between py-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
        ))}
      </div>
    </div>
  );
}
