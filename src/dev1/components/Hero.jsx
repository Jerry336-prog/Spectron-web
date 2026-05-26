import { motion } from 'framer-motion';
import { ArrowRight, Radio } from 'lucide-react';
import NetworkVisualization from '../animations/NetworkVisualization';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../shared/utils/animations';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Subtle background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0, 61, 165, 0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Side — Text Content */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wider uppercase"
              style={{
                borderColor: 'rgba(0, 61, 165, 0.3)',
                backgroundColor: 'rgba(0, 61, 165, 0.08)',
                color: '#0088FF',
                fontFamily: "'Inter', sans-serif",
              }}
              animate={{
                boxShadow: [
                  '0 0 15px rgba(0, 61, 165, 0.1)',
                  '0 0 25px rgba(0, 61, 165, 0.2)',
                  '0 0 15px rgba(0, 61, 165, 0.1)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Radio className="w-3 h-3 animate-pulse" />
              Built for LCU
            </motion.div>

            {/* Main Title */}
            <div>
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Spectron
              </h1>
              <div className="mt-3 flex items-baseline gap-3">
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#0088FF',
                  }}
                >
                  Visibility
                </span>
                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#94A3B8]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Engine
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#94A3B8',
              }}
            >
              The first visibility engine being built on campus. Spectron intelligently
              surfaces businesses, services, and opportunities to students in real time
              — based on location, relevance, and intent.
            </p>

            {/* Sub-text */}
            <p
              className="text-sm font-medium tracking-wide uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#64748B',
                letterSpacing: '0.1em',
              }}
            >
              Specifically built for LCU
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#nexus"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#003DA5] rounded-lg transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: '0 0 25px rgba(0, 61, 165, 0.3)',
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 40px rgba(0, 61, 165, 0.5)',
                }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#nexus')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Spectron
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg border transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  borderColor: 'rgba(0, 61, 165, 0.3)',
                  color: '#94A3B8',
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: 'rgba(0, 61, 165, 0.6)',
                  color: '#FFFFFF',
                }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side — Network Animation */}
          <motion.div
            variants={fadeInRight}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(0, 61, 165, 0.15)',
                backgroundColor: 'rgba(17, 17, 40, 0.4)',
              }}
            >
              <NetworkVisualization />
            </div>

            {/* Floating label */}
            <motion.div
              className="absolute bottom-6 left-6 px-4 py-2 rounded-lg text-xs font-medium"
              style={{
                backgroundColor: 'rgba(0, 61, 165, 0.15)',
                border: '1px solid rgba(0, 61, 165, 0.2)',
                color: '#0088FF',
                fontFamily: "'Inter', sans-serif",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Live Network Visualization
            </motion.div>

            {/* Floating stat */}
            <motion.div
              className="absolute top-6 right-6 px-4 py-2 rounded-lg text-xs font-medium"
              style={{
                backgroundColor: 'rgba(0, 61, 165, 0.15)',
                border: '1px solid rgba(0, 61, 165, 0.2)',
                color: '#94A3B8',
                fontFamily: "'Inter', sans-serif",
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              500+ Students Connected
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />
    </section>
  );
}
