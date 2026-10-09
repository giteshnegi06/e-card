"use client";
import { useEffect, useRef, useState } from "react";

const HEART = "M12 21C5 15 2 11.5 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 3.5-3 7-10 13Z";
const W = 280;
const H = 260;

export default function ScratchHeart({ date, day, time }) {
  const canvasRef = useRef(null);
  const total = useRef(1);
  const moves = useRef(0);
  const down = useRef(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const c = canvasRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = W * dpr;
    c.height = H * dpr;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.scale(dpr, dpr);
    ctx.save();
    ctx.scale(W / 24, H / 24);
    const g = ctx.createRadialGradient(8, 7, 1, 12, 12, 14);
    g.addColorStop(0, "#c9d4bc");
    g.addColorStop(1, "#7f9470");
    ctx.fillStyle = g;
    ctx.fill(new Path2D(HEART));
    ctx.restore();
    // glitter
    for (let i = 0; i < 260; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5})`;
      ctx.globalCompositeOperation = "source-atop";
      ctx.fillRect(Math.random() * W, Math.random() * H, 1.4, 1.4);
    }
    ctx.globalCompositeOperation = "source-over";
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    let n = 0;
    for (let i = 3; i < d.length; i += 16) if (d[i] > 10) n++;
    total.current = n || 1;
  }, []);

  const check = () => {
    const c = canvasRef.current;
    const d = c.getContext("2d").getImageData(0, 0, c.width, c.height).data;
    let n = 0;
    for (let i = 3; i < d.length; i += 16) if (d[i] > 10) n++;
    if (n / total.current < 0.45) setDone(true);
  };

  const scratch = (e) => {
    if (!down.current) return;
    const c = canvasRef.current;
    const r = c.getBoundingClientRect();
    const ctx = c.getContext("2d");
    const dpr = c.width / r.width;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc((e.clientX - r.left) * dpr, (e.clientY - r.top) * dpr, 22 * dpr, 0, Math.PI * 2);
    ctx.fill();
    if (++moves.current % 8 === 0) check();
  };

  return (
    <div className="scratch" style={{ width: W, height: H }}>
      <svg viewBox="0 0 24 24" preserveAspectRatio="none" className="scratch-under" aria-hidden="true">
        <path d={HEART} fill="#fffdf6" stroke="#c9a96e" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="scratch-text">
        <span className="inv">You&apos;re Invited!</span>
        <span className="sc-date">{date}</span>
        <span className="sc-day">{day}</span>
        <span className="sc-time">{time}</span>
      </div>
      <canvas
        ref={canvasRef}
        className={done ? "gone" : ""}
        style={{ width: W, height: H }}
        onPointerDown={(e) => {
          down.current = true;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {}
          scratch(e);
        }}
        onPointerMove={scratch}
        onPointerUp={() => {
          down.current = false;
          check();
        }}
        onPointerCancel={() => (down.current = false)}
      />
    </div>
  );
}
