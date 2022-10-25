import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Home Hero */}
      <Hero />

      {/* School Description */}
      <div className="section__two">
        <h5>We Are BRIGHT STARS</h5>
        <p>
          The quest to enhance individual use of inherent potentials maximally
          and preparation of every learner morally, ethically and academically
          to be creative and self reliant in performance of worthy tasks for
          societal upliftment stood as the motivating factor towards the
          establishment of this school. April 2008 specifically was the date
          Brightstars Int'l School was born. The founder operationally referred
          to as the Diector/CEO, Dr. Maximus C. Osigwe heads the entire
          Brightstars Organization.
        </p>
      </div>

      {/* Why choose us */}
      <div className="section__three">
        <h3>Why Choose Us</h3>
        {/* Choice cards */}
        <div className="choice__cards">
          {/* Choice Card */}
          <div className="choice__card shadow bg-body p-3">
            <i className="fa-solid fa-school"></i>
            <h5>Serene Learning Environment</h5>
            <p class="text-justify">
              Located within the heart of a quiet community, we offer
              qualitative educative service in a serene and conducive learning
              environment.
            </p>
          </div>

          {/* Choice Card */}
          <div className="choice__card shadow bg-body p-3">
            <i class="fa-solid fa-chalkboard-user"></i>
            <h5>Highly Qualified Teachers</h5>
            <p class="text-justify">
              Owned by a highly qualified and schooled Ph.D scholar, we tend to
              stand out in our choice of teachers who are qualified and
              competent in their different subject areas.
            </p>
          </div>

          {/* Choice Card */}
          <div className="choice__card shadow bg-body p-3">
            <i class="fa-solid fa-chalkboard"></i>
            <h5>Standard and Quality Equipments</h5>
            <p class="text-justify">
              With the recent trend in quality education, Bright Stars
              International Schools is not left out in the quest for standard
              and quality learning resources.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="fourth__section">
        <h3>Want to Join Us?</h3>
        <button className="casual__button">Take the Leap</button>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
