import { motion } from 'framer-motion'
import { Rocket, Cpu, TrendingUp, Layers } from 'lucide-react'

export default function FutureVision() {
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
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  }

  const floatVariants = (duration) => ({
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  })

  const visionPillars = [
    {
      title: "Scale Beyond LCU",
      description: "Expanding the Spectron cluster model to university campuses nationwide, building a federated network of localized campus commerce.",
      icon: Rocket,
      duration: 5,
      delay: 0
    },
    {
      title: "Next-Gen Infrastructure",
      description: "Integrating IoT beacons and physical space sensors directly into the campus framework to enable real-time occupancy and wait-time metrics.",
      icon: Cpu,
      duration: 6,
      delay: 0.2
    },
    {
      title: "Smart Visibility Engine",
      description: "Applying AI recommendation algorithms to predict high-traffic windows, optimizing merchant pop-up schedules and student discovery flows.",
      icon: TrendingUp,
      duration: 5.5,
      delay: 0.4
    },
    {
      title: "Campus Web3 Ledger",
      description: "Pioneering secure decentralized authentication and token rewards for student-run enterprises, driving local commerce adoption.",
      icon: Layers,
      duration: 6.5,
      delay: 0.1
    }
  ]

  return (
    <section id="future-vision" className="py-24 bg-[#060a13] relative overflow-hidden border-t border-gray-900">
      {/* Background blurs (solid colors, no gradients) */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#3c82f6]/4 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-[#3c82f6]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-[#3c82f6] uppercase border border-[#3c82f6]/20 px-4 py-1.5 rounded-full bg-[#3c82f6]/5">
            System Horizon
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-8 mb-6 tracking-tight leading-tight">
            The Future of Campus Commerce
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Spectron is more than a discovery board. We are laying the digital foundation for smart university micro-economies and localized tech commerce.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {visionPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                {/* Float wrapper */}
                <motion.div
                  variants={floatVariants(pillar.duration)}
                  animate="animate"
                  className="group p-8 rounded-2xl bg-[#080d16] border border-gray-900 hover:border-[#3c82f6]/30 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(60,130,246,0.06)] flex gap-6 items-start h-full"
                >
                  <div className="p-3.5 rounded-xl bg-gray-950 border border-gray-900 text-[#3c82f6] group-hover:border-[#3c82f6]/20 group-hover:shadow-[0_0_10px_rgba(60,130,246,0.15)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono text-gray-600">PHASE 0{idx + 1}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3c82f6]/50" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
