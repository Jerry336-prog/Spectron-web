import React from 'react'
import { GraduationCap, Eye, Globe } from 'lucide-react'
import MobileMockup from './MobileMockup'
import { useScrollReveal, revealStyles } from '../animations/useScrollReveal'
import studentsImg from '../../assets/images/students.png'

export default function CompanionApp() {
  const leftReveal = useScrollReveal()
  const rightReveal = useScrollReveal({ threshold: 0.1 })

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Product Value Propositions & Copywriting */}
        <div
          ref={leftReveal.ref}
          className={`lg:col-span-7 space-y-8 transition-all duration-700 ease-out ${
            leftReveal.isVisible ? revealStyles.slideRight.visible : revealStyles.slideRight.hidden
          }`}
        >
          
          {/* Section Header */}
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#3c82f6] bg-[#3c82f6]/10 rounded-full border border-[#3c82f6]/25">
              COMPANION PLATFORM
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-none">
              Your Campus, Connected.
            </h3>
            <p className="text-slate-400 font-light max-w-xl text-base sm:text-lg leading-relaxed">
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
                <h4 className="font-semibold text-slate-200 group-hover:text-[#3c82f6] transition-colors duration-300">
                  Designed for the LCU community
                </h4>
                <p className="text-slate-400 text-sm font-light">
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
                <h4 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors duration-300">
                  Built for campus visibility
                </h4>
                <p className="text-slate-400 text-sm font-light">
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
                <h4 className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                  Connecting students and businesses
                </h4>
                <p className="text-slate-400 text-sm font-light">
                  Bridges the gap between local student entrepreneurs, campus vendors, and the student body.
                </p>
              </div>
            </div>

          </div>

          {/* Student Image */}
          <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/20 overflow-hidden group hover:border-[#3c82f6]/30 transition-colors duration-300">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3c82f6]/5 to-purple-500/5 opacity-50 pointer-events-none" />
            
            <img 
              src={studentsImg} 
              alt="LCU students using the Spectron companion app" 
              className="relative w-full h-auto object-cover"
            />
          </div>

        </div>

        {/* Right Column: Live Mobile Mockup */}
        <div
          ref={rightReveal.ref}
          className={`lg:col-span-5 flex justify-center items-center transition-all duration-700 ease-out ${
            rightReveal.isVisible ? revealStyles.slideLeft.visible : revealStyles.slideLeft.hidden
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <MobileMockup />
        </div>

      </div>
    </div>
  )
}
