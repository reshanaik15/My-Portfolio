import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
  onClick={toggleTheme}
  className={`
    relative w-14 h-8 rounded-full flex items-center px-1
    transition-colors
    ${theme === "dark" ? "justify-end bg-gray-700" : "justify-start bg-gray-200"}
  `}
>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-white dark:bg-black flex items-center justify-center shadow"
      >
        {theme === "dark" ? (
          <Moon size={14} className="text-purple-400" />
        ) : (
          <Sun size={14} className="text-yellow-400" />
        )}
      </motion.div>
    </button>
  );
}
