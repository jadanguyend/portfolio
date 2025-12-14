// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white">
        {/* Nav Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-6 flex justify-between items-center">
          {/* Left: Home */}
          <Link
            to="/"
            className="font-satoshi font-medium text-sm uppercase tracking-wide text-black hover:text-[#183ED8] transition-colors"
          >
            Home
          </Link>

          {/* Right: Nav Items */}
          <nav className="flex items-center gap-8">
            <Link
              to="/work"
              className="font-satoshi font-medium text-sm uppercase tracking-wide text-black hover:text-[#183ED8] transition-colors"
            >
              Work
            </Link>

            <Link
              to="/play"
              className="font-satoshi font-medium text-sm uppercase tracking-wide text-black hover:text-[#183ED8] transition-colors"
            >
              Play
            </Link>

            <Link
              to="/about"
              className="font-satoshi font-medium text-sm uppercase tracking-wide text-black hover:text-[#183ED8] transition-colors"
            >
              About
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-satoshi font-medium text-sm uppercase tracking-wide text-black hover:text-[#183ED8] transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>

        {/* Accessibility Divider */}
        <div className="h-px w-full bg-[#f2f2f2]" />
      </header>

      {/* Spacer to match navbar height */}
      <div className="h-16 md:h-12" />
    </>
  );
}
