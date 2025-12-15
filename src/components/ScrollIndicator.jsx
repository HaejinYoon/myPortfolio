import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="
        absolute bottom-10 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-3
        text-xs tracking-widest uppercase
        text-text-sub dark:text-gray-300
        select-none
      "
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {/* 텍스트 */}
      <span>Scroll</span>

      {/* 마우스 바디 */}
      <div
        className="
          relative w-6 h-10
          rounded-full
          border-2
          border-primary dark:border-primary-light
          flex justify-center
        "
        style={{
          boxShadow:
            "0 0 10px rgba(177, 35, 35, 0.35), inset 0 0 6px rgba(177, 35, 35, 0.15)",
        }}
      >
        {/* 내부 스크롤 점 */}
        <motion.span
          className="
            absolute top-2
            w-1.5 h-1.5
            rounded-full
            bg-primary dark:bg-primary-light
          "
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
