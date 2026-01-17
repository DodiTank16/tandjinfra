import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          About <span className="text-[#00455E]">Us</span>
        </h1>

        {/* Video + Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Video Section */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <video src="../images/about-vid.mp4" loop muted autoPlay className="w-full h-full object-cover" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              We deliver the <span className="text-[#00749e]">Best Work</span> you dream of!
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a one-stop design & build firm offering a complete range of luxury real estate, architecture, and
              construction services in LA. Our team is committed to turning your vision into reality with precision and
              excellence.
            </p>
            <Link
              to="/services"
              className="inline-block bg-[#00455E] hover:bg-[#00749e] text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
              Read More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Years of Experience" },
            { number: "1500+", label: "Projects Completed" },
            { number: "790+", label: "Satisfied Clients" },
            { number: "450+", label: "Active Workers" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition">
              <h3 className="text-3xl font-bold text-[#00749e]">{item.number}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
