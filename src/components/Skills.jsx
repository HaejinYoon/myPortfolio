import { useState } from "react";
import Reveal from "./Reveal";

import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import vueIcon from "../assets/icons/vue.png";
import nuxtIcon from "../assets/icons/nuxt.png";
import nodeIcon from "../assets/icons/node.png";
import dockerIcon from "../assets/icons/docker.png";
import mariaIcon from "../assets/icons/maria.png";
import pythonIcon from "../assets/icons/python.png";
import shinyIcon from "../assets/icons/shiny.png";

export default function Skills() {
  const tabs = ["Frontend", "Backend", "DevOps", "Data"];

  const content = {
    Frontend: [
      {
        name: "HTML",
        icon: htmlIcon,
        desc: [
          "웹 마크업 기초와 시맨틱 구조에 대한 이해를 기반으로 개발합니다.",
          "접근성을 고려한 구조 작성 경험이 있습니다.",
        ],
      },
      {
        name: "CSS",
        icon: cssIcon,
        desc: [
          "레이아웃 구성, 반응형 디자인, 컴포넌트 스타일링을 구현할 수 있습니다.",
          "TailwindCSS와 함께 활용한 프로젝트 경험이 있습니다.",
        ],
      },
      {
        name: "JavaScript",
        icon: jsIcon,
        desc: [
          "ES6+ 문법을 활용하며 비동기 처리(Promise, async/await)에 익숙합니다.",
          "데이터 가공, 컴포넌트 로직 구현 등 다양한 실무 경험이 있습니다.",
        ],
      },
      {
        name: "Vue.js",
        icon: vueIcon,
        desc: [
          "컴포넌트 기반 구조 이해 및 재사용성 고려한 설계가 가능합니다.",
          "Vue Router / Pinia 등 활용 경험이 있습니다.",
        ],
      },
      {
        name: "Nuxt.js",
        icon: nuxtIcon,
        desc: [
          "SSR, SSG 활용 경험이 있으며 API 연동 및 페이지 구성 경험이 있습니다.",
        ],
      },
    ],

    Backend: [
      {
        name: "Node.js",
        icon: nodeIcon,
        desc: [
          "간단한 REST API 서버 제작 경험이 있습니다.",
          "Express 기반의 라우팅 및 미들웨어 처리 경험이 있습니다.",
        ],
      },
      {
        name: "MariaDB",
        icon: mariaIcon,
        desc: [
          "DB 스키마 설계 및 기본적인 CRUD 쿼리 작성이 가능합니다.",
        ],
      },
    ],

    DevOps: [
      {
        name: "Docker",
        icon: dockerIcon,
        desc: [
          "Dockerfile, Compose를 사용한 컨테이너 환경 구성 경험이 있습니다.",
        ],
      },
    ],

    Data: [
      {
        name: "Python",
        icon: pythonIcon,
        desc: [
          "Pandas 기반 데이터 가공 및 분석 경험이 있습니다.",
          "시각화(Matplotlib, Shiny 등) 경험이 있습니다.",
        ],
      },
      {
        name: "Shiny",
        icon: shinyIcon,
        desc: [
          "데이터 변화에 반응하는 대시보드 구현 경험이 있습니다.",
        ],
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className="
        px-6 py-32
        bg-bg text-main
        dark:bg-[#141212] dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      {/* ⭐ 기준 컨테이너 (가로폭 고정) */}
      <div className="w-full max-w-4xl mx-auto space-y-10">

        {/* Title */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-primary dark:text-primary-light text-3xl font-semibold tracking-wide">
              02.
            </span>
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
              Skills
            </h2>
          </div>
          <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3" />
        </Reveal>

        {/* Content */}
        <div className="flex w-full gap-10">

          {/* Tabs */}
          <div className="w-40 shrink-0 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-2 transition-all
                  ${
                    activeTab === tab
                      ? "text-primary border-l-4 border-primary font-semibold"
                      : "text-text-sub hover:text-primary"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="flex-1 min-w-0 flex flex-col gap-8">
            {content[activeTab].map((item, idx) => (
              <Reveal key={item.name} delay={idx * 80}>
                <div
                  className="
                    bg-card dark:bg-[#1f1b1a]
                    p-6 rounded-xl shadow
                    border border-border dark:border-[#3a3332]
                  "
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                    <h3 className="text-lg font-semibold text-primary">
                      {item.name}
                    </h3>
                  </div>

                  <ul className="text-sm text-text-sub dark:text-[#cfcfcf] space-y-1">
                    {item.desc.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}