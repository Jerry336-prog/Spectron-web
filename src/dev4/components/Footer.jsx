import { motion } from 'framer-motion';
import { Zap, Globe, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      className="relative py-16"
      style={{
        backgroundColor: '#070714',
        borderTop: '1px solid rgba(0, 61, 165, 0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: '#003DA5',
                boxShadow: '0 0 15px rgba(0, 61, 165, 0.3)',
              }}
            >
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Spectron
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-sm mb-6"
            style={{ color: '#64748B', fontFamily: "'Inter', sans-serif" }}
          >
            The Visibility Engine — Built for Lead City University
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(17, 17, 40, 0.8)',
                    border: '1px solid rgba(0, 61, 165, 0.15)',
                    color: '#64748B',
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: 'rgba(0, 61, 165, 0.4)',
                    color: '#FFFFFF',
                    boxShadow: '0 0 20px rgba(0, 61, 165, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div
            className="w-full max-w-md h-px mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.15), transparent)' }}
          />

          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: '#475569', fontFamily: "'Inter', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Spectron. Specifically built for LCU.
          </p>
        </div>
      </div>
    </footer>
  );
}
