import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="
        absolute bottom-10 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-3
        text-sm text-text-sub
        select-none
      "
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {/* 텍스트 */}
      <span className="tracking-widest uppercase text-xs">
        Scroll
      </span>

      {/* 마우스 바디 */}
      <div
        className="
          relative w-6 h-10
          rounded-full
          border-2 border-primary
          flex justify-center
        "
        style={{
          boxShadow: "0 0 12px rgba(177, 35, 35, 0.4)",
        }}
      >
        {/* 내부 스크롤 점 */}
        <motion.span
          className="
            absolute top-2
            w-1.5 h-1.5
            rounded-full bg-primary
          "
          animate={{ y: [0, 12, 0], opacity: [1, 0.6, 1] }}
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
