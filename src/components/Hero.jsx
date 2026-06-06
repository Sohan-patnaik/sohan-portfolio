import { useTypingAnimation } from "../hooks/index.js";
import { personal } from "../data/portfolio.js";
import "../styles/hero.css";

export default function Hero({ onNavigate }) {
  const typed = useTypingAnimation(personal.typingPhrases);

  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true">
        <div className="grid-lines" />
        <div className="grid-glow" />
        <div className="grid-scanline" />
      </div>

      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="hero-content container">
        <div className="currently-building" style={{ animationDelay: "0ms" }}>
          <span className="dot-live" />
          <span
            className="mono"
            style={{ fontSize: 11, color: "var(--text-muted)" }}
          >
            Currently building
          </span>
          <span
            className="mono"
            style={{ fontSize: 11, color: "var(--accent)" }}
          >
            {personal.currentlyBuilding}
          </span>
        </div>

        <h1 className="hero-name" style={{ animationDelay: "100ms" }}>
          {personal.name}
        </h1>

        <div className="hero-role" style={{ animationDelay: "200ms" }}>
          <span className="role-label mono">&gt; </span>
          <span className="typed-text">{typed}</span>
          <span className="cursor" />
        </div>

        <p className="hero-tagline" style={{ animationDelay: "300ms" }}>
          {personal.bio}
        </p>

        <div className="hero-cta" style={{ animationDelay: "400ms" }}>
          <button
            className="btn btn-primary hero-btn-main"
            onClick={() => onNavigate("projects")}
          >
            View Projects
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="hero-stats" style={{ animationDelay: "500ms" }}>
          <div className="hero-stat">
            <span className="hero-stat-val mono">3+</span>
            <span className="hero-stat-lbl">AI Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-val mono">LangGraph</span>
            <span className="hero-stat-lbl">Multi-Agent</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-val mono">4th Year</span>
            <span className="hero-stat-lbl">CSE @ SOA</span>
          </div>
          <div className="hero-stat hero-stat-cert">
            <span className="hero-stat-val mono">🏆 AI / ML Certified</span>

            <span className="hero-stat-lbl">IITM Pravartak</span>

            <a
              href="/DSA00380_4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-stat-cert-btn"
            >
              View Credential →
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span
          className="mono"
          style={{ fontSize: 10, color: "var(--text-muted)" }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}
