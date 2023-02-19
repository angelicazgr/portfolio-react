import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import IntroVideo from "../../assets/intro.mp4";
import CapioThumbnail from "../../assets/capio-thumbnail.svg";
import TeaThumbnail from "../../assets/tea-thumbnail.svg";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <video width="auto" height="auto" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <img src={CapioThumbnail} alt="Logo" className="project-image" />
        <img src={TeaThumbnail} alt="Logo" className="project-image" />
        <img src={CapioThumbnail} alt="Logo" className="project-image" />
        <img src={TeaThumbnail} alt="Logo" className="project-image" />
      </div>
      <div>
        <div>email</div>
        <div>subject</div>
        <div>message</div>
        <div>send</div>
      </div>
      <div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default Home;
