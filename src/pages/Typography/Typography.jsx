import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Video from "../../components/Video/Video";
import TypographyMotion from "../../assets/typography/concept.mp4";
import TypographyLogo from "../../assets/typography/logo.svg";

import "./Typography.css";

const Typography = () => {
  return (
    <div className="typography-root">
      <NavBar />
      <div className="typography-text-container">
        <div className="typography-intro">
          <div className="typography-title">The 25th letter</div>
          <img
            src={TypographyLogo}
            alt="typography logo"
            className="typography-logo"
          />
          <div style={{ fontSize: 22 }} className="typography-title">
            of the Greek alphabet
          </div>
        </div>
        <div className="typography-text">
          <p>
            The 25th letter of the Greek alphabet is hidden somewhere in
            Thessaloniki.
          </p>
          <p>
            His search begins at the archaeological museum of Thessaloniki.
            Various letters of the ancient Greek language are discovered there.
            These letters have either changed form or been removed from the
            modern Greek language.
          </p>
          <p>
            Then the research will continue in various other monuments of the
            city. In this way it will be checked if this letter has been hidden
            in other languages of the city without us realizing it.
          </p>
          <p>Watch this journey in the video below.</p>
        </div>
      </div>
      <Video
        src={TypographyMotion}
        loop={false}
        muted={false}
        autoPlay={false}
        controls={true}
        className="typography-video"
      />
    </div>
  );
};

export default Typography;
