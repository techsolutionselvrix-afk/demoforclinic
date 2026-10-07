import React from "react";
import "./Doctors.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import doctor1 from "../../assets/doctor1.jpg";
import doctor2 from "../../assets/doctor2.webp";
import doctor3 from "../../assets/doctor3.webp";
import doctor4 from "../../assets/doctor4.webp";
import doctor5 from "../../assets/doctor5.webp";
import doctor6 from "../../assets/doctor6.webp";
// import heropage from "../../assets/doctor-page.png";

const Doctors = () => {

  const doctors = [
    {
      image: doctor1,
      name: "Dr. Aditya Sharma",
      specialty: "General Physician",
      experience: "10+ Years Experience",
    },
    {
      image: doctor2,
      name: "Dr. Rohan Mehta",
      specialty: "Cardiologist",
      experience: "12+ Years Experience",
    },
    {
      image: doctor3,
      name: "Dr. Neha Verma",
      specialty: "Dermatologist",
      experience: "8+ Years Experience",
    },
    {
      image: doctor4,
      name: "Dr. Suresh Patil",
      specialty: "Pediatrician",
      experience: "10+ Years Experience",
    },
    {
      image: doctor5,
      name: "Dr. Priya Nair",
      specialty: "Physiotherapist",
      experience: "7+ Years Experience",
    },
    {
      image: doctor6,
      name: "Dr. Karan Desai",
      specialty: "Diagnostic Specialist",
      experience: "9+ Years Experience",
    },
  ];

  return (
    <>
     <Navbar />
     <div className="doctors-page">

      {/* ================= HERO ================= */}

      <section className="doctors-hero">

        <div className="doctors-hero-content">

          <p className="doctor-small-title">
            Our Doctors
          </p>

          <h1>
            Our Expert Doctors
          </h1>

          <p>
            Meet our team of experienced and dedicated healthcare
            professionals who are always here to help you.
          </p>

        </div>

        {/* <div className="doctors-hero-image">
          <img
            src={ heropage}
            // src="https://i.pinimg.com/1200x/5e/62/41/5e6241226b3a62830df4b27290cf151a.jpg"
            alt="Expert Doctor"
          />
        </div> */}

      </section>


      {/* ================= DOCTORS ================= */}

      <section className="doctors-section1">

        <div className="doctors-heading1">
          <h2>Our Doctors</h2>

          <p>
            Experienced specialists dedicated to your health and well-being.
          </p>
        </div>


        <div className="doctors-grid1">

          {doctors.map((doctor, index) => (

            <div className="doctor-card1" key={index}>

              <div className="doctor-image1">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                />
              </div>

              <div className="doctor-info1">

                <h3>{doctor.name}</h3>

                <p className="doctor-specialty1">
                  {doctor.specialty}
                </p>

                <p className="doctor-experience1">
                  {doctor.experience}
                </p>

                <button className="view-profile-btn1">
                  View Profile
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
     
     <Footer />
    </>
   
  );
};

export default Doctors;