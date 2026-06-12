import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiMail } from "react-icons/fi";

export default function Navbar() {
  // const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (item) => {
    if (item.type === "scroll") {
      if (location.pathname === "/") {
        scrollToSection(item.target);
      } else {
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jadanguyend@gmail.com");
      setCopied(true);
      setMenuOpen(false);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("hero");

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

  /*
  // ===== Load stored theme =====
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

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="
        relative
        h-[14px]
        w-[26px]
        rounded-full
        border
        border-current
        hover:opacity-100
        transition-all
      "
    >
      <span
        className={`
          absolute
          left-[2px]
          top-[2px]
          h-[8px]
          w-[8px]
          rounded-full
          bg-current
          transition-transform
          duration-300
          ${isDark ? "translate-x-[12px]" : "translate-x-0"}
        `}
      />
    </button>
  );
  */

  const navItems = [
    { label: "Work", type: "scroll", target: "work" },
    { label: "About", type: "scroll", target: "about" },
    /* { label: "Sandbox", type: "route", path: "/sandbox" }, */
    {
      label: "Resume",
      type: "external",
      href: "https://drive.google.com/file/d/1SeZzUdKRPaDZOg217T7v1A6QjWU8UbWe/view?usp=sharing",
    },
  ];

  const getNavClass = (isActive) =>
    `nav-link text-xs transition-colors ${
      isActive ? "text-accent" : "text-grayLight-900 hover:text-accent"
    }`;

  const getMobileNavClass = (isActive) =>
    `nav-link transition-colors ${
      isActive ? "text-accent" : "text-grayLight-900 hover:text-accent"
    }`;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="container pointer-events-auto">
        <div
          className="
            relative
            rounded-xl
            bg-grayLight-50/30
            backdrop-blur-md
            border border-grayLight-300/30
            transition-colors
          "
        >
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() =>
                handleNavClick({ type: "scroll", target: "hero" })
              }
              className={getNavClass(activeSection === "hero")}
            >
              jadanguyend
            </button>

            <button
              className="md:hidden p-2 rounded-md hover:bg-grayLight-100/50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

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
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={copyEmail}
                aria-label="Copy email"
                className="
                  relative
                  text-grayLight-900
                  hover:text-accent
                  transition-colors
                "
              >
                <FiMail size={14} />

                <span
                  className={`
                    absolute
                    top-7
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-black
                    px-2
                    py-1
                    text-[10px]
                    text-white
                    transition-all
                    duration-200
                    pointer-events-none
                    ${
                      copied
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-1"
                    }
                  `}
                >
                  Copied!
                </span>
              </button>

              {/* <ThemeToggle /> */}
            </nav>
          </div>

          {menuOpen && (
            <nav
              ref={menuRef}
              className="
                md:hidden
                border-t border-grayLight-300
                bg-grayLight-50/80
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
                      {item.label}
                    </button>
                  );
                })}

                <button
                  onClick={copyEmail}
                  className={getMobileNavClass(false)}
                >
                  {copied ? "Copied!" : "Email"}
                </button>

                {/* <ThemeToggle /> */}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}