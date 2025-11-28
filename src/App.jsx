import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="p-8 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Animated header */}
      <motion.h1
        className="text-5xl font-bold mb-8 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Interactive Portfolio
      </motion.h1>

      {/* Animated button */}
      <motion.button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Click Me
      </motion.button>
    </div>
  );
}
