import { personal } from "../data/portfolio.js";
import "../styles/about.css";

const skills = [
  { category: "Frontend", items: ["Next.js", "React 19", "TypeScript", "Vite", "CSS"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Prisma"] },
  { category: "AI / ML", items: ["LangGraph", "LangChain", "OpenAI", "NVIDIA NIM", "ChromaDB"] },
  { category: "DevOps", items: ["Docker", "Git", "Vercel", "Railway", "GitHub Actions"] },
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
          {/* Left: Bio + quick facts */}
          <div className="about-left">
            <div className="about-intro">
              <p className="about-bio">
                I'm a <strong>3rd-year Computer Science student</strong> at SOA University, Bhubaneswar —
                focused on shipping production-grade AI-powered products and full-stack systems.
              </p>
              <p className="about-bio" style={{ marginTop: 14 }}>
                I don't just study AI — I build with it. My work spans <strong>multi-agent pipelines</strong>,
                <strong> real-time data systems</strong>, and <strong>SaaS platforms</strong> with complex
                multi-tenancy requirements. Every project is designed for scale from day one.
              </p>
            </div>

            <div className="about-facts">
              {[
                { icon: "🎓", label: "Education", value: "B.Tech CSE @ SOA University (2023–2027)" },
                { icon: "🏢", label: "Internship", value: "ML Engineer @ GNCIPL" },
                { icon: "📜", label: "Certification", value: "IIT Madras" },
                { icon: "📍", label: "Location", value: "Bhubaneswar, Odisha, India" },
                { icon: "🔧", label: "Currently", value: personal.currentlyBuilding },
              ].map((f, i) => (
                <div key={i} className="about-fact">
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <div className="fact-label mono">{f.label}</div>
                    <div className="fact-value">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="about-right">
            <div className="skills-panel">
              <div className="skills-header">
                <span className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
                  // tech-stack.json
                </span>
              </div>
              <div className="skills-body">
                {skills.map((s, i) => (
                  <div key={i} className="skill-group">
                    <div className="skill-category mono">{s.category}</div>
                    <div className="skill-items">
                      {s.items.map((item) => (
                        <span key={item} className="badge">{item}</span>
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
