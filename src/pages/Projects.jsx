import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Maximize2, DollarSign, ArrowRight, Home } from 'lucide-react'

// --- Color Configuration for Real Estate ---
const PRIMARY_COLOR_CLASS = 'text-blue-500'
const CTA_GRADIENT_CLASS = 'bg-gradient-to-r from-blue-500 to-cyan-600'
const CTA_HOVER_SHADOW = 'hover:shadow-2xl hover:shadow-blue-500/50'

// Dummy Data for Projects/Listings (Image property removed)
const projectData = [
  {
    id: 1,
    title: "Coastal Breeze Luxury Condo",
    location: "Miami Beach, FL",
    price: "$1,850,000",
    beds: 3,
    baths: 3,
    sqft: 2100,
    status: "SOLD",
  },
  {
    id: 2,
    title: "The Metropolitan Tower Penthouse",
    location: "Manhattan, NY",
    price: "$5,300,000",
    beds: 4,
    baths: 5,
    sqft: 3800,
    status: "Available",
  },
  {
    id: 3,
    title: "Silicon Valley Starter Home",
    location: "San Jose, CA",
    price: "$985,000",
    beds: 2,
    baths: 2,
    sqft: 1450,
    status: "Under Offer",
  },
  {
    id: 4,
    title: "Modern Suburban Estate",
    location: "Dallas, TX",
    price: "$2,100,000",
    beds: 5,
    baths: 4,
    sqft: 4500,
    status: "Available",
  },
]

// ----------------------------------------------------------------------
// Project Card Component (Updated to use a visual fallback)
// ----------------------------------------------------------------------
const ProjectCard = ({ project, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const statusColor = project.status === "SOLD" ? "bg-red-500/80" 
                    : project.status === "Under Offer" ? "bg-yellow-500/80" 
                    : "bg-green-500/80";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay }}
      className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all shadow-xl"
    >
      <div className="relative overflow-hidden">
        {/* --- Image Fallback Section --- */}
        <div className="w-full h-64 bg-slate-800 flex items-center justify-center border-b border-white/10">
          <Home className={`w-16 h-16 ${PRIMARY_COLOR_CLASS} opacity-50`} />
        </div>
        {/* ---------------------------- */}
        
        <div className={`absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full ${statusColor} backdrop-blur-sm`}>
          {project.status}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="flex items-center text-gray-400 mb-4 text-sm">
          <MapPin className="w-4 h-4 mr-2" /> {project.location}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-4 text-center border-t border-b border-white/10 py-4 mb-6">
          <div className="border-r border-white/10">
            <p className="text-xl font-bold text-white">{project.beds}</p>
            <p className="text-xs text-gray-500">Beds</p>
          </div>
          <div className="border-r border-white/10">
            <p className="text-xl font-bold text-white">{project.baths}</p>
            <p className="text-xs text-gray-500">Baths</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">{project.sqft.toLocaleString()} <span className="text-base text-gray-400">ft²</span></p>
            <p className="text-xs text-gray-500">Area</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-green-400 mr-1" />
            <span className="text-2xl font-extrabold text-white">{project.price}</span>
          </div>
          
          <a 
            href={`/projects/${project.id}`}
            className={`inline-flex items-center gap-2 font-semibold text-white px-4 py-2 rounded-lg ${CTA_GRADIENT_CLASS} transition-all ${CTA_HOVER_SHADOW}`}
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}


// ----------------------------------------------------------------------
// Main Projects Component
// ----------------------------------------------------------------------
const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="bg-black min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className={`text-lg font-semibold uppercase tracking-wider ${PRIMARY_COLOR_CLASS} mb-2`}>
              Our Portfolio
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4">
              Featured Properties & Listings
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore a curated selection of our most successful sales and exclusive current listings across key locations.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 0.15} />
            ))}
          </div>

          {/* Call to Action for More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-20"
          >
            <a
              href="/all-listings" // Change this to your full listings page route
              className={`inline-flex items-center gap-3 font-bold text-lg text-white px-8 py-4 rounded-xl ${CTA_GRADIENT_CLASS} transition-all ${CTA_HOVER_SHADOW}`}
            >
              View All Current Listings (40+)
              <Maximize2 className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects;