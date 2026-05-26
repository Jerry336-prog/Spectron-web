import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Eye, Store, Sparkles, TrendingUp, Globe, Smartphone, Bell, Heart, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../shared/utils/animations';

const features = [
  {
    icon: Search,
    title: 'Discover Businesses',
    description: 'Find campus food vendors, barbers, salons, print centers, and tutors instantly when you need them.',
  },
  {
    icon: Eye,
    title: 'Student Visibility',
    description: 'Elevate your side hustle or talent. Surface your services directly to students who need them.',
  },
  {
    icon: Store,
    title: 'Campus Marketplace',
    description: 'A dedicated, hyper-local hub built specifically for transactions and discoverability at LCU.',
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    description: 'Intelligent search results based on real-time student activity, distance, trust, and student intent.',
  },
  {
    icon: TrendingUp,
    title: 'Business Engagement',
    description: 'Understand student demand patterns. Track views, profile visits, and customer engagement directly.',
  },
  {
    icon: Globe,
    title: 'Campus-first Ecosystem',
    description: 'Built to match LCU campus life. No complex setups. Start finding customers or discovering services immediately.',
  },
];

const mockNotifications = [
  { text: 'A student is looking for a barber near Hall 3', time: 'Just now', icon: Bell },
  { text: 'Campus Cafe has updated their active menu items', time: '2m ago', icon: Store },
  { text: 'New highly-rated tutor added: Organic Chemistry', time: '10m ago', icon: Sparkles },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Features Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
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
            <Sparkles className="w-3 h-3 animate-pulse" />
            Designed For LCU
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built for Campus Visibility
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#94A3B8', fontFamily: "'Inter', sans-serif" }}
          >
            Connecting students and businesses in real time. Our campus-first ecosystem
            is tailor-made for Lead City University.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group p-8 rounded-xl transition-all duration-500 cursor-default"
                style={{
                  backgroundColor: 'rgba(17, 17, 40, 0.5)',
                  border: '1px solid rgba(0, 61, 165, 0.1)',
                }}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(0, 61, 165, 0.3)',
                  boxShadow: '0 20px 60px rgba(0, 61, 165, 0.1)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-500"
                  style={{
                    backgroundColor: 'rgba(0, 61, 165, 0.1)',
                    border: '1px solid rgba(0, 61, 165, 0.15)',
                  }}
                >
                  <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" style={{ color: '#0088FF' }} />
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#94A3B8', fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Companion App Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto pt-12">
          {/* Left: App Content */}
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
              <Smartphone className="w-3 h-3" />
              Companion App
            </motion.div>

            <motion.h3
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Designed for the LCU Community
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-[#94A3B8]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Access Spectron directly through our mobile companion app. Designed to fit
              seamlessly into campus life, letting you search for services, send active
              customer queries, post active listings, and get real-time recommendations.
            </motion.p>

            {/* List of Benefits */}
            <motion.ul variants={staggerContainer} className="space-y-4">
              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[rgba(0,61,165,0.2)] flex items-center justify-center mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0088FF]" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>Secure & Trusted</span>
                  <p className="text-xs text-[#94A3B8]" style={{ fontFamily: "'Inter', sans-serif" }}>Only verified LCU students and registered campus businesses are allowed.</p>
                </div>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[rgba(0,61,165,0.2)] flex items-center justify-center mt-1">
                  <Heart className="w-3.5 h-3.5 text-[#0088FF]" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>Real-time Notifications</span>
                  <p className="text-xs text-[#94A3B8]" style={{ fontFamily: "'Inter', sans-serif" }}>Get instant pings when a student searches for your service or side hustle.</p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Right: Premium CSS Phone Mockup & Floating UI Cards */}
          <div className="relative flex justify-center items-center py-8">
            {/* Background Radial Glow */}
            <div
              className="absolute w-[300px] h-[300px] rounded-full pointer-events-none filter blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, #003DA5 0%, transparent 70%)',
              }}
            />

            {/* CSS Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-[280px] h-[550px] rounded-[40px] p-3 shadow-[0_0_50px_rgba(0,61,165,0.2)]"
              style={{
                backgroundColor: '#1E293B',
                border: '4px solid rgba(0, 61, 165, 0.4)',
                boxShadow: '0 0 40px rgba(0, 61, 165, 0.25)',
              }}
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-gray-800 rounded-full mb-1"></div>
              </div>

              {/* Screen Content */}
              <div
                className="w-full h-full rounded-[30px] overflow-hidden relative flex flex-col pt-10"
                style={{ backgroundColor: '#0A0A1A' }}
              >
                {/* Simulated App Header */}
                <div className="px-4 py-3 border-b border-[#1E293B] flex items-center justify-between">
                  <span className="text-xs font-bold font-display text-white">Spectron</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                {/* Simulated Feed */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-none">
                  {/* Greeting */}
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">Lead City Campus Hub</h4>
                    <p className="text-[10px] text-[#94A3B8]">120+ active businesses near you</p>
                  </div>

                  {/* Search Bar */}
                  <div className="p-2.5 rounded-lg border border-[#1E293B] flex items-center gap-2" style={{ backgroundColor: '#111128' }}>
                    <Search className="w-3.5 h-3.5 text-[#0088FF]" />
                    <span className="text-[9px] text-[#64748B]">Search food, barber, print...</span>
                  </div>

                  {/* Active listings */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold tracking-wide uppercase text-[#64748B]">Surfaced Nearby</span>
                    <div className="p-3 rounded-lg border border-[#003DA5]/30 flex flex-col gap-1.5" style={{ backgroundColor: 'rgba(0,61,165,0.08)' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-white">Hall 3 Laundry Hub</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#003DA5] text-white">Open</span>
                      </div>
                      <p className="text-[9px] text-[#94A3B8]">Active since 8:00 AM • Hall 3 Basement</p>
                    </div>
                    <div className="p-3 rounded-lg border border-[#1E293B] flex flex-col gap-1.5" style={{ backgroundColor: '#111128' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-white">Delight Bakes</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#1E293B] text-[#94A3B8]">Closing Soon</span>
                      </div>
                      <p className="text-[9px] text-[#94A3B8]">Fresh pastries & campus deliveries</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Notification Previews */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-center gap-4">
              {mockNotifications.map((notif, index) => {
                const Icon = notif.icon;
                return (
                  <motion.div
                    key={notif.text}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: index % 2 === 0 ? 70 : -70 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className="p-3 rounded-xl border border-spectron-blue-glow/20 flex gap-3 shadow-[0_10px_30px_rgba(0,61,165,0.15)] max-w-[220px]"
                    style={{
                      backgroundColor: 'rgba(17, 17, 40, 0.95)',
                      backdropFilter: 'blur(10px)',
                      alignSelf: index % 2 === 0 ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[rgba(0,61,165,0.2)] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#0088FF]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] leading-snug font-medium text-white">{notif.text}</span>
                      <span className="text-[8px] text-[#64748B] mt-1">{notif.time}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 61, 165, 0.2), transparent)' }}
      />
    </section>
  );
}
