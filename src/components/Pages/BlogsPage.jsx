import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      img: "../images/blog-1.jpg",
      title: "Dream Homes Blog",
      desc: "A complete design & build experience with luxury and elegance.",
      category: "Architecture",
    },
    {
      id: 2,
      img: "../images/blog-2.jpg",
      title: "Modern Living Spaces",
      desc: "Smart architecture that blends comfort with functionality.",
      category: "Interior Design",
    },
    {
      id: 3,
      img: "../images/blog-3.jpg",
      title: "Sustainable Designs",
      desc: "Eco-friendly construction methods for a better tomorrow.",
      category: "Sustainability",
    },
    {
      id: 4,
      img: "../images/blog-4.jpg",
      title: "Smart Homes",
      desc: "Technology-driven designs that redefine modern living.",
      category: "Technology",
    },
    {
      id: 5,
      img: "../images/blog-5.jpg",
      title: "Interior Trends",
      desc: "Minimalist, stylish, and future-ready interiors for all.",
      category: "Interior Design",
    },
    {
      id: 6,
      img: "../images/blog-6.jpg",
      title: "Luxury Villas",
      desc: "Custom-built homes that embody grandeur and elegance.",
      category: "Luxury",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Architecture",
    "Interior Design",
    "Sustainability",
    "Technology",
    "Luxury",
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Blog Insights
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore expert articles, latest trends, and design inspirations to
          elevate your living spaces.
        </p>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}>
              <motion.div className="overflow-hidden">
                <motion.img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-blue-600 font-medium text-sm mb-2">
                  {blog.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {blog.desc}
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Blogs Slider */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 uppercase tracking-wide">
          Featured Blogs
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {blogPosts.slice(0, 5).map((blog, index) => (
            <SwiperSlide key={blog.id}>
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}>
                <motion.div className="overflow-hidden">
                  <motion.img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {blog.desc}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Our Insights
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to get the latest blogs, tips, and design
          inspirations directly in your inbox.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-800 flex-1"
          />
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

export default BlogsPage;
