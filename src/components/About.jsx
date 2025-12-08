import Reveal from "./Reveal";

export default function About() {
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
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-light">
          About Me
        </h2>
      </Reveal>

      <Reveal>
        <p className="max-w-2xl text-sub dark:text-[#bbbbbb] leading-relaxed">
          프론트엔드와 데이터 분석 프로젝트 경험을 가진 개발자입니다.
          React, Vue, Python 기반 데이터 분석에 강점이 있으며
          사용자 친화적 인터페이스를 만드는 작업을 좋아합니다.
        </p>
      </Reveal>
    </div>
  );
}
