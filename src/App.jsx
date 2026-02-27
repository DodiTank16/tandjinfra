import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/Pages/AboutPage";
import Blogs from "./components/Pages/BlogsPage";
import Contact from "./components/Pages/ContactPage";
import Footer from "./components/Pages/FooterPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import PageWrapper from "./components/Pages/PageWrapper";
import Pricing from "./components/Pages/PricingPage";
import Products from "./components/Pages/ProductsPage";
import Projects from "./components/Pages/ProjectsPage";
import Reviews from "./components/Pages/ReviewsPage";
import Services from "./components/Pages/ServicesPage";

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
          <Route
            path="/products"
            element={
              <PageWrapper>
                <Products />
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
          <Route path="/services" element={<Services />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
