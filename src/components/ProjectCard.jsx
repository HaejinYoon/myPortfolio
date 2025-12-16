export default function ProjectCard({
  title,
  period,
  role,
  description,
  tech,
  onOpen,
}) {
  return (
    <button
      onClick={onOpen}
      aria-label={`${title} 프로젝트 상세보기`}
      className="
        group
        relative
        w-full text-left
        p-5 rounded-xl
        bg-card dark:bg-[#1a1615]
        space-y-2
        cursor-pointer
        transition
        hover:-translate-y-1
        hover:shadow-lg
        active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-primary/50
      "
    >
      {/* Hover Overlay (기존 유지) */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-xl
          bg-primary/5
          opacity-0
          transition-opacity
          group-hover:opacity-100
        "
      />

      {/* 상단 */}
      <div className="flex justify-between items-center relative z-10">
        <h4 className="text-lg font-semibold text-primary">
          {title}
        </h4>
        <span className="text-sm text-text-sub">
          {period}
        </span>
      </div>

      {/* 역할 */}
      <p className="text-sm font-medium relative z-10">
        {role}
      </p>

      {/* 설명 */}
      <p className="text-sm text-text-sub dark:text-[#bbbbbb] leading-relaxed relative z-10">
        {description}
      </p>

      {/* 기술 */}
      <p className="text-xs text-text-sub dark:text-[#bbbbbb] pt-2 relative z-10">
        <span className="font-medium">Tech.</span> {tech}
      </p>

      {/* 🔥 View Icon – 항상 표시 */}
      <div
        className="
          pointer-events-none
          absolute bottom-4 right-4
          w-9 h-9
          rounded-full
          bg-primary/90
          text-white
          flex items-center justify-center
          text-sm
          transition
          opacity-100
          scale-100
          group-hover:scale-110
        "
        aria-hidden
      >
        ⤢
      </div>
    </button>
  );
}
