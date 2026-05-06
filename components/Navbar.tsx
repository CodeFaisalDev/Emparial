"use client";

import Link from "next/link";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" as const }
    })
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faqs" }
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-700 flex justify-center ${
          scrolled ? "top-6 px-4" : "top-0 px-0"
        } pointer-events-none`}
      >
        <div className={`w-full max-w-[1600px] mx-auto px-6 flex items-center justify-between pointer-events-auto transition-all duration-700 ${
          scrolled ? "py-4 bg-white/70 backdrop-blur-xl shadow-xl rounded-full border border-white/20" : "py-8 bg-transparent"
        }`}>
          
          {/* Exact Logo from Design */}
          <div className="flex-1">
            <Link href="/" onClick={closeMenu} className={`text-[1.75rem] font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-navy' : 'text-white mix-blend-difference'}`}>
              Emparial
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex flex-1 justify-center items-center gap-8 text-sm font-medium transition-colors duration-500 ${scrolled ? 'text-navy/80' : 'text-white/80 mix-blend-difference'}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`hover:opacity-100 transition-opacity relative ${isActive ? 'opacity-100 font-semibold' : 'opacity-70'} ${scrolled && isActive ? 'text-navy' : ''}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className={`absolute w-1 h-1 rounded-full -bottom-2 left-1/2 -translate-x-1/2 ${scrolled ? 'bg-navy' : 'bg-white'}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex-1 flex justify-end items-center gap-6">
            {/* Mobile Burger Menu Toggle */}
            <button 
              onClick={toggleMenu} 
              className={`lg:hidden p-2 z-[60] relative transition-colors duration-500 ${scrolled && !isOpen ? 'text-navy' : 'text-white mix-blend-difference'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            {/* Exact Contact Button from Design */}
            <Magnetic>
              <Link href="/contact" className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all tracking-wide hidden sm:inline-block shadow-sm ${scrolled ? 'bg-navy text-white hover:bg-navy/90 hover:scale-105' : 'bg-white text-navy hover:bg-white/90'}`}>
                Contact Us
              </Link>
            </Magnetic>
          </div>
          
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {[...navLinks, { name: "Contact Us", href: "/contact" }].map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                  <Link 
                    href={link.href} 
                    onClick={closeMenu}
                    className={`text-4xl font-bold tracking-tight transition-colors ${pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
