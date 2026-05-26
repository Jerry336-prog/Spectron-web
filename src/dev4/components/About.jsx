import { motion } from 'framer-motion'
import { Eye, Compass, Network } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cards = [
    {
      title: "Built for campus visibility",
      description: "A specialized visibility engine that empowers LCU merchants and student organizations to broadcast real-time services, location info, and offerings to the entire student body.",
      icon: Eye,
      tag: "ENGINE INTEGRITY"
    },
    {
      title: "Designed for the LCU ecosystem",
      description: "Finetuned specifically for campus commerce dynamics. We link vendor availability, peak times, and active listings with student hubs for optimized discovery.",
      icon: Network,
      tag: "INFRASTRUCTURE"
    },
    {
      title: "A connected digital campus",
      description: "Unifies Lead City University's micro-economy by facilitating instant peer-to-peer discoveries, student vendor showcases, and localized enterprise connectivity.",
      icon: Compass,
      tag: "COMMUNITY"
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#030712] text-gray-300 relative overflow-hidden border-t border-gray-900">
      {/* Background glow nodes (no gradients) */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#3c82f6]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#3c82f6]/3 blur-[120px] rounded-full pointer-events-none" />

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
            Mission Profile
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-white mt-8 mb-6 tracking-tight leading-tight"
          >
            The Campus Visibility Engine
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Spectron solves the visibility gap for campus commerce. We provide students with absolute clarity on where and when they can connect with local businesses, student setups, and university events.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-[#080d16] border border-gray-900 hover:border-[#3c82f6]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(60,130,246,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-xl bg-[#3c82f6]/5 border border-[#3c82f6]/10 text-[#3c82f6] group-hover:border-[#3c82f6]/30 group-hover:shadow-[0_0_15px_rgba(60,130,246,0.15)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                      {card.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-10 pt-5 border-t border-gray-900 flex items-center gap-2 text-xs font-mono text-[#3c82f6]/80 group-hover:text-[#3c82f6] transition-colors duration-300">
                  <span>DISCOVER CAPABILITIES</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
