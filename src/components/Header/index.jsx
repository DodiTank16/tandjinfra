import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCube } from "react-icons/fa";

const pages = [
  "Home",
  "About",
  "Services",
  "Projects",
  // "Pricing",
  "Contact",
  // "Blogs",
];

function Header() {
  const location = useLocation();

  return (
    <header className="header fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-3">
            <FaCube className="text-indigo-600" />
            <span className="font-bold text-gray-800 text-2xl">T&J Infra</span>
          </a>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {pages.map((page, index) => {
            const path =
              page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <motion.div
                key={page}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}>
                <Link
                  to={path}
                  className={`relative font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}>
                  {page}
                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
