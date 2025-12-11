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
    <div
      className="
        flex flex-col justify-center items-center px-6 py-20
        bg-bg dark:bg-[#141212] 
        text-main dark:text-[#f2f2f2]
      "
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-12 text-primary dark:text-primary-light">
          Skills
        </h2>
      </Reveal>

      <div className="flex w-full max-w-5xl gap-10">
        {/* Left Side Tabs */}
        <div className="w-40 flex flex-col gap-4">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`text-left px-4 py-2 rounded-lg transition-all
                ${
                  activeTab === t
                    ? "text-primary border-l-4 border-primary font-semibold"
                    : "text-text-sub hover:text-primary"
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-8">
          {content[activeTab].map((item, idx) => (
            <Reveal delay={idx * 80} key={item.name}>
              <div
                className="
                  bg-card dark:bg-[#1f1b1a]
                  p-6 rounded-xl shadow
                  border border-border dark:border-[#3a3332]
                "
              >
                <div className="flex items-center gap-4 mb-3">
                  <img src={item.icon} className="w-10 h-10 object-contain" />
                  <h3 className="text-lg font-semibold text-primary">
                    {item.name}
                  </h3>
                </div>

                <ul className="text-left text-sm text-text-sub dark:text-[#cfcfcf] flex flex-col gap-1">
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
  );
}
