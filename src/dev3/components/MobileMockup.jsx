import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, User, BookOpen, Clock, Calendar, CheckSquare, Sparkles, Compass, Home, GraduationCap, X } from 'lucide-react';

const SAMPLE_QUOTES = [
  {
    text: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
    badge: "Did you Know?"
  },
  {
    text: "Spectron tracks LCU bus peak hours to help you beat the shuttle rush.",
    author: "Campus Tip",
    badge: "Shuttle Sync"
  },
  {
    text: "Faculty of Law Library is hosting an open-table research session at 4 PM.",
    author: "Live Event",
    badge: "Academic"
  }
];

export default function MobileMockup() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [markedAttendance, setMarkedAttendance] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [bellAlert, setBellAlert] = useState(false);

  const rotateQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % SAMPLE_QUOTES.length);
  };

  return (
    <div className="relative mx-auto w-[290px] h-[580px] bg-[#030712] rounded-[45px] border-[10px] border-slate-800/90 shadow-[0_0_50px_-10px_rgba(60,130,246,0.25)] ring-1 ring-white/10 overflow-hidden select-none text-white font-sans">
      
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#030712] rounded-full z-30 flex items-center justify-between px-3 border border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800/80" />
        <div className="w-10 h-1 bg-slate-900 rounded-full" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#3c82f6]/20 border border-[#3c82f6]/30" />
      </div>

      {/* Screen Area */}
      <div className="w-full h-full bg-[#050b18] overflow-hidden relative pt-12 pb-[72px] px-4 flex flex-col justify-between">
        
        {/* Status Bar */}
        <div className="absolute top-2.5 left-0 right-0 px-6 flex justify-between items-center text-[9px] font-semibold text-slate-300 z-20">
          <span>11:34 PM</span>
          <div className="flex items-center space-x-1.5">
            <span className="text-[8px] text-emerald-400">4G</span>
            <div className="w-3.5 h-2 border border-slate-400 rounded-sm p-0.5 flex items-center">
              <div className="h-full w-3/4 bg-slate-300 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Tab-driven Display Content */}
        <div className="flex-grow flex flex-col overflow-y-auto scrollbar-none space-y-4">
          
          {activeTab === 'home' && (
            <>
              {/* Header Navigation & Bell / Profile Buttons */}
              <div className="flex items-center justify-between mt-1">
                <div className="text-left">
                  <p className="text-[11px] text-slate-400 font-medium">Good evening 😴,</p>
                  <h3 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Mark
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {/* Bell Alerts */}
                  <button
                    onClick={() => setBellAlert(!bellAlert)}
                    className="relative w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white"
                  >
                    <Bell className="w-4 h-4" />
                    {bellAlert && <span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />}
                  </button>

                  {/* Profile Indicator */}
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-500 p-0.5 flex items-center justify-center bg-white/[0.04]">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                </div>
              </div>

              {/* Blue Quote Dashboard Card */}
              <div className="relative p-4 rounded-2xl bg-[#1b73e8] overflow-hidden text-left flex justify-between items-center shadow-md">
                <div className="max-w-[70%] space-y-1">
                  <p className="text-[10px] leading-relaxed font-semibold text-white/95">
                    "{SAMPLE_QUOTES[currentQuoteIndex].text}"
                  </p>
                  <p className="text-[8px] font-mono text-white/60">
                    - {SAMPLE_QUOTES[currentQuoteIndex].author}
                  </p>
                </div>

                {/* Circular glowing lightning badge */}
                <button
                  onClick={rotateQuote}
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex flex-col items-center justify-center gap-0.5 text-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-pulse"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[6px] font-bold text-center leading-none">
                    {SAMPLE_QUOTES[currentQuoteIndex].badge}
                  </span>
                </button>
              </div>

              {/* Quick Actions Title */}
              <div className="text-left mt-2">
                <h4 className="text-xs font-bold text-white tracking-wide">
                  Quick Actions
                </h4>
              </div>

              {/* Grid actions matching the layout */}
              <div className="grid grid-cols-3 gap-2">
                
                {/* Attendance Action */}
                <button
                  onClick={() => setMarkedAttendance(!markedAttendance)}
                  className={`p-2.5 rounded-xl border text-left flex flex-col justify-between h-20 transition-all duration-300 ${
                    markedAttendance 
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-white' 
                      : 'bg-white/[0.02] border-white/[0.08] hover:border-emerald-500/30'
                  }`}
                >
                  <div className={`p-1 w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center ${markedAttendance ? 'text-emerald-400' : 'text-slate-400'}`}>
                    <CheckSquare className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[9px] font-bold leading-none">Attendance</h5>
                    <p className="text-[7px] text-slate-500 mt-0.5 truncate">
                      {markedAttendance ? 'Checked In! ✅' : 'Mark presence'}
                    </p>
                  </div>
                </button>

                {/* Resources Action */}
                <button
                  onClick={() => setShowResources(true)}
                  className="p-2.5 rounded-xl border bg-white/[0.02] border-white/[0.08] hover:border-[#3c82f6]/30 text-left flex flex-col justify-between h-20 transition-all"
                >
                  <div className="p-1 w-6 h-6 rounded bg-[#3c82f6]/10 flex items-center justify-center text-[#3c82f6]">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[9px] font-bold leading-none">Resources</h5>
                    <p className="text-[7px] text-slate-500 mt-0.5 truncate">Access TQs & Notes</p>
                  </div>
                </button>

                {/* Schedule Action */}
                <button
                  onClick={() => setShowSchedule(true)}
                  className="p-2.5 rounded-xl border bg-white/[0.02] border-white/[0.08] hover:border-amber-500/30 text-left flex flex-col justify-between h-20 transition-all"
                >
                  <div className="p-1 w-6 h-6 rounded bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[9px] font-bold leading-none">Schedule</h5>
                    <p className="text-[7px] text-slate-500 mt-0.5 truncate">View timetable</p>
                  </div>
                </button>

              </div>

              {/* Today's Activities */}
              <div className="text-left space-y-2 mt-1">
                <h4 className="text-xs font-bold text-white tracking-wide">
                  Today's Activities
                </h4>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-xl bg-white/[0.01] border border-white/[0.04] flex justify-between items-center">
                    <div>
                      <h6 className="text-[9px] font-bold">ACC 101 Lecture</h6>
                      <p className="text-[7px] text-slate-500">Faculty of Management // Hall A</p>
                    </div>
                    <span className="text-[7px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      10:00 AM
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.01] border border-white/[0.04] flex justify-between items-center">
                    <div>
                      <h6 className="text-[9px] font-bold">Spectron Live Demo</h6>
                      <p className="text-[7px] text-slate-500">Student Union Courtyard</p>
                    </div>
                    <span className="text-[7px] font-mono text-[#3c82f6] bg-[#3c82f6]/10 px-1.5 py-0.5 rounded">
                      02:30 PM
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'explore' && (
            <div className="flex-grow flex flex-col justify-center items-center text-center p-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#3c82f6]/10 flex items-center justify-center text-[#3c82f6]">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <h4 className="text-sm font-bold">LCU Discovery Net</h4>
              <p className="text-[9px] text-slate-400 max-w-[180px] leading-relaxed">
                Scan active student delivery networks, food stalls, and transport updates on campus in real time.
              </p>
              <div className="p-2 rounded-xl border border-white/5 bg-white/[0.02] w-full text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-[#60a5fa] font-bold">SUB Commercial Zone</span>
                  <span className="text-[7px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">24 active</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'academic' && (
            <div className="flex-grow flex flex-col justify-center items-center text-center p-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold">Academic Hub</h4>
              <p className="text-[9px] text-slate-400 max-w-[180px] leading-relaxed">
                Synchronized timetables, verified lecture slides, past question vaults, and grade portals.
              </p>
            </div>
          )}

        </div>

        {/* Custom Curved Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#040813] border-t border-white/[0.05] flex justify-around items-center px-4 z-20">
          {/* Compass Icon Link */}
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'explore' ? 'text-[#3c82f6]' : 'text-slate-500'}`}
          >
            <Compass className="w-4.5 h-4.5" />
            <span className="text-[7px] font-medium leading-none">Explore</span>
          </button>

          {/* House Center Circular Home Button */}
          <button
            onClick={() => setActiveTab('home')}
            className={`w-11 h-11 rounded-full -mt-6 flex items-center justify-center shadow-lg transition-transform ${
              activeTab === 'home' 
                ? 'bg-[#1b73e8] text-white shadow-[#1b73e8]/30 scale-105' 
                : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            <Home className="w-5 h-5" />
          </button>

          {/* Graduation Cap Link */}
          <button
            onClick={() => setActiveTab('academic')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'academic' ? 'text-[#3c82f6]' : 'text-slate-500'}`}
          >
            <GraduationCap className="w-4.5 h-4.5" />
            <span className="text-[7px] font-medium leading-none">Academic</span>
          </button>
        </div>

        {/* Phone Home Bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-700/80 rounded-full z-30" />
      </div>

      {/* Overlay Tooltip: Resources Portal Modal */}
      <AnimatePresence>
        {showResources && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#030712]/90 z-40 flex items-center justify-center p-4"
          >
            <div className="bg-[#050b18] border border-white/10 rounded-2xl p-4 w-full text-left space-y-3 relative shadow-2xl">
              <button 
                onClick={() => setShowResources(false)}
                className="absolute top-3 right-3 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <h5 className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-wider">LCU Resources Vault</h5>
              <div className="space-y-1.5">
                {['ACC 101 Lecture Notes.pdf', 'CSC 201 Past Questions.zip', 'BUS 102 Assignment.docx'].map((file) => (
                  <div key={file} className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04] text-[8px] text-slate-300 flex justify-between items-center">
                    <span className="truncate max-w-[150px]">{file}</span>
                    <span className="text-[#3c82f6] text-[7px] hover:underline cursor-pointer">Download</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay Tooltip: Schedule Portal Drawer */}
      <AnimatePresence>
        {showSchedule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#030712]/90 z-40 flex items-center justify-center p-4"
          >
            <div className="bg-[#050b18] border border-white/10 rounded-2xl p-4 w-full text-left space-y-3 relative shadow-2xl">
              <button 
                onClick={() => setShowSchedule(false)}
                className="absolute top-3 right-3 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <h5 className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Timetable Schedule</h5>
              <div className="space-y-1.5">
                {[
                  { time: '10:00 AM', subj: 'Computer Science Lab', loc: 'Tech Block 2' },
                  { time: '01:00 PM', subj: 'Law and Society Lecture', loc: 'Hall A' },
                  { time: '03:30 PM', subj: 'Commercial Startups Fair', loc: 'SUB Square' }
                ].map((item) => (
                  <div key={item.subj} className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04] text-[8px] text-slate-300 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white block">{item.subj}</span>
                      <span className="text-slate-500">{item.loc}</span>
                    </div>
                    <span className="text-amber-500 text-[8px] font-mono">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
