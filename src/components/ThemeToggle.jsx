import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon as SystemIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const THEMES = ["light", "dark", "system"];
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    updateTheme(savedTheme);
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : newTheme;
  };

  return (
    <div className="relative">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        onClick={() => {
          const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
          updateTheme(nextTheme);
        }}
      >
        <span className="sr-only">Elige el tema</span>
        {theme === "light" && <SunIcon className="w-5 h-5" />}
        {theme === "dark" && <MoonIcon className="w-5 h-5" />}
        {theme === "system" && <SystemIcon className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
