import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RightSideNav from "./components/RightSideNav";
import useScrollSpy from "./hooks/useScrollSpy";
import DarkModeSwitch from "./components/DarkModeSwitch";

export default function App() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 120);

  const scrollRef = useRef(null);

  // 🔥 탭 제목(activeSection 기반) 자동 변경
  useEffect(() => {
    if (!activeSection) return;

    const formatted = activeSection
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    document.title = `${formatted} | Haejin's Portfolio`;
  }, [activeSection]);

  // 🔥 스크롤 속도 조절
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      e.preventDefault();

      el.scrollBy({
        top: e.deltaY * 0.5, // ← 스크롤 속도 조절
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="
        snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden scroll-smooth

        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]

        transition-colors duration-300
      "
    >
      <DarkModeSwitch />
      <RightSideNav activeSection={activeSection} />

      <section id="home" className="snap-start min-h-screen"><Hero /></section>
      <section id="about" className="snap-start min-h-screen"><About /></section>
      <section id="skills" className="snap-start min-h-screen"><Skills /></section>
      <section id="projects" className="snap-start min-h-screen"><Projects /></section>
      <section id="contact" className="snap-start min-h-screen"><Contact /></section>
    </div>
  );
}
