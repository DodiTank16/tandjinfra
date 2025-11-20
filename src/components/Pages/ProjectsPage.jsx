import React from "react";
import { motion } from "framer-motion";

function ProjectsPage() {
  const projects = [
    {
      img: "../images/project-1.jpg",
      title: "Dream Home",
      desc: "Construction, Design",
    },
    {
      img: "../images/project-2.jpg",
      title: "Luxury Villa",
      desc: "Architecture, Interior",
    },
    {
      img: "../images/project-3.jpg",
      title: "Modern Office",
      desc: "Commercial, Renovation",
    },
    {
      img: "../images/project-4.jpg",
      title: "Urban Towers",
      desc: "Skyscraper, Design",
    },
    {
      img: "../images/project-5.jpg",
      title: "Eco House",
      desc: "Sustainable, Architecture",
    },
    {
      img: "../images/project-6.jpg",
      title: "Resort Living",
      desc: "Hospitality, Design",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Heading */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Our <span className="text-indigo-600">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Explore our portfolio of exceptional projects that demonstrate our
          expertise in construction, architecture, and design.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.img}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl shadow-lg overflow-hidden h-72 flex items-center justify-center cursor-pointer">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-3xl md:text-4xl font-semibold">
                {project.title}
              </h3>
              <p className="text-md mt-2">{project.desc}</p>
              <motion.div
                className="mt-4 text-2xl"
                whileHover={{ rotate: 90, scale: 1.2 }}>
                +
              </motion.div>
            </div>
          </a>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-indigo-600 text-white rounded-t-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Inspired by Our Work?
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your project and see how we can bring your
          vision to life.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition">
          Get in Touch
        </a>
      </section>
    </div>
  );
}

export default ProjectsPage;
