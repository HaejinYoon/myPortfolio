import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);

    if (saved) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newValue = !dark;
    setDark(newValue);

    if (newValue) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
      <button
        onClick={toggleDarkMode}
        className="
          fixed top-6 right-6 z-[9999]
          flex items-center
          w-16 h-8 rounded-full px-1
          bg-gray-300 dark:bg-gray-700
          shadow-lg border border-gray-400 dark:border-gray-600
          transition-colors duration-300
        "
      >
      {/* 써클 */}
      <div
        className={`
          h-6 w-6 rounded-full
          bg-white dark:bg-gray-200
          shadow-md

          transform transition-all duration-300
          ${dark ? "translate-x-8" : "translate-x-0"}
        `}
      />

      {/* 아이콘 */}
      <span className="absolute left-2 text-xs">🌞</span>
      <span className="absolute right-2 text-xs">🌙</span>
    </button>
  );
}
