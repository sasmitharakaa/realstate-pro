import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Building2,
  Home as HomeIcon,
  MapPin,
  Shield, 
  Clock, 
  Award,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Key,
  LayoutGrid,
  DollarSign,
  TrendingUp,
  Users,
  Heart,
  Play
} from 'lucide-react'

// --- Color Configuration ---
const PRIMARY_COLOR = 'blue-500'
const SECONDARY_COLOR = 'cyan-600'
const GRADIENT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} to-${SECONDARY_COLOR}`
const ACCENT_TEXT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} via-blue-500 to-${SECONDARY_COLOR} bg-clip-text text-transparent`

const Home = () => {
  return (
    <div className="bg-black overflow-hidden">
      <HeroSection />
      <BentoServices />
      <PropertyGallery />
      <AboutSection />
      <ReviewsSection />
      <BookingSection />
    </div>
  )
}

// --- Hero Section ---
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden"
    >
      {/* Gradient orb that follows mouse */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className={`inline-flex items-center gap-2 bg-${PRIMARY_COLOR}/10 border border-${PRIMARY_COLOR}/20 rounded-full px-4 py-2 mb-6`}>
                <TrendingUp className={`w-4 h-4 text-${PRIMARY_COLOR}`} />
                <span className={`text-sm font-medium text-${PRIMARY_COLOR}`}>Leading the market with 25+ years experience</span>
              </div> */}
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Your Next
                <br />
                <span className="relative inline-block">
                  <span className={`relative z-10 ${ACCENT_TEXT_CLASS}`}>
                    Dream Home
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`absolute bottom-2 left-0 h-3 bg-${PRIMARY_COLOR}/30 -z-0`}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed max-w-lg"
            >
              We connect you with premier properties and expert market analysis. 
              Find your next investment or forever home with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className={`group relative px-8 py-4 ${GRADIENT_CLASS} rounded-xl font-bold text-white overflow-hidden`}>
                <span className="relative z-10 flex items-center gap-2">
                  View Listings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform`} />
              </button>

              <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
                <Play className="w-5 h-5" />
                Virtual Tour
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              {[
                { icon: <TrendingUp className="w-5 h-5" />, value: '98%', label: 'Sale-to-List Ratio' },
                { icon: <Users className="w-5 h-5" />, value: '250+', label: 'Active Clients' },
                { icon: <Award className="w-5 h-5" />, value: '25yr', label: 'Local Expertise' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`text-${PRIMARY_COLOR}`}>{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Image placeholder with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Placeholder instead of the Hero Image */}
              {/* <div
                className="rounded-3xl w-full h-[600px] object-cover shadow-2xl bg-slate-800 flex items-center justify-center text-gray-500 font-bold"
              >
                [Image Placeholder]
              </div> */}
              
              {/* Floating cards */}
              <FloatingCard 
                delay={0}
                className="absolute -left-8 top-20"
              >
                <Key className={`w-6 h-6 text-${PRIMARY_COLOR} mb-2`} />
                <p className="text-sm font-bold text-white">Mortgage Prequal</p>
                <p className="text-xs text-gray-400">24hr approval</p>
              </FloatingCard>

              <FloatingCard 
                delay={0.2}
                className="absolute -right-8 top-40"
              >
                <MapPin className="w-6 h-6 text-green-500 mb-2" />
                <p className="text-sm font-bold text-white">Local Experts</p>
                <p className="text-xs text-gray-400">Neighborhood deep dive</p>
              </FloatingCard>

              <FloatingCard 
                delay={0.4}
                className="absolute -left-8 bottom-32"
              >
                <Shield className="w-6 h-6 text-yellow-500 mb-2" />
                <p className="text-sm font-bold text-white">Client Protection</p>
                <p className="text-xs text-gray-400">Guaranteed service</p>
              </FloatingCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className={`absolute top-1/4 left-10 w-72 h-72 bg-${PRIMARY_COLOR}/20 rounded-full blur-[100px] animate-pulse`} />
      <div className={`absolute bottom-1/4 right-10 w-96 h-96 bg-${SECONDARY_COLOR}/20 rounded-full blur-[120px] animate-pulse`} style={{ animationDelay: '1s' }} />
    </section>
  )
}

// Floating card component
const FloatingCard = ({ children, delay, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }}
      className={`bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

