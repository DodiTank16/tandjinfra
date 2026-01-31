import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function Slider({ children, loop = false, autoplay = false, autoplayDelay = 3000, gap = 40, showArrows = true }) {
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const getScrollAmount = () => {
    if (!trackRef.current) return 0;
    const firstChild = trackRef.current.firstElementChild;
    if (!firstChild) return 0;
    return firstChild.getBoundingClientRect().width + gap;
  };

  const scroll = (dir) => {
    if (!trackRef.current) return;

    const el = trackRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollAmount = getScrollAmount();

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
          className="absolute -left-4 top-1/2 -translate-y-1/2
                     z-10 w-10 h-10 md:w-12 md:h-12
                     rounded-full bg-white shadow
                     flex items-center justify-center text-xl">
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
          className="absolute -right-4 top-1/2 -translate-y-1/2
                     z-10 w-10 h-10 md:w-12 md:h-12
                     rounded-full bg-white shadow
                     flex items-center justify-center text-xl">
          ›
        </button>
      )}
    </div>
  );
}

export default Slider;

export function CategoryTabs({ categories, activeCategory, onChange }) {
  const [open, setOpen] = useState(false);

  const activeLabel = categories.find((c) => c.id === activeCategory)?.name ?? "Select Category";

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/*------------ MOBILE DROPDOWN ------------*/}
      <div className="md:hidden px-4">
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between
                     bg-white py-4 px-4 rounded-2xl shadow-md
                     text-sm font-semibold tracking-wide uppercase
                     text-[#00455E]">
          {activeLabel}
          <FaChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 bg-white rounded-2xl shadow-lg overflow-hidden">
              {categories.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onChange(cat.id);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3
                      text-xs font-semibold tracking-wide uppercase
                      transition-colors
                      ${active ? "bg-gray-100 text-[#00455E]" : "text-gray-700 hover:bg-gray-50"}
                    `}>
                    {cat.name}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*------------ DESKTOP TABS ------------*/}
      <div className="hidden md:block w-full overflow-x-auto no-scrollbar pb-1">
        <div
          className="
            flex gap-20 bg-white py-4 px-4 shadow-md rounded-2xl
            justify-center
          ">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onChange(cat.id)}
                className={`relative whitespace-nowrap pb-1
                  text-sm font-semibold tracking-wide uppercase
                  transition-colors
                  ${active ? "text-[#00455E]" : "text-gray-700 hover:text-[#00749e]"}
                `}>
                {cat.name}

                {active && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#00455E]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
