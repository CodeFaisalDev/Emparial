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
        
        {/* The Curtain Overlay */}
        <motion.div
          className="fixed inset-0 z-[100] bg-navy flex items-center justify-center pointer-events-none"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "0%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {isFirstMount && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-[3rem] md:text-[5rem] font-bold tracking-tight"
            >
              Emparial
            </motion.div>
          )}
        </motion.div>

        {/* The Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {children}
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
