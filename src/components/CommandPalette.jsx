import { useState, useEffect, useRef } from "react";
import { projects } from "../data/portfolio.js";
import "../styles/command-palette.css";

const COMMANDS = [
  { id: "home", label: "Go to Home", icon: "🏠", category: "Navigation" },
  { id: "projects", label: "View Projects", icon: "⚡", category: "Navigation" },
  { id: "about", label: "About Me", icon: "👤", category: "Navigation" },
  { id: "theme", label: "Toggle Theme", icon: "🌙", category: "Settings" },
  { id: "github", label: "Open GitHub", icon: "🐙", category: "Links", href: "https://github.com/Sohan-patnaik" },
  { id: "linkedin", label: "Open LinkedIn", icon: "💼", category: "Links", href: "https://www.linkedin.com/in/sohan-patnaik-1bba87295" },
  ...projects.map((p) => ({
    id: `project-${p.id}`,
    label: `View: ${p.title}`,
    icon: "📁",
    category: "Projects",
    projectId: p.id,
  })),
];

export default function CommandPalette({ open, onClose, onNavigate, onToggleTheme, onViewProject }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const runCommand = (cmd) => {
    if (cmd.href) {
      window.open(cmd.href, "_blank");
    } else if (cmd.id === "theme") {
      onToggleTheme();
    } else if (cmd.projectId) {
      const project = projects.find((p) => p.id === cmd.projectId);
      if (project) onViewProject(project);
    } else {
      onNavigate(cmd.id);
    }
    onClose();
  };

  const handleKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      if (filtered[selected]) runCommand(filtered[selected]);
    }
  };

  if (!open) return null;

  const grouped = {};
  filtered.forEach((cmd) => {
    if (!grouped[cmd.category]) grouped[cmd.category] = [];
    grouped[cmd.category].push(cmd);
  });

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div
        className="palette"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKey}
      >
        <div className="palette-input-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={inputRef}
            className="palette-input"
            placeholder="Search commands, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <span className="mono palette-esc" onClick={onClose}>ESC</span>
        </div>

        <div className="palette-results">
          {filtered.length === 0 ? (
            <div className="palette-empty mono">No results for "{query}"</div>
          ) : (
            Object.entries(grouped).map(([cat, cmds]) => {
              let flatIdx = 0;
              cmds.forEach((cmd) => {
                cmd._idx = filtered.indexOf(cmd);
              });
              return (
                <div key={cat} className="palette-group">
                  <div className="palette-group-label mono">{cat}</div>
                  {cmds.map((cmd) => (
                    <button
                      key={cmd.id}
                      className={`palette-item ${cmd._idx === selected ? "selected" : ""}`}
                      onClick={() => runCommand(cmd)}
                      onMouseEnter={() => setSelected(cmd._idx)}
                    >
                      <span className="palette-icon">{cmd.icon}</span>
                      <span className="palette-label">{cmd.label}</span>
                      {cmd.href && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              );
            })
          )}
        </div>

        <div className="palette-footer">
          <span className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>
            ↑↓ navigate · ↵ select · esc close
          </span>
        </div>
      </div>
    </div>
  );
}
