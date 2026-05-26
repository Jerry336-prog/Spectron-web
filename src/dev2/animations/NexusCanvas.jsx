import { useRef, useEffect, useCallback, useState } from 'react';

const BUSINESS_DATA = [
  { name: 'Campus Cafe', category: 'Food & Drink', status: 'Active Now', deals: 'Free delivery to Hall 3', rating: '4.8', load: '92%', x_pct: 0.25, y_pct: 0.3 },
  { name: 'The Barber Shop', category: 'Grooming', status: 'Active Now', deals: '10% off for freshmen', rating: '4.9', load: '85%', x_pct: 0.15, y_pct: 0.55 },
  { name: 'Book Hub', category: 'Academics', status: 'Active Now', deals: 'Rent textbooks weekly', rating: '4.7', load: '60%', x_pct: 0.35, y_pct: 0.75 },
  { name: 'Tech Repairs', category: 'Support', status: 'Active Now', deals: 'Free device checkups', rating: '4.9', load: '78%', x_pct: 0.5, y_pct: 0.8 },
  { name: 'Print Station', category: 'Support', status: 'Active Now', deals: 'Bulk discount at Library', rating: '4.6', load: '88%', x_pct: 0.65, y_pct: 0.75 },
  { name: 'Food Court', category: 'Food & Drink', status: 'Active Now', deals: 'Active combo packages', rating: '4.5', load: '95%', x_pct: 0.8, y_pct: 0.6 },
  { name: 'Fashion Store', category: 'Retail', status: 'Active Now', deals: 'New arrivals ready', rating: '4.8', load: '40%', x_pct: 0.85, y_pct: 0.35 },
  { name: 'Study Lounge', category: 'Academics', status: 'Active Now', deals: 'Quiet spaces open', rating: '4.9', load: '70%', x_pct: 0.65, y_pct: 0.2 },
  { name: 'Laundry Express', category: 'Support', status: 'Active Now', deals: 'Express wash within 4h', rating: '4.7', load: '82%', x_pct: 0.35, y_pct: 0.2 },
];

class Particle {
  constructor(fromX, fromY, toX, toY) {
    this.fromX = fromX;
    this.fromY = fromY;
    this.toX = toX;
    this.toY = toY;
    this.progress = Math.random();
    this.speed = Math.random() * 0.006 + 0.003;
  }

  update() {
    this.progress += this.speed;
    if (this.progress > 1) {
      this.progress = 0;
    }
  }

  draw(ctx) {
    const x = this.fromX + (this.toX - this.fromX) * this.progress;
    const y = this.fromY + (this.toY - this.fromY) * this.progress;
    const size = 1.5;
    const opacity = 1 - Math.abs(this.progress - 0.5) * 2;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.85})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#3c82f6';
    ctx.fill();
    ctx.shadowBlur = 0; // reset
  }
}

