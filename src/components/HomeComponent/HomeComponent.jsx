import React from 'react'
import "./HomeComponent.css";
import Doctors from "../../assets/doctor.jpg"
import { useNavigate } from 'react-router';
export const HomeComponent = () => {
  const navigate = useNavigate()
  return (
     <section className="clinic-hero">
          <div className="hero-container">
    
            {/* Left Content */}
            <div className="hero-content">
              <span className="hero-tag">
    
                 <i className="ri-stethoscope-line"></i>
                 Trusted Healthcare
              </span>
             
    
              <h1>
                Your Health,
                <br />
                <span>Our Priority</span>
              </h1>
    
              <p>
                Get quality healthcare from experienced doctors in a
                comfortable and caring environment. Your health and
                well-being are always our first priority.
              </p>
    
              <div className="hero-buttons">
                <button onClick={()=>navigate("/appointment")} className="primary-btn">
                  Book Appointment
                </button>
    
                <button onClick={() => navigate("/services")} className="secondary-btn">
                  Our Services
                </button>
              </div>
    
              <div className="clinic-info">
                <div>
                  <strong>10+</strong>
                  <span>Years Experience</span>
                </div>
    
                <div>
                  <strong>5K+</strong>
                  <span>Happy Patients</span>
                </div>
    
                <div>
                  <strong>20+</strong>
                  <span>Expert Doctors</span>
                </div>
              </div>
            </div>
    
            {/* Right Image */}
            <div className="hero-image">
              <div className="image-card">
                <img
                  src={Doctors}
                  alt="Doctor"
                />
              </div>
    
              <div className="doctor-card">
                <div className="doctor-icon">👨‍⚕️</div>
    
                <div>
                  <strong>Expert Doctors</strong>
                  <p>Available for you</p>
                </div>
              </div>
            </div>
    
          </div>
        </section>
  )
}

export default HomeComponent
