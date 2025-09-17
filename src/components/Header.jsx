import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Admission and Referral", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Referral form", path: "/referral" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={` w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#203B42] to-[#2a5b67] text-white text-lg py-2 h-[60px] px-4 flex justify-end">
        <motion.a
          href="tel:612-394-5624"
          className="flex items-center space-x-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="p-1 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.4 }}
          >
            <Phone size={20} />
          </motion.div>
          <span className="group-hover:text-yellow-300 transition-colors">
            Call now to reserve a bed: (952) 217-6756
          </span>
        </motion.a>
      </div>

      <div className="bg-white mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center mt-3">
            <motion.img
              src="/logo1.png"
              alt="Healing Path Recuperative Care Logo"
              className="w-20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative font-montserrat font-medium text-base transition-all duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-accent"
                    }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-accent/10 rounded-md"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-white to-gray-100 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-foreground hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>

            {/* Navigation Links */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    relative text-2xl font-montserrat font-bold my-5
                    ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-accent"
                    }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"
                      layoutId="mobile-underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-accent/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}

            {/* Contact Info (Mobile) */}
            <motion.div
              className="flex flex-col items-center space-y-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="tel:612-394-5624"
                className="flex items-center space-x-2 text-sm text-foreground hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="p-1 rounded-full bg-accent/20"
                  whileHover={{ rotate: 360, backgroundColor: "rgba(255, 193, 7, 0.3)" }}
                  transition={{ duration: 0.4 }}
                >
                  <Phone size={16} />
                </motion.div>
                <span>612-394-5624</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;