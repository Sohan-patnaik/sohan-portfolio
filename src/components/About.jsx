import { personal } from "../data/portfolio.js";
import "../styles/about.css";

const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React 19", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    category: "AI / ML",
    items: ["LangGraph", "LangChain", "OpenAI", "NVIDIA NIM", "ChromaDB"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Git", "Vercel", "Railway", "GitHub Actions"],
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">// The Engineer</p>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-intro">
              <p className="about-bio">
                <strong>Final-year B.Tech CSE student</strong> at SOA
                University, graduating 2027 — actively seeking Internships and
                full-time roles in SDE, AI/ML, or GenAI engineering.
              </p>

              <p className="about-bio" style={{ marginTop: 14 }}>
                I've shipped <strong>3 production systems</strong> end-to-end:
                LangGraph multi-agent pipelines, LLM-powered SaaS platforms, and
                real-time backends built on FastAPI and Supabase. Every project
                runs in production, not just on GitHub.
              </p>

              <p className="about-bio" style={{ marginTop: 14 }}>
                I work well in fast-moving teams, take ownership from spec to
                deployment, and care about building things that actually scale.
              </p>
            </div>

            <div className="about-facts">
              {[
                {
                  icon: "🏆",
                  label: "Certification",
                  value: "AI / ML Certified",
                  issuer: "IITM Pravartak",
                  link: "/DSA00380_4.pdf",
                  featured: true,
                },
                {
                  icon: "🏢",
                  label: "Internship",
                  value: "ML Engineer @ GNCIPL",
                },
                {
                  icon: "🎓",
                  label: "Education",
                  value: "B.Tech CSE @ SOA University (2023–2027)",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Bhubaneswar, Odisha, India",
                },
                {
                  icon: "🔧",
                  label: "Currently Building",
                  value: personal.currentlyBuilding,
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`about-fact ${f.featured ? "featured-cert" : ""}`}
                >
                  <span className="fact-icon">{f.icon}</span>

                  <div className="fact-content">
                    <div className="fact-label mono">{f.label}</div>

                    <div className="fact-value">{f.value}</div>

                    {f.issuer && (
                      <>
                        <div className="fact-issuer">
                          ✓ Verified by {f.issuer}
                        </div>

                        <a
                          href={f.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="credential-link"
                        >
                          View Credential →
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="skills-panel">
              <div className="skills-header">
                <span
                  className="mono"
                  style={{ fontSize: 11, color: "var(--text-muted)" }}
                >
                  // TECH STACK
                </span>
              </div>
              <div className="skills-body">
                {skills.map((s, i) => (
                  <div key={i} className="skill-group">
                    <div className="skill-category mono">{s.category}</div>
                    <div className="skill-items">
                      {s.items.map((item) => (
                        <span key={item} className="badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
