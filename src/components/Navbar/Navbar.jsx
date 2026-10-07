import { useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <img className="logo" src={logo} alt="" />
            </div>
            <div>
              <h2>CarePlus</h2>
              <span>Clinic</span>
            </div>

         
        </Link>

        {/* Desktop / Mobile Menu */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/doctors" onClick={closeMenu}>
              Doctors
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          {/* Appointment button inside mobile menu */}
          <li className="mobile-appointment">
            <Link
              to="/appointment"
              className="appointment-btn"
              onClick={closeMenu}
            >
              Book Appointment
            </Link>
          </li>

        </ul>

       
        <Link to="/appointment" className="appointment-btn desktop-appointment">
          Book Appointment
        </Link>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          // aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;