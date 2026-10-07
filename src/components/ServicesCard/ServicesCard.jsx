import React, { useState } from "react";
import "./ServicesCard.css";


import {
  FaStethoscope,
  FaTooth,
  FaAllergies,
  FaChild,
  FaWalking,
  FaMicroscope,
} from "react-icons/fa";
import { Link } from "react-router";

const ServicesCard = [
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

const Services = () => {
  // Toggle state: default false rakha hai taaki shuru me 3 cards hi dikhein
  const [showAll, setShowAll] = useState(false);

  // Agar showAll false hai toh sirf pehle 3 cards dikhenge
  const visibleServices = showAll ? ServicesCard : ServicesCard.slice(0, 3);

  return (
    <div className="services-page">

      {/* Services Section */}
      <section className="services-section">

        <div className="section-heading">
          <h2>Our Services</h2>
          <p>
            From routine checkups to specialized treatments, our team
            is here to take care of all your healthcare needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
     
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

             

            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        <div className="view-more-container">
          <Link to="/services" className="view-services">  View All Services →</Link>
        </div>

      </section>

    </div>
  );
};

export default Services;