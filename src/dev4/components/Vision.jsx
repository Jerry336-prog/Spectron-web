import { motion } from 'framer-motion'
import { Radio, Signal, Shield, ArrowRight } from 'lucide-react'
import About from './About'
import Stats from './Stats'
import FutureVision from './FutureVision'

export default function Vision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  // Live node mock data for campus mapping visualization
  const activeNodes = [
    { name: 'SUB (Student Union)', active: true, load: '78%' },
    { name: 'University Store', active: true, load: '45%' },
    { name: 'Campus Coffee Hub', active: true, load: '92%' },
    { name: 'Quad Food Pop-up', active: false, load: '0%' },
    { name: 'LCU Athletic Zone', active: true, load: '30%' },
    { name: 'Academic Library Café', active: false, load: '0%' }
  ]

  return (
    <div className="bg-[#030712] text-gray-300">
      {/* 1. About Section */}
      <About />

      {/* 2. Why Spectron Section */}
      <section id="why-spectron" className="py-24 bg-[#060a13] relative overflow-hidden border-t border-gray-900">
        {/* Glow Element */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#3c82f6]/4 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.span 
              variants={itemVariants}
              className="text-xs font-mono tracking-[0.2em] text-[#3c82f6] uppercase border border-[#3c82f6]/20 px-4 py-1.5 rounded-full bg-[#3c82f6]/5"
            >
              System Analysis
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-extrabold text-white mt-8 mb-6 tracking-tight leading-tight"
            >
              Why Spectron?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Traditional campus discoverability is broken. Students miss active local operations, and merchants suffer from fragmented, short-lived channels.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
            {/* Left: Problems Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#090d16] border border-gray-900 hover:border-gray-800 transition-colors"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-gray-950 border border-gray-800 text-gray-400 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Discovery Blind Spots</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      Students are unaware of active promotions, product stock, or operational status of merchants operating just feet away from their classrooms.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#090d16] border border-gray-900 hover:border-gray-800 transition-colors"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-gray-950 border border-gray-800 text-gray-400 mt-1">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Scattered Broadcast Channels</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      Campus updates leak through scattered group chats, paper bulletins, and Instagram stories that disappear in 24 hours, diluting audience reach.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#090d16] border border-gray-900 hover:border-[#3c82f6]/20 transition-colors"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-[#3c82f6]/5 border border-[#3c82f6]/20 text-[#3c82f6] mt-1">
                    <Signal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">The Spectron Solution</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      We unify all campus nodes into a single, high-fidelity real-time visibility matrix. Discover operations, events, and commerce instantly from a centralized dashboard.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Cyber Grid Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-6 p-8 rounded-2xl bg-[#080c15] border border-gray-800 hover:border-[#3c82f6]/30 transition-all duration-500 shadow-[0_0_30px_rgba(60,130,246,0.02)]"
            >
              <div className="flex items-center justify-between pb-6 border-b border-gray-900 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3c82f6] animate-ping" />
                  <span className="text-xs font-mono tracking-wider text-white">SPECTRON CORE ACTIVE</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500">SYSTEM STABLE // 99.9%</span>
              </div>

              {/* Grid Nodes */}
              <div className="grid grid-cols-2 gap-4">
                {activeNodes.map((node, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      node.active 
                        ? 'bg-[#0b101c] border-[#3c82f6]/20 hover:border-[#3c82f6]/50 shadow-[0_0_15px_rgba(60,130,246,0.05)]' 
                        : 'bg-[#05080f] border-gray-900 opacity-40'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400 truncate max-w-[120px]">{node.name}</span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-sm ${
                        node.active ? 'bg-[#3c82f6]/10 text-[#3c82f6]' : 'bg-gray-800 text-gray-500'
                      }`}>
                        {node.active ? 'ONLINE' : 'STBY'}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden mt-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: node.load }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full ${node.active ? 'bg-[#3c82f6]' : 'bg-gray-700'}`}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[9px] font-mono text-gray-500">TRAFFIC INDEX</span>
                      <span className="text-[9px] font-mono text-gray-400">{node.active ? node.load : 'N/A'}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-900 flex justify-between items-center text-xs font-mono text-gray-400">
                <span>LCU CLUSTER ID: 884-TX</span>
                <span className="flex items-center gap-1 text-[#3c82f6] hover:underline cursor-pointer">
                  LAUNCH MONITOR <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <Stats />

      {/* 4. Future Vision Section */}
      <FutureVision />
    </div>
  )
}
