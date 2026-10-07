
import React from "react";
import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Clinic Info */}
        <div className="footer-column footer-about">

          <Link to="/" className="footer-logo">
            Medi<span>Care</span>
          </Link>

          <p>
            Your health is our priority. We provide trusted,
            affordable and quality healthcare for you and your family.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
            <a href="#" aria-label="Instagram"><i class="ri-instagram-line"></i></a>
            <a href="#" aria-label="Twitter"><i class="ri-twitter-x-line"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a>
          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/doctors">Doctors</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <ul>
            <li>General Consultation</li>
            <li>Cardiology</li>
            <li>Dental Care</li>
            <li>Child Care</li>
            <li>Laboratory Tests</li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <span><i class="ri-map-pin-line"></i></span>
            <p>
              123 Health Street,
              <br />
              Indore, Madhya Pradesh
            </p>
          </div>

          <div className="contact-item">
            <span><i class="ri-phone-line"></i></span>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-item">
            <span><i class="ri-mail-line"></i></span>
            <p>info@medicare.com</p>
          </div>

          <div className="contact-item">
            <span><i class="ri-time-line"></i></span>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div>
          © 2026 MediCare Clinic. All Rights Reserved.
        </div>

        <div className="footer-bottom-links">
         <div>
           <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
         </div>
        <div>
            <span>~created by </span>
          <span> Elvrix TechSolution</span>
        </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;

