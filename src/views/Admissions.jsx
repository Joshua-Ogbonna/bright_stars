import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Admissions = () => {
  return (
    <div className="admissions__container">
      <Navbar />
      <Hero />
      <div class="application__container">
        <h3>Application Process</h3>
        <ul>
          <li>
            Pick a form at Bright Stars International School or click here to
            download the form
          </li>
          <li>Fill the form accurately to avoid making mistakes</li>
          <li>
            Submit the filled form to the School alongside the application form
            fee
          </li>
          <li>
            Keep an eye for a call from the school, on the next steps to follow.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Admissions;
