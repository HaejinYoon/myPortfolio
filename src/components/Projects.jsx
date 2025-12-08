import Reveal from "./Reveal";

export default function Projects() {
  return (
    <div
      className="
        h-screen px-6 py-24 text-center
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-8 text-primary dark:text-primary-light">
          Projects
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* Project 1 */}
        <Reveal>
          <div
            className="
              p-6
              bg-card dark:bg-[#1f1b1a]
              border border-border dark:border-[#3a3332]
              rounded shadow hover:shadow-lg
              transition-colors duration-300
            "
          >
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light">
              데이콘 AI 공모전
            </h3>
            <p className="text-sub dark:text-[#bbbbbb] mt-2">
              특별상 수상 프로젝트
            </p>
          </div>
        </Reveal>

        {/* Project 2 */}
        <Reveal>
          <div
            className="
              p-6
              bg-card dark:bg-[#1f1b1a]
              border border-border dark:border-[#3a3332]
              rounded shadow hover:shadow-lg
              transition-colors duration-300
            "
          >
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light">
              React Todo App
            </h3>
            <p className="text-sub dark:text-[#bbbbbb] mt-2">
              React Hooks + Tailwind 기반
            </p>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
