import { useEffect, useRef } from 'react';

export default function ConnectionLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const cw = () => canvas.getBoundingClientRect().width;
    const ch = () => canvas.getBoundingClientRect().height;

    // Create horizontal wave lines
    const lineCount = 8;
    const lines = Array.from({ length: lineCount }, (_, i) => ({
      y: 0,
      phase: Math.random() * Math.PI * 2,
      amplitude: 8 + Math.random() * 16,
      frequency: 0.008 + Math.random() * 0.012,
      speed: 0.01 + Math.random() * 0.02,
      alpha: 0.05 + (i / lineCount) * 0.12,
    }));

    // Pulses travelling along lines
    const pulses = [];
    let tick = 0;

    const draw = () => {
      const w = cw(), h = ch();
      ctx.clearRect(0, 0, w, h);
      tick++;

      // Spawn pulses
      if (tick % 50 === 0) {
        const li = Math.floor(Math.random() * lineCount);
        pulses.push({ lineIdx: li, x: 0, speed: 1.5 + Math.random() * 2 });
      }

      const spacing = h / (lineCount + 1);

      for (let li = 0; li < lineCount; li++) {
        const line = lines[li];
        const baseY = spacing * (li + 1);
        line.phase += line.speed;

        // Draw the wave line
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const y = baseY + Math.sin(x * line.frequency + line.phase) * line.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(60, 130, 246, ${line.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw and update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += p.speed;
        if (p.x > w) {
          pulses.splice(i, 1);
          continue;
        }
        const line = lines[p.lineIdx];
        const baseY = spacing * (p.lineIdx + 1);
        const py = baseY + Math.sin(p.x * line.frequency + line.phase) * line.amplitude;

        // Glow
        const grad = ctx.createRadialGradient(p.x, py, 0, p.x, py, 12);
        grad.addColorStop(0, 'rgba(96, 165, 250, 0.5)');
        grad.addColorStop(1, 'rgba(96, 165, 250, 0)');
        ctx.beginPath();
        ctx.arc(p.x, py, 12, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 197, 253, 0.9)';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
