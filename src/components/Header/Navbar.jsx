import { Link } from "react-router-dom";

const pages = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Pricing",
  "Contact",
  "Blogs",
];

function Navbar({ active }) {
  return (
    <nav className={`navbar`}>
      {pages.map((page) => (
        <Link
          key={page}
          to={`/${page.toLowerCase() === "home" ? "" : page.toLowerCase()}`}
          className={`${active ? " active" : ""}`}>
          {page}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
