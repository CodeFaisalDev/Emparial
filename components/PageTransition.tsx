"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    // Only show the preloader text on the very first mount
    const timer = setTimeout(() => setIsFirstMount(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen relative">
        
        {/* The Curtain Overlay (Multi-panel) */}
        <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-navy h-full w-full"
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              exit={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.85, 0, 0.15, 1], delay: isFirstMount ? 1.5 + (i * 0.08) : (i * 0.08) }}
            />
          ))}
          {isFirstMount && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-[101]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
                className="text-white text-[3rem] md:text-[6rem] font-black tracking-tighter uppercase"
              >
                Emparial
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* The Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: isFirstMount ? 1.8 : 0.4 }}
        >
          {children}
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
