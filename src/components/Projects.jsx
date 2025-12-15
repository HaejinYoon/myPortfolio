import { useState } from "react";
import Reveal from "./Reveal";

/* ===============================
   재사용 가능한 프로젝트 카드
================================ */
function ProjectCard({ title, summary, role, tech, result, links = [] }) {
  return (
    <div
      className="
        p-5
        border border-border dark:border-[#3a3332]
        rounded
        bg-bg dark:bg-[#1a1615]
        hover:shadow-md
        transition-all
      "
    >
      <h4 className="text-lg font-semibold text-primary dark:text-primary-light">
        {title}
      </h4>

      <p className="mt-2 text-sm text-text-sub dark:text-[#bbbbbb]">
        {summary}
      </p>

      <ul className="mt-3 text-sm space-y-1 text-text-sub dark:text-[#cccccc]">
        <li>• 역할: {role}</li>
        <li>• 기술: {tech}</li>
        {result && <li>• 성과: {result}</li>}
      </ul>

      {links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===============================
   메인 컴포넌트
================================ */
export default function Projects() {
  const [openGroup, setOpenGroup] = useState("ls");

  const toggleGroup = (id) => {
    setOpenGroup((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      className="
        px-6 py-20
        text-main dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Title */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-primary dark:text-primary-light text-3xl font-semibold tracking-wide">
              04.
            </span>

            <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
              Projects
            </h2>
          </div>

          {/* 구분선 */}
          <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3 mb-4" />
        </Reveal>
        {/* ===============================
            LS 빅데이터스쿨 5기
        ================================ */}
        <div className="border border-border dark:border-[#3a3332] rounded overflow-hidden bg-card dark:bg-[#1f1b1a]">
          <button
            onClick={() => toggleGroup("ls")}
            className="
              w-full flex justify-between items-center
              px-6 py-4 text-left
              hover:bg-primary/5 dark:hover:bg-white/5
              transition-colors
            "
          >
            <div>
              <h3 className="text-lg font-semibold">
                LS 빅데이터스쿨 5기
              </h3>
              <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
                데이터 분석 · 모델링 · 시각화 프로젝트
              </p>
            </div>
            <span
              className={`text-xl transition-transform ${
                openGroup === "ls" ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`
              overflow-hidden transition-all duration-300
              ${openGroup === "ls" ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-6 py-6 space-y-6">

              {/* 대표 프로젝트 */}
              <ProjectCard
                title="전력 사용량 기반 전기요금 예측 및 분석 대시보드"
                summary="전력 사용 패턴을 분석하여 전기요금을 예측하고, 결과를 시각화한 데이터 분석 프로젝트"
                role="데이터 전처리, 예측 모델링, Streamlit 대시보드 구현"
                tech="Python, Pandas, Scikit-learn, Streamlit"
                result="전기요금 예측 모델 구축 및 자동 리포트 대시보드 구현"
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/HaejinYoon/LS_final_project",
                  },
                  {
                    label: "Demo",
                    url: "https://electricityfareprediction.streamlit.app/",
                  },
                ]}
              />

              <ProjectCard
                title="지역 공공데이터 분석"
                summary="지역별 공공데이터를 수집·분석하여 주요 지표를 시각화한 프로젝트"
                role="데이터 수집 및 전처리, Shiny 대시보드 구현"
                tech="R, Shiny, Data Visualization"
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/HaejinYoon/project2_team4",
                  },
                  {
                    label: "Dashboard",
                    url: "https://spicywinter.shinyapps.io/pre_project2_team4/",
                  },
                ]}
              />

              <ProjectCard
                title="주조 공정 데이터 기반 모델 학습"
                summary="주조 공정 데이터를 활용해 품질 예측 모델을 학습하고 성능을 비교 분석한 프로젝트"
                role="Feature Engineering, 모델 학습 및 평가"
                tech="Python, Pandas, Scikit-learn"
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/HaejinYoon/Project-1-Data-Driven-Modeling-of-the-Casting-Process",
                  },
                  {
                    label: "Dashboard",
                    url: "https://spicywinter.shinyapps.io/main_proj1_team2/",
                  },
                ]}
              />

              <ProjectCard
                title="주조 공정 실시간 데이터 관리 대시보드"
                summary="실시간 공정 데이터를 시각화하여 공정 상태를 모니터링하는 대시보드 개발"
                role="데이터 처리 로직 설계 및 시각화 화면 구현"
                tech="Python, Shiny"
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/HaejinYoon/LSBS_Main_Project_2_Die_Casting_Realtime_Monitoring",
                  },
                  {
                    label: "Dashboard",
                    url: "https://spicywinter.shinyapps.io/main_proj_2_monitoring/",
                  },
                ]}
              />

            </div>
          </div>
        </div>

        {/* ===============================
            디지털 데이터 융합 JAVA 응용 SW 개발자 전문과정
        ================================ */}
        <div className="border border-border dark:border-[#3a3332] rounded overflow-hidden bg-card dark:bg-[#1f1b1a]">
          <button
            onClick={() => toggleGroup("java")}
            className="
              w-full flex justify-between items-center
              px-6 py-4 text-left
              hover:bg-primary/5 dark:hover:bg-white/5
              transition-colors
            "
          >
            <div>
              <h3 className="text-lg font-semibold">
                디지털 데이터 융합 JAVA 응용 SW 개발자 전문과정
              </h3>
              <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
                중앙정보처리학원 · 2021.09 ~ 2022.01 (5개월)
              </p>
            </div>
            <span
              className={`text-xl transition-transform ${
                openGroup === "java" ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`
              overflow-hidden transition-all duration-300
              ${openGroup === "java" ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-6 py-6 space-y-6">

              <ProjectCard
                title="Town Story (교육 수료 프로젝트 · 1등)"
                period="2021.11 ~ 2022.01"
                role="프론트엔드 및 백엔드 기능 구현, 화면 흐름 설계"
                tech="Java, Spring, JSP, Oracle DB, HTML, CSS, JavaScript"
                description="국비지원 SW 개발 교육 과정의 마무리 프로젝트로, 기획부터 구현까지 전 과정을 수행한 웹 애플리케이션 팀 프로젝트"
              />

              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://github.com/HaejinYoon/Town-Story"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub →
                </a>
                <a
                  href="https://drive.google.com/file/d/1XmmnAVuprD7BeXnJmagfj1ami8IgMb31/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  발표자료 →
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
