// src/components/Footer.jsx
import footerImage from "../assets/Footer_Image.png";

export default function Footer() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <footer className="px-12 md:px-24 pt-10 pb-16 flex flex-col gap-6 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-sm md:text-base">©2025 Jada Nguyen</span>

        {lastCommit && (
          <span className="text-sm md:text-base mt-2 md:mt-0">
            Last Commit: {lastCommit}
          </span>
        )}
      </div>

      {/* Divider */}
      <hr className="border-white/30" />

      {/* Bottom Section: Full width image */}
      <div>
        <img
          src={footerImage}
          alt="Footer illustration"
          className="w-full rounded-md"
        />
      </div>
    </footer>
  );
}
