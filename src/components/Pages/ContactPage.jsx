import React from "react";
import { motion } from "framer-motion";
import cementBg from "../../assets/images/cement-bg.png";

function ContactPage() {
  return (
    <div
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `url(${cementBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}>
      {/* Heading */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Contact <span className="text-[#00455E]">Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Have a project in mind or any questions? Reach out to us and we’ll get back to you promptly.
        </motion.p>
      </section>

      {/* Map + Form */}
      <section className="px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Map */}
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.967674025725!2d72.57136261536367!3d23.02250518494809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f6f6f0e7c3%3A0x7b7f9a30e5f5a99!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696235580000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="flex-1 min-h-[400px] rounded-xl shadow-lg border-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}></motion.iframe>

        {/* Form */}
        <motion.form
          className="flex-1 bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Get in Touch</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00749e] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00749e] transition"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00749e] transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00749e] transition"></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[#00455E] text-white font-semibold rounded-lg shadow-lg hover:bg-[#00749e] transition transform hover:scale-105 active:scale-95">
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}

export default ContactPage;
