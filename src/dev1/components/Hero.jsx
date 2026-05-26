import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import spectronImg from '../../assets/images/spectron.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const rightVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/6 w-[500px] h-[500px] rounded-full bg-[#3c82f6]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#3c82f6]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#3c82f6]/20 bg-[#3c82f6]/[0.06]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3c82f6] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3c82f6]" />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#60a5fa]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Now live at Lead City University
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1
                className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.9] text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Spectron
              </h1>
              <div className="flex items-baseline gap-2.5">
                <span
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#3c82f6]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Visibility
                </span>
                <span
                  className="text-xl sm:text-2xl font-light tracking-tight text-slate-500"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Engine
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[15px] sm:text-base leading-[1.75] text-slate-400 max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The first visibility engine being built on campus. Spectron intelligently
              surfaces businesses, services, and opportunities to students in real time
              — based on location, relevance, and intent. Specifically built for LCU.
            </motion.p>

            {/* Key highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2">
              {['4,500+ Students', '120+ Businesses', 'Real-time Discovery'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-slate-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="w-1 h-1 rounded-full bg-[#3c82f6]" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#nexus"
                onClick={(e) => { e.preventDefault(); document.querySelector('#nexus')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#3c82f6] rounded-xl cursor-pointer"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 8px 24px rgba(59,130,246,0.2)',
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 12px 32px rgba(59,130,246,0.35)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Spectron
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#features"
                onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-slate-300 bg-white/[0.04] rounded-xl border border-white/[0.08] cursor-pointer"
                style={{ fontFamily: "'Sora', sans-serif" }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(59, 130, 246, 0.3)', color: '#fff' }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Glowing, floating, circular Spectron Image */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-square max-w-[480px] mx-auto lg:ml-auto flex items-center justify-center"
          >
            {/* Glowing aura background */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-[#3c82f6]/5 blur-[90px] pointer-events-none animate-pulse" />

            <motion.div
              className="relative w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] rounded-full p-2 border border-[#3c82f6]/25 bg-[#030712]/80 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(60,130,246,0.12)] group cursor-pointer"
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.03,
                borderColor: 'rgba(60, 130, 246, 0.5)',
                boxShadow: '0 0 60px rgba(60, 130, 246, 0.45)',
              }}
            >
              {/* Inner glowing ring */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-white/5 group-hover:border-[#3c82f6]/20 transition-colors" />
              
              <img
                src={spectronImg}
                alt="Spectron System"
                className="w-[96%] h-[96%] object-contain rounded-full filter saturate-[1.05]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3c82f6]/15 to-transparent" />
    </section>
  );
}
