import { useState } from "react";
import { personal } from "../data/portfolio.js";
import "../styles/navbar.css";

export default function Navbar({ theme, onToggleTheme, onOpenPalette, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => onNavigate("home")}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">SP</span>
          <span className="logo-bracket">]</span>
          <span className="logo-dot" />
        </button>

        <div className="navbar-links">
          <button onClick={() => onNavigate("projects")}>Projects</button>
          <button onClick={() => onNavigate("about")}>About</button>
          <button onClick={() => onNavigate("contact")}>Contact</button>
          <a href={personal.links.resume} target="_blank" rel="noopener noreferrer" className="nav-resume-btn">Resume</a>
        </div>

        <div className="navbar-actions">
          <button className="status-pill" title="System status">
            <span className="dot-live" />
            <span className="mono" style={{ fontSize: 11 }}>Operational</span>
          </button>

          <button className="cmd-btn" onClick={onOpenPalette} title="Command palette (⌘K)">
            <span className="mono" style={{ fontSize: 11 }}>⌘K</span>
          </button>

          <button className="theme-btn" onClick={onToggleTheme} title="Toggle theme">
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <button onClick={() => { onNavigate("projects"); setMobileOpen(false); }}>Projects</button>
          <button onClick={() => { onNavigate("about"); setMobileOpen(false); }}>About</button>
          <a href="mailto:sohanpatnaik9@gmail.com">Contact</a>
          <a href={personal.links.resume} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>Resume</a>
        </div>
      )}
    </nav>
  );
}
