import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { categories } from "../../productsData";
import { ALL_NAV, SERVICES } from "../../utils";

function FullMenu({ onClose }) {
  const location = useLocation();
  const [productsOpen, setProductsOpen] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/60"
      onClick={onClose}>
      {/* SIDE PANEL */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 top-0 h-[100vh] w-full max-w-[460px] bg-gradient-to-b from-[#1c1c1c] via-[#141414] to-[#0b0b0b] text-gray-300 px-5 sm:px-8 md:px-12 py-10 overflow-y-auto no-scrollbar">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-[#00749e] text-[#00749e] flex items-center justify-center hover:bg-[#00455E] hover:text-white transition">
          <FaTimes size={18} />
        </button>

        {/* NAV */}
        <nav className="mt-10 space-y-8 text-[22px] tracking-wide uppercase">
          {/* MAIN LINKS */}
          {ALL_NAV.filter((i) => i.label !== "Products").map((item) => (
            <MenuItem
              key={item.path}
              label={item.label}
              to={item.path}
              active={isActive(item.path)}
              onClick={onClose}
            />
          ))}

          {/* PRODUCTS ACCORDION */}
          <div>
            <button
              onClick={() => {
                setProductsOpen((p) => {
                  const next = !p;
                  if (next) setServicesOpen(false);
                  return next;
                });
              }}
              className="w-full flex items-center justify-between text-left">
              <span className="flex items-center gap-4">
                {productsOpen && <span className="w-6 h-[2px] bg-[#00455E]" />}
                OUR PRODUCTS
              </span>

              <FaChevronDown className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-6 pl-10 space-y-4
                             text-[15px] text-gray-400 normal-case">
                  {categories.map((cat) => (
                    <Link key={cat.id} to={`/products`} onClick={onClose} className="block hover:text-white transition">
                      {cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SERVICES DROPDOWN */}
          {/* SERVICES ACCORDION */}
          <div>
            <button
              onClick={() => {
                setServicesOpen((p) => {
                  const next = !p;
                  if (next) setProductsOpen(false);
                  return next;
                });
              }}
              className="w-full flex items-center justify-between text-left">
              <span className="flex items-center gap-4">
                {servicesOpen && <span className="w-6 h-[2px] bg-[#00455E]" />}
                SERVICES
              </span>

              <FaChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-6 pl-10 space-y-4
                   text-[15px] text-gray-400 normal-case">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={onClose}
                      className="block hover:text-white transition">
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.aside>
    </motion.div>
  );
}

export default FullMenu;

function MenuItem({ label, to, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-4 transition
        ${active ? "text-white" : "text-gray-400 hover:text-white"}
      `}>
      {active && <span className="w-6 h-[2px] bg-[#00455E]" />}
      {label}
    </Link>
  );
}
