export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  stats: {
    year: string;
    location: string;
    area: string;
    capitalRaised?: string;
  };
  featured?: boolean;
  heightClass?: string;
}

export const projects: Project[] = [
  {
    id: "emerald-heights",
    slug: "emerald-heights-residence",
    title: "The Emerald Heights Residence",
    category: "Residential",
    coverImage: "/images/main.png",
    gallery: ["/images/main.png", "/images/tall.png", "/images/main.png"],
    shortDescription: "Situated on a steep hillside, this project required innovative structural solutions to maximize the breathtaking views while maintaining ecological harmony.",
    fullDescription: "The Emerald Heights Residence is a testament to the seamless integration of modern architecture with rugged natural topography. Designed to cantilever over a steep hillside, the home offers unobstructed, 180-degree panoramic views of the valley below. The material palette was strictly curated to include sustainably sourced native timber, raw exposed concrete, and massive low-e glass panels. This design not only minimizes the ecological footprint but ensures the home feels like a natural extension of the surrounding forest. The interior spaces flow organically, utilizing open-plan architecture to maximize natural light and cross-ventilation.",
    stats: {
      year: "2024",
      location: "Pacific Northwest",
      area: "8,500 sq ft",
      capitalRaised: "$4.2M"
    },
    featured: true,
  },
  {
    id: "lumina-tower",
    slug: "lumina-tower",
    title: "Lumina Tower",
    category: "Commercial",
    coverImage: "/images/tall.png",
    gallery: ["/images/tall.png", "/images/main.png", "/images/tall.png"],
    shortDescription: "A groundbreaking commercial skyscraper redefining the city skyline with its twisting, sun-tracking glass facade.",
    fullDescription: "Lumina Tower stands as a beacon of sustainable commercial architecture in the heart of the financial district. Its signature twisting facade isn't just an aesthetic triumph; the dynamic rotation was engineered to optimize solar heat gain and natural daylight throughout the day. Featuring automated louver systems and a fully integrated smart-grid ecosystem, Lumina Tower achieves net-zero energy consumption. The interior features sweeping, double-height collaborative spaces, sky-gardens every ten floors, and a structural exoskeleton that eliminates the need for interior load-bearing columns.",
    stats: {
      year: "2023",
      location: "Downtown Core",
      area: "450,000 sq ft",
      capitalRaised: "$125M"
    },
    heightClass: "h-[500px] lg:h-[600px]",
  },
  {
    id: "oceanfront-villa",
    slug: "oceanfront-villa",
    title: "Oceanfront Villa",
    category: "Residential",
    coverImage: "/images/main.png",
    gallery: ["/images/main.png", "/images/tall.png", "/images/main.png", "/images/main.png"],
    shortDescription: "A luxurious coastal retreat designed to withstand the elements while providing a serene, minimalist sanctuary.",
    fullDescription: "Set against the dramatic backdrop of the rugged coastline, the Oceanfront Villa is an exercise in restraint and elegance. The design employs a series of horizontal planes that echo the ocean horizon, constructed from marine-grade architectural concrete and salt-resistant weathering steel. The boundaries between indoor and outdoor living are entirely dissolved via 40-foot retractable glass walls. The home features a cantilevered infinity pool that visually merges with the sea, and a deeply buried foundation system engineered to withstand category 5 hurricane forces without compromising its delicate aesthetic.",
    stats: {
      year: "2025",
      location: "Coastal Highway",
      area: "6,200 sq ft",
    },
    heightClass: "h-[450px]",
  },
  {
    id: "urban-oasis",
    slug: "urban-oasis",
    title: "Urban Oasis",
    category: "Mixed-Use",
    coverImage: "/images/main.png",
    gallery: ["/images/main.png", "/images/main.png"],
    shortDescription: "A dense urban block transformed into a breathable, multi-layered community hub with cascading vertical gardens.",
    fullDescription: "The Urban Oasis project reimagines high-density city living. By carving out massive interior courtyards and employing a terraced, ziggurat-like massing strategy, every residential and commercial unit receives direct sunlight and private green space. The project features over 50,000 square feet of cascading vertical gardens that act as the city's lungs, actively filtering urban air pollution. The ground level is fully pedestrianized, offering a fluid mix of retail, artisanal dining, and public amphitheatres, creating a vibrant micro-community within the larger metropolis.",
    stats: {
      year: "2022",
      location: "Metro District",
      area: "120,000 sq ft",
      capitalRaised: "$45M"
    },
    heightClass: "h-[500px]",
  },
  {
    id: "zen-pavilion",
    slug: "zen-pavilion",
    title: "Zen Pavilion",
    category: "Cultural",
    coverImage: "/images/tall.png",
    gallery: ["/images/tall.png", "/images/main.png", "/images/tall.png"],
    shortDescription: "A meditative cultural center built entirely from interlocking, mortarless timber joints inspired by ancient temple architecture.",
    fullDescription: "Designed as a retreat for contemplation and cultural exhibitions, the Zen Pavilion floats above a shallow reflection pool. The entire structure was erected using advanced robotic fabrication combined with traditional, mortarless timber joinery techniques—meaning not a single steel nail or screw was used in the primary frame. The slatted wooden facade acts as a delicate screen, filtering harsh sunlight into a soft, dappled glow that dances across the polished stone floors as the day progresses. The acoustic design ensures near absolute silence within the main meditation halls.",
    stats: {
      year: "2024",
      location: "Botanical Gardens",
      area: "12,000 sq ft",
      capitalRaised: "$8.5M"
    },
    heightClass: "h-[550px] lg:h-[650px]",
  }
];
