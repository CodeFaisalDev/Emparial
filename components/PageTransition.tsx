"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    // Only show the preloader text on the very first mount
    const timer = setTimeout(() => setIsFirstMount(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const panelVariants = {
    initial: { y: "0%" },
    animate: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 1,
        ease: [0.85, 0, 0.15, 1] as const,
        delay: isFirstMount ? 1.8 + (i * 0.1) : (i * 0.1)
      }
    }),
    exit: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1] as const,
        delay: i * 0.05
      }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeInOut" as const }
    }
  };

  const brandName = "EMPARIAL";

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen relative">
        
        {/* The Curtain Overlay (Multi-panel) */}
        <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 bg-navy h-full w-full border-r border-white/5"
            />
          ))}

          {/* Loading Brand Animation */}
          <AnimatePresence>
            {isFirstMount && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-[101]"
                exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)", transition: { duration: 0.8, ease: "easeInOut" as const } }}
              >
                <div className="flex gap-1 sm:gap-2">
                  {brandName.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-white text-[12vw] sm:text-[8vw] font-black tracking-tighter uppercase inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                
                {/* Progress Bar Line */}
                <motion.div 
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-white/20 overflow-hidden rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="h-full bg-white"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" as const, delay: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ 
            duration: 1, 
            ease: [0.85, 0, 0.15, 1] as const, 
            delay: isFirstMount ? 2.2 : 0.4 
          }}
        >
          {children}
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
