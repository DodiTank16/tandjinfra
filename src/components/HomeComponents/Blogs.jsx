import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading"> our blogs </h1>
      <Swiper className="blogs-slider" navigation loop>
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <img src="../images/blog-1.jpg" alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/blogs" className="btn">
                read more
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <img src="../images/blog-2.jpg" alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/blogs" className="btn">
                read more
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <img src="../images/blog-3.jpg" alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/blogs" className="btn">
                read more
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <img src="../images/blog-4.jpg" alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/blogs" className="btn">
                read more
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <img src="../images/blog-5.jpg" alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/blogs" className="btn">
                read more
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="image">
              <img src="../images/blog-6.jpg" alt="" />
            </div>
            <div className="content">
              <h3>blog title goes here</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/blogs" className="btn">
                read more
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Blogs;
