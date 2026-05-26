import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import spectronImg from '../../assets/images/spectron.jpeg';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Nexus Network', href: '#nexus' },
  { label: 'Features', href: '#features' },
  { label: 'Vision', href: '#vision' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 border-b ${
        scrolled
          ? 'bg-[#030712]/80 backdrop-blur-md border-white/[0.06] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#3c82f6]/30 overflow-hidden bg-slate-950 p-0.5 group-hover:border-[#3c82f6]/60 transition-colors shadow-[0_0_10px_rgba(60,130,246,0.15)]">
            <img 
              src={spectronImg} 
              alt="Spectron" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-base font-bold text-white tracking-tight leading-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Spectron
            </span>
            <span
              className="text-[9px] text-[#60a5fa] font-mono tracking-widest mt-0.5"
            >
              LCU NODE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative text-xs font-medium text-slate-400 hover:text-white transition-colors py-1.5"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3c82f6] origin-left scale-x-0"
                whileHover={{ scalex: 1 }}
                transition={{ duration: 0.25 }}
              />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="#nexus"
            onClick={(e) => handleScrollTo(e, '#nexus')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#60a5fa] border border-[#3c82f6]/20 bg-[#3c82f6]/[0.04]"
            style={{ fontFamily: "'Sora', sans-serif" }}
            whileHover={{
              scale: 1.03,
              borderColor: 'rgba(59, 130, 246, 0.4)',
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              color: '#fff',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Launch Map
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/[0.06] bg-[#030712]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-sm font-semibold text-slate-300 hover:text-white transition-colors py-1"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#nexus"
                onClick={(e) => handleScrollTo(e, '#nexus')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-white bg-[#3c82f6] text-center mt-2"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Launch Map
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
