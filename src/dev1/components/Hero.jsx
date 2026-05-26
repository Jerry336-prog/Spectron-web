import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Activity, ShieldCheck, Orbit } from 'lucide-react';
import NetworkVisualization from '../animations/NetworkVisualization';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../shared/utils/animations';

export default function Hero() {
  const letters = Array.from("Spectron");
  
  const titleLetterVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] font-sans"
    >
      {/* Cyber-blueprint Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3c82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3c82f6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Glowing background matrix lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#3c82f6]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3c82f6]/4 blur-[120px] pointer-events-none" />

      {/* Cybernetic side scan lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#3c82f6]/0 via-[#3c82f6]/20 to-[#3c82f6]/0" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-[#3c82f6]/0 via-[#3c82f6]/20 to-[#3c82f6]/0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Premium Pitch Interface */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Live Node Status HUD Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-[#3c82f6]/20 bg-[#3c82f6]/5 backdrop-blur-md"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3c82f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3c82f6]"></span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#60a5fa] uppercase">
                lcu_node_v1.0.9 // status: active
              </span>
            </motion.div>

            {/* Futuristic Staggered Title */}
            <div className="space-y-3">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-white flex select-none">
                {letters.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={titleLetterVariants}
                    className="inline-block hover:text-[#3c82f6] transition-colors duration-200"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              
              <div className="flex items-center gap-3 pl-1">
                <div className="h-px w-8 bg-[#3c82f6]" />
                <span
                  className="text-xl sm:text-2xl font-bold tracking-wider font-mono text-[#3c82f6] uppercase"
                >
                  Visibility Engine
                </span>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline">[PORT_ACTIVE]</span>
              </div>
            </div>

            {/* Core Description */}
            <p
              className="text-base sm:text-lg leading-relaxed text-slate-400 font-light max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The first decentralized visibility grid engineered specifically for university campuses. Spectron bridges local merchants and students by indexing operations, micro-services, and active deals into a unified real-time discovery layer.
            </p>

            {/* System Features Sub-list */}
            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4 pt-2 max-w-xl"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#3c82f6]" />
                <span>VERIFIED LCU DOMAIN</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <Activity className="w-4 h-4 text-[#3c82f6]" />
                <span>REAL-TIME QUERY INDEXING</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <Orbit className="w-4 h-4 text-[#3c82f6]" />
                <span>HYPER-LOCAL ECOSYSTEM</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <Terminal className="w-4 h-4 text-[#3c82f6]" />
                <span>LCU CAMPUS EXCLUSIVE</span>
              </div>
            </motion.div>

            {/* Futuristic Action Panel */}
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <motion.a
                href="#nexus"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-[#3c82f6] rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.25)] border border-[#3c82f6]/40 cursor-pointer"
                style={{ fontFamily: "'Sora', sans-serif" }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 35px rgba(59, 130, 246, 0.45)',
                  backgroundColor: '#2563eb',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#nexus')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Access Nexus Grid
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="#why-spectron"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border border-slate-800 text-slate-300 bg-slate-950/40 hover:bg-slate-950 transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "'Sora', sans-serif" }}
                whileHover={{
                  scale: 1.03,
                  borderColor: '#3c82f6',
                  color: '#FFFFFF',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#why-spectron')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inspect Network
              </motion.a>
            </div>
          </div>

          {/* Right Column: High-tech HUD Radar display */}
          <motion.div
            variants={fadeInRight}
            className="lg:col-span-5 relative w-full aspect-square max-w-[480px] mx-auto"
          >
            {/* Visual glow frame */}
            <div className="absolute inset-0 rounded-3xl border border-slate-800 bg-[#090d16]/40 backdrop-blur-sm overflow-hidden p-6">
              <NetworkVisualization />
            </div>

            {/* Futuristic Tech Decals & Indicators */}
            <div className="absolute top-4 left-4 flex gap-1 pointer-events-none">
              <div className="w-1.5 h-1.5 bg-[#3c82f6] rounded-full animate-ping" />
              <div className="w-1.5 h-1.5 bg-[#3c82f6] rounded-full" />
              <span className="text-[8px] font-mono text-slate-500 ml-1">SYSTEM_ONLINE_MATRIX</span>
            </div>

            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-slate-500 pointer-events-none text-right">
              LATENCY // 12.04MS<br />
              LCU_NODE // OK_
            </div>

            {/* Corner Bracket Accents for true sci-fi theme */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#3c82f6]/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#3c82f6]/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#3c82f6]/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#3c82f6]/40 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
