import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function LogoContainer() {
  return (
    <section className="logo-container">
      <Swiper className="logo-slider" slidesPerView={3} loop>
        <SwiperSlide>
          <div className="slide">
            <img src="../images/client-logo-1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../images/client-logo-2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../images/client-logo-3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../images/client-logo-4.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../images/client-logo-5.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../images/client-logo-6.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default LogoContainer;
