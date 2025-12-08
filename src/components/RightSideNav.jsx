export default function RightSideNav({ activeSection }) {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
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
              {/* 🔥 툴팁을 점 왼쪽으로 이동 */}
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
  );
}