import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about-us" },
  { label: "Services", id: "services" },
  { label: "Works", id: "works" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        } px-3 sm:px-6 md:px-8`}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center justify-between h-14 sm:h-16 transition-all duration-300 rounded-full px-4 sm:px-6 border ${
            scrolled 
            ? "bg-white border-gray-200 shadow-sm" 
            : "bg-white/80 border-gray-100"
          }`}>
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 flex-shrink-0"
            >
              <img 
                src="/images/midis logo blue-06.png" 
                alt="Midis Logo" 
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </motion.div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA - Desktop */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              whileTap={{ scale: 0.95 }}
            >
              <span className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 z-30 backdrop-blur-md"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="md:hidden fixed left-0 top-0 h-screen w-64 bg-white/30 backdrop-blur-2xl z-30 overflow-y-auto shadow-2xl border-r border-white/40"
            >
              {/* Menu Header */}
              <div className="px-6 py-6 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <img 
                    src="/images/midis logo blue-06.png" 
                    alt="Midis Logo" 
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 4, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                    className="flex items-center px-4 py-3 rounded-lg text-gray-700 font-medium bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="px-6 py-6 border-t border-white/20">
                <motion.a
                  href="#contact"
                  onClick={handleNavClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full px-4 py-3 bg-blue-600/80 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
