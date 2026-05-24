import React from 'react'

export default function NotificationCard({ title, message, icon: Icon, time, gradient }) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-950/70 border border-white/5 backdrop-blur-md shadow-lg select-none">
      {/* Icon with gradient accent */}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${gradient} border border-white/10 shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>

      {/* Text details */}
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-baseline">
          <h4 className="text-[10px] font-bold text-slate-100 truncate">{title}</h4>
          <span className="text-[8px] text-slate-500 font-medium shrink-0 ml-1">{time}</span>
        </div>
        <p className="text-[9px] text-slate-400 font-light leading-tight truncate mt-0.5">
          {message}
        </p>
      </div>
    </div>
  )
}
