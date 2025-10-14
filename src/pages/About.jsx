import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
    Calendar,
    Award,
    Users,
    Building2,
    TrendingUp,
    Handshake,
    Star,
    Shield,
    Target,
    Eye,
    CheckCircle,
    GanttChartSquare,
    Home,
    Globe,
    MapPin
} from 'lucide-react'

// --- Color Configuration (Updated to use full Tailwind classes) ---
const PRIMARY_COLOR_CLASS = 'text-blue-500'
const SECONDARY_COLOR_CLASS = 'text-cyan-600'
const PRIMARY_ACCENT_CLASS = 'bg-blue-500/10 border-blue-500/20'
const GRADIENT_CLASS = 'bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-600'
const ACCENT_TEXT_CLASS = 'bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-600 bg-clip-text text-transparent'
const CTA_TEXT_COLOR_CLASS = 'text-blue-500' // Used for the button text in FutureGoals

const About = () => {
    return (
        <div className="bg-black">
            <AboutHero />
            <Timeline />
            <MissionVision />
            <Achievements />
            <Community />
            <FutureGoals />
        </div>
    )
}

// --- Hero Section ---
const AboutHero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center">
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* New Image/Theme for Real Estate */}
                <img
                    src="https://images.unsplash.com/photo-1592595896551-11885f817109?q=80&w=1920&auto=format&fit=crop"
                    alt="Modern cityscape and office"
                    className="w-full h-full object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    {/* Updated: Used PRIMARY_ACCENT_CLASS and PRIMARY_COLOR_CLASS constants */}
                    <div className={`inline-flex items-center gap-2 ${PRIMARY_ACCENT_CLASS} rounded-full px-4 py-2 mb-6`}>
                        <Calendar className={`w-4 h-4 ${PRIMARY_COLOR_CLASS}`} />
                        <span className={`text-sm font-medium ${PRIMARY_COLOR_CLASS}`}>Established 1995</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        Our Story
                        <span className={`block ${ACCENT_TEXT_CLASS}`}>
                            Built on Market Expertise
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                        From a dedicated local broker to a premier national agency, our foundation 
                        is built on unparalleled market knowledge and client trust.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: <Award />, value: '25+', label: 'Years in Real Estate' },
                            { icon: <Users />, value: '50', label: 'Expert Agents' },
                            { icon: <Home />, value: '1.5K+', label: 'Properties Sold' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                            >
                                {/* Updated: Used PRIMARY_COLOR_CLASS constant */}
                                <div className={`${PRIMARY_COLOR_CLASS} mb-3`}>{stat.icon}</div>
                                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
// ----------------------------------------------------------------------
// --- Timeline ---
// ----------------------------------------------------------------------
const Timeline = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const milestones = [
        {
            year: "1995",
            title: "Founding & First Sale",
            description: "Our founder, Elena, opened the first office focusing on revitalizing the downtown residential market. Our first client was a happy couple purchasing their first home.",
            image: "https://images.unsplash.com/photo-1544984243-7724d499e078?q=80&w=600&auto=format&fit=crop",
            icon: <Building2 />
        },
        {
            year: "2005",
            title: "Commercial Expansion",
            description: "Recognizing a market gap, we expanded into commercial real estate, facilitating the lease of three major corporate office towers.",
            image: "https://images.unsplash.com/photo-1502691763134-c7885b5cc450?q=80&w=600&auto=format&fit=crop",
            icon: <TrendingUp />
        },
        {
            year: "2010",
            title: "Tech-Forward Approach",
            description: "We launched our state-of-the-art virtual tour technology and data analytics platform, giving clients a decisive edge in negotiations.",
            image: "https://images.unsplash.com/photo-1588200618450-343555bb0579?q=80&w=600&auto=format&fit=crop",
            icon: <GanttChartSquare />
        },
        {
            year: "2018",
            title: "Regional Presence",
            description: "Opened branch offices in two neighboring metro areas, solidifying our reputation as the region's leading full-service agency.",
            image: "https://images.unsplash.com/photo-1557426719-fa30c926c04b?q=80&w=600&auto=format&fit=crop",
            icon: <MapPin />
        },
        {
            year: "2020",
            title: "Community Development",
            description: "Partnered with local city council to develop affordable housing initiatives, successfully placing 50 families into stable homes.",
            image: "https://images.unsplash.com/photo-1510972504997-7e61e687e812?q=80&w=600&auto=format&fit=crop",
            icon: <Handshake />
        },
        {
            year: "2024",
            title: "Achieved Luxury Tier",
            description: "Officially entered the luxury market, securing the exclusive listing for the historic 'River View Estate.' Our team grew to 50 elite agents.",
            image: "https://images.unsplash.com/photo-1628109923812-74728f328f65?q=80&w=600&auto=format&fit=crop",
            icon: <Star />
        }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                        Our Legacy in Development
                    </h2>
                    <p className="text-xl text-gray-400">
                        A history of turning client aspirations into reality
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Updated: Used GRADIENT_CLASS constant */}
                    <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px ${GRADIENT_CLASS}`} />

                    <div className="space-y-16">
                        {milestones.map((milestone, idx) => (
                            <TimelineCard 
                                key={idx} 
                                milestone={milestone} 
                                index={idx} 
                                isInView={isInView}
                                isRight={idx % 2 !== 0}
                                // Passed full class names, not just color strings
                                primaryColorClass={PRIMARY_COLOR_CLASS}
                                gradientClass={GRADIENT_CLASS}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Passed full class names to make Tailwind happy
const TimelineCard = ({ milestone, index, isInView, isRight, primaryColorClass, gradientClass }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className={`relative grid lg:grid-cols-2 gap-8 items-center ${isRight ? 'lg:grid-flow-dense' : ''}`}
        >
            {/* Year Badge - Center on timeline (Updated: Used class constants) */}
            <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 ${gradientClass} rounded-full items-center justify-center shadow-lg shadow-blue-500/50`}>
                <div className="text-center">
                    <div className="text-2xl font-black text-white">{milestone.year}</div>
                </div>
            </div>
    
            {/* Content */}
            <div className={`${isRight ? 'lg:col-start-2' : ''}`}>
                {/* Updated: Used full class for hover border */}
                <div className={`bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all`}>
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                        {/* Mobile Year Badge (Updated: Used GRADIENT_CLASS constant) */}
                        <div className={`w-16 h-16 ${gradientClass} rounded-xl flex items-center justify-center text-white font-black text-xl`}>
                            {milestone.year}
                        </div>
                        {/* Updated: Used PRIMARY_COLOR_CLASS constant */}
                        <div className={`${primaryColorClass}`}>{milestone.icon}</div>
                    </div>
                    
                    {/* Updated: Used PRIMARY_COLOR_CLASS constant */}
                    <div className={`hidden lg:block ${primaryColorClass} mb-4`}>{milestone.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
            </div>
    
            {/* Image */}
            <div className={`${isRight ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            </div>
        </motion.div>
    )
}

// ----------------------------------------------------------------------
// --- Mission & Vision ---
// ----------------------------------------------------------------------
const MissionVision = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const cards = [
        {
            icon: <Target className="w-12 h-12" />,
            title: "Our Mission",
            description: "To empower every client with data-driven insights and personalized service, ensuring they achieve their ideal real estate outcome—whether buying, selling, or investing.",
            // Updated: Used full class names
            color: "from-blue-500 to-cyan-600" 
        },
        {
            icon: <Eye className="w-12 h-12" />,
            title: "Our Vision",
            description: "To set the regional standard for ethical and professional real estate services, recognized for our commitment to transparent transactions and enduring client relationships.",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: <Globe className="w-12 h-12" />,
            title: "Our Philosophy",
            description: "Real estate is local, but knowledge should be global. We combine hyper-local expertise with world-class service standards to deliver exceptional value.",
            color: "from-amber-500 to-yellow-600"
        }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.2 }}
                            className="group"
                        >
                            <div className={`bg-gradient-to-br ${card.color} p-[2px] rounded-3xl`}>
                                <div className="bg-black rounded-3xl p-8 hover:bg-transparent transition-all h-full">
                                    <div className="text-white mb-6">{card.icon}</div>
                                    <h3 className="text-2xl font-black text-white mb-4">{card.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{card.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Achievements ---
// ----------------------------------------------------------------------
const Achievements = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const achievements = [
        { icon: <Award />, title: "Top Selling Brokerage 2021-2024", org: "Regional Market Analysis" },
        { icon: <Star />, title: "Client Satisfaction 5-Star Rated", org: "Google & Zillow Reviews" },
        { icon: <Shield />, title: "Certified Luxury Property Specialist", org: "Luxury Home Institute" },
        { icon: <Handshake />, title: "Trusted Community Partner Award", org: "Local Chamber of Commerce" },
        { icon: <CheckCircle />, title: "100% Client Referral Rate", org: "Internal Audit" },
        { icon: <TrendingUp />, title: "Highest Avg. Sale Price in County", org: "MLS Data" }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                        Recognition & Credentials
                    </h2>
                    <p className="text-xl text-gray-400">
                        Our commitment to excellence is backed by industry honors and data.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all`}
                        >
                            {/* Updated: Used PRIMARY_COLOR_CLASS constant */}
                            <div className={`${PRIMARY_COLOR_CLASS} mb-4`}>{achievement.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-sm text-gray-500">{achievement.org}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Community ---
// ----------------------------------------------------------------------
const Community = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1577561914275-c999ec76f92c?q=80&w=800&auto=format&fit=crop"
                            alt="Community event and local giving"
                            className="rounded-3xl shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Investing in Local Futures
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We believe a strong neighborhood is the best investment. Our work extends 
                            beyond closing deals to actively building better communities.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Sponsoring local park renovations and green initiatives",
                                "Providing pro-bono real estate consulting for local non-profits",
                                "Annual scholarship fund for high school students entering trade school",
                                "Hosting first-time homebuyer seminars free of charge",
                                "Actively supporting affordable housing development projects"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-gray-300 text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Future Goals ---
// ----------------------------------------------------------------------
const FutureGoals = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Updated: Used GRADIENT_CLASS constant */}
                <div className={`relative ${GRADIENT_CLASS} rounded-3xl p-12 md:p-16 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
                    </div>

                    <div className="relative text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            The Next Chapter: Innovation
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            We're pioneering the use of AI in property valuation, expanding our global investment 
                            network, and committing to 100% sustainable office operations.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            // Updated: Used CTA_TEXT_COLOR_CLASS constant
                            className={`bg-white ${CTA_TEXT_COLOR_CLASS} px-10 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-colors`}
                        >
                            See Our Current Projects
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About