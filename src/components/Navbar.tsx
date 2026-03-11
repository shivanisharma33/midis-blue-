import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "About Us", "Services", "Works", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 px-4 md:px-8`}
    >
      <div className="section-container">
        <div className={`flex items-center justify-between h-16 transition-all duration-500 rounded-3xl px-8 py-4 shadow-xl border ${
          scrolled 
          ? "bg-white/70 backdrop-blur-xl border-white/40 shadow-blue-500/5" 
          : "bg-white/40 backdrop-blur-md border-white/20 shadow-none"
        }`}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <img 
              src="/images/midis logo blue-06.png" 
              alt="Midis Logo" 
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm font-medium transition-all duration-200 ${i === 0
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-all duration-300"
          >
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
