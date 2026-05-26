import { useEffect, useRef } from 'react';

const LCU_BUILDINGS = [
  { name: "Senate House", x: 0.5, y: 0.32, w: 0.08, h: 0.06 },
  { name: "SUB Complex", x: 0.28, y: 0.58, w: 0.1, h: 0.07 },
  { name: "Academic Library", x: 0.42, y: 0.48, w: 0.07, h: 0.07 },
  { name: "Sports Pavilion", x: 0.75, y: 0.62, w: 0.12, h: 0.08 },
  { name: "Hall 3 Residence", x: 0.18, y: 0.36, w: 0.09, h: 0.08 },
  { name: "Tech Park & Lab", x: 0.65, y: 0.38, w: 0.08, h: 0.07 },
];

const LCU_NODES = [
  { id: 1, label: 'Senate Command', type: 'core', rx: 0.5, ry: 0.32, details: 'Main Administration & Gateway Core' },
  { id: 2, label: 'SUB Shopping Hub', type: 'hub', rx: 0.28, ry: 0.58, details: '24 Active Student Startups & Vendors' },
  { id: 3, label: 'Academic Library Café', type: 'hub', rx: 0.42, ry: 0.48, details: 'Study Zone & Coffee Lounge' },
  { id: 4, label: 'Sports Arena Plaza', type: 'hub', rx: 0.75, ry: 0.62, details: 'Athletic Zone & Outdoor Pop-ups' },
  { id: 5, label: 'Tech Lab Terminal', type: 'hub', rx: 0.65, ry: 0.38, details: 'Developer Network & Printing Hub' },
  { id: 6, label: 'Hall 3 Express', type: 'business', rx: 0.18, ry: 0.36, details: 'Laundry & Grocery Deliveries' },
  { id: 7, label: 'Quad Food Station', type: 'business', rx: 0.24, ry: 0.64, details: 'Local Campus Snack Spot' },
  { id: 8, label: 'Campus Bookstore', type: 'business', rx: 0.34, ry: 0.52, details: 'Textbooks, Stationery & Brand Items' },
  { id: 9, label: 'Central Print Hub', type: 'business', rx: 0.48, ry: 0.54, details: 'Fast Document Printing Services' },
  { id: 10, label: 'Stationery Depot', type: 'business', rx: 0.60, ry: 0.42, details: 'Academic Supplies & Accessories' },
  { id: 11, label: 'Science Café', type: 'business', rx: 0.70, ry: 0.34, details: 'Snacks, Coffee & Research Hangout' },
];

