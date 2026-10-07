import React from "react";
// import "./Home.css";

import HomeComponent  from "../../components/HomeComponent/HomeComponent";
import Doctors from "../../components/Doctors/Doctors";

import Services from "../../components/ServicesCard/ServicesCard";
import WhyChooseUs from "../../components/WhyChooseUS/WhyChooseUs";

const Home = () => {
  return (
  <div>
    <HomeComponent />
    <Services/>
    <Doctors />
    <WhyChooseUs />
    
  </div>
   
  );
};

export default Home;