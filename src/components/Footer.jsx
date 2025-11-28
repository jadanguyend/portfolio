// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="px-12 md:px-24 mt-20">
      {/* Black container with rounded top corners */}
      <div className="bg-black rounded-t-[16px] pt-10 px-6 md:pt-10 md:px-10 pb-4"> 
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white mb-4">
          <span className="text-sm md:text-base">©2025 Jada Nguyen</span>
          <span className="text-sm md:text-base mt-2 md:mt-0">
            Last Updated: 27.11.2025
          </span>
        </div>

        {/* Horizontal separator */}
        <hr className="border-gray-600 mb-4" />

        {/* Bottom Section: Full width image */}
        <div>
          <img
            src="/Footer_Image.png"
            alt="Footer illustration"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </footer>
  );
}
