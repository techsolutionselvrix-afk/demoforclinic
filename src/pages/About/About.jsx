import React from 'react'
import "./About.css";
import { FaBullseye, FaEye, FaHeart, FaUserMd } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import aboutclinic from "../../assets/about-clinic.jpg";
import doctorTeam from "../../assets/doctor-team.jpg"




const About = () => {
  return (
    <>
    <Navbar />
      <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="small-title">About Us</p>

          <h1>
            Your Trusted Partner
            <br />
            in Health & Well-being
          </h1>

          <p className="hero-description">
            At CarePlus Clinic, we believe in providing high-quality
            healthcare with compassion, integrity and excellence.
          </p>
        </div>

        <div className="about-hero-image">
          <img
            src={aboutclinic}
            alt="CarePlus Clinic"
          />
        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="who-section">
        <div className="who-content">

          <div className="who-text">
            <h2>Who We Are</h2>

            <p>
              CarePlus Clinic is a multi-speciality healthcare center
              committed to delivering personalized and comprehensive
              medical care for individuals and families.
            </p>

            <p>
              Our team of experienced doctors, modern facilities and
              patient-first approach ensure the best possible treatment
              and support.
            </p>
          </div>

          <div className="who-image">
            <img
              src={doctorTeam}
              alt="Our Doctors"
            />
          </div>

        </div>
      </section>


      {/* ================= MISSION VISION VALUES ================= */}
      <section className="mvv-section">

        <div className="mvv-card">
          <div className="mvv-icon">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            To provide accessible, affordable and quality healthcare
            for all.
          </p>
        </div>


        <div className="mvv-card">
          <div className="mvv-icon">
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            To be a leading healthcare center known for excellence,
            innovation and care.
          </p>
        </div>


        <div className="mvv-card">
          <div className="mvv-icon">
            <FaHeart />
          </div>

          <h3>Our Values</h3>

          <p>
            Compassion | Integrity | Excellence | Teamwork
          </p>
        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="experience-section">

        <h2>Our Experience</h2>

        <div className="experience-container">

          <div className="experience-item">
            <h3>10+</h3>
            <p>Years of Service</p>
          </div>

          <div className="experience-item">
            <h3>5+</h3>
            <p>Speciality Departments</p>
          </div>

          <div className="experience-item">
            <h3>10000+</h3>
            <p>Happy Patients</p>
          </div>

          <div className="experience-item">
            <h3>20+</h3>
            <p>Expert Doctors</p>
          </div>

        </div>

      </section>

    </div>


   <Footer />

    
    </>
  )
}

export default About