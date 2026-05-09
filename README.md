# Sohan Patnaik — Developer Portfolio

A production-grade developer portfolio built with **React 19 + pure CSS**.  
No Tailwind. No Next.js. No animation libraries. Just React and CSS.

---

## Stack

- **React 19** — UI framework
- **Vite 6** — build tool & dev server
- **Pure CSS** — animations, theming, layout (zero utility frameworks)
- **Google Fonts** — JetBrains Mono, DM Sans, Instrument Serif

---

## Features

| Feature | Details |
|---|---|
| **Dark / Light Theme** | CSS variables + `data-theme` attribute toggle |
| **Typing Animation** | Pure React state — no libraries |
| **Animated Grid Hero** | CSS `grid-move` + radial glow + scanline |
| **Project Cards** | Hover glow borders, mini architecture flow, animated tech badges |
| **Case Study Pages** | Full engineering breakdowns per project |
| **Architecture Diagrams** | SVG + animated `<animateMotion>` particles |
| **Terminal Demo** | React state-driven boot sequence animation |
| **Command Palette** | `⌘K` keyboard shortcut, fuzzy search, keyboard nav |
| **Deployment Status** | Live pulse indicator in navbar |
| **"Currently Building" widget** | Hero section pill |
| **Responsive** | Mobile-first layout |

---

## Folder Structure

```
portfolio/
├── index.html                  # Vite entry point
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Router + theme + command palette
    ├── data/
    │   └── portfolio.js        # All projects, personal info, metrics
    ├── hooks/
    │   └── index.js            # useTypingAnimation, useTerminal, useTheme, useCommandPalette
    ├── components/
    │   ├── Navbar.jsx          # Fixed nav, theme toggle, status pill, ⌘K
    │   ├── Hero.jsx            # Typing, grid bg, CTA, stats
    │   ├── Projects.jsx        # Project cards with hover effects
    │   ├── ArchDiagram.jsx     # SVG architecture flow with animated particles
    │   ├── CommandPalette.jsx  # Keyboard-driven command palette
    │   ├── About.jsx           # Bio, skills, quick facts
    │   └── Footer.jsx          # Links, status, credit
    ├── pages/
    │   └── CaseStudy.jsx       # Full case study page (per project)
    └── styles/
        ├── global.css          # CSS variables, reset, animations, utilities
        ├── navbar.css
        ├── hero.css
        ├── projects.css
        ├── architecture.css
        ├── casestudy.css
        ├── command-palette.css
        ├── about.css
        └── footer.css
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens at localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Customization

**1. Update your info** → `src/data/portfolio.js`
- Edit `personal` object: name, role, bio, links, currentlyBuilding
- Edit `projects` array: add/remove/modify project entries

**2. Add a new project** — each project needs:
```js
{
  id: "my-project",
  title: "Project Title",
  subtitle: "One liner",
  heroColor: "#hexcolor",        // accent color for this project
  tech: ["React", "FastAPI"],
  metrics: [{ label: "Latency", value: "<100ms" }],
  archNodes: ["Frontend", "API", "DB"],
  archFlows: [[0,1],[1,2]],      // edges between node indices
  terminalSteps: ["$ booting..."],
  // ... problem, solution, impact, engNotes, timeline, principles
}
```

**3. Change theme colors** → `src/styles/global.css` — edit `:root` and `[data-theme="light"]` blocks.

---

## Engineering Decisions

- **No animation libraries** — all motion via CSS `@keyframes` + `transition`
- **SVG `<animateMotion>`** for architecture particles — GPU-accelerated, no JS loop needed
- **CSS custom properties** for full dark/light theming without React state overhead
- **`useTerminal` hook** drives boot sequence with a ref-based index to avoid closure stale state
- **Command palette** is a pure React portal pattern with keyboard event delegation

---

Built by [Sohan Patnaik](https://github.com/sohanpatnaik)
"# sohan-portfolio" 
