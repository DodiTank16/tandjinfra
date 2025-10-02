import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCube,
} from "react-icons/fa";

function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 !pt-16 !pb-2 relative overflow-hidden">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto !px-6 !lg:px-12 flex flex-col md:flex-row justify-between gap-12 w-full">
        {/* Logo + About */}
        <div className="flex-4">
          <a
            href="/"
            className="flex items-center gap-10 text-2xl md:text-3xl lg:text-5xl !mb-5">
            <FaCube className="text-indigo-600" />
            <span className="font-bold text-white">T&J Infra</span>
          </a>

          {/* <h2 className="text-6xl font-bold text-white !mb-4 ">
            T&J Infra Pvt. Ltd.
          </h2> */}
          <p className="text-gray-400 leading-relaxed max-w-4xl">
            We deliver excellence in design and development, turning ideas into
            powerful digital experiences trusted by enterprises worldwide.
          </p>
        </div>

        {/* Links */}
        <div className="flex-3">
          <h3 className="text-2xl font-semibold text-white !mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {links.map((link, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}>
                <Link
                  to={link.path}
                  className="hover:text-indigo-400 transition">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div className="flex-2">
          {/* <div>
            <h3 className="text-2xl font-semibold text-white !mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}>
                  <Link
                    to={link.path}
                    className="hover:text-indigo-400 transition">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div> */}
          <div>
            <h3 className="text-2xl font-semibold text-white !mb-4">
              Stay Connected
            </h3>
            {/* <form className="flex gap-2 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition">
              Join
            </button>
          </form> */}
            <div className="flex gap-5">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition">
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="!mt-12 border-t border-gray-700 !pt-6 text-center text-gray-500 text-md">
        © {new Date().getFullYear()} T&J Infra. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;
