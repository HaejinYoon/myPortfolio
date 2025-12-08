import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        h-screen flex flex-col justify-center items-center text-center
        px-6
        bg-bg dark:bg-[#141212]
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          안녕하세요, 프론트엔드 개발자 윤해진입니다.
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-lg md:text-xl text-sub max-w-2xl leading-relaxed">
          Vue와 데이터 기반 UI 개발에 강점을 가지고 있으며,  
          사용자 경험을 향상시키는 인터랙티브한 웹을 만들고 있습니다.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="
              px-6 py-3 rounded-lg font-semibold 
              bg-primary text-white 
              hover:bg-primary-dark 
              transition
            "
          >
            프로젝트 보러가기
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-lg font-semibold
              border border-primary text-primary 
              hover:bg-primary-light hover:text-white 
              transition
            "
          >
            연락하기
          </a>
        </div>
      </Reveal>
    </section>
  );
}
