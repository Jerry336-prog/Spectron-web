import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Network, Terminal, Shield, RefreshCw, Layers } from 'lucide-react';
import NexusCanvas from '../animations/NexusCanvas';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../../shared/utils/animations';

const SECTORS = [
  { name: 'SUB Commercial Zone', load: '92%', status: 'HEAVY', color: '#ef4444' },
  { name: 'Hall 3 Side-Hustles', load: '85%', status: 'OPTIMAL', color: '#10b981' },
  { name: 'Academic Print Hub', load: '40%', status: 'LIGHT', color: '#3b82f6' },
  { name: 'Quad Food Court', load: '78%', status: 'OPTIMAL', color: '#10b981' },
];

export default function NexusMap() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: true });
  const [logs, setLogs] = useState([
    { time: '19:40:02', msg: 'System initialized LCU cluster Node-A', type: 'SYS' },
    { time: '19:40:15', msg: 'Queried: "Tutor near Hall 3" -> 3 matches found', type: 'QRY' },
    { time: '19:41:04', msg: 'Active offer indexed: Delight Bakes combo', type: 'IDX' },
  ]);

  // Simulate real-time campus queries/signals flowing in the terminal feed
  useEffect(() => {
    const messages = [
      'Queried: "Laundry wash" -> Hall 3 Express returned',
      'Merchant "Tech Repairs" status updated: ONLINE',
      'Indexed active deal: 10% OFF at Barber Shop',
      'Queried: "Photographer" -> SUB Zone returned',
      'System synced core nodes in 8.04ms',
      'Query matched: "Calculus tutor" -> SUB Zone Hub',
    ];
    const types = ['QRY', 'SYS', 'IDX'];

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const randomType = types[Math.floor(Math.random() * types.length)];
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

      setLogs((prev) => [
        { time: timeStr, msg: randomMsg, type: randomType },
        ...prev.slice(0, 5),
      ]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="nexus"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#060a13]"
    >
      {/* Blueprint Grid background and radial lighting */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3c82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3c82f6 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3c82f6]/3 blur-[120px] pointer-events-none" />

      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20 space-y-4"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border text-xs font-mono tracking-wider uppercase bg-[#3c82f6]/5 border-[#3c82f6]/20 text-[#60a5fa]"
          >
            <Network className="w-3.5 h-3.5 text-[#3c82f6] animate-spin-slow" />
            Ecosystem Core Matrix
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Live Campus Nexus
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-slate-400 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Real-time discoverability visualization for Lead City University. Star nodes represent active merchants, crowded by orbiting user queries, all linked through high-performance signaling paths.
          </motion.p>
        </motion.div>

        {/* Dashboard layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Terminal logs & Status parameters */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3 flex flex-col justify-between p-6 rounded-2xl border border-slate-800 bg-[#090d16]/60 backdrop-blur-md"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#3c82f6]" />
                  <span className="text-xs font-bold text-white font-mono">SYS_TERMINAL_LOGS</span>
                </div>
                <RefreshCw className="w-3 h-3 text-[#3c82f6] animate-spin-slow" />
              </div>

              {/* Rolling Term Feed */}
              <div className="space-y-3.5 font-mono text-[9px] text-[#94a3b8] min-h-[220px] select-none">
                {logs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-0.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#64748b]">{log.time}</span>
                      <span className={`px-1 py-0.5 rounded-[3px] text-[7px] font-bold ${
                        log.type === 'SYS' ? 'bg-[#3c82f6]/10 text-[#60a5fa]' : 
                        log.type === 'QRY' ? 'bg-emerald-500/10 text-emerald-400' : 
                        'bg-amber-500/10 text-amber-400'
                      }`}>
                        {log.type}
                      </span>
                    </div>
                    <span className="leading-normal break-all font-light">{log.msg}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sub System Status Card */}
            <div className="pt-6 border-t border-slate-900 mt-6 space-y-2.5">
              <div className="flex justify-between text-[10px] font-mono text-[#64748b]">
                <span>NODE INTERFACE</span>
                <span className="text-[#60a5fa]">LCU_SEC_GRID</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#64748b]">
                <span>SIGNAL LATENCY</span>
                <span className="text-white">12.04 ms</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#64748b]">
                <span>REDUNDANCY GRID</span>
                <span className="text-emerald-400">OPTIMAL</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Breathtaking network graph */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 bg-[#090d16]/30 shadow-[0_20px_50px_rgba(3,7,18,0.6)] min-h-[480px]">
            <NexusCanvas />

            {/* Futuristic Corner bracket markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#3c82f6]/30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#3c82f6]/30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#3c82f6]/30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#3c82f6]/30 pointer-events-none" />
          </div>

          {/* RIGHT COLUMN: Sector Traffic Meters */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3 flex flex-col justify-between p-6 rounded-2xl border border-slate-800 bg-[#090d16]/60 backdrop-blur-md"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#3c82f6]" />
                  <span className="text-xs font-bold text-white font-mono">SECTOR_LOADS</span>
                </div>
                <Shield className="w-3.5 h-3.5 text-[#3c82f6]" />
              </div>

              {/* Progress bars representing load */}
              <div className="space-y-5">
                {SECTORS.map((sector) => (
                  <div key={sector.name} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-slate-300 truncate max-w-[150px]">{sector.name}</span>
                      <span className="font-bold" style={{ color: sector.color }}>
                        {sector.status}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: sector.load }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: '#3c82f6' }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-[#64748b]">
                      <span>CAPACITY INDEX</span>
                      <span>{sector.load}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Static HUD indicators */}
            <div className="pt-6 border-t border-slate-900 mt-6 text-[9px] font-mono text-[#64748b] leading-relaxed select-none">
              SPECTRON MAIN MATRIX UNIT // 098A<br />
              INDEX METRIC: TOTAL ACTIVE USERS<br />
              UPDATED SECONDS AGO
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom separator line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)' }}
      />
    </section>
  );
}
