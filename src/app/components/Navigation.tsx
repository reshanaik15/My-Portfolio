import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-8 py-4 shadow-lg transition-all
        ${scrolled 
          ? 'backdrop-blur-xl bg-white/70 dark:bg-gray-900/70' 
          : 'backdrop-blur-md bg-white/50 dark:bg-gray-900/50'
        }`}
    >
      <ul className="flex items-center gap-8">
        {['Work', 'Skills', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all" />
            </button>
          </li>
        ))}

        {/* 🌙 THEME TOGGLE */}
        <li className="flex items-center">
          <ThemeToggle />
        </li>
      </ul>
    </motion.nav>
  );
}
