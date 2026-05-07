"use client";

import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    category: "General",
    items: [
      { q: "What is your typical project timeline?", a: "Project timelines vary greatly depending on scope, scale, and location. A custom residential home typically takes 12-18 months from initial design to completion, while commercial projects can span 2-4 years." },
      { q: "Do you handle international projects?", a: "Yes, we operate globally. We have local partners in major cities worldwide to ensure smooth compliance with regional building codes and regulations." },
    ]
  },
  {
    category: "Services",
    items: [
      { q: "Do you provide interior design services?", a: "Yes, we offer comprehensive interior design services to ensure the interior spaces harmonize perfectly with the architectural vision." },
      { q: "Do you handle the construction process?", a: "While we are primarily a design firm, we offer construction administration services where we oversee the builders to ensure the project is executed exactly to our specifications." },
    ]
  }
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  return (
    <PageTransition>
      <div className="px-4 pt-24 sm:pt-32 pb-16 flex flex-col gap-6 max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-20 flex flex-col lg:flex-row gap-12 items-center justify-between">
          <Reveal className="lg:w-1/2">
            <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-bold tracking-tighter leading-[1.05] mb-6">
              Frequently<br />Asked Questions
            </h1>
            <p className="text-navy/70 text-base sm:text-lg leading-relaxed font-light">
              Find answers to common inquiries about our design process, timelines, and services. If you can't find what you're looking for, feel free to reach out directly.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="lg:w-1/2 w-full h-[250px] sm:h-[300px] lg:h-[400px] relative rounded-[2rem] overflow-hidden">
             <Image src="/images/faqs.png" alt="FAQ Visual" fill className="object-cover" />
          </Reveal>
        </section>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-4">
            <Reveal className="bg-navy rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 text-white flex flex-col justify-between min-h-[350px] lg:min-h-[400px] sticky top-32">
               <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still have questions?</h2>
                  <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed font-light">Our support team is ready to help you with your specific architectural needs. Let's discuss your vision today.</p>
               </div>
               <div className="flex flex-col gap-4">
                 <button className="bg-white text-navy px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors tracking-wide self-start w-full text-center">
                   Schedule a Call
                 </button>
                 <button className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors tracking-wide self-start w-full text-center">
                   Email Support
                 </button>
               </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-16">
            {faqs.map((group, groupIdx) => (
              <div key={group.category} className="mb-12 last:mb-0">
                <Reveal className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-navy/20"></div>
                  <h3 className="text-sm sm:text-base font-bold text-navy/50 uppercase tracking-widest">{group.category}</h3>
                </Reveal>
                
                <div className="flex flex-col gap-4">
                  {group.items.map((faq, itemIdx) => {
                    const id = `${groupIdx}-${itemIdx}`;
                    const isOpen = openIndex === id;
                    
                    return (
                      <Reveal delay={itemIdx * 0.1} key={id} className="border border-navy/10 rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-navy/20">
                        <button 
                          onClick={() => setOpenIndex(isOpen ? null : id)}
                          className="w-full flex justify-between items-center p-6 sm:p-8 text-left bg-transparent group"
                        >
                          <span className="text-lg sm:text-xl lg:text-2xl font-semibold pr-8 group-hover:text-navy transition-colors">{faq.q}</span>
                          <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-navy text-white' : 'bg-[#f8f9fa] text-navy'}`}>
                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <div className="px-6 sm:px-8 pb-8 text-navy/70 leading-relaxed text-base sm:text-lg border-t border-navy/5 pt-6 mx-4 font-light">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
