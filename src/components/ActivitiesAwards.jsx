import Reveal from "./Reveal";

/* ================= 공통 이미지 미리보기 ================= */
import { useState } from "react";
import HoverImagePortal from "./HoverImagePortal";

function ImagePreview({ images }) {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="flex gap-3 shrink-0">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative"
          onMouseEnter={() => setActiveImg(img)}
          onMouseLeave={() => setActiveImg(null)}
        >
          {/* 썸네일 */}
          <img
            src={img}
            alt="preview"
            className="
              w-36 h-36 object-cover rounded-lg
              border border-border
              cursor-pointer
              transition-transform duration-200
              hover:scale-105
            "
          />

          {/* Portal 확대 */}
          <HoverImagePortal
            src={img}
            visible={activeImg === img}
          />
        </div>
      ))}
    </div>
  );
}

export default function ActivitiesAwards() {
  return (
    <section
      id="activities-awards"
      className="
        px-6 py-32
        bg-bg text-main
        dark:bg-[#141212] dark:text-[#f2f2f2]
        transition-colors duration-300
      "
    >
      <div className="w-full max-w-5xl mx-auto space-y-20">

        {/* ================= Title ================= */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-primary dark:text-primary-light text-3xl font-semibold">
              05.
            </span>
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
              Activities & Awards
            </h2>
          </div>
          <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3" />
        </Reveal>

        {/* ================= 주요 활동 ================= */}
        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">주요 활동</h3>

            {/* LS 빅데이터스쿨 */}
            <div
              className="
                group
                bg-card dark:bg-[#1f1b1a]
                p-6 rounded-xl
                border border-border dark:border-[#3a3332]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg dark:hover:shadow-black/40
                hover:border-primary
              "
            >
              <div className="flex gap-6">
                <div className="flex-1 space-y-3">
                  <p className="font-semibold flex items-center gap-2 group-hover:text-primary transition-colors">
                    LS 빅데이터스쿨 5기
                    <img
                      src="/ls_logo.png"
                      alt="LS 로고"
                      className="h-5 object-contain"
                    />
                  </p>
                  <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    LS 미래원 <br />
                    2025.07. ~ 2025.11. (4개월)
                  </p>
                  <ul className="text-sm  text-text-sub dark:text-[#bbbbbb]">
                    <li>• Python 기반 빅데이터 분석</li>
                    <li>• 전기 / 전자 / 제조 도메인 지식을 반영한 데이터 분석 프로젝트 수행</li>
                    <li>• LS 그룹 현직자 특강 및 멘토링 참여</li>
                  </ul>
                </div>

                <ImagePreview images={["/lsbs_cert.png"]} />
              </div>
            </div>

            {/* SW 개발자 전문과정 */}
            <div
              className="
                group
                bg-card dark:bg-[#1f1b1a]
                p-6 rounded-xl
                border border-border dark:border-[#3a3332]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg dark:hover:shadow-black/40
                hover:border-primary
              "
            >
              <div className="flex gap-6">
                <div className="flex-1 space-y-3">
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    디지털 데이터 융합 JAVA 응용 SW 개발자 전문과정
                  </p>
                  <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    중앙정보처리학원 <br />
                    2021.09. ~ 2022.01. (5개월)
                  </p>
                  <ul className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    <li>• 국비지원 SW 개발 교육 과정</li>
                    <li>• 교육 마무리 프로젝트 1등 수상</li>
                    <li>
                      • GitHub:&nbsp;
                      <a
                        href="https://github.com/HaejinYoon/Town-Story"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline"
                      >
                        Town-Story
                      </a>
                    </li>
                    <li>
                      • 발표 자료:&nbsp;
                      <a
                        href="https://drive.google.com/file/d/1XmmnAVuprD7BeXnJmagfIami8IgMb31/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline"
                      >
                        Google Drive (PDF)
                      </a>
                    </li>
                  </ul>
                </div>

                <ImagePreview images={["/town.png"]} />
              </div>
            </div>

            {/* 해외 어학연수 */}
            <div
              className="
                group
                bg-card dark:bg-[#1f1b1a]
                p-6 rounded-xl
                border border-border dark:border-[#3a3332]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg dark:hover:shadow-black/40
                hover:border-primary
              "
            >
              <div className="flex gap-6">
                <div className="flex-1 space-y-3">
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    해외 자매대학 연계 어학연수 (영어)
                  </p>
                  <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    California State University of Sacramento <br />
                    2015.01. ~ 2016.01. (1년)
                  </p>
                  <ul className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    <li>• 어학당 최고 레벨(Level 8) 달성</li>
                    <li>• 본 대학교 전공 관련 정규 수업 참여</li>
                  </ul>
                </div>

                <ImagePreview images={["/csus_cert.png", "/csus_pic.png"]} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================= 수상 경력 ================= */}
        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">수상 경력</h3>

            <div
              className="
                group
                bg-card dark:bg-[#1f1b1a]
                p-6 rounded-xl
                border border-border dark:border-[#3a3332]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg dark:hover:shadow-black/40
                hover:border-primary
              "
            >
              <div className="flex gap-6">
                <div className="flex-1 space-y-3">
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    제7회 대구 빅데이터 분석 경진대회
                    <span className="text-primary ml-2">(DACON)</span>
                  </p>
                  <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    데이터 분석 및 활용 분야 · 공공 부문 <br />
                    2025.08. ~ 2025.10. (3개월)
                  </p>
                  <p className="font-semibold text-primary">🏆 특별상 수상</p>
                  <ul className="text-sm text-text-sub dark:text-[#bbbbbb]">
                    <li>• 분석 주제: 대구광역시 시니어 금융 서비스 전략 및 입지 제안</li>
                    <li>
                      • 결과 보고서:&nbsp;
                      <a
                        href="https://drive.google.com/file/d/1a4fOJL8fDlRXnDXz65bdghdXuDdjxQUj/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline"
                      >
                        Google Drive (PDF)
                      </a>
                    </li>
                    <li>
                      • 발표 자료:&nbsp;
                      <a
                        href="https://drive.google.com/file/d/1Y-lHPIdv1sD5j2uKzawPVYhSgqX5iVga/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline"
                      >
                        Google Drive (PDF)
                      </a>
                    </li>
                    <li>
                      • 대시보드:&nbsp;
                      <a
                        href="https://spicywinter.shinyapps.io/pre_project2_team4"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline"
                      >
                        Shiny App
                      </a>
                    </li>
                  </ul>
                </div>

                <ImagePreview
                  images={[
                    "/dacon_demo.png",
                    "/dacon_leaderboard.png",
                  ]}
                />
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
