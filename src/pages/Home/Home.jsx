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
        <h2 className="home-project-header">Projects</h2>
        <div className="home-project-grid">
          <Link to="/photobook">
            <div className="home-project-item">
              <div className="home-project-item-title">Photobook</div>
              <div className="home-project-item-name">529</div>
              <div className="home-project-item-cta">click to view</div>
            </div>
          </Link>
          <Link to="/capio">
            <div className="home-project-item">
              <div className="home-project-item-title">Brand Indentity</div>
              <div className="home-project-item-name">Capio</div>
              <div className="home-project-item-cta">click to view</div>
            </div>
          </Link>
          <Link to="/quotes">
            <div className="home-project-item">
              <div className="home-project-item-title">Posters</div>
              <div className="home-project-item-name">Quotes</div>
              <div className="home-project-item-cta">click to view</div>
            </div>
          </Link>
          <Link to="/motion">
            <div className="home-project-item">
              <div className="home-project-item-title">Motion design</div>
              <div className="home-project-item-name">The 25th letter</div>
              <div className="home-project-item-cta">click to view</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
