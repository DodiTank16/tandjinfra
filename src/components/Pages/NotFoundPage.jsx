import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cementBg from "../../assets/images/cement-bg.png";
import ConstructionSVG from "../../assets/Error404.svg?react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${cementBg})`,
        backgroundRepeat: "repeat",
      }}>
      {/* Floating background accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00749e]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00455E]/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.h1
            className="text-7xl md:text-9xl font-extrabold text-[#00455E] mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}>
            404
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Structure Not Found</h2>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
            The infrastructure you're looking for might be under construction, relocated, or removed. Let's get you back
            on track.
          </p>

          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-[#00455E] text-white rounded-xl hover:bg-[#00749e] transition shadow-lg">
              Go Home
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Go Back
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT INFRASTRUCTURE SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center">
          <img src={ConstructionSVG} alt="Under Construction" className="w-full max-w-sm" />

          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[#00749e]/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
