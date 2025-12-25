import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-darkBg shadow-sm">
      <div className="container py-3 flex justify-between items-center relative">
        {/* Left */}
        <Link to="/" className="nav-link hover:text-[#183ED8] dark:hover:text-blue-400">
          Home
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-darkSurface transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Right links */}
        <nav
          ref={menuRef}
          className={`
            flex-col md:flex-row md:flex items-center
            gap-4 md:gap-8
            absolute md:static top-full left-0 w-full md:w-auto
            bg-white dark:bg-darkBg md:bg-transparent md:dark:bg-transparent
            border-b md:border-none border-gray-200 dark:border-gray-700
            transition-all duration-300
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          {/* Top spacing for mobile */}
          <div className="md:hidden h-2" />

          <Link to="/work" className="nav-link hover:text-[#183ED8] dark:hover:text-blue-400 md:ml-4">
            Work
          </Link>
          <Link to="/play" className="nav-link hover:text-[#183ED8] dark:hover:text-blue-400">Play</Link>
          <Link to="/about" className="nav-link hover:text-[#183ED8] dark:hover:text-blue-400">About</Link>
          <a href="/resume.pdf" target="_blank" className="nav-link hover:text-[#183ED8] dark:hover:text-blue-400">
            Resume
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-darkSurface transition mt-2 md:mt-0 md:ml-4"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Bottom spacing for mobile */}
          <div className="md:hidden h-4" />
        </nav>
      </div>

      <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    </header>
  );
}
