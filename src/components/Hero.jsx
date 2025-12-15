import Reveal from "./Reveal";
import HeroTitle from "./HeroTitle";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        // min-h-screen
        flex flex-col justify-center items-center text-center
        px-6
        py-24
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
        "
        // bg-bg/90 dark:bg-[#141212]/90
    >

      {/* 🔥 Background Effect */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left Top Blur */}
        <div
          className="
            absolute -top-32 -left-32
            w-[500px] h-[500px]
            rounded-full
            bg-primary
            opacity-10
            blur-[120px]
          "
        />

        {/* Right Bottom Blur */}
        <div
          className="
            absolute -bottom-32 -right-32
            w-[500px] h-[500px]
            rounded-full
            bg-secondary
            opacity-10
            blur-[120px]
          "
        />
      </div>

      {/* 🔥 Content */}
      <HeroTitle>
        화면 너머의 경험을 설계하는<br />
      </HeroTitle>
      <HeroTitle>
        프런트엔드 개발자 윤해진입니다.
      </HeroTitle>

      <Reveal>
        <p className="text-lg md:text-xl text-sub max-w-2xl leading-relaxed">
          Vue와 React 기반의 프론트엔드 개발 경험과  
          데이터 분석 역량을 바탕으로  
          사용자 경험을 중심으로 한 웹 서비스를 만듭니다.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex gap-4">
          <a
            href="#career"
            className="
              px-6 py-3 rounded-lg font-semibold 
              bg-primary text-white 
              hover:bg-primary-dark 
              transition
            "
          >
            💼 경력 사항
          </a>
          <a
            href="#projects"
            className="
              px-6 py-3 rounded-lg font-semibold 
              bg-primary text-white 
              hover:bg-primary-dark 
              transition
            "
          >
            🧩 대표 프로젝트
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
            💬 함께 이야기하기
          </a>
        </div>
      </Reveal>
      <ScrollIndicator />
    </section>
  );
}
