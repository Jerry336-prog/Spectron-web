import React, { useState, useEffect } from 'react'
import { Wifi, Battery, Signal, Search, MapPin, Coffee, BookOpen, Eye, Sparkles } from 'lucide-react'
import NotificationCard from './NotificationCard'

const SAMPLE_NOTIFICATIONS = [
  {
    id: 1,
    title: "Vanguard Cafe",
    message: "15% Student Discount activated!",
    icon: Coffee,
    time: "Just now",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    title: "Campus Marketplace",
    message: "Tola posted: Calculus Textbook",
    icon: BookOpen,
    time: "2m ago",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    title: "Profile Visibility",
    message: "3 students viewed your portfolio",
    icon: Eye,
    time: "5m ago",
    color: "from-[#3c82f6] to-blue-700"
  },
  {
    id: 4,
    title: "Smart Recommendation",
    message: "Top Match: Premium Print Shop",
    icon: Sparkles,
    time: "10m ago",
    color: "from-purple-500 to-pink-600"
  }
]

export default function MobileMockup() {
  const [activeNotifications, setActiveNotifications] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotifications(prev => {
        const nextNotif = SAMPLE_NOTIFICATIONS[index]
        const updated = [nextNotif, ...prev.slice(0, 2)]
        return updated
      })
      setIndex(prev => (prev + 1) % SAMPLE_NOTIFICATIONS.length)
    }, 4000)

    setActiveNotifications([SAMPLE_NOTIFICATIONS[0]])
    setIndex(1)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="relative mx-auto w-[290px] h-[580px] bg-slate-950 rounded-[45px] border-[10px] border-slate-800/90 shadow-[0_0_60px_-15px_rgba(60,130,246,0.3)] ring-1 ring-white/10 overflow-hidden select-none">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3 border border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800/80" />
        <div className="w-12 h-1 bg-slate-900 rounded-full" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#3c82f6]/20 border border-[#3c82f6]/30" />
      </div>

      {/* Screen Container */}
      <div className="w-full h-full bg-slate-900 overflow-hidden relative pt-12 pb-6 px-4 flex flex-col justify-between">
        {/* Status Bar */}
        <div className="absolute top-1.5 left-0 right-0 px-6 flex justify-between items-center text-[10px] font-semibold text-slate-300 font-sans z-20">
          <span>12:30</span>
          <div className="flex items-center space-x-1">
            <Signal className="w-3 h-3 text-slate-300" />
            <Wifi className="w-3 h-3 text-slate-300" />
            <Battery className="w-3 h-3 text-slate-300 rotate-90" />
          </div>
        </div>

        {/* Inner Phone Content */}
        <div className="flex flex-col space-y-4 flex-grow overflow-hidden mt-1">
          {/* Header Area */}
          <div className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded-xl border border-white/5">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-[#3c82f6]/30 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-[#3c82f6]" />
              </div>
              <span className="text-[10px] font-bold text-slate-200">LCU Campus</span>
            </div>
            <Search className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Map Grid Simulator */}
          <div className="relative h-44 rounded-xl bg-slate-950/70 border border-white/5 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
            
            {/* Center Glowing Node — brand blue */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#3c82f6]">
              <span className="absolute inset-0 rounded-full bg-[#3c82f6] animate-ping opacity-75" />
            </div>

            {/* Other active nodes */}
            <div className="absolute w-2 h-2 rounded-full bg-emerald-500 top-12 left-10">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse opacity-75" />
            </div>
            <div className="absolute w-2 h-2 rounded-full bg-purple-500 bottom-10 right-12">
              <span className="absolute inset-0 rounded-full bg-purple-500 animate-pulse opacity-75" />
            </div>

            {/* Map Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-3 flex items-center space-x-1.5 bg-slate-900/90 px-2 py-0.5 rounded-full border border-white/5 text-[8px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>42 active students</span>
            </div>
          </div>

          {/* Dynamic Notifications Stream */}
          <div className="flex-grow flex flex-col space-y-2 overflow-hidden justify-end pb-2">
            {activeNotifications.map((notif, i) => (
              <div 
                key={`${notif.id}-${i}`}
                className="animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ zIndex: activeNotifications.length - i }}
              >
                <NotificationCard 
                  title={notif.title}
                  message={notif.message}
                  icon={notif.icon}
                  time={notif.time}
                  gradient={notif.color}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Phone Home Indicator Bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-700/80 rounded-full" />
      </div>
    </div>
  )
}
