import { useState, useEffect } from "react";
import "../styles/architecture.css";

const NODE_POSITIONS = {
  7: [
    { x: 80, y: 200 },
    { x: 220, y: 200 },
    { x: 360, y: 120 },
    { x: 360, y: 200 },
    { x: 360, y: 280 },
    { x: 500, y: 200 },
    { x: 640, y: 200 },
  ],
  6: [
    { x: 80, y: 200 },
    { x: 220, y: 120 },
    { x: 220, y: 280 },
    { x: 380, y: 200 },
    { x: 520, y: 120 },
    { x: 520, y: 280 },
  ],
  9: [
    { x: 60, y: 200 },
    { x: 180, y: 200 },
    { x: 300, y: 100 },
    { x: 300, y: 200 },
    { x: 300, y: 300 },
    { x: 420, y: 100 },
    { x: 420, y: 300 },
    { x: 540, y: 200 },
    { x: 660, y: 200 },
  ],
};

function getPositions(count) {
  const known = [7, 6, 9];
  const best = known.reduce((a, b) =>
    Math.abs(b - count) < Math.abs(a - count) ? b : a
  );
  return NODE_POSITIONS[best].slice(0, count);
}

export default function ArchDiagram({ project, active }) {
  const [particles, setParticles] = useState([]);
  const { nodes, flows } = project.architecture;
  const positions = getPositions(nodes.length);
  const heroColor = project.heroColor;

  const W = 720;
  const H = 380;

  useEffect(() => {
    if (!active) return;
    let id = 0;
    const interval = setInterval(() => {
      const flow = flows[Math.floor(Math.random() * flows.length)];
      if (!flow) return;
      const [from, to] = flow;
      const pFrom = positions[from];
      const pTo = positions[to];
      if (!pFrom || !pTo) return;

      setParticles((prev) => [
        ...prev.filter((p) => Date.now() - p.born < 1200),
        { id: id++, from: pFrom, to: pTo, born: Date.now() },
      ]);
    }, 400);
    return () => clearInterval(interval);
  }, [active, flows, positions]);

  return (
    <div className="arch-diagram">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%", maxHeight: 280 }}
      >
        {flows.map(([from, to], i) => {
          const pFrom = positions[from];
          const pTo = positions[to];
          if (!pFrom || !pTo) return null;
          return (
            <line
              key={i}
              x1={pFrom.x}
              y1={pFrom.y}
              x2={pTo.x}
              y2={pTo.y}
              stroke={active ? `${heroColor}30` : "var(--border)"}
              strokeWidth="1"
              strokeDasharray={active ? "none" : "4 4"}
              style={{ transition: "stroke 0.4s ease" }}
            />
          );
        })}

        {particles.map((p) => (
          <AnimatedParticle key={p.id} from={p.from} to={p.to} color={heroColor} />
        ))}

        {nodes.map((label, i) => {
          const pos = positions[i];
          if (!pos) return null;
          const isCentral = i > 0 && i < nodes.length - 1;
          const isFirst = i === 0;
          const isLast = i === nodes.length - 1;

          return (
            <g key={i}>
              <rect
                x={pos.x - 46}
                y={pos.y - 18}
                width={92}
                height={36}
                rx={6}
                fill="var(--bg-card)"
                stroke={
                  active && isCentral
                    ? `${heroColor}60`
                    : active && (isFirst || isLast)
                    ? `${heroColor}40`
                    : "var(--border)"
                }
                strokeWidth="1"
                style={{ transition: "stroke 0.4s ease" }}
              />
              {active && isCentral && (
                <rect
                  x={pos.x - 46}
                  y={pos.y - 18}
                  width={92}
                  height={36}
                  rx={6}
                  fill={heroColor}
                  fillOpacity="0.04"
                />
              )}
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill={
                  active && isCentral
                    ? heroColor
                    : "var(--text-secondary)"
                }
                fontSize="9"
                fontFamily="'JetBrains Mono', monospace"
                style={{ transition: "fill 0.4s ease" }}
              >
                {label.length > 14 ? label.slice(0, 13) + "…" : label}
              </text>

              {active && isCentral && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={22}
                  fill="none"
                  stroke={heroColor}
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  style={{ animation: "node-pulse 2s ease-in-out infinite" }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function AnimatedParticle({ from, to, color }) {
  return (
    <circle r="3" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
      <animateMotion
        dur="1s"
        repeatCount="1"
        fill="freeze"
        path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="1s"
        repeatCount="1"
        fill="freeze"
      />
    </circle>
  );
}
