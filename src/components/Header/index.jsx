import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCube, FaChevronDown } from "react-icons/fa";

const pages = ["Home", "About", "Services", "Projects", "Contact"];

// Clients List
const clients = [
  { id: "adani", name: "Adani" },
  { id: "gsecl", name: "GSECL" },
  { id: "ghv", name: "GHV" },
  { id: "juniper-green-three", name: "Juniper Green Three Pvt. Ltd" },
  { id: "kec-international", name: "KEC International" },
  { id: "prozeal-green-energy-limited", name: "Prozeal Green Energy Limited" },
];

function Header() {
  const location = useLocation();
  const [clientsOpen, setClientsOpen] = useState(false);
  const ref = useRef(null);
  const closeTimeoutRef = useRef(null);

  function openClients() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setClientsOpen(true);
  }

  function scheduleCloseClients(delay = 150) {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setClientsOpen(false);
      closeTimeoutRef.current = null;
    }, delay);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setClientsOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Close dropdown on navigation
  useEffect(() => setClientsOpen(false), [location]);

  return (
    <header className="header fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3">
            <FaCube className="text-indigo-600" />
            <span className="font-bold text-gray-800 text-2xl">T&J Infra</span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Home (first item) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <Link
              to="/"
              className={`relative font-medium ${
                location.pathname === "/"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}>
              Home
              {location.pathname === "/" && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 rounded-full"
                />
              )}
            </Link>
          </motion.div>

          {/* Clients Dropdown */}
          <div
            ref={ref}
            className="relative"
            onMouseEnter={openClients}
            onMouseLeave={() => scheduleCloseClients(150)}>
            {/* trigger button (still toggles on click for mobile) */}
            <button
              onClick={() => setClientsOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={clientsOpen}
              className={`flex items-center gap-2 font-medium ${
                location.pathname.startsWith("/clients")
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}>
              Clients <FaChevronDown className="text-sm" />
            </button>

            {/* Dropdown - KEEP mounted, animate visibility */}
            <motion.ul
              // keep mounted always (no conditional render)
              initial={false}
              animate={
                clientsOpen
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -6, scale: 0.98 }
              }
              transition={{ duration: 0.16 }}
              // while closed still in DOM but hidden; pointerEvents only when open
              style={{ pointerEvents: clientsOpen ? "auto" : "none" }}
              onMouseEnter={openClients} // clear any close timers if user enters panel
              onMouseLeave={() => scheduleCloseClients(120)} // schedule close when leaving panel
              className="absolute -left-20 mt-3 w-56 bg-white rounded-xl shadow-lg border z-40"
              role="menu"
              aria-label="Clients list">
              {clients.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/clients/${c.id}`}
                    role="menuitem"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                    {c.name}
                  </Link>
                </li>
              ))}

              {/* <li className="border-t border-gray-100">
                <Link
                  to="/clients"
                  className="block px-4 py-3 text-sm font-medium text-indigo-600 hover:bg-gray-50">
                  View all clients →
                </Link>
              </li> */}
            </motion.ul>
          </div>

          {/* Render remaining pages */}
          {pages
            .filter((page) => page !== "Home")
            .map((page, index) => {
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
                    className={`relative font-medium ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-600 hover:text-indigo-600"
                    }`}>
                    {page}
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
