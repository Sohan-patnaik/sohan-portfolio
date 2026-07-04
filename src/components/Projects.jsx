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
        <div className="card-links" onClick={(e) => e.stopPropagation()}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono card-link"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono card-link"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
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
          <h2 className="section-title">Production Systems</h2>
          <p className="section-sub">
            AI-powered products, full-stack systems, and developer tools built to production standards.
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