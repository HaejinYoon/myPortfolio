import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="career"
      className="px-6 py-20 bg-bg dark:bg-[#141212]"
    >
    <div
      className="
        flex flex-col justify-center items-center text-center px-6
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      {/* Title */}
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-primary dark:text-primary-light text-3xl font-semibold tracking-wide">
            06.
          </span>

          <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
            Contact
          </h2>
        </div>

        {/* 구분선 */}
        <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3 mb-4" />
      </Reveal>
      
      <Reveal delay={120}>
        <p className="text-sub dark:text-[#bbbbbb] max-w-xl leading-relaxed">
          이메일: hjyoomp@gmail.com
          <br />
          깃허브: github.com/HaejinYoon
        </p>
      </Reveal>
    </div>
  </section>
  );
}
