import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, MapPin, Users, Activity } from 'lucide-react';
import NetworkGraph from './NetworkGraph';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const STATS = [
  { label: 'Active Nodes', value: '120+', icon: MapPin, color: '#3c82f6' },
  { label: 'Live Interactions', value: '85k+', icon: Activity, color: '#60a5fa' },
  { label: 'Connected Students', value: '4,500+', icon: Users, color: '#93c5fd' },
];

export default function NexusMap() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section
      id="nexus"
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-[#3c82f6]/[0.03] blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mx-auto text-center mb-16 space-y-4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#3c82f6]/20 bg-[#3c82f6]/[0.06]">
            <Radio className="w-3 h-3 text-[#3c82f6]" />
            <span
              className="text-[11px] font-semibold tracking-wider text-[#60a5fa] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nexus Network
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Live Campus Network Map
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A real-time blueprint of Lead City University campus commerce, active vendors,
            and student engagement channels mapping live connectivity patterns.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-14"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
              <div className="text-left">
                <p className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</p>
                <p className="text-[10px] text-slate-500 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main visualization card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full rounded-2xl border border-white/[0.06] bg-[#060a13] overflow-hidden"
          style={{ boxShadow: '0 0 60px rgba(60,130,246,0.03)' }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] relative z-20 bg-[#060a13]/85 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[11px] font-medium text-slate-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                Lead City University Campus Landscape
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-600">
              Refresh rate: 60fps
            </span>
          </div>

          {/* Canvas area container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1] overflow-hidden">
            <NetworkGraph onHoverNode={setHoveredNode} />

            {/* Floating Info Popup Card overlay (Anchored to hovered canvas node) */}
            <AnimatePresence>
              {hoveredNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20 pointer-events-none bg-[#030712]/95 border border-[#3c82f6]/40 shadow-[0_0_25px_rgba(60,130,246,0.25)] rounded-xl px-4 py-3 min-w-[210px]"
                  style={{
                    left: `${hoveredNode.percentX}%`,
                    top: `${hoveredNode.percentY - 6}%`, // Anchor slightly above node
                    transform: 'translate(-50%, -100%)',
                  }}
                >
                  {/* Speech arrow pointer */}
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#030712] border-r border-b border-[#3c82f6]/40" />

                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3c82f6] animate-pulse" />
                    <span className="text-[8px] font-mono tracking-widest text-[#60a5fa] uppercase">
                      {hoveredNode.type.toUpperCase()} NODE INFO
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white tracking-tight leading-none mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {hoveredNode.label}
                  </h4>

                  <p className="text-[9px] text-slate-400 font-light leading-normal mb-2 max-w-[190px]">
                    {hoveredNode.details}
                  </p>

                  <div className="pt-1.5 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-slate-500">
                    <span>TELEMETRY: SECURE</span>
                    <span className="text-emerald-400 font-medium">LIVE</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3c82f6]/15 to-transparent" />
    </section>
  );
}
