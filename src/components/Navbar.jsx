import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  // Updated icons for a Real Estate context
  Building2, // Replaces Wrench for the logo
  Menu,
  X,
  Phone,
  Home, // For Projects
  Users, // For Testimonials
  Briefcase, // For About Us
  ChevronDown,
  MapPin,
  Clock,
  Mail // Replaces ShoppingCart for a contact/inquiry button
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Removed cartCount as it's not relevant for a Real Estate site.
  // const [cartCount] = useState(3)
  const location = useLocation()

  // Constants for re-used styles
  const PRIMARY_COLOR = 'blue-500' // New main brand color
  const SECONDARY_COLOR = 'cyan-600' // New secondary brand color
  const GRADIENT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} to-${SECONDARY_COLOR}`
  const SHADOW_CLASS = `shadow-lg shadow-${PRIMARY_COLOR}/30 hover:shadow-${PRIMARY_COLOR}/50`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Updated Navigation Links (per user request)
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: Building2 }, // Used Building2 for Projects
    { name: 'Testimonials', path: '/testimonials', icon: Users },
    
  ]

  // Dropdown links for the 'About' section
  const aboutDropdownLinks = [
    { name: 'About Us', path: '/About ' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <>
      {/* Navbar Container */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50' 
            : 'bg-transparent'
        }`}
      >
        {/* Top Info Bar - Only show when not scrolled */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-b border-white/10 overflow-hidden bg-slate-900/50 backdrop-blur-sm"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 text-${PRIMARY_COLOR}`} />
                    <span>456 Property Ave, Suite 101, NY</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <Clock className={`w-4 h-4 text-${PRIMARY_COLOR}`} />
                    <span>Mon-Fri: 9AM - 5PM | Sat: By Appointment</span>
                  </div>
                  <div className="hidden md:block">
                    <span className={`text-${PRIMARY_COLOR} font-semibold`}>Schedule a property tour today!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative z-50">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Logo Gradient and Icon updated to blue/cyan and Building2 */}
                <div className={`absolute inset-0 ${GRADIENT_CLASS} blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                <div className={`relative ${GRADIENT_CLASS} p-2.5 rounded-xl`}>
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </motion.div>
              <div>
                <span className={`text-2xl font-black ${GRADIENT_CLASS} bg-clip-text text-transparent`}>
                  REALESTATE PRO
                </span>
                <div className="text-[10px] text-gray-400 -mt-1 font-medium">
                  Connecting Dreams with Addresses
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Primary Links */}
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-2 group"
                  >
                    <span className={`relative z-10 font-semibold transition-colors ${
                      isActive ? `text-${PRIMARY_COLOR}` : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    {/* Active Indicator Color Updated */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute inset-0 ${GRADIENT_CLASS}/10 rounded-lg border border-${PRIMARY_COLOR}/20`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                )
              })}
              
              {/* Dropdown for About / Story / Contact */}
              <div className="relative group">
                {/* The 'About' link now serves as the dropdown trigger */}
                <button className={`px-4 py-2 text-gray-300 font-semibold hover:text-white transition-colors flex items-center gap-1 ${
                  aboutDropdownLinks.some(link => location.pathname.startsWith(link.path)) ? `text-${PRIMARY_COLOR}` : ''
                }`}>
                  About
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/50 backdrop-blur-xl">
                    {aboutDropdownLinks.map(link => (
                        <Link 
                          key={link.name}
                          to={link.path} 
                          className={`block px-4 py-3 text-gray-300 hover:text-${PRIMARY_COLOR} hover:bg-white/5 transition-colors ${
                            location.pathname === link.path ? `text-${PRIMARY_COLOR} font-medium` : ''
                          }`}
                        >
                          {link.name}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              
              {/* Call Button - Desktop */}
              <motion.a
                href="tel:+18005557325" // Updated phone number for a Real Estate theme
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden lg:flex items-center gap-2 ${GRADIENT_CLASS} text-white px-5 py-2.5 rounded-xl font-bold ${SHADOW_CLASS} transition-all`}
              >
                <Phone className="w-4 h-4" />
                <span>Call (800) 555-REAL</span>
              </motion.a>
              
              {/* Inquiry/Contact Button (Replaces Shopping Cart) */}
              <Link
                to="/contact"
                className={`flex relative p-2 text-gray-300 hover:text-${PRIMARY_COLOR} transition-colors`}
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Make an Inquiry</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-50 p-2 text-white"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-slate-900 to-black border-l border-white/10 z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-24">
                {/* Mobile Nav Links */}
                <div className="space-y-2 mb-8">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path
                    const Icon = link.icon
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold text-lg transition-all ${
                            isActive
                              ? `${GRADIENT_CLASS} text-white ${SHADOW_CLASS}`
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <Icon className='w-5 h-5'/>
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* Mobile About Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="space-y-2 pt-4"
                  >
                    <div className="px-4 py-2 text-gray-500 text-sm font-semibold uppercase">
                        More Information
                    </div>
                    {aboutDropdownLinks.map(link => (
                        <Link 
                            key={link.name}
                            to={link.path} 
                            className={`block px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-all ${
                                location.pathname === link.path ? `bg-white/5 text-${PRIMARY_COLOR}` : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                  </motion.div>
                </div>

                {/* Mobile Contact Button (Prominent Call to Action) */}
                <motion.a
                  href="tel:+18005557325"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`flex items-center justify-center gap-2 w-full ${GRADIENT_CLASS} text-white px-6 py-4 rounded-xl font-bold ${SHADOW_CLASS} mb-6`}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (800) 555-REAL</span>
                </motion.a>

                {/* Mobile Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-white/10 space-y-4"
                >
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className={`w-5 h-5 text-${PRIMARY_COLOR} flex-shrink-0 mt-0.5`} />
                    <div>
                      <div className="font-semibold text-white mb-1">Our Office</div>
                      <div className="text-sm">456 Property Ave, Suite 101<br />New York, NY 10001</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <Clock className={`w-5 h-5 text-${PRIMARY_COLOR} flex-shrink-0 mt-0.5`} />
                    <div>
                      <div className="font-semibold text-white mb-1">Office Hours</div>
                      <div className="text-sm">
                        Mon-Fri: 9:00 AM - 5:00 PM<br />
                        Saturday: By Appointment
                      </div>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar