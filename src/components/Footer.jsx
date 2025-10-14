import { motion } from 'framer-motion'
// Using lucide-react icons relevant to Real Estate
import { Home, Building2, Users, Briefcase, Globe, Mail, Phone, MapPin } from 'lucide-react'
import { Facebook, Twitter, Instagram } from 'lucide-react' // Social media icons remain useful

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Updated structure for a Real Estate website
  const footerSections = [
    {
      title: 'Quick Links',
      // Links based on your request: home, projects, testimonials, about, contact us
      links: [
        { text: 'Home', icon: <Home className="w-4 h-4" /> },
        { text: 'Projects', icon: <Building2 className="w-4 h-4" /> },
        { text: 'Testimonials', icon: <Users className="w-4 h-4" /> },
        { text: 'About Us', icon: <Briefcase className="w-4 h-4" /> },
        { text: 'Contact Us', icon: <Mail className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Popular Locations',
      // Real Estate specific links
      links: ['New York City', 'Miami Beach', 'Los Angeles', 'Seattle', 'Denver']
    },
    {
      title: 'Contact Info',
      // Contact info remains similar, but updated for Real Estate
      links: [
        { icon: <Phone className="w-4 h-4" />, text: '+1 (800) 555-REAL' },
        { icon: <Mail className="w-4 h-4" />, text: 'contact@realestatename.com' },
        { icon: <MapPin className="w-4 h-4" />, text: '456 Property Ave, Suite 101, NY' }
      ]
    }
  ]

  // Configuration for the main company name and logo
  const companyName = 'REALESTATE PRO'
  const brandIcon = <Building2 className="w-6 h-6 text-white" /> // Swapped Wrench for Building2

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                // Changed gradient colors for a more luxurious/professional feel
                className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-lg"
              >
                {brandIcon}
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                {companyName}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your expert partner in finding the perfect property. Connecting dreams with addresses.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  // Adjusted hover color to match the new gradient theme
                  className="bg-slate-800 p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-slate-700 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections - Note: We use a loop to fill the remaining 3 columns */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {/* Check if the link object has an icon (for Quick Links & Contact Info) */}
                    {typeof link === 'object' && 'text' in link ? (
                      <a
                        href={`#${link.text.toLowerCase().replace(/[\s&]+/g, '-')}`}
                        className="text-gray-400 hover:text-blue-500 transition-colors text-sm flex items-center space-x-2"
                      >
                        {link.icon || null} {/* Render icon if available */}
                        <span>{link.text}</span>
                      </a>
                    ) : (
                      // Handle simple string links (for Popular Locations)
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-blue-500 transition-colors text-sm flex items-center space-x-2"
                      >
                         {/* We can add a subtle bullet or icon here for aesthetics if needed */}
                         <span className='w-1 h-1 bg-gray-600 rounded-full mr-2'></span>
                        <span>{link}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} {companyName}. All rights reserved. Built with professionalism and precision.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer