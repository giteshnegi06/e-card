// Hand-drawn SVG artwork (original, not copied from any template).

const sprigLeaves = [
  [14, -20, -50, 1], [30, -42, 40, 1], [38, -66, -55, 1.1], [58, -86, 35, 1.05],
  [66, -108, -50, 1], [84, -126, 30, .9], [96, -146, -45, .8],
];

export function Sprig({ fill, stroke, shadow = true }) {
  return (
    <g>
      <path d="M0 0C12-34 40-74 98-150" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
      {sprigLeaves.map(([x, y, r, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          {shadow && <path d="M0 0C10-12 28-12 38 0C28 12 10 12 0 0Z" fill="rgba(0,0,0,.18)" transform="translate(1.5 2)" />}
          <path d="M0 0C10-12 28-12 38 0C28 12 10 12 0 0Z" fill={fill} stroke={stroke} strokeWidth=".8" />
          <path d="M2 0H34" stroke={stroke} strokeWidth=".7" />
        </g>
      ))}
    </g>
  );
}

const placements = [
  [-10, 150, 10, 1.1], [90, 300, 20, 1.2], [-20, 520, -15, 1.25], [140, 640, 200, 1.2],
  [10, 790, -10, 1.1], [120, 40, 160, .9],
];

export function DoorArt({ flip = false }) {
  return (
    <svg className="door-art" viewBox="0 0 200 900" preserveAspectRatio="xMidYMid slice" style={flip ? { transform: "scaleX(-1)" } : undefined} aria-hidden="true">
      {placements.map(([x, y, r, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <Sprig fill="#8fa27f" stroke="#7a8e6b" />
        </g>
      ))}
    </svg>
  );
}

// Ogee plaque outline (right half mirrored).
const PLAQUE =
  "M100 8C118 8 124 22 140 22C158 22 172 14 176 34C179 52 166 60 168 80C170 100 190 110 190 150C190 190 170 200 168 220C166 240 179 248 176 266C172 286 158 278 140 278C124 278 118 292 100 292C82 292 76 278 60 278C42 278 28 286 24 266C21 248 34 240 32 220C30 200 10 190 10 150C10 110 30 100 32 80C34 60 21 52 24 34C28 14 42 22 60 22C76 22 82 8 100 8Z";

export function Plaque() {
  return (
    <svg className="plaque-svg" viewBox="0 0 200 300" aria-hidden="true">
      <defs>
        <radialGradient id="pl" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#fbf6e6" />
          <stop offset="1" stopColor="#e9dfc2" />
        </radialGradient>
        <filter id="pls" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity=".4" />
        </filter>
      </defs>
      <path d={PLAQUE} fill="url(#pl)" filter="url(#pls)" />
      <path d={PLAQUE} fill="none" stroke="#c9a96e" strokeWidth="2.4" transform="translate(100 150) scale(.93) translate(-100 -150)" />
      <path d={PLAQUE} fill="none" stroke="#c9a96e" strokeWidth=".8" transform="translate(100 150) scale(.86) translate(-100 -150)" />
      {[[88, 14, 5], [100, 9, 6], [112, 14, 5], [88, 286, 5], [100, 291, 6], [112, 286, 5]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#fffaf0" stroke="#d9cdb2" strokeWidth=".8" />
      ))}
    </svg>
  );
}

export function LeafMotif({ flip = false, size = 46 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 40 48" aria-hidden="true" style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <g fill="#8d9a5b" stroke="#6b7840" strokeWidth=".6">
        <path d="M20 4C26 14 26 24 20 32C14 24 14 14 20 4Z" />
        <path d="M18 30C8 28 4 20 6 12C14 14 19 22 18 30Z" />
        <path d="M22 30C32 28 36 20 34 12C26 14 21 22 22 30Z" />
      </g>
      <path d="M20 30V46" stroke="#6b7840" strokeWidth="1.6" />
    </svg>
  );
}

export function Heart({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 21C5 15 2 11.5 2 8a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 3.5-3 7-10 13Z" />
    </svg>
  );
}

export function Cypress({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 150" aria-hidden="true">
      <defs>
        <linearGradient id="cy" x1="0" x2="1">
          <stop offset="0" stopColor="#3f5a38" />
          <stop offset=".5" stopColor="#5e7b50" />
          <stop offset="1" stopColor="#2f4629" />
        </linearGradient>
      </defs>
      <path d="M30 2C46 30 56 70 54 120C53 140 40 148 30 148C20 148 7 140 6 120C4 70 14 30 30 2Z" fill="url(#cy)" />
      {[24, 44, 64, 84, 104, 124].map((y) => (
        <path key={y} d={`M8 ${y}Q30 ${y - 14} 52 ${y}`} fill="none" stroke="rgba(20,40,16,.35)" strokeWidth="1.2" />
      ))}
    </svg>
  );
}

export function Roses({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 70" aria-hidden="true">
      <g fill="#5c7647">
        <path d="M0 60C20 40 40 50 60 30C45 55 25 60 0 70Z" />
        <path d="M120 60C100 40 80 50 60 30C75 55 95 60 120 70Z" />
      </g>
      {[[28, 48, 14, "#f6e7e1"], [52, 38, 16, "#e8b9b4"], [78, 46, 13, "#f4dcd6"], [98, 54, 11, "#e8b9b4"], [12, 58, 10, "#f2cfc9"]].map(([x, y, r, c], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill={c} />
          <path d={`M${x - r * .6} ${y}Q${x} ${y - r * .8} ${x + r * .6} ${y}Q${x} ${y + r * .6} ${x - r * .6} ${y}Z`} fill="rgba(180,110,110,.4)" />
          <circle cx={x} cy={y} r={r * .3} fill="rgba(180,110,110,.5)" />
        </g>
      ))}
    </svg>
  );
}

export function Fountain({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 110" aria-hidden="true">
      <defs>
        <linearGradient id="fs" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f4eee0" />
          <stop offset="1" stopColor="#cfc4a8" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="92" rx="96" ry="16" fill="url(#fs)" />
      <ellipse cx="100" cy="88" rx="88" ry="12" fill="#9dbdc4" />
      <ellipse cx="100" cy="87" rx="70" ry="8" fill="#c4dadd" opacity=".7" />
      <rect x="94" y="48" width="12" height="40" fill="url(#fs)" />
      <ellipse cx="100" cy="62" rx="30" ry="7" fill="url(#fs)" />
      <ellipse cx="100" cy="60" rx="24" ry="4" fill="#9dbdc4" />
      <ellipse cx="100" cy="44" rx="14" ry="4" fill="url(#fs)" />
      <g fill="none" stroke="#dcecef" strokeWidth="1.6" strokeLinecap="round">
        <path d="M100 40C100 20 100 14 100 12" />
        <path d="M100 40C92 18 80 22 76 34" />
        <path d="M100 40C108 18 120 22 124 34" />
        <path d="M76 36C74 48 74 56 78 62" opacity=".7" />
        <path d="M124 36C126 48 126 56 122 62" opacity=".7" />
      </g>
    </svg>
  );
}

// Pearl-draped valance for the top of the welcome scene.
export function Valance() {
  const n = 3;
  const w = 375 / n;
  const dip = 96;
  const base = 36;
  const pearls = [];
  const ribs = [];
  const yAt = (t) => (1 - t) ** 2 * base + 2 * (1 - t) * t * (base + dip * 2) + t * t * base;
  for (let s = 0; s < n; s++) {
    const x0 = s * w;
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      pearls.push([x0 + t * w, yAt(t) + 2]);
    }
    for (let i = 1; i < 12; i++) {
      const t = i / 12;
      const x = x0 + t * w;
      ribs.push(`M${x} 0Q${x + (t - 0.5) * 10} ${yAt(t) * 0.5} ${x} ${yAt(t)}`);
    }
  }
  const edge = Array.from({ length: n }, (_, s) => `Q${375 - s * w - w / 2} ${base + dip * 2} ${375 - (s + 1) * w} ${base}`).join("");
  return (
    <svg className="valance" viewBox="0 0 375 140" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="vl" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#e9dfc4" />
          <stop offset=".6" stopColor="#f4ecd8" />
          <stop offset="1" stopColor="#cfc19c" />
        </linearGradient>
      </defs>
      <path d={`M0 0H375V${base}${edge}Z`} fill="url(#vl)" />
      {ribs.map((d, i) => (
        <path key={i} d={d} stroke="rgba(140,120,80,.3)" strokeWidth="1.5" fill="none" />
      ))}
      {pearls.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="#fffaf0" stroke="#d0c19c" strokeWidth=".6" />
      ))}
    </svg>
  );
}

export function SideDrape({ right = false }) {
  const id = `dg${right ? "r" : "l"}`;
  const folds = [10, 24, 38, 52, 66, 80];
  return (
    <svg className={`drape ${right ? "r" : "l"}`} viewBox="0 0 110 480" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" x2="1">
          <stop offset="0" stopColor="#cdbf9b" />
          <stop offset=".25" stopColor="#f6efdc" />
          <stop offset=".5" stopColor="#d9cca8" />
          <stop offset=".75" stopColor="#f3ebd6" />
          <stop offset="1" stopColor="#dccfae" />
        </linearGradient>
      </defs>
      <path d="M0 0H104C100 70 96 150 70 230C58 270 70 300 48 330C36 345 20 380 0 400Z" fill={`url(#${id})`} />
      {folds.map((x, i) => (
        <path key={x} d={`M${x} 0C${x + 8} 110 ${x - 4} 220 ${Math.max(0, x - 34 + i * 3)} ${330 + i * 12}`} stroke="rgba(120,100,60,.32)" strokeWidth="2" fill="none" />
      ))}
      {Array.from({ length: 22 }, (_, i) => {
        const t = i / 21;
        const x = 102 - 20 * Math.sin(t * Math.PI) - 82 * t * t;
        return <circle key={i} cx={Math.max(3, x)} cy={t * 400} r="3.6" fill="#fffaf0" stroke="#d0c19c" strokeWidth=".6" />;
      })}
      <path d="M0 262C30 252 56 256 70 262" stroke="#b8a66f" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M66 262v26" stroke="#b8a66f" strokeWidth="5" strokeLinecap="round" />
      <path d="M60 288h12l-2 30h-8z" fill="#c9b78a" />
    </svg>
  );
}

function Rose({ x, y, r, c = "#f6e7e1" }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c} stroke="rgba(150,100,90,.35)" strokeWidth=".8" />
      <circle cx={x} cy={y} r={r * 0.68} fill="none" stroke="rgba(150,100,90,.45)" strokeWidth=".8" />
      <path d={`M${x - r * .5} ${y}Q${x} ${y - r * .7} ${x + r * .5} ${y}Q${x} ${y + r * .5} ${x - r * .5} ${y}`} fill="rgba(170,110,100,.35)" />
    </g>
  );
}

function Leaves({ x, y, flip }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} fill="#587247">
      {[-60, -35, -10, 15, 40].map((r) => (
        <path key={r} d="M0 0C10-10 34-10 46 0C34 10 10 10 0 0Z" transform={`rotate(${r})`} stroke="#3f5a38" strokeWidth=".7" />
      ))}
    </g>
  );
}

function Urn({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <circle cx="0" cy="104" r="22" fill="#6b8458" />
      <Rose x={-12} y={98} r={9} c="#f1d9d2" />
      <Rose x={6} y={90} r={10} c="#e2aaa3" />
      <Rose x={16} y={104} r={8} c="#f6e7e1" />
      <Rose x={-4} y={110} r={7} c="#e2aaa3" />
      <path d="M-18 118h36l-6 14c-2 8 2 14 8 18H-20c6-4 10-10 8-18z" fill="#e5dcc3" stroke="#c9bb97" strokeWidth="1" />
      <rect x="-14" y="150" width="28" height="8" fill="#d8ccaa" />
    </g>
  );
}

function Pillar({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <circle cx="0" cy="128" r="9" fill="#efe7d0" stroke="#cfc3a0" />
      <rect x="-11" y="136" width="22" height="46" fill="#e6dcc3" stroke="#cfc3a0" />
      <rect x="-14" y="176" width="28" height="8" fill="#d8ccaa" />
    </g>
  );
}

function Hedge({ x, w }) {
  return (
    <g>
      <rect x={x} y="164" width={w} height="26" rx="10" fill="#4e6a3f" />
      {Array.from({ length: Math.floor(w / 9) }, (_, i) => (
        <circle key={i} cx={x + 6 + i * 9} cy={168 + (i % 3) * 5} r="1.6" fill="#f3e7d3" />
      ))}
    </g>
  );
}

export function Garden({ className }) {
  return (
    <svg className={className} viewBox="0 0 375 270" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="gnd" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(205,193,160,0)" />
          <stop offset=".35" stopColor="#d6caa8" />
          <stop offset="1" stopColor="#b9ab84" />
        </linearGradient>
        <linearGradient id="cyp" x1="0" x2="1">
          <stop offset="0" stopColor="#2f4629" />
          <stop offset=".5" stopColor="#5e7b50" />
          <stop offset="1" stopColor="#2f4629" />
        </linearGradient>
      </defs>
      <rect x="0" y="150" width="375" height="120" fill="url(#gnd)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M0 ${196 + i * 16}H375`} stroke="rgba(120,105,70,.18)" />
      ))}
      <path d="M26 20C42 60 50 110 48 170H4C2 110 10 60 26 20Z" fill="url(#cyp)" />
      <path d="M350 6C368 50 376 110 374 170H328C326 110 334 50 350 6Z" fill="url(#cyp)" />
      <Hedge x={4} w={70} />
      <Hedge x={300} w={70} />
      <Urn x={48} />
      <Urn x={327} />
      <Pillar x={96} />
      <Pillar x={279} />
      <Hedge x={110} w={34} />
      <Hedge x={231} w={34} />
      <g transform="translate(88 150) scale(1.0 1.0)">
        <ellipse cx="100" cy="92" rx="96" ry="16" fill="#efe7d2" stroke="#cfc3a0" />
        <ellipse cx="100" cy="88" rx="88" ry="12" fill="#9dbdc4" />
        <ellipse cx="100" cy="87" rx="70" ry="8" fill="#c4dadd" opacity=".7" />
        <rect x="94" y="48" width="12" height="40" fill="#e6dcc3" />
        <ellipse cx="100" cy="62" rx="30" ry="7" fill="#efe7d2" stroke="#cfc3a0" />
        <ellipse cx="100" cy="60" rx="24" ry="4" fill="#9dbdc4" />
        <ellipse cx="100" cy="44" rx="14" ry="4" fill="#efe7d2" />
        <g fill="none" stroke="#e6f1f3" strokeWidth="1.8" strokeLinecap="round">
          <path d="M100 40C100 22 100 16 100 12" />
          <path d="M100 40C92 18 80 22 76 34" />
          <path d="M100 40C108 18 120 22 124 34" />
          <path d="M76 36C74 48 74 56 78 62" opacity=".7" />
          <path d="M124 36C126 48 126 56 122 62" opacity=".7" />
        </g>
      </g>
      <Leaves x={-4} y={248} />
      <Leaves x={0} y={226} />
      <Leaves x={379} y={248} flip />
      <Leaves x={375} y={226} flip />
      <Rose x={14} y={252} r={22} />
      <Rose x={52} y={262} r={14} c="#d9a39f" />
      <Rose x={30} y={226} r={12} c="#e8c4be" />
      <Rose x={361} y={252} r={22} />
      <Rose x={323} y={262} r={14} c="#d9a39f" />
      <Rose x={345} y={226} r={12} c="#e8c4be" />
    </svg>
  );
}
