import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import myPhoto from "../../assets/about-photo.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-root">
      <NavBar />
      <div className="about-container">
        <img src={myPhoto} alt="Angelica" className="about-photo" />
        <div className="profile">
          <p> Junior Web Designer / Developer</p>
          <p className="profile-accent">&#8680; Who am I? &#8678; </p>
          <p>
            A curious, high-energy, and highly motivated individual, with a
            knowledge of graphic design and coding – with supporting
            certifications available on demand, actively seeking a position as a
            junior UI/UX designer or UI developer to actively get involved with
            a young and dynamic team.
          </p>
        </div>
        <div>
          <p className="profile-accent">Education</p>
          <p>2006-2011, Software engineering, Tei Serron, Greece</p>
          <p>2011-2013, Customs brokerage, Ministry of Economics, Greece</p>
          <p>2021-2024, Graphic design, AKTO college, Greece</p>
        </div>
        <div className="personal-info">
          <p>
            <b className="profile-accent">Email:</b> angelicazografou@gmail.com
          </p>
          <p>
            <b className="profile-accent">Location:</b> Thessaloniki,Greece
          </p>
        </div>
        <div>
          <p className="profile-accent">Skills</p>
          <p>HTML, CSS, Javascript, React, Git, GitHub</p>
          <p>Figma, Adobe Ai, Ps, Id, Ae</p>
          <p>
            Problem-solving, Time management, Critical thinking,
            Decision-making, Organizational, Adaptability, Creativity,
            Resourcefulness
          </p>
        </div>
        <div>
          <p className="profile-accent">Languages</p>
          <p>Greek &#9866; Native </p>
          <p>Turkish &#9866; Proficient </p>
          <p>English &#9866; Intermediate </p>
        </div>
        <div>
          <p className="profile-accent">Work experience</p>
          <p>2014-2020, Freelance customs broker</p>
          <p>
            I worked with more than 25 companies from Greece and abroad as a
            customs representative for import and export procedures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
