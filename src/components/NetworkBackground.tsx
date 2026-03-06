import { useEffect, useRef } from "react";

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: { x: number; y: number; vx: number; vy: number; radius: number; pulsePhase: number }[] = [];
    let packets: DataPacket[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const initNodes = () => {
      const count = Math.floor((canvas.width * canvas.height) / 35000);
      nodes = Array.from({ length: Math.min(count, 100) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
      packets = [];
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Draw connections with gradient lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            const alpha = (1 - dist / 220) * 0.07;
            
            // Dashed line effect for some connections
            if ((i + j) % 5 === 0) {
              ctx.setLineDash([4, 8]);
            } else {
              ctx.setLineDash([]);
            }
            
            ctx.beginPath();
            ctx.strokeStyle = `hsla(165, 80%, 38%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.setLineDash([]);

      // Spawn data packets occasionally
      if (Math.random() < 0.02 && nodes.length > 1 && packets.length < 15) {
        const fromIdx = Math.floor(Math.random() * nodes.length);
        let toIdx = Math.floor(Math.random() * nodes.length);
        if (toIdx === fromIdx) toIdx = (toIdx + 1) % nodes.length;
        const dx = nodes[fromIdx].x - nodes[toIdx].x;
        const dy = nodes[fromIdx].y - nodes[toIdx].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          packets.push({
            fromNode: fromIdx,
            toNode: toIdx,
            progress: 0,
            speed: 0.008 + Math.random() * 0.008,
          });
        }
      }

      // Draw data packets (flowing dots along connections)
      packets = packets.filter((p) => {
        p.progress += p.speed;
        if (p.progress >= 1 || p.fromNode >= nodes.length || p.toNode >= nodes.length) return false;
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 4);
        grad.addColorStop(0, "hsla(165, 90%, 50%, 0.5)");
        grad.addColorStop(1, "hsla(165, 90%, 50%, 0)");
        ctx.fillStyle = grad;
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.fillStyle = "hsla(165, 90%, 60%, 0.7)";
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Draw nodes with pulse
      for (const node of nodes) {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const r = node.radius + pulse * 0.8;

        // Outer glow
        ctx.beginPath();
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
        glow.addColorStop(0, `hsla(165, 80%, 45%, ${0.06 + pulse * 0.04})`);
        glow.addColorStop(1, "hsla(165, 80%, 45%, 0)");
        ctx.fillStyle = glow;
        ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `hsla(165, 80%, 38%, ${0.15 + pulse * 0.1})`;
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      // Draw subtle circuit-like right angles occasionally
      if (nodes.length > 4) {
        for (let i = 0; i < Math.min(nodes.length, 8); i += 2) {
          const n1 = nodes[i];
          const n2 = nodes[(i + 1) % nodes.length];
          const dx = Math.abs(n1.x - n2.x);
          const dy = Math.abs(n1.y - n2.y);
          if (dx > 50 && dy > 50 && dx < 300 && dy < 300) {
            const alpha = 0.03;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(170, 70%, 35%, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n1.y); // horizontal
            ctx.lineTo(n2.x, n2.y); // vertical
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      initNodes();
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};

export default NetworkBackground;
