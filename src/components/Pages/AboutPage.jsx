import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cementBg from "../../assets/images/cement-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Pdf9001 from "../../assets/images/Certificates/T&J INFRA 9001 FINAL ICV.png";
import Pdf45001 from "../../assets/images/Certificates/T&J INFRA 45001 FINAL ICV.png";
import Pdf14001 from "../../assets/images/Certificates/T&J INFRA 14001 FINAL ICV.png";
import TrustSeal from "../../assets/images/Certificates/TrustSeal_certificate.png";
import LazyImage from "../LazyImage";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AboutPage() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      pdf: Pdf9001,
    },
    {
      name: "ISO 45001:2018",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      pdf: Pdf45001,
    },
    {
      name: "ISO 14001:2015",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      pdf: Pdf14001,
    },
    {
      name: "Trust Seal Certified",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      pdf: TrustSeal,
    },
  ];
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${cementBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}>
      {/* Floating Accent */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00749e]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-[#00455E]/10 rounded-full blur-3xl animate-pulse"></div>

      {/* HERO */}
      <section className="py-28 px-6 text-center relative">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Engineering <span className="text-[#00455E]">Strength</span> <br />
          Building <span className="text-[#00749e]">Trust</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          ISO certified precast and infrastructure specialists delivering structurally engineered RCC prestressed
          systems with uncompromising quality and performance.
        </motion.p>
      </section>

      {/* COMPANY OVERVIEW WITH GLASS EFFECT */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/40 hover:shadow-3xl transition">
          <h2 className="text-3xl font-bold text-[#00455E] mb-6">Company Overview</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Established in 2018, <span className="font-semibold text-[#00455E]">T & J Infra</span>
            is an ISO 9001, ISO 45001, and ISO 14001 certified organization specializing in the manufacture and supply
            of RCC prestressed precast systems and structural infrastructure solutions. Over the years, we have built a
            reputation for engineering precision, operational discipline, and safe project execution across diverse
            infrastructure environments.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our manufacturing processes are aligned with applicable Indian Standards including{" "}
            <span className="font-medium">IS 456, IS 1343, and IS 1786</span>, ensuring structural integrity,
            dimensional accuracy, load efficiency, and long-term durability. Every component is produced under strict
            QA/QC supervision, supported by systematic planning, documentation, and inspection protocols.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We offer a comprehensive product portfolio including prestressed precast boundary walls, U-drains, manholes,
            structural precast members, kerb stones, route markers, and customized engineered solutions designed
            strictly as per approved drawings and technical specifications.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Beyond precast manufacturing, T & J Infra provides integrated fabrication, structural steel works, PEB
            structures, industrial sheds, signage systems, and erection services — delivering end-to-end infrastructure
            support with a commitment to quality, safety, and on-time project completion.
          </p>
        </motion.div>
      </section>

      {/* BUSINESS SEGMENTS INTERACTIVE CARDS */}
      <section className="py-20 px-6 md:px-12 text-center bg-gray-100">
        <h2 className="text-4xl font-bold text-[#00455E] mb-12">Business Segments</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "RCC Precast Manufacturing",
            "Structural Steel Fabrication",
            "Precast & Structural Installation",
            "Pipeline & Infrastructure",
            "Solar & Electrical Projects",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:bg-[#00455E] hover:text-white transition duration-500 cursor-pointer">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE WITH ANIMATED LINE */}
      <section className="py-24 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-[#00455E] mb-16">Our Growth Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-6 top-0 w-1 bg-[#00749e]"></motion.div>

          <div className="space-y-12 pl-16">
            {[
              "2018 – Company Established",
              "2019 – Expanded Fabrication Services",
              "2021 – Achieved ISO Certifications",
              "2023 – Multi-State Expansion",
              "2024 – Strengthened National Presence",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md">
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SLIDER */}
      <section className="py-24 px-6 md:px-12 text-center bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00455E] mb-6">Leading Clients</h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Trusted by government bodies, infrastructure developers and industrial leaders across India.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white mb-2 p-6 rounded-2xl shadow-md hover:shadow-2xl transition flex items-center justify-center h-40">
                <img
                  src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
                  alt="Client Logo"
                  className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 px-6 md:px-12 text-center bg-white">
        <h2 className="text-4xl font-bold text-[#00455E] mb-12">Certifications</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {certifications.map((cert, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-6 rounded-3xl shadow-lg w-80 transition">
              <LazyImage src={cert.pdf} alt={cert.name} className="rounded-xl h-48 mb-4" />

              <p className="font-semibold text-gray-800 mb-3">{cert.name}</p>

              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#00455E] text-white rounded-xl text-sm hover:bg-[#00749e] transition">
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center bg-gradient-to-r from-[#00455E] to-[#00749e] text-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6">
          Let's Build the Future Together
        </motion.h2>

        <Link
          to="/contact"
          className="px-10 py-4 bg-white text-[#00455E] font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
