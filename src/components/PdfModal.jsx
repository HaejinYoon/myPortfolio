import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

/* ✅ ESM worker를 public에서 직접 로드 */
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";


import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function PdfModal({
  open,
  onClose,
  startPage,
  endPage,
  title = "Project Slide",
}) {
  const [currentPage, setCurrentPage] = useState(startPage);
  const [modalSize, setModalSize] = useState(null);
  const [showControls, setShowControls] = useState(true);

  const modalRef = useRef(null);
  const wheelLock = useRef(false);
  const hideTimer = useRef(null);
  const hoveringControls = useRef(false);

  const totalSlides = endPage - startPage + 1;
  const currentIndex = currentPage - startPage + 1;
  const progress = currentIndex / totalSlides;

  /* body 스크롤 잠금 */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setCurrentPage(startPage);
      setShowControls(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, startPage]);

  /* 타이머 유틸 */
  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const startHideTimer = () => {
    clearHideTimer();
    hideTimer.current = setTimeout(() => {
      if (!hoveringControls.current) {
        setShowControls(false);
      }
    }, 2000);
  };

  /* wheel 슬라이드 */
  useEffect(() => {
    if (!open || !modalRef.current) return;
    const el = modalRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (wheelLock.current) return;
      wheelLock.current = true;

      if (e.deltaY > 0 && currentPage < endPage) {
        setCurrentPage((p) => p + 1);
      } else if (e.deltaY < 0 && currentPage > startPage) {
        setCurrentPage((p) => p - 1);
      }

      setTimeout(() => (wheelLock.current = false), 420);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open, currentPage, startPage, endPage]);

  /* 키보드 */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if ((e.key === "ArrowRight" || e.key === "ArrowDown") && currentPage < endPage) {
        setCurrentPage((p) => p + 1);
      }
      if ((e.key === "ArrowLeft" || e.key === "ArrowUp") && currentPage > startPage) {
        setCurrentPage((p) => p - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, currentPage, startPage, endPage, onClose]);

  useEffect(() => {
    if (!open) return;

    let rafId = null;

    const onMouseMove = () => {
      // 이미 보이고 있으면 아무것도 안 함
      if (showControls) return;

      // 연속 mousemove 방지 (성능 + 안정성)
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setShowControls(true);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [open, showControls]);


  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onClick={onClose}
    >
      {/* 모달 카드 */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => {
          setShowControls(true);
          startHideTimer(); // 🔥 모달 위에서도 타이머 허용
        }}
        onMouseLeave={startHideTimer}
        className="
          relative
          rounded-2xl
          shadow-2xl
          px-8 pt-6 pb-6
          bg-white dark:bg-[#1e1e1e]
          text-text-main dark:text-[#f2f2f2]
        "
        style={{
          width: modalSize?.width,
          height: modalSize?.height,
        }}
      >
        {/* ◀ 좌측 화살표 */}
        {currentPage > startPage && (
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            onMouseEnter={() => {
              hoveringControls.current = true;
              clearHideTimer();
              setShowControls(true);
            }}
            onMouseLeave={() => {
              hoveringControls.current = false;
              startHideTimer();
            }}
            className={`
              absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-10 h-20 rounded-xl
              flex items-center justify-center
              bg-black/40 backdrop-blur
              text-white
              transition-opacity duration-300
              ${showControls ? "opacity-100" : "opacity-0"}
            `}
          >
            ◀
          </button>
        )}

        {/* ▶ 우측 화살표 */}
        {currentPage < endPage && (
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            onMouseEnter={() => {
              hoveringControls.current = true;
              clearHideTimer();
              setShowControls(true);
            }}
            onMouseLeave={() => {
              hoveringControls.current = false;
              startHideTimer();
            }}
            className={`
              absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2
              w-10 h-20 rounded-xl
              flex items-center justify-center
              bg-black/40 backdrop-blur
              text-white
              transition-opacity duration-300
              ${showControls ? "opacity-100" : "opacity-0"}
            `}
          >
            ▶
          </button>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-semibold opacity-80">{title}</h4>
          <button
            onClick={onClose}
            className="
              w-8 h-8 rounded-full
              flex items-center justify-center
              bg-gray-100 dark:bg-[#2a2a2a]
              hover:bg-gray-200 dark:hover:bg-[#333]
            "
          >
            ✕
          </button>
        </div>

        {/* PDF */}
        <div className="flex justify-center">
          <Document file="/portfolio.pdf">
            <Page
              pageNumber={currentPage}
              scale={1.18}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={(page) => {
                if (!modalSize) {
                  const viewport = page.getViewport({ scale: 1.18 });
                  setModalSize({
                    width: viewport.width + 96,
                    height: viewport.height + 140,
                  });
                }
              }}
            />
          </Document>
        </div>

        {/* Progress */}
        <div className="mt-4 flex flex-col items-center gap-1">
          <div className="w-44 h-[3px] bg-gray-200 dark:bg-[#333] rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="text-[11px] opacity-70">
            {currentIndex} / {totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
}
