import Reveal from "./Reveal";

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
      {/* 기준 컨테이너 */}
      <div className="w-full max-w-5xl mx-auto space-y-12">

        {/* ================= Title ================= */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-primary dark:text-primary-light text-3xl font-semibold">
              05.
            </span>
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
              주요 활동 및 수상 경력
            </h2>
          </div>
          <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3" />
        </Reveal>

        {/* ================= Scroll Content ================= */}
        {/* 이 영역만 스크롤 */}
        <div className="max-h-[calc(100vh-260px)] overflow-y-auto pr-4 space-y-20">

          {/* ================= 주요 활동 ================= */}
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">
                주요 활동
              </h3>

              {/* LS 빅데이터스쿨 5기 */}
              <div className="bg-card dark:bg-[#1f1b1a] p-6 rounded-xl border border-border dark:border-[#3a3332] space-y-3">
                <p className="font-semibold">
                  LS 빅데이터스쿨 5기
                </p>

                <p className="text-sm text-text-sub">
                  LS 미래원 <br />
                  2025.07. ~ 2025.11. (4개월)
                </p>

                <ul className="text-sm text-text-sub space-y-1">
                  <li>• Python 기반 빅데이터 분석</li>
                  <li>• 전기 / 전자 / 제조 도메인 지식을 반영한 데이터 분석 프로젝트 수행</li>
                  <li>• LS 그룹 현직자 특강 및 멘토링 참여</li>
                </ul>
              </div>

              {/* 디지털 데이터 융합 JAVA 응용 SW 개발자 전문과정 */}
              <div className="bg-card dark:bg-[#1f1b1a] p-6 rounded-xl border border-border dark:border-[#3a3332] space-y-3">
                <p className="font-semibold">
                  디지털 데이터 융합 JAVA 응용 SW 개발자 전문과정
                </p>

                <p className="text-sm text-text-sub">
                  중앙정보처리학원 <br />
                  2021.09. ~ 2022.01. (5개월)
                </p>

                <ul className="text-sm text-text-sub space-y-1">
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
                      Google Drive
                    </a>
                  </li>
                </ul>
              </div>

              {/* 해외 자매대학 어학연수 */}
              <div className="bg-card dark:bg-[#1f1b1a] p-6 rounded-xl border border-border dark:border-[#3a3332] space-y-3">
                <p className="font-semibold">
                  해외 자매대학 연계 어학연수 (영어)
                </p>

                <p className="text-sm text-text-sub">
                  California State University of Sacramento <br />
                  2015.01. ~ 2016.01. (1년)
                </p>

                <ul className="text-sm text-text-sub space-y-1">
                  <li>• 어학당 최고 레벨(Level 8) 달성</li>
                  <li>• 본 대학교 전공 관련 정규 수업 참여</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* ================= 수상 경력 ================= */}
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                🏅 수상 경력
              </h3>

              <div className="bg-card dark:bg-[#1f1b1a] p-6 rounded-xl border border-border dark:border-[#3a3332] space-y-4">
                <p className="font-semibold">
                  제7회 대구 빅데이터 분석 경진대회
                  <span className="text-primary ml-2">(DACON)</span>
                </p>

                <p className="text-sm text-text-sub">
                  데이터 분석 및 활용 분야 · 공공 부문 <br />
                  2025.08. ~ 2025.10. (3개월)
                </p>

                <p className="font-semibold text-primary">
                  🏆 특별상 수상
                </p>

                <ul className="text-sm text-text-sub space-y-1">
                  <li>• 분석 주제: 대구광역시 시니어 금융 서비스 전략 및 입지 제안</li>
                  <li>
                    • 결과 보고서:&nbsp;
                    <a
                      href="https://drive.google.com/file/d/1a4fOJL8fDlRXnDXz65bdghdXuDdjxQUj/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      링크
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
                      링크
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
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
