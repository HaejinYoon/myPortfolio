import { useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import PdfModal from "./PdfModal";

export default function Career() {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [range, setRange] = useState({ start: 1, end: 1 });

  const openPdf = (start, end) => {
    setRange({ start, end });
    setPdfOpen(true);
  };

  return (
    <section
      id="career"
      className="px-6 py-20 bg-bg dark:bg-[#141212]"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-primary dark:text-primary-light text-3xl font-semibold tracking-wide">
              03.
            </span>

            <h2 className="text-3xl font-bold text-primary dark:text-primary-light">
              Career
            </h2>
          </div>

          {/* 구분선 */}
          <div className="h-[1px] bg-border dark:bg-[#1f2d3a] mt-3 mb-4" />
        </Reveal>

        {/* 회사 정보 */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold">
            스마티소프트
          </h3>
          <p className="text-sm text-text-sub dark:text-[#bbbbbb]">
            2022.03 ~ 2024.08 · 웹 프론트엔드 개발자 / UI·UX 파트장
          </p>
        </div>

        {/* 프로젝트 카드 */}
        <div className="grid gap-6">
          <ProjectCard
            title="SAHARA Web Viewer"
            period="2024.01 ~ 2024.08"
            role="UI/UX 파트장 · 프론트엔드/백엔드 통합 개발"
            description="OCR 문서 인식 결과를 웹에서 확인·관리하는 Web Viewer를 개발하고, UI/UX 구조 설계부터 Node.js 기반 백엔드까지 전반적인 개발을 담당했습니다."
            tech="Vue.js, Node.js, Express, Docker, MariaDB"
            onOpen={() => openPdf(24, 30)}
          />

          <ProjectCard
            title="Agent Web UI"
            period="2022.06 ~ 2024.08"
            role="프론트엔드 개발 · 제품 유지보수"
            description="OCR 통계 및 관리 기능을 제공하는 내부 관리용 Web UI의 유지보수 및 기능 개선을 담당했습니다."
            tech="Nuxt.js, Node.js, Spring, Docker"
            onOpen={() => openPdf(31, 34)}
          />

          <ProjectCard
            title="ARES–SAHARA Web Viewer"
            period="2022.03 ~ 2023.12"
            role="프론트엔드 개발"
            description="웹 브라우저 기반 문서 인식 결과 조회용 Web Viewer 초기 개발에 참여하여 주요 UI 기능과 화면 구성을 구현했습니다."
            tech="Vue.js, Spring, Docker"
            onOpen={() => openPdf(35, 45)}
          />
        </div>
      </div>

      {/* PDF 모달 */}
      <PdfModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        startPage={range.start}
        endPage={range.end}
      />
    </section>
  );
}
