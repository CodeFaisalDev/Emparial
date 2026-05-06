"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <PageTransition>
      <div className="px-4 pt-32 pb-16 flex flex-col gap-4 max-w-[1600px] mx-auto overflow-hidden">

        {/* Top Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative w-full"
        >
          {/* Mobile layout */}
          <div className="lg:hidden flex flex-col gap-4">
            <div className="order-1 bg-white rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative">
              <h1 className="text-[2.75rem] font-bold tracking-tighter leading-[1.05] mb-8 relative z-10">
                We craft the<br />future dwelling.
              </h1>
              <motion.div
                className="w-full h-[250px] relative rounded-2xl overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/images/main.png" alt="Modern Architecture" fill className="object-cover" priority />
              </motion.div>
            </div>
            <div className="order-2 bg-white rounded-[2rem] p-8 flex flex-col justify-center min-h-[200px]">
              <span className="text-navy/60 text-sm font-semibold mb-2">Capital raised</span>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">$3.5M+</h2>
              <p className="text-navy/70 text-sm leading-relaxed max-w-[280px]">
                Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future.
              </p>
            </div>
            <div className="order-3 bg-white rounded-[2rem] p-8 flex flex-col justify-center min-h-[200px]">
              <span className="text-navy/60 text-sm font-semibold mb-4">Introduction</span>
              <h2 className="text-2xl font-medium mb-8 leading-[1.15] tracking-tight">
                A vision for<br />liveable,<br />sustainable &<br />affordable.
              </h2>
              <Magnetic className="self-start">
                <Link href="/project" className="bg-navy text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-navy/90 transition-colors inline-block tracking-wide">
                  Start Exploring
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Desktop exact layout */}
          <div className="hidden lg:flex w-full min-h-[500px]">
            {/* Left Column wrapper */}
            <div className="w-[35%] flex flex-col pr-[24px]">
              {/* Capital Raised */}
              <div className="bg-white rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-10 lg:p-12 relative flex-1 flex flex-col justify-center group">
                <div className="absolute top-0 -right-[24px] w-[25px] h-full bg-white z-10" />
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-[45px] -right-[24px] z-20 pointer-events-none">
                  <path d="M0 0 H45 V45 C45 20.147 24.853 0 0 0 Z" fill="#ffffff" />
                </svg>

                <span className="text-navy/60 text-sm font-semibold mb-2 relative z-30">Capital raised</span>
                <h2 className="text-5xl xl:text-6xl font-bold mb-4 tracking-tight relative z-30">$3.5M+</h2>
                <p className="text-navy/70 text-base leading-relaxed max-w-[280px] relative z-30">
                  Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future.
                </p>
              </div>

              {/* The Horizontal Gap */}
              <div className="h-[24px] w-full shrink-0 relative z-10"></div>

              {/* Introduction */}
              <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 flex-1 flex flex-col justify-center relative z-0 group">
                <span className="text-navy/60 text-sm font-semibold mb-4 relative z-10">Introduction</span>
                <h2 className="text-3xl xl:text-4xl font-medium mb-6 leading-[1.1] tracking-tight relative z-10">
                  A vision for<br />liveable,<br />sustainable &<br />affordable.
                </h2>
                <Magnetic className="self-start relative z-10">
                  <Link href="/project" className="bg-navy text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-navy/90 transition-colors inline-block tracking-wide">
                    Start Exploring
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[65%] bg-white rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-[2.5rem] rounded-tl-none p-12 lg:p-16 flex flex-col justify-between z-0 relative">
              <h1 className="text-[4.5rem] xl:text-[6rem] font-bold tracking-tighter leading-[1] mb-8">
                We craft the<br />future dwelling.
              </h1>
              <motion.div
                className="w-full h-[300px] xl:h-[350px] relative rounded-[2.5rem] overflow-hidden group"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/main.png"
                  alt="Modern Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Dynamic Endless Marquee Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="w-full bg-navy rounded-[2.5rem] overflow-hidden py-10 flex items-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy z-10 pointer-events-none w-full" />
          <motion.div
            className="flex whitespace-nowrap text-white/90 text-5xl md:text-7xl font-bold tracking-tighter uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="px-8">Architecture • Interior • Landscape • Innovation •</span>
            <span className="px-8">Architecture • Interior • Landscape • Innovation •</span>
            <span className="px-8">Architecture • Interior • Landscape • Innovation •</span>
            <span className="px-8">Architecture • Interior • Landscape • Innovation •</span>
          </motion.div>
        </motion.section>

        {/* Second Section: Identical Heights */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row gap-6 mt-2"
        >
          {/* Tall Image Card */}
          <div className="w-full lg:w-[35%] h-[400px] lg:h-auto rounded-[2.5rem] overflow-hidden relative group">
            <Image
              src="/images/tall.png"
              alt="Classic Architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Satisfied Clients Card */}
          <div className="w-full lg:w-[65%] bg-white rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
            <div className="lg:absolute top-12 right-12 lg:text-right mb-10 lg:mb-0 z-10">
              <span className="text-navy/60 text-sm font-semibold block mb-2">Satisfied Clients</span>
              <h3 className="text-4xl font-bold tracking-tight">8.4M+</h3>
            </div>

            <div className="max-w-2xl mt-4 z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-8">
                We can bring to life everything you've ever envisioned and dreamed of — your ideals and desires are our creations.
              </h2>
              <p className="text-navy/70 text-base leading-relaxed mb-10 max-w-lg">
                Our purpose is to transform your wildest dreams into reality. Regardless of how unconventional your vision may be, we possess the capability to craft your dream home.
              </p>
              <Magnetic className="self-start inline-block">
                <button className="bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-navy/90 transition-colors tracking-wide">
                  See More
                </button>
              </Magnetic>
            </div>
            {/* Abstract bg element */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#f8f9fa] rounded-full blur-3xl z-0" />
          </div>
        </motion.section>

        {/* Our Process Section (New) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-[2.5rem] p-10 lg:p-16 flex flex-col"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discover", text: "We start by understanding your vision, lifestyle, and the unique characteristics of the site." },
              { num: "02", title: "Design", text: "Our team translates your desires into preliminary sketches and advanced 3D conceptual models." },
              { num: "03", title: "Develop", text: "We refine the design, selecting premium materials and ensuring structural and ecological integrity." },
              { num: "04", title: "Deliver", text: "Through rigorous oversight, we bring the vision to life, ensuring every detail is perfectly executed." },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                className="bg-[#f8f9fa] rounded-[2rem] p-8 flex flex-col h-full hover:bg-navy hover:text-white transition-colors duration-500 group"
                whileHover={{ y: -10 }}
              >
                <span className="text-3xl font-light text-navy/30 group-hover:text-white/30 mb-8 block transition-colors">{step.num}</span>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm leading-relaxed text-navy/70 group-hover:text-white/70 transition-colors">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-[2.5rem] p-10 lg:p-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "01", title: "Architecture\nDesign", desc: "The design of the structure holds substantial influence over the aesthetics, ambiance, and usability of an area.", dark: true },
              { id: "02", title: "Interior\nDetails", desc: "Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room.", dark: false },
              { id: "03", title: "Landscape\nIntegration", desc: "Seamlessly blending the built environment with nature, creating harmonious spaces that breathe life into your dwelling.", dark: false },
            ].map((service, i) => (
              <div
                key={i}
                className={`rounded-[2rem] p-8 flex flex-col h-full min-h-[350px] transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden ${service.dark ? 'bg-navy text-white' : 'bg-[#f8f9fa] text-navy'}`}
              >
                <motion.span
                  animate={service.dark ? { y: [0, -10, 0] } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className={`text-xl font-light self-end mb-12 ${service.dark ? 'text-accent' : ''}`}
                >
                  {service.id}
                </motion.span>
                <h3 className="text-3xl font-semibold mb-6 whitespace-pre-line leading-tight relative z-10">{service.title}</h3>
                <p className={`text-sm leading-relaxed mt-auto relative z-10 ${service.dark ? 'text-white/80' : 'text-navy/70'}`}>
                  {service.desc}
                </p>
                {service.dark && <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0" />}
              </div>
            ))}
          </div>
        </motion.section>

      </div>

      <Footer />
    </PageTransition>
  );
}
