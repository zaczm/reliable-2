import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className=" flex items-center justify-center">
                <img src="/logo1.png" alt="" className='w-20' />
              </div>
              <div className="font-montserrat">
                <div className="text-lg font-bold">Reliable</div>
                <div className="text-sm text-primary-foreground/80">Recuperative</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 font-merriweather leading-relaxed">
              Providing compassionate wellness care, supporting recovery with dignity, 
              comfort, belonging, renewal, and hope.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-montserrat font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300 font-merriweather"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-montserrat font-semibold">Our Services</h3>
            <div className="space-y-2">
              {[
                'Recuperative Care',
                'Wound Care',
                'Medical Respite'
              ].map((service) => (
                <div
                  key={service}
                  className="text-sm text-primary-foreground/80 font-merriweather"
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-montserrat font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+19522176756"
                className="flex items-center space-x-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Phone size={16} />
                <span className="font-merriweather">(952) 217-6756</span>
              </a>
              <a
                href="mailto:info@reliablerecuperative.com"
                className="flex items-center space-x-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Mail size={16} />
                <span className="font-merriweather">info@reliablerecuperative.com</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="font-merriweather">6124739338</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-primary-foreground/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60 font-merriweather">
              © {currentYear} Reliable Recuperative LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300 font-merriweather"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300 font-merriweather"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

