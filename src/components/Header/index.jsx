import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaCube, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import cementBg from "../../assets/images/cement-bg.png";
import FullMenu from "./FullMenu";
import ProductsDropdown from "./ProductsDropdown";

function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setProductsOpen(false);
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-gray-200 z-50"
      style={{
        backgroundImage: `url(${cementBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}>
      <div className="px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <FaCube className="text-[#616161]" />
          <span className="font-bold text-gray-800 text-2xl">T&J Infra</span>
        </Link>

        {/* DESKTOP NAV (Products + Contact only) */}
        <nav className="hidden md:flex items-center gap-10">
          {/* PRODUCTS DROPDOWN */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}>
            <Link
              to="/products"
              aria-expanded={productsOpen}
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-[#616161]">
              Products <FaChevronDown className="text-sm" />
            </Link>

            <AnimatePresence>{productsOpen && <ProductsDropdown />}</AnimatePresence>
          </div>

          {/* CONTACT */}
          <Link to="/contact" className="font-medium text-gray-700 hover:text-[#616161]">
            Contact Us
          </Link>
        </nav>

        {/* BURGER (Desktop + Mobile) */}
        <button className="text-2xl text-gray-700" onClick={() => setMenuOpen((p) => !p)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* FULL MENU */}
      <AnimatePresence>{menuOpen && <FullMenu onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </header>
  );
}

export default Header;
