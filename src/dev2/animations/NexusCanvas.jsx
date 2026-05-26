import { useRef, useEffect, useCallback } from 'react';

const BUSINESS_NAMES = [
  'Campus Cafe', 'The Barber Shop', 'Book Hub', 'Tech Repairs',
  'Print Station', 'Food Court', 'Study Lounge', 'Fashion Store',
  'Tutoring Center', 'Photography', 'Laundry Express', 'Gym & Fitness',
];

class BusinessNode {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.name = name;
    this.radius = 6;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.glowIntensity = Math.random() * 0.5 + 0.5;
    this.users = [];
  }

  update() {
    this.pulsePhase += 0.015;
    this.x += (this.targetX - this.x) * 0.01;
    this.y += (this.targetY - this.y) * 0.01;
    this.targetX += (Math.random() - 0.5) * 0.3;
    this.targetY += (Math.random() - 0.5) * 0.3;
  }

  draw(ctx) {
    const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    const r = this.radius + pulse * 3;

    // Outer glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, r + 20, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 136, 255, ${0.03 + pulse * 0.04})`;
    ctx.fill();

    // Mid glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, r + 10, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 61, 165, ${0.06 + pulse * 0.08})`;
    ctx.fill();

    // Core
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 136, 255, ${0.8 + pulse * 0.2})`;
    ctx.fill();

    // Inner bright spot
    ctx.beginPath();
    ctx.arc(this.x, this.y, r * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + pulse * 0.3})`;
    ctx.fill();

    // Name label
    ctx.font = "11px 'Inter', sans-serif";
    ctx.fillStyle = `rgba(148, 163, 184, ${0.5 + pulse * 0.3})`;
    ctx.textAlign = 'center';
    ctx.fillText(this.name, this.x, this.y + r + 18);
  }
}

class UserNode {
  constructor(parent) {
    this.parent = parent;
    this.angle = Math.random() * Math.PI * 2;
    this.distance = Math.random() * 40 + 25;
    this.speed = (Math.random() - 0.5) * 0.008;
    this.radius = Math.random() * 1.5 + 0.8;
    this.pulsePhase = Math.random() * Math.PI * 2;
  }

  update() {
    this.angle += this.speed;
    this.pulsePhase += 0.03;
  }

  draw(ctx) {
    const x = this.parent.x + Math.cos(this.angle) * this.distance;
    const y = this.parent.y + Math.sin(this.angle) * this.distance;
    const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;

    ctx.beginPath();
    ctx.arc(x, y, this.radius + pulse, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 102, 255, ${0.3 + pulse * 0.4})`;
    ctx.fill();
  }
}

class ConnectionParticle {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    this.progress = Math.random();
    this.speed = Math.random() * 0.003 + 0.001;
  }

  update() {
    this.progress += this.speed;
    if (this.progress > 1) this.progress = 0;
  }

  draw(ctx) {
    const x = this.from.x + (this.to.x - this.from.x) * this.progress;
    const y = this.from.y + (this.to.y - this.from.y) * this.progress;
    const alpha = 1 - Math.abs(this.progress - 0.5) * 2;

    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 136, 255, ${alpha * 0.6})`;
    ctx.fill();
  }
}

export default function NexusCanvas() {
  const canvasRef = useRef(null);
  const stateRef = useRef({ businesses: [], particles: [] });
  const animRef = useRef(null);

  const initNetwork = useCallback((w, h) => {
    const businesses = [];
    const padding = 80;
    const cols = 4;
    const rows = 3;
    const cellW = (w - padding * 2) / cols;
    const cellH = (h - padding * 2) / rows;

    for (let i = 0; i < BUSINESS_NAMES.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = padding + col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.4;
      const y = padding + row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.4;
      const biz = new BusinessNode(x, y, BUSINESS_NAMES[i]);

      const userCount = Math.floor(Math.random() * 6) + 3;
      for (let j = 0; j < userCount; j++) {
        biz.users.push(new UserNode(biz));
      }
      businesses.push(biz);
    }

    const particles = [];
    for (let i = 0; i < businesses.length; i++) {
      for (let j = i + 1; j < businesses.length; j++) {
        const dx = businesses[i].x - businesses[j].x;
        const dy = businesses[i].y - businesses[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          for (let k = 0; k < 2; k++) {
            particles.push(new ConnectionParticle(businesses[i], businesses[j]));
          }
        }
      }
    }

    stateRef.current = { businesses, particles };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNetwork(rect.width, rect.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      ctx.clearRect(0, 0, rect.width, rect.height);

      const { businesses, particles } = stateRef.current;

      // Draw connections
      for (let i = 0; i < businesses.length; i++) {
        for (let j = i + 1; j < businesses.length; j++) {
          const dx = businesses[i].x - businesses[j].x;
          const dy = businesses[i].y - businesses[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300) {
            const opacity = (1 - dist / 300) * 0.12;
            ctx.beginPath();
            ctx.moveTo(businesses[i].x, businesses[i].y);
            ctx.lineTo(businesses[j].x, businesses[j].y);
            ctx.strokeStyle = `rgba(0, 61, 165, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Update and draw businesses and their users
      businesses.forEach((biz) => {
        biz.update();
        biz.users.forEach((user) => {
          user.update();
          user.draw(ctx);
        });
        biz.draw(ctx);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [initNetwork]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
