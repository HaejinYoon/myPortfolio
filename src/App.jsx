import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Activities from "./components/ActivitiesAwards";
import Contact from "./components/Contact";
import RightSideNav from "./components/RightSideNav";
import DarkModeSwitch from "./components/DarkModeSwitch";
import useScrollSpy from "./hooks/useScrollSpy";
import useIsMobile from "./hooks/useIsMobile";
import globalBg from "./assets/bg/global-bg.jpg";

export default function App() {
  const sectionIds = [
    "home",
    "about",
    "career",
    "projects",
    "skills",
    "activities-awards",
    "contact",
  ];

  const activeSection = useScrollSpy(sectionIds, 120);
  const isMobile = useIsMobile();
  const scrollRef = useRef(null);

  // 🔥 절대 수정 금지: 제목 자동 변경
  useEffect(() => {
    if (!activeSection) return;

    const formatted = activeSection
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    document.title = `${formatted} | Haejin's Portfolio`;
  }, [activeSection]);

  // 🔥 PC 전용 커스텀 스크롤
  useEffect(() => {
    if (isMobile) return;

    const container = scrollRef.current;
    if (!container) return;

    let isScrolling = false;
    const height = window.innerHeight;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const delta = e.deltaY;
      const current = container.scrollTop;
      const index = Math.round(current / height);

      let nextIndex = index;
      if (delta > 0) {
        nextIndex = Math.min(index + 1, sectionIds.length - 1);
      } else {
        nextIndex = Math.max(index - 1, 0);
      }

      isScrolling = true;
      container.scrollTo({
        top: nextIndex * height,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
      }, 700);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isMobile, sectionIds]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* ✅ 전역 배경 이미지 */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${globalBg})` }}
      />

      {/* ✅ 스크롤 컨테이너 (투명) */}
      <div
        ref={scrollRef}
        className="
          h-screen overflow-y-scroll overflow-x-hidden
          text-main dark:text-[#f2f2f2]
          transition-colors duration-300
          scroll-smooth
        "
      >
        <DarkModeSwitch />
        <RightSideNav activeSection={activeSection} />

        <section
          id="home"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-24 md:pb-52"
        >
          <Hero />
        </section>

        <section
          id="about"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-24 md:pb-52"
        >
          <About />
        </section>

        <section
          id="skills"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-24 md:pb-52"
        >
          <Skills />
        </section>
        
        <section
          id="career"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-24 md:pb-52"
        >
          <Career />
        </section>

        <section
          id="projects"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-24 md:pb-52"
        >
          <Projects />
        </section>

        <section
          id="activities-awards"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-24 md:pb-52"
        >
          <Activities />
        </section>

        <section
          id="contact"
          className="min-h-screen md:h-screen bg-bg/90 dark:bg-[#141212]/90 pb-20 md:pb-40"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}