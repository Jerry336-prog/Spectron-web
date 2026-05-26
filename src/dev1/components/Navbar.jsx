import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Nexus', href: '#nexus' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    
    // Support smooth scrolling to standard IDs or fellow devs' custom IDs
    let targetId = href;
    if (href === '#about') {
      targetId = '#why-spectron'; // Redirect about link to their custom why-spectron section if available
    }

    const el = document.querySelector(targetId) || document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(3,7,18,0.95)] shadow-[0_4px_30px_rgba(59,130,246,0.08)] border-b border-[#3c82f6]/10'
          : 'bg-[rgba(3,7,18,0.65)]'
      }`}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-9 h-9 rounded-lg bg-[#3c82f6] flex items-center justify-center"
              style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            >
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </motion.div>
            <span
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Spectron
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-5 py-2 text-sm font-medium text-[#94A3B8] transition-colors duration-300 hover:text-white cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-[#3c82f6] rounded-full"
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '60%', x: '-50%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#nexus"
            onClick={(e) => handleNavClick(e, '#nexus')}
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#3c82f6] rounded-lg transition-all duration-300 hover:bg-[#2563eb] cursor-pointer"
            style={{
              fontFamily: "'Sora', sans-serif",
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 35px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Explore Spectron
          </motion.a>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
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
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden border-t border-slate-900"
            style={{ backgroundColor: 'rgba(3, 7, 18, 0.98)' }}
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 text-base font-medium text-[#94A3B8] transition-colors hover:text-white hover:pl-2 cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#nexus"
                onClick={(e) => handleNavClick(e, '#nexus')}
                className="block mt-4 w-full text-center py-3 text-sm font-semibold text-white bg-[#3c82f6] rounded-lg cursor-pointer"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Explore Spectron
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
