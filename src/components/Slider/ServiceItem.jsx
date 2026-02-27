import { motion } from "framer-motion";
import ServiceSlider from "./ServiceSlider";
import { Link } from "react-router-dom";

export default function ServiceItem({ service, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className={`${isReverse ? "md:order-2" : ""}`}>
        <ServiceSlider images={service.images} />
      </div>

      {/* Description */}
      <div className={`${isReverse ? "md:order-1" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{service.label}</h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.desc}</p>

        <Link to="/contact" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}
