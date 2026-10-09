"use client";
import { useEffect, useState } from "react";

const calc = (target) => {
  const d = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    Days: Math.floor(d / 864e5),
    Hours: Math.floor(d / 36e5) % 24,
    Minutes: Math.floor(d / 6e4) % 60,
    Seconds: Math.floor(d / 1e3) % 60,
  };
};

export default function Countdown({ target }) {
  const [t, setT] = useState(null);
  useEffect(() => {
    setT(calc(target));
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="countdown">
      {["Days", "Hours", "Minutes", "Seconds"].map((k) => (
        <div key={k} className="cd-box">
          <span className="cd-num">{t ? String(t[k]).padStart(2, "0") : "--"}</span>
          <span className="cd-lbl">{k}</span>
        </div>
      ))}
    </div>
  );
}
