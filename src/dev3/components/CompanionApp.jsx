import React from 'react';
import { GraduationCap, Eye, Globe, Shield, Users } from 'lucide-react';
import MobileMockup from './MobileMockup';
import { useScrollReveal, revealStyles } from '../animations/useScrollReveal';
import leadCityLogo from '../../assets/images/leadcity.jpg';
import studentsImg from '../../assets/images/students.png';

export default function CompanionApp() {
  const leftReveal = useScrollReveal();
  const rightReveal = useScrollReveal({ threshold: 0.1 });
  const galleryReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      
      {/* ================= ROW 1: APP SHOWCASE ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Product Value Propositions & Copywriting */}
        <div
          ref={leftReveal.ref}
          className={`lg:col-span-6 space-y-8 transition-all duration-700 ease-out ${
            leftReveal.isVisible ? revealStyles.slideRight.visible : revealStyles.slideRight.hidden
          }`}
        >
          {/* Section Header */}
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#3c82f6] bg-[#3c82f6]/10 rounded-full border border-[#3c82f6]/25">
              COMPANION PLATFORM
            </span>
            <h3 className="text-3.5xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Your Campus, Connected.
            </h3>
            <p className="text-slate-400 font-light max-w-xl text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Experience Spectron anywhere. Seamlessly trade, discover local campus businesses, and boost your university visibility directly from your device.
            </p>
          </div>

          {/* Value Pillars */}
          <div className="space-y-6">
            
            {/* Pillar 1 */}
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-[#3c82f6]/30 transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-[#3c82f6]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-200 group-hover:text-[#3c82f6] transition-colors duration-300 text-sm sm:text-base" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Designed for the LCU community
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Tailored exclusively for the Lead City University environment, mapping to your daily academic lifestyle.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-amber-500/30 transition-all duration-300">
                <Eye className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Built for campus visibility
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Boost your student portfolio, project reach, or small campus business instantly to peers and faculty.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 transition-all duration-300">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Connecting students and businesses
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Bridges the gap between local student entrepreneurs, campus vendors, and the student body.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Clean Interactive Mobile Mockup */}
        <div
          ref={rightReveal.ref}
          className={`lg:col-span-6 flex justify-center items-center transition-all duration-700 ease-out ${
            rightReveal.isVisible ? revealStyles.slideLeft.visible : revealStyles.slideLeft.hidden
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative shadow-[0_25px_60px_rgba(60,130,246,0.15)] rounded-[45px]">
            <MobileMockup />
          </div>
        </div>

      </div>

      {/* ================= ROW 2: BRAND SHOWCASE GALLERY ================= */}
      <div
        ref={galleryReveal.ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-900 transition-all duration-700 ease-out ${
          galleryReveal.isVisible ? revealStyles.fadeUp.visible : revealStyles.fadeUp.hidden
        }`}
      >
        
        {/* Left Gallery Item: LCU School Symbol */}
        <div className="group relative rounded-3xl border border-white/[0.06] bg-slate-950/40 p-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden hover:border-[#3c82f6]/30 transition-colors duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3c82f6]/5 to-transparent pointer-events-none" />
          
          {/* Huge School Symbol Circle */}
          <div className="relative w-28 h-28 rounded-full border-2 border-white/[0.08] overflow-hidden bg-slate-900 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-[#3c82f6]/20 transition-all duration-500">
            <img 
              src={leadCityLogo} 
              alt="Lead City University Symbol" 
              className="w-full h-full object-cover filter saturate-[1.05]"
            />
          </div>

          <div className="text-center md:text-left space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#3c82f6]/10 border border-[#3c82f6]/20">
              <Shield className="w-3.5 h-3.5 text-[#3c82f6]" />
              <span className="text-[9px] font-bold text-[#60a5fa] tracking-wider uppercase font-mono">AUTHORIZED COMPANION APP</span>
            </div>
            <h4 className="text-xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Lead City Identity
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Representing Lead City University core. The companion app connects the LCU campus ecosystem, bringing academic utilities, transport updates, and student small businesses into a single unified space.
            </p>
          </div>
        </div>

        {/* Right Gallery Item: LCU Student Community Photo */}
        <div className="group relative rounded-3xl border border-white/[0.06] bg-slate-950/40 p-8 flex flex-col md:flex-row items-center gap-6 overflow-hidden hover:border-[#3c82f6]/30 transition-colors duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />
          
          {/* Framed student photo container - perfectly sized for the portrait image */}
          <div className="relative w-24 h-36 rounded-2xl border-2 border-white/[0.08] overflow-hidden bg-slate-900 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-emerald-500/20 transition-all duration-500">
            <img 
              src={studentsImg} 
              alt="Lead City Students" 
              className="w-full h-full object-cover filter saturate-[1.05]"
            />
          </div>

          <div className="text-center md:text-left space-y-2.5 flex-grow">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase font-mono">CAMPUS DIGITAL COHESION</span>
            </div>
            <h4 className="text-xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              LCU Student Community
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
              Building the future of student discovery. We place peer-to-peer markets, accommodation deals, and small campus service providers right at LCU students' fingertips, facilitating connection like never before.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
