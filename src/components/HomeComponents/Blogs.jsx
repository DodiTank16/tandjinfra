import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      img: "../images/blog-1.jpg",
      title: "Dream Homes Blog",
      desc: "A complete design & build experience with luxury and elegance.",
    },
    {
      id: 2,
      img: "../images/blog-2.jpg",
      title: "Modern Living Spaces",
      desc: "Smart architecture that blends comfort with functionality.",
    },
    {
      id: 3,
      img: "../images/blog-3.jpg",
      title: "Sustainable Designs",
      desc: "Eco-friendly construction methods for a better tomorrow.",
    },
    {
      id: 4,
      img: "../images/blog-4.jpg",
      title: "Smart Homes",
      desc: "Technology-driven designs that redefine modern living.",
    },
    {
      id: 5,
      img: "../images/blog-5.jpg",
      title: "Interior Trends",
      desc: "Minimalist, stylish, and future-ready interiors for all.",
    },
    {
      id: 6,
      img: "../images/blog-6.jpg",
      title: "Luxury Villas",
      desc: "Custom-built homes that embody grandeur and elegance.",
    },
  ];

  return (
    <section className="blogs py-16 px-10 bg-gray-50" id="blogs">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 uppercase tracking-wide">
        Our <span className="text-[#00455E]">Blogs</span>
      </h1>

      <Swiper
        className="blogs-slider"
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
        {blogPosts.map((blog, index) => (
          <SwiperSlide key={blog.id}>
            <motion.div
              className="slide bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }} // ✅ card lift on hover
            >
              {/* Image with zoom effect */}
              <motion.div className="overflow-hidden">
                <motion.img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }} // ✅ image zoom on hover
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Content */}
              <div className="content p-5 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{blog.desc}</p>
                <Link
                  to="/blogs"
                  className="inline-block mt-auto px-4 py-2 bg-[#00455E] text-white text-sm font-medium rounded-lg shadow hover:bg-[#00749e] transition">
                  Read More
                </Link>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Blogs;
