import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cementBg from "../../assets/images/cement-bg.png";

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ""));
    if (start === end) return;

    const incrementTime = Math.max(Math.floor(duration / end), 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="text-[#00749e]">
      {count}
      {target.replace(/[0-9]/g, "")}
    </span>
  );
}

function AboutPage() {
  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "1500+", label: "Projects Delivered" },
    { value: "790+", label: "Happy Clients" },
    { value: "450+", label: "Dedicated Experts" },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `url(${cementBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}>
      {/* Background Accents */}

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Who <span className="text-[#00455E]">We Are</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          We create exceptional spaces, turning visions into iconic structures that stand the test of time.
        </motion.p>
      </section>

      {/* Video + Text Section */}
      <section className="py-16 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group rounded-2xl overflow-hidden shadow-2xl">
          <video src="/images/about-vid.mp4" loop muted autoPlay className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>
          <div className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-medium">
            Building Dreams, Delivering Trust
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
            We don’t just build projects, <br />
            <span className="text-[#00749e]">we build experiences.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            From concept to creation, we specialize in luxury real estate and commercial design with uncompromising
            quality. Our commitment is to turn your vision into iconic structures.
          </p>
          <Link
            to="/services"
            className="inline-block px-6 py-3 rounded-xl bg-[#00455E] text-white font-semibold shadow-lg hover:bg-[#00749e] transition">
            Explore Our Services
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition">
            <h3 className="text-3xl md:text-5xl font-bold text-[#616161]">
              <AnimatedCounter target={item.value} />
            </h3>
            <p className="mt-3 text-gray-700 font-medium text-base md:text-lg">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-[#00455E] text-white rounded-t-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to start your dream project?</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Get in touch with our team of experts and let’s build something extraordinary together.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-[#616161] font-semibold rounded-xl shadow-lg hover:bg-[#00749e] hover:text-white transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
