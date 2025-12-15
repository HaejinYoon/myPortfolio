import Reveal from "./Reveal";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        px-6 py-32
        text-main dark:text-[#e6e6e6]
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="md:col-span-2 space-y-10">

          {/* Title */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-primary dark:text-primary-light text-3xl font-semibold">
                  01.
                </span>
                <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
                  About Me
                </h2>
              </div>
              <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3" />
            </div>
          </Reveal>

          {/* CARD LIST */}
          <div className="space-y-6">

            {/* DILIGENCE */}
            <Reveal>
              <div
                className="
                  group
                  bg-card/90 dark:bg-[#1f1b1a]
                  border border-border dark:border-[#1f2d3a]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-primary/60
                "
              >
                <h3
                  className="
                    font-semibold text-lg mb-3
                    text-primary-light dark:text-primary
                    transition-colors
                    group-hover:text-primary
                  "
                >
                  #Diligence
                </h3>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7]">
                  성실함과 근면함은 저의 삶의 중요한 원칙입니다.
                  저는 항상 주어진 일에 최선을 다하고, 작은 일이라도 소홀히 여기지 않습니다.
                </p>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7] mt-4">
                  매일 꾸준히 노력하며 목표를 향해 한 걸음씩 나아가는 것을 소중하게 생각합니다.
                </p>
              </div>
            </Reveal>

            {/* PUNCTUALITY */}
            <Reveal>
              <div
                className="
                  group
                  bg-card/90 dark:bg-[#1f1b1a]
                  border border-border dark:border-[#1f2d3a]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-primary/60
                "
              >
                <h3
                  className="
                    font-semibold text-lg mb-3
                    text-primary-light dark:text-primary
                    group-hover:text-primary
                  "
                >
                  #Punctuality
                </h3>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7]">
                  시간 약속을 잘 지키는 것은 저의 중요한 가치 중 하나입니다.
                  정해진 시간에 맞춰 약속을 이행하려고 노력하며,
                  이를 통해 신뢰를 쌓고 서로의 시간을 존중합니다.
                </p>
              </div>
            </Reveal>

            {/* CONSISTENCY */}
            <Reveal>
              <div
                className="
                  group
                  bg-card/90 dark:bg-[#1f1b1a]
                  border border-border dark:border-[#1f2d3a]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-primary/60
                "
              >
                <h3
                  className="
                    font-semibold text-lg mb-3
                    text-primary-light dark:text-primary
                    group-hover:text-primary
                  "
                >
                  #Consistency
                </h3>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7]">
                  꾸준함은 제가 개발자로서 성장할 수 있었던 가장 큰 원동력입니다.
                  작은 개선들이 쌓여 큰 변화를 만든다고 믿습니다.
                </p>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7] mt-4">
                  반복적이지만 중요한 과정 속에서 꾸준히 전진하는 태도는
                  저를 한 단계씩 성장시키는 밑바탕이 됩니다.
                </p>
              </div>
            </Reveal>

            {/* RESPONSIBILITY */}
            <Reveal>
              <div
                className="
                  group
                  bg-card/90 dark:bg-[#1f1b1a]
                  border border-border dark:border-[#1f2d3a]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-primary/60
                "
              >
                <h3
                  className="
                    font-semibold text-lg mb-3
                    text-primary-light dark:text-primary
                    group-hover:text-primary
                  "
                >
                  #Responsibility
                </h3>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7]">
                  맡은 일에 대한 책임감을 가장 중요한 가치로 생각합니다.
                  문제를 회피하기보다 직접 해결하려는 자세를 중요하게 여깁니다.
                </p>

                <p className="text-sm leading-7 text-sub dark:text-[#c7c7c7] mt-4">
                  협업 과정에서 신뢰를 쌓고,
                  팀이 의지할 수 있는 개발자가 되는 것이 목표입니다.
                </p>
              </div>
            </Reveal>

          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <Reveal>
          <div className="flex justify-center md:justify-end md:self-center">
            <div className="relative group max-w-xs">

              {/* OUTER BORDER */}
              <div
                className="
                  absolute inset-0 rounded-lg
                  border-2 border-primary/40 dark:border-primary-light/40
                  transition-all duration-300
                  group-hover:scale-[1.07]
                  pointer-events-none
                "
              />

              {/* INNER BORDER */}
              <div
                className="
                  absolute inset-0 rounded-lg
                  border border-primary/70 dark:border-primary-light/70
                  transition-all duration-300
                  group-hover:scale-[1.03]
                  pointer-events-none
                "
              />

              {/* IMAGE */}
              <div
                className="
                  relative rounded-lg overflow-hidden
                  bg-card dark:bg-[#1a2935]
                  border border-border dark:border-[#1f2d3a]
                  shadow-lg
                  transition-transform duration-300
                  group-hover:scale-[1.02]
                "
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="
                    w-full h-auto object-contain
                    transition-transform duration-500
                    group-hover:scale-[1.06]
                  "
                />
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
