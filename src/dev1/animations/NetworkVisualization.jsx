import { useRef, useEffect, useCallback } from 'react';

const COLORS = {
  node: '#003DA5',
  nodeGlow: '#0088FF',
  line: 'rgba(0, 61, 165, 0.15)',
  lineActive: 'rgba(0, 136, 255, 0.3)',
  particle: '#0088FF',
  bg: 'transparent',
};

class Node {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1.5;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.canvas = canvas;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.pulsePhase += 0.02;

    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
  }

  draw(ctx) {
    const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
    const r = this.radius + pulse * 2;

    ctx.beginPath();
    ctx.arc(this.x, this.y, r + 8, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 136, 255, ${0.05 + pulse * 0.08})`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, r + 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 61, 165, ${0.1 + pulse * 0.15})`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 136, 255, ${0.7 + pulse * 0.3})`;
    ctx.fill();
  }
}

class Particle {
  constructor(startNode, endNode) {
    this.startNode = startNode;
    this.endNode = endNode;
    this.progress = Math.random();
    this.speed = Math.random() * 0.005 + 0.002;
  }

  update() {
    this.progress += this.speed;
    if (this.progress > 1) this.progress = 0;
  }

  draw(ctx) {
    const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
    const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;

    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 136, 255, ${0.8 - Math.abs(this.progress - 0.5) * 1.2})`;
    ctx.fill();
  }
}

export default function NetworkVisualization() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  const init = useCallback((canvas) => {
    const nodeCount = Math.min(40, Math.floor((canvas.width * canvas.height) / 8000));
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(canvas));
    }
    nodesRef.current = nodes;

    const particles = [];
    const connectionDist = 150;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist && Math.random() > 0.5) {
          particles.push(new Particle(nodes[i], nodes[j]));
        }
      }
    }
    particlesRef.current = particles;
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
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      init(canvas);
    };

    resize();
    window.addEventListener('resize', resize);

    const connectionDist = 150;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const particles = particlesRef.current;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 61, 165, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      nodes.forEach((node) => {
        node.update();
        node.draw(ctx);
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
