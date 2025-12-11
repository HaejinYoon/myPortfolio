import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RightSideNav from "./components/RightSideNav";
import DarkModeSwitch from "./components/DarkModeSwitch";
import useScrollSpy from "./hooks/useScrollSpy";

export default function App() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 120);

  // 🔥 이 블록은 절대 수정하지 말라고 하신 부분 (그대로 사용)
  useEffect(() => {
    if (!activeSection) return;

    const formatted = activeSection
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    document.title = `${formatted} | Haejin's Portfolio`;
  }, [activeSection]);

  return (
    <div
      className="
        h-screen overflow-y-scroll overflow-x-hidden scroll-smooth
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <DarkModeSwitch />
      <RightSideNav activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-52">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="pt-40 pb-52">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-40 pb-52">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-40 pb-52">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-40 pb-40">
        <Contact />
      </section>
    </div>
  );
}
