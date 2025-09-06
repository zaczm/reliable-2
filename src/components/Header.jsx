
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admission and Referral', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Referral form', path: '/referral' } // Assuming a new path for referral form
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#203B42] text-white text-sm py-2 h-[40px] px-4 flex justify-end">
        <a href="tel:612-394-5624" className="flex items-center space-x-1">
          <Phone size={14} />
          <span>Call now to reserve a bed: 612-394-5624</span>
        </a>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center mt-3">
            <img src="/logo1.png" alt="Healing Path Recuperative Care Logo" className="w-20" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-montserrat font-medium transition-colors duration-300 hover:text-accent ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-accent'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-foreground hover:text-accent transition-colors"
            >
              <X size={28} />
            </button>

            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-montserrat font-bold transition-colors duration-300 my-5 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Info (Mobile) */}
            <div className="flex flex-col items-center space-y-2 mt-4">
              <a
                href="tel:612-394-5624"
                className="flex items-center space-x-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span>612-394-5624</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;


