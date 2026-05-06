import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="px-4 pt-32 pb-16 flex flex-col gap-6 max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <section className="bg-white rounded-[2.5rem] p-12 lg:p-20 text-center">
          <h1 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter leading-[1.05] mb-8">
            Shaping the<br />World Around Us
          </h1>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to redefine the architectural landscape, Emparial blends timeless design principles with cutting-edge sustainable technology to create spaces that inspire.
          </p>
        </section>

        {/* Our Philosophy (Image & Text Split) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden relative group">
            <Image 
              src="/images/about.png" 
              alt="Our Philosophy" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          <div className="bg-[#f8f9fa] rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-navy/60 text-sm font-semibold mb-4">Our Philosophy</span>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.1] mb-8">
              We believe in architecture that respects the environment and elevates the human spirit.
            </h2>
            <p className="text-navy/70 text-base leading-relaxed mb-6">
              Our approach is holistic. We don't just design buildings; we create ecosystems. Every material chosen, every line drawn, is meticulously considered for its impact on both the occupants and the surrounding environment.
            </p>
            <p className="text-navy/70 text-base leading-relaxed mb-10">
              With a decade of excellence, our portfolio spans across continents, reflecting a universal language of elegance, functionality, and enduring quality.
            </p>
            <Magnetic className="self-start">
              <button className="bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-navy/90 transition-colors tracking-wide">
                Read Full Story
              </button>
            </Magnetic>
          </div>
        </section>

        {/* Core Team */}
        <section className="bg-white rounded-[2.5rem] p-10 lg:p-16 mt-6">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12">Core Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Eleanor Wright", role: "Principal Architect", img: "/images/tall.png" },
              { name: "David Chen", role: "Head of Sustainability", img: "/images/main.png" },
              { name: "Sarah Jenkins", role: "Lead Interior Designer", img: "/images/tall.png" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col group cursor-pointer">
                <div className="w-full h-[400px] relative rounded-[2rem] overflow-hidden mb-6">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-navy/60 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline placeholder */}
        <section className="bg-navy text-white rounded-[2.5rem] p-12 lg:p-24 flex flex-col items-center text-center mt-6">
           <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">A Legacy of Innovation</h2>
           <p className="text-white/80 max-w-2xl text-lg leading-relaxed mb-12">Since 2012, we have completed over 150 groundbreaking projects globally, winning 42 international design awards and setting new benchmarks for eco-friendly construction.</p>
           <Magnetic>
              <button className="bg-white text-navy px-10 py-4 rounded-full text-sm font-bold hover:bg-white/90 transition-colors tracking-wide">
                View Timeline
              </button>
            </Magnetic>
        </section>

      </div>
      <Footer />
    </PageTransition>
  );
}
