"use client";

import Link from "next/link";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="px-4 pb-4 mt-12">
      <div className="bg-navy rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-24 flex flex-col min-h-[60vh] md:min-h-[80vh] relative overflow-hidden">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 z-10 flex-grow">
          
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Ready to craft<br />your future dwelling?
            </h2>
            <p className="text-white/60 text-lg max-w-md font-light mb-12">
              Join our newsletter for exclusive architectural insights and project reveals.
            </p>
            <form className="flex border-b border-white/20 pb-4 max-w-md focus-within:border-white transition-colors relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none text-white focus:outline-none w-full placeholder:text-white/30"
              />
              <button type="button" className="text-white absolute right-0 hover:scale-110 transition-transform">
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </form>
          </Reveal>
          
          <Reveal delay={0.2} className="flex flex-col gap-12 lg:items-end text-white/80">
            <div className="flex flex-col gap-4 lg:text-right">
              <span className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2">Socials</span>
              {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map(social => (
                <a key={social} href="#" className="hover:text-white transition-colors text-lg relative group inline-flex lg:justify-end overflow-hidden">
                  <span className="group-hover:-translate-y-full transition-transform duration-500">{social}</span>
                  <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-500 text-white font-medium">{social}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 lg:text-right mt-auto">
              <span className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2">Headquarters</span>
              <p className="text-lg">120 Architecture Ave,<br />Design District, NY 10001</p>
              <a href="mailto:hello@emparial.com" className="text-lg hover:text-white transition-colors underline underline-offset-4">hello@emparial.com</a>
            </div>
          </Reveal>
        </div>

        {/* Bottom Section: Links & Massive Text */}
        <div className="w-full flex flex-col z-10 mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-white/50 text-sm text-center md:text-left">
            <span>© 2026 Emparial. All Rights Reserved.</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/project" className="hover:text-white transition-colors">Projects</Link>
              <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Huge Typography */}
          <Reveal delay={0.4} className="w-full overflow-hidden border-t border-white/10 pt-8 flex justify-center">
            <h1 className="text-[15vw] leading-none font-black tracking-tighter text-white opacity-90 select-none">
              EMPARIAL
            </h1>
          </Reveal>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>
    </footer>
  );
}
