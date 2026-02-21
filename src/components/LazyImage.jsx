import { useState } from "react";
import { motion } from "framer-motion";

function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Blur Background Placeholder */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover scale-110 blur-xl transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className={`relative w-full h-full object-cover transition duration-700 ${
          loaded ? "scale-100" : "scale-105"
        } ${className}`}
      />
    </div>
  );
}

export default LazyImage;
