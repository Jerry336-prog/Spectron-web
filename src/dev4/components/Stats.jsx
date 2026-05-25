import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Store, Users, Activity, Compass } from 'lucide-react'

// Sub-component for animating number counters when in view
function AnimatedCounter({ targetValue, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = parseInt(targetValue, 10)
    if (start === end) return

    // Calculate dynamic duration based on target size
    const duration = 2000 // 2 seconds animation
    const range = end - start
    let current = start
    let startTime = null

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      current = Math.floor(progress * range + start)
      setDisplayValue(current)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setDisplayValue(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [inView, targetValue])

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const statItems = [
    {
      label: "Businesses Connected",
      targetValue: 120,
      suffix: "+",
      description: "Active local merchants and student startups linked into our system.",
      icon: Store
    },
    {
      label: "Students Reached",
      targetValue: 4500,
      suffix: "+",
      description: "Active LCU students utilizing the network for local exploration.",
      icon: Users
    },
    {
      label: "Visibility Interactions",
      targetValue: 85000,
      suffix: "+",
      description: "Real-time updates, searches, and location checks processed.",
      icon: Activity
    },
    {
      label: "Campus Discoveries",
      targetValue: 12000,
      suffix: "+",
      description: "Direct connections made between students and local merchants.",
      icon: Compass
    }
  ]

  return (
    <section id="stats" className="py-24 bg-[#030712] relative overflow-hidden border-t border-gray-900">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3c82f6]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-[#3c82f6] uppercase border border-[#3c82f6]/20 px-4 py-1.5 rounded-full bg-[#3c82f6]/5">
            Operational Metrics
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-8 mb-4 tracking-tight leading-tight">
            Network Impact in Numbers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Real-time insights showing the scale of discovery and engagement happening daily across the Lubbock Christian University campus.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {statItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-[#080d16] border border-gray-900 hover:border-[#3c82f6]/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(60,130,246,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded-lg bg-gray-950 border border-gray-900 text-gray-500 group-hover:text-[#3c82f6] group-hover:border-[#3c82f6]/20 group-hover:shadow-[0_0_10px_rgba(60,130,246,0.1)] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-600">ID: {idx + 1}</span>
                  </div>

                  <div className="mb-2">
                    <AnimatedCounter targetValue={item.targetValue} suffix={item.suffix} />
                  </div>
                  
                  <h3 className="text-sm font-bold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-900 flex items-center justify-between text-[10px] font-mono text-gray-600">
                  <span>TELEMETRY</span>
                  <span className="text-[#3c82f6]/70 group-hover:text-[#3c82f6] transition-colors">SECURE // ON</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
