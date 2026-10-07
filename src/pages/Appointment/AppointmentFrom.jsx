import React, { useState } from "react";
import "./AppointmentFrom.css";

import {
  FaPhoneAlt,
  FaCalendarCheck,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

// import appointmentImage from "../../assets/appointment.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const AppointmentFrom = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Appointment request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <>
    <Navbar />
    <div className="appointment-page">
      {/* ================= HERO ================= */}

      <section className="appointment-hero">
        <div className="appointment-hero-content">
          <p>Book Appointment</p>

          <h1>Make an Appointment</h1>

          <span>
            Fill in the form below and we'll get back to you as soon as possible
            to confirm your slot.
          </span>
        </div>

        <div className="appointment-hero-image">
          {/* <img src={appointmentImage} alt="Book an appointment" /> */}
          <img src="https://i.pinimg.com/1200x/30/48/d9/3048d9b6849b63b790a951145defeff5.jpg" alt="" />
        </div>
      </section>

      {/* ================= APPOINTMENT SECTION ================= */}

      <section className="appointment-section">
        {/* LEFT FORM */}

        <div className="appointment-form-box">
          <h2>Appointment Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="appointment-form-grid">
              {/* FULL NAME */}

              <div className="appointment-input">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMAIL */}

              <div className="appointment-input">
                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PHONE */}

              <div className="appointment-input">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* DOCTOR */}

              <div className="appointment-input">
                <label>Select Doctor *</label>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a doctor</option>

                  <option value="Dr. Aditya Sharma">Dr. Aditya Sharma</option>

                  <option value="Dr. Rohan Mehta">Dr. Rohan Mehta</option>

                  <option value="Dr. Neha Verma">Dr. Neha Verma</option>

                  <option value="Dr. Suresh Patil">Dr. Suresh Patil</option>

                  <option value="Dr. Priya Nair">Dr. Priya Nair</option>

                  <option value="Dr. Karan Desai">Dr. Karan Desai</option>
                </select>
              </div>

              {/* DATE */}

              <div className="appointment-input">
                <label>Date *</label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* TIME */}

              <div className="appointment-input">
                <label>Time *</label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time</option>

                  <option value="09:00 AM">09:00 AM</option>

                  <option value="10:00 AM">10:00 AM</option>

                  <option value="11:00 AM">11:00 AM</option>

                  <option value="02:00 PM">02:00 PM</option>

                  <option value="04:00 PM">04:00 PM</option>

                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}

            <div className="appointment-message">
              <label>
                Message <span>(Optional)</span>
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder="Any additional information..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* BUTTON */}

            <button type="submit" className="appointment-submit">
              <FaCalendarCheck />
              Book Appointment
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}

        <div className="appointment-side">
          {/* NEED HELP */}

          <div className="need-help">
            <div className="help-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Need Help?</h3>

              <p>
                Call us at
                <strong> +91 98765 43210 </strong>
                for immediate assistance.
              </p>
            </div>
          </div>

          {/* IMAGE */}

          <div className="appointment-side-image">
            {/* <img src={appointmentImage} alt="CarePlus Clinic" /> */}
          </div>

          {/* FEATURES */}

          <div className="appointment-features">
            <div className="appointment-feature">
              <FaCheckCircle />

              <div>
                <h4>Easy Appointment Booking</h4>
                <p>Book your appointment quickly and easily.</p>
              </div>
            </div>

            <div className="appointment-feature">
              <FaClock />

              <div>
                <h4>Quick Confirmation</h4>
                <p>Get confirmation from our clinic team.</p>
              </div>
            </div>

            <div className="appointment-feature">
              <FaCalendarCheck />

              <div>
                <h4>Flexible Time Slots</h4>
                <p>Choose a convenient time for your visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />

    </>
  );
};

export default AppointmentFrom;
