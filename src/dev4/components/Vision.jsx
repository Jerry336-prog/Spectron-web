import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, MapPin, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../shared/utils/animations';

const visionItems = [
  {
    icon: Rocket,
    title: 'The Digital Infrastructure for Campus Commerce',
    description: 'Spectron is not just a listing directory. It is the underlying real-time visibility engine designed to power campus ecosystems everywhere.',
  },
  {
    icon: MapPin,
    title: 'Starting at Lead City University',
    description: 'LCU is our proving ground. Over 500 active students, 10 lecturers, and 100 campus businesses are already using Spectron daily.',
  },
  {
    icon: ArrowUpRight,
    title: 'Expanding Beyond Campus',
    description: 'The same visibility gaps exist in campuses and hyper-local hubs worldwide. Spectron is architected to scale globally.',
  },
];

const stats = [
  { value: '100+', label: 'Verified LCU Businesses', description: 'Active side hustles, cafes, print shops, and services.' },
  { value: '500+', label: 'Registered LCU Students', description: 'Finding services, making inquiries, and exploring daily.' },
  { value: '1000+', label: 'Ecosystem Connections', description: 'Active real-time discoverability matches surfaced.' },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Core Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wider uppercase"
              style={{
                borderColor: 'rgba(0, 61, 165, 0.3)',
                backgroundColor: 'rgba(0, 61, 165, 0.08)',
                color: '#0088FF',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Sparkles className="w-3 h-3" />
              The Mission
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why Spectron?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-[#94A3B8]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Today, talented people, side hustles, and campus services remain invisible online because discovery is fragmented across too many social media channels and chats. 
              Students rely on word-of-mouth or scroll endless groups to find a tutor, barber, laundry operator, or vendor.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-[#94A3B8]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Spectron ends the search fatigue. By indexing campus services into a single real-time network, students discover nearby options instantly, and businesses get discovered without chasing attention.
            </motion.p>
          </motion.div>

          {/* Key pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-[#1E293B] flex gap-4" style={{ backgroundColor: 'rgba(17,17,40,0.4)' }}>
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,61,165,0.2)] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#0088FF]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>The Discovery Gap</h3>
                <p className="text-sm text-[#94A3B8]" style={{ fontFamily: "'Inter', sans-serif" }}>Eliminating scattered social posts. Making every side hustle indexable and reachable.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#1E293B] flex gap-4" style={{ backgroundColor: 'rgba(17,17,40,0.4)' }}>
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,61,165,0.2)] flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-[#0088FF]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>Empowering Student Economy</h3>
                <p className="text-sm text-[#94A3B8]" style={{ fontFamily: "'Inter', sans-serif" }}>Connecting student demands directly with student skills, fostering campus-wide micro-commerce.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats / Counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 border-y border-[#1E293B] py-16 mb-28"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center md:text-left space-y-3"
            >
              <div
                className="text-5xl lg:text-6xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-semibold text-[#0088FF]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.label}
              </div>
              <p
                className="text-xs text-[#64748B] max-w-xs leading-relaxed mx-auto md:mx-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Vision Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {visionItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-8 rounded-xl text-center"
                style={{
                  backgroundColor: 'rgba(17, 17, 40, 0.5)',
                  border: '1px solid rgba(0, 61, 165, 0.1)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    backgroundColor: 'rgba(0, 61, 165, 0.1)',
                    border: '1px solid rgba(0, 61, 165, 0.15)',
                  }}
                >
                  <Icon className="w-6 h-6 animate-pulse" style={{ color: '#0088FF' }} />
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#94A3B8]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />
    </section>
  );
}
