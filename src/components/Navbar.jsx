import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // ===== Smooth scroll helper =====
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // ===== Scroll or navigate depending on current page =====
  const handleNavClick = (item) => {
    if (item.type === "scroll") {
      if (location.pathname === "/") {
        scrollToSection(item.target);
      } else {
        // navigate to home, then scroll after short delay
        navigate("/");
        setTimeout(() => scrollToSection(item.target), 100);
      }
      setMenuOpen(false);
    } else if (item.type === "route") {
      navigate(item.path);
      setMenuOpen(false);
    } else if (item.type === "external") {
      window.open(item.href, "_blank");
      setMenuOpen(false);
    }
  };

  // ===== Detect active section (IntersectionObserver) =====
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("hero"); // default on home

      const sections = ["hero", "work", "about"];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-40% 0px -50% 0px",
          threshold: 0,
        }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    } else if (location.pathname === "/sandbox") {
      setActiveSection("sandbox");
    }
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    { label: "Work", type: "scroll", target: "work" },
    { label: "About", type: "scroll", target: "about" },
    /* { label: "Sandbox", type: "route", path: "/sandbox" }, */
    { label: "Resume", type: "external", href: "/resume.pdf" },
  ];

  const getNavClass = (isActive) =>
    `nav-link text-xs font-mono transition-colors ${
      isActive
        ? "text-accent"
        : "text-grayLight-900 dark:text-grayDark-900 hover:text-accent dark:hover:text-accent"
    }`;

  const getMobileNavClass = (isActive) =>
    `nav-link font-mono transition-colors ${
      isActive
        ? "text-accent"
        : "text-grayLight-900 dark:text-grayDark-100 hover:text-accent dark:hover:text-accent"
    }`;

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
            {/* Logo */}
            <button
              onClick={() => handleNavClick({ type: "scroll", target: "hero" })}
              className={getNavClass(activeSection === "hero")}
            >
              <span className="bracket">[</span>
              jadanguyend
              <span className="bracket">]</span>
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-grayLight-100/50 dark:hover:bg-grayDark-100/50 transition-colors font-mono"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive =
                  item.type === "scroll" && activeSection === item.target;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={getNavClass(isActive)}
                  >
                    <span className="bracket">[</span>
                    {item.label}
                    <span className="bracket">]</span>
                  </button>
                );
              })}

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
                {navItems.map((item) => {
                  const isActive =
                    item.type === "scroll" && activeSection === item.target;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={getMobileNavClass(isActive)}
                    >
                      <span className="bracket">[</span>
                      {item.label}
                      <span className="bracket">]</span>
                    </button>
                  );
                })}

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