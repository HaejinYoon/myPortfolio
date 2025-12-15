import { motion } from "framer-motion";

export default function HeroTitle({ children }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="text-4xl md:text-6xl font-bold mb-4 text-primary"
      >
        {children}
      </motion.h1>
    </div>
  );
}
