import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
        Contact <span className="text-[#00455E]">Us</span>
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-12">
        {/* Map */}
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5265149550097!2d72.57136271534248!3d23.022505922487914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f3a28d9f2d%3A0x5f7c1e5db0b5b9bb!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[400px] lg:h-full rounded-xl shadow-md border-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}></motion.iframe>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00455E]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00455E]"
          />
          <input
            type="number"
            placeholder="Your Phone"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00455E]"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00455E]"></textarea>

          <button
            type="submit"
            className="w-full bg-[#00455E] text-white py-3 rounded-lg font-semibold hover:bg-[#00749e] transition duration-300">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
