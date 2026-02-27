function Icons({ activePanel, togglePanel, onShowContactInfo }) {
  return (
    <div className="icons">
      <div
        id="menu-btn"
        class="fas fa-bars"
        aria-expanded={activePanel === "navbar"}
        onClick={() => togglePanel("navbar")}></div>
      <div
        id="info-btn"
        class="fas fa-info-circle"
        aria-expanded={activePanel === "search"}
        onClick={() => onShowContactInfo?.(true)}></div>
      <div
        id="search-btn"
        class="fas fa-search"
        aria-expanded={activePanel === "search"}
        onClick={() => togglePanel("search")}></div>
      <div
        id="login-btn"
        class="fas fa-user"
        aria-expanded={activePanel === "login"}
        onClick={() => togglePanel("login")}></div>
      {/* <FaBars
        id="menu-btn"
        role="button"
        tabIndex={0}
        aria-expanded={activePanel === "navbar"}
        onClick={() => togglePanel("navbar")}
      />
      <FaInfoCircle
        id="info-btn"
        role="button"
        tabIndex={0}
        onClick={() => onShowContactInfo?.(true)}
      />
      <FaSearch
        id="search-btn"
        role="button"
        tabIndex={0}
        aria-expanded={activePanel === "search"}
        onClick={() => togglePanel("search")}
      />
      <FaUser
        id="login-btn"
        role="button"
        tabIndex={0}
        aria-expanded={activePanel === "login"}
        onClick={() => togglePanel("login")}
      /> */}
    </div>
  );
}

export default Icons;
