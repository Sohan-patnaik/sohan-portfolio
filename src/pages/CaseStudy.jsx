import { useState, useEffect, useRef } from "react";
import { useTerminal } from "../hooks/index.js";
import ArchDiagram from "../components/ArchDiagram.jsx";
import "../styles/casestudy.css";

export default function CaseStudy({ project, onBack }) {
  const [archActive, setArchActive] = useState(false);
  const { visibleLines, running, done, start } = useTerminal(project.terminalSteps, false, 350);
  const runCount = useRef(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const t = setTimeout(() => setArchActive(true), 800);
    return () => clearTimeout(t);
  }, [project.id]);

  const handleStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    runCount.current += 1;
    start();
  };

  return (
    <div className="case-study" style={{ "--hero-color": project.heroColor }}>
      <div className="cs-back container">
        <button className="back-btn" onClick={onBack}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Projects
        </button>
      </div>

      <section className="cs-hero">
        <div className="cs-hero-bg" />
        <div className="container cs-hero-content">
          <div className="cs-badges">
            <span className="badge badge-live">live</span>
            <span className="badge">{project.category}</span>
            <span className="badge">{project.year}</span>
          </div>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-subtitle">{project.subtitle}</p>
          <p className="cs-desc">{project.shortDesc}</p>

          <div className="cs-metrics">
            {project.metrics.map((m) => (
              <div key={m.label} className="cs-metric">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// Engineering Brief</p>
          <h2 className="section-title">Problem → Solution → Impact</h2>
        </div>
        <div className="psi-grid">
          <div className="psi-card problem">
            <div className="psi-icon">⚠</div>
            <h3 className="psi-label mono">Problem</h3>
            <p className="psi-text">{project.problem}</p>
          </div>
          <div className="psi-arrow">→</div>
          <div className="psi-card solution">
            <div className="psi-icon">⚡</div>
            <h3 className="psi-label mono">Solution</h3>
            <p className="psi-text">{project.solution}</p>
          </div>
          <div className="psi-arrow">→</div>
          <div className="psi-card impact">
            <div className="psi-icon">✓</div>
            <h3 className="psi-label mono">Impact</h3>
            <p className="psi-text">{project.impact}</p>
          </div>
        </div>
      </section>

      <div className="divider container" />

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// System Design</p>
          <h2 className="section-title">Architecture Diagram</h2>
          <p className="section-sub">Live data flow visualization. Particles represent active requests.</p>
        </div>
        <ArchDiagram project={project} active={archActive} />
        <div className="arch-legend">
          <span className="dot-live" />
          <span className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
            Particles represent active request traversal through the system
          </span>
        </div>
      </section>

      <div className="divider container" />

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// Engineering Notes</p>
          <h2 className="section-title">How I Engineered This</h2>
        </div>
        <div className="eng-notes">
          {project.engineeringNotes.map((note, i) => (
            <div key={i} className="eng-note">
              <div className="eng-note-num mono">{String(i + 1).padStart(2, "0")}</div>
              <p className="eng-note-text">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider container" />

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// System Boot</p>
          <h2 className="section-title">Terminal Demo</h2>
          <p className="section-sub">Simulated system initialization sequence.</p>
        </div>
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title mono">{project.id} — zsh</span>
          </div>
          <div className="terminal-body">
            {visibleLines.map((line, i) => {
              if (typeof line !== "string") return null;
              const isSuccess = line.includes("✓") || line.includes("ready") || line.includes("operational") || line.includes("live");
              const isCmd = line.startsWith("$");
              return (
                <span
                  key={`${runCount.current}-${i}`}
                  className={`terminal-line ${isSuccess ? "success" : isCmd ? "cmd" : ""}`}
                >
                  {line}
                </span>
              );
            })}
            {!done && running && (
              <span className="terminal-line" key="cursor">
                <span className="cursor" />
              </span>
            )}
            {done && (
              <span className="terminal-line success" key="done">
                <span className="terminal-prompt">$ </span>
                system ready. all checks passed ✓
              </span>
            )}
            {!running && !done && (
              <span className="terminal-line" key="idle" style={{ color: "var(--text-muted)" }}>
                — press run to boot system —
              </span>
            )}
          </div>
          <div className="terminal-actions">
            <button
              type="button"
              className="btn btn-outline"
              style={{ fontSize: 12, padding: "6px 14px" }}
              onClick={handleStart}
            >
              {running ? "Running..." : done ? "↻ Restart" : "▶ Run"}
            </button>
          </div>
        </div>
      </section>

      <div className="divider container" />

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// Dependencies</p>
          <h2 className="section-title">Tech Stack</h2>
        </div>
        <div className="tech-grid">
          {project.tech.map((t, i) => (
            <div key={t} className="tech-item" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="tech-dot" style={{ background: project.heroColor }} />
              <span className="tech-name mono">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider container" />

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// Build History</p>
          <h2 className="section-title">Evolution Timeline</h2>
        </div>
        <div className="timeline">
          {project.timeline.map((t, i) => (
            <div key={t.version} className="timeline-item">
              <div className="timeline-left">
                <div className="timeline-version mono" style={{ color: project.heroColor }}>
                  {t.version}
                </div>
                <div className="timeline-date mono">{t.date}</div>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" style={{ background: project.heroColor }} />
                {i < project.timeline.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-right">
                <h4 className="timeline-label">{t.label}</h4>
                <p className="timeline-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider container" />

      <section className="cs-section container">
        <div className="section-header">
          <p className="section-label">// Design Philosophy</p>
          <h2 className="section-title">Engineering Principles</h2>
        </div>
        <div className="principles-grid">
          {project.principles.map((p, i) => (
            <div key={i} className="principle-card">
              <div className="principle-num mono" style={{ color: project.heroColor }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="principle-text">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-footer-cta">
        <div className="container">
          <p className="mono" style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 8 }}>
            // interested in this system?
          </p>
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 20 }}>
            Let's talk engineering.
          </h3>
          <a
            href="mailto:sohan@example.com"
            className="btn btn-primary"
            style={{ fontSize: 14, padding: "12px 28px" }}
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </div>
  );
}