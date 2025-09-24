import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"> about us </h1>
      <div className="row">
        <div className="video">
          <video src="../images/about-vid.mp4" loop muted autoPlay></video>
        </div>
        <div className="content">
          <h3>We will provide you the best work which you dreamt for!</h3>
          <p>
            We are a One Stop-Shop Design Build Firm, Complete Range of Design
            and Building Services. Luxury Real Estate, Design and Construction
            In LA. Call Today For A Quote.
          </p>
          <Link to="/services" className="btn">
            read more
          </Link>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <h3>10+</h3>
          <p>years of experience</p>
        </div>
        <div className="box">
          <h3>1500+</h3>
          <p>project completed</p>
        </div>
        <div className="box">
          <h3>790+</h3>
          <p>satiesfied clients</p>
        </div>
        <div className="box">
          <h3>450+</h3>
          <p>active workers</p>
        </div>
      </div>
    </section>
  );
}

export default About;
