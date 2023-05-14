import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import IntroVideo from "../../assets/intro.mp4";
import Video from "../../components/Video/Video";
//import CapioThumbnail from "../../assets/capio-thumbnail.svg";
//import TeaThumbnail from "../../assets/tea-thumbnail.svg";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-root">
      <NavBar />
      <div className="home-video-container" id="top">
        <Video src={IntroVideo} />
      </div>
      <div className="home-project-container" id="projects">
        <div className="home-project-grid">
          <Link to="/photobook">
            <div className="home-project-item">Photobook</div>
          </Link>
          <Link to="/capio">
            <div className="home-project-item">Brand Indentity</div>
          </Link>
          <Link to="/quotes">
            <div className="home-project-item">Posters</div>
          </Link>
          <Link to="/motion">
            <div className="home-project-item">Motion design</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
