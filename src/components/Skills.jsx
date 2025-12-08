import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div
      className="
        h-screen flex flex-col justify-center items-center text-center px-6
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-8 text-primary dark:text-primary-light">
          Skills
        </h2>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "JavaScript",
            "React",
            "Vue.js",
            "TailwindCSS",
            "Python",
            "Data Analysis",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2
                bg-card dark:bg-[#1f1b1a]
                border border-border dark:border-[#3a3332]
                shadow rounded
                text-main dark:text-[#f2f2f2]
                transition-colors duration-300
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
