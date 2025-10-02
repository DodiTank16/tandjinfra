import React from "react";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Accent */}
      <div className="absolute top-0 -left-16 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 -right-16 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Heading */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Contact <span className="text-indigo-600">Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Have a project in mind or any questions? Reach out to us and we’ll get
          back to you promptly.
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 active:scale-95">
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}

export default ContactPage;
