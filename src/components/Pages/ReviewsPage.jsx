import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Reviews() {
  return (
    <section className="reviews">
      <h1 className="heading"> clients reviews </h1>
      <Swiper className="reviews-slider" navigation loop>
        <SwiperSlide>
          <div className="slide">
            <p>VERY GOOD</p>
            <div className="user">
              <img src="../images/pic-2.png" alt="" />
              <div className="info">
                <h3>SAKSHI MAM</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>GOOD</p>
            <div className="user">
              <img src="../images/pic-1.png" alt="" />
              <div className="info">
                <h3>ROHITH</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>SUPER</p>
            <div className="user">
              <img src="../images/pic-3.png" alt="" />
              <div className="info">
                <h3>MEHUL DOBI</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>NICE</p>
            <div className="user">
              <img src="../images/pic-4.png" alt="" />
              <div className="info">
                <h3>MARTHALA PURNA</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>
              We are a One Stop-Shop Design Build Firm, Complete Range of Design
              and Building Services. Luxury Real Estate, Design and Construction
              In LA. Call Today For A Quote.
            </p>
            <div className="user">
              <img src="../images/pic-5.png" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>
              We are a One Stop-Shop Design Build Firm, Complete Range of Design
              and Building Services. Luxury Real Estate, Design and Construction
              In LA. Call Today For A Quote.
            </p>
            <div className="user">
              <img src="../images/pic-6.png" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Reviews;
