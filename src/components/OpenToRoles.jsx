"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  {
    id: "sde",
    title: "Software Development Engineer",
    short: "SDE",
    tags: ["DSA", "System Design", "APIs"],
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "aiml",
    title: "AI / ML Engineer",
    short: "AI/ML",
    tags: ["LangGraph", "LLMs", "Agents"],
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    id: "genai",
    title: "GenAI Developer",
    short: "GenAI",
    tags: ["RAG", "Prompt Eng.", "Embeddings"],
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
        <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z" />
        <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5z" />
      </svg>
    ),
  },
  {
    id: "backend",
    title: "Backend Engineer",
    short: "Backend",
    tags: ["FastAPI", "PostgreSQL", "Supabase"],
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
        <circle cx="6" cy="5" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="6" cy="12" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="6" cy="19" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    short: "Full-Stack",
    tags: ["Next.js", "React", "TypeScript"],
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
];

const stack = [
  "Python", "TypeScript", "Next.js", "FastAPI",
  "LangGraph", "Supabase", "PostgreSQL", "OpenAI API",
  "ChromaDB", "Docker", "Node.js", "Tailwind CSS",
];

const links = [
  {
    label: "Email",
    href: "mailto:sohanpatnaik9@gmail.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohan-patnaik-1bba87295",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Sohan-patnaik",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function OpenToRoles() {
  const [sectionRef, inView] = useInView();

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 0",
        maxWidth: "1100px",
        margin: "0 auto",
        paddingLeft: "clamp(1.25rem, 5vw, 3rem)",
        paddingRight: "clamp(1.25rem, 5vw, 3rem)",
      }}
    >
      <div
        style={{
          marginBottom: "48px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "999px",
            padding: "5px 14px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 0 0 rgba(34,197,94,0.5)",
              animation: "pulse-green 2s infinite",
              display: "block",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "12px", fontWeight: 500, color: "#22c55e", letterSpacing: "0.06em" }}>
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "#f1f5f9",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Available for Internships and full-time roles
        </h2>
        <p style={{ fontSize: "16px", color: "#64748b", margin: 0, maxWidth: "480px" }}>
          Final-year B.Tech CSE · Graduating 2027 · Bhubaneswar, India
          <span style={{ color: "#475569", margin: "0 8px" }}>·</span>
          Open to remote &amp; relocation
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        {roles.map((role, i) => (
          <div
            key={role.id}
            style={{
              background: role.bg,
              border: `1px solid ${role.border}`,
              borderRadius: "12px",
              padding: "18px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s ease ${0.1 + i * 0.07}s`,
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: `rgba(${role.color.slice(1).match(/.{2}/g).map(h => parseInt(h, 16)).join(",")},0.15)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: role.color,
                marginBottom: "14px",
              }}
            >
              {role.icon}
            </div>

            <p style={{ fontSize: "13px", fontWeight: 600, color: "#e2e8f0", margin: "0 0 6px", lineHeight: 1.3 }}>
              {role.title}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: role.color,
                    background: role.bg,
                    border: `1px solid ${role.border}`,
                    borderRadius: "4px",
                    padding: "2px 7px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          marginBottom: "32px",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}
      />

      <div
        style={{
          marginBottom: "32px",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease 0.55s",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#475569",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: "0 0 12px",
          }}
        >
          Core stack
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {stack.map((s) => (
            <span
              key={s}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#94a3b8",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "4px 12px",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease 0.65s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.15)",
            borderRadius: "8px",
            padding: "8px 16px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#4ade80" }}>⚡</span>
          <span style={{ fontSize: "13px", color: "#4ade80", fontWeight: 500 }}>
            Actively interviewing · Available from 2025
          </span>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#94a3b8",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "8px 16px",
                textDecoration: "none",
                transition: "color 0.15s, border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f1f5f9";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
      `}</style>
    </section>
  );
}