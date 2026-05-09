import { personal } from "../data/portfolio.js";
import "../styles/footer.css";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <button className="navbar-logo footer-logo" onClick={() => onNavigate("home")}>
            <span style={{ color: "var(--text-muted)" }}>[</span>
            <span>SP</span>
            <span style={{ color: "var(--text-muted)" }}>]</span>
          </button>
          <p className="footer-tagline">{personal.tagline}</p>
          <div className="footer-status">
            <span className="dot-live" />
            <span className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>
              {personal.deploymentStatus.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-label mono">Navigation</div>
            <button onClick={() => onNavigate("home")}>Home</button>
            <button onClick={() => onNavigate("projects")}>Projects</button>
            <button onClick={() => onNavigate("about")}>About</button>
          </div>
          <div className="footer-col">
            <div className="footer-col-label mono">Connect</div>
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${personal.links.email}`}>Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} {personal.name} · Built with React 19 + CSS
        </span>
        <span className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
          ⌘K to open command palette
        </span>
      </div>
    </footer>
  );
}
