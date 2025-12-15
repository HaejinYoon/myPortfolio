import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="
        absolute bottom-10
        flex flex-col items-center
        text-sub
        text-sm
        select-none
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <span className="mb-2">Scroll</span>

      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-xl"
      >
        ↓
      </motion.span>
    </motion.div>
  );
}
