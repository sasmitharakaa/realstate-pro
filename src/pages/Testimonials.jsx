import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Star } from 'lucide-react'

// --- Color Configuration ---
// Match colors used in Home.jsx for consistency
const PRIMARY_COLOR = 'blue-500'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Review data: Retaining the external avatar links for simplicity
  const reviews = [
    {
      name: "Olivia Chen",
      role: "Investment Buyer",
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
        {/* Section Header */}
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

        {/* Reviews Grid */}
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
                {/* Star Rating */}
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 fill-${PRIMARY_COLOR} text-${PRIMARY_COLOR}`} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar Image */}
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

export default Testimonials;