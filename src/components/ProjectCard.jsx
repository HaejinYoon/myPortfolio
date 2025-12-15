export default function ProjectCard({
  title,
  period,
  role,
  description,
  tech,
  onOpen,   // 🔥 이름 변경 (의미 명확)
}) {
  return (
    <div
      onClick={onOpen}
      className="
        p-5 rounded-lg 
        bg-card dark:bg-[#1a1615]
        space-y-2
        cursor-pointer
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* 1행 */}
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-primary">
          {title}
        </h4>
        <span className="text-sm text-text-sub">
          {period}
        </span>
      </div>

      {/* 2행 */}
      <p className="text-sm font-medium">
        {role}
      </p>

      {/* 3행 */}
      <p className="text-sm text-text-sub dark:text-[#bbbbbb] leading-relaxed">
        {description}
      </p>

      <p className="text-xs text-text-sub dark:text-[#bbbbbb] pt-2">
        <span className="font-medium">Tech.</span> {tech}
      </p>
    </div>
  );
}
