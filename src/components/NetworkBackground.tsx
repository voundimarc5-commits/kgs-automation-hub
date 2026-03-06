import { useEffect, useRef } from "react";

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    interface Node {
      x: number; y: number; vx: number; vy: number;
    }
    let nodes: Node[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const initNodes = () => {
      const count = Math.floor((canvas.width * canvas.height) / 50000);
      nodes = Array.from({ length: Math.min(count, 80) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.006;

      // Draw connections as thin wires/cables
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const alpha = (1 - dist / 200) * 0.08;
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            // Curved cable effect
            const curveOffset = Math.sin(time + i + j) * 8;

            ctx.beginPath();
            ctx.strokeStyle = `hsla(165, 80%, 38%, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.quadraticCurveTo(midX + curveOffset, midY - curveOffset, nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Flowing pulse along wire
            const pulsePos = (time * 0.5 + i * 0.1) % 1;
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos;
            if (dist < 150) {
              ctx.beginPath();
              ctx.fillStyle = `hsla(165, 90%, 55%, ${alpha * 3})`;
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw small connector nodes (squares and circles)
      for (const node of nodes) {
        const pulse = Math.sin(time * 1.5 + node.x * 0.01) * 0.5 + 0.5;

        // Small connector shape
        ctx.fillStyle = `hsla(165, 80%, 38%, ${0.08 + pulse * 0.06})`;
        ctx.fillRect(node.x - 1.5, node.y - 1.5, 3, 3);

        // Update position
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      // Right-angle circuit paths
      for (let i = 0; i < Math.min(nodes.length, 12); i += 3) {
        const n1 = nodes[i];
        const n2 = nodes[(i + 1) % nodes.length];
        const dx = Math.abs(n1.x - n2.x);
        const dy = Math.abs(n1.y - n2.y);
        if (dx > 60 && dy > 60 && dx < 250 && dy < 250) {
          ctx.beginPath();
          ctx.strokeStyle = `hsla(165, 70%, 40%, 0.035)`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();

          // Small junction dot
          ctx.beginPath();
          ctx.fillStyle = `hsla(165, 80%, 45%, 0.08)`;
          ctx.arc(n2.x, n1.y, 2, 0, Math.PI * 2);
          ctx.fill();
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
      style={{ opacity: 0.6 }}
    />
  );
};

export default NetworkBackground;
