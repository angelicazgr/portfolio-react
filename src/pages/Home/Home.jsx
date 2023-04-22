import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import IntroVideo from "../../assets/intro.mp4";
//import CapioThumbnail from "../../assets/capio-thumbnail.svg";
//import TeaThumbnail from "../../assets/tea-thumbnail.svg";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-root">
      <NavBar />
      <div className="home-video-container" id="top">
        <video width="auto" height="auto" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-project-container" id="projects">
        <div className="home-project-grid">
          <Link to="/photobook">
            <div className="home-project-item">
              <div className="home-project-title">597</div>
              <div>Photobook</div>
            </div>
          </Link>
          <Link to="/capio">
            <div className="home-project-item">
              <div className="home-project-title">Capio</div>
              <div>Brand Indentity</div>
            </div>
          </Link>
          <Link to="/quotes">
            <div className="home-project-item">
              <div className="home-project-title">Quotes</div>
              <div>Posters</div>
            </div>
          </Link>
          <Link to="/tearoot">
            <div className="home-project-item">
              <div className="home-project-title">Tearoot</div>
              <div>Packaging</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
