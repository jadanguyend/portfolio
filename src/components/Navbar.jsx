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
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="container pointer-events-auto">
        <div
          className="
            relative
            rounded-xl
            bg-grayLight-50/30 dark:bg-grayDark-50/30
            backdrop-blur-md
            border border-grayLight-300/30 dark:border-grayDark-300/30
            transition-colors
          "
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left */}
            <Link to="/" className="nav-link text-xs text-grayLight-900 dark:text-grayDark-900 font-mono">
              <span className="bracket">[</span>
              jadanguyend
              <span className="bracket">]</span>
            </Link>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-grayLight-100/50 dark:hover:bg-grayDark-100/50 transition-colors font-mono"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="nav-link text-xs text-grayLight-900 dark:text-grayDark-900 hover:text-accent dark:hover:text-accent transition-colors font-mono"
                >
                  <span className="bracket">[</span>
                  {item.label}
                  <span className="bracket">]</span>
                </Link>
              ))}

              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="hover:text-accent dark:hover:text-accent transition-colors"
              >
                {isDark ? <RiSunFill size={16} /> : <RiMoonFill size={16} />}
              </button>
            </nav>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav
              ref={menuRef}
              className="
                md:hidden
                border-t border-grayLight-300 dark:border-grayDark-300
                bg-grayLight-50/80 dark:bg-grayDark-50/80
                backdrop-blur-md
                rounded-b-2xl
                transition-colors
              "
            >
              <div className="flex flex-col items-center gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="nav-link text-grayLight-900 dark:text-grayDark-100 hover:text-accent dark:hover:text-accent transition-colors font-mono"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="bracket">[</span>
                    {item.label}
                    <span className="bracket">]</span>
                  </Link>
                ))}

                <button
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  className="hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {isDark ? <RiSunFill size={18} /> : <RiMoonFill size={18} />}
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>

  );
}
