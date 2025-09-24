import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Icons from "./Icons";
import SearchForm from "./SearchForm";
import LoginForm from "./LoginForm";

function Header({ onShowContactInfo }) {
  const [activePanel, setActivePanel] = useState(null); // "navbar" | "search" | "login" | null

  useEffect(() => {
    const handleScroll = () => {
      if (activePanel || onShowContactInfo) {
        setActivePanel(null);
        onShowContactInfo?.(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePanel, onShowContactInfo]);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        We<span>Build</span>
      </Link>

      {/* Navbar */}
      <Navbar active={activePanel === "navbar"} />

      {/* Icons */}
      <Icons
        activePanel={activePanel}
        togglePanel={togglePanel}
        onShowContactInfo={onShowContactInfo}
      />

      {/* Forms */}
      <SearchForm active={activePanel === "search"} />
      <LoginForm active={activePanel === "login"} />
    </header>
  );
}

export default Header;
