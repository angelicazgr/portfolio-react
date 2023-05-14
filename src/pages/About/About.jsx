import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import myPhoto from "../../assets/about-photo.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-root">
      <NavBar />
      <div className="about-container">
        <img src={myPhoto} alt="Angelica" className="about-photo" />
        <div className="profile">
          <div> Junior Web Designer / Developer</div>
          <p className="profile-accent">Who am I?</p>
          <p>
            A curious, high-energy, and self motivated graphic designer and
            coder.
          </p>
          <p>
            I'm passionate about UI/UX design, applications running on web or
            mobile, and coding.
          </p>
          <p>
            Moreover, I have experience working, aligning and organising teams
            in cross-cultural environments and logistic projects.
          </p>
          <p>
            Actively looking for a junior UI/UX designer position while I'm
            constantly growing my skills and competences.
          </p>
        </div>
        <div className="personal-info">
          <p>angelicazografou@gmail.com</p>
          <p>Thessaloniki,Greece</p>
        </div>
        <div>
          <p className="profile-accent">Education</p>
          <p>2021-2024, Graphic design, AKTO college, Greece</p>
          <p>2011-2013, Customs brokerage, Ministry of Economics, Greece</p>
          <p>2006-2011, Software engineering, Tei Serron, Greece</p>
        </div>

        <div>
          <p className="profile-accent">Techincal Skills</p>
          <p>HTML, CSS, Javascript, React, Git, GitHub</p>
          <p>Figma, Adobe Ai, Ps, Id, Ae</p>
        </div>
        <div>
          <p className="profile-accent">Languages</p>
          <p>Greek &#9866; Native </p>
          <p>Turkish &#9866; Proficient </p>
          <p>English &#9866; Intermediate </p>
        </div>
        <div>
          <p className="profile-accent">Soft Skills</p>
          <p>Problem-solving, Time management, Critical thinking,</p>
          <p>Decision-making, Organizational, Adaptability, Creativity,</p>
          Resourcefulness
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