export default function NexusCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const stateRef = useRef({
    width: 0,
    height: 0,
    core: { x: 0, y: 0, r: 12 },
    nodes: [],
    particles: [],
    gridLines: [],
    mouse: { x: -1000, y: -1000 },
  });

  const initNetwork = useCallback((w, h) => {
    const state = stateRef.current;
    state.width = w;
    state.height = h;
    state.core = { x: w / 2, y: h / 2, r: 10 };

    // Build nodes matching percentages of layout size
    state.nodes = BUSINESS_DATA.map((data) => {
      const x = w * data.x_pct;
      const y = h * data.y_pct;
      
      // Build orbiting students
      const users = [];
      const userCount = Math.floor(Math.random() * 5) + 3;
      for (let i = 0; i < userCount; i++) {
        users.push({
          angle: Math.random() * Math.PI * 2,
          dist: Math.random() * 25 + 20,
          speed: (Math.random() - 0.5) * 0.015 + 0.005,
          radius: Math.random() * 1.5 + 0.8,
          phase: Math.random() * Math.PI * 2,
        });
      }

      return {
        x,
        y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        r: 6,
        pulsePhase: Math.random() * Math.PI * 2,
        users,
        data,
      };
    });

    // Build connections and particles
    state.particles = [];
    state.nodes.forEach((node) => {
      // Connect to Core
      for (let i = 0; i < 2; i++) {
        state.particles.push(new Particle(state.core.x, state.core.y, node.x, node.y));
        state.particles.push(new Particle(node.x, node.y, state.core.x, state.core.y));
      }
    });

    // Build static digital grid elements
    state.gridLines = [];
    const step = 50;
    for (let x = 0; x < w; x += step) {
      state.gridLines.push({ x1: x, y1: 0, x2: x, y2: h, opacity: 0.02 + Math.random() * 0.02 });
    }
    for (let y = 0; y < h; y += step) {
      state.gridLines.push({ x1: 0, y1: y, x2: w, y2: y, opacity: 0.02 + Math.random() * 0.02 });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNetwork(rect.width, rect.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let localHovered = null;

    const animate = () => {
      const state = stateRef.current;
      const w = state.width;
      const h = state.height;

      // Clear with slight trailing alpha for smooth flow
      ctx.fillStyle = '#060a13';
      ctx.fillRect(0, 0, w, h);

      // 1. Draw Digital Grid Background
      ctx.lineWidth = 0.5;
      state.gridLines.forEach((line) => {
        ctx.strokeStyle = `rgba(59, 130, 246, ${line.opacity})`;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      // 2. Draw Connection Lines
      ctx.shadowBlur = 0;
      state.nodes.forEach((node) => {
        const dx = node.x - state.core.x;
        const dy = node.y - state.core.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Core to Node Link with glowing beam effect
        const gradient = ctx.createLinearGradient(state.core.x, state.core.y, node.x, node.y);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.15)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(state.core.x, state.core.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();

        // Subtly connect nodes near each other
        state.nodes.forEach((otherNode) => {
          if (otherNode === node) return;
          const odx = otherNode.x - node.x;
          const ody = otherNode.y - node.y;
          const odist = Math.sqrt(odx * odx + ody * ody);
          if (odist < 140) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - odist / 140) * 0.06})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      // 3. Update & Draw Particles along lines
      state.particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // 4. Update & Draw Core
      const pulseTime = Date.now() * 0.0025;
      const corePulse = Math.sin(pulseTime) * 0.15 + 1;
      const coreX = state.core.x;
      const coreY = state.core.y;

      // Outer rings of central Core
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(coreX, coreY, state.core.r * 3.5 * corePulse, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.beginPath();
      ctx.arc(coreX, coreY, state.core.r * 6 * corePulse, 0, Math.PI * 2);
      ctx.stroke();

      // Main core glowing ball
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#3c82f6';
      ctx.beginPath();
      ctx.arc(coreX, coreY, state.core.r * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = '#3c82f6';
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Core interior details
      ctx.beginPath();
      ctx.arc(coreX, coreY, state.core.r * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // Core HUD Text
      ctx.font = "9px 'Space Grotesk', sans-serif";
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText("SPECTRON ENGINE CORE", coreX, coreY - 24);

      // 5. Update & Draw Business Nodes
      localHovered = null;

      state.nodes.forEach((node) => {
        node.pulsePhase += 0.02;
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;

        // Apply gentle floating drift
        const driftAmp = 0.12;
        node.x = node.originX + Math.sin(node.pulsePhase * 0.5) * 8 * driftAmp;
        node.y = node.originY + Math.cos(node.pulsePhase * 0.5) * 8 * driftAmp;

        // Check hover
        const distToMouse = Math.hypot(node.x - state.mouse.x, node.y - state.mouse.y);
        const isHovered = distToMouse < 22;

        if (isHovered) {
          localHovered = node.data;
        }

        const sizeMult = isHovered ? 1.5 : 1;
        const radius = node.r * sizeMult;

        // Visual links around the star node
        if (isHovered) {
          ctx.strokeStyle = '#3c82f6';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 3.5, 0, Math.PI * 2);
          ctx.stroke();

          // Cyberreticle overlay
          ctx.setLineDash([2, 4]);
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 5.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Star glowing aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius + 15 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? 'rgba(59, 130, 246, 0.15)' : `rgba(59, 130, 246, ${0.03 + pulse * 0.05})`;
        ctx.fill();

        // Node core
        ctx.shadowBlur = isHovered ? 15 : 6;
        ctx.shadowColor = '#3c82f6';
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FFFFFF' : '#3c82f6';
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Center pinpoint
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#3c82f6' : '#FFFFFF';
        ctx.fill();

        // Draw orbiting student dots around the merchants
        node.users.forEach((u) => {
          u.angle += u.speed;
          u.phase += 0.04;
          const upulse = Math.sin(u.phase) * 0.5 + 0.5;

          const ux = node.x + Math.cos(u.angle) * (u.dist + upulse * 3);
          const uy = node.y + Math.sin(u.angle) * (u.dist + upulse * 3);

          ctx.beginPath();
          ctx.arc(ux, uy, u.radius + upulse * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? 'rgba(59, 130, 246, 0.95)' : `rgba(59, 130, 246, ${0.45 + upulse * 0.4})`;
          ctx.fill();
        });

        // Business Label
        ctx.font = isHovered ? "bold 11px 'Space Grotesk', sans-serif" : "11px 'Inter', sans-serif";
        ctx.fillStyle = isHovered ? '#FFFFFF' : 'rgba(148, 163, 184, 0.65)';
        ctx.textAlign = 'center';
        ctx.fillText(node.data.name, node.x, node.y + radius + 18);
      });

      // 6. Draw HUD Tooltip panel for hovered business
      if (localHovered) {
        setHoveredNode(localHovered);
      } else {
        setHoveredNode(null);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [initNetwork]);

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    stateRef.current.mouse = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    stateRef.current.mouse = { x: -1000, y: -1000 };
    setHoveredNode(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Cybernetic HUD Overlay Card */}
      {hoveredNode && (
        <div
          className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 p-5 rounded-xl border border-[#3c82f6]/30 bg-[#090d16]/95 backdrop-blur-md shadow-[0_15px_40px_rgba(59,130,246,0.15)] flex flex-col gap-3 font-sans animate-fade-in"
          style={{ transition: 'opacity 0.2s ease' }}
        >
          <div className="flex justify-between items-start pb-2.5 border-b border-slate-900">
            <div>
              <span className="text-[9px] font-mono tracking-wider text-[#3c82f6] uppercase">{hoveredNode.category}</span>
              <h4 className="text-sm font-bold text-white font-heading mt-0.5">{hoveredNode.name}</h4>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
              {hoveredNode.status}
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#64748B]">Active Campaign</span>
              <span className="text-white font-medium">{hoveredNode.deals}</span>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#64748B]">Reputation Score</span>
              <span className="text-[#0088FF] font-semibold">★ {hoveredNode.rating} / 5.0</span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-[#64748B]">
                <span>ENGAGEMENT TRAFFIC INDEX</span>
                <span>{hoveredNode.load}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3c82f6] rounded-full"
                  style={{ width: hoveredNode.load }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid Coordinates Label Layer */}
      <div className="absolute top-4 right-4 text-[9px] font-mono text-[#64748B]/40 pointer-events-none text-right hidden sm:block">
        GRID INDEX // LCU-SEC4<br />
        SYNC STATS // ACTIVE<br />
        COORD // 7°26'N 3°54'E
      </div>
    </div>
  );
}
