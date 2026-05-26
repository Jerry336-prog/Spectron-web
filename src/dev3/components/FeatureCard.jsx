import React from 'react'

export default function FeatureCard({ title, description, icon: Icon, gradient, glow }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#3c82f6]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Background radial glow */}
      <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 blur-[60px] transition-opacity duration-700`} />
      
      {/* Subtle border highlight on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-white/5 rounded-2xl pointer-events-none transition-all duration-500" />

      <div className="flex flex-col h-full space-y-4">
        {/* Icon wrapper */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} ${glow} border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-slate-100 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
