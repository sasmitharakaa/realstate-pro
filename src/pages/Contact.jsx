import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2, // Replaced Wrench
  Home,      // Replaced Car
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
  ArrowRight,
  Key,       // New Icon for Property Key
  DollarSign // New Icon for Finance
} from 'lucide-react'

// --- Color Configuration for Real Estate ---
const PRIMARY_COLOR_CLASS = 'text-blue-500'
const PRIMARY_BG_CLASS = 'bg-blue-500'
const GRADIENT_CLASS = 'bg-gradient-to-r from-blue-500 to-cyan-600'
const ACCENT_TEXT_CLASS = 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'
const CTA_GRADIENT_CLASS = 'bg-gradient-to-r from-orange-500 to-red-600'
const CTA_HOVER_SHADOW = 'hover:shadow-2xl hover:shadow-orange-500/50'

// Main Contact Page Component
const Contact = () => {
  return (
    <div className="bg-black">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <FAQ />
    </div>
  )
}

// ----------------------------------------------------------------------
// Contact Hero Section
// ----------------------------------------------------------------------
const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {/* Updated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black" />
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-96 h-96 ${PRIMARY_BG_CLASS} rounded-full blur-[150px] opacity-30`} />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-30" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`inline-flex items-center gap-2 ${PRIMARY_BG_CLASS}/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6`}>
            <MessageSquare className={`w-4 h-4 ${PRIMARY_COLOR_CLASS}`} />
            <span className={`text-sm font-medium ${PRIMARY_COLOR_CLASS}`}>Your Real Estate Partner</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Get In Touch
            <span className={`block ${ACCENT_TEXT_CLASS}`}>
              Let's Find Your Dream Property
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to buy, sell, or invest? Contact our expert agents for personalized advice and market insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:5551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${CTA_GRADIENT_CLASS} text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${CTA_HOVER_SHADOW} transition-all`}
            >
              <Phone className="w-5 h-5" />
              Call Now: (555) 123-4567
            </motion.a>
            <motion.a
              href="#form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Inquiry
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ----------------------------------------------------------------------
// Contact Info Cards (Themed for Real Estate)
// ----------------------------------------------------------------------
const ContactInfo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Our Office",
      primary: "(555) 123-4567",
      secondary: "Mon-Fri: 9AM - 5PM",
      action: "tel:5551234567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Inquiries",
      primary: "info@eliteproperties.com",
      secondary: "We reply within 4 hours",
      action: "mailto:info@eliteproperties.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Location",
      primary: "456 Market St, Suite 101",
      secondary: "City, State 90210",
      action: "https://maps.google.com", // Placeholder URL
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Agent Availability",
      primary: "By Appointment Daily",
      secondary: "Weekend viewings available",
      action: null,
      color: "from-purple-500 to-indigo-600"
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <a
                href={method.action || '#'}
                className={`block bg-gradient-to-br ${method.color} p-[2px] rounded-2xl ${method.action ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="bg-slate-900 rounded-2xl p-8 hover:bg-transparent transition-all h-full">
                  <div className="text-white mb-6">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-400 mb-3">{method.title}</h3>
                  <p className="text-xl font-bold text-white mb-1">{method.primary}</p>
                  <p className="text-sm text-gray-500">{method.secondary}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ----------------------------------------------------------------------
// Contact Form (Themed for Real Estate)
// ----------------------------------------------------------------------
const ContactForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyType: '', // Renamed from 'vehicle'
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add actual form submission logic here (e.g., API call)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const InputClass = "w-full h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500 transition-all"
  const TextAreaClass = "w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"


  return (
    <section id="form" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Request Consultation
          </h2>
          <p className="text-xl text-gray-400">
            Tell us about your property goals and we'll connect you with a specialist
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={InputClass}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={InputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={InputClass}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={InputClass}
                  >
                    <option value="">Select your need</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investing">Real Estate Investment</option>
                    <option value="valuation">Property Valuation</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Preferred Property Type (Optional)
                </label>
                <input
                  type="text"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className={InputClass}
                  placeholder="e.g. Single-family, Condo, Commercial"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={TextAreaClass}
                  placeholder="Include details about location, budget, or specific questions..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full h-14 ${CTA_GRADIENT_CLASS} text-white font-bold rounded-xl ${CTA_HOVER_SHADOW} transition-all flex items-center justify-center gap-2`}
              >
                <Send className="w-5 h-5" />
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Info Side (Themed for Real Estate) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Response */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Response Time</h3>
                  <p className="text-gray-400">
                    A dedicated agent reviews every submission and typically responds within 4 business hours. 
                    For urgent listing questions, please call.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect (Real Estate Steps) */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Your Next Steps</h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Specialist contacts you to clarify needs' },
                  { step: '2', text: 'We prepare a customized market analysis' },
                  { step: '3', text: 'Schedule a free, non-binding consultation' },
                  { step: '4', text: 'Start viewing properties or listing your home' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`w-8 h-8 ${CTA_GRADIENT_CLASS} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {item.step}
                    </div>
                    <p className="text-gray-400 pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Our Listings</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook />, href: '#', color: 'hover:bg-blue-600' },
                  { icon: <Instagram />, href: '#', color: 'hover:bg-pink-600' },
                  { icon: <Twitter />, href: '#', color: 'hover:bg-sky-500' },
                  { icon: <Youtube />, href: '#', color: 'hover:bg-red-600' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ----------------------------------------------------------------------
// Map Section (Themed for Real Estate)
// ----------------------------------------------------------------------
const MapSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Our Office Location
          </h2>
          <p className="text-xl text-gray-400">
            Visit us to discuss your property needs face-to-face
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Map Placeholder */}
          <div className="aspect-video bg-slate-900 flex items-center justify-center">
            <div className="text-center">
              <MapPin className={`w-16 h-16 ${PRIMARY_COLOR_CLASS} mx-auto mb-4`} />
              <p className="text-white font-bold text-xl mb-2">456 Market St, Suite 101</p>
              <p className="text-gray-400 mb-4">City, State 90210</p>
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 ${CTA_GRADIENT_CLASS} text-white px-6 py-3 rounded-xl font-bold`}
              >
                Get Directions
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Office/Service Info (Real Estate) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          {[
            { icon: <Key />, title: 'Private Consultations', desc: 'Book a one-on-one session' },
            { icon: <DollarSign />, title: 'Financial Services', desc: 'In-house mortgage and finance help' },
            { icon: <Building2 />, title: 'Local Expertise', desc: 'Serving all surrounding neighborhoods' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className={`${PRIMARY_COLOR_CLASS} mb-3 flex justify-center`}>{feature.icon}</div>
              <h3 className="font-bold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ----------------------------------------------------------------------
// FAQ Section (Themed for Real Estate)
// ----------------------------------------------------------------------
const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "How do I start the buying process?",
      a: "The first step is a free consultation to determine your needs and financial readiness (pre-approval). We then set up customized property searches."
    },
    {
      q: "What is my property worth in the current market?",
      a: "We offer a complimentary Comparative Market Analysis (CMA) based on recent sales in your area to give you a highly accurate valuation."
    },
    {
      q: "Do you handle property management?",
      a: "While our primary focus is sales, we partner with top local property management firms and can connect you with trusted experts."
    },
    {
      q: "How long does the closing process typically take?",
      a: "The timeline varies, but once an offer is accepted, closings typically take 30 to 45 days, depending on financing and contingencies."
    }
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Quick Answers
          </h2>
          <p className="text-xl text-gray-400">
            Frequently Asked Real Estate Questions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${PRIMARY_COLOR_CLASS} flex-shrink-0`}
                >
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? 'auto' : 0,
                  opacity: openIndex === idx ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact