import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="contact__component">
      <Navbar />
      <Hero />

      <div className="contact__section">
        <div className="contact__form">
          <h5>Send us a message</h5>
          <div className="form__group">
            <div className="form__area">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form__area">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form__area">
              <label htmlFor="message">Your Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
            </div>
            <div className="form__area">
              <button className="casual__button">Submit</button>
            </div>
          </div>
        </div>
        <div className="contact__info">
          <h5>Our Contact Information</h5>
          <p>Opposite Mile 1 Bus Stop, Uratta, Owerri North LGA, Imo State</p>
          <p>08088070117</p>
          <p>08035700455</p>
          <a href="mailto:info@mcbrightstars.com">info@mcbrightstars.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
