import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find next project for CTA
  const currentIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <div className="pt-32 pb-16">
        {/* Header Title */}
        <div className="px-4 max-w-[1600px] mx-auto mb-12">
          <h1 className="text-[3rem] md:text-[6rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="bg-white/10 px-6 py-2 rounded-full text-white font-medium border border-white/20">
              {project.category}
            </span>
            <span className="bg-white/10 px-6 py-2 rounded-full text-white font-medium border border-white/20">
              {project.stats.location}
            </span>
          </div>
        </div>

        {/* Massive Hero Image */}
        <div className="px-4 max-w-[1600px] mx-auto mb-20">
          <div className="w-full h-[60vh] md:h-[80vh] relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
            <Image 
              src={project.coverImage} 
              alt={project.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          
          {/* Sticky Stats Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 text-navy">
              <h3 className="text-xl font-bold mb-6 md:mb-8">Project Details</h3>
              <div className="flex flex-col gap-6">
                <div className="border-b border-navy/10 pb-4">
                  <span className="text-navy/50 text-sm font-semibold uppercase tracking-wider block mb-1">Year</span>
                  <span className="text-lg font-medium">{project.stats.year}</span>
                </div>
                <div className="border-b border-navy/10 pb-4">
                  <span className="text-navy/50 text-sm font-semibold uppercase tracking-wider block mb-1">Location</span>
                  <span className="text-lg font-medium">{project.stats.location}</span>
                </div>
                <div className="border-b border-navy/10 pb-4">
                  <span className="text-navy/50 text-sm font-semibold uppercase tracking-wider block mb-1">Area</span>
                  <span className="text-lg font-medium">{project.stats.area}</span>
                </div>
                {project.stats.capitalRaised && (
                  <div className="border-b border-navy/10 pb-4">
                    <span className="text-navy/50 text-sm font-semibold uppercase tracking-wider block mb-1">Capital Raised</span>
                    <span className="text-lg font-medium">{project.stats.capitalRaised}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Description */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-16 text-navy h-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight">Concept & Execution</h2>
              <p className="text-navy/80 text-lg leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="px-4 max-w-[1600px] mx-auto mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 tracking-tight text-white px-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div 
                key={i} 
                className={`relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden ${
                  i === 0 ? "md:col-span-2 h-[300px] md:h-[500px] lg:h-[700px]" : "h-[250px] md:h-[400px] lg:h-[500px]"
                }`}
              >
                <Image src={img} alt={`Gallery ${i+1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Banner */}
        <div className="px-4 max-w-[1600px] mx-auto mb-16">
          <Link href={`/project/${nextProject.slug}`} className="block group relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-24 overflow-hidden">
            <div className="relative z-10 text-navy flex flex-col items-center text-center">
              <span className="text-navy/60 text-sm font-semibold uppercase tracking-wider mb-4 block">Next Project</span>
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-navy to-navy/50 transition-colors duration-500">
                {nextProject.title}
              </h2>
              <Magnetic>
                <div className="bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold">
                  Explore Now
                </div>
              </Magnetic>
            </div>
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
