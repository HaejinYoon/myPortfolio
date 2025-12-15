import { useEffect, useState, useRef } from "react";

export default function RightSideNav({ activeSection }) {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "activities-awards", label: "Act&Awards" },
    { id: "contact", label: "Contact" },
  ];

  const [visible, setVisible] = useState(true);
  const hideTimer = useRef(null);

  // 자동 숨김
  const startHideTimer = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  useEffect(() => {
    startHideTimer();
    return () => clearTimeout(hideTimer.current);
  }, []);

  return (
    <>
      {/* 🔥 UI 힌트: '||' 핸들 */}
      <div
        className={`
          fixed top-1/2 right-3.5 -translate-y-1/2 z-40
          px-1 py-3
          bg-primary text-white
          rounded-l-full
          text-sm font-bold
          flex items-center justify-center
          cursor-pointer transition-all duration-300

          ${visible 
            ? "opacity-0 pointer-events-none translate-x-3"  // 네비가 나타나면 완전 제거
            : "opacity-80 hover:opacity-100"}                 // 네비가 숨겨지면 표시
        `}
        onMouseEnter={() => {
          clearTimeout(hideTimer.current);
          setVisible(true);
        }}
      >
        ||
      </div>

      {/* 🔥 실제 네비게이션 */}
      <div
        className={`
          fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto
          transition-opacity duration-500
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onMouseEnter={() => {
          clearTimeout(hideTimer.current);
          setVisible(true);
        }}
        onMouseLeave={() => {
          startHideTimer();
        }}
      >
        <div className="flex flex-col items-center gap-4">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;

            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="relative group flex items-center"
              >
                {/* 점 / 캡슐 */}
                <div
                  className={`
                    transition-all duration-300
                    ${
                      isActive
                        ? "w-3 h-10 rounded-full bg-primary dark:bg-primary-light"
                        : "w-3 h-3 rounded-full bg-gray-400 dark:bg-[#666] group-hover:bg-primary-light dark:group-hover:bg-primary"
                    }
                  `}
                />

                {/* 툴팁 */}
                <span
                  className="
                    absolute -left-28 top-1/2 -translate-y-1/2
                    px-2 py-1 rounded
                    bg-card dark:bg-[#1f1b1a]
                    border border-border dark:border-[#3a3332]
                    text-main dark:text-[#f2f2f2]
                    opacity-0 group-hover:opacity-100 transition
                  "
                >
                  {sec.label}
                </span>
              </a>
            );
          })}

          {/* 위로 가기 */}
          <a
            href="#home"
            className="
              mt-2 flex justify-center items-center
              w-10 h-10 rounded-full
              bg-primary text-white hover:bg-primary-light
              transition shadow-md
            "
          >
            ↑
          </a>
        </div>
      </div>
    </>
  );
}
