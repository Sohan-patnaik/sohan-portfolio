import { useState } from "react";
import { projects } from "../data/portfolio.js";
import "../styles/projects.css";

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  const statusColor = {
    live: "var(--green)",
    building: "var(--yellow)",
    archived: "var(--text-muted)",
  }[project.status];

  return (
    <div
      className={`project-card ${hovered ? "hovered" : ""}`}
      style={{ "--hero-color": project.heroColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      role="button"
      aria-label={`View ${project.title} case study`}
    >

      <div className="card-glow-border" />

      <div className="card-top">
        <div className="card-meta">
          <span className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>
            {project.year}
          </span>
          <span className="badge" style={{ fontSize: 10 }}>{project.category}</span>
        </div>
        <div className="card-status">
          <span
            className="status-dot"
            style={{ background: statusColor }}
          />
          <span className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="card-title-block">
        <div className="card-icon" style={{ color: project.heroColor }}>
          <ProjectIcon id={project.id} />
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-subtitle">{project.subtitle}</p>
      </div>

      <p className="card-desc">{project.shortDesc}</p>

      <div className={`card-arch ${hovered ? "visible" : ""}`}>
        <MiniFlow nodes={project.architecture.nodes.slice(0, 4)} heroColor={project.heroColor} active={hovered} />
      </div>

      <div className="card-metrics">
        {project.metrics.slice(0, 3).map((m) => (
          <div key={m.label} className="card-metric">
            <span className="card-metric-val mono">{m.value}</span>
            <span className="card-metric-lbl">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="card-tech">
        {project.tech.slice(0, 4).map((t, i) => (
          <span
            key={t}
            className="badge"
            style={{
              animationDelay: hovered ? `${i * 60}ms` : "0ms",
              borderColor: hovered ? `${project.heroColor}40` : undefined,
              color: hovered ? project.heroColor : undefined,
              transition: `all var(--transition) ${i * 40}ms`,
            }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="badge">+{project.tech.length - 4}</span>
        )}
      </div>

      <div className="card-footer">
        <span className="card-cta mono" style={{ color: project.heroColor }}>
          View Case Study →
        </span>
      </div>
    </div>
  );
}

function MiniFlow({ nodes, heroColor, active }) {
  return (
    <div className="mini-flow">
      {nodes.map((node, i) => (
        <div key={i} className="mini-flow-row">
          <div
            className={`mini-node ${active ? "active" : ""}`}
            style={{
              borderColor: active ? `${heroColor}60` : undefined,
              color: active ? heroColor : undefined,
              animationDelay: `${i * 200}ms`,
            }}
          >
            <span className="mono" style={{ fontSize: 9 }}>{node}</span>
          </div>
          {i < nodes.length - 1 && (
            <div className="mini-arrow" style={{ color: active ? heroColor : undefined }}>
              <FlowParticle active={active} heroColor={heroColor} delay={i * 300} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FlowParticle({ active, heroColor, delay }) {
  return (
    <div className="flow-arrow">
      <svg width="24" height="12" viewBox="0 0 24 12">
        <line x1="0" y1="6" x2="18" y2="6" stroke="var(--border)" strokeWidth="1" />
        <polyline points="14,2 18,6 14,10" fill="none" stroke="var(--border)" strokeWidth="1" />
        {active && (
          <circle
            cx="0"
            cy="6"
            r="2.5"
            fill={heroColor}
            style={{
              animation: `flow-dot 1s ease-in-out ${delay}ms infinite`,
            }}
          />
        )}
      </svg>
    </div>
  );
}

function ProjectIcon({ id }) {
  const icons = {
    "fintech-ai": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    estateflow: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    "debug-buddy": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    readit: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  };
  return icons[id] || null;
}

export default function Projects({ onViewProject }) {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">// Engineering Portfolio</p>
          <h2 className="section-title">Production Systems</h2>
          <p className="section-sub">
            AI-powered products, full-stack systems, and developer tools — built to production standards.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={onViewProject}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flow-dot {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(18px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