// --- Bento Grid Services ---
const BentoServices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Sell My Property",
      description: "Advanced valuation and staging for a premium sale price.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: `from-${PRIMARY_COLOR} to-${SECONDARY_COLOR}`,
      size: "lg:col-span-2 lg:row-span-2",
      image: true // Use boolean to indicate a background should exist
    },
    {
      title: "Buy a Home",
      description: "Access to off-market and exclusive listings.",
      icon: <HomeIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      size: "lg:col-span-1",
      image: null
    },
    {
      title: "Investment & Flipping",
      description: "Data-driven ROI analysis on potential properties.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      size: "lg:col-span-1",
      image: null
    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl lg:text-6xl font-black text-white mb-4"
          >
            Your Full-Service Agency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Residential, Commercial, and Investment opportunities
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`group relative ${service.size} rounded-3xl overflow-hidden bg-gradient-to-br ${service.color} p-[1px] hover:scale-[1.02] transition-transform cursor-pointer`}
            >
              <div className="h-full w-full bg-slate-900 rounded-3xl p-6 relative overflow-hidden">
                {service.image && (
                  // Image Placeholder Background
                  <div 
                    className="absolute inset-0 w-full h-full bg-slate-700 opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                )}
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`inline-block p-3 bg-gradient-to-br ${service.color} rounded-2xl mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                  
                  <div className={`flex items-center text-${PRIMARY_COLOR} font-semibold group-hover:gap-2 transition-all`}>
                    View Strategy 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Property Gallery (Replaces Parts Gallery) ---
const PropertyGallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const properties = [
    { 
      name: "River View Estate", 
      category: "Luxury Residential",
      price: "$2.5M",
      image: true,
      badge: "Featured"
    },
    { 
      name: "Downtown Condo", 
      category: "Urban Living",
      price: "$450K",
      image: true,
      badge: "New"
    },
    { 
      name: "Commerce Tower Floor 3", 
      category: "Commercial Lease",
      price: "$15K/Mo",
      image: true,
      badge: "Hot"
    },
    { 
      name: "Suburban Family Home", 
      category: "Residential",
      price: "$749K",
      image: true,
      badge: null
    },
  ]

  return (
    <section id="properties" ref={ref} className="py-24 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="text-4xl lg:text-6xl font-black text-white mb-2"
            >
              Exclusive Listings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Properties you won't find anywhere else
            </motion.p>
          </div>
          <button className={`hidden sm:block text-${PRIMARY_COLOR} font-semibold hover:gap-2 flex items-center gap-1 transition-all`}>
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                {property.badge && (
                  <div className={`absolute top-4 left-4 z-10 bg-${PRIMARY_COLOR} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {property.badge}
                  </div>
                )}
                {/* Image Placeholder */}
                <div
                  className="w-full h-64 bg-slate-700/50 flex items-center justify-center text-gray-500 font-bold group-hover:scale-110 transition-transform duration-500"
                >
                
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <div>
                <p className={`text-sm text-${PRIMARY_COLOR} font-semibold mb-1`}>{property.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{property.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{property.price}</span>
                  <button className={`bg-white/10 hover:bg-${PRIMARY_COLOR} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all`}>
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- About Section ---
const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const features = [
    { icon: <Award className="w-6 h-6" />, title: "Award-Winning Agents", desc: "Top 1% of agents nationwide" },
    { icon: <Clock className="w-6 h-6" />, title: "Rapid Closing", desc: "Average closing time 30 days" },
    { icon: <Shield className="w-6 h-6" />, title: "Full Legal Support", desc: "In-house contract and escrow experts" },
    { icon: <Heart className="w-6 h-6" />, title: "Client First Ethos", desc: "Relationship-focused service" },
  ]

  return (
    <section id="about" ref={ref} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ scale, opacity }}
            className="relative"
          >
            {/* Image Glow Color Updated */}
            <div className={`absolute -inset-4 bg-gradient-to-r from-${PRIMARY_COLOR} to-${SECONDARY_COLOR} rounded-3xl blur-2xl opacity-20`} />
            {/* Image Placeholder */}
            {/* <div
              className="relative rounded-3xl shadow-2xl bg-slate-800 h-96 flex items-center justify-center text-gray-500 font-bold"
            >
              [Team Photo Placeholder]
            </div> */}
          </motion.div>

          <div className="space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-4xl lg:text-5xl font-black text-white mb-4"
              >
                Why Elite Clients Choose Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                We go beyond transactions. We offer strategic advice, exclusive access, 
                and a commitment to maximizing your real estate portfolio's potential.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-${PRIMARY_COLOR} to-${SECONDARY_COLOR} rounded-xl flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="group bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <a href="/story">Meet Our Team</a>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Reviews Section ---
const ReviewsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const reviews = [
    {
      name: "Olivia Chen",
      role: "Investment Buyer",
      // Placeholder avatar, still using external link as it's a simple, non-critical asset
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "Their market analysis was invaluable. Secured a property 10% under asking price. True professionals.",
      verified: true
    },
    {
      name: "Robert Kelly",
      role: "First-Time Homeowner",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 5,
      text: "The process felt complex, but my agent guided me every step. Found my dream home within two months.",
      verified: true
    },
    {
      name: "Sara Miller",
      role: "Commercial Seller",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      rating: 5,
      text: "Sold my commercial property quickly and discreetly. Their network is top-tier. Highly recommended.",
      verified: true
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by buyers and sellers across the region
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15 }}
              className={`bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 hover:border-${PRIMARY_COLOR}/50 transition-all`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 fill-${PRIMARY_COLOR} text-${PRIMARY_COLOR}`} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white">{review.name}</h4>
                    {review.verified && (
                      <CheckCircle className={`w-4 h-4 text-green-500`} />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Booking CTA (Contact CTA) ---
const BookingSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`${GRADIENT_CLASS} rounded-3xl p-12 md:p-16 text-center relative overflow-hidden`}>
          <motion.div
            style={{ y }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Discuss Your Goals?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with a market expert to start your real estate journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`group bg-white text-${PRIMARY_COLOR} px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl`}>
                <span className="flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (555) 987-6543
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home