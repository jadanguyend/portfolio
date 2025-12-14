// src/components/Footer.jsx
import footerImage from "../assets/Footer_Image.png";

export default function Footer() {
  // Get last Git commit from Vite environment variable
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <footer className="px-12 md:px-24 mt-20">
      {/* Black container with rounded top corners */}
      <div className="bg-black rounded-t-[16px] pt-10 px-6 md:pt-10 md:px-10 pb-4">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white mb-4">
          <span className="text-sm md:text-base">©2025 Jada Nguyen</span>

          {lastCommit && (
            <span className="text-sm md:text-base mt-2 md:mt-0">
              Last Commit: {lastCommit}
            </span>
          )}
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-4" />

        {/* Bottom Section: Full width image */}
        <div>
          <img
            src={footerImage}
            alt="Footer illustration"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </footer>
  );
}
