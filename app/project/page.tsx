import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const gridProjects = projects.filter(p => !p.featured);

  return (
    <PageTransition>
      <div className="px-4 pt-32 pb-16 flex flex-col gap-6 max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-[2.5rem] p-10 lg:p-20 relative overflow-hidden group">
          <div className="relative z-10">
            <h1 className="text-[3.5rem] md:text-[5rem] font-bold tracking-tighter leading-[1] mb-8">
              Selected<br />Projects
            </h1>
            <p className="text-navy/70 text-lg max-w-2xl leading-relaxed">
              Discover a curated selection of our finest architectural endeavors. From avant-garde residential homes to sustainable urban developments, each project represents our commitment to exceptional design and craftsmanship.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:scale-105 transition-transform duration-1000 z-0">
            <Image src="/images/main.png" alt="Projects bg" fill className="object-cover" />
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-navy/60 text-sm font-semibold mb-4">Featured Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">{featuredProject.title}</h2>
            <p className="text-navy/70 text-base leading-relaxed mb-10">
              {featuredProject.shortDescription}
            </p>
            <Magnetic className="self-start">
              <Link href={`/project/${featuredProject.slug}`} className="bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-navy/90 transition-colors tracking-wide inline-block">
                View Case Study
              </Link>
            </Magnetic>
          </div>
          <Link href={`/project/${featuredProject.slug}`} className="block h-[400px] lg:h-auto min-h-[500px] rounded-[2.5rem] overflow-hidden relative group">
            <Image 
              src={featuredProject.coverImage} 
              alt={featuredProject.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
            />
          </Link>
        </div>

        {/* Masonry-style Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {gridProjects.map((project, i) => (
            <Link 
              href={`/project/${project.slug}`}
              key={project.id} 
              className={`${project.heightClass || 'h-[500px]'} block rounded-[2.5rem] overflow-hidden relative group cursor-pointer ${i % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <Image 
                src={project.coverImage} 
                alt={project.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white/80 text-sm font-medium block mb-2">{project.category}</span>
                <h3 className="text-white text-3xl font-bold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-navy rounded-[2.5rem] p-12 lg:p-24 text-center mt-12 flex flex-col items-center">
          <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight mb-8">Ready to start your project?</h2>
          <Magnetic>
            <button className="bg-white text-navy px-10 py-4 rounded-full text-sm font-bold hover:bg-white/90 transition-colors tracking-wide">
              Let's Talk
            </button>
          </Magnetic>
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
