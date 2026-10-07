import React from "react";
import "./Services.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";

import {
  FaStethoscope,
  FaTooth,
  FaAllergies,
  FaChild,
  FaWalking,
  FaMicroscope,
} from "react-icons/fa";

const Services = () => {

  const services = [
    {
      icon: <FaStethoscope />,
      title: "General Consultation",
      description:
        "Personalized care for common health concerns and regular checkups.",
    },

    {
      icon: <FaTooth />,
      title: "Dental Care",
      description:
        "Complete dental care for a healthy and confident smile.",
    },

    {
      icon: <FaAllergies />,
      title: "Dermatology",
      description:
        "Expert care for healthy skin, hair and nails.",
    },

    {
      icon: <FaChild />,
      title: "Pediatrics",
      description:
        "Specialized healthcare for infants, children and teenagers.",
    },

    {
      icon: <FaWalking />,
      title: "Physiotherapy",
      description:
        "Recover, improve and live better with personalized therapy.",
    },

    {
      icon: <FaMicroscope />,
      title: "Diagnostic Services",
      description:
        "Accurate tests and diagnostics for better healthcare decisions.",
    },
  ];

  return (
    <>
    <NavBar />
    
     <div className="services-page">

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <div className="services-hero-content">

          <p className="small-title">
            Our Services
          </p>

          <h1>
            Comprehensive Care
            <br />
            for a Healthier You
          </h1>

          <p>
            We offer a wide range of medical services with the latest
            technology and expert doctors.
          </p>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services-section1">

        <div className="section-heading1">
          <h2>Our Services</h2>

          <p>
            From routine checkups to specialized treatments,
            we are here for you.
          </p>
        </div>


        <div className="services-grid1">

          {services.map((service, index) => (

            <div className="service-card1" key={index}>

              <div className="service-icon1">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <button>
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>

    <Footer />
    
    </>
   
  );
};

export default Services;