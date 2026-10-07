
import React, { useState } from "react";
import "./Doctors.css";
import doctor1 from "../../assets/doctor1.jpg"
import doctor2 from "../../assets/doctor2.webp"
import doctor3 from "../../assets/doctor3.webp"
import doctor4 from "../../assets/doctor4.webp"
import doctor5 from "../../assets/doctor5.webp"
import doctor6 from "../../assets/doctor6.webp"
import { Link } from "react-router";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Rahul Sharma",
    specialty: "Cardiologist",
    experience: "12+ Years Experience",
  },
  {
    image: doctor2,
    name: "Dr. Priya Patel",
    specialty: "General Physician",
    experience: "10+ Years Experience",
  },
  {
    image: doctor3,
    name: "Dr. Amit Verma",
    specialty: "Neurologist",
    experience: "15+ Years Experience",
  },
  {
    image: doctor4,
    name: "Dr. Neha Singh",
    specialty: "Pediatrician",
    experience: "8+ Years Experience",
  },
  {
    image:doctor5,
    name: "Dr. Anjali Mehta",
    specialty: "Dentist",
    experience: "9+ Years Experience",
  },
  {
    image: doctor6,
    name: "Dr. Rohan Gupta",
    specialty: "Orthopedic",
    experience: "11+ Years Experience",
  },
];

const Doctors = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleDoctors = showAll ? doctors : doctors.slice(0,3)
  return (
    <div className="doctors-page">

     

      {/* Doctors Section */}
      <section className="doctors-section">

        <div className="doctors-heading">
          <h1>OUR Doctors</h1>

          <p>
            Choose from our team of qualified specialists dedicated
            to your health and well-being.
          </p>
        </div>

        <div className="doctors-grid">
          {visibleDoctors.map((doctor, index) => (
            <div className="doctor-profile-card" key={index}>

              <div className="doctor-image">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                />
              </div>

              <div className="doctor-details">

                <h3>{doctor.name}</h3>

                <span className="doctor-specialty">
                  {doctor.specialty}
                </span>

                <p>{doctor.experience}</p>

                <button className="doctor-btn">
                  Book Appointment →
                </button>

              </div>

            </div>
          ))}     
        </div>

        {/* View All / Show Less Button */}
        <div className="view-more-container">
        <Link to="/doctors" className="view-doctors">  View All Doctors →</Link>
        </div>

      </section>

    

    </div>
  );
};

export default Doctors;

