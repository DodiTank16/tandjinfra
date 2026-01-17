import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import About from "./HomeComponents/About";
import Blogs from "./HomeComponents/Blogs";
import Contact from "./HomeComponents/Contact";
import Pricing from "./HomeComponents/Pricing";
import Projects from "./HomeComponents/Projects";
import Services from "./HomeComponents/Services";

function Home() {
  const slides = [
    {
      title: "We Provide the Best Service",
      desc: "Your one-stop design-build partner. Delivering world-class luxury real estate, design, and construction with unmatched reliability.",
      img: "/images/home-slide-1.jpg",
    },
    {
      title: "Making Dreams Come to Life",
      desc: "From luxury homes to corporate spaces, we craft experiences that redefine innovation, trust, and elegance.",
      img: "/images/home-slide-2.jpg",
    },
    {
      title: "From Concept to Creation",
      desc: "We bring visionary concepts into timeless structures. Trusted by enterprise clients for precision and excellence.",
      img: "/images/home-slide-3.jpg",
    },
  ];
  return (
    <>
      <div className="relative w-full h-screen" id="home">
        <Swiper
          className="w-full h-full"
          speed={99999}
          // loop
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}>
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <section
                className="relative flex items-center justify-center h-screen bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.img})` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 text-center max-w-2xl px-6">
                  <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">{slide.title}</h3>
                  <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">{slide.desc}</p>
                  <Link
                    to="/about"
                    className="btn inline-block mt-8 px-8 py-3 rounded-lg text-white font-medium shadow-lg bg-[#00455E] hover:bg-[#00749e] transition">
                    Get Started
                  </Link>
                </motion.div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Sections */}
      <About />
      <Services />
      <Projects />
      {/* <Pricing /> */}
      <Contact />
      <Blogs />
    </>
  );
}

export default Home;
