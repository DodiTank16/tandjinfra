import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home" id="home">
      <Swiper className="home-slider" navigation loop>
        <SwiperSlide>
          <section
            className="slide"
            style={{
              background: "url(../images/home-slide-1.jpg) no-repeat",
            }}>
            <div className="content">
              <h3>we provide best service</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/about" className="btn">
                get started
              </Link>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className="slide"
            style={{
              background: "url(../images/home-slide-2.jpg) no-repeat",
            }}>
            <div className="content">
              <h3>making dream come to life</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.!
              </p>
              <Link to="/about" className="btn">
                get started
              </Link>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className="slide"
            style={{
              background: "url(../images/home-slide-3.jpg) no-repeat",
            }}>
            <div className="content">
              <h3>from concept to creation</h3>
              <p>
                We are a One Stop-Shop Design Build Firm, Complete Range of
                Design and Building Services. Luxury Real Estate, Design and
                Construction In LA. Call Today For A Quote.
              </p>
              <Link to="/about" className="btn">
                get started
              </Link>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Home;
