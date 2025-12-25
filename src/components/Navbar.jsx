import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

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

  // Load stored theme
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

  const navItems = [
    { label: "Work", path: "/" },
    { label: "Play", path: "/work" },
    { label: "About", path: "/play" },
    { label: "Resume", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background-0/30 dark:bg-darkBg/30 backdrop-blur-md shadow-sm">
      <div className="container py-4 flex justify-between items-center relative">
        {/* Left */}
        <Link to="/" className="nav-link">
          <span className="bracket">[</span>
          jadanguyend
          <span className="bracket">]</span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-background-50 dark:hover:bg-darkSurface transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Right */}
        <nav
          ref={menuRef}
          className={`
            absolute md:static top-full left-0
            w-full md:w-auto
            flex flex-col md:flex-row items-center
            bg-background-0 dark:bg-darkBg md:bg-transparent md:dark:bg-transparent
            border-b md:border-none border-border-light dark:border-border-dark
            transition-all duration-300
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          {/* Top spacing (mobile) */}
          <div className="md:hidden h-2" />

          <div className="flex flex-col md:flex-row items-center md:gap-6">
            {navItems.map((item) => (
              <Link key={item.label} to={item.path} className="nav-link">
                <span className="bracket">[</span>
                {item.label}
                <span className="bracket">]</span>
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="ml-2 hover:text-accent dark:hover:text-accent transition transform active:scale-110"
            >
              {isDark ? <RiSunFill size={18} /> : <RiMoonFill size={18} />}
            </button>
          </div>

          {/* Bottom spacing (mobile) */}
          <div className="md:hidden h-4" />
        </nav>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-border-light dark:bg-border-dark" />
    </header>
  );
}
