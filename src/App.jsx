import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/Pages/AboutPage";
import Blogs from "./components/Pages/BlogsPage";
import Contact from "./components/Pages/ContactPage";
import Footer from "./components/Pages/FooterPage";
import Pricing from "./components/Pages/PricingPage";
import Projects from "./components/Pages/ProjectsPage";
import Reviews from "./components/Pages/ReviewsPage";
import Services from "./components/Pages/ServicesPage";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/Pages/PageWrapper";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </AnimatePresence>
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
    </>
  );
}

export default App;
