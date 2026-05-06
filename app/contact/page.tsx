import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="px-4 pt-32 pb-16 flex flex-col gap-6 max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <section className="bg-navy text-white rounded-[2.5rem] p-12 lg:p-20">
          <div className="max-w-3xl">
            <h1 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter leading-[1] mb-6">
              Let's create<br />something together.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Whether you have a specific project in mind or just want to explore possibilities, our team of experts is ready to collaborate.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
          
          {/* Direct Contact Info & Office */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[2.5rem] p-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-10">Get in touch</h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-navy/60 block mb-1">Email Us</span>
                    <a href="mailto:hello@emparial.com" className="text-xl font-bold hover:underline">hello@emparial.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-navy/60 block mb-1">Call Us</span>
                    <a href="tel:+1234567890" className="text-xl font-bold hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-navy/60 block mb-1">Headquarters</span>
                    <p className="text-xl font-bold">120 Architecture Ave,<br />Design District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="h-[300px] w-full rounded-[2.5rem] overflow-hidden relative group">
              <Image 
                src="/images/contact.png" 
                alt="Emparial Office" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#f8f9fa] rounded-[2.5rem] p-10 lg:p-16">
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-navy/80">First Name</label>
                  <input type="text" className="bg-white border-none rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-navy transition-shadow" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-navy/80">Last Name</label>
                  <input type="text" className="bg-white border-none rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-navy transition-shadow" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-navy/80">Email Address</label>
                <input type="email" className="bg-white border-none rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-navy transition-shadow" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-navy/80">Project Description</label>
                <textarea rows={5} className="bg-white border-none rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-navy transition-shadow resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>

              <Magnetic className="self-end mt-4">
                <button type="button" className="bg-navy text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-navy/90 transition-colors tracking-wide">
                  Submit Inquiry
                </button>
              </Magnetic>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
