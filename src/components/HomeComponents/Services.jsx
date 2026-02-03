import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    img: "../images/service-1.png",
    title: "Building Construction",
    desc: "Construction is an ancient human activity. It began with the functional need for a controlled environment to moderate the effects of climate.",
  },
  {
    img: "../images/service-2.png",
    title: "House Renovation",
    desc: "Living Room, Bathroom, Full Home, Kitchen, Tiling & Fabrication Work – our renovation services cover it all.",
  },
  {
    img: "../images/service-3.png",
    title: "Architecture Design",
    desc: "From luxurious vacation homes to stunning retreats, we deliver best-in-class architecture & interior designs.",
  },
  {
    img: "../images/service-4.png",
    title: "Material Supply",
    desc: "We supply concrete, steel, wood, masonry & stone ensuring durability and quality for every construction.",
  },
  {
    img: "../images/service-5.png",
    title: "Construction Consultant",
    desc: "Expert consultancy provided by our professionals to plan, monitor & deliver successful projects.",
  },
  {
    img: "../images/service-6.png",
    title: "Interior Design",
    desc: "Blending art & science to craft functional, elegant interiors that enhance your lifestyle.",
  },
  {
    img: "../images/service-7.png",
    title: "Building Maintenance",
    desc: "Comprehensive maintenance services to sustain building quality, safety, and long-term value.",
  },
  {
    img: "../images/service-8.png",
    title: "Building Renovation",
    desc: "Transforming existing spaces with smart renovation solutions to bring them back to life.",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900">
          Our <span className="text-[#00455E]">Services</span>
        </motion.h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition">
              <img src={service.img} alt={service.title} className="mx-auto mb-4 w-20 h-20 object-contain" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
