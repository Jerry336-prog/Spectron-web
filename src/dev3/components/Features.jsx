import React from 'react'
import { Compass, Eye, ShoppingBag, Sparkles, TrendingUp, Network } from 'lucide-react'
import FeatureCard from './FeatureCard'
import CompanionApp from './CompanionApp'
import { useScrollReveal, revealStyles } from '../animations/useScrollReveal'

const FEATURES_DATA = [
  {
    title: "Discover Businesses",
    description: "Navigate local student start-ups, campus vendors, and campus-scoped services with a visual location-aware directory.",
    icon: Compass,
    gradient: "from-[#3c82f6] to-blue-700",
    glow: "shadow-[#3c82f6]/10"
  },
  {
    title: "Student Visibility",
    description: "Build, publish, and showcase your profile, academic portfolios, and student achievements to peers and faculty.",
    icon: Eye,
    gradient: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/10"
  },
  {
    title: "Campus Marketplace",
    description: "Buy, sell, and lease textbooks, devices, and accommodation options within a verified university marketplace.",
    icon: ShoppingBag,
    gradient: "from-green-500 to-emerald-600",
    glow: "shadow-green-500/10"
  },
  {
    title: "Smart Recommendations",
    description: "Receive personalized recommendations on events, student services, and peer projects curated specifically for your academic lifestyle.",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-600",
    glow: "shadow-purple-500/10"
  },
  {
    title: "Business Engagement",
    description: "Communicate directly with student vendors and campus service providers through integrated channels and active deal updates.",
    icon: TrendingUp,
    gradient: "from-rose-500 to-red-600",
    glow: "shadow-rose-500/10"
  },
  {
    title: "Campus-First Ecosystem",
    description: "Engage in a secure platform completely restricted to the university domain, keeping student interactions trusted and local.",
    icon: Network,
    gradient: "from-[#3c82f6] to-indigo-600",
    glow: "shadow-[#3c82f6]/10"
  }
]

export default function Features() {
  const headerReveal = useScrollReveal()
  const gridReveal = useScrollReveal({ threshold: 0.05 })
  const companionReveal = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="py-24 sm:py-32 bg-slate-950 text-slate-100 font-sans relative overflow-hidden">
      {/* Background ambient light gradients — brand blue */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#3c82f6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl space-y-32 relative z-10">
        
        {/* ================= SECTION 1: FEATURES GRID ================= */}
        <div className="space-y-16">
          {/* Header with scroll reveal */}
          <div
            ref={headerReveal.ref}
            className={`max-w-2xl mx-auto text-center space-y-4 transition-all duration-700 ease-out ${
              headerReveal.isVisible ? revealStyles.fadeUp.visible : revealStyles.fadeUp.hidden
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#3c82f6] bg-[#3c82f6]/10 rounded-full border border-[#3c82f6]/25">
              PLATFORM FEATURES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
              Explore Our Core Features
            </h2>
            <p className="text-slate-400 font-light text-base sm:text-lg">
              Spectron provides a complete suite of campus-tailored capabilities designed to enrich the digital experience of every student.
            </p>
          </div>

          {/* Cards Grid with staggered scroll reveal */}
          <div
            ref={gridReveal.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {FEATURES_DATA.map((feat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  gridReveal.isVisible ? revealStyles.fadeUp.visible : revealStyles.fadeUp.hidden
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <FeatureCard 
                  title={feat.title}
                  description={feat.description}
                  icon={feat.icon}
                  gradient={feat.gradient}
                  glow={feat.glow}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: COMPANION APP ================= */}
        <div
          ref={companionReveal.ref}
          className={`pt-8 border-t border-slate-900 transition-all duration-700 ease-out ${
            companionReveal.isVisible ? revealStyles.fadeUp.visible : revealStyles.fadeUp.hidden
          }`}
        >
          <CompanionApp />
        </div>

      </div>
    </section>
  )
}
