import React from "react";
import { motion } from "framer-motion";

function ServicesPage() {
  const services = [
    {
      img: "../images/service-1.png",
      title: "Building Construction",
      desc: "Construction is an ancient human activity. It began with the functional need for a controlled environment to moderate climate.",
    },
    {
      img: "../images/service-2.png",
      title: "House Renovation",
      desc: "We provide living room, bathroom, kitchen, and full home renovations with tiling, fabrication, and modern designs.",
    },
    {
      img: "../images/service-3.png",
      title: "Architecture Design",
      desc: "From luxury homes to stunning retreats — discover world-class architecture, craftsmanship, and interior design.",
    },
    {
      img: "../images/service-4.png",
      title: "Material Supply",
      desc: "We supply high-quality concrete, steel, wood, masonry, and stone — trusted by architects and structural engineers.",
    },
    {
      img: "../images/service-5.png",
      title: "Construction Consultant",
      desc: "Professional consultancy by industry experts to optimize your construction projects.",
    },
    {
      img: "../images/service-6.png",
      title: "Interior Design",
      desc: "Transform interiors with a perfect blend of science, art, and design aesthetics.",
    },
    {
      img: "../images/service-7.png",
      title: "Building Maintenance",
      desc: "Maintain and improve your property with our professional building maintenance services.",
    },
    {
      img: "../images/service-8.png",
      title: "Building Renovation",
      desc: "Comprehensive renovation services including tiling, fabrication, and full home transformations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background accents */}

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Our <span className="text-[#616161]">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          We deliver exceptional construction, design, and consultancy services tailored for your dream projects. Explore what we
          can do for you.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img src={service.img} alt={service.title} className="w-20 h-20 mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-base md:text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-[#616161] text-white rounded-t-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Want to start your project with us?</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Contact our team today and let’s bring your vision to life with our professional services.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-[#616161] font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default ServicesPage;
