import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Users, Building2 } from 'lucide-react';
import NexusCanvas from '../animations/NexusCanvas';
import { fadeInUp, staggerContainer } from '../../shared/utils/animations';

const stats = [
  { icon: Building2, value: '100+', label: 'Businesses' },
  { icon: Users, value: '500+', label: 'Students' },
  { icon: Network, value: '1000+', label: 'Connections' },
];

export default function NexusMap() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section
      id="nexus"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wider uppercase mb-6"
            style={{
              borderColor: 'rgba(0, 61, 165, 0.3)',
              backgroundColor: 'rgba(0, 61, 165, 0.08)',
              color: '#0088FF',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Network className="w-3 h-3 animate-spin-slow" />
            The Nexus
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Every Business Connected
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#94A3B8', fontFamily: "'Inter', sans-serif" }}
          >
            Visibility across the LCU ecosystem. A living digital network where
            students discover and businesses grow — all connected through Spectron.
          </motion.p>
        </motion.div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-16 animate-pulse-glow"
          style={{
            border: '1px solid rgba(0, 61, 165, 0.15)',
            backgroundColor: 'rgba(17, 17, 40, 0.3)',
          }}
        >
          <NexusCanvas />

          {/* Overlay labels */}
          <motion.div
            className="absolute top-6 left-6 px-4 py-2 rounded-lg text-xs font-medium"
            style={{
              backgroundColor: 'rgba(10, 10, 26, 0.8)',
              border: '1px solid rgba(0, 61, 165, 0.2)',
              color: '#0088FF',
              fontFamily: "'Inter', sans-serif",
              backdropFilter: 'blur(10px)',
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            LCU Campus Network
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 px-4 py-2 rounded-lg text-xs font-medium"
            style={{
              backgroundColor: 'rgba(10, 10, 26, 0.8)',
              border: '1px solid rgba(0, 61, 165, 0.2)',
              color: '#94A3B8',
              fontFamily: "'Inter', sans-serif",
              backdropFilter: 'blur(10px)',
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Students discover. Businesses grow.
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17, 17, 40, 0.5)',
                  border: '1px solid rgba(0, 61, 165, 0.1)',
                }}
              >
                <Icon
                  className="w-5 h-5 mx-auto mb-3"
                  style={{ color: '#003DA5' }}
                />
                <div
                  className="text-2xl sm:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: '#64748B', fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom separator line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />
    </section>
  );
}
