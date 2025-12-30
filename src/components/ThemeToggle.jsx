import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-white dark:bg-[#0c0f11] transition-colors duration-300"
        style={{ clipPath: theme === 'dark' ? 'inset(0% 0% 0% 50%)' : 'inset(0% 50% 0% 0%)' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="relative flex items-center justify-between w-full h-full px-1"
        initial={false}
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Sun Icon */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-yellow-400"
          animate={{
            rotate: theme === 'light' ? 360 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-300"
          animate={{
            rotate: theme === 'dark' ? 0 : -90,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

