import { Link2, Share2, Globe, Shield, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'About Engine', href: '#about' },
    { name: 'Why Spectron', href: '#why-spectron' },
    { name: 'Telemetry Stats', href: '#stats' },
    { name: 'Future Horizon', href: '#future-vision' }
  ]

  const resourceLinks = [
    { name: 'System Documentation', href: '#' },
    { name: 'LCU Cluster Status', href: '#' },
    { name: 'API Specifications', href: '#' },
    { name: 'Security Registry', href: '#' }
  ]

  const socials = [
    { Icon: Link2, href: '#', label: 'GitHub' },
    { Icon: Share2, href: '#', label: 'Twitter' },
    { Icon: Globe, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-[#030712] text-gray-400 border-t border-gray-900 relative overflow-hidden py-16">
      {/* Background glow node */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3c82f6]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 max-w-6xl mx-auto">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-black text-white tracking-widest uppercase">
                SPECTRON
              </span>
              <span className="text-[9px] font-mono border border-[#3c82f6]/40 px-2 py-0.5 rounded-sm bg-[#3c82f6]/5 text-[#3c82f6] shadow-[0_0_8px_rgba(60,130,246,0.1)]">
                LCU CORE
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-light">
              High-performance visibility engine designed specifically for LCU campus commerce. Unifying merchant broadcasting and student discovery networks.
            </p>
            <div className="flex gap-4">
              {socials.map((social, idx) => {
                const Icon = social.Icon
                return (
                  <a 
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-[#080d16] border border-gray-900 text-gray-500 hover:text-[#3c82f6] hover:border-[#3c82f6]/20 hover:shadow-[0_0_8px_rgba(60,130,246,0.1)] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">Platform Map</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#3c82f6] hover:translate-x-1 inline-block transition-all duration-200 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">Resources & Registry</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#3c82f6] hover:translate-x-1 inline-block transition-all duration-200 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower Info & Team Credits */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gray-700" />
            <span>&copy; {currentYear} Spectron Network.</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-[#3c82f6] fill-[#3c82f6]/20" />
            <span>by spectron</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
