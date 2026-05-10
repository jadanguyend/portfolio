import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-grayLight-10 dark:bg-grayDark-10 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center"
      >
        {/* LABEL */}
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-grayLight-400 dark:text-grayDark-400">
          404 — Page Not Found
        </p>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl leading-tight text-grayLight-900 dark:text-grayDark-900 mb-6">
          Looks like this page wandered off.
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base md:text-lg leading-relaxed text-grayLight-600 dark:text-grayDark-600 mb-10">
          The link may be outdated, moved, or never existed in the first place.
          Let’s get you back to the portfolio.
        </p>

        {/* BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white hover:opacity-90 transition-opacity"
        >
          <FiArrowLeft />
          Back Home
        </Link>
      </motion.div>
    </div>
  );
}