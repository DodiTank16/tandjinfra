import React from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const projects = [
  {
    img: "../images/project-1.jpg",
    title: "Dream Home",
    category: "Construction, Design",
  },
  {
    img: "../images/project-2.jpg",
    title: "Luxury Villa",
    category: "Architecture, Interior",
  },
  {
    img: "../images/project-3.jpg",
    title: "Office Space",
    category: "Renovation, Design",
  },
  {
    img: "../images/project-4.jpg",
    title: "Urban House",
    category: "Construction, Planning",
  },
  {
    img: "../images/project-5.jpg",
    title: "Resort Design",
    category: "Luxury, Architecture",
  },
  {
    img: "../images/project-6.jpg",
    title: "Modern Apartment",
    category: "Design, Development",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900">
          Our <span className="text-[#00455E]">Projects</span>
        </motion.h1>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.img}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
              {/* Image */}
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#00455E] bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.category}</p>
                <FiPlus className="text-3xl mt-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
