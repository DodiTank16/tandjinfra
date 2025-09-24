import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "./App.css";
import "./assets/style.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/HomeComponents/About";
import Blogs from "./components/HomeComponents/Blogs";
import Contact from "./components/HomeComponents/Contact";
import Footer from "./components/HomeComponents/Footer";
import LogoContainer from "./components/HomeComponents/LogoContainer";
import Pricing from "./components/HomeComponents/Pricing";
import Projects from "./components/HomeComponents/Projects";
import Reviews from "./components/HomeComponents/Reviews";
import Services from "./components/HomeComponents/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/logos" element={<LogoContainer />} />
      </Routes>
      <Footer />
      {/* <div className={`contact-info${contactInfoActive ? " active" : ""}`}>
        <div
          id="close-contact-info"
          className="fas fa-times"
          onClick={() => setContactInfoActive(false)}></div>
        <div className="info">
          <i className="fas fa-phone"></i>
          <h3>+123-456-7890</h3>
          <p>example@email.com</p>
        </div>
        <div className="share">
          <Link href="#" className="fab fa-facebook-f"></Link>
          <Link to="#" className="fab fa-twitter"></Link>
          <Link to="#" className="fab fa-instagram"></Link>
          <Link to="#" className="fab fa-linkedin"></Link>
        </div>
      </div> */}
    </Router>
  );
}

export default App;
