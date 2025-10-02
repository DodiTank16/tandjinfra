import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="links">
        <Link className="btn" to="/">
          home
        </Link>
        <Link className="btn" to="/about">
          about
        </Link>
        <Link className="btn" to="/services">
          services
        </Link>
        <Link className="btn" to="/projects">
          projects
        </Link>
        <Link className="btn" to="/pricing">
          pricing
        </Link>
        <Link className="btn" to="/contact">
          contact
        </Link>
        <Link className="btn" to="/blogs">
          blogs
        </Link>
      </div>
      <div className="credit">
        created by <span>Dodi Tank</span> | all rights reserved!{" "}
      </div>
    </section>
  );
}

export default Footer;