export default function NetworkGraph({ onHoverNode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -999, y: -999 };

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

    // Initialize node coordinates based on relative campus layout
    const nodes = LCU_NODES.map((n) => ({
      ...n,
      x: cw() * n.rx,
      y: ch() * n.ry,
      vx: 0,
      vy: 0,
      baseR: n.type === 'core' ? 8 : n.type === 'hub' ? 5.5 : 4,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Create paths connecting buildings / zones
    const edges = [
      [0, 1], // Senate to SUB
      [0, 2], // Senate to Library
      [0, 4], // Senate to Tech Lab
      [1, 5], // SUB to Hall 3
      [1, 6], // SUB to Quad Food
      [2, 7], // Library to Bookstore
      [2, 8], // Library to Print Hub
      [4, 9], // Tech Lab to Stationery
      [4, 10], // Tech Lab to Science Café
      [3, 1], // Sports Arena to SUB
      [3, 4], // Sports Arena to Tech Lab
    ];

    // Data packets
    const packets = [];
    const spawnPacket = () => {
      if (packets.length > 25) return;
      const edge = edges[Math.floor(Math.random() * edges.length)];
      const dir = Math.random() > 0.5 ? 1 : -1;
      packets.push({
        from: dir > 0 ? edge[0] : edge[1],
        to: dir > 0 ? edge[1] : edge[0],
        t: 0,
        speed: 0.002 + Math.random() * 0.003,
      });
    };

    let hoveredIndex = -1;

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
      hoveredIndex = -1;
      if (onHoverNode) onHoverNode(null);
    };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    let tick = 0;

    const draw = () => {
      const w = cw(), h = ch();
      ctx.clearRect(0, 0, w, h);
      tick++;

      // 1. Draw Lead City Map Landscape Blueprint Background
      // Draw road/connective pathway nets
      ctx.strokeStyle = 'rgba(60, 130, 246, 0.03)';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([6, 8]);
      ctx.beginPath();
      // Main Campus Spine
      ctx.moveTo(0.15 * w, 0.35 * h);
      ctx.lineTo(0.5 * w, 0.32 * h);
      ctx.lineTo(0.85 * w, 0.35 * h);
      // Secondary Spines
      ctx.moveTo(0.5 * w, 0.32 * h);
      ctx.lineTo(0.42 * w, 0.48 * h);
      ctx.lineTo(0.28 * w, 0.58 * h);
      ctx.moveTo(0.42 * w, 0.48 * h);
      ctx.lineTo(0.65 * w, 0.38 * h);
      ctx.lineTo(0.75 * w, 0.62 * h);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw landscape coordinate grid lines
      ctx.strokeStyle = 'rgba(60, 130, 246, 0.015)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw LCU stylized buildings (as glowing wireframe matrices)
      LCU_BUILDINGS.forEach((b) => {
        const bx = b.x * w;
        const by = b.y * h;
        const bw = b.w * w;
        const bh = b.h * h;

        // Blueprint outer box
        ctx.strokeStyle = 'rgba(60, 130, 246, 0.06)';
        ctx.lineWidth = 1;
        ctx.strokeRect(bx - bw / 2, by - bh / 2, bw, bh);

        // Tech grid lines inside building block
        ctx.strokeStyle = 'rgba(60, 130, 246, 0.02)';
        ctx.beginPath();
        for (let ix = bx - bw / 2 + 10; ix < bx + bw / 2; ix += 10) {
          ctx.moveTo(ix, by - bh / 2);
          ctx.lineTo(ix, by + bh / 2);
        }
        ctx.stroke();

        // Building tags
        ctx.fillStyle = 'rgba(148, 197, 253, 0.2)';
        ctx.font = "500 8px 'Space Grotesk', sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText(b.name.toUpperCase(), bx, by - bh / 2 - 5);
      });

      // Spawn packets
      if (tick % 20 === 0) spawnPacket();

      // Detect hover
      hoveredIndex = -1;
      let minDistance = 18;
      for (let i = 0; i < nodes.length; i++) {
        const dx = mouse.x - nodes[i].x;
        const dy = mouse.y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDistance) {
          hoveredIndex = i;
          break;
        }
      }

      // Update positions with subtle floating/spring forces centered on campus buildings
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const targetX = w * n.rx;
        const targetY = h * n.ry;

        // Float motion offset
        const floatOffset = Math.sin(tick * 0.015 + n.pulse) * 4;

        n.vx += (targetX - n.x) * 0.003;
        n.vy += (targetY + floatOffset - n.y) * 0.003;

        // Gentle magnetic pull to cursor instead of repulsion.
        // Drops to 0 when extremely close (<14px) so user can easily keep the mouse on the node.
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 100 && md > 14) {
          const force = ((100 - md) / 100) * 0.03;
          n.vx += (mdx / md) * force;
          n.vy += (mdy / md) * force;
        }

        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.93;
        n.vy *= 0.93;
      }

      // Draw edges
      for (const [a, b] of edges) {
        const na = nodes[a], nb = nodes[b];
        const isHovered = hoveredIndex === a || hoveredIndex === b;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = isHovered
          ? 'rgba(96, 165, 250, 0.35)'
          : 'rgba(60, 130, 246, 0.08)';
        ctx.lineWidth = isHovered ? 1.2 : 0.6;
        ctx.stroke();
      }

      // Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const from = nodes[p.from], to = nodes[p.to];
        const px = from.x + (to.x - from.x) * p.t;
        const py = from.y + (to.y - from.y) * p.t;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${0.8 - p.t * 0.4})`;
        ctx.fill();

        // Trace
        const tp = Math.max(0, p.t - 0.04);
        const tpx = from.x + (to.x - from.x) * tp;
        const tpy = from.y + (to.y - from.y) * tp;
        ctx.beginPath();
        ctx.moveTo(tpx, tpy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.3 - p.t * 0.15})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isHov = i === hoveredIndex;
        const pulseR = Math.sin(tick * 0.03 + n.pulse) * 0.4 + 0.4;

        // Outer glow rings
        if (n.type === 'core' || isHov) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.baseR + 8 + pulseR * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(60, 130, 246, ${isHov ? 0.12 : 0.04})`;
          ctx.fill();
        }

        // Inner core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.baseR + (isHov ? 2 : 0), 0, Math.PI * 2);
        const alpha = n.type === 'core' ? 1 : n.type === 'hub' ? 0.8 : 0.5 + pulseR * 0.15;
        ctx.fillStyle =
          n.type === 'core'
            ? '#3c82f6'
            : n.type === 'hub'
            ? `rgba(96, 165, 250, ${alpha})`
            : `rgba(148, 197, 253, ${alpha})`;
        ctx.fill();
      }

      // Send callback with node details & canvas position for the parent tooltip card
      if (hoveredIndex >= 0) {
        const hNode = nodes[hoveredIndex];
        // Calculate canvas container bounds
        const rect = canvas.getBoundingClientRect();
        if (onHoverNode) {
          onHoverNode({
            ...hNode,
            canvasX: hNode.x,
            canvasY: hNode.y,
            percentX: (hNode.x / w) * 100,
            percentY: (hNode.y / h) * 100,
          });
        }
      } else {
        if (onHoverNode) onHoverNode(null);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [onHoverNode]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair"
      style={{ display: 'block' }}
    />
  );
}
