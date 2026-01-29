import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Slider({
  children,
  loop = false,
  autoplay = false,
  autoplayDelay = 3000,
  itemsPerScroll = 1,
  gap = 40,
  showArrows = true,
}) {
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const scrollAmount = 320 * itemsPerScroll + gap * itemsPerScroll;

  const scroll = (dir) => {
    if (!trackRef.current) return;

    const el = trackRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;

    let next = dir === "left" ? el.scrollLeft - scrollAmount : el.scrollLeft + scrollAmount;

    if (loop) {
      if (next < 0) next = maxScroll;
      if (next > maxScroll) next = 0;
    }

    el.scrollTo({ left: next, behavior: "smooth" });
  };

  useEffect(() => {
    if (!autoplay) return;

    autoplayRef.current = setInterval(() => {
      scroll("right");
    }, autoplayDelay);

    return () => clearInterval(autoplayRef.current);
  }, [autoplay, autoplayDelay]);

  return (
    <div className="relative">
      {/* LEFT */}
      {showArrows && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow items-center justify-center text-2xl">
          ‹
        </button>
      )}

      {/* TRACK */}
      <div ref={trackRef} className="overflow-hidden">
        <div className="flex" style={{ gap }}>
          {children}
        </div>
      </div>

      {/* RIGHT */}
      {showArrows && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow items-center justify-center text-2xl">
          ›
        </button>
      )}
    </div>
  );
}

export default Slider;

export function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="flex justify-center gap-20 bg-white py-4 shadow-md rounded-2xl max-w-7xl mx-auto">
      {categories.map((cat) => {
        const active = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`relative pb-1 text-sm font-semibold tracking-wide uppercase transition-colors
              ${active ? "text-red-600" : "text-gray-700 hover:text-black"}
            `}>
            {cat.name}

            {active && <motion.span layoutId="active-tab" className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600" />}
          </button>
        );
      })}
    </div>
  );
}
