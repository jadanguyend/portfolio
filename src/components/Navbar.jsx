import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme
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
    <header className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-darkBg">
      <div className="w-full px-6 md:px-24 py-6 flex justify-between items-center">
        
        {/* Left */}
        <Link to="/" className="nav-link">
          Home
        </Link>

        {/* Right */}
        <nav className="flex items-center gap-8">
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/play" className="nav-link">Play</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="/resume.pdf" target="_blank" className="nav-link">
            Resume
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md 
                       hover:bg-gray-200 
                       dark:hover:bg-darkSurface 
                       transition"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </nav>
      </div>

      <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    </header>
  );
}
