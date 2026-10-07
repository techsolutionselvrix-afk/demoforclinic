import { useState } from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";


const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");
     console.log("Form Data:", {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* ================= HERO ================= */}

        <section className="contact-hero">
          <div className="contact-hero-content">
            <p className="contact-small-title">Contact Us</p>

            <h1>Get in Touch</h1>

            <p>
              Need to hear from us? Reach out to us for any queries, feedback or
              assistance.
            </p>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}

        <section className="contact-section">
          <div className="contact-details">
            <h2>Our Contact Details</h2>

            {/* PHONE */}

            <div className="contact-info">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>

                <p>+91 98765 43210</p>

                <p>+91 98765 43211</p>
              </div>
            </div>

            {/* EMAIL */}

            <div className="contact-info">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>

                <p>careplusclinic@gmail.com</p>

                <p>info@careplusclinic.com</p>
              </div>
            </div>

            {/* ADDRESS */}

            <div className="contact-info">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Address</h4>

                <p>123 Health Street, Green Park, New Delhi - 110016</p>
              </div>
            </div>

            {/* TIMING */}

            <div className="contact-info">
              <div className="contact-icon">
                <FaClock />
              </div>

              <div>
                <h4>Working Hours</h4>

                <p>Monday - Saturday</p>

                <p>9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}

          <div className="contact-form-container">

      <h2>Send Us a Message</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>


        <button type="submit" className="send-message-btn">
          Send Message
        </button>

      </form>

    </div>
        </section>

        {/* ================= MAP ================= */}

        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28033.214761322546!2d77.33648618840729!3d28.56520269486831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce546331c6435%3A0x6a96d14550c4fd63!2sCare%20Plus%20ambulance%20service!5e0!3m2!1sen!2sin!4v1791366944127!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
