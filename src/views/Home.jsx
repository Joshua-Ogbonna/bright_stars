import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Home Hero */}
      <div className="home__hero">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-picture-id1338737959?b=1&k=20&m=1338737959&s=170667a&w=0&h=Wj4IEck0-UYQquyOfnORvotapuarDJ4fABPDm-9ITV0="
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Qualitative Education</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHNjaG9vbCUyMGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Education in Sound, Godly Environment</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/teenager-girl-during-homeschooling-picture-id1307257555?b=1&k=20&m=1307257555&s=170667a&w=0&h=SfC1sK8aLtsWp8jUvglBRWSTr09G0LCokKx22HlBgq4="
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Modern Facilities for Enhancing Quality Education</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* School Description */}
      <div className="section__two">
        <div className="section__image">
          <img
            src="https://media.istockphoto.com/photos/shot-of-a-little-girl-relaxing-and-drawing-picture-id1369523463?b=1&k=20&m=1369523463&s=170667a&w=0&h=Na05OrUVzRzPon5WXliG6vTf2FntOW_l4toygy-ac28="
            alt="Child care"
          />
        </div>
        <div className="section__description">
          <h3>Child Care at its Best</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            quaerat modi voluptates placeat veniam ducimus? Blanditiis rem,
            quidem asperiores ipsam temporibus quibusdam? Dignissimos, magni
            qui?
          </p>
          <button className="casual__button">Talk to Us</button>
        </div>
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
