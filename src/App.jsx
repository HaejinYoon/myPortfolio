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

  /* 🔥 절대 수정 금지: 탭 타이틀 자동 변경 */
  useEffect(() => {
    if (!activeSection) return;

    const formatted = activeSection
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    document.title = `${formatted} | Haejin's Portfolio`;
  }, [activeSection]);

  /* 🔥 PC 전용 섹션 스냅 스크롤 (침범 없는 방식) */
  useEffect(() => {
    if (isMobile) return;

    const container = scrollRef.current;
    if (!container) return;

    let isSnapping = false;

    const sections = Array.from(container.querySelectorAll("section"));

    const getCurrentIndex = () => {
      const pos = container.scrollTop + window.innerHeight * 0.3;
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= pos) idx = i;
        else break;
      }
      return idx;
    };

    const handleWheel = (e) => {
      if (isSnapping) return;

      const delta = e.deltaY;
      const currentIndex = getCurrentIndex();

      /* ======================
        ↑ 위로 스크롤 (즉시 스냅)
        ====================== */
      if (delta < 0) {
        e.preventDefault();

        const prevIndex = Math.max(currentIndex - 1, 0);
        if (prevIndex === currentIndex) return;

        isSnapping = true;
        sections[prevIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          isSnapping = false;
        }, 650);

        return;
      }

      /* ======================
        ↓ 아래로 스크롤 (자연)
        ====================== */
      const current = sections[currentIndex];
      if (!current) return;

      const sectionBottom =
        current.offsetTop + current.offsetHeight;
      const viewBottom =
        container.scrollTop + window.innerHeight;

      const canScrollDownInside =
        sectionBottom > viewBottom + 8;

      if (canScrollDownInside) {
        // 자연 스크롤 허용
        return;
      }

      // 내부 끝 → 다음 섹션
      e.preventDefault();

      const nextIndex = Math.min(
        currentIndex + 1,
        sections.length - 1
      );
      if (nextIndex === currentIndex) return;

      isSnapping = true;
      sections[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isSnapping = false;
      }, 650);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () =>
      container.removeEventListener("wheel", handleWheel);
  }, [isMobile]);


  return (
    <div className="relative h-screen overflow-hidden">
      {/* ✅ 전역 배경 */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${globalBg})` }}
      />

      {/* ✅ 스크롤 컨테이너 */}
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

        {/* Hero만 화면 고정 */}
        <section
          id="home"
          className="h-screen bg-bg/90 dark:bg-[#141212]/90"
        >
          <Hero />
        </section>

        {/* 이하 전부 콘텐츠 기준 */}
        <section
          id="about"
          className="min-h-screen bg-bg/90 dark:bg-[#141212]/90 py-24"
        >
          <About />
        </section>

        <section
          id="skills"
          className="min-h-screen bg-bg/90 dark:bg-[#141212]/90 py-24"
        >
          <Skills />
        </section>

        <section
          id="career"
          className="min-h-screen bg-bg/90 dark:bg-[#141212]/90 py-24"
        >
          <Career />
        </section>

        <section
          id="projects"
          className="min-h-screen bg-bg/90 dark:bg-[#141212]/90 py-24"
        >
          <Projects />
        </section>

        <section
          id="activities-awards"
          className="min-h-screen bg-bg/90 dark:bg-[#141212]/90 py-24"
        >
          <Activities />
        </section>

        <section
          id="contact"
          className="min-h-screen bg-bg/90 dark:bg-[#141212]/90 py-32"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}
