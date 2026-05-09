import { useState, useCallback, useEffect } from "react";
import { useTheme, useCommandPalette } from "./hooks/index.js";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "./styles/global.css";

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { open: paletteOpen, setOpen: setPaletteOpen } = useCommandPalette();
  const [activePage, setActivePage] = useState("home"); // "home" | "casestudy"
  const [activeProject, setActiveProject] = useState(null);

  const navigate = useCallback((target) => {
    if (target === "home") {
      setActivePage("home");
      setActiveProject(null);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 10);
    } else if (target === "projects") {
      setActivePage("home");
      setActiveProject(null);
      setTimeout(() => {
        const el = document.getElementById("projects");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (target === "about") {
      setActivePage("home");
      setActiveProject(null);
      setTimeout(() => {
        const el = document.getElementById("about");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (target === "contact") {
      setActivePage("home");
      setActiveProject(null);
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const viewProject = useCallback((project) => {
    setActiveProject(project);
    setActivePage("casestudy");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const goBack = useCallback(() => {
    setActivePage("home");
    setActiveProject(null);
    setTimeout(() => {
      const el = document.getElementById("projects");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
        onNavigate={navigate}
      />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={navigate}
        onToggleTheme={toggleTheme}
        onViewProject={viewProject}
      />

      {activePage === "home" && (
        <main>
          <Hero onNavigate={navigate} />
          <Projects onViewProject={viewProject} />
          <About />
          <ContactForm/>
          <Footer onNavigate={navigate} />
        </main>
      )}

      {activePage === "casestudy" && activeProject && (
        <main>
          <CaseStudy project={activeProject} onBack={goBack} />
          <Footer onNavigate={navigate} />
        </main>
      )}
    </>
  );
}
