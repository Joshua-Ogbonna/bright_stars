import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="about__component">
      <Navbar />
      <Hero />

      {/* About Section */}
      <div className="director section">
        <h5>From the Director's Desk</h5>
        <p>
          As you enter into our platform, rejoice because your long awaited
          dream of partnering with an institution with industry, know how and
          reliability in conduct, all affairs has become a reality. <br />
          The founder, Dr. Maximus C. Osigwe, a pastor that ministers to God's
          flock daily, author, prolific writing prowess, and divine wisdom in
          directing the affairs of the institution. There are also a lot of unit
          heads. There is an Executive Officer. There is a head teacher for
          Nursery, a head teacher for Primary and a Principal for the Secondary
          School. There are also Deans of Studies, Student Affairs and Heads of
          various Departments.
          <br />
          Our staff strength is high. All our motivated tutorial and technical
          staff are all University graduates. Our non tutorial staff possess
          post secondary certification. We are always ready to deliver academic
          dividends to sincere seekers and learners.
        </p>
      </div>

      {/* Details */}
      <div className="details section">
        <h5>A Word from the Director</h5>
        <p>
          Brightstars Int'l School recognises that every child is unique withc
          creative abilities and competencies who needs to succeed in life's
          endeavour. The school therefore through her programmes make this quest
          a reality. <br />
          The school offers learning and educational opportunities to the
          following:
          <ul>
            <li>Pre-School learners</li>
            <li>Nursery/Kindergarten learners</li>
            <li>Lower and Upper Basic/Junior Secondary School Learners</li>
            <li>Senior Secondary School Learner</li>
            <li>Post Secondary School Leaners</li>
            <li>Offers Educational Services and Publications</li>
          </ul>
          The school offers learning opportunities for children and students
          from different cultures, religion, and nations who satisfy the basic
          requirements for admission. Her operations are embedded in Christian
          principles and discipline. With her operational headquarters at Mile I
          Bus Stop, along MCC/Uratta Road, Owerri, the school is well posited
          with her other extensions. <br />
          A coeducational institution for both boys and girls in operation, she
          strongly instills dignity and discipline in interpersonal relationship
          among the different gender. <br />
          The school motto is <strong>Premier in Excellence</strong>
          <br />
          It is the compass that gives every learner and all stakeholders in our
          institution.
        </p>
      </div>

      {/* Mission */}
      <div className="mission section">
        <h5>Our Mission</h5>
        <p>
          To develop every learner according to innate talents and abilities and
          prepare them through our instruments of instruction to acquire skills
          and good morals and become creative and productive members of society.
          <br />
          Our academic programmes run in sessions made up of three terms except
          in exceptional situations. These are first, September through
          December; second term, January through April; Third term Mid April
          through July.
        </p>
      </div>

      {/* Vision */}
      <div className="vision section">
        <h5>Our Vision</h5>
        <p>
          To operate all levels of education anchored in excellence and prepare
          every learner to developer inherent skills to achieve career goals.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
