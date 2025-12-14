import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RightSideNav from "./components/RightSideNav";
import DarkModeSwitch from "./components/DarkModeSwitch";
import useScrollSpy from "./hooks/useScrollSpy";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function App() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 120);

  // 🔥 절대 수정하지 말아야 하는 제목 자동 변경
  useEffect(() => {
    if (!activeSection) return;

    const formatted = activeSection
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    document.title = `${formatted} | Haejin's Portfolio`;
  }, [activeSection]);

  // 🔥 커스텀 섹션 스크롤 구현
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isScrolling = false;
    const height = window.innerHeight;
    const sections = sectionIds;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const delta = e.deltaY;
      const current = container.scrollTop;

      const index = Math.round(current / height);
      let nextIndex = index;

      if (delta > 0) nextIndex = Math.min(index + 1, sections.length - 1);
      else nextIndex = Math.max(index - 1, 0);

      const target = nextIndex * height;

      isScrolling = true;
      container.scrollTo({
        top: target,
        behavior: "smooth",
      });

      // 느린 스크롤 속도 조절 (700ms → 천천히 이동)
      setTimeout(() => {
        isScrolling = false;
      }, 700);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="
        h-screen overflow-y-scroll overflow-x-hidden
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
        scroll-smooth
      "
    >
      <DarkModeSwitch />
      <RightSideNav activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="h-screen items-center pt-40 pb-52">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen items-center pt-40 pb-52">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-screen items-center pt-40 pb-52">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen items-center pt-40 pb-52">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen items-center pt-40 pb-40">
        <Contact />
      </section>
    </div>
  );
}
